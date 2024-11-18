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

/*
  Text
  Picture
  Sound
  Video
  File
  AtText
  Merger
  Card
  Location
  Custom
  Typing
  Quote
  Face
  AdvancedText
  CustomMsgNotTriggerConversation
  CustomMsgOnlineOnly
*/

type mateType struct {
	New func() any // elem
	Get func(oneof any) any
	Set func(msg *sdkpb.IMMessage, elem any)
}

var MateTypeMap = map[sdkpb.ContentType]mateType{
	sdkpb.ContentType_Text: {
		New: func() any {
			return &sdkpb.TextElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_TextElem).TextElem
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_TextElem{TextElem: elem.(*sdkpb.TextElem)}
		},
	},
}

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
	if err := utils.JsonStringToStruct(content, elem); err != nil {
		log.ZError(ctx, "mustStringToMsgContent failed", err, "msg", msg, "content", content)
	}
	m.Set(msg, elem)
	return nil
}
