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

var message_pb = require('./message_pb.js');
goog.object.extend(proto, message_pb);
var shared_pb = require('./shared_pb.js');
goog.object.extend(proto, shared_pb);
goog.exportSymbol('proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.ClearConversationAndDeleteAllMsgResp', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.Conversation', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.ConversationArgs', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.DeleteConversationAndDeleteAllMsgResp', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.DeleteMessageFromLocalStorageReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.DeleteMessageFromLocalStorageResp', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.FindMessageListCallback', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.FindMessageListReq', null, global);
goog.exportSymbol('proto.openim.sdk.conversation.FindMessageListResp', null, global);
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
    shared_pb.Conversation.toObject, includeInstance)
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
      var value = new shared_pb.Conversation;
      reader.readMessage(value,shared_pb.Conversation.deserializeBinaryFromReader);
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
      shared_pb.Conversation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated openim.sdk.shared.Conversation conversationList = 1;
 * @return {!Array<!proto.openim.sdk.shared.Conversation>}
 */
proto.openim.sdk.conversation.GetConversationListSplitResp.prototype.getConversationlistList = function() {
  return /** @type{!Array<!proto.openim.sdk.shared.Conversation>} */ (
    jspb.Message.getRepeatedWrapperField(this, shared_pb.Conversation, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.shared.Conversation>} value
 * @return {!proto.openim.sdk.conversation.GetConversationListSplitResp} returns this
*/
proto.openim.sdk.conversation.GetConversationListSplitResp.prototype.setConversationlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.shared.Conversation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.shared.Conversation}
 */
proto.openim.sdk.conversation.GetConversationListSplitResp.prototype.addConversationlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.shared.Conversation, opt_index);
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
conversation: (f = msg.getConversation()) && shared_pb.Conversation.toObject(includeInstance, f)
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
      var value = new shared_pb.Conversation;
      reader.readMessage(value,shared_pb.Conversation.deserializeBinaryFromReader);
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
      shared_pb.Conversation.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.shared.Conversation conversation = 1;
 * @return {?proto.openim.sdk.shared.Conversation}
 */
proto.openim.sdk.conversation.GetOneConversationResp.prototype.getConversation = function() {
  return /** @type{?proto.openim.sdk.shared.Conversation} */ (
    jspb.Message.getWrapperField(this, shared_pb.Conversation, 1));
};


/**
 * @param {?proto.openim.sdk.shared.Conversation|undefined} value
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
    shared_pb.Conversation.toObject, includeInstance)
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
      var value = new shared_pb.Conversation;
      reader.readMessage(value,shared_pb.Conversation.deserializeBinaryFromReader);
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
      shared_pb.Conversation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated openim.sdk.shared.Conversation conversationList = 1;
 * @return {!Array<!proto.openim.sdk.shared.Conversation>}
 */
proto.openim.sdk.conversation.GetMultipleConversationResp.prototype.getConversationlistList = function() {
  return /** @type{!Array<!proto.openim.sdk.shared.Conversation>} */ (
    jspb.Message.getRepeatedWrapperField(this, shared_pb.Conversation, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.shared.Conversation>} value
 * @return {!proto.openim.sdk.conversation.GetMultipleConversationResp} returns this
*/
proto.openim.sdk.conversation.GetMultipleConversationResp.prototype.setConversationlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.shared.Conversation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.shared.Conversation}
 */
proto.openim.sdk.conversation.GetMultipleConversationResp.prototype.addConversationlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.shared.Conversation, opt_index);
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
recvmsgopt: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
groupattype: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
ispinned: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
isprivatechat: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
burnduration: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
ex: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
msgdestructtime: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
ismsgdestruct: (f = jspb.Message.getBooleanField(msg, 9)) == null ? undefined : f
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecvmsgopt(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGroupattype(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIspinned(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsprivatechat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBurnduration(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setEx(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMsgdestructtime(value);
      break;
    case 9:
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
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeBool(
      9,
      f
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
 * optional int32 recvMsgOpt = 2;
 * @return {number}
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.getRecvmsgopt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.SetConversationReq} returns this
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.setRecvmsgopt = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.openim.sdk.conversation.SetConversationReq} returns this
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.clearRecvmsgopt = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.hasRecvmsgopt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 groupAtType = 3;
 * @return {number}
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.getGroupattype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.SetConversationReq} returns this
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.setGroupattype = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.openim.sdk.conversation.SetConversationReq} returns this
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.clearGroupattype = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.hasGroupattype = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool isPinned = 4;
 * @return {boolean}
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.getIspinned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.conversation.SetConversationReq} returns this
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.setIspinned = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.openim.sdk.conversation.SetConversationReq} returns this
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.clearIspinned = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.hasIspinned = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool isPrivateChat = 5;
 * @return {boolean}
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.getIsprivatechat = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.conversation.SetConversationReq} returns this
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.setIsprivatechat = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.openim.sdk.conversation.SetConversationReq} returns this
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.clearIsprivatechat = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.hasIsprivatechat = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 burnDuration = 6;
 * @return {number}
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.getBurnduration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.SetConversationReq} returns this
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.setBurnduration = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.openim.sdk.conversation.SetConversationReq} returns this
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.clearBurnduration = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.hasBurnduration = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string ex = 7;
 * @return {string}
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.getEx = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.conversation.SetConversationReq} returns this
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.setEx = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.openim.sdk.conversation.SetConversationReq} returns this
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.clearEx = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.hasEx = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int64 msgDestructTime = 8;
 * @return {number}
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.getMsgdestructtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.conversation.SetConversationReq} returns this
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.setMsgdestructtime = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.openim.sdk.conversation.SetConversationReq} returns this
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.clearMsgdestructtime = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.hasMsgdestructtime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool isMsgDestruct = 9;
 * @return {boolean}
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.getIsmsgdestruct = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.conversation.SetConversationReq} returns this
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.setIsmsgdestruct = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.openim.sdk.conversation.SetConversationReq} returns this
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.clearIsmsgdestruct = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.conversation.SetConversationReq.prototype.hasIsmsgdestruct = function() {
  return jspb.Message.getField(this, 9) != null;
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
    shared_pb.Conversation.toObject, includeInstance)
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
      var value = new shared_pb.Conversation;
      reader.readMessage(value,shared_pb.Conversation.deserializeBinaryFromReader);
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
      shared_pb.Conversation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated openim.sdk.shared.Conversation conversationList = 1;
 * @return {!Array<!proto.openim.sdk.shared.Conversation>}
 */
proto.openim.sdk.conversation.SearchConversationResp.prototype.getConversationlistList = function() {
  return /** @type{!Array<!proto.openim.sdk.shared.Conversation>} */ (
    jspb.Message.getRepeatedWrapperField(this, shared_pb.Conversation, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.shared.Conversation>} value
 * @return {!proto.openim.sdk.conversation.SearchConversationResp} returns this
*/
proto.openim.sdk.conversation.SearchConversationResp.prototype.setConversationlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.shared.Conversation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.shared.Conversation}
 */
proto.openim.sdk.conversation.SearchConversationResp.prototype.addConversationlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.shared.Conversation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.conversation.SearchConversationResp} returns this
 */
proto.openim.sdk.conversation.SearchConversationResp.prototype.clearConversationlistList = function() {
  return this.setConversationlistList([]);
};


goog.object.extend(exports, proto.openim.sdk.conversation);
