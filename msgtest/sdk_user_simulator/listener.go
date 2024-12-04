package sdk_user_simulator

import (
	"context"
	pb "github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
	"github.com/openimsdk/tools/errs"
	"github.com/openimsdk/tools/log"
)

type conversationCallBack struct {
}

func (c *conversationCallBack) OnSyncServerFailed(data *pb.EventOnSyncServerFailedData) {
}

func (c *conversationCallBack) OnNewConversation(data *pb.EventOnNewConversationData) {
}

func (c *conversationCallBack) OnConversationChanged(data *pb.EventOnConversationChangedData) {
}

func (c *conversationCallBack) OnTotalUnreadMessageCountChanged(data *pb.EventOnTotalUnreadMessageCountChangedData) {
}

func (c *conversationCallBack) OnSyncServerProgress(data *pb.EventOnSyncServerProgressData) {
}

func (c *conversationCallBack) OnSyncServerStart(data *pb.EventOnSyncServerStartData) {
}

func (c *conversationCallBack) OnSyncServerFinish(data *pb.EventOnSyncServerFinishData) {
}

func (c *conversationCallBack) OnConversationUserInputStatusChanged(data *pb.EventOnConversationUserInputStatusChangedData) {
}

type userCallback struct {
}

func (c userCallback) OnUserStatusChanged(data *pb.EventOnUserStatusChangedData) {
}

func (userCallback) OnSelfInfoUpdated(data *pb.EventOnSelfInfoUpdatedData) {
}

func (userCallback) OnUserCommandAdd(data *pb.EventOnUserCommandAddData) {
}

func (userCallback) OnUserCommandUpdate(data *pb.EventOnUserCommandUpdateData) {
}

func (userCallback) OnUserCommandDelete(data *pb.EventOnUserCommandDeleteData) {
}

type SingleMessage struct {
	SendID      string
	ClientMsgID string
	Delay       int64
}
type MsgListenerCallBak struct {
	userID      string
	GroupDelay  map[string][]*SingleMessage
	SingleDelay map[string][]*SingleMessage
}

func NewMsgListenerCallBak(userID string) *MsgListenerCallBak {
	return &MsgListenerCallBak{userID: userID,
		GroupDelay:  make(map[string][]*SingleMessage),
		SingleDelay: make(map[string][]*SingleMessage)}
}

func (m *MsgListenerCallBak) OnRecvNewMessage(message string) {
}

func (m *MsgListenerCallBak) OnMsgEdited(message string) {

}

func (m *MsgListenerCallBak) OnRecvC2CReadReceipt(msgReceiptList string) {
}

func (m *MsgListenerCallBak) OnMsgDeleted(s string) {}

func (m *MsgListenerCallBak) OnRecvOfflineNewMessage(message string) {
}

func (m *MsgListenerCallBak) OnRecvMessageExtensionsAdded(msgID string, reactionExtensionList string) {

}

func (m *MsgListenerCallBak) OnRecvGroupReadReceipt(groupMsgReceiptList string) {
}
func (m *MsgListenerCallBak) OnNewRecvMessageRevoked(messageRevoked string) {
}

func (m *MsgListenerCallBak) OnRecvMessageExtensionsChanged(msgID string, reactionExtensionList string) {

}
func (m *MsgListenerCallBak) OnRecvMessageExtensionsDeleted(msgID string, reactionExtensionKeyList string) {
}

func (m *MsgListenerCallBak) OnRecvOnlineOnlyMessage(message string) {

}

type testFriendshipListener struct {
}

func (testFriendshipListener) OnFriendApplicationAdded(data *pb.EventOnFriendApplicationAddedData) {
}

func (testFriendshipListener) OnFriendApplicationDeleted(data *pb.EventOnFriendApplicationDeletedData) {
}

func (testFriendshipListener) OnFriendApplicationAccepted(data *pb.EventOnFriendApplicationAcceptedData) {
}

func (testFriendshipListener) OnFriendApplicationRejected(data *pb.EventOnFriendApplicationRejectedData) {
}

func (testFriendshipListener) OnFriendAdded(data *pb.EventOnFriendAddedData) {
}

func (testFriendshipListener) OnFriendDeleted(data *pb.EventOnFriendDeletedData) {
}

func (testFriendshipListener) OnBlackAdded(data *pb.EventOnBlackAddedData) {
}

func (testFriendshipListener) OnBlackDeleted(data *pb.EventOnBlackDeletedData) {
}

func (testFriendshipListener) OnFriendInfoChanged(data *pb.EventOnFriendInfoChangedData) {
}

type testGroupListener struct {
}

func (testGroupListener) OnJoinedGroupAdded(data *pb.EventOnJoinedGroupAddedData) {
}

func (testGroupListener) OnJoinedGroupDeleted(data *pb.EventOnJoinedGroupDeletedData) {
}

func (testGroupListener) OnGroupMemberAdded(data *pb.EventOnGroupMemberAddedData) {
}

func (testGroupListener) OnGroupMemberDeleted(data *pb.EventOnGroupMemberDeletedData) {
}

func (testGroupListener) OnGroupApplicationAdded(data *pb.EventOnGroupApplicationAddedData) {
}

func (testGroupListener) OnGroupApplicationDeleted(data *pb.EventOnGroupApplicationDeletedData) {
}

func (testGroupListener) OnGroupInfoChanged(data *pb.EventOnGroupInfoChangedData) {
}

func (testGroupListener) OnGroupMemberInfoChanged(data *pb.EventOnGroupMemberInfoChangedData) {
}

func (testGroupListener) OnGroupApplicationAccepted(data *pb.EventOnGroupApplicationAcceptedData) {
}

func (testGroupListener) OnGroupApplicationRejected(data *pb.EventOnGroupApplicationRejectedData) {
}

func (testGroupListener) OnGroupDismissed(data *pb.EventOnGroupDismissedData) {
}

type testConnListener struct {
	UserID string
}

func (t *testConnListener) OnUserTokenInvalid(errMsg string) {
	log.ZError(context.TODO(), "user token invalid", errs.New("user token invalid").Wrap(), "userID", t.UserID)
}

func (t *testConnListener) OnUserTokenExpired() {
	log.ZError(context.TODO(), "user token expired", errs.New("user token expired").Wrap(), "userID", t.UserID)
}
func (t *testConnListener) OnConnecting() {

}

func (t *testConnListener) OnConnectSuccess() {
}

func (t *testConnListener) OnConnectFailed(ErrCode int32, ErrMsg string) {
	log.ZError(context.TODO(), "connect failed", errs.NewCodeError(int(ErrCode), ErrMsg), "userID", t.UserID)
}

func (t *testConnListener) OnKickedOffline() {
	log.ZError(context.TODO(), "kicked offline", errs.New("kicked offline").Wrap(), "userID", t.UserID)
}

func (t *testConnListener) OnSelfInfoUpdated(info string) {

}
func (t *testConnListener) OnUserCommandAdd(info string) {

}
func (t *testConnListener) OnUserCommandUpdate(info string) {

}
func (t *testConnListener) OnUserCommandDelete(info string) {

}
func (t *testConnListener) OnSuccess() {

}

func (t *testConnListener) OnError(code int32, msg string) {

}
