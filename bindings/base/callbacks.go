package base

import (
	"context"
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

func (c ConnCallback) OnConnecting(ctx context.Context, data *pb.EventOnConnectingData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnConnecting, data)
}

func (c ConnCallback) OnConnectSuccess(ctx context.Context, data *pb.EventOnConnectSuccessData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnConnectSuccess, data)
}

func (c ConnCallback) OnConnectFailed(ctx context.Context, data *pb.EventOnConnectFailedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnConnectFailed, data)
}

func (c ConnCallback) OnKickedOffline(ctx context.Context, data *pb.EventOnKickedOfflineData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnKickedOffline, data)
}

func (c ConnCallback) OnUserTokenExpired(ctx context.Context, data *pb.EventOnUserTokenExpiredData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnUserTokenExpired, data)
}

func (c ConnCallback) OnUserTokenInvalid(ctx context.Context, data *pb.EventOnUserTokenInvalidData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnUserTokenInvalid, data)
}

type ConversationCallback struct{}

func NewConversationCallback() *ConversationCallback {
	return &ConversationCallback{}
}

func (c ConversationCallback) OnSyncServerStart(ctx context.Context, data *pb.EventOnSyncServerStartData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnSyncServerStart, data)
}

func (c ConversationCallback) OnSyncServerProgress(ctx context.Context, data *pb.EventOnSyncServerProgressData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnSyncServerProgress, data)
}

func (c ConversationCallback) OnSyncServerFinish(ctx context.Context, data *pb.EventOnSyncServerFinishData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnSyncServerFinish, data)
}

func (c ConversationCallback) OnSyncServerFailed(ctx context.Context, data *pb.EventOnSyncServerFailedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnSyncServerFailed, data)
}

func (c ConversationCallback) OnNewConversation(ctx context.Context, data *pb.EventOnNewConversationData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnNewConversation, data)
}

func (c ConversationCallback) OnConversationChanged(ctx context.Context, data *pb.EventOnConversationChangedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnConversationChanged, data)
}

func (c ConversationCallback) OnTotalUnreadMessageCountChanged(ctx context.Context, data *pb.EventOnTotalUnreadMessageCountChangedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnTotalUnreadMessageCountChanged, data)
}

func (c ConversationCallback) OnConversationUserInputStatusChanged(ctx context.Context, data *pb.EventOnConversationUserInputStatusChangedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnConversationUserInputStatusChanged, data)
}

type MessageCallback struct{}

func NewMessageCallback() *MessageCallback {
	return &MessageCallback{}
}

func (a MessageCallback) OnRecvNewMessage(ctx context.Context, data *pb.EventOnRecvNewMessageData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnRecvNewMessage, data)
}

func (a MessageCallback) OnRecvC2CReadReceipt(ctx context.Context, data *pb.EventOnRecvC2CReadReceiptData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnRecvC2CReadReceipt, data)
}

func (a MessageCallback) OnNewRecvMessageRevoked(ctx context.Context, data *pb.EventOnNewRecvMessageRevokedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnNewRecvMessageRevoked, data)
}

func (a MessageCallback) OnRecvOfflineNewMessage(ctx context.Context, data *pb.EventOnRecvOfflineNewMessageData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnRecvOfflineNewMessage, data)
}

func (a MessageCallback) OnMessageDeleted(ctx context.Context, data *pb.EventOnMessageDeletedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnMessageDeleted, data)
}

func (a MessageCallback) OnRecvOnlineOnlyMessage(ctx context.Context, data *pb.EventOnRecvOnlineOnlyMessageData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnRecvOnlineOnlyMessage, data)
}

func (a MessageCallback) OnMessageEdited(ctx context.Context, data *pb.EventOnMessageEditedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnMessageEdited, data)
}

type FriendCallback struct{}

func NewFriendCallback() *FriendCallback {
	return &FriendCallback{}
}

func (f FriendCallback) OnFriendApplicationAdded(ctx context.Context, data *pb.EventOnFriendApplicationAddedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnFriendApplicationAdded, data)
}

func (f FriendCallback) OnFriendApplicationDeleted(ctx context.Context, data *pb.EventOnFriendApplicationDeletedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnFriendApplicationDeleted, data)
}

func (f FriendCallback) OnFriendApplicationAccepted(ctx context.Context, data *pb.EventOnFriendApplicationAcceptedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnFriendApplicationAccepted, data)
}

func (f FriendCallback) OnFriendApplicationRejected(ctx context.Context, data *pb.EventOnFriendApplicationRejectedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnFriendApplicationRejected, data)
}

func (f FriendCallback) OnFriendAdded(ctx context.Context, data *pb.EventOnFriendAddedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnFriendAdded, data)
}

func (f FriendCallback) OnFriendDeleted(ctx context.Context, data *pb.EventOnFriendDeletedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnFriendDeleted, data)
}

func (f FriendCallback) OnFriendInfoChanged(ctx context.Context, data *pb.EventOnFriendInfoChangedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnFriendInfoChanged, data)
}

