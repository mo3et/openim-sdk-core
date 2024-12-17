package test

import (
	"context"
	"fmt"
	pb "github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
	"github.com/openimsdk/tools/log"
)

type onConversationListener struct {
	ch chan error
}

func (o *onConversationListener) OnSyncServerStart(ctx context.Context, data *pb.EventOnSyncServerStartData) {
	log.ZInfo(ctx, "###LISTENER### OnSyncServerStart")
}

func (o *onConversationListener) OnSyncServerFinish(ctx context.Context, data *pb.EventOnSyncServerFinishData) {
	log.ZInfo(ctx, "###LISTENER### OnSyncServerFinish")
	o.ch <- nil
}

func (o *onConversationListener) OnSyncServerFailed(ctx context.Context, data *pb.EventOnSyncServerFailedData) {
	log.ZInfo(ctx, "###LISTENER### OnSyncServerFailed")
	o.ch <- fmt.Errorf("OnSyncServerFailed")
}

func (o *onConversationListener) OnSyncServerProgress(ctx context.Context, data *pb.EventOnSyncServerProgressData) {
	log.ZInfo(ctx, "###LISTENER### OnSyncServerProgress", "progress", data.Progress)
}

func (o *onConversationListener) OnNewConversation(ctx context.Context, data *pb.EventOnNewConversationData) {
	log.ZInfo(ctx, "###LISTENER### OnNewConversation", "conversationList", data.ConversationList)
}

func (o *onConversationListener) OnConversationChanged(ctx context.Context, data *pb.EventOnConversationChangedData) {
	log.ZInfo(ctx, "###LISTENER### OnConversationChanged", "####### conversationList", data.GetConversationList())
}

func (o *onConversationListener) OnTotalUnreadMessageCountChanged(ctx context.Context, data *pb.EventOnTotalUnreadMessageCountChangedData) {
	log.ZInfo(ctx, "###LISTENER### OnTotalUnreadMessageCountChanged", "totalUnreadCount", data.TotalUnreadCount)
}

func (o *onConversationListener) OnConversationUserInputStatusChanged(ctx context.Context, data *pb.EventOnConversationUserInputStatusChangedData) {
	log.ZInfo(ctx, "###LISTENER### OnConversationUserInputStatusChanged", "change", data)
}

type onGroupListener struct{}

func (o *onGroupListener) OnGroupDismissed(ctx context.Context, data *pb.EventOnGroupDismissedData) {
	log.ZInfo(ctx, "###LISTENER### OnGroupDismissed", "groupInfo", data.Group)
}

func (o *onGroupListener) OnJoinedGroupAdded(ctx context.Context, data *pb.EventOnJoinedGroupAddedData) {
	log.ZInfo(ctx, "###LISTENER### OnJoinedGroupAdded", "groupInfo", data.Group)
}

func (o *onGroupListener) OnJoinedGroupDeleted(ctx context.Context, data *pb.EventOnJoinedGroupDeletedData) {
	log.ZInfo(ctx, "###LISTENER### OnJoinedGroupDeleted", "groupInfo", data.Group)
}

func (o *onGroupListener) OnGroupMemberAdded(ctx context.Context, data *pb.EventOnGroupMemberAddedData) {
	log.ZInfo(ctx, "###LISTENER### OnGroupMemberAdded", "groupMemberInfo", data.Member)
}

func (o *onGroupListener) OnGroupMemberDeleted(ctx context.Context, data *pb.EventOnGroupMemberDeletedData) {
	log.ZInfo(ctx, "###LISTENER### OnGroupMemberDeleted", "groupMemberInfo", data.Member)
}

func (o *onGroupListener) OnGroupApplicationAdded(ctx context.Context, data *pb.EventOnGroupApplicationAddedData) {
	log.ZInfo(ctx, "###LISTENER### OnGroupApplicationAdded", "groupApplication", data.Application)
}

func (o *onGroupListener) OnGroupApplicationDeleted(ctx context.Context, data *pb.EventOnGroupApplicationDeletedData) {
	log.ZInfo(ctx, "###LISTENER### OnGroupApplicationDeleted", "groupApplication", data.Application)
}

func (o *onGroupListener) OnGroupInfoChanged(ctx context.Context, data *pb.EventOnGroupInfoChangedData) {
	log.ZInfo(ctx, "###LISTENER### OnGroupInfoChanged", "groupInfo", data.Group)
}

func (o *onGroupListener) OnGroupMemberInfoChanged(ctx context.Context, data *pb.EventOnGroupMemberInfoChangedData) {
	log.ZInfo(ctx, "###LISTENER### OnGroupMemberInfoChanged", "groupMemberInfo", data.Member)
}

