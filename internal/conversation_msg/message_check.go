package conversation_msg

import (
	"context"
	"errors"
	"time"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/constant"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	sdk "github.com/openimsdk/openim-sdk-core/v3/pkg/sdk_params_callback"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/utils"
	"github.com/openimsdk/protocol/msg"
	"github.com/openimsdk/tools/utils/datautil"

	"github.com/openimsdk/tools/log"

	"github.com/openimsdk/protocol/sdkws"
)

// validateAndFillInternalGaps checks for continuity within a block of messages. If gaps are detected, it initiates a fill operation
// to retrieve and merge missing messages. It returns the maximum `seq` of this batch, which helps in determining continuity with subsequent batches.
func (c *Conversation) validateAndFillInternalGaps(ctx context.Context, conversationID string, isReverse bool, count int,
	startTime int64, list *[]*model_struct.LocalChatLog, messageListCallback *sdk.GetAdvancedHistoryMessageListCallback) int64 {
	var lostSeqListLength int
	maxSeq, minSeq, haveSeqList := c.getMaxAndMinHaveSeqList(*list)
	log.ZDebug(ctx, "getMaxAndMinHaveSeqList is:", "maxSeq", maxSeq, "minSeq", minSeq, "haveSeqList", haveSeqList)
	if maxSeq != 0 && minSeq != 0 {
		lostSeqList := getLostSeqListWithLimitLength(minSeq, maxSeq, haveSeqList)
		lostSeqListLength = len(lostSeqList)
		log.ZDebug(ctx, "get lost seqList is :", "maxSeq", maxSeq, "minSeq", minSeq, "lostSeqList", lostSeqList, "length:", lostSeqListLength)
		if lostSeqListLength > 0 {
			log.ZDebug(ctx, "messageBlocksInternalContinuityCheck", "lostSeqList", lostSeqList)
			c.fetchAndMergeMissingMessages(ctx, conversationID, lostSeqList, isReverse, count, startTime, list, messageListCallback)
		}

	}
	return maxSeq
}

// validateAndFillInterBlockGaps checks for continuity between blocks of messages. If a gap is identified, it retrieves the missing messages
// to bridge the gap. The function returns a boolean indicating whether the blocks are continuous.
func (c *Conversation) validateAndFillInterBlockGaps(ctx context.Context, maxSeq int64, conversationID string,
	isReverse bool, count int, startTime int64, list *[]*model_struct.LocalChatLog, messageListCallback *sdk.GetAdvancedHistoryMessageListCallback) bool {
	lastMinSeq, _ := c.messagePullMinSeqMap.Load(conversationID)
	if lastMinSeq != 0 {
		log.ZDebug(ctx, "get lost LastMinSeq is :", "lastMinSeq", lastMinSeq, "thisMaxSeq", maxSeq)
		if maxSeq+1 != lastMinSeq {

			lostSeqList := getLostSeqListWithLimitLength(maxSeq+1, lastMinSeq-1, []int64{})
			log.ZDebug(ctx, "get lost lostSeqList is :", "lostSeqList", lostSeqList, "length:", len(lostSeqList))
			if len(lostSeqList) > 0 {
				log.ZDebug(ctx, "messageBlocksBetweenContinuityCheck", "lostSeqList", lostSeqList)
				c.fetchAndMergeMissingMessages(ctx, conversationID, lostSeqList, isReverse, count, startTime, list, messageListCallback)
			}
		} else {
			return true
		}

	} else {
		return true
	}

	return false
}

// func (c *Conversation) messageBlocksEndContinuityCheck(ctx context.Context, conversationID string,
//
//	isReverse bool, count int, startTime int64, list *[]*model_struct.LocalChatLog, messageListCallback *sdk.GetAdvancedHistoryMessageListCallback) {
//	maxSeq, minSeq, haveSeqList := c.getMaxAndMinHaveSeqList(*list)
//	if minSeq != 0 {
//		seqList := func(seq int64) (seqList []int64) {
//			startSeq := seq - constant.PullMsgNumForReadDiffusion
//			if startSeq <= 0 {
//				startSeq = 1
//			}
//			log.ZDebug(ctx, "pull start is ", "start seq", startSeq)
//			for i := startSeq; i < seq; i++ {
//				seqList = append(seqList, i)
//			}
//			return seqList
//		}(minSeq)
//		log.ZDebug(ctx, "pull seqList is ", "seqList", seqList, "len", len(seqList))
//
//		if len(seqList) > 0 {
//			log.ZDebug(ctx, "messageBlocksEndContinuityCheck", "seqList", seqList)
//			c.fetchAndMergeMissingMessages(ctx, conversationID, seqList, isReverse, count, startTime, list, messageListCallback)
//		}
//
//	} else {
//		log.ZDebug(ctx, "messageBlocksEndContinuityCheck", "minSeq", minSeq, "conversationID", conversationID)
//		// local don't have messages, but the server's maximum message count is not zero
//		seqList := []int64{0, 0}
//		c.fetchAndMergeMissingMessages(ctx, conversationID, seqList, isReverse, count, startTime, list, messageListCallback)
//
//	}
//
// }