func (f FriendCallback) OnBlackAdded(ctx context.Context, data *pb.EventOnBlackAddedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnBlackAdded, data)
}

func (f FriendCallback) OnBlackDeleted(ctx context.Context, data *pb.EventOnBlackDeletedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnBlackDeleted, data)
}

type GroupCallback struct{}

func NewGroupCallback() *GroupCallback {
	return &GroupCallback{}
}

func (g GroupCallback) OnJoinedGroupAdded(ctx context.Context, data *pb.EventOnJoinedGroupAddedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnJoinedGroupAdded, data)
}

func (g GroupCallback) OnJoinedGroupDeleted(ctx context.Context, data *pb.EventOnJoinedGroupDeletedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnJoinedGroupDeleted, data)
}

func (g GroupCallback) OnGroupMemberAdded(ctx context.Context, data *pb.EventOnGroupMemberAddedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnGroupMemberAdded, data)
}

func (g GroupCallback) OnGroupMemberDeleted(ctx context.Context, data *pb.EventOnGroupMemberDeletedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnGroupMemberDeleted, data)
}

func (g GroupCallback) OnGroupApplicationAdded(ctx context.Context, data *pb.EventOnGroupApplicationAddedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnGroupApplicationAdded, data)
}

func (g GroupCallback) OnGroupApplicationDeleted(ctx context.Context, data *pb.EventOnGroupApplicationDeletedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnGroupApplicationDeleted, data)
}

func (g GroupCallback) OnGroupInfoChanged(ctx context.Context, data *pb.EventOnGroupInfoChangedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnGroupInfoChanged, data)
}

func (g GroupCallback) OnGroupDismissed(ctx context.Context, data *pb.EventOnGroupDismissedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnGroupDismissed, data)
}

func (g GroupCallback) OnGroupMemberInfoChanged(ctx context.Context, data *pb.EventOnGroupMemberInfoChangedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnGroupMemberInfoChanged, data)
}

func (g GroupCallback) OnGroupApplicationAccepted(ctx context.Context, data *pb.EventOnGroupApplicationAcceptedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnGroupApplicationAccepted, data)
}

func (g GroupCallback) OnGroupApplicationRejected(ctx context.Context, data *pb.EventOnGroupApplicationRejectedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnGroupApplicationRejected, data)
}

type CustomBusinessCallback struct{}

func NewCustomBusinessCallback() *CustomBusinessCallback {
	return &CustomBusinessCallback{}
}

func (c CustomBusinessCallback) OnRecvCustomBusinessMessage(ctx context.Context, data *pb.EventOnRecvCustomBusinessMessageData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnRecvCustomBusinessMessage, data)
}

type UserCallback struct{}

func NewUserCallback() *UserCallback {
	return &UserCallback{}
}

func (u UserCallback) OnSelfInfoUpdated(ctx context.Context, data *pb.EventOnSelfInfoUpdatedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnSelfInfoUpdated, data)
}

func (u UserCallback) OnUserOnlineStatusChanged(ctx context.Context, data *pb.EventOnUserOnlineStatusChangedData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnUserOnlineStatusChanged, data)
}

func (u UserCallback) OnUserCommandAdd(ctx context.Context, data *pb.EventOnUserCommandAddData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnUserCommandAdd, data)
}

func (u UserCallback) OnUserCommandDelete(ctx context.Context, data *pb.EventOnUserCommandDeleteData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnUserCommandDelete, data)
}

func (u UserCallback) OnUserCommandUpdate(ctx context.Context, data *pb.EventOnUserCommandUpdateData) {
	passiveEventResp(ctx, pb.FuncRequestEventName_EventOnUserCommandUpdate, data)
}

type SendMessageCallback struct {
	handleID uint64
}

func NewSendMessageCallback(handleID uint64) open_im_sdk_callback.SendMsgCallBack {
	return &SendMessageCallback{handleID: handleID}
}

func (s SendMessageCallback) OnSendMsgProgress(ctx context.Context, data *pb.EventOnSendMsgProgressData) {
	activeEventResp(ctx, pb.FuncRequestEventName_EventOnSendMsgProgress, s.handleID, data)
}

type UploadFileCallback struct {
	handleID uint64
}

func NewUploadFileCallback(handleID uint64) open_im_sdk_callback.UploadFileCallback {
	return &UploadFileCallback{handleID: handleID}
}

func (u UploadFileCallback) OnUploadFileProgress(ctx context.Context, data *pb.EventOnUploadFileProgressData) {
	activeEventResp(ctx, pb.FuncRequestEventName_EventOnUploadFileProgress, u.handleID, data)
}

type UploadLogsCallback struct {
	handleID uint64
}

func NewUploadLogsCallback(handleID uint64) open_im_sdk_callback.UploadLogsCallback {
	return &UploadLogsCallback{handleID: handleID}
}

func (u UploadLogsCallback) OnUploadLogsProgress(ctx context.Context, data *pb.EventOnUploadLogsProgressData) {
	activeEventResp(ctx, pb.FuncRequestEventName_EventOnUploadFileProgress, u.handleID, data)
}
