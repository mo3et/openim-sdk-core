package conversation_msg

import (
	"context"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/constant"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/utils"
	pconstant "github.com/openimsdk/protocol/constant"
	"github.com/openimsdk/protocol/sdkws"
	"github.com/openimsdk/tools/errs"
	"github.com/openimsdk/tools/log"
	"github.com/openimsdk/tools/utils/stringutil"

	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto"
	pbConversation "github.com/openimsdk/protocol/conversation"
)

func ServerConversationToLocal(conversation *pbConversation.Conversation) *model_struct.LocalConversation {
	return &model_struct.LocalConversation{
		ConversationID:   conversation.ConversationID,
		ConversationType: conversation.ConversationType,
		UserID:           conversation.UserID,
		GroupID:          conversation.GroupID,
		RecvMsgOpt:       conversation.RecvMsgOpt,
		GroupAtType:      conversation.GroupAtType,
		IsPinned:         conversation.IsPinned,
		BurnDuration:     conversation.BurnDuration,
		IsPrivateChat:    conversation.IsPrivateChat,
		AttachedInfo:     conversation.AttachedInfo,
		Ex:               conversation.Ex,
		MsgDestructTime:  conversation.MsgDestructTime,
		IsMsgDestruct:    conversation.IsMsgDestruct,
	}
}

func LocalConversationToServer(conversation *model_struct.LocalConversation) *pbConversation.Conversation {
	return &pbConversation.Conversation{
		ConversationID:   conversation.ConversationID,
		ConversationType: conversation.ConversationType,
		UserID:           conversation.UserID,
		GroupID:          conversation.GroupID,
		RecvMsgOpt:       conversation.RecvMsgOpt,
		GroupAtType:      conversation.GroupAtType,
		IsPinned:         conversation.IsPinned,
		BurnDuration:     conversation.BurnDuration,
		IsPrivateChat:    conversation.IsPrivateChat,
		AttachedInfo:     conversation.AttachedInfo,
		MsgDestructTime:  conversation.MsgDestructTime,
		Ex:               conversation.Ex,
		IsMsgDestruct:    conversation.IsMsgDestruct,
	}
}

func MsgDataToLocalChatLog(serverMessage *sdkws.MsgData) *model_struct.LocalChatLog {
	localMessage := &model_struct.LocalChatLog{
		ClientMsgID:      serverMessage.ClientMsgID,
		ServerMsgID:      serverMessage.ServerMsgID,
		SendID:           serverMessage.SendID,
		RecvID:           serverMessage.RecvID,
		SenderPlatformID: serverMessage.SenderPlatformID,
		SenderNickname:   serverMessage.SenderNickname,
		SenderFaceURL:    serverMessage.SenderFaceURL,
		SessionType:      serverMessage.SessionType,
		MsgFrom:          serverMessage.MsgFrom,
		ContentType:      serverMessage.ContentType,
		Content:          string(serverMessage.Content),
		IsRead:           serverMessage.IsRead,
		Status:           serverMessage.Status,
		Seq:              serverMessage.Seq,
		SendTime:         serverMessage.SendTime,
		CreateTime:       serverMessage.CreateTime,
		AttachedInfo:     serverMessage.AttachedInfo,
		Ex:               serverMessage.Ex,
	}
	if serverMessage.SessionType == constant.WriteGroupChatType || serverMessage.SessionType == constant.ReadGroupChatType {
		localMessage.RecvID = serverMessage.GroupID
	}
	return localMessage
}

