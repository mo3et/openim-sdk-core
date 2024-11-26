# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [init.proto](#init-proto)
    - [GetLoginStatusReq](#openim-init-GetLoginStatusReq)
    - [GetLoginStatusResp](#openim-init-GetLoginStatusResp)
    - [IMConfig](#openim-init-IMConfig)
    - [InitSDKReq](#openim-init-InitSDKReq)
    - [InitSDKResp](#openim-init-InitSDKResp)
    - [LoginReq](#openim-init-LoginReq)
    - [LoginResp](#openim-init-LoginResp)
    - [LogoutReq](#openim-init-LogoutReq)
    - [LogoutResp](#openim-init-LogoutResp)
    - [NetworkStatusChangedReq](#openim-init-NetworkStatusChangedReq)
    - [NetworkStatusChangedResp](#openim-init-NetworkStatusChangedResp)
    - [SetAppBackgroundStatusReq](#openim-init-SetAppBackgroundStatusReq)
    - [SetAppBackgroundStatusResp](#openim-init-SetAppBackgroundStatusResp)
    - [VersionReq](#openim-init-VersionReq)
    - [VersionResp](#openim-init-VersionResp)
  
    - [LoginStatus](#openim-init-LoginStatus)
  
- [Scalar Value Types](#scalar-value-types)



<a name="init-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## init.proto



<a name="openim-init-GetLoginStatusReq"></a>

### GetLoginStatusReq







<a name="openim-init-GetLoginStatusResp"></a>

### GetLoginStatusResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [LoginStatus](#openim-init-LoginStatus) |  |  |






<a name="openim-init-IMConfig"></a>

### IMConfig



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| appFramework | [openim.sdk.common.AppFramework](#openim-sdk-common-AppFramework) |  |  |
| platform | [openim.sdk.common.Platform](#openim-sdk-common-Platform) |  |  |
| apiAddr | [string](#string) |  |  |
| wsAddr | [string](#string) |  |  |
| dataDir | [string](#string) |  |  |
| logLevel | [uint32](#uint32) |  |  |
| isLogStandardOutput | [bool](#bool) |  |  |
| logFilePath | [string](#string) |  |  |






<a name="openim-init-InitSDKReq"></a>

### InitSDKReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| config | [IMConfig](#openim-init-IMConfig) |  |  |






<a name="openim-init-InitSDKResp"></a>

### InitSDKResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| suc | [bool](#bool) |  |  |






<a name="openim-init-LoginReq"></a>

### LoginReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| userID | [string](#string) |  |  |
| token | [string](#string) |  |  |






<a name="openim-init-LoginResp"></a>

### LoginResp







<a name="openim-init-LogoutReq"></a>

### LogoutReq







<a name="openim-init-LogoutResp"></a>

### LogoutResp







<a name="openim-init-NetworkStatusChangedReq"></a>

### NetworkStatusChangedReq







<a name="openim-init-NetworkStatusChangedResp"></a>

### NetworkStatusChangedResp







<a name="openim-init-SetAppBackgroundStatusReq"></a>

### SetAppBackgroundStatusReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| isBackground | [bool](#bool) |  |  |






<a name="openim-init-SetAppBackgroundStatusResp"></a>

### SetAppBackgroundStatusResp







<a name="openim-init-VersionReq"></a>

### VersionReq







<a name="openim-init-VersionResp"></a>

### VersionResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [string](#string) |  |  |





 


<a name="openim-init-LoginStatus"></a>

### LoginStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| _ | 0 |  |
| Default | 1 |  |
| Logging | 2 |  |
| Logged | 3 |  |


 

 

 



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