func (o *onGroupListener) OnGroupApplicationAccepted(ctx context.Context, data *pb.EventOnGroupApplicationAcceptedData) {
	log.ZInfo(ctx, "###LISTENER### OnGroupApplicationAccepted", "groupApplication", data.Application)
}

func (o *onGroupListener) OnGroupApplicationRejected(ctx context.Context, data *pb.EventOnGroupApplicationRejectedData) {
	log.ZInfo(ctx, "###LISTENER### OnGroupApplicationRejected", "groupApplication", data.Application)
}

type onMessageListener struct{}

func (o *onMessageListener) OnRecvOnlineOnlyMessage(ctx context.Context, data *pb.EventOnRecvOnlineOnlyMessageData) {
	log.ZInfo(ctx, "###LISTENER### OnRecvOnlineOnlyMessage", "message", data.Message)
}

func (o *onMessageListener) OnRecvOfflineNewMessage(ctx context.Context, data *pb.EventOnRecvOfflineNewMessageData) {
	log.ZInfo(ctx, "###LISTENER### OnRecvOfflineNewMessage", "message", data.Message)
}

func (o *onMessageListener) OnMessageDeleted(ctx context.Context, data *pb.EventOnMessageDeletedData) {
	log.ZInfo(ctx, "###LISTENER### OnMessageDeleted", "message", data.Message)
}

func (o *onMessageListener) OnMessageEdited(ctx context.Context, data *pb.EventOnMessageEditedData) {
	log.ZInfo(ctx, "###LISTENER### EventOnMessageEditedData", "######## message", data.Message)
}

func (o *onMessageListener) OnRecvOfflineNewMessages(messageList string) {
	log.ZInfo(ctx, "###LISTENER### OnRecvOfflineNewMessages", "messageList", messageList)
}

func (o *onMessageListener) OnRecvNewMessage(ctx context.Context, data *pb.EventOnRecvNewMessageData) {
	log.ZInfo(ctx, "###LISTENER### OnRecvNewMessage", "message", data.Message)
}

func (o *onMessageListener) OnRecvC2CReadReceipt(ctx context.Context, data *pb.EventOnRecvC2CReadReceiptData) {
	log.ZInfo(ctx, "###LISTENER### OnRecvC2CReadReceipt", "msgReceiptList", data.MsgReceiptList)
}

func (o *onMessageListener) OnRecvGroupReadReceipt(groupMsgReceiptList string) {
	log.ZInfo(ctx, "###LISTENER### OnRecvGroupReadReceipt", "groupMsgReceiptList", groupMsgReceiptList)
}

func (o *onMessageListener) OnRecvMessageRevoked(msgID string) {
	log.ZInfo(ctx, "###LISTENER### OnRecvMessageRevoked", "msgID", msgID)
}

func (o *onMessageListener) OnNewRecvMessageRevoked(ctx context.Context, data *pb.EventOnNewRecvMessageRevokedData) {
	log.ZInfo(ctx, "###LISTENER### OnNewRecvMessageRevoked", "messageRevoked", data.Revoked)
}

func (o *onMessageListener) OnRecvMessageExtensionsChanged(msgID string, reactionExtensionList string) {
	log.ZInfo(ctx, "###LISTENER### OnRecvMessageExtensionsChanged", "msgID", msgID, "reactionExtensionList", reactionExtensionList)
}

func (o *onMessageListener) OnRecvMessageExtensionsDeleted(msgID string, reactionExtensionKeyList string) {
	log.ZInfo(ctx, "###LISTENER### OnRecvMessageExtensionsDeleted", "msgID", msgID, "reactionExtensionKeyList", reactionExtensionKeyList)
}

func (o *onMessageListener) OnRecvMessageExtensionsAdded(msgID string, reactionExtensionList string) {
	log.ZInfo(ctx, "###LISTENER### OnRecvMessageExtensionsAdded", "msgID", msgID, "reactionExtensionList", reactionExtensionList)
}

type onFriendshipListener struct{}

func (o *onFriendshipListener) OnFriendApplicationAdded(ctx context.Context, data *pb.EventOnFriendApplicationAddedData) {
	log.ZInfo(ctx, "###LISTENER### OnFriendApplicationAdded", "friendApplication", data.Application)
}

func (o *onFriendshipListener) OnFriendApplicationDeleted(ctx context.Context, data *pb.EventOnFriendApplicationDeletedData) {
	log.ZInfo(ctx, "###LISTENER### OnFriendApplicationDeleted", "friendApplication", data.Application)
}

