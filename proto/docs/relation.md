# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [relation.proto](#relation-proto)
    - [AddBlackReq](#openim-sdk-relation-AddBlackReq)
    - [AddBlackResp](#openim-sdk-relation-AddBlackResp)
    - [AddFriendReq](#openim-sdk-relation-AddFriendReq)
    - [AddFriendResp](#openim-sdk-relation-AddFriendResp)
    - [CheckFriendInfo](#openim-sdk-relation-CheckFriendInfo)
    - [CheckFriendReq](#openim-sdk-relation-CheckFriendReq)
    - [CheckFriendResp](#openim-sdk-relation-CheckFriendResp)
    - [DeleteBlackReq](#openim-sdk-relation-DeleteBlackReq)
    - [DeleteBlackResp](#openim-sdk-relation-DeleteBlackResp)
    - [DeleteFriendReq](#openim-sdk-relation-DeleteFriendReq)
    - [DeleteFriendResp](#openim-sdk-relation-DeleteFriendResp)
    - [GetBlacksReq](#openim-sdk-relation-GetBlacksReq)
    - [GetBlacksResp](#openim-sdk-relation-GetBlacksResp)
    - [GetFriendRequestsReq](#openim-sdk-relation-GetFriendRequestsReq)
    - [GetFriendRequestsResp](#openim-sdk-relation-GetFriendRequestsResp)
    - [GetFriendsPageReq](#openim-sdk-relation-GetFriendsPageReq)
    - [GetFriendsPageResp](#openim-sdk-relation-GetFriendsPageResp)
    - [GetFriendsReq](#openim-sdk-relation-GetFriendsReq)
    - [GetFriendsResp](#openim-sdk-relation-GetFriendsResp)
    - [GetSpecifiedFriendsReq](#openim-sdk-relation-GetSpecifiedFriendsReq)
    - [GetSpecifiedFriendsResp](#openim-sdk-relation-GetSpecifiedFriendsResp)
    - [HandleFriendRequestReq](#openim-sdk-relation-HandleFriendRequestReq)
    - [HandleFriendRequestResp](#openim-sdk-relation-HandleFriendRequestResp)
    - [SearchFriendsInfo](#openim-sdk-relation-SearchFriendsInfo)
    - [SearchFriendsReq](#openim-sdk-relation-SearchFriendsReq)
    - [SearchFriendsResp](#openim-sdk-relation-SearchFriendsResp)
    - [UpdatesFriendsReq](#openim-sdk-relation-UpdatesFriendsReq)
    - [UpdatesFriendsResp](#openim-sdk-relation-UpdatesFriendsResp)
  
    - [CheckFriendResult](#openim-sdk-relation-CheckFriendResult)
    - [Relationship](#openim-sdk-relation-Relationship)
  
- [Scalar Value Types](#scalar-value-types)



<a name="relation-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## relation.proto



<a name="openim-sdk-relation-AddBlackReq"></a>

### AddBlackReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| userID | [string](#string) |  | need add black userid |
| ex | [string](#string) |  | extension fields |






<a name="openim-sdk-relation-AddBlackResp"></a>

### AddBlackResp







<a name="openim-sdk-relation-AddFriendReq"></a>

### AddFriendReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| userID | [string](#string) |  | userid |
| reqMsg | [string](#string) |  | friend request message |
| ex | [string](#string) |  | extension fields |






<a name="openim-sdk-relation-AddFriendResp"></a>

### AddFriendResp







<a name="openim-sdk-relation-CheckFriendInfo"></a>

### CheckFriendInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| userID | [string](#string) |  | checkFriend target userid |
| result | [CheckFriendResult](#openim-sdk-relation-CheckFriendResult) |  | checkFriend result |






<a name="openim-sdk-relation-CheckFriendReq"></a>

### CheckFriendReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| friendUserIDs | [string](#string) | repeated | checkFriend userid list |






<a name="openim-sdk-relation-CheckFriendResp"></a>

### CheckFriendResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [CheckFriendInfo](#openim-sdk-relation-CheckFriendInfo) | repeated | checkFriend result list |






<a name="openim-sdk-relation-DeleteBlackReq"></a>

### DeleteBlackReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| userID | [string](#string) |  | need delete black userid |






<a name="openim-sdk-relation-DeleteBlackResp"></a>

### DeleteBlackResp







<a name="openim-sdk-relation-DeleteFriendReq"></a>

### DeleteFriendReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| userID | [string](#string) |  | need delete friend userid |






<a name="openim-sdk-relation-DeleteFriendResp"></a>

### DeleteFriendResp







<a name="openim-sdk-relation-GetBlacksReq"></a>

### GetBlacksReq







<a name="openim-sdk-relation-GetBlacksResp"></a>

### GetBlacksResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| blacks | [openim.sdk.shared.IMBlack](#openim-sdk-shared-IMBlack) | repeated | black list info list |






<a name="openim-sdk-relation-GetFriendRequestsReq"></a>

### GetFriendRequestsReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| send | [bool](#bool) |  | 1. user send friend request.<br>2. user receive friend request |






<a name="openim-sdk-relation-GetFriendRequestsResp"></a>

### GetFriendRequestsResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| requests | [openim.sdk.shared.IMFriendRequest](#openim-sdk-shared-IMFriendRequest) | repeated | corresponding friend request list |






<a name="openim-sdk-relation-GetFriendsPageReq"></a>

### GetFriendsPageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| filterBlack | [bool](#bool) |  | filter black friend, default false |
| pagination | [openim.sdk.common.RequestPagination](#openim-sdk-common-RequestPagination) |  | pagination, include pagenumber and pageSize |






<a name="openim-sdk-relation-GetFriendsPageResp"></a>

### GetFriendsPageResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| friends | [openim.sdk.shared.IMFriend](#openim-sdk-shared-IMFriend) | repeated | get friend list |






<a name="openim-sdk-relation-GetFriendsReq"></a>

### GetFriendsReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| filterBlack | [bool](#bool) |  | filter black friend, default false |






<a name="openim-sdk-relation-GetFriendsResp"></a>

### GetFriendsResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| friends | [openim.sdk.shared.IMFriend](#openim-sdk-shared-IMFriend) | repeated | get friend list |






<a name="openim-sdk-relation-GetSpecifiedFriendsReq"></a>

### GetSpecifiedFriendsReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| friendUserIDs | [string](#string) | repeated | specified friend userid list |
| filterBlack | [bool](#bool) |  | filter black, default false |






<a name="openim-sdk-relation-GetSpecifiedFriendsResp"></a>

### GetSpecifiedFriendsResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| friends | [openim.sdk.shared.IMFriend](#openim-sdk-shared-IMFriend) | repeated | get specified friend list |






<a name="openim-sdk-relation-HandleFriendRequestReq"></a>

### HandleFriendRequestReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| userID | [string](#string) |  | send friend request userid |
| handleMsg | [string](#string) |  | handle message |
| status | [openim.sdk.common.ApprovalStatus](#openim-sdk-common-ApprovalStatus) |  | handle status |






<a name="openim-sdk-relation-HandleFriendRequestResp"></a>

### HandleFriendRequestResp







<a name="openim-sdk-relation-SearchFriendsInfo"></a>

### SearchFriendsInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| friend | [openim.sdk.shared.IMFriend](#openim-sdk-shared-IMFriend) |  | search friend info |
| relationship | [Relationship](#openim-sdk-relation-Relationship) |  | friend relationship |






<a name="openim-sdk-relation-SearchFriendsReq"></a>

### SearchFriendsReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| keyword | [string](#string) |  | search keyword |
| searchUserID | [bool](#bool) |  | search userid is condition |
| searchNickname | [bool](#bool) |  | search nickname is condition |
| searchRemark | [bool](#bool) |  | search remark is condition |






<a name="openim-sdk-relation-SearchFriendsResp"></a>

### SearchFriendsResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| friends | [SearchFriendsInfo](#openim-sdk-relation-SearchFriendsInfo) | repeated | search friend info list |






<a name="openim-sdk-relation-UpdatesFriendsReq"></a>

### UpdatesFriendsReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| userID | [string](#string) |  | need update friend |
| pinned | [bool](#bool) | optional | update friend pinned status |
| Remark | [string](#string) | optional | update friend remark |
| ex | [string](#string) | optional | upate friend extension fields |






<a name="openim-sdk-relation-UpdatesFriendsResp"></a>

### UpdatesFriendsResp






 


<a name="openim-sdk-relation-CheckFriendResult"></a>

### CheckFriendResult


| Name | Number | Description |
| ---- | ------ | ----------- |
| NotFriend | 0 | not friend |
| IsFriend | 1 | is friend |



<a name="openim-sdk-relation-Relationship"></a>

### Relationship


| Name | Number | Description |
| ---- | ------ | ----------- |
| Black | 0 | black |
| Friend | 1 | friend |


 

 

 



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

