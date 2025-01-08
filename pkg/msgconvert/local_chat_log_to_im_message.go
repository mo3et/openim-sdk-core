package msgconvert

import (
	"context"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
)

func LocalChatLogToIMMessage(ctx context.Context, msg *model_struct.LocalChatLog) *shared.IMMessage {
	if msg == nil {
		return nil
	}
	message := &shared.IMMessage{
		ClientMsgID:      msg.ClientMsgID,
		ServerMsgID:      msg.ServerMsgID,
		CreateTime:       msg.CreateTime,
		SendTime:         msg.SendTime,
		SessionType:      common.SessionType(msg.SessionType),
		SendID:           msg.SendID,
		RecvID:           msg.RecvID,
		MsgFrom:          common.MsgFrom(msg.MsgFrom),
		ContentType:      common.ContentType(msg.ContentType),
		SenderPlatformID: common.Platform(msg.SenderPlatformID),
		SenderNickname:   msg.SenderNickname,
		SenderFaceURL:    msg.SenderFaceURL,
		Seq:              msg.Seq,
		IsRead:           msg.IsRead,
		Status:           common.MsgStatus(msg.Status),
		Ex:               msg.Ex,
		LocalEx:          msg.LocalEx,
		AttachedInfoElem: &shared.AttachedInfoElem{
			IsPrivateChat: msg.GetAttachedInfo().GetIsPrivateChat(),
			BurnDuration:  msg.GetAttachedInfo().GetBurnDuration(),
			HasReadTime:   msg.GetAttachedInfo().GetHasReadTime(),
		},
	}
	if progress := msg.GetAttachedInfo().GetProgress(); progress != nil {
		message.AttachedInfoElem.Progress = &shared.UploadProgress{
			Total:    msg.AttachedInfo.Progress.Total,
			Save:     msg.AttachedInfo.Progress.Save,
			Current:  msg.AttachedInfo.Progress.Current,
			UploadID: msg.AttachedInfo.Progress.UploadID,
		}
	}
	switch message.SessionType {
	case common.SessionType_WriteGroup, common.SessionType_ReadGroup:
		message.GroupID = msg.RecvID
	}
	toIMMessageContent(ctx, message, msg.Content)
	return message
}
