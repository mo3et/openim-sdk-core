# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [group.proto](#group-proto)
    - [ChangeGroupMemberMuteReq](#openim-sdk-group-ChangeGroupMemberMuteReq)
    - [ChangeGroupMemberMuteResp](#openim-sdk-group-ChangeGroupMemberMuteResp)
    - [ChangeGroupMuteReq](#openim-sdk-group-ChangeGroupMuteReq)
    - [ChangeGroupMuteResp](#openim-sdk-group-ChangeGroupMuteResp)
    - [CreateGroupReq](#openim-sdk-group-CreateGroupReq)
    - [CreateGroupResp](#openim-sdk-group-CreateGroupResp)
    - [DismissGroupReq](#openim-sdk-group-DismissGroupReq)
    - [DismissGroupResp](#openim-sdk-group-DismissGroupResp)
    - [GetGroupMemberOwnerAndAdminReq](#openim-sdk-group-GetGroupMemberOwnerAndAdminReq)
    - [GetGroupMemberOwnerAndAdminResp](#openim-sdk-group-GetGroupMemberOwnerAndAdminResp)
    - [GetGroupMembersByJoinTimeFilterReq](#openim-sdk-group-GetGroupMembersByJoinTimeFilterReq)
    - [GetGroupMembersByJoinTimeFilterResp](#openim-sdk-group-GetGroupMembersByJoinTimeFilterResp)
    - [GetGroupMembersReq](#openim-sdk-group-GetGroupMembersReq)
    - [GetGroupMembersResp](#openim-sdk-group-GetGroupMembersResp)
    - [GetGroupRequestReq](#openim-sdk-group-GetGroupRequestReq)
    - [GetGroupRequestResp](#openim-sdk-group-GetGroupRequestResp)
    - [GetJoinedGroupsPageReq](#openim-sdk-group-GetJoinedGroupsPageReq)
    - [GetJoinedGroupsPageResp](#openim-sdk-group-GetJoinedGroupsPageResp)
    - [GetJoinedGroupsReq](#openim-sdk-group-GetJoinedGroupsReq)
    - [GetJoinedGroupsResp](#openim-sdk-group-GetJoinedGroupsResp)
    - [GetSpecifiedGroupMembersInfoReq](#openim-sdk-group-GetSpecifiedGroupMembersInfoReq)
    - [GetSpecifiedGroupMembersInfoResp](#openim-sdk-group-GetSpecifiedGroupMembersInfoResp)
    - [GetSpecifiedGroupsInfoReq](#openim-sdk-group-GetSpecifiedGroupsInfoReq)
    - [GetSpecifiedGroupsInfoResp](#openim-sdk-group-GetSpecifiedGroupsInfoResp)
    - [GetUsersInGroupReq](#openim-sdk-group-GetUsersInGroupReq)
    - [GetUsersInGroupResp](#openim-sdk-group-GetUsersInGroupResp)
    - [HandlerGroupRequestReq](#openim-sdk-group-HandlerGroupRequestReq)
    - [HandlerGroupRequestResp](#openim-sdk-group-HandlerGroupRequestResp)
    - [InviteUserToGroupReq](#openim-sdk-group-InviteUserToGroupReq)
    - [InviteUserToGroupResp](#openim-sdk-group-InviteUserToGroupResp)
    - [IsJoinGroupReq](#openim-sdk-group-IsJoinGroupReq)
    - [IsJoinGroupResp](#openim-sdk-group-IsJoinGroupResp)
    - [JoinGroupReq](#openim-sdk-group-JoinGroupReq)
    - [JoinGroupResp](#openim-sdk-group-JoinGroupResp)
    - [KickGroupMemberReq](#openim-sdk-group-KickGroupMemberReq)
    - [KickGroupMemberResp](#openim-sdk-group-KickGroupMemberResp)
    - [QuitGroupReq](#openim-sdk-group-QuitGroupReq)
    - [QuitGroupResp](#openim-sdk-group-QuitGroupResp)
    - [SearchGroupMembersReq](#openim-sdk-group-SearchGroupMembersReq)
    - [SearchGroupMembersResp](#openim-sdk-group-SearchGroupMembersResp)
    - [SearchGroupsReq](#openim-sdk-group-SearchGroupsReq)
    - [SearchGroupsResp](#openim-sdk-group-SearchGroupsResp)
    - [SetGroupInfoReq](#openim-sdk-group-SetGroupInfoReq)
    - [SetGroupInfoResp](#openim-sdk-group-SetGroupInfoResp)
    - [SetGroupMemberInfoReq](#openim-sdk-group-SetGroupMemberInfoReq)
    - [SetGroupMemberInfoResp](#openim-sdk-group-SetGroupMemberInfoResp)
    - [TransferGroupOwnerReq](#openim-sdk-group-TransferGroupOwnerReq)
    - [TransferGroupOwnerResp](#openim-sdk-group-TransferGroupOwnerResp)
  
    - [GroupFilter](#openim-sdk-group-GroupFilter)
  
- [Scalar Value Types](#scalar-value-types)



<a name="group-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## group.proto



<a name="openim-sdk-group-ChangeGroupMemberMuteReq"></a>

### ChangeGroupMemberMuteReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupID | [string](#string) |  | group id you want to mute |
| userID | [string](#string) |  | user id you want to mute |
| mutedSeconds | [uint32](#uint32) |  | mute time (unit: seconds), 0 cancels the mute |






<a name="openim-sdk-group-ChangeGroupMemberMuteResp"></a>

### ChangeGroupMemberMuteResp







<a name="openim-sdk-group-ChangeGroupMuteReq"></a>

### ChangeGroupMuteReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupID | [string](#string) |  | group id you want to mute |
| mute | [bool](#bool) |  | mute or cancel mute |






<a name="openim-sdk-group-ChangeGroupMuteResp"></a>

### ChangeGroupMuteResp







<a name="openim-sdk-group-CreateGroupReq"></a>

### CreateGroupReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| memberUserIDs | [string](#string) | repeated | ordinary group member group member user id |
| adminUserIDs | [string](#string) | repeated | administrator user id |
| groupInfo | [openim.sdk.shared.IMGroup](#openim-sdk-shared-IMGroup) |  | group information |






<a name="openim-sdk-group-CreateGroupResp"></a>

### CreateGroupResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupInfo | [openim.sdk.shared.IMGroup](#openim-sdk-shared-IMGroup) |  | group information |






<a name="openim-sdk-group-DismissGroupReq"></a>

### DismissGroupReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupID | [string](#string) |  | group id you dismissed |






<a name="openim-sdk-group-DismissGroupResp"></a>

### DismissGroupResp







<a name="openim-sdk-group-GetGroupMemberOwnerAndAdminReq"></a>

### GetGroupMemberOwnerAndAdminReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupID | [string](#string) |  | group id you want to get |






<a name="openim-sdk-group-GetGroupMemberOwnerAndAdminResp"></a>

### GetGroupMemberOwnerAndAdminResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| members | [openim.sdk.shared.IMGroupMember](#openim-sdk-shared-IMGroupMember) | repeated | group member information |






<a name="openim-sdk-group-GetGroupMembersByJoinTimeFilterReq"></a>

### GetGroupMembersByJoinTimeFilterReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupID | [string](#string) |  | group id you want to get |
| joinTimeBegin | [int64](#int64) |  | join time start |
| joinTimeEnd | [int64](#int64) |  | join time end |
| pagination | [openim.sdk.common.RequestPagination](#openim-sdk-common-RequestPagination) |  | pagination |






<a name="openim-sdk-group-GetGroupMembersByJoinTimeFilterResp"></a>

### GetGroupMembersByJoinTimeFilterResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| members | [openim.sdk.shared.IMGroupMember](#openim-sdk-shared-IMGroupMember) | repeated | group member information |






<a name="openim-sdk-group-GetGroupMembersReq"></a>

### GetGroupMembersReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupID | [string](#string) |  | group id you want to get |
| filter | [GroupFilter](#openim-sdk-group-GroupFilter) |  | filter |
| pagination | [openim.sdk.common.RequestPagination](#openim-sdk-common-RequestPagination) |  | pagination |






<a name="openim-sdk-group-GetGroupMembersResp"></a>

### GetGroupMembersResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| members | [openim.sdk.shared.IMGroupMember](#openim-sdk-shared-IMGroupMember) | repeated | group member information |






<a name="openim-sdk-group-GetGroupRequestReq"></a>

### GetGroupRequestReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| send | [bool](#bool) |  | is it the request i sent |






<a name="openim-sdk-group-GetGroupRequestResp"></a>

### GetGroupRequestResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| requests | [openim.sdk.shared.IMGroupRequest](#openim-sdk-shared-IMGroupRequest) | repeated | group request information |






<a name="openim-sdk-group-GetJoinedGroupsPageReq"></a>

### GetJoinedGroupsPageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [openim.sdk.common.RequestPagination](#openim-sdk-common-RequestPagination) |  | pagination |






<a name="openim-sdk-group-GetJoinedGroupsPageResp"></a>

### GetJoinedGroupsPageResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groups | [openim.sdk.shared.IMGroup](#openim-sdk-shared-IMGroup) | repeated | group information |






<a name="openim-sdk-group-GetJoinedGroupsReq"></a>

### GetJoinedGroupsReq







<a name="openim-sdk-group-GetJoinedGroupsResp"></a>

### GetJoinedGroupsResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groups | [openim.sdk.shared.IMGroup](#openim-sdk-shared-IMGroup) | repeated | group information |






<a name="openim-sdk-group-GetSpecifiedGroupMembersInfoReq"></a>

### GetSpecifiedGroupMembersInfoReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupID | [string](#string) |  | group id you want to get |
| userIDs | [string](#string) | repeated | user id you want to get |






<a name="openim-sdk-group-GetSpecifiedGroupMembersInfoResp"></a>

### GetSpecifiedGroupMembersInfoResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| members | [openim.sdk.shared.IMGroupMember](#openim-sdk-shared-IMGroupMember) | repeated | group member information |






<a name="openim-sdk-group-GetSpecifiedGroupsInfoReq"></a>

### GetSpecifiedGroupsInfoReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupIDs | [string](#string) | repeated | group id you want to get |






<a name="openim-sdk-group-GetSpecifiedGroupsInfoResp"></a>

### GetSpecifiedGroupsInfoResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groups | [openim.sdk.shared.IMGroup](#openim-sdk-shared-IMGroup) | repeated | group information |






<a name="openim-sdk-group-GetUsersInGroupReq"></a>

### GetUsersInGroupReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupID | [string](#string) |  | group id you want to get |
| userIDs | [string](#string) | repeated | user id you want to get |






<a name="openim-sdk-group-GetUsersInGroupResp"></a>

### GetUsersInGroupResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| userIDs | [string](#string) | repeated | user id in the group |






<a name="openim-sdk-group-HandlerGroupRequestReq"></a>

### HandlerGroupRequestReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupID | [string](#string) |  | group id you want to handle1&lt;br&gt; group id you want to handle2&lt;br&gt; group id you want to handle3&lt;br&gt; group id you want to handle4&lt;br&gt; |
| fromUserID | [string](#string) |  | user id you want to handle |
| handledMsg | [string](#string) |  | request message |
| status | [openim.sdk.common.ApprovalStatus](#openim-sdk-common-ApprovalStatus) |  | approval status |






<a name="openim-sdk-group-HandlerGroupRequestResp"></a>

### HandlerGroupRequestResp







<a name="openim-sdk-group-InviteUserToGroupReq"></a>

### InviteUserToGroupReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupID | [string](#string) |  | group id you want to invite |
| userIDs | [string](#string) | repeated | user id you want to invite |
| reason | [string](#string) |  | invite reason |






<a name="openim-sdk-group-InviteUserToGroupResp"></a>

### InviteUserToGroupResp







<a name="openim-sdk-group-IsJoinGroupReq"></a>

### IsJoinGroupReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupID | [string](#string) |  | group id you want to check |
| userID | [string](#string) |  | user id you want to check |






<a name="openim-sdk-group-IsJoinGroupResp"></a>

### IsJoinGroupResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| joined | [bool](#bool) |  | whether to join the group |






<a name="openim-sdk-group-JoinGroupReq"></a>

### JoinGroupReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupID | [string](#string) |  | group id you joined |
| reqMessage | [string](#string) |  | request message |
| joinSource | [openim.sdk.shared.GroupJoinSource](#openim-sdk-shared-GroupJoinSource) |  | join source |
| ex | [string](#string) |  | extension field |






<a name="openim-sdk-group-JoinGroupResp"></a>

### JoinGroupResp







<a name="openim-sdk-group-KickGroupMemberReq"></a>

### KickGroupMemberReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupID | [string](#string) |  | group id you want to kick |
| kickedUserIDs | [string](#string) | repeated | user id you want to kick |
| reason | [string](#string) |  | kick reason |






<a name="openim-sdk-group-KickGroupMemberResp"></a>

### KickGroupMemberResp







<a name="openim-sdk-group-QuitGroupReq"></a>

### QuitGroupReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupID | [string](#string) |  | group id you quit |






<a name="openim-sdk-group-QuitGroupResp"></a>

### QuitGroupResp







<a name="openim-sdk-group-SearchGroupMembersReq"></a>

### SearchGroupMembersReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupID | [string](#string) |  | group id you want to search |
| Keyword | [string](#string) |  | search keyword |
| searchUserID | [bool](#bool) |  | search user id |
| searchMemberNickname | [bool](#bool) |  | search user nickname |
| pagination | [openim.sdk.common.RequestPagination](#openim-sdk-common-RequestPagination) |  | pagination |






<a name="openim-sdk-group-SearchGroupMembersResp"></a>

### SearchGroupMembersResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| members | [openim.sdk.shared.IMGroupMember](#openim-sdk-shared-IMGroupMember) | repeated | group member information |






<a name="openim-sdk-group-SearchGroupsReq"></a>

### SearchGroupsReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| keyword | [string](#string) |  | search keyword |
| searchGroupID | [bool](#bool) |  | search group id |
| searchGroupName | [bool](#bool) |  | search group name |






<a name="openim-sdk-group-SearchGroupsResp"></a>

### SearchGroupsResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groups | [openim.sdk.shared.IMGroup](#openim-sdk-shared-IMGroup) | repeated | group information |






<a name="openim-sdk-group-SetGroupInfoReq"></a>

### SetGroupInfoReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupID | [string](#string) |  | group id you want to set |
| groupName | [string](#string) | optional | group name |
| notification | [string](#string) | optional | group notification |
| introduction | [string](#string) | optional | group introduction |
| faceURL | [string](#string) | optional | group face url |
| ex | [string](#string) | optional | extension field |
| needVerification | [int32](#int32) | optional | whether to verify the group |
| lookMemberInfo | [int32](#int32) | optional | whether to view the group member information |
| applyMemberFriend | [int32](#int32) | optional | whether to allow group members to add friends |






<a name="openim-sdk-group-SetGroupInfoResp"></a>

### SetGroupInfoResp







<a name="openim-sdk-group-SetGroupMemberInfoReq"></a>

### SetGroupMemberInfoReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupID | [string](#string) |  | group id you want to set |
| userID | [string](#string) |  | user id you want to set |
| nickname | [string](#string) | optional | user nickname |
| faceURL | [string](#string) | optional | user face url |
| roleLevel | [int32](#int32) | optional | user role level |
| ex | [string](#string) | optional | extension field |






<a name="openim-sdk-group-SetGroupMemberInfoResp"></a>

### SetGroupMemberInfoResp







<a name="openim-sdk-group-TransferGroupOwnerReq"></a>

### TransferGroupOwnerReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupID | [string](#string) |  | group id you want to transfer |
| ownerUserID | [string](#string) |  | new owner user id |






<a name="openim-sdk-group-TransferGroupOwnerResp"></a>

### TransferGroupOwnerResp






 


<a name="openim-sdk-group-GroupFilter"></a>

### GroupFilter


| Name | Number | Description |
| ---- | ------ | ----------- |
| All | 0 | all users |
| Owner | 1 | owner users |
| Admin | 2 | admin users |
| OrdinaryUsers | 3 | ordinary users |
| AdminAndOrdinaryUsers | 4 | admin and ordinary users |
| OwnerAndAdmin | 5 | owner and admin users |


 

 

 



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

