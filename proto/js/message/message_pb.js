// source: message.proto
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
goog.exportSymbol('proto.openim.sdk.message.AdvancedTextElem', null, global);
goog.exportSymbol('proto.openim.sdk.message.AtInfo', null, global);
goog.exportSymbol('proto.openim.sdk.message.AtTextElem', null, global);
goog.exportSymbol('proto.openim.sdk.message.AttachedInfoElem', null, global);
goog.exportSymbol('proto.openim.sdk.message.CardElem', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateAdvancedQuoteMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateAdvancedQuoteMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateAdvancedTextMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateAdvancedTextMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateCardMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateCardMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateCustomMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateCustomMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateFaceMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateFaceMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateFileMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateFileMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateForwardMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateForwardMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateImageMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateImageMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateLocationMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateLocationMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateMergerMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateMergerMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateQuoteMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateQuoteMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateSoundMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateSoundMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateTextAtMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateTextAtMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateTextMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateTextMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateVideoMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.CreateVideoMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.CustomElem', null, global);
goog.exportSymbol('proto.openim.sdk.message.DeleteAllMessageFromLocalStorageReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.DeleteAllMessageFromLocalStorageResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.DeleteMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.DeleteMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.FaceElem', null, global);
goog.exportSymbol('proto.openim.sdk.message.FileBaseInfo', null, global);
goog.exportSymbol('proto.openim.sdk.message.FileElem', null, global);
goog.exportSymbol('proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback', null, global);
goog.exportSymbol('proto.openim.sdk.message.GetAdvancedHistoryMessageListParams', null, global);
goog.exportSymbol('proto.openim.sdk.message.GetAdvancedHistoryMessageListReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.GetAdvancedHistoryMessageListResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.GroupHasReadInfo', null, global);
goog.exportSymbol('proto.openim.sdk.message.IMMessage', null, global);
goog.exportSymbol('proto.openim.sdk.message.IMMessage.ContentCase', null, global);
goog.exportSymbol('proto.openim.sdk.message.ImageInfo', null, global);
goog.exportSymbol('proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.LocationElem', null, global);
goog.exportSymbol('proto.openim.sdk.message.LogReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.LogResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.MergeElem', null, global);
goog.exportSymbol('proto.openim.sdk.message.MessageEntity', null, global);
goog.exportSymbol('proto.openim.sdk.message.MessageReaction', null, global);
goog.exportSymbol('proto.openim.sdk.message.MessageReceipt', null, global);
goog.exportSymbol('proto.openim.sdk.message.MessageRevoked', null, global);
goog.exportSymbol('proto.openim.sdk.message.NotificationElem', null, global);
goog.exportSymbol('proto.openim.sdk.message.PictureBaseInfo', null, global);
goog.exportSymbol('proto.openim.sdk.message.PictureElem', null, global);
goog.exportSymbol('proto.openim.sdk.message.QuoteElem', null, global);
goog.exportSymbol('proto.openim.sdk.message.ReactionElem', null, global);
goog.exportSymbol('proto.openim.sdk.message.RevokeMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.RevokeMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.SendMessageReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.SendMessageResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.SoundBaseInfo', null, global);
goog.exportSymbol('proto.openim.sdk.message.SoundElem', null, global);
goog.exportSymbol('proto.openim.sdk.message.StreamElem', null, global);
goog.exportSymbol('proto.openim.sdk.message.TextElem', null, global);
goog.exportSymbol('proto.openim.sdk.message.TypingElem', null, global);
goog.exportSymbol('proto.openim.sdk.message.TypingStatusUpdateReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.TypingStatusUpdateResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.UploadLogsReq', null, global);
goog.exportSymbol('proto.openim.sdk.message.UploadLogsResp', null, global);
goog.exportSymbol('proto.openim.sdk.message.UploadProgress', null, global);
goog.exportSymbol('proto.openim.sdk.message.UserReactionElem', null, global);
goog.exportSymbol('proto.openim.sdk.message.VideoBaseInfo', null, global);
goog.exportSymbol('proto.openim.sdk.message.VideoElem', null, global);
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
proto.openim.sdk.message.MessageReceipt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.message.MessageReceipt.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.message.MessageReceipt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.MessageReceipt.displayName = 'proto.openim.sdk.message.MessageReceipt';
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
proto.openim.sdk.message.MessageRevoked = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.MessageRevoked, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.MessageRevoked.displayName = 'proto.openim.sdk.message.MessageRevoked';
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
proto.openim.sdk.message.MessageReaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.MessageReaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.MessageReaction.displayName = 'proto.openim.sdk.message.MessageReaction';
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
proto.openim.sdk.message.ImageInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.ImageInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.ImageInfo.displayName = 'proto.openim.sdk.message.ImageInfo';
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
proto.openim.sdk.message.PictureBaseInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.PictureBaseInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.PictureBaseInfo.displayName = 'proto.openim.sdk.message.PictureBaseInfo';
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
proto.openim.sdk.message.SoundBaseInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.SoundBaseInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.SoundBaseInfo.displayName = 'proto.openim.sdk.message.SoundBaseInfo';
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
proto.openim.sdk.message.VideoBaseInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.VideoBaseInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.VideoBaseInfo.displayName = 'proto.openim.sdk.message.VideoBaseInfo';
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
proto.openim.sdk.message.FileBaseInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.FileBaseInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.FileBaseInfo.displayName = 'proto.openim.sdk.message.FileBaseInfo';
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
proto.openim.sdk.message.TextElem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.TextElem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.TextElem.displayName = 'proto.openim.sdk.message.TextElem';
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
proto.openim.sdk.message.CardElem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CardElem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CardElem.displayName = 'proto.openim.sdk.message.CardElem';
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
proto.openim.sdk.message.PictureElem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.PictureElem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.PictureElem.displayName = 'proto.openim.sdk.message.PictureElem';
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
proto.openim.sdk.message.SoundElem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.SoundElem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.SoundElem.displayName = 'proto.openim.sdk.message.SoundElem';
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
proto.openim.sdk.message.VideoElem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.VideoElem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.VideoElem.displayName = 'proto.openim.sdk.message.VideoElem';
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
proto.openim.sdk.message.FileElem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.FileElem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.FileElem.displayName = 'proto.openim.sdk.message.FileElem';
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
proto.openim.sdk.message.MergeElem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.message.MergeElem.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.message.MergeElem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.MergeElem.displayName = 'proto.openim.sdk.message.MergeElem';
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
proto.openim.sdk.message.AtTextElem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.message.AtTextElem.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.message.AtTextElem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.AtTextElem.displayName = 'proto.openim.sdk.message.AtTextElem';
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
proto.openim.sdk.message.FaceElem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.FaceElem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.FaceElem.displayName = 'proto.openim.sdk.message.FaceElem';
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
proto.openim.sdk.message.LocationElem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.LocationElem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.LocationElem.displayName = 'proto.openim.sdk.message.LocationElem';
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
proto.openim.sdk.message.CustomElem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CustomElem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CustomElem.displayName = 'proto.openim.sdk.message.CustomElem';
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
proto.openim.sdk.message.QuoteElem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.message.QuoteElem.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.message.QuoteElem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.QuoteElem.displayName = 'proto.openim.sdk.message.QuoteElem';
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
proto.openim.sdk.message.NotificationElem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.NotificationElem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.NotificationElem.displayName = 'proto.openim.sdk.message.NotificationElem';
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
proto.openim.sdk.message.AdvancedTextElem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.message.AdvancedTextElem.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.message.AdvancedTextElem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.AdvancedTextElem.displayName = 'proto.openim.sdk.message.AdvancedTextElem';
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
proto.openim.sdk.message.TypingElem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.TypingElem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.TypingElem.displayName = 'proto.openim.sdk.message.TypingElem';
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
proto.openim.sdk.message.StreamElem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.message.StreamElem.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.message.StreamElem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.StreamElem.displayName = 'proto.openim.sdk.message.StreamElem';
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
proto.openim.sdk.message.AtInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.AtInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.AtInfo.displayName = 'proto.openim.sdk.message.AtInfo';
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
proto.openim.sdk.message.AttachedInfoElem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.AttachedInfoElem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.AttachedInfoElem.displayName = 'proto.openim.sdk.message.AttachedInfoElem';
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
proto.openim.sdk.message.UploadProgress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.UploadProgress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.UploadProgress.displayName = 'proto.openim.sdk.message.UploadProgress';
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
proto.openim.sdk.message.ReactionElem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.message.ReactionElem.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.message.ReactionElem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.ReactionElem.displayName = 'proto.openim.sdk.message.ReactionElem';
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
proto.openim.sdk.message.UserReactionElem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.UserReactionElem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.UserReactionElem.displayName = 'proto.openim.sdk.message.UserReactionElem';
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
proto.openim.sdk.message.MessageEntity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.MessageEntity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.MessageEntity.displayName = 'proto.openim.sdk.message.MessageEntity';
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
proto.openim.sdk.message.GroupHasReadInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.message.GroupHasReadInfo.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.message.GroupHasReadInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.GroupHasReadInfo.displayName = 'proto.openim.sdk.message.GroupHasReadInfo';
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
proto.openim.sdk.message.IMMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.openim.sdk.message.IMMessage.oneofGroups_);
};
goog.inherits(proto.openim.sdk.message.IMMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.IMMessage.displayName = 'proto.openim.sdk.message.IMMessage';
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
proto.openim.sdk.message.GetAdvancedHistoryMessageListParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.GetAdvancedHistoryMessageListParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.GetAdvancedHistoryMessageListParams.displayName = 'proto.openim.sdk.message.GetAdvancedHistoryMessageListParams';
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
proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.displayName = 'proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback';
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
proto.openim.sdk.message.SendMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.SendMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.SendMessageReq.displayName = 'proto.openim.sdk.message.SendMessageReq';
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
proto.openim.sdk.message.SendMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.SendMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.SendMessageResp.displayName = 'proto.openim.sdk.message.SendMessageResp';
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
proto.openim.sdk.message.GetAdvancedHistoryMessageListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.GetAdvancedHistoryMessageListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.GetAdvancedHistoryMessageListReq.displayName = 'proto.openim.sdk.message.GetAdvancedHistoryMessageListReq';
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
proto.openim.sdk.message.GetAdvancedHistoryMessageListResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.GetAdvancedHistoryMessageListResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.GetAdvancedHistoryMessageListResp.displayName = 'proto.openim.sdk.message.GetAdvancedHistoryMessageListResp';
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
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq.displayName = 'proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq';
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
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp.displayName = 'proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp';
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
proto.openim.sdk.message.RevokeMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.RevokeMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.RevokeMessageReq.displayName = 'proto.openim.sdk.message.RevokeMessageReq';
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
proto.openim.sdk.message.RevokeMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.RevokeMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.RevokeMessageResp.displayName = 'proto.openim.sdk.message.RevokeMessageResp';
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
proto.openim.sdk.message.TypingStatusUpdateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.TypingStatusUpdateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.TypingStatusUpdateReq.displayName = 'proto.openim.sdk.message.TypingStatusUpdateReq';
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
proto.openim.sdk.message.TypingStatusUpdateResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.TypingStatusUpdateResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.TypingStatusUpdateResp.displayName = 'proto.openim.sdk.message.TypingStatusUpdateResp';
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
proto.openim.sdk.message.DeleteMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.DeleteMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.DeleteMessageReq.displayName = 'proto.openim.sdk.message.DeleteMessageReq';
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
proto.openim.sdk.message.DeleteMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.DeleteMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.DeleteMessageResp.displayName = 'proto.openim.sdk.message.DeleteMessageResp';
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
proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerReq.displayName = 'proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerReq';
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
proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerResp.displayName = 'proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerResp';
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
proto.openim.sdk.message.DeleteAllMessageFromLocalStorageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.DeleteAllMessageFromLocalStorageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.DeleteAllMessageFromLocalStorageReq.displayName = 'proto.openim.sdk.message.DeleteAllMessageFromLocalStorageReq';
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
proto.openim.sdk.message.DeleteAllMessageFromLocalStorageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.DeleteAllMessageFromLocalStorageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.DeleteAllMessageFromLocalStorageResp.displayName = 'proto.openim.sdk.message.DeleteAllMessageFromLocalStorageResp';
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
proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq.displayName = 'proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq';
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
proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp.displayName = 'proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp';
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
proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq.displayName = 'proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq';
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
proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp.displayName = 'proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp';
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
proto.openim.sdk.message.CreateTextMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateTextMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateTextMessageReq.displayName = 'proto.openim.sdk.message.CreateTextMessageReq';
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
proto.openim.sdk.message.CreateTextMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateTextMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateTextMessageResp.displayName = 'proto.openim.sdk.message.CreateTextMessageResp';
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
proto.openim.sdk.message.CreateAdvancedTextMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.message.CreateAdvancedTextMessageReq.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.message.CreateAdvancedTextMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateAdvancedTextMessageReq.displayName = 'proto.openim.sdk.message.CreateAdvancedTextMessageReq';
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
proto.openim.sdk.message.CreateAdvancedTextMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateAdvancedTextMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateAdvancedTextMessageResp.displayName = 'proto.openim.sdk.message.CreateAdvancedTextMessageResp';
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
proto.openim.sdk.message.CreateTextAtMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.message.CreateTextAtMessageReq.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.message.CreateTextAtMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateTextAtMessageReq.displayName = 'proto.openim.sdk.message.CreateTextAtMessageReq';
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
proto.openim.sdk.message.CreateTextAtMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateTextAtMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateTextAtMessageResp.displayName = 'proto.openim.sdk.message.CreateTextAtMessageResp';
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
proto.openim.sdk.message.CreateLocationMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateLocationMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateLocationMessageReq.displayName = 'proto.openim.sdk.message.CreateLocationMessageReq';
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
proto.openim.sdk.message.CreateLocationMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateLocationMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateLocationMessageResp.displayName = 'proto.openim.sdk.message.CreateLocationMessageResp';
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
proto.openim.sdk.message.CreateCustomMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateCustomMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateCustomMessageReq.displayName = 'proto.openim.sdk.message.CreateCustomMessageReq';
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
proto.openim.sdk.message.CreateCustomMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateCustomMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateCustomMessageResp.displayName = 'proto.openim.sdk.message.CreateCustomMessageResp';
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
proto.openim.sdk.message.CreateQuoteMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateQuoteMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateQuoteMessageReq.displayName = 'proto.openim.sdk.message.CreateQuoteMessageReq';
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
proto.openim.sdk.message.CreateQuoteMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateQuoteMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateQuoteMessageResp.displayName = 'proto.openim.sdk.message.CreateQuoteMessageResp';
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
proto.openim.sdk.message.CreateAdvancedQuoteMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.message.CreateAdvancedQuoteMessageReq.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.message.CreateAdvancedQuoteMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateAdvancedQuoteMessageReq.displayName = 'proto.openim.sdk.message.CreateAdvancedQuoteMessageReq';
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
proto.openim.sdk.message.CreateAdvancedQuoteMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateAdvancedQuoteMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateAdvancedQuoteMessageResp.displayName = 'proto.openim.sdk.message.CreateAdvancedQuoteMessageResp';
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
proto.openim.sdk.message.CreateCardMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateCardMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateCardMessageReq.displayName = 'proto.openim.sdk.message.CreateCardMessageReq';
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
proto.openim.sdk.message.CreateCardMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateCardMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateCardMessageResp.displayName = 'proto.openim.sdk.message.CreateCardMessageResp';
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
proto.openim.sdk.message.CreateImageMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateImageMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateImageMessageReq.displayName = 'proto.openim.sdk.message.CreateImageMessageReq';
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
proto.openim.sdk.message.CreateImageMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateImageMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateImageMessageResp.displayName = 'proto.openim.sdk.message.CreateImageMessageResp';
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
proto.openim.sdk.message.CreateSoundMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateSoundMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateSoundMessageReq.displayName = 'proto.openim.sdk.message.CreateSoundMessageReq';
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
proto.openim.sdk.message.CreateSoundMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateSoundMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateSoundMessageResp.displayName = 'proto.openim.sdk.message.CreateSoundMessageResp';
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
proto.openim.sdk.message.CreateVideoMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateVideoMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateVideoMessageReq.displayName = 'proto.openim.sdk.message.CreateVideoMessageReq';
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
proto.openim.sdk.message.CreateVideoMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateVideoMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateVideoMessageResp.displayName = 'proto.openim.sdk.message.CreateVideoMessageResp';
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
proto.openim.sdk.message.CreateFileMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateFileMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateFileMessageReq.displayName = 'proto.openim.sdk.message.CreateFileMessageReq';
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
proto.openim.sdk.message.CreateFileMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateFileMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateFileMessageResp.displayName = 'proto.openim.sdk.message.CreateFileMessageResp';
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
proto.openim.sdk.message.CreateMergerMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.message.CreateMergerMessageReq.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.message.CreateMergerMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateMergerMessageReq.displayName = 'proto.openim.sdk.message.CreateMergerMessageReq';
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
proto.openim.sdk.message.CreateMergerMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateMergerMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateMergerMessageResp.displayName = 'proto.openim.sdk.message.CreateMergerMessageResp';
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
proto.openim.sdk.message.CreateFaceMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateFaceMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateFaceMessageReq.displayName = 'proto.openim.sdk.message.CreateFaceMessageReq';
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
proto.openim.sdk.message.CreateFaceMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateFaceMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateFaceMessageResp.displayName = 'proto.openim.sdk.message.CreateFaceMessageResp';
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
proto.openim.sdk.message.CreateForwardMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateForwardMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateForwardMessageReq.displayName = 'proto.openim.sdk.message.CreateForwardMessageReq';
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
proto.openim.sdk.message.CreateForwardMessageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.CreateForwardMessageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.CreateForwardMessageResp.displayName = 'proto.openim.sdk.message.CreateForwardMessageResp';
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
proto.openim.sdk.message.UploadLogsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.UploadLogsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.UploadLogsReq.displayName = 'proto.openim.sdk.message.UploadLogsReq';
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
proto.openim.sdk.message.UploadLogsResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.UploadLogsResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.UploadLogsResp.displayName = 'proto.openim.sdk.message.UploadLogsResp';
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
proto.openim.sdk.message.LogReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.LogReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.LogReq.displayName = 'proto.openim.sdk.message.LogReq';
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
proto.openim.sdk.message.LogResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.message.LogResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.message.LogResp.displayName = 'proto.openim.sdk.message.LogResp';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.message.MessageReceipt.repeatedFields_ = [3];



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
proto.openim.sdk.message.MessageReceipt.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.MessageReceipt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.MessageReceipt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.MessageReceipt.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.MessageReceipt}
 */
proto.openim.sdk.message.MessageReceipt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.MessageReceipt;
  return proto.openim.sdk.message.MessageReceipt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.MessageReceipt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.MessageReceipt}
 */
proto.openim.sdk.message.MessageReceipt.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.MessageReceipt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.MessageReceipt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.MessageReceipt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.MessageReceipt.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.MessageReceipt.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.MessageReceipt} returns this
 */
proto.openim.sdk.message.MessageReceipt.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string userID = 2;
 * @return {string}
 */
proto.openim.sdk.message.MessageReceipt.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.MessageReceipt} returns this
 */
proto.openim.sdk.message.MessageReceipt.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string msgIDList = 3;
 * @return {!Array<string>}
 */
proto.openim.sdk.message.MessageReceipt.prototype.getMsgidlistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.message.MessageReceipt} returns this
 */
proto.openim.sdk.message.MessageReceipt.prototype.setMsgidlistList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.MessageReceipt} returns this
 */
proto.openim.sdk.message.MessageReceipt.prototype.addMsgidlist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.message.MessageReceipt} returns this
 */
proto.openim.sdk.message.MessageReceipt.prototype.clearMsgidlistList = function() {
  return this.setMsgidlistList([]);
};


/**
 * optional int64 readTime = 4;
 * @return {number}
 */
proto.openim.sdk.message.MessageReceipt.prototype.getReadtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.MessageReceipt} returns this
 */
proto.openim.sdk.message.MessageReceipt.prototype.setReadtime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 msgFrom = 5;
 * @return {number}
 */
proto.openim.sdk.message.MessageReceipt.prototype.getMsgfrom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.MessageReceipt} returns this
 */
proto.openim.sdk.message.MessageReceipt.prototype.setMsgfrom = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 contentType = 6;
 * @return {number}
 */
proto.openim.sdk.message.MessageReceipt.prototype.getContenttype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.MessageReceipt} returns this
 */
proto.openim.sdk.message.MessageReceipt.prototype.setContenttype = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 sessionType = 7;
 * @return {number}
 */
proto.openim.sdk.message.MessageReceipt.prototype.getSessiontype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.MessageReceipt} returns this
 */
proto.openim.sdk.message.MessageReceipt.prototype.setSessiontype = function(value) {
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
proto.openim.sdk.message.MessageRevoked.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.MessageRevoked.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.MessageRevoked} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.MessageRevoked.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.MessageRevoked}
 */
proto.openim.sdk.message.MessageRevoked.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.MessageRevoked;
  return proto.openim.sdk.message.MessageRevoked.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.MessageRevoked} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.MessageRevoked}
 */
proto.openim.sdk.message.MessageRevoked.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.MessageRevoked.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.MessageRevoked.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.MessageRevoked} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.MessageRevoked.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.MessageRevoked.prototype.getRevokerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.MessageRevoked} returns this
 */
proto.openim.sdk.message.MessageRevoked.prototype.setRevokerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 revokerRole = 2;
 * @return {number}
 */
proto.openim.sdk.message.MessageRevoked.prototype.getRevokerrole = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.MessageRevoked} returns this
 */
proto.openim.sdk.message.MessageRevoked.prototype.setRevokerrole = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string clientMsgID = 3;
 * @return {string}
 */
proto.openim.sdk.message.MessageRevoked.prototype.getClientmsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.MessageRevoked} returns this
 */
proto.openim.sdk.message.MessageRevoked.prototype.setClientmsgid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string revokerNickname = 4;
 * @return {string}
 */
proto.openim.sdk.message.MessageRevoked.prototype.getRevokernickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.MessageRevoked} returns this
 */
