// source: conversation.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var group_pb = require('./group_pb.js');
goog.object.extend(proto, group_pb);
var message_pb = require('./message_pb.js');
goog.object.extend(proto, message_pb);
var relation_pb = require('./relation_pb.js');
goog.object.extend(proto, relation_pb);
goog.exportSymbol('proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgResp', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.Conversation', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.ConversationArgs', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgResp', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.DeleteMessageFromLocalStorageResp', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnBlackAddedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnBlackDeletedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnConnectFailedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnConnectSuccessData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnConnectingData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnConversationChangedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnFriendAddedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnFriendApplicationAddedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnFriendDeletedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnFriendInfoChangedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnGroupApplicationAddedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnGroupDismissedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnGroupInfoChangedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnGroupMemberAddedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnGroupMemberDeletedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnJoinedGroupAddedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnKickedOfflineData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnMsgDeletedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnMsgEditedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnNewConversationData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnRecvNewMessageData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnSendMsgProgressData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnSyncServerFailedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnSyncServerFinishData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnSyncServerProgressData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnSyncServerStartData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnUploadFileProgressData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnUserCommandAddData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnUserCommandDeleteData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnUserCommandUpdateData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnUserStatusChangedData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnUserTokenExpiredData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.EventOnUserTokenInvalidData', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.FindMessageListCallback', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.FindMessageListReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.FindMessageListResp', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.FuncRequestEventName', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.GetAllConversationListReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.GetAllConversationListResp', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.GetAtAllTagReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.GetAtAllTagResp', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.GetConversationListSplitReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.GetConversationListSplitResp', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.GetMultipleConversationReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.GetMultipleConversationResp', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.GetOneConversationReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.GetOneConversationResp', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.GetTotalUnreadMsgCountReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.HideAllConversationsReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.HideAllConversationsResp', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.HideConversationReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.HideConversationResp', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.MarkAllConversationMessageAsReadReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.MarkAllConversationMessageAsReadResp', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.MarkConversationMessageAsReadReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.MarkConversationMessageAsReadResp', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.SearchByConversationResult', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.SearchConversationReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.SearchConversationResp', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.SearchLocalMessagesCallback', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.SearchLocalMessagesParams', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.SearchLocalMessagesReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.SearchLocalMessagesResp', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.SetConversationDraftReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.SetConversationDraftResp', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.SetConversationReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.SetConversationResp', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.SetMessageLocalExReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.SetMessageLocalExResp', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.Conversation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.Conversation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.Conversation.displayName = 'proto.openim.sdk.conversation.Conversation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.ConversationArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.conversation.ConversationArgs.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.conversation.ConversationArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.ConversationArgs.displayName = 'proto.openim.sdk.conversation.ConversationArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.FindMessageListCallback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.conversation.FindMessageListCallback.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.conversation.FindMessageListCallback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.FindMessageListCallback.displayName = 'proto.openim.sdk.conversation.FindMessageListCallback';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.conversation.SearchLocalMessagesParams.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.conversation.SearchLocalMessagesParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.SearchLocalMessagesParams.displayName = 'proto.openim.sdk.conversation.SearchLocalMessagesParams';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.SearchLocalMessagesCallback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.conversation.SearchLocalMessagesCallback.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.conversation.SearchLocalMessagesCallback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.SearchLocalMessagesCallback.displayName = 'proto.openim.sdk.conversation.SearchLocalMessagesCallback';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.SearchByConversationResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.conversation.SearchByConversationResult.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.conversation.SearchByConversationResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.SearchByConversationResult.displayName = 'proto.openim.sdk.conversation.SearchByConversationResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.GetAllConversationListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.GetAllConversationListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.GetAllConversationListReq.displayName = 'proto.openim.sdk.conversation.GetAllConversationListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.GetAllConversationListResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.conversation.GetAllConversationListResp.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.conversation.GetAllConversationListResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.GetAllConversationListResp.displayName = 'proto.openim.sdk.conversation.GetAllConversationListResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.GetConversationListSplitReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.GetConversationListSplitReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.GetConversationListSplitReq.displayName = 'proto.openim.sdk.conversation.GetConversationListSplitReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.GetConversationListSplitResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.conversation.GetConversationListSplitResp.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.conversation.GetConversationListSplitResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.GetConversationListSplitResp.displayName = 'proto.openim.sdk.conversation.GetConversationListSplitResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.HideConversationReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.HideConversationReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.HideConversationReq.displayName = 'proto.openim.sdk.conversation.HideConversationReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.HideConversationResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.HideConversationResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.HideConversationResp.displayName = 'proto.openim.sdk.conversation.HideConversationResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.GetAtAllTagReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.GetAtAllTagReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.GetAtAllTagReq.displayName = 'proto.openim.sdk.conversation.GetAtAllTagReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.GetAtAllTagResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.GetAtAllTagResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.GetAtAllTagResp.displayName = 'proto.openim.sdk.conversation.GetAtAllTagResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.GetOneConversationReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.GetOneConversationReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.GetOneConversationReq.displayName = 'proto.openim.sdk.conversation.GetOneConversationReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.GetOneConversationResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.GetOneConversationResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.GetOneConversationResp.displayName = 'proto.openim.sdk.conversation.GetOneConversationResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.GetMultipleConversationReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.conversation.GetMultipleConversationReq.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.conversation.GetMultipleConversationReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.GetMultipleConversationReq.displayName = 'proto.openim.sdk.conversation.GetMultipleConversationReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.GetMultipleConversationResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.conversation.GetMultipleConversationResp.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.conversation.GetMultipleConversationResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.GetMultipleConversationResp.displayName = 'proto.openim.sdk.conversation.GetMultipleConversationResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.HideAllConversationsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.HideAllConversationsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.HideAllConversationsReq.displayName = 'proto.openim.sdk.conversation.HideAllConversationsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.HideAllConversationsResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.HideAllConversationsResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.HideAllConversationsResp.displayName = 'proto.openim.sdk.conversation.HideAllConversationsResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.SetConversationDraftReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.SetConversationDraftReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.SetConversationDraftReq.displayName = 'proto.openim.sdk.conversation.SetConversationDraftReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.SetConversationDraftResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.SetConversationDraftResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.SetConversationDraftResp.displayName = 'proto.openim.sdk.conversation.SetConversationDraftResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.SetConversationReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.SetConversationReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.SetConversationReq.displayName = 'proto.openim.sdk.conversation.SetConversationReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.SetConversationResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.SetConversationResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.SetConversationResp.displayName = 'proto.openim.sdk.conversation.SetConversationResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.GetTotalUnreadMsgCountReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.GetTotalUnreadMsgCountReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.GetTotalUnreadMsgCountReq.displayName = 'proto.openim.sdk.conversation.GetTotalUnreadMsgCountReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp.displayName = 'proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq.displayName = 'proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp.displayName = 'proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.FindMessageListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.conversation.FindMessageListReq.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.conversation.FindMessageListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.FindMessageListReq.displayName = 'proto.openim.sdk.conversation.FindMessageListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.FindMessageListResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.conversation.FindMessageListResp.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.conversation.FindMessageListResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.FindMessageListResp.displayName = 'proto.openim.sdk.conversation.FindMessageListResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.MarkConversationMessageAsReadReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.MarkConversationMessageAsReadReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.MarkConversationMessageAsReadReq.displayName = 'proto.openim.sdk.conversation.MarkConversationMessageAsReadReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.MarkConversationMessageAsReadResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.MarkConversationMessageAsReadResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.MarkConversationMessageAsReadResp.displayName = 'proto.openim.sdk.conversation.MarkConversationMessageAsReadResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.MarkAllConversationMessageAsReadReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.MarkAllConversationMessageAsReadReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.MarkAllConversationMessageAsReadReq.displayName = 'proto.openim.sdk.conversation.MarkAllConversationMessageAsReadReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.MarkAllConversationMessageAsReadResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.MarkAllConversationMessageAsReadResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.MarkAllConversationMessageAsReadResp.displayName = 'proto.openim.sdk.conversation.MarkAllConversationMessageAsReadResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq.displayName = 'proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.DeleteMessageFromLocalStorageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.DeleteMessageFromLocalStorageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.DeleteMessageFromLocalStorageResp.displayName = 'proto.openim.sdk.conversation.DeleteMessageFromLocalStorageResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq.displayName = 'proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgResp.displayName = 'proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq.displayName = 'proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgResp.displayName = 'proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.SearchLocalMessagesReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.SearchLocalMessagesReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.SearchLocalMessagesReq.displayName = 'proto.openim.sdk.conversation.SearchLocalMessagesReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.SearchLocalMessagesResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.SearchLocalMessagesResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.SearchLocalMessagesResp.displayName = 'proto.openim.sdk.conversation.SearchLocalMessagesResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.SetMessageLocalExReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.SetMessageLocalExReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.SetMessageLocalExReq.displayName = 'proto.openim.sdk.conversation.SetMessageLocalExReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.SetMessageLocalExResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.SetMessageLocalExResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.SetMessageLocalExResp.displayName = 'proto.openim.sdk.conversation.SetMessageLocalExResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.SearchConversationReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.SearchConversationReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.SearchConversationReq.displayName = 'proto.openim.sdk.conversation.SearchConversationReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.SearchConversationResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.conversation.SearchConversationResp.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.conversation.SearchConversationResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.SearchConversationResp.displayName = 'proto.openim.sdk.conversation.SearchConversationResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnSendMsgProgressData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnSendMsgProgressData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnSendMsgProgressData.displayName = 'proto.openim.sdk.conversation.EventOnSendMsgProgressData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnUploadFileProgressData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnUploadFileProgressData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnUploadFileProgressData.displayName = 'proto.openim.sdk.conversation.EventOnUploadFileProgressData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData.displayName = 'proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnConnectingData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnConnectingData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnConnectingData.displayName = 'proto.openim.sdk.conversation.EventOnConnectingData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnConnectSuccessData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnConnectSuccessData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnConnectSuccessData.displayName = 'proto.openim.sdk.conversation.EventOnConnectSuccessData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnConnectFailedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnConnectFailedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnConnectFailedData.displayName = 'proto.openim.sdk.conversation.EventOnConnectFailedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnKickedOfflineData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnKickedOfflineData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnKickedOfflineData.displayName = 'proto.openim.sdk.conversation.EventOnKickedOfflineData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnUserTokenExpiredData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnUserTokenExpiredData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnUserTokenExpiredData.displayName = 'proto.openim.sdk.conversation.EventOnUserTokenExpiredData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnUserTokenInvalidData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnUserTokenInvalidData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnUserTokenInvalidData.displayName = 'proto.openim.sdk.conversation.EventOnUserTokenInvalidData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnSyncServerStartData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnSyncServerStartData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnSyncServerStartData.displayName = 'proto.openim.sdk.conversation.EventOnSyncServerStartData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnSyncServerFinishData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnSyncServerFinishData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnSyncServerFinishData.displayName = 'proto.openim.sdk.conversation.EventOnSyncServerFinishData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnSyncServerFailedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnSyncServerFailedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnSyncServerFailedData.displayName = 'proto.openim.sdk.conversation.EventOnSyncServerFailedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnSyncServerProgressData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnSyncServerProgressData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnSyncServerProgressData.displayName = 'proto.openim.sdk.conversation.EventOnSyncServerProgressData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnNewConversationData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnNewConversationData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnNewConversationData.displayName = 'proto.openim.sdk.conversation.EventOnNewConversationData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnConversationChangedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnConversationChangedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnConversationChangedData.displayName = 'proto.openim.sdk.conversation.EventOnConversationChangedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData.displayName = 'proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData.displayName = 'proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnRecvNewMessageData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnRecvNewMessageData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnRecvNewMessageData.displayName = 'proto.openim.sdk.conversation.EventOnRecvNewMessageData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData.displayName = 'proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData.displayName = 'proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData.displayName = 'proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnMsgDeletedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnMsgDeletedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnMsgDeletedData.displayName = 'proto.openim.sdk.conversation.EventOnMsgDeletedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData.displayName = 'proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnMsgEditedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnMsgEditedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnMsgEditedData.displayName = 'proto.openim.sdk.conversation.EventOnMsgEditedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnFriendApplicationAddedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnFriendApplicationAddedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnFriendApplicationAddedData.displayName = 'proto.openim.sdk.conversation.EventOnFriendApplicationAddedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData.displayName = 'proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData.displayName = 'proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData.displayName = 'proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnFriendAddedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnFriendAddedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnFriendAddedData.displayName = 'proto.openim.sdk.conversation.EventOnFriendAddedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnFriendDeletedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnFriendDeletedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnFriendDeletedData.displayName = 'proto.openim.sdk.conversation.EventOnFriendDeletedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnFriendInfoChangedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnFriendInfoChangedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnFriendInfoChangedData.displayName = 'proto.openim.sdk.conversation.EventOnFriendInfoChangedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnBlackAddedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnBlackAddedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnBlackAddedData.displayName = 'proto.openim.sdk.conversation.EventOnBlackAddedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnBlackDeletedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnBlackDeletedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnBlackDeletedData.displayName = 'proto.openim.sdk.conversation.EventOnBlackDeletedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnJoinedGroupAddedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnJoinedGroupAddedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnJoinedGroupAddedData.displayName = 'proto.openim.sdk.conversation.EventOnJoinedGroupAddedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData.displayName = 'proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnGroupMemberAddedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnGroupMemberAddedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnGroupMemberAddedData.displayName = 'proto.openim.sdk.conversation.EventOnGroupMemberAddedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnGroupMemberDeletedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnGroupMemberDeletedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnGroupMemberDeletedData.displayName = 'proto.openim.sdk.conversation.EventOnGroupMemberDeletedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnGroupApplicationAddedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnGroupApplicationAddedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnGroupApplicationAddedData.displayName = 'proto.openim.sdk.conversation.EventOnGroupApplicationAddedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData.displayName = 'proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnGroupInfoChangedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnGroupInfoChangedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnGroupInfoChangedData.displayName = 'proto.openim.sdk.conversation.EventOnGroupInfoChangedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnGroupDismissedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnGroupDismissedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnGroupDismissedData.displayName = 'proto.openim.sdk.conversation.EventOnGroupDismissedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData.displayName = 'proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData.displayName = 'proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData.displayName = 'proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData.displayName = 'proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData.displayName = 'proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnUserStatusChangedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.conversation.EventOnUserStatusChangedData.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnUserStatusChangedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnUserStatusChangedData.displayName = 'proto.openim.sdk.conversation.EventOnUserStatusChangedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnUserCommandAddData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnUserCommandAddData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnUserCommandAddData.displayName = 'proto.openim.sdk.conversation.EventOnUserCommandAddData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnUserCommandDeleteData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnUserCommandDeleteData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnUserCommandDeleteData.displayName = 'proto.openim.sdk.conversation.EventOnUserCommandDeleteData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.conversation.EventOnUserCommandUpdateData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.conversation.EventOnUserCommandUpdateData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.conversation.EventOnUserCommandUpdateData.displayName = 'proto.openim.sdk.conversation.EventOnUserCommandUpdateData';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.Conversation.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.Conversation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.Conversation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.Conversation.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationid: jspb.Message.getFieldWithDefault(msg, 1, ""),
conversationtype: jspb.Message.getFieldWithDefault(msg, 2, 0),
userid: jspb.Message.getFieldWithDefault(msg, 3, ""),
groupid: jspb.Message.getFieldWithDefault(msg, 4, ""),
showname: jspb.Message.getFieldWithDefault(msg, 5, ""),
faceurl: jspb.Message.getFieldWithDefault(msg, 6, ""),
recvmsgopt: jspb.Message.getFieldWithDefault(msg, 7, 0),
unreadcount: jspb.Message.getFieldWithDefault(msg, 8, 0),
groupattype: jspb.Message.getFieldWithDefault(msg, 9, 0),
latestmsg: jspb.Message.getFieldWithDefault(msg, 10, ""),
latestmsgsendtime: jspb.Message.getFieldWithDefault(msg, 11, 0),
drafttext: jspb.Message.getFieldWithDefault(msg, 12, ""),
drafttexttime: jspb.Message.getFieldWithDefault(msg, 13, 0),
ispinned: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
isprivatechat: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
burnduration: jspb.Message.getFieldWithDefault(msg, 16, 0),
ex: jspb.Message.getFieldWithDefault(msg, 17, ""),
msgdestructtime: jspb.Message.getFieldWithDefault(msg, 18, 0),
ismsgdestruct: jspb.Message.getBooleanFieldWithDefault(msg, 19, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.Conversation}
 */
proto.openim.sdk.conversation.Conversation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.Conversation;
  return proto.openim.sdk.conversation.Conversation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.Conversation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.Conversation}
 */
