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
  sdkpb.ContentType_Text
  sdkpb.ContentType_Picture
  sdkpb.ContentType_Typing
  sdkpb.ContentType_Video
  sdkpb.ContentType_File
  sdkpb.ContentType_AtText
  sdkpb.ContentType_Merger
  sdkpb.ContentType_Card
  sdkpb.ContentType_Location
  sdkpb.ContentType_Custom
  sdkpb.ContentType_Typing
  sdkpb.ContentType_Quote
  sdkpb.ContentType_Face
  sdkpb.ContentType_AdvancedText
  sdkpb.ContentType_CustomMsgNotTriggerConversation
  sdkpb.ContentType_CustomMsgOnlineOnly
*/

type mateType struct {
	New          func() any // elem
	Get          func(oneof any) any
	Set          func(msg *sdkpb.IMMessage, elem any)
	Notification bool
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
	sdkpb.ContentType_Picture: {
		New: func() any {
			return &sdkpb.PictureElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_PictureElem).PictureElem
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_PictureElem{PictureElem: elem.(*sdkpb.PictureElem)}
		},
	},
	sdkpb.ContentType_Sound: {
		New: func() any {
			return &sdkpb.SoundElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_SoundElem).SoundElem
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_SoundElem{SoundElem: elem.(*sdkpb.SoundElem)}
		},
	},
	sdkpb.ContentType_Video: {
		New: func() any {
			return &sdkpb.VideoElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_VideoElem).VideoElem
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_VideoElem{VideoElem: elem.(*sdkpb.VideoElem)}
		},
	},
	sdkpb.ContentType_File: {
		New: func() any {
			return &sdkpb.FileElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FileElem).FileElem
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FileElem{FileElem: elem.(*sdkpb.FileElem)}
		},
	},
	sdkpb.ContentType_AtText: {
		New: func() any {
			return &sdkpb.AtTextElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_AtTextElem).AtTextElem
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_AtTextElem{AtTextElem: elem.(*sdkpb.AtTextElem)}
		},
	},
	sdkpb.ContentType_Merge: {
		New: func() any {
			return &sdkpb.MergeElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_MergeElem).MergeElem
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_MergeElem{MergeElem: elem.(*sdkpb.MergeElem)}
		},
	},
	sdkpb.ContentType_Card: {
		New: func() any {
			return &sdkpb.CardElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_CardElem).CardElem
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_CardElem{CardElem: elem.(*sdkpb.CardElem)}
		},
	},
	sdkpb.ContentType_Location: {
		New: func() any {
			return &sdkpb.LocationElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_LocationElem).LocationElem
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_LocationElem{LocationElem: elem.(*sdkpb.LocationElem)}
		},
	},
	sdkpb.ContentType_Custom: {
		New: func() any {
			return &sdkpb.CustomElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_CustomElem).CustomElem
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_CustomElem{CustomElem: elem.(*sdkpb.CustomElem)}
		},
	},
	sdkpb.ContentType_Typing: {
		New: func() any {
			return &sdkpb.TypingElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_TypingElem).TypingElem
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_TypingElem{TypingElem: elem.(*sdkpb.TypingElem)}
		},
	},
	sdkpb.ContentType_Quote: {
		New: func() any {
			return &sdkpb.QuoteElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_QuoteElem).QuoteElem
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_QuoteElem{QuoteElem: elem.(*sdkpb.QuoteElem)}
		},
	},
	sdkpb.ContentType_Face: {
		New: func() any {
			return &sdkpb.FaceElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FaceElem).FaceElem
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FaceElem{FaceElem: elem.(*sdkpb.FaceElem)}
		},
	},
	sdkpb.ContentType_AdvancedText: {
		New: func() any {
			return &sdkpb.AdvancedTextElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_AdvancedTextElem).AdvancedTextElem
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_AdvancedTextElem{AdvancedTextElem: elem.(*sdkpb.AdvancedTextElem)}
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
