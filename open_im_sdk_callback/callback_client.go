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
	pb "github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
)

type OnConnListener interface {
	OnConnecting(*pb.EventOnConnectingData)
	OnConnectSuccess(*pb.EventOnConnectSuccessData)
	OnConnectFailed(*pb.EventOnConnectFailedData)
	OnKickedOffline(*pb.EventOnKickedOfflineData)
	OnUserTokenExpired(data *pb.EventOnUserTokenExpiredData)
	OnUserTokenInvalid(data *pb.EventOnUserTokenInvalidData)
}

type OnGroupListener interface {
	OnJoinedGroupAdded(data *pb.EventOnJoinedGroupAddedData)
	OnJoinedGroupDeleted(data *pb.EventOnJoinedGroupDeletedData)
	OnGroupMemberAdded(data *pb.EventOnGroupMemberAddedData)
	OnGroupMemberDeleted(data *pb.EventOnGroupMemberDeletedData)
	OnGroupApplicationAdded(data *pb.EventOnGroupApplicationAddedData)
	OnGroupApplicationDeleted(data *pb.EventOnGroupApplicationDeletedData)
	OnGroupInfoChanged(data *pb.EventOnGroupInfoChangedData)
	OnGroupDismissed(data *pb.EventOnGroupDismissedData)
	OnGroupMemberInfoChanged(data *pb.EventOnGroupMemberInfoChangedData)
	OnGroupApplicationAccepted(data *pb.EventOnGroupApplicationAcceptedData)
	OnGroupApplicationRejected(data *pb.EventOnGroupApplicationRejectedData)
}

type OnFriendshipListener interface {
	OnFriendApplicationAdded(data *pb.EventOnFriendApplicationAddedData)
	OnFriendApplicationDeleted(data *pb.EventOnFriendApplicationDeletedData)
	OnFriendApplicationAccepted(data *pb.EventOnFriendApplicationAcceptedData)
	OnFriendApplicationRejected(data *pb.EventOnFriendApplicationRejectedData)
	OnFriendAdded(data *pb.EventOnFriendAddedData)
	OnFriendDeleted(data *pb.EventOnFriendDeletedData)
	OnFriendInfoChanged(data *pb.EventOnFriendInfoChangedData)
	OnBlackAdded(data *pb.EventOnBlackAddedData)
	OnBlackDeleted(data *pb.EventOnBlackDeletedData)
}

type OnConversationListener interface {
	OnSyncServerStart(data *pb.EventOnSyncServerStartData)
	OnSyncServerFinish(data *pb.EventOnSyncServerFinishData)
	OnSyncServerProgress(data *pb.EventOnSyncServerProgressData)
	OnSyncServerFailed(data *pb.EventOnSyncServerFailedData)
	OnNewConversation(data *pb.EventOnNewConversationData)
	OnConversationChanged(data *pb.EventOnConversationChangedData)
	OnTotalUnreadMessageCountChanged(data *pb.EventOnTotalUnreadMessageCountChangedData)
	OnConversationUserInputStatusChanged(data *pb.EventOnConversationUserInputStatusChangedData)
}

type OnMessageListener interface {
	OnRecvNewMessage(data *pb.EventOnRecvNewMessageData)
	OnRecvC2CReadReceipt(data *pb.EventOnRecvC2CReadReceiptData)
	OnNewRecvMessageRevoked(data *pb.EventOnNewRecvMessageRevokedData)
	OnRecvOfflineNewMessage(data *pb.EventOnRecvOfflineNewMessageData)
	OnMessageDeleted(data *pb.EventOnMessageDeletedData)
	OnRecvOnlineOnlyMessage(data *pb.EventOnRecvOnlineOnlyMessageData)
	OnMessageEdited(data *pb.EventOnMessageEditedData)
}

type OnUserListener interface {
	OnSelfInfoUpdated(data *pb.EventOnSelfInfoUpdatedData)
	OnUserStatusChanged(data *pb.EventOnUserStatusChangedData)
	OnUserCommandAdd(data *pb.EventOnUserCommandAddData)
	OnUserCommandDelete(data *pb.EventOnUserCommandDeleteData)
	OnUserCommandUpdate(data *pb.EventOnUserCommandUpdateData)
}

type OnCustomBusinessListener interface {
	OnRecvCustomBusinessMessage(data *pb.EventOnRecvCustomBusinessMessageData)
}

type SendMsgCallBack interface {
	OnSendMsgProgress(*pb.EventOnSendMsgProgressData)
}
type UploadFileCallback interface {
	OnUploadFileProgress(*pb.EventOnUploadFileProgressData)
}

type UploadLogsCallback interface {
	OnUploadLogsProgress(*pb.EventOnUploadLogsProgressData)
}
