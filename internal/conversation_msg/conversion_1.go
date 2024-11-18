package conversation_msg

import (
	"context"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/constant"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/utils"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto"
	"github.com/openimsdk/tools/errs"
	"github.com/openimsdk/tools/log"
)

func IMMessageToLocalChatLog(msg *sdkpb.IMMessage) *model_struct.LocalChatLog {
	m := MateTypeMap[msg.ContentType]
	localMessage := &model_struct.LocalChatLog{
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
		Content:          utils.StructToJsonString(m.Get(msg.Content)),
		IsRead:           msg.IsRead,
		Status:           int32(msg.Status),
		Seq:              msg.Seq,
		SendTime:         msg.SendTime,
		CreateTime:       msg.CreateTime,
		AttachedInfo:     utils.StructToJsonString(msg.AttachedInfoElem),
		Ex:               msg.Ex,
		LocalEx:          msg.LocalEx,
	}
	if msg.SessionType == constant.WriteGroupChatType || msg.SessionType == constant.ReadGroupChatType {
		localMessage.RecvID = msg.GroupID
	}
	return localMessage
}

func stringToMsgContent(ctx context.Context, content string, msg *sdkpb.IMMessage) error {
	m, ok := MateTypeMap[msg.ContentType]
	if !ok {
		return errs.ErrArgs.WrapMsg("not support content type")
	}
	elem := m.New()
	var err error
	if m.Notification {
		err = unmarshalNotificationElem(content, elem)
	} else {
		err = utils.JsonStringToStruct(content, elem)
	}
	if err != nil {
		log.ZError(ctx, "stringToMsgContent failed", err, "notification", m.Notification, "msg", msg, "content", content)
	}
	m.Set(msg, elem)
	return nil
}

func unmarshalNotificationElem(content string, tips any) error {
	var elem notificationElem
	if err := utils.JsonStringToStruct(content, &elem); err != nil {
		return err
	}
	return utils.JsonStringToStruct(elem.Detail, tips)
}

type notificationElem struct {
	Detail string `json:"detail,omitempty"`
}
