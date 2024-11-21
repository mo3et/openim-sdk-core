package test

import (
	"context"
	"fmt"
	pb "github.com/openimsdk/openim-sdk-core/v3/proto"
	"github.com/openimsdk/tools/log"
)

type OnConnListener struct{}

func (c *OnConnListener) OnUserTokenInvalid(errMsg string) {}

func (c *OnConnListener) OnConnecting() {
	// fmt.Println("OnConnecting")
}

func (c *OnConnListener) OnConnectSuccess() {
	// fmt.Println("OnConnectSuccess")
}

func (c *OnConnListener) OnConnectFailed(errCode int32, errMsg string) {
	// fmt.Println("OnConnectFailed")
}

func (c *OnConnListener) OnKickedOffline() {
	// fmt.Println("OnKickedOffline")
}

func (c *OnConnListener) OnUserTokenExpired() {
	// fmt.Println("OnUserTokenExpired")
}

type onConversationListener struct {
	ctx context.Context
	ch  chan error
}

func (o *onConversationListener) OnSyncServerStart(data *pb.EventOnSyncServerStartData) {
	log.ZInfo(o.ctx, "OnSyncServerStart")
}

func (o *onConversationListener) OnSyncServerFinish(data *pb.EventOnSyncServerFinishData) {
	log.ZInfo(o.ctx, "OnSyncServerFinish")
	o.ch <- nil
}

func (o *onConversationListener) OnSyncServerFailed(data *pb.EventOnSyncServerFailedData) {
	log.ZInfo(o.ctx, "OnSyncServerFailed")
	o.ch <- fmt.Errorf("OnSyncServerFailed")
}

func (o *onConversationListener) OnSyncServerProgress(data *pb.EventOnSyncServerProgressData) {
	log.ZInfo(o.ctx, "OnSyncServerProgress", "progress", data.Progress)
}

func (o *onConversationListener) OnNewConversation(data *pb.EventOnNewConversationData) {
	log.ZInfo(o.ctx, "OnNewConversation", "conversationList", data.ConversationList)
}

func (o *onConversationListener) OnConversationChanged(data *pb.EventOnConversationChangedData) {
	log.ZInfo(o.ctx, "OnConversationChanged", "####### conversationList", data.GetConversationList())
}

func (o *onConversationListener) OnTotalUnreadMessageCountChanged(data *pb.EventOnTotalUnreadMessageCountChangedData) {
	log.ZInfo(o.ctx, "OnTotalUnreadMessageCountChanged", "totalUnreadCount", data.TotalUnreadCount)
}

func (o *onConversationListener) OnConversationUserInputStatusChanged(data *pb.EventOnConversationUserInputStatusChangedData) {
	log.ZInfo(o.ctx, "OnConversationUserInputStatusChanged", "change", data)
}

type onGroupListener struct {
	ctx context.Context
}

func (o *onGroupListener) OnGroupDismissed(data *pb.EventOnGroupDismissedData) {
	log.ZInfo(o.ctx, "OnGroupDismissed", "groupInfo", data.Group)
}

func (o *onGroupListener) OnJoinedGroupAdded(data *pb.EventOnJoinedGroupAddedData) {
	log.ZInfo(o.ctx, "OnJoinedGroupAdded", "groupInfo", data.Group)
}

func (o *onGroupListener) OnJoinedGroupDeleted(data *pb.EventOnJoinedGroupDeletedData) {
	log.ZInfo(o.ctx, "OnJoinedGroupDeleted", "groupInfo", data.Group)
}

func (o *onGroupListener) OnGroupMemberAdded(data *pb.EventOnGroupMemberAddedData) {
	log.ZInfo(o.ctx, "OnGroupMemberAdded", "groupMemberInfo", data.Member)
}

func (o *onGroupListener) OnGroupMemberDeleted(data *pb.EventOnGroupMemberDeletedData) {
	log.ZInfo(o.ctx, "OnGroupMemberDeleted", "groupMemberInfo", data.Member)
}

