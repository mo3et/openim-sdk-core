# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [user.proto](#user-proto)
    - [GetSelfUserInfoReq](#openim-sdk-user-GetSelfUserInfoReq)
    - [GetSelfUserInfoResp](#openim-sdk-user-GetSelfUserInfoResp)
    - [GetUsersInfoReq](#openim-sdk-user-GetUsersInfoReq)
    - [GetUsersInfoResp](#openim-sdk-user-GetUsersInfoResp)
    - [ProcessUserCommandAddReq](#openim-sdk-user-ProcessUserCommandAddReq)
    - [ProcessUserCommandAddResp](#openim-sdk-user-ProcessUserCommandAddResp)
    - [ProcessUserCommandDeleteReq](#openim-sdk-user-ProcessUserCommandDeleteReq)
    - [ProcessUserCommandDeleteResp](#openim-sdk-user-ProcessUserCommandDeleteResp)
    - [ProcessUserCommandGetAllReq](#openim-sdk-user-ProcessUserCommandGetAllReq)
    - [ProcessUserCommandGetAllResp](#openim-sdk-user-ProcessUserCommandGetAllResp)
    - [ProcessUserCommandUpdateReq](#openim-sdk-user-ProcessUserCommandUpdateReq)
    - [ProcessUserCommandUpdateResp](#openim-sdk-user-ProcessUserCommandUpdateResp)
    - [SetSelfInfoReq](#openim-sdk-user-SetSelfInfoReq)
    - [SetSelfInfoResp](#openim-sdk-user-SetSelfInfoResp)
  
- [Scalar Value Types](#scalar-value-types)



<a name="user-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## user.proto



<a name="openim-sdk-user-GetSelfUserInfoReq"></a>

### GetSelfUserInfoReq







<a name="openim-sdk-user-GetSelfUserInfoResp"></a>

### GetSelfUserInfoResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [openim.sdk.shared.IMUser](#openim-sdk-shared-IMUser) |  | userinfo |






<a name="openim-sdk-user-GetUsersInfoReq"></a>

### GetUsersInfoReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| userIDs | [string](#string) | repeated | userid list |






<a name="openim-sdk-user-GetUsersInfoResp"></a>

### GetUsersInfoResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| users | [openim.sdk.shared.IMUser](#openim-sdk-shared-IMUser) | repeated | userinfo list |






<a name="openim-sdk-user-ProcessUserCommandAddReq"></a>

### ProcessUserCommandAddReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| userID | [string](#string) |  | userid |
| type | [int32](#int32) |  | command type |
| uuid | [string](#string) |  | command uuid |
| value | [string](#string) | optional | command value |
| ex | [string](#string) | optional | command extension fields |






<a name="openim-sdk-user-ProcessUserCommandAddResp"></a>

### ProcessUserCommandAddResp







<a name="openim-sdk-user-ProcessUserCommandDeleteReq"></a>

### ProcessUserCommandDeleteReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| userID | [string](#string) |  | userid |
| type | [int32](#int32) |  | command type |
| uuid | [string](#string) |  | command uuid |






<a name="openim-sdk-user-ProcessUserCommandDeleteResp"></a>

### ProcessUserCommandDeleteResp







<a name="openim-sdk-user-ProcessUserCommandGetAllReq"></a>

### ProcessUserCommandGetAllReq







<a name="openim-sdk-user-ProcessUserCommandGetAllResp"></a>

### ProcessUserCommandGetAllResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| commands | [openim.sdk.shared.CommandInfo](#openim-sdk-shared-CommandInfo) | repeated | command info list |






<a name="openim-sdk-user-ProcessUserCommandUpdateReq"></a>

### ProcessUserCommandUpdateReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| userID | [string](#string) |  | userid |
| type | [int32](#int32) |  | command type |
| uuid | [string](#string) |  | command uuid |
| value | [string](#string) | optional | command value |
| ex | [string](#string) | optional | command extension fields |






<a name="openim-sdk-user-ProcessUserCommandUpdateResp"></a>

### ProcessUserCommandUpdateResp







<a name="openim-sdk-user-SetSelfInfoReq"></a>

### SetSelfInfoReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| userID | [string](#string) |  | user id |
| nickname | [string](#string) | optional | user nickname |
| faceURL | [string](#string) | optional | user face url |
| ex | [string](#string) | optional | user extension fields |
| globalRecvMsgOpt | [openim.sdk.common.GlobalRecvMsgOpt](#openim-sdk-common-GlobalRecvMsgOpt) | optional | control global offline push. |






<a name="openim-sdk-user-SetSelfInfoResp"></a>

### SetSelfInfoResp






 

 

 

 



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