// validateAndFillEndBlockContinuity performs an end-of-block continuity check. If a batch of messages has passed
// internal and inter-block continuity checks but contains fewer messages than `count`, this function verifies if the end
// of the message history has been reached. If not, it attempts to retrieve any missing messages to ensure continuity.
func (c *Conversation) validateAndFillEndBlockContinuity(ctx context.Context, conversationID string,
	isReverse bool, count int, startTime int64, list *[]*model_struct.LocalChatLog, messageListCallback *sdk.GetAdvancedHistoryMessageListCallback) {
	// Perform an end-of-block check if the retrieved message count is less than requested
	if len(*list) < count {
		_, minSeq, _ := c.getMaxAndMinHaveSeqList(*list)
		log.ZDebug(ctx, "messageBlocksEndContinuityCheck", "minSeq", minSeq, "conversationID", conversationID)
		if minSeq == 1 { // todo Replace `1` with the minimum sequence value as defined by the user or system
			messageListCallback.IsEnd = true
		} else {
			lastMinSeq, _ := c.messagePullMinSeqMap.Load(conversationID)
			log.ZDebug(ctx, "messageBlocksEndContinuityCheck", "lastMinSeq", lastMinSeq, "conversationID", conversationID)
			// If `minSeq` is zero and `lastMinSeq` is at the minimum server sequence, this batch is fully local
			if minSeq == 0 && lastMinSeq == 1 { // All messages in this batch are local messages,
				// and the minimum seq of the last batch of valid messages has already reached the minimum pullable seq from the server.
				messageListCallback.IsEnd = true
			} else {
				// The batch includes sequences but has not reached the minimum value,
				// This condition indicates local-only messages, with `minSeq > 1` as the only case,
				// since `lastMinSeq > 1` is handled in inter-block continuity.
				lostSeqList := getLostSeqListWithLimitLength(1, minSeq-1, []int64{})
				if len(lostSeqList) > 0 {
					log.ZDebug(ctx, "messageBlocksEndContinuityCheck", "lostSeqList", lostSeqList)
					c.fetchAndMergeMissingMessages(ctx, conversationID, lostSeqList, isReverse, count, startTime, list, messageListCallback)
				}

			}
		}
	} else {
		messageListCallback.IsEnd = false
	}

}
func (c *Conversation) getMaxAndMinHaveSeqList(messages []*model_struct.LocalChatLog) (max, min int64, seqList []int64) {
	for i := 0; i < len(messages); i++ {
		if messages[i].Seq != 0 {
			seqList = append(seqList, messages[i].Seq)
		}
		if messages[i].Seq != 0 && min == 0 && max == 0 {
			min = messages[i].Seq
			max = messages[i].Seq
		}
		if messages[i].Seq < min && messages[i].Seq != 0 {
			min = messages[i].Seq
		}
		if messages[i].Seq > max {
			max = messages[i].Seq

		}
	}
	return max, min, seqList
}

func getLostSeqListWithLimitLength(minSeq, maxSeq int64, haveSeqList []int64) []int64 {
	var lostSeqList []int64
	haveSeqSet := datautil.SliceSetAny(haveSeqList, func(e int64) int64 {
		return e
	})
	for i := minSeq; i <= maxSeq; i++ {
		if _, found := haveSeqSet[i]; !found {
			lostSeqList = append(lostSeqList, i)
		}
	}
	if len(lostSeqList) > constant.PullMsgNumForReadDiffusion {
		return lostSeqList[len(lostSeqList)-constant.PullMsgNumForReadDiffusion:]
	}
	return lostSeqList
}

