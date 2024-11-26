# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [error.proto](#error-proto)
    - [ErrorCode](#openim-sdk-error-ErrorCode)
  
- [Scalar Value Types](#scalar-value-types)



<a name="error-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## error.proto


 


<a name="openim-sdk-error-ErrorCode"></a>

### ErrorCode


| Name | Number | Description |
| ---- | ------ | ----------- |
| NoError | 0 |  |
| ServerInternal | 500 |  |
| Args | 1001 |  |
| NoPermission | 1002 |  |
| DuplicateKey | 1003 |  |
| RecordNotFound | 1004 |  |
| TokenExpired | 1501 |  |
| TokenInvalid | 1502 |  |
| TokenMalformed | 1503 |  |
| TokenNotValidYet | 1504 |  |
| TokenUnknown | 1505 |  |
| TokenKicked | 1506 |  |
| TokenNotExist | 1507 |  |
| SdkNetwork | 10000 |  |
| SdkNetworkTimeout | 10001 |  |
| SdkArgs | 10002 |  |
| SdkCtxDeadlineExceeded | 10003 |  |
| SdkResourceLoadNotComplete | 10004 |  |
| SdkUnknownCode | 10005 |  |
| SdkInternal | 10006 |  |
| SdkFuncNotFound | 10007 |  |
| SdkNotInit | 10008 |  |
| SdkNotLogin | 10009 |  |
| SdkUserIDNotFound | 10100 |  |
| SdkLoginOut | 10101 |  |
| SdkLoginRepeat | 10102 |  |
| SdkFileNotFound | 10200 |  |
| SdkMsgDeCompression | 10201 |  |
| SdkMsgDecodeBinaryWs | 10202 |  |
| SdkMsgBinaryTypeNotSupport | 10203 |  |
| SdkMsgRepeat | 10204 |  |
| SdkMsgContentTypeNotSupport | 10205 |  |
| SdkMsgHasNoSeq | 10206 |  |
| SdkNotSupportOpt | 10301 |  |
| SdkNotSupportType | 10302 |  |
| SdkUnreadCount | 10303 |  |
| SdkGroupIDNotFound | 10400 |  |
| SdkGroupType | 10401 |  |
| SrvUserIDNotFound | 1101 |  |
| SrvRegisteredAlready | 1102 |  |
| SrvGroupIDNotFound | 1201 |  |
| SrvGroupIDExisted | 1202 |  |
| SrvNotInGroupYet | 1203 |  |
| SrvDismissedAlready | 1204 |  |
| SrvGroupTypeNotSupport | 1205 |  |
| SrvGroupRequestHandled | 1206 |  |
| SrvCanNotAddYourself | 1301 |  |
| SrvBlockedByPeer | 1302 |  |
| SrvNotPeersFriend | 1303 |  |
| SrvRelationshipAlready | 1304 |  |
| SrvMessageHasReadDisable | 1401 |  |
| SrvMutedInGroup | 1402 |  |
| SrvMutedGroup | 1403 |  |
| SrvMsgAlreadyRevoke | 1404 |  |
| SrvConnOverMaxNumLimit | 1601 |  |
| SrvConnArgs | 1602 |  |
| SrvPushMsg | 1603 |  |
| SrvIOSBackgroundPush | 1604 |  |
| SrvFileUploadedExpired | 1701 |  |
| SrvDatabase | 90002 |  |
| SrvNetwork | 90004 |  |
| SrvData | 90007 |  |
| SrvCallback | 80000 |  |


 

 

 



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

