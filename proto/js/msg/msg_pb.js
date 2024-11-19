// source: msg.proto
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

var common_pb = require('./common_pb.js');
goog.object.extend(proto, common_pb);
var message_pb = require('./message_pb.js');
goog.object.extend(proto, message_pb);
goog.exportSymbol('proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateAdvancedTextMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateAdvancedTextMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateCardMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateCardMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateCustomMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateCustomMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateFaceMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateFaceMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateFileMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateFileMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateForwardMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateForwardMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateImageMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateImageMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateLocationMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateLocationMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateMergerMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateMergerMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateQuoteMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateQuoteMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateSoundMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateSoundMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateTextAtMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateTextAtMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateTextMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateTextMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateVideoMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.CreateVideoMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.DeleteMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.DeleteMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback', null, global);
goog.exportSymbol('proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams', null, global);
goog.exportSymbol('proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.GroupHasReadInfo', null, global);
goog.exportSymbol('proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.LogReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.LogResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.MessageReaction', null, global);
goog.exportSymbol('proto.openim.sdk.msg.MessageReceipt', null, global);
goog.exportSymbol('proto.openim.sdk.msg.MessageRevoked', null, global);
goog.exportSymbol('proto.openim.sdk.msg.ReactionElem', null, global);
goog.exportSymbol('proto.openim.sdk.msg.RevokeMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.RevokeMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.SendMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.SendMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.TypingStatusUpdateReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.TypingStatusUpdateResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.UploadLogsReq', null, global);
goog.exportSymbol('proto.openim.sdk.msg.UploadLogsResp', null, global);
goog.exportSymbol('proto.openim.sdk.msg.UserReactionElem', null, global);
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
proto.openim.sdk.msg.MessageReceipt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.msg.MessageReceipt.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.msg.MessageReceipt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.MessageReceipt.displayName = 'proto.openim.sdk.msg.MessageReceipt';
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
proto.openim.sdk.msg.MessageRevoked = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.MessageRevoked, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.MessageRevoked.displayName = 'proto.openim.sdk.msg.MessageRevoked';
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
proto.openim.sdk.msg.MessageReaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.MessageReaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.MessageReaction.displayName = 'proto.openim.sdk.msg.MessageReaction';
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
proto.openim.sdk.msg.ReactionElem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.msg.ReactionElem.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.msg.ReactionElem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.ReactionElem.displayName = 'proto.openim.sdk.msg.ReactionElem';
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
proto.openim.sdk.msg.UserReactionElem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.UserReactionElem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.UserReactionElem.displayName = 'proto.openim.sdk.msg.UserReactionElem';
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
proto.openim.sdk.msg.GroupHasReadInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.msg.GroupHasReadInfo.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.msg.GroupHasReadInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.GroupHasReadInfo.displayName = 'proto.openim.sdk.msg.GroupHasReadInfo';
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
proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams.displayName = 'proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams';
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
proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.displayName = 'proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback';
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
proto.openim.sdk.msg.SendMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.SendMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.SendMessageReq.displayName = 'proto.openim.sdk.msg.SendMessageReq';
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
proto.openim.sdk.msg.SendMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.SendMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.SendMessageResp.displayName = 'proto.openim.sdk.msg.SendMessageResp';
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
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq.displayName = 'proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq';
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
proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp.displayName = 'proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp';
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
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq.displayName = 'proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq';
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
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp.displayName = 'proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp';
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
proto.openim.sdk.msg.RevokeMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.RevokeMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.RevokeMessageReq.displayName = 'proto.openim.sdk.msg.RevokeMessageReq';
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
proto.openim.sdk.msg.RevokeMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.RevokeMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.RevokeMessageResp.displayName = 'proto.openim.sdk.msg.RevokeMessageResp';
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
proto.openim.sdk.msg.TypingStatusUpdateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.TypingStatusUpdateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.TypingStatusUpdateReq.displayName = 'proto.openim.sdk.msg.TypingStatusUpdateReq';
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
proto.openim.sdk.msg.TypingStatusUpdateResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.TypingStatusUpdateResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.TypingStatusUpdateResp.displayName = 'proto.openim.sdk.msg.TypingStatusUpdateResp';
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
proto.openim.sdk.msg.DeleteMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.DeleteMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.DeleteMessageReq.displayName = 'proto.openim.sdk.msg.DeleteMessageReq';
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
proto.openim.sdk.msg.DeleteMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.DeleteMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.DeleteMessageResp.displayName = 'proto.openim.sdk.msg.DeleteMessageResp';
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
proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerReq.displayName = 'proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerReq';
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
proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerResp.displayName = 'proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerResp';
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
proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageReq.displayName = 'proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageReq';
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
proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageResp.displayName = 'proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageResp';
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
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq.displayName = 'proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq';
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
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp.displayName = 'proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp';
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
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq.displayName = 'proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq';
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
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp.displayName = 'proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp';
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
proto.openim.sdk.msg.CreateTextMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateTextMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateTextMessageReq.displayName = 'proto.openim.sdk.msg.CreateTextMessageReq';
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
proto.openim.sdk.msg.CreateTextMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateTextMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateTextMessageResp.displayName = 'proto.openim.sdk.msg.CreateTextMessageResp';
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
proto.openim.sdk.msg.CreateAdvancedTextMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.msg.CreateAdvancedTextMessageReq.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.msg.CreateAdvancedTextMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateAdvancedTextMessageReq.displayName = 'proto.openim.sdk.msg.CreateAdvancedTextMessageReq';
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
proto.openim.sdk.msg.CreateAdvancedTextMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateAdvancedTextMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateAdvancedTextMessageResp.displayName = 'proto.openim.sdk.msg.CreateAdvancedTextMessageResp';
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
proto.openim.sdk.msg.CreateTextAtMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.msg.CreateTextAtMessageReq.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.msg.CreateTextAtMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateTextAtMessageReq.displayName = 'proto.openim.sdk.msg.CreateTextAtMessageReq';
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
proto.openim.sdk.msg.CreateTextAtMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateTextAtMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateTextAtMessageResp.displayName = 'proto.openim.sdk.msg.CreateTextAtMessageResp';
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
proto.openim.sdk.msg.CreateLocationMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateLocationMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateLocationMessageReq.displayName = 'proto.openim.sdk.msg.CreateLocationMessageReq';
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
proto.openim.sdk.msg.CreateLocationMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateLocationMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateLocationMessageResp.displayName = 'proto.openim.sdk.msg.CreateLocationMessageResp';
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
proto.openim.sdk.msg.CreateCustomMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateCustomMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateCustomMessageReq.displayName = 'proto.openim.sdk.msg.CreateCustomMessageReq';
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
proto.openim.sdk.msg.CreateCustomMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateCustomMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateCustomMessageResp.displayName = 'proto.openim.sdk.msg.CreateCustomMessageResp';
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
proto.openim.sdk.msg.CreateQuoteMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateQuoteMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateQuoteMessageReq.displayName = 'proto.openim.sdk.msg.CreateQuoteMessageReq';
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
proto.openim.sdk.msg.CreateQuoteMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateQuoteMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateQuoteMessageResp.displayName = 'proto.openim.sdk.msg.CreateQuoteMessageResp';
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
proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq.displayName = 'proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq';
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
proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp.displayName = 'proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp';
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
proto.openim.sdk.msg.CreateCardMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateCardMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateCardMessageReq.displayName = 'proto.openim.sdk.msg.CreateCardMessageReq';
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
proto.openim.sdk.msg.CreateCardMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateCardMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateCardMessageResp.displayName = 'proto.openim.sdk.msg.CreateCardMessageResp';
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
proto.openim.sdk.msg.CreateImageMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateImageMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateImageMessageReq.displayName = 'proto.openim.sdk.msg.CreateImageMessageReq';
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
proto.openim.sdk.msg.CreateImageMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateImageMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateImageMessageResp.displayName = 'proto.openim.sdk.msg.CreateImageMessageResp';
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
proto.openim.sdk.msg.CreateSoundMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateSoundMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateSoundMessageReq.displayName = 'proto.openim.sdk.msg.CreateSoundMessageReq';
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
proto.openim.sdk.msg.CreateSoundMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateSoundMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateSoundMessageResp.displayName = 'proto.openim.sdk.msg.CreateSoundMessageResp';
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
proto.openim.sdk.msg.CreateVideoMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateVideoMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateVideoMessageReq.displayName = 'proto.openim.sdk.msg.CreateVideoMessageReq';
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
proto.openim.sdk.msg.CreateVideoMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateVideoMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateVideoMessageResp.displayName = 'proto.openim.sdk.msg.CreateVideoMessageResp';
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
proto.openim.sdk.msg.CreateFileMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateFileMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateFileMessageReq.displayName = 'proto.openim.sdk.msg.CreateFileMessageReq';
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
proto.openim.sdk.msg.CreateFileMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateFileMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateFileMessageResp.displayName = 'proto.openim.sdk.msg.CreateFileMessageResp';
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
proto.openim.sdk.msg.CreateMergerMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.msg.CreateMergerMessageReq.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.msg.CreateMergerMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateMergerMessageReq.displayName = 'proto.openim.sdk.msg.CreateMergerMessageReq';
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
proto.openim.sdk.msg.CreateMergerMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateMergerMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateMergerMessageResp.displayName = 'proto.openim.sdk.msg.CreateMergerMessageResp';
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
proto.openim.sdk.msg.CreateFaceMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateFaceMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateFaceMessageReq.displayName = 'proto.openim.sdk.msg.CreateFaceMessageReq';
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
proto.openim.sdk.msg.CreateFaceMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateFaceMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateFaceMessageResp.displayName = 'proto.openim.sdk.msg.CreateFaceMessageResp';
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
proto.openim.sdk.msg.CreateForwardMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateForwardMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateForwardMessageReq.displayName = 'proto.openim.sdk.msg.CreateForwardMessageReq';
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
proto.openim.sdk.msg.CreateForwardMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.CreateForwardMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.CreateForwardMessageResp.displayName = 'proto.openim.sdk.msg.CreateForwardMessageResp';
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
proto.openim.sdk.msg.UploadLogsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.UploadLogsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.UploadLogsReq.displayName = 'proto.openim.sdk.msg.UploadLogsReq';
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
proto.openim.sdk.msg.UploadLogsResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.UploadLogsResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.UploadLogsResp.displayName = 'proto.openim.sdk.msg.UploadLogsResp';
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
proto.openim.sdk.msg.LogReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.LogReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.LogReq.displayName = 'proto.openim.sdk.msg.LogReq';
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
proto.openim.sdk.msg.LogResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.msg.LogResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.msg.LogResp.displayName = 'proto.openim.sdk.msg.LogResp';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.msg.MessageReceipt.repeatedFields_ = [3];



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
proto.openim.sdk.msg.MessageReceipt.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.MessageReceipt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.MessageReceipt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.MessageReceipt.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, ""),
userid: jspb.Message.getFieldWithDefault(msg, 2, ""),
msgidlistList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
readtime: jspb.Message.getFieldWithDefault(msg, 4, 0),
msgfrom: jspb.Message.getFieldWithDefault(msg, 5, 0),
contenttype: jspb.Message.getFieldWithDefault(msg, 6, 0),
sessiontype: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.openim.sdk.msg.MessageReceipt}
 */
proto.openim.sdk.msg.MessageReceipt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.MessageReceipt;
  return proto.openim.sdk.msg.MessageReceipt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.MessageReceipt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.MessageReceipt}
 */
