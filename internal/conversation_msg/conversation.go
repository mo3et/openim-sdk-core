// Copyright © 2023 OpenIM SDK. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package conversation_msg

import (
	"context"
	"errors"
	"sort"
	"sync"
	"time"

	"github.com/openimsdk/openim-sdk-core/v3/proto/go/common"

	conversationpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/conversation"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/message"
	sharedpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
	"github.com/openimsdk/tools/utils/datautil"

	"golang.org/x/sync/errgroup"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/api"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/constant"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/utils"
	"github.com/openimsdk/tools/log"

	"github.com/openimsdk/protocol/sdkws"

	pbConversation "github.com/openimsdk/protocol/conversation"
)

func (c *Conversation) setConversation(ctx context.Context, apiReq *pbConversation.SetConversationsReq, localConversation *model_struct.LocalConversation) error {
	apiReq.Conversation.ConversationID = localConversation.ConversationID
	apiReq.Conversation.ConversationType = localConversation.ConversationType
	apiReq.Conversation.UserID = localConversation.UserID
	apiReq.Conversation.GroupID = localConversation.GroupID
	apiReq.UserIDs = []string{c.loginUserID}

	return api.SetConversations.Execute(ctx, apiReq)
}

func (c *Conversation) getHistoryMessageList(ctx context.Context, req *sdkpb.GetHistoryMessageListReq) (*sdkpb.GetHistoryMessageListResp, error) {
	t := time.Now()
	var messageListCallback sdkpb.GetHistoryMessageListResp
	var conversationID string
	var startTime int64
	var err error
	var messageList MsgList
	conversationID = req.ConversationID
	if len(req.StartClientMsgID) > 0 {
		m, err := c.db.GetMessage(ctx, conversationID, req.StartClientMsgID)
		if err != nil {
			return nil, err
		}
		startTime = m.SendTime
	} else {
		// Clear both maps when the user enters the conversation
		c.messagePullForwardEndSeqMap.Delete(conversationID)
		c.messagePullReverseEndSeqMap.Delete(conversationID)
	}
	log.ZDebug(ctx, "Assembly conversation parameters", "cost time", time.Since(t), "conversationID",
		conversationID, "startTime:", startTime, "count:", req.Count, "startTime", startTime)
	list, err := c.fetchMessagesWithGapCheck(ctx, conversationID, int(req.Count), startTime, req.IsReverse, &messageListCallback)
	if err != nil {
		return nil, err
	}
	log.ZDebug(ctx, "pull message", "pull cost time", time.Since(t).Milliseconds())
	t = time.Now()

	messageList = c.LocalChatLog2IMMessage(list)
	log.ZDebug(ctx, "message convert and unmarshal", "unmarshal cost time", time.Since(t))
	t = time.Now()
	if !req.IsReverse {
		sort.Sort(messageList)
	}
	log.ZDebug(ctx, "sort", "sort cost time", time.Since(t))
	messageListCallback.MessageList = messageList

	return &messageListCallback, nil
}

