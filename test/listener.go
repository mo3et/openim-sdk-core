package test

import (
	"context"
	"fmt"
	pb "github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
	"github.com/openimsdk/tools/log"
)

// log.ZInfo(o.ctx, "###LISTENER###
// log.ZInfo(o.ctx, "###LISTENER### ###LISTENER###

type onConversationListener struct {
	ctx context.Context
	ch  chan error
}

func (o *onConversationListener) OnSyncServerStart(data *pb.EventOnSyncServerStartData) {
	log.ZInfo(o.ctx, "###LISTENER### OnSyncServerStart")
}

func (o *onConversationListener) OnSyncServerFinish(data *pb.EventOnSyncServerFinishData) {
	log.ZInfo(o.ctx, "###LISTENER### OnSyncServerFinish")
	o.ch <- nil
}

func (o *onConversationListener) OnSyncServerFailed(data *pb.EventOnSyncServerFailedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnSyncServerFailed")
	o.ch <- fmt.Errorf("OnSyncServerFailed")
}

func (o *onConversationListener) OnSyncServerProgress(data *pb.EventOnSyncServerProgressData) {
	log.ZInfo(o.ctx, "###LISTENER### OnSyncServerProgress", "progress", data.Progress)
}

func (o *onConversationListener) OnNewConversation(data *pb.EventOnNewConversationData) {
	log.ZInfo(o.ctx, "###LISTENER### OnNewConversation", "conversationList", data.ConversationList)
}

func (o *onConversationListener) OnConversationChanged(data *pb.EventOnConversationChangedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnConversationChanged", "####### conversationList", data.GetConversationList())
}

func (o *onConversationListener) OnTotalUnreadMessageCountChanged(data *pb.EventOnTotalUnreadMessageCountChangedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnTotalUnreadMessageCountChanged", "totalUnreadCount", data.TotalUnreadCount)
}

func (o *onConversationListener) OnConversationUserInputStatusChanged(data *pb.EventOnConversationUserInputStatusChangedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnConversationUserInputStatusChanged", "change", data)
}

type onGroupListener struct {
	ctx context.Context
}

func (o *onGroupListener) OnGroupDismissed(data *pb.EventOnGroupDismissedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnGroupDismissed", "groupInfo", data.Group)
}

func (o *onGroupListener) OnJoinedGroupAdded(data *pb.EventOnJoinedGroupAddedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnJoinedGroupAdded", "groupInfo", data.Group)
}

func (o *onGroupListener) OnJoinedGroupDeleted(data *pb.EventOnJoinedGroupDeletedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnJoinedGroupDeleted", "groupInfo", data.Group)
}

func (o *onGroupListener) OnGroupMemberAdded(data *pb.EventOnGroupMemberAddedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnGroupMemberAdded", "groupMemberInfo", data.Member)
}

func (o *onGroupListener) OnGroupMemberDeleted(data *pb.EventOnGroupMemberDeletedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnGroupMemberDeleted", "groupMemberInfo", data.Member)
}

func (o *onGroupListener) OnGroupApplicationAdded(data *pb.EventOnGroupApplicationAddedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnGroupApplicationAdded", "groupApplication", data.Application)
}

func (o *onGroupListener) OnGroupApplicationDeleted(data *pb.EventOnGroupApplicationDeletedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnGroupApplicationDeleted", "groupApplication", data.Application)
}

func (o *onGroupListener) OnGroupInfoChanged(data *pb.EventOnGroupInfoChangedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnGroupInfoChanged", "groupInfo", data.Group)
}

func (o *onGroupListener) OnGroupMemberInfoChanged(data *pb.EventOnGroupMemberInfoChangedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnGroupMemberInfoChanged", "groupMemberInfo", data.Member)
}

func (o *onGroupListener) OnGroupApplicationAccepted(data *pb.EventOnGroupApplicationAcceptedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnGroupApplicationAccepted", "groupApplication", data.Application)
}