// 1. Ensure that the amount of messages pulled at a time is lower than the amount pulled from the server.
//
// 2. Check the continuity within a block.
//
// 3. Check the continuity between blocks.
func (c *Conversation) fetchAndMergeMissingMessages(ctx context.Context, conversationID string, seqList []int64,
	isReverse bool, count int, startTime int64, list *[]*model_struct.LocalChatLog,
	messageListCallback *sdk.GetAdvancedHistoryMessageListCallback) {

	var getSeqMessageResp msg.GetSeqMessageResp
	var getSeqMessageReq msg.GetSeqMessageReq
	getSeqMessageReq.UserID = c.loginUserID
	var conversationSeqs msg.ConversationSeqs
	conversationSeqs.ConversationID = conversationID
	conversationSeqs.Seqs = seqList
	getSeqMessageReq.Conversations = append(getSeqMessageReq.Conversations, &conversationSeqs)
	log.ZDebug(ctx, "conversation pull message,  ", "req", getSeqMessageReq)
	if startTime == 0 && !c.LongConnMgr.IsConnected() {
		return
	}
	err := c.SendReqWaitResp(ctx, &getSeqMessageReq, constant.PullMsgBySeqList, &getSeqMessageResp)
	if err != nil {
		errHandle(seqList, list, err, messageListCallback)
		log.ZWarn(ctx, "pull SendReqWaitResp failed", err, "req")
	} else {
		log.ZDebug(ctx, "syncMsgFromServerSplit pull msg", "resp", getSeqMessageResp)
		if getSeqMessageResp.Msgs == nil {
			log.ZWarn(ctx, "syncMsgFromServerSplit pull msg is null", errors.New("pull message is null"),
				"req", getSeqMessageResp.String())
			return
		}
		if v, ok := getSeqMessageResp.Msgs[conversationID]; ok {
			c.pullMessageIntoTable(ctx, getSeqMessageResp.Msgs)
			log.ZDebug(ctx, "syncMsgFromServerSplit pull msg success",
				"conversationID", conversationID, "count", count, "len", len(*list), "msgLen", len(v.Msgs))
			localMessage := datautil.Batch(MsgDataToLocalChatLog, v.Msgs)
			reverse(localMessage)
			*list = mergeSortedArrays(*list, localMessage, count)
		}

	}
}
func errHandle(seqList []int64, list *[]*model_struct.LocalChatLog, err error, messageListCallback *sdk.GetAdvancedHistoryMessageListCallback) {
	messageListCallback.ErrCode = 100
	messageListCallback.ErrMsg = err.Error()
	var result []*model_struct.LocalChatLog
	needPullMaxSeq := seqList[len(seqList)-1]
	for _, chatLog := range *list {
		if chatLog.Seq == 0 || chatLog.Seq > needPullMaxSeq {
			temp := chatLog
			result = append(result, temp)
		} else {
			if chatLog.Seq <= needPullMaxSeq {
				break
			}
		}
	}
	*list = result
}

func mergeSortedArrays(arr1, arr2 []*model_struct.LocalChatLog, n int) []*model_struct.LocalChatLog {
	len1 := len(arr1)
	len2 := len(arr2)
	result := make([]*model_struct.LocalChatLog, 0, len1+len2)

	i, j := 0, 0

	for i < len1 && j < len2 && len(result) < n {
		if arr1[i].SendTime >= arr2[j].SendTime {
			result = append(result, arr1[i])
			i++
		} else {
			result = append(result, arr2[j])
			j++
		}
	}

	for i < len1 && len(result) < n {
		result = append(result, arr1[i])
		i++
	}

	for j < len2 && len(result) < n {
		result = append(result, arr2[j])
		j++
	}

	return result
}

func reverse[T any](arr []T) {
	for i, j := 0, len(arr)-1; i < j; i, j = i+1, j-1 {
		arr[i], arr[j] = arr[j], arr[i]
	}
}

