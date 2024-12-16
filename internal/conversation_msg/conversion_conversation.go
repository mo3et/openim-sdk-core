package conversation_msg

import (
	"context"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	commonpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
	pbConversation "github.com/openimsdk/protocol/conversation"
	"github.com/openimsdk/protocol/sdkws"
)

func BatchCtx[A, B any](ctx context.Context, fn func(ctx context.Context, a A) B, ts []A) []B {
	if ts == nil {
		return nil
	}
	res := make([]B, 0, len(ts))
	for i := range ts {
		res = append(res, fn(ctx, ts[i]))
	}
	return res
}

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
	}
}

func LocalConversationToIMConversation(ctx context.Context, conversation *model_struct.LocalConversation) *sdkpb.IMConversation {
	return &sdkpb.IMConversation{
		ConversationID:    conversation.ConversationID,
		ConversationType:  commonpb.SessionType(conversation.ConversationType),
		UserID:            conversation.UserID,
		GroupID:           conversation.GroupID,
		ShowName:          conversation.ShowName,
		FaceURL:           conversation.FaceURL,
		RecvMsgOpt:        commonpb.ConvRecvMsgOpt(conversation.RecvMsgOpt),
		UnreadCount:       conversation.UnreadCount,
		GroupAtType:       commonpb.ConvGroupAtType(conversation.GroupAtType),
		LatestMsg:         LocalChatLogToIMMessage(ctx, conversation.LatestMsg),
		LatestMsgSendTime: conversation.LatestMsgSendTime,
		DraftText:         conversation.DraftText,
		DraftTextTime:     conversation.DraftTextTime,
		IsPinned:          conversation.IsPinned,
		IsPrivateChat:     conversation.IsPrivateChat,
		BurnDuration:      conversation.BurnDuration,
		Ex:                conversation.Ex,
	}
}

func sdkOfflinePushInfoToServerOfflinePushInfo(offlinePushInfo *commonpb.OfflinePushInfo) *sdkws.OfflinePushInfo {
	if offlinePushInfo == nil {
		return nil
	}
	return &sdkws.OfflinePushInfo{
		Title:         offlinePushInfo.Title,
		Desc:          offlinePushInfo.Desc,
		Ex:            offlinePushInfo.Ex,
		IOSPushSound:  offlinePushInfo.IOSPushSound,
		IOSBadgeCount: offlinePushInfo.IOSBadgeCount,
		SignalInfo:    offlinePushInfo.SignalInfo,
	}
}