func (o *onGroupListener) OnGroupApplicationRejected(data *pb.EventOnGroupApplicationRejectedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnGroupApplicationRejected", "groupApplication", data.Application)
}

type onMessageListener struct {
	ctx context.Context
}

func (o *onMessageListener) OnRecvOnlineOnlyMessage(data *pb.EventOnRecvOnlineOnlyMessageData) {
	log.ZInfo(o.ctx, "###LISTENER### OnRecvOnlineOnlyMessage", "message", data.Message)
}

func (o *onMessageListener) OnRecvOfflineNewMessage(data *pb.EventOnRecvOfflineNewMessageData) {
	log.ZInfo(o.ctx, "###LISTENER### OnRecvOfflineNewMessage", "message", data.Message)
}

func (o *onMessageListener) OnMessageDeleted(data *pb.EventOnMessageDeletedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnMessageDeleted", "message", data.Message)
}

func (o *onMessageListener) OnMessageEdited(data *pb.EventOnMessageEditedData) {
	log.ZInfo(o.ctx, "###LISTENER### EventOnMessageEditedData", "######## message", data.Message)
}

func (o *onMessageListener) OnRecvOfflineNewMessages(messageList string) {
	log.ZInfo(o.ctx, "###LISTENER### OnRecvOfflineNewMessages", "messageList", messageList)
}

func (o *onMessageListener) OnRecvNewMessage(data *pb.EventOnRecvNewMessageData) {
	log.ZInfo(o.ctx, "###LISTENER### OnRecvNewMessage", "message", data.Message)
}

func (o *onMessageListener) OnRecvC2CReadReceipt(data *pb.EventOnRecvC2CReadReceiptData) {
	log.ZInfo(o.ctx, "###LISTENER### OnRecvC2CReadReceipt", "msgReceiptList", data.MsgReceiptList)
}

func (o *onMessageListener) OnRecvGroupReadReceipt(groupMsgReceiptList string) {
	log.ZInfo(o.ctx, "###LISTENER### OnRecvGroupReadReceipt", "groupMsgReceiptList", groupMsgReceiptList)
}

func (o *onMessageListener) OnRecvMessageRevoked(msgID string) {
	log.ZInfo(o.ctx, "###LISTENER### OnRecvMessageRevoked", "msgID", msgID)
}

func (o *onMessageListener) OnNewRecvMessageRevoked(data *pb.EventOnNewRecvMessageRevokedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnNewRecvMessageRevoked", "messageRevoked", data.Revoked)
}

func (o *onMessageListener) OnRecvMessageExtensionsChanged(msgID string, reactionExtensionList string) {
	log.ZInfo(o.ctx, "###LISTENER### OnRecvMessageExtensionsChanged", "msgID", msgID, "reactionExtensionList", reactionExtensionList)
}

func (o *onMessageListener) OnRecvMessageExtensionsDeleted(msgID string, reactionExtensionKeyList string) {
	log.ZInfo(o.ctx, "###LISTENER### OnRecvMessageExtensionsDeleted", "msgID", msgID, "reactionExtensionKeyList", reactionExtensionKeyList)
}

func (o *onMessageListener) OnRecvMessageExtensionsAdded(msgID string, reactionExtensionList string) {
	log.ZInfo(o.ctx, "###LISTENER### OnRecvMessageExtensionsAdded", "msgID", msgID, "reactionExtensionList", reactionExtensionList)
}

type onFriendshipListener struct {
	ctx context.Context
}

func (o *onFriendshipListener) OnFriendApplicationAdded(data *pb.EventOnFriendApplicationAddedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnFriendApplicationAdded", "friendApplication", data.Application)
}

func (o *onFriendshipListener) OnFriendApplicationDeleted(data *pb.EventOnFriendApplicationDeletedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnFriendApplicationDeleted", "friendApplication", data.Application)
}

