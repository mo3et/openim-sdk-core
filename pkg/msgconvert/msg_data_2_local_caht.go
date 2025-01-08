package msgconvert

import (
	"context"
	"encoding/json"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	"github.com/openimsdk/protocol/sdkws"
	"github.com/openimsdk/tools/log"
)

func MsgDataToLocalChatLog(ctx context.Context, msg *sdkws.MsgData) *model_struct.LocalChatLog {
	message := &model_struct.LocalChatLog{
		ClientMsgID:      msg.ClientMsgID,
		ServerMsgID:      msg.ServerMsgID,
		SendID:           msg.SendID,
		RecvID:           msg.RecvID,
		SenderPlatformID: msg.SenderPlatformID,
		SenderNickname:   msg.SenderNickname,
		SenderFaceURL:    msg.SenderFaceURL,
		SessionType:      msg.SessionType,
		MsgFrom:          msg.MsgFrom,
		ContentType:      msg.ContentType,
		Content:          string(msg.Content),
		IsRead:           msg.IsRead,
		Status:           int32(common.MsgStatus_SendSuccess),
		Seq:              msg.Seq,
		SendTime:         msg.SendTime,
		CreateTime:       msg.CreateTime,
		AttachedInfo:     &model_struct.AttachedInfoElem{},
		Ex:               msg.Ex,
	}
	switch common.SessionType(message.SessionType) {
	case common.SessionType_WriteGroup, common.SessionType_ReadGroup:
		message.RecvID = msg.GroupID
	}
	if msg.AttachedInfo != "" {
		if err := json.Unmarshal([]byte(msg.AttachedInfo), message.AttachedInfo); err != nil {
			log.ZWarn(ctx, "Unmarshal MsgData AttachedInfo error", err, "srv.AttachedInfo", msg.AttachedInfo, "message", msg)
		}
	}
	return message
}
