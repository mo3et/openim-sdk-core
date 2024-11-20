package utils

import (
	"context"

	commonpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	sharedpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
	"github.com/openimsdk/openim-sdk-core/v3/sdk_struct"
	"github.com/openimsdk/protocol/sdkws"
	"github.com/openimsdk/tools/log"
	"github.com/openimsdk/tools/utils/datautil"
)

func SDKStructMsgToDB(m *sdk_struct.MsgStruct) *sharedpb.IMMessage {
	if m == nil {
		return nil
	}
	pm := &sharedpb.IMMessage{
		ClientMsgID:      m.ClientMsgID,
		ServerMsgID:      m.ServerMsgID,
		CreateTime:       m.CreateTime,
		SendTime:         m.SendTime,
		SessionType:      commonpb.SessionType(m.SessionType),
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
		OfflinePush:      offlinePushToPB(m.OfflinePush),
		Ex:               m.Ex,
		LocalEx:          m.LocalEx,
		AttachedInfoElem: attachedInfoElemToPB(m.AttachedInfoElem),
		Content:          nil,
	}

	switch m.ContentType {
	case int32(sdkpb.ContentType_Text):
		pm.Content = &sharedpb.IMMessage_TextElem{TextElem: &sharedpb.TextElem{Content: m.TextElem.Content}}
	case int32(sdkpb.ContentType_Picture):
		pm.Content = &sharedpb.IMMessage_PictureElem{PictureElem: &sharedpb.PictureElem{
			SourcePath:      m.PictureElem.SourcePath,
			SourcePicture:   sdkPictureBaseInfoToPB(m.PictureElem.SourcePicture),
			BigPicture:      sdkPictureBaseInfoToPB(m.PictureElem.BigPicture),
			SnapshotPicture: sdkPictureBaseInfoToPB(m.PictureElem.SnapshotPicture),
		}}
	case int32(sdkpb.ContentType_Sound):
		pm.Content = &sharedpb.IMMessage_SoundElem{SoundElem: &sharedpb.SoundElem{
			Uuid:      m.SoundElem.UUID,
			SoundPath: m.SoundElem.SoundPath,
			SourceURL: m.SoundElem.SourceURL,
			DataSize:  m.SoundElem.DataSize,
			Duration:  m.SoundElem.Duration,
			SoundType: m.SoundElem.SoundType,
		}}
	case int32(sdkpb.ContentType_Video):
		pm.Content = &sharedpb.IMMessage_VideoElem{VideoElem: &sharedpb.VideoElem{
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
		pm.Content = &sharedpb.IMMessage_FileElem{FileElem: &sharedpb.FileElem{
			FilePath:  m.FileElem.FilePath,
			Uuid:      m.FileElem.UUID,
			SourceURL: m.FileElem.SourceURL,
			FileName:  m.FileElem.FileName,
			FileSize:  m.FileElem.FileSize,
			FileType:  m.FileElem.FileType,
		}}
	case int32(sdkpb.ContentType_AdvancedText):
		pm.Content = &sharedpb.IMMessage_AdvancedTextElem{AdvancedTextElem: &sharedpb.AdvancedTextElem{
			Text:              m.AdvancedTextElem.Text,
			MessageEntityList: datautil.Batch(sdkMessageEntityToPB, m.AdvancedTextElem.MessageEntityList),
		}}
	case int32(sdkpb.ContentType_AtText):
		a := m.AtTextElem
		pm.Content = &sharedpb.IMMessage_AtTextElem{AtTextElem: &sharedpb.AtTextElem{
			Text:         a.Text,
			AtUserList:   a.AtUserList,
			AtUsersInfo:  datautil.Batch(sdkAtInfoToPB, a.AtUsersInfo),
			QuoteMessage: SDKStructMsgToDB(a.QuoteMessage),
			IsAtSelf:     a.IsAtSelf,
		}}
	case int32(sdkpb.ContentType_Location):
		a := m.LocationElem
		pm.Content = &sharedpb.IMMessage_LocationElem{LocationElem: &sharedpb.LocationElem{
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
		pm.Content = &sharedpb.IMMessage_CustomElem{CustomElem: &sharedpb.CustomElem{
			Data:        a.Data,
			Description: a.Description,
			Extension:   a.Extension,
		}}
	case int32(sdkpb.ContentType_Typing):
		pm.Content = &sharedpb.IMMessage_TypingElem{TypingElem: &sharedpb.TypingElem{MsgTips: m.TypingElem.MsgTips}}
	case int32(sdkpb.ContentType_Quote):
		a := m.QuoteElem
		pm.Content = &sharedpb.IMMessage_QuoteElem{QuoteElem: &sharedpb.QuoteElem{
			Text:              a.Text,
			QuoteMessage:      SDKStructMsgToDB(a.QuoteMessage),
			MessageEntityList: datautil.Batch(sdkMessageEntityToPB, a.MessageEntityList),
		}}
	case int32(sdkpb.ContentType_Merge):
		a := m.MergeElem
		pm.Content = &sharedpb.IMMessage_MergeElem{MergeElem: &sharedpb.MergeElem{
			Title:             a.Title,
			AbstractList:      a.AbstractList,
			MultiMessage:      datautil.Batch(SDKStructMsgToDB, a.MultiMessage),
			MessageEntityList: datautil.Batch(sdkMessageEntityToPB, a.MessageEntityList),
		}}
	case int32(sdkpb.ContentType_Face):
		a := m.FaceElem
		pm.Content = &sharedpb.IMMessage_FaceElem{FaceElem: &sharedpb.FaceElem{
			Index: int32(a.Index),
			Data:  a.Data,
		}}
	case int32(sdkpb.ContentType_Card):
		a := m.CardElem
		pm.Content = &sharedpb.IMMessage_CardElem{CardElem: &sharedpb.CardElem{
			UserID:   a.UserID,
			Nickname: a.Nickname,
			FaceURL:  a.FaceURL,
			Ex:       a.Ex,
		}}
	case int32(sdkpb.ContentType_Stream):
		a := m.StreamElem
		pm.Content = &sharedpb.IMMessage_StreamElem{StreamElem: &sharedpb.StreamElem{
			Type:    a.Type,
			Content: a.Content,
			Packets: a.Packets,
			End:     a.End,
		}}
	case int32(sdkpb.ContentType_GroupCreatedNotification):
		t := sharedpb.GroupCreatedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_GroupCreatedTips{GroupCreatedTips: &t}

	case int32(sdkpb.ContentType_GroupInfoSetNotification):
		t := sharedpb.GroupInfoSetTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_GroupInfoSetTips{GroupInfoSetTips: &t}

	case int32(sdkpb.ContentType_GroupInfoSetNameNotification):
		t := sharedpb.GroupInfoSetNameTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_GroupInfoSetNameTips{GroupInfoSetNameTips: &t}

	case int32(sdkpb.ContentType_GroupInfoSetAnnouncementNotification):
		t := sharedpb.GroupInfoSetAnnouncementTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_GroupInfoSetAnnouncementTips{GroupInfoSetAnnouncementTips: &t}

	case int32(sdkpb.ContentType_JoinGroupApplicationNotification):
		t := sharedpb.JoinGroupApplicationTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_JoinGroupApplicationTips{JoinGroupApplicationTips: &t}

	case int32(sdkpb.ContentType_MemberQuitNotification):
		t := sharedpb.MemberQuitTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_MemberQuitTips{MemberQuitTips: &t}

	case int32(sdkpb.ContentType_GroupApplicationAcceptedNotification):
		t := sharedpb.GroupApplicationAcceptedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_GroupApplicationAcceptedTips{GroupApplicationAcceptedTips: &t}

	case int32(sdkpb.ContentType_GroupApplicationRejectedNotification):
		t := sharedpb.GroupApplicationRejectedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_GroupApplicationRejectedTips{GroupApplicationRejectedTips: &t}

	case int32(sdkpb.ContentType_GroupOwnerTransferredNotification):
		t := sharedpb.GroupOwnerTransferredTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_GroupOwnerTransferredTips{GroupOwnerTransferredTips: &t}

	case int32(sdkpb.ContentType_MemberKickedNotification):
		t := sharedpb.MemberKickedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_MemberKickedTips{MemberKickedTips: &t}

	case int32(sdkpb.ContentType_MemberInvitedNotification):
		t := sharedpb.MemberInvitedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_MemberInvitedTips{MemberInvitedTips: &t}

	case int32(sdkpb.ContentType_MemberEnterNotification):
		t := sharedpb.MemberEnterTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_MemberEnterTips{MemberEnterTips: &t}

	case int32(sdkpb.ContentType_GroupDismissedNotification):
		t := sharedpb.GroupDismissedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_GroupDismissedTips{GroupDismissedTips: &t}

	case int32(sdkpb.ContentType_GroupMemberMutedNotification):
		t := sharedpb.GroupMemberMutedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_GroupMemberMutedTips{GroupMemberMutedTips: &t}

	case int32(sdkpb.ContentType_GroupMemberCancelMutedNotification):
		t := sharedpb.GroupMemberCancelMutedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_GroupMemberCancelMutedTips{GroupMemberCancelMutedTips: &t}

	case int32(sdkpb.ContentType_GroupMutedNotification):
		t := sharedpb.GroupMutedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_GroupMutedTips{GroupMutedTips: &t}

	case int32(sdkpb.ContentType_GroupCancelMutedNotification):
		t := sharedpb.GroupCancelMutedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_GroupCancelMutedTips{GroupCancelMutedTips: &t}

	case int32(sdkpb.ContentType_GroupMemberInfoSetNotification):
		t := sharedpb.GroupMemberInfoSetTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_GroupMemberInfoSetTips{GroupMemberInfoSetTips: &t}

	case int32(sdkpb.ContentType_FriendApplicationNotification):
		t := sharedpb.FriendApplicationTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_FriendApplicationTips{FriendApplicationTips: &t}

	case int32(sdkpb.ContentType_FriendApplicationApprovedNotification):
		t := sharedpb.FriendApplicationApprovedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_FriendApplicationApprovedTips{FriendApplicationApprovedTips: &t}

	case int32(sdkpb.ContentType_FriendApplicationRejectedNotification):
		t := sharedpb.FriendApplicationRejectedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_FriendApplicationRejectedTips{FriendApplicationRejectedTips: &t}

	case int32(sdkpb.ContentType_FriendAddedNotification):
		t := sharedpb.FriendAddedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_FriendAddedTips{FriendAddedTips: &t}

	case int32(sdkpb.ContentType_FriendDeletedNotification):
		t := sharedpb.FriendDeletedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_FriendDeletedTips{FriendDeletedTips: &t}

	case int32(sdkpb.ContentType_BlackAddedNotification):
		t := sharedpb.BlackAddedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_BlackAddedTips{BlackAddedTips: &t}

	case int32(sdkpb.ContentType_BlackDeletedNotification):
		t := sharedpb.BlackDeletedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_BlackDeletedTips{BlackDeletedTips: &t}

	case int32(sdkpb.ContentType_FriendInfoUpdatedNotification):
		t := sharedpb.FriendInfoChangedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_FriendInfoChangedTips{FriendInfoChangedTips: &t}

	case int32(sdkpb.ContentType_UserInfoUpdatedNotification):
		t := sharedpb.UserInfoUpdatedTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_UserInfoUpdatedTips{UserInfoUpdatedTips: &t}

	case int32(sdkpb.ContentType_UserStatusChangeNotification):
		t := sharedpb.UserStatusChangeTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_UserStatusChangeTips{UserStatusChangeTips: &t}

	case int32(sdkpb.ContentType_UserCommandAddNotification):
		t := sharedpb.UserCommandAddTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_UserCommandAddTips{UserCommandAddTips: &t}

	case int32(sdkpb.ContentType_UserCommandUpdateNotification):
		t := sharedpb.UserCommandUpdateTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_UserCommandUpdateTips{UserCommandUpdateTips: &t}

	case int32(sdkpb.ContentType_UserCommandDeleteNotification):
		t := sharedpb.UserCommandDeleteTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_UserCommandDeleteTips{UserCommandDeleteTips: &t}

	case int32(sdkpb.ContentType_ConversationChangeNotification):
		t := sharedpb.ConversationUpdateTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_ConversationUpdateTips{ConversationUpdateTips: &t}

	case int32(sdkpb.ContentType_ConversationPrivateChatNotification):
		t := sharedpb.ConversationSetPrivateTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_ConversationSetPrivateTips{ConversationSetPrivateTips: &t}

	//case int32(sdkpb.ContentType_DeleteMsgsNotification):
	//	t := sharedpb.DeleteMessageTips{}
	//	a := m.NotificationElem
	//	err := JsonStringToStruct(a.Detail, &t)
	//	if err != nil {
	//		log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
	//	}
	//	pm.Content = &sharedpb.IMMessage_DeleteMessageTips{DeleteMessageTips: &t}

	case int32(sdkpb.ContentType_RevokeNotification):
		t := sharedpb.RevokeMsgTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_RevokeMsgTips{RevokeMsgTips: &t}

	case int32(sdkpb.ContentType_ClearConversationNotification):
		t := sharedpb.ClearConversationTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_ClearConversationTips{ClearConversationTips: &t}

	case int32(sdkpb.ContentType_DeleteMsgsNotification):
		t := sharedpb.DeleteMsgsTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_DeleteMsgsTips{DeleteMsgsTips: &t}

	case int32(sdkpb.ContentType_FriendsInfoUpdateNotification):
		t := sharedpb.FriendsInfoUpdateTips{}
		a := m.NotificationElem
		err := JsonStringToStruct(a.Detail, &t)
		if err != nil {
			log.ZError(context.TODO(), "SDKStructMsgToDB err", err, "detail", a.Detail)
		}
		pm.Content = &sharedpb.IMMessage_FriendsInfoUpdateTips{FriendsInfoUpdateTips: &t}
	}
	return pm
}

func sdkPictureBaseInfoToPB(a *sdk_struct.PictureBaseInfo) *sharedpb.PictureBaseInfo {
	if a == nil {
		return nil
	}
	return &sharedpb.PictureBaseInfo{
		Uuid:   a.UUID,
		Type:   a.Type,
		Size:   a.Size,
		Width:  a.Width,
		Height: a.Height,
		Url:    a.Url,
	}
}

func sdkMessageEntityToPB(a *sdk_struct.MessageEntity) *sharedpb.MessageEntity {
	if a == nil {
		return nil
	}
	return &sharedpb.MessageEntity{
		Type:   a.Type,
		Offset: a.Offset,
		Length: a.Length,
		Url:    a.Url,
		Ex:     a.Ex,
	}
}

func sdkAtInfoToPB(a *sdk_struct.AtInfo) *sharedpb.AtInfo {
	if a == nil {
		return nil
	}
	return &sharedpb.AtInfo{
		AtUserID:      a.AtUserID,
		GroupNickname: a.GroupNickname,
	}
}

func offlinePushToPB(a *sdkws.OfflinePushInfo) *sdkpb.OfflinePushInfo {
	if a == nil {
		return nil
	}
	return &sdkpb.OfflinePushInfo{
		Title:         a.Title,
		Desc:          a.Desc,
		Ex:            a.Title,
		IOSPushSound:  a.IOSPushSound,
		IOSBadgeCount: a.IOSBadgeCount,
		SignalInfo:    a.SignalInfo,
	}
}

func attachedInfoElemToPB(a *sdk_struct.AttachedInfoElem) *sharedpb.AttachedInfoElem {
	if a == nil {
		return nil
	}
	return &sharedpb.AttachedInfoElem{
		IsPrivateChat: a.IsPrivateChat,
		BurnDuration:  a.BurnDuration,
		HasReadTime:   a.HasReadTime,
		Progress:      uploadProgressToPB(a.Progress),
	}
}

func uploadProgressToPB(a *sdk_struct.UploadProgress) *sharedpb.UploadProgress {
	if a == nil {
		return nil
	}
	return &sharedpb.UploadProgress{
		Total:    a.Total,
		Save:     a.Save,
		Current:  a.Current,
		UploadID: a.UploadID,
	}
}
