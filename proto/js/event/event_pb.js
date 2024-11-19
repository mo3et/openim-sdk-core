// source: event.proto
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
var relation_pb = require('./relation_pb.js');
goog.object.extend(proto, relation_pb);
var message_pb = require('./message_pb.js');
goog.object.extend(proto, message_pb);
goog.exportSymbol('proto.openim.event.EventEventOnUploadLogsProgressData', null, global);
goog.exportSymbol('proto.openim.event.EventOnBlackAddedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnBlackDeletedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnConnectFailedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnConnectSuccessData', null, global);
goog.exportSymbol('proto.openim.event.EventOnConnectingData', null, global);
goog.exportSymbol('proto.openim.event.EventOnConversationChangedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnConversationUserInputStatusChangedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnFriendAddedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnFriendApplicationAcceptedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnFriendApplicationAddedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnFriendApplicationDeletedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnFriendApplicationRejectedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnFriendDeletedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnFriendInfoChangedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnGroupApplicationAcceptedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnGroupApplicationAddedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnGroupApplicationDeletedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnGroupApplicationRejectedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnGroupDismissedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnGroupInfoChangedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnGroupMemberAddedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnGroupMemberDeletedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnGroupMemberInfoChangedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnJoinedGroupAddedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnJoinedGroupDeletedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnKickedOfflineData', null, global);
goog.exportSymbol('proto.openim.event.EventOnMsgDeletedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnMsgEditedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnNewConversationData', null, global);
goog.exportSymbol('proto.openim.event.EventOnNewRecvMessageRevokedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnRecvC2CReadReceiptData', null, global);
goog.exportSymbol('proto.openim.event.EventOnRecvCustomBusinessMessageData', null, global);
goog.exportSymbol('proto.openim.event.EventOnRecvNewMessageData', null, global);
goog.exportSymbol('proto.openim.event.EventOnRecvOfflineNewMessageData', null, global);
goog.exportSymbol('proto.openim.event.EventOnRecvOnlineOnlyMessageData', null, global);
goog.exportSymbol('proto.openim.event.EventOnSelfInfoUpdatedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnSendMsgProgressData', null, global);
goog.exportSymbol('proto.openim.event.EventOnSyncServerFailedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnSyncServerFinishData', null, global);
goog.exportSymbol('proto.openim.event.EventOnSyncServerProgressData', null, global);
goog.exportSymbol('proto.openim.event.EventOnSyncServerStartData', null, global);
goog.exportSymbol('proto.openim.event.EventOnTotalUnreadMessageCountChangedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnUploadFileProgressData', null, global);
goog.exportSymbol('proto.openim.event.EventOnUserCommandAddData', null, global);
goog.exportSymbol('proto.openim.event.EventOnUserCommandDeleteData', null, global);
goog.exportSymbol('proto.openim.event.EventOnUserCommandUpdateData', null, global);
goog.exportSymbol('proto.openim.event.EventOnUserStatusChangedData', null, global);
goog.exportSymbol('proto.openim.event.EventOnUserTokenExpiredData', null, global);
goog.exportSymbol('proto.openim.event.EventOnUserTokenInvalidData', null, global);
goog.exportSymbol('proto.openim.event.FuncRequestEventName', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnSendMsgProgressData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnSendMsgProgressData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnSendMsgProgressData.displayName = 'proto.openim.event.EventOnSendMsgProgressData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnUploadFileProgressData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnUploadFileProgressData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnUploadFileProgressData.displayName = 'proto.openim.event.EventOnUploadFileProgressData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventEventOnUploadLogsProgressData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventEventOnUploadLogsProgressData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventEventOnUploadLogsProgressData.displayName = 'proto.openim.event.EventEventOnUploadLogsProgressData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnConnectingData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnConnectingData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnConnectingData.displayName = 'proto.openim.event.EventOnConnectingData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnConnectSuccessData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnConnectSuccessData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnConnectSuccessData.displayName = 'proto.openim.event.EventOnConnectSuccessData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnConnectFailedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnConnectFailedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnConnectFailedData.displayName = 'proto.openim.event.EventOnConnectFailedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnKickedOfflineData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnKickedOfflineData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnKickedOfflineData.displayName = 'proto.openim.event.EventOnKickedOfflineData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnUserTokenExpiredData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnUserTokenExpiredData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnUserTokenExpiredData.displayName = 'proto.openim.event.EventOnUserTokenExpiredData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnUserTokenInvalidData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnUserTokenInvalidData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnUserTokenInvalidData.displayName = 'proto.openim.event.EventOnUserTokenInvalidData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnSyncServerStartData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnSyncServerStartData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnSyncServerStartData.displayName = 'proto.openim.event.EventOnSyncServerStartData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnSyncServerFinishData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnSyncServerFinishData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnSyncServerFinishData.displayName = 'proto.openim.event.EventOnSyncServerFinishData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnSyncServerFailedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnSyncServerFailedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnSyncServerFailedData.displayName = 'proto.openim.event.EventOnSyncServerFailedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnSyncServerProgressData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnSyncServerProgressData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnSyncServerProgressData.displayName = 'proto.openim.event.EventOnSyncServerProgressData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnNewConversationData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnNewConversationData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnNewConversationData.displayName = 'proto.openim.event.EventOnNewConversationData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnConversationChangedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnConversationChangedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnConversationChangedData.displayName = 'proto.openim.event.EventOnConversationChangedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnTotalUnreadMessageCountChangedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnTotalUnreadMessageCountChangedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnTotalUnreadMessageCountChangedData.displayName = 'proto.openim.event.EventOnTotalUnreadMessageCountChangedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnConversationUserInputStatusChangedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnConversationUserInputStatusChangedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnConversationUserInputStatusChangedData.displayName = 'proto.openim.event.EventOnConversationUserInputStatusChangedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnRecvNewMessageData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnRecvNewMessageData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnRecvNewMessageData.displayName = 'proto.openim.event.EventOnRecvNewMessageData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnRecvC2CReadReceiptData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnRecvC2CReadReceiptData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnRecvC2CReadReceiptData.displayName = 'proto.openim.event.EventOnRecvC2CReadReceiptData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnNewRecvMessageRevokedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnNewRecvMessageRevokedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnNewRecvMessageRevokedData.displayName = 'proto.openim.event.EventOnNewRecvMessageRevokedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnRecvOfflineNewMessageData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnRecvOfflineNewMessageData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnRecvOfflineNewMessageData.displayName = 'proto.openim.event.EventOnRecvOfflineNewMessageData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnMsgDeletedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnMsgDeletedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnMsgDeletedData.displayName = 'proto.openim.event.EventOnMsgDeletedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnRecvOnlineOnlyMessageData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnRecvOnlineOnlyMessageData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnRecvOnlineOnlyMessageData.displayName = 'proto.openim.event.EventOnRecvOnlineOnlyMessageData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnMsgEditedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnMsgEditedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnMsgEditedData.displayName = 'proto.openim.event.EventOnMsgEditedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnFriendApplicationAddedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnFriendApplicationAddedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnFriendApplicationAddedData.displayName = 'proto.openim.event.EventOnFriendApplicationAddedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnFriendApplicationDeletedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnFriendApplicationDeletedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnFriendApplicationDeletedData.displayName = 'proto.openim.event.EventOnFriendApplicationDeletedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnFriendApplicationAcceptedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnFriendApplicationAcceptedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnFriendApplicationAcceptedData.displayName = 'proto.openim.event.EventOnFriendApplicationAcceptedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnFriendApplicationRejectedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnFriendApplicationRejectedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnFriendApplicationRejectedData.displayName = 'proto.openim.event.EventOnFriendApplicationRejectedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnFriendAddedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnFriendAddedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnFriendAddedData.displayName = 'proto.openim.event.EventOnFriendAddedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnFriendDeletedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnFriendDeletedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnFriendDeletedData.displayName = 'proto.openim.event.EventOnFriendDeletedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnFriendInfoChangedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnFriendInfoChangedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnFriendInfoChangedData.displayName = 'proto.openim.event.EventOnFriendInfoChangedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnBlackAddedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnBlackAddedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnBlackAddedData.displayName = 'proto.openim.event.EventOnBlackAddedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnBlackDeletedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnBlackDeletedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnBlackDeletedData.displayName = 'proto.openim.event.EventOnBlackDeletedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnJoinedGroupAddedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnJoinedGroupAddedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnJoinedGroupAddedData.displayName = 'proto.openim.event.EventOnJoinedGroupAddedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnJoinedGroupDeletedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnJoinedGroupDeletedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnJoinedGroupDeletedData.displayName = 'proto.openim.event.EventOnJoinedGroupDeletedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnGroupMemberAddedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnGroupMemberAddedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnGroupMemberAddedData.displayName = 'proto.openim.event.EventOnGroupMemberAddedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnGroupMemberDeletedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnGroupMemberDeletedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnGroupMemberDeletedData.displayName = 'proto.openim.event.EventOnGroupMemberDeletedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnGroupApplicationAddedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnGroupApplicationAddedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnGroupApplicationAddedData.displayName = 'proto.openim.event.EventOnGroupApplicationAddedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnGroupApplicationDeletedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnGroupApplicationDeletedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnGroupApplicationDeletedData.displayName = 'proto.openim.event.EventOnGroupApplicationDeletedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnGroupInfoChangedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnGroupInfoChangedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnGroupInfoChangedData.displayName = 'proto.openim.event.EventOnGroupInfoChangedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnGroupDismissedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnGroupDismissedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnGroupDismissedData.displayName = 'proto.openim.event.EventOnGroupDismissedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnGroupMemberInfoChangedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnGroupMemberInfoChangedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnGroupMemberInfoChangedData.displayName = 'proto.openim.event.EventOnGroupMemberInfoChangedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnGroupApplicationAcceptedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnGroupApplicationAcceptedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnGroupApplicationAcceptedData.displayName = 'proto.openim.event.EventOnGroupApplicationAcceptedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnGroupApplicationRejectedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnGroupApplicationRejectedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnGroupApplicationRejectedData.displayName = 'proto.openim.event.EventOnGroupApplicationRejectedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnRecvCustomBusinessMessageData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnRecvCustomBusinessMessageData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnRecvCustomBusinessMessageData.displayName = 'proto.openim.event.EventOnRecvCustomBusinessMessageData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnSelfInfoUpdatedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnSelfInfoUpdatedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnSelfInfoUpdatedData.displayName = 'proto.openim.event.EventOnSelfInfoUpdatedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnUserStatusChangedData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.event.EventOnUserStatusChangedData.repeatedFields_, null);
};
goog.inherits(proto.openim.event.EventOnUserStatusChangedData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnUserStatusChangedData.displayName = 'proto.openim.event.EventOnUserStatusChangedData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnUserCommandAddData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnUserCommandAddData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnUserCommandAddData.displayName = 'proto.openim.event.EventOnUserCommandAddData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnUserCommandDeleteData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnUserCommandDeleteData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnUserCommandDeleteData.displayName = 'proto.openim.event.EventOnUserCommandDeleteData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.event.EventOnUserCommandUpdateData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.event.EventOnUserCommandUpdateData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.event.EventOnUserCommandUpdateData.displayName = 'proto.openim.event.EventOnUserCommandUpdateData';
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
proto.openim.event.EventOnSendMsgProgressData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnSendMsgProgressData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnSendMsgProgressData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnSendMsgProgressData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnSendMsgProgressData}
 */
