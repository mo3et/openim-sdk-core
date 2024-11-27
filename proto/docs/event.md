# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [event.proto](#event-proto)
    - [EventOnBlackAddedData](#openim-event-EventOnBlackAddedData)
    - [EventOnBlackDeletedData](#openim-event-EventOnBlackDeletedData)
    - [EventOnConnectFailedData](#openim-event-EventOnConnectFailedData)
    - [EventOnConnectSuccessData](#openim-event-EventOnConnectSuccessData)
    - [EventOnConnectingData](#openim-event-EventOnConnectingData)
    - [EventOnConversationChangedData](#openim-event-EventOnConversationChangedData)
    - [EventOnConversationUserInputStatusChangedData](#openim-event-EventOnConversationUserInputStatusChangedData)
    - [EventOnFriendAddedData](#openim-event-EventOnFriendAddedData)
    - [EventOnFriendApplicationAcceptedData](#openim-event-EventOnFriendApplicationAcceptedData)
    - [EventOnFriendApplicationAddedData](#openim-event-EventOnFriendApplicationAddedData)
    - [EventOnFriendApplicationDeletedData](#openim-event-EventOnFriendApplicationDeletedData)
    - [EventOnFriendApplicationRejectedData](#openim-event-EventOnFriendApplicationRejectedData)
    - [EventOnFriendDeletedData](#openim-event-EventOnFriendDeletedData)
    - [EventOnFriendInfoChangedData](#openim-event-EventOnFriendInfoChangedData)
    - [EventOnGroupApplicationAcceptedData](#openim-event-EventOnGroupApplicationAcceptedData)
    - [EventOnGroupApplicationAddedData](#openim-event-EventOnGroupApplicationAddedData)
    - [EventOnGroupApplicationDeletedData](#openim-event-EventOnGroupApplicationDeletedData)
    - [EventOnGroupApplicationRejectedData](#openim-event-EventOnGroupApplicationRejectedData)
    - [EventOnGroupDismissedData](#openim-event-EventOnGroupDismissedData)
    - [EventOnGroupInfoChangedData](#openim-event-EventOnGroupInfoChangedData)
    - [EventOnGroupMemberAddedData](#openim-event-EventOnGroupMemberAddedData)
    - [EventOnGroupMemberDeletedData](#openim-event-EventOnGroupMemberDeletedData)
    - [EventOnGroupMemberInfoChangedData](#openim-event-EventOnGroupMemberInfoChangedData)
    - [EventOnJoinedGroupAddedData](#openim-event-EventOnJoinedGroupAddedData)
    - [EventOnJoinedGroupDeletedData](#openim-event-EventOnJoinedGroupDeletedData)
    - [EventOnKickedOfflineData](#openim-event-EventOnKickedOfflineData)
    - [EventOnMessageDeletedData](#openim-event-EventOnMessageDeletedData)
    - [EventOnMessageEditedData](#openim-event-EventOnMessageEditedData)
    - [EventOnNewConversationData](#openim-event-EventOnNewConversationData)
    - [EventOnNewRecvMessageRevokedData](#openim-event-EventOnNewRecvMessageRevokedData)
    - [EventOnRecvC2CReadReceiptData](#openim-event-EventOnRecvC2CReadReceiptData)
    - [EventOnRecvCustomBusinessMessageData](#openim-event-EventOnRecvCustomBusinessMessageData)
    - [EventOnRecvNewMessageData](#openim-event-EventOnRecvNewMessageData)
    - [EventOnRecvOfflineNewMessageData](#openim-event-EventOnRecvOfflineNewMessageData)
    - [EventOnRecvOnlineOnlyMessageData](#openim-event-EventOnRecvOnlineOnlyMessageData)
    - [EventOnSelfInfoUpdatedData](#openim-event-EventOnSelfInfoUpdatedData)
    - [EventOnSendMsgProgressData](#openim-event-EventOnSendMsgProgressData)
    - [EventOnSyncServerFailedData](#openim-event-EventOnSyncServerFailedData)
    - [EventOnSyncServerFinishData](#openim-event-EventOnSyncServerFinishData)
    - [EventOnSyncServerProgressData](#openim-event-EventOnSyncServerProgressData)
    - [EventOnSyncServerStartData](#openim-event-EventOnSyncServerStartData)
    - [EventOnTotalUnreadMessageCountChangedData](#openim-event-EventOnTotalUnreadMessageCountChangedData)
    - [EventOnUploadFileProgressData](#openim-event-EventOnUploadFileProgressData)
    - [EventOnUploadLogsProgressData](#openim-event-EventOnUploadLogsProgressData)
    - [EventOnUserCommandAddData](#openim-event-EventOnUserCommandAddData)
    - [EventOnUserCommandDeleteData](#openim-event-EventOnUserCommandDeleteData)
    - [EventOnUserCommandUpdateData](#openim-event-EventOnUserCommandUpdateData)
    - [EventOnUserStatusChangedData](#openim-event-EventOnUserStatusChangedData)
    - [EventOnUserTokenExpiredData](#openim-event-EventOnUserTokenExpiredData)
    - [EventOnUserTokenInvalidData](#openim-event-EventOnUserTokenInvalidData)
    - [MessageReceipt](#openim-event-MessageReceipt)
  
    - [FuncRequestEventName](#openim-event-FuncRequestEventName)
  
- [Scalar Value Types](#scalar-value-types)



<a name="event-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## event.proto



<a name="openim-event-EventOnBlackAddedData"></a>

### EventOnBlackAddedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| black | [openim.sdk.shared.IMBlack](#openim-sdk-shared-IMBlack) |  |  |






<a name="openim-event-EventOnBlackDeletedData"></a>

### EventOnBlackDeletedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| black | [openim.sdk.shared.IMBlack](#openim-sdk-shared-IMBlack) |  |  |






<a name="openim-event-EventOnConnectFailedData"></a>

### EventOnConnectFailedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| errCode | [int32](#int32) |  |  |
| errMsg | [string](#string) |  |  |






<a name="openim-event-EventOnConnectSuccessData"></a>

### EventOnConnectSuccessData







<a name="openim-event-EventOnConnectingData"></a>

### EventOnConnectingData







<a name="openim-event-EventOnConversationChangedData"></a>

### EventOnConversationChangedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationList | [openim.sdk.shared.IMConversation](#openim-sdk-shared-IMConversation) | repeated |  |






<a name="openim-event-EventOnConversationUserInputStatusChangedData"></a>

### EventOnConversationUserInputStatusChangedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationID | [string](#string) |  |  |
| userID | [string](#string) |  |  |
| platformIDs | [int32](#int32) | repeated |  |






<a name="openim-event-EventOnFriendAddedData"></a>

### EventOnFriendAddedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| friend | [openim.sdk.shared.IMFriend](#openim-sdk-shared-IMFriend) |  |  |






<a name="openim-event-EventOnFriendApplicationAcceptedData"></a>

### EventOnFriendApplicationAcceptedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| request | [openim.sdk.shared.IMFriendRequest](#openim-sdk-shared-IMFriendRequest) |  |  |






<a name="openim-event-EventOnFriendApplicationAddedData"></a>

### EventOnFriendApplicationAddedData
FriendCallback Data Types


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| request | [openim.sdk.shared.IMFriendRequest](#openim-sdk-shared-IMFriendRequest) |  |  |






<a name="openim-event-EventOnFriendApplicationDeletedData"></a>

### EventOnFriendApplicationDeletedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| request | [openim.sdk.shared.IMFriendRequest](#openim-sdk-shared-IMFriendRequest) |  |  |






<a name="openim-event-EventOnFriendApplicationRejectedData"></a>

### EventOnFriendApplicationRejectedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| request | [openim.sdk.shared.IMFriendRequest](#openim-sdk-shared-IMFriendRequest) |  |  |






<a name="openim-event-EventOnFriendDeletedData"></a>

### EventOnFriendDeletedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| friend | [openim.sdk.shared.IMFriend](#openim-sdk-shared-IMFriend) |  |  |






<a name="openim-event-EventOnFriendInfoChangedData"></a>

### EventOnFriendInfoChangedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| friend | [openim.sdk.shared.IMFriend](#openim-sdk-shared-IMFriend) |  |  |






<a name="openim-event-EventOnGroupApplicationAcceptedData"></a>

### EventOnGroupApplicationAcceptedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| request | [openim.sdk.shared.IMGroupRequest](#openim-sdk-shared-IMGroupRequest) |  |  |






<a name="openim-event-EventOnGroupApplicationAddedData"></a>

### EventOnGroupApplicationAddedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| request | [openim.sdk.shared.IMGroupRequest](#openim-sdk-shared-IMGroupRequest) |  |  |






<a name="openim-event-EventOnGroupApplicationDeletedData"></a>

### EventOnGroupApplicationDeletedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| request | [openim.sdk.shared.IMGroupRequest](#openim-sdk-shared-IMGroupRequest) |  |  |






<a name="openim-event-EventOnGroupApplicationRejectedData"></a>

### EventOnGroupApplicationRejectedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| request | [openim.sdk.shared.IMGroupRequest](#openim-sdk-shared-IMGroupRequest) |  |  |






<a name="openim-event-EventOnGroupDismissedData"></a>

### EventOnGroupDismissedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group | [openim.sdk.shared.IMGroup](#openim-sdk-shared-IMGroup) |  |  |






<a name="openim-event-EventOnGroupInfoChangedData"></a>

### EventOnGroupInfoChangedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group | [openim.sdk.shared.IMGroup](#openim-sdk-shared-IMGroup) |  |  |






<a name="openim-event-EventOnGroupMemberAddedData"></a>

### EventOnGroupMemberAddedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| member | [openim.sdk.shared.IMGroupMember](#openim-sdk-shared-IMGroupMember) |  |  |






<a name="openim-event-EventOnGroupMemberDeletedData"></a>

### EventOnGroupMemberDeletedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| member | [openim.sdk.shared.IMGroupMember](#openim-sdk-shared-IMGroupMember) |  |  |






<a name="openim-event-EventOnGroupMemberInfoChangedData"></a>

### EventOnGroupMemberInfoChangedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| member | [openim.sdk.shared.IMGroupMember](#openim-sdk-shared-IMGroupMember) |  |  |






<a name="openim-event-EventOnJoinedGroupAddedData"></a>

### EventOnJoinedGroupAddedData
GroupCallback Data Types


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group | [openim.sdk.shared.IMGroup](#openim-sdk-shared-IMGroup) |  |  |






<a name="openim-event-EventOnJoinedGroupDeletedData"></a>

### EventOnJoinedGroupDeletedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group | [openim.sdk.shared.IMGroup](#openim-sdk-shared-IMGroup) |  |  |






<a name="openim-event-EventOnKickedOfflineData"></a>

### EventOnKickedOfflineData







<a name="openim-event-EventOnMessageDeletedData"></a>

### EventOnMessageDeletedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-event-EventOnMessageEditedData"></a>

### EventOnMessageEditedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-event-EventOnNewConversationData"></a>

### EventOnNewConversationData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationList | [openim.sdk.shared.IMConversation](#openim-sdk-shared-IMConversation) | repeated |  |






<a name="openim-event-EventOnNewRecvMessageRevokedData"></a>

### EventOnNewRecvMessageRevokedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| revoked | [openim.sdk.shared.RevokedTips](#openim-sdk-shared-RevokedTips) |  |  |






<a name="openim-event-EventOnRecvC2CReadReceiptData"></a>

### EventOnRecvC2CReadReceiptData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msgReceiptList | [MessageReceipt](#openim-event-MessageReceipt) | repeated |  |






<a name="openim-event-EventOnRecvCustomBusinessMessageData"></a>

### EventOnRecvCustomBusinessMessageData
CustomBusinessCallback Data Type


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| businessMessage | [string](#string) |  |  |






<a name="openim-event-EventOnRecvNewMessageData"></a>

### EventOnRecvNewMessageData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-event-EventOnRecvOfflineNewMessageData"></a>

### EventOnRecvOfflineNewMessageData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-event-EventOnRecvOnlineOnlyMessageData"></a>

### EventOnRecvOnlineOnlyMessageData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-event-EventOnSelfInfoUpdatedData"></a>

### EventOnSelfInfoUpdatedData
UserCallback Data Types


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [openim.sdk.shared.IMUser](#openim-sdk-shared-IMUser) |  |  |






<a name="openim-event-EventOnSendMsgProgressData"></a>

### EventOnSendMsgProgressData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| progress | [int32](#int32) |  |  |






<a name="openim-event-EventOnSyncServerFailedData"></a>

### EventOnSyncServerFailedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| reinstalled | [bool](#bool) |  |  |






<a name="openim-event-EventOnSyncServerFinishData"></a>

### EventOnSyncServerFinishData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| reinstalled | [bool](#bool) |  |  |






<a name="openim-event-EventOnSyncServerProgressData"></a>

### EventOnSyncServerProgressData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| progress | [int32](#int32) |  |  |






<a name="openim-event-EventOnSyncServerStartData"></a>

### EventOnSyncServerStartData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| reinstalled | [bool](#bool) |  |  |






<a name="openim-event-EventOnTotalUnreadMessageCountChangedData"></a>

### EventOnTotalUnreadMessageCountChangedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| totalUnreadCount | [int32](#int32) |  |  |






<a name="openim-event-EventOnUploadFileProgressData"></a>

### EventOnUploadFileProgressData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| progress | [int32](#int32) |  |  |






<a name="openim-event-EventOnUploadLogsProgressData"></a>

### EventOnUploadLogsProgressData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| progress | [int64](#int64) |  |  |
| total | [int64](#int64) |  |  |






<a name="openim-event-EventOnUserCommandAddData"></a>

### EventOnUserCommandAddData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| command | [openim.sdk.shared.CommandInfo](#openim-sdk-shared-CommandInfo) |  |  |






<a name="openim-event-EventOnUserCommandDeleteData"></a>

### EventOnUserCommandDeleteData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| command | [openim.sdk.shared.CommandInfo](#openim-sdk-shared-CommandInfo) |  |  |






<a name="openim-event-EventOnUserCommandUpdateData"></a>

### EventOnUserCommandUpdateData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| command | [openim.sdk.shared.CommandInfo](#openim-sdk-shared-CommandInfo) |  |  |






<a name="openim-event-EventOnUserStatusChangedData"></a>

### EventOnUserStatusChangedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| userID | [string](#string) |  |  |
| platformIDs | [int32](#int32) | repeated |  |






<a name="openim-event-EventOnUserTokenExpiredData"></a>

### EventOnUserTokenExpiredData







<a name="openim-event-EventOnUserTokenInvalidData"></a>

### EventOnUserTokenInvalidData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| errMsg | [string](#string) |  |  |






<a name="openim-event-MessageReceipt"></a>

### MessageReceipt



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupID | [string](#string) |  |  |
| userID | [string](#string) |  |  |
| msgIDList | [string](#string) | repeated |  |
| readTime | [int64](#int64) |  |  |
| msgFrom | [int32](#int32) |  |  |
| contentType | [int32](#int32) |  |  |
| sessionType | [int32](#int32) |  |  |





 


<a name="openim-event-FuncRequestEventName"></a>

### FuncRequestEventName


| Name | Number | Description |
| ---- | ------ | ----------- |
| None | 0 |  |
| GetAllConversationList | 1 |  |
| GetConversationList | 2 |  |
| GetConversation | 3 |  |
| InitSDK | 4 |  |
| Login | 5 |  |
| Logout | 106 |  |
| SetAppBackgroundStatus | 107 |  |
| NetworkStatusChanged | 108 |  |
| GetLoginStatus | 109 |  |
| Version | 110 |  |
| SendMessage | 6 |  |
| UploadLogs | 7 |  |
| UploadFile | 8 |  |
| Log | 9 |  |
| UpdateFcmToken | 10 |  |
| SetAppBadge | 11 |  |
| EventOnSendMsgProgress | 12 |  |
| EventOnUploadFileProgress | 13 |  |
| EventOnUploadLogsProgress | 14 |  |
| EventOnConnecting | 15 |  |
| EventOnConnectSuccess | 16 |  |
| EventOnConnectFailed | 17 |  |
| EventOnKickedOffline | 18 |  |
| EventOnUserTokenExpired | 19 |  |
| EventOnUserTokenInvalid | 20 |  |
| EventOnSyncServerStart | 21 |  |
| EventOnSyncServerFinish | 22 |  |
| EventOnSyncServerFailed | 23 |  |
| EventOnSyncServerProgress | 24 |  |
| EventOnNewConversation | 25 |  |
| EventOnConversationChanged | 26 |  |
| EventOnTotalUnreadMessageCountChanged | 27 |  |
| EventOnConversationUserInputStatusChanged | 28 |  |
| EventOnRecvNewMessage | 29 |  |
| EventOnRecvC2CReadReceipt | 30 |  |
| EventOnNewRecvMessageRevoked | 31 |  |
| EventOnRecvOfflineNewMessage | 32 |  |
| EventOnMessageDeleted | 33 |  |
| EventOnRecvOnlineOnlyMessage | 34 |  |
| EventOnMessageEdited | 35 |  |
| EventOnFriendApplicationAdded | 36 | FriendCallback Events |
| EventOnFriendApplicationDeleted | 37 |  |
| EventOnFriendApplicationAccepted | 38 |  |
| EventOnFriendApplicationRejected | 39 |  |
| EventOnFriendAdded | 40 |  |
| EventOnFriendDeleted | 41 |  |
| EventOnFriendInfoChanged | 42 |  |
| EventOnBlackAdded | 43 |  |
| EventOnBlackDeleted | 44 |  |
| EventOnJoinedGroupAdded | 45 | GroupCallback Events |
| EventOnJoinedGroupDeleted | 46 |  |
| EventOnGroupMemberAdded | 47 |  |
| EventOnGroupMemberDeleted | 48 |  |
| EventOnGroupApplicationAdded | 49 |  |
| EventOnGroupApplicationDeleted | 50 |  |
| EventOnGroupInfoChanged | 51 |  |
| EventOnGroupDismissed | 52 |  |
| EventOnGroupMemberInfoChanged | 53 |  |
| EventOnGroupApplicationAccepted | 54 |  |
| EventOnGroupApplicationRejected | 55 |  |
| EventOnRecvCustomBusinessMessage | 56 | CustomBusinessCallback Events |
| EventOnSelfInfoUpdated | 57 | UserCallback Events |
| EventOnUserStatusChanged | 58 |  |
| EventOnUserCommandAdd | 59 |  |
| EventOnUserCommandDelete | 60 |  |
| EventOnUserCommandUpdate | 61 |  |
| CreateGroup | 1000 |  |
| JoinGroup | 1001 |  |
| QuitGroup | 1002 |  |
| DismissGroup | 1003 |  |
| ChangeGroupMute | 1004 |  |
| ChangeGroupMemberMute | 1005 |  |
| TransferGroupOwner | 1006 |  |
| KickGroupMember | 1007 |  |
| SetGroupInfo | 1008 |  |
| SetGroupMemberInfo | 1009 |  |
| GetJoinedGroups | 1010 |  |
| GetJoinedGroupsPage | 1011 |  |
| GetSpecifiedGroupsInfo | 1012 |  |
| SearchGroups | 1013 |  |
| GetGroupMemberOwnerAndAdmin | 1014 |  |
| GetGroupMembersByJoinTimeFilter | 1015 |  |
| GetSpecifiedGroupMembersInfo | 1016 |  |
| GetGroupMembers | 1017 |  |
| GetGroupRequest | 1018 |  |
| SearchGroupMembers | 1019 |  |
| IsJoinGroup | 1020 |  |
| GetUsersInGroup | 1021 |  |
| InviteUserToGroup | 1022 |  |
| HandlerGroupRequest | 1023 |  |
| GetSpecifiedFriends | 1100 |  |
| AddFriend | 1101 |  |
| GetFriendRequests | 1102 |  |
| HandlerFriendRequest | 1103 |  |
| CheckFriend | 1104 |  |
| DeleteFriend | 1105 |  |
| GetFriends | 1106 |  |
| GetFriendsPage | 1107 |  |
| SearchFriends | 1108 |  |
| AddBlack | 1109 |  |
| DeleteBlack | 1110 |  |
| GetBlacks | 1111 |  |
| UpdateFriends | 1112 |  |
| GetConversationListSplit | 2000 | conversation_msg |
| HideConversation | 2001 |  |
| GetAtAllTag | 2002 |  |
| GetOneConversation | 2003 |  |
| GetMultipleConversation | 2004 |  |
| HideAllConversations | 2005 |  |
| SetConversationDraft | 2006 |  |
| SetConversation | 2007 |  |
| GetTotalUnreadMsgCount | 2008 |  |
| GetConversationIDBySessionType | 2009 |  |
| FindMessageList | 2010 |  |
| GetAdvancedHistoryMessageList | 2011 |  |
| GetAdvancedHistoryMessageListReverse | 2012 |  |
| RevokeMessage | 2013 |  |
| TypingStatusUpdate | 2014 |  |
| MarkConversationMessageAsRead | 2015 |  |
| MarkAllConversationMessageAsRead | 2016 |  |
| DeleteMessageFromLocalStorage | 2017 |  |
| DeleteMessage | 2018 |  |
| DeleteAllMsgFromLocalAndServer | 2019 |  |
| DeleteAllMessageFromLocalStorage | 2020 |  |
| ClearConversationAndDeleteAllMsg | 2021 |  |
| DeleteConversationAndDeleteAllMsg | 2022 |  |
| InsertSingleMessageToLocalStorage | 2023 |  |
| InsertGroupMessageToLocalStorage | 2024 |  |
| SearchLocalMessages | 2025 |  |
| SetMessageLocalEx | 2026 |  |
| SearchConversation | 2027 |  |
| CreateTextMessage | 2028 |  |
| CreateAdvancedTextMessage | 2029 |  |
| CreateTextAtMessage | 2030 |  |
| CreateLocationMessage | 2031 |  |
| CreateCustomMessage | 2032 |  |
| CreateQuoteMessage | 2033 |  |
| CreateAdvancedQuoteMessage | 2034 |  |
| CreateCardMessage | 2035 |  |
| CreateImageMessage | 2036 |  |
| CreateSoundMessage | 2037 |  |
| CreateVideoMessage | 2038 |  |
| CreateFileMessage | 2039 |  |
| CreateMergerMessage | 2040 |  |
| CreateFaceMessage | 2041 |  |
| CreateForwardMessage | 2042 |  |
| ProcessUserCommandGetAll | 2100 |  |
| GetSelfUserInfo | 2101 |  |
| SetSelfInfo | 2102 |  |
| ProcessUserCommandAdd | 2103 |  |
| ProcessUserCommandDelete | 2104 |  |
| ProcessUserCommandUpdate | 2105 |  |
| GetUsersInfo | 2106 |  |
| JsFileOpen | 2110 | The following functions are only used for Go and JS interaction and can be ignored by other platforms. |
| JsFileRead | 2111 |  |
| JsFileClose | 2112 |  |
| JsSqliteOpen | 2113 |  |
| JsSqliteExec | 2114 |  |
| JsSqliteQuery | 2115 |  |
| JsSqliteClose | 2116 |  |


 

 

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

