package conversation_msg

import (
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	commonpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
	pbConversation "github.com/openimsdk/protocol/conversation"
	"github.com/openimsdk/protocol/sdkws"
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
	switch commonpb.SessionType(serverMessage.SessionType) {
	case commonpb.SessionType_WriteGroupChatType, commonpb.SessionType_ReadGroupChatType:
		localMessage.RecvID = serverMessage.GroupID
	}
	return localMessage
}

func LocalConversationToSdkPB(conversation *model_struct.LocalConversation) *sdkpb.IMConversation {
	return &sdkpb.IMConversation{
		ConversationID:   conversation.ConversationID,
		ConversationType: commonpb.SessionType(conversation.ConversationType),
		UserID:           conversation.UserID,
		GroupID:          conversation.GroupID,
		ShowName:         conversation.ShowName,
		FaceURL:          conversation.FaceURL,
		RecvMsgOpt:       commonpb.ConvRecvMsgOpt(conversation.RecvMsgOpt),
		UnreadCount:      conversation.UnreadCount,
		GroupAtType:      commonpb.ConvGroupAtType(conversation.GroupAtType),
		//todo
		//LatestMsg:         conversation.LatestMsg,
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

func sdkOfflinePushInfoToServerOfflinePushInfo(offlinePushInfo *commonpb.OfflinePushInfo) *sdkws.OfflinePushInfo {
	return &sdkws.OfflinePushInfo{
		Title:         offlinePushInfo.Title,
		Desc:          offlinePushInfo.Desc,
		Ex:            offlinePushInfo.Ex,
		IOSPushSound:  offlinePushInfo.IOSPushSound,
		IOSBadgeCount: offlinePushInfo.IOSBadgeCount,
		SignalInfo:    offlinePushInfo.SignalInfo,
	}
}