proto.openim.sdk.msg.MessageReceipt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addMsgidlist(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReadtime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMsgfrom(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setContenttype(value);
      break;
    case 7:
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
proto.openim.sdk.msg.MessageReceipt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.MessageReceipt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.MessageReceipt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.MessageReceipt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMsgidlistList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getReadtime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getMsgfrom();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getContenttype();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getSessiontype();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.msg.MessageReceipt.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.MessageReceipt} returns this
 */
proto.openim.sdk.msg.MessageReceipt.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string userID = 2;
 * @return {string}
 */
proto.openim.sdk.msg.MessageReceipt.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.MessageReceipt} returns this
 */
proto.openim.sdk.msg.MessageReceipt.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string msgIDList = 3;
 * @return {!Array<string>}
 */
proto.openim.sdk.msg.MessageReceipt.prototype.getMsgidlistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.msg.MessageReceipt} returns this
 */
proto.openim.sdk.msg.MessageReceipt.prototype.setMsgidlistList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.msg.MessageReceipt} returns this
 */
proto.openim.sdk.msg.MessageReceipt.prototype.addMsgidlist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.msg.MessageReceipt} returns this
 */
proto.openim.sdk.msg.MessageReceipt.prototype.clearMsgidlistList = function() {
  return this.setMsgidlistList([]);
};


/**
 * optional int64 readTime = 4;
 * @return {number}
 */
proto.openim.sdk.msg.MessageReceipt.prototype.getReadtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.MessageReceipt} returns this
 */
proto.openim.sdk.msg.MessageReceipt.prototype.setReadtime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 msgFrom = 5;
 * @return {number}
 */
proto.openim.sdk.msg.MessageReceipt.prototype.getMsgfrom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.MessageReceipt} returns this
 */
proto.openim.sdk.msg.MessageReceipt.prototype.setMsgfrom = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 contentType = 6;
 * @return {number}
 */
proto.openim.sdk.msg.MessageReceipt.prototype.getContenttype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.MessageReceipt} returns this
 */
proto.openim.sdk.msg.MessageReceipt.prototype.setContenttype = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 sessionType = 7;
 * @return {number}
 */
proto.openim.sdk.msg.MessageReceipt.prototype.getSessiontype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.MessageReceipt} returns this
 */
proto.openim.sdk.msg.MessageReceipt.prototype.setSessiontype = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
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
proto.openim.sdk.msg.MessageRevoked.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.MessageRevoked.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.MessageRevoked} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.MessageRevoked.toObject = function(includeInstance, msg) {
  var f, obj = {
revokerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
revokerrole: jspb.Message.getFieldWithDefault(msg, 2, 0),
clientmsgid: jspb.Message.getFieldWithDefault(msg, 3, ""),
revokernickname: jspb.Message.getFieldWithDefault(msg, 4, ""),
revoketime: jspb.Message.getFieldWithDefault(msg, 5, 0),
sourcemessagesendtime: jspb.Message.getFieldWithDefault(msg, 6, 0),
sourcemessagesendid: jspb.Message.getFieldWithDefault(msg, 7, ""),
sourcemessagesendernickname: jspb.Message.getFieldWithDefault(msg, 8, ""),
sessiontype: jspb.Message.getFieldWithDefault(msg, 9, 0),
seq: jspb.Message.getFieldWithDefault(msg, 10, 0),
ex: jspb.Message.getFieldWithDefault(msg, 11, ""),
isadminrevoke: jspb.Message.getBooleanFieldWithDefault(msg, 12, false)
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
 * @return {!proto.openim.sdk.msg.MessageRevoked}
 */
proto.openim.sdk.msg.MessageRevoked.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.MessageRevoked;
  return proto.openim.sdk.msg.MessageRevoked.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.MessageRevoked} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.MessageRevoked}
 */
proto.openim.sdk.msg.MessageRevoked.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRevokerid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRevokerrole(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientmsgid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRevokernickname(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRevoketime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSourcemessagesendtime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourcemessagesendid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourcemessagesendernickname(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSessiontype(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeq(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setEx(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsadminrevoke(value);
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
proto.openim.sdk.msg.MessageRevoked.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.MessageRevoked.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.MessageRevoked} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.MessageRevoked.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRevokerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRevokerrole();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getClientmsgid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRevokernickname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRevoketime();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getSourcemessagesendtime();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getSourcemessagesendid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSourcemessagesendernickname();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSessiontype();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getSeq();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getEx();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getIsadminrevoke();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
};


/**
 * optional string revokerID = 1;
 * @return {string}
 */
proto.openim.sdk.msg.MessageRevoked.prototype.getRevokerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.MessageRevoked} returns this
 */
proto.openim.sdk.msg.MessageRevoked.prototype.setRevokerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 revokerRole = 2;
 * @return {number}
 */
proto.openim.sdk.msg.MessageRevoked.prototype.getRevokerrole = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.MessageRevoked} returns this
 */
proto.openim.sdk.msg.MessageRevoked.prototype.setRevokerrole = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string clientMsgID = 3;
 * @return {string}
 */
proto.openim.sdk.msg.MessageRevoked.prototype.getClientmsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.MessageRevoked} returns this
 */
proto.openim.sdk.msg.MessageRevoked.prototype.setClientmsgid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string revokerNickname = 4;
 * @return {string}
 */
proto.openim.sdk.msg.MessageRevoked.prototype.getRevokernickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.MessageRevoked} returns this
 */
proto.openim.sdk.msg.MessageRevoked.prototype.setRevokernickname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 revokeTime = 5;
 * @return {number}
 */
proto.openim.sdk.msg.MessageRevoked.prototype.getRevoketime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.MessageRevoked} returns this
 */
proto.openim.sdk.msg.MessageRevoked.prototype.setRevoketime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 sourceMessageSendTime = 6;
 * @return {number}
 */
proto.openim.sdk.msg.MessageRevoked.prototype.getSourcemessagesendtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.MessageRevoked} returns this
 */
proto.openim.sdk.msg.MessageRevoked.prototype.setSourcemessagesendtime = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string sourceMessageSendID = 7;
 * @return {string}
 */
proto.openim.sdk.msg.MessageRevoked.prototype.getSourcemessagesendid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.MessageRevoked} returns this
 */
proto.openim.sdk.msg.MessageRevoked.prototype.setSourcemessagesendid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string sourceMessageSenderNickname = 8;
 * @return {string}
 */
proto.openim.sdk.msg.MessageRevoked.prototype.getSourcemessagesendernickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.MessageRevoked} returns this
 */
proto.openim.sdk.msg.MessageRevoked.prototype.setSourcemessagesendernickname = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 sessionType = 9;
 * @return {number}
 */
proto.openim.sdk.msg.MessageRevoked.prototype.getSessiontype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.MessageRevoked} returns this
 */
proto.openim.sdk.msg.MessageRevoked.prototype.setSessiontype = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 seq = 10;
 * @return {number}
 */
proto.openim.sdk.msg.MessageRevoked.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.MessageRevoked} returns this
 */
proto.openim.sdk.msg.MessageRevoked.prototype.setSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string ex = 11;
 * @return {string}
 */
proto.openim.sdk.msg.MessageRevoked.prototype.getEx = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.MessageRevoked} returns this
 */
proto.openim.sdk.msg.MessageRevoked.prototype.setEx = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional bool isAdminRevoke = 12;
 * @return {boolean}
 */
proto.openim.sdk.msg.MessageRevoked.prototype.getIsadminrevoke = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.msg.MessageRevoked} returns this
 */
proto.openim.sdk.msg.MessageRevoked.prototype.setIsadminrevoke = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
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
proto.openim.sdk.msg.MessageReaction.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.MessageReaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.MessageReaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.MessageReaction.toObject = function(includeInstance, msg) {
  var f, obj = {
clientmsgid: jspb.Message.getFieldWithDefault(msg, 1, ""),
reactiontype: jspb.Message.getFieldWithDefault(msg, 2, 0),
counter: jspb.Message.getFieldWithDefault(msg, 3, 0),
userid: jspb.Message.getFieldWithDefault(msg, 4, ""),
groupid: jspb.Message.getFieldWithDefault(msg, 5, ""),
sessiontype: jspb.Message.getFieldWithDefault(msg, 6, 0),
info: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.openim.sdk.msg.MessageReaction}
 */
proto.openim.sdk.msg.MessageReaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.MessageReaction;
  return proto.openim.sdk.msg.MessageReaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.MessageReaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.MessageReaction}
 */
proto.openim.sdk.msg.MessageReaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientmsgid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReactiontype(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCounter(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSessiontype(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfo(value);
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
proto.openim.sdk.msg.MessageReaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.MessageReaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.MessageReaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.MessageReaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientmsgid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReactiontype();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCounter();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSessiontype();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getInfo();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string clientMsgID = 1;
 * @return {string}
 */
proto.openim.sdk.msg.MessageReaction.prototype.getClientmsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.MessageReaction} returns this
 */
proto.openim.sdk.msg.MessageReaction.prototype.setClientmsgid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 reactionType = 2;
 * @return {number}
 */
proto.openim.sdk.msg.MessageReaction.prototype.getReactiontype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.MessageReaction} returns this
 */
proto.openim.sdk.msg.MessageReaction.prototype.setReactiontype = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 counter = 3;
 * @return {number}
 */
proto.openim.sdk.msg.MessageReaction.prototype.getCounter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.MessageReaction} returns this
 */
proto.openim.sdk.msg.MessageReaction.prototype.setCounter = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string userID = 4;
 * @return {string}
 */
proto.openim.sdk.msg.MessageReaction.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.MessageReaction} returns this
 */
proto.openim.sdk.msg.MessageReaction.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string groupID = 5;
 * @return {string}
 */
proto.openim.sdk.msg.MessageReaction.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.MessageReaction} returns this
 */
proto.openim.sdk.msg.MessageReaction.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 sessionType = 6;
 * @return {number}
 */
proto.openim.sdk.msg.MessageReaction.prototype.getSessiontype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.MessageReaction} returns this
 */
proto.openim.sdk.msg.MessageReaction.prototype.setSessiontype = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string info = 7;
 * @return {string}
 */
proto.openim.sdk.msg.MessageReaction.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.MessageReaction} returns this
 */
proto.openim.sdk.msg.MessageReaction.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.msg.ReactionElem.repeatedFields_ = [3];



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
proto.openim.sdk.msg.ReactionElem.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.ReactionElem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.ReactionElem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.ReactionElem.toObject = function(includeInstance, msg) {
  var f, obj = {
counter: jspb.Message.getFieldWithDefault(msg, 1, 0),
type: jspb.Message.getFieldWithDefault(msg, 2, 0),
userreactionlistList: jspb.Message.toObjectList(msg.getUserreactionlistList(),
    proto.openim.sdk.msg.UserReactionElem.toObject, includeInstance),
canrepeat: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
info: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.openim.sdk.msg.ReactionElem}
 */
proto.openim.sdk.msg.ReactionElem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.ReactionElem;
  return proto.openim.sdk.msg.ReactionElem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.ReactionElem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.ReactionElem}
 */
proto.openim.sdk.msg.ReactionElem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCounter(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 3:
      var value = new proto.openim.sdk.msg.UserReactionElem;
      reader.readMessage(value,proto.openim.sdk.msg.UserReactionElem.deserializeBinaryFromReader);
      msg.addUserreactionlist(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanrepeat(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfo(value);
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
proto.openim.sdk.msg.ReactionElem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.ReactionElem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.ReactionElem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.ReactionElem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCounter();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUserreactionlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.openim.sdk.msg.UserReactionElem.serializeBinaryToWriter
    );
  }
  f = message.getCanrepeat();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getInfo();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int32 counter = 1;
 * @return {number}
 */
proto.openim.sdk.msg.ReactionElem.prototype.getCounter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.ReactionElem} returns this
 */