func (c *Conversation) pullMessageIntoTable(ctx context.Context, pullMsgData map[string]*sdkws.PullMsgs) {
	insertMsg := make(map[string][]*model_struct.LocalChatLog, 20)
	updateMsg := make(map[string][]*model_struct.LocalChatLog, 30)
	var insertMessage, selfInsertMessage, othersInsertMessage []*model_struct.LocalChatLog
	var updateMessage []*model_struct.LocalChatLog
	var exceptionMsg []*model_struct.LocalErrChatLog

	log.ZDebug(ctx, "do Msg come here, len: ", "msg length", len(pullMsgData))
	for conversationID, msgs := range pullMsgData {
		msgIDs := datautil.Slice(msgs.Msgs, func(msg *sdkws.MsgData) string {
			return msg.ClientMsgID
		})
		localMessages, err := c.db.GetMessagesByClientMsgIDs(ctx, conversationID, msgIDs)
		if err != nil {
			log.ZWarn(ctx, "Failed to get messages by ClientMsgIDs", err)
		}
		localMessagesMap := datautil.SliceToMap(localMessages, func(msg *model_struct.LocalChatLog) string { return msg.ClientMsgID })
		for _, v := range msgs.Msgs {
			log.ZDebug(ctx, "msg detail", "msg", v, "conversationID", conversationID)
			msg := MsgDataToLocalChatLog(v)
			//When the message has been marked and deleted by the cloud, it is directly inserted locally
			//without any conversation and message update.
			if msg.Status == constant.MsgStatusHasDeleted {
				insertMessage = append(insertMessage, msg)
				continue
			}
			msg.Status = constant.MsgStatusSendSuccess
			// The message might be a filler provided by the server due to a gap in the sequence.
			if msg.ClientMsgID == "" {
				msg.ClientMsgID = utils.GetMsgID(c.loginUserID) + utils.Int64ToString(msg.Seq)
				exceptionMsg = append(exceptionMsg, c.msgDataToLocalErrChatLog(msg))
				insertMessage = append(insertMessage, msg)
				continue
			}
			existingMsg, exists := localMessagesMap[msg.ClientMsgID]
			if v.SendID == c.loginUserID { //seq
				// Messages sent by myself  //if  sent through  this terminal
				if exists {
					log.ZDebug(ctx, "have message", "msg", msg)
					if existingMsg.Seq == 0 {
						updateMessage = append(updateMessage, msg)

					} else {
						// The message you sent is duplicated, possibly due to a resend or the server consuming
						// the message multiple times.
						msg.ClientMsgID = msg.ClientMsgID + utils.Int64ToString(msg.Seq)
						exceptionMsg = append(exceptionMsg, c.msgDataToLocalErrChatLog(msg))
						insertMessage = append(insertMessage, msg)
					}
				} else { //      send through  other terminal
					log.ZDebug(ctx, "sync message", "msg", msg)
					selfInsertMessage = append(selfInsertMessage, msg)
				}
			} else { //Sent by others
				if !exists {
					othersInsertMessage = append(othersInsertMessage, msg)

				} else {
					// The message sent by others is duplicated, possibly due to a resend or the server consuming
					// the message multiple times.
					msg.ClientMsgID = msg.ClientMsgID + utils.Int64ToString(msg.Seq)
					exceptionMsg = append(exceptionMsg, c.msgDataToLocalErrChatLog(msg))
					insertMessage = append(insertMessage, msg)
				}
			}

		}
		timeNow := time.Now()
		insertMsg[conversationID] = append(insertMessage, c.faceURLAndNicknameHandle(ctx, selfInsertMessage, othersInsertMessage, conversationID)...)
		updateMsg[conversationID] = updateMessage
		log.ZDebug(ctx, "faceURLAndNicknameHandle, ", "cost time", time.Since(timeNow).Milliseconds(),
			"updateMsg", updateMessage, "insertMsg", insertMessage, "selfInsertMessage", selfInsertMessage, "othersInsertMessage", othersInsertMessage)

		//update message
		if err6 := c.batchUpdateMessageList(ctx, updateMsg); err6 != nil {
			log.ZError(ctx, "sync seq normal message err  :", err6)
		}
		timeNow = time.Now()
		//Normal message storage
		_ = c.batchInsertMessageList(ctx, insertMsg)
		log.ZDebug(ctx, "BatchInsertMessageListController, ", "cost time", time.Since(timeNow).Milliseconds())

		//Exception message storage
		for _, v := range exceptionMsg {
			log.ZWarn(ctx, "exceptionMsg show: ", nil, "msg", *v)
		}

	}
}