proto.openim.sdk.message.MessageRevoked.prototype.setRevokernickname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 revokeTime = 5;
 * @return {number}
 */
proto.openim.sdk.message.MessageRevoked.prototype.getRevoketime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.MessageRevoked} returns this
 */
proto.openim.sdk.message.MessageRevoked.prototype.setRevoketime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 sourceMessageSendTime = 6;
 * @return {number}
 */
proto.openim.sdk.message.MessageRevoked.prototype.getSourcemessagesendtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.MessageRevoked} returns this
 */
proto.openim.sdk.message.MessageRevoked.prototype.setSourcemessagesendtime = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string sourceMessageSendID = 7;
 * @return {string}
 */
proto.openim.sdk.message.MessageRevoked.prototype.getSourcemessagesendid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.MessageRevoked} returns this
 */
proto.openim.sdk.message.MessageRevoked.prototype.setSourcemessagesendid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string sourceMessageSenderNickname = 8;
 * @return {string}
 */
proto.openim.sdk.message.MessageRevoked.prototype.getSourcemessagesendernickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.MessageRevoked} returns this
 */
proto.openim.sdk.message.MessageRevoked.prototype.setSourcemessagesendernickname = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 sessionType = 9;
 * @return {number}
 */
proto.openim.sdk.message.MessageRevoked.prototype.getSessiontype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.MessageRevoked} returns this
 */
proto.openim.sdk.message.MessageRevoked.prototype.setSessiontype = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 seq = 10;
 * @return {number}
 */
proto.openim.sdk.message.MessageRevoked.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.MessageRevoked} returns this
 */
proto.openim.sdk.message.MessageRevoked.prototype.setSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string ex = 11;
 * @return {string}
 */
proto.openim.sdk.message.MessageRevoked.prototype.getEx = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.MessageRevoked} returns this
 */
proto.openim.sdk.message.MessageRevoked.prototype.setEx = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional bool isAdminRevoke = 12;
 * @return {boolean}
 */
proto.openim.sdk.message.MessageRevoked.prototype.getIsadminrevoke = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.message.MessageRevoked} returns this
 */
proto.openim.sdk.message.MessageRevoked.prototype.setIsadminrevoke = function(value) {
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
proto.openim.sdk.message.MessageReaction.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.MessageReaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.MessageReaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.MessageReaction.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.MessageReaction}
 */
proto.openim.sdk.message.MessageReaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.MessageReaction;
  return proto.openim.sdk.message.MessageReaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.MessageReaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.MessageReaction}
 */
proto.openim.sdk.message.MessageReaction.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.MessageReaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.MessageReaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.MessageReaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.MessageReaction.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.MessageReaction.prototype.getClientmsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.MessageReaction} returns this
 */
proto.openim.sdk.message.MessageReaction.prototype.setClientmsgid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 reactionType = 2;
 * @return {number}
 */
proto.openim.sdk.message.MessageReaction.prototype.getReactiontype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.MessageReaction} returns this
 */
proto.openim.sdk.message.MessageReaction.prototype.setReactiontype = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 counter = 3;
 * @return {number}
 */
proto.openim.sdk.message.MessageReaction.prototype.getCounter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.MessageReaction} returns this
 */
proto.openim.sdk.message.MessageReaction.prototype.setCounter = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string userID = 4;
 * @return {string}
 */
proto.openim.sdk.message.MessageReaction.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.MessageReaction} returns this
 */
proto.openim.sdk.message.MessageReaction.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string groupID = 5;
 * @return {string}
 */
proto.openim.sdk.message.MessageReaction.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.MessageReaction} returns this
 */
proto.openim.sdk.message.MessageReaction.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 sessionType = 6;
 * @return {number}
 */
proto.openim.sdk.message.MessageReaction.prototype.getSessiontype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.MessageReaction} returns this
 */
proto.openim.sdk.message.MessageReaction.prototype.setSessiontype = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string info = 7;
 * @return {string}
 */
proto.openim.sdk.message.MessageReaction.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.MessageReaction} returns this
 */
proto.openim.sdk.message.MessageReaction.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
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
proto.openim.sdk.message.ImageInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.ImageInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.ImageInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.ImageInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
width: jspb.Message.getFieldWithDefault(msg, 1, 0),
height: jspb.Message.getFieldWithDefault(msg, 2, 0),
type: jspb.Message.getFieldWithDefault(msg, 3, ""),
size: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.openim.sdk.message.ImageInfo}
 */
proto.openim.sdk.message.ImageInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.ImageInfo;
  return proto.openim.sdk.message.ImageInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.ImageInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.ImageInfo}
 */
proto.openim.sdk.message.ImageInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWidth(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeight(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
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
proto.openim.sdk.message.ImageInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.ImageInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.ImageInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.ImageInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWidth();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int32 width = 1;
 * @return {number}
 */
proto.openim.sdk.message.ImageInfo.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.ImageInfo} returns this
 */
proto.openim.sdk.message.ImageInfo.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 height = 2;
 * @return {number}
 */
proto.openim.sdk.message.ImageInfo.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.ImageInfo} returns this
 */
proto.openim.sdk.message.ImageInfo.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.openim.sdk.message.ImageInfo.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.ImageInfo} returns this
 */
proto.openim.sdk.message.ImageInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 size = 4;
 * @return {number}
 */
proto.openim.sdk.message.ImageInfo.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.ImageInfo} returns this
 */
proto.openim.sdk.message.ImageInfo.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.openim.sdk.message.PictureBaseInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.PictureBaseInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.PictureBaseInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.PictureBaseInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
type: jspb.Message.getFieldWithDefault(msg, 2, ""),
size: jspb.Message.getFieldWithDefault(msg, 3, 0),
width: jspb.Message.getFieldWithDefault(msg, 4, 0),
height: jspb.Message.getFieldWithDefault(msg, 5, 0),
url: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.openim.sdk.message.PictureBaseInfo}
 */
proto.openim.sdk.message.PictureBaseInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.PictureBaseInfo;
  return proto.openim.sdk.message.PictureBaseInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.PictureBaseInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.PictureBaseInfo}
 */
proto.openim.sdk.message.PictureBaseInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWidth(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeight(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
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
proto.openim.sdk.message.PictureBaseInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.PictureBaseInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.PictureBaseInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.PictureBaseInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.openim.sdk.message.PictureBaseInfo.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.PictureBaseInfo} returns this
 */
proto.openim.sdk.message.PictureBaseInfo.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.openim.sdk.message.PictureBaseInfo.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.PictureBaseInfo} returns this
 */
proto.openim.sdk.message.PictureBaseInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 size = 3;
 * @return {number}
 */
proto.openim.sdk.message.PictureBaseInfo.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.PictureBaseInfo} returns this
 */
proto.openim.sdk.message.PictureBaseInfo.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 width = 4;
 * @return {number}
 */
proto.openim.sdk.message.PictureBaseInfo.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.PictureBaseInfo} returns this
 */
proto.openim.sdk.message.PictureBaseInfo.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 height = 5;
 * @return {number}
 */
proto.openim.sdk.message.PictureBaseInfo.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.PictureBaseInfo} returns this
 */
proto.openim.sdk.message.PictureBaseInfo.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string url = 6;
 * @return {string}
 */
proto.openim.sdk.message.PictureBaseInfo.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.PictureBaseInfo} returns this
 */
proto.openim.sdk.message.PictureBaseInfo.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.openim.sdk.message.SoundBaseInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.SoundBaseInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.SoundBaseInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.SoundBaseInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
soundpath: jspb.Message.getFieldWithDefault(msg, 2, ""),
sourceurl: jspb.Message.getFieldWithDefault(msg, 3, ""),
datasize: jspb.Message.getFieldWithDefault(msg, 4, 0),
duration: jspb.Message.getFieldWithDefault(msg, 5, 0),
soundtype: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.openim.sdk.message.SoundBaseInfo}
 */
proto.openim.sdk.message.SoundBaseInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.SoundBaseInfo;
  return proto.openim.sdk.message.SoundBaseInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.SoundBaseInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.SoundBaseInfo}
 */
proto.openim.sdk.message.SoundBaseInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSoundpath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceurl(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDatasize(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuration(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSoundtype(value);
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
proto.openim.sdk.message.SoundBaseInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.SoundBaseInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.SoundBaseInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.SoundBaseInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSoundpath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSourceurl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDatasize();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getSoundtype();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.openim.sdk.message.SoundBaseInfo.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.SoundBaseInfo} returns this
 */
proto.openim.sdk.message.SoundBaseInfo.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string soundPath = 2;
 * @return {string}
 */
proto.openim.sdk.message.SoundBaseInfo.prototype.getSoundpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.SoundBaseInfo} returns this
 */
proto.openim.sdk.message.SoundBaseInfo.prototype.setSoundpath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sourceURL = 3;
 * @return {string}
 */
proto.openim.sdk.message.SoundBaseInfo.prototype.getSourceurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.SoundBaseInfo} returns this
 */
proto.openim.sdk.message.SoundBaseInfo.prototype.setSourceurl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 dataSize = 4;
 * @return {number}
 */
proto.openim.sdk.message.SoundBaseInfo.prototype.getDatasize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.SoundBaseInfo} returns this
 */
proto.openim.sdk.message.SoundBaseInfo.prototype.setDatasize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 duration = 5;
 * @return {number}
 */
proto.openim.sdk.message.SoundBaseInfo.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.SoundBaseInfo} returns this
 */
proto.openim.sdk.message.SoundBaseInfo.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string soundType = 6;
 * @return {string}
 */
proto.openim.sdk.message.SoundBaseInfo.prototype.getSoundtype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.SoundBaseInfo} returns this
 */
proto.openim.sdk.message.SoundBaseInfo.prototype.setSoundtype = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.openim.sdk.message.VideoBaseInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.VideoBaseInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.VideoBaseInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.VideoBaseInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
videopath: jspb.Message.getFieldWithDefault(msg, 1, ""),
videouuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
videourl: jspb.Message.getFieldWithDefault(msg, 3, ""),
videotype: jspb.Message.getFieldWithDefault(msg, 4, ""),
videosize: jspb.Message.getFieldWithDefault(msg, 5, 0),
duration: jspb.Message.getFieldWithDefault(msg, 6, 0),
snapshotpath: jspb.Message.getFieldWithDefault(msg, 7, ""),
snapshotuuid: jspb.Message.getFieldWithDefault(msg, 8, ""),
snapshotsize: jspb.Message.getFieldWithDefault(msg, 9, 0),
snapshoturl: jspb.Message.getFieldWithDefault(msg, 10, ""),
snapshotwidth: jspb.Message.getFieldWithDefault(msg, 11, 0),
snapshotheight: jspb.Message.getFieldWithDefault(msg, 12, 0),
snapshottype: jspb.Message.getFieldWithDefault(msg, 13, "")
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
 * @return {!proto.openim.sdk.message.VideoBaseInfo}
 */
proto.openim.sdk.message.VideoBaseInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.VideoBaseInfo;
  return proto.openim.sdk.message.VideoBaseInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.VideoBaseInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.VideoBaseInfo}
 */
proto.openim.sdk.message.VideoBaseInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVideopath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVideouuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVideourl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVideotype(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVideosize(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuration(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnapshotpath(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnapshotuuid(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSnapshotsize(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnapshoturl(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSnapshotwidth(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSnapshotheight(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnapshottype(value);
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
proto.openim.sdk.message.VideoBaseInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.VideoBaseInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.VideoBaseInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.VideoBaseInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideopath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVideouuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVideourl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVideotype();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getVideosize();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getSnapshotpath();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSnapshotuuid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSnapshotsize();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getSnapshoturl();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getSnapshotwidth();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getSnapshotheight();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getSnapshottype();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string videoPath = 1;
 * @return {string}
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.getVideopath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.VideoBaseInfo} returns this
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.setVideopath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string videoUUID = 2;
 * @return {string}
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.getVideouuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.VideoBaseInfo} returns this
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.setVideouuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string videoURL = 3;
 * @return {string}
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.getVideourl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.VideoBaseInfo} returns this
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.setVideourl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string videoType = 4;
 * @return {string}
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.getVideotype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.VideoBaseInfo} returns this
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.setVideotype = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 videoSize = 5;
 * @return {number}
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.getVideosize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.VideoBaseInfo} returns this
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.setVideosize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 duration = 6;
 * @return {number}
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.VideoBaseInfo} returns this
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string snapshotPath = 7;
 * @return {string}
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.getSnapshotpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.VideoBaseInfo} returns this
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.setSnapshotpath = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string snapshotUUID = 8;
 * @return {string}
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.getSnapshotuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.VideoBaseInfo} returns this
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.setSnapshotuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 snapshotSize = 9;
 * @return {number}
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.getSnapshotsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.VideoBaseInfo} returns this
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.setSnapshotsize = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string snapshotURL = 10;
 * @return {string}
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.getSnapshoturl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.VideoBaseInfo} returns this
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.setSnapshoturl = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int32 snapshotWidth = 11;
 * @return {number}
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.getSnapshotwidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.VideoBaseInfo} returns this
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.setSnapshotwidth = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 snapshotHeight = 12;
 * @return {number}
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.getSnapshotheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.VideoBaseInfo} returns this
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.setSnapshotheight = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string snapshotType = 13;
 * @return {string}
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.getSnapshottype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.VideoBaseInfo} returns this
 */
proto.openim.sdk.message.VideoBaseInfo.prototype.setSnapshottype = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
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
proto.openim.sdk.message.FileBaseInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.FileBaseInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.FileBaseInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.FileBaseInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
filepath: jspb.Message.getFieldWithDefault(msg, 1, ""),
uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
sourceurl: jspb.Message.getFieldWithDefault(msg, 3, ""),
filename: jspb.Message.getFieldWithDefault(msg, 4, ""),
filesize: jspb.Message.getFieldWithDefault(msg, 5, 0),
filetype: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.openim.sdk.message.FileBaseInfo}
 */
proto.openim.sdk.message.FileBaseInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.FileBaseInfo;
  return proto.openim.sdk.message.FileBaseInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.FileBaseInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.FileBaseInfo}
 */
proto.openim.sdk.message.FileBaseInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilepath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceurl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFilesize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFiletype(value);
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
proto.openim.sdk.message.FileBaseInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.FileBaseInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.FileBaseInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.FileBaseInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilepath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSourceurl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFilesize();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getFiletype();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string filePath = 1;
 * @return {string}
 */
proto.openim.sdk.message.FileBaseInfo.prototype.getFilepath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.FileBaseInfo} returns this
 */
proto.openim.sdk.message.FileBaseInfo.prototype.setFilepath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.openim.sdk.message.FileBaseInfo.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.FileBaseInfo} returns this
 */
proto.openim.sdk.message.FileBaseInfo.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sourceURL = 3;
 * @return {string}
 */
proto.openim.sdk.message.FileBaseInfo.prototype.getSourceurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.FileBaseInfo} returns this
 */
proto.openim.sdk.message.FileBaseInfo.prototype.setSourceurl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string fileName = 4;
 * @return {string}
 */
proto.openim.sdk.message.FileBaseInfo.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.FileBaseInfo} returns this
 */
proto.openim.sdk.message.FileBaseInfo.prototype.setFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 fileSize = 5;
 * @return {number}
 */
proto.openim.sdk.message.FileBaseInfo.prototype.getFilesize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.FileBaseInfo} returns this
 */
proto.openim.sdk.message.FileBaseInfo.prototype.setFilesize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string fileType = 6;
 * @return {string}
 */
proto.openim.sdk.message.FileBaseInfo.prototype.getFiletype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.FileBaseInfo} returns this
 */
proto.openim.sdk.message.FileBaseInfo.prototype.setFiletype = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.openim.sdk.message.TextElem.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.TextElem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.TextElem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.TextElem.toObject = function(includeInstance, msg) {
  var f, obj = {
content: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.openim.sdk.message.TextElem}
 */
proto.openim.sdk.message.TextElem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.TextElem;
  return proto.openim.sdk.message.TextElem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.TextElem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.TextElem}
 */
proto.openim.sdk.message.TextElem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
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
proto.openim.sdk.message.TextElem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.TextElem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.TextElem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.TextElem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string content = 1;
 * @return {string}
 */
proto.openim.sdk.message.TextElem.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.TextElem} returns this
 */
proto.openim.sdk.message.TextElem.prototype.setContent = function(value) {
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
proto.openim.sdk.message.CardElem.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CardElem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CardElem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CardElem.toObject = function(includeInstance, msg) {
  var f, obj = {
userid: jspb.Message.getFieldWithDefault(msg, 1, ""),
nickname: jspb.Message.getFieldWithDefault(msg, 2, ""),
faceurl: jspb.Message.getFieldWithDefault(msg, 3, ""),
ex: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.openim.sdk.message.CardElem}
 */
proto.openim.sdk.message.CardElem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CardElem;
  return proto.openim.sdk.message.CardElem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CardElem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CardElem}
 */
proto.openim.sdk.message.CardElem.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFaceurl(value);
      break;
    case 4:
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
proto.openim.sdk.message.CardElem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CardElem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CardElem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CardElem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFaceurl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEx();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string userID = 1;
 * @return {string}
 */
proto.openim.sdk.message.CardElem.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CardElem} returns this
 */
proto.openim.sdk.message.CardElem.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string nickname = 2;
 * @return {string}
 */
proto.openim.sdk.message.CardElem.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CardElem} returns this
 */
proto.openim.sdk.message.CardElem.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string faceURL = 3;
 * @return {string}
 */
proto.openim.sdk.message.CardElem.prototype.getFaceurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CardElem} returns this
 */
proto.openim.sdk.message.CardElem.prototype.setFaceurl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ex = 4;
 * @return {string}
 */
proto.openim.sdk.message.CardElem.prototype.getEx = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CardElem} returns this
 */
proto.openim.sdk.message.CardElem.prototype.setEx = function(value) {
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
proto.openim.sdk.message.PictureElem.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.PictureElem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.PictureElem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.PictureElem.toObject = function(includeInstance, msg) {
  var f, obj = {
sourcepath: jspb.Message.getFieldWithDefault(msg, 1, ""),
sourcepicture: (f = msg.getSourcepicture()) && proto.openim.sdk.message.PictureBaseInfo.toObject(includeInstance, f),
bigpicture: (f = msg.getBigpicture()) && proto.openim.sdk.message.PictureBaseInfo.toObject(includeInstance, f),
snapshotpicture: (f = msg.getSnapshotpicture()) && proto.openim.sdk.message.PictureBaseInfo.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.PictureElem}
 */
proto.openim.sdk.message.PictureElem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.PictureElem;
  return proto.openim.sdk.message.PictureElem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.PictureElem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.PictureElem}
 */
proto.openim.sdk.message.PictureElem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourcepath(value);
      break;
    case 2:
      var value = new proto.openim.sdk.message.PictureBaseInfo;
      reader.readMessage(value,proto.openim.sdk.message.PictureBaseInfo.deserializeBinaryFromReader);
      msg.setSourcepicture(value);
      break;
    case 3:
      var value = new proto.openim.sdk.message.PictureBaseInfo;
      reader.readMessage(value,proto.openim.sdk.message.PictureBaseInfo.deserializeBinaryFromReader);
      msg.setBigpicture(value);
      break;
    case 4:
      var value = new proto.openim.sdk.message.PictureBaseInfo;
      reader.readMessage(value,proto.openim.sdk.message.PictureBaseInfo.deserializeBinaryFromReader);
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
proto.openim.sdk.message.PictureElem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.PictureElem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.PictureElem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.PictureElem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourcepath();
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
      proto.openim.sdk.message.PictureBaseInfo.serializeBinaryToWriter
    );
  }
  f = message.getBigpicture();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.openim.sdk.message.PictureBaseInfo.serializeBinaryToWriter
    );
  }
  f = message.getSnapshotpicture();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.openim.sdk.message.PictureBaseInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sourcePath = 1;
 * @return {string}
 */
proto.openim.sdk.message.PictureElem.prototype.getSourcepath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.PictureElem} returns this
 */
proto.openim.sdk.message.PictureElem.prototype.setSourcepath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PictureBaseInfo sourcePicture = 2;
 * @return {?proto.openim.sdk.message.PictureBaseInfo}
 */
proto.openim.sdk.message.PictureElem.prototype.getSourcepicture = function() {
  return /** @type{?proto.openim.sdk.message.PictureBaseInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.PictureBaseInfo, 2));
};


/**
 * @param {?proto.openim.sdk.message.PictureBaseInfo|undefined} value
 * @return {!proto.openim.sdk.message.PictureElem} returns this
*/
proto.openim.sdk.message.PictureElem.prototype.setSourcepicture = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.PictureElem} returns this
 */