func LocalChatLogToIMMessage(localMessage *model_struct.LocalChatLog) *sdkpb.IMMessage {
	message := &sdkpb.IMMessage{
		ClientMsgID:      localMessage.ClientMsgID,
		ServerMsgID:      localMessage.ServerMsgID,
		CreateTime:       localMessage.CreateTime,
		SendTime:         localMessage.SendTime,
		SessionType:      sdkpb.SessionType(localMessage.SessionType),
		SendID:           localMessage.SendID,
		RecvID:           localMessage.RecvID,
		MsgFrom:          sdkpb.MsgFrom(localMessage.MsgFrom),
		ContentType:      sdkpb.ContentType(localMessage.ContentType),
		SenderPlatformID: sdkpb.Platform(localMessage.SenderPlatformID),
		SenderNickname:   localMessage.SenderNickname,
		SenderFaceURL:    localMessage.SenderFaceURL,
		Seq:              localMessage.Seq,
		IsRead:           localMessage.IsRead,
		Status:           sdkpb.MsgStatus(localMessage.Status),
		Ex:               localMessage.Ex,
		LocalEx:          localMessage.LocalEx,
	}
	mustStringToMsgContent(localMessage.Content, message)
	var attachedInfo sdkpb.AttachedInfoElem
	err := utils.JsonStringToStruct(localMessage.AttachedInfo, &attachedInfo)
	if err != nil {
		log.ZWarn(context.Background(), "JsonStringToStruct error", err, "localMessage.AttachedInfo", localMessage.AttachedInfo)
	}
	message.AttachedInfoElem = &attachedInfo

	switch localMessage.SessionType {
	case constant.WriteGroupChatType:
		fallthrough
	case constant.ReadGroupChatType:
		message.GroupID = localMessage.RecvID
	}
	return message
}

func LocalConversationToSdkPB(conversation *model_struct.LocalConversation) *sdkpb.Conversation {
	return &sdkpb.Conversation{
		ConversationID:    conversation.ConversationID,
		ConversationType:  conversation.ConversationType,
		UserID:            conversation.UserID,
		GroupID:           conversation.GroupID,
		ShowName:          conversation.ShowName,
		FaceURL:           conversation.FaceURL,
		RecvMsgOpt:        conversation.RecvMsgOpt,
		UnreadCount:       conversation.UnreadCount,
		GroupAtType:       conversation.GroupAtType,
		LatestMsg:         conversation.LatestMsg,
		LatestMsgSendTime: conversation.LatestMsgSendTime,
		DraftText:         conversation.DraftText,
		DraftTextTime:     conversation.DraftTextTime,
		IsPinned:          conversation.IsPinned,
		IsPrivateChat:     conversation.IsPrivateChat,
		BurnDuration:      conversation.BurnDuration,
		MsgDestructTime:   conversation.MsgDestructTime,
		Ex:                conversation.Ex,
		IsMsgDestruct:     conversation.IsMsgDestruct,
	}
}

func sdkOfflinePushInfoToServerOfflinePushInfo(offlinePushInfo *sdkpb.OfflinePushInfo) *sdkws.OfflinePushInfo {
	return &sdkws.OfflinePushInfo{
		Title:         offlinePushInfo.Title,
		Desc:          offlinePushInfo.Desc,
		Ex:            offlinePushInfo.Ex,
		IOSPushSound:  offlinePushInfo.IOSPushSound,
		IOSBadgeCount: offlinePushInfo.IOSBadgeCount,
		SignalInfo:    offlinePushInfo.SignalInfo,
	}
}

func IMMessageToMsgData(message *sdkpb.IMMessage) *sdkws.MsgData {
	return &sdkws.MsgData{
		ClientMsgID:      message.ClientMsgID,
		ServerMsgID:      message.ServerMsgID,
		SendID:           message.SendID,
		RecvID:           message.RecvID,
		GroupID:          message.GroupID,
		SenderPlatformID: int32(message.SenderPlatformID),
		SenderNickname:   message.SenderNickname,
		SenderFaceURL:    message.SenderFaceURL,
		SessionType:      int32(message.SessionType),
		MsgFrom:          int32(message.MsgFrom),
		ContentType:      int32(message.ContentType),
		Content:          stringutil.StructToJsonBytes(message.Content),
		IsRead:           message.IsRead,
		Status:           int32(message.Status),
		Seq:              message.Seq,
		SendTime:         message.SendTime,
		CreateTime:       message.CreateTime,
		AttachedInfo:     utils.StructToJsonString(message.AttachedInfoElem),
		Ex:               message.Ex,
	}
}