proto.openim.sdk.conversation.Conversation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setConversationtype(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setShowname(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFaceurl(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecvmsgopt(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUnreadcount(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGroupattype(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setLatestmsg(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLatestmsgsendtime(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setDrafttext(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDrafttexttime(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIspinned(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsprivatechat(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBurnduration(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setEx(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMsgdestructtime(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsmsgdestruct(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.Conversation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.Conversation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.Conversation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.Conversation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConversationtype();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getShowname();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFaceurl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRecvmsgopt();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getUnreadcount();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getGroupattype();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getLatestmsg();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getLatestmsgsendtime();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getDrafttext();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getDrafttexttime();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getIspinned();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getIsprivatechat();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getBurnduration();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = message.getEx();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getMsgdestructtime();
  if (f !== 0) {
    writer.writeInt64(
      18,
      f
    );
  }
  f = message.getIsmsgdestruct();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
};


/**
 * optional string conversationID = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.Conversation.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.Conversation} returns this
 */
proto.openim.sdk.conversation.Conversation.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 conversationType = 2;
 * @return {number}
 */
proto.openim.sdk.conversation.Conversation.prototype.getConversationtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.Conversation} returns this
 */
proto.openim.sdk.conversation.Conversation.prototype.setConversationtype = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string userID = 3;
 * @return {string}
 */
proto.openim.sdk.conversation.Conversation.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.Conversation} returns this
 */
proto.openim.sdk.conversation.Conversation.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string groupID = 4;
 * @return {string}
 */
proto.openim.sdk.conversation.Conversation.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.Conversation} returns this
 */
proto.openim.sdk.conversation.Conversation.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string showName = 5;
 * @return {string}
 */
proto.openim.sdk.conversation.Conversation.prototype.getShowname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.Conversation} returns this
 */
proto.openim.sdk.conversation.Conversation.prototype.setShowname = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string faceURL = 6;
 * @return {string}
 */
proto.openim.sdk.conversation.Conversation.prototype.getFaceurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.Conversation} returns this
 */
proto.openim.sdk.conversation.Conversation.prototype.setFaceurl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 recvMsgOpt = 7;
 * @return {number}
 */
proto.openim.sdk.conversation.Conversation.prototype.getRecvmsgopt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.Conversation} returns this
 */
proto.openim.sdk.conversation.Conversation.prototype.setRecvmsgopt = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 unreadCount = 8;
 * @return {number}
 */
proto.openim.sdk.conversation.Conversation.prototype.getUnreadcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.Conversation} returns this
 */
proto.openim.sdk.conversation.Conversation.prototype.setUnreadcount = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 groupAtType = 9;
 * @return {number}
 */
proto.openim.sdk.conversation.Conversation.prototype.getGroupattype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.Conversation} returns this
 */
proto.openim.sdk.conversation.Conversation.prototype.setGroupattype = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string latestMsg = 10;
 * @return {string}
 */
proto.openim.sdk.conversation.Conversation.prototype.getLatestmsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.Conversation} returns this
 */
proto.openim.sdk.conversation.Conversation.prototype.setLatestmsg = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int64 latestMsgSendTime = 11;
 * @return {number}
 */
proto.openim.sdk.conversation.Conversation.prototype.getLatestmsgsendtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.Conversation} returns this
 */
proto.openim.sdk.conversation.Conversation.prototype.setLatestmsgsendtime = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string draftText = 12;
 * @return {string}
 */
proto.openim.sdk.conversation.Conversation.prototype.getDrafttext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.Conversation} returns this
 */
proto.openim.sdk.conversation.Conversation.prototype.setDrafttext = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional int64 draftTextTime = 13;
 * @return {number}
 */
proto.openim.sdk.conversation.Conversation.prototype.getDrafttexttime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.Conversation} returns this
 */
proto.openim.sdk.conversation.Conversation.prototype.setDrafttexttime = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional bool isPinned = 14;
 * @return {boolean}
 */
proto.openim.sdk.conversation.Conversation.prototype.getIspinned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.conversation.Conversation} returns this
 */
proto.openim.sdk.conversation.Conversation.prototype.setIspinned = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional bool isPrivateChat = 15;
 * @return {boolean}
 */
proto.openim.sdk.conversation.Conversation.prototype.getIsprivatechat = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.conversation.Conversation} returns this
 */
proto.openim.sdk.conversation.Conversation.prototype.setIsprivatechat = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional int32 burnDuration = 16;
 * @return {number}
 */
proto.openim.sdk.conversation.Conversation.prototype.getBurnduration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.Conversation} returns this
 */
proto.openim.sdk.conversation.Conversation.prototype.setBurnduration = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional string ex = 17;
 * @return {string}
 */
proto.openim.sdk.conversation.Conversation.prototype.getEx = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.Conversation} returns this
 */
proto.openim.sdk.conversation.Conversation.prototype.setEx = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional int64 msgDestructTime = 18;
 * @return {number}
 */
proto.openim.sdk.conversation.Conversation.prototype.getMsgdestructtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.Conversation} returns this
 */
proto.openim.sdk.conversation.Conversation.prototype.setMsgdestructtime = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional bool isMsgDestruct = 19;
 * @return {boolean}
 */
proto.openim.sdk.conversation.Conversation.prototype.getIsmsgdestruct = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.conversation.Conversation} returns this
 */
proto.openim.sdk.conversation.Conversation.prototype.setIsmsgdestruct = function(value) {
  return jspb.Message.setProto3BooleanField(this, 19, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.conversation.ConversationArgs.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.ConversationArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.ConversationArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.ConversationArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.ConversationArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationid: jspb.Message.getFieldWithDefault(msg, 1, ""),
clientmsgidlistList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.ConversationArgs}
 */
proto.openim.sdk.conversation.ConversationArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.ConversationArgs;
  return proto.openim.sdk.conversation.ConversationArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.ConversationArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.ConversationArgs}
 */
proto.openim.sdk.conversation.ConversationArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addClientmsgidlist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.ConversationArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.ConversationArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.ConversationArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.ConversationArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientmsgidlistList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string conversationID = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.ConversationArgs.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.ConversationArgs} returns this
 */
proto.openim.sdk.conversation.ConversationArgs.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string clientMsgIDList = 2;
 * @return {!Array<string>}
 */
proto.openim.sdk.conversation.ConversationArgs.prototype.getClientmsgidlistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.conversation.ConversationArgs} returns this
 */
proto.openim.sdk.conversation.ConversationArgs.prototype.setClientmsgidlistList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.conversation.ConversationArgs} returns this
 */
proto.openim.sdk.conversation.ConversationArgs.prototype.addClientmsgidlist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.conversation.ConversationArgs} returns this
 */
proto.openim.sdk.conversation.ConversationArgs.prototype.clearClientmsgidlistList = function() {
  return this.setClientmsgidlistList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.conversation.FindMessageListCallback.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.FindMessageListCallback.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.FindMessageListCallback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.FindMessageListCallback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.FindMessageListCallback.toObject = function(includeInstance, msg) {
  var f, obj = {
totalcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
findresultitemsList: jspb.Message.toObjectList(msg.getFindresultitemsList(),
    proto.openim.sdk.conversation.SearchByConversationResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.FindMessageListCallback}
 */
proto.openim.sdk.conversation.FindMessageListCallback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.FindMessageListCallback;
  return proto.openim.sdk.conversation.FindMessageListCallback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.FindMessageListCallback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.FindMessageListCallback}
 */
proto.openim.sdk.conversation.FindMessageListCallback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalcount(value);
      break;
    case 2:
      var value = new proto.openim.sdk.conversation.SearchByConversationResult;
      reader.readMessage(value,proto.openim.sdk.conversation.SearchByConversationResult.deserializeBinaryFromReader);
      msg.addFindresultitems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.FindMessageListCallback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.FindMessageListCallback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.FindMessageListCallback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.FindMessageListCallback.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalcount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFindresultitemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.openim.sdk.conversation.SearchByConversationResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 totalCount = 1;
 * @return {number}
 */
proto.openim.sdk.conversation.FindMessageListCallback.prototype.getTotalcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.FindMessageListCallback} returns this
 */
proto.openim.sdk.conversation.FindMessageListCallback.prototype.setTotalcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated SearchByConversationResult findResultItems = 2;
 * @return {!Array<!proto.openim.sdk.conversation.SearchByConversationResult>}
 */
proto.openim.sdk.conversation.FindMessageListCallback.prototype.getFindresultitemsList = function() {
  return /** @type{!Array<!proto.openim.sdk.conversation.SearchByConversationResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.conversation.SearchByConversationResult, 2));
};


/**
 * @param {!Array<!proto.openim.sdk.conversation.SearchByConversationResult>} value
 * @return {!proto.openim.sdk.conversation.FindMessageListCallback} returns this
*/
proto.openim.sdk.conversation.FindMessageListCallback.prototype.setFindresultitemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.openim.sdk.conversation.SearchByConversationResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.conversation.SearchByConversationResult}
 */
proto.openim.sdk.conversation.FindMessageListCallback.prototype.addFindresultitems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.openim.sdk.conversation.SearchByConversationResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.conversation.FindMessageListCallback} returns this
 */
proto.openim.sdk.conversation.FindMessageListCallback.prototype.clearFindresultitemsList = function() {
  return this.setFindresultitemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.repeatedFields_ = [2,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.SearchLocalMessagesParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.SearchLocalMessagesParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationid: jspb.Message.getFieldWithDefault(msg, 1, ""),
keywordlistList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
keywordlistmatchtype: jspb.Message.getFieldWithDefault(msg, 3, 0),
senderuseridlistList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
messagetypelistList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
searchtimeposition: jspb.Message.getFieldWithDefault(msg, 6, 0),
searchtimeperiod: jspb.Message.getFieldWithDefault(msg, 7, 0),
pageindex: jspb.Message.getFieldWithDefault(msg, 8, 0),
count: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesParams}
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.SearchLocalMessagesParams;
  return proto.openim.sdk.conversation.SearchLocalMessagesParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.SearchLocalMessagesParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesParams}
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addKeywordlist(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setKeywordlistmatchtype(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addSenderuseridlist(value);
      break;
    case 5:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addMessagetypelist(values[i]);
      }
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSearchtimeposition(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSearchtimeperiod(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageindex(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.SearchLocalMessagesParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.SearchLocalMessagesParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKeywordlistList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getKeywordlistmatchtype();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getSenderuseridlistList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getMessagetypelistList();
  if (f.length > 0) {
    writer.writePackedInt32(
      5,
      f
    );
  }
  f = message.getSearchtimeposition();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getSearchtimeperiod();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getPageindex();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * optional string conversationID = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesParams} returns this
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string keywordList = 2;
 * @return {!Array<string>}
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.getKeywordlistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesParams} returns this
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.setKeywordlistList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesParams} returns this
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.addKeywordlist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesParams} returns this
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.clearKeywordlistList = function() {
  return this.setKeywordlistList([]);
};


/**
 * optional int32 keywordListMatchType = 3;
 * @return {number}
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.getKeywordlistmatchtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesParams} returns this
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.setKeywordlistmatchtype = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated string senderUserIDList = 4;
 * @return {!Array<string>}
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.getSenderuseridlistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesParams} returns this
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.setSenderuseridlistList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesParams} returns this
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.addSenderuseridlist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesParams} returns this
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.clearSenderuseridlistList = function() {
  return this.setSenderuseridlistList([]);
};


/**
 * repeated int32 messageTypeList = 5;
 * @return {!Array<number>}
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.getMessagetypelistList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesParams} returns this
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.setMessagetypelistList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesParams} returns this
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.addMessagetypelist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesParams} returns this
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.clearMessagetypelistList = function() {
  return this.setMessagetypelistList([]);
};


/**
 * optional int64 searchTimePosition = 6;
 * @return {number}
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.getSearchtimeposition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesParams} returns this
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.setSearchtimeposition = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 searchTimePeriod = 7;
 * @return {number}
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.getSearchtimeperiod = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesParams} returns this
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.setSearchtimeperiod = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 pageIndex = 8;
 * @return {number}
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.getPageindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesParams} returns this
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.setPageindex = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 count = 9;
 * @return {number}
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesParams} returns this
 */
proto.openim.sdk.conversation.SearchLocalMessagesParams.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.conversation.SearchLocalMessagesCallback.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.SearchLocalMessagesCallback.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.SearchLocalMessagesCallback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.SearchLocalMessagesCallback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SearchLocalMessagesCallback.toObject = function(includeInstance, msg) {
  var f, obj = {
totalcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
searchresultitemsList: jspb.Message.toObjectList(msg.getSearchresultitemsList(),
    proto.openim.sdk.conversation.SearchByConversationResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesCallback}
 */
proto.openim.sdk.conversation.SearchLocalMessagesCallback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.SearchLocalMessagesCallback;
  return proto.openim.sdk.conversation.SearchLocalMessagesCallback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.SearchLocalMessagesCallback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesCallback}
 */
proto.openim.sdk.conversation.SearchLocalMessagesCallback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalcount(value);
      break;
    case 2:
      var value = new proto.openim.sdk.conversation.SearchByConversationResult;
      reader.readMessage(value,proto.openim.sdk.conversation.SearchByConversationResult.deserializeBinaryFromReader);
      msg.addSearchresultitems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.SearchLocalMessagesCallback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.SearchLocalMessagesCallback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.SearchLocalMessagesCallback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SearchLocalMessagesCallback.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalcount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSearchresultitemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.openim.sdk.conversation.SearchByConversationResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 totalCount = 1;
 * @return {number}
 */
proto.openim.sdk.conversation.SearchLocalMessagesCallback.prototype.getTotalcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesCallback} returns this
 */
proto.openim.sdk.conversation.SearchLocalMessagesCallback.prototype.setTotalcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated SearchByConversationResult searchResultItems = 2;
 * @return {!Array<!proto.openim.sdk.conversation.SearchByConversationResult>}
 */
proto.openim.sdk.conversation.SearchLocalMessagesCallback.prototype.getSearchresultitemsList = function() {
  return /** @type{!Array<!proto.openim.sdk.conversation.SearchByConversationResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.conversation.SearchByConversationResult, 2));
};


/**
 * @param {!Array<!proto.openim.sdk.conversation.SearchByConversationResult>} value
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesCallback} returns this
*/
proto.openim.sdk.conversation.SearchLocalMessagesCallback.prototype.setSearchresultitemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.openim.sdk.conversation.SearchByConversationResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.conversation.SearchByConversationResult}
 */
proto.openim.sdk.conversation.SearchLocalMessagesCallback.prototype.addSearchresultitems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.openim.sdk.conversation.SearchByConversationResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesCallback} returns this
 */