proto.openim.sdk.message.PictureElem.prototype.clearSourcepicture = function() {
  return this.setSourcepicture(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.PictureElem.prototype.hasSourcepicture = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PictureBaseInfo bigPicture = 3;
 * @return {?proto.openim.sdk.message.PictureBaseInfo}
 */
proto.openim.sdk.message.PictureElem.prototype.getBigpicture = function() {
  return /** @type{?proto.openim.sdk.message.PictureBaseInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.PictureBaseInfo, 3));
};


/**
 * @param {?proto.openim.sdk.message.PictureBaseInfo|undefined} value
 * @return {!proto.openim.sdk.message.PictureElem} returns this
*/
proto.openim.sdk.message.PictureElem.prototype.setBigpicture = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.PictureElem} returns this
 */
proto.openim.sdk.message.PictureElem.prototype.clearBigpicture = function() {
  return this.setBigpicture(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.PictureElem.prototype.hasBigpicture = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PictureBaseInfo snapshotPicture = 4;
 * @return {?proto.openim.sdk.message.PictureBaseInfo}
 */
proto.openim.sdk.message.PictureElem.prototype.getSnapshotpicture = function() {
  return /** @type{?proto.openim.sdk.message.PictureBaseInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.PictureBaseInfo, 4));
};


/**
 * @param {?proto.openim.sdk.message.PictureBaseInfo|undefined} value
 * @return {!proto.openim.sdk.message.PictureElem} returns this
*/
proto.openim.sdk.message.PictureElem.prototype.setSnapshotpicture = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.PictureElem} returns this
 */
proto.openim.sdk.message.PictureElem.prototype.clearSnapshotpicture = function() {
  return this.setSnapshotpicture(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.PictureElem.prototype.hasSnapshotpicture = function() {
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
proto.openim.sdk.message.SoundElem.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.SoundElem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.SoundElem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.SoundElem.toObject = function(includeInstance, msg) {
  var f, obj = {
uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
soundpath: jspb.Message.getFieldWithDefault(msg, 2, ""),
sourceurl: jspb.Message.getFieldWithDefault(msg, 3, ""),
datasize: jspb.Message.getFieldWithDefault(msg, 4, 0),
duration: jspb.Message.getFieldWithDefault(msg, 5, 0),
soundtype: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.openim.sdk.message.SoundElem}
 */
proto.openim.sdk.message.SoundElem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.SoundElem;
  return proto.openim.sdk.message.SoundElem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.SoundElem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.SoundElem}
 */
proto.openim.sdk.message.SoundElem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSoundpath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceurl(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDatasize(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuration(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSoundtype(value);
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
proto.openim.sdk.message.SoundElem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.SoundElem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.SoundElem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.SoundElem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSoundpath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSourceurl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDatasize();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getSoundtype();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.openim.sdk.message.SoundElem.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.SoundElem} returns this
 */
proto.openim.sdk.message.SoundElem.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string soundPath = 2;
 * @return {string}
 */
proto.openim.sdk.message.SoundElem.prototype.getSoundpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.SoundElem} returns this
 */
proto.openim.sdk.message.SoundElem.prototype.setSoundpath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sourceURL = 3;
 * @return {string}
 */
proto.openim.sdk.message.SoundElem.prototype.getSourceurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.SoundElem} returns this
 */
proto.openim.sdk.message.SoundElem.prototype.setSourceurl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 dataSize = 4;
 * @return {number}
 */
proto.openim.sdk.message.SoundElem.prototype.getDatasize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.SoundElem} returns this
 */
proto.openim.sdk.message.SoundElem.prototype.setDatasize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 duration = 5;
 * @return {number}
 */
proto.openim.sdk.message.SoundElem.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.SoundElem} returns this
 */
proto.openim.sdk.message.SoundElem.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string soundType = 6;
 * @return {string}
 */
proto.openim.sdk.message.SoundElem.prototype.getSoundtype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.SoundElem} returns this
 */
proto.openim.sdk.message.SoundElem.prototype.setSoundtype = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.openim.sdk.message.VideoElem.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.VideoElem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.VideoElem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.VideoElem.toObject = function(includeInstance, msg) {
  var f, obj = {
videopath: jspb.Message.getFieldWithDefault(msg, 1, ""),
videouuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
videourl: jspb.Message.getFieldWithDefault(msg, 3, ""),
videotype: jspb.Message.getFieldWithDefault(msg, 4, ""),
videosize: jspb.Message.getFieldWithDefault(msg, 5, 0),
duration: jspb.Message.getFieldWithDefault(msg, 6, 0),
snapshotpath: jspb.Message.getFieldWithDefault(msg, 7, ""),
snapshotuuid: jspb.Message.getFieldWithDefault(msg, 8, ""),
snapshotsize: jspb.Message.getFieldWithDefault(msg, 9, 0),
snapshoturl: jspb.Message.getFieldWithDefault(msg, 10, ""),
snapshotwidth: jspb.Message.getFieldWithDefault(msg, 11, 0),
snapshotheight: jspb.Message.getFieldWithDefault(msg, 12, 0),
snapshottype: jspb.Message.getFieldWithDefault(msg, 13, "")
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
 * @return {!proto.openim.sdk.message.VideoElem}
 */
proto.openim.sdk.message.VideoElem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.VideoElem;
  return proto.openim.sdk.message.VideoElem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.VideoElem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.VideoElem}
 */
proto.openim.sdk.message.VideoElem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVideopath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVideouuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVideourl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVideotype(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVideosize(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuration(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnapshotpath(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnapshotuuid(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSnapshotsize(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnapshoturl(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSnapshotwidth(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSnapshotheight(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnapshottype(value);
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
proto.openim.sdk.message.VideoElem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.VideoElem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.VideoElem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.VideoElem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideopath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVideouuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVideourl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVideotype();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getVideosize();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getSnapshotpath();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSnapshotuuid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSnapshotsize();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getSnapshoturl();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getSnapshotwidth();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getSnapshotheight();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getSnapshottype();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string videoPath = 1;
 * @return {string}
 */
proto.openim.sdk.message.VideoElem.prototype.getVideopath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.VideoElem} returns this
 */
proto.openim.sdk.message.VideoElem.prototype.setVideopath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string videoUUID = 2;
 * @return {string}
 */
proto.openim.sdk.message.VideoElem.prototype.getVideouuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.VideoElem} returns this
 */
proto.openim.sdk.message.VideoElem.prototype.setVideouuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string videoURL = 3;
 * @return {string}
 */
proto.openim.sdk.message.VideoElem.prototype.getVideourl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.VideoElem} returns this
 */
proto.openim.sdk.message.VideoElem.prototype.setVideourl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string videoType = 4;
 * @return {string}
 */
proto.openim.sdk.message.VideoElem.prototype.getVideotype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.VideoElem} returns this
 */
proto.openim.sdk.message.VideoElem.prototype.setVideotype = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 videoSize = 5;
 * @return {number}
 */
proto.openim.sdk.message.VideoElem.prototype.getVideosize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.VideoElem} returns this
 */
proto.openim.sdk.message.VideoElem.prototype.setVideosize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 duration = 6;
 * @return {number}
 */
proto.openim.sdk.message.VideoElem.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.VideoElem} returns this
 */
proto.openim.sdk.message.VideoElem.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string snapshotPath = 7;
 * @return {string}
 */
proto.openim.sdk.message.VideoElem.prototype.getSnapshotpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.VideoElem} returns this
 */
proto.openim.sdk.message.VideoElem.prototype.setSnapshotpath = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string snapshotUUID = 8;
 * @return {string}
 */
proto.openim.sdk.message.VideoElem.prototype.getSnapshotuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.VideoElem} returns this
 */
proto.openim.sdk.message.VideoElem.prototype.setSnapshotuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 snapshotSize = 9;
 * @return {number}
 */
proto.openim.sdk.message.VideoElem.prototype.getSnapshotsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.VideoElem} returns this
 */
proto.openim.sdk.message.VideoElem.prototype.setSnapshotsize = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string snapshotURL = 10;
 * @return {string}
 */
proto.openim.sdk.message.VideoElem.prototype.getSnapshoturl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.VideoElem} returns this
 */
proto.openim.sdk.message.VideoElem.prototype.setSnapshoturl = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int32 snapshotWidth = 11;
 * @return {number}
 */
proto.openim.sdk.message.VideoElem.prototype.getSnapshotwidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.VideoElem} returns this
 */
proto.openim.sdk.message.VideoElem.prototype.setSnapshotwidth = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 snapshotHeight = 12;
 * @return {number}
 */
proto.openim.sdk.message.VideoElem.prototype.getSnapshotheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.VideoElem} returns this
 */
proto.openim.sdk.message.VideoElem.prototype.setSnapshotheight = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string snapshotType = 13;
 * @return {string}
 */
proto.openim.sdk.message.VideoElem.prototype.getSnapshottype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.VideoElem} returns this
 */
proto.openim.sdk.message.VideoElem.prototype.setSnapshottype = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
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
proto.openim.sdk.message.FileElem.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.FileElem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.FileElem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.FileElem.toObject = function(includeInstance, msg) {
  var f, obj = {
filepath: jspb.Message.getFieldWithDefault(msg, 1, ""),
uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
sourceurl: jspb.Message.getFieldWithDefault(msg, 3, ""),
filename: jspb.Message.getFieldWithDefault(msg, 4, ""),
filesize: jspb.Message.getFieldWithDefault(msg, 5, 0),
filetype: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.openim.sdk.message.FileElem}
 */
proto.openim.sdk.message.FileElem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.FileElem;
  return proto.openim.sdk.message.FileElem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.FileElem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.FileElem}
 */
proto.openim.sdk.message.FileElem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilepath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceurl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFilesize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFiletype(value);
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
proto.openim.sdk.message.FileElem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.FileElem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.FileElem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.FileElem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilepath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSourceurl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFilesize();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getFiletype();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string filePath = 1;
 * @return {string}
 */
proto.openim.sdk.message.FileElem.prototype.getFilepath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.FileElem} returns this
 */
proto.openim.sdk.message.FileElem.prototype.setFilepath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.openim.sdk.message.FileElem.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.FileElem} returns this
 */
proto.openim.sdk.message.FileElem.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sourceURL = 3;
 * @return {string}
 */
proto.openim.sdk.message.FileElem.prototype.getSourceurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.FileElem} returns this
 */
proto.openim.sdk.message.FileElem.prototype.setSourceurl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string fileName = 4;
 * @return {string}
 */
proto.openim.sdk.message.FileElem.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.FileElem} returns this
 */
proto.openim.sdk.message.FileElem.prototype.setFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 fileSize = 5;
 * @return {number}
 */
proto.openim.sdk.message.FileElem.prototype.getFilesize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.FileElem} returns this
 */
proto.openim.sdk.message.FileElem.prototype.setFilesize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string fileType = 6;
 * @return {string}
 */
proto.openim.sdk.message.FileElem.prototype.getFiletype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.FileElem} returns this
 */
proto.openim.sdk.message.FileElem.prototype.setFiletype = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.message.MergeElem.repeatedFields_ = [2,3,4];



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
proto.openim.sdk.message.MergeElem.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.MergeElem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.MergeElem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.MergeElem.toObject = function(includeInstance, msg) {
  var f, obj = {
title: jspb.Message.getFieldWithDefault(msg, 1, ""),
abstractlistList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
multimessageList: jspb.Message.toObjectList(msg.getMultimessageList(),
    proto.openim.sdk.message.IMMessage.toObject, includeInstance),
messageentitylistList: jspb.Message.toObjectList(msg.getMessageentitylistList(),
    proto.openim.sdk.message.MessageEntity.toObject, includeInstance)
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
 * @return {!proto.openim.sdk.message.MergeElem}
 */
proto.openim.sdk.message.MergeElem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.MergeElem;
  return proto.openim.sdk.message.MergeElem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.MergeElem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.MergeElem}
 */
proto.openim.sdk.message.MergeElem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAbstractlist(value);
      break;
    case 3:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
      msg.addMultimessage(value);
      break;
    case 4:
      var value = new proto.openim.sdk.message.MessageEntity;
      reader.readMessage(value,proto.openim.sdk.message.MessageEntity.deserializeBinaryFromReader);
      msg.addMessageentitylist(value);
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
proto.openim.sdk.message.MergeElem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.MergeElem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.MergeElem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.MergeElem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAbstractlistList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getMultimessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
  f = message.getMessageentitylistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.openim.sdk.message.MessageEntity.serializeBinaryToWriter
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.openim.sdk.message.MergeElem.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.MergeElem} returns this
 */
proto.openim.sdk.message.MergeElem.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string abstractList = 2;
 * @return {!Array<string>}
 */
proto.openim.sdk.message.MergeElem.prototype.getAbstractlistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.message.MergeElem} returns this
 */
proto.openim.sdk.message.MergeElem.prototype.setAbstractlistList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.MergeElem} returns this
 */
proto.openim.sdk.message.MergeElem.prototype.addAbstractlist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.message.MergeElem} returns this
 */
proto.openim.sdk.message.MergeElem.prototype.clearAbstractlistList = function() {
  return this.setAbstractlistList([]);
};


/**
 * repeated IMMessage multiMessage = 3;
 * @return {!Array<!proto.openim.sdk.message.IMMessage>}
 */
proto.openim.sdk.message.MergeElem.prototype.getMultimessageList = function() {
  return /** @type{!Array<!proto.openim.sdk.message.IMMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.message.IMMessage, 3));
};


/**
 * @param {!Array<!proto.openim.sdk.message.IMMessage>} value
 * @return {!proto.openim.sdk.message.MergeElem} returns this
*/
proto.openim.sdk.message.MergeElem.prototype.setMultimessageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.openim.sdk.message.IMMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.MergeElem.prototype.addMultimessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.openim.sdk.message.IMMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.message.MergeElem} returns this
 */
proto.openim.sdk.message.MergeElem.prototype.clearMultimessageList = function() {
  return this.setMultimessageList([]);
};


/**
 * repeated MessageEntity messageEntityList = 4;
 * @return {!Array<!proto.openim.sdk.message.MessageEntity>}
 */
proto.openim.sdk.message.MergeElem.prototype.getMessageentitylistList = function() {
  return /** @type{!Array<!proto.openim.sdk.message.MessageEntity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.message.MessageEntity, 4));
};


/**
 * @param {!Array<!proto.openim.sdk.message.MessageEntity>} value
 * @return {!proto.openim.sdk.message.MergeElem} returns this
*/
proto.openim.sdk.message.MergeElem.prototype.setMessageentitylistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.openim.sdk.message.MessageEntity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.MessageEntity}
 */
proto.openim.sdk.message.MergeElem.prototype.addMessageentitylist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.openim.sdk.message.MessageEntity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.message.MergeElem} returns this
 */
proto.openim.sdk.message.MergeElem.prototype.clearMessageentitylistList = function() {
  return this.setMessageentitylistList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.message.AtTextElem.repeatedFields_ = [2,3];



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
proto.openim.sdk.message.AtTextElem.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.AtTextElem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.AtTextElem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.AtTextElem.toObject = function(includeInstance, msg) {
  var f, obj = {
text: jspb.Message.getFieldWithDefault(msg, 1, ""),
atuserlistList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
atusersinfoList: jspb.Message.toObjectList(msg.getAtusersinfoList(),
    proto.openim.sdk.message.AtInfo.toObject, includeInstance),
quotemessage: (f = msg.getQuotemessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f),
isatself: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.openim.sdk.message.AtTextElem}
 */
proto.openim.sdk.message.AtTextElem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.AtTextElem;
  return proto.openim.sdk.message.AtTextElem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.AtTextElem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.AtTextElem}
 */
proto.openim.sdk.message.AtTextElem.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addAtuserlist(value);
      break;
    case 3:
      var value = new proto.openim.sdk.message.AtInfo;
      reader.readMessage(value,proto.openim.sdk.message.AtInfo.deserializeBinaryFromReader);
      msg.addAtusersinfo(value);
      break;
    case 4:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
      msg.setQuotemessage(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsatself(value);
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
proto.openim.sdk.message.AtTextElem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.AtTextElem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.AtTextElem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.AtTextElem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAtuserlistList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getAtusersinfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.openim.sdk.message.AtInfo.serializeBinaryToWriter
    );
  }
  f = message.getQuotemessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
  f = message.getIsatself();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.openim.sdk.message.AtTextElem.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.AtTextElem} returns this
 */
proto.openim.sdk.message.AtTextElem.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string atUserList = 2;
 * @return {!Array<string>}
 */
proto.openim.sdk.message.AtTextElem.prototype.getAtuserlistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.message.AtTextElem} returns this
 */
proto.openim.sdk.message.AtTextElem.prototype.setAtuserlistList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.AtTextElem} returns this
 */
proto.openim.sdk.message.AtTextElem.prototype.addAtuserlist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.message.AtTextElem} returns this
 */
proto.openim.sdk.message.AtTextElem.prototype.clearAtuserlistList = function() {
  return this.setAtuserlistList([]);
};


/**
 * repeated AtInfo atUsersInfo = 3;
 * @return {!Array<!proto.openim.sdk.message.AtInfo>}
 */
proto.openim.sdk.message.AtTextElem.prototype.getAtusersinfoList = function() {
  return /** @type{!Array<!proto.openim.sdk.message.AtInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.message.AtInfo, 3));
};


/**
 * @param {!Array<!proto.openim.sdk.message.AtInfo>} value
 * @return {!proto.openim.sdk.message.AtTextElem} returns this
*/
proto.openim.sdk.message.AtTextElem.prototype.setAtusersinfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.openim.sdk.message.AtInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.AtInfo}
 */
proto.openim.sdk.message.AtTextElem.prototype.addAtusersinfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.openim.sdk.message.AtInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.message.AtTextElem} returns this
 */
proto.openim.sdk.message.AtTextElem.prototype.clearAtusersinfoList = function() {
  return this.setAtusersinfoList([]);
};


/**
 * optional IMMessage quoteMessage = 4;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.AtTextElem.prototype.getQuotemessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 4));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.AtTextElem} returns this
*/
proto.openim.sdk.message.AtTextElem.prototype.setQuotemessage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.AtTextElem} returns this
 */
proto.openim.sdk.message.AtTextElem.prototype.clearQuotemessage = function() {
  return this.setQuotemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.AtTextElem.prototype.hasQuotemessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool isAtSelf = 5;
 * @return {boolean}
 */
proto.openim.sdk.message.AtTextElem.prototype.getIsatself = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.message.AtTextElem} returns this
 */
proto.openim.sdk.message.AtTextElem.prototype.setIsatself = function(value) {
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
proto.openim.sdk.message.FaceElem.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.FaceElem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.FaceElem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.FaceElem.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.FaceElem}
 */
proto.openim.sdk.message.FaceElem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.FaceElem;
  return proto.openim.sdk.message.FaceElem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.FaceElem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.FaceElem}
 */
proto.openim.sdk.message.FaceElem.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.FaceElem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.FaceElem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.FaceElem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.FaceElem.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.FaceElem.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.FaceElem} returns this
 */
proto.openim.sdk.message.FaceElem.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string data = 2;
 * @return {string}
 */
proto.openim.sdk.message.FaceElem.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.FaceElem} returns this
 */
proto.openim.sdk.message.FaceElem.prototype.setData = function(value) {
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
proto.openim.sdk.message.LocationElem.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.LocationElem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.LocationElem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.LocationElem.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.LocationElem}
 */
proto.openim.sdk.message.LocationElem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.LocationElem;
  return proto.openim.sdk.message.LocationElem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.LocationElem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.LocationElem}
 */
proto.openim.sdk.message.LocationElem.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.LocationElem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.LocationElem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.LocationElem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.LocationElem.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.LocationElem.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.LocationElem} returns this
 */
proto.openim.sdk.message.LocationElem.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double longitude = 2;
 * @return {number}
 */
proto.openim.sdk.message.LocationElem.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.LocationElem} returns this
 */
proto.openim.sdk.message.LocationElem.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double latitude = 3;
 * @return {number}
 */
proto.openim.sdk.message.LocationElem.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.LocationElem} returns this
 */
proto.openim.sdk.message.LocationElem.prototype.setLatitude = function(value) {
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
proto.openim.sdk.message.CustomElem.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CustomElem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CustomElem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CustomElem.toObject = function(includeInstance, msg) {
  var f, obj = {
data: jspb.Message.getFieldWithDefault(msg, 1, ""),
description: jspb.Message.getFieldWithDefault(msg, 2, ""),
extension: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.openim.sdk.message.CustomElem}
 */
proto.openim.sdk.message.CustomElem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CustomElem;
  return proto.openim.sdk.message.CustomElem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CustomElem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CustomElem}
 */
proto.openim.sdk.message.CustomElem.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtension$(value);
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
proto.openim.sdk.message.CustomElem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CustomElem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CustomElem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CustomElem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExtension$();
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
proto.openim.sdk.message.CustomElem.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CustomElem} returns this
 */
proto.openim.sdk.message.CustomElem.prototype.setData = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.openim.sdk.message.CustomElem.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CustomElem} returns this
 */
proto.openim.sdk.message.CustomElem.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string extension = 3;
 * @return {string}
 */
proto.openim.sdk.message.CustomElem.prototype.getExtension$ = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CustomElem} returns this
 */
proto.openim.sdk.message.CustomElem.prototype.setExtension$ = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.message.QuoteElem.repeatedFields_ = [3];



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
proto.openim.sdk.message.QuoteElem.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.QuoteElem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.QuoteElem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.QuoteElem.toObject = function(includeInstance, msg) {
  var f, obj = {
text: jspb.Message.getFieldWithDefault(msg, 1, ""),
quotemessage: (f = msg.getQuotemessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f),
messageentitylistList: jspb.Message.toObjectList(msg.getMessageentitylistList(),
    proto.openim.sdk.message.MessageEntity.toObject, includeInstance)
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
 * @return {!proto.openim.sdk.message.QuoteElem}
 */
proto.openim.sdk.message.QuoteElem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.QuoteElem;
  return proto.openim.sdk.message.QuoteElem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.QuoteElem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.QuoteElem}
 */
proto.openim.sdk.message.QuoteElem.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
      msg.setQuotemessage(value);
      break;
    case 3:
      var value = new proto.openim.sdk.message.MessageEntity;
      reader.readMessage(value,proto.openim.sdk.message.MessageEntity.deserializeBinaryFromReader);
      msg.addMessageentitylist(value);
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
proto.openim.sdk.message.QuoteElem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.QuoteElem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.QuoteElem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.QuoteElem.serializeBinaryToWriter = function(message, writer) {
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
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
  f = message.getMessageentitylistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.openim.sdk.message.MessageEntity.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.openim.sdk.message.QuoteElem.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.QuoteElem} returns this
 */
proto.openim.sdk.message.QuoteElem.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional IMMessage quoteMessage = 2;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.QuoteElem.prototype.getQuotemessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 2));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.QuoteElem} returns this
*/
proto.openim.sdk.message.QuoteElem.prototype.setQuotemessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.QuoteElem} returns this
 */
proto.openim.sdk.message.QuoteElem.prototype.clearQuotemessage = function() {
  return this.setQuotemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.QuoteElem.prototype.hasQuotemessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated MessageEntity messageEntityList = 3;
 * @return {!Array<!proto.openim.sdk.message.MessageEntity>}
 */
proto.openim.sdk.message.QuoteElem.prototype.getMessageentitylistList = function() {
  return /** @type{!Array<!proto.openim.sdk.message.MessageEntity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.message.MessageEntity, 3));
};


/**
 * @param {!Array<!proto.openim.sdk.message.MessageEntity>} value
 * @return {!proto.openim.sdk.message.QuoteElem} returns this
*/
proto.openim.sdk.message.QuoteElem.prototype.setMessageentitylistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.openim.sdk.message.MessageEntity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.MessageEntity}
 */
proto.openim.sdk.message.QuoteElem.prototype.addMessageentitylist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.openim.sdk.message.MessageEntity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.message.QuoteElem} returns this
 */
