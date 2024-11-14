package base

import "C"
import (
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	pb "github.com/openimsdk/openim-sdk-core/v3/proto"
)

func setListener(funcName pb.FuncRequestEventName) {
	if funcName != pb.FuncRequestEventName_InitSDK {
		return
	}
	open_im_sdk.UserForSDK.SetConnListener(NewConnCallback())
	open_im_sdk.UserForSDK.SetConversationListener(NewConversationCallback())
	open_im_sdk.UserForSDK.SetAdvancedMsgListener(NewAdvancedMsgCallback())
	open_im_sdk.UserForSDK.SetFriendshipListener(NewFriendCallback())
	open_im_sdk.UserForSDK.SetGroupListener(NewGroupCallback())
	open_im_sdk.UserForSDK.SetUserListener(NewUserCallback())
	open_im_sdk.UserForSDK.SetCustomBusinessListener(NewCustomBusinessCallback())
}

type ConnCallback struct{}

func NewConnCallback() *ConnCallback {
	return &ConnCallback{}
}

func (c ConnCallback) OnConnecting(data *pb.EventOnConnectingData) {
	eventResp(pb.FuncRequestEventName_EventOnConnecting, data)
}

func (c ConnCallback) OnConnectSuccess(data *pb.EventOnConnectSuccessData) {
	eventResp(pb.FuncRequestEventName_EventOnConnectSuccess, data)
}

func (c ConnCallback) OnConnectFailed(data *pb.EventOnConnectFailedData) {
	eventResp(pb.FuncRequestEventName_EventOnConnectFailed, data)
}

func (c ConnCallback) OnKickedOffline(data *pb.EventOnKickedOfflineData) {
	eventResp(pb.FuncRequestEventName_EventOnKickedOffline, data)
}

func (c ConnCallback) OnUserTokenExpired(data *pb.EventOnUserTokenExpiredData) {
	eventResp(pb.FuncRequestEventName_EventOnUserTokenExpired, data)
}

func (c ConnCallback) OnUserTokenInvalid(data *pb.EventOnUserTokenInvalidData) {
	eventResp(pb.FuncRequestEventName_EventOnUserTokenInvalid, data)
}

type ConversationCallback struct{}

func NewConversationCallback() *ConversationCallback {
	return &ConversationCallback{}
}

func (c ConversationCallback) OnSyncServerStart(data *pb.EventOnSyncServerStartData) {
	eventResp(pb.FuncRequestEventName_EventOnSyncServerStart, data)
}

func (c ConversationCallback) OnSyncServerProgress(data *pb.EventOnSyncServerProgressData) {
	eventResp(pb.FuncRequestEventName_EventOnSyncServerProgress, data)
}

func (c ConversationCallback) OnSyncServerFinish(data *pb.EventOnSyncServerFinishData) {
	eventResp(pb.FuncRequestEventName_EventOnSyncServerFinish, data)
}

func (c ConversationCallback) OnSyncServerFailed(data *pb.EventOnSyncServerFailedData) {
	eventResp(pb.FuncRequestEventName_EventOnSyncServerFailed, data)
}

func (c ConversationCallback) OnNewConversation(data *pb.EventOnNewConversationData) {
	eventResp(pb.FuncRequestEventName_EventOnNewConversation, data)
}

func (c ConversationCallback) OnConversationChanged(data *pb.EventOnConversationChangedData) {
	eventResp(pb.FuncRequestEventName_EventOnConversationChanged, data)
}

func (c ConversationCallback) OnTotalUnreadMessageCountChanged(data *pb.EventOnTotalUnreadMessageCountChangedData) {
	eventResp(pb.FuncRequestEventName_EventOnTotalUnreadMessageCountChanged, data)
}

func (c ConversationCallback) OnConversationUserInputStatusChanged(data *pb.EventOnConversationUserInputStatusChangedData) {
	eventResp(pb.FuncRequestEventName_EventOnConversationUserInputStatusChanged, data)
}