func (c *Conversation) fetchMessagesWithGapCheck(ctx context.Context, conversationID string,
	count int, startTime int64, isReverse bool, messageListCallback *sdkpb.GetHistoryMessageListResp) ([]*model_struct.LocalChatLog, error) {

	var list, validMessages []*model_struct.LocalChatLog

	// Get the number of invalid messages in this batch to recursive fetching from earlier points.
	shouldFetchMoreMessagesNum := func(messages []*model_struct.LocalChatLog) int {
		var thisEndSeq int64
		// Represents the number of valid messages in the batch
		validateMessageNum := 0
		for _, msg := range messages {
			if msg.Seq != 0 && thisEndSeq == 0 {
				thisEndSeq = msg.Seq
			}
			if isReverse {
				if msg.Seq > thisEndSeq && thisEndSeq != 0 {
					thisEndSeq = msg.Seq
				}

			} else {
				if msg.Seq < thisEndSeq && msg.Seq != 0 {
					thisEndSeq = msg.Seq
				}
			}
			if msg.Status >= constant.MsgStatusHasDeleted {
				log.ZDebug(ctx, "this message has been deleted or exception message", "msg", msg)
				continue
			}

			validateMessageNum++
			validMessages = append(validMessages, msg)

		}
		if !isReverse {
			if thisEndSeq != 0 {
				c.messagePullForwardEndSeqMap.StoreWithFunc(conversationID, thisEndSeq, func(key string, value int64) bool {
					lastEndSeq, _ := c.messagePullForwardEndSeqMap.Load(key)
					if value < lastEndSeq || lastEndSeq == 0 {
						log.ZDebug(ctx, "update the end sequence of the message", "lastEndSeq", lastEndSeq, "thisEndSeq", value)
						return true
					}
					log.ZWarn(ctx, "The end sequence number of the message is more than the last end sequence number",
						nil, "conversationID", key, "value", value, "lastEndSeq", lastEndSeq)
					return false
				})
			}
		} else {
			if thisEndSeq != 0 {
				c.messagePullReverseEndSeqMap.StoreWithFunc(conversationID, thisEndSeq, func(key string, value int64) bool {
					lastEndSeq, _ := c.messagePullReverseEndSeqMap.Load(key)
					if value > lastEndSeq || lastEndSeq == 0 {
						log.ZDebug(ctx, "update the end sequence of the message", "lastEndSeq", lastEndSeq, "thisEndSeq", value)
						return true
					}
					log.ZWarn(ctx, "The end sequence number of the message is less than the last end sequence number",
						nil, "conversationID", key, "value", value, "lastEndSeq", lastEndSeq)
					return false
				})
			}
		}

		return count - validateMessageNum
	}
	getNewStartTime := func(messages []*model_struct.LocalChatLog) int64 {
		if len(messages) == 0 {
			return 0
		}
		// Returns the SendTime of the last element in the message list
		return messages[len(messages)-1].SendTime
	}

	t := time.Now()
	list, err := c.db.GetMessageList(ctx, conversationID, count, startTime, isReverse)
	log.ZDebug(ctx, "db get messageList", "cost time", time.Since(t), "len", len(list), "err",
		err, "conversationID", conversationID)

	if err != nil {
		return nil, err
	}
	t = time.Now()
	thisStartSeq := c.validateAndFillInternalGaps(ctx, conversationID, isReverse,
		count, startTime, &list, messageListCallback)
	log.ZDebug(ctx, "internal continuity check", "cost time", time.Since(t), "thisStartSeq", thisStartSeq)
	t = time.Now()
	c.validateAndFillInterBlockGaps(ctx, thisStartSeq, conversationID,
		isReverse, count, startTime, &list, messageListCallback)
	log.ZDebug(ctx, "between continuity check", "cost time", time.Since(t), "thisStartSeq", thisStartSeq)
	t = time.Now()
	c.validateAndFillEndBlockContinuity(ctx, conversationID, isReverse,
		count, startTime, &list, messageListCallback)
	log.ZDebug(ctx, "end continuity check", "cost time", time.Since(t))
	// If the number of valid messages retrieved is less than the count,
	// continue fetching recursively until the valid messages are sufficient or all messages have been fetched.
	missingCount := shouldFetchMoreMessagesNum(list)
	if missingCount > 0 && !messageListCallback.IsEnd {
		newStartTime := getNewStartTime(list)
		log.ZDebug(ctx, "fetch more messages", "missingCount", missingCount, "conversationID",
			conversationID, "newStartTime", newStartTime)
		missingMessages, err := c.fetchMessagesWithGapCheck(ctx, conversationID, missingCount, newStartTime, isReverse, messageListCallback)
		if err != nil {
			return nil, err
		}
		log.ZDebug(ctx, "fetch more messages", "missingMessages", missingMessages)
		return append(validMessages, missingMessages...), nil
	}

	return validMessages, nil
}

func (c *Conversation) LocalChatLog2IMMessage(list []*model_struct.LocalChatLog) []*sharedpb.IMMessage {
	messageList := make([]*sharedpb.IMMessage, 0, len(list))
	for _, v := range list {
		temp := LocalChatLogToIMMessage(v)

		if temp.AttachedInfoElem.IsPrivateChat && temp.SendTime+int64(temp.AttachedInfoElem.BurnDuration) < time.Now().Unix() {
			continue
		}
		messageList = append(messageList, temp)
	}
	return messageList
}