proto.openim.sdk.message.QuoteElem.prototype.clearMessageentitylistList = function() {
  return this.setMessageentitylistList([]);
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
proto.openim.sdk.message.NotificationElem.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.NotificationElem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.NotificationElem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.NotificationElem.toObject = function(includeInstance, msg) {
  var f, obj = {
detail: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.openim.sdk.message.NotificationElem}
 */
proto.openim.sdk.message.NotificationElem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.NotificationElem;
  return proto.openim.sdk.message.NotificationElem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.NotificationElem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.NotificationElem}
 */
proto.openim.sdk.message.NotificationElem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetail(value);
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
proto.openim.sdk.message.NotificationElem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.NotificationElem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.NotificationElem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.NotificationElem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDetail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string detail = 1;
 * @return {string}
 */
proto.openim.sdk.message.NotificationElem.prototype.getDetail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.NotificationElem} returns this
 */
proto.openim.sdk.message.NotificationElem.prototype.setDetail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.message.AdvancedTextElem.repeatedFields_ = [2];



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
proto.openim.sdk.message.AdvancedTextElem.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.AdvancedTextElem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.AdvancedTextElem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.AdvancedTextElem.toObject = function(includeInstance, msg) {
  var f, obj = {
text: jspb.Message.getFieldWithDefault(msg, 1, ""),
messageentitylistList: jspb.Message.toObjectList(msg.getMessageentitylistList(),
    proto.openim.sdk.message.MessageEntity.toObject, includeInstance)
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
 * @return {!proto.openim.sdk.message.AdvancedTextElem}
 */
proto.openim.sdk.message.AdvancedTextElem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.AdvancedTextElem;
  return proto.openim.sdk.message.AdvancedTextElem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.AdvancedTextElem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.AdvancedTextElem}
 */
proto.openim.sdk.message.AdvancedTextElem.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.openim.sdk.message.MessageEntity;
      reader.readMessage(value,proto.openim.sdk.message.MessageEntity.deserializeBinaryFromReader);
      msg.addMessageentitylist(value);
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
proto.openim.sdk.message.AdvancedTextElem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.AdvancedTextElem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.AdvancedTextElem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.AdvancedTextElem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessageentitylistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.openim.sdk.message.MessageEntity.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.openim.sdk.message.AdvancedTextElem.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.AdvancedTextElem} returns this
 */
proto.openim.sdk.message.AdvancedTextElem.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated MessageEntity messageEntityList = 2;
 * @return {!Array<!proto.openim.sdk.message.MessageEntity>}
 */
proto.openim.sdk.message.AdvancedTextElem.prototype.getMessageentitylistList = function() {
  return /** @type{!Array<!proto.openim.sdk.message.MessageEntity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.message.MessageEntity, 2));
};


/**
 * @param {!Array<!proto.openim.sdk.message.MessageEntity>} value
 * @return {!proto.openim.sdk.message.AdvancedTextElem} returns this
*/
proto.openim.sdk.message.AdvancedTextElem.prototype.setMessageentitylistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.openim.sdk.message.MessageEntity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.MessageEntity}
 */
proto.openim.sdk.message.AdvancedTextElem.prototype.addMessageentitylist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.openim.sdk.message.MessageEntity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.message.AdvancedTextElem} returns this
 */
proto.openim.sdk.message.AdvancedTextElem.prototype.clearMessageentitylistList = function() {
  return this.setMessageentitylistList([]);
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
proto.openim.sdk.message.TypingElem.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.TypingElem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.TypingElem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.TypingElem.toObject = function(includeInstance, msg) {
  var f, obj = {
msgtips: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.openim.sdk.message.TypingElem}
 */
proto.openim.sdk.message.TypingElem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.TypingElem;
  return proto.openim.sdk.message.TypingElem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.TypingElem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.TypingElem}
 */
proto.openim.sdk.message.TypingElem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgtips(value);
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
proto.openim.sdk.message.TypingElem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.TypingElem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.TypingElem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.TypingElem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsgtips();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string msgTips = 1;
 * @return {string}
 */
proto.openim.sdk.message.TypingElem.prototype.getMsgtips = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.TypingElem} returns this
 */
proto.openim.sdk.message.TypingElem.prototype.setMsgtips = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.message.StreamElem.repeatedFields_ = [3];



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
proto.openim.sdk.message.StreamElem.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.StreamElem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.StreamElem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.StreamElem.toObject = function(includeInstance, msg) {
  var f, obj = {
type: jspb.Message.getFieldWithDefault(msg, 1, ""),
content: jspb.Message.getFieldWithDefault(msg, 2, ""),
packetsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
end: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.openim.sdk.message.StreamElem}
 */
proto.openim.sdk.message.StreamElem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.StreamElem;
  return proto.openim.sdk.message.StreamElem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.StreamElem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.StreamElem}
 */
proto.openim.sdk.message.StreamElem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addPackets(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnd(value);
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
proto.openim.sdk.message.StreamElem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.StreamElem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.StreamElem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.StreamElem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPacketsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getEnd();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.openim.sdk.message.StreamElem.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.StreamElem} returns this
 */
proto.openim.sdk.message.StreamElem.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.openim.sdk.message.StreamElem.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.StreamElem} returns this
 */
proto.openim.sdk.message.StreamElem.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string packets = 3;
 * @return {!Array<string>}
 */
proto.openim.sdk.message.StreamElem.prototype.getPacketsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.message.StreamElem} returns this
 */
proto.openim.sdk.message.StreamElem.prototype.setPacketsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.StreamElem} returns this
 */
proto.openim.sdk.message.StreamElem.prototype.addPackets = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.message.StreamElem} returns this
 */
proto.openim.sdk.message.StreamElem.prototype.clearPacketsList = function() {
  return this.setPacketsList([]);
};


/**
 * optional bool end = 4;
 * @return {boolean}
 */
proto.openim.sdk.message.StreamElem.prototype.getEnd = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.message.StreamElem} returns this
 */
proto.openim.sdk.message.StreamElem.prototype.setEnd = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.openim.sdk.message.AtInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.AtInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.AtInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.AtInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
atuserid: jspb.Message.getFieldWithDefault(msg, 1, ""),
groupnickname: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.openim.sdk.message.AtInfo}
 */
proto.openim.sdk.message.AtInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.AtInfo;
  return proto.openim.sdk.message.AtInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.AtInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.AtInfo}
 */
proto.openim.sdk.message.AtInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAtuserid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupnickname(value);
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
proto.openim.sdk.message.AtInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.AtInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.AtInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.AtInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAtuserid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGroupnickname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string atUserID = 1;
 * @return {string}
 */
proto.openim.sdk.message.AtInfo.prototype.getAtuserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.AtInfo} returns this
 */
proto.openim.sdk.message.AtInfo.prototype.setAtuserid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string groupNickname = 2;
 * @return {string}
 */
proto.openim.sdk.message.AtInfo.prototype.getGroupnickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.AtInfo} returns this
 */
proto.openim.sdk.message.AtInfo.prototype.setGroupnickname = function(value) {
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
proto.openim.sdk.message.AttachedInfoElem.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.AttachedInfoElem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.AttachedInfoElem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.AttachedInfoElem.toObject = function(includeInstance, msg) {
  var f, obj = {
grouphasreadinfo: (f = msg.getGrouphasreadinfo()) && proto.openim.sdk.message.GroupHasReadInfo.toObject(includeInstance, f),
isprivatechat: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
burnduration: jspb.Message.getFieldWithDefault(msg, 3, 0),
hasreadtime: jspb.Message.getFieldWithDefault(msg, 4, 0),
progress: (f = msg.getProgress()) && proto.openim.sdk.message.UploadProgress.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.AttachedInfoElem}
 */
proto.openim.sdk.message.AttachedInfoElem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.AttachedInfoElem;
  return proto.openim.sdk.message.AttachedInfoElem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.AttachedInfoElem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.AttachedInfoElem}
 */
proto.openim.sdk.message.AttachedInfoElem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.GroupHasReadInfo;
      reader.readMessage(value,proto.openim.sdk.message.GroupHasReadInfo.deserializeBinaryFromReader);
      msg.setGrouphasreadinfo(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsprivatechat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBurnduration(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHasreadtime(value);
      break;
    case 5:
      var value = new proto.openim.sdk.message.UploadProgress;
      reader.readMessage(value,proto.openim.sdk.message.UploadProgress.deserializeBinaryFromReader);
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
proto.openim.sdk.message.AttachedInfoElem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.AttachedInfoElem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.AttachedInfoElem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.AttachedInfoElem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGrouphasreadinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.GroupHasReadInfo.serializeBinaryToWriter
    );
  }
  f = message.getIsprivatechat();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getBurnduration();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getHasreadtime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getProgress();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.openim.sdk.message.UploadProgress.serializeBinaryToWriter
    );
  }
};


/**
 * optional GroupHasReadInfo groupHasReadInfo = 1;
 * @return {?proto.openim.sdk.message.GroupHasReadInfo}
 */
proto.openim.sdk.message.AttachedInfoElem.prototype.getGrouphasreadinfo = function() {
  return /** @type{?proto.openim.sdk.message.GroupHasReadInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.GroupHasReadInfo, 1));
};


/**
 * @param {?proto.openim.sdk.message.GroupHasReadInfo|undefined} value
 * @return {!proto.openim.sdk.message.AttachedInfoElem} returns this
*/
proto.openim.sdk.message.AttachedInfoElem.prototype.setGrouphasreadinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.AttachedInfoElem} returns this
 */
proto.openim.sdk.message.AttachedInfoElem.prototype.clearGrouphasreadinfo = function() {
  return this.setGrouphasreadinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.AttachedInfoElem.prototype.hasGrouphasreadinfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool isPrivateChat = 2;
 * @return {boolean}
 */
proto.openim.sdk.message.AttachedInfoElem.prototype.getIsprivatechat = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.message.AttachedInfoElem} returns this
 */
proto.openim.sdk.message.AttachedInfoElem.prototype.setIsprivatechat = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int32 burnDuration = 3;
 * @return {number}
 */
proto.openim.sdk.message.AttachedInfoElem.prototype.getBurnduration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.AttachedInfoElem} returns this
 */
proto.openim.sdk.message.AttachedInfoElem.prototype.setBurnduration = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 hasReadTime = 4;
 * @return {number}
 */
proto.openim.sdk.message.AttachedInfoElem.prototype.getHasreadtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.AttachedInfoElem} returns this
 */
proto.openim.sdk.message.AttachedInfoElem.prototype.setHasreadtime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional UploadProgress progress = 5;
 * @return {?proto.openim.sdk.message.UploadProgress}
 */
proto.openim.sdk.message.AttachedInfoElem.prototype.getProgress = function() {
  return /** @type{?proto.openim.sdk.message.UploadProgress} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.UploadProgress, 5));
};


/**
 * @param {?proto.openim.sdk.message.UploadProgress|undefined} value
 * @return {!proto.openim.sdk.message.AttachedInfoElem} returns this
*/
proto.openim.sdk.message.AttachedInfoElem.prototype.setProgress = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.AttachedInfoElem} returns this
 */
proto.openim.sdk.message.AttachedInfoElem.prototype.clearProgress = function() {
  return this.setProgress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.AttachedInfoElem.prototype.hasProgress = function() {
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
proto.openim.sdk.message.UploadProgress.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.UploadProgress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.UploadProgress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.UploadProgress.toObject = function(includeInstance, msg) {
  var f, obj = {
total: jspb.Message.getFieldWithDefault(msg, 1, 0),
save: jspb.Message.getFieldWithDefault(msg, 2, 0),
current: jspb.Message.getFieldWithDefault(msg, 3, 0),
uploadid: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.openim.sdk.message.UploadProgress}
 */
proto.openim.sdk.message.UploadProgress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.UploadProgress;
  return proto.openim.sdk.message.UploadProgress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.UploadProgress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.UploadProgress}
 */
proto.openim.sdk.message.UploadProgress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSave(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurrent(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUploadid(value);
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
proto.openim.sdk.message.UploadProgress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.UploadProgress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.UploadProgress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.UploadProgress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSave();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCurrent();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getUploadid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 total = 1;
 * @return {number}
 */
proto.openim.sdk.message.UploadProgress.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.UploadProgress} returns this
 */
proto.openim.sdk.message.UploadProgress.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 save = 2;
 * @return {number}
 */
proto.openim.sdk.message.UploadProgress.prototype.getSave = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.UploadProgress} returns this
 */
proto.openim.sdk.message.UploadProgress.prototype.setSave = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 current = 3;
 * @return {number}
 */
proto.openim.sdk.message.UploadProgress.prototype.getCurrent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.UploadProgress} returns this
 */
proto.openim.sdk.message.UploadProgress.prototype.setCurrent = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string uploadID = 4;
 * @return {string}
 */
proto.openim.sdk.message.UploadProgress.prototype.getUploadid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.UploadProgress} returns this
 */
proto.openim.sdk.message.UploadProgress.prototype.setUploadid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.message.ReactionElem.repeatedFields_ = [3];



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
proto.openim.sdk.message.ReactionElem.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.ReactionElem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.ReactionElem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.ReactionElem.toObject = function(includeInstance, msg) {
  var f, obj = {
counter: jspb.Message.getFieldWithDefault(msg, 1, 0),
type: jspb.Message.getFieldWithDefault(msg, 2, 0),
userreactionlistList: jspb.Message.toObjectList(msg.getUserreactionlistList(),
    proto.openim.sdk.message.UserReactionElem.toObject, includeInstance),
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
 * @return {!proto.openim.sdk.message.ReactionElem}
 */
proto.openim.sdk.message.ReactionElem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.ReactionElem;
  return proto.openim.sdk.message.ReactionElem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.ReactionElem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.ReactionElem}
 */
proto.openim.sdk.message.ReactionElem.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.openim.sdk.message.UserReactionElem;
      reader.readMessage(value,proto.openim.sdk.message.UserReactionElem.deserializeBinaryFromReader);
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
proto.openim.sdk.message.ReactionElem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.ReactionElem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.ReactionElem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.ReactionElem.serializeBinaryToWriter = function(message, writer) {
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
      proto.openim.sdk.message.UserReactionElem.serializeBinaryToWriter
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
proto.openim.sdk.message.ReactionElem.prototype.getCounter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.ReactionElem} returns this
 */
proto.openim.sdk.message.ReactionElem.prototype.setCounter = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 type = 2;
 * @return {number}
 */
proto.openim.sdk.message.ReactionElem.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.ReactionElem} returns this
 */
proto.openim.sdk.message.ReactionElem.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated UserReactionElem userReactionList = 3;
 * @return {!Array<!proto.openim.sdk.message.UserReactionElem>}
 */
proto.openim.sdk.message.ReactionElem.prototype.getUserreactionlistList = function() {
  return /** @type{!Array<!proto.openim.sdk.message.UserReactionElem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.message.UserReactionElem, 3));
};


/**
 * @param {!Array<!proto.openim.sdk.message.UserReactionElem>} value
 * @return {!proto.openim.sdk.message.ReactionElem} returns this
*/
proto.openim.sdk.message.ReactionElem.prototype.setUserreactionlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.openim.sdk.message.UserReactionElem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.UserReactionElem}
 */
proto.openim.sdk.message.ReactionElem.prototype.addUserreactionlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.openim.sdk.message.UserReactionElem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.message.ReactionElem} returns this
 */
proto.openim.sdk.message.ReactionElem.prototype.clearUserreactionlistList = function() {
  return this.setUserreactionlistList([]);
};


/**
 * optional bool canRepeat = 4;
 * @return {boolean}
 */
proto.openim.sdk.message.ReactionElem.prototype.getCanrepeat = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.message.ReactionElem} returns this
 */
proto.openim.sdk.message.ReactionElem.prototype.setCanrepeat = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string info = 5;
 * @return {string}
 */
proto.openim.sdk.message.ReactionElem.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.ReactionElem} returns this
 */
proto.openim.sdk.message.ReactionElem.prototype.setInfo = function(value) {
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
proto.openim.sdk.message.UserReactionElem.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.UserReactionElem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.UserReactionElem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.UserReactionElem.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.UserReactionElem}
 */
proto.openim.sdk.message.UserReactionElem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.UserReactionElem;
  return proto.openim.sdk.message.UserReactionElem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.UserReactionElem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.UserReactionElem}
 */
proto.openim.sdk.message.UserReactionElem.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.UserReactionElem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.UserReactionElem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.UserReactionElem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.UserReactionElem.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.UserReactionElem.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.UserReactionElem} returns this
 */
proto.openim.sdk.message.UserReactionElem.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 counter = 2;
 * @return {number}
 */
proto.openim.sdk.message.UserReactionElem.prototype.getCounter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.UserReactionElem} returns this
 */
proto.openim.sdk.message.UserReactionElem.prototype.setCounter = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string info = 3;
 * @return {string}
 */
proto.openim.sdk.message.UserReactionElem.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.UserReactionElem} returns this
 */
proto.openim.sdk.message.UserReactionElem.prototype.setInfo = function(value) {
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
proto.openim.sdk.message.MessageEntity.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.MessageEntity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.MessageEntity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.MessageEntity.toObject = function(includeInstance, msg) {
  var f, obj = {
type: jspb.Message.getFieldWithDefault(msg, 1, ""),
offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
length: jspb.Message.getFieldWithDefault(msg, 3, 0),
url: jspb.Message.getFieldWithDefault(msg, 4, ""),
ex: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.openim.sdk.message.MessageEntity}
 */
proto.openim.sdk.message.MessageEntity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.MessageEntity;
  return proto.openim.sdk.message.MessageEntity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.MessageEntity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.MessageEntity}
 */
proto.openim.sdk.message.MessageEntity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLength(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 5:
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
proto.openim.sdk.message.MessageEntity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.MessageEntity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.MessageEntity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.MessageEntity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getLength();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEx();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.openim.sdk.message.MessageEntity.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.MessageEntity} returns this
 */
proto.openim.sdk.message.MessageEntity.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 offset = 2;
 * @return {number}
 */
proto.openim.sdk.message.MessageEntity.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.MessageEntity} returns this
 */
proto.openim.sdk.message.MessageEntity.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 length = 3;
 * @return {number}
 */
proto.openim.sdk.message.MessageEntity.prototype.getLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.MessageEntity} returns this
 */
proto.openim.sdk.message.MessageEntity.prototype.setLength = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string url = 4;
 * @return {string}
 */
proto.openim.sdk.message.MessageEntity.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.MessageEntity} returns this
 */
proto.openim.sdk.message.MessageEntity.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string ex = 5;
 * @return {string}
 */
proto.openim.sdk.message.MessageEntity.prototype.getEx = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.MessageEntity} returns this
 */
proto.openim.sdk.message.MessageEntity.prototype.setEx = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.message.GroupHasReadInfo.repeatedFields_ = [1];



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
proto.openim.sdk.message.GroupHasReadInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.GroupHasReadInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.GroupHasReadInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.GroupHasReadInfo.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.GroupHasReadInfo}
 */
proto.openim.sdk.message.GroupHasReadInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.GroupHasReadInfo;
  return proto.openim.sdk.message.GroupHasReadInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.GroupHasReadInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.GroupHasReadInfo}
 */
proto.openim.sdk.message.GroupHasReadInfo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.GroupHasReadInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.GroupHasReadInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.GroupHasReadInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.GroupHasReadInfo.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.GroupHasReadInfo.prototype.getHasreaduseridlistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.message.GroupHasReadInfo} returns this
 */
proto.openim.sdk.message.GroupHasReadInfo.prototype.setHasreaduseridlistList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.GroupHasReadInfo} returns this
 */
proto.openim.sdk.message.GroupHasReadInfo.prototype.addHasreaduseridlist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.message.GroupHasReadInfo} returns this
 */
proto.openim.sdk.message.GroupHasReadInfo.prototype.clearHasreaduseridlistList = function() {
  return this.setHasreaduseridlistList([]);
};


/**
 * optional int32 hasReadCount = 2;
 * @return {number}
 */
proto.openim.sdk.message.GroupHasReadInfo.prototype.getHasreadcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.GroupHasReadInfo} returns this
 */
proto.openim.sdk.message.GroupHasReadInfo.prototype.setHasreadcount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 groupMemberCount = 3;
 * @return {number}
 */
proto.openim.sdk.message.GroupHasReadInfo.prototype.getGroupmembercount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.GroupHasReadInfo} returns this
 */
proto.openim.sdk.message.GroupHasReadInfo.prototype.setGroupmembercount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.openim.sdk.message.IMMessage.oneofGroups_ = [[23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38]];

/**
 * @enum {number}
 */
proto.openim.sdk.message.IMMessage.ContentCase = {
  CONTENT_NOT_SET: 0,
  TEXTELEM: 23,
  CARDELEM: 24,
  PICTUREELEM: 25,
  SOUNDELEM: 26,
  VIDEOELEM: 27,
  FILEELEM: 28,
  MERGEELEM: 29,
  ATTEXTELEM: 30,
  FACEELEM: 31,
  LOCATIONELEM: 32,
  CUSTOMELEM: 33,
  QUOTEELEM: 34,
  NOTIFICATIONELEM: 35,
  ADVANCEDTEXTELEM: 36,
  TYPINGELEM: 37,
  STREAMELEM: 38
};

/**
 * @return {proto.openim.sdk.message.IMMessage.ContentCase}
 */
