package base

import (
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk_callback"
	pb "github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
)

func setListener(funcName pb.FuncRequestEventName) {
	if funcName != pb.FuncRequestEventName_InitSDK {
		return
	}
	open_im_sdk.IMUserContext.SetConnListener(NewConnCallback())
	open_im_sdk.IMUserContext.SetConversationListener(NewConversationCallback())
	open_im_sdk.IMUserContext.SetMessageListener(NewMessageCallback())
	open_im_sdk.IMUserContext.SetFriendshipListener(NewFriendCallback())
	open_im_sdk.IMUserContext.SetGroupListener(NewGroupCallback())
	open_im_sdk.IMUserContext.SetUserListener(NewUserCallback())
	open_im_sdk.IMUserContext.SetCustomBusinessListener(NewCustomBusinessCallback())
}

type ConnCallback struct{}

func NewConnCallback() *ConnCallback {
	return &ConnCallback{}
}

func (c ConnCallback) OnConnecting(data *pb.EventOnConnectingData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnConnecting, data)
}

func (c ConnCallback) OnConnectSuccess(data *pb.EventOnConnectSuccessData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnConnectSuccess, data)
}

func (c ConnCallback) OnConnectFailed(data *pb.EventOnConnectFailedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnConnectFailed, data)
}

func (c ConnCallback) OnKickedOffline(data *pb.EventOnKickedOfflineData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnKickedOffline, data)
}

func (c ConnCallback) OnUserTokenExpired(data *pb.EventOnUserTokenExpiredData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnUserTokenExpired, data)
}

func (c ConnCallback) OnUserTokenInvalid(data *pb.EventOnUserTokenInvalidData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnUserTokenInvalid, data)
}

type ConversationCallback struct{}

func NewConversationCallback() *ConversationCallback {
	return &ConversationCallback{}
}

func (c ConversationCallback) OnSyncServerStart(data *pb.EventOnSyncServerStartData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnSyncServerStart, data)
}

func (c ConversationCallback) OnSyncServerProgress(data *pb.EventOnSyncServerProgressData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnSyncServerProgress, data)
}

func (c ConversationCallback) OnSyncServerFinish(data *pb.EventOnSyncServerFinishData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnSyncServerFinish, data)
}

func (c ConversationCallback) OnSyncServerFailed(data *pb.EventOnSyncServerFailedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnSyncServerFailed, data)
}

func (c ConversationCallback) OnNewConversation(data *pb.EventOnNewConversationData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnNewConversation, data)
}

func (c ConversationCallback) OnConversationChanged(data *pb.EventOnConversationChangedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnConversationChanged, data)
}

func (c ConversationCallback) OnTotalUnreadMessageCountChanged(data *pb.EventOnTotalUnreadMessageCountChangedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnTotalUnreadMessageCountChanged, data)
}

func (c ConversationCallback) OnConversationUserInputStatusChanged(data *pb.EventOnConversationUserInputStatusChangedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnConversationUserInputStatusChanged, data)
}

type MessageCallback struct{}

func NewMessageCallback() *MessageCallback {
	return &MessageCallback{}
}

func (a MessageCallback) OnRecvNewMessage(data *pb.EventOnRecvNewMessageData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnRecvNewMessage, data)
}

func (a MessageCallback) OnRecvC2CReadReceipt(data *pb.EventOnRecvC2CReadReceiptData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnRecvC2CReadReceipt, data)
}

func (a MessageCallback) OnNewRecvMessageRevoked(data *pb.EventOnNewRecvMessageRevokedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnNewRecvMessageRevoked, data)
}

func (a MessageCallback) OnRecvOfflineNewMessage(data *pb.EventOnRecvOfflineNewMessageData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnRecvOfflineNewMessage, data)
}

func (a MessageCallback) OnMessageDeleted(data *pb.EventOnMessageDeletedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnMessageDeleted, data)
}

func (a MessageCallback) OnRecvOnlineOnlyMessage(data *pb.EventOnRecvOnlineOnlyMessageData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnRecvOnlineOnlyMessage, data)
}

func (a MessageCallback) OnMessageEdited(data *pb.EventOnMessageEditedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnMessageEdited, data)
}

type FriendCallback struct{}

func NewFriendCallback() *FriendCallback {
	return &FriendCallback{}
}

func (f FriendCallback) OnFriendApplicationAdded(data *pb.EventOnFriendApplicationAddedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnFriendApplicationAdded, data)
}

func (f FriendCallback) OnFriendApplicationDeleted(data *pb.EventOnFriendApplicationDeletedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnFriendApplicationDeleted, data)
}

func (f FriendCallback) OnFriendApplicationAccepted(data *pb.EventOnFriendApplicationAcceptedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnFriendApplicationAccepted, data)
}

func (f FriendCallback) OnFriendApplicationRejected(data *pb.EventOnFriendApplicationRejectedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnFriendApplicationRejected, data)
}

