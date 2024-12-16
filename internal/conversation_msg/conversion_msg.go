package conversation_msg

import (
	"context"
	"encoding/json"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/common"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/constant"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/utils"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
	"github.com/openimsdk/protocol/sdkws"
	"github.com/openimsdk/tools/log"
)

func pbToDbAttached(attached *sdkpb.AttachedInfoElem) *model_struct.AttachedInfoElem {
	elem := &model_struct.AttachedInfoElem{
		IsPrivateChat: attached.GetIsPrivateChat(),
		BurnDuration:  attached.GetBurnDuration(),
		HasReadTime:   attached.GetHasReadTime(),
	}
	if attached.GetProgress() != nil {
		elem.Progress = &model_struct.UploadProgress{
			Total:    attached.Progress.Total,
			Save:     attached.Progress.Save,
			Current:  attached.Progress.Current,
			UploadID: attached.Progress.UploadID,
		}
	}
	return elem
}

func IMMessageToLocalChatLog(msg *sdkpb.IMMessage) *model_struct.LocalChatLog {
	content, err := msg.FormatContent()
	if err != nil {
		panic(err)
	}
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
		Content:          string(content),
		IsRead:           msg.IsRead,
		Status:           int32(msg.Status),
		Seq:              msg.Seq,
		SendTime:         msg.SendTime,
		CreateTime:       msg.CreateTime,
		AttachedInfo:     pbToDbAttached(msg.AttachedInfoElem),
		Ex:               msg.Ex,
		LocalEx:          msg.LocalEx,
	}
	if msg.SessionType == constant.WriteGroupChatType || msg.SessionType == constant.ReadGroupChatType {
		localMessage.RecvID = msg.GroupID
	}
	return localMessage
}
func LocalChatLogToIMMessage(localMessage *model_struct.LocalChatLog) *sdkpb.IMMessage {
	if localMessage == nil {
		return nil
	}
	message := &sdkpb.IMMessage{
		ClientMsgID:      localMessage.ClientMsgID,
		ServerMsgID:      localMessage.ServerMsgID,
		CreateTime:       localMessage.CreateTime,
		SendTime:         localMessage.SendTime,
		SessionType:      common.SessionType(localMessage.SessionType),
		SendID:           localMessage.SendID,
		RecvID:           localMessage.RecvID,
		MsgFrom:          common.MsgFrom(localMessage.MsgFrom),
		ContentType:      common.ContentType(localMessage.ContentType),
		SenderPlatformID: common.Platform(localMessage.SenderPlatformID),
		SenderNickname:   localMessage.SenderNickname,
		SenderFaceURL:    localMessage.SenderFaceURL,
		Seq:              localMessage.Seq,
		IsRead:           localMessage.IsRead,
		Status:           common.MsgStatus(localMessage.Status),
		Ex:               localMessage.Ex,
		LocalEx:          localMessage.LocalEx,
		AttachedInfoElem: &sdkpb.AttachedInfoElem{
			IsPrivateChat: localMessage.GetAttachedInfo().GetIsPrivateChat(),
			BurnDuration:  localMessage.GetAttachedInfo().GetBurnDuration(),
			HasReadTime:   localMessage.GetAttachedInfo().GetHasReadTime(),
		},
	}
	if localMessage.AttachedInfo.Progress != nil {
		message.AttachedInfoElem.Progress = &sdkpb.UploadProgress{
			Total:    localMessage.AttachedInfo.Progress.Total,
			Save:     localMessage.AttachedInfo.Progress.Save,
			Current:  localMessage.AttachedInfo.Progress.Current,
			UploadID: localMessage.AttachedInfo.Progress.UploadID,
		}
	}
	stringToMsgContent(message, localMessage.Content)
	switch localMessage.SessionType {
	case constant.WriteGroupChatType:
		fallthrough
	case constant.ReadGroupChatType:
		message.GroupID = localMessage.RecvID
	}
	return message
}

func IMMessageToMsgData(message *sdkpb.IMMessage) *sdkws.MsgData {
	content, err := message.FormatContent()
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
		SessionType:      common.SessionType(msgData.SessionType),
		SendID:           msgData.SendID,
		RecvID:           msgData.RecvID,
		GroupID:          msgData.GroupID,
		MsgFrom:          common.MsgFrom(msgData.MsgFrom),
		ContentType:      common.ContentType(msgData.ContentType),
		SenderPlatformID: common.Platform(msgData.SenderPlatformID),
		SenderNickname:   msgData.SenderNickname,
		SenderFaceURL:    msgData.SenderFaceURL,
		Seq:              msgData.Seq,
		IsRead:           msgData.IsRead,
		Status:           common.MsgStatus(msgData.Status),
		Ex:               msgData.Ex,
		AttachedInfoElem: &sdkpb.AttachedInfoElem{},
	}
	if msgData.AttachedInfo != "" {
		if err := utils.JsonStringToStruct(msgData.AttachedInfo, message.AttachedInfoElem); err != nil {
			log.ZWarn(context.Background(), "JsonStringToStruct error", err, "msgData.AttachedInfo", msgData.AttachedInfo)
		}
	}
	stringToMsgContent(message, string(msgData.Content))
	return message
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
		Status:           constant.MsgStatusSendSuccess,
		Seq:              serverMessage.Seq,
		SendTime:         serverMessage.SendTime,
		CreateTime:       serverMessage.CreateTime,
		AttachedInfo:     &model_struct.AttachedInfoElem{},
		Ex:               serverMessage.Ex,
	}
	if serverMessage.AttachedInfo != "" {
		if err := json.Unmarshal([]byte(serverMessage.AttachedInfo), localMessage.AttachedInfo); err != nil {
			log.ZWarn(context.Background(), "json.Unmarshal error", err, "serverMessage.AttachedInfo", serverMessage.AttachedInfo)
		}
	}
	switch common.SessionType(serverMessage.SessionType) {
	case common.SessionType_WriteGroup, common.SessionType_ReadGroup:
		localMessage.RecvID = serverMessage.GroupID
	}
	return localMessage
}

func stringToMsgContent(msg *sdkpb.IMMessage, content string) {
	m, ok := sdkpb.ContentTypeMap[msg.ContentType]
	if !ok {
		log.ZError(context.Background(), "stringToMsgContent unknown content type", nil, "msg", msg, "contentType", msg.ContentType, "content", content)
		return
	}
	elem := m.New()
	if err := utils.JsonStringToStruct(content, elem); err != nil {
		log.ZError(context.Background(), "stringToMsgContent unmarshal", err, "msg", msg, "notification", m.N, "content", content)
	}
	m.Set(msg, elem)
}