proto.openim.sdk.message.IMMessage.prototype.getContentCase = function() {
  return /** @type {proto.openim.sdk.message.IMMessage.ContentCase} */(jspb.Message.computeOneofCase(this, proto.openim.sdk.message.IMMessage.oneofGroups_[0]));
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
proto.openim.sdk.message.IMMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.IMMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.IMMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.IMMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
clientmsgid: jspb.Message.getFieldWithDefault(msg, 1, ""),
servermsgid: jspb.Message.getFieldWithDefault(msg, 2, ""),
createtime: jspb.Message.getFieldWithDefault(msg, 3, 0),
sendtime: jspb.Message.getFieldWithDefault(msg, 4, 0),
sessiontype: jspb.Message.getFieldWithDefault(msg, 5, 0),
sendid: jspb.Message.getFieldWithDefault(msg, 6, ""),
recvid: jspb.Message.getFieldWithDefault(msg, 7, ""),
msgfrom: jspb.Message.getFieldWithDefault(msg, 8, 0),
contenttype: jspb.Message.getFieldWithDefault(msg, 9, 0),
senderplatformid: jspb.Message.getFieldWithDefault(msg, 10, 0),
sendernickname: jspb.Message.getFieldWithDefault(msg, 11, ""),
senderfaceurl: jspb.Message.getFieldWithDefault(msg, 12, ""),
groupid: jspb.Message.getFieldWithDefault(msg, 13, ""),
seq: jspb.Message.getFieldWithDefault(msg, 15, 0),
isread: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
status: jspb.Message.getFieldWithDefault(msg, 17, 0),
offlinepush: (f = msg.getOfflinepush()) && common_pb.OfflinePushInfo.toObject(includeInstance, f),
ex: jspb.Message.getFieldWithDefault(msg, 20, ""),
localex: jspb.Message.getFieldWithDefault(msg, 21, ""),
textelem: (f = msg.getTextelem()) && proto.openim.sdk.message.TextElem.toObject(includeInstance, f),
cardelem: (f = msg.getCardelem()) && proto.openim.sdk.message.CardElem.toObject(includeInstance, f),
pictureelem: (f = msg.getPictureelem()) && proto.openim.sdk.message.PictureElem.toObject(includeInstance, f),
soundelem: (f = msg.getSoundelem()) && proto.openim.sdk.message.SoundElem.toObject(includeInstance, f),
videoelem: (f = msg.getVideoelem()) && proto.openim.sdk.message.VideoElem.toObject(includeInstance, f),
fileelem: (f = msg.getFileelem()) && proto.openim.sdk.message.FileElem.toObject(includeInstance, f),
mergeelem: (f = msg.getMergeelem()) && proto.openim.sdk.message.MergeElem.toObject(includeInstance, f),
attextelem: (f = msg.getAttextelem()) && proto.openim.sdk.message.AtTextElem.toObject(includeInstance, f),
faceelem: (f = msg.getFaceelem()) && proto.openim.sdk.message.FaceElem.toObject(includeInstance, f),
locationelem: (f = msg.getLocationelem()) && proto.openim.sdk.message.LocationElem.toObject(includeInstance, f),
customelem: (f = msg.getCustomelem()) && proto.openim.sdk.message.CustomElem.toObject(includeInstance, f),
quoteelem: (f = msg.getQuoteelem()) && proto.openim.sdk.message.QuoteElem.toObject(includeInstance, f),
notificationelem: (f = msg.getNotificationelem()) && proto.openim.sdk.message.NotificationElem.toObject(includeInstance, f),
advancedtextelem: (f = msg.getAdvancedtextelem()) && proto.openim.sdk.message.AdvancedTextElem.toObject(includeInstance, f),
typingelem: (f = msg.getTypingelem()) && proto.openim.sdk.message.TypingElem.toObject(includeInstance, f),
streamelem: (f = msg.getStreamelem()) && proto.openim.sdk.message.StreamElem.toObject(includeInstance, f),
attachedinfoelem: (f = msg.getAttachedinfoelem()) && proto.openim.sdk.message.AttachedInfoElem.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.IMMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.IMMessage;
  return proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.IMMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setServermsgid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatetime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSendtime(value);
      break;
    case 5:
      var value = /** @type {!proto.openim.sdk.common.SessionType} */ (reader.readEnum());
      msg.setSessiontype(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSendid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecvid(value);
      break;
    case 8:
      var value = /** @type {!proto.openim.sdk.common.MsgFrom} */ (reader.readEnum());
      msg.setMsgfrom(value);
      break;
    case 9:
      var value = /** @type {!proto.openim.sdk.common.ContentType} */ (reader.readEnum());
      msg.setContenttype(value);
      break;
    case 10:
      var value = /** @type {!proto.openim.sdk.common.Platform} */ (reader.readEnum());
      msg.setSenderplatformid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setSendernickname(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderfaceurl(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupid(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeq(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsread(value);
      break;
    case 17:
      var value = /** @type {!proto.openim.sdk.common.MsgStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 18:
      var value = new common_pb.OfflinePushInfo;
      reader.readMessage(value,common_pb.OfflinePushInfo.deserializeBinaryFromReader);
      msg.setOfflinepush(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setEx(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalex(value);
      break;
    case 23:
      var value = new proto.openim.sdk.message.TextElem;
      reader.readMessage(value,proto.openim.sdk.message.TextElem.deserializeBinaryFromReader);
      msg.setTextelem(value);
      break;
    case 24:
      var value = new proto.openim.sdk.message.CardElem;
      reader.readMessage(value,proto.openim.sdk.message.CardElem.deserializeBinaryFromReader);
      msg.setCardelem(value);
      break;
    case 25:
      var value = new proto.openim.sdk.message.PictureElem;
      reader.readMessage(value,proto.openim.sdk.message.PictureElem.deserializeBinaryFromReader);
      msg.setPictureelem(value);
      break;
    case 26:
      var value = new proto.openim.sdk.message.SoundElem;
      reader.readMessage(value,proto.openim.sdk.message.SoundElem.deserializeBinaryFromReader);
      msg.setSoundelem(value);
      break;
    case 27:
      var value = new proto.openim.sdk.message.VideoElem;
      reader.readMessage(value,proto.openim.sdk.message.VideoElem.deserializeBinaryFromReader);
      msg.setVideoelem(value);
      break;
    case 28:
      var value = new proto.openim.sdk.message.FileElem;
      reader.readMessage(value,proto.openim.sdk.message.FileElem.deserializeBinaryFromReader);
      msg.setFileelem(value);
      break;
    case 29:
      var value = new proto.openim.sdk.message.MergeElem;
      reader.readMessage(value,proto.openim.sdk.message.MergeElem.deserializeBinaryFromReader);
      msg.setMergeelem(value);
      break;
    case 30:
      var value = new proto.openim.sdk.message.AtTextElem;
      reader.readMessage(value,proto.openim.sdk.message.AtTextElem.deserializeBinaryFromReader);
      msg.setAttextelem(value);
      break;
    case 31:
      var value = new proto.openim.sdk.message.FaceElem;
      reader.readMessage(value,proto.openim.sdk.message.FaceElem.deserializeBinaryFromReader);
      msg.setFaceelem(value);
      break;
    case 32:
      var value = new proto.openim.sdk.message.LocationElem;
      reader.readMessage(value,proto.openim.sdk.message.LocationElem.deserializeBinaryFromReader);
      msg.setLocationelem(value);
      break;
    case 33:
      var value = new proto.openim.sdk.message.CustomElem;
      reader.readMessage(value,proto.openim.sdk.message.CustomElem.deserializeBinaryFromReader);
      msg.setCustomelem(value);
      break;
    case 34:
      var value = new proto.openim.sdk.message.QuoteElem;
      reader.readMessage(value,proto.openim.sdk.message.QuoteElem.deserializeBinaryFromReader);
      msg.setQuoteelem(value);
      break;
    case 35:
      var value = new proto.openim.sdk.message.NotificationElem;
      reader.readMessage(value,proto.openim.sdk.message.NotificationElem.deserializeBinaryFromReader);
      msg.setNotificationelem(value);
      break;
    case 36:
      var value = new proto.openim.sdk.message.AdvancedTextElem;
      reader.readMessage(value,proto.openim.sdk.message.AdvancedTextElem.deserializeBinaryFromReader);
      msg.setAdvancedtextelem(value);
      break;
    case 37:
      var value = new proto.openim.sdk.message.TypingElem;
      reader.readMessage(value,proto.openim.sdk.message.TypingElem.deserializeBinaryFromReader);
      msg.setTypingelem(value);
      break;
    case 38:
      var value = new proto.openim.sdk.message.StreamElem;
      reader.readMessage(value,proto.openim.sdk.message.StreamElem.deserializeBinaryFromReader);
      msg.setStreamelem(value);
      break;
    case 39:
      var value = new proto.openim.sdk.message.AttachedInfoElem;
      reader.readMessage(value,proto.openim.sdk.message.AttachedInfoElem.deserializeBinaryFromReader);
      msg.setAttachedinfoelem(value);
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
proto.openim.sdk.message.IMMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.IMMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.IMMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.IMMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientmsgid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getServermsgid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatetime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getSendtime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getSessiontype();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getSendid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRecvid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMsgfrom();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getContenttype();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getSenderplatformid();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getSendernickname();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getSenderfaceurl();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getSeq();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getIsread();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      17,
      f
    );
  }
  f = message.getOfflinepush();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      common_pb.OfflinePushInfo.serializeBinaryToWriter
    );
  }
  f = message.getEx();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getLocalex();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getTextelem();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.openim.sdk.message.TextElem.serializeBinaryToWriter
    );
  }
  f = message.getCardelem();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.openim.sdk.message.CardElem.serializeBinaryToWriter
    );
  }
  f = message.getPictureelem();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.openim.sdk.message.PictureElem.serializeBinaryToWriter
    );
  }
  f = message.getSoundelem();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.openim.sdk.message.SoundElem.serializeBinaryToWriter
    );
  }
  f = message.getVideoelem();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.openim.sdk.message.VideoElem.serializeBinaryToWriter
    );
  }
  f = message.getFileelem();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.openim.sdk.message.FileElem.serializeBinaryToWriter
    );
  }
  f = message.getMergeelem();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.openim.sdk.message.MergeElem.serializeBinaryToWriter
    );
  }
  f = message.getAttextelem();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.openim.sdk.message.AtTextElem.serializeBinaryToWriter
    );
  }
  f = message.getFaceelem();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.openim.sdk.message.FaceElem.serializeBinaryToWriter
    );
  }
  f = message.getLocationelem();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.openim.sdk.message.LocationElem.serializeBinaryToWriter
    );
  }
  f = message.getCustomelem();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto.openim.sdk.message.CustomElem.serializeBinaryToWriter
    );
  }
  f = message.getQuoteelem();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto.openim.sdk.message.QuoteElem.serializeBinaryToWriter
    );
  }
  f = message.getNotificationelem();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      proto.openim.sdk.message.NotificationElem.serializeBinaryToWriter
    );
  }
  f = message.getAdvancedtextelem();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto.openim.sdk.message.AdvancedTextElem.serializeBinaryToWriter
    );
  }
  f = message.getTypingelem();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto.openim.sdk.message.TypingElem.serializeBinaryToWriter
    );
  }
  f = message.getStreamelem();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      proto.openim.sdk.message.StreamElem.serializeBinaryToWriter
    );
  }
  f = message.getAttachedinfoelem();
  if (f != null) {
    writer.writeMessage(
      39,
      f,
      proto.openim.sdk.message.AttachedInfoElem.serializeBinaryToWriter
    );
  }
};


/**
 * optional string clientMsgID = 1;
 * @return {string}
 */
proto.openim.sdk.message.IMMessage.prototype.getClientmsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.setClientmsgid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string serverMsgID = 2;
 * @return {string}
 */
proto.openim.sdk.message.IMMessage.prototype.getServermsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.setServermsgid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 createTime = 3;
 * @return {number}
 */
proto.openim.sdk.message.IMMessage.prototype.getCreatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.setCreatetime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 sendTime = 4;
 * @return {number}
 */
proto.openim.sdk.message.IMMessage.prototype.getSendtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.setSendtime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional openim.sdk.common.SessionType sessionType = 5;
 * @return {!proto.openim.sdk.common.SessionType}
 */
proto.openim.sdk.message.IMMessage.prototype.getSessiontype = function() {
  return /** @type {!proto.openim.sdk.common.SessionType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.openim.sdk.common.SessionType} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.setSessiontype = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string sendID = 6;
 * @return {string}
 */
proto.openim.sdk.message.IMMessage.prototype.getSendid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.setSendid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string recvID = 7;
 * @return {string}
 */
proto.openim.sdk.message.IMMessage.prototype.getRecvid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.setRecvid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional openim.sdk.common.MsgFrom msgFrom = 8;
 * @return {!proto.openim.sdk.common.MsgFrom}
 */
proto.openim.sdk.message.IMMessage.prototype.getMsgfrom = function() {
  return /** @type {!proto.openim.sdk.common.MsgFrom} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.openim.sdk.common.MsgFrom} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.setMsgfrom = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional openim.sdk.common.ContentType contentType = 9;
 * @return {!proto.openim.sdk.common.ContentType}
 */
proto.openim.sdk.message.IMMessage.prototype.getContenttype = function() {
  return /** @type {!proto.openim.sdk.common.ContentType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.openim.sdk.common.ContentType} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.setContenttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional openim.sdk.common.Platform senderPlatformID = 10;
 * @return {!proto.openim.sdk.common.Platform}
 */
proto.openim.sdk.message.IMMessage.prototype.getSenderplatformid = function() {
  return /** @type {!proto.openim.sdk.common.Platform} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.openim.sdk.common.Platform} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.setSenderplatformid = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional string senderNickname = 11;
 * @return {string}
 */
proto.openim.sdk.message.IMMessage.prototype.getSendernickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.setSendernickname = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string senderFaceURL = 12;
 * @return {string}
 */
proto.openim.sdk.message.IMMessage.prototype.getSenderfaceurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.setSenderfaceurl = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string groupID = 13;
 * @return {string}
 */
proto.openim.sdk.message.IMMessage.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional int64 seq = 15;
 * @return {number}
 */
proto.openim.sdk.message.IMMessage.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.setSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional bool isRead = 16;
 * @return {boolean}
 */
proto.openim.sdk.message.IMMessage.prototype.getIsread = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.setIsread = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional openim.sdk.common.MsgStatus status = 17;
 * @return {!proto.openim.sdk.common.MsgStatus}
 */
proto.openim.sdk.message.IMMessage.prototype.getStatus = function() {
  return /** @type {!proto.openim.sdk.common.MsgStatus} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {!proto.openim.sdk.common.MsgStatus} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 17, value);
};


/**
 * optional openim.sdk.common.OfflinePushInfo offlinePush = 18;
 * @return {?proto.openim.sdk.common.OfflinePushInfo}
 */
proto.openim.sdk.message.IMMessage.prototype.getOfflinepush = function() {
  return /** @type{?proto.openim.sdk.common.OfflinePushInfo} */ (
    jspb.Message.getWrapperField(this, common_pb.OfflinePushInfo, 18));
};


/**
 * @param {?proto.openim.sdk.common.OfflinePushInfo|undefined} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
*/
proto.openim.sdk.message.IMMessage.prototype.setOfflinepush = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.clearOfflinepush = function() {
  return this.setOfflinepush(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.IMMessage.prototype.hasOfflinepush = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional string ex = 20;
 * @return {string}
 */
proto.openim.sdk.message.IMMessage.prototype.getEx = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.setEx = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string localEx = 21;
 * @return {string}
 */
proto.openim.sdk.message.IMMessage.prototype.getLocalex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.setLocalex = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional TextElem textElem = 23;
 * @return {?proto.openim.sdk.message.TextElem}
 */
proto.openim.sdk.message.IMMessage.prototype.getTextelem = function() {
  return /** @type{?proto.openim.sdk.message.TextElem} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.TextElem, 23));
};


/**
 * @param {?proto.openim.sdk.message.TextElem|undefined} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
*/
proto.openim.sdk.message.IMMessage.prototype.setTextelem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.openim.sdk.message.IMMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.clearTextelem = function() {
  return this.setTextelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.IMMessage.prototype.hasTextelem = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional CardElem cardElem = 24;
 * @return {?proto.openim.sdk.message.CardElem}
 */
proto.openim.sdk.message.IMMessage.prototype.getCardelem = function() {
  return /** @type{?proto.openim.sdk.message.CardElem} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.CardElem, 24));
};


/**
 * @param {?proto.openim.sdk.message.CardElem|undefined} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
*/
proto.openim.sdk.message.IMMessage.prototype.setCardelem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 24, proto.openim.sdk.message.IMMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.clearCardelem = function() {
  return this.setCardelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.IMMessage.prototype.hasCardelem = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional PictureElem pictureElem = 25;
 * @return {?proto.openim.sdk.message.PictureElem}
 */
proto.openim.sdk.message.IMMessage.prototype.getPictureelem = function() {
  return /** @type{?proto.openim.sdk.message.PictureElem} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.PictureElem, 25));
};


/**
 * @param {?proto.openim.sdk.message.PictureElem|undefined} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
*/
proto.openim.sdk.message.IMMessage.prototype.setPictureelem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 25, proto.openim.sdk.message.IMMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.clearPictureelem = function() {
  return this.setPictureelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.IMMessage.prototype.hasPictureelem = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional SoundElem soundElem = 26;
 * @return {?proto.openim.sdk.message.SoundElem}
 */
proto.openim.sdk.message.IMMessage.prototype.getSoundelem = function() {
  return /** @type{?proto.openim.sdk.message.SoundElem} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.SoundElem, 26));
};


/**
 * @param {?proto.openim.sdk.message.SoundElem|undefined} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
*/
proto.openim.sdk.message.IMMessage.prototype.setSoundelem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 26, proto.openim.sdk.message.IMMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.clearSoundelem = function() {
  return this.setSoundelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.IMMessage.prototype.hasSoundelem = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional VideoElem videoElem = 27;
 * @return {?proto.openim.sdk.message.VideoElem}
 */
proto.openim.sdk.message.IMMessage.prototype.getVideoelem = function() {
  return /** @type{?proto.openim.sdk.message.VideoElem} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.VideoElem, 27));
};


/**
 * @param {?proto.openim.sdk.message.VideoElem|undefined} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
*/
proto.openim.sdk.message.IMMessage.prototype.setVideoelem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 27, proto.openim.sdk.message.IMMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.clearVideoelem = function() {
  return this.setVideoelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.IMMessage.prototype.hasVideoelem = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional FileElem fileElem = 28;
 * @return {?proto.openim.sdk.message.FileElem}
 */
proto.openim.sdk.message.IMMessage.prototype.getFileelem = function() {
  return /** @type{?proto.openim.sdk.message.FileElem} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.FileElem, 28));
};


/**
 * @param {?proto.openim.sdk.message.FileElem|undefined} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
*/
proto.openim.sdk.message.IMMessage.prototype.setFileelem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 28, proto.openim.sdk.message.IMMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.clearFileelem = function() {
  return this.setFileelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.IMMessage.prototype.hasFileelem = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional MergeElem mergeElem = 29;
 * @return {?proto.openim.sdk.message.MergeElem}
 */
proto.openim.sdk.message.IMMessage.prototype.getMergeelem = function() {
  return /** @type{?proto.openim.sdk.message.MergeElem} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.MergeElem, 29));
};


/**
 * @param {?proto.openim.sdk.message.MergeElem|undefined} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
*/
proto.openim.sdk.message.IMMessage.prototype.setMergeelem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 29, proto.openim.sdk.message.IMMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.clearMergeelem = function() {
  return this.setMergeelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.IMMessage.prototype.hasMergeelem = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional AtTextElem atTextElem = 30;
 * @return {?proto.openim.sdk.message.AtTextElem}
 */
proto.openim.sdk.message.IMMessage.prototype.getAttextelem = function() {
  return /** @type{?proto.openim.sdk.message.AtTextElem} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.AtTextElem, 30));
};


/**
 * @param {?proto.openim.sdk.message.AtTextElem|undefined} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
*/
proto.openim.sdk.message.IMMessage.prototype.setAttextelem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 30, proto.openim.sdk.message.IMMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.clearAttextelem = function() {
  return this.setAttextelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.IMMessage.prototype.hasAttextelem = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional FaceElem faceElem = 31;
 * @return {?proto.openim.sdk.message.FaceElem}
 */
proto.openim.sdk.message.IMMessage.prototype.getFaceelem = function() {
  return /** @type{?proto.openim.sdk.message.FaceElem} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.FaceElem, 31));
};


/**
 * @param {?proto.openim.sdk.message.FaceElem|undefined} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
*/
proto.openim.sdk.message.IMMessage.prototype.setFaceelem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 31, proto.openim.sdk.message.IMMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.clearFaceelem = function() {
  return this.setFaceelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.IMMessage.prototype.hasFaceelem = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional LocationElem locationElem = 32;
 * @return {?proto.openim.sdk.message.LocationElem}
 */
proto.openim.sdk.message.IMMessage.prototype.getLocationelem = function() {
  return /** @type{?proto.openim.sdk.message.LocationElem} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.LocationElem, 32));
};


/**
 * @param {?proto.openim.sdk.message.LocationElem|undefined} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
*/
proto.openim.sdk.message.IMMessage.prototype.setLocationelem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 32, proto.openim.sdk.message.IMMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.clearLocationelem = function() {
  return this.setLocationelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.IMMessage.prototype.hasLocationelem = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional CustomElem customElem = 33;
 * @return {?proto.openim.sdk.message.CustomElem}
 */
proto.openim.sdk.message.IMMessage.prototype.getCustomelem = function() {
  return /** @type{?proto.openim.sdk.message.CustomElem} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.CustomElem, 33));
};


/**
 * @param {?proto.openim.sdk.message.CustomElem|undefined} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
*/
proto.openim.sdk.message.IMMessage.prototype.setCustomelem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 33, proto.openim.sdk.message.IMMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.clearCustomelem = function() {
  return this.setCustomelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.IMMessage.prototype.hasCustomelem = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional QuoteElem quoteElem = 34;
 * @return {?proto.openim.sdk.message.QuoteElem}
 */
proto.openim.sdk.message.IMMessage.prototype.getQuoteelem = function() {
  return /** @type{?proto.openim.sdk.message.QuoteElem} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.QuoteElem, 34));
};


/**
 * @param {?proto.openim.sdk.message.QuoteElem|undefined} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
*/
proto.openim.sdk.message.IMMessage.prototype.setQuoteelem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 34, proto.openim.sdk.message.IMMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.clearQuoteelem = function() {
  return this.setQuoteelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.IMMessage.prototype.hasQuoteelem = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional NotificationElem notificationElem = 35;
 * @return {?proto.openim.sdk.message.NotificationElem}
 */
proto.openim.sdk.message.IMMessage.prototype.getNotificationelem = function() {
  return /** @type{?proto.openim.sdk.message.NotificationElem} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.NotificationElem, 35));
};


/**
 * @param {?proto.openim.sdk.message.NotificationElem|undefined} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
*/
proto.openim.sdk.message.IMMessage.prototype.setNotificationelem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 35, proto.openim.sdk.message.IMMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.clearNotificationelem = function() {
  return this.setNotificationelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.IMMessage.prototype.hasNotificationelem = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional AdvancedTextElem advancedTextElem = 36;
 * @return {?proto.openim.sdk.message.AdvancedTextElem}
 */
proto.openim.sdk.message.IMMessage.prototype.getAdvancedtextelem = function() {
  return /** @type{?proto.openim.sdk.message.AdvancedTextElem} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.AdvancedTextElem, 36));
};


/**
 * @param {?proto.openim.sdk.message.AdvancedTextElem|undefined} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
*/
proto.openim.sdk.message.IMMessage.prototype.setAdvancedtextelem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 36, proto.openim.sdk.message.IMMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.clearAdvancedtextelem = function() {
  return this.setAdvancedtextelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.IMMessage.prototype.hasAdvancedtextelem = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional TypingElem typingElem = 37;
 * @return {?proto.openim.sdk.message.TypingElem}
 */
proto.openim.sdk.message.IMMessage.prototype.getTypingelem = function() {
  return /** @type{?proto.openim.sdk.message.TypingElem} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.TypingElem, 37));
};


/**
 * @param {?proto.openim.sdk.message.TypingElem|undefined} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
*/
proto.openim.sdk.message.IMMessage.prototype.setTypingelem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 37, proto.openim.sdk.message.IMMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.clearTypingelem = function() {
  return this.setTypingelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.IMMessage.prototype.hasTypingelem = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional StreamElem streamElem = 38;
 * @return {?proto.openim.sdk.message.StreamElem}
 */
proto.openim.sdk.message.IMMessage.prototype.getStreamelem = function() {
  return /** @type{?proto.openim.sdk.message.StreamElem} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.StreamElem, 38));
};


/**
 * @param {?proto.openim.sdk.message.StreamElem|undefined} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
*/
proto.openim.sdk.message.IMMessage.prototype.setStreamelem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 38, proto.openim.sdk.message.IMMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.clearStreamelem = function() {
  return this.setStreamelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.IMMessage.prototype.hasStreamelem = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional AttachedInfoElem attachedInfoElem = 39;
 * @return {?proto.openim.sdk.message.AttachedInfoElem}
 */
proto.openim.sdk.message.IMMessage.prototype.getAttachedinfoelem = function() {
  return /** @type{?proto.openim.sdk.message.AttachedInfoElem} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.AttachedInfoElem, 39));
};


/**
 * @param {?proto.openim.sdk.message.AttachedInfoElem|undefined} value
 * @return {!proto.openim.sdk.message.IMMessage} returns this
*/
proto.openim.sdk.message.IMMessage.prototype.setAttachedinfoelem = function(value) {
  return jspb.Message.setWrapperField(this, 39, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.IMMessage} returns this
 */
proto.openim.sdk.message.IMMessage.prototype.clearAttachedinfoelem = function() {
  return this.setAttachedinfoelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.IMMessage.prototype.hasAttachedinfoelem = function() {
  return jspb.Message.getField(this, 39) != null;
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
proto.openim.sdk.message.GetAdvancedHistoryMessageListParams.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.GetAdvancedHistoryMessageListParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.GetAdvancedHistoryMessageListParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListParams.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListParams}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.GetAdvancedHistoryMessageListParams;
  return proto.openim.sdk.message.GetAdvancedHistoryMessageListParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.GetAdvancedHistoryMessageListParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListParams}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListParams.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.GetAdvancedHistoryMessageListParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.GetAdvancedHistoryMessageListParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.GetAdvancedHistoryMessageListParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListParams.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.GetAdvancedHistoryMessageListParams.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListParams} returns this
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListParams.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string startClientMsgID = 2;
 * @return {string}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListParams.prototype.getStartclientmsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListParams} returns this
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListParams.prototype.setStartclientmsgid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 count = 3;
 * @return {number}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListParams.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListParams} returns this
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListParams.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.repeatedFields_ = [1];



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
proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.toObject = function(includeInstance, msg) {
  var f, obj = {
messagelistList: jspb.Message.toObjectList(msg.getMessagelistList(),
    proto.openim.sdk.message.IMMessage.toObject, includeInstance),
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
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback;
  return proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagelistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
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
 * repeated IMMessage messageList = 1;
 * @return {!Array<!proto.openim.sdk.message.IMMessage>}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.prototype.getMessagelistList = function() {
  return /** @type{!Array<!proto.openim.sdk.message.IMMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.message.IMMessage>} value
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback} returns this
*/
proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.prototype.setMessagelistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.message.IMMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.prototype.addMessagelist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.message.IMMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback} returns this
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.prototype.clearMessagelistList = function() {
  return this.setMessagelistList([]);
};


/**
 * optional bool isEnd = 2;
 * @return {boolean}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.prototype.getIsend = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback} returns this
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.prototype.setIsend = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int32 errCode = 3;
 * @return {number}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback} returns this
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string errMsg = 4;
 * @return {string}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.prototype.getErrmsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback} returns this
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.prototype.setErrmsg = function(value) {
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
proto.openim.sdk.message.SendMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.SendMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.SendMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.SendMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f),
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
 * @return {!proto.openim.sdk.message.SendMessageReq}
 */
proto.openim.sdk.message.SendMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.SendMessageReq;
  return proto.openim.sdk.message.SendMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.SendMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.SendMessageReq}
 */
proto.openim.sdk.message.SendMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.SendMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.SendMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.SendMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.SendMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
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
 * optional IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.SendMessageReq.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.SendMessageReq} returns this
*/
proto.openim.sdk.message.SendMessageReq.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.SendMessageReq} returns this
 */
proto.openim.sdk.message.SendMessageReq.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.SendMessageReq.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string recvID = 2;
 * @return {string}
 */
proto.openim.sdk.message.SendMessageReq.prototype.getRecvid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.SendMessageReq} returns this
 */
proto.openim.sdk.message.SendMessageReq.prototype.setRecvid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string groupID = 3;
 * @return {string}
 */
proto.openim.sdk.message.SendMessageReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.SendMessageReq} returns this
 */
proto.openim.sdk.message.SendMessageReq.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional openim.sdk.common.OfflinePushInfo offlinePushInfo = 4;
 * @return {?proto.openim.sdk.common.OfflinePushInfo}
 */
proto.openim.sdk.message.SendMessageReq.prototype.getOfflinepushinfo = function() {
  return /** @type{?proto.openim.sdk.common.OfflinePushInfo} */ (
    jspb.Message.getWrapperField(this, common_pb.OfflinePushInfo, 4));
};


/**
 * @param {?proto.openim.sdk.common.OfflinePushInfo|undefined} value
 * @return {!proto.openim.sdk.message.SendMessageReq} returns this
*/
proto.openim.sdk.message.SendMessageReq.prototype.setOfflinepushinfo = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.SendMessageReq} returns this
 */
proto.openim.sdk.message.SendMessageReq.prototype.clearOfflinepushinfo = function() {
  return this.setOfflinepushinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.SendMessageReq.prototype.hasOfflinepushinfo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool isOnlineOnly = 5;
 * @return {boolean}
 */
proto.openim.sdk.message.SendMessageReq.prototype.getIsonlineonly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.message.SendMessageReq} returns this
 */
proto.openim.sdk.message.SendMessageReq.prototype.setIsonlineonly = function(value) {
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
proto.openim.sdk.message.SendMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.SendMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.SendMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.SendMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.SendMessageResp}
 */
proto.openim.sdk.message.SendMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.SendMessageResp;
  return proto.openim.sdk.message.SendMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.SendMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.SendMessageResp}
 */
proto.openim.sdk.message.SendMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.SendMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.SendMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.SendMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.SendMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.SendMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.SendMessageResp} returns this
*/
proto.openim.sdk.message.SendMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.SendMessageResp} returns this
 */
proto.openim.sdk.message.SendMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.SendMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.message.GetAdvancedHistoryMessageListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.GetAdvancedHistoryMessageListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationid: jspb.Message.getFieldWithDefault(msg, 1, ""),
getadvancedhistorymessagelistparams: (f = msg.getGetadvancedhistorymessagelistparams()) && proto.openim.sdk.message.GetAdvancedHistoryMessageListParams.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReq}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.GetAdvancedHistoryMessageListReq;
  return proto.openim.sdk.message.GetAdvancedHistoryMessageListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReq}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.openim.sdk.message.GetAdvancedHistoryMessageListParams;
      reader.readMessage(value,proto.openim.sdk.message.GetAdvancedHistoryMessageListParams.deserializeBinaryFromReader);
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
proto.openim.sdk.message.GetAdvancedHistoryMessageListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.GetAdvancedHistoryMessageListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReq.serializeBinaryToWriter = function(message, writer) {
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
      proto.openim.sdk.message.GetAdvancedHistoryMessageListParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional string conversationID = 1;
 * @return {string}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReq.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReq} returns this
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReq.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional GetAdvancedHistoryMessageListParams getAdvancedHistoryMessageListParams = 2;
 * @return {?proto.openim.sdk.message.GetAdvancedHistoryMessageListParams}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReq.prototype.getGetadvancedhistorymessagelistparams = function() {
  return /** @type{?proto.openim.sdk.message.GetAdvancedHistoryMessageListParams} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.GetAdvancedHistoryMessageListParams, 2));
};


/**
 * @param {?proto.openim.sdk.message.GetAdvancedHistoryMessageListParams|undefined} value
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReq} returns this
*/
proto.openim.sdk.message.GetAdvancedHistoryMessageListReq.prototype.setGetadvancedhistorymessagelistparams = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReq} returns this
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReq.prototype.clearGetadvancedhistorymessagelistparams = function() {
  return this.setGetadvancedhistorymessagelistparams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReq.prototype.hasGetadvancedhistorymessagelistparams = function() {
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
proto.openim.sdk.message.GetAdvancedHistoryMessageListResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.GetAdvancedHistoryMessageListResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.GetAdvancedHistoryMessageListResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListResp.toObject = function(includeInstance, msg) {
  var f, obj = {
getadvancedhistorymessagelistcallback: (f = msg.getGetadvancedhistorymessagelistcallback()) && proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListResp}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.GetAdvancedHistoryMessageListResp;
  return proto.openim.sdk.message.GetAdvancedHistoryMessageListResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.GetAdvancedHistoryMessageListResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListResp}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback;
      reader.readMessage(value,proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.deserializeBinaryFromReader);
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
proto.openim.sdk.message.GetAdvancedHistoryMessageListResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.GetAdvancedHistoryMessageListResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.GetAdvancedHistoryMessageListResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGetadvancedhistorymessagelistcallback();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.serializeBinaryToWriter
    );
  }
};


/**
 * optional GetAdvancedHistoryMessageListCallback getAdvancedHistoryMessageListCallback = 1;
 * @return {?proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListResp.prototype.getGetadvancedhistorymessagelistcallback = function() {
  return /** @type{?proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback, 1));
};


/**
 * @param {?proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback|undefined} value
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListResp} returns this
*/
proto.openim.sdk.message.GetAdvancedHistoryMessageListResp.prototype.setGetadvancedhistorymessagelistcallback = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListResp} returns this
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListResp.prototype.clearGetadvancedhistorymessagelistcallback = function() {
  return this.setGetadvancedhistorymessagelistcallback(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListResp.prototype.hasGetadvancedhistorymessagelistcallback = function() {
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
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq.toObject = function(includeInstance, msg) {
  var f, obj = {
conversationid: jspb.Message.getFieldWithDefault(msg, 1, ""),
getadvancedhistorymessagelistparams: (f = msg.getGetadvancedhistorymessagelistparams()) && proto.openim.sdk.message.GetAdvancedHistoryMessageListParams.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq;
  return proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.openim.sdk.message.GetAdvancedHistoryMessageListParams;
      reader.readMessage(value,proto.openim.sdk.message.GetAdvancedHistoryMessageListParams.deserializeBinaryFromReader);
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
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq.serializeBinaryToWriter = function(message, writer) {
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
      proto.openim.sdk.message.GetAdvancedHistoryMessageListParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional string conversationID = 1;
 * @return {string}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq} returns this
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional GetAdvancedHistoryMessageListParams getAdvancedHistoryMessageListParams = 2;
 * @return {?proto.openim.sdk.message.GetAdvancedHistoryMessageListParams}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq.prototype.getGetadvancedhistorymessagelistparams = function() {
  return /** @type{?proto.openim.sdk.message.GetAdvancedHistoryMessageListParams} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.GetAdvancedHistoryMessageListParams, 2));
};


/**
 * @param {?proto.openim.sdk.message.GetAdvancedHistoryMessageListParams|undefined} value
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq} returns this
*/
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq.prototype.setGetadvancedhistorymessagelistparams = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq} returns this
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq.prototype.clearGetadvancedhistorymessagelistparams = function() {
  return this.setGetadvancedhistorymessagelistparams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseReq.prototype.hasGetadvancedhistorymessagelistparams = function() {
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
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp.toObject = function(includeInstance, msg) {
  var f, obj = {
getadvancedhistorymessagelistcallback: (f = msg.getGetadvancedhistorymessagelistcallback()) && proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp;
  return proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback;
      reader.readMessage(value,proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.deserializeBinaryFromReader);
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
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGetadvancedhistorymessagelistcallback();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback.serializeBinaryToWriter
    );
  }
};


/**
 * optional GetAdvancedHistoryMessageListCallback getAdvancedHistoryMessageListCallback = 1;
 * @return {?proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp.prototype.getGetadvancedhistorymessagelistcallback = function() {
  return /** @type{?proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback, 1));
};


/**
 * @param {?proto.openim.sdk.message.GetAdvancedHistoryMessageListCallback|undefined} value
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp} returns this
*/
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp.prototype.setGetadvancedhistorymessagelistcallback = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp} returns this
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp.prototype.clearGetadvancedhistorymessagelistcallback = function() {
  return this.setGetadvancedhistorymessagelistcallback(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.GetAdvancedHistoryMessageListReverseResp.prototype.hasGetadvancedhistorymessagelistcallback = function() {
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
proto.openim.sdk.message.RevokeMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.RevokeMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.RevokeMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.RevokeMessageReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.RevokeMessageReq}
 */
proto.openim.sdk.message.RevokeMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.RevokeMessageReq;
  return proto.openim.sdk.message.RevokeMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.RevokeMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.RevokeMessageReq}
 */
proto.openim.sdk.message.RevokeMessageReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.RevokeMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.RevokeMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.RevokeMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.RevokeMessageReq.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.RevokeMessageReq.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.RevokeMessageReq} returns this
 */
proto.openim.sdk.message.RevokeMessageReq.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string clientMsgID = 2;
 * @return {string}
 */
proto.openim.sdk.message.RevokeMessageReq.prototype.getClientmsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.RevokeMessageReq} returns this
 */
proto.openim.sdk.message.RevokeMessageReq.prototype.setClientmsgid = function(value) {
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
proto.openim.sdk.message.RevokeMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.RevokeMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.RevokeMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.RevokeMessageResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.RevokeMessageResp}
 */
proto.openim.sdk.message.RevokeMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.RevokeMessageResp;
  return proto.openim.sdk.message.RevokeMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.RevokeMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.RevokeMessageResp}
 */
proto.openim.sdk.message.RevokeMessageResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.RevokeMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.RevokeMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.RevokeMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.RevokeMessageResp.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.TypingStatusUpdateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.TypingStatusUpdateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.TypingStatusUpdateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.TypingStatusUpdateReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.TypingStatusUpdateReq}
 */
proto.openim.sdk.message.TypingStatusUpdateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.TypingStatusUpdateReq;
  return proto.openim.sdk.message.TypingStatusUpdateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.TypingStatusUpdateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.TypingStatusUpdateReq}
 */
proto.openim.sdk.message.TypingStatusUpdateReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.TypingStatusUpdateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.TypingStatusUpdateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.TypingStatusUpdateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.TypingStatusUpdateReq.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.TypingStatusUpdateReq.prototype.getRecvid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.TypingStatusUpdateReq} returns this
 */
proto.openim.sdk.message.TypingStatusUpdateReq.prototype.setRecvid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string msgTip = 2;
 * @return {string}
 */
proto.openim.sdk.message.TypingStatusUpdateReq.prototype.getMsgtip = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.TypingStatusUpdateReq} returns this
 */
proto.openim.sdk.message.TypingStatusUpdateReq.prototype.setMsgtip = function(value) {
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
proto.openim.sdk.message.TypingStatusUpdateResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.TypingStatusUpdateResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.TypingStatusUpdateResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.TypingStatusUpdateResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.TypingStatusUpdateResp}
 */
proto.openim.sdk.message.TypingStatusUpdateResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.TypingStatusUpdateResp;
  return proto.openim.sdk.message.TypingStatusUpdateResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.TypingStatusUpdateResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.TypingStatusUpdateResp}
 */
proto.openim.sdk.message.TypingStatusUpdateResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.TypingStatusUpdateResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.TypingStatusUpdateResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.TypingStatusUpdateResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.TypingStatusUpdateResp.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.DeleteMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.DeleteMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.DeleteMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.DeleteMessageReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.DeleteMessageReq}
 */
proto.openim.sdk.message.DeleteMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.DeleteMessageReq;
  return proto.openim.sdk.message.DeleteMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.DeleteMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.DeleteMessageReq}
 */
proto.openim.sdk.message.DeleteMessageReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.DeleteMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.DeleteMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.DeleteMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.DeleteMessageReq.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.DeleteMessageReq.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.DeleteMessageReq} returns this
 */
proto.openim.sdk.message.DeleteMessageReq.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string clientMsgID = 2;
 * @return {string}
 */
proto.openim.sdk.message.DeleteMessageReq.prototype.getClientmsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.DeleteMessageReq} returns this
 */
proto.openim.sdk.message.DeleteMessageReq.prototype.setClientmsgid = function(value) {
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
proto.openim.sdk.message.DeleteMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.DeleteMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.DeleteMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.DeleteMessageResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.DeleteMessageResp}
 */
proto.openim.sdk.message.DeleteMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.DeleteMessageResp;
  return proto.openim.sdk.message.DeleteMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.DeleteMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.DeleteMessageResp}
 */
proto.openim.sdk.message.DeleteMessageResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.DeleteMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.DeleteMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.DeleteMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.DeleteMessageResp.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerReq}
 */
proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerReq;
  return proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerReq}
 */
proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerReq.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerResp}
 */
proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerResp;
  return proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerResp}
 */
proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.DeleteAllMsgFromLocalAndServerResp.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.DeleteAllMessageFromLocalStorageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.DeleteAllMessageFromLocalStorageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.DeleteAllMessageFromLocalStorageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.DeleteAllMessageFromLocalStorageReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.DeleteAllMessageFromLocalStorageReq}
 */
proto.openim.sdk.message.DeleteAllMessageFromLocalStorageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.DeleteAllMessageFromLocalStorageReq;
  return proto.openim.sdk.message.DeleteAllMessageFromLocalStorageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.DeleteAllMessageFromLocalStorageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.DeleteAllMessageFromLocalStorageReq}
 */
proto.openim.sdk.message.DeleteAllMessageFromLocalStorageReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.DeleteAllMessageFromLocalStorageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.DeleteAllMessageFromLocalStorageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.DeleteAllMessageFromLocalStorageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.DeleteAllMessageFromLocalStorageReq.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.DeleteAllMessageFromLocalStorageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.DeleteAllMessageFromLocalStorageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.DeleteAllMessageFromLocalStorageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.DeleteAllMessageFromLocalStorageResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.DeleteAllMessageFromLocalStorageResp}
 */
proto.openim.sdk.message.DeleteAllMessageFromLocalStorageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.DeleteAllMessageFromLocalStorageResp;
  return proto.openim.sdk.message.DeleteAllMessageFromLocalStorageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.DeleteAllMessageFromLocalStorageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.DeleteAllMessageFromLocalStorageResp}
 */
proto.openim.sdk.message.DeleteAllMessageFromLocalStorageResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.DeleteAllMessageFromLocalStorageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.DeleteAllMessageFromLocalStorageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.DeleteAllMessageFromLocalStorageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.DeleteAllMessageFromLocalStorageResp.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
msg: (f = msg.getMsg()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f),
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
 * @return {!proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq}
 */
proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq;
  return proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq}
 */
proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
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
 * optional IMMessage msg = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq.prototype.getMsg = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq} returns this
*/
proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq.prototype.setMsg = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq} returns this
 */
proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq.prototype.clearMsg = function() {
  return this.setMsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq.prototype.hasMsg = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string recvID = 2;
 * @return {string}
 */
proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq.prototype.getRecvid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq} returns this
 */
proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq.prototype.setRecvid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sendID = 3;
 * @return {string}
 */
proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq.prototype.getSendid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq} returns this
 */
proto.openim.sdk.message.InsertSingleMessageToLocalStorageReq.prototype.setSendid = function(value) {
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
proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
msg: (f = msg.getMsg()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp}
 */
proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp;
  return proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp}
 */
proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional IMMessage msg = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp.prototype.getMsg = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp} returns this
*/
proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp.prototype.setMsg = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp} returns this
 */
proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp.prototype.clearMsg = function() {
  return this.setMsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.InsertSingleMessageToLocalStorageResp.prototype.hasMsg = function() {
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
proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
msg: (f = msg.getMsg()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f),
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
 * @return {!proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq}
 */
proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq;
  return proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq}
 */
proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
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
 * optional IMMessage msg = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq.prototype.getMsg = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq} returns this
*/
proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq.prototype.setMsg = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq} returns this
 */
proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq.prototype.clearMsg = function() {
  return this.setMsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq.prototype.hasMsg = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string groupID = 2;
 * @return {string}
 */
proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq} returns this
 */
proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sendID = 3;
 * @return {string}
 */
proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq.prototype.getSendid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq} returns this
 */
proto.openim.sdk.message.InsertGroupMessageToLocalStorageReq.prototype.setSendid = function(value) {
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
proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
msg: (f = msg.getMsg()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp}
 */
proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp;
  return proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp}
 */
proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional IMMessage msg = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp.prototype.getMsg = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp} returns this
*/
proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp.prototype.setMsg = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp} returns this
 */
proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp.prototype.clearMsg = function() {
  return this.setMsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.InsertGroupMessageToLocalStorageResp.prototype.hasMsg = function() {
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
proto.openim.sdk.message.CreateTextMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateTextMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateTextMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateTextMessageReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.CreateTextMessageReq}
 */
proto.openim.sdk.message.CreateTextMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateTextMessageReq;
  return proto.openim.sdk.message.CreateTextMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateTextMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateTextMessageReq}
 */
proto.openim.sdk.message.CreateTextMessageReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.CreateTextMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateTextMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateTextMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateTextMessageReq.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.CreateTextMessageReq.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CreateTextMessageReq} returns this
 */
proto.openim.sdk.message.CreateTextMessageReq.prototype.setText = function(value) {
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
proto.openim.sdk.message.CreateTextMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateTextMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateTextMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateTextMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateTextMessageResp}
 */
proto.openim.sdk.message.CreateTextMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateTextMessageResp;
  return proto.openim.sdk.message.CreateTextMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateTextMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateTextMessageResp}
 */
proto.openim.sdk.message.CreateTextMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateTextMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateTextMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateTextMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateTextMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.CreateTextMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.CreateTextMessageResp} returns this
*/
proto.openim.sdk.message.CreateTextMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateTextMessageResp} returns this
 */
proto.openim.sdk.message.CreateTextMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateTextMessageResp.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.message.CreateAdvancedTextMessageReq.repeatedFields_ = [2];



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
proto.openim.sdk.message.CreateAdvancedTextMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateAdvancedTextMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateAdvancedTextMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateAdvancedTextMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
text: jspb.Message.getFieldWithDefault(msg, 1, ""),
messageentitiesList: jspb.Message.toObjectList(msg.getMessageentitiesList(),
    proto.openim.sdk.message.MessageEntity.toObject, includeInstance)
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
 * @return {!proto.openim.sdk.message.CreateAdvancedTextMessageReq}
 */
proto.openim.sdk.message.CreateAdvancedTextMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateAdvancedTextMessageReq;
  return proto.openim.sdk.message.CreateAdvancedTextMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateAdvancedTextMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateAdvancedTextMessageReq}
 */
proto.openim.sdk.message.CreateAdvancedTextMessageReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.openim.sdk.message.MessageEntity;
      reader.readMessage(value,proto.openim.sdk.message.MessageEntity.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateAdvancedTextMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateAdvancedTextMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateAdvancedTextMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateAdvancedTextMessageReq.serializeBinaryToWriter = function(message, writer) {
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
      proto.openim.sdk.message.MessageEntity.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.openim.sdk.message.CreateAdvancedTextMessageReq.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CreateAdvancedTextMessageReq} returns this
 */
proto.openim.sdk.message.CreateAdvancedTextMessageReq.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated MessageEntity messageEntities = 2;
 * @return {!Array<!proto.openim.sdk.message.MessageEntity>}
 */
proto.openim.sdk.message.CreateAdvancedTextMessageReq.prototype.getMessageentitiesList = function() {
  return /** @type{!Array<!proto.openim.sdk.message.MessageEntity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.message.MessageEntity, 2));
};


/**
 * @param {!Array<!proto.openim.sdk.message.MessageEntity>} value
 * @return {!proto.openim.sdk.message.CreateAdvancedTextMessageReq} returns this
*/
proto.openim.sdk.message.CreateAdvancedTextMessageReq.prototype.setMessageentitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.openim.sdk.message.MessageEntity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.MessageEntity}
 */
proto.openim.sdk.message.CreateAdvancedTextMessageReq.prototype.addMessageentities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.openim.sdk.message.MessageEntity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.message.CreateAdvancedTextMessageReq} returns this
 */
proto.openim.sdk.message.CreateAdvancedTextMessageReq.prototype.clearMessageentitiesList = function() {
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
proto.openim.sdk.message.CreateAdvancedTextMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateAdvancedTextMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateAdvancedTextMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateAdvancedTextMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateAdvancedTextMessageResp}
 */
proto.openim.sdk.message.CreateAdvancedTextMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateAdvancedTextMessageResp;
  return proto.openim.sdk.message.CreateAdvancedTextMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateAdvancedTextMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateAdvancedTextMessageResp}
 */
proto.openim.sdk.message.CreateAdvancedTextMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateAdvancedTextMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateAdvancedTextMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateAdvancedTextMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateAdvancedTextMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.CreateAdvancedTextMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.CreateAdvancedTextMessageResp} returns this
*/
proto.openim.sdk.message.CreateAdvancedTextMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateAdvancedTextMessageResp} returns this
 */
