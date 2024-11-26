# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [conversation.proto](#conversation-proto)
    - [ClearConversationAndDeleteAllMsgReq](#openim-sdk-conversation-ClearConversationAndDeleteAllMsgReq)
    - [ClearConversationAndDeleteAllMsgResp](#openim-sdk-conversation-ClearConversationAndDeleteAllMsgResp)
    - [ConversationArgs](#openim-sdk-conversation-ConversationArgs)
    - [DeleteConversationAndDeleteAllMsgReq](#openim-sdk-conversation-DeleteConversationAndDeleteAllMsgReq)
    - [DeleteConversationAndDeleteAllMsgResp](#openim-sdk-conversation-DeleteConversationAndDeleteAllMsgResp)
    - [DeleteMessageFromLocalStorageReq](#openim-sdk-conversation-DeleteMessageFromLocalStorageReq)
    - [DeleteMessageFromLocalStorageResp](#openim-sdk-conversation-DeleteMessageFromLocalStorageResp)
    - [FindMessageListCallback](#openim-sdk-conversation-FindMessageListCallback)
    - [FindMessageListReq](#openim-sdk-conversation-FindMessageListReq)
    - [FindMessageListResp](#openim-sdk-conversation-FindMessageListResp)
    - [GetAllConversationListReq](#openim-sdk-conversation-GetAllConversationListReq)
    - [GetAllConversationListResp](#openim-sdk-conversation-GetAllConversationListResp)
    - [GetAtAllTagReq](#openim-sdk-conversation-GetAtAllTagReq)
    - [GetAtAllTagResp](#openim-sdk-conversation-GetAtAllTagResp)
    - [GetConversationIDBySessionTypeReq](#openim-sdk-conversation-GetConversationIDBySessionTypeReq)
    - [GetConversationIDBySessionTypeResp](#openim-sdk-conversation-GetConversationIDBySessionTypeResp)
    - [GetConversationListSplitReq](#openim-sdk-conversation-GetConversationListSplitReq)
    - [GetConversationListSplitResp](#openim-sdk-conversation-GetConversationListSplitResp)
    - [GetMultipleConversationReq](#openim-sdk-conversation-GetMultipleConversationReq)
    - [GetMultipleConversationResp](#openim-sdk-conversation-GetMultipleConversationResp)
    - [GetOneConversationReq](#openim-sdk-conversation-GetOneConversationReq)
    - [GetOneConversationResp](#openim-sdk-conversation-GetOneConversationResp)
    - [GetTotalUnreadMsgCountReq](#openim-sdk-conversation-GetTotalUnreadMsgCountReq)
    - [GetTotalUnreadMsgCountResp](#openim-sdk-conversation-GetTotalUnreadMsgCountResp)
    - [HideAllConversationsReq](#openim-sdk-conversation-HideAllConversationsReq)
    - [HideAllConversationsResp](#openim-sdk-conversation-HideAllConversationsResp)
    - [HideConversationReq](#openim-sdk-conversation-HideConversationReq)
    - [HideConversationResp](#openim-sdk-conversation-HideConversationResp)
    - [MarkAllConversationMessageAsReadReq](#openim-sdk-conversation-MarkAllConversationMessageAsReadReq)
    - [MarkAllConversationMessageAsReadResp](#openim-sdk-conversation-MarkAllConversationMessageAsReadResp)
    - [MarkConversationMessageAsReadReq](#openim-sdk-conversation-MarkConversationMessageAsReadReq)
    - [MarkConversationMessageAsReadResp](#openim-sdk-conversation-MarkConversationMessageAsReadResp)
    - [SearchByConversationResult](#openim-sdk-conversation-SearchByConversationResult)
    - [SearchConversationReq](#openim-sdk-conversation-SearchConversationReq)
    - [SearchConversationResp](#openim-sdk-conversation-SearchConversationResp)
    - [SearchLocalMessagesCallback](#openim-sdk-conversation-SearchLocalMessagesCallback)
    - [SearchLocalMessagesParams](#openim-sdk-conversation-SearchLocalMessagesParams)
    - [SearchLocalMessagesReq](#openim-sdk-conversation-SearchLocalMessagesReq)
    - [SearchLocalMessagesResp](#openim-sdk-conversation-SearchLocalMessagesResp)
    - [SetConversationDraftReq](#openim-sdk-conversation-SetConversationDraftReq)
    - [SetConversationDraftResp](#openim-sdk-conversation-SetConversationDraftResp)
    - [SetConversationReq](#openim-sdk-conversation-SetConversationReq)
    - [SetConversationResp](#openim-sdk-conversation-SetConversationResp)
    - [SetMessageLocalExReq](#openim-sdk-conversation-SetMessageLocalExReq)
    - [SetMessageLocalExResp](#openim-sdk-conversation-SetMessageLocalExResp)
  
- [conversation.docs.proto](#conversation-docs-proto)
    - [ConversationService](#openim-sdk-conversation-ConversationService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="conversation-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## conversation.proto



<a name="openim-sdk-conversation-ClearConversationAndDeleteAllMsgReq"></a>

### ClearConversationAndDeleteAllMsgReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationID | [string](#string) |  |  |






<a name="openim-sdk-conversation-ClearConversationAndDeleteAllMsgResp"></a>

### ClearConversationAndDeleteAllMsgResp







<a name="openim-sdk-conversation-ConversationArgs"></a>

### ConversationArgs



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationID | [string](#string) |  |  |
| clientMsgIDList | [string](#string) | repeated |  |






<a name="openim-sdk-conversation-DeleteConversationAndDeleteAllMsgReq"></a>

### DeleteConversationAndDeleteAllMsgReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationID | [string](#string) |  |  |






<a name="openim-sdk-conversation-DeleteConversationAndDeleteAllMsgResp"></a>

### DeleteConversationAndDeleteAllMsgResp







<a name="openim-sdk-conversation-DeleteMessageFromLocalStorageReq"></a>

### DeleteMessageFromLocalStorageReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationID | [string](#string) |  |  |
| clientMsgID | [string](#string) |  |  |






<a name="openim-sdk-conversation-DeleteMessageFromLocalStorageResp"></a>

### DeleteMessageFromLocalStorageResp







<a name="openim-sdk-conversation-FindMessageListCallback"></a>

### FindMessageListCallback



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| totalCount | [int32](#int32) |  |  |
| findResultItems | [SearchByConversationResult](#openim-sdk-conversation-SearchByConversationResult) | repeated |  |






<a name="openim-sdk-conversation-FindMessageListReq"></a>

### FindMessageListReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationsArgs | [ConversationArgs](#openim-sdk-conversation-ConversationArgs) | repeated |  |






<a name="openim-sdk-conversation-FindMessageListResp"></a>

### FindMessageListResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| findResultItems | [SearchByConversationResult](#openim-sdk-conversation-SearchByConversationResult) | repeated |  |
| totalCount | [int32](#int32) |  |  |






<a name="openim-sdk-conversation-GetAllConversationListReq"></a>

### GetAllConversationListReq
-----------------------------------------------------------------------------------------------------------------






<a name="openim-sdk-conversation-GetAllConversationListResp"></a>

### GetAllConversationListResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationList | [openim.sdk.shared.IMConversation](#openim-sdk-shared-IMConversation) | repeated | Details Conversation List |






<a name="openim-sdk-conversation-GetAtAllTagReq"></a>

### GetAtAllTagReq







<a name="openim-sdk-conversation-GetAtAllTagResp"></a>

### GetAtAllTagResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tag | [string](#string) |  |  |






<a name="openim-sdk-conversation-GetConversationIDBySessionTypeReq"></a>

### GetConversationIDBySessionTypeReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sourceID | [string](#string) |  |  |
| sessionType | [int32](#int32) |  |  |






<a name="openim-sdk-conversation-GetConversationIDBySessionTypeResp"></a>

### GetConversationIDBySessionTypeResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationID | [string](#string) |  |  |






<a name="openim-sdk-conversation-GetConversationListSplitReq"></a>

### GetConversationListSplitReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| offset | [int32](#int32) |  |  |
| count | [int32](#int32) |  |  |






<a name="openim-sdk-conversation-GetConversationListSplitResp"></a>

### GetConversationListSplitResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationList | [openim.sdk.shared.IMConversation](#openim-sdk-shared-IMConversation) | repeated |  |






<a name="openim-sdk-conversation-GetMultipleConversationReq"></a>

### GetMultipleConversationReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationIDList | [string](#string) | repeated |  |






<a name="openim-sdk-conversation-GetMultipleConversationResp"></a>

### GetMultipleConversationResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationList | [openim.sdk.shared.IMConversation](#openim-sdk-shared-IMConversation) | repeated |  |






<a name="openim-sdk-conversation-GetOneConversationReq"></a>

### GetOneConversationReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sessionType | [int32](#int32) |  |  |
| sourceID | [string](#string) |  |  |






<a name="openim-sdk-conversation-GetOneConversationResp"></a>

### GetOneConversationResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversation | [openim.sdk.shared.IMConversation](#openim-sdk-shared-IMConversation) |  |  |






<a name="openim-sdk-conversation-GetTotalUnreadMsgCountReq"></a>

### GetTotalUnreadMsgCountReq







<a name="openim-sdk-conversation-GetTotalUnreadMsgCountResp"></a>

### GetTotalUnreadMsgCountResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| totalUnreadCount | [int32](#int32) |  |  |






<a name="openim-sdk-conversation-HideAllConversationsReq"></a>

### HideAllConversationsReq







<a name="openim-sdk-conversation-HideAllConversationsResp"></a>

### HideAllConversationsResp







<a name="openim-sdk-conversation-HideConversationReq"></a>

### HideConversationReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationID | [string](#string) |  |  |






<a name="openim-sdk-conversation-HideConversationResp"></a>

### HideConversationResp







<a name="openim-sdk-conversation-MarkAllConversationMessageAsReadReq"></a>

### MarkAllConversationMessageAsReadReq







<a name="openim-sdk-conversation-MarkAllConversationMessageAsReadResp"></a>

### MarkAllConversationMessageAsReadResp







<a name="openim-sdk-conversation-MarkConversationMessageAsReadReq"></a>

### MarkConversationMessageAsReadReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationID | [string](#string) |  |  |






<a name="openim-sdk-conversation-MarkConversationMessageAsReadResp"></a>

### MarkConversationMessageAsReadResp







<a name="openim-sdk-conversation-SearchByConversationResult"></a>

### SearchByConversationResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationID | [string](#string) |  |  |
| conversationType | [int32](#int32) |  |  |
| showName | [string](#string) |  |  |
| faceURL | [string](#string) |  |  |
| latestMsgSendTime | [int64](#int64) |  |  |
| messageCount | [int32](#int32) |  |  |
| messageList | [openim.sdk.shared.IMMessage](#openim-sdk-shared-IMMessage) | repeated |  |






<a name="openim-sdk-conversation-SearchConversationReq"></a>

### SearchConversationReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| searchParam | [string](#string) |  |  |






<a name="openim-sdk-conversation-SearchConversationResp"></a>

### SearchConversationResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationList | [openim.sdk.shared.IMConversation](#openim-sdk-shared-IMConversation) | repeated |  |






<a name="openim-sdk-conversation-SearchLocalMessagesCallback"></a>

### SearchLocalMessagesCallback



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| totalCount | [int32](#int32) |  |  |
| searchResultItems | [SearchByConversationResult](#openim-sdk-conversation-SearchByConversationResult) | repeated |  |






<a name="openim-sdk-conversation-SearchLocalMessagesParams"></a>

### SearchLocalMessagesParams



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationID | [string](#string) |  |  |
| keywordList | [string](#string) | repeated | this is keywordList

Keyword list |
| keywordListMatchType | [int32](#int32) |  |  |
| senderUserIDList | [string](#string) | repeated |  |
| messageTypeList | [int32](#int32) | repeated |  |
| searchTimePosition | [int64](#int64) |  |  |
| searchTimePeriod | [int64](#int64) |  |  |
| pageIndex | [int32](#int32) |  |  |
| count | [int32](#int32) |  |  |






<a name="openim-sdk-conversation-SearchLocalMessagesReq"></a>

### SearchLocalMessagesReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| searchParam | [SearchLocalMessagesParams](#openim-sdk-conversation-SearchLocalMessagesParams) |  |  |






<a name="openim-sdk-conversation-SearchLocalMessagesResp"></a>

### SearchLocalMessagesResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| searchResult | [SearchLocalMessagesCallback](#openim-sdk-conversation-SearchLocalMessagesCallback) |  |  |






<a name="openim-sdk-conversation-SetConversationDraftReq"></a>

### SetConversationDraftReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationID | [string](#string) |  |  |
| draftText | [string](#string) |  |  |






<a name="openim-sdk-conversation-SetConversationDraftResp"></a>

### SetConversationDraftResp







<a name="openim-sdk-conversation-SetConversationReq"></a>

### SetConversationReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationID | [string](#string) |  |  |
| recvMsgOpt | [openim.sdk.common.ConvRecvMsgOpt](#openim-sdk-common-ConvRecvMsgOpt) | optional |  |
| groupAtType | [openim.sdk.common.ConvGroupAtType](#openim-sdk-common-ConvGroupAtType) | optional |  |
| isPinned | [bool](#bool) | optional |  |
| isPrivateChat | [bool](#bool) | optional |  |
| burnDuration | [int32](#int32) | optional |  |
| ex | [string](#string) | optional |  |
| msgDestructTime | [int64](#int64) | optional |  |
| isMsgDestruct | [bool](#bool) | optional |  |






<a name="openim-sdk-conversation-SetConversationResp"></a>

### SetConversationResp







<a name="openim-sdk-conversation-SetMessageLocalExReq"></a>

### SetMessageLocalExReq



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationID | [string](#string) |  |  |
| clientMsgID | [string](#string) |  |  |
| localEx | [string](#string) |  |  |






<a name="openim-sdk-conversation-SetMessageLocalExResp"></a>

### SetMessageLocalExResp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |





 

 

 

 



<a name="conversation-docs-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## conversation.docs.proto


 

 

 


<a name="openim-sdk-conversation-ConversationService"></a>

### ConversationService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetAllConversationList | [GetAllConversationListReq](#openim-sdk-conversation-GetAllConversationListReq) | [GetAllConversationListResp](#openim-sdk-conversation-GetAllConversationListResp) |  |
| GetConversationListSplit | [GetConversationListSplitReq](#openim-sdk-conversation-GetConversationListSplitReq) | [GetConversationListSplitResp](#openim-sdk-conversation-GetConversationListSplitResp) |  |
| HideConversation | [HideConversationReq](#openim-sdk-conversation-HideConversationReq) | [HideConversationResp](#openim-sdk-conversation-HideConversationResp) |  |

 



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