proto.openim.sdk.conversation.SearchLocalMessagesCallback.prototype.clearSearchresultitemsList = function() {
  return this.setSearchresultitemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.conversation.SearchByConversationResult.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.SearchByConversationResult.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.SearchByConversationResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.SearchByConversationResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SearchByConversationResult.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationid: jspb.Message.getFieldWithDefault(msg, 1, ""),
conversationtype: jspb.Message.getFieldWithDefault(msg, 2, 0),
showname: jspb.Message.getFieldWithDefault(msg, 3, ""),
faceurl: jspb.Message.getFieldWithDefault(msg, 4, ""),
latestmsgsendtime: jspb.Message.getFieldWithDefault(msg, 5, 0),
messagecount: jspb.Message.getFieldWithDefault(msg, 6, 0),
messagelistList: jspb.Message.toObjectList(msg.getMessagelistList(),
    message_pb.IMMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.SearchByConversationResult}
 */
proto.openim.sdk.conversation.SearchByConversationResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.SearchByConversationResult;
  return proto.openim.sdk.conversation.SearchByConversationResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.SearchByConversationResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.SearchByConversationResult}
 */
proto.openim.sdk.conversation.SearchByConversationResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setConversationtype(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setShowname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFaceurl(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLatestmsgsendtime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMessagecount(value);
      break;
    case 7:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
      msg.addMessagelist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.SearchByConversationResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.SearchByConversationResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.SearchByConversationResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SearchByConversationResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConversationtype();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getShowname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFaceurl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLatestmsgsendtime();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getMessagecount();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getMessagelistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string conversationID = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.SearchByConversationResult.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.SearchByConversationResult} returns this
 */
proto.openim.sdk.conversation.SearchByConversationResult.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 conversationType = 2;
 * @return {number}
 */
proto.openim.sdk.conversation.SearchByConversationResult.prototype.getConversationtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.SearchByConversationResult} returns this
 */
proto.openim.sdk.conversation.SearchByConversationResult.prototype.setConversationtype = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string showName = 3;
 * @return {string}
 */
proto.openim.sdk.conversation.SearchByConversationResult.prototype.getShowname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.SearchByConversationResult} returns this
 */
proto.openim.sdk.conversation.SearchByConversationResult.prototype.setShowname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string faceURL = 4;
 * @return {string}
 */
proto.openim.sdk.conversation.SearchByConversationResult.prototype.getFaceurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.SearchByConversationResult} returns this
 */
proto.openim.sdk.conversation.SearchByConversationResult.prototype.setFaceurl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 latestMsgSendTime = 5;
 * @return {number}
 */
proto.openim.sdk.conversation.SearchByConversationResult.prototype.getLatestmsgsendtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.SearchByConversationResult} returns this
 */
proto.openim.sdk.conversation.SearchByConversationResult.prototype.setLatestmsgsendtime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 messageCount = 6;
 * @return {number}
 */
proto.openim.sdk.conversation.SearchByConversationResult.prototype.getMessagecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.SearchByConversationResult} returns this
 */
proto.openim.sdk.conversation.SearchByConversationResult.prototype.setMessagecount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated openim.sdk.message.IMMessage messageList = 7;
 * @return {!Array<!proto.openim.sdk.message.IMMessage>}
 */
proto.openim.sdk.conversation.SearchByConversationResult.prototype.getMessagelistList = function() {
  return /** @type{!Array<!proto.openim.sdk.message.IMMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, message_pb.IMMessage, 7));
};


/**
 * @param {!Array<!proto.openim.sdk.message.IMMessage>} value
 * @return {!proto.openim.sdk.conversation.SearchByConversationResult} returns this
*/
proto.openim.sdk.conversation.SearchByConversationResult.prototype.setMessagelistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.openim.sdk.message.IMMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.conversation.SearchByConversationResult.prototype.addMessagelist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.openim.sdk.message.IMMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.conversation.SearchByConversationResult} returns this
 */
proto.openim.sdk.conversation.SearchByConversationResult.prototype.clearMessagelistList = function() {
  return this.setMessagelistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.GetAllConversationListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.GetAllConversationListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.GetAllConversationListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetAllConversationListReq.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.GetAllConversationListReq}
 */
proto.openim.sdk.conversation.GetAllConversationListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.GetAllConversationListReq;
  return proto.openim.sdk.conversation.GetAllConversationListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.GetAllConversationListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.GetAllConversationListReq}
 */
proto.openim.sdk.conversation.GetAllConversationListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.GetAllConversationListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.GetAllConversationListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.GetAllConversationListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetAllConversationListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.conversation.GetAllConversationListResp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.GetAllConversationListResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.GetAllConversationListResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.GetAllConversationListResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetAllConversationListResp.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationlistList: jspb.Message.toObjectList(msg.getConversationlistList(),
    proto.openim.sdk.conversation.Conversation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.GetAllConversationListResp}
 */
proto.openim.sdk.conversation.GetAllConversationListResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.GetAllConversationListResp;
  return proto.openim.sdk.conversation.GetAllConversationListResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.GetAllConversationListResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.GetAllConversationListResp}
 */
proto.openim.sdk.conversation.GetAllConversationListResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.conversation.Conversation;
      reader.readMessage(value,proto.openim.sdk.conversation.Conversation.deserializeBinaryFromReader);
      msg.addConversationlist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.GetAllConversationListResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.GetAllConversationListResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.GetAllConversationListResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetAllConversationListResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openim.sdk.conversation.Conversation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Conversation conversationList = 1;
 * @return {!Array<!proto.openim.sdk.conversation.Conversation>}
 */
proto.openim.sdk.conversation.GetAllConversationListResp.prototype.getConversationlistList = function() {
  return /** @type{!Array<!proto.openim.sdk.conversation.Conversation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.conversation.Conversation, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.conversation.Conversation>} value
 * @return {!proto.openim.sdk.conversation.GetAllConversationListResp} returns this
*/
proto.openim.sdk.conversation.GetAllConversationListResp.prototype.setConversationlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.conversation.Conversation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.conversation.Conversation}
 */
proto.openim.sdk.conversation.GetAllConversationListResp.prototype.addConversationlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.conversation.Conversation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.conversation.GetAllConversationListResp} returns this
 */
proto.openim.sdk.conversation.GetAllConversationListResp.prototype.clearConversationlistList = function() {
  return this.setConversationlistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.GetConversationListSplitReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.GetConversationListSplitReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.GetConversationListSplitReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetConversationListSplitReq.toObject = function(includeInstance, msg) {
  var f, obj = {
offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
count: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.GetConversationListSplitReq}
 */
proto.openim.sdk.conversation.GetConversationListSplitReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.GetConversationListSplitReq;
  return proto.openim.sdk.conversation.GetConversationListSplitReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.GetConversationListSplitReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.GetConversationListSplitReq}
 */
proto.openim.sdk.conversation.GetConversationListSplitReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.GetConversationListSplitReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.GetConversationListSplitReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.GetConversationListSplitReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetConversationListSplitReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 offset = 1;
 * @return {number}
 */
proto.openim.sdk.conversation.GetConversationListSplitReq.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.GetConversationListSplitReq} returns this
 */
proto.openim.sdk.conversation.GetConversationListSplitReq.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 count = 2;
 * @return {number}
 */
proto.openim.sdk.conversation.GetConversationListSplitReq.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.GetConversationListSplitReq} returns this
 */
proto.openim.sdk.conversation.GetConversationListSplitReq.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.conversation.GetConversationListSplitResp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.GetConversationListSplitResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.GetConversationListSplitResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.GetConversationListSplitResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetConversationListSplitResp.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationlistList: jspb.Message.toObjectList(msg.getConversationlistList(),
    proto.openim.sdk.conversation.Conversation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.GetConversationListSplitResp}
 */
proto.openim.sdk.conversation.GetConversationListSplitResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.GetConversationListSplitResp;
  return proto.openim.sdk.conversation.GetConversationListSplitResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.GetConversationListSplitResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.GetConversationListSplitResp}
 */
proto.openim.sdk.conversation.GetConversationListSplitResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.conversation.Conversation;
      reader.readMessage(value,proto.openim.sdk.conversation.Conversation.deserializeBinaryFromReader);
      msg.addConversationlist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.GetConversationListSplitResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.GetConversationListSplitResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.GetConversationListSplitResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetConversationListSplitResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openim.sdk.conversation.Conversation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Conversation conversationList = 1;
 * @return {!Array<!proto.openim.sdk.conversation.Conversation>}
 */
proto.openim.sdk.conversation.GetConversationListSplitResp.prototype.getConversationlistList = function() {
  return /** @type{!Array<!proto.openim.sdk.conversation.Conversation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.conversation.Conversation, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.conversation.Conversation>} value
 * @return {!proto.openim.sdk.conversation.GetConversationListSplitResp} returns this
*/
proto.openim.sdk.conversation.GetConversationListSplitResp.prototype.setConversationlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.conversation.Conversation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.conversation.Conversation}
 */
proto.openim.sdk.conversation.GetConversationListSplitResp.prototype.addConversationlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.conversation.Conversation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.conversation.GetConversationListSplitResp} returns this
 */
proto.openim.sdk.conversation.GetConversationListSplitResp.prototype.clearConversationlistList = function() {
  return this.setConversationlistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.HideConversationReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.HideConversationReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.HideConversationReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.HideConversationReq.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.HideConversationReq}
 */
proto.openim.sdk.conversation.HideConversationReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.HideConversationReq;
  return proto.openim.sdk.conversation.HideConversationReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.HideConversationReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.HideConversationReq}
 */
proto.openim.sdk.conversation.HideConversationReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.HideConversationReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.HideConversationReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.HideConversationReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.HideConversationReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string conversationID = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.HideConversationReq.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.HideConversationReq} returns this
 */
proto.openim.sdk.conversation.HideConversationReq.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.HideConversationResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.HideConversationResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.HideConversationResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.HideConversationResp.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.HideConversationResp}
 */
proto.openim.sdk.conversation.HideConversationResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.HideConversationResp;
  return proto.openim.sdk.conversation.HideConversationResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.HideConversationResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.HideConversationResp}
 */
proto.openim.sdk.conversation.HideConversationResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.HideConversationResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.HideConversationResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.HideConversationResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.HideConversationResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.GetAtAllTagReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.GetAtAllTagReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.GetAtAllTagReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetAtAllTagReq.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.GetAtAllTagReq}
 */
proto.openim.sdk.conversation.GetAtAllTagReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.GetAtAllTagReq;
  return proto.openim.sdk.conversation.GetAtAllTagReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.GetAtAllTagReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.GetAtAllTagReq}
 */
proto.openim.sdk.conversation.GetAtAllTagReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.GetAtAllTagReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.GetAtAllTagReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.GetAtAllTagReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetAtAllTagReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.GetAtAllTagResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.GetAtAllTagResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.GetAtAllTagResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetAtAllTagResp.toObject = function(includeInstance, msg) {
  var f, obj = {
tag: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.GetAtAllTagResp}
 */
proto.openim.sdk.conversation.GetAtAllTagResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.GetAtAllTagResp;
  return proto.openim.sdk.conversation.GetAtAllTagResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.GetAtAllTagResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.GetAtAllTagResp}
 */
proto.openim.sdk.conversation.GetAtAllTagResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.GetAtAllTagResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.GetAtAllTagResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.GetAtAllTagResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetAtAllTagResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string tag = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.GetAtAllTagResp.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.GetAtAllTagResp} returns this
 */
proto.openim.sdk.conversation.GetAtAllTagResp.prototype.setTag = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.GetOneConversationReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.GetOneConversationReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.GetOneConversationReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetOneConversationReq.toObject = function(includeInstance, msg) {
  var f, obj = {
sessiontype: jspb.Message.getFieldWithDefault(msg, 1, 0),
sourceid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.GetOneConversationReq}
 */
proto.openim.sdk.conversation.GetOneConversationReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.GetOneConversationReq;
  return proto.openim.sdk.conversation.GetOneConversationReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.GetOneConversationReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.GetOneConversationReq}
 */
proto.openim.sdk.conversation.GetOneConversationReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSessiontype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.GetOneConversationReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.GetOneConversationReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.GetOneConversationReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetOneConversationReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessiontype();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSourceid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 sessionType = 1;
 * @return {number}
 */
proto.openim.sdk.conversation.GetOneConversationReq.prototype.getSessiontype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.GetOneConversationReq} returns this
 */
proto.openim.sdk.conversation.GetOneConversationReq.prototype.setSessiontype = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string sourceID = 2;
 * @return {string}
 */
proto.openim.sdk.conversation.GetOneConversationReq.prototype.getSourceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.GetOneConversationReq} returns this
 */
proto.openim.sdk.conversation.GetOneConversationReq.prototype.setSourceid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.GetOneConversationResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.GetOneConversationResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.GetOneConversationResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetOneConversationResp.toObject = function(includeInstance, msg) {
  var f, obj = {
conversation: (f = msg.getConversation()) && proto.openim.sdk.conversation.Conversation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.GetOneConversationResp}
 */
proto.openim.sdk.conversation.GetOneConversationResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.GetOneConversationResp;
  return proto.openim.sdk.conversation.GetOneConversationResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.GetOneConversationResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.GetOneConversationResp}
 */
proto.openim.sdk.conversation.GetOneConversationResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.conversation.Conversation;
      reader.readMessage(value,proto.openim.sdk.conversation.Conversation.deserializeBinaryFromReader);
      msg.setConversation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.GetOneConversationResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.GetOneConversationResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.GetOneConversationResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetOneConversationResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.conversation.Conversation.serializeBinaryToWriter
    );
  }
};


/**
 * optional Conversation conversation = 1;
 * @return {?proto.openim.sdk.conversation.Conversation}
 */
proto.openim.sdk.conversation.GetOneConversationResp.prototype.getConversation = function() {
  return /** @type{?proto.openim.sdk.conversation.Conversation} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.conversation.Conversation, 1));
};


/**
 * @param {?proto.openim.sdk.conversation.Conversation|undefined} value
 * @return {!proto.openim.sdk.conversation.GetOneConversationResp} returns this
*/
proto.openim.sdk.conversation.GetOneConversationResp.prototype.setConversation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.GetOneConversationResp} returns this
 */
proto.openim.sdk.conversation.GetOneConversationResp.prototype.clearConversation = function() {
  return this.setConversation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.GetOneConversationResp.prototype.hasConversation = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.conversation.GetMultipleConversationReq.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.GetMultipleConversationReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.GetMultipleConversationReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.GetMultipleConversationReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetMultipleConversationReq.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationidlistList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.GetMultipleConversationReq}
 */
proto.openim.sdk.conversation.GetMultipleConversationReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.GetMultipleConversationReq;
  return proto.openim.sdk.conversation.GetMultipleConversationReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.GetMultipleConversationReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.GetMultipleConversationReq}
 */
proto.openim.sdk.conversation.GetMultipleConversationReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addConversationidlist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.GetMultipleConversationReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.GetMultipleConversationReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.GetMultipleConversationReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetMultipleConversationReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationidlistList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string conversationIDList = 1;
 * @return {!Array<string>}
 */
proto.openim.sdk.conversation.GetMultipleConversationReq.prototype.getConversationidlistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.conversation.GetMultipleConversationReq} returns this
 */
proto.openim.sdk.conversation.GetMultipleConversationReq.prototype.setConversationidlistList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.conversation.GetMultipleConversationReq} returns this
 */
proto.openim.sdk.conversation.GetMultipleConversationReq.prototype.addConversationidlist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.conversation.GetMultipleConversationReq} returns this
 */