proto.openim.sdk.msg.ReactionElem.prototype.setCounter = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 type = 2;
 * @return {number}
 */
proto.openim.sdk.msg.ReactionElem.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.ReactionElem} returns this
 */
proto.openim.sdk.msg.ReactionElem.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated UserReactionElem userReactionList = 3;
 * @return {!Array<!proto.openim.sdk.msg.UserReactionElem>}
 */
proto.openim.sdk.msg.ReactionElem.prototype.getUserreactionlistList = function() {
  return /** @type{!Array<!proto.openim.sdk.msg.UserReactionElem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.msg.UserReactionElem, 3));
};


/**
 * @param {!Array<!proto.openim.sdk.msg.UserReactionElem>} value
 * @return {!proto.openim.sdk.msg.ReactionElem} returns this
*/
proto.openim.sdk.msg.ReactionElem.prototype.setUserreactionlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.openim.sdk.msg.UserReactionElem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.msg.UserReactionElem}
 */
proto.openim.sdk.msg.ReactionElem.prototype.addUserreactionlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.openim.sdk.msg.UserReactionElem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.msg.ReactionElem} returns this
 */
proto.openim.sdk.msg.ReactionElem.prototype.clearUserreactionlistList = function() {
  return this.setUserreactionlistList([]);
};


/**
 * optional bool canRepeat = 4;
 * @return {boolean}
 */
proto.openim.sdk.msg.ReactionElem.prototype.getCanrepeat = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.msg.ReactionElem} returns this
 */
proto.openim.sdk.msg.ReactionElem.prototype.setCanrepeat = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string info = 5;
 * @return {string}
 */
proto.openim.sdk.msg.ReactionElem.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.ReactionElem} returns this
 */
proto.openim.sdk.msg.ReactionElem.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.openim.sdk.msg.UserReactionElem.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.UserReactionElem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.UserReactionElem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.UserReactionElem.toObject = function(includeInstance, msg) {
  var f, obj = {
userid: jspb.Message.getFieldWithDefault(msg, 1, ""),
counter: jspb.Message.getFieldWithDefault(msg, 2, 0),
info: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.openim.sdk.msg.UserReactionElem}
 */
proto.openim.sdk.msg.UserReactionElem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.UserReactionElem;
  return proto.openim.sdk.msg.UserReactionElem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.UserReactionElem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.UserReactionElem}
 */
proto.openim.sdk.msg.UserReactionElem.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCounter(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfo(value);
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
proto.openim.sdk.msg.UserReactionElem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.UserReactionElem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.UserReactionElem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.UserReactionElem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCounter();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getInfo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string userID = 1;
 * @return {string}
 */
proto.openim.sdk.msg.UserReactionElem.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.UserReactionElem} returns this
 */
proto.openim.sdk.msg.UserReactionElem.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 counter = 2;
 * @return {number}
 */
proto.openim.sdk.msg.UserReactionElem.prototype.getCounter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.UserReactionElem} returns this
 */
proto.openim.sdk.msg.UserReactionElem.prototype.setCounter = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string info = 3;
 * @return {string}
 */
proto.openim.sdk.msg.UserReactionElem.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.UserReactionElem} returns this
 */
proto.openim.sdk.msg.UserReactionElem.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.msg.GroupHasReadInfo.repeatedFields_ = [1];



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
proto.openim.sdk.msg.GroupHasReadInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.GroupHasReadInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.GroupHasReadInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.GroupHasReadInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
hasreaduseridlistList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
hasreadcount: jspb.Message.getFieldWithDefault(msg, 2, 0),
groupmembercount: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.openim.sdk.msg.GroupHasReadInfo}
 */
proto.openim.sdk.msg.GroupHasReadInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.GroupHasReadInfo;
  return proto.openim.sdk.msg.GroupHasReadInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.GroupHasReadInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.GroupHasReadInfo}
 */
proto.openim.sdk.msg.GroupHasReadInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addHasreaduseridlist(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHasreadcount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGroupmembercount(value);
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
proto.openim.sdk.msg.GroupHasReadInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.GroupHasReadInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.GroupHasReadInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.GroupHasReadInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHasreaduseridlistList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getHasreadcount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getGroupmembercount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * repeated string hasReadUserIDList = 1;
 * @return {!Array<string>}
 */
proto.openim.sdk.msg.GroupHasReadInfo.prototype.getHasreaduseridlistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.msg.GroupHasReadInfo} returns this
 */
proto.openim.sdk.msg.GroupHasReadInfo.prototype.setHasreaduseridlistList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.msg.GroupHasReadInfo} returns this
 */
proto.openim.sdk.msg.GroupHasReadInfo.prototype.addHasreaduseridlist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.msg.GroupHasReadInfo} returns this
 */
proto.openim.sdk.msg.GroupHasReadInfo.prototype.clearHasreaduseridlistList = function() {
  return this.setHasreaduseridlistList([]);
};


/**
 * optional int32 hasReadCount = 2;
 * @return {number}
 */
proto.openim.sdk.msg.GroupHasReadInfo.prototype.getHasreadcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.GroupHasReadInfo} returns this
 */
proto.openim.sdk.msg.GroupHasReadInfo.prototype.setHasreadcount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 groupMemberCount = 3;
 * @return {number}
 */
proto.openim.sdk.msg.GroupHasReadInfo.prototype.getGroupmembercount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.GroupHasReadInfo} returns this
 */
proto.openim.sdk.msg.GroupHasReadInfo.prototype.setGroupmembercount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationid: jspb.Message.getFieldWithDefault(msg, 1, ""),
startclientmsgid: jspb.Message.getFieldWithDefault(msg, 2, ""),
count: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams;
  return proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setStartclientmsgid(value);
      break;
    case 3:
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
proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStartclientmsgid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string conversationID = 1;
 * @return {string}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams} returns this
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string startClientMsgID = 2;
 * @return {string}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams.prototype.getStartclientmsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams} returns this
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams.prototype.setStartclientmsgid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 count = 3;
 * @return {number}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams} returns this
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.repeatedFields_ = [1];



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
proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.toObject = function(includeInstance, msg) {
  var f, obj = {
messagelistList: jspb.Message.toObjectList(msg.getMessagelistList(),
    message_pb.IMMessage.toObject, includeInstance),
isend: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
errcode: jspb.Message.getFieldWithDefault(msg, 3, 0),
errmsg: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback;
  return proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
      msg.addMessagelist(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsend(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 4:
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
proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagelistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
  f = message.getIsend();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getErrmsg();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * repeated openim.sdk.message.IMMessage messageList = 1;
 * @return {!Array<!proto.openim.sdk.message.IMMessage>}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.prototype.getMessagelistList = function() {
  return /** @type{!Array<!proto.openim.sdk.message.IMMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.message.IMMessage>} value
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback} returns this
*/
proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.prototype.setMessagelistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.message.IMMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.prototype.addMessagelist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.message.IMMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback} returns this
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.prototype.clearMessagelistList = function() {
  return this.setMessagelistList([]);
};


/**
 * optional bool isEnd = 2;
 * @return {boolean}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.prototype.getIsend = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback} returns this
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.prototype.setIsend = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int32 errCode = 3;
 * @return {number}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback} returns this
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string errMsg = 4;
 * @return {string}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.prototype.getErrmsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback} returns this
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.prototype.setErrmsg = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.openim.sdk.msg.SendMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.SendMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.SendMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.SendMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && message_pb.IMMessage.toObject(includeInstance, f),
recvid: jspb.Message.getFieldWithDefault(msg, 2, ""),
groupid: jspb.Message.getFieldWithDefault(msg, 3, ""),
offlinepushinfo: (f = msg.getOfflinepushinfo()) && common_pb.OfflinePushInfo.toObject(includeInstance, f),
isonlineonly: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.openim.sdk.msg.SendMessageReq}
 */
proto.openim.sdk.msg.SendMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.SendMessageReq;
  return proto.openim.sdk.msg.SendMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.SendMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.SendMessageReq}
 */
proto.openim.sdk.msg.SendMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecvid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupid(value);
      break;
    case 4:
      var value = new common_pb.OfflinePushInfo;
      reader.readMessage(value,common_pb.OfflinePushInfo.deserializeBinaryFromReader);
      msg.setOfflinepushinfo(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsonlineonly(value);
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
proto.openim.sdk.msg.SendMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.SendMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.SendMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.SendMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
  f = message.getRecvid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOfflinepushinfo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.OfflinePushInfo.serializeBinaryToWriter
    );
  }
  f = message.getIsonlineonly();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional openim.sdk.message.IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.SendMessageReq.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.SendMessageReq} returns this
*/
proto.openim.sdk.msg.SendMessageReq.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.SendMessageReq} returns this
 */
proto.openim.sdk.msg.SendMessageReq.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.SendMessageReq.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string recvID = 2;
 * @return {string}
 */
proto.openim.sdk.msg.SendMessageReq.prototype.getRecvid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.SendMessageReq} returns this
 */
proto.openim.sdk.msg.SendMessageReq.prototype.setRecvid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string groupID = 3;
 * @return {string}
 */
proto.openim.sdk.msg.SendMessageReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.SendMessageReq} returns this
 */
proto.openim.sdk.msg.SendMessageReq.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional openim.sdk.common.OfflinePushInfo offlinePushInfo = 4;
 * @return {?proto.openim.sdk.common.OfflinePushInfo}
 */
proto.openim.sdk.msg.SendMessageReq.prototype.getOfflinepushinfo = function() {
  return /** @type{?proto.openim.sdk.common.OfflinePushInfo} */ (
    jspb.Message.getWrapperField(this, common_pb.OfflinePushInfo, 4));
};


/**
 * @param {?proto.openim.sdk.common.OfflinePushInfo|undefined} value
 * @return {!proto.openim.sdk.msg.SendMessageReq} returns this
*/
proto.openim.sdk.msg.SendMessageReq.prototype.setOfflinepushinfo = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.SendMessageReq} returns this
 */
proto.openim.sdk.msg.SendMessageReq.prototype.clearOfflinepushinfo = function() {
  return this.setOfflinepushinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.SendMessageReq.prototype.hasOfflinepushinfo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool isOnlineOnly = 5;
 * @return {boolean}
 */
proto.openim.sdk.msg.SendMessageReq.prototype.getIsonlineonly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.msg.SendMessageReq} returns this
 */
proto.openim.sdk.msg.SendMessageReq.prototype.setIsonlineonly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
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
proto.openim.sdk.msg.SendMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.SendMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.SendMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.SendMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && message_pb.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.SendMessageResp}
 */
proto.openim.sdk.msg.SendMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.SendMessageResp;
  return proto.openim.sdk.msg.SendMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.SendMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.SendMessageResp}
 */
proto.openim.sdk.msg.SendMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.msg.SendMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.SendMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.SendMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.SendMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.message.IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.SendMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.SendMessageResp} returns this
*/
proto.openim.sdk.msg.SendMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.SendMessageResp} returns this
 */
