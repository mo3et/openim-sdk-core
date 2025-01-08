package msgconvert

import (
	"context"
	"encoding/json"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
	"github.com/openimsdk/protocol/sdkws"
	"github.com/openimsdk/tools/log"
)

func MsgDataToIMMessage(ctx context.Context, msg *sdkws.MsgData) *shared.IMMessage {
	message := &shared.IMMessage{
		ClientMsgID:      msg.ClientMsgID,
		ServerMsgID:      msg.ServerMsgID,
		CreateTime:       msg.CreateTime,
		SendTime:         msg.SendTime,
		SessionType:      common.SessionType(msg.SessionType),
		SendID:           msg.SendID,
		RecvID:           msg.RecvID,
		GroupID:          msg.GroupID,
		MsgFrom:          common.MsgFrom(msg.MsgFrom),
		ContentType:      common.ContentType(msg.ContentType),
		SenderPlatformID: common.Platform(msg.SenderPlatformID),
		SenderNickname:   msg.SenderNickname,
		SenderFaceURL:    msg.SenderFaceURL,
		Seq:              msg.Seq,
		IsRead:           msg.IsRead,
		Status:           common.MsgStatus(msg.Status),
		Ex:               msg.Ex,
		AttachedInfoElem: &shared.AttachedInfoElem{},
	}
	switch message.SessionType {
	case common.SessionType_WriteGroup, common.SessionType_ReadGroup:
		message.RecvID = msg.GroupID
	}
	if msg.AttachedInfo != "" {
		if err := json.Unmarshal([]byte(msg.AttachedInfo), message.AttachedInfoElem); err != nil {
			log.ZWarn(ctx, "Unmarshal MsgData AttachedInfo error", err, "srv.AttachedInfo", msg.AttachedInfo, "message", msg)
		}
	}
	toIMMessageContent(ctx, message, string(msg.Content))
	return message
}