proto.openim.sdk.conversation.GetMultipleConversationReq.prototype.clearConversationidlistList = function() {
  return this.setConversationidlistList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.conversation.GetMultipleConversationResp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.GetMultipleConversationResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.GetMultipleConversationResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.GetMultipleConversationResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetMultipleConversationResp.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationlistList: jspb.Message.toObjectList(msg.getConversationlistList(),
    proto.openim.sdk.conversation.Conversation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.GetMultipleConversationResp}
 */
proto.openim.sdk.conversation.GetMultipleConversationResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.GetMultipleConversationResp;
  return proto.openim.sdk.conversation.GetMultipleConversationResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.GetMultipleConversationResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.GetMultipleConversationResp}
 */
proto.openim.sdk.conversation.GetMultipleConversationResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.conversation.Conversation;
      reader.readMessage(value,proto.openim.sdk.conversation.Conversation.deserializeBinaryFromReader);
      msg.addConversationlist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.GetMultipleConversationResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.GetMultipleConversationResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.GetMultipleConversationResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetMultipleConversationResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openim.sdk.conversation.Conversation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Conversation conversationList = 1;
 * @return {!Array<!proto.openim.sdk.conversation.Conversation>}
 */
proto.openim.sdk.conversation.GetMultipleConversationResp.prototype.getConversationlistList = function() {
  return /** @type{!Array<!proto.openim.sdk.conversation.Conversation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.conversation.Conversation, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.conversation.Conversation>} value
 * @return {!proto.openim.sdk.conversation.GetMultipleConversationResp} returns this
*/
proto.openim.sdk.conversation.GetMultipleConversationResp.prototype.setConversationlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.conversation.Conversation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.conversation.Conversation}
 */
proto.openim.sdk.conversation.GetMultipleConversationResp.prototype.addConversationlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.conversation.Conversation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.conversation.GetMultipleConversationResp} returns this
 */
proto.openim.sdk.conversation.GetMultipleConversationResp.prototype.clearConversationlistList = function() {
  return this.setConversationlistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.HideAllConversationsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.HideAllConversationsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.HideAllConversationsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.HideAllConversationsReq.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.HideAllConversationsReq}
 */
proto.openim.sdk.conversation.HideAllConversationsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.HideAllConversationsReq;
  return proto.openim.sdk.conversation.HideAllConversationsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.HideAllConversationsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.HideAllConversationsReq}
 */
proto.openim.sdk.conversation.HideAllConversationsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.HideAllConversationsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.HideAllConversationsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.HideAllConversationsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.HideAllConversationsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.HideAllConversationsResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.HideAllConversationsResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.HideAllConversationsResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.HideAllConversationsResp.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.HideAllConversationsResp}
 */
proto.openim.sdk.conversation.HideAllConversationsResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.HideAllConversationsResp;
  return proto.openim.sdk.conversation.HideAllConversationsResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.HideAllConversationsResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.HideAllConversationsResp}
 */
proto.openim.sdk.conversation.HideAllConversationsResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.HideAllConversationsResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.HideAllConversationsResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.HideAllConversationsResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.HideAllConversationsResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.SetConversationDraftReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.SetConversationDraftReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.SetConversationDraftReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SetConversationDraftReq.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationid: jspb.Message.getFieldWithDefault(msg, 1, ""),
drafttext: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.SetConversationDraftReq}
 */
proto.openim.sdk.conversation.SetConversationDraftReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.SetConversationDraftReq;
  return proto.openim.sdk.conversation.SetConversationDraftReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.SetConversationDraftReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.SetConversationDraftReq}
 */
proto.openim.sdk.conversation.SetConversationDraftReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDrafttext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.SetConversationDraftReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.SetConversationDraftReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.SetConversationDraftReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SetConversationDraftReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDrafttext();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string conversationID = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.SetConversationDraftReq.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.SetConversationDraftReq} returns this
 */
proto.openim.sdk.conversation.SetConversationDraftReq.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string draftText = 2;
 * @return {string}
 */
proto.openim.sdk.conversation.SetConversationDraftReq.prototype.getDrafttext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.SetConversationDraftReq} returns this
 */
proto.openim.sdk.conversation.SetConversationDraftReq.prototype.setDrafttext = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.SetConversationDraftResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.SetConversationDraftResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.SetConversationDraftResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SetConversationDraftResp.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.SetConversationDraftResp}
 */
proto.openim.sdk.conversation.SetConversationDraftResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.SetConversationDraftResp;
  return proto.openim.sdk.conversation.SetConversationDraftResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.SetConversationDraftResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.SetConversationDraftResp}
 */
proto.openim.sdk.conversation.SetConversationDraftResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.SetConversationDraftResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.SetConversationDraftResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.SetConversationDraftResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SetConversationDraftResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.SetConversationReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.SetConversationReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SetConversationReq.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationid: jspb.Message.getFieldWithDefault(msg, 1, ""),
conversation: (f = msg.getConversation()) && proto.openim.sdk.conversation.Conversation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.SetConversationReq}
 */
proto.openim.sdk.conversation.SetConversationReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.SetConversationReq;
  return proto.openim.sdk.conversation.SetConversationReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.SetConversationReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.SetConversationReq}
 */
proto.openim.sdk.conversation.SetConversationReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    case 2:
      var value = new proto.openim.sdk.conversation.Conversation;
      reader.readMessage(value,proto.openim.sdk.conversation.Conversation.deserializeBinaryFromReader);
      msg.setConversation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.SetConversationReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.SetConversationReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SetConversationReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConversation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openim.sdk.conversation.Conversation.serializeBinaryToWriter
    );
  }
};


/**
 * optional string conversationID = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.SetConversationReq} returns this
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Conversation conversation = 2;
 * @return {?proto.openim.sdk.conversation.Conversation}
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.getConversation = function() {
  return /** @type{?proto.openim.sdk.conversation.Conversation} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.conversation.Conversation, 2));
};


/**
 * @param {?proto.openim.sdk.conversation.Conversation|undefined} value
 * @return {!proto.openim.sdk.conversation.SetConversationReq} returns this
*/
proto.openim.sdk.conversation.SetConversationReq.prototype.setConversation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.SetConversationReq} returns this
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.clearConversation = function() {
  return this.setConversation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.hasConversation = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.SetConversationResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.SetConversationResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.SetConversationResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SetConversationResp.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.SetConversationResp}
 */
proto.openim.sdk.conversation.SetConversationResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.SetConversationResp;
  return proto.openim.sdk.conversation.SetConversationResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.SetConversationResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.SetConversationResp}
 */
proto.openim.sdk.conversation.SetConversationResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.SetConversationResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.SetConversationResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.SetConversationResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SetConversationResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.GetTotalUnreadMsgCountReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.GetTotalUnreadMsgCountReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.GetTotalUnreadMsgCountReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetTotalUnreadMsgCountReq.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.GetTotalUnreadMsgCountReq}
 */
proto.openim.sdk.conversation.GetTotalUnreadMsgCountReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.GetTotalUnreadMsgCountReq;
  return proto.openim.sdk.conversation.GetTotalUnreadMsgCountReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.GetTotalUnreadMsgCountReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.GetTotalUnreadMsgCountReq}
 */
proto.openim.sdk.conversation.GetTotalUnreadMsgCountReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.GetTotalUnreadMsgCountReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.GetTotalUnreadMsgCountReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.GetTotalUnreadMsgCountReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetTotalUnreadMsgCountReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp.toObject = function(includeInstance, msg) {
  var f, obj = {
totalunreadcount: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp}
 */
proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp;
  return proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp}
 */
proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalunreadcount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalunreadcount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 totalUnreadCount = 1;
 * @return {number}
 */
proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp.prototype.getTotalunreadcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp} returns this
 */
proto.openim.sdk.conversation.GetTotalUnreadMsgCountResp.prototype.setTotalunreadcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq.toObject = function(includeInstance, msg) {
  var f, obj = {
sourceid: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessiontype: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq}
 */
proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq;
  return proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq}
 */
proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSessiontype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourceid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessiontype();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string sourceID = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq.prototype.getSourceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq} returns this
 */
proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq.prototype.setSourceid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 sessionType = 2;
 * @return {number}
 */
proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq.prototype.getSessiontype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq} returns this
 */
proto.openim.sdk.conversation.GetConversationIDBySessionTypeReq.prototype.setSessiontype = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp}
 */
proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp;
  return proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp}
 */
proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string conversationID = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp} returns this
 */
proto.openim.sdk.conversation.GetConversationIDBySessionTypeResp.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.conversation.FindMessageListReq.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.FindMessageListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.FindMessageListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.FindMessageListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.FindMessageListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationsargsList: jspb.Message.toObjectList(msg.getConversationsargsList(),
    proto.openim.sdk.conversation.ConversationArgs.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.FindMessageListReq}
 */
proto.openim.sdk.conversation.FindMessageListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.FindMessageListReq;
  return proto.openim.sdk.conversation.FindMessageListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.FindMessageListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.FindMessageListReq}
 */
proto.openim.sdk.conversation.FindMessageListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.conversation.ConversationArgs;
      reader.readMessage(value,proto.openim.sdk.conversation.ConversationArgs.deserializeBinaryFromReader);
      msg.addConversationsargs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.FindMessageListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.FindMessageListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.FindMessageListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.FindMessageListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationsargsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openim.sdk.conversation.ConversationArgs.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ConversationArgs conversationsArgs = 1;
 * @return {!Array<!proto.openim.sdk.conversation.ConversationArgs>}
 */
proto.openim.sdk.conversation.FindMessageListReq.prototype.getConversationsargsList = function() {
  return /** @type{!Array<!proto.openim.sdk.conversation.ConversationArgs>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.conversation.ConversationArgs, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.conversation.ConversationArgs>} value
 * @return {!proto.openim.sdk.conversation.FindMessageListReq} returns this
*/
proto.openim.sdk.conversation.FindMessageListReq.prototype.setConversationsargsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.conversation.ConversationArgs=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.conversation.ConversationArgs}
 */
proto.openim.sdk.conversation.FindMessageListReq.prototype.addConversationsargs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.conversation.ConversationArgs, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.conversation.FindMessageListReq} returns this
 */
proto.openim.sdk.conversation.FindMessageListReq.prototype.clearConversationsargsList = function() {
  return this.setConversationsargsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.conversation.FindMessageListResp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.FindMessageListResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.FindMessageListResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.FindMessageListResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.FindMessageListResp.toObject = function(includeInstance, msg) {
  var f, obj = {
findresultitemsList: jspb.Message.toObjectList(msg.getFindresultitemsList(),
    proto.openim.sdk.conversation.SearchByConversationResult.toObject, includeInstance),
totalcount: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.FindMessageListResp}
 */
proto.openim.sdk.conversation.FindMessageListResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.FindMessageListResp;
  return proto.openim.sdk.conversation.FindMessageListResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.FindMessageListResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.FindMessageListResp}
 */
proto.openim.sdk.conversation.FindMessageListResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.conversation.SearchByConversationResult;
      reader.readMessage(value,proto.openim.sdk.conversation.SearchByConversationResult.deserializeBinaryFromReader);
      msg.addFindresultitems(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalcount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.FindMessageListResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.FindMessageListResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.FindMessageListResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.FindMessageListResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFindresultitemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openim.sdk.conversation.SearchByConversationResult.serializeBinaryToWriter
    );
  }
  f = message.getTotalcount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * repeated SearchByConversationResult findResultItems = 1;
 * @return {!Array<!proto.openim.sdk.conversation.SearchByConversationResult>}
 */
proto.openim.sdk.conversation.FindMessageListResp.prototype.getFindresultitemsList = function() {
  return /** @type{!Array<!proto.openim.sdk.conversation.SearchByConversationResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.conversation.SearchByConversationResult, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.conversation.SearchByConversationResult>} value
 * @return {!proto.openim.sdk.conversation.FindMessageListResp} returns this
*/
proto.openim.sdk.conversation.FindMessageListResp.prototype.setFindresultitemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.conversation.SearchByConversationResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.conversation.SearchByConversationResult}
 */
proto.openim.sdk.conversation.FindMessageListResp.prototype.addFindresultitems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.conversation.SearchByConversationResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.conversation.FindMessageListResp} returns this
 */
proto.openim.sdk.conversation.FindMessageListResp.prototype.clearFindresultitemsList = function() {
  return this.setFindresultitemsList([]);
};


/**
 * optional int32 totalCount = 2;
 * @return {number}
 */
proto.openim.sdk.conversation.FindMessageListResp.prototype.getTotalcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.FindMessageListResp} returns this
 */
proto.openim.sdk.conversation.FindMessageListResp.prototype.setTotalcount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.MarkConversationMessageAsReadReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.MarkConversationMessageAsReadReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.MarkConversationMessageAsReadReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.MarkConversationMessageAsReadReq.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.MarkConversationMessageAsReadReq}
 */
proto.openim.sdk.conversation.MarkConversationMessageAsReadReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.MarkConversationMessageAsReadReq;
  return proto.openim.sdk.conversation.MarkConversationMessageAsReadReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.MarkConversationMessageAsReadReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.MarkConversationMessageAsReadReq}
 */
proto.openim.sdk.conversation.MarkConversationMessageAsReadReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.MarkConversationMessageAsReadReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.MarkConversationMessageAsReadReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.MarkConversationMessageAsReadReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.MarkConversationMessageAsReadReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string conversationID = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.MarkConversationMessageAsReadReq.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.MarkConversationMessageAsReadReq} returns this
 */
proto.openim.sdk.conversation.MarkConversationMessageAsReadReq.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.MarkConversationMessageAsReadResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.MarkConversationMessageAsReadResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.MarkConversationMessageAsReadResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.MarkConversationMessageAsReadResp.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.MarkConversationMessageAsReadResp}
 */
proto.openim.sdk.conversation.MarkConversationMessageAsReadResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.MarkConversationMessageAsReadResp;
  return proto.openim.sdk.conversation.MarkConversationMessageAsReadResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.MarkConversationMessageAsReadResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.MarkConversationMessageAsReadResp}
 */
proto.openim.sdk.conversation.MarkConversationMessageAsReadResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.MarkConversationMessageAsReadResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.MarkConversationMessageAsReadResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.MarkConversationMessageAsReadResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.MarkConversationMessageAsReadResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.MarkAllConversationMessageAsReadReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.MarkAllConversationMessageAsReadReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.MarkAllConversationMessageAsReadReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.MarkAllConversationMessageAsReadReq.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.MarkAllConversationMessageAsReadReq}
 */
proto.openim.sdk.conversation.MarkAllConversationMessageAsReadReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.MarkAllConversationMessageAsReadReq;
  return proto.openim.sdk.conversation.MarkAllConversationMessageAsReadReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.MarkAllConversationMessageAsReadReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.MarkAllConversationMessageAsReadReq}
 */
proto.openim.sdk.conversation.MarkAllConversationMessageAsReadReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.MarkAllConversationMessageAsReadReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.MarkAllConversationMessageAsReadReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.MarkAllConversationMessageAsReadReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.MarkAllConversationMessageAsReadReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.MarkAllConversationMessageAsReadResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.MarkAllConversationMessageAsReadResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.MarkAllConversationMessageAsReadResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.MarkAllConversationMessageAsReadResp.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.MarkAllConversationMessageAsReadResp}
 */
proto.openim.sdk.conversation.MarkAllConversationMessageAsReadResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.MarkAllConversationMessageAsReadResp;
  return proto.openim.sdk.conversation.MarkAllConversationMessageAsReadResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.MarkAllConversationMessageAsReadResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.MarkAllConversationMessageAsReadResp}
 */
proto.openim.sdk.conversation.MarkAllConversationMessageAsReadResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.MarkAllConversationMessageAsReadResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.MarkAllConversationMessageAsReadResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.MarkAllConversationMessageAsReadResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.MarkAllConversationMessageAsReadResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationid: jspb.Message.getFieldWithDefault(msg, 1, ""),
clientmsgid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq}
 */
proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq;
  return proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq}
 */
proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientmsgid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientmsgid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string conversationID = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq} returns this
 */
proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string clientMsgID = 2;
 * @return {string}
 */
proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq.prototype.getClientmsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq} returns this
 */
proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq.prototype.setClientmsgid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.DeleteMessageFromLocalStorageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.DeleteMessageFromLocalStorageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.DeleteMessageFromLocalStorageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.DeleteMessageFromLocalStorageResp.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.DeleteMessageFromLocalStorageResp}
 */
proto.openim.sdk.conversation.DeleteMessageFromLocalStorageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.DeleteMessageFromLocalStorageResp;
  return proto.openim.sdk.conversation.DeleteMessageFromLocalStorageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.DeleteMessageFromLocalStorageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.DeleteMessageFromLocalStorageResp}
 */
proto.openim.sdk.conversation.DeleteMessageFromLocalStorageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.DeleteMessageFromLocalStorageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.DeleteMessageFromLocalStorageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.DeleteMessageFromLocalStorageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.DeleteMessageFromLocalStorageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq}
 */
proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq;
  return proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq}
 */
proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string conversationID = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq} returns this
 */
proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgResp.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgResp}
 */
proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgResp;
  return proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgResp}
 */
proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq}
 */
proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq;
  return proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq}
 */
proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string conversationID = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq} returns this
 */
proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgResp.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgResp}
 */
proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgResp;
  return proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgResp}
 */
proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.SearchLocalMessagesReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.SearchLocalMessagesReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.SearchLocalMessagesReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SearchLocalMessagesReq.toObject = function(includeInstance, msg) {
  var f, obj = {
searchparam: (f = msg.getSearchparam()) && proto.openim.sdk.conversation.SearchLocalMessagesParams.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesReq}
 */
proto.openim.sdk.conversation.SearchLocalMessagesReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.SearchLocalMessagesReq;
  return proto.openim.sdk.conversation.SearchLocalMessagesReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.SearchLocalMessagesReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesReq}
 */
proto.openim.sdk.conversation.SearchLocalMessagesReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.conversation.SearchLocalMessagesParams;
      reader.readMessage(value,proto.openim.sdk.conversation.SearchLocalMessagesParams.deserializeBinaryFromReader);
      msg.setSearchparam(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.SearchLocalMessagesReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.SearchLocalMessagesReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.SearchLocalMessagesReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SearchLocalMessagesReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSearchparam();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.conversation.SearchLocalMessagesParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional SearchLocalMessagesParams searchParam = 1;
 * @return {?proto.openim.sdk.conversation.SearchLocalMessagesParams}
 */
proto.openim.sdk.conversation.SearchLocalMessagesReq.prototype.getSearchparam = function() {
  return /** @type{?proto.openim.sdk.conversation.SearchLocalMessagesParams} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.conversation.SearchLocalMessagesParams, 1));
};


/**
 * @param {?proto.openim.sdk.conversation.SearchLocalMessagesParams|undefined} value
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesReq} returns this
*/
proto.openim.sdk.conversation.SearchLocalMessagesReq.prototype.setSearchparam = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesReq} returns this
 */
proto.openim.sdk.conversation.SearchLocalMessagesReq.prototype.clearSearchparam = function() {
  return this.setSearchparam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.SearchLocalMessagesReq.prototype.hasSearchparam = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.SearchLocalMessagesResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.SearchLocalMessagesResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.SearchLocalMessagesResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SearchLocalMessagesResp.toObject = function(includeInstance, msg) {
  var f, obj = {
searchresult: (f = msg.getSearchresult()) && proto.openim.sdk.conversation.SearchLocalMessagesCallback.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesResp}
 */
proto.openim.sdk.conversation.SearchLocalMessagesResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.SearchLocalMessagesResp;
  return proto.openim.sdk.conversation.SearchLocalMessagesResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.SearchLocalMessagesResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesResp}
 */
proto.openim.sdk.conversation.SearchLocalMessagesResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.conversation.SearchLocalMessagesCallback;
      reader.readMessage(value,proto.openim.sdk.conversation.SearchLocalMessagesCallback.deserializeBinaryFromReader);
      msg.setSearchresult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.SearchLocalMessagesResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.SearchLocalMessagesResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.SearchLocalMessagesResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SearchLocalMessagesResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSearchresult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.conversation.SearchLocalMessagesCallback.serializeBinaryToWriter
    );
  }
};


/**
 * optional SearchLocalMessagesCallback searchResult = 1;
 * @return {?proto.openim.sdk.conversation.SearchLocalMessagesCallback}
 */
proto.openim.sdk.conversation.SearchLocalMessagesResp.prototype.getSearchresult = function() {
  return /** @type{?proto.openim.sdk.conversation.SearchLocalMessagesCallback} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.conversation.SearchLocalMessagesCallback, 1));
};


/**
 * @param {?proto.openim.sdk.conversation.SearchLocalMessagesCallback|undefined} value
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesResp} returns this
*/
proto.openim.sdk.conversation.SearchLocalMessagesResp.prototype.setSearchresult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.SearchLocalMessagesResp} returns this
 */
proto.openim.sdk.conversation.SearchLocalMessagesResp.prototype.clearSearchresult = function() {
  return this.setSearchresult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.SearchLocalMessagesResp.prototype.hasSearchresult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.SetMessageLocalExReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.SetMessageLocalExReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.SetMessageLocalExReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SetMessageLocalExReq.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationid: jspb.Message.getFieldWithDefault(msg, 1, ""),
clientmsgid: jspb.Message.getFieldWithDefault(msg, 2, ""),
localex: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.SetMessageLocalExReq}
 */
proto.openim.sdk.conversation.SetMessageLocalExReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.SetMessageLocalExReq;
  return proto.openim.sdk.conversation.SetMessageLocalExReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.SetMessageLocalExReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.SetMessageLocalExReq}
 */
proto.openim.sdk.conversation.SetMessageLocalExReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientmsgid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.SetMessageLocalExReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.SetMessageLocalExReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.SetMessageLocalExReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SetMessageLocalExReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientmsgid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLocalex();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string conversationID = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.SetMessageLocalExReq.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.SetMessageLocalExReq} returns this
 */
proto.openim.sdk.conversation.SetMessageLocalExReq.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string clientMsgID = 2;
 * @return {string}
 */
proto.openim.sdk.conversation.SetMessageLocalExReq.prototype.getClientmsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.SetMessageLocalExReq} returns this
 */
proto.openim.sdk.conversation.SetMessageLocalExReq.prototype.setClientmsgid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string localEx = 3;
 * @return {string}
 */
proto.openim.sdk.conversation.SetMessageLocalExReq.prototype.getLocalex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.SetMessageLocalExReq} returns this
 */
proto.openim.sdk.conversation.SetMessageLocalExReq.prototype.setLocalex = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.SetMessageLocalExResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.SetMessageLocalExResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.SetMessageLocalExResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SetMessageLocalExResp.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.SetMessageLocalExResp}
 */
proto.openim.sdk.conversation.SetMessageLocalExResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.SetMessageLocalExResp;
  return proto.openim.sdk.conversation.SetMessageLocalExResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.SetMessageLocalExResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.SetMessageLocalExResp}
 */
proto.openim.sdk.conversation.SetMessageLocalExResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.SetMessageLocalExResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.SetMessageLocalExResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.SetMessageLocalExResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SetMessageLocalExResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.openim.sdk.conversation.SetMessageLocalExResp.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.conversation.SetMessageLocalExResp} returns this
 */
proto.openim.sdk.conversation.SetMessageLocalExResp.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.SearchConversationReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.SearchConversationReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.SearchConversationReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SearchConversationReq.toObject = function(includeInstance, msg) {
  var f, obj = {
searchparam: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.SearchConversationReq}
 */
proto.openim.sdk.conversation.SearchConversationReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.SearchConversationReq;
  return proto.openim.sdk.conversation.SearchConversationReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.SearchConversationReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.SearchConversationReq}
 */
proto.openim.sdk.conversation.SearchConversationReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchparam(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.SearchConversationReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.SearchConversationReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.SearchConversationReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SearchConversationReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSearchparam();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string searchParam = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.SearchConversationReq.prototype.getSearchparam = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.SearchConversationReq} returns this
 */
proto.openim.sdk.conversation.SearchConversationReq.prototype.setSearchparam = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.conversation.SearchConversationResp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.SearchConversationResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.SearchConversationResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.SearchConversationResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SearchConversationResp.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationlistList: jspb.Message.toObjectList(msg.getConversationlistList(),
    proto.openim.sdk.conversation.Conversation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.SearchConversationResp}
 */
proto.openim.sdk.conversation.SearchConversationResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.SearchConversationResp;
  return proto.openim.sdk.conversation.SearchConversationResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.SearchConversationResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.SearchConversationResp}
 */
proto.openim.sdk.conversation.SearchConversationResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.conversation.Conversation;
      reader.readMessage(value,proto.openim.sdk.conversation.Conversation.deserializeBinaryFromReader);
      msg.addConversationlist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.SearchConversationResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.SearchConversationResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.SearchConversationResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.SearchConversationResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openim.sdk.conversation.Conversation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Conversation conversationList = 1;
 * @return {!Array<!proto.openim.sdk.conversation.Conversation>}
 */
proto.openim.sdk.conversation.SearchConversationResp.prototype.getConversationlistList = function() {
  return /** @type{!Array<!proto.openim.sdk.conversation.Conversation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.conversation.Conversation, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.conversation.Conversation>} value
 * @return {!proto.openim.sdk.conversation.SearchConversationResp} returns this
*/
proto.openim.sdk.conversation.SearchConversationResp.prototype.setConversationlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.conversation.Conversation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.conversation.Conversation}
 */
proto.openim.sdk.conversation.SearchConversationResp.prototype.addConversationlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.conversation.Conversation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.conversation.SearchConversationResp} returns this
 */
proto.openim.sdk.conversation.SearchConversationResp.prototype.clearConversationlistList = function() {
  return this.setConversationlistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnSendMsgProgressData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnSendMsgProgressData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnSendMsgProgressData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnSendMsgProgressData.toObject = function(includeInstance, msg) {
  var f, obj = {
progress: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnSendMsgProgressData}
 */
proto.openim.sdk.conversation.EventOnSendMsgProgressData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnSendMsgProgressData;
  return proto.openim.sdk.conversation.EventOnSendMsgProgressData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnSendMsgProgressData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnSendMsgProgressData}
 */
proto.openim.sdk.conversation.EventOnSendMsgProgressData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProgress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnSendMsgProgressData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnSendMsgProgressData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnSendMsgProgressData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnSendMsgProgressData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProgress();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 progress = 1;
 * @return {number}
 */
proto.openim.sdk.conversation.EventOnSendMsgProgressData.prototype.getProgress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.EventOnSendMsgProgressData} returns this
 */
proto.openim.sdk.conversation.EventOnSendMsgProgressData.prototype.setProgress = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnUploadFileProgressData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnUploadFileProgressData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnUploadFileProgressData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnUploadFileProgressData.toObject = function(includeInstance, msg) {
  var f, obj = {
progress: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnUploadFileProgressData}
 */
proto.openim.sdk.conversation.EventOnUploadFileProgressData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnUploadFileProgressData;
  return proto.openim.sdk.conversation.EventOnUploadFileProgressData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnUploadFileProgressData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnUploadFileProgressData}
 */
proto.openim.sdk.conversation.EventOnUploadFileProgressData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProgress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnUploadFileProgressData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnUploadFileProgressData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnUploadFileProgressData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnUploadFileProgressData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProgress();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 progress = 1;
 * @return {number}
 */
proto.openim.sdk.conversation.EventOnUploadFileProgressData.prototype.getProgress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.EventOnUploadFileProgressData} returns this
 */
proto.openim.sdk.conversation.EventOnUploadFileProgressData.prototype.setProgress = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData.toObject = function(includeInstance, msg) {
  var f, obj = {
progress: jspb.Message.getFieldWithDefault(msg, 1, 0),
total: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData}
 */
proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData;
  return proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData}
 */
proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setProgress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProgress();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 progress = 1;
 * @return {number}
 */
proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData.prototype.getProgress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData} returns this
 */
proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData.prototype.setProgress = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData} returns this
 */
proto.openim.sdk.conversation.EventEventOnUploadLogsProgressData.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnConnectingData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnConnectingData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnConnectingData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnConnectingData.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnConnectingData}
 */
proto.openim.sdk.conversation.EventOnConnectingData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnConnectingData;
  return proto.openim.sdk.conversation.EventOnConnectingData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnConnectingData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnConnectingData}
 */
proto.openim.sdk.conversation.EventOnConnectingData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnConnectingData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnConnectingData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnConnectingData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnConnectingData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnConnectSuccessData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnConnectSuccessData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnConnectSuccessData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnConnectSuccessData.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnConnectSuccessData}
 */
proto.openim.sdk.conversation.EventOnConnectSuccessData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnConnectSuccessData;
  return proto.openim.sdk.conversation.EventOnConnectSuccessData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnConnectSuccessData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnConnectSuccessData}
 */
proto.openim.sdk.conversation.EventOnConnectSuccessData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnConnectSuccessData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnConnectSuccessData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnConnectSuccessData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnConnectSuccessData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnConnectFailedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnConnectFailedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnConnectFailedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnConnectFailedData.toObject = function(includeInstance, msg) {
  var f, obj = {
errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
errmsg: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnConnectFailedData}
 */
proto.openim.sdk.conversation.EventOnConnectFailedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnConnectFailedData;
  return proto.openim.sdk.conversation.EventOnConnectFailedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnConnectFailedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnConnectFailedData}
 */
proto.openim.sdk.conversation.EventOnConnectFailedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrmsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnConnectFailedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnConnectFailedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnConnectFailedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnConnectFailedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getErrmsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.openim.sdk.conversation.EventOnConnectFailedData.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.EventOnConnectFailedData} returns this
 */
proto.openim.sdk.conversation.EventOnConnectFailedData.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string errMsg = 2;
 * @return {string}
 */
proto.openim.sdk.conversation.EventOnConnectFailedData.prototype.getErrmsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.EventOnConnectFailedData} returns this
 */
proto.openim.sdk.conversation.EventOnConnectFailedData.prototype.setErrmsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnKickedOfflineData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnKickedOfflineData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnKickedOfflineData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnKickedOfflineData.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnKickedOfflineData}
 */
proto.openim.sdk.conversation.EventOnKickedOfflineData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnKickedOfflineData;
  return proto.openim.sdk.conversation.EventOnKickedOfflineData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnKickedOfflineData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnKickedOfflineData}
 */
proto.openim.sdk.conversation.EventOnKickedOfflineData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnKickedOfflineData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnKickedOfflineData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnKickedOfflineData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnKickedOfflineData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnUserTokenExpiredData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnUserTokenExpiredData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnUserTokenExpiredData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnUserTokenExpiredData.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnUserTokenExpiredData}
 */
proto.openim.sdk.conversation.EventOnUserTokenExpiredData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnUserTokenExpiredData;
  return proto.openim.sdk.conversation.EventOnUserTokenExpiredData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnUserTokenExpiredData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnUserTokenExpiredData}
 */
proto.openim.sdk.conversation.EventOnUserTokenExpiredData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnUserTokenExpiredData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnUserTokenExpiredData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnUserTokenExpiredData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnUserTokenExpiredData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnUserTokenInvalidData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnUserTokenInvalidData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnUserTokenInvalidData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnUserTokenInvalidData.toObject = function(includeInstance, msg) {
  var f, obj = {
errmsg: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnUserTokenInvalidData}
 */
proto.openim.sdk.conversation.EventOnUserTokenInvalidData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnUserTokenInvalidData;
  return proto.openim.sdk.conversation.EventOnUserTokenInvalidData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnUserTokenInvalidData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnUserTokenInvalidData}
 */
