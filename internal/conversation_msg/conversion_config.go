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
	sdkpb.ContentType_FriendApplicationApprovedNotification: {
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
	sdkpb.ContentType_FriendApplicationRejectedNotification:    {},
	sdkpb.ContentType_FriendApplicationNotification:            {},
	sdkpb.ContentType_FriendAddedNotification:                  {},
	sdkpb.ContentType_FriendDeletedNotification:                {},
	sdkpb.ContentType_FriendRemarkSetNotification:              {},
	sdkpb.ContentType_BlackAddedNotification:                   {},
	sdkpb.ContentType_BlackDeletedNotification:                 {},
	sdkpb.ContentType_FriendInfoUpdatedNotification:            {},
	sdkpb.ContentType_FriendsInfoUpdateNotification:            {},
	sdkpb.ContentType_ConversationChangeNotification:           {},
	sdkpb.ContentType_UserInfoUpdatedNotification:              {},
	sdkpb.ContentType_UserStatusChangeNotification:             {},
	sdkpb.ContentType_UserCommandAddNotification:               {},
	sdkpb.ContentType_UserCommandDeleteNotification:            {},
	sdkpb.ContentType_UserCommandUpdateNotification:            {},
	sdkpb.ContentType_GroupCreatedNotification:                 {},
	sdkpb.ContentType_GroupInfoSetNotification:                 {},
	sdkpb.ContentType_JoinGroupApplicationNotification:         {},
	sdkpb.ContentType_MemberQuitNotification:                   {},
	sdkpb.ContentType_GroupApplicationAcceptedNotification:     {},
	sdkpb.ContentType_GroupApplicationRejectedNotification:     {},
	sdkpb.ContentType_GroupOwnerTransferredNotification:        {},
	sdkpb.ContentType_MemberKickedNotification:                 {},
	sdkpb.ContentType_MemberInvitedNotification:                {},
	sdkpb.ContentType_MemberEnterNotification:                  {},
	sdkpb.ContentType_GroupDismissedNotification:               {},
	sdkpb.ContentType_GroupMemberMutedNotification:             {},
	sdkpb.ContentType_GroupMemberCancelMutedNotification:       {},
	sdkpb.ContentType_GroupMutedNotification:                   {},
	sdkpb.ContentType_GroupCancelMutedNotification:             {},
	sdkpb.ContentType_GroupMemberInfoSetNotification:           {},
	sdkpb.ContentType_GroupMemberSetToAdminNotification:        {},
	sdkpb.ContentType_GroupMemberSetToOrdinaryUserNotification: {},
	sdkpb.ContentType_GroupInfoSetAnnouncementNotification:     {},
	sdkpb.ContentType_GroupInfoSetNameNotification:             {},
	sdkpb.ContentType_ConversationPrivateChatNotification:      {},
	sdkpb.ContentType_ClearConversationNotification:            {},
	sdkpb.ContentType_BusinessNotification:                     {},
	sdkpb.ContentType_RevokeNotification:                       {},
	sdkpb.ContentType_DeleteMsgsNotification:                   {},
	sdkpb.ContentType_HasReadReceipt:                           {},
}