func (o *onFriendshipListener) OnFriendApplicationAccepted(ctx context.Context, data *pb.EventOnFriendApplicationAcceptedData) {
	log.ZInfo(ctx, "###LISTENER### OnFriendApplicationAccepted", "friendApplication", data.Application)
}

func (o *onFriendshipListener) OnFriendApplicationRejected(ctx context.Context, data *pb.EventOnFriendApplicationRejectedData) {
	log.ZInfo(ctx, "###LISTENER### OnFriendApplicationRejected", "friendApplication", data.Application)
}

func (o *onFriendshipListener) OnFriendAdded(ctx context.Context, data *pb.EventOnFriendAddedData) {
	log.ZInfo(ctx, "###LISTENER### OnFriendAdded", "friendInfo", data.Friend)
}

func (o *onFriendshipListener) OnFriendDeleted(ctx context.Context, data *pb.EventOnFriendDeletedData) {
	log.ZInfo(ctx, "###LISTENER### OnFriendDeleted", "friendInfo", data.Friend)
}

func (o *onFriendshipListener) OnFriendInfoChanged(ctx context.Context, data *pb.EventOnFriendInfoChangedData) {
	log.ZInfo(ctx, "###LISTENER### OnFriendInfoChanged", "friendInfo", data.Friend)
}

func (o *onFriendshipListener) OnBlackAdded(ctx context.Context, data *pb.EventOnBlackAddedData) {
	log.ZInfo(ctx, "###LISTENER### OnBlackAdded", "blackInfo", data.Black)
}

func (o *onFriendshipListener) OnBlackDeleted(ctx context.Context, data *pb.EventOnBlackDeletedData) {
	log.ZInfo(ctx, "###LISTENER### OnBlackDeleted", "blackInfo", data.Black)
}

type onUserListener struct{}

func (o *onUserListener) OnSelfInfoUpdated(ctx context.Context, data *pb.EventOnSelfInfoUpdatedData) {
	log.ZInfo(ctx, "###LISTENER### OnSelfInfoUpdated", "userInfo", data.User)
}
func (o *onUserListener) OnUserCommandAdd(ctx context.Context, data *pb.EventOnUserCommandAddData) {
	log.ZInfo(ctx, "###LISTENER### OnUserCommandAdd", "blackInfo", data.Command)
}
func (o *onUserListener) OnUserCommandDelete(ctx context.Context, data *pb.EventOnUserCommandDeleteData) {
	log.ZInfo(ctx, "###LISTENER### OnUserCommandDelete", "blackInfo", data.Command)
}
func (o *onUserListener) OnUserCommandUpdate(ctx context.Context, data *pb.EventOnUserCommandUpdateData) {
	log.ZInfo(ctx, "###LISTENER### OnUserCommandUpdate", "blackInfo", data.Command)
}

func (o *onUserListener) OnUserOnlineStatusChanged(ctx context.Context, data *pb.EventOnUserOnlineStatusChangedData) {
	log.ZInfo(ctx, "###LISTENER### OnUserOnlineStatusChanged", "OnUserStatusChanged", data)
}

type onConnListener struct{}

func (o *onConnListener) OnConnecting(ctx context.Context, data *pb.EventOnConnectingData) {
	log.ZInfo(ctx, "###LISTENER### OnConnecting", "data", data)
}

func (o *onConnListener) OnConnectSuccess(ctx context.Context, data *pb.EventOnConnectSuccessData) {
	log.ZInfo(ctx, "###LISTENER### OnConnectSuccess", "data", data)
}

func (o *onConnListener) OnConnectFailed(ctx context.Context, data *pb.EventOnConnectFailedData) {
	log.ZInfo(ctx, "###LISTENER### OnConnectFailed", "data", data)
}

func (o *onConnListener) OnKickedOffline(ctx context.Context, data *pb.EventOnKickedOfflineData) {
	log.ZInfo(ctx, "###LISTENER### OnKickedOffline", "data", data)
}

func (o *onConnListener) OnUserTokenExpired(ctx context.Context, data *pb.EventOnUserTokenExpiredData) {
	log.ZInfo(ctx, "###LISTENER### OnUserTokenExpired", "data", data)
}

func (o *onConnListener) OnUserTokenInvalid(ctx context.Context, data *pb.EventOnUserTokenInvalidData) {
	log.ZInfo(ctx, "###LISTENER### OnUserTokenInvalid", "data", data)
}

type onCustomBusinessListener struct{}

func (o *onCustomBusinessListener) OnRecvCustomBusinessMessage(ctx context.Context, data *pb.EventOnRecvCustomBusinessMessageData) {
	log.ZInfo(ctx, "###LISTENER### OnRecvCustomBusinessMessage", "data", data)
}