proto.openim.event.EventOnSendMsgProgressData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnSendMsgProgressData;
  return proto.openim.event.EventOnSendMsgProgressData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnSendMsgProgressData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnSendMsgProgressData}
 */
proto.openim.event.EventOnSendMsgProgressData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnSendMsgProgressData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnSendMsgProgressData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnSendMsgProgressData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnSendMsgProgressData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnSendMsgProgressData.prototype.getProgress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.event.EventOnSendMsgProgressData} returns this
 */
proto.openim.event.EventOnSendMsgProgressData.prototype.setProgress = function(value) {
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
proto.openim.event.EventOnUploadFileProgressData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnUploadFileProgressData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnUploadFileProgressData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnUploadFileProgressData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnUploadFileProgressData}
 */
proto.openim.event.EventOnUploadFileProgressData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnUploadFileProgressData;
  return proto.openim.event.EventOnUploadFileProgressData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnUploadFileProgressData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnUploadFileProgressData}
 */
proto.openim.event.EventOnUploadFileProgressData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnUploadFileProgressData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnUploadFileProgressData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnUploadFileProgressData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnUploadFileProgressData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnUploadFileProgressData.prototype.getProgress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.event.EventOnUploadFileProgressData} returns this
 */
proto.openim.event.EventOnUploadFileProgressData.prototype.setProgress = function(value) {
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
proto.openim.event.EventEventOnUploadLogsProgressData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventEventOnUploadLogsProgressData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventEventOnUploadLogsProgressData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventEventOnUploadLogsProgressData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventEventOnUploadLogsProgressData}
 */
proto.openim.event.EventEventOnUploadLogsProgressData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventEventOnUploadLogsProgressData;
  return proto.openim.event.EventEventOnUploadLogsProgressData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventEventOnUploadLogsProgressData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventEventOnUploadLogsProgressData}
 */
proto.openim.event.EventEventOnUploadLogsProgressData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventEventOnUploadLogsProgressData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventEventOnUploadLogsProgressData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventEventOnUploadLogsProgressData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventEventOnUploadLogsProgressData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventEventOnUploadLogsProgressData.prototype.getProgress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.event.EventEventOnUploadLogsProgressData} returns this
 */
proto.openim.event.EventEventOnUploadLogsProgressData.prototype.setProgress = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.openim.event.EventEventOnUploadLogsProgressData.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.event.EventEventOnUploadLogsProgressData} returns this
 */
proto.openim.event.EventEventOnUploadLogsProgressData.prototype.setTotal = function(value) {
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
proto.openim.event.EventOnConnectingData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnConnectingData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnConnectingData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnConnectingData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnConnectingData}
 */
proto.openim.event.EventOnConnectingData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnConnectingData;
  return proto.openim.event.EventOnConnectingData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnConnectingData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnConnectingData}
 */
proto.openim.event.EventOnConnectingData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnConnectingData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnConnectingData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnConnectingData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnConnectingData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnConnectSuccessData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnConnectSuccessData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnConnectSuccessData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnConnectSuccessData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnConnectSuccessData}
 */
proto.openim.event.EventOnConnectSuccessData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnConnectSuccessData;
  return proto.openim.event.EventOnConnectSuccessData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnConnectSuccessData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnConnectSuccessData}
 */