func (c *Conversation) typingStatusUpdate(ctx context.Context, recvID, msgTip string) error {
	if recvID == "" {
		return sdkerrs.ErrArgs
	}
	s := &sharedpb.IMMessage{}
	err := c.initBasicInfo(ctx, s, constant.UserMsgType, constant.Typing)
	if err != nil {
		return err
	}
	s.RecvID = recvID
	s.SessionType = constant.SingleChatType
	typingElem := sharedpb.TypingElem{}
	typingElem.MsgTips = msgTip
	s.Content = &sharedpb.IMMessage_TypingElem{TypingElem: &typingElem}
	options := make(map[string]bool, 6)
	utils.SetSwitchFromOptions(options, constant.IsHistory, false)
	utils.SetSwitchFromOptions(options, constant.IsPersistent, false)
	utils.SetSwitchFromOptions(options, constant.IsSenderSync, false)
	utils.SetSwitchFromOptions(options, constant.IsConversationUpdate, false)
	utils.SetSwitchFromOptions(options, constant.IsSenderConversationUpdate, false)
	utils.SetSwitchFromOptions(options, constant.IsUnreadCount, false)
	utils.SetSwitchFromOptions(options, constant.IsOfflinePush, false)

	wsMsgData := IMMessageToMsgData(s)
	wsMsgData.Options = options
	var sendMsgResp sdkws.UserSendMsgResp
	err = c.LongConnMgr.SendReqWaitResp(ctx, wsMsgData, constant.SendMsg, &sendMsgResp)
	if err != nil {
		log.ZError(ctx, "send msg to server failed", err, "message", s)
		return err
	}
	return nil

}

func (c *Conversation) judgeMultipleSubString(keywordList []string, main string, keywordListMatchType int) bool {
	if len(keywordList) == 0 {
		return true
	}
	if keywordListMatchType == constant.KeywordMatchOr {
		for _, v := range keywordList {
			if utils.KMP(main, v) {
				return true
			}
		}
		return false
	} else {
		for _, v := range keywordList {
			if !utils.KMP(main, v) {
				return false
			}
		}
	}
	return true
}

