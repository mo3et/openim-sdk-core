# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [message.proto](#message-proto)
    - [CreateAdvancedQuoteMessageReq](#openim-sdk-message-CreateAdvancedQuoteMessageReq)
    - [CreateAdvancedQuoteMessageResp](#openim-sdk-message-CreateAdvancedQuoteMessageResp)
    - [CreateAdvancedTextMessageReq](#openim-sdk-message-CreateAdvancedTextMessageReq)
    - [CreateAdvancedTextMessageResp](#openim-sdk-message-CreateAdvancedTextMessageResp)
    - [CreateCardMessageReq](#openim-sdk-message-CreateCardMessageReq)
    - [CreateCardMessageResp](#openim-sdk-message-CreateCardMessageResp)
    - [CreateCustomMessageReq](#openim-sdk-message-CreateCustomMessageReq)
    - [CreateCustomMessageResp](#openim-sdk-message-CreateCustomMessageResp)
    - [CreateFaceMessageReq](#openim-sdk-message-CreateFaceMessageReq)
    - [CreateFaceMessageResp](#openim-sdk-message-CreateFaceMessageResp)
    - [CreateFileMessageReq](#openim-sdk-message-CreateFileMessageReq)
    - [CreateFileMessageResp](#openim-sdk-message-CreateFileMessageResp)
    - [CreateForwardMessageReq](#openim-sdk-message-CreateForwardMessageReq)
    - [CreateForwardMessageResp](#openim-sdk-message-CreateForwardMessageResp)
    - [CreateImageMessageReq](#openim-sdk-message-CreateImageMessageReq)
    - [CreateImageMessageResp](#openim-sdk-message-CreateImageMessageResp)
    - [CreateLocationMessageReq](#openim-sdk-message-CreateLocationMessageReq)
    - [CreateLocationMessageResp](#openim-sdk-message-CreateLocationMessageResp)
    - [CreateMergerMessageReq](#openim-sdk-message-CreateMergerMessageReq)
    - [CreateMergerMessageResp](#openim-sdk-message-CreateMergerMessageResp)
    - [CreateQuoteMessageReq](#openim-sdk-message-CreateQuoteMessageReq)
    - [CreateQuoteMessageResp](#openim-sdk-message-CreateQuoteMessageResp)
    - [CreateSoundMessageReq](#openim-sdk-message-CreateSoundMessageReq)
    - [CreateSoundMessageResp](#openim-sdk-message-CreateSoundMessageResp)
    - [CreateTextAtMessageReq](#openim-sdk-message-CreateTextAtMessageReq)
    - [CreateTextAtMessageResp](#openim-sdk-message-CreateTextAtMessageResp)
    - [CreateTextMessageReq](#openim-sdk-message-CreateTextMessageReq)
    - [CreateTextMessageResp](#openim-sdk-message-CreateTextMessageResp)
    - [CreateVideoMessageReq](#openim-sdk-message-CreateVideoMessageReq)
    - [CreateVideoMessageResp](#openim-sdk-message-CreateVideoMessageResp)
    - [DeleteAllMessageFromLocalStorageReq](#openim-sdk-message-DeleteAllMessageFromLocalStorageReq)
    - [DeleteAllMessageFromLocalStorageResp](#openim-sdk-message-DeleteAllMessageFromLocalStorageResp)
    - [DeleteAllMsgFromLocalAndServerReq](#openim-sdk-message-DeleteAllMsgFromLocalAndServerReq)
    - [DeleteAllMsgFromLocalAndServerResp](#openim-sdk-message-DeleteAllMsgFromLocalAndServerResp)
    - [DeleteMessageReq](#openim-sdk-message-DeleteMessageReq)
    - [DeleteMessageResp](#openim-sdk-message-DeleteMessageResp)
    - [GetAdvancedHistoryMessageListCallback](#openim-sdk-message-GetAdvancedHistoryMessageListCallback)
    - [GetAdvancedHistoryMessageListParams](#openim-sdk-message-GetAdvancedHistoryMessageListParams)
    - [GetAdvancedHistoryMessageListReq](#openim-sdk-message-GetAdvancedHistoryMessageListReq)
    - [GetAdvancedHistoryMessageListResp](#openim-sdk-message-GetAdvancedHistoryMessageListResp)
    - [GetAdvancedHistoryMessageListReverseReq](#openim-sdk-message-GetAdvancedHistoryMessageListReverseReq)
    - [GetAdvancedHistoryMessageListReverseResp](#openim-sdk-message-GetAdvancedHistoryMessageListReverseResp)
    - [InsertGroupMessageToLocalStorageReq](#openim-sdk-message-InsertGroupMessageToLocalStorageReq)
    - [InsertGroupMessageToLocalStorageResp](#openim-sdk-message-InsertGroupMessageToLocalStorageResp)
    - [InsertSingleMessageToLocalStorageReq](#openim-sdk-message-InsertSingleMessageToLocalStorageReq)
    - [InsertSingleMessageToLocalStorageResp](#openim-sdk-message-InsertSingleMessageToLocalStorageResp)
    - [RevokeMessageReq](#openim-sdk-message-RevokeMessageReq)
    - [RevokeMessageResp](#openim-sdk-message-RevokeMessageResp)
    - [SendMessageReq](#openim-sdk-message-SendMessageReq)
    - [SendMessageResp](#openim-sdk-message-SendMessageResp)
    - [TypingStatusUpdateReq](#openim-sdk-message-TypingStatusUpdateReq)
    - [TypingStatusUpdateResp](#openim-sdk-message-TypingStatusUpdateResp)
  
- [Scalar Value Types](#scalar-value-types)



<a name="message-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## message.proto



<a name="openim-sdk-message-CreateAdvancedQuoteMessageReq"></a>

### CreateAdvancedQuoteMessageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| text | [string](#string) |  |  |
| quoteMessage | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |
| messageEntities | [openim.sdk.shared.MessageEntity](#openim-sdk-shared-MessageEntity) | repeated |  |






<a name="openim-sdk-message-CreateAdvancedQuoteMessageResp"></a>

### CreateAdvancedQuoteMessageResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-sdk-message-CreateAdvancedTextMessageReq"></a>

### CreateAdvancedTextMessageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| text | [string](#string) |  |  |
| messageEntities | [openim.sdk.shared.MessageEntity](#openim-sdk-shared-MessageEntity) | repeated |  |






<a name="openim-sdk-message-CreateAdvancedTextMessageResp"></a>

### CreateAdvancedTextMessageResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-sdk-message-CreateCardMessageReq"></a>

### CreateCardMessageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| card | [openim.sdk.shared.CardElem](#openim-sdk-shared-CardElem) |  |  |






<a name="openim-sdk-message-CreateCardMessageResp"></a>

### CreateCardMessageResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-sdk-message-CreateCustomMessageReq"></a>

### CreateCustomMessageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [string](#string) |  |  |
| extension | [string](#string) |  |  |
| description | [string](#string) |  |  |






<a name="openim-sdk-message-CreateCustomMessageResp"></a>

### CreateCustomMessageResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-sdk-message-CreateFaceMessageReq"></a>

### CreateFaceMessageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| index | [int32](#int32) |  |  |
| data | [string](#string) |  |  |






<a name="openim-sdk-message-CreateFaceMessageResp"></a>

### CreateFaceMessageResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-sdk-message-CreateFileMessageReq"></a>

### CreateFileMessageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fileSourcePath | [string](#string) |  |  |
| fileName | [string](#string) |  |  |
| fileElem | [openim.sdk.shared.FileBaseInfo](#openim-sdk-shared-FileBaseInfo) |  |  |






<a name="openim-sdk-message-CreateFileMessageResp"></a>

### CreateFileMessageResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-sdk-message-CreateForwardMessageReq"></a>

### CreateForwardMessageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-sdk-message-CreateForwardMessageResp"></a>

### CreateForwardMessageResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-sdk-message-CreateImageMessageReq"></a>

### CreateImageMessageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| imageSourcePath | [string](#string) |  |  |
| sourcePicture | [openim.sdk.shared.PictureBaseInfo](#openim-sdk-shared-PictureBaseInfo) |  |  |
| bigPicture | [openim.sdk.shared.PictureBaseInfo](#openim-sdk-shared-PictureBaseInfo) |  |  |
| snapshotPicture | [openim.sdk.shared.PictureBaseInfo](#openim-sdk-shared-PictureBaseInfo) |  |  |






<a name="openim-sdk-message-CreateImageMessageResp"></a>

### CreateImageMessageResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-sdk-message-CreateLocationMessageReq"></a>

### CreateLocationMessageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| description | [string](#string) |  |  |
| longitude | [double](#double) |  |  |
| latitude | [double](#double) |  |  |






<a name="openim-sdk-message-CreateLocationMessageResp"></a>

### CreateLocationMessageResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-sdk-message-CreateMergerMessageReq"></a>

### CreateMergerMessageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| messages | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) | repeated |  |
| title | [string](#string) |  |  |
| summaries | [string](#string) | repeated |  |






<a name="openim-sdk-message-CreateMergerMessageResp"></a>

### CreateMergerMessageResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-sdk-message-CreateQuoteMessageReq"></a>

### CreateQuoteMessageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| text | [string](#string) |  |  |
| quoteMessage | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-sdk-message-CreateQuoteMessageResp"></a>

### CreateQuoteMessageResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-sdk-message-CreateSoundMessageReq"></a>

### CreateSoundMessageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| soundPath | [string](#string) |  |  |
| duration | [int64](#int64) |  |  |
| soundElem | [openim.sdk.shared.SoundBaseInfo](#openim-sdk-shared-SoundBaseInfo) |  |  |






<a name="openim-sdk-message-CreateSoundMessageResp"></a>

### CreateSoundMessageResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-sdk-message-CreateTextAtMessageReq"></a>

### CreateTextAtMessageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| text | [string](#string) |  |  |
| userIDList | [string](#string) | repeated |  |
| usersInfo | [openim.sdk.shared.AtInfo](#openim-sdk-shared-AtInfo) | repeated |  |
| quoteMessage | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-sdk-message-CreateTextAtMessageResp"></a>

### CreateTextAtMessageResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-sdk-message-CreateTextMessageReq"></a>

### CreateTextMessageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| text | [string](#string) |  |  |






<a name="openim-sdk-message-CreateTextMessageResp"></a>

### CreateTextMessageResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-sdk-message-CreateVideoMessageReq"></a>

### CreateVideoMessageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| videoSourcePath | [string](#string) |  |  |
| videoType | [string](#string) |  |  |
| duration | [int64](#int64) |  |  |
| snapshotSourcePath | [string](#string) |  |  |
| videoElem | [openim.sdk.shared.VideoBaseInfo](#openim-sdk-shared-VideoBaseInfo) |  |  |






<a name="openim-sdk-message-CreateVideoMessageResp"></a>

### CreateVideoMessageResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-sdk-message-DeleteAllMessageFromLocalStorageReq"></a>

### DeleteAllMessageFromLocalStorageReq







<a name="openim-sdk-message-DeleteAllMessageFromLocalStorageResp"></a>

### DeleteAllMessageFromLocalStorageResp







<a name="openim-sdk-message-DeleteAllMsgFromLocalAndServerReq"></a>

### DeleteAllMsgFromLocalAndServerReq







<a name="openim-sdk-message-DeleteAllMsgFromLocalAndServerResp"></a>

### DeleteAllMsgFromLocalAndServerResp







<a name="openim-sdk-message-DeleteMessageReq"></a>

### DeleteMessageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationID | [string](#string) |  |  |
| clientMsgID | [string](#string) |  |  |






<a name="openim-sdk-message-DeleteMessageResp"></a>

### DeleteMessageResp







<a name="openim-sdk-message-GetAdvancedHistoryMessageListCallback"></a>

### GetAdvancedHistoryMessageListCallback



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| messageList | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) | repeated |  |
| isEnd | [bool](#bool) |  |  |
| errCode | [int32](#int32) |  |  |
| errMsg | [string](#string) |  |  |






<a name="openim-sdk-message-GetAdvancedHistoryMessageListParams"></a>

### GetAdvancedHistoryMessageListParams



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationID | [string](#string) |  |  |
| startClientMsgID | [string](#string) |  |  |
| count | [int32](#int32) |  |  |






<a name="openim-sdk-message-GetAdvancedHistoryMessageListReq"></a>

### GetAdvancedHistoryMessageListReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationID | [string](#string) |  |  |
| getAdvancedHistoryMessageListParams | [GetAdvancedHistoryMessageListParams](#openim-sdk-message-GetAdvancedHistoryMessageListParams) |  |  |






<a name="openim-sdk-message-GetAdvancedHistoryMessageListResp"></a>

### GetAdvancedHistoryMessageListResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| getAdvancedHistoryMessageListCallback | [GetAdvancedHistoryMessageListCallback](#openim-sdk-message-GetAdvancedHistoryMessageListCallback) |  |  |






<a name="openim-sdk-message-GetAdvancedHistoryMessageListReverseReq"></a>

### GetAdvancedHistoryMessageListReverseReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationID | [string](#string) |  |  |
| getAdvancedHistoryMessageListParams | [GetAdvancedHistoryMessageListParams](#openim-sdk-message-GetAdvancedHistoryMessageListParams) |  |  |






<a name="openim-sdk-message-GetAdvancedHistoryMessageListReverseResp"></a>

### GetAdvancedHistoryMessageListReverseResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| getAdvancedHistoryMessageListCallback | [GetAdvancedHistoryMessageListCallback](#openim-sdk-message-GetAdvancedHistoryMessageListCallback) |  |  |






<a name="openim-sdk-message-InsertGroupMessageToLocalStorageReq"></a>

### InsertGroupMessageToLocalStorageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msg | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |
| groupID | [string](#string) |  |  |
| sendID | [string](#string) |  |  |






<a name="openim-sdk-message-InsertGroupMessageToLocalStorageResp"></a>

### InsertGroupMessageToLocalStorageResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msg | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-sdk-message-InsertSingleMessageToLocalStorageReq"></a>

### InsertSingleMessageToLocalStorageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msg | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |
| recvID | [string](#string) |  |  |
| sendID | [string](#string) |  |  |






<a name="openim-sdk-message-InsertSingleMessageToLocalStorageResp"></a>

### InsertSingleMessageToLocalStorageResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msg | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-sdk-message-RevokeMessageReq"></a>

### RevokeMessageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationID | [string](#string) |  |  |
| clientMsgID | [string](#string) |  |  |






<a name="openim-sdk-message-RevokeMessageResp"></a>

### RevokeMessageResp







<a name="openim-sdk-message-SendMessageReq"></a>

### SendMessageReq
------------------------------------------------------------------------------------------------------


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |
| recvID | [string](#string) |  |  |
| groupID | [string](#string) |  |  |
| offlinePushInfo | [openim.sdk.common.OfflinePushInfo](#openim-sdk-common-OfflinePushInfo) |  |  |
| isOnlineOnly | [bool](#bool) |  |  |






<a name="openim-sdk-message-SendMessageResp"></a>

### SendMessageResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) |  |  |






<a name="openim-sdk-message-TypingStatusUpdateReq"></a>

### TypingStatusUpdateReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| recvID | [string](#string) |  |  |
| msgTip | [string](#string) |  |  |






<a name="openim-sdk-message-TypingStatusUpdateResp"></a>

### TypingStatusUpdateResp






 

 

 

 



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