func (f FriendCallback) OnFriendAdded(data *pb.EventOnFriendAddedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnFriendAdded, data)
}

func (f FriendCallback) OnFriendDeleted(data *pb.EventOnFriendDeletedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnFriendDeleted, data)
}

func (f FriendCallback) OnFriendInfoChanged(data *pb.EventOnFriendInfoChangedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnFriendInfoChanged, data)
}

func (f FriendCallback) OnBlackAdded(data *pb.EventOnBlackAddedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnBlackAdded, data)
}

func (f FriendCallback) OnBlackDeleted(data *pb.EventOnBlackDeletedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnBlackDeleted, data)
}

type GroupCallback struct{}

func NewGroupCallback() *GroupCallback {
	return &GroupCallback{}
}

func (g GroupCallback) OnJoinedGroupAdded(data *pb.EventOnJoinedGroupAddedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnJoinedGroupAdded, data)
}

func (g GroupCallback) OnJoinedGroupDeleted(data *pb.EventOnJoinedGroupDeletedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnJoinedGroupDeleted, data)
}

func (g GroupCallback) OnGroupMemberAdded(data *pb.EventOnGroupMemberAddedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnGroupMemberAdded, data)
}

func (g GroupCallback) OnGroupMemberDeleted(data *pb.EventOnGroupMemberDeletedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnGroupMemberDeleted, data)
}

func (g GroupCallback) OnGroupApplicationAdded(data *pb.EventOnGroupApplicationAddedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnGroupApplicationAdded, data)
}

func (g GroupCallback) OnGroupApplicationDeleted(data *pb.EventOnGroupApplicationDeletedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnGroupApplicationDeleted, data)
}

func (g GroupCallback) OnGroupInfoChanged(data *pb.EventOnGroupInfoChangedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnGroupInfoChanged, data)
}

func (g GroupCallback) OnGroupDismissed(data *pb.EventOnGroupDismissedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnGroupDismissed, data)
}

func (g GroupCallback) OnGroupMemberInfoChanged(data *pb.EventOnGroupMemberInfoChangedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnGroupMemberInfoChanged, data)
}

func (g GroupCallback) OnGroupApplicationAccepted(data *pb.EventOnGroupApplicationAcceptedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnGroupApplicationAccepted, data)
}

func (g GroupCallback) OnGroupApplicationRejected(data *pb.EventOnGroupApplicationRejectedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnGroupApplicationRejected, data)
}

type CustomBusinessCallback struct{}

func NewCustomBusinessCallback() *CustomBusinessCallback {
	return &CustomBusinessCallback{}
}

func (c CustomBusinessCallback) OnRecvCustomBusinessMessage(data *pb.EventOnRecvCustomBusinessMessageData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnRecvCustomBusinessMessage, data)
}

type UserCallback struct{}

func NewUserCallback() *UserCallback {
	return &UserCallback{}
}

func (u UserCallback) OnSelfInfoUpdated(data *pb.EventOnSelfInfoUpdatedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnSelfInfoUpdated, data)
}

func (u UserCallback) OnUserStatusChanged(data *pb.EventOnUserOnlineStatusChangedData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnUserStatusChanged, data)
}

func (u UserCallback) OnUserCommandAdd(data *pb.EventOnUserCommandAddData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnUserCommandAdd, data)
}

func (u UserCallback) OnUserCommandDelete(data *pb.EventOnUserCommandDeleteData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnUserCommandDelete, data)
}

func (u UserCallback) OnUserCommandUpdate(data *pb.EventOnUserCommandUpdateData) {
	passiveEventResp(pb.FuncRequestEventName_EventOnUserCommandUpdate, data)
}

type SendMessageCallback struct {
	handleID uint64
}

func NewSendMessageCallback(handleID uint64) open_im_sdk_callback.SendMsgCallBack {
	return &SendMessageCallback{handleID: handleID}
}

func (s SendMessageCallback) OnSendMsgProgress(data *pb.EventOnSendMsgProgressData) {
	activeEventResp(pb.FuncRequestEventName_EventOnSendMsgProgress, s.handleID, data)
}

type UploadFileCallback struct {
	handleID uint64
}

func NewUploadFileCallback(handleID uint64) open_im_sdk_callback.UploadFileCallback {
	return &UploadFileCallback{handleID: handleID}
}

func (u UploadFileCallback) OnUploadFileProgress(data *pb.EventOnUploadFileProgressData) {
	activeEventResp(pb.FuncRequestEventName_EventOnUploadFileProgress, u.handleID, data)
}

type UploadLogsCallback struct {
	handleID uint64
}

func NewUploadLogsCallback(handleID uint64) open_im_sdk_callback.UploadLogsCallback {
	return &UploadLogsCallback{handleID: handleID}
}

func (u UploadLogsCallback) OnUploadLogsProgress(data *pb.EventOnUploadLogsProgressData) {
	activeEventResp(pb.FuncRequestEventName_EventOnUploadFileProgress, u.handleID, data)
}