proto.openim.event.EventOnConnectSuccessData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnConnectSuccessData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnConnectSuccessData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnConnectSuccessData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnConnectSuccessData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnConnectFailedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnConnectFailedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnConnectFailedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnConnectFailedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnConnectFailedData}
 */
proto.openim.event.EventOnConnectFailedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnConnectFailedData;
  return proto.openim.event.EventOnConnectFailedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnConnectFailedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnConnectFailedData}
 */
proto.openim.event.EventOnConnectFailedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnConnectFailedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnConnectFailedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnConnectFailedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnConnectFailedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnConnectFailedData.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.event.EventOnConnectFailedData} returns this
 */
proto.openim.event.EventOnConnectFailedData.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string errMsg = 2;
 * @return {string}
 */
proto.openim.event.EventOnConnectFailedData.prototype.getErrmsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.event.EventOnConnectFailedData} returns this
 */
proto.openim.event.EventOnConnectFailedData.prototype.setErrmsg = function(value) {
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
proto.openim.event.EventOnKickedOfflineData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnKickedOfflineData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnKickedOfflineData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnKickedOfflineData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnKickedOfflineData}
 */
proto.openim.event.EventOnKickedOfflineData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnKickedOfflineData;
  return proto.openim.event.EventOnKickedOfflineData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnKickedOfflineData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnKickedOfflineData}
 */
proto.openim.event.EventOnKickedOfflineData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnKickedOfflineData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnKickedOfflineData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnKickedOfflineData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnKickedOfflineData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnUserTokenExpiredData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnUserTokenExpiredData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnUserTokenExpiredData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnUserTokenExpiredData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnUserTokenExpiredData}
 */
proto.openim.event.EventOnUserTokenExpiredData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnUserTokenExpiredData;
  return proto.openim.event.EventOnUserTokenExpiredData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnUserTokenExpiredData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnUserTokenExpiredData}
 */
proto.openim.event.EventOnUserTokenExpiredData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnUserTokenExpiredData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnUserTokenExpiredData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnUserTokenExpiredData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnUserTokenExpiredData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnUserTokenInvalidData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnUserTokenInvalidData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnUserTokenInvalidData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnUserTokenInvalidData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnUserTokenInvalidData}
 */
proto.openim.event.EventOnUserTokenInvalidData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnUserTokenInvalidData;
  return proto.openim.event.EventOnUserTokenInvalidData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnUserTokenInvalidData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnUserTokenInvalidData}
 */
proto.openim.event.EventOnUserTokenInvalidData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnUserTokenInvalidData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnUserTokenInvalidData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnUserTokenInvalidData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnUserTokenInvalidData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnUserTokenInvalidData.prototype.getErrmsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.event.EventOnUserTokenInvalidData} returns this
 */
proto.openim.event.EventOnUserTokenInvalidData.prototype.setErrmsg = function(value) {
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
proto.openim.event.EventOnSyncServerStartData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnSyncServerStartData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnSyncServerStartData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnSyncServerStartData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnSyncServerStartData}
 */
proto.openim.event.EventOnSyncServerStartData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnSyncServerStartData;
  return proto.openim.event.EventOnSyncServerStartData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnSyncServerStartData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnSyncServerStartData}
 */
proto.openim.event.EventOnSyncServerStartData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnSyncServerStartData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnSyncServerStartData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnSyncServerStartData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnSyncServerStartData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnSyncServerStartData.prototype.getReinstalled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.event.EventOnSyncServerStartData} returns this
 */
proto.openim.event.EventOnSyncServerStartData.prototype.setReinstalled = function(value) {
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
proto.openim.event.EventOnSyncServerFinishData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnSyncServerFinishData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnSyncServerFinishData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnSyncServerFinishData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnSyncServerFinishData}
 */
proto.openim.event.EventOnSyncServerFinishData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnSyncServerFinishData;
  return proto.openim.event.EventOnSyncServerFinishData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnSyncServerFinishData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnSyncServerFinishData}
 */
proto.openim.event.EventOnSyncServerFinishData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnSyncServerFinishData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnSyncServerFinishData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnSyncServerFinishData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnSyncServerFinishData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnSyncServerFinishData.prototype.getReinstalled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.event.EventOnSyncServerFinishData} returns this
 */
proto.openim.event.EventOnSyncServerFinishData.prototype.setReinstalled = function(value) {
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
proto.openim.event.EventOnSyncServerFailedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnSyncServerFailedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnSyncServerFailedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnSyncServerFailedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnSyncServerFailedData}
 */
proto.openim.event.EventOnSyncServerFailedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnSyncServerFailedData;
  return proto.openim.event.EventOnSyncServerFailedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnSyncServerFailedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnSyncServerFailedData}
 */
proto.openim.event.EventOnSyncServerFailedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnSyncServerFailedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnSyncServerFailedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnSyncServerFailedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnSyncServerFailedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnSyncServerFailedData.prototype.getReinstalled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.event.EventOnSyncServerFailedData} returns this
 */
proto.openim.event.EventOnSyncServerFailedData.prototype.setReinstalled = function(value) {
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
proto.openim.event.EventOnSyncServerProgressData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnSyncServerProgressData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnSyncServerProgressData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnSyncServerProgressData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnSyncServerProgressData}
 */
proto.openim.event.EventOnSyncServerProgressData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnSyncServerProgressData;
  return proto.openim.event.EventOnSyncServerProgressData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnSyncServerProgressData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnSyncServerProgressData}
 */
proto.openim.event.EventOnSyncServerProgressData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnSyncServerProgressData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnSyncServerProgressData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnSyncServerProgressData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnSyncServerProgressData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnSyncServerProgressData.prototype.getProgress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.event.EventOnSyncServerProgressData} returns this
 */
proto.openim.event.EventOnSyncServerProgressData.prototype.setProgress = function(value) {
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
proto.openim.event.EventOnNewConversationData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnNewConversationData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnNewConversationData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnNewConversationData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnNewConversationData}
 */
proto.openim.event.EventOnNewConversationData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnNewConversationData;
  return proto.openim.event.EventOnNewConversationData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnNewConversationData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnNewConversationData}
 */
proto.openim.event.EventOnNewConversationData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnNewConversationData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnNewConversationData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnNewConversationData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnNewConversationData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnNewConversationData.prototype.getConversationlist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.event.EventOnNewConversationData} returns this
 */
proto.openim.event.EventOnNewConversationData.prototype.setConversationlist = function(value) {
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
proto.openim.event.EventOnConversationChangedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnConversationChangedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnConversationChangedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnConversationChangedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnConversationChangedData}
 */
proto.openim.event.EventOnConversationChangedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnConversationChangedData;
  return proto.openim.event.EventOnConversationChangedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnConversationChangedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnConversationChangedData}
 */
proto.openim.event.EventOnConversationChangedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnConversationChangedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnConversationChangedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnConversationChangedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnConversationChangedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnConversationChangedData.prototype.getConversationlist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.event.EventOnConversationChangedData} returns this
 */
proto.openim.event.EventOnConversationChangedData.prototype.setConversationlist = function(value) {
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
proto.openim.event.EventOnTotalUnreadMessageCountChangedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnTotalUnreadMessageCountChangedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnTotalUnreadMessageCountChangedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnTotalUnreadMessageCountChangedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnTotalUnreadMessageCountChangedData}
 */
proto.openim.event.EventOnTotalUnreadMessageCountChangedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnTotalUnreadMessageCountChangedData;
  return proto.openim.event.EventOnTotalUnreadMessageCountChangedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnTotalUnreadMessageCountChangedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnTotalUnreadMessageCountChangedData}
 */