proto.openim.sdk.message.CreateAdvancedTextMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateAdvancedTextMessageResp.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.message.CreateTextAtMessageReq.repeatedFields_ = [2,3];



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
proto.openim.sdk.message.CreateTextAtMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateTextAtMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateTextAtMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateTextAtMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
text: jspb.Message.getFieldWithDefault(msg, 1, ""),
useridlistList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
usersinfoList: jspb.Message.toObjectList(msg.getUsersinfoList(),
    proto.openim.sdk.message.AtInfo.toObject, includeInstance),
quotemessage: (f = msg.getQuotemessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateTextAtMessageReq}
 */
proto.openim.sdk.message.CreateTextAtMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateTextAtMessageReq;
  return proto.openim.sdk.message.CreateTextAtMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateTextAtMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateTextAtMessageReq}
 */
proto.openim.sdk.message.CreateTextAtMessageReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.openim.sdk.message.AtInfo;
      reader.readMessage(value,proto.openim.sdk.message.AtInfo.deserializeBinaryFromReader);
      msg.addUsersinfo(value);
      break;
    case 4:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateTextAtMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateTextAtMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateTextAtMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateTextAtMessageReq.serializeBinaryToWriter = function(message, writer) {
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
      proto.openim.sdk.message.AtInfo.serializeBinaryToWriter
    );
  }
  f = message.getQuotemessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.openim.sdk.message.CreateTextAtMessageReq.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CreateTextAtMessageReq} returns this
 */