type AdvancedMsgCallback struct{}

func NewAdvancedMsgCallback() *AdvancedMsgCallback {
	return &AdvancedMsgCallback{}
}

func (a AdvancedMsgCallback) OnRecvNewMessage(data *pb.EventOnRecvNewMessageData) {
	eventResp(pb.FuncRequestEventName_EventOnRecvNewMessage, data)
}

func (a AdvancedMsgCallback) OnRecvC2CReadReceipt(data *pb.EventOnRecvC2CReadReceiptData) {
	eventResp(pb.FuncRequestEventName_EventOnRecvC2CReadReceipt, data)
}

func (a AdvancedMsgCallback) OnNewRecvMessageRevoked(data *pb.EventOnNewRecvMessageRevokedData) {
	eventResp(pb.FuncRequestEventName_EventOnNewRecvMessageRevoked, data)
}

func (a AdvancedMsgCallback) OnRecvOfflineNewMessage(data *pb.EventOnRecvOfflineNewMessageData) {
	eventResp(pb.FuncRequestEventName_EventOnRecvOfflineNewMessage, data)
}

func (a AdvancedMsgCallback) OnMsgDeleted(data *pb.EventOnMsgDeletedData) {
	eventResp(pb.FuncRequestEventName_EventOnMsgDeleted, data)
}

func (a AdvancedMsgCallback) OnRecvOnlineOnlyMessage(data *pb.EventOnRecvOnlineOnlyMessageData) {
	eventResp(pb.FuncRequestEventName_EventOnRecvOnlineOnlyMessage, data)
}

func (a AdvancedMsgCallback) OnMsgEdited(data *pb.EventOnMsgEditedData) {
	eventResp(pb.FuncRequestEventName_EventOnMsgEdited, data)
}

type FriendCallback struct{}

func NewFriendCallback() *FriendCallback {
	return &FriendCallback{}
}

func (f FriendCallback) OnFriendApplicationAdded(data *pb.EventOnFriendApplicationAddedData) {
	eventResp(pb.FuncRequestEventName_EventOnFriendApplicationAdded, data)
}

func (f FriendCallback) OnFriendApplicationDeleted(data *pb.EventOnFriendApplicationDeletedData) {
	eventResp(pb.FuncRequestEventName_EventOnFriendApplicationDeleted, data)
}

func (f FriendCallback) OnFriendApplicationAccepted(data *pb.EventOnFriendApplicationAcceptedData) {
	eventResp(pb.FuncRequestEventName_EventOnFriendApplicationAccepted, data)
}

func (f FriendCallback) OnFriendApplicationRejected(data *pb.EventOnFriendApplicationRejectedData) {
	eventResp(pb.FuncRequestEventName_EventOnFriendApplicationRejected, data)
}

func (f FriendCallback) OnFriendAdded(data *pb.EventOnFriendAddedData) {
	eventResp(pb.FuncRequestEventName_EventOnFriendAdded, data)
}

func (f FriendCallback) OnFriendDeleted(data *pb.EventOnFriendDeletedData) {
	eventResp(pb.FuncRequestEventName_EventOnFriendDeleted, data)
}

func (f FriendCallback) OnFriendInfoChanged(data *pb.EventOnFriendInfoChangedData) {
	eventResp(pb.FuncRequestEventName_EventOnFriendInfoChanged, data)
}

func (f FriendCallback) OnBlackAdded(data *pb.EventOnBlackAddedData) {
	eventResp(pb.FuncRequestEventName_EventOnBlackAdded, data)
}

func (f FriendCallback) OnBlackDeleted(data *pb.EventOnBlackDeletedData) {
	eventResp(pb.FuncRequestEventName_EventOnBlackDeleted, data)
}

type GroupCallback struct{}

func NewGroupCallback() *GroupCallback {
	return &GroupCallback{}
}

