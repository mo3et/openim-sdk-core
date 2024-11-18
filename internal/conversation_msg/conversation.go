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
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto"
	"github.com/openimsdk/tools/utils/datautil"
	"sort"
	"sync"
	"time"

	"github.com/jinzhu/copier"
	"golang.org/x/sync/errgroup"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/api"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/constant"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/utils"
	"github.com/openimsdk/openim-sdk-core/v3/sdk_struct"

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

func (c *Conversation) getAdvancedHistoryMessageList(ctx context.Context, req *sdkpb.GetAdvancedHistoryMessageListParams, isReverse bool) (*sdkpb.GetAdvancedHistoryMessageListCallback, error) {
	t := time.Now()
	var messageListCallback sdkpb.GetAdvancedHistoryMessageListCallback
	var conversationID string
	var startTime int64
	var err error
	var messageList sdk_struct.NewMsgList
	conversationID = req.ConversationID
	if len(req.StartClientMsgID) > 0 {
		m, err := c.db.GetMessage(ctx, conversationID, req.StartClientMsgID)
		if err != nil {
			return nil, err
		}
		startTime = m.SendTime
	} else {
		c.messagePullMinSeqMap.Delete(conversationID)
	}
	log.ZDebug(ctx, "Assembly conversation parameters", "cost time", time.Since(t), "conversationID",
		conversationID, "startTime:", startTime, "count:", req.Count, "startTime", startTime)
	list, err := c.fetchMessagesWithGapCheck(ctx, conversationID, int(req.Count), startTime, isReverse, &messageListCallback)
	if err != nil {
		return nil, err
	}
	log.ZDebug(ctx, "pull message", "pull cost time", time.Since(t))
	t = time.Now()

	var thisMinSeq int64
	thisMinSeq, messageList = c.LocalChatLog2MsgStruct(ctx, list)
	log.ZDebug(ctx, "message convert and unmarshal", "unmarshal cost time", time.Since(t))
	t = time.Now()
	if !isReverse {
		sort.Sort(messageList)
	}
	log.ZDebug(ctx, "sort", "sort cost time", time.Since(t))
	messageListCallback.MessageList = messageList
	if thisMinSeq != 0 {
		c.messagePullMinSeqMap.Store(conversationID, thisMinSeq)
	}
	return &messageListCallback, nil

}