proto.openim.sdk.msg.SendMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.SendMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationid: jspb.Message.getFieldWithDefault(msg, 1, ""),
getadvancedhistorymessagelistparams: (f = msg.getGetadvancedhistorymessagelistparams()) && proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq;
  return proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams;
      reader.readMessage(value,proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams.deserializeBinaryFromReader);
      msg.setGetadvancedhistorymessagelistparams(value);
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
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGetadvancedhistorymessagelistparams();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional string conversationID = 1;
 * @return {string}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq} returns this
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional GetAdvancedHistoryMessageListParams getAdvancedHistoryMessageListParams = 2;
 * @return {?proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq.prototype.getGetadvancedhistorymessagelistparams = function() {
  return /** @type{?proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams, 2));
};


/**
 * @param {?proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams|undefined} value
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq} returns this
*/
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq.prototype.setGetadvancedhistorymessagelistparams = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq} returns this
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq.prototype.clearGetadvancedhistorymessagelistparams = function() {
  return this.setGetadvancedhistorymessagelistparams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReq.prototype.hasGetadvancedhistorymessagelistparams = function() {
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
proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp.toObject = function(includeInstance, msg) {
  var f, obj = {
getadvancedhistorymessagelistcallback: (f = msg.getGetadvancedhistorymessagelistcallback()) && proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp;
  return proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback;
      reader.readMessage(value,proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.deserializeBinaryFromReader);
      msg.setGetadvancedhistorymessagelistcallback(value);
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
proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGetadvancedhistorymessagelistcallback();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.serializeBinaryToWriter
    );
  }
};


/**
 * optional GetAdvancedHistoryMessageListCallback getAdvancedHistoryMessageListCallback = 1;
 * @return {?proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp.prototype.getGetadvancedhistorymessagelistcallback = function() {
  return /** @type{?proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback, 1));
};


/**
 * @param {?proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback|undefined} value
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp} returns this
*/
proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp.prototype.setGetadvancedhistorymessagelistcallback = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp} returns this
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp.prototype.clearGetadvancedhistorymessagelistcallback = function() {
  return this.setGetadvancedhistorymessagelistcallback(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListResp.prototype.hasGetadvancedhistorymessagelistcallback = function() {
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
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationid: jspb.Message.getFieldWithDefault(msg, 1, ""),
getadvancedhistorymessagelistparams: (f = msg.getGetadvancedhistorymessagelistparams()) && proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq;
  return proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams;
      reader.readMessage(value,proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams.deserializeBinaryFromReader);
      msg.setGetadvancedhistorymessagelistparams(value);
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
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGetadvancedhistorymessagelistparams();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional string conversationID = 1;
 * @return {string}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq} returns this
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional GetAdvancedHistoryMessageListParams getAdvancedHistoryMessageListParams = 2;
 * @return {?proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq.prototype.getGetadvancedhistorymessagelistparams = function() {
  return /** @type{?proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams, 2));
};


/**
 * @param {?proto.openim.sdk.msg.GetAdvancedHistoryMessageListParams|undefined} value
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq} returns this
*/
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq.prototype.setGetadvancedhistorymessagelistparams = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq} returns this
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq.prototype.clearGetadvancedhistorymessagelistparams = function() {
  return this.setGetadvancedhistorymessagelistparams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseReq.prototype.hasGetadvancedhistorymessagelistparams = function() {
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
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp.toObject = function(includeInstance, msg) {
  var f, obj = {
getadvancedhistorymessagelistcallback: (f = msg.getGetadvancedhistorymessagelistcallback()) && proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp;
  return proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback;
      reader.readMessage(value,proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.deserializeBinaryFromReader);
      msg.setGetadvancedhistorymessagelistcallback(value);
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
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGetadvancedhistorymessagelistcallback();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback.serializeBinaryToWriter
    );
  }
};


/**
 * optional GetAdvancedHistoryMessageListCallback getAdvancedHistoryMessageListCallback = 1;
 * @return {?proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp.prototype.getGetadvancedhistorymessagelistcallback = function() {
  return /** @type{?proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback, 1));
};


/**
 * @param {?proto.openim.sdk.msg.GetAdvancedHistoryMessageListCallback|undefined} value
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp} returns this
*/
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp.prototype.setGetadvancedhistorymessagelistcallback = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp} returns this
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp.prototype.clearGetadvancedhistorymessagelistcallback = function() {
  return this.setGetadvancedhistorymessagelistcallback(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.GetAdvancedHistoryMessageListReverseResp.prototype.hasGetadvancedhistorymessagelistcallback = function() {
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
proto.openim.sdk.msg.RevokeMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.RevokeMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.RevokeMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.RevokeMessageReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.msg.RevokeMessageReq}
 */
proto.openim.sdk.msg.RevokeMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.RevokeMessageReq;
  return proto.openim.sdk.msg.RevokeMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.RevokeMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.RevokeMessageReq}
 */
proto.openim.sdk.msg.RevokeMessageReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.msg.RevokeMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.RevokeMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.RevokeMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.RevokeMessageReq.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.msg.RevokeMessageReq.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.RevokeMessageReq} returns this
 */
proto.openim.sdk.msg.RevokeMessageReq.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string clientMsgID = 2;
 * @return {string}
 */
proto.openim.sdk.msg.RevokeMessageReq.prototype.getClientmsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.RevokeMessageReq} returns this
 */
proto.openim.sdk.msg.RevokeMessageReq.prototype.setClientmsgid = function(value) {
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
proto.openim.sdk.msg.RevokeMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.RevokeMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.RevokeMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.RevokeMessageResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.msg.RevokeMessageResp}
 */
proto.openim.sdk.msg.RevokeMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.RevokeMessageResp;
  return proto.openim.sdk.msg.RevokeMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.RevokeMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.RevokeMessageResp}
 */
proto.openim.sdk.msg.RevokeMessageResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.msg.RevokeMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.RevokeMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.RevokeMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.RevokeMessageResp.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.msg.TypingStatusUpdateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.TypingStatusUpdateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.TypingStatusUpdateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.TypingStatusUpdateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
recvid: jspb.Message.getFieldWithDefault(msg, 1, ""),
msgtip: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.openim.sdk.msg.TypingStatusUpdateReq}
 */
proto.openim.sdk.msg.TypingStatusUpdateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.TypingStatusUpdateReq;
  return proto.openim.sdk.msg.TypingStatusUpdateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.TypingStatusUpdateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.TypingStatusUpdateReq}
 */
proto.openim.sdk.msg.TypingStatusUpdateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecvid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgtip(value);
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
proto.openim.sdk.msg.TypingStatusUpdateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.TypingStatusUpdateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.TypingStatusUpdateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.TypingStatusUpdateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecvid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMsgtip();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string recvID = 1;
 * @return {string}
 */
proto.openim.sdk.msg.TypingStatusUpdateReq.prototype.getRecvid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.TypingStatusUpdateReq} returns this
 */
proto.openim.sdk.msg.TypingStatusUpdateReq.prototype.setRecvid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string msgTip = 2;
 * @return {string}
 */
proto.openim.sdk.msg.TypingStatusUpdateReq.prototype.getMsgtip = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.TypingStatusUpdateReq} returns this
 */
proto.openim.sdk.msg.TypingStatusUpdateReq.prototype.setMsgtip = function(value) {
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
proto.openim.sdk.msg.TypingStatusUpdateResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.TypingStatusUpdateResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.TypingStatusUpdateResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.TypingStatusUpdateResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.msg.TypingStatusUpdateResp}
 */
proto.openim.sdk.msg.TypingStatusUpdateResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.TypingStatusUpdateResp;
  return proto.openim.sdk.msg.TypingStatusUpdateResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.TypingStatusUpdateResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.TypingStatusUpdateResp}
 */
proto.openim.sdk.msg.TypingStatusUpdateResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.msg.TypingStatusUpdateResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.TypingStatusUpdateResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.TypingStatusUpdateResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.TypingStatusUpdateResp.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.msg.DeleteMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.DeleteMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.DeleteMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.DeleteMessageReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.msg.DeleteMessageReq}
 */
proto.openim.sdk.msg.DeleteMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.DeleteMessageReq;
  return proto.openim.sdk.msg.DeleteMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.DeleteMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.DeleteMessageReq}
 */
proto.openim.sdk.msg.DeleteMessageReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.msg.DeleteMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.DeleteMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.DeleteMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.DeleteMessageReq.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.msg.DeleteMessageReq.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.DeleteMessageReq} returns this
 */
proto.openim.sdk.msg.DeleteMessageReq.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string clientMsgID = 2;
 * @return {string}
 */
proto.openim.sdk.msg.DeleteMessageReq.prototype.getClientmsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.DeleteMessageReq} returns this
 */
proto.openim.sdk.msg.DeleteMessageReq.prototype.setClientmsgid = function(value) {
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
proto.openim.sdk.msg.DeleteMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.DeleteMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.DeleteMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.DeleteMessageResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.msg.DeleteMessageResp}
 */
proto.openim.sdk.msg.DeleteMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.DeleteMessageResp;
  return proto.openim.sdk.msg.DeleteMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.DeleteMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.DeleteMessageResp}
 */
proto.openim.sdk.msg.DeleteMessageResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.msg.DeleteMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.DeleteMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.DeleteMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.DeleteMessageResp.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerReq}
 */
proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerReq;
  return proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerReq}
 */
proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerReq.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerResp}
 */
proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerResp;
  return proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerResp}
 */
proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.DeleteAllMsgFromLocalAndServerResp.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageReq}
 */
proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageReq;
  return proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageReq}
 */
proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageReq.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageResp}
 */
proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageResp;
  return proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageResp}
 */
proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.DeleteAllMessageFromLocalStorageResp.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
msg: (f = msg.getMsg()) && message_pb.IMMessage.toObject(includeInstance, f),
recvid: jspb.Message.getFieldWithDefault(msg, 2, ""),
sendid: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq}
 */
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq;
  return proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq}
 */
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecvid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSendid(value);
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
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
  f = message.getRecvid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSendid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional openim.sdk.message.IMMessage msg = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq.prototype.getMsg = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq} returns this
*/
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq.prototype.setMsg = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq} returns this
 */
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq.prototype.clearMsg = function() {
  return this.setMsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq.prototype.hasMsg = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string recvID = 2;
 * @return {string}
 */
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq.prototype.getRecvid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq} returns this
 */
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq.prototype.setRecvid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sendID = 3;
 * @return {string}
 */
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq.prototype.getSendid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq} returns this
 */
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageReq.prototype.setSendid = function(value) {
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
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
msg: (f = msg.getMsg()) && message_pb.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp}
 */
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp;
  return proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp}
 */
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
      msg.setMsg(value);
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
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.message.IMMessage msg = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp.prototype.getMsg = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp} returns this
*/
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp.prototype.setMsg = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp} returns this
 */
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp.prototype.clearMsg = function() {
  return this.setMsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.InsertSingleMessageToLocalStorageResp.prototype.hasMsg = function() {
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
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
msg: (f = msg.getMsg()) && message_pb.IMMessage.toObject(includeInstance, f),
groupid: jspb.Message.getFieldWithDefault(msg, 2, ""),
sendid: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq}
 */
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq;
  return proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq}
 */
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
      msg.setMsg(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSendid(value);
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
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSendid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional openim.sdk.message.IMMessage msg = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq.prototype.getMsg = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq} returns this
*/
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq.prototype.setMsg = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq} returns this
 */
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq.prototype.clearMsg = function() {
  return this.setMsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq.prototype.hasMsg = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string groupID = 2;
 * @return {string}
 */
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq} returns this
 */
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sendID = 3;
 * @return {string}
 */
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq.prototype.getSendid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq} returns this
 */
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageReq.prototype.setSendid = function(value) {
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
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
msg: (f = msg.getMsg()) && message_pb.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp}
 */
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp;
  return proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp}
 */
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
      msg.setMsg(value);
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
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.message.IMMessage msg = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp.prototype.getMsg = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp} returns this
*/
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp.prototype.setMsg = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp} returns this
 */
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp.prototype.clearMsg = function() {
  return this.setMsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.InsertGroupMessageToLocalStorageResp.prototype.hasMsg = function() {
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
proto.openim.sdk.msg.CreateTextMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateTextMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateTextMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateTextMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
text: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.openim.sdk.msg.CreateTextMessageReq}
 */
proto.openim.sdk.msg.CreateTextMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateTextMessageReq;
  return proto.openim.sdk.msg.CreateTextMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateTextMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateTextMessageReq}
 */