proto.openim.sdk.conversation.EventOnUserTokenInvalidData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrmsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnUserTokenInvalidData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnUserTokenInvalidData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnUserTokenInvalidData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnUserTokenInvalidData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrmsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string errMsg = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.EventOnUserTokenInvalidData.prototype.getErrmsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.EventOnUserTokenInvalidData} returns this
 */
proto.openim.sdk.conversation.EventOnUserTokenInvalidData.prototype.setErrmsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnSyncServerStartData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnSyncServerStartData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnSyncServerStartData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnSyncServerStartData.toObject = function(includeInstance, msg) {
  var f, obj = {
reinstalled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnSyncServerStartData}
 */
proto.openim.sdk.conversation.EventOnSyncServerStartData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnSyncServerStartData;
  return proto.openim.sdk.conversation.EventOnSyncServerStartData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnSyncServerStartData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnSyncServerStartData}
 */
proto.openim.sdk.conversation.EventOnSyncServerStartData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReinstalled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnSyncServerStartData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnSyncServerStartData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnSyncServerStartData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnSyncServerStartData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReinstalled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool reinstalled = 1;
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnSyncServerStartData.prototype.getReinstalled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.conversation.EventOnSyncServerStartData} returns this
 */
proto.openim.sdk.conversation.EventOnSyncServerStartData.prototype.setReinstalled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnSyncServerFinishData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnSyncServerFinishData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnSyncServerFinishData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnSyncServerFinishData.toObject = function(includeInstance, msg) {
  var f, obj = {
reinstalled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnSyncServerFinishData}
 */
proto.openim.sdk.conversation.EventOnSyncServerFinishData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnSyncServerFinishData;
  return proto.openim.sdk.conversation.EventOnSyncServerFinishData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnSyncServerFinishData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnSyncServerFinishData}
 */
proto.openim.sdk.conversation.EventOnSyncServerFinishData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReinstalled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnSyncServerFinishData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnSyncServerFinishData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnSyncServerFinishData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnSyncServerFinishData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReinstalled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool reinstalled = 1;
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnSyncServerFinishData.prototype.getReinstalled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.conversation.EventOnSyncServerFinishData} returns this
 */
proto.openim.sdk.conversation.EventOnSyncServerFinishData.prototype.setReinstalled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnSyncServerFailedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnSyncServerFailedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnSyncServerFailedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnSyncServerFailedData.toObject = function(includeInstance, msg) {
  var f, obj = {
reinstalled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnSyncServerFailedData}
 */
proto.openim.sdk.conversation.EventOnSyncServerFailedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnSyncServerFailedData;
  return proto.openim.sdk.conversation.EventOnSyncServerFailedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnSyncServerFailedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnSyncServerFailedData}
 */
proto.openim.sdk.conversation.EventOnSyncServerFailedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReinstalled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnSyncServerFailedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnSyncServerFailedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnSyncServerFailedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnSyncServerFailedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReinstalled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool reinstalled = 1;
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnSyncServerFailedData.prototype.getReinstalled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.conversation.EventOnSyncServerFailedData} returns this
 */
proto.openim.sdk.conversation.EventOnSyncServerFailedData.prototype.setReinstalled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnSyncServerProgressData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnSyncServerProgressData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnSyncServerProgressData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnSyncServerProgressData.toObject = function(includeInstance, msg) {
  var f, obj = {
progress: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnSyncServerProgressData}
 */
proto.openim.sdk.conversation.EventOnSyncServerProgressData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnSyncServerProgressData;
  return proto.openim.sdk.conversation.EventOnSyncServerProgressData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnSyncServerProgressData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnSyncServerProgressData}
 */
proto.openim.sdk.conversation.EventOnSyncServerProgressData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProgress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnSyncServerProgressData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnSyncServerProgressData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnSyncServerProgressData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnSyncServerProgressData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProgress();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 progress = 1;
 * @return {number}
 */
proto.openim.sdk.conversation.EventOnSyncServerProgressData.prototype.getProgress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.EventOnSyncServerProgressData} returns this
 */
proto.openim.sdk.conversation.EventOnSyncServerProgressData.prototype.setProgress = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnNewConversationData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnNewConversationData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnNewConversationData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnNewConversationData.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationlist: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnNewConversationData}
 */
proto.openim.sdk.conversation.EventOnNewConversationData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnNewConversationData;
  return proto.openim.sdk.conversation.EventOnNewConversationData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnNewConversationData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnNewConversationData}
 */
proto.openim.sdk.conversation.EventOnNewConversationData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationlist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnNewConversationData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnNewConversationData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnNewConversationData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnNewConversationData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationlist();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string conversationList = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.EventOnNewConversationData.prototype.getConversationlist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.EventOnNewConversationData} returns this
 */
proto.openim.sdk.conversation.EventOnNewConversationData.prototype.setConversationlist = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnConversationChangedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnConversationChangedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnConversationChangedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnConversationChangedData.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationlist: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnConversationChangedData}
 */
proto.openim.sdk.conversation.EventOnConversationChangedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnConversationChangedData;
  return proto.openim.sdk.conversation.EventOnConversationChangedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnConversationChangedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnConversationChangedData}
 */
proto.openim.sdk.conversation.EventOnConversationChangedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationlist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnConversationChangedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnConversationChangedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnConversationChangedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnConversationChangedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationlist();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string conversationList = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.EventOnConversationChangedData.prototype.getConversationlist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.EventOnConversationChangedData} returns this
 */
proto.openim.sdk.conversation.EventOnConversationChangedData.prototype.setConversationlist = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData.toObject = function(includeInstance, msg) {
  var f, obj = {
totalunreadcount: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData}
 */
proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData;
  return proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData}
 */
proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalunreadcount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalunreadcount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 totalUnreadCount = 1;
 * @return {number}
 */
proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData.prototype.getTotalunreadcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData} returns this
 */
proto.openim.sdk.conversation.EventOnTotalUnreadMessageCountChangedData.prototype.setTotalunreadcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData.toObject = function(includeInstance, msg) {
  var f, obj = {
change: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData}
 */
proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData;
  return proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData}
 */
proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChange();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string change = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData.prototype.getChange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData} returns this
 */
proto.openim.sdk.conversation.EventOnConversationUserInputStatusChangedData.prototype.setChange = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnRecvNewMessageData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnRecvNewMessageData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnRecvNewMessageData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnRecvNewMessageData.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationid: jspb.Message.getFieldWithDefault(msg, 1, ""),
message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnRecvNewMessageData}
 */
proto.openim.sdk.conversation.EventOnRecvNewMessageData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnRecvNewMessageData;
  return proto.openim.sdk.conversation.EventOnRecvNewMessageData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnRecvNewMessageData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnRecvNewMessageData}
 */
proto.openim.sdk.conversation.EventOnRecvNewMessageData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnRecvNewMessageData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnRecvNewMessageData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnRecvNewMessageData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnRecvNewMessageData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string conversationID = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.EventOnRecvNewMessageData.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.EventOnRecvNewMessageData} returns this
 */
proto.openim.sdk.conversation.EventOnRecvNewMessageData.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.openim.sdk.conversation.EventOnRecvNewMessageData.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.EventOnRecvNewMessageData} returns this
 */
proto.openim.sdk.conversation.EventOnRecvNewMessageData.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData.toObject = function(includeInstance, msg) {
  var f, obj = {
msgreceiptlist: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData}
 */
proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData;
  return proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData}
 */
proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgreceiptlist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsgreceiptlist();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string msgReceiptList = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData.prototype.getMsgreceiptlist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData} returns this
 */
proto.openim.sdk.conversation.EventOnRecvC2CReadReceiptData.prototype.setMsgreceiptlist = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData.toObject = function(includeInstance, msg) {
  var f, obj = {
messagerevoked: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData}
 */
proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData;
  return proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData}
 */
proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagerevoked(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagerevoked();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string messageRevoked = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData.prototype.getMessagerevoked = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData} returns this
 */
proto.openim.sdk.conversation.EventOnNewRecvMessageRevokedData.prototype.setMessagerevoked = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData.toObject = function(includeInstance, msg) {
  var f, obj = {
message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData}
 */
proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData;
  return proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData}
 */
proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData} returns this
 */
proto.openim.sdk.conversation.EventOnRecvOfflineNewMessageData.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnMsgDeletedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnMsgDeletedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnMsgDeletedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnMsgDeletedData.toObject = function(includeInstance, msg) {
  var f, obj = {
message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnMsgDeletedData}
 */
proto.openim.sdk.conversation.EventOnMsgDeletedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnMsgDeletedData;
  return proto.openim.sdk.conversation.EventOnMsgDeletedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnMsgDeletedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnMsgDeletedData}
 */
proto.openim.sdk.conversation.EventOnMsgDeletedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnMsgDeletedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnMsgDeletedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnMsgDeletedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnMsgDeletedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.EventOnMsgDeletedData.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.EventOnMsgDeletedData} returns this
 */
proto.openim.sdk.conversation.EventOnMsgDeletedData.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationid: jspb.Message.getFieldWithDefault(msg, 1, ""),
message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData}
 */
proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData;
  return proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData}
 */
proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string conversationID = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData} returns this
 */
proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData} returns this
 */
proto.openim.sdk.conversation.EventOnRecvOnlineOnlyMessageData.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnMsgEditedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnMsgEditedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnMsgEditedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnMsgEditedData.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationid: jspb.Message.getFieldWithDefault(msg, 1, ""),
message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnMsgEditedData}
 */
proto.openim.sdk.conversation.EventOnMsgEditedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnMsgEditedData;
  return proto.openim.sdk.conversation.EventOnMsgEditedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnMsgEditedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnMsgEditedData}
 */
proto.openim.sdk.conversation.EventOnMsgEditedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnMsgEditedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnMsgEditedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnMsgEditedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnMsgEditedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string conversationID = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.EventOnMsgEditedData.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.EventOnMsgEditedData} returns this
 */
proto.openim.sdk.conversation.EventOnMsgEditedData.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.openim.sdk.conversation.EventOnMsgEditedData.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.EventOnMsgEditedData} returns this
 */
proto.openim.sdk.conversation.EventOnMsgEditedData.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationAddedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnFriendApplicationAddedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnFriendApplicationAddedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnFriendApplicationAddedData.toObject = function(includeInstance, msg) {
  var f, obj = {
request: (f = msg.getRequest()) && relation_pb.FriendRequestInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnFriendApplicationAddedData}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationAddedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnFriendApplicationAddedData;
  return proto.openim.sdk.conversation.EventOnFriendApplicationAddedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnFriendApplicationAddedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnFriendApplicationAddedData}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationAddedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new relation_pb.FriendRequestInfo;
      reader.readMessage(value,relation_pb.FriendRequestInfo.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationAddedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnFriendApplicationAddedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnFriendApplicationAddedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnFriendApplicationAddedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      relation_pb.FriendRequestInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.relation.FriendRequestInfo request = 1;
 * @return {?proto.openim.sdk.relation.FriendRequestInfo}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationAddedData.prototype.getRequest = function() {
  return /** @type{?proto.openim.sdk.relation.FriendRequestInfo} */ (
    jspb.Message.getWrapperField(this, relation_pb.FriendRequestInfo, 1));
};


/**
 * @param {?proto.openim.sdk.relation.FriendRequestInfo|undefined} value
 * @return {!proto.openim.sdk.conversation.EventOnFriendApplicationAddedData} returns this
*/
proto.openim.sdk.conversation.EventOnFriendApplicationAddedData.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.EventOnFriendApplicationAddedData} returns this
 */