proto.openim.sdk.message.CreateTextAtMessageReq.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string userIDList = 2;
 * @return {!Array<string>}
 */
proto.openim.sdk.message.CreateTextAtMessageReq.prototype.getUseridlistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.message.CreateTextAtMessageReq} returns this
 */
proto.openim.sdk.message.CreateTextAtMessageReq.prototype.setUseridlistList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.CreateTextAtMessageReq} returns this
 */
proto.openim.sdk.message.CreateTextAtMessageReq.prototype.addUseridlist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.message.CreateTextAtMessageReq} returns this
 */
proto.openim.sdk.message.CreateTextAtMessageReq.prototype.clearUseridlistList = function() {
  return this.setUseridlistList([]);
};


/**
 * repeated AtInfo usersInfo = 3;
 * @return {!Array<!proto.openim.sdk.message.AtInfo>}
 */
proto.openim.sdk.message.CreateTextAtMessageReq.prototype.getUsersinfoList = function() {
  return /** @type{!Array<!proto.openim.sdk.message.AtInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.message.AtInfo, 3));
};


/**
 * @param {!Array<!proto.openim.sdk.message.AtInfo>} value
 * @return {!proto.openim.sdk.message.CreateTextAtMessageReq} returns this
*/
proto.openim.sdk.message.CreateTextAtMessageReq.prototype.setUsersinfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.openim.sdk.message.AtInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.AtInfo}
 */
proto.openim.sdk.message.CreateTextAtMessageReq.prototype.addUsersinfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.openim.sdk.message.AtInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.message.CreateTextAtMessageReq} returns this
 */
proto.openim.sdk.message.CreateTextAtMessageReq.prototype.clearUsersinfoList = function() {
  return this.setUsersinfoList([]);
};


/**
 * optional IMMessage quoteMessage = 4;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.CreateTextAtMessageReq.prototype.getQuotemessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 4));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.CreateTextAtMessageReq} returns this
*/
proto.openim.sdk.message.CreateTextAtMessageReq.prototype.setQuotemessage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateTextAtMessageReq} returns this
 */
proto.openim.sdk.message.CreateTextAtMessageReq.prototype.clearQuotemessage = function() {
  return this.setQuotemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateTextAtMessageReq.prototype.hasQuotemessage = function() {
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
proto.openim.sdk.message.CreateTextAtMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateTextAtMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateTextAtMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateTextAtMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateTextAtMessageResp}
 */
proto.openim.sdk.message.CreateTextAtMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateTextAtMessageResp;
  return proto.openim.sdk.message.CreateTextAtMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateTextAtMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateTextAtMessageResp}
 */
proto.openim.sdk.message.CreateTextAtMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateTextAtMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateTextAtMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateTextAtMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateTextAtMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.CreateTextAtMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.CreateTextAtMessageResp} returns this
*/
proto.openim.sdk.message.CreateTextAtMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateTextAtMessageResp} returns this
 */
proto.openim.sdk.message.CreateTextAtMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateTextAtMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.message.CreateLocationMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateLocationMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateLocationMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateLocationMessageReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.CreateLocationMessageReq}
 */
proto.openim.sdk.message.CreateLocationMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateLocationMessageReq;
  return proto.openim.sdk.message.CreateLocationMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateLocationMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateLocationMessageReq}
 */
proto.openim.sdk.message.CreateLocationMessageReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.CreateLocationMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateLocationMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateLocationMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateLocationMessageReq.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.CreateLocationMessageReq.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CreateLocationMessageReq} returns this
 */
proto.openim.sdk.message.CreateLocationMessageReq.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double longitude = 2;
 * @return {number}
 */
proto.openim.sdk.message.CreateLocationMessageReq.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.CreateLocationMessageReq} returns this
 */
proto.openim.sdk.message.CreateLocationMessageReq.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double latitude = 3;
 * @return {number}
 */
proto.openim.sdk.message.CreateLocationMessageReq.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.CreateLocationMessageReq} returns this
 */
proto.openim.sdk.message.CreateLocationMessageReq.prototype.setLatitude = function(value) {
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
proto.openim.sdk.message.CreateLocationMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateLocationMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateLocationMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateLocationMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateLocationMessageResp}
 */
proto.openim.sdk.message.CreateLocationMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateLocationMessageResp;
  return proto.openim.sdk.message.CreateLocationMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateLocationMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateLocationMessageResp}
 */
proto.openim.sdk.message.CreateLocationMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateLocationMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateLocationMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateLocationMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateLocationMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.CreateLocationMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.CreateLocationMessageResp} returns this
*/
proto.openim.sdk.message.CreateLocationMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateLocationMessageResp} returns this
 */
proto.openim.sdk.message.CreateLocationMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateLocationMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.message.CreateCustomMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateCustomMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateCustomMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateCustomMessageReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.CreateCustomMessageReq}
 */
proto.openim.sdk.message.CreateCustomMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateCustomMessageReq;
  return proto.openim.sdk.message.CreateCustomMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateCustomMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateCustomMessageReq}
 */
proto.openim.sdk.message.CreateCustomMessageReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.CreateCustomMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateCustomMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateCustomMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateCustomMessageReq.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.CreateCustomMessageReq.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CreateCustomMessageReq} returns this
 */
proto.openim.sdk.message.CreateCustomMessageReq.prototype.setData = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string extension = 2;
 * @return {string}
 */
proto.openim.sdk.message.CreateCustomMessageReq.prototype.getExtension$ = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CreateCustomMessageReq} returns this
 */
proto.openim.sdk.message.CreateCustomMessageReq.prototype.setExtension$ = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.openim.sdk.message.CreateCustomMessageReq.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CreateCustomMessageReq} returns this
 */
proto.openim.sdk.message.CreateCustomMessageReq.prototype.setDescription = function(value) {
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
proto.openim.sdk.message.CreateCustomMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateCustomMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateCustomMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateCustomMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateCustomMessageResp}
 */
proto.openim.sdk.message.CreateCustomMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateCustomMessageResp;
  return proto.openim.sdk.message.CreateCustomMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateCustomMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateCustomMessageResp}
 */
proto.openim.sdk.message.CreateCustomMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateCustomMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateCustomMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateCustomMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateCustomMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.CreateCustomMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.CreateCustomMessageResp} returns this
*/
proto.openim.sdk.message.CreateCustomMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateCustomMessageResp} returns this
 */
proto.openim.sdk.message.CreateCustomMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateCustomMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.message.CreateQuoteMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateQuoteMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateQuoteMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateQuoteMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
text: jspb.Message.getFieldWithDefault(msg, 1, ""),
quotemessage: (f = msg.getQuotemessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateQuoteMessageReq}
 */
proto.openim.sdk.message.CreateQuoteMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateQuoteMessageReq;
  return proto.openim.sdk.message.CreateQuoteMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateQuoteMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateQuoteMessageReq}
 */
proto.openim.sdk.message.CreateQuoteMessageReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateQuoteMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateQuoteMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateQuoteMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateQuoteMessageReq.serializeBinaryToWriter = function(message, writer) {
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
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.openim.sdk.message.CreateQuoteMessageReq.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CreateQuoteMessageReq} returns this
 */
proto.openim.sdk.message.CreateQuoteMessageReq.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional IMMessage quoteMessage = 2;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.CreateQuoteMessageReq.prototype.getQuotemessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 2));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.CreateQuoteMessageReq} returns this
*/
proto.openim.sdk.message.CreateQuoteMessageReq.prototype.setQuotemessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateQuoteMessageReq} returns this
 */
proto.openim.sdk.message.CreateQuoteMessageReq.prototype.clearQuotemessage = function() {
  return this.setQuotemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateQuoteMessageReq.prototype.hasQuotemessage = function() {
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
proto.openim.sdk.message.CreateQuoteMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateQuoteMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateQuoteMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateQuoteMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateQuoteMessageResp}
 */
proto.openim.sdk.message.CreateQuoteMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateQuoteMessageResp;
  return proto.openim.sdk.message.CreateQuoteMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateQuoteMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateQuoteMessageResp}
 */
proto.openim.sdk.message.CreateQuoteMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateQuoteMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateQuoteMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateQuoteMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateQuoteMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.CreateQuoteMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.CreateQuoteMessageResp} returns this
*/
proto.openim.sdk.message.CreateQuoteMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateQuoteMessageResp} returns this
 */
proto.openim.sdk.message.CreateQuoteMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateQuoteMessageResp.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.message.CreateAdvancedQuoteMessageReq.repeatedFields_ = [3];



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
proto.openim.sdk.message.CreateAdvancedQuoteMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateAdvancedQuoteMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateAdvancedQuoteMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateAdvancedQuoteMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
text: jspb.Message.getFieldWithDefault(msg, 1, ""),
quotemessage: (f = msg.getQuotemessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f),
messageentitiesList: jspb.Message.toObjectList(msg.getMessageentitiesList(),
    proto.openim.sdk.message.MessageEntity.toObject, includeInstance)
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
 * @return {!proto.openim.sdk.message.CreateAdvancedQuoteMessageReq}
 */
proto.openim.sdk.message.CreateAdvancedQuoteMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateAdvancedQuoteMessageReq;
  return proto.openim.sdk.message.CreateAdvancedQuoteMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateAdvancedQuoteMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateAdvancedQuoteMessageReq}
 */
proto.openim.sdk.message.CreateAdvancedQuoteMessageReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
      msg.setQuotemessage(value);
      break;
    case 3:
      var value = new proto.openim.sdk.message.MessageEntity;
      reader.readMessage(value,proto.openim.sdk.message.MessageEntity.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateAdvancedQuoteMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateAdvancedQuoteMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateAdvancedQuoteMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateAdvancedQuoteMessageReq.serializeBinaryToWriter = function(message, writer) {
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
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
  f = message.getMessageentitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.openim.sdk.message.MessageEntity.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.openim.sdk.message.CreateAdvancedQuoteMessageReq.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CreateAdvancedQuoteMessageReq} returns this
 */
proto.openim.sdk.message.CreateAdvancedQuoteMessageReq.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional IMMessage quoteMessage = 2;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.CreateAdvancedQuoteMessageReq.prototype.getQuotemessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 2));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.CreateAdvancedQuoteMessageReq} returns this
*/
proto.openim.sdk.message.CreateAdvancedQuoteMessageReq.prototype.setQuotemessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateAdvancedQuoteMessageReq} returns this
 */
proto.openim.sdk.message.CreateAdvancedQuoteMessageReq.prototype.clearQuotemessage = function() {
  return this.setQuotemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateAdvancedQuoteMessageReq.prototype.hasQuotemessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated MessageEntity messageEntities = 3;
 * @return {!Array<!proto.openim.sdk.message.MessageEntity>}
 */
proto.openim.sdk.message.CreateAdvancedQuoteMessageReq.prototype.getMessageentitiesList = function() {
  return /** @type{!Array<!proto.openim.sdk.message.MessageEntity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.message.MessageEntity, 3));
};


/**
 * @param {!Array<!proto.openim.sdk.message.MessageEntity>} value
 * @return {!proto.openim.sdk.message.CreateAdvancedQuoteMessageReq} returns this
*/
proto.openim.sdk.message.CreateAdvancedQuoteMessageReq.prototype.setMessageentitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.openim.sdk.message.MessageEntity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.MessageEntity}
 */
proto.openim.sdk.message.CreateAdvancedQuoteMessageReq.prototype.addMessageentities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.openim.sdk.message.MessageEntity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.message.CreateAdvancedQuoteMessageReq} returns this
 */
proto.openim.sdk.message.CreateAdvancedQuoteMessageReq.prototype.clearMessageentitiesList = function() {
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
proto.openim.sdk.message.CreateAdvancedQuoteMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateAdvancedQuoteMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateAdvancedQuoteMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateAdvancedQuoteMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateAdvancedQuoteMessageResp}
 */
proto.openim.sdk.message.CreateAdvancedQuoteMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateAdvancedQuoteMessageResp;
  return proto.openim.sdk.message.CreateAdvancedQuoteMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateAdvancedQuoteMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateAdvancedQuoteMessageResp}
 */
proto.openim.sdk.message.CreateAdvancedQuoteMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateAdvancedQuoteMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateAdvancedQuoteMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateAdvancedQuoteMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateAdvancedQuoteMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.CreateAdvancedQuoteMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.CreateAdvancedQuoteMessageResp} returns this
*/
proto.openim.sdk.message.CreateAdvancedQuoteMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateAdvancedQuoteMessageResp} returns this
 */
proto.openim.sdk.message.CreateAdvancedQuoteMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateAdvancedQuoteMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.message.CreateCardMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateCardMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateCardMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateCardMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
card: (f = msg.getCard()) && proto.openim.sdk.message.CardElem.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateCardMessageReq}
 */
proto.openim.sdk.message.CreateCardMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateCardMessageReq;
  return proto.openim.sdk.message.CreateCardMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateCardMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateCardMessageReq}
 */
proto.openim.sdk.message.CreateCardMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.CardElem;
      reader.readMessage(value,proto.openim.sdk.message.CardElem.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateCardMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateCardMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateCardMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateCardMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCard();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.CardElem.serializeBinaryToWriter
    );
  }
};


/**
 * optional CardElem card = 1;
 * @return {?proto.openim.sdk.message.CardElem}
 */
proto.openim.sdk.message.CreateCardMessageReq.prototype.getCard = function() {
  return /** @type{?proto.openim.sdk.message.CardElem} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.CardElem, 1));
};


/**
 * @param {?proto.openim.sdk.message.CardElem|undefined} value
 * @return {!proto.openim.sdk.message.CreateCardMessageReq} returns this
*/
proto.openim.sdk.message.CreateCardMessageReq.prototype.setCard = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateCardMessageReq} returns this
 */
proto.openim.sdk.message.CreateCardMessageReq.prototype.clearCard = function() {
  return this.setCard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateCardMessageReq.prototype.hasCard = function() {
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
proto.openim.sdk.message.CreateCardMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateCardMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateCardMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateCardMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateCardMessageResp}
 */
proto.openim.sdk.message.CreateCardMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateCardMessageResp;
  return proto.openim.sdk.message.CreateCardMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateCardMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateCardMessageResp}
 */
proto.openim.sdk.message.CreateCardMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateCardMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateCardMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateCardMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateCardMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.CreateCardMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.CreateCardMessageResp} returns this
*/
proto.openim.sdk.message.CreateCardMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateCardMessageResp} returns this
 */
proto.openim.sdk.message.CreateCardMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateCardMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.message.CreateImageMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateImageMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateImageMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateImageMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
imagesourcepath: jspb.Message.getFieldWithDefault(msg, 1, ""),
sourcepicture: (f = msg.getSourcepicture()) && proto.openim.sdk.message.PictureBaseInfo.toObject(includeInstance, f),
bigpicture: (f = msg.getBigpicture()) && proto.openim.sdk.message.PictureBaseInfo.toObject(includeInstance, f),
snapshotpicture: (f = msg.getSnapshotpicture()) && proto.openim.sdk.message.PictureBaseInfo.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateImageMessageReq}
 */
proto.openim.sdk.message.CreateImageMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateImageMessageReq;
  return proto.openim.sdk.message.CreateImageMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateImageMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateImageMessageReq}
 */
proto.openim.sdk.message.CreateImageMessageReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.openim.sdk.message.PictureBaseInfo;
      reader.readMessage(value,proto.openim.sdk.message.PictureBaseInfo.deserializeBinaryFromReader);
      msg.setSourcepicture(value);
      break;
    case 3:
      var value = new proto.openim.sdk.message.PictureBaseInfo;
      reader.readMessage(value,proto.openim.sdk.message.PictureBaseInfo.deserializeBinaryFromReader);
      msg.setBigpicture(value);
      break;
    case 4:
      var value = new proto.openim.sdk.message.PictureBaseInfo;
      reader.readMessage(value,proto.openim.sdk.message.PictureBaseInfo.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateImageMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateImageMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateImageMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateImageMessageReq.serializeBinaryToWriter = function(message, writer) {
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
      proto.openim.sdk.message.PictureBaseInfo.serializeBinaryToWriter
    );
  }
  f = message.getBigpicture();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.openim.sdk.message.PictureBaseInfo.serializeBinaryToWriter
    );
  }
  f = message.getSnapshotpicture();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.openim.sdk.message.PictureBaseInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string imageSourcePath = 1;
 * @return {string}
 */