func (c *Conversation) fetchMessagesWithGapCheck(ctx context.Context, conversationID string,
	count int, startTime int64, isReverse bool, messageListCallback *sdkpb.GetAdvancedHistoryMessageListCallback) ([]*model_struct.LocalChatLog, error) {

	var list []*model_struct.LocalChatLog

	// If all retrieved messages are either deleted or filtered out, continue fetching messages from an earlier point.
	shouldFetchMoreMessages := func(messages []*model_struct.LocalChatLog) bool {
		if len(messages) == 0 {
			return false
		}

		allDeleted := true
		for _, msg := range messages {
			if msg.Status < constant.MsgStatusHasDeleted {
				allDeleted = false
				break
			}
		}
		return allDeleted
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
	maxSeq := c.validateAndFillInternalGaps(ctx, conversationID, isReverse,
		count, startTime, &list, messageListCallback)
	log.ZDebug(ctx, "internal continuity check", "cost time", time.Since(t))
	t = time.Now()
	c.validateAndFillInterBlockGaps(ctx, maxSeq, conversationID,
		isReverse, count, startTime, &list, messageListCallback)
	log.ZDebug(ctx, "between continuity check", "cost time", time.Since(t))
	t = time.Now()
	c.validateAndFillEndBlockContinuity(ctx, conversationID, isReverse,
		count, startTime, &list, messageListCallback)
	log.ZDebug(ctx, "end continuity check", "cost time", time.Since(t))
	// If all retrieved messages are either deleted or filtered out,
	//continue fetching recursively until either valid messages are found or all messages have been fetched.
	if shouldFetchMoreMessages(list) && !messageListCallback.IsEnd {
		return c.fetchMessagesWithGapCheck(ctx, conversationID, count, getNewStartTime(list), isReverse, messageListCallback)
	}

	return list, nil
}

func (c *Conversation) LocalChatLog2MsgStruct(ctx context.Context, list []*model_struct.LocalChatLog) (int64, []*sdkpb.MsgStruct) {
	messageList := make([]*sdkpb.MsgStruct, 0, len(list))
	var thisMinSeq int64
	for _, v := range list {
		if v.Seq != 0 && thisMinSeq == 0 {
			thisMinSeq = v.Seq
		}
		if v.Seq < thisMinSeq && v.Seq != 0 {
			thisMinSeq = v.Seq
		}
		if v.Status >= constant.MsgStatusHasDeleted {
			log.ZDebug(ctx, "this message has been deleted or exception message", "msg", v)
			continue
		}
		temp := LocalChatLogToMsgPB(v)

		if temp.AttachedInfoElem.IsPrivateChat && temp.SendTime+int64(temp.AttachedInfoElem.BurnDuration) < time.Now().Unix() {
			continue
		}
		messageList = append(messageList, temp)
	}
	return thisMinSeq, messageList
}

func (c *Conversation) typingStatusUpdate(ctx context.Context, recvID, msgTip string) error {
	if recvID == "" {
		return sdkerrs.ErrArgs
	}
	s := sdk_struct.MsgStruct{}
	err := c.initBasicInfo(ctx, &s, constant.UserMsgType, constant.Typing)
	if err != nil {
		return err
	}
	s.RecvID = recvID
	s.SessionType = constant.SingleChatType
	typingElem := sdk_struct.TypingElem{}
	typingElem.MsgTips = msgTip
	s.Content = utils.StructToJsonString(typingElem)
	options := make(map[string]bool, 6)
	utils.SetSwitchFromOptions(options, constant.IsHistory, false)
	utils.SetSwitchFromOptions(options, constant.IsPersistent, false)
	utils.SetSwitchFromOptions(options, constant.IsSenderSync, false)
	utils.SetSwitchFromOptions(options, constant.IsConversationUpdate, false)
	utils.SetSwitchFromOptions(options, constant.IsSenderConversationUpdate, false)
	utils.SetSwitchFromOptions(options, constant.IsUnreadCount, false)
	utils.SetSwitchFromOptions(options, constant.IsOfflinePush, false)

	var wsMsgData sdkws.MsgData
	copier.Copy(&wsMsgData, s)
	wsMsgData.Content = []byte(s.Content)
	wsMsgData.CreateTime = s.CreateTime
	wsMsgData.Options = options
	var sendMsgResp sdkws.UserSendMsgResp
	err = c.LongConnMgr.SendReqWaitResp(ctx, &wsMsgData, constant.SendMsg, &sendMsgResp)
	if err != nil {
		log.ZError(ctx, "send msg to server failed", err, "message", s)
		return err
	}
	return nil

}

func (c *Conversation) insertMessageToLocalStorage(ctx context.Context, conversationID string, s *model_struct.LocalChatLog) error {
	return c.db.InsertMessage(ctx, conversationID, s)
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
func (c *Conversation) searchLocalMessages(ctx context.Context, searchParam *sdkpb.SearchLocalMessagesParams) (*sdkpb.SearchLocalMessagesCallback, error) {
	var r sdkpb.SearchLocalMessagesCallback                                   // Initialize the result structure
	var startTime, endTime int64                                              // Variables to hold start and end times for the search
	var list []*model_struct.LocalChatLog                                     // Slice to store the search results
	conversationMap := make(map[string]*sdkpb.SearchByConversationResult, 10) // Map to store results grouped by conversation, with initial capacity of 10
	var err error                                                             // Variable to store any errors encountered
	var conversationID string                                                 // Variable to store the current conversation ID
	int32ToInt := func(t int32) int { return int(t) }
	intToInt32 := func(t int) int32 { return int32(t) }
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
	if len(searchParam.KeywordList) == 0 && len(searchParam.MessageTypeList) == 0 {
		return nil, errors.New("keywordlist and messageTypelist all null")
	}

	// Search in a specific conversation if ConversationID is provided
	if searchParam.ConversationID != "" {
		// Validate pagination parameters
		if searchParam.PageIndex < 1 || searchParam.Count < 1 {
			return nil, errors.New("page or count is null")
		}
		offset := (searchParam.PageIndex - 1) * searchParam.Count
		_, err := c.db.GetConversation(ctx, searchParam.ConversationID)
		if err != nil {
			return nil, err
		}

		// Search by content type or keyword based on provided parameters
		if len(searchParam.MessageTypeList) != 0 && len(searchParam.KeywordList) == 0 {
			list, err = c.db.SearchMessageByContentType(ctx, datautil.Batch(int32ToInt, searchParam.MessageTypeList), searchParam.SenderUserIDList, searchParam.ConversationID, startTime, endTime, int(offset), int(searchParam.Count))
			if err != nil {
				return nil, err
			}
		} else {
			newContentTypeList := func(list []int32) (result []int) {
				for _, v := range list {
					vv := int(v)
					if utils.IsContainInt(vv, SearchContentType) {
						result = append(result, vv)
					}
				}
				return result
			}(searchParam.MessageTypeList)

			if len(newContentTypeList) == 0 {
				newContentTypeList = SearchContentType
			}

			list, err = c.db.SearchMessageByKeyword(ctx, newContentTypeList, searchParam.SenderUserIDList, searchParam.KeywordList,
				int(searchParam.KeywordListMatchType), searchParam.ConversationID, startTime, endTime, int(offset), int(searchParam.Count))
			if err != nil {
				return nil, err
			}
		}
	} else {
		// Comprehensive search across all conversations
		if len(searchParam.MessageTypeList) == 0 {
			searchParam.MessageTypeList = datautil.Batch(intToInt32, SearchContentType)
		}

		list, err = c.searchMessageByContentTypeAndKeyword(ctx, datautil.Batch(int32ToInt, searchParam.MessageTypeList), searchParam.SenderUserIDList, searchParam.KeywordList, int(searchParam.KeywordListMatchType), startTime, endTime)
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
		temp := LocalChatLogToMsgPB(v)
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
			searchResultItem := sdkpb.SearchByConversationResult{}
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
		r.TotalCount += v.MessageCount
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
func (c *Conversation) filterMsg(temp *sdkpb.MsgStruct, searchParam *sdkpb.SearchLocalMessagesParams) bool {
	switch temp.ContentType {
	case constant.Text:
		elem, _ := temp.Content.(*sdkpb.MsgStruct_TextElem)
		return !c.judgeMultipleSubString(searchParam.KeywordList, elem.TextElem.Content,
			int(searchParam.KeywordListMatchType))
	case constant.AtText:
		elem, _ := temp.Content.(*sdkpb.MsgStruct_AtTextElem)
		return !c.judgeMultipleSubString(searchParam.KeywordList, elem.AtTextElem.Text,
			int(searchParam.KeywordListMatchType))
	case constant.File:
		elem, _ := temp.Content.(*sdkpb.MsgStruct_FileElem)
		return !c.judgeMultipleSubString(searchParam.KeywordList, elem.FileElem.FileName,
			int(searchParam.KeywordListMatchType))
	case constant.Merger:
		elem, _ := temp.Content.(*sdkpb.MsgStruct_MergeElem)
		if !c.judgeMultipleSubString(searchParam.KeywordList, elem.MergeElem.Title, int(searchParam.KeywordListMatchType)) {
			for _, msgStruct := range elem.MergeElem.MultiMessage {
				if c.filterMsg(msgStruct, searchParam) {
					continue
				} else {
					break
				}
			}
		}
	case constant.Card:
		elem, _ := temp.Content.(*sdkpb.MsgStruct_CardElem)
		return !c.judgeMultipleSubString(searchParam.KeywordList, elem.CardElem.Nickname,
			int(searchParam.KeywordListMatchType))
	case constant.Location:
		elem, _ := temp.Content.(*sdkpb.MsgStruct_LocationElem)
		return !c.judgeMultipleSubString(searchParam.KeywordList, elem.LocationElem.Description,
			int(searchParam.KeywordListMatchType))
	case constant.Custom:
		elem, _ := temp.Content.(*sdkpb.MsgStruct_CustomElem)
		return !c.judgeMultipleSubString(searchParam.KeywordList, elem.CustomElem.Description,
			int(searchParam.KeywordListMatchType))
	case constant.Quote:
		elem, _ := temp.Content.(*sdkpb.MsgStruct_QuoteElem)
		if !c.judgeMultipleSubString(searchParam.KeywordList, elem.QuoteElem.Text, int(searchParam.KeywordListMatchType)) {
			return c.filterMsg(elem.QuoteElem.QuoteMessage, searchParam)
		}
	case constant.Picture:
		fallthrough
	case constant.Video:
		if len(searchParam.KeywordList) == 0 {
			return false
		} else {
			return true
		}
	default:
		return true
	}
	return false
}