proto.openim.sdk.msg.CreateTextMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
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
proto.openim.sdk.msg.CreateTextMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateTextMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateTextMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateTextMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.openim.sdk.msg.CreateTextMessageReq.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.CreateTextMessageReq} returns this
 */
proto.openim.sdk.msg.CreateTextMessageReq.prototype.setText = function(value) {
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
proto.openim.sdk.msg.CreateTextMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateTextMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateTextMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateTextMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && message_pb.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateTextMessageResp}
 */
proto.openim.sdk.msg.CreateTextMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateTextMessageResp;
  return proto.openim.sdk.msg.CreateTextMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateTextMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateTextMessageResp}
 */
proto.openim.sdk.msg.CreateTextMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.msg.CreateTextMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateTextMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateTextMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateTextMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.message.IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.CreateTextMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.CreateTextMessageResp} returns this
*/
proto.openim.sdk.msg.CreateTextMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateTextMessageResp} returns this
 */
proto.openim.sdk.msg.CreateTextMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateTextMessageResp.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.msg.CreateAdvancedTextMessageReq.repeatedFields_ = [2];



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
proto.openim.sdk.msg.CreateAdvancedTextMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateAdvancedTextMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateAdvancedTextMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateAdvancedTextMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
text: jspb.Message.getFieldWithDefault(msg, 1, ""),
messageentitiesList: jspb.Message.toObjectList(msg.getMessageentitiesList(),
    message_pb.MessageEntity.toObject, includeInstance)
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
 * @return {!proto.openim.sdk.msg.CreateAdvancedTextMessageReq}
 */
proto.openim.sdk.msg.CreateAdvancedTextMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateAdvancedTextMessageReq;
  return proto.openim.sdk.msg.CreateAdvancedTextMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateAdvancedTextMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateAdvancedTextMessageReq}
 */
proto.openim.sdk.msg.CreateAdvancedTextMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = new message_pb.MessageEntity;
      reader.readMessage(value,message_pb.MessageEntity.deserializeBinaryFromReader);
      msg.addMessageentities(value);
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
proto.openim.sdk.msg.CreateAdvancedTextMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateAdvancedTextMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateAdvancedTextMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateAdvancedTextMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessageentitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      message_pb.MessageEntity.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.openim.sdk.msg.CreateAdvancedTextMessageReq.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.CreateAdvancedTextMessageReq} returns this
 */
proto.openim.sdk.msg.CreateAdvancedTextMessageReq.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated openim.sdk.message.MessageEntity messageEntities = 2;
 * @return {!Array<!proto.openim.sdk.message.MessageEntity>}
 */
proto.openim.sdk.msg.CreateAdvancedTextMessageReq.prototype.getMessageentitiesList = function() {
  return /** @type{!Array<!proto.openim.sdk.message.MessageEntity>} */ (
    jspb.Message.getRepeatedWrapperField(this, message_pb.MessageEntity, 2));
};


/**
 * @param {!Array<!proto.openim.sdk.message.MessageEntity>} value
 * @return {!proto.openim.sdk.msg.CreateAdvancedTextMessageReq} returns this
*/
proto.openim.sdk.msg.CreateAdvancedTextMessageReq.prototype.setMessageentitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.openim.sdk.message.MessageEntity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.MessageEntity}
 */
proto.openim.sdk.msg.CreateAdvancedTextMessageReq.prototype.addMessageentities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.openim.sdk.message.MessageEntity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.msg.CreateAdvancedTextMessageReq} returns this
 */
proto.openim.sdk.msg.CreateAdvancedTextMessageReq.prototype.clearMessageentitiesList = function() {
  return this.setMessageentitiesList([]);
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
proto.openim.sdk.msg.CreateAdvancedTextMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateAdvancedTextMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateAdvancedTextMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateAdvancedTextMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && message_pb.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateAdvancedTextMessageResp}
 */
proto.openim.sdk.msg.CreateAdvancedTextMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateAdvancedTextMessageResp;
  return proto.openim.sdk.msg.CreateAdvancedTextMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateAdvancedTextMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateAdvancedTextMessageResp}
 */
proto.openim.sdk.msg.CreateAdvancedTextMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.msg.CreateAdvancedTextMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateAdvancedTextMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateAdvancedTextMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateAdvancedTextMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.message.IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.CreateAdvancedTextMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.CreateAdvancedTextMessageResp} returns this
*/
proto.openim.sdk.msg.CreateAdvancedTextMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateAdvancedTextMessageResp} returns this
 */
proto.openim.sdk.msg.CreateAdvancedTextMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateAdvancedTextMessageResp.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.msg.CreateTextAtMessageReq.repeatedFields_ = [2,3];



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
proto.openim.sdk.msg.CreateTextAtMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateTextAtMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateTextAtMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateTextAtMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
text: jspb.Message.getFieldWithDefault(msg, 1, ""),
useridlistList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
usersinfoList: jspb.Message.toObjectList(msg.getUsersinfoList(),
    message_pb.AtInfo.toObject, includeInstance),
quotemessage: (f = msg.getQuotemessage()) && message_pb.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateTextAtMessageReq}
 */
proto.openim.sdk.msg.CreateTextAtMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateTextAtMessageReq;
  return proto.openim.sdk.msg.CreateTextAtMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateTextAtMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateTextAtMessageReq}
 */
proto.openim.sdk.msg.CreateTextAtMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addUseridlist(value);
      break;
    case 3:
      var value = new message_pb.AtInfo;
      reader.readMessage(value,message_pb.AtInfo.deserializeBinaryFromReader);
      msg.addUsersinfo(value);
      break;
    case 4:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
      msg.setQuotemessage(value);
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
proto.openim.sdk.msg.CreateTextAtMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateTextAtMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateTextAtMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateTextAtMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUseridlistList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getUsersinfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      message_pb.AtInfo.serializeBinaryToWriter
    );
  }
  f = message.getQuotemessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.openim.sdk.msg.CreateTextAtMessageReq.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.CreateTextAtMessageReq} returns this
 */
proto.openim.sdk.msg.CreateTextAtMessageReq.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string userIDList = 2;
 * @return {!Array<string>}
 */
proto.openim.sdk.msg.CreateTextAtMessageReq.prototype.getUseridlistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.msg.CreateTextAtMessageReq} returns this
 */
proto.openim.sdk.msg.CreateTextAtMessageReq.prototype.setUseridlistList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.msg.CreateTextAtMessageReq} returns this
 */
proto.openim.sdk.msg.CreateTextAtMessageReq.prototype.addUseridlist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.msg.CreateTextAtMessageReq} returns this
 */
proto.openim.sdk.msg.CreateTextAtMessageReq.prototype.clearUseridlistList = function() {
  return this.setUseridlistList([]);
};


/**
 * repeated openim.sdk.message.AtInfo usersInfo = 3;
 * @return {!Array<!proto.openim.sdk.message.AtInfo>}
 */
proto.openim.sdk.msg.CreateTextAtMessageReq.prototype.getUsersinfoList = function() {
  return /** @type{!Array<!proto.openim.sdk.message.AtInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, message_pb.AtInfo, 3));
};


/**
 * @param {!Array<!proto.openim.sdk.message.AtInfo>} value
 * @return {!proto.openim.sdk.msg.CreateTextAtMessageReq} returns this
*/
proto.openim.sdk.msg.CreateTextAtMessageReq.prototype.setUsersinfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.openim.sdk.message.AtInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.AtInfo}
 */
proto.openim.sdk.msg.CreateTextAtMessageReq.prototype.addUsersinfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.openim.sdk.message.AtInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.msg.CreateTextAtMessageReq} returns this
 */
proto.openim.sdk.msg.CreateTextAtMessageReq.prototype.clearUsersinfoList = function() {
  return this.setUsersinfoList([]);
};


/**
 * optional openim.sdk.message.IMMessage quoteMessage = 4;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.CreateTextAtMessageReq.prototype.getQuotemessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 4));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.CreateTextAtMessageReq} returns this
*/
proto.openim.sdk.msg.CreateTextAtMessageReq.prototype.setQuotemessage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateTextAtMessageReq} returns this
 */
proto.openim.sdk.msg.CreateTextAtMessageReq.prototype.clearQuotemessage = function() {
  return this.setQuotemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateTextAtMessageReq.prototype.hasQuotemessage = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.openim.sdk.msg.CreateTextAtMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateTextAtMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateTextAtMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateTextAtMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && message_pb.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateTextAtMessageResp}
 */
proto.openim.sdk.msg.CreateTextAtMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateTextAtMessageResp;
  return proto.openim.sdk.msg.CreateTextAtMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateTextAtMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateTextAtMessageResp}
 */
proto.openim.sdk.msg.CreateTextAtMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.msg.CreateTextAtMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateTextAtMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateTextAtMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateTextAtMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.message.IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.CreateTextAtMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.CreateTextAtMessageResp} returns this
*/
proto.openim.sdk.msg.CreateTextAtMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateTextAtMessageResp} returns this
 */
proto.openim.sdk.msg.CreateTextAtMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateTextAtMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.msg.CreateLocationMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateLocationMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateLocationMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateLocationMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
description: jspb.Message.getFieldWithDefault(msg, 1, ""),
longitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
latitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.openim.sdk.msg.CreateLocationMessageReq}
 */
proto.openim.sdk.msg.CreateLocationMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateLocationMessageReq;
  return proto.openim.sdk.msg.CreateLocationMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateLocationMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateLocationMessageReq}
 */
proto.openim.sdk.msg.CreateLocationMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitude(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitude(value);
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
proto.openim.sdk.msg.CreateLocationMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateLocationMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateLocationMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateLocationMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.openim.sdk.msg.CreateLocationMessageReq.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.CreateLocationMessageReq} returns this
 */
proto.openim.sdk.msg.CreateLocationMessageReq.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double longitude = 2;
 * @return {number}
 */
proto.openim.sdk.msg.CreateLocationMessageReq.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.CreateLocationMessageReq} returns this
 */
proto.openim.sdk.msg.CreateLocationMessageReq.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double latitude = 3;
 * @return {number}
 */
proto.openim.sdk.msg.CreateLocationMessageReq.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.CreateLocationMessageReq} returns this
 */
proto.openim.sdk.msg.CreateLocationMessageReq.prototype.setLatitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
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
proto.openim.sdk.msg.CreateLocationMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateLocationMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateLocationMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateLocationMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && message_pb.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateLocationMessageResp}
 */
proto.openim.sdk.msg.CreateLocationMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateLocationMessageResp;
  return proto.openim.sdk.msg.CreateLocationMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateLocationMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateLocationMessageResp}
 */
proto.openim.sdk.msg.CreateLocationMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.msg.CreateLocationMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateLocationMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateLocationMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateLocationMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.message.IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.CreateLocationMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.CreateLocationMessageResp} returns this
*/
proto.openim.sdk.msg.CreateLocationMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateLocationMessageResp} returns this
 */
proto.openim.sdk.msg.CreateLocationMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateLocationMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.msg.CreateCustomMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateCustomMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateCustomMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateCustomMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
data: jspb.Message.getFieldWithDefault(msg, 1, ""),
extension: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.openim.sdk.msg.CreateCustomMessageReq}
 */
