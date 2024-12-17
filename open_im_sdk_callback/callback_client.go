// Copyright © 2023 OpenIM SDK. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package open_im_sdk_callback

import (
	"context"
	pb "github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
)

type OnConnListener interface {
	OnConnecting(ctx context.Context, data *pb.EventOnConnectingData)
	OnConnectSuccess(ctx context.Context, data *pb.EventOnConnectSuccessData)
	OnConnectFailed(ctx context.Context, data *pb.EventOnConnectFailedData)
	OnKickedOffline(ctx context.Context, data *pb.EventOnKickedOfflineData)
	OnUserTokenExpired(ctx context.Context, data *pb.EventOnUserTokenExpiredData)
	OnUserTokenInvalid(ctx context.Context, data *pb.EventOnUserTokenInvalidData)
}

type OnGroupListener interface {
	OnJoinedGroupAdded(ctx context.Context, data *pb.EventOnJoinedGroupAddedData)
	OnJoinedGroupDeleted(ctx context.Context, data *pb.EventOnJoinedGroupDeletedData)
	OnGroupMemberAdded(ctx context.Context, data *pb.EventOnGroupMemberAddedData)
	OnGroupMemberDeleted(ctx context.Context, data *pb.EventOnGroupMemberDeletedData)
	OnGroupApplicationAdded(ctx context.Context, data *pb.EventOnGroupApplicationAddedData)
	OnGroupApplicationDeleted(ctx context.Context, data *pb.EventOnGroupApplicationDeletedData)
	OnGroupInfoChanged(ctx context.Context, data *pb.EventOnGroupInfoChangedData)
	OnGroupDismissed(ctx context.Context, data *pb.EventOnGroupDismissedData)
	OnGroupMemberInfoChanged(ctx context.Context, data *pb.EventOnGroupMemberInfoChangedData)
	OnGroupApplicationAccepted(ctx context.Context, data *pb.EventOnGroupApplicationAcceptedData)
	OnGroupApplicationRejected(ctx context.Context, data *pb.EventOnGroupApplicationRejectedData)
}

type OnFriendshipListener interface {
	OnFriendApplicationAdded(ctx context.Context, data *pb.EventOnFriendApplicationAddedData)
	OnFriendApplicationDeleted(ctx context.Context, data *pb.EventOnFriendApplicationDeletedData)
	OnFriendApplicationAccepted(ctx context.Context, data *pb.EventOnFriendApplicationAcceptedData)
	OnFriendApplicationRejected(ctx context.Context, data *pb.EventOnFriendApplicationRejectedData)
	OnFriendAdded(ctx context.Context, data *pb.EventOnFriendAddedData)
	OnFriendDeleted(ctx context.Context, data *pb.EventOnFriendDeletedData)
	OnFriendInfoChanged(ctx context.Context, data *pb.EventOnFriendInfoChangedData)
	OnBlackAdded(ctx context.Context, data *pb.EventOnBlackAddedData)
	OnBlackDeleted(ctx context.Context, data *pb.EventOnBlackDeletedData)
}

type OnConversationListener interface {
	OnSyncServerStart(ctx context.Context, data *pb.EventOnSyncServerStartData)
	OnSyncServerFinish(ctx context.Context, data *pb.EventOnSyncServerFinishData)
	OnSyncServerProgress(ctx context.Context, data *pb.EventOnSyncServerProgressData)
	OnSyncServerFailed(ctx context.Context, data *pb.EventOnSyncServerFailedData)
	OnNewConversation(ctx context.Context, data *pb.EventOnNewConversationData)
	OnConversationChanged(ctx context.Context, data *pb.EventOnConversationChangedData)
	OnTotalUnreadMessageCountChanged(ctx context.Context, data *pb.EventOnTotalUnreadMessageCountChangedData)
	OnConversationUserInputStatusChanged(ctx context.Context, data *pb.EventOnConversationUserInputStatusChangedData)
}

type OnMessageListener interface {
	OnRecvNewMessage(ctx context.Context, data *pb.EventOnRecvNewMessageData)
	OnRecvC2CReadReceipt(ctx context.Context, data *pb.EventOnRecvC2CReadReceiptData)
	OnNewRecvMessageRevoked(ctx context.Context, data *pb.EventOnNewRecvMessageRevokedData)
	OnRecvOfflineNewMessage(ctx context.Context, data *pb.EventOnRecvOfflineNewMessageData)
	OnMessageDeleted(ctx context.Context, data *pb.EventOnMessageDeletedData)
	OnRecvOnlineOnlyMessage(ctx context.Context, data *pb.EventOnRecvOnlineOnlyMessageData)
	OnMessageEdited(ctx context.Context, data *pb.EventOnMessageEditedData)
}

type OnUserListener interface {
	OnSelfInfoUpdated(ctx context.Context, data *pb.EventOnSelfInfoUpdatedData)
	OnUserOnlineStatusChanged(ctx context.Context, data *pb.EventOnUserOnlineStatusChangedData)
	OnUserCommandAdd(ctx context.Context, data *pb.EventOnUserCommandAddData)
	OnUserCommandDelete(ctx context.Context, data *pb.EventOnUserCommandDeleteData)
	OnUserCommandUpdate(ctx context.Context, data *pb.EventOnUserCommandUpdateData)
}

type OnCustomBusinessListener interface {
	OnRecvCustomBusinessMessage(ctx context.Context, data *pb.EventOnRecvCustomBusinessMessageData)
}

type SendMsgCallBack interface {
	OnSendMsgProgress(ctx context.Context, data *pb.EventOnSendMsgProgressData)
}
type UploadFileCallback interface {
	OnUploadFileProgress(ctx context.Context, data *pb.EventOnUploadFileProgressData)
}

type UploadLogsCallback interface {
	OnUploadLogsProgress(ctx context.Context, data *pb.EventOnUploadLogsProgressData)
}