/*


FriendApplicationApprovedTips= 1201;
FriendApplicationRejectedTips= 1202;
FriendApplicationTips= 1203;
FriendAddedTips= 1204;
FriendDeletedTips= 1205;
FriendRemarkSetTips= 1206;
BlackAddedTips= 1207;
BlackDeletedTips= 1208;
FriendInfoUpdatedTips= 1209;
FriendsInfoUpdateTips= 1210;
ConversationChangeTips= 1300;
UserInfoUpdatedTips= 1303;
UserStatusChangeTips= 1304;
UserCommandAddTips= 1305;
UserCommandDeleteTips= 1306;
UserCommandUpdateTips= 1307;
GroupCreatedTips= 1501;
GroupInfoSetTips= 1502;
JoinGroupApplicationTips= 1503;
MemberQuitTips= 1504;
GroupApplicationAcceptedTips= 1505;
GroupApplicationRejectedTips= 1506;
GroupOwnerTransferredTips= 1507;
MemberKickedTips= 1508;
MemberInvitedTips= 1509;
MemberEnterTips= 1510;
GroupDismissedTips= 1511;
GroupMemberMutedTips= 1512;
GroupMemberCancelMutedTips= 1513;
GroupMutedTips= 1514;
GroupCancelMutedTips= 1515;
GroupMemberInfoSetTips= 1516;
GroupMemberSetToAdminTips= 1517;
GroupMemberSetToOrdinaryUserTips= 1518;
GroupInfoSetAnnouncementTips= 1519;
GroupInfoSetNameTips= 1520;
ConversationPrivateChatTips= 1701;
ClearConversationTips= 1703;
BusinessTips= 2001;
RevokeTips= 2101;
DeleteMsgsTips= 2102;
HasReadReceiptTips= 2200;




sdkpb.FriendApplicationApprovedNotification: {},
sdkpb.FriendApplicationRejectedNotification: {},
sdkpb.FriendApplicationNotification: {},
sdkpb.FriendAddedNotification: {},
sdkpb.FriendDeletedNotification: {},
sdkpb.FriendRemarkSetNotification: {},
sdkpb.BlackAddedNotification: {},
sdkpb.BlackDeletedNotification: {},
sdkpb.FriendInfoUpdatedNotification: {},
sdkpb.FriendsInfoUpdateNotification: {},
sdkpb.ConversationChangeNotification: {},
sdkpb.UserInfoUpdatedNotification: {},
sdkpb.UserStatusChangeNotification: {},
sdkpb.UserCommandAddNotification: {},
sdkpb.UserCommandDeleteNotification: {},
sdkpb.UserCommandUpdateNotification: {},
sdkpb.GroupCreatedNotification: {},
sdkpb.GroupInfoSetNotification: {},
sdkpb.JoinGroupApplicationNotification: {},
sdkpb.MemberQuitNotification: {},
sdkpb.GroupApplicationAcceptedNotification: {},
sdkpb.GroupApplicationRejectedNotification: {},
sdkpb.GroupOwnerTransferredNotification: {},
sdkpb.MemberKickedNotification: {},
sdkpb.MemberInvitedNotification: {},
sdkpb.MemberEnterNotification: {},
sdkpb.GroupDismissedNotification: {},
sdkpb.GroupMemberMutedNotification: {},
sdkpb.GroupMemberCancelMutedNotification: {},
sdkpb.GroupMutedNotification: {},
sdkpb.GroupCancelMutedNotification: {},
sdkpb.GroupMemberInfoSetNotification: {},
sdkpb.GroupMemberSetToAdminNotification: {},
sdkpb.GroupMemberSetToOrdinaryUserNotification: {},
sdkpb.GroupInfoSetAnnouncementNotification: {},
sdkpb.GroupInfoSetNameNotification: {},
sdkpb.ConversationPrivateChatNotification: {},
sdkpb.ClearConversationNotification: {},
sdkpb.BusinessNotification: {},
sdkpb.RevokeNotification: {},
sdkpb.DeleteMsgsNotification: {},
sdkpb.HasReadReceipt: {},


FriendApplicationApprovedNotification
FriendApplicationRejectedNotification
FriendApplicationNotification
FriendAddedNotification
FriendDeletedNotification
FriendRemarkSetNotification
BlackAddedNotification
BlackDeletedNotification
FriendInfoUpdatedNotification
FriendsInfoUpdateNotification
ConversationChangeNotification
UserInfoUpdatedNotification
UserStatusChangeNotification
UserCommandAddNotification
UserCommandDeleteNotification
UserCommandUpdateNotification
GroupCreatedNotification
GroupInfoSetNotification
JoinGroupApplicationNotification
MemberQuitNotification
GroupApplicationAcceptedNotification
GroupApplicationRejectedNotification
GroupOwnerTransferredNotification
MemberKickedNotification
MemberInvitedNotification
MemberEnterNotification
GroupDismissedNotification
GroupMemberMutedNotification
GroupMemberCancelMutedNotification
GroupMutedNotification
GroupCancelMutedNotification
GroupMemberInfoSetNotification
GroupMemberSetToAdminNotification
GroupMemberSetToOrdinaryUserNotification
GroupInfoSetAnnouncementNotification
GroupInfoSetNameNotification
ConversationPrivateChatNotification
ClearConversationNotification
BusinessNotification
RevokeNotification
DeleteMsgsNotification
HasReadReceiptNotification


 = 1201
 = 1202
 = 1203
 = 1204
 = 1205
 = 1206
 = 1207
 = 1208
 = 1209
 = 1210
 = 1300
 = 1303
 = 1304
 = 1305
 = 1306
 = 1307
 = 1501
 = 1502
 = 1503
 = 1504
 = 1505
 = 1506
 = 1507
 = 1508
 = 1509
 = 1510
 = 1511
 = 1512
 = 1513
 = 1514
 = 1515
 = 1516
 = 1517
 = 1518
 = 1519
 = 1520
 = 1701
 = 1703
 = 2001
 = 2101
 = 2102
 = 2200

 FriendApplicationApprovedNotification friendApplicationApproved = 1201;
 FriendApplicationRejectedNotification friendApplicationRejected = 1202;
 FriendApplicationNotification friendApplication = 1203;
 FriendAddedNotification friendAdded = 1204;
 FriendDeletedNotification friendDeleted = 1205;
 FriendRemarkSetNotification friendRemarkSet = 1206;
 BlackAddedNotification blackAdded = 1207;
 BlackDeletedNotification blackDeleted = 1208;
 FriendInfoUpdatedNotification friendInfoUpdated = 1209;
 FriendsInfoUpdateNotification friendsInfoUpdate = 1210;
 ConversationChangeNotification conversationChange = 1300;
 UserInfoUpdatedNotification userInfoUpdated = 1303;
 UserStatusChangeNotification userStatusChange = 1304;
 UserCommandAddNotification userCommandAdd = 1305;
 UserCommandDeleteNotification userCommandDelete = 1306;
 UserCommandUpdateNotification userCommandUpdate = 1307;
 GroupCreatedNotification groupCreated = 1501;
 GroupInfoSetNotification groupInfoSet = 1502;
 JoinGroupApplicationNotification joinGroupApplication = 1503;
 MemberQuitNotification memberQuit = 1504;
 GroupApplicationAcceptedNotification groupApplicationAccepted = 1505;
 GroupApplicationRejectedNotification groupApplicationRejected = 1506;
 GroupOwnerTransferredNotification groupOwnerTransferred = 1507;
 MemberKickedNotification memberKicked = 1508;
 MemberInvitedNotification memberInvited = 1509;
 MemberEnterNotification memberEnter = 1510;
 GroupDismissedNotification groupDismissed = 1511;
 GroupMemberMutedNotification groupMemberMuted = 1512;
 GroupMemberCancelMutedNotification groupMemberCancelMuted = 1513;
 GroupMutedNotification groupMuted = 1514;
 GroupCancelMutedNotification groupCancelMuted = 1515;
 GroupMemberInfoSetNotification groupMemberInfoSet = 1516;
 GroupMemberSetToAdminNotification groupMemberSetToAdmin = 1517;
 GroupMemberSetToOrdinaryUserNotification groupMemberSetToOrdinaryUser = 1518;
 GroupInfoSetAnnouncementNotification groupInfoSetAnnouncement = 1519;
 GroupInfoSetNameNotification groupInfoSetName = 1520;
 ConversationPrivateChatNotification conversationPrivateChat = 1701;
 ClearConversationNotification clearConversation = 1703;
 BusinessNotification business = 2001;
 RevokeNotification revoke = 2101;
 DeleteMsgsNotification deleteMsgs = 2102;
 HasReadReceiptNotification hasReadReceipt = 2200;

*/