proto.openim.sdk.msg.CreateCustomMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateCustomMessageReq;
  return proto.openim.sdk.msg.CreateCustomMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateCustomMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateCustomMessageReq}
 */
proto.openim.sdk.msg.CreateCustomMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtension$(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
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
proto.openim.sdk.msg.CreateCustomMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateCustomMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateCustomMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateCustomMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExtension$();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string data = 1;
 * @return {string}
 */
proto.openim.sdk.msg.CreateCustomMessageReq.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.CreateCustomMessageReq} returns this
 */
proto.openim.sdk.msg.CreateCustomMessageReq.prototype.setData = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string extension = 2;
 * @return {string}
 */
proto.openim.sdk.msg.CreateCustomMessageReq.prototype.getExtension$ = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.CreateCustomMessageReq} returns this
 */
proto.openim.sdk.msg.CreateCustomMessageReq.prototype.setExtension$ = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.openim.sdk.msg.CreateCustomMessageReq.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.CreateCustomMessageReq} returns this
 */
proto.openim.sdk.msg.CreateCustomMessageReq.prototype.setDescription = function(value) {
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
proto.openim.sdk.msg.CreateCustomMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateCustomMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateCustomMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateCustomMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && message_pb.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateCustomMessageResp}
 */
proto.openim.sdk.msg.CreateCustomMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateCustomMessageResp;
  return proto.openim.sdk.msg.CreateCustomMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateCustomMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateCustomMessageResp}
 */
proto.openim.sdk.msg.CreateCustomMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.msg.CreateCustomMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateCustomMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateCustomMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateCustomMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.message.IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.CreateCustomMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.CreateCustomMessageResp} returns this
*/
proto.openim.sdk.msg.CreateCustomMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateCustomMessageResp} returns this
 */
proto.openim.sdk.msg.CreateCustomMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateCustomMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.msg.CreateQuoteMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateQuoteMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateQuoteMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateQuoteMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
text: jspb.Message.getFieldWithDefault(msg, 1, ""),
quotemessage: (f = msg.getQuotemessage()) && message_pb.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateQuoteMessageReq}
 */
proto.openim.sdk.msg.CreateQuoteMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateQuoteMessageReq;
  return proto.openim.sdk.msg.CreateQuoteMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateQuoteMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateQuoteMessageReq}
 */
proto.openim.sdk.msg.CreateQuoteMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
      msg.setQuotemessage(value);
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
proto.openim.sdk.msg.CreateQuoteMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateQuoteMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateQuoteMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateQuoteMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuotemessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.openim.sdk.msg.CreateQuoteMessageReq.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.CreateQuoteMessageReq} returns this
 */
proto.openim.sdk.msg.CreateQuoteMessageReq.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional openim.sdk.message.IMMessage quoteMessage = 2;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.CreateQuoteMessageReq.prototype.getQuotemessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 2));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.CreateQuoteMessageReq} returns this
*/
proto.openim.sdk.msg.CreateQuoteMessageReq.prototype.setQuotemessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateQuoteMessageReq} returns this
 */
proto.openim.sdk.msg.CreateQuoteMessageReq.prototype.clearQuotemessage = function() {
  return this.setQuotemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateQuoteMessageReq.prototype.hasQuotemessage = function() {
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
proto.openim.sdk.msg.CreateQuoteMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateQuoteMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateQuoteMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateQuoteMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && message_pb.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateQuoteMessageResp}
 */
proto.openim.sdk.msg.CreateQuoteMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateQuoteMessageResp;
  return proto.openim.sdk.msg.CreateQuoteMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateQuoteMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateQuoteMessageResp}
 */
proto.openim.sdk.msg.CreateQuoteMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.msg.CreateQuoteMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateQuoteMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateQuoteMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateQuoteMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.message.IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.CreateQuoteMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.CreateQuoteMessageResp} returns this
*/
proto.openim.sdk.msg.CreateQuoteMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateQuoteMessageResp} returns this
 */
proto.openim.sdk.msg.CreateQuoteMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateQuoteMessageResp.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq.repeatedFields_ = [3];



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
proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
text: jspb.Message.getFieldWithDefault(msg, 1, ""),
quotemessage: (f = msg.getQuotemessage()) && message_pb.IMMessage.toObject(includeInstance, f),
messageentitiesList: jspb.Message.toObjectList(msg.getMessageentitiesList(),
    message_pb.MessageEntity.toObject, includeInstance)
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
 * @return {!proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq}
 */
proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq;
  return proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq}
 */
proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
      msg.setQuotemessage(value);
      break;
    case 3:
      var value = new message_pb.MessageEntity;
      reader.readMessage(value,message_pb.MessageEntity.deserializeBinaryFromReader);
      msg.addMessageentities(value);
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
proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuotemessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
  f = message.getMessageentitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      message_pb.MessageEntity.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq} returns this
 */
proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional openim.sdk.message.IMMessage quoteMessage = 2;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq.prototype.getQuotemessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 2));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq} returns this
*/
proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq.prototype.setQuotemessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq} returns this
 */
proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq.prototype.clearQuotemessage = function() {
  return this.setQuotemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq.prototype.hasQuotemessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated openim.sdk.message.MessageEntity messageEntities = 3;
 * @return {!Array<!proto.openim.sdk.message.MessageEntity>}
 */
proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq.prototype.getMessageentitiesList = function() {
  return /** @type{!Array<!proto.openim.sdk.message.MessageEntity>} */ (
    jspb.Message.getRepeatedWrapperField(this, message_pb.MessageEntity, 3));
};


/**
 * @param {!Array<!proto.openim.sdk.message.MessageEntity>} value
 * @return {!proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq} returns this
*/
proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq.prototype.setMessageentitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.openim.sdk.message.MessageEntity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.MessageEntity}
 */
proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq.prototype.addMessageentities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.openim.sdk.message.MessageEntity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq} returns this
 */
proto.openim.sdk.msg.CreateAdvancedQuoteMessageReq.prototype.clearMessageentitiesList = function() {
  return this.setMessageentitiesList([]);
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
proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && message_pb.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp}
 */
proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp;
  return proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp}
 */
proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.message.IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp} returns this
*/
proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp} returns this
 */
proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateAdvancedQuoteMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.msg.CreateCardMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateCardMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateCardMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateCardMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
card: (f = msg.getCard()) && message_pb.CardElem.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateCardMessageReq}
 */
proto.openim.sdk.msg.CreateCardMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateCardMessageReq;
  return proto.openim.sdk.msg.CreateCardMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateCardMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateCardMessageReq}
 */
proto.openim.sdk.msg.CreateCardMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.CardElem;
      reader.readMessage(value,message_pb.CardElem.deserializeBinaryFromReader);
      msg.setCard(value);
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
proto.openim.sdk.msg.CreateCardMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateCardMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateCardMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateCardMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCard();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.CardElem.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.message.CardElem card = 1;
 * @return {?proto.openim.sdk.message.CardElem}
 */
proto.openim.sdk.msg.CreateCardMessageReq.prototype.getCard = function() {
  return /** @type{?proto.openim.sdk.message.CardElem} */ (
    jspb.Message.getWrapperField(this, message_pb.CardElem, 1));
};


/**
 * @param {?proto.openim.sdk.message.CardElem|undefined} value
 * @return {!proto.openim.sdk.msg.CreateCardMessageReq} returns this
*/
proto.openim.sdk.msg.CreateCardMessageReq.prototype.setCard = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateCardMessageReq} returns this
 */
proto.openim.sdk.msg.CreateCardMessageReq.prototype.clearCard = function() {
  return this.setCard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateCardMessageReq.prototype.hasCard = function() {
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
proto.openim.sdk.msg.CreateCardMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateCardMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateCardMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateCardMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && message_pb.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateCardMessageResp}
 */
proto.openim.sdk.msg.CreateCardMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateCardMessageResp;
  return proto.openim.sdk.msg.CreateCardMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateCardMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateCardMessageResp}
 */
proto.openim.sdk.msg.CreateCardMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.msg.CreateCardMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateCardMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateCardMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateCardMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.message.IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.CreateCardMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.CreateCardMessageResp} returns this
*/
proto.openim.sdk.msg.CreateCardMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateCardMessageResp} returns this
 */
proto.openim.sdk.msg.CreateCardMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateCardMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.msg.CreateImageMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateImageMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateImageMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateImageMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
imagesourcepath: jspb.Message.getFieldWithDefault(msg, 1, ""),
sourcepicture: (f = msg.getSourcepicture()) && message_pb.PictureBaseInfo.toObject(includeInstance, f),
bigpicture: (f = msg.getBigpicture()) && message_pb.PictureBaseInfo.toObject(includeInstance, f),
snapshotpicture: (f = msg.getSnapshotpicture()) && message_pb.PictureBaseInfo.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateImageMessageReq}
 */
proto.openim.sdk.msg.CreateImageMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateImageMessageReq;
  return proto.openim.sdk.msg.CreateImageMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateImageMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateImageMessageReq}
 */
proto.openim.sdk.msg.CreateImageMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImagesourcepath(value);
      break;
    case 2:
      var value = new message_pb.PictureBaseInfo;
      reader.readMessage(value,message_pb.PictureBaseInfo.deserializeBinaryFromReader);
      msg.setSourcepicture(value);
      break;
    case 3:
      var value = new message_pb.PictureBaseInfo;
      reader.readMessage(value,message_pb.PictureBaseInfo.deserializeBinaryFromReader);
      msg.setBigpicture(value);
      break;
    case 4:
      var value = new message_pb.PictureBaseInfo;
      reader.readMessage(value,message_pb.PictureBaseInfo.deserializeBinaryFromReader);
      msg.setSnapshotpicture(value);
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
proto.openim.sdk.msg.CreateImageMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateImageMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateImageMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateImageMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImagesourcepath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourcepicture();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      message_pb.PictureBaseInfo.serializeBinaryToWriter
    );
  }
  f = message.getBigpicture();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      message_pb.PictureBaseInfo.serializeBinaryToWriter
    );
  }
  f = message.getSnapshotpicture();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      message_pb.PictureBaseInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string imageSourcePath = 1;
 * @return {string}
 */
proto.openim.sdk.msg.CreateImageMessageReq.prototype.getImagesourcepath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.CreateImageMessageReq} returns this
 */
proto.openim.sdk.msg.CreateImageMessageReq.prototype.setImagesourcepath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional openim.sdk.message.PictureBaseInfo sourcePicture = 2;
 * @return {?proto.openim.sdk.message.PictureBaseInfo}
 */
proto.openim.sdk.msg.CreateImageMessageReq.prototype.getSourcepicture = function() {
  return /** @type{?proto.openim.sdk.message.PictureBaseInfo} */ (
    jspb.Message.getWrapperField(this, message_pb.PictureBaseInfo, 2));
};


/**
 * @param {?proto.openim.sdk.message.PictureBaseInfo|undefined} value
 * @return {!proto.openim.sdk.msg.CreateImageMessageReq} returns this
*/
proto.openim.sdk.msg.CreateImageMessageReq.prototype.setSourcepicture = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateImageMessageReq} returns this
 */