proto.openim.event.EventOnTotalUnreadMessageCountChangedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnTotalUnreadMessageCountChangedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnTotalUnreadMessageCountChangedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnTotalUnreadMessageCountChangedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnTotalUnreadMessageCountChangedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnTotalUnreadMessageCountChangedData.prototype.getTotalunreadcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.event.EventOnTotalUnreadMessageCountChangedData} returns this
 */
proto.openim.event.EventOnTotalUnreadMessageCountChangedData.prototype.setTotalunreadcount = function(value) {
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
proto.openim.event.EventOnConversationUserInputStatusChangedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnConversationUserInputStatusChangedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnConversationUserInputStatusChangedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnConversationUserInputStatusChangedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnConversationUserInputStatusChangedData}
 */
proto.openim.event.EventOnConversationUserInputStatusChangedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnConversationUserInputStatusChangedData;
  return proto.openim.event.EventOnConversationUserInputStatusChangedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnConversationUserInputStatusChangedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnConversationUserInputStatusChangedData}
 */
proto.openim.event.EventOnConversationUserInputStatusChangedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnConversationUserInputStatusChangedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnConversationUserInputStatusChangedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnConversationUserInputStatusChangedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnConversationUserInputStatusChangedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnConversationUserInputStatusChangedData.prototype.getChange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.event.EventOnConversationUserInputStatusChangedData} returns this
 */
proto.openim.event.EventOnConversationUserInputStatusChangedData.prototype.setChange = function(value) {
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
proto.openim.event.EventOnRecvNewMessageData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnRecvNewMessageData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnRecvNewMessageData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnRecvNewMessageData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnRecvNewMessageData}
 */
proto.openim.event.EventOnRecvNewMessageData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnRecvNewMessageData;
  return proto.openim.event.EventOnRecvNewMessageData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnRecvNewMessageData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnRecvNewMessageData}
 */
proto.openim.event.EventOnRecvNewMessageData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnRecvNewMessageData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnRecvNewMessageData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnRecvNewMessageData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnRecvNewMessageData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnRecvNewMessageData.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.event.EventOnRecvNewMessageData} returns this
*/
proto.openim.event.EventOnRecvNewMessageData.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnRecvNewMessageData} returns this
 */
proto.openim.event.EventOnRecvNewMessageData.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnRecvNewMessageData.prototype.hasMessage = function() {
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
proto.openim.event.EventOnRecvC2CReadReceiptData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnRecvC2CReadReceiptData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnRecvC2CReadReceiptData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnRecvC2CReadReceiptData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnRecvC2CReadReceiptData}
 */
proto.openim.event.EventOnRecvC2CReadReceiptData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnRecvC2CReadReceiptData;
  return proto.openim.event.EventOnRecvC2CReadReceiptData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnRecvC2CReadReceiptData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnRecvC2CReadReceiptData}
 */
proto.openim.event.EventOnRecvC2CReadReceiptData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnRecvC2CReadReceiptData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnRecvC2CReadReceiptData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnRecvC2CReadReceiptData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnRecvC2CReadReceiptData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnRecvC2CReadReceiptData.prototype.getMsgreceiptlist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.event.EventOnRecvC2CReadReceiptData} returns this
 */
proto.openim.event.EventOnRecvC2CReadReceiptData.prototype.setMsgreceiptlist = function(value) {
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
proto.openim.event.EventOnNewRecvMessageRevokedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnNewRecvMessageRevokedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnNewRecvMessageRevokedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnNewRecvMessageRevokedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnNewRecvMessageRevokedData}
 */
proto.openim.event.EventOnNewRecvMessageRevokedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnNewRecvMessageRevokedData;
  return proto.openim.event.EventOnNewRecvMessageRevokedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnNewRecvMessageRevokedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnNewRecvMessageRevokedData}
 */
proto.openim.event.EventOnNewRecvMessageRevokedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnNewRecvMessageRevokedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnNewRecvMessageRevokedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnNewRecvMessageRevokedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnNewRecvMessageRevokedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnNewRecvMessageRevokedData.prototype.getMessagerevoked = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.event.EventOnNewRecvMessageRevokedData} returns this
 */
proto.openim.event.EventOnNewRecvMessageRevokedData.prototype.setMessagerevoked = function(value) {
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
proto.openim.event.EventOnRecvOfflineNewMessageData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnRecvOfflineNewMessageData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnRecvOfflineNewMessageData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnRecvOfflineNewMessageData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnRecvOfflineNewMessageData}
 */
proto.openim.event.EventOnRecvOfflineNewMessageData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnRecvOfflineNewMessageData;
  return proto.openim.event.EventOnRecvOfflineNewMessageData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnRecvOfflineNewMessageData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnRecvOfflineNewMessageData}
 */
proto.openim.event.EventOnRecvOfflineNewMessageData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnRecvOfflineNewMessageData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnRecvOfflineNewMessageData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnRecvOfflineNewMessageData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnRecvOfflineNewMessageData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnRecvOfflineNewMessageData.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.event.EventOnRecvOfflineNewMessageData} returns this
*/
proto.openim.event.EventOnRecvOfflineNewMessageData.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnRecvOfflineNewMessageData} returns this
 */
proto.openim.event.EventOnRecvOfflineNewMessageData.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnRecvOfflineNewMessageData.prototype.hasMessage = function() {
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
proto.openim.event.EventOnMsgDeletedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnMsgDeletedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnMsgDeletedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnMsgDeletedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnMsgDeletedData}
 */
proto.openim.event.EventOnMsgDeletedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnMsgDeletedData;
  return proto.openim.event.EventOnMsgDeletedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnMsgDeletedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnMsgDeletedData}
 */
proto.openim.event.EventOnMsgDeletedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnMsgDeletedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnMsgDeletedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnMsgDeletedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnMsgDeletedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnMsgDeletedData.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.event.EventOnMsgDeletedData} returns this
*/
proto.openim.event.EventOnMsgDeletedData.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnMsgDeletedData} returns this
 */
proto.openim.event.EventOnMsgDeletedData.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnMsgDeletedData.prototype.hasMessage = function() {
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
proto.openim.event.EventOnRecvOnlineOnlyMessageData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnRecvOnlineOnlyMessageData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnRecvOnlineOnlyMessageData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnRecvOnlineOnlyMessageData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnRecvOnlineOnlyMessageData}
 */
proto.openim.event.EventOnRecvOnlineOnlyMessageData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnRecvOnlineOnlyMessageData;
  return proto.openim.event.EventOnRecvOnlineOnlyMessageData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnRecvOnlineOnlyMessageData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnRecvOnlineOnlyMessageData}
 */
proto.openim.event.EventOnRecvOnlineOnlyMessageData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnRecvOnlineOnlyMessageData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnRecvOnlineOnlyMessageData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnRecvOnlineOnlyMessageData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnRecvOnlineOnlyMessageData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnRecvOnlineOnlyMessageData.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.event.EventOnRecvOnlineOnlyMessageData} returns this
*/
proto.openim.event.EventOnRecvOnlineOnlyMessageData.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnRecvOnlineOnlyMessageData} returns this
 */
proto.openim.event.EventOnRecvOnlineOnlyMessageData.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnRecvOnlineOnlyMessageData.prototype.hasMessage = function() {
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
proto.openim.event.EventOnMsgEditedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnMsgEditedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnMsgEditedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnMsgEditedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnMsgEditedData}
 */
