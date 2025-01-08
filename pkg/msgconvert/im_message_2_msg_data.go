package msgconvert

import (
	"context"
	"encoding/json"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
	"github.com/openimsdk/protocol/sdkws"
)

func IMMessageToMsgData(ctx context.Context, message *shared.IMMessage) *sdkws.MsgData {
	content, err := message.FormatContent()
	if err != nil {
		panic(err)
	}
	attached, err := json.Marshal(message.AttachedInfoElem)
	if err != nil {
		panic(err)
	}
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
		Content:          content,
		IsRead:           message.IsRead,
		Status:           int32(message.Status),
		Seq:              message.Seq,
		SendTime:         message.SendTime,
		CreateTime:       message.CreateTime,
		AttachedInfo:     string(attached),
		Ex:               message.Ex,
	}
}
