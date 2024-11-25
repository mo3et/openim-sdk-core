package conversation_msg

import (
	commonpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
)

type mateType struct {
	N   bool       // notification
	New func() any // elem
	Get func(oneof any) any
	Set func(msg *sdkpb.IMMessage, elem any)
}

var (
	MateTypeMap = map[commonpb.ContentType]mateType{
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
		commonpb.ContentType_RevokedNotification: {
			N: true,
			New: func() any {
				return &sdkpb.RevokedTips{}
			},
			Get: func(oneof any) any {
				return oneof.(*sdkpb.IMMessage_RevokedTips).RevokedTips
			},
			Set: func(msg *sdkpb.IMMessage, elem any) {
				msg.Content = &sdkpb.IMMessage_RevokedTips{RevokedTips: elem.(*sdkpb.RevokedTips)}
			},
		},
		commonpb.ContentType_FriendAddedNotification: {
			N: true,
			New: func() any {
				return &sdkpb.FriendAddedTips{}
			},
			Get: func(oneof any) any {
				return oneof.(*sdkpb.IMMessage_FriendAddedTips).FriendAddedTips
			},
			Set: func(msg *sdkpb.IMMessage, elem any) {
				msg.Content = &sdkpb.IMMessage_FriendAddedTips{FriendAddedTips: elem.(*sdkpb.FriendAddedTips)}
			},
		},
		commonpb.ContentType_GroupCreatedNotification: {
			N: true,
			New: func() any {
				return &sdkpb.GroupCreatedTips{}
			},
			Get: func(oneof any) any {
				return oneof.(*sdkpb.IMMessage_GroupCreatedTips).GroupCreatedTips
			},
			Set: func(msg *sdkpb.IMMessage, elem any) {
				msg.Content = &sdkpb.IMMessage_GroupCreatedTips{GroupCreatedTips: elem.(*sdkpb.GroupCreatedTips)}
			},
		},
		commonpb.ContentType_MemberQuitNotification: {
			N: true,
			New: func() any {
				return &sdkpb.MemberQuitTips{}
			},
			Get: func(oneof any) any {
				return oneof.(*sdkpb.IMMessage_MemberQuitTips).MemberQuitTips
			},
			Set: func(msg *sdkpb.IMMessage, elem any) {
				msg.Content = &sdkpb.IMMessage_MemberQuitTips{MemberQuitTips: elem.(*sdkpb.MemberQuitTips)}
			},
		},
		commonpb.ContentType_GroupOwnerTransferredNotification: {
			N: true,
			New: func() any {
				return &sdkpb.GroupOwnerTransferredTips{}
			},
			Get: func(oneof any) any {
				return oneof.(*sdkpb.IMMessage_GroupOwnerTransferredTips).GroupOwnerTransferredTips
			},
			Set: func(msg *sdkpb.IMMessage, elem any) {
				msg.Content = &sdkpb.IMMessage_GroupOwnerTransferredTips{GroupOwnerTransferredTips: elem.(*sdkpb.GroupOwnerTransferredTips)}
			},
		},
		commonpb.ContentType_MemberKickedNotification: {
			N: true,
			New: func() any {
				return &sdkpb.MemberKickedTips{}
			},
			Get: func(oneof any) any {
				return oneof.(*sdkpb.IMMessage_MemberKickedTips).MemberKickedTips
			},
			Set: func(msg *sdkpb.IMMessage, elem any) {
				msg.Content = &sdkpb.IMMessage_MemberKickedTips{MemberKickedTips: elem.(*sdkpb.MemberKickedTips)}
			},
		},
		commonpb.ContentType_MemberInvitedNotification: {
			N: true,
			New: func() any {
				return &sdkpb.MemberInvitedTips{}
			},
			Get: func(oneof any) any {
				return oneof.(*sdkpb.IMMessage_MemberInvitedTips).MemberInvitedTips
			},
			Set: func(msg *sdkpb.IMMessage, elem any) {
				msg.Content = &sdkpb.IMMessage_MemberInvitedTips{MemberInvitedTips: elem.(*sdkpb.MemberInvitedTips)}
			},
		},
		commonpb.ContentType_MemberEnterNotification: {
			N: true,
			New: func() any {
				return &sdkpb.MemberEnterTips{}
			},
			Get: func(oneof any) any {
				return oneof.(*sdkpb.IMMessage_MemberEnterTips).MemberEnterTips
			},
			Set: func(msg *sdkpb.IMMessage, elem any) {
				msg.Content = &sdkpb.IMMessage_MemberEnterTips{MemberEnterTips: elem.(*sdkpb.MemberEnterTips)}
			},
		},
		commonpb.ContentType_GroupDismissedNotification: {
			N: true,
			New: func() any {
				return &sdkpb.GroupDismissedTips{}
			},
			Get: func(oneof any) any {
				return oneof.(*sdkpb.IMMessage_GroupDismissedTips).GroupDismissedTips
			},
			Set: func(msg *sdkpb.IMMessage, elem any) {
				msg.Content = &sdkpb.IMMessage_GroupDismissedTips{GroupDismissedTips: elem.(*sdkpb.GroupDismissedTips)}
			},
		},
		commonpb.ContentType_GroupMemberMutedNotification: {
			N: true,
			New: func() any {
				return &sdkpb.GroupMemberMutedTips{}
			},
			Get: func(oneof any) any {
				return oneof.(*sdkpb.IMMessage_GroupMemberMutedTips).GroupMemberMutedTips
			},
			Set: func(msg *sdkpb.IMMessage, elem any) {
				msg.Content = &sdkpb.IMMessage_GroupMemberMutedTips{GroupMemberMutedTips: elem.(*sdkpb.GroupMemberMutedTips)}
			},
		},
		commonpb.ContentType_GroupMemberCancelMutedNotification: {
			N: true,
			New: func() any {
				return &sdkpb.GroupMemberCancelMutedTips{}
			},
			Get: func(oneof any) any {
				return oneof.(*sdkpb.IMMessage_GroupMemberCancelMutedTips).GroupMemberCancelMutedTips
			},
			Set: func(msg *sdkpb.IMMessage, elem any) {
				msg.Content = &sdkpb.IMMessage_GroupMemberCancelMutedTips{GroupMemberCancelMutedTips: elem.(*sdkpb.GroupMemberCancelMutedTips)}
			},
		},
		commonpb.ContentType_GroupMutedNotification: {
			N: true,
			New: func() any {
				return &sdkpb.GroupMutedTips{}
			},
			Get: func(oneof any) any {
				return oneof.(*sdkpb.IMMessage_GroupMutedTips).GroupMutedTips
			},
			Set: func(msg *sdkpb.IMMessage, elem any) {
				msg.Content = &sdkpb.IMMessage_GroupMutedTips{GroupMutedTips: elem.(*sdkpb.GroupMutedTips)}
			},
		},
		commonpb.ContentType_GroupCancelMutedNotification: {
			N: true,
			New: func() any {
				return &sdkpb.GroupCancelMutedTips{}
			},
			Get: func(oneof any) any {
				return oneof.(*sdkpb.IMMessage_GroupCancelMutedTips).GroupCancelMutedTips
			},
			Set: func(msg *sdkpb.IMMessage, elem any) {
				msg.Content = &sdkpb.IMMessage_GroupCancelMutedTips{GroupCancelMutedTips: elem.(*sdkpb.GroupCancelMutedTips)}
			},
		},
		commonpb.ContentType_ConversationPrivateChatNotification: {
			N: true,
			New: func() any {
				return &sdkpb.ConversationPrivateChatTips{}
			},
			Get: func(oneof any) any {
				return oneof.(*sdkpb.IMMessage_ConversationPrivateChatTips).ConversationPrivateChatTips
			},
			Set: func(msg *sdkpb.IMMessage, elem any) {
				msg.Content = &sdkpb.IMMessage_ConversationPrivateChatTips{ConversationPrivateChatTips: elem.(*sdkpb.ConversationPrivateChatTips)}
			},
		},
		commonpb.ContentType_BusinessNotification: {
			N: true,
			New: func() any {
				return &sdkpb.BusinessTips{}
			},
			Get: func(oneof any) any {
				return oneof.(*sdkpb.IMMessage_BusinessTips).BusinessTips
			},
			Set: func(msg *sdkpb.IMMessage, elem any) {
				msg.Content = &sdkpb.IMMessage_BusinessTips{BusinessTips: elem.(*sdkpb.BusinessTips)}
			},
		},
	}
)
