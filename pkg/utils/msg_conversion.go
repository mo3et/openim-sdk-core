package utils

import (
	"context"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto"
	"github.com/openimsdk/openim-sdk-core/v3/sdk_struct"
	"github.com/openimsdk/tools/log"
	"github.com/openimsdk/tools/utils/datautil"
)

func SDKStructMsgToDB(m *sdk_struct.MsgStruct) *sdkpb.IMMessage {
	pm := &sdkpb.IMMessage{
		ClientMsgID:      m.ClientMsgID,
		ServerMsgID:      m.ServerMsgID,
		CreateTime:       m.CreateTime,
		SendTime:         m.SendTime,
		SessionType:      sdkpb.SessionType(m.SessionType),
		SendID:           m.SendID,
		RecvID:           m.RecvID,
		MsgFrom:          sdkpb.MsgFrom(m.MsgFrom),
		ContentType:      sdkpb.ContentType(m.ContentType),
		SenderPlatformID: sdkpb.Platform(m.SenderPlatformID),
		SenderNickname:   m.SenderNickname,
		SenderFaceURL:    m.SenderFaceURL,
		GroupID:          m.GroupID,
		Seq:              m.Seq,
		IsRead:           m.IsRead,
		Status:           sdkpb.MsgStatus(m.Status),
		OfflinePush: &sdkpb.OfflinePushInfo{
			Title:         m.OfflinePush.Title,
			Desc:          m.OfflinePush.Desc,
			Ex:            m.OfflinePush.Ex,
			IOSPushSound:  m.OfflinePush.IOSPushSound,
			IOSBadgeCount: m.OfflinePush.IOSBadgeCount,
			SignalInfo:    m.OfflinePush.SignalInfo,
		},
		Ex:      m.Ex,
		LocalEx: m.LocalEx,
		AttachedInfoElem: &sdkpb.AttachedInfoElem{
			GroupHasReadInfo: &sdkpb.GroupHasReadInfo{
				HasReadUserIDList: m.AttachedInfoElem.GroupHasReadInfo.HasReadUserIDList,
				HasReadCount:      m.AttachedInfoElem.GroupHasReadInfo.HasReadCount,
				GroupMemberCount:  m.AttachedInfoElem.GroupHasReadInfo.GroupMemberCount,
			},
			IsPrivateChat: m.AttachedInfoElem.IsPrivateChat,
			BurnDuration:  m.AttachedInfoElem.BurnDuration,
			HasReadTime:   m.AttachedInfoElem.HasReadTime,
			Progress: &sdkpb.UploadProgress{
				Total:    m.AttachedInfoElem.Progress.Total,
				Save:     m.AttachedInfoElem.Progress.Save,
				Current:  m.AttachedInfoElem.Progress.Current,
				UploadID: m.AttachedInfoElem.Progress.UploadID,
			},
		},
		Content: nil,
	}

	switch m.ContentType {
	case int32(sdkpb.ContentType_Text):
		pm.Content = &sdkpb.IMMessage_TextElem{TextElem: &sdkpb.TextElem{Content: m.TextElem.Content}}
	case int32(sdkpb.ContentType_Picture):
		pm.Content = &sdkpb.IMMessage_PictureElem{PictureElem: &sdkpb.PictureElem{
			SourcePath:      m.PictureElem.SourcePath,
			SourcePicture:   sdkPictureBaseInfoToPB(m.PictureElem.SourcePicture),
			BigPicture:      sdkPictureBaseInfoToPB(m.PictureElem.BigPicture),
			SnapshotPicture: sdkPictureBaseInfoToPB(m.PictureElem.SnapshotPicture),
		}}
	case int32(sdkpb.ContentType_Sound):
		pm.Content = &sdkpb.IMMessage_SoundElem{SoundElem: &sdkpb.SoundElem{
			Uuid:      m.SoundElem.UUID,
			SoundPath: m.SoundElem.SoundPath,
			SourceURL: m.SoundElem.SourceURL,
			DataSize:  m.SoundElem.DataSize,
			Duration:  m.SoundElem.Duration,
			SoundType: m.SoundElem.SoundType,
		}}
	case int32(sdkpb.ContentType_Video):
		pm.Content = &sdkpb.IMMessage_VideoElem{VideoElem: &sdkpb.VideoElem{
			VideoPath:      m.VideoElem.VideoPath,
			VideoUUID:      m.VideoElem.VideoUUID,
			VideoURL:       m.VideoElem.VideoURL,
			VideoType:      m.VideoElem.VideoType,
			VideoSize:      m.VideoElem.VideoSize,
			Duration:       m.VideoElem.Duration,
			SnapshotPath:   m.VideoElem.SnapshotPath,
			SnapshotUUID:   m.VideoElem.SnapshotUUID,
			SnapshotSize:   m.VideoElem.SnapshotSize,
			SnapshotURL:    m.VideoElem.SnapshotURL,
			SnapshotWidth:  m.VideoElem.SnapshotWidth,
			SnapshotHeight: m.VideoElem.SnapshotHeight,
			SnapshotType:   m.VideoElem.SnapshotType,
		}}
	case int32(sdkpb.ContentType_File):
		pm.Content = &sdkpb.IMMessage_FileElem{FileElem: &sdkpb.FileElem{
			FilePath:  m.FileElem.FilePath,
			Uuid:      m.FileElem.UUID,
			SourceURL: m.FileElem.SourceURL,
			FileName:  m.FileElem.FileName,
			FileSize:  m.FileElem.FileSize,
			FileType:  m.FileElem.FileType,
		}}
	case int32(sdkpb.ContentType_AdvancedText):
		pm.Content = &sdkpb.IMMessage_AdvancedTextElem{AdvancedTextElem: &sdkpb.AdvancedTextElem{
			Text:              m.AdvancedTextElem.Text,
			MessageEntityList: datautil.Batch(sdkMessageEntityToPB, m.AdvancedTextElem.MessageEntityList),
		}}
	case int32(sdkpb.ContentType_AtText):
		a := m.AtTextElem
		pm.Content = &sdkpb.IMMessage_AtTextElem{AtTextElem: &sdkpb.AtTextElem{
			Text:         a.Text,
			AtUserList:   a.AtUserList,
			AtUsersInfo:  datautil.Batch(sdkAtInfoToPB, a.AtUsersInfo),
			QuoteMessage: SDKStructMsgToDB(a.QuoteMessage),
			IsAtSelf:     a.IsAtSelf,
		}}
	case int32(sdkpb.ContentType_Location):
		a := m.LocationElem
		pm.Content = &sdkpb.IMMessage_LocationElem{LocationElem: &sdkpb.LocationElem{
			Description: a.Description,
			Longitude:   a.Longitude,
			Latitude:    a.Latitude,
		}}
	case int32(sdkpb.ContentType_Custom):
		fallthrough
	case int32(sdkpb.ContentType_CustomMsgNotTriggerConversation):
		fallthrough
	case int32(sdkpb.ContentType_CustomMsgOnlineOnly):
		a := m.CustomElem
		pm.Content = &sdkpb.IMMessage_CustomElem{CustomElem: &sdkpb.CustomElem{
			Data:        a.Data,
			Description: a.Description,
			Extension:   a.Extension,
		}}
	case int32(sdkpb.ContentType_Typing):
		pm.Content = &sdkpb.IMMessage_TypingElem{TypingElem: &sdkpb.TypingElem{MsgTips: m.TypingElem.MsgTips}}
	case int32(sdkpb.ContentType_Quote):
		a := m.QuoteElem
		pm.Content = &sdkpb.IMMessage_QuoteElem{QuoteElem: &sdkpb.QuoteElem{
			Text:              a.Text,
			QuoteMessage:      SDKStructMsgToDB(a.QuoteMessage),
			MessageEntityList: datautil.Batch(sdkMessageEntityToPB, a.MessageEntityList),
		}}
	case int32(sdkpb.ContentType_Merge):
		a := m.MergeElem
		pm.Content = &sdkpb.IMMessage_MergeElem{MergeElem: &sdkpb.MergeElem{
			Title:             a.Title,
			AbstractList:      a.AbstractList,
			MultiMessage:      datautil.Batch(SDKStructMsgToDB, a.MultiMessage),
			MessageEntityList: datautil.Batch(sdkMessageEntityToPB, a.MessageEntityList),
		}}
	case int32(sdkpb.ContentType_Face):
		a := m.FaceElem
		pm.Content = &sdkpb.IMMessage_FaceElem{FaceElem: &sdkpb.FaceElem{
			Index: int32(a.Index),
			Data:  a.Data,
		}}
	case int32(sdkpb.ContentType_Card):
		a := m.CardElem
		pm.Content = &sdkpb.IMMessage_CardElem{CardElem: &sdkpb.CardElem{
			UserID:   a.UserID,
			Nickname: a.Nickname,
			FaceURL:  a.FaceURL,
			Ex:       a.Ex,
		}}
	case int32(sdkpb.ContentType_Stream):
		a := m.StreamElem
		pm.Content = &sdkpb.IMMessage_StreamElem{StreamElem: &sdkpb.StreamElem{
			Type:    a.Type,
			Content: a.Content,
			Packets: a.Packets,
			End:     a.End,
		}}
	case int32(sdkpb.ContentType_GroupCreatedNotification):
		t := sdkpb.GroupCreatedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_GroupCreatedTips{GroupCreatedTips: &t}

	case int32(sdkpb.ContentType_GroupInfoSetNotification):
		t := sdkpb.GroupInfoSetTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_GroupInfoSetTips{GroupInfoSetTips: &t}

	case int32(sdkpb.ContentType_GroupInfoSetNameNotification):
		t := sdkpb.GroupInfoSetNameTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_GroupInfoSetNameTips{GroupInfoSetNameTips: &t}

	case int32(sdkpb.ContentType_GroupInfoSetAnnouncementNotification):
		t := sdkpb.GroupInfoSetAnnouncementTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_GroupInfoSetAnnouncementTips{GroupInfoSetAnnouncementTips: &t}

	case int32(sdkpb.ContentType_JoinGroupApplicationNotification):
		t := sdkpb.JoinGroupApplicationTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_JoinGroupApplicationTips{JoinGroupApplicationTips: &t}

	case int32(sdkpb.ContentType_MemberQuitNotification):
		t := sdkpb.MemberQuitTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_MemberQuitTips{MemberQuitTips: &t}

	case int32(sdkpb.ContentType_GroupApplicationAcceptedNotification):
		t := sdkpb.GroupApplicationAcceptedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_GroupApplicationAcceptedTips{GroupApplicationAcceptedTips: &t}

	case int32(sdkpb.ContentType_GroupApplicationRejectedNotification):
		t := sdkpb.GroupApplicationRejectedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_GroupApplicationRejectedTips{GroupApplicationRejectedTips: &t}

	case int32(sdkpb.ContentType_GroupOwnerTransferredNotification):
		t := sdkpb.GroupOwnerTransferredTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_GroupOwnerTransferredTips{GroupOwnerTransferredTips: &t}

	case int32(sdkpb.ContentType_MemberKickedNotification):
		t := sdkpb.MemberKickedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_MemberKickedTips{MemberKickedTips: &t}

	case int32(sdkpb.ContentType_MemberInvitedNotification):
		t := sdkpb.MemberInvitedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_MemberInvitedTips{MemberInvitedTips: &t}

	case int32(sdkpb.ContentType_MemberEnterNotification):
		t := sdkpb.MemberEnterTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_MemberEnterTips{MemberEnterTips: &t}

	case int32(sdkpb.ContentType_GroupDismissedNotification):
		t := sdkpb.GroupDismissedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_GroupDismissedTips{GroupDismissedTips: &t}

	case int32(sdkpb.ContentType_GroupMemberMutedNotification):
		t := sdkpb.GroupMemberMutedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_GroupMemberMutedTips{GroupMemberMutedTips: &t}

	case int32(sdkpb.ContentType_GroupMemberCancelMutedNotification):
		t := sdkpb.GroupMemberCancelMutedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_GroupMemberCancelMutedTips{GroupMemberCancelMutedTips: &t}

	case int32(sdkpb.ContentType_GroupMutedNotification):
		t := sdkpb.GroupMutedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_GroupMutedTips{GroupMutedTips: &t}

	case int32(sdkpb.ContentType_GroupCancelMutedNotification):
		t := sdkpb.GroupCancelMutedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_GroupCancelMutedTips{GroupCancelMutedTips: &t}

	case int32(sdkpb.ContentType_GroupMemberInfoSetNotification):
		t := sdkpb.GroupMemberInfoSetTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_GroupMemberInfoSetTips{GroupMemberInfoSetTips: &t}

	case int32(sdkpb.ContentType_FriendApplicationNotification):
		t := sdkpb.FriendApplicationTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_FriendApplicationTips{FriendApplicationTips: &t}

	case int32(sdkpb.ContentType_FriendApplicationApprovedNotification):
		t := sdkpb.FriendApplicationApprovedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_FriendApplicationApprovedTips{FriendApplicationApprovedTips: &t}

	case int32(sdkpb.ContentType_FriendApplicationRejectedNotification):
		t := sdkpb.FriendApplicationRejectedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: &t}

	case int32(sdkpb.ContentType_FriendAddedNotification):
		t := sdkpb.FriendAddedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_FriendAddedTips{FriendAddedTips: &t}

	case int32(sdkpb.ContentType_FriendDeletedNotification):
		t := sdkpb.FriendDeletedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_FriendDeletedTips{FriendDeletedTips: &t}

	case int32(sdkpb.ContentType_BlackAddedNotification):
		t := sdkpb.BlackAddedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_BlackAddedTips{BlackAddedTips: &t}

	case int32(sdkpb.ContentType_BlackDeletedNotification):
		t := sdkpb.BlackDeletedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_BlackDeletedTips{BlackDeletedTips: &t}

	case int32(sdkpb.ContentType_FriendInfoUpdatedNotification):
		t := sdkpb.FriendInfoChangedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_FriendInfoChangedTips{FriendInfoChangedTips: &t}

	case int32(sdkpb.ContentType_UserInfoUpdatedNotification):
		t := sdkpb.UserInfoUpdatedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_UserInfoUpdatedTips{UserInfoUpdatedTips: &t}

	case int32(sdkpb.ContentType_UserStatusChangeNotification):
		t := sdkpb.UserStatusChangeTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_UserStatusChangeTips{UserStatusChangeTips: &t}

	case int32(sdkpb.ContentType_UserCommandAddNotification):
		t := sdkpb.UserCommandAddTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_UserCommandAddTips{UserCommandAddTips: &t}

	case int32(sdkpb.ContentType_UserCommandUpdateNotification):
		t := sdkpb.UserCommandUpdateTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_UserCommandUpdateTips{UserCommandUpdateTips: &t}

	case int32(sdkpb.ContentType_UserCommandDeleteNotification):
		t := sdkpb.UserCommandDeleteTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_UserCommandDeleteTips{UserCommandDeleteTips: &t}

	case int32(sdkpb.ContentType_ConversationChangeNotification):
		t := sdkpb.ConversationUpdateTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_ConversationUpdateTips{ConversationUpdateTips: &t}

	case int32(sdkpb.ContentType_ConversationPrivateChatNotification):
		t := sdkpb.ConversationSetPrivateTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_ConversationSetPrivateTips{ConversationSetPrivateTips: &t}

	//case int32(sdkpb.ContentType_DeleteMsgsNotification):
	//	t := sdkpb.DeleteMessageTips{}
	//	a := m.NotificationElem
	//	err := JsonStringToStruct(a.Detail, &t)
	//	if err != nil {
	//		log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
	//	}
	//	pm.Content = &sdkpb.IMMessage_DeleteMessageTips{DeleteMessageTips: &t}

	case int32(sdkpb.ContentType_RevokeNotification):
		t := sdkpb.RevokeMsgTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_RevokeMsgTips{RevokeMsgTips: &t}

	case int32(sdkpb.ContentType_ClearConversationNotification):
		t := sdkpb.ClearConversationTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_ClearConversationTips{ClearConversationTips: &t}

	case int32(sdkpb.ContentType_DeleteMsgsNotification):
		t := sdkpb.DeleteMsgsTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_DeleteMsgsTips{DeleteMsgsTips: &t}

	case int32(sdkpb.ContentType_FriendsInfoUpdateNotification):
		t := sdkpb.FriendsInfoUpdateTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sdkpb.IMMessage_FriendsInfoUpdateTips{FriendsInfoUpdateTips: &t}
	}
	return pm
}

func sdkPictureBaseInfoToPB(a *sdk_struct.PictureBaseInfo) *sdkpb.PictureBaseInfo {
	return &sdkpb.PictureBaseInfo{
		Uuid:   a.UUID,
		Type:   a.Type,
		Size:   a.Size,
		Width:  a.Width,
		Height: a.Height,
		Url:    a.Url,
	}
}

func sdkMessageEntityToPB(a *sdk_struct.MessageEntity) *sdkpb.MessageEntity {
	return &sdkpb.MessageEntity{
		Type:   a.Type,
		Offset: a.Offset,
		Length: a.Length,
		Url:    a.Url,
		Ex:     a.Ex,
	}
}

func sdkAtInfoToPB(a *sdk_struct.AtInfo) *sdkpb.AtInfo {
	return &sdkpb.AtInfo{
		AtUserID:      a.AtUserID,
		GroupNickname: a.GroupNickname,
	}
}
