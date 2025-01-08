package msgconvert

import (
	"context"
	"encoding/json"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
	"github.com/openimsdk/tools/log"
)

func IMMessageToLocalChatLog(ctx context.Context, msg *shared.IMMessage) *model_struct.LocalChatLog {
	message := &model_struct.LocalChatLog{
		ClientMsgID:      msg.ClientMsgID,
		ServerMsgID:      msg.ServerMsgID,
		SendID:           msg.SendID,
		RecvID:           msg.RecvID,
		SenderPlatformID: int32(msg.SenderPlatformID),
		SenderNickname:   msg.SenderNickname,
		SenderFaceURL:    msg.SenderFaceURL,
		SessionType:      int32(msg.SessionType),
		MsgFrom:          int32(msg.MsgFrom),
		ContentType:      int32(msg.ContentType),
		IsRead:           msg.IsRead,
		Status:           int32(msg.Status),
		Seq:              msg.Seq,
		SendTime:         msg.SendTime,
		CreateTime:       msg.CreateTime,
		Ex:               msg.Ex,
		AttachedInfo: &model_struct.AttachedInfoElem{
			IsPrivateChat: msg.GetAttachedInfoElem().GetIsPrivateChat(),
			BurnDuration:  msg.GetAttachedInfoElem().GetBurnDuration(),
			HasReadTime:   msg.GetAttachedInfoElem().GetHasReadTime(),
		},
	}
	if progress := msg.GetAttachedInfoElem().GetProgress(); progress != nil {
		message.AttachedInfo.Progress = &model_struct.UploadProgress{
			Total:    progress.GetTotal(),
			Save:     progress.GetSave(),
			Current:  progress.GetCurrent(),
			UploadID: progress.GetUploadID(),
		}
	}
	switch msg.SessionType {
	case common.SessionType_WriteGroup, common.SessionType_ReadGroup:
		message.RecvID = msg.GroupID
	}
	var content []byte
	if errElem, ok := msg.Content.(*shared.IMMessage_ErrorElem); ok {
		message.ContentType = int32(errElem.ErrorElem.GetContentType())
		content = []byte(errElem.ErrorElem.GetContent())
	} else {
		var err error
		content, err = msg.FormatContent()
		if err != nil {
			log.ZWarn(ctx, "IMMessageToLocalChatLog FormatContent error", err, "msg", msg)
			tmp, _ := json.Marshal(msg.Content)
			elem := &shared.ErrorElem{
				ContentType: msg.ContentType,
				Content:     string(tmp),
				Cause:       err.Error(),
			}
			message.ContentType = int32(common.ContentType_Error)
			content, _ = json.Marshal(elem)
		}
	}
	message.Content = string(content)
	return message
}

func pbToDbAttached(attached *shared.AttachedInfoElem) *model_struct.AttachedInfoElem {
	elem := &model_struct.AttachedInfoElem{
		IsPrivateChat: attached.GetIsPrivateChat(),
		BurnDuration:  attached.GetBurnDuration(),
		HasReadTime:   attached.GetHasReadTime(),
	}
	if attached.GetProgress() != nil {
		elem.Progress = &model_struct.UploadProgress{
			Total:    attached.GetProgress().GetTotal(),
			Save:     attached.GetProgress().GetSave(),
			Current:  attached.GetProgress().GetCurrent(),
			UploadID: attached.GetProgress().GetUploadID(),
		}
	}
	return elem
}