func (g GroupCallback) OnJoinedGroupAdded(data *pb.EventOnJoinedGroupAddedData) {
	eventResp(pb.FuncRequestEventName_EventOnJoinedGroupAdded, data)
}

func (g GroupCallback) OnJoinedGroupDeleted(data *pb.EventOnJoinedGroupDeletedData) {
	eventResp(pb.FuncRequestEventName_EventOnJoinedGroupDeleted, data)
}

func (g GroupCallback) OnGroupMemberAdded(data *pb.EventOnGroupMemberAddedData) {
	eventResp(pb.FuncRequestEventName_EventOnGroupMemberAdded, data)
}

func (g GroupCallback) OnGroupMemberDeleted(data *pb.EventOnGroupMemberDeletedData) {
	eventResp(pb.FuncRequestEventName_EventOnGroupMemberDeleted, data)
}

func (g GroupCallback) OnGroupApplicationAdded(data *pb.EventOnGroupApplicationAddedData) {
	eventResp(pb.FuncRequestEventName_EventOnGroupApplicationAdded, data)
}

func (g GroupCallback) OnGroupApplicationDeleted(data *pb.EventOnGroupApplicationDeletedData) {
	eventResp(pb.FuncRequestEventName_EventOnGroupApplicationDeleted, data)
}

func (g GroupCallback) OnGroupInfoChanged(data *pb.EventOnGroupInfoChangedData) {
	eventResp(pb.FuncRequestEventName_EventOnGroupInfoChanged, data)
}

func (g GroupCallback) OnGroupDismissed(data *pb.EventOnGroupDismissedData) {
	eventResp(pb.FuncRequestEventName_EventOnGroupDismissed, data)
}

func (g GroupCallback) OnGroupMemberInfoChanged(data *pb.EventOnGroupMemberInfoChangedData) {
	eventResp(pb.FuncRequestEventName_EventOnGroupMemberInfoChanged, data)
}

func (g GroupCallback) OnGroupApplicationAccepted(data *pb.EventOnGroupApplicationAcceptedData) {
	eventResp(pb.FuncRequestEventName_EventOnGroupApplicationAccepted, data)
}

func (g GroupCallback) OnGroupApplicationRejected(data *pb.EventOnGroupApplicationRejectedData) {
	eventResp(pb.FuncRequestEventName_EventOnGroupApplicationRejected, data)
}

type CustomBusinessCallback struct{}

func NewCustomBusinessCallback() *CustomBusinessCallback {
	return &CustomBusinessCallback{}
}

func (c CustomBusinessCallback) OnRecvCustomBusinessMessage(data *pb.EventOnRecvCustomBusinessMessageData) {
	eventResp(pb.FuncRequestEventName_EventOnRecvCustomBusinessMessage, data)
}

type UserCallback struct{}

func NewUserCallback() *UserCallback {
	return &UserCallback{}
}

func (u UserCallback) OnSelfInfoUpdated(data *pb.EventOnSelfInfoUpdatedData) {
	eventResp(pb.FuncRequestEventName_EventOnSelfInfoUpdated, data)
}

func (u UserCallback) OnUserStatusChanged(data *pb.EventOnUserStatusChangedData) {
	eventResp(pb.FuncRequestEventName_EventOnUserStatusChanged, data)
}

func (u UserCallback) OnUserCommandAdd(data *pb.EventOnUserCommandAddData) {
	eventResp(pb.FuncRequestEventName_EventOnUserCommandAdd, data)
}

func (u UserCallback) OnUserCommandDelete(data *pb.EventOnUserCommandDeleteData) {
	eventResp(pb.FuncRequestEventName_EventOnUserCommandDelete, data)
}

func (u UserCallback) OnUserCommandUpdate(data *pb.EventOnUserCommandUpdateData) {
	eventResp(pb.FuncRequestEventName_EventOnUserCommandUpdate, data)
}