proto.openim.sdk.message.CreateImageMessageReq.prototype.getImagesourcepath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CreateImageMessageReq} returns this
 */
proto.openim.sdk.message.CreateImageMessageReq.prototype.setImagesourcepath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PictureBaseInfo sourcePicture = 2;
 * @return {?proto.openim.sdk.message.PictureBaseInfo}
 */
proto.openim.sdk.message.CreateImageMessageReq.prototype.getSourcepicture = function() {
  return /** @type{?proto.openim.sdk.message.PictureBaseInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.PictureBaseInfo, 2));
};


/**
 * @param {?proto.openim.sdk.message.PictureBaseInfo|undefined} value
 * @return {!proto.openim.sdk.message.CreateImageMessageReq} returns this
*/
proto.openim.sdk.message.CreateImageMessageReq.prototype.setSourcepicture = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateImageMessageReq} returns this
 */
proto.openim.sdk.message.CreateImageMessageReq.prototype.clearSourcepicture = function() {
  return this.setSourcepicture(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateImageMessageReq.prototype.hasSourcepicture = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PictureBaseInfo bigPicture = 3;
 * @return {?proto.openim.sdk.message.PictureBaseInfo}
 */
proto.openim.sdk.message.CreateImageMessageReq.prototype.getBigpicture = function() {
  return /** @type{?proto.openim.sdk.message.PictureBaseInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.PictureBaseInfo, 3));
};


/**
 * @param {?proto.openim.sdk.message.PictureBaseInfo|undefined} value
 * @return {!proto.openim.sdk.message.CreateImageMessageReq} returns this
*/
proto.openim.sdk.message.CreateImageMessageReq.prototype.setBigpicture = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateImageMessageReq} returns this
 */
proto.openim.sdk.message.CreateImageMessageReq.prototype.clearBigpicture = function() {
  return this.setBigpicture(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateImageMessageReq.prototype.hasBigpicture = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PictureBaseInfo snapshotPicture = 4;
 * @return {?proto.openim.sdk.message.PictureBaseInfo}
 */
proto.openim.sdk.message.CreateImageMessageReq.prototype.getSnapshotpicture = function() {
  return /** @type{?proto.openim.sdk.message.PictureBaseInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.PictureBaseInfo, 4));
};


/**
 * @param {?proto.openim.sdk.message.PictureBaseInfo|undefined} value
 * @return {!proto.openim.sdk.message.CreateImageMessageReq} returns this
*/
proto.openim.sdk.message.CreateImageMessageReq.prototype.setSnapshotpicture = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateImageMessageReq} returns this
 */
proto.openim.sdk.message.CreateImageMessageReq.prototype.clearSnapshotpicture = function() {
  return this.setSnapshotpicture(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateImageMessageReq.prototype.hasSnapshotpicture = function() {
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
proto.openim.sdk.message.CreateImageMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateImageMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateImageMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateImageMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateImageMessageResp}
 */
proto.openim.sdk.message.CreateImageMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateImageMessageResp;
  return proto.openim.sdk.message.CreateImageMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateImageMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateImageMessageResp}
 */
proto.openim.sdk.message.CreateImageMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateImageMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateImageMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateImageMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateImageMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.CreateImageMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.CreateImageMessageResp} returns this
*/
proto.openim.sdk.message.CreateImageMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateImageMessageResp} returns this
 */
proto.openim.sdk.message.CreateImageMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateImageMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.message.CreateSoundMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateSoundMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateSoundMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateSoundMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
soundpath: jspb.Message.getFieldWithDefault(msg, 1, ""),
duration: jspb.Message.getFieldWithDefault(msg, 2, 0),
soundelem: (f = msg.getSoundelem()) && proto.openim.sdk.message.SoundBaseInfo.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateSoundMessageReq}
 */
proto.openim.sdk.message.CreateSoundMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateSoundMessageReq;
  return proto.openim.sdk.message.CreateSoundMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateSoundMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateSoundMessageReq}
 */
proto.openim.sdk.message.CreateSoundMessageReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.openim.sdk.message.SoundBaseInfo;
      reader.readMessage(value,proto.openim.sdk.message.SoundBaseInfo.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateSoundMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateSoundMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateSoundMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateSoundMessageReq.serializeBinaryToWriter = function(message, writer) {
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
      proto.openim.sdk.message.SoundBaseInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string soundPath = 1;
 * @return {string}
 */
proto.openim.sdk.message.CreateSoundMessageReq.prototype.getSoundpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CreateSoundMessageReq} returns this
 */
proto.openim.sdk.message.CreateSoundMessageReq.prototype.setSoundpath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 duration = 2;
 * @return {number}
 */
proto.openim.sdk.message.CreateSoundMessageReq.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.CreateSoundMessageReq} returns this
 */
proto.openim.sdk.message.CreateSoundMessageReq.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional SoundBaseInfo soundElem = 3;
 * @return {?proto.openim.sdk.message.SoundBaseInfo}
 */
proto.openim.sdk.message.CreateSoundMessageReq.prototype.getSoundelem = function() {
  return /** @type{?proto.openim.sdk.message.SoundBaseInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.SoundBaseInfo, 3));
};


/**
 * @param {?proto.openim.sdk.message.SoundBaseInfo|undefined} value
 * @return {!proto.openim.sdk.message.CreateSoundMessageReq} returns this
*/
proto.openim.sdk.message.CreateSoundMessageReq.prototype.setSoundelem = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateSoundMessageReq} returns this
 */
proto.openim.sdk.message.CreateSoundMessageReq.prototype.clearSoundelem = function() {
  return this.setSoundelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateSoundMessageReq.prototype.hasSoundelem = function() {
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
proto.openim.sdk.message.CreateSoundMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateSoundMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateSoundMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateSoundMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateSoundMessageResp}
 */
proto.openim.sdk.message.CreateSoundMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateSoundMessageResp;
  return proto.openim.sdk.message.CreateSoundMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateSoundMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateSoundMessageResp}
 */
proto.openim.sdk.message.CreateSoundMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateSoundMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateSoundMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateSoundMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateSoundMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.CreateSoundMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.CreateSoundMessageResp} returns this
*/
proto.openim.sdk.message.CreateSoundMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateSoundMessageResp} returns this
 */
proto.openim.sdk.message.CreateSoundMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateSoundMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.message.CreateVideoMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateVideoMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateVideoMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateVideoMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
videosourcepath: jspb.Message.getFieldWithDefault(msg, 1, ""),
videotype: jspb.Message.getFieldWithDefault(msg, 2, ""),
duration: jspb.Message.getFieldWithDefault(msg, 3, 0),
snapshotsourcepath: jspb.Message.getFieldWithDefault(msg, 4, ""),
videoelem: (f = msg.getVideoelem()) && proto.openim.sdk.message.VideoBaseInfo.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateVideoMessageReq}
 */
proto.openim.sdk.message.CreateVideoMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateVideoMessageReq;
  return proto.openim.sdk.message.CreateVideoMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateVideoMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateVideoMessageReq}
 */
proto.openim.sdk.message.CreateVideoMessageReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.openim.sdk.message.VideoBaseInfo;
      reader.readMessage(value,proto.openim.sdk.message.VideoBaseInfo.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateVideoMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateVideoMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateVideoMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateVideoMessageReq.serializeBinaryToWriter = function(message, writer) {
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
      proto.openim.sdk.message.VideoBaseInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string videoSourcePath = 1;
 * @return {string}
 */
proto.openim.sdk.message.CreateVideoMessageReq.prototype.getVideosourcepath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CreateVideoMessageReq} returns this
 */
proto.openim.sdk.message.CreateVideoMessageReq.prototype.setVideosourcepath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string videoType = 2;
 * @return {string}
 */
proto.openim.sdk.message.CreateVideoMessageReq.prototype.getVideotype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CreateVideoMessageReq} returns this
 */
proto.openim.sdk.message.CreateVideoMessageReq.prototype.setVideotype = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 duration = 3;
 * @return {number}
 */
proto.openim.sdk.message.CreateVideoMessageReq.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.CreateVideoMessageReq} returns this
 */
proto.openim.sdk.message.CreateVideoMessageReq.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string snapshotSourcePath = 4;
 * @return {string}
 */
proto.openim.sdk.message.CreateVideoMessageReq.prototype.getSnapshotsourcepath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CreateVideoMessageReq} returns this
 */
proto.openim.sdk.message.CreateVideoMessageReq.prototype.setSnapshotsourcepath = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional VideoBaseInfo videoElem = 5;
 * @return {?proto.openim.sdk.message.VideoBaseInfo}
 */
proto.openim.sdk.message.CreateVideoMessageReq.prototype.getVideoelem = function() {
  return /** @type{?proto.openim.sdk.message.VideoBaseInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.VideoBaseInfo, 5));
};


/**
 * @param {?proto.openim.sdk.message.VideoBaseInfo|undefined} value
 * @return {!proto.openim.sdk.message.CreateVideoMessageReq} returns this
*/
proto.openim.sdk.message.CreateVideoMessageReq.prototype.setVideoelem = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateVideoMessageReq} returns this
 */
proto.openim.sdk.message.CreateVideoMessageReq.prototype.clearVideoelem = function() {
  return this.setVideoelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateVideoMessageReq.prototype.hasVideoelem = function() {
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
proto.openim.sdk.message.CreateVideoMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateVideoMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateVideoMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateVideoMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateVideoMessageResp}
 */
proto.openim.sdk.message.CreateVideoMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateVideoMessageResp;
  return proto.openim.sdk.message.CreateVideoMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateVideoMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateVideoMessageResp}
 */
proto.openim.sdk.message.CreateVideoMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateVideoMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateVideoMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateVideoMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateVideoMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.CreateVideoMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.CreateVideoMessageResp} returns this
*/
proto.openim.sdk.message.CreateVideoMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateVideoMessageResp} returns this
 */
proto.openim.sdk.message.CreateVideoMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateVideoMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.message.CreateFileMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateFileMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateFileMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateFileMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
filesourcepath: jspb.Message.getFieldWithDefault(msg, 1, ""),
filename: jspb.Message.getFieldWithDefault(msg, 2, ""),
fileelem: (f = msg.getFileelem()) && proto.openim.sdk.message.FileBaseInfo.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateFileMessageReq}
 */
proto.openim.sdk.message.CreateFileMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateFileMessageReq;
  return proto.openim.sdk.message.CreateFileMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateFileMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateFileMessageReq}
 */
proto.openim.sdk.message.CreateFileMessageReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.openim.sdk.message.FileBaseInfo;
      reader.readMessage(value,proto.openim.sdk.message.FileBaseInfo.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateFileMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateFileMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateFileMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateFileMessageReq.serializeBinaryToWriter = function(message, writer) {
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
      proto.openim.sdk.message.FileBaseInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string fileSourcePath = 1;
 * @return {string}
 */
proto.openim.sdk.message.CreateFileMessageReq.prototype.getFilesourcepath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CreateFileMessageReq} returns this
 */
proto.openim.sdk.message.CreateFileMessageReq.prototype.setFilesourcepath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string fileName = 2;
 * @return {string}
 */
proto.openim.sdk.message.CreateFileMessageReq.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CreateFileMessageReq} returns this
 */
proto.openim.sdk.message.CreateFileMessageReq.prototype.setFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional FileBaseInfo fileElem = 3;
 * @return {?proto.openim.sdk.message.FileBaseInfo}
 */
proto.openim.sdk.message.CreateFileMessageReq.prototype.getFileelem = function() {
  return /** @type{?proto.openim.sdk.message.FileBaseInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.FileBaseInfo, 3));
};


/**
 * @param {?proto.openim.sdk.message.FileBaseInfo|undefined} value
 * @return {!proto.openim.sdk.message.CreateFileMessageReq} returns this
*/
proto.openim.sdk.message.CreateFileMessageReq.prototype.setFileelem = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateFileMessageReq} returns this
 */
proto.openim.sdk.message.CreateFileMessageReq.prototype.clearFileelem = function() {
  return this.setFileelem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateFileMessageReq.prototype.hasFileelem = function() {
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
proto.openim.sdk.message.CreateFileMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateFileMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateFileMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateFileMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateFileMessageResp}
 */
proto.openim.sdk.message.CreateFileMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateFileMessageResp;
  return proto.openim.sdk.message.CreateFileMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateFileMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateFileMessageResp}
 */
proto.openim.sdk.message.CreateFileMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateFileMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateFileMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateFileMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateFileMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.CreateFileMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.CreateFileMessageResp} returns this
*/
proto.openim.sdk.message.CreateFileMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateFileMessageResp} returns this
 */
proto.openim.sdk.message.CreateFileMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateFileMessageResp.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.message.CreateMergerMessageReq.repeatedFields_ = [1,3];



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
proto.openim.sdk.message.CreateMergerMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateMergerMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateMergerMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateMergerMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
messagesList: jspb.Message.toObjectList(msg.getMessagesList(),
    proto.openim.sdk.message.IMMessage.toObject, includeInstance),
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
 * @return {!proto.openim.sdk.message.CreateMergerMessageReq}
 */
proto.openim.sdk.message.CreateMergerMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateMergerMessageReq;
  return proto.openim.sdk.message.CreateMergerMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateMergerMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateMergerMessageReq}
 */
proto.openim.sdk.message.CreateMergerMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateMergerMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateMergerMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateMergerMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateMergerMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
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
 * repeated IMMessage messages = 1;
 * @return {!Array<!proto.openim.sdk.message.IMMessage>}
 */
proto.openim.sdk.message.CreateMergerMessageReq.prototype.getMessagesList = function() {
  return /** @type{!Array<!proto.openim.sdk.message.IMMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.message.IMMessage>} value
 * @return {!proto.openim.sdk.message.CreateMergerMessageReq} returns this
*/
proto.openim.sdk.message.CreateMergerMessageReq.prototype.setMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.message.IMMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.CreateMergerMessageReq.prototype.addMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.message.IMMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.message.CreateMergerMessageReq} returns this
 */
proto.openim.sdk.message.CreateMergerMessageReq.prototype.clearMessagesList = function() {
  return this.setMessagesList([]);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.openim.sdk.message.CreateMergerMessageReq.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CreateMergerMessageReq} returns this
 */
proto.openim.sdk.message.CreateMergerMessageReq.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string summaries = 3;
 * @return {!Array<string>}
 */
proto.openim.sdk.message.CreateMergerMessageReq.prototype.getSummariesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.message.CreateMergerMessageReq} returns this
 */
proto.openim.sdk.message.CreateMergerMessageReq.prototype.setSummariesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.message.CreateMergerMessageReq} returns this
 */
proto.openim.sdk.message.CreateMergerMessageReq.prototype.addSummaries = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.message.CreateMergerMessageReq} returns this
 */
proto.openim.sdk.message.CreateMergerMessageReq.prototype.clearSummariesList = function() {
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
proto.openim.sdk.message.CreateMergerMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateMergerMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateMergerMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateMergerMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateMergerMessageResp}
 */
proto.openim.sdk.message.CreateMergerMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateMergerMessageResp;
  return proto.openim.sdk.message.CreateMergerMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateMergerMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateMergerMessageResp}
 */
proto.openim.sdk.message.CreateMergerMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateMergerMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateMergerMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateMergerMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateMergerMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.CreateMergerMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.CreateMergerMessageResp} returns this
*/
proto.openim.sdk.message.CreateMergerMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateMergerMessageResp} returns this
 */
proto.openim.sdk.message.CreateMergerMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateMergerMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.message.CreateFaceMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateFaceMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateFaceMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateFaceMessageReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.CreateFaceMessageReq}
 */
proto.openim.sdk.message.CreateFaceMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateFaceMessageReq;
  return proto.openim.sdk.message.CreateFaceMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateFaceMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateFaceMessageReq}
 */
proto.openim.sdk.message.CreateFaceMessageReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.CreateFaceMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateFaceMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateFaceMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateFaceMessageReq.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.CreateFaceMessageReq.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.CreateFaceMessageReq} returns this
 */
proto.openim.sdk.message.CreateFaceMessageReq.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string data = 2;
 * @return {string}
 */
proto.openim.sdk.message.CreateFaceMessageReq.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.CreateFaceMessageReq} returns this
 */
proto.openim.sdk.message.CreateFaceMessageReq.prototype.setData = function(value) {
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
proto.openim.sdk.message.CreateFaceMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateFaceMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateFaceMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateFaceMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateFaceMessageResp}
 */
proto.openim.sdk.message.CreateFaceMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateFaceMessageResp;
  return proto.openim.sdk.message.CreateFaceMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateFaceMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateFaceMessageResp}
 */
proto.openim.sdk.message.CreateFaceMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateFaceMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateFaceMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateFaceMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateFaceMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.CreateFaceMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.CreateFaceMessageResp} returns this
*/
proto.openim.sdk.message.CreateFaceMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateFaceMessageResp} returns this
 */
proto.openim.sdk.message.CreateFaceMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateFaceMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.message.CreateForwardMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateForwardMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateForwardMessageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateForwardMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateForwardMessageReq}
 */
proto.openim.sdk.message.CreateForwardMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateForwardMessageReq;
  return proto.openim.sdk.message.CreateForwardMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateForwardMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateForwardMessageReq}
 */
proto.openim.sdk.message.CreateForwardMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateForwardMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateForwardMessageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateForwardMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateForwardMessageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.CreateForwardMessageReq.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.CreateForwardMessageReq} returns this
*/
proto.openim.sdk.message.CreateForwardMessageReq.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateForwardMessageReq} returns this
 */
proto.openim.sdk.message.CreateForwardMessageReq.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateForwardMessageReq.prototype.hasMessage = function() {
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
proto.openim.sdk.message.CreateForwardMessageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.CreateForwardMessageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.CreateForwardMessageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateForwardMessageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && proto.openim.sdk.message.IMMessage.toObject(includeInstance, f)
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
 * @return {!proto.openim.sdk.message.CreateForwardMessageResp}
 */
proto.openim.sdk.message.CreateForwardMessageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.CreateForwardMessageResp;
  return proto.openim.sdk.message.CreateForwardMessageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.CreateForwardMessageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.CreateForwardMessageResp}
 */
proto.openim.sdk.message.CreateForwardMessageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.message.IMMessage;
      reader.readMessage(value,proto.openim.sdk.message.IMMessage.deserializeBinaryFromReader);
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
proto.openim.sdk.message.CreateForwardMessageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.CreateForwardMessageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.CreateForwardMessageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.CreateForwardMessageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.message.IMMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional IMMessage message = 1;
 * @return {?proto.openim.sdk.message.IMMessage}
 */
proto.openim.sdk.message.CreateForwardMessageResp.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.message.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.sdk.message.CreateForwardMessageResp} returns this
*/
proto.openim.sdk.message.CreateForwardMessageResp.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.message.CreateForwardMessageResp} returns this
 */
proto.openim.sdk.message.CreateForwardMessageResp.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.message.CreateForwardMessageResp.prototype.hasMessage = function() {
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
proto.openim.sdk.message.UploadLogsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.UploadLogsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.UploadLogsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.UploadLogsReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.UploadLogsReq}
 */
proto.openim.sdk.message.UploadLogsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.UploadLogsReq;
  return proto.openim.sdk.message.UploadLogsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.UploadLogsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.UploadLogsReq}
 */
proto.openim.sdk.message.UploadLogsReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.UploadLogsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.UploadLogsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.UploadLogsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.UploadLogsReq.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.UploadLogsReq.prototype.getLine = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.UploadLogsReq} returns this
 */
proto.openim.sdk.message.UploadLogsReq.prototype.setLine = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string ex = 2;
 * @return {string}
 */
proto.openim.sdk.message.UploadLogsReq.prototype.getEx = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.UploadLogsReq} returns this
 */
proto.openim.sdk.message.UploadLogsReq.prototype.setEx = function(value) {
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
proto.openim.sdk.message.UploadLogsResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.UploadLogsResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.UploadLogsResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.UploadLogsResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.UploadLogsResp}
 */
proto.openim.sdk.message.UploadLogsResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.UploadLogsResp;
  return proto.openim.sdk.message.UploadLogsResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.UploadLogsResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.UploadLogsResp}
 */
proto.openim.sdk.message.UploadLogsResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.UploadLogsResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.UploadLogsResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.UploadLogsResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.UploadLogsResp.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.LogReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.LogReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.LogReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.LogReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.LogReq}
 */
proto.openim.sdk.message.LogReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.LogReq;
  return proto.openim.sdk.message.LogReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.LogReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.LogReq}
 */
proto.openim.sdk.message.LogReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.LogReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.LogReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.LogReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.LogReq.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.message.LogReq.prototype.getLoglevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.LogReq} returns this
 */
proto.openim.sdk.message.LogReq.prototype.setLoglevel = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string file = 2;
 * @return {string}
 */
proto.openim.sdk.message.LogReq.prototype.getFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.LogReq} returns this
 */
proto.openim.sdk.message.LogReq.prototype.setFile = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 line = 3;
 * @return {number}
 */
proto.openim.sdk.message.LogReq.prototype.getLine = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.message.LogReq} returns this
 */
proto.openim.sdk.message.LogReq.prototype.setLine = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string msg = 4;
 * @return {string}
 */
proto.openim.sdk.message.LogReq.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.LogReq} returns this
 */
proto.openim.sdk.message.LogReq.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string err = 5;
 * @return {string}
 */
proto.openim.sdk.message.LogReq.prototype.getErr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.message.LogReq} returns this
 */
proto.openim.sdk.message.LogReq.prototype.setErr = function(value) {
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
proto.openim.sdk.message.LogResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.message.LogResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.message.LogResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.LogResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.message.LogResp}
 */
proto.openim.sdk.message.LogResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.message.LogResp;
  return proto.openim.sdk.message.LogResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.message.LogResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.message.LogResp}
 */
proto.openim.sdk.message.LogResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.message.LogResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.message.LogResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.message.LogResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.message.LogResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.openim.sdk.message);