proto.openim.sdk.msg.CreateImageMessageReq.prototype.clearSourcepicture = function() {
  return this.setSourcepicture(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateImageMessageReq.prototype.hasSourcepicture = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional openim.sdk.message.PictureBaseInfo bigPicture = 3;
 * @return {?proto.openim.sdk.message.PictureBaseInfo}
 */
proto.openim.sdk.msg.CreateImageMessageReq.prototype.getBigpicture = function() {
  return /** @type{?proto.openim.sdk.message.PictureBaseInfo} */ (
    jspb.Message.getWrapperField(this, message_pb.PictureBaseInfo, 3));
};


/**
 * @param {?proto.openim.sdk.message.PictureBaseInfo|undefined} value
 * @return {!proto.openim.sdk.msg.CreateImageMessageReq} returns this
*/
proto.openim.sdk.msg.CreateImageMessageReq.prototype.setBigpicture = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateImageMessageReq} returns this
 */
proto.openim.sdk.msg.CreateImageMessageReq.prototype.clearBigpicture = function() {
  return this.setBigpicture(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateImageMessageReq.prototype.hasBigpicture = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional openim.sdk.message.PictureBaseInfo snapshotPicture = 4;
 * @return {?proto.openim.sdk.message.PictureBaseInfo}
 */
proto.openim.sdk.msg.CreateImageMessageReq.prototype.getSnapshotpicture = function() {
  return /** @type{?proto.openim.sdk.message.PictureBaseInfo} */ (
    jspb.Message.getWrapperField(this, message_pb.PictureBaseInfo, 4));
};


/**
 * @param {?proto.openim.sdk.message.PictureBaseInfo|undefined} value
 * @return {!proto.openim.sdk.msg.CreateImageMessageReq} returns this
*/
proto.openim.sdk.msg.CreateImageMessageReq.prototype.setSnapshotpicture = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateImageMessageReq} returns this
 */
proto.openim.sdk.msg.CreateImageMessageReq.prototype.clearSnapshotpicture = function() {
  return this.setSnapshotpicture(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateImageMessageReq.prototype.hasSnapshotpicture = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.openim.sdk.msg.CreateImageMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateImageMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateImageMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateImageMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && message_pb.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateImageMessageResp}
 */
proto.openim.sdk.msg.CreateImageMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateImageMessageResp;
  return proto.openim.sdk.msg.CreateImageMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateImageMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateImageMessageResp}
 */
proto.openim.sdk.msg.CreateImageMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.msg.CreateImageMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateImageMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateImageMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateImageMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.message.IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.CreateImageMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.CreateImageMessageResp} returns this
*/
proto.openim.sdk.msg.CreateImageMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateImageMessageResp} returns this
 */
proto.openim.sdk.msg.CreateImageMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateImageMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.msg.CreateSoundMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateSoundMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateSoundMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateSoundMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
soundpath: jspb.Message.getFieldWithDefault(msg, 1, ""),
duration: jspb.Message.getFieldWithDefault(msg, 2, 0),
soundelem: (f = msg.getSoundelem()) && message_pb.SoundBaseInfo.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateSoundMessageReq}
 */
proto.openim.sdk.msg.CreateSoundMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateSoundMessageReq;
  return proto.openim.sdk.msg.CreateSoundMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateSoundMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateSoundMessageReq}
 */
proto.openim.sdk.msg.CreateSoundMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSoundpath(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuration(value);
      break;
    case 3:
      var value = new message_pb.SoundBaseInfo;
      reader.readMessage(value,message_pb.SoundBaseInfo.deserializeBinaryFromReader);
      msg.setSoundelem(value);
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
proto.openim.sdk.msg.CreateSoundMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateSoundMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateSoundMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateSoundMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSoundpath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSoundelem();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      message_pb.SoundBaseInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string soundPath = 1;
 * @return {string}
 */
proto.openim.sdk.msg.CreateSoundMessageReq.prototype.getSoundpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.CreateSoundMessageReq} returns this
 */
proto.openim.sdk.msg.CreateSoundMessageReq.prototype.setSoundpath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 duration = 2;
 * @return {number}
 */
proto.openim.sdk.msg.CreateSoundMessageReq.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.CreateSoundMessageReq} returns this
 */
proto.openim.sdk.msg.CreateSoundMessageReq.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional openim.sdk.message.SoundBaseInfo soundElem = 3;
 * @return {?proto.openim.sdk.message.SoundBaseInfo}
 */
proto.openim.sdk.msg.CreateSoundMessageReq.prototype.getSoundelem = function() {
  return /** @type{?proto.openim.sdk.message.SoundBaseInfo} */ (
    jspb.Message.getWrapperField(this, message_pb.SoundBaseInfo, 3));
};


/**
 * @param {?proto.openim.sdk.message.SoundBaseInfo|undefined} value
 * @return {!proto.openim.sdk.msg.CreateSoundMessageReq} returns this
*/
proto.openim.sdk.msg.CreateSoundMessageReq.prototype.setSoundelem = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateSoundMessageReq} returns this
 */
proto.openim.sdk.msg.CreateSoundMessageReq.prototype.clearSoundelem = function() {
  return this.setSoundelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateSoundMessageReq.prototype.hasSoundelem = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.openim.sdk.msg.CreateSoundMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateSoundMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateSoundMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateSoundMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && message_pb.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateSoundMessageResp}
 */
proto.openim.sdk.msg.CreateSoundMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateSoundMessageResp;
  return proto.openim.sdk.msg.CreateSoundMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateSoundMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateSoundMessageResp}
 */
proto.openim.sdk.msg.CreateSoundMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.msg.CreateSoundMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateSoundMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateSoundMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateSoundMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.message.IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.CreateSoundMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.CreateSoundMessageResp} returns this
*/
proto.openim.sdk.msg.CreateSoundMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateSoundMessageResp} returns this
 */
proto.openim.sdk.msg.CreateSoundMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateSoundMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.msg.CreateVideoMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateVideoMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateVideoMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateVideoMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
videosourcepath: jspb.Message.getFieldWithDefault(msg, 1, ""),
videotype: jspb.Message.getFieldWithDefault(msg, 2, ""),
duration: jspb.Message.getFieldWithDefault(msg, 3, 0),
snapshotsourcepath: jspb.Message.getFieldWithDefault(msg, 4, ""),
videoelem: (f = msg.getVideoelem()) && message_pb.VideoBaseInfo.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateVideoMessageReq}
 */
proto.openim.sdk.msg.CreateVideoMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateVideoMessageReq;
  return proto.openim.sdk.msg.CreateVideoMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateVideoMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateVideoMessageReq}
 */
proto.openim.sdk.msg.CreateVideoMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVideosourcepath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVideotype(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuration(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnapshotsourcepath(value);
      break;
    case 5:
      var value = new message_pb.VideoBaseInfo;
      reader.readMessage(value,message_pb.VideoBaseInfo.deserializeBinaryFromReader);
      msg.setVideoelem(value);
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
proto.openim.sdk.msg.CreateVideoMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateVideoMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateVideoMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateVideoMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideosourcepath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVideotype();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getSnapshotsourcepath();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getVideoelem();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      message_pb.VideoBaseInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string videoSourcePath = 1;
 * @return {string}
 */
proto.openim.sdk.msg.CreateVideoMessageReq.prototype.getVideosourcepath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.CreateVideoMessageReq} returns this
 */
proto.openim.sdk.msg.CreateVideoMessageReq.prototype.setVideosourcepath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string videoType = 2;
 * @return {string}
 */
proto.openim.sdk.msg.CreateVideoMessageReq.prototype.getVideotype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.CreateVideoMessageReq} returns this
 */
proto.openim.sdk.msg.CreateVideoMessageReq.prototype.setVideotype = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 duration = 3;
 * @return {number}
 */
proto.openim.sdk.msg.CreateVideoMessageReq.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.CreateVideoMessageReq} returns this
 */
proto.openim.sdk.msg.CreateVideoMessageReq.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string snapshotSourcePath = 4;
 * @return {string}
 */
proto.openim.sdk.msg.CreateVideoMessageReq.prototype.getSnapshotsourcepath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.CreateVideoMessageReq} returns this
 */
proto.openim.sdk.msg.CreateVideoMessageReq.prototype.setSnapshotsourcepath = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional openim.sdk.message.VideoBaseInfo videoElem = 5;
 * @return {?proto.openim.sdk.message.VideoBaseInfo}
 */
proto.openim.sdk.msg.CreateVideoMessageReq.prototype.getVideoelem = function() {
  return /** @type{?proto.openim.sdk.message.VideoBaseInfo} */ (
    jspb.Message.getWrapperField(this, message_pb.VideoBaseInfo, 5));
};


/**
 * @param {?proto.openim.sdk.message.VideoBaseInfo|undefined} value
 * @return {!proto.openim.sdk.msg.CreateVideoMessageReq} returns this
*/
proto.openim.sdk.msg.CreateVideoMessageReq.prototype.setVideoelem = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateVideoMessageReq} returns this
 */
proto.openim.sdk.msg.CreateVideoMessageReq.prototype.clearVideoelem = function() {
  return this.setVideoelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateVideoMessageReq.prototype.hasVideoelem = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.openim.sdk.msg.CreateVideoMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateVideoMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateVideoMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateVideoMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && message_pb.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateVideoMessageResp}
 */
proto.openim.sdk.msg.CreateVideoMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateVideoMessageResp;
  return proto.openim.sdk.msg.CreateVideoMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateVideoMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateVideoMessageResp}
 */
proto.openim.sdk.msg.CreateVideoMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.msg.CreateVideoMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateVideoMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateVideoMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateVideoMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.message.IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.CreateVideoMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.CreateVideoMessageResp} returns this
*/
proto.openim.sdk.msg.CreateVideoMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateVideoMessageResp} returns this
 */
proto.openim.sdk.msg.CreateVideoMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateVideoMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.msg.CreateFileMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateFileMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateFileMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateFileMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
filesourcepath: jspb.Message.getFieldWithDefault(msg, 1, ""),
filename: jspb.Message.getFieldWithDefault(msg, 2, ""),
fileelem: (f = msg.getFileelem()) && message_pb.FileBaseInfo.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateFileMessageReq}
 */
proto.openim.sdk.msg.CreateFileMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateFileMessageReq;
  return proto.openim.sdk.msg.CreateFileMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateFileMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateFileMessageReq}
 */
proto.openim.sdk.msg.CreateFileMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilesourcepath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 3:
      var value = new message_pb.FileBaseInfo;
      reader.readMessage(value,message_pb.FileBaseInfo.deserializeBinaryFromReader);
      msg.setFileelem(value);
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
proto.openim.sdk.msg.CreateFileMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateFileMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateFileMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateFileMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilesourcepath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFileelem();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      message_pb.FileBaseInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string fileSourcePath = 1;
 * @return {string}
 */
proto.openim.sdk.msg.CreateFileMessageReq.prototype.getFilesourcepath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.CreateFileMessageReq} returns this
 */
proto.openim.sdk.msg.CreateFileMessageReq.prototype.setFilesourcepath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string fileName = 2;
 * @return {string}
 */
proto.openim.sdk.msg.CreateFileMessageReq.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.CreateFileMessageReq} returns this
 */
proto.openim.sdk.msg.CreateFileMessageReq.prototype.setFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional openim.sdk.message.FileBaseInfo fileElem = 3;
 * @return {?proto.openim.sdk.message.FileBaseInfo}
 */
proto.openim.sdk.msg.CreateFileMessageReq.prototype.getFileelem = function() {
  return /** @type{?proto.openim.sdk.message.FileBaseInfo} */ (
    jspb.Message.getWrapperField(this, message_pb.FileBaseInfo, 3));
};


/**
 * @param {?proto.openim.sdk.message.FileBaseInfo|undefined} value
 * @return {!proto.openim.sdk.msg.CreateFileMessageReq} returns this
*/
proto.openim.sdk.msg.CreateFileMessageReq.prototype.setFileelem = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateFileMessageReq} returns this
 */