func (o *onFriendshipListener) OnFriendApplicationAccepted(data *pb.EventOnFriendApplicationAcceptedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnFriendApplicationAccepted", "friendApplication", data.Application)
}

func (o *onFriendshipListener) OnFriendApplicationRejected(data *pb.EventOnFriendApplicationRejectedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnFriendApplicationRejected", "friendApplication", data.Application)
}

func (o *onFriendshipListener) OnFriendAdded(data *pb.EventOnFriendAddedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnFriendAdded", "friendInfo", data.Friend)
}

func (o *onFriendshipListener) OnFriendDeleted(data *pb.EventOnFriendDeletedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnFriendDeleted", "friendInfo", data.Friend)
}

func (o *onFriendshipListener) OnFriendInfoChanged(data *pb.EventOnFriendInfoChangedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnFriendInfoChanged", "friendInfo", data.Friend)
}

func (o *onFriendshipListener) OnBlackAdded(data *pb.EventOnBlackAddedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnBlackAdded", "blackInfo", data.Black)
}

func (o *onFriendshipListener) OnBlackDeleted(data *pb.EventOnBlackDeletedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnBlackDeleted", "blackInfo", data.Black)
}

type onUserListener struct {
	ctx context.Context
}

func (o *onUserListener) OnSelfInfoUpdated(data *pb.EventOnSelfInfoUpdatedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnSelfInfoUpdated", "userInfo", data.User)
}
func (o *onUserListener) OnUserCommandAdd(data *pb.EventOnUserCommandAddData) {
	log.ZInfo(o.ctx, "###LISTENER### OnUserCommandAdd", "blackInfo", data.Command)
}
func (o *onUserListener) OnUserCommandDelete(data *pb.EventOnUserCommandDeleteData) {
	log.ZInfo(o.ctx, "###LISTENER### OnUserCommandDelete", "blackInfo", data.Command)
}
func (o *onUserListener) OnUserCommandUpdate(data *pb.EventOnUserCommandUpdateData) {
	log.ZInfo(o.ctx, "###LISTENER### OnUserCommandUpdate", "blackInfo", data.Command)
}

func (o *onUserListener) OnUserStatusChanged(data *pb.EventOnUserOnlineStatusChangedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnUserStatusChanged", "OnUserStatusChanged", data)
}

type onConnListener struct {
	ctx context.Context
}

func (o *onConnListener) OnConnecting(data *pb.EventOnConnectingData) {
	log.ZInfo(o.ctx, "###LISTENER### OnConnecting", "data", data)
}

func (o *onConnListener) OnConnectSuccess(data *pb.EventOnConnectSuccessData) {
	log.ZInfo(o.ctx, "###LISTENER### OnConnectSuccess", "data", data)
}

func (o *onConnListener) OnConnectFailed(data *pb.EventOnConnectFailedData) {
	log.ZInfo(o.ctx, "###LISTENER### OnConnectFailed", "data", data)
}

func (o *onConnListener) OnKickedOffline(data *pb.EventOnKickedOfflineData) {
	log.ZInfo(o.ctx, "###LISTENER### OnKickedOffline", "data", data)
}

func (o *onConnListener) OnUserTokenExpired(data *pb.EventOnUserTokenExpiredData) {
	log.ZInfo(o.ctx, "###LISTENER### OnUserTokenExpired", "data", data)
}

func (o *onConnListener) OnUserTokenInvalid(data *pb.EventOnUserTokenInvalidData) {
	log.ZInfo(o.ctx, "###LISTENER### OnUserTokenInvalid", "data", data)
}

type onCustomBusinessListener struct {
	ctx context.Context
}

func (o *onCustomBusinessListener) OnRecvCustomBusinessMessage(data *pb.EventOnRecvCustomBusinessMessageData) {
	log.ZInfo(o.ctx, "###LISTENER### OnRecvCustomBusinessMessage", "data", data)
}