proto.openim.event.EventOnMsgEditedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnMsgEditedData;
  return proto.openim.event.EventOnMsgEditedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnMsgEditedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnMsgEditedData}
 */
proto.openim.event.EventOnMsgEditedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnMsgEditedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnMsgEditedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnMsgEditedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnMsgEditedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnMsgEditedData.prototype.getMessage = function() {
  return /** @type{?proto.openim.sdk.message.IMMessage} */ (
    jspb.Message.getWrapperField(this, message_pb.IMMessage, 1));
};


/**
 * @param {?proto.openim.sdk.message.IMMessage|undefined} value
 * @return {!proto.openim.event.EventOnMsgEditedData} returns this
*/
proto.openim.event.EventOnMsgEditedData.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnMsgEditedData} returns this
 */
proto.openim.event.EventOnMsgEditedData.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnMsgEditedData.prototype.hasMessage = function() {
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
proto.openim.event.EventOnFriendApplicationAddedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnFriendApplicationAddedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnFriendApplicationAddedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnFriendApplicationAddedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnFriendApplicationAddedData}
 */
proto.openim.event.EventOnFriendApplicationAddedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnFriendApplicationAddedData;
  return proto.openim.event.EventOnFriendApplicationAddedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnFriendApplicationAddedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnFriendApplicationAddedData}
 */
proto.openim.event.EventOnFriendApplicationAddedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnFriendApplicationAddedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnFriendApplicationAddedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnFriendApplicationAddedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnFriendApplicationAddedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnFriendApplicationAddedData.prototype.getRequest = function() {
  return /** @type{?proto.openim.sdk.relation.FriendRequestInfo} */ (
    jspb.Message.getWrapperField(this, relation_pb.FriendRequestInfo, 1));
};


/**
 * @param {?proto.openim.sdk.relation.FriendRequestInfo|undefined} value
 * @return {!proto.openim.event.EventOnFriendApplicationAddedData} returns this
*/
proto.openim.event.EventOnFriendApplicationAddedData.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnFriendApplicationAddedData} returns this
 */
proto.openim.event.EventOnFriendApplicationAddedData.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnFriendApplicationAddedData.prototype.hasRequest = function() {
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
proto.openim.event.EventOnFriendApplicationDeletedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnFriendApplicationDeletedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnFriendApplicationDeletedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnFriendApplicationDeletedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnFriendApplicationDeletedData}
 */
proto.openim.event.EventOnFriendApplicationDeletedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnFriendApplicationDeletedData;
  return proto.openim.event.EventOnFriendApplicationDeletedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnFriendApplicationDeletedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnFriendApplicationDeletedData}
 */
proto.openim.event.EventOnFriendApplicationDeletedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnFriendApplicationDeletedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnFriendApplicationDeletedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnFriendApplicationDeletedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnFriendApplicationDeletedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnFriendApplicationDeletedData.prototype.getRequest = function() {
  return /** @type{?proto.openim.sdk.relation.FriendRequestInfo} */ (
    jspb.Message.getWrapperField(this, relation_pb.FriendRequestInfo, 1));
};


/**
 * @param {?proto.openim.sdk.relation.FriendRequestInfo|undefined} value
 * @return {!proto.openim.event.EventOnFriendApplicationDeletedData} returns this
*/
proto.openim.event.EventOnFriendApplicationDeletedData.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnFriendApplicationDeletedData} returns this
 */
proto.openim.event.EventOnFriendApplicationDeletedData.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnFriendApplicationDeletedData.prototype.hasRequest = function() {
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
proto.openim.event.EventOnFriendApplicationAcceptedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnFriendApplicationAcceptedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnFriendApplicationAcceptedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnFriendApplicationAcceptedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnFriendApplicationAcceptedData}
 */
proto.openim.event.EventOnFriendApplicationAcceptedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnFriendApplicationAcceptedData;
  return proto.openim.event.EventOnFriendApplicationAcceptedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnFriendApplicationAcceptedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnFriendApplicationAcceptedData}
 */
proto.openim.event.EventOnFriendApplicationAcceptedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnFriendApplicationAcceptedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnFriendApplicationAcceptedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnFriendApplicationAcceptedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnFriendApplicationAcceptedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnFriendApplicationAcceptedData.prototype.getRequest = function() {
  return /** @type{?proto.openim.sdk.relation.FriendRequestInfo} */ (
    jspb.Message.getWrapperField(this, relation_pb.FriendRequestInfo, 1));
};


/**
 * @param {?proto.openim.sdk.relation.FriendRequestInfo|undefined} value
 * @return {!proto.openim.event.EventOnFriendApplicationAcceptedData} returns this
*/
proto.openim.event.EventOnFriendApplicationAcceptedData.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnFriendApplicationAcceptedData} returns this
 */
proto.openim.event.EventOnFriendApplicationAcceptedData.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnFriendApplicationAcceptedData.prototype.hasRequest = function() {
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
proto.openim.event.EventOnFriendApplicationRejectedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnFriendApplicationRejectedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnFriendApplicationRejectedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnFriendApplicationRejectedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnFriendApplicationRejectedData}
 */
proto.openim.event.EventOnFriendApplicationRejectedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnFriendApplicationRejectedData;
  return proto.openim.event.EventOnFriendApplicationRejectedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnFriendApplicationRejectedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnFriendApplicationRejectedData}
 */
proto.openim.event.EventOnFriendApplicationRejectedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnFriendApplicationRejectedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnFriendApplicationRejectedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnFriendApplicationRejectedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnFriendApplicationRejectedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnFriendApplicationRejectedData.prototype.getRequest = function() {
  return /** @type{?proto.openim.sdk.relation.FriendRequestInfo} */ (
    jspb.Message.getWrapperField(this, relation_pb.FriendRequestInfo, 1));
};


/**
 * @param {?proto.openim.sdk.relation.FriendRequestInfo|undefined} value
 * @return {!proto.openim.event.EventOnFriendApplicationRejectedData} returns this
*/
proto.openim.event.EventOnFriendApplicationRejectedData.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnFriendApplicationRejectedData} returns this
 */
proto.openim.event.EventOnFriendApplicationRejectedData.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnFriendApplicationRejectedData.prototype.hasRequest = function() {
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
proto.openim.event.EventOnFriendAddedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnFriendAddedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnFriendAddedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnFriendAddedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnFriendAddedData}
 */
proto.openim.event.EventOnFriendAddedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnFriendAddedData;
  return proto.openim.event.EventOnFriendAddedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnFriendAddedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnFriendAddedData}
 */
proto.openim.event.EventOnFriendAddedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnFriendAddedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnFriendAddedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnFriendAddedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnFriendAddedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnFriendAddedData.prototype.getFriend = function() {
  return /** @type{?proto.openim.sdk.relation.FriendInfo} */ (
    jspb.Message.getWrapperField(this, relation_pb.FriendInfo, 1));
};


/**
 * @param {?proto.openim.sdk.relation.FriendInfo|undefined} value
 * @return {!proto.openim.event.EventOnFriendAddedData} returns this
*/
proto.openim.event.EventOnFriendAddedData.prototype.setFriend = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnFriendAddedData} returns this
 */
proto.openim.event.EventOnFriendAddedData.prototype.clearFriend = function() {
  return this.setFriend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnFriendAddedData.prototype.hasFriend = function() {
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
proto.openim.event.EventOnFriendDeletedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnFriendDeletedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnFriendDeletedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnFriendDeletedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnFriendDeletedData}
 */
proto.openim.event.EventOnFriendDeletedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnFriendDeletedData;
  return proto.openim.event.EventOnFriendDeletedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnFriendDeletedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnFriendDeletedData}
 */