func (o *onGroupListener) OnGroupApplicationAdded(data *pb.EventOnGroupApplicationAddedData) {
	log.ZInfo(o.ctx, "OnGroupApplicationAdded", "groupApplication", data.Request)
}

func (o *onGroupListener) OnGroupApplicationDeleted(data *pb.EventOnGroupApplicationDeletedData) {
	log.ZInfo(o.ctx, "OnGroupApplicationDeleted", "groupApplication", data.Request)
}

func (o *onGroupListener) OnGroupInfoChanged(data *pb.EventOnGroupInfoChangedData) {
	log.ZInfo(o.ctx, "OnGroupInfoChanged", "groupInfo", data.Group)
}

func (o *onGroupListener) OnGroupMemberInfoChanged(data *pb.EventOnGroupMemberInfoChangedData) {
	log.ZInfo(o.ctx, "OnGroupMemberInfoChanged", "groupMemberInfo", data.Member)
}

func (o *onGroupListener) OnGroupApplicationAccepted(data *pb.EventOnGroupApplicationAcceptedData) {
	log.ZInfo(o.ctx, "OnGroupApplicationAccepted", "groupApplication", data.Request)
}

func (o *onGroupListener) OnGroupApplicationRejected(data *pb.EventOnGroupApplicationRejectedData) {
	log.ZInfo(o.ctx, "OnGroupApplicationRejected", "groupApplication", data.Request)
}

type onAdvancedMsgListener struct {
	ctx context.Context
}

func (o *onAdvancedMsgListener) OnRecvOnlineOnlyMessage(data *pb.EventOnRecvOnlineOnlyMessageData) {
	log.ZDebug(o.ctx, "OnRecvOnlineOnlyMessage", "message", data.Message)
}

func (o *onAdvancedMsgListener) OnRecvOfflineNewMessage(data *pb.EventOnRecvOfflineNewMessageData) {
	//TODO implement me
	panic("implement me")
}

func (o *onAdvancedMsgListener) OnMsgDeleted(data *pb.EventOnMsgDeletedData) {
	log.ZInfo(o.ctx, "OnMsgDeleted", "message", data.Message)
}

func (o *onAdvancedMsgListener) OnMsgEdited(data *pb.EventOnMsgEditedData) {
	log.ZInfo(o.ctx, "OnMsgEdited", "######## message", data.Message)
}

func (o *onAdvancedMsgListener) OnRecvOfflineNewMessages(messageList string) {
	log.ZInfo(o.ctx, "OnRecvOfflineNewMessages", "messageList", messageList)
}

func (o *onAdvancedMsgListener) OnRecvNewMessage(data *pb.EventOnRecvNewMessageData) {
	log.ZInfo(o.ctx, "OnRecvNewMessage", "message", data.Message)
}

func (o *onAdvancedMsgListener) OnRecvC2CReadReceipt(data *pb.EventOnRecvC2CReadReceiptData) {
	log.ZInfo(o.ctx, "OnRecvC2CReadReceipt", "msgReceiptList", data.MsgReceiptList)
}

func (o *onAdvancedMsgListener) OnRecvGroupReadReceipt(groupMsgReceiptList string) {
	log.ZInfo(o.ctx, "OnRecvGroupReadReceipt", "groupMsgReceiptList", groupMsgReceiptList)
}

func (o *onAdvancedMsgListener) OnRecvMessageRevoked(msgID string) {
	log.ZInfo(o.ctx, "OnRecvMessageRevoked", "msgID", msgID)
}

func (o *onAdvancedMsgListener) OnNewRecvMessageRevoked(data *pb.EventOnNewRecvMessageRevokedData) {
	log.ZInfo(o.ctx, "OnNewRecvMessageRevoked", "messageRevoked", data.MessageRevoked)
}

func (o *onAdvancedMsgListener) OnRecvMessageExtensionsChanged(msgID string, reactionExtensionList string) {
	log.ZInfo(o.ctx, "OnRecvMessageExtensionsChanged", "msgID", msgID, "reactionExtensionList", reactionExtensionList)
}