proto.openim.sdk.msg.CreateFileMessageReq.prototype.clearFileelem = function() {
  return this.setFileelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateFileMessageReq.prototype.hasFileelem = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.openim.sdk.msg.CreateFileMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateFileMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateFileMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateFileMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && message_pb.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateFileMessageResp}
 */
proto.openim.sdk.msg.CreateFileMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateFileMessageResp;
  return proto.openim.sdk.msg.CreateFileMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateFileMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateFileMessageResp}
 */
proto.openim.sdk.msg.CreateFileMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.msg.CreateFileMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateFileMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateFileMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateFileMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.message.IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.CreateFileMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.CreateFileMessageResp} returns this
*/
proto.openim.sdk.msg.CreateFileMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateFileMessageResp} returns this
 */
proto.openim.sdk.msg.CreateFileMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateFileMessageResp.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.msg.CreateMergerMessageReq.repeatedFields_ = [1,3];



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
proto.openim.sdk.msg.CreateMergerMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateMergerMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateMergerMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateMergerMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
messagesList: jspb.Message.toObjectList(msg.getMessagesList(),
    message_pb.IMMessage.toObject, includeInstance),
title: jspb.Message.getFieldWithDefault(msg, 2, ""),
summariesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.openim.sdk.msg.CreateMergerMessageReq}
 */
proto.openim.sdk.msg.CreateMergerMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateMergerMessageReq;
  return proto.openim.sdk.msg.CreateMergerMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateMergerMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateMergerMessageReq}
 */
proto.openim.sdk.msg.CreateMergerMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
      msg.addMessages(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSummaries(value);
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
proto.openim.sdk.msg.CreateMergerMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateMergerMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateMergerMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateMergerMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSummariesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * repeated openim.sdk.message.IMMessage messages = 1;
 * @return {!Array<!proto.openim.sdk.message.IMMessage>}
 */
proto.openim.sdk.msg.CreateMergerMessageReq.prototype.getMessagesList = function() {
  return /** @type{!Array<!proto.openim.sdk.message.IMMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.message.IMMessage>} value
 * @return {!proto.openim.sdk.msg.CreateMergerMessageReq} returns this
*/
proto.openim.sdk.msg.CreateMergerMessageReq.prototype.setMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.message.IMMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.CreateMergerMessageReq.prototype.addMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.message.IMMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.msg.CreateMergerMessageReq} returns this
 */
proto.openim.sdk.msg.CreateMergerMessageReq.prototype.clearMessagesList = function() {
  return this.setMessagesList([]);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.openim.sdk.msg.CreateMergerMessageReq.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.CreateMergerMessageReq} returns this
 */
proto.openim.sdk.msg.CreateMergerMessageReq.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string summaries = 3;
 * @return {!Array<string>}
 */
proto.openim.sdk.msg.CreateMergerMessageReq.prototype.getSummariesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.msg.CreateMergerMessageReq} returns this
 */
proto.openim.sdk.msg.CreateMergerMessageReq.prototype.setSummariesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.msg.CreateMergerMessageReq} returns this
 */
proto.openim.sdk.msg.CreateMergerMessageReq.prototype.addSummaries = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.msg.CreateMergerMessageReq} returns this
 */
proto.openim.sdk.msg.CreateMergerMessageReq.prototype.clearSummariesList = function() {
  return this.setSummariesList([]);
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
proto.openim.sdk.msg.CreateMergerMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateMergerMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateMergerMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateMergerMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && message_pb.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateMergerMessageResp}
 */
proto.openim.sdk.msg.CreateMergerMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateMergerMessageResp;
  return proto.openim.sdk.msg.CreateMergerMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateMergerMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateMergerMessageResp}
 */
proto.openim.sdk.msg.CreateMergerMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.msg.CreateMergerMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateMergerMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateMergerMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateMergerMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.message.IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.CreateMergerMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.CreateMergerMessageResp} returns this
*/
proto.openim.sdk.msg.CreateMergerMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateMergerMessageResp} returns this
 */
proto.openim.sdk.msg.CreateMergerMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateMergerMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.msg.CreateFaceMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateFaceMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateFaceMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateFaceMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
index: jspb.Message.getFieldWithDefault(msg, 1, 0),
data: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.openim.sdk.msg.CreateFaceMessageReq}
 */
proto.openim.sdk.msg.CreateFaceMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateFaceMessageReq;
  return proto.openim.sdk.msg.CreateFaceMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateFaceMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateFaceMessageReq}
 */
proto.openim.sdk.msg.CreateFaceMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setData(value);
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
proto.openim.sdk.msg.CreateFaceMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateFaceMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateFaceMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateFaceMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getData();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 index = 1;
 * @return {number}
 */
proto.openim.sdk.msg.CreateFaceMessageReq.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.CreateFaceMessageReq} returns this
 */
proto.openim.sdk.msg.CreateFaceMessageReq.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string data = 2;
 * @return {string}
 */
proto.openim.sdk.msg.CreateFaceMessageReq.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.CreateFaceMessageReq} returns this
 */
proto.openim.sdk.msg.CreateFaceMessageReq.prototype.setData = function(value) {
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
proto.openim.sdk.msg.CreateFaceMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateFaceMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateFaceMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateFaceMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && message_pb.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateFaceMessageResp}
 */
proto.openim.sdk.msg.CreateFaceMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateFaceMessageResp;
  return proto.openim.sdk.msg.CreateFaceMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateFaceMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateFaceMessageResp}
 */
proto.openim.sdk.msg.CreateFaceMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.msg.CreateFaceMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateFaceMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateFaceMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateFaceMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.message.IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.CreateFaceMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.CreateFaceMessageResp} returns this
*/
proto.openim.sdk.msg.CreateFaceMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateFaceMessageResp} returns this
 */
proto.openim.sdk.msg.CreateFaceMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateFaceMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.msg.CreateForwardMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateForwardMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateForwardMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateForwardMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && message_pb.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateForwardMessageReq}
 */
proto.openim.sdk.msg.CreateForwardMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateForwardMessageReq;
  return proto.openim.sdk.msg.CreateForwardMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateForwardMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateForwardMessageReq}
 */
proto.openim.sdk.msg.CreateForwardMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.msg.CreateForwardMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateForwardMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateForwardMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateForwardMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.message.IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.CreateForwardMessageReq.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.CreateForwardMessageReq} returns this
*/
proto.openim.sdk.msg.CreateForwardMessageReq.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateForwardMessageReq} returns this
 */
proto.openim.sdk.msg.CreateForwardMessageReq.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateForwardMessageReq.prototype.hasMessage = function() {
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
proto.openim.sdk.msg.CreateForwardMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.CreateForwardMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.CreateForwardMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateForwardMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && message_pb.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.msg.CreateForwardMessageResp}
 */
proto.openim.sdk.msg.CreateForwardMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.CreateForwardMessageResp;
  return proto.openim.sdk.msg.CreateForwardMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.CreateForwardMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.CreateForwardMessageResp}
 */
proto.openim.sdk.msg.CreateForwardMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new message_pb.IMMessage;
      reader.readMessage(value,message_pb.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.msg.CreateForwardMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.CreateForwardMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.CreateForwardMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.CreateForwardMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      message_pb.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.message.IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.msg.CreateForwardMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.msg.CreateForwardMessageResp} returns this
*/
proto.openim.sdk.msg.CreateForwardMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.msg.CreateForwardMessageResp} returns this
 */
proto.openim.sdk.msg.CreateForwardMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.msg.CreateForwardMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.msg.UploadLogsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.UploadLogsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.UploadLogsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.UploadLogsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
line: jspb.Message.getFieldWithDefault(msg, 1, 0),
ex: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.openim.sdk.msg.UploadLogsReq}
 */
proto.openim.sdk.msg.UploadLogsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.UploadLogsReq;
  return proto.openim.sdk.msg.UploadLogsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.UploadLogsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.UploadLogsReq}
 */
proto.openim.sdk.msg.UploadLogsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLine(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEx(value);
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
proto.openim.sdk.msg.UploadLogsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.UploadLogsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.UploadLogsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.UploadLogsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLine();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getEx();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 line = 1;
 * @return {number}
 */
proto.openim.sdk.msg.UploadLogsReq.prototype.getLine = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.UploadLogsReq} returns this
 */
proto.openim.sdk.msg.UploadLogsReq.prototype.setLine = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string ex = 2;
 * @return {string}
 */
proto.openim.sdk.msg.UploadLogsReq.prototype.getEx = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.UploadLogsReq} returns this
 */
proto.openim.sdk.msg.UploadLogsReq.prototype.setEx = function(value) {
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
proto.openim.sdk.msg.UploadLogsResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.UploadLogsResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.UploadLogsResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.UploadLogsResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.msg.UploadLogsResp}
 */
proto.openim.sdk.msg.UploadLogsResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.UploadLogsResp;
  return proto.openim.sdk.msg.UploadLogsResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.UploadLogsResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.UploadLogsResp}
 */
proto.openim.sdk.msg.UploadLogsResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.msg.UploadLogsResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.UploadLogsResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.UploadLogsResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.UploadLogsResp.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.msg.LogReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.LogReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.LogReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.LogReq.toObject = function(includeInstance, msg) {
  var f, obj = {
loglevel: jspb.Message.getFieldWithDefault(msg, 1, 0),
file: jspb.Message.getFieldWithDefault(msg, 2, ""),
line: jspb.Message.getFieldWithDefault(msg, 3, 0),
msg: jspb.Message.getFieldWithDefault(msg, 4, ""),
err: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.openim.sdk.msg.LogReq}
 */
proto.openim.sdk.msg.LogReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.LogReq;
  return proto.openim.sdk.msg.LogReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.LogReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.LogReq}
 */
proto.openim.sdk.msg.LogReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLoglevel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFile(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLine(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setErr(value);
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
proto.openim.sdk.msg.LogReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.LogReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.LogReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.LogReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoglevel();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFile();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLine();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getErr();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int32 logLevel = 1;
 * @return {number}
 */
proto.openim.sdk.msg.LogReq.prototype.getLoglevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.LogReq} returns this
 */
proto.openim.sdk.msg.LogReq.prototype.setLoglevel = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string file = 2;
 * @return {string}
 */
proto.openim.sdk.msg.LogReq.prototype.getFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.LogReq} returns this
 */
proto.openim.sdk.msg.LogReq.prototype.setFile = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 line = 3;
 * @return {number}
 */
proto.openim.sdk.msg.LogReq.prototype.getLine = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.msg.LogReq} returns this
 */
proto.openim.sdk.msg.LogReq.prototype.setLine = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string msg = 4;
 * @return {string}
 */
proto.openim.sdk.msg.LogReq.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.LogReq} returns this
 */
proto.openim.sdk.msg.LogReq.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string err = 5;
 * @return {string}
 */
proto.openim.sdk.msg.LogReq.prototype.getErr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.msg.LogReq} returns this
 */
proto.openim.sdk.msg.LogReq.prototype.setErr = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.openim.sdk.msg.LogResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.msg.LogResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.msg.LogResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.LogResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.msg.LogResp}
 */
proto.openim.sdk.msg.LogResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.msg.LogResp;
  return proto.openim.sdk.msg.LogResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.msg.LogResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.msg.LogResp}
 */
proto.openim.sdk.msg.LogResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.msg.LogResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.msg.LogResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.msg.LogResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.msg.LogResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.openim.sdk.msg);