proto.openim.event.EventOnFriendDeletedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnFriendDeletedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnFriendDeletedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnFriendDeletedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnFriendDeletedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnFriendDeletedData.prototype.getFriend = function() {
  return /** @type{?proto.openim.sdk.relation.FriendInfo} */ (
    jspb.Message.getWrapperField(this, relation_pb.FriendInfo, 1));
};


/**
 * @param {?proto.openim.sdk.relation.FriendInfo|undefined} value
 * @return {!proto.openim.event.EventOnFriendDeletedData} returns this
*/
proto.openim.event.EventOnFriendDeletedData.prototype.setFriend = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnFriendDeletedData} returns this
 */
proto.openim.event.EventOnFriendDeletedData.prototype.clearFriend = function() {
  return this.setFriend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnFriendDeletedData.prototype.hasFriend = function() {
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
proto.openim.event.EventOnFriendInfoChangedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnFriendInfoChangedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnFriendInfoChangedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnFriendInfoChangedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnFriendInfoChangedData}
 */
proto.openim.event.EventOnFriendInfoChangedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnFriendInfoChangedData;
  return proto.openim.event.EventOnFriendInfoChangedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnFriendInfoChangedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnFriendInfoChangedData}
 */
proto.openim.event.EventOnFriendInfoChangedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnFriendInfoChangedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnFriendInfoChangedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnFriendInfoChangedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnFriendInfoChangedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnFriendInfoChangedData.prototype.getFriend = function() {
  return /** @type{?proto.openim.sdk.relation.FriendInfo} */ (
    jspb.Message.getWrapperField(this, relation_pb.FriendInfo, 1));
};


/**
 * @param {?proto.openim.sdk.relation.FriendInfo|undefined} value
 * @return {!proto.openim.event.EventOnFriendInfoChangedData} returns this
*/
proto.openim.event.EventOnFriendInfoChangedData.prototype.setFriend = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnFriendInfoChangedData} returns this
 */
proto.openim.event.EventOnFriendInfoChangedData.prototype.clearFriend = function() {
  return this.setFriend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnFriendInfoChangedData.prototype.hasFriend = function() {
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
proto.openim.event.EventOnBlackAddedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnBlackAddedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnBlackAddedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnBlackAddedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnBlackAddedData}
 */
proto.openim.event.EventOnBlackAddedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnBlackAddedData;
  return proto.openim.event.EventOnBlackAddedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnBlackAddedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnBlackAddedData}
 */
proto.openim.event.EventOnBlackAddedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnBlackAddedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnBlackAddedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnBlackAddedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnBlackAddedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnBlackAddedData.prototype.getBlack = function() {
  return /** @type{?proto.openim.sdk.relation.BlackInfo} */ (
    jspb.Message.getWrapperField(this, relation_pb.BlackInfo, 1));
};


/**
 * @param {?proto.openim.sdk.relation.BlackInfo|undefined} value
 * @return {!proto.openim.event.EventOnBlackAddedData} returns this
*/
proto.openim.event.EventOnBlackAddedData.prototype.setBlack = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnBlackAddedData} returns this
 */
proto.openim.event.EventOnBlackAddedData.prototype.clearBlack = function() {
  return this.setBlack(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnBlackAddedData.prototype.hasBlack = function() {
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
proto.openim.event.EventOnBlackDeletedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnBlackDeletedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnBlackDeletedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnBlackDeletedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnBlackDeletedData}
 */
proto.openim.event.EventOnBlackDeletedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnBlackDeletedData;
  return proto.openim.event.EventOnBlackDeletedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnBlackDeletedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnBlackDeletedData}
 */
proto.openim.event.EventOnBlackDeletedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnBlackDeletedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnBlackDeletedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnBlackDeletedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnBlackDeletedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnBlackDeletedData.prototype.getBlack = function() {
  return /** @type{?proto.openim.sdk.relation.BlackInfo} */ (
    jspb.Message.getWrapperField(this, relation_pb.BlackInfo, 1));
};


/**
 * @param {?proto.openim.sdk.relation.BlackInfo|undefined} value
 * @return {!proto.openim.event.EventOnBlackDeletedData} returns this
*/
proto.openim.event.EventOnBlackDeletedData.prototype.setBlack = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnBlackDeletedData} returns this
 */
proto.openim.event.EventOnBlackDeletedData.prototype.clearBlack = function() {
  return this.setBlack(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnBlackDeletedData.prototype.hasBlack = function() {
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
proto.openim.event.EventOnJoinedGroupAddedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnJoinedGroupAddedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnJoinedGroupAddedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnJoinedGroupAddedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnJoinedGroupAddedData}
 */
proto.openim.event.EventOnJoinedGroupAddedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnJoinedGroupAddedData;
  return proto.openim.event.EventOnJoinedGroupAddedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnJoinedGroupAddedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnJoinedGroupAddedData}
 */
proto.openim.event.EventOnJoinedGroupAddedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnJoinedGroupAddedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnJoinedGroupAddedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnJoinedGroupAddedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnJoinedGroupAddedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnJoinedGroupAddedData.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, group_pb.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.event.EventOnJoinedGroupAddedData} returns this
*/
proto.openim.event.EventOnJoinedGroupAddedData.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnJoinedGroupAddedData} returns this
 */
proto.openim.event.EventOnJoinedGroupAddedData.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnJoinedGroupAddedData.prototype.hasGroup = function() {
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
proto.openim.event.EventOnJoinedGroupDeletedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnJoinedGroupDeletedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnJoinedGroupDeletedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnJoinedGroupDeletedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnJoinedGroupDeletedData}
 */
proto.openim.event.EventOnJoinedGroupDeletedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnJoinedGroupDeletedData;
  return proto.openim.event.EventOnJoinedGroupDeletedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnJoinedGroupDeletedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnJoinedGroupDeletedData}
 */
proto.openim.event.EventOnJoinedGroupDeletedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnJoinedGroupDeletedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnJoinedGroupDeletedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnJoinedGroupDeletedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnJoinedGroupDeletedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnJoinedGroupDeletedData.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, group_pb.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.event.EventOnJoinedGroupDeletedData} returns this
*/
proto.openim.event.EventOnJoinedGroupDeletedData.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnJoinedGroupDeletedData} returns this
 */
proto.openim.event.EventOnJoinedGroupDeletedData.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnJoinedGroupDeletedData.prototype.hasGroup = function() {
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
proto.openim.event.EventOnGroupMemberAddedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnGroupMemberAddedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnGroupMemberAddedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnGroupMemberAddedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnGroupMemberAddedData}
 */
proto.openim.event.EventOnGroupMemberAddedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnGroupMemberAddedData;
  return proto.openim.event.EventOnGroupMemberAddedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnGroupMemberAddedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnGroupMemberAddedData}
 */
proto.openim.event.EventOnGroupMemberAddedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnGroupMemberAddedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnGroupMemberAddedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnGroupMemberAddedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnGroupMemberAddedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnGroupMemberAddedData.prototype.getMember = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, group_pb.GroupMemberInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.event.EventOnGroupMemberAddedData} returns this
*/
proto.openim.event.EventOnGroupMemberAddedData.prototype.setMember = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnGroupMemberAddedData} returns this
 */
