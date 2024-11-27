# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [interop.proto](#interop-proto)
    - [jsFileCloseReq](#openim-sdk-interop-jsFileCloseReq)
    - [jsFileCloseResp](#openim-sdk-interop-jsFileCloseResp)
    - [jsFileOpenReq](#openim-sdk-interop-jsFileOpenReq)
    - [jsFileOpenResp](#openim-sdk-interop-jsFileOpenResp)
    - [jsFileReadReq](#openim-sdk-interop-jsFileReadReq)
    - [jsFileReadResp](#openim-sdk-interop-jsFileReadResp)
    - [jsSqliteCloseReq](#openim-sdk-interop-jsSqliteCloseReq)
    - [jsSqliteCloseResp](#openim-sdk-interop-jsSqliteCloseResp)
    - [jsSqliteExecReq](#openim-sdk-interop-jsSqliteExecReq)
    - [jsSqliteExecResp](#openim-sdk-interop-jsSqliteExecResp)
    - [jsSqliteOpenReq](#openim-sdk-interop-jsSqliteOpenReq)
    - [jsSqliteOpenResp](#openim-sdk-interop-jsSqliteOpenResp)
    - [jsSqliteQueryReq](#openim-sdk-interop-jsSqliteQueryReq)
    - [jsSqliteQueryResp](#openim-sdk-interop-jsSqliteQueryResp)
  
- [Scalar Value Types](#scalar-value-types)



<a name="interop-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## interop.proto



<a name="openim-sdk-interop-jsFileCloseReq"></a>

### jsFileCloseReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| uuid | [string](#string) |  |  |






<a name="openim-sdk-interop-jsFileCloseResp"></a>

### jsFileCloseResp







<a name="openim-sdk-interop-jsFileOpenReq"></a>

### jsFileOpenReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| uuid | [string](#string) |  |  |






<a name="openim-sdk-interop-jsFileOpenResp"></a>

### jsFileOpenResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| size | [int64](#int64) |  |  |






<a name="openim-sdk-interop-jsFileReadReq"></a>

### jsFileReadReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| uuid | [string](#string) |  |  |
| offset | [int64](#int64) |  |  |
| length | [int64](#int64) |  |  |






<a name="openim-sdk-interop-jsFileReadResp"></a>

### jsFileReadResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  |  |






<a name="openim-sdk-interop-jsSqliteCloseReq"></a>

### jsSqliteCloseReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [int64](#int64) |  |  |






<a name="openim-sdk-interop-jsSqliteCloseResp"></a>

### jsSqliteCloseResp







<a name="openim-sdk-interop-jsSqliteExecReq"></a>

### jsSqliteExecReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [int64](#int64) |  |  |
| sql | [string](#string) |  |  |
| args | [string](#string) |  | json array |






<a name="openim-sdk-interop-jsSqliteExecResp"></a>

### jsSqliteExecResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| affected | [int64](#int64) |  |  |






<a name="openim-sdk-interop-jsSqliteOpenReq"></a>

### jsSqliteOpenReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |






<a name="openim-sdk-interop-jsSqliteOpenResp"></a>

### jsSqliteOpenResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [int64](#int64) |  |  |






<a name="openim-sdk-interop-jsSqliteQueryReq"></a>

### jsSqliteQueryReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [int64](#int64) |  |  |
| sql | [string](#string) |  |  |
| args | [string](#string) |  | json array |






<a name="openim-sdk-interop-jsSqliteQueryResp"></a>

### jsSqliteQueryResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [string](#string) |  | json array |





 

 

 

 



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

