# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [shared.proto](#shared-proto)
    - [AdvancedTextElem](#openim-sdk-shared-AdvancedTextElem)
    - [AtInfo](#openim-sdk-shared-AtInfo)
    - [AtTextElem](#openim-sdk-shared-AtTextElem)
    - [AttachedInfoElem](#openim-sdk-shared-AttachedInfoElem)
    - [BusinessTips](#openim-sdk-shared-BusinessTips)
    - [CardElem](#openim-sdk-shared-CardElem)
    - [CommandInfo](#openim-sdk-shared-CommandInfo)
    - [ConversationPrivateChatTips](#openim-sdk-shared-ConversationPrivateChatTips)
    - [CustomElem](#openim-sdk-shared-CustomElem)
    - [FaceElem](#openim-sdk-shared-FaceElem)
    - [FileBaseInfo](#openim-sdk-shared-FileBaseInfo)
    - [FileElem](#openim-sdk-shared-FileElem)
    - [FriendApplicationApprovedTips](#openim-sdk-shared-FriendApplicationApprovedTips)
    - [FromToUserID](#openim-sdk-shared-FromToUserID)
    - [GroupCancelMutedTips](#openim-sdk-shared-GroupCancelMutedTips)
    - [GroupCreatedTips](#openim-sdk-shared-GroupCreatedTips)
    - [GroupDismissedTips](#openim-sdk-shared-GroupDismissedTips)
    - [GroupHasReadInfo](#openim-sdk-shared-GroupHasReadInfo)
    - [GroupMemberCancelMutedTips](#openim-sdk-shared-GroupMemberCancelMutedTips)
    - [GroupMemberMutedTips](#openim-sdk-shared-GroupMemberMutedTips)
    - [GroupMutedTips](#openim-sdk-shared-GroupMutedTips)
    - [GroupOwnerTransferredTips](#openim-sdk-shared-GroupOwnerTransferredTips)
    - [IMBlack](#openim-sdk-shared-IMBlack)
    - [IMConversation](#openim-sdk-shared-IMConversation)
    - [IMFriend](#openim-sdk-shared-IMFriend)
    - [IMFriendRequest](#openim-sdk-shared-IMFriendRequest)
    - [IMGroup](#openim-sdk-shared-IMGroup)
    - [IMGroupMember](#openim-sdk-shared-IMGroupMember)
    - [IMGroupRequest](#openim-sdk-shared-IMGroupRequest)
    - [IMMessage](#openim-sdk-shared-IMMessage)
    - [IMUser](#openim-sdk-shared-IMUser)
    - [ImageInfo](#openim-sdk-shared-ImageInfo)
    - [LocationElem](#openim-sdk-shared-LocationElem)
    - [MemberEnterTips](#openim-sdk-shared-MemberEnterTips)
    - [MemberInvitedTips](#openim-sdk-shared-MemberInvitedTips)
    - [MemberKickedTips](#openim-sdk-shared-MemberKickedTips)
    - [MemberQuitTips](#openim-sdk-shared-MemberQuitTips)
    - [MergeElem](#openim-sdk-shared-MergeElem)
    - [MessageEntity](#openim-sdk-shared-MessageEntity)
    - [PictureBaseInfo](#openim-sdk-shared-PictureBaseInfo)
    - [PictureElem](#openim-sdk-shared-PictureElem)
    - [QuoteElem](#openim-sdk-shared-QuoteElem)
    - [RevokedTips](#openim-sdk-shared-RevokedTips)
    - [SoundBaseInfo](#openim-sdk-shared-SoundBaseInfo)
    - [SoundElem](#openim-sdk-shared-SoundElem)
    - [StreamElem](#openim-sdk-shared-StreamElem)
    - [TextElem](#openim-sdk-shared-TextElem)
    - [TypingElem](#openim-sdk-shared-TypingElem)
    - [UploadProgress](#openim-sdk-shared-UploadProgress)
    - [VideoBaseInfo](#openim-sdk-shared-VideoBaseInfo)
    - [VideoElem](#openim-sdk-shared-VideoElem)
  
    - [GroupApplyMemberFriend](#openim-sdk-shared-GroupApplyMemberFriend)
    - [GroupJoinSource](#openim-sdk-shared-GroupJoinSource)
    - [GroupLookMemberInfo](#openim-sdk-shared-GroupLookMemberInfo)
    - [GroupNeedVerification](#openim-sdk-shared-GroupNeedVerification)
    - [GroupStatus](#openim-sdk-shared-GroupStatus)
  
- [Scalar Value Types](#scalar-value-types)



<a name="shared-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## shared.proto



<a name="openim-sdk-shared-AdvancedTextElem"></a>

### AdvancedTextElem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| text | [string](#string) |  |  |
| messageEntityList | [MessageEntity](#openim-sdk-shared-MessageEntity) | repeated |  |






<a name="openim-sdk-shared-AtInfo"></a>

### AtInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| atUserID | [string](#string) |  |  |
| groupNickname | [string](#string) |  |  |






<a name="openim-sdk-shared-AtTextElem"></a>

### AtTextElem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| text | [string](#string) |  |  |
| atUserList | [string](#string) | repeated |  |
| atUsersInfo | [AtInfo](#openim-sdk-shared-AtInfo) | repeated |  |
| quoteMessage | [IMMessage](#openim-sdk-shared-IMMessage) |  |  |
| isAtSelf | [bool](#bool) |  |  |






<a name="openim-sdk-shared-AttachedInfoElem"></a>

### AttachedInfoElem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupHasReadInfo | [GroupHasReadInfo](#openim-sdk-shared-GroupHasReadInfo) |  |  |
| isPrivateChat | [bool](#bool) |  |  |
| burnDuration | [int32](#int32) |  |  |
| hasReadTime | [int64](#int64) |  |  |
| progress | [UploadProgress](#openim-sdk-shared-UploadProgress) |  |  |






<a name="openim-sdk-shared-BusinessTips"></a>

### BusinessTips



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| data | [string](#string) |  |  |






<a name="openim-sdk-shared-CardElem"></a>

### CardElem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| userID | [string](#string) |  |  |
| nickname | [string](#string) |  |  |
| faceURL | [string](#string) |  |  |
| ex | [string](#string) |  |  |






<a name="openim-sdk-shared-CommandInfo"></a>

### CommandInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| userID | [string](#string) |  |  |
| type | [int32](#int32) |  |  |
| createTime | [int64](#int64) |  |  |
| uuid | [string](#string) |  |  |
| value | [string](#string) |  |  |
| ex | [string](#string) |  |  |






<a name="openim-sdk-shared-ConversationPrivateChatTips"></a>

### ConversationPrivateChatTips



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| recvID | [string](#string) |  |  |
| sendID | [string](#string) |  |  |
| isPrivate | [bool](#bool) |  |  |
| conversationID | [string](#string) |  |  |






<a name="openim-sdk-shared-CustomElem"></a>

### CustomElem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [string](#string) |  |  |
| description | [string](#string) |  |  |
| extension | [string](#string) |  |  |






<a name="openim-sdk-shared-FaceElem"></a>

### FaceElem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| index | [int32](#int32) |  |  |
| data | [string](#string) |  |  |






<a name="openim-sdk-shared-FileBaseInfo"></a>

### FileBaseInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| filePath | [string](#string) |  |  |
| uuid | [string](#string) |  |  |
| sourceURL | [string](#string) |  |  |
| fileName | [string](#string) |  |  |
| fileSize | [int64](#int64) |  |  |
| fileType | [string](#string) |  |  |






<a name="openim-sdk-shared-FileElem"></a>

### FileElem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| filePath | [string](#string) |  |  |
| uuid | [string](#string) |  |  |
| sourceURL | [string](#string) |  |  |
| fileName | [string](#string) |  |  |
| fileSize | [int64](#int64) |  |  |
| fileType | [string](#string) |  |  |






<a name="openim-sdk-shared-FriendApplicationApprovedTips"></a>

### FriendApplicationApprovedTips
FromUserID apply to add ToUserID<br>message FriendApplicationTips {<br> FromToUserID fromToUserID = 1;<br>}<br><br>FromUserID accept or reject ToUserID


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fromToUserID | [FromToUserID](#openim-sdk-shared-FromToUserID) |  |  |






<a name="openim-sdk-shared-FromToUserID"></a>

### FromToUserID
message GroupMemberInfoSetTips {<br> shared.IMGroup group = 1;<br> shared.IMGroupMember opUser = 2;<br> int64 operationTime = 3;<br> shared.IMGroupMember changedUser = 4;<br>}<br><br>////////////////////friend/////////////////////<br><br>message FriendApplication {<br> int64 addTime = 1;<br> string addSource = 2;<br> string addWording = 3;<br>}


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fromUserID | [string](#string) |  |  |
| toUserID | [string](#string) |  |  |






<a name="openim-sdk-shared-GroupCancelMutedTips"></a>

### GroupCancelMutedTips



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group | [IMGroup](#openim-sdk-shared-IMGroup) |  |  |
| opUser | [IMGroupMember](#openim-sdk-shared-IMGroupMember) |  |  |
| operationTime | [int64](#int64) |  |  |






<a name="openim-sdk-shared-GroupCreatedTips"></a>

### GroupCreatedTips
group/////////////////////<br><br>	OnGroupCreated()


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group | [IMGroup](#openim-sdk-shared-IMGroup) |  |  |
| opUser | [IMGroupMember](#openim-sdk-shared-IMGroupMember) |  |  |
| memberList | [IMGroupMember](#openim-sdk-shared-IMGroupMember) | repeated |  |
| operationTime | [int64](#int64) |  |  |
| groupOwnerUser | [IMGroupMember](#openim-sdk-shared-IMGroupMember) |  |  |






<a name="openim-sdk-shared-GroupDismissedTips"></a>

### GroupDismissedTips



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group | [IMGroup](#openim-sdk-shared-IMGroup) |  |  |
| opUser | [IMGroupMember](#openim-sdk-shared-IMGroupMember) |  |  |
| operationTime | [int64](#int64) |  |  |






<a name="openim-sdk-shared-GroupHasReadInfo"></a>

### GroupHasReadInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hasReadUserIDList | [string](#string) | repeated |  |
| hasReadCount | [int32](#int32) |  |  |
| groupMemberCount | [int32](#int32) |  |  |






<a name="openim-sdk-shared-GroupMemberCancelMutedTips"></a>

### GroupMemberCancelMutedTips



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group | [IMGroup](#openim-sdk-shared-IMGroup) |  |  |
| opUser | [IMGroupMember](#openim-sdk-shared-IMGroupMember) |  |  |
| operationTime | [int64](#int64) |  |  |
| mutedUser | [IMGroupMember](#openim-sdk-shared-IMGroupMember) |  |  |






<a name="openim-sdk-shared-GroupMemberMutedTips"></a>

### GroupMemberMutedTips



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group | [IMGroup](#openim-sdk-shared-IMGroup) |  |  |
| opUser | [IMGroupMember](#openim-sdk-shared-IMGroupMember) |  |  |
| operationTime | [int64](#int64) |  |  |
| mutedUser | [IMGroupMember](#openim-sdk-shared-IMGroupMember) |  |  |
| mutedSeconds | [uint32](#uint32) |  |  |






<a name="openim-sdk-shared-GroupMutedTips"></a>

### GroupMutedTips



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group | [IMGroup](#openim-sdk-shared-IMGroup) |  |  |
| opUser | [IMGroupMember](#openim-sdk-shared-IMGroupMember) |  |  |
| operationTime | [int64](#int64) |  |  |






<a name="openim-sdk-shared-GroupOwnerTransferredTips"></a>

### GroupOwnerTransferredTips
OnApplicationGroupAccepted()<br>message GroupApplicationAcceptedTips {<br> shared.IMGroup group = 1;<br> shared.IMGroupMember opUser = 2;<br> string handleMsg = 4;<br> int32 receiverAs = 5; // admin(==1) or applicant(==0)<br>}<br><br>	OnApplicationGroupRejected()<br>message GroupApplicationRejectedTips {<br> shared.IMGroup group = 1;<br> shared.IMGroupMember opUser = 2;<br> string handleMsg = 4;<br> int32 receiverAs = 5; // admin(==1) or applicant(==0)<br>}<br><br>	OnTransferGroupOwner()


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group | [IMGroup](#openim-sdk-shared-IMGroup) |  |  |
| opUser | [IMGroupMember](#openim-sdk-shared-IMGroupMember) |  |  |
| newGroupOwner | [IMGroupMember](#openim-sdk-shared-IMGroupMember) |  |  |
| oldGroupOwner | [string](#string) |  |  |
| operationTime | [int64](#int64) |  |  |
| oldGroupOwnerInfo | [IMGroupMember](#openim-sdk-shared-IMGroupMember) |  |  |






<a name="openim-sdk-shared-IMBlack"></a>

### IMBlack



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ownerUserID | [string](#string) |  |  |
| blockUserID | [string](#string) |  |  |
| nickname | [string](#string) |  |  |
| faceURL | [string](#string) |  |  |
| createTime | [int64](#int64) |  |  |
| addSource | [int32](#int32) |  |  |
| operatorUserID | [string](#string) |  |  |
| ex | [string](#string) |  |  |
| attached | [string](#string) |  |  |






<a name="openim-sdk-shared-IMConversation"></a>

### IMConversation



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conversationID | [string](#string) |  |  |
| conversationType | [openim.sdk.common.SessionType](#openim-sdk-common-SessionType) |  |  |
| userID | [string](#string) |  |  |
| groupID | [string](#string) |  |  |
| showName | [string](#string) |  |  |
| faceURL | [string](#string) |  |  |
| recvMsgOpt | [openim.sdk.common.ConvRecvMsgOpt](#openim-sdk-common-ConvRecvMsgOpt) |  |  |
| unreadCount | [int32](#int32) |  |  |
| groupAtType | [openim.sdk.common.ConvGroupAtType](#openim-sdk-common-ConvGroupAtType) |  |  |
| latestMsg | [IMMessage](#openim-sdk-shared-IMMessage) |  |  |
| latestMsgSendTime | [int64](#int64) |  |  |
| draftText | [string](#string) |  |  |
| draftTextTime | [int64](#int64) |  |  |
| isPinned | [bool](#bool) |  |  |
| isPrivateChat | [bool](#bool) |  |  |
| burnDuration | [int32](#int32) |  |  |
| ex | [string](#string) |  |  |
| msgDestructTime | [int64](#int64) |  |  |
| isMsgDestruct | [bool](#bool) |  |  |






<a name="openim-sdk-shared-IMFriend"></a>

### IMFriend



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ownerUserID | [string](#string) |  |  |
| friendUserID | [string](#string) |  |  |
| remark | [string](#string) |  |  |
| createTime | [int64](#int64) |  |  |
| addSource | [int32](#int32) |  |  |
| operatorUserID | [string](#string) |  |  |
| nickname | [string](#string) |  |  |
| faceURL | [string](#string) |  |  |
| ex | [string](#string) |  |  |
| attachedInfo | [string](#string) |  |  |
| isPinned | [bool](#bool) |  |  |






<a name="openim-sdk-shared-IMFriendRequest"></a>

### IMFriendRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fromUserID | [string](#string) |  |  |
| fromNickname | [string](#string) |  |  |
| fromFaceURL | [string](#string) |  |  |
| toUserID | [string](#string) |  |  |
| toNickname | [string](#string) |  |  |
| toFaceURL | [string](#string) |  |  |
| handleResult | [int32](#int32) |  |  |
| reqMsg | [string](#string) |  |  |
| createTime | [int64](#int64) |  |  |
| handlerUserID | [string](#string) |  |  |
| handleMsg | [string](#string) |  |  |
| handleTime | [int64](#int64) |  |  |
| ex | [string](#string) |  |  |
| attached | [string](#string) |  |  |






<a name="openim-sdk-shared-IMGroup"></a>

### IMGroup



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupID | [string](#string) |  | group id, no need to specify when creating |
| groupName | [string](#string) |  | group name |
| notification | [string](#string) |  | group notification |
| introduction | [string](#string) |  | group introduction |
| faceURL | [string](#string) |  | group face url |
| ownerUserID | [string](#string) |  | group owner user id |
| createTime | [int64](#int64) |  | group creation time |
| memberCount | [int64](#int64) |  | group member count |
| ex | [string](#string) |  | extension field |
| status | [GroupStatus](#openim-sdk-shared-GroupStatus) |  | group status |
| creatorUserID | [string](#string) |  | group creator user id |
| needVerification | [GroupNeedVerification](#openim-sdk-shared-GroupNeedVerification) |  | whether to verify the group |
| lookMemberInfo | [GroupLookMemberInfo](#openim-sdk-shared-GroupLookMemberInfo) |  | whether to view the group member information |
| applyMemberFriend | [GroupApplyMemberFriend](#openim-sdk-shared-GroupApplyMemberFriend) |  | whether to allow group members to add friends |
| notificationUpdateTime | [int64](#int64) |  | notification update time |
| notificationUserID | [string](#string) |  | notification update user id |
| attachedInfo | [string](#string) |  | group attached info |






<a name="openim-sdk-shared-IMGroupMember"></a>

### IMGroupMember



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupID | [string](#string) |  |  |
| userID | [string](#string) |  |  |
| nickname | [string](#string) |  |  |
| faceURL | [string](#string) |  |  |
| roleLevel | [int32](#int32) |  |  |
| joinTime | [int64](#int64) |  |  |
| joinSource | [GroupJoinSource](#openim-sdk-shared-GroupJoinSource) |  |  |
| inviterUserID | [string](#string) |  |  |
| muteEndTime | [int64](#int64) |  |  |
| operatorUserID | [string](#string) |  |  |
| ex | [string](#string) |  |  |
| attachedInfo | [string](#string) |  |  |






<a name="openim-sdk-shared-IMGroupRequest"></a>

### IMGroupRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| groupID | [string](#string) |  |  |
| groupName | [string](#string) |  |  |
| notification | [string](#string) |  |  |
| introduction | [string](#string) |  |  |
| groupFaceURL | [string](#string) |  |  |
| createTime | [int64](#int64) |  |  |
| status | [int32](#int32) |  |  |
| creatorUserID | [string](#string) |  |  |
| ownerUserID | [string](#string) |  |  |
| memberCount | [int32](#int32) |  |  |
| userID | [string](#string) |  |  |
| nickname | [string](#string) |  |  |
| userFaceURL | [string](#string) |  |  |
| handleResult | [int32](#int32) |  |  |
| reqMsg | [string](#string) |  |  |
| handledMsg | [string](#string) |  |  |
| reqTime | [int64](#int64) |  |  |
| handleUserID | [string](#string) |  |  |
| handledTime | [int64](#int64) |  |  |
| ex | [string](#string) |  |  |
| attachedInfo | [string](#string) |  |  |
| joinSource | [GroupJoinSource](#openim-sdk-shared-GroupJoinSource) |  |  |
| inviterUserID | [string](#string) |  |  |






<a name="openim-sdk-shared-IMMessage"></a>

### IMMessage



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| clientMsgID | [string](#string) |  |  |
| serverMsgID | [string](#string) |  |  |
| createTime | [int64](#int64) |  |  |
| sendTime | [int64](#int64) |  |  |
| sessionType | [openim.sdk.common.SessionType](#openim-sdk-common-SessionType) |  |  |
| sendID | [string](#string) |  |  |
| recvID | [string](#string) |  |  |
| msgFrom | [openim.sdk.common.MsgFrom](#openim-sdk-common-MsgFrom) |  |  |
| contentType | [openim.sdk.common.ContentType](#openim-sdk-common-ContentType) |  |  |
| senderPlatformID | [openim.sdk.common.Platform](#openim-sdk-common-Platform) |  |  |
| senderNickname | [string](#string) |  |  |
| senderFaceURL | [string](#string) |  |  |
| groupID | [string](#string) |  |  |
| seq | [int64](#int64) |  |  |
| isRead | [bool](#bool) |  |  |
| status | [openim.sdk.common.MsgStatus](#openim-sdk-common-MsgStatus) |  |  |
| offlinePush | [openim.sdk.common.OfflinePushInfo](#openim-sdk-common-OfflinePushInfo) |  |  |
| ex | [string](#string) |  |  |
| localEx | [string](#string) |  |  |
| attachedInfoElem | [AttachedInfoElem](#openim-sdk-shared-AttachedInfoElem) |  |  |
| textElem | [TextElem](#openim-sdk-shared-TextElem) |  |  |
| cardElem | [CardElem](#openim-sdk-shared-CardElem) |  |  |
| pictureElem | [PictureElem](#openim-sdk-shared-PictureElem) |  |  |
| soundElem | [SoundElem](#openim-sdk-shared-SoundElem) |  |  |
| videoElem | [VideoElem](#openim-sdk-shared-VideoElem) |  |  |
| fileElem | [FileElem](#openim-sdk-shared-FileElem) |  |  |
| mergeElem | [MergeElem](#openim-sdk-shared-MergeElem) |  |  |
| atTextElem | [AtTextElem](#openim-sdk-shared-AtTextElem) |  |  |
| faceElem | [FaceElem](#openim-sdk-shared-FaceElem) |  |  |
| locationElem | [LocationElem](#openim-sdk-shared-LocationElem) |  |  |
| customElem | [CustomElem](#openim-sdk-shared-CustomElem) |  |  |
| quoteElem | [QuoteElem](#openim-sdk-shared-QuoteElem) |  |  |
| advancedTextElem | [AdvancedTextElem](#openim-sdk-shared-AdvancedTextElem) |  |  |
| typingElem | [TypingElem](#openim-sdk-shared-TypingElem) |  |  |
| streamElem | [StreamElem](#openim-sdk-shared-StreamElem) |  |  |
| revokedTips | [RevokedTips](#openim-sdk-shared-RevokedTips) |  |  |
| groupCreatedTips | [GroupCreatedTips](#openim-sdk-shared-GroupCreatedTips) |  |  |
| memberQuitTips | [MemberQuitTips](#openim-sdk-shared-MemberQuitTips) |  | GroupInfoSetTips groupInfoSetTips = 39;<br>   GroupInfoSetNameTips groupInfoSetNameTips = 40;<br>   GroupInfoSetAnnouncementTips groupInfoSetAnnouncementTips = 41;<br>   JoinGroupApplicationTips joinGroupApplicationTips = 42; |
| groupOwnerTransferredTips | [GroupOwnerTransferredTips](#openim-sdk-shared-GroupOwnerTransferredTips) |  | GroupApplicationAcceptedTips groupApplicationAcceptedTips = 44;<br>   GroupApplicationRejectedTips groupApplicationRejectedTips = 45; |
| memberKickedTips | [MemberKickedTips](#openim-sdk-shared-MemberKickedTips) |  |  |
| memberInvitedTips | [MemberInvitedTips](#openim-sdk-shared-MemberInvitedTips) |  |  |
| memberEnterTips | [MemberEnterTips](#openim-sdk-shared-MemberEnterTips) |  |  |
| groupDismissedTips | [GroupDismissedTips](#openim-sdk-shared-GroupDismissedTips) |  |  |
| groupMemberMutedTips | [GroupMemberMutedTips](#openim-sdk-shared-GroupMemberMutedTips) |  |  |
| groupMemberCancelMutedTips | [GroupMemberCancelMutedTips](#openim-sdk-shared-GroupMemberCancelMutedTips) |  |  |
| groupMutedTips | [GroupMutedTips](#openim-sdk-shared-GroupMutedTips) |  |  |
| groupCancelMutedTips | [GroupCancelMutedTips](#openim-sdk-shared-GroupCancelMutedTips) |  |  |
| friendApplicationApprovedTips | [FriendApplicationApprovedTips](#openim-sdk-shared-FriendApplicationApprovedTips) |  | GroupMemberInfoSetTips groupMemberInfoSetTips = 55;<br>   FriendApplicationTips friendApplicationTips = 56; |
| conversationPrivateChatTips | [ConversationPrivateChatTips](#openim-sdk-shared-ConversationPrivateChatTips) |  | FriendApplicationRejectedTips friendApplicationRejectedTips = 58;<br>   FriendAddedTips friendAddedTips = 59;<br>   FriendDeletedTips friendDeletedTips = 60;<br>   BlackAddedTips blackAddedTips = 61;<br>   BlackDeletedTips blackDeletedTips = 62;<br>   FriendInfoChangedTips friendInfoChangedTips = 63;<br>   UserInfoUpdatedTips userInfoUpdatedTips = 64;<br>   UserStatusChangeTips userStatusChangeTips = 65;<br>   UserCommandAddTips userCommandAddTips = 66;<br>   UserCommandUpdateTips userCommandUpdateTips = 67;<br>   UserCommandDeleteTips userCommandDeleteTips = 68;<br>   ConversationUpdateTips conversationUpdateTips = 69;<br>   ConversationSetPrivateTips conversationSetPrivateTips = 70;<br>   ConversationHasReadTips conversationHasReadTips = 71;<br>   DeleteMessageTips deleteMessageTips = 72;<br>   RevokedTips revokedTips = 73;<br>   ClearConversationTips clearConversationTips = 74;<br>   DeleteMsgsTips deleteMsgsTips = 75;<br>   MarkAsReadTips markAsReadTips = 76;<br>   FriendsInfoUpdateTips friendsInfoUpdateTips = 77;<br>   SubUserOnlineStatusTips subUserOnlineStatusTips = 78;<br>   StreamMsgTips streamMsgTips = 79; |
| businessTips | [BusinessTips](#openim-sdk-shared-BusinessTips) |  |  |






<a name="openim-sdk-shared-IMUser"></a>

### IMUser
IM User information


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| userID | [string](#string) |  |  |
| nickname | [string](#string) |  |  |
| faceURL | [string](#string) |  |  |
| ex | [string](#string) |  |  |
| createTime | [int64](#int64) |  |  |
| globalRecvMsgOpt | [openim.sdk.common.GlobalRecvMsgOpt](#openim-sdk-common-GlobalRecvMsgOpt) |  | Global message recv option |
| attached | [string](#string) |  |  |






<a name="openim-sdk-shared-ImageInfo"></a>

### ImageInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| width | [int32](#int32) |  |  |
| height | [int32](#int32) |  |  |
| type | [string](#string) |  |  |
| size | [int64](#int64) |  |  |






<a name="openim-sdk-shared-LocationElem"></a>

### LocationElem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| description | [string](#string) |  |  |
| longitude | [double](#double) |  |  |
| latitude | [double](#double) |  |  |






<a name="openim-sdk-shared-MemberEnterTips"></a>

### MemberEnterTips
Actively join the group


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group | [IMGroup](#openim-sdk-shared-IMGroup) |  |  |
| entrantUser | [IMGroupMember](#openim-sdk-shared-IMGroupMember) |  |  |
| operationTime | [int64](#int64) |  |  |






<a name="openim-sdk-shared-MemberInvitedTips"></a>

### MemberInvitedTips
OnMemberInvited()


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group | [IMGroup](#openim-sdk-shared-IMGroup) |  |  |
| opUser | [IMGroupMember](#openim-sdk-shared-IMGroupMember) |  |  |
| invitedUserList | [IMGroupMember](#openim-sdk-shared-IMGroupMember) | repeated |  |
| operationTime | [int64](#int64) |  |  |
| inviterUser | [IMGroupMember](#openim-sdk-shared-IMGroupMember) |  |  |






<a name="openim-sdk-shared-MemberKickedTips"></a>

### MemberKickedTips
OnMemberKicked()


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group | [IMGroup](#openim-sdk-shared-IMGroup) |  |  |
| opUser | [IMGroupMember](#openim-sdk-shared-IMGroupMember) |  |  |
| kickedUserList | [IMGroupMember](#openim-sdk-shared-IMGroupMember) | repeated |  |
| operationTime | [int64](#int64) |  |  |






<a name="openim-sdk-shared-MemberQuitTips"></a>

### MemberQuitTips
OnGroupInfoSet()<br>message GroupInfoSetTips {<br> shared.IMGroupMember opUser = 1; //who do this<br> int64 muteTime = 2;<br> shared.IMGroup group = 3;<br>}<br><br>message GroupInfoSetNameTips {<br> shared.IMGroupMember opUser = 1; //who do this<br> shared.IMGroup group = 2;<br>}<br><br>message GroupInfoSetAnnouncementTips {<br> shared.IMGroupMember opUser = 1; //who do this<br> shared.IMGroup group = 2;<br>}<br><br>	OnJoinGroupApplication()<br>message JoinGroupApplicationTips {<br> shared.IMGroup group = 1;<br> shared.IMUser applicant = 2;<br> string reqMsg = 3;<br>}<br><br>	OnQuitGroup()<br>Actively leave the group


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| group | [IMGroup](#openim-sdk-shared-IMGroup) |  |  |
| quitUser | [IMGroupMember](#openim-sdk-shared-IMGroupMember) |  |  |
| operationTime | [int64](#int64) |  |  |






<a name="openim-sdk-shared-MergeElem"></a>

### MergeElem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| abstractList | [string](#string) | repeated |  |
| multiMessage | [IMMessage](#openim-sdk-shared-IMMessage) | repeated |  |
| messageEntityList | [MessageEntity](#openim-sdk-shared-MessageEntity) | repeated |  |






<a name="openim-sdk-shared-MessageEntity"></a>

### MessageEntity



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [string](#string) |  |  |
| offset | [int32](#int32) |  |  |
| length | [int32](#int32) |  |  |
| url | [string](#string) |  |  |
| ex | [string](#string) |  |  |






<a name="openim-sdk-shared-PictureBaseInfo"></a>

### PictureBaseInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| uuid | [string](#string) |  |  |
| type | [string](#string) |  |  |
| size | [int64](#int64) |  |  |
| width | [int32](#int32) |  |  |
| height | [int32](#int32) |  |  |
| url | [string](#string) |  |  |






<a name="openim-sdk-shared-PictureElem"></a>

### PictureElem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sourcePath | [string](#string) |  |  |
| sourcePicture | [PictureBaseInfo](#openim-sdk-shared-PictureBaseInfo) |  |  |
| bigPicture | [PictureBaseInfo](#openim-sdk-shared-PictureBaseInfo) |  |  |
| snapshotPicture | [PictureBaseInfo](#openim-sdk-shared-PictureBaseInfo) |  |  |






<a name="openim-sdk-shared-QuoteElem"></a>

### QuoteElem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| text | [string](#string) |  |  |
| quoteMessage | [IMMessage](#openim-sdk-shared-IMMessage) |  |  |
| messageEntityList | [MessageEntity](#openim-sdk-shared-MessageEntity) | repeated |  |






<a name="openim-sdk-shared-RevokedTips"></a>

### RevokedTips



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| revokerID | [string](#string) |  |  |
| revokerRole | [int32](#int32) |  |  |
| clientMsgID | [string](#string) |  |  |
| revokerNickname | [string](#string) |  |  |
| revokeTime | [int64](#int64) |  |  |
| sourceMessageSendTime | [int64](#int64) |  |  |
| sourceMessageSendID | [string](#string) |  |  |
| sourceMessageSenderNickname | [string](#string) |  |  |
| sessionType | [int32](#int32) |  |  |
| seq | [int64](#int64) |  |  |
| ex | [string](#string) |  |  |






<a name="openim-sdk-shared-SoundBaseInfo"></a>

### SoundBaseInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| uuid | [string](#string) |  |  |
| soundPath | [string](#string) |  |  |
| sourceURL | [string](#string) |  |  |
| dataSize | [int64](#int64) |  |  |
| duration | [int64](#int64) |  |  |
| soundType | [string](#string) |  |  |






<a name="openim-sdk-shared-SoundElem"></a>

### SoundElem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| uuid | [string](#string) |  |  |
| soundPath | [string](#string) |  |  |
| sourceURL | [string](#string) |  |  |
| dataSize | [int64](#int64) |  |  |
| duration | [int64](#int64) |  |  |
| soundType | [string](#string) |  |  |






<a name="openim-sdk-shared-StreamElem"></a>

### StreamElem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [string](#string) |  |  |
| content | [string](#string) |  |  |
| packets | [string](#string) | repeated |  |
| end | [bool](#bool) |  |  |






<a name="openim-sdk-shared-TextElem"></a>

### TextElem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| content | [string](#string) |  |  |






<a name="openim-sdk-shared-TypingElem"></a>

### TypingElem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msgTips | [string](#string) |  |  |






<a name="openim-sdk-shared-UploadProgress"></a>

### UploadProgress



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| total | [int64](#int64) |  |  |
| save | [int64](#int64) |  |  |
| current | [int64](#int64) |  |  |
| uploadID | [string](#string) |  |  |






<a name="openim-sdk-shared-VideoBaseInfo"></a>

### VideoBaseInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| videoPath | [string](#string) |  |  |
| videoUUID | [string](#string) |  |  |
| videoURL | [string](#string) |  |  |
| videoType | [string](#string) |  |  |
| videoSize | [int64](#int64) |  |  |
| duration | [int64](#int64) |  |  |
| snapshotPath | [string](#string) |  |  |
| snapshotUUID | [string](#string) |  |  |
| snapshotSize | [int64](#int64) |  |  |
| snapshotURL | [string](#string) |  |  |
| snapshotWidth | [int32](#int32) |  |  |
| snapshotHeight | [int32](#int32) |  |  |
| snapshotType | [string](#string) |  |  |






<a name="openim-sdk-shared-VideoElem"></a>

### VideoElem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| videoPath | [string](#string) |  |  |
| videoUUID | [string](#string) |  |  |
| videoURL | [string](#string) |  |  |
| videoType | [string](#string) |  |  |
| videoSize | [int64](#int64) |  |  |
| duration | [int64](#int64) |  |  |
| snapshotPath | [string](#string) |  |  |
| snapshotUUID | [string](#string) |  |  |
| snapshotSize | [int64](#int64) |  |  |
| snapshotURL | [string](#string) |  |  |
| snapshotWidth | [int32](#int32) |  |  |
| snapshotHeight | [int32](#int32) |  |  |
| snapshotType | [string](#string) |  |  |





 


<a name="openim-sdk-shared-GroupApplyMemberFriend"></a>

### GroupApplyMemberFriend


| Name | Number | Description |
| ---- | ------ | ----------- |
| ProhibitGroupApplyMemberFriend | 0 | do not allow group members to add friends directly |
| AllowGroupApplyMemberFriend | 1 | allow group members to add friends directly |



<a name="openim-sdk-shared-GroupJoinSource"></a>

### GroupJoinSource


| Name | Number | Description |
| ---- | ------ | ----------- |
| _ | 0 |  |
| Admin | 1 | administrator invitation to join |
| Invitation | 2 | invite to join |
| Search | 3 | search to join |
| QRCode | 4 | scan code to join |



<a name="openim-sdk-shared-GroupLookMemberInfo"></a>

### GroupLookMemberInfo


| Name | Number | Description |
| ---- | ------ | ----------- |
| ProhibitGroupLookMemberInfo | 0 | do not allow access to member information via the group |
| AllowGroupLookMemberInfo | 1 | allow access to member information via the group |



<a name="openim-sdk-shared-GroupNeedVerification"></a>

### GroupNeedVerification


| Name | Number | Description |
| ---- | ------ | ----------- |
| ApplyNeedVerificationInviteDirectly | 0 | application requires consent, and invitation is direct entry. |
| AllNeedVerification | 1 | everyone entering the group needs to be verified, except for those invited by the group owner or administrator. |
| DirectAccess | 2 | direct access to group chat. |



<a name="openim-sdk-shared-GroupStatus"></a>

### GroupStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| Default | 0 | normal group chat |
| Dismissed | 2 | the group chat has been disbanded |


 

 

 



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

