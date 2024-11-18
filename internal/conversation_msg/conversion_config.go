package conversation_msg

import (
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto"
)

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
