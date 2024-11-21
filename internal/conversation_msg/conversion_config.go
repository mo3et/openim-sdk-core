package conversation_msg

import (
	commonpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
)

type mateType struct {
	New          func() any // elem
	Get          func(oneof any) any
	Set          func(msg *sdkpb.IMMessage, elem any)
	Notification bool
}

var MateTypeMap = map[commonpb.ContentType]mateType{
	// message
	commonpb.ContentType_Text: {
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
	commonpb.ContentType_Picture: {
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
	commonpb.ContentType_Sound: {
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
	commonpb.ContentType_Video: {
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
	commonpb.ContentType_File: {
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
	commonpb.ContentType_AtText: {
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
	commonpb.ContentType_Merge: {
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
	commonpb.ContentType_Card: {
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
	commonpb.ContentType_Location: {
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
	commonpb.ContentType_Custom: {
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
	commonpb.ContentType_Typing: {
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
	commonpb.ContentType_Quote: {
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
	commonpb.ContentType_Face: {
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
	commonpb.ContentType_AdvancedText: {
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
	// notification
	commonpb.ContentType_FriendApplicationApprovedNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationApprovedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_AdvancedTextElem).AdvancedTextElem
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_AdvancedTextElem{AdvancedTextElem: elem.(*sdkpb.AdvancedTextElem)}
		},
	},
	commonpb.ContentType_FriendApplicationRejectedNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_FriendApplicationNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_FriendAddedNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_FriendDeletedNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_FriendRemarkSetNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_BlackAddedNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_BlackDeletedNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_FriendInfoUpdatedNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_FriendsInfoUpdateNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_ConversationChangeNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_UserInfoUpdatedNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_UserStatusChangeNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_UserCommandAddNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_UserCommandDeleteNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_UserCommandUpdateNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_GroupCreatedNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_GroupInfoSetNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_JoinGroupApplicationNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_MemberQuitNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_GroupApplicationAcceptedNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_GroupApplicationRejectedNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_GroupOwnerTransferredNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_MemberKickedNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_MemberInvitedNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_MemberEnterNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_GroupDismissedNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_GroupMemberMutedNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_GroupMemberCancelMutedNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_GroupMutedNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_GroupCancelMutedNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_GroupMemberInfoSetNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_GroupMemberSetToAdminNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_GroupMemberSetToOrdinaryUserNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_GroupInfoSetAnnouncementNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_GroupInfoSetNameNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_ConversationPrivateChatNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_ClearConversationNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_BusinessNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_RevokeNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_DeleteMsgsNotification: {
		Notification: true,
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
	commonpb.ContentType_HasReadReceipt: {
		New: func() any {
			return &sdkpb.FriendApplicationRejectedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
		},
		Set: func(msg *sdkpb.IMMessage, elem any) {
			msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
		},
	},
}
