package shared

import (
	"context"
	"fmt"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	"github.com/openimsdk/tools/log"
)

type ContentTypeMate struct {
	N   bool       // notification
	New func() any // elem
	Get func(oneof any) any
	Set func(msg *IMMessage, elem any)
}

func GetContentType(ct common.ContentType) ContentTypeMate {
	val, ok := ContentTypeMap[ct]
	if !ok {
		panic(fmt.Errorf("unsupported content type %v => %s", ct, ct))
	}
	return val
}

var ContentTypeMap = map[common.ContentType]ContentTypeMate{
	// message
	common.ContentType_Text: {
		New: func() any {
			return &TextElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_TextElem).TextElem
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_TextElem{TextElem: elem.(*TextElem)}
		},
	},
	common.ContentType_Picture: {
		New: func() any {
			return &PictureElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_PictureElem).PictureElem
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_PictureElem{PictureElem: elem.(*PictureElem)}
		},
	},
	common.ContentType_Sound: {
		New: func() any {
			return &SoundElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_SoundElem).SoundElem
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_SoundElem{SoundElem: elem.(*SoundElem)}
		},
	},
	common.ContentType_Video: {
		New: func() any {
			return &VideoElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_VideoElem).VideoElem
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_VideoElem{VideoElem: elem.(*VideoElem)}
		},
	},
	common.ContentType_File: {
		New: func() any {
			return &FileElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_FileElem).FileElem
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_FileElem{FileElem: elem.(*FileElem)}
		},
	},
	common.ContentType_AtText: {
		New: func() any {
			return &AtTextElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_AtTextElem).AtTextElem
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_AtTextElem{AtTextElem: elem.(*AtTextElem)}
		},
	},
	common.ContentType_Merge: {
		New: func() any {
			return &MergeElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_MergeElem).MergeElem
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_MergeElem{MergeElem: elem.(*MergeElem)}
		},
	},
	common.ContentType_Card: {
		New: func() any {
			return &CardElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_CardElem).CardElem
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_CardElem{CardElem: elem.(*CardElem)}
		},
	},
	common.ContentType_Location: {
		New: func() any {
			return &LocationElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_LocationElem).LocationElem
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_LocationElem{LocationElem: elem.(*LocationElem)}
		},
	},
	common.ContentType_Custom: {
		New: func() any {
			return &CustomElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_CustomElem).CustomElem
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_CustomElem{CustomElem: elem.(*CustomElem)}
		},
	},
	common.ContentType_Typing: {
		New: func() any {
			return &TypingElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_TypingElem).TypingElem
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_TypingElem{TypingElem: elem.(*TypingElem)}
		},
	},
	common.ContentType_Quote: {
		New: func() any {
			return &QuoteElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_QuoteElem).QuoteElem
		},
		Set: func(msg *IMMessage, elem any) {
			tmp := elem
			if _, ok := tmp.(*TextElem); ok {
				log.ZWarn(context.Background(), "QuoteElem.TextElem is not supported", nil, "msg", msg, "elem", elem)
				func() {}()
			}
			msg.Content = &IMMessage_QuoteElem{QuoteElem: elem.(*QuoteElem)}
		},
	},
	common.ContentType_Face: {
		New: func() any {
			return &FaceElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_FaceElem).FaceElem
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_FaceElem{FaceElem: elem.(*FaceElem)}
		},
	},
	common.ContentType_AdvancedText: {
		New: func() any {
			return &AdvancedTextElem{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_AdvancedTextElem).AdvancedTextElem
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_AdvancedTextElem{AdvancedTextElem: elem.(*AdvancedTextElem)}
		},
	},
	common.ContentType_RevokedNotification: {
		N: true,
		New: func() any {
			return &RevokedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_RevokedTips).RevokedTips
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_RevokedTips{RevokedTips: elem.(*RevokedTips)}
		},
	},
	common.ContentType_FriendApplicationApprovedNotification: {
		N: true,
		New: func() any {
			return &FriendApplicationApprovedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_FriendApplicationApprovedTips).FriendApplicationApprovedTips
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_FriendApplicationApprovedTips{FriendApplicationApprovedTips: elem.(*FriendApplicationApprovedTips)}
		},
	},
	//common.ContentType_FriendAddedNotification: {
	//	N: true,
	//	New: func() any {
	//		return &FriendAddedTips{}
	//	},
	//	Get: func(oneof any) any {
	//		return oneof.(*IMMessage_FriendAddedTips).FriendAddedTips
	//	},
	//	Set: func(msg *IMMessage, elem any) {
	//		msg.Content = &IMMessage_FriendAddedTips{FriendAddedTips: elem.(*FriendAddedTips)}
	//	},
	//},
	common.ContentType_GroupCreatedNotification: {
		N: true,
		New: func() any {
			return &GroupCreatedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_GroupCreatedTips).GroupCreatedTips
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_GroupCreatedTips{GroupCreatedTips: elem.(*GroupCreatedTips)}
		},
	},
	common.ContentType_GroupInfoSetNameNotification: {
		N: true,
		New: func() any {
			return &GroupInfoSetNameTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_GroupInfoSetNameTips).GroupInfoSetNameTips
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_GroupInfoSetNameTips{GroupInfoSetNameTips: elem.(*GroupInfoSetNameTips)}
		},
	},
	common.ContentType_GroupInfoSetAnnouncementNotification: {
		N: true,
		New: func() any {
			return &GroupInfoSetAnnouncementTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_GroupInfoSetAnnouncementTips).GroupInfoSetAnnouncementTips
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_GroupInfoSetAnnouncementTips{GroupInfoSetAnnouncementTips: elem.(*GroupInfoSetAnnouncementTips)}
		},
	},
	common.ContentType_MemberQuitNotification: {
		N: true,
		New: func() any {
			return &MemberQuitTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_MemberQuitTips).MemberQuitTips
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_MemberQuitTips{MemberQuitTips: elem.(*MemberQuitTips)}
		},
	},
	common.ContentType_GroupOwnerTransferredNotification: {
		N: true,
		New: func() any {
			return &GroupOwnerTransferredTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_GroupOwnerTransferredTips).GroupOwnerTransferredTips
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_GroupOwnerTransferredTips{GroupOwnerTransferredTips: elem.(*GroupOwnerTransferredTips)}
		},
	},
	common.ContentType_MemberKickedNotification: {
		N: true,
		New: func() any {
			return &MemberKickedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_MemberKickedTips).MemberKickedTips
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_MemberKickedTips{MemberKickedTips: elem.(*MemberKickedTips)}
		},
	},
	common.ContentType_MemberInvitedNotification: {
		N: true,
		New: func() any {
			return &MemberInvitedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_MemberInvitedTips).MemberInvitedTips
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_MemberInvitedTips{MemberInvitedTips: elem.(*MemberInvitedTips)}
		},
	},
	common.ContentType_MemberEnterNotification: {
		N: true,
		New: func() any {
			return &MemberEnterTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_MemberEnterTips).MemberEnterTips
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_MemberEnterTips{MemberEnterTips: elem.(*MemberEnterTips)}
		},
	},
	common.ContentType_GroupDismissedNotification: {
		N: true,
		New: func() any {
			return &GroupDismissedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_GroupDismissedTips).GroupDismissedTips
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_GroupDismissedTips{GroupDismissedTips: elem.(*GroupDismissedTips)}
		},
	},
	common.ContentType_GroupMemberMutedNotification: {
		N: true,
		New: func() any {
			return &GroupMemberMutedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_GroupMemberMutedTips).GroupMemberMutedTips
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_GroupMemberMutedTips{GroupMemberMutedTips: elem.(*GroupMemberMutedTips)}
		},
	},
	common.ContentType_GroupMemberCancelMutedNotification: {
		N: true,
		New: func() any {
			return &GroupMemberCancelMutedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_GroupMemberCancelMutedTips).GroupMemberCancelMutedTips
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_GroupMemberCancelMutedTips{GroupMemberCancelMutedTips: elem.(*GroupMemberCancelMutedTips)}
		},
	},
	common.ContentType_GroupMutedNotification: {
		N: true,
		New: func() any {
			return &GroupMutedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_GroupMutedTips).GroupMutedTips
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_GroupMutedTips{GroupMutedTips: elem.(*GroupMutedTips)}
		},
	},
	common.ContentType_GroupCancelMutedNotification: {
		N: true,
		New: func() any {
			return &GroupCancelMutedTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_GroupCancelMutedTips).GroupCancelMutedTips
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_GroupCancelMutedTips{GroupCancelMutedTips: elem.(*GroupCancelMutedTips)}
		},
	},
	common.ContentType_ConversationPrivateChatNotification: {
		N: true,
		New: func() any {
			return &ConversationPrivateChatTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_ConversationPrivateChatTips).ConversationPrivateChatTips
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_ConversationPrivateChatTips{ConversationPrivateChatTips: elem.(*ConversationPrivateChatTips)}
		},
	},
	common.ContentType_BusinessNotification: {
		N: true,
		New: func() any {
			return &BusinessTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_BusinessTips).BusinessTips
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_BusinessTips{BusinessTips: elem.(*BusinessTips)}
		},
	},
	common.ContentType_OANotification: {
		N: true,
		New: func() any {
			return &OaTips{}
		},
		Get: func(oneof any) any {
			return oneof.(*IMMessage_OaTips).OaTips
		},
		Set: func(msg *IMMessage, elem any) {
			msg.Content = &IMMessage_OaTips{OaTips: elem.(*OaTips)}
		},
	},
}