// All pulled messages must undergo continuity checks within the block and between the current block and the previous
// one. If discontinuity is detected, the gaps should be filled. During the gap-filling process, if any exceptions occur,
// only provide the sequence numbers in descending order up to the break.
// When the pulled messages are less than expected, retrieve the server's maximum sequence (seq) for the group, the
// user's minimum seq for the group, and the local minimum seq for the group. If the local seq is not zero and is less
// than or equal to the server's minimum seq, it indicates that the bottom has been reached. If the local seq is zero,
// it can be understood as an initialization where the data hasn't been synchronized yet, or there is an exceptional
// case. If the difference between the server's maximum seq and minimum seq is greater than or equal to zero, it
// indicates that the bottom hasn't been reached. Otherwise, the bottom has been reached.

// faceURLAndNicknameHandle handles the assignment of face URLs and nicknames for chat logs
// based on the conversation type (single chat or group chat).
// It first retrieves the conversation information using the provided conversationID.
// Depending on the conversation type, it delegates the handling to either singleHandle (for single chats)
// or groupHandle (for group chats). If conversation information retrieval fails, it returns the merged chat logs.
func (c *Conversation) faceURLAndNicknameHandle(ctx context.Context, self, others []*model_struct.LocalChatLog, conversationID string) []*model_struct.LocalChatLog {
	lc, err := c.db.GetConversation(ctx, conversationID)
	if err != nil {
		return append(self, others...)
	}
	switch lc.ConversationType {
	case constant.SingleChatType:
		c.singleHandle(ctx, self, others, lc)
	case constant.ReadGroupChatType:
		c.groupHandle(ctx, self, others, lc)
	}
	return append(self, others...)
}

// singleHandle processes chat logs for single chat conversations.
// It updates the SenderFaceURL and SenderNickname fields for messages in the `self` list
// using the logged-in user's information, and for messages in the `others` list
// using the other party's information if available in the conversation.
func (c *Conversation) singleHandle(ctx context.Context, self, others []*model_struct.LocalChatLog, lc *model_struct.LocalConversation) {
	if len(self) > 0 {
		userInfo, err := c.db.GetLoginUser(ctx, c.loginUserID)
		if err == nil {
			for _, chatLog := range self {
				chatLog.SenderFaceURL = userInfo.FaceURL
				chatLog.SenderNickname = userInfo.Nickname
			}
		}
	}

	if lc.FaceURL != "" && lc.ShowName != "" {
		for _, chatLog := range others {
			chatLog.SenderFaceURL = lc.FaceURL
			chatLog.SenderNickname = lc.ShowName
		}
	}
}

// groupHandle processes chat logs for group chat conversations.
// It merges the `self` and `others` chat logs and updates the SenderFaceURL and SenderNickname fields
// using the group members' information. If group member information is not available,
// it attempts to retrieve the sender's information from a local cache.
func (c *Conversation) groupHandle(ctx context.Context, self, others []*model_struct.LocalChatLog, lc *model_struct.LocalConversation) {
	allMessage := append(self, others...)

	allSenders := datautil.Slice(allMessage, func(e *model_struct.LocalChatLog) string {
		return e.SendID
	})
	groupMap, err := c.group.GetGroupMemberNameAndFaceURL(ctx, lc.GroupID, datautil.Distinct(allSenders))
	if err != nil {
		log.ZError(ctx, "get group member info err", err)
		return
	}
	for _, chatLog := range allMessage {
		if g, ok := groupMap[chatLog.SendID]; ok { // If group member info is successfully retrieved
			log.ZDebug(ctx, "find in GetGroupMemberNameAndFaceURL", "sendID", chatLog.SendID, "faceURL", g.FaceURL, "nickName", g.Nickname)
			if g.FaceURL != "" && g.Nickname != "" {
				chatLog.SenderFaceURL = g.FaceURL
				chatLog.SenderNickname = g.Nickname
			}
		} else { // Otherwise, retrieve from local temporary cache
			faceURL, name, err := c.getUserNameAndFaceURL(ctx, chatLog.SendID)
			if err != nil {
				log.ZWarn(ctx, "getUserNameAndFaceURL error", err, "senderID", chatLog.SendID)
			} else if faceURL != "" && name != "" {
				log.ZDebug(ctx, "find in getUserNameAndFaceURL", "sendID", chatLog.SendID, "faceURL", faceURL, "nickName", name)
				chatLog.SenderFaceURL = faceURL
				chatLog.SenderNickname = name
			}
		}
	}
}