// searchLocalMessages searches for local messages based on the given search parameters.
func (c *Conversation) searchLocalMessages(ctx context.Context, searchParam *conversationpb.SearchLocalMessagesReq) (*conversationpb.SearchLocalMessagesResp, error) {
	var r conversationpb.SearchLocalMessagesResp                                       // Initialize the result structure
	var startTime, endTime int64                                                       // Variables to hold start and end times for the search
	var list []*model_struct.LocalChatLog                                              // Slice to store the search results
	conversationMap := make(map[string]*conversationpb.SearchByConversationResult, 10) // Map to store results grouped by conversation, with initial capacity of 10
	var err error                                                                      // Variable to store any errors encountered
	var conversationID string                                                          // Variable to store the current conversation ID
	int32ToInt := func(t common.ContentType) int { return int(t) }
	intToInt32 := func(t int) common.ContentType { return common.ContentType(t) }
	// Set the end time for the search; if SearchTimePosition is 0, use the current timestamp
	if searchParam.SearchTimePosition == 0 {
		endTime = time.Now().Unix()
	} else {
		endTime = searchParam.SearchTimePosition
	}

	// Set the start time based on the specified time period
	if searchParam.SearchTimePeriod != 0 {
		startTime = endTime - searchParam.SearchTimePeriod
	}
	// Convert start and end times to milliseconds
	startTime = utils.UnixSecondToTime(startTime).UnixNano() / 1e6
	endTime = utils.UnixSecondToTime(endTime).UnixNano() / 1e6

	// Validate that either keyword list or message type list is provided
	if len(searchParam.Keywords) == 0 && len(searchParam.MessageTypes) == 0 {
		return nil, errors.New("keywordlist and MessageTypes all null")
	}

	// Search in a specific conversation if ConversationID is provided
	if searchParam.ConversationID != "" {
		// Validate pagination parameters

		if searchParam.Pagination.PageNumber < 1 || searchParam.Pagination.ShowNumber < 1 {
			return nil, errors.New("page or count is null")
		}
		offset := (searchParam.Pagination.PageNumber - 1) * searchParam.Pagination.ShowNumber
		_, err := c.db.GetConversation(ctx, searchParam.ConversationID)
		if err != nil {
			return nil, err
		}

		// Search by content type or keyword based on provided parameters
		if len(searchParam.MessageTypes) != 0 && len(searchParam.Keywords) == 0 {
			list, err = c.db.SearchMessageByContentType(ctx, datautil.Batch(int32ToInt, searchParam.MessageTypes), searchParam.SenderUserIDs, searchParam.ConversationID, startTime, endTime, int(offset), int(searchParam.Pagination.ShowNumber))
			if err != nil {
				return nil, err
			}
		} else {
			newContentTypeList := func(list []common.ContentType) (result []int) {
				for _, v := range list {
					vv := int(v)
					if utils.IsContainInt(vv, SearchContentType) {
						result = append(result, vv)
					}
				}
				return result
			}(searchParam.MessageTypes)

			if len(newContentTypeList) == 0 {
				newContentTypeList = SearchContentType
			}

			list, err = c.db.SearchMessageByKeyword(ctx, newContentTypeList, searchParam.SenderUserIDs, searchParam.Keywords,
				int(searchParam.KeywordMatchType), searchParam.ConversationID, startTime, endTime, int(offset), int(searchParam.Pagination.ShowNumber))
			if err != nil {
				return nil, err
			}
		}
	} else {
		// Comprehensive search across all conversations
		if len(searchParam.MessageTypes) == 0 {
			searchParam.MessageTypes = datautil.Batch(intToInt32, SearchContentType)
		}

		list, err = c.searchMessageByContentTypeAndKeyword(ctx, datautil.Batch(int32ToInt, searchParam.MessageTypes), searchParam.SenderUserIDs, searchParam.Keywords, int(searchParam.KeywordMatchType), startTime, endTime)
	}

	// Handle any errors encountered during the search
	if err != nil {
		return nil, err
	}

	// Logging and processing each message in the search results
	//localChatLogToMsgStruct(&messageList, list)

	//log.Debug("hahh",utils.KMP("SSSsdf3434","s"))
	//log.Debug("hahh",utils.KMP("SSSsdf3434","g"))
	//log.Debug("hahh",utils.KMP("SSSsdf3434","3434"))
	//log.Debug("hahh",utils.KMP("SSSsdf3434","F3434"))
	//log.Debug("hahh",utils.KMP("SSSsdf3434","SDF3"))
	// log.Debug("", "get raw data length is", len(list))
	log.ZDebug(ctx, "get raw data length is", "len", len(list))

	for _, v := range list {
		temp := LocalChatLogToIMMessage(v)
		if c.filterMsg(temp, searchParam) {
			continue
		}
		// Determine the conversation ID based on the session type
		switch temp.SessionType {
		case constant.SingleChatType:
			if temp.SendID == c.loginUserID {
				conversationID = c.getConversationIDBySessionType(temp.RecvID, constant.SingleChatType)
			} else {
				conversationID = c.getConversationIDBySessionType(temp.SendID, constant.SingleChatType)
			}
		case constant.WriteGroupChatType:
			conversationID = c.getConversationIDBySessionType(temp.GroupID, constant.WriteGroupChatType)
		case constant.ReadGroupChatType:
			conversationID = c.getConversationIDBySessionType(temp.GroupID, constant.ReadGroupChatType)
		}
		// Populate the conversationMap with search results
		if oldItem, ok := conversationMap[conversationID]; !ok {
			searchResultItem := conversationpb.SearchByConversationResult{}
			localConversation, err := c.db.GetConversation(ctx, conversationID)
			if err != nil {
				// log.Error("", "get conversation err ", err.Error(), conversationID)
				continue
			}
			searchResultItem.ConversationID = conversationID
			searchResultItem.FaceURL = localConversation.FaceURL
			searchResultItem.ShowName = localConversation.ShowName
			searchResultItem.LatestMsgSendTime = localConversation.LatestMsgSendTime
			searchResultItem.ConversationType = localConversation.ConversationType
			searchResultItem.MessageList = append(searchResultItem.MessageList, temp)
			searchResultItem.MessageCount++
			conversationMap[conversationID] = &searchResultItem
		} else {
			oldItem.MessageCount++
			oldItem.MessageList = append(oldItem.MessageList, temp)
			conversationMap[conversationID] = oldItem
		}
	}

	// Compile the results from the conversationMap into the response structure
	for _, v := range conversationMap {
		r.SearchResultItems = append(r.SearchResultItems, v)
		r.Count += int64(v.MessageCount)
	}

	// Sort the search results based on the latest message send time
	sort.Slice(r.SearchResultItems, func(i, j int) bool {
		return r.SearchResultItems[i].LatestMsgSendTime > r.SearchResultItems[j].LatestMsgSendTime
	})

	return &r, nil // Return the final search results
}