func (o *onAdvancedMsgListener) OnRecvMessageExtensionsDeleted(msgID string, reactionExtensionKeyList string) {
	log.ZInfo(o.ctx, "OnRecvMessageExtensionsDeleted", "msgID", msgID, "reactionExtensionKeyList", reactionExtensionKeyList)
}

func (o *onAdvancedMsgListener) OnRecvMessageExtensionsAdded(msgID string, reactionExtensionList string) {
	log.ZInfo(o.ctx, "OnRecvMessageExtensionsAdded", "msgID", msgID, "reactionExtensionList", reactionExtensionList)
}

type onFriendshipListener struct {
	ctx context.Context
}

func (o *onFriendshipListener) OnFriendApplicationAdded(data *pb.EventOnFriendApplicationAddedData) {
	log.ZDebug(context.Background(), "OnFriendApplicationAdded", "friendApplication", data.Request)
}

func (o *onFriendshipListener) OnFriendApplicationDeleted(data *pb.EventOnFriendApplicationDeletedData) {
	log.ZDebug(context.Background(), "OnFriendApplicationDeleted", "friendApplication", data.Request)
}

func (o *onFriendshipListener) OnFriendApplicationAccepted(data *pb.EventOnFriendApplicationAcceptedData) {
	log.ZDebug(context.Background(), "OnFriendApplicationAccepted", "friendApplication", data.Request)
}

func (o *onFriendshipListener) OnFriendApplicationRejected(data *pb.EventOnFriendApplicationRejectedData) {
	log.ZDebug(context.Background(), "OnFriendApplicationRejected", "friendApplication", data.Request)
}

func (o *onFriendshipListener) OnFriendAdded(data *pb.EventOnFriendAddedData) {
	log.ZDebug(context.Background(), "OnFriendAdded", "friendInfo", data.Friend)
}

func (o *onFriendshipListener) OnFriendDeleted(data *pb.EventOnFriendDeletedData) {
	log.ZDebug(context.Background(), "OnFriendDeleted", "friendInfo", data.Friend)
}

func (o *onFriendshipListener) OnFriendInfoChanged(data *pb.EventOnFriendInfoChangedData) {
	log.ZDebug(context.Background(), "OnFriendInfoChanged", "friendInfo", data.Friend)
}

func (o *onFriendshipListener) OnBlackAdded(data *pb.EventOnBlackAddedData) {
	log.ZDebug(context.Background(), "OnBlackAdded", "blackInfo", data.Black)
}

func (o *onFriendshipListener) OnBlackDeleted(data *pb.EventOnBlackDeletedData) {
	log.ZDebug(context.Background(), "OnBlackDeleted", "blackInfo", data.Black)
}

type onUserListener struct {
	ctx context.Context
}

func (o *onUserListener) OnSelfInfoUpdated(data *pb.EventOnSelfInfoUpdatedData) {
	log.ZDebug(context.Background(), "OnSelfInfoUpdated", "userInfo", data.User)
}
func (o *onUserListener) OnUserCommandAdd(data *pb.EventOnUserCommandAddData) {
	log.ZDebug(context.Background(), "OnUserCommandAdd", "blackInfo", data.Command)
}
func (o *onUserListener) OnUserCommandDelete(data *pb.EventOnUserCommandDeleteData) {
	log.ZDebug(context.Background(), "OnUserCommandDelete", "blackInfo", data.Command)
}
func (o *onUserListener) OnUserCommandUpdate(data *pb.EventOnUserCommandUpdateData) {
	log.ZDebug(context.Background(), "OnUserCommandUpdate", "blackInfo", data.Command)
}
func (o *onUserListener) OnUserStatusChanged(data *pb.EventOnUserStatusChangedData) {
	log.ZDebug(context.Background(), "OnUserStatusChanged", "OnUserStatusChanged", data)
}