proto.openim.event.EventOnGroupMemberAddedData.prototype.clearMember = function() {
  return this.setMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnGroupMemberAddedData.prototype.hasMember = function() {
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
proto.openim.event.EventOnGroupMemberDeletedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnGroupMemberDeletedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnGroupMemberDeletedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnGroupMemberDeletedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnGroupMemberDeletedData}
 */
proto.openim.event.EventOnGroupMemberDeletedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnGroupMemberDeletedData;
  return proto.openim.event.EventOnGroupMemberDeletedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnGroupMemberDeletedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnGroupMemberDeletedData}
 */
proto.openim.event.EventOnGroupMemberDeletedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnGroupMemberDeletedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnGroupMemberDeletedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnGroupMemberDeletedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnGroupMemberDeletedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnGroupMemberDeletedData.prototype.getMember = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, group_pb.GroupMemberInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.event.EventOnGroupMemberDeletedData} returns this
*/
proto.openim.event.EventOnGroupMemberDeletedData.prototype.setMember = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnGroupMemberDeletedData} returns this
 */
proto.openim.event.EventOnGroupMemberDeletedData.prototype.clearMember = function() {
  return this.setMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnGroupMemberDeletedData.prototype.hasMember = function() {
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
proto.openim.event.EventOnGroupApplicationAddedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnGroupApplicationAddedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnGroupApplicationAddedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnGroupApplicationAddedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnGroupApplicationAddedData}
 */
proto.openim.event.EventOnGroupApplicationAddedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnGroupApplicationAddedData;
  return proto.openim.event.EventOnGroupApplicationAddedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnGroupApplicationAddedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnGroupApplicationAddedData}
 */
proto.openim.event.EventOnGroupApplicationAddedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnGroupApplicationAddedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnGroupApplicationAddedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnGroupApplicationAddedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnGroupApplicationAddedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnGroupApplicationAddedData.prototype.getRequest = function() {
  return /** @type{?proto.openim.sdk.group.GroupRequestInfo} */ (
    jspb.Message.getWrapperField(this, group_pb.GroupRequestInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupRequestInfo|undefined} value
 * @return {!proto.openim.event.EventOnGroupApplicationAddedData} returns this
*/
proto.openim.event.EventOnGroupApplicationAddedData.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnGroupApplicationAddedData} returns this
 */
proto.openim.event.EventOnGroupApplicationAddedData.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnGroupApplicationAddedData.prototype.hasRequest = function() {
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
proto.openim.event.EventOnGroupApplicationDeletedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnGroupApplicationDeletedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnGroupApplicationDeletedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnGroupApplicationDeletedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnGroupApplicationDeletedData}
 */
proto.openim.event.EventOnGroupApplicationDeletedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnGroupApplicationDeletedData;
  return proto.openim.event.EventOnGroupApplicationDeletedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnGroupApplicationDeletedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnGroupApplicationDeletedData}
 */
proto.openim.event.EventOnGroupApplicationDeletedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnGroupApplicationDeletedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnGroupApplicationDeletedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnGroupApplicationDeletedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnGroupApplicationDeletedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnGroupApplicationDeletedData.prototype.getRequest = function() {
  return /** @type{?proto.openim.sdk.group.GroupRequestInfo} */ (
    jspb.Message.getWrapperField(this, group_pb.GroupRequestInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupRequestInfo|undefined} value
 * @return {!proto.openim.event.EventOnGroupApplicationDeletedData} returns this
*/
proto.openim.event.EventOnGroupApplicationDeletedData.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnGroupApplicationDeletedData} returns this
 */
proto.openim.event.EventOnGroupApplicationDeletedData.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnGroupApplicationDeletedData.prototype.hasRequest = function() {
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
proto.openim.event.EventOnGroupInfoChangedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnGroupInfoChangedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnGroupInfoChangedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnGroupInfoChangedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnGroupInfoChangedData}
 */
proto.openim.event.EventOnGroupInfoChangedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnGroupInfoChangedData;
  return proto.openim.event.EventOnGroupInfoChangedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnGroupInfoChangedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnGroupInfoChangedData}
 */
proto.openim.event.EventOnGroupInfoChangedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnGroupInfoChangedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnGroupInfoChangedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnGroupInfoChangedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnGroupInfoChangedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnGroupInfoChangedData.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, group_pb.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.event.EventOnGroupInfoChangedData} returns this
*/
proto.openim.event.EventOnGroupInfoChangedData.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnGroupInfoChangedData} returns this
 */
proto.openim.event.EventOnGroupInfoChangedData.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnGroupInfoChangedData.prototype.hasGroup = function() {
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
proto.openim.event.EventOnGroupDismissedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnGroupDismissedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnGroupDismissedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnGroupDismissedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnGroupDismissedData}
 */
proto.openim.event.EventOnGroupDismissedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnGroupDismissedData;
  return proto.openim.event.EventOnGroupDismissedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnGroupDismissedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnGroupDismissedData}
 */
proto.openim.event.EventOnGroupDismissedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnGroupDismissedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnGroupDismissedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnGroupDismissedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnGroupDismissedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnGroupDismissedData.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, group_pb.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.event.EventOnGroupDismissedData} returns this
*/
proto.openim.event.EventOnGroupDismissedData.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnGroupDismissedData} returns this
 */
proto.openim.event.EventOnGroupDismissedData.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnGroupDismissedData.prototype.hasGroup = function() {
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
proto.openim.event.EventOnGroupMemberInfoChangedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnGroupMemberInfoChangedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnGroupMemberInfoChangedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnGroupMemberInfoChangedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnGroupMemberInfoChangedData}
 */
proto.openim.event.EventOnGroupMemberInfoChangedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnGroupMemberInfoChangedData;
  return proto.openim.event.EventOnGroupMemberInfoChangedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnGroupMemberInfoChangedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnGroupMemberInfoChangedData}
 */
proto.openim.event.EventOnGroupMemberInfoChangedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnGroupMemberInfoChangedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnGroupMemberInfoChangedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnGroupMemberInfoChangedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnGroupMemberInfoChangedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnGroupMemberInfoChangedData.prototype.getMember = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, group_pb.GroupMemberInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.event.EventOnGroupMemberInfoChangedData} returns this
*/
proto.openim.event.EventOnGroupMemberInfoChangedData.prototype.setMember = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnGroupMemberInfoChangedData} returns this
 */
proto.openim.event.EventOnGroupMemberInfoChangedData.prototype.clearMember = function() {
  return this.setMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnGroupMemberInfoChangedData.prototype.hasMember = function() {
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
proto.openim.event.EventOnGroupApplicationAcceptedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnGroupApplicationAcceptedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnGroupApplicationAcceptedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnGroupApplicationAcceptedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnGroupApplicationAcceptedData}
 */
proto.openim.event.EventOnGroupApplicationAcceptedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnGroupApplicationAcceptedData;
  return proto.openim.event.EventOnGroupApplicationAcceptedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnGroupApplicationAcceptedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnGroupApplicationAcceptedData}
 */