func (c *Conversation) searchMessageByContentTypeAndKeyword(ctx context.Context, contentType []int, senderUserIDList []string, keywordList []string,
	keywordListMatchType int, startTime, endTime int64) (result []*model_struct.LocalChatLog, err error) {
	var list []*model_struct.LocalChatLog

	conversationIDList, err := c.db.GetAllConversationIDList(ctx)
	if err != nil {
		return nil, err
	}

	var mu sync.Mutex
	eg, _ := errgroup.WithContext(ctx)
	eg.SetLimit(searchMessageGoroutineLimit)
	for _, cID := range conversationIDList {
		conversationID := cID

		eg.Go(func() error {
			sList, err := c.db.SearchMessageByContentTypeAndKeyword(ctx, contentType, conversationID, senderUserIDList, keywordList, keywordListMatchType, startTime, endTime)
			if err != nil {
				log.ZWarn(ctx, "search conversation message", err, "conversationID", conversationID)
				return nil
			}

			mu.Lock()
			list = append(list, sList...)
			mu.Unlock()

			return nil
		})
	}

	if err := eg.Wait(); err != nil {
		return nil, err
	}

	return list, nil
}

// true is filter, false is not filter
func (c *Conversation) filterMsg(temp *sharedpb.IMMessage, searchParam *conversationpb.SearchLocalMessagesReq) bool {
	switch temp.ContentType {
	case constant.Text:
		elem, _ := temp.Content.(*sharedpb.IMMessage_TextElem)
		return !c.judgeMultipleSubString(searchParam.Keywords, elem.TextElem.Content,
			int(searchParam.KeywordMatchType))
	case constant.AtText:
		elem, _ := temp.Content.(*sharedpb.IMMessage_AtTextElem)
		return !c.judgeMultipleSubString(searchParam.Keywords, elem.AtTextElem.Text,
			int(searchParam.KeywordMatchType))
	case constant.File:
		elem, _ := temp.Content.(*sharedpb.IMMessage_FileElem)
		return !c.judgeMultipleSubString(searchParam.Keywords, elem.FileElem.FileName,
			int(searchParam.KeywordMatchType))
	case constant.Merger:
		elem, _ := temp.Content.(*sharedpb.IMMessage_MergeElem)
		if !c.judgeMultipleSubString(searchParam.Keywords, elem.MergeElem.Title, int(searchParam.KeywordMatchType)) {
			for _, msgStruct := range elem.MergeElem.MultiMessage {
				if c.filterMsg(msgStruct, searchParam) {
					continue
				} else {
					break
				}
			}
		}
	case constant.Card:
		elem, _ := temp.Content.(*sharedpb.IMMessage_CardElem)
		return !c.judgeMultipleSubString(searchParam.Keywords, elem.CardElem.Nickname,
			int(searchParam.KeywordMatchType))
	case constant.Location:
		elem, _ := temp.Content.(*sharedpb.IMMessage_LocationElem)
		return !c.judgeMultipleSubString(searchParam.Keywords, elem.LocationElem.Description,
			int(searchParam.KeywordMatchType))
	case constant.Custom:
		elem, _ := temp.Content.(*sharedpb.IMMessage_CustomElem)
		return !c.judgeMultipleSubString(searchParam.Keywords, elem.CustomElem.Description,
			int(searchParam.KeywordMatchType))
	case constant.Quote:
		elem, _ := temp.Content.(*sharedpb.IMMessage_QuoteElem)
		if !c.judgeMultipleSubString(searchParam.Keywords, elem.QuoteElem.Text, int(searchParam.KeywordMatchType)) {
			return c.filterMsg(elem.QuoteElem.QuoteMessage, searchParam)
		}
	case constant.Picture:
		fallthrough
	case constant.Video:
		if len(searchParam.Keywords) == 0 {
			return false
		} else {
			return true
		}
	default:
		return true
	}
	return false
}
