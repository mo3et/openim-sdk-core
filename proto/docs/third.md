# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [third.proto](#third-proto)
    - [LogKv](#openim-sdk-third-LogKv)
    - [LogReq](#openim-sdk-third-LogReq)
    - [LogResp](#openim-sdk-third-LogResp)
    - [SetAppBadgeReq](#openim-sdk-third-SetAppBadgeReq)
    - [SetAppBadgeResp](#openim-sdk-third-SetAppBadgeResp)
    - [UpdateFcmTokenReq](#openim-sdk-third-UpdateFcmTokenReq)
    - [UpdateFcmTokenResp](#openim-sdk-third-UpdateFcmTokenResp)
    - [UploadLogsReq](#openim-sdk-third-UploadLogsReq)
    - [UploadLogsResp](#openim-sdk-third-UploadLogsResp)
  
- [Scalar Value Types](#scalar-value-types)



<a name="third-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## third.proto



<a name="openim-sdk-third-LogKv"></a>

### LogKv



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  | key |
| value | [google.protobuf.Any](#google-protobuf-Any) |  | value |






<a name="openim-sdk-third-LogReq"></a>

### LogReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| logLevel | [openim.sdk.common.LogLevel](#openim-sdk-common-LogLevel) |  | log level |
| file | [string](#string) |  | log file path |
| line | [int32](#int32) |  | log line |
| msg | [string](#string) |  | log message |
| err | [string](#string) |  | log error message |
| kvs | [LogKv](#openim-sdk-third-LogKv) | repeated | log key-value pairs |






<a name="openim-sdk-third-LogResp"></a>

### LogResp







<a name="openim-sdk-third-SetAppBadgeReq"></a>

### SetAppBadgeReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| appUnreadCount | [int32](#int32) |  | app unread count |






<a name="openim-sdk-third-SetAppBadgeResp"></a>

### SetAppBadgeResp







<a name="openim-sdk-third-UpdateFcmTokenReq"></a>

### UpdateFcmTokenReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fcmToken | [string](#string) |  | fcm token |
| expireTime | [int64](#int64) |  | expire time |






<a name="openim-sdk-third-UpdateFcmTokenResp"></a>

### UpdateFcmTokenResp







<a name="openim-sdk-third-UploadLogsReq"></a>

### UploadLogsReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| line | [int32](#int32) |  | upload line |
| ex | [string](#string) |  | upload extension fields |






<a name="openim-sdk-third-UploadLogsResp"></a>

### UploadLogsResp






 

 

 

 



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