proto.openim.event.EventOnGroupApplicationAcceptedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnGroupApplicationAcceptedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnGroupApplicationAcceptedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnGroupApplicationAcceptedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnGroupApplicationAcceptedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnGroupApplicationAcceptedData.prototype.getRequest = function() {
  return /** @type{?proto.openim.sdk.group.GroupRequestInfo} */ (
    jspb.Message.getWrapperField(this, group_pb.GroupRequestInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupRequestInfo|undefined} value
 * @return {!proto.openim.event.EventOnGroupApplicationAcceptedData} returns this
*/
proto.openim.event.EventOnGroupApplicationAcceptedData.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnGroupApplicationAcceptedData} returns this
 */
proto.openim.event.EventOnGroupApplicationAcceptedData.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnGroupApplicationAcceptedData.prototype.hasRequest = function() {
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
proto.openim.event.EventOnGroupApplicationRejectedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnGroupApplicationRejectedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnGroupApplicationRejectedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnGroupApplicationRejectedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnGroupApplicationRejectedData}
 */
proto.openim.event.EventOnGroupApplicationRejectedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnGroupApplicationRejectedData;
  return proto.openim.event.EventOnGroupApplicationRejectedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnGroupApplicationRejectedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnGroupApplicationRejectedData}
 */
proto.openim.event.EventOnGroupApplicationRejectedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnGroupApplicationRejectedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnGroupApplicationRejectedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnGroupApplicationRejectedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnGroupApplicationRejectedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnGroupApplicationRejectedData.prototype.getRequest = function() {
  return /** @type{?proto.openim.sdk.group.GroupRequestInfo} */ (
    jspb.Message.getWrapperField(this, group_pb.GroupRequestInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupRequestInfo|undefined} value
 * @return {!proto.openim.event.EventOnGroupApplicationRejectedData} returns this
*/
proto.openim.event.EventOnGroupApplicationRejectedData.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.event.EventOnGroupApplicationRejectedData} returns this
 */
proto.openim.event.EventOnGroupApplicationRejectedData.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.event.EventOnGroupApplicationRejectedData.prototype.hasRequest = function() {
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
proto.openim.event.EventOnRecvCustomBusinessMessageData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnRecvCustomBusinessMessageData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnRecvCustomBusinessMessageData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnRecvCustomBusinessMessageData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnRecvCustomBusinessMessageData}
 */
proto.openim.event.EventOnRecvCustomBusinessMessageData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnRecvCustomBusinessMessageData;
  return proto.openim.event.EventOnRecvCustomBusinessMessageData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnRecvCustomBusinessMessageData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnRecvCustomBusinessMessageData}
 */
proto.openim.event.EventOnRecvCustomBusinessMessageData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnRecvCustomBusinessMessageData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnRecvCustomBusinessMessageData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnRecvCustomBusinessMessageData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnRecvCustomBusinessMessageData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnRecvCustomBusinessMessageData.prototype.getBusinessmessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.event.EventOnRecvCustomBusinessMessageData} returns this
 */
proto.openim.event.EventOnRecvCustomBusinessMessageData.prototype.setBusinessmessage = function(value) {
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
proto.openim.event.EventOnSelfInfoUpdatedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnSelfInfoUpdatedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnSelfInfoUpdatedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnSelfInfoUpdatedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnSelfInfoUpdatedData}
 */
proto.openim.event.EventOnSelfInfoUpdatedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnSelfInfoUpdatedData;
  return proto.openim.event.EventOnSelfInfoUpdatedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnSelfInfoUpdatedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnSelfInfoUpdatedData}
 */
proto.openim.event.EventOnSelfInfoUpdatedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnSelfInfoUpdatedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnSelfInfoUpdatedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnSelfInfoUpdatedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnSelfInfoUpdatedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnSelfInfoUpdatedData.prototype.getUserinfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.event.EventOnSelfInfoUpdatedData} returns this
 */
proto.openim.event.EventOnSelfInfoUpdatedData.prototype.setUserinfo = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.event.EventOnUserStatusChangedData.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.event.EventOnUserStatusChangedData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnUserStatusChangedData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnUserStatusChangedData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnUserStatusChangedData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnUserStatusChangedData}
 */
proto.openim.event.EventOnUserStatusChangedData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnUserStatusChangedData;
  return proto.openim.event.EventOnUserStatusChangedData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnUserStatusChangedData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnUserStatusChangedData}
 */
proto.openim.event.EventOnUserStatusChangedData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnUserStatusChangedData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnUserStatusChangedData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnUserStatusChangedData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnUserStatusChangedData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnUserStatusChangedData.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.event.EventOnUserStatusChangedData} returns this
 */
proto.openim.event.EventOnUserStatusChangedData.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated int32 platformIDs = 2;
 * @return {!Array<number>}
 */
proto.openim.event.EventOnUserStatusChangedData.prototype.getPlatformidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.openim.event.EventOnUserStatusChangedData} returns this
 */
proto.openim.event.EventOnUserStatusChangedData.prototype.setPlatformidsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.openim.event.EventOnUserStatusChangedData} returns this
 */
proto.openim.event.EventOnUserStatusChangedData.prototype.addPlatformids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.event.EventOnUserStatusChangedData} returns this
 */
proto.openim.event.EventOnUserStatusChangedData.prototype.clearPlatformidsList = function() {
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
proto.openim.event.EventOnUserCommandAddData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnUserCommandAddData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnUserCommandAddData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnUserCommandAddData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnUserCommandAddData}
 */
proto.openim.event.EventOnUserCommandAddData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnUserCommandAddData;
  return proto.openim.event.EventOnUserCommandAddData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnUserCommandAddData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnUserCommandAddData}
 */
proto.openim.event.EventOnUserCommandAddData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnUserCommandAddData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnUserCommandAddData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnUserCommandAddData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnUserCommandAddData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnUserCommandAddData.prototype.getUsercommand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.event.EventOnUserCommandAddData} returns this
 */
proto.openim.event.EventOnUserCommandAddData.prototype.setUsercommand = function(value) {
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
proto.openim.event.EventOnUserCommandDeleteData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnUserCommandDeleteData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnUserCommandDeleteData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnUserCommandDeleteData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnUserCommandDeleteData}
 */
proto.openim.event.EventOnUserCommandDeleteData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnUserCommandDeleteData;
  return proto.openim.event.EventOnUserCommandDeleteData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnUserCommandDeleteData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnUserCommandDeleteData}
 */
proto.openim.event.EventOnUserCommandDeleteData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnUserCommandDeleteData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnUserCommandDeleteData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnUserCommandDeleteData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnUserCommandDeleteData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnUserCommandDeleteData.prototype.getUsercommand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.event.EventOnUserCommandDeleteData} returns this
 */
proto.openim.event.EventOnUserCommandDeleteData.prototype.setUsercommand = function(value) {
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
proto.openim.event.EventOnUserCommandUpdateData.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.event.EventOnUserCommandUpdateData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.event.EventOnUserCommandUpdateData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnUserCommandUpdateData.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.event.EventOnUserCommandUpdateData}
 */
proto.openim.event.EventOnUserCommandUpdateData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.event.EventOnUserCommandUpdateData;
  return proto.openim.event.EventOnUserCommandUpdateData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.event.EventOnUserCommandUpdateData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.event.EventOnUserCommandUpdateData}
 */
proto.openim.event.EventOnUserCommandUpdateData.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.event.EventOnUserCommandUpdateData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.event.EventOnUserCommandUpdateData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.event.EventOnUserCommandUpdateData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.event.EventOnUserCommandUpdateData.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.event.EventOnUserCommandUpdateData.prototype.getUsercommand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.event.EventOnUserCommandUpdateData} returns this
 */
proto.openim.event.EventOnUserCommandUpdateData.prototype.setUsercommand = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.openim.event.FuncRequestEventName = {
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

goog.object.extend(exports, proto.openim.event);
