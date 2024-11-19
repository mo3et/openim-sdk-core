package conversation_msg

import (
	"context"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/constant"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/utils"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto"
	"github.com/openimsdk/protocol/sdkws"
	"github.com/openimsdk/tools/log"
	"github.com/openimsdk/tools/utils/stringutil"
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
		AttachedInfoElem: &sdkpb.AttachedInfoElem{},
	}
	stringToMsgContent(message, localMessage.Content)
	err := utils.JsonStringToStruct(localMessage.AttachedInfo, message.AttachedInfoElem)
	if err != nil {
		log.ZWarn(context.Background(), "JsonStringToStruct error", err, "localMessage.AttachedInfo", localMessage.AttachedInfo)
	}

	switch localMessage.SessionType {
	case constant.WriteGroupChatType:
		fallthrough
	case constant.ReadGroupChatType:
		message.GroupID = localMessage.RecvID
	}
	return message
}

func IMMessageToMsgData(message *sdkpb.IMMessage) *sdkws.MsgData {
	m := MateTypeMap[message.ContentType]
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
		Content:          stringutil.StructToJsonBytes(m.Get(message.Content)),
		IsRead:           message.IsRead,
		Status:           int32(message.Status),
		Seq:              message.Seq,
		SendTime:         message.SendTime,
		CreateTime:       message.CreateTime,
		AttachedInfo:     utils.StructToJsonString(message.AttachedInfoElem),
		Ex:               message.Ex,
	}
}

func MsgDataToIMMessage(msgData *sdkws.MsgData) *sdkpb.IMMessage {
	message := &sdkpb.IMMessage{
		ClientMsgID:      msgData.ClientMsgID,
		ServerMsgID:      msgData.ServerMsgID,
		CreateTime:       msgData.CreateTime,
		SendTime:         msgData.SendTime,
		SessionType:      sdkpb.SessionType(msgData.SessionType),
		SendID:           msgData.SendID,
		RecvID:           msgData.RecvID,
		GroupID:          msgData.GroupID,
		MsgFrom:          sdkpb.MsgFrom(msgData.MsgFrom),
		ContentType:      sdkpb.ContentType(msgData.ContentType),
		SenderPlatformID: sdkpb.Platform(msgData.SenderPlatformID),
		SenderNickname:   msgData.SenderNickname,
		SenderFaceURL:    msgData.SenderFaceURL,
		Seq:              msgData.Seq,
		IsRead:           msgData.IsRead,
		Status:           sdkpb.MsgStatus(msgData.Status),
		Ex:               msgData.Ex,
		AttachedInfoElem: &sdkpb.AttachedInfoElem{},
	}
	if err := utils.JsonStringToStruct(msgData.AttachedInfo, message.AttachedInfoElem); err != nil {
		log.ZWarn(context.Background(), "JsonStringToStruct error", err, "msgData.AttachedInfo", msgData.AttachedInfo)
	}
	stringToMsgContent(message, string(msgData.Content))
	return message
}

func stringToMsgContent(msg *sdkpb.IMMessage, content string) {
	m, ok := MateTypeMap[msg.ContentType]
	if !ok {
		log.ZError(context.Background(), "stringToMsgContent unknown content type", nil, "msg", msg, "contentType", msg.ContentType, "content", content)
		return
	}
	elem := m.New()
	var err error
	if m.Notification {
		err = unmarshalNotificationElem(content, elem)
	} else {
		err = utils.JsonStringToStruct(content, elem)
	}
	if err != nil {
		log.ZError(context.Background(), "stringToMsgContent unmarshal", err, "msg", msg, "notification", m.Notification, "content", content)
	}
	m.Set(msg, elem)
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