proto.openim.sdk.conversation.EventOnFriendApplicationAddedData.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationAddedData.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData.toObject = function(includeInstance, msg) {
  var f, obj = {
request: (f = msg.getRequest()) && relation_pb.FriendRequestInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData;
  return proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new relation_pb.FriendRequestInfo;
      reader.readMessage(value,relation_pb.FriendRequestInfo.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      relation_pb.FriendRequestInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.relation.FriendRequestInfo request = 1;
 * @return {?proto.openim.sdk.relation.FriendRequestInfo}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData.prototype.getRequest = function() {
  return /** @type{?proto.openim.sdk.relation.FriendRequestInfo} */ (
    jspb.Message.getWrapperField(this, relation_pb.FriendRequestInfo, 1));
};


/**
 * @param {?proto.openim.sdk.relation.FriendRequestInfo|undefined} value
 * @return {!proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData} returns this
*/
proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData} returns this
 */
proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationDeletedData.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData.toObject = function(includeInstance, msg) {
  var f, obj = {
request: (f = msg.getRequest()) && relation_pb.FriendRequestInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData;
  return proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new relation_pb.FriendRequestInfo;
      reader.readMessage(value,relation_pb.FriendRequestInfo.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      relation_pb.FriendRequestInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.relation.FriendRequestInfo request = 1;
 * @return {?proto.openim.sdk.relation.FriendRequestInfo}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData.prototype.getRequest = function() {
  return /** @type{?proto.openim.sdk.relation.FriendRequestInfo} */ (
    jspb.Message.getWrapperField(this, relation_pb.FriendRequestInfo, 1));
};


/**
 * @param {?proto.openim.sdk.relation.FriendRequestInfo|undefined} value
 * @return {!proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData} returns this
*/
proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData} returns this
 */
proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationAcceptedData.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData.toObject = function(includeInstance, msg) {
  var f, obj = {
request: (f = msg.getRequest()) && relation_pb.FriendRequestInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData;
  return proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new relation_pb.FriendRequestInfo;
      reader.readMessage(value,relation_pb.FriendRequestInfo.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      relation_pb.FriendRequestInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.relation.FriendRequestInfo request = 1;
 * @return {?proto.openim.sdk.relation.FriendRequestInfo}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData.prototype.getRequest = function() {
  return /** @type{?proto.openim.sdk.relation.FriendRequestInfo} */ (
    jspb.Message.getWrapperField(this, relation_pb.FriendRequestInfo, 1));
};


/**
 * @param {?proto.openim.sdk.relation.FriendRequestInfo|undefined} value
 * @return {!proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData} returns this
*/
proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData} returns this
 */
proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnFriendApplicationRejectedData.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnFriendAddedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnFriendAddedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnFriendAddedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnFriendAddedData.toObject = function(includeInstance, msg) {
  var f, obj = {
friend: (f = msg.getFriend()) && relation_pb.FriendInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnFriendAddedData}
 */
proto.openim.sdk.conversation.EventOnFriendAddedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnFriendAddedData;
  return proto.openim.sdk.conversation.EventOnFriendAddedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnFriendAddedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnFriendAddedData}
 */
proto.openim.sdk.conversation.EventOnFriendAddedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new relation_pb.FriendInfo;
      reader.readMessage(value,relation_pb.FriendInfo.deserializeBinaryFromReader);
      msg.setFriend(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnFriendAddedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnFriendAddedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnFriendAddedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnFriendAddedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFriend();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      relation_pb.FriendInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.relation.FriendInfo friend = 1;
 * @return {?proto.openim.sdk.relation.FriendInfo}
 */
proto.openim.sdk.conversation.EventOnFriendAddedData.prototype.getFriend = function() {
  return /** @type{?proto.openim.sdk.relation.FriendInfo} */ (
    jspb.Message.getWrapperField(this, relation_pb.FriendInfo, 1));
};


/**
 * @param {?proto.openim.sdk.relation.FriendInfo|undefined} value
 * @return {!proto.openim.sdk.conversation.EventOnFriendAddedData} returns this
*/
proto.openim.sdk.conversation.EventOnFriendAddedData.prototype.setFriend = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.EventOnFriendAddedData} returns this
 */
proto.openim.sdk.conversation.EventOnFriendAddedData.prototype.clearFriend = function() {
  return this.setFriend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnFriendAddedData.prototype.hasFriend = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnFriendDeletedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnFriendDeletedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnFriendDeletedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnFriendDeletedData.toObject = function(includeInstance, msg) {
  var f, obj = {
friend: (f = msg.getFriend()) && relation_pb.FriendInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnFriendDeletedData}
 */
proto.openim.sdk.conversation.EventOnFriendDeletedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnFriendDeletedData;
  return proto.openim.sdk.conversation.EventOnFriendDeletedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnFriendDeletedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnFriendDeletedData}
 */
proto.openim.sdk.conversation.EventOnFriendDeletedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new relation_pb.FriendInfo;
      reader.readMessage(value,relation_pb.FriendInfo.deserializeBinaryFromReader);
      msg.setFriend(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnFriendDeletedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnFriendDeletedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnFriendDeletedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnFriendDeletedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFriend();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      relation_pb.FriendInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.relation.FriendInfo friend = 1;
 * @return {?proto.openim.sdk.relation.FriendInfo}
 */
proto.openim.sdk.conversation.EventOnFriendDeletedData.prototype.getFriend = function() {
  return /** @type{?proto.openim.sdk.relation.FriendInfo} */ (
    jspb.Message.getWrapperField(this, relation_pb.FriendInfo, 1));
};


/**
 * @param {?proto.openim.sdk.relation.FriendInfo|undefined} value
 * @return {!proto.openim.sdk.conversation.EventOnFriendDeletedData} returns this
*/
proto.openim.sdk.conversation.EventOnFriendDeletedData.prototype.setFriend = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.EventOnFriendDeletedData} returns this
 */
proto.openim.sdk.conversation.EventOnFriendDeletedData.prototype.clearFriend = function() {
  return this.setFriend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnFriendDeletedData.prototype.hasFriend = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnFriendInfoChangedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnFriendInfoChangedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnFriendInfoChangedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnFriendInfoChangedData.toObject = function(includeInstance, msg) {
  var f, obj = {
friend: (f = msg.getFriend()) && relation_pb.FriendInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnFriendInfoChangedData}
 */
proto.openim.sdk.conversation.EventOnFriendInfoChangedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnFriendInfoChangedData;
  return proto.openim.sdk.conversation.EventOnFriendInfoChangedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnFriendInfoChangedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnFriendInfoChangedData}
 */
proto.openim.sdk.conversation.EventOnFriendInfoChangedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new relation_pb.FriendInfo;
      reader.readMessage(value,relation_pb.FriendInfo.deserializeBinaryFromReader);
      msg.setFriend(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnFriendInfoChangedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnFriendInfoChangedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnFriendInfoChangedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnFriendInfoChangedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFriend();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      relation_pb.FriendInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.relation.FriendInfo friend = 1;
 * @return {?proto.openim.sdk.relation.FriendInfo}
 */
proto.openim.sdk.conversation.EventOnFriendInfoChangedData.prototype.getFriend = function() {
  return /** @type{?proto.openim.sdk.relation.FriendInfo} */ (
    jspb.Message.getWrapperField(this, relation_pb.FriendInfo, 1));
};


/**
 * @param {?proto.openim.sdk.relation.FriendInfo|undefined} value
 * @return {!proto.openim.sdk.conversation.EventOnFriendInfoChangedData} returns this
*/
proto.openim.sdk.conversation.EventOnFriendInfoChangedData.prototype.setFriend = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.EventOnFriendInfoChangedData} returns this
 */
proto.openim.sdk.conversation.EventOnFriendInfoChangedData.prototype.clearFriend = function() {
  return this.setFriend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnFriendInfoChangedData.prototype.hasFriend = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnBlackAddedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnBlackAddedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnBlackAddedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnBlackAddedData.toObject = function(includeInstance, msg) {
  var f, obj = {
black: (f = msg.getBlack()) && relation_pb.BlackInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnBlackAddedData}
 */
proto.openim.sdk.conversation.EventOnBlackAddedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnBlackAddedData;
  return proto.openim.sdk.conversation.EventOnBlackAddedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnBlackAddedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnBlackAddedData}
 */
proto.openim.sdk.conversation.EventOnBlackAddedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new relation_pb.BlackInfo;
      reader.readMessage(value,relation_pb.BlackInfo.deserializeBinaryFromReader);
      msg.setBlack(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnBlackAddedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnBlackAddedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnBlackAddedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnBlackAddedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlack();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      relation_pb.BlackInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.relation.BlackInfo black = 1;
 * @return {?proto.openim.sdk.relation.BlackInfo}
 */
proto.openim.sdk.conversation.EventOnBlackAddedData.prototype.getBlack = function() {
  return /** @type{?proto.openim.sdk.relation.BlackInfo} */ (
    jspb.Message.getWrapperField(this, relation_pb.BlackInfo, 1));
};


/**
 * @param {?proto.openim.sdk.relation.BlackInfo|undefined} value
 * @return {!proto.openim.sdk.conversation.EventOnBlackAddedData} returns this
*/
proto.openim.sdk.conversation.EventOnBlackAddedData.prototype.setBlack = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.EventOnBlackAddedData} returns this
 */
proto.openim.sdk.conversation.EventOnBlackAddedData.prototype.clearBlack = function() {
  return this.setBlack(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnBlackAddedData.prototype.hasBlack = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnBlackDeletedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnBlackDeletedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnBlackDeletedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnBlackDeletedData.toObject = function(includeInstance, msg) {
  var f, obj = {
black: (f = msg.getBlack()) && relation_pb.BlackInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnBlackDeletedData}
 */
proto.openim.sdk.conversation.EventOnBlackDeletedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnBlackDeletedData;
  return proto.openim.sdk.conversation.EventOnBlackDeletedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnBlackDeletedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnBlackDeletedData}
 */
proto.openim.sdk.conversation.EventOnBlackDeletedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new relation_pb.BlackInfo;
      reader.readMessage(value,relation_pb.BlackInfo.deserializeBinaryFromReader);
      msg.setBlack(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnBlackDeletedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnBlackDeletedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnBlackDeletedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnBlackDeletedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlack();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      relation_pb.BlackInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.relation.BlackInfo black = 1;
 * @return {?proto.openim.sdk.relation.BlackInfo}
 */
proto.openim.sdk.conversation.EventOnBlackDeletedData.prototype.getBlack = function() {
  return /** @type{?proto.openim.sdk.relation.BlackInfo} */ (
    jspb.Message.getWrapperField(this, relation_pb.BlackInfo, 1));
};


/**
 * @param {?proto.openim.sdk.relation.BlackInfo|undefined} value
 * @return {!proto.openim.sdk.conversation.EventOnBlackDeletedData} returns this
*/
proto.openim.sdk.conversation.EventOnBlackDeletedData.prototype.setBlack = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.EventOnBlackDeletedData} returns this
 */
proto.openim.sdk.conversation.EventOnBlackDeletedData.prototype.clearBlack = function() {
  return this.setBlack(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnBlackDeletedData.prototype.hasBlack = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnJoinedGroupAddedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnJoinedGroupAddedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnJoinedGroupAddedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnJoinedGroupAddedData.toObject = function(includeInstance, msg) {
  var f, obj = {
group: (f = msg.getGroup()) && group_pb.GroupInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnJoinedGroupAddedData}
 */
proto.openim.sdk.conversation.EventOnJoinedGroupAddedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnJoinedGroupAddedData;
  return proto.openim.sdk.conversation.EventOnJoinedGroupAddedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnJoinedGroupAddedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnJoinedGroupAddedData}
 */
proto.openim.sdk.conversation.EventOnJoinedGroupAddedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new group_pb.GroupInfo;
      reader.readMessage(value,group_pb.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnJoinedGroupAddedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnJoinedGroupAddedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnJoinedGroupAddedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnJoinedGroupAddedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      group_pb.GroupInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.group.GroupInfo group = 1;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.conversation.EventOnJoinedGroupAddedData.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, group_pb.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.conversation.EventOnJoinedGroupAddedData} returns this
*/
proto.openim.sdk.conversation.EventOnJoinedGroupAddedData.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.EventOnJoinedGroupAddedData} returns this
 */
proto.openim.sdk.conversation.EventOnJoinedGroupAddedData.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnJoinedGroupAddedData.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData.toObject = function(includeInstance, msg) {
  var f, obj = {
group: (f = msg.getGroup()) && group_pb.GroupInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData}
 */
proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData;
  return proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData}
 */
proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new group_pb.GroupInfo;
      reader.readMessage(value,group_pb.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      group_pb.GroupInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.group.GroupInfo group = 1;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, group_pb.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData} returns this
*/
proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData} returns this
 */
proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnJoinedGroupDeletedData.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnGroupMemberAddedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnGroupMemberAddedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnGroupMemberAddedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnGroupMemberAddedData.toObject = function(includeInstance, msg) {
  var f, obj = {
member: (f = msg.getMember()) && group_pb.GroupMemberInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnGroupMemberAddedData}
 */
proto.openim.sdk.conversation.EventOnGroupMemberAddedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnGroupMemberAddedData;
  return proto.openim.sdk.conversation.EventOnGroupMemberAddedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnGroupMemberAddedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnGroupMemberAddedData}
 */
proto.openim.sdk.conversation.EventOnGroupMemberAddedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new group_pb.GroupMemberInfo;
      reader.readMessage(value,group_pb.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setMember(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnGroupMemberAddedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnGroupMemberAddedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnGroupMemberAddedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnGroupMemberAddedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMember();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      group_pb.GroupMemberInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.group.GroupMemberInfo member = 1;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.conversation.EventOnGroupMemberAddedData.prototype.getMember = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, group_pb.GroupMemberInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.conversation.EventOnGroupMemberAddedData} returns this
*/
proto.openim.sdk.conversation.EventOnGroupMemberAddedData.prototype.setMember = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.EventOnGroupMemberAddedData} returns this
 */
proto.openim.sdk.conversation.EventOnGroupMemberAddedData.prototype.clearMember = function() {
  return this.setMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnGroupMemberAddedData.prototype.hasMember = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnGroupMemberDeletedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnGroupMemberDeletedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnGroupMemberDeletedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnGroupMemberDeletedData.toObject = function(includeInstance, msg) {
  var f, obj = {
member: (f = msg.getMember()) && group_pb.GroupMemberInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnGroupMemberDeletedData}
 */
proto.openim.sdk.conversation.EventOnGroupMemberDeletedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnGroupMemberDeletedData;
  return proto.openim.sdk.conversation.EventOnGroupMemberDeletedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnGroupMemberDeletedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnGroupMemberDeletedData}
 */
proto.openim.sdk.conversation.EventOnGroupMemberDeletedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new group_pb.GroupMemberInfo;
      reader.readMessage(value,group_pb.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setMember(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnGroupMemberDeletedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnGroupMemberDeletedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnGroupMemberDeletedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnGroupMemberDeletedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMember();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      group_pb.GroupMemberInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.group.GroupMemberInfo member = 1;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.conversation.EventOnGroupMemberDeletedData.prototype.getMember = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, group_pb.GroupMemberInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.conversation.EventOnGroupMemberDeletedData} returns this
*/
proto.openim.sdk.conversation.EventOnGroupMemberDeletedData.prototype.setMember = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.EventOnGroupMemberDeletedData} returns this
 */
proto.openim.sdk.conversation.EventOnGroupMemberDeletedData.prototype.clearMember = function() {
  return this.setMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnGroupMemberDeletedData.prototype.hasMember = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationAddedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnGroupApplicationAddedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnGroupApplicationAddedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnGroupApplicationAddedData.toObject = function(includeInstance, msg) {
  var f, obj = {
request: (f = msg.getRequest()) && group_pb.GroupRequestInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnGroupApplicationAddedData}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationAddedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnGroupApplicationAddedData;
  return proto.openim.sdk.conversation.EventOnGroupApplicationAddedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnGroupApplicationAddedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnGroupApplicationAddedData}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationAddedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new group_pb.GroupRequestInfo;
      reader.readMessage(value,group_pb.GroupRequestInfo.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationAddedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnGroupApplicationAddedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnGroupApplicationAddedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnGroupApplicationAddedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      group_pb.GroupRequestInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.group.GroupRequestInfo request = 1;
 * @return {?proto.openim.sdk.group.GroupRequestInfo}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationAddedData.prototype.getRequest = function() {
  return /** @type{?proto.openim.sdk.group.GroupRequestInfo} */ (
    jspb.Message.getWrapperField(this, group_pb.GroupRequestInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupRequestInfo|undefined} value
 * @return {!proto.openim.sdk.conversation.EventOnGroupApplicationAddedData} returns this
*/
proto.openim.sdk.conversation.EventOnGroupApplicationAddedData.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.EventOnGroupApplicationAddedData} returns this
 */
proto.openim.sdk.conversation.EventOnGroupApplicationAddedData.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationAddedData.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData.toObject = function(includeInstance, msg) {
  var f, obj = {
request: (f = msg.getRequest()) && group_pb.GroupRequestInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData;
  return proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new group_pb.GroupRequestInfo;
      reader.readMessage(value,group_pb.GroupRequestInfo.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      group_pb.GroupRequestInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.group.GroupRequestInfo request = 1;
 * @return {?proto.openim.sdk.group.GroupRequestInfo}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData.prototype.getRequest = function() {
  return /** @type{?proto.openim.sdk.group.GroupRequestInfo} */ (
    jspb.Message.getWrapperField(this, group_pb.GroupRequestInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupRequestInfo|undefined} value
 * @return {!proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData} returns this
*/
proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData} returns this
 */
proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationDeletedData.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnGroupInfoChangedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnGroupInfoChangedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnGroupInfoChangedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnGroupInfoChangedData.toObject = function(includeInstance, msg) {
  var f, obj = {
group: (f = msg.getGroup()) && group_pb.GroupInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnGroupInfoChangedData}
 */
proto.openim.sdk.conversation.EventOnGroupInfoChangedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnGroupInfoChangedData;
  return proto.openim.sdk.conversation.EventOnGroupInfoChangedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnGroupInfoChangedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnGroupInfoChangedData}
 */
proto.openim.sdk.conversation.EventOnGroupInfoChangedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new group_pb.GroupInfo;
      reader.readMessage(value,group_pb.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnGroupInfoChangedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnGroupInfoChangedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnGroupInfoChangedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnGroupInfoChangedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      group_pb.GroupInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.group.GroupInfo group = 1;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.conversation.EventOnGroupInfoChangedData.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, group_pb.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.conversation.EventOnGroupInfoChangedData} returns this
*/
proto.openim.sdk.conversation.EventOnGroupInfoChangedData.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.EventOnGroupInfoChangedData} returns this
 */
proto.openim.sdk.conversation.EventOnGroupInfoChangedData.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnGroupInfoChangedData.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnGroupDismissedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnGroupDismissedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnGroupDismissedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnGroupDismissedData.toObject = function(includeInstance, msg) {
  var f, obj = {
group: (f = msg.getGroup()) && group_pb.GroupInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnGroupDismissedData}
 */
proto.openim.sdk.conversation.EventOnGroupDismissedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnGroupDismissedData;
  return proto.openim.sdk.conversation.EventOnGroupDismissedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnGroupDismissedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnGroupDismissedData}
 */
proto.openim.sdk.conversation.EventOnGroupDismissedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new group_pb.GroupInfo;
      reader.readMessage(value,group_pb.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnGroupDismissedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnGroupDismissedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnGroupDismissedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnGroupDismissedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      group_pb.GroupInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.group.GroupInfo group = 1;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.conversation.EventOnGroupDismissedData.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, group_pb.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.conversation.EventOnGroupDismissedData} returns this
*/
proto.openim.sdk.conversation.EventOnGroupDismissedData.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.EventOnGroupDismissedData} returns this
 */
proto.openim.sdk.conversation.EventOnGroupDismissedData.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnGroupDismissedData.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData.toObject = function(includeInstance, msg) {
  var f, obj = {
member: (f = msg.getMember()) && group_pb.GroupMemberInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData}
 */
proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData;
  return proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData}
 */
proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new group_pb.GroupMemberInfo;
      reader.readMessage(value,group_pb.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setMember(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMember();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      group_pb.GroupMemberInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.group.GroupMemberInfo member = 1;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData.prototype.getMember = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, group_pb.GroupMemberInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData} returns this
*/
proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData.prototype.setMember = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData} returns this
 */
proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData.prototype.clearMember = function() {
  return this.setMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnGroupMemberInfoChangedData.prototype.hasMember = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData.toObject = function(includeInstance, msg) {
  var f, obj = {
request: (f = msg.getRequest()) && group_pb.GroupRequestInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData;
  return proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new group_pb.GroupRequestInfo;
      reader.readMessage(value,group_pb.GroupRequestInfo.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      group_pb.GroupRequestInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.group.GroupRequestInfo request = 1;
 * @return {?proto.openim.sdk.group.GroupRequestInfo}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData.prototype.getRequest = function() {
  return /** @type{?proto.openim.sdk.group.GroupRequestInfo} */ (
    jspb.Message.getWrapperField(this, group_pb.GroupRequestInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupRequestInfo|undefined} value
 * @return {!proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData} returns this
*/
proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData} returns this
 */
proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationAcceptedData.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData.toObject = function(includeInstance, msg) {
  var f, obj = {
request: (f = msg.getRequest()) && group_pb.GroupRequestInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData;
  return proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new group_pb.GroupRequestInfo;
      reader.readMessage(value,group_pb.GroupRequestInfo.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      group_pb.GroupRequestInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.group.GroupRequestInfo request = 1;
 * @return {?proto.openim.sdk.group.GroupRequestInfo}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData.prototype.getRequest = function() {
  return /** @type{?proto.openim.sdk.group.GroupRequestInfo} */ (
    jspb.Message.getWrapperField(this, group_pb.GroupRequestInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupRequestInfo|undefined} value
 * @return {!proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData} returns this
*/
proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData} returns this
 */
proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.EventOnGroupApplicationRejectedData.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData.toObject = function(includeInstance, msg) {
  var f, obj = {
businessmessage: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData}
 */
proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData;
  return proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData}
 */
proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBusinessmessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinessmessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string businessMessage = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData.prototype.getBusinessmessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData} returns this
 */
proto.openim.sdk.conversation.EventOnRecvCustomBusinessMessageData.prototype.setBusinessmessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData.toObject = function(includeInstance, msg) {
  var f, obj = {
userinfo: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData}
 */
proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData;
  return proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData}
 */
proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserinfo();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string userInfo = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData.prototype.getUserinfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData} returns this
 */
proto.openim.sdk.conversation.EventOnSelfInfoUpdatedData.prototype.setUserinfo = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.conversation.EventOnUserStatusChangedData.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnUserStatusChangedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnUserStatusChangedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnUserStatusChangedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnUserStatusChangedData.toObject = function(includeInstance, msg) {
  var f, obj = {
userid: jspb.Message.getFieldWithDefault(msg, 1, ""),
platformidsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnUserStatusChangedData}
 */
proto.openim.sdk.conversation.EventOnUserStatusChangedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnUserStatusChangedData;
  return proto.openim.sdk.conversation.EventOnUserStatusChangedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnUserStatusChangedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnUserStatusChangedData}
 */
proto.openim.sdk.conversation.EventOnUserStatusChangedData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPlatformids(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnUserStatusChangedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnUserStatusChangedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnUserStatusChangedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnUserStatusChangedData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlatformidsList();
  if (f.length > 0) {
    writer.writePackedInt32(
      2,
      f
    );
  }
};


/**
 * optional string userID = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.EventOnUserStatusChangedData.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.EventOnUserStatusChangedData} returns this
 */
proto.openim.sdk.conversation.EventOnUserStatusChangedData.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated int32 platformIDs = 2;
 * @return {!Array<number>}
 */
proto.openim.sdk.conversation.EventOnUserStatusChangedData.prototype.getPlatformidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.openim.sdk.conversation.EventOnUserStatusChangedData} returns this
 */
proto.openim.sdk.conversation.EventOnUserStatusChangedData.prototype.setPlatformidsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.conversation.EventOnUserStatusChangedData} returns this
 */
proto.openim.sdk.conversation.EventOnUserStatusChangedData.prototype.addPlatformids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.conversation.EventOnUserStatusChangedData} returns this
 */
proto.openim.sdk.conversation.EventOnUserStatusChangedData.prototype.clearPlatformidsList = function() {
  return this.setPlatformidsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnUserCommandAddData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnUserCommandAddData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnUserCommandAddData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnUserCommandAddData.toObject = function(includeInstance, msg) {
  var f, obj = {
usercommand: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnUserCommandAddData}
 */
proto.openim.sdk.conversation.EventOnUserCommandAddData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnUserCommandAddData;
  return proto.openim.sdk.conversation.EventOnUserCommandAddData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnUserCommandAddData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnUserCommandAddData}
 */
proto.openim.sdk.conversation.EventOnUserCommandAddData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsercommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnUserCommandAddData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnUserCommandAddData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnUserCommandAddData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnUserCommandAddData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsercommand();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string userCommand = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.EventOnUserCommandAddData.prototype.getUsercommand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.EventOnUserCommandAddData} returns this
 */
proto.openim.sdk.conversation.EventOnUserCommandAddData.prototype.setUsercommand = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnUserCommandDeleteData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnUserCommandDeleteData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnUserCommandDeleteData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnUserCommandDeleteData.toObject = function(includeInstance, msg) {
  var f, obj = {
usercommand: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnUserCommandDeleteData}
 */
proto.openim.sdk.conversation.EventOnUserCommandDeleteData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnUserCommandDeleteData;
  return proto.openim.sdk.conversation.EventOnUserCommandDeleteData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnUserCommandDeleteData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnUserCommandDeleteData}
 */
proto.openim.sdk.conversation.EventOnUserCommandDeleteData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsercommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnUserCommandDeleteData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnUserCommandDeleteData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnUserCommandDeleteData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnUserCommandDeleteData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsercommand();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string userCommand = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.EventOnUserCommandDeleteData.prototype.getUsercommand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.EventOnUserCommandDeleteData} returns this
 */
proto.openim.sdk.conversation.EventOnUserCommandDeleteData.prototype.setUsercommand = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.conversation.EventOnUserCommandUpdateData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.conversation.EventOnUserCommandUpdateData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.conversation.EventOnUserCommandUpdateData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnUserCommandUpdateData.toObject = function(includeInstance, msg) {
  var f, obj = {
usercommand: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.conversation.EventOnUserCommandUpdateData}
 */
proto.openim.sdk.conversation.EventOnUserCommandUpdateData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.conversation.EventOnUserCommandUpdateData;
  return proto.openim.sdk.conversation.EventOnUserCommandUpdateData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.conversation.EventOnUserCommandUpdateData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.conversation.EventOnUserCommandUpdateData}
 */
proto.openim.sdk.conversation.EventOnUserCommandUpdateData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsercommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.conversation.EventOnUserCommandUpdateData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.conversation.EventOnUserCommandUpdateData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.conversation.EventOnUserCommandUpdateData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.conversation.EventOnUserCommandUpdateData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsercommand();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string userCommand = 1;
 * @return {string}
 */
proto.openim.sdk.conversation.EventOnUserCommandUpdateData.prototype.getUsercommand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.EventOnUserCommandUpdateData} returns this
 */
proto.openim.sdk.conversation.EventOnUserCommandUpdateData.prototype.setUsercommand = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.openim.sdk.conversation.FuncRequestEventName = {
  NONE: 0,
  GETALLCONVERSATIONLIST: 1,
  GETCONVERSATIONLIST: 2,
  GETCONVERSATION: 3,
  INITSDK: 4,
  LOGIN: 5,
  SENDMESSAGE: 6,
  UPLOADLOGS: 7,
  UPLOADFILE: 8,
  LOG: 9,
  EVENTONSENDMSGPROGRESS: 12,
  EVENTONUPLOADFILEPROGRESS: 13,
  EVENTONUPLOADLOGSPROGRESS: 14,
  EVENTONCONNECTING: 15,
  EVENTONCONNECTSUCCESS: 16,
  EVENTONCONNECTFAILED: 17,
  EVENTONKICKEDOFFLINE: 18,
  EVENTONUSERTOKENEXPIRED: 19,
  EVENTONUSERTOKENINVALID: 20,
  EVENTONSYNCSERVERSTART: 21,
  EVENTONSYNCSERVERFINISH: 22,
  EVENTONSYNCSERVERFAILED: 23,
  EVENTONSYNCSERVERPROGRESS: 24,
  EVENTONNEWCONVERSATION: 25,
  EVENTONCONVERSATIONCHANGED: 26,
  EVENTONTOTALUNREADMESSAGECOUNTCHANGED: 27,
  EVENTONCONVERSATIONUSERINPUTSTATUSCHANGED: 28,
  EVENTONRECVNEWMESSAGE: 29,
  EVENTONRECVC2CREADRECEIPT: 30,
  EVENTONNEWRECVMESSAGEREVOKED: 31,
  EVENTONRECVOFFLINENEWMESSAGE: 32,
  EVENTONMSGDELETED: 33,
  EVENTONRECVONLINEONLYMESSAGE: 34,
  EVENTONMSGEDITED: 35,
  EVENTONFRIENDAPPLICATIONADDED: 36,
  EVENTONFRIENDAPPLICATIONDELETED: 37,
  EVENTONFRIENDAPPLICATIONACCEPTED: 38,
  EVENTONFRIENDAPPLICATIONREJECTED: 39,
  EVENTONFRIENDADDED: 40,
  EVENTONFRIENDDELETED: 41,
  EVENTONFRIENDINFOCHANGED: 42,
  EVENTONBLACKADDED: 43,
  EVENTONBLACKDELETED: 44,
  EVENTONJOINEDGROUPADDED: 45,
  EVENTONJOINEDGROUPDELETED: 46,
  EVENTONGROUPMEMBERADDED: 47,
  EVENTONGROUPMEMBERDELETED: 48,
  EVENTONGROUPAPPLICATIONADDED: 49,
  EVENTONGROUPAPPLICATIONDELETED: 50,
  EVENTONGROUPINFOCHANGED: 51,
  EVENTONGROUPDISMISSED: 52,
  EVENTONGROUPMEMBERINFOCHANGED: 53,
  EVENTONGROUPAPPLICATIONACCEPTED: 54,
  EVENTONGROUPAPPLICATIONREJECTED: 55,
  EVENTONRECVCUSTOMBUSINESSMESSAGE: 56,
  EVENTONSELFINFOUPDATED: 57,
  EVENTONUSERSTATUSCHANGED: 58,
  EVENTONUSERCOMMANDADD: 59,
  EVENTONUSERCOMMANDDELETE: 60,
  EVENTONUSERCOMMANDUPDATE: 61,
  CREATEGROUP: 1000,
  JOINGROUP: 1001,
  QUITGROUP: 1002,
  DISMISSGROUP: 1003,
  CHANGEGROUPMUTE: 1004,
  CHANGEGROUPMEMBERMUTE: 1005,
  TRANSFERGROUPOWNER: 1006,
  KICKGROUPMEMBER: 1007,
  SETGROUPINFO: 1008,
  SETGROUPMEMBERINFO: 1009,
  GETJOINEDGROUPS: 1010,
  GETJOINEDGROUPSPAGE: 1011,
  GETSPECIFIEDGROUPSINFO: 1012,
  SEARCHGROUPS: 1013,
  GETGROUPMEMBEROWNERANDADMIN: 1014,
  GETGROUPMEMBERSBYJOINTIMEFILTER: 1015,
  GETSPECIFIEDGROUPMEMBERSINFO: 1016,
  GETGROUPMEMBERS: 1017,
  GETGROUPREQUEST: 1018,
  SEARCHGROUPMEMBERS: 1019,
  ISJOINGROUP: 1020,
  GETUSERSINGROUP: 1021,
  INVITEUSERTOGROUP: 1022,
  HANDLERGROUPREQUEST: 1023,
  GETGROUPMEMBERINFO: 1024,
  GETSPECIFIEDFRIENDS: 1100,
  ADDFRIEND: 1101,
  GETFRIENDREQUESTS: 1102,
  HANDLERFRIENDREQUEST: 1103,
  CHECKFRIEND: 1104,
  DELETEFRIEND: 1105,
  GETFRIENDS: 1106,
  GETFRIENDSPAGE: 1107,
  SEARCHFRIENDS: 1108,
  ADDBLACK: 1109,
  DELETEBLACK: 1110,
  GETBLACKS: 1111,
  UPDATEFRIENDS: 1112,
  GETCONVERSATIONLISTSPLIT: 2000,
  HIDECONVERSATION: 2001,
  GETATALLTAG: 2002,
  GETONECONVERSATION: 2003,
  GETMULTIPLECONVERSATION: 2004,
  HIDEALLCONVERSATIONS: 2005,
  SETCONVERSATIONDRAFT: 2006,
  SETCONVERSATION: 2007,
  GETTOTALUNREADMSGCOUNT: 2008,
  GETCONVERSATIONIDBYSESSIONTYPE: 2009,
  FINDMESSAGELIST: 2010,
  GETADVANCEDHISTORYMESSAGELIST: 2011,
  GETADVANCEDHISTORYMESSAGELISTREVERSE: 2012,
  REVOKEMESSAGE: 2013,
  TYPINGSTATUSUPDATE: 2014,
  MARKCONVERSATIONMESSAGEASREAD: 2015,
  MARKALLCONVERSATIONMESSAGEASREAD: 2016,
  DELETEMESSAGEFROMLOCALSTORAGE: 2017,
  DELETEMESSAGE: 2018,
  DELETEALLMSGFROMLOCALANDSERVER: 2019,
  DELETEALLMESSAGEFROMLOCALSTORAGE: 2020,
  CLEARCONVERSATIONANDDELETEALLMSG: 2021,
  DELETECONVERSATIONANDDELETEALLMSG: 2022,
  INSERTSINGLEMESSAGETOLOCALSTORAGE: 2023,
  INSERTGROUPMESSAGETOLOCALSTORAGE: 2024,
  SEARCHLOCALMESSAGES: 2025,
  SETMESSAGELOCALEX: 2026,
  SEARCHCONVERSATION: 2027,
  CREATETEXTMESSAGE: 2028,
  CREATEADVANCEDTEXTMESSAGE: 2029,
  CREATETEXTATMESSAGE: 2030,
  CREATELOCATIONMESSAGE: 2031,
  CREATECUSTOMMESSAGE: 2032,
  CREATEQUOTEMESSAGE: 2033,
  CREATEADVANCEDQUOTEMESSAGE: 2034,
  CREATECARDMESSAGE: 2035,
  CREATEIMAGEMESSAGE: 2036,
  CREATESOUNDMESSAGE: 2037,
  CREATEVIDEOMESSAGE: 2038,
  CREATEFILEMESSAGE: 2039,
  CREATEMERGERMESSAGE: 2040,
  CREATEFACEMESSAGE: 2041,
  CREATEFORWARDMESSAGE: 2042,
  PROCESSUSERCOMMANDGETALL: 2100,
  GETSELFUSERINFO: 2101,
  SETSELFINFO: 2102,
  PROCESSUSERCOMMANDADD: 2103,
  PROCESSUSERCOMMANDDELETE: 2104,
  PROCESSUSERCOMMANDUPDATE: 2105,
  GETUSERSINFO: 2106,
  GETUSERSINFOFROMSERVER: 2107
};

goog.object.extend(exports, proto.openim.sdk.conversation);
