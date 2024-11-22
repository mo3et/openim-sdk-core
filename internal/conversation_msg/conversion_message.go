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

// TODO: 通知
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
	// notification
	//commonpb.ContentType_FriendApplicationApprovedNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.FriendApplicationApprovedTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_AdvancedTextElem).AdvancedTextElem
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_AdvancedTextElem{AdvancedTextElem: elem.(*sdkpb.AdvancedTextElem)}
	//	},
	//},
	//commonpb.ContentType_FriendApplicationRejectedNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.FriendApplicationRejectedTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_FriendApplicationRejectedTips).FriendApplicationRejectedTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: elem.(*sdkpb.FriendApplicationRejectedTips)}
	//	},
	//},
	//commonpb.ContentType_FriendApplicationNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.FriendApplicationTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_FriendApplicationTips).FriendApplicationTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_FriendApplicationTips{FriendApplicationTips: elem.(*sdkpb.FriendApplicationTips)}
	//	},
	//},
	//commonpb.ContentType_FriendAddedNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.FriendAddedTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_FriendAddedTips).FriendAddedTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_FriendAddedTips{FriendAddedTips: elem.(*sdkpb.FriendAddedTips)}
	//	},
	//},
	//commonpb.ContentType_FriendDeletedNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.FriendDeletedTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_FriendDeletedTips).FriendDeletedTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_FriendDeletedTips{FriendDeletedTips: elem.(*sdkpb.FriendDeletedTips)}
	//	},
	//},
	//commonpb.ContentType_FriendInfoChangedNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.FriendInfoChangedTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_FriendInfoChangedTips).FriendInfoChangedTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_FriendInfoChangedTips{FriendInfoChangedTips: elem.(*sdkpb.FriendInfoChangedTips)}
	//	},
	//},
	//commonpb.ContentType_BlackAddedNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.BlackAddedTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_BlackAddedTips).BlackAddedTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_BlackAddedTips{BlackAddedTips: elem.(*sdkpb.BlackAddedTips)}
	//	},
	//},
	//commonpb.ContentType_BlackDeletedNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.BlackDeletedTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_BlackDeletedTips).BlackDeletedTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_BlackDeletedTips{BlackDeletedTips: elem.(*sdkpb.BlackDeletedTips)}
	//	},
	//},
	////commonpb.ContentType_FriendRemarkSetNotification: {
	////	Notification: true,
	////	New: func() any {
	////		return &sdkpb.FriendInfoUpdatedTips{}
	////	},
	////	Get: func(oneof any) any {
	////		return oneof.(*sdkpb.IMMessage_FriendInfoUpdatedTips).FriendInfoUpdatedTips
	////	},
	////	Set: func(msg *sdkpb.IMMessage, elem any) {
	////		msg.Content = &sdkpb.IMMessage_FriendInfoUpdatedTips{FriendInfoUpdatedTips: elem.(*sdkpb.FriendInfoUpdatedTips)}
	////	},
	////},
	//commonpb.ContentType_FriendsInfoUpdateNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.FriendsInfoUpdateTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_FriendsInfoUpdateTips).FriendsInfoUpdateTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_FriendsInfoUpdateTips{FriendsInfoUpdateTips: elem.(*sdkpb.FriendsInfoUpdateTips)}
	//	},
	//},
	//commonpb.ContentType_ConversationChangeNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.ConversationChangeTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_ConversationChangeTips).ConversationChangeTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_ConversationChangeTips{ConversationChangeTips: elem.(*sdkpb.ConversationChangeTips)}
	//	},
	//},
	//commonpb.ContentType_UserInfoUpdatedNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.UserInfoUpdatedTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_UserInfoUpdatedTips).UserInfoUpdatedTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_UserInfoUpdatedTips{UserInfoUpdatedTips: elem.(*sdkpb.UserInfoUpdatedTips)}
	//	},
	//},
	//commonpb.ContentType_UserStatusChangeNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.UserStatusChangeTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_UserStatusChangeTips).UserStatusChangeTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_UserStatusChangeTips{UserStatusChangeTips: elem.(*sdkpb.UserStatusChangeTips)}
	//	},
	//},
	//commonpb.ContentType_UserCommandAddNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.UserCommandAddTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_UserCommandAddTips).UserCommandAddTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_UserCommandAddTips{UserCommandAddTips: elem.(*sdkpb.UserCommandAddTips)}
	//	},
	//},
	//commonpb.ContentType_UserCommandDeleteNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.UserCommandDeleteTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_UserCommandDeleteTips).UserCommandDeleteTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_UserCommandDeleteTips{UserCommandDeleteTips: elem.(*sdkpb.UserCommandDeleteTips)}
	//	},
	//},
	//commonpb.ContentType_UserCommandUpdateNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.UserCommandUpdateTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_UserCommandUpdateTips).UserCommandUpdateTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_UserCommandUpdateTips{UserCommandUpdateTips: elem.(*sdkpb.UserCommandUpdateTips)}
	//	},
	//},
	//commonpb.ContentType_GroupCreatedNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.GroupCreatedTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_GroupCreatedTips).GroupCreatedTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_GroupCreatedTips{GroupCreatedTips: elem.(*sdkpb.GroupCreatedTips)}
	//	},
	//},
	//commonpb.ContentType_GroupInfoSetNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.GroupInfoSetTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_GroupInfoSetTips).GroupInfoSetTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_GroupInfoSetTips{GroupInfoSetTips: elem.(*sdkpb.GroupInfoSetTips)}
	//	},
	//},
	//commonpb.ContentType_JoinGroupApplicationNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.JoinGroupApplicationTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_JoinGroupApplicationTips).JoinGroupApplicationTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_JoinGroupApplicationTips{JoinGroupApplicationTips: elem.(*sdkpb.JoinGroupApplicationTips)}
	//	},
	//},
	//commonpb.ContentType_MemberQuitNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.MemberQuitTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_MemberQuitTips).MemberQuitTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_MemberQuitTips{MemberQuitTips: elem.(*sdkpb.MemberQuitTips)}
	//	},
	//},
	//commonpb.ContentType_GroupApplicationAcceptedNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.GroupApplicationAcceptedTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_GroupApplicationAcceptedTips).GroupApplicationAcceptedTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_GroupApplicationAcceptedTips{GroupApplicationAcceptedTips: elem.(*sdkpb.GroupApplicationAcceptedTips)}
	//	},
	//},
	//commonpb.ContentType_GroupApplicationRejectedNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.GroupApplicationRejectedTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_GroupApplicationRejectedTips).GroupApplicationRejectedTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_GroupApplicationRejectedTips{GroupApplicationRejectedTips: elem.(*sdkpb.GroupApplicationRejectedTips)}
	//	},
	//},
	//commonpb.ContentType_GroupOwnerTransferredNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.GroupOwnerTransferredTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_GroupOwnerTransferredTips).GroupOwnerTransferredTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_GroupOwnerTransferredTips{GroupOwnerTransferredTips: elem.(*sdkpb.GroupOwnerTransferredTips)}
	//	},
	//},
	//commonpb.ContentType_MemberKickedNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.MemberKickedTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_MemberKickedTips).MemberKickedTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_MemberKickedTips{MemberKickedTips: elem.(*sdkpb.MemberKickedTips)}
	//	},
	//},
	//commonpb.ContentType_MemberInvitedNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.MemberInvitedTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_MemberInvitedTips).MemberInvitedTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_MemberInvitedTips{MemberInvitedTips: elem.(*sdkpb.MemberInvitedTips)}
	//	},
	//},
	//commonpb.ContentType_MemberEnterNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.MemberEnterTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_MemberEnterTips).MemberEnterTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_MemberEnterTips{MemberEnterTips: elem.(*sdkpb.MemberEnterTips)}
	//	},
	//},
	//commonpb.ContentType_GroupDismissedNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.GroupDismissedTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_GroupDismissedTips).GroupDismissedTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_GroupDismissedTips{GroupDismissedTips: elem.(*sdkpb.GroupDismissedTips)}
	//	},
	//},
	//commonpb.ContentType_GroupMemberMutedNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.GroupMemberMutedTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_GroupMemberMutedTips).GroupMemberMutedTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_GroupMemberMutedTips{GroupMemberMutedTips: elem.(*sdkpb.GroupMemberMutedTips)}
	//	},
	//},
	//commonpb.ContentType_GroupMemberCancelMutedNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.GroupMemberCancelMutedTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_GroupMemberCancelMutedTips).GroupMemberCancelMutedTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_GroupMemberCancelMutedTips{GroupMemberCancelMutedTips: elem.(*sdkpb.GroupMemberCancelMutedTips)}
	//	},
	//},
	//commonpb.ContentType_GroupMutedNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.GroupMutedTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_GroupMutedTips).GroupMutedTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_GroupMutedTips{GroupMutedTips: elem.(*sdkpb.GroupMutedTips)}
	//	},
	//},
	//commonpb.ContentType_GroupCancelMutedNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.GroupCancelMutedTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_GroupCancelMutedTips).GroupCancelMutedTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_GroupCancelMutedTips{GroupCancelMutedTips: elem.(*sdkpb.GroupCancelMutedTips)}
	//	},
	//},
	//commonpb.ContentType_GroupMemberInfoSetNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.GroupMemberInfoSetTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_GroupMemberInfoSetTips).GroupMemberInfoSetTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_GroupMemberInfoSetTips{GroupMemberInfoSetTips: elem.(*sdkpb.GroupMemberInfoSetTips)}
	//	},
	//},
	//commonpb.ContentType_GroupMemberSetToAdminNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.GroupMemberSetToAdminTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_GroupMemberSetToAdminTips).GroupMemberSetToAdminTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_GroupMemberSetToAdminTips{GroupMemberSetToAdminTips: elem.(*sdkpb.GroupMemberSetToAdminTips)}
	//	},
	//},
	//commonpb.ContentType_GroupMemberSetToOrdinaryUserNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.GroupMemberSetToOrdinaryUserTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_GroupMemberSetToOrdinaryUserTips).GroupMemberSetToOrdinaryUserTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_GroupMemberSetToOrdinaryUserTips{GroupMemberSetToOrdinaryUserTips: elem.(*sdkpb.GroupMemberSetToOrdinaryUserTips)}
	//	},
	//},
	//commonpb.ContentType_GroupInfoSetAnnouncementNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.GroupInfoSetAnnouncementTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_GroupInfoSetAnnouncementTips).GroupInfoSetAnnouncementTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_GroupInfoSetAnnouncementTips{GroupInfoSetAnnouncementTips: elem.(*sdkpb.GroupInfoSetAnnouncementTips)}
	//	},
	//},
	//commonpb.ContentType_GroupInfoSetNameNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.GroupInfoSetNameTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_GroupInfoSetNameTips).GroupInfoSetNameTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_GroupInfoSetNameTips{GroupInfoSetNameTips: elem.(*sdkpb.GroupInfoSetNameTips)}
	//	},
	//},
	//commonpb.ContentType_ConversationPrivateChatNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.ConversationPrivateChatTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_ConversationPrivateChatTips).ConversationPrivateChatTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_ConversationPrivateChatTips{ConversationPrivateChatTips: elem.(*sdkpb.ConversationPrivateChatTips)}
	//	},
	//},
	//commonpb.ContentType_ClearConversationNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.ClearConversationTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_ClearConversationTips).ClearConversationTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_ClearConversationTips{ClearConversationTips: elem.(*sdkpb.ClearConversationTips)}
	//	},
	//},
	//commonpb.ContentType_BusinessNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.BusinessTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_BusinessTips).BusinessTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_BusinessTips{BusinessTips: elem.(*sdkpb.BusinessTips)}
	//	},
	//},
	//commonpb.ContentType_RevokeNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.RevokeTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_RevokeTips).RevokeTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_RevokeTips{RevokeTips: elem.(*sdkpb.RevokeTips)}
	//	},
	//},
	//commonpb.ContentType_DeleteMsgsNotification: {
	//	Notification: true,
	//	New: func() any {
	//		return &sdkpb.DeleteMsgsTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_DeleteMsgsTips).DeleteMsgsTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_DeleteMsgsTips{DeleteMsgsTips: elem.(*sdkpb.DeleteMsgsTips)}
	//	},
	//},
	//commonpb.ContentType_HasReadReceipt: {
	//	New: func() any {
	//		return &sdkpb.HasReadTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*sdkpb.IMMessage_HasReadTips).HasReadTips
	//	},
	//	Set: func(msg *sdkpb.IMMessage, elem any) {
	//		msg.Content = &sdkpb.IMMessage_HasReadTips{HasReadTips: elem.(*sdkpb.HasReadTips)}
	//	},
	//},
}
