# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [common.proto](#common-proto)
    - [OfflinePushInfo](#openim-sdk-common-OfflinePushInfo)
    - [RequestPagination](#openim-sdk-common-RequestPagination)
  
    - [AppFramework](#openim-sdk-common-AppFramework)
    - [ApprovalStatus](#openim-sdk-common-ApprovalStatus)
    - [ContentType](#openim-sdk-common-ContentType)
    - [ConvGroupAtType](#openim-sdk-common-ConvGroupAtType)
    - [ConvRecvMsgOpt](#openim-sdk-common-ConvRecvMsgOpt)
    - [GlobalRecvMsgOpt](#openim-sdk-common-GlobalRecvMsgOpt)
    - [LogLevel](#openim-sdk-common-LogLevel)
    - [MsgFrom](#openim-sdk-common-MsgFrom)
    - [MsgStatus](#openim-sdk-common-MsgStatus)
    - [Platform](#openim-sdk-common-Platform)
    - [SessionType](#openim-sdk-common-SessionType)
  
- [Scalar Value Types](#scalar-value-types)



<a name="common-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## common.proto



<a name="openim-sdk-common-OfflinePushInfo"></a>

### OfflinePushInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| desc | [string](#string) |  |  |
| ex | [string](#string) |  |  |
| iOSPushSound | [string](#string) |  |  |
| iOSBadgeCount | [bool](#bool) |  |  |
| signalInfo | [string](#string) |  |  |






<a name="openim-sdk-common-RequestPagination"></a>

### RequestPagination



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pageNumber | [int32](#int32) |  |  |
| showNumber | [int32](#int32) |  |  |





 


<a name="openim-sdk-common-AppFramework"></a>

### AppFramework


| Name | Number | Description |
| ---- | ------ | ----------- |
| AppFramework_ | 0 |  |
| Native | 1 |  |
| Flutter | 2 |  |
| ReactNative | 3 |  |
| Electron | 4 |  |
| Unity | 5 |  |
| UnrealEngine | 6 |  |
| Qt | 7 |  |
| DotNet | 8 |  |
| DotNetMAUI | 9 |  |
| Avalonia | 10 |  |
| Cordova | 11 |  |
| UniApp | 12 |  |



<a name="openim-sdk-common-ApprovalStatus"></a>

### ApprovalStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| Default | 0 |  |
| Approved | 1 |  |
| Rejected | -1 |  |



<a name="openim-sdk-common-ContentType"></a>

### ContentType


| Name | Number | Description |
| ---- | ------ | ----------- |
| ContentType_ | 0 |  |
| Text | 101 |  |
| Picture | 102 |  |
| Sound | 103 |  |
| Video | 104 |  |
| File | 105 |  |
| AtText | 106 |  |
| Merge | 107 |  |
| Card | 108 |  |
| Location | 109 |  |
| Custom | 110 |  |
| Typing | 113 |  |
| Quote | 114 |  |
| Face | 115 |  |
| Stream | 116 |  |
| AdvancedText | 117 |  |
| CustomMsgNotTriggerConversation | 119 |  |
| CustomMsgOnlineOnly | 120 |  |
| FriendApplicationApprovedNotification | 1201 | FriendApplicationRejectedNotification = 1202;<br> FriendApplicationNotification = 1203;<br> FriendAddedNotification = 1204;<br> FriendDeletedNotification = 1205;<br> FriendRemarkSetNotification = 1206; |
| GroupCreatedNotification | 1501 | BlackAddedNotification = 1207;<br> BlackDeletedNotification = 1208;<br> FriendInfoUpdatedNotification = 1209;<br> FriendsInfoUpdateNotification = 1210;<br> ConversationChangeNotification = 1300;<br> UserInfoUpdatedNotification = 1303;<br> UserStatusChangeNotification = 1304;<br> UserCommandAddNotification = 1305;<br> UserCommandDeleteNotification = 1306;<br> UserCommandUpdateNotification = 1307; |
| MemberQuitNotification | 1504 | GroupInfoSetNotification = 1502;<br> JoinGroupApplicationNotification = 1503; |
| GroupOwnerTransferredNotification | 1507 | GroupApplicationAcceptedNotification = 1505;<br> GroupApplicationRejectedNotification = 1506; |
| MemberKickedNotification | 1508 |  |
| MemberInvitedNotification | 1509 |  |
| MemberEnterNotification | 1510 |  |
| GroupDismissedNotification | 1511 |  |
| GroupMemberMutedNotification | 1512 |  |
| GroupMemberCancelMutedNotification | 1513 |  |
| GroupMutedNotification | 1514 |  |
| GroupCancelMutedNotification | 1515 | GroupMemberInfoSetNotification = 1516;<br> GroupMemberSetToAdminNotification = 1517;<br> GroupMemberSetToOrdinaryUserNotification = 1518;<br> GroupInfoSetAnnouncementNotification = 1519;<br> GroupInfoSetNameNotification = 1520;<br> GroupNotificationEnd                     = 1599; |
| ConversationPrivateChatNotification | 1701 | ClearConversationNotification = 1703; |
| BusinessNotification | 2001 |  |
| RevokedNotification | 2101 |  |



<a name="openim-sdk-common-ConvGroupAtType"></a>

### ConvGroupAtType


| Name | Number | Description |
| ---- | ------ | ----------- |
| AtNormal | 0 |  |
| AtMe | 1 |  |
| AtAll | 2 |  |
| AtAllAtMe | 3 |  |



<a name="openim-sdk-common-ConvRecvMsgOpt"></a>

### ConvRecvMsgOpt


| Name | Number | Description |
| ---- | ------ | ----------- |
| ReceiveMessage | 0 |  |
| NotReceiveMessage | 1 |  |
| ReceiveNotNotifyMessage | 2 |  |



<a name="openim-sdk-common-GlobalRecvMsgOpt"></a>

### GlobalRecvMsgOpt
GlobalRecvMsgOpt represents the global message receive option.<br><br>In the globalRecvMsgOpt of UserInfo, globally control whether to receive offline push notifications.<br><br>In the recvMsgOpt of a ConversationInfo, in addition to controlling whether to receive offline push notifications for that session,<br>it also controls whether the unread count of that session is included in the total unread count.

| Name | Number | Description |
| ---- | ------ | ----------- |
| Normal | 0 | Normally receive messages |
| NotReceive | 1 | Reserved field |
| NotNotify | 2 | Receive messages, but no offline push. When in conversation, this conversation's unread count is not included in the total unread count |



<a name="openim-sdk-common-LogLevel"></a>

### LogLevel
LogLevel represents the log level. debug -> info -> warn -> error -> fatal.<br>Default log level is LevelWarn or LevelDebug.

| Name | Number | Description |
| ---- | ------ | ----------- |
| LevelFatal | 0 | only print fatal log |
| LevelPanic | 1 | print panic and fatal log |
| LevelError | 2 | print error, panic and fatal log |
| LevelWarn | 3 | print warn, error, panic and fatal log |
| LevelInfo | 4 | print info, warn, error, panic and fatal log |
| LevelDebug | 5 | print all level log |
| LevelDebugWithSQL | 6 | print all level log and sql log |



<a name="openim-sdk-common-MsgFrom"></a>

### MsgFrom


| Name | Number | Description |
| ---- | ------ | ----------- |
| MsgFrom_ | 0 |  |
| User | 100 | User represents a message type originating from a user. |
| System | 200 | System represents a system message type, typically generated by the system. |



<a name="openim-sdk-common-MsgStatus"></a>

### MsgStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| MsgStatus_ | 0 |  |
| Sending | 1 |  |
| SendSuccess | 2 |  |
| SendFailed | 3 |  |
| HasDeleted | 4 |  |
| Filtered | 5 |  |



<a name="openim-sdk-common-Platform"></a>

### Platform


| Name | Number | Description |
| ---- | ------ | ----------- |
| Platform_ | 0 |  |
| iOS | 1 | iOS represents the Apple iOS platform. |
| Android | 2 | Android represents the Android platform. |
| Windows | 3 | Windows represents the Microsoft Windows platform. |
| macOS | 4 | macOS represents the Apple macOS platform. |
| Web | 5 | Web represents the web browser platform. |
| MiniWeb | 6 | MiniWeb represents the mini-program or mini-web platform. |
| Linux | 7 | Linux represents the Linux platform. |
| AndroidPad | 8 | AndroidPad represents the Android tablet platform. |
| iPad | 9 | iPad represents the Apple iPad platform. |
| Admin | 10 | Admin represents the admin panel or management platform, typically used for backend administrators.<br>This platform is specifically for administrative filling and can generally be ignored. |
| HarmonyOS | 11 | HarmonyOS represents the Huawei HarmonyOS platform. |



<a name="openim-sdk-common-SessionType"></a>

### SessionType


| Name | Number | Description |
| ---- | ------ | ----------- |
| SessionType_ | 0 |  |
| Single | 1 | Single represents a single chat session type. |
| WriteGroup | 2 | WriteGroup represents a write-diffusion group chat session type (not currently enabled, can be ignored). |
| ReadGroup | 3 | ReadGroup represents a read-diffusion group chat session type, used for all current group chats in OpenIM. |
| Notification | 4 | Notification represents a notification session type, generated by the client when the server sends a notification. |


 

 

 



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

