// source: group.proto
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
var user_pb = require('./user_pb.js');
goog.object.extend(proto, user_pb);
goog.exportSymbol('proto.openim.sdk.group.ChangeGroupMemberMuteReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.ChangeGroupMemberMuteResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.ChangeGroupMuteReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.ChangeGroupMuteResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.CreateGroupReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.CreateGroupResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.DismissGroupReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.DismissGroupResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.GetGroupMemberInfoReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.GetGroupMemberInfoResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.GetGroupMembersReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.GetGroupMembersResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.GetGroupRequestReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.GetGroupRequestResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.GetJoinedGroupsPageReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.GetJoinedGroupsPageResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.GetJoinedGroupsReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.GetJoinedGroupsResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.GetSpecifiedGroupsInfoReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.GetSpecifiedGroupsInfoResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.GetUsersInGroupReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.GetUsersInGroupResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.GroupApplicationAcceptedTips', null, global);
goog.exportSymbol('proto.openim.sdk.group.GroupApplicationRejectedTips', null, global);
goog.exportSymbol('proto.openim.sdk.group.GroupCancelMutedTips', null, global);
goog.exportSymbol('proto.openim.sdk.group.GroupCreatedTips', null, global);
goog.exportSymbol('proto.openim.sdk.group.GroupDismissedTips', null, global);
goog.exportSymbol('proto.openim.sdk.group.GroupFilter', null, global);
goog.exportSymbol('proto.openim.sdk.group.GroupInfo', null, global);
goog.exportSymbol('proto.openim.sdk.group.GroupInfoSetAnnouncementTips', null, global);
goog.exportSymbol('proto.openim.sdk.group.GroupInfoSetNameTips', null, global);
goog.exportSymbol('proto.openim.sdk.group.GroupInfoSetTips', null, global);
goog.exportSymbol('proto.openim.sdk.group.GroupMemberCancelMutedTips', null, global);
goog.exportSymbol('proto.openim.sdk.group.GroupMemberInfo', null, global);
goog.exportSymbol('proto.openim.sdk.group.GroupMemberInfoSetTips', null, global);
goog.exportSymbol('proto.openim.sdk.group.GroupMemberMutedTips', null, global);
goog.exportSymbol('proto.openim.sdk.group.GroupMutedTips', null, global);
goog.exportSymbol('proto.openim.sdk.group.GroupOwnerTransferredTips', null, global);
goog.exportSymbol('proto.openim.sdk.group.GroupRequestInfo', null, global);
goog.exportSymbol('proto.openim.sdk.group.GroupStatus', null, global);
goog.exportSymbol('proto.openim.sdk.group.HandlerGroupRequestReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.HandlerGroupRequestResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.InviteUserToGroupReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.InviteUserToGroupResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.IsJoinGroupReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.IsJoinGroupResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.JoinGroupApplicationTips', null, global);
goog.exportSymbol('proto.openim.sdk.group.JoinGroupReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.JoinGroupResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.KickGroupMemberReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.KickGroupMemberResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.MemberEnterTips', null, global);
goog.exportSymbol('proto.openim.sdk.group.MemberInvitedTips', null, global);
goog.exportSymbol('proto.openim.sdk.group.MemberKickedTips', null, global);
goog.exportSymbol('proto.openim.sdk.group.MemberQuitTips', null, global);
goog.exportSymbol('proto.openim.sdk.group.QuitGroupReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.QuitGroupResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.SearchGroupMembersReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.SearchGroupMembersResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.SearchGroupsReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.SearchGroupsResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.SetGroupInfoReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.SetGroupInfoResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.SetGroupMemberInfoReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.SetGroupMemberInfoResp', null, global);
goog.exportSymbol('proto.openim.sdk.group.TransferGroupOwnerReq', null, global);
goog.exportSymbol('proto.openim.sdk.group.TransferGroupOwnerResp', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GroupInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.GroupInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GroupInfo.displayName = 'proto.openim.sdk.group.GroupInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GroupMemberInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.GroupMemberInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GroupMemberInfo.displayName = 'proto.openim.sdk.group.GroupMemberInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GroupRequestInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.GroupRequestInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GroupRequestInfo.displayName = 'proto.openim.sdk.group.GroupRequestInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.CreateGroupReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.group.CreateGroupReq.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.group.CreateGroupReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.CreateGroupReq.displayName = 'proto.openim.sdk.group.CreateGroupReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.CreateGroupResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.CreateGroupResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.CreateGroupResp.displayName = 'proto.openim.sdk.group.CreateGroupResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.JoinGroupReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.JoinGroupReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.JoinGroupReq.displayName = 'proto.openim.sdk.group.JoinGroupReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.JoinGroupResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.JoinGroupResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.JoinGroupResp.displayName = 'proto.openim.sdk.group.JoinGroupResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.QuitGroupReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.QuitGroupReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.QuitGroupReq.displayName = 'proto.openim.sdk.group.QuitGroupReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.QuitGroupResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.QuitGroupResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.QuitGroupResp.displayName = 'proto.openim.sdk.group.QuitGroupResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.DismissGroupReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.DismissGroupReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.DismissGroupReq.displayName = 'proto.openim.sdk.group.DismissGroupReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.DismissGroupResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.DismissGroupResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.DismissGroupResp.displayName = 'proto.openim.sdk.group.DismissGroupResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.ChangeGroupMuteReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.ChangeGroupMuteReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.ChangeGroupMuteReq.displayName = 'proto.openim.sdk.group.ChangeGroupMuteReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.ChangeGroupMuteResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.ChangeGroupMuteResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.ChangeGroupMuteResp.displayName = 'proto.openim.sdk.group.ChangeGroupMuteResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.ChangeGroupMemberMuteReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.ChangeGroupMemberMuteReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.ChangeGroupMemberMuteReq.displayName = 'proto.openim.sdk.group.ChangeGroupMemberMuteReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.ChangeGroupMemberMuteResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.ChangeGroupMemberMuteResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.ChangeGroupMemberMuteResp.displayName = 'proto.openim.sdk.group.ChangeGroupMemberMuteResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.TransferGroupOwnerReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.TransferGroupOwnerReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.TransferGroupOwnerReq.displayName = 'proto.openim.sdk.group.TransferGroupOwnerReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.TransferGroupOwnerResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.TransferGroupOwnerResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.TransferGroupOwnerResp.displayName = 'proto.openim.sdk.group.TransferGroupOwnerResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.KickGroupMemberReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.group.KickGroupMemberReq.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.group.KickGroupMemberReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.KickGroupMemberReq.displayName = 'proto.openim.sdk.group.KickGroupMemberReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.KickGroupMemberResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.KickGroupMemberResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.KickGroupMemberResp.displayName = 'proto.openim.sdk.group.KickGroupMemberResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.SetGroupInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.SetGroupInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.SetGroupInfoReq.displayName = 'proto.openim.sdk.group.SetGroupInfoReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.SetGroupInfoResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.SetGroupInfoResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.SetGroupInfoResp.displayName = 'proto.openim.sdk.group.SetGroupInfoResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.SetGroupMemberInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.SetGroupMemberInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.SetGroupMemberInfoReq.displayName = 'proto.openim.sdk.group.SetGroupMemberInfoReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.SetGroupMemberInfoResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.SetGroupMemberInfoResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.SetGroupMemberInfoResp.displayName = 'proto.openim.sdk.group.SetGroupMemberInfoResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GetJoinedGroupsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.GetJoinedGroupsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GetJoinedGroupsReq.displayName = 'proto.openim.sdk.group.GetJoinedGroupsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GetJoinedGroupsResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.group.GetJoinedGroupsResp.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.group.GetJoinedGroupsResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GetJoinedGroupsResp.displayName = 'proto.openim.sdk.group.GetJoinedGroupsResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GetJoinedGroupsPageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.GetJoinedGroupsPageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GetJoinedGroupsPageReq.displayName = 'proto.openim.sdk.group.GetJoinedGroupsPageReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GetJoinedGroupsPageResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.group.GetJoinedGroupsPageResp.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.group.GetJoinedGroupsPageResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GetJoinedGroupsPageResp.displayName = 'proto.openim.sdk.group.GetJoinedGroupsPageResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.group.GetSpecifiedGroupsInfoReq.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.group.GetSpecifiedGroupsInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GetSpecifiedGroupsInfoReq.displayName = 'proto.openim.sdk.group.GetSpecifiedGroupsInfoReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.group.GetSpecifiedGroupsInfoResp.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.group.GetSpecifiedGroupsInfoResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GetSpecifiedGroupsInfoResp.displayName = 'proto.openim.sdk.group.GetSpecifiedGroupsInfoResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.SearchGroupsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.SearchGroupsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.SearchGroupsReq.displayName = 'proto.openim.sdk.group.SearchGroupsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.SearchGroupsResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.group.SearchGroupsResp.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.group.SearchGroupsResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.SearchGroupsResp.displayName = 'proto.openim.sdk.group.SearchGroupsResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq.displayName = 'proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp.displayName = 'proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq.displayName = 'proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp.displayName = 'proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq.displayName = 'proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp.displayName = 'proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GetGroupMembersReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.GetGroupMembersReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GetGroupMembersReq.displayName = 'proto.openim.sdk.group.GetGroupMembersReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GetGroupMembersResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.group.GetGroupMembersResp.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.group.GetGroupMembersResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GetGroupMembersResp.displayName = 'proto.openim.sdk.group.GetGroupMembersResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GetGroupRequestReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.GetGroupRequestReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GetGroupRequestReq.displayName = 'proto.openim.sdk.group.GetGroupRequestReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GetGroupRequestResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.group.GetGroupRequestResp.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.group.GetGroupRequestResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GetGroupRequestResp.displayName = 'proto.openim.sdk.group.GetGroupRequestResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.SearchGroupMembersReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.SearchGroupMembersReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.SearchGroupMembersReq.displayName = 'proto.openim.sdk.group.SearchGroupMembersReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.SearchGroupMembersResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.group.SearchGroupMembersResp.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.group.SearchGroupMembersResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.SearchGroupMembersResp.displayName = 'proto.openim.sdk.group.SearchGroupMembersResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.IsJoinGroupReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.IsJoinGroupReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.IsJoinGroupReq.displayName = 'proto.openim.sdk.group.IsJoinGroupReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.IsJoinGroupResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.IsJoinGroupResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.IsJoinGroupResp.displayName = 'proto.openim.sdk.group.IsJoinGroupResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GetUsersInGroupReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.group.GetUsersInGroupReq.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.group.GetUsersInGroupReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GetUsersInGroupReq.displayName = 'proto.openim.sdk.group.GetUsersInGroupReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GetUsersInGroupResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.group.GetUsersInGroupResp.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.group.GetUsersInGroupResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GetUsersInGroupResp.displayName = 'proto.openim.sdk.group.GetUsersInGroupResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.InviteUserToGroupReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.group.InviteUserToGroupReq.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.group.InviteUserToGroupReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.InviteUserToGroupReq.displayName = 'proto.openim.sdk.group.InviteUserToGroupReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.InviteUserToGroupResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.InviteUserToGroupResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.InviteUserToGroupResp.displayName = 'proto.openim.sdk.group.InviteUserToGroupResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.HandlerGroupRequestReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.HandlerGroupRequestReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.HandlerGroupRequestReq.displayName = 'proto.openim.sdk.group.HandlerGroupRequestReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.HandlerGroupRequestResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.HandlerGroupRequestResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.HandlerGroupRequestResp.displayName = 'proto.openim.sdk.group.HandlerGroupRequestResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GetGroupMemberInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.group.GetGroupMemberInfoReq.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.group.GetGroupMemberInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GetGroupMemberInfoReq.displayName = 'proto.openim.sdk.group.GetGroupMemberInfoReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GetGroupMemberInfoResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.GetGroupMemberInfoResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GetGroupMemberInfoResp.displayName = 'proto.openim.sdk.group.GetGroupMemberInfoResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GroupCreatedTips = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.group.GroupCreatedTips.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.group.GroupCreatedTips, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GroupCreatedTips.displayName = 'proto.openim.sdk.group.GroupCreatedTips';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GroupInfoSetTips = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.GroupInfoSetTips, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GroupInfoSetTips.displayName = 'proto.openim.sdk.group.GroupInfoSetTips';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GroupInfoSetNameTips = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.GroupInfoSetNameTips, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GroupInfoSetNameTips.displayName = 'proto.openim.sdk.group.GroupInfoSetNameTips';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GroupInfoSetAnnouncementTips = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.GroupInfoSetAnnouncementTips, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GroupInfoSetAnnouncementTips.displayName = 'proto.openim.sdk.group.GroupInfoSetAnnouncementTips';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.JoinGroupApplicationTips = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.JoinGroupApplicationTips, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.JoinGroupApplicationTips.displayName = 'proto.openim.sdk.group.JoinGroupApplicationTips';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.MemberQuitTips = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.MemberQuitTips, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.MemberQuitTips.displayName = 'proto.openim.sdk.group.MemberQuitTips';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GroupApplicationAcceptedTips = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.GroupApplicationAcceptedTips, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GroupApplicationAcceptedTips.displayName = 'proto.openim.sdk.group.GroupApplicationAcceptedTips';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GroupApplicationRejectedTips = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.GroupApplicationRejectedTips, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GroupApplicationRejectedTips.displayName = 'proto.openim.sdk.group.GroupApplicationRejectedTips';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GroupOwnerTransferredTips = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.GroupOwnerTransferredTips, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GroupOwnerTransferredTips.displayName = 'proto.openim.sdk.group.GroupOwnerTransferredTips';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.MemberKickedTips = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.group.MemberKickedTips.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.group.MemberKickedTips, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.MemberKickedTips.displayName = 'proto.openim.sdk.group.MemberKickedTips';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.MemberInvitedTips = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.openim.sdk.group.MemberInvitedTips.repeatedFields_, null);
};
goog.inherits(proto.openim.sdk.group.MemberInvitedTips, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.MemberInvitedTips.displayName = 'proto.openim.sdk.group.MemberInvitedTips';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.MemberEnterTips = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.MemberEnterTips, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.MemberEnterTips.displayName = 'proto.openim.sdk.group.MemberEnterTips';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GroupDismissedTips = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.GroupDismissedTips, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GroupDismissedTips.displayName = 'proto.openim.sdk.group.GroupDismissedTips';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GroupMemberMutedTips = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.GroupMemberMutedTips, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GroupMemberMutedTips.displayName = 'proto.openim.sdk.group.GroupMemberMutedTips';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GroupMemberCancelMutedTips = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.GroupMemberCancelMutedTips, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GroupMemberCancelMutedTips.displayName = 'proto.openim.sdk.group.GroupMemberCancelMutedTips';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GroupMutedTips = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.GroupMutedTips, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GroupMutedTips.displayName = 'proto.openim.sdk.group.GroupMutedTips';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GroupCancelMutedTips = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.GroupCancelMutedTips, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GroupCancelMutedTips.displayName = 'proto.openim.sdk.group.GroupCancelMutedTips';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.openim.sdk.group.GroupMemberInfoSetTips = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.openim.sdk.group.GroupMemberInfoSetTips, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.openim.sdk.group.GroupMemberInfoSetTips.displayName = 'proto.openim.sdk.group.GroupMemberInfoSetTips';
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
proto.openim.sdk.group.GroupInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GroupInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GroupInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, ""),
groupname: jspb.Message.getFieldWithDefault(msg, 2, ""),
notification: jspb.Message.getFieldWithDefault(msg, 3, ""),
introduction: jspb.Message.getFieldWithDefault(msg, 4, ""),
faceurl: jspb.Message.getFieldWithDefault(msg, 5, ""),
owneruserid: jspb.Message.getFieldWithDefault(msg, 6, ""),
createtime: jspb.Message.getFieldWithDefault(msg, 7, 0),
membercount: jspb.Message.getFieldWithDefault(msg, 8, 0),
ex: jspb.Message.getFieldWithDefault(msg, 9, ""),
status: jspb.Message.getFieldWithDefault(msg, 10, 0),
creatoruserid: jspb.Message.getFieldWithDefault(msg, 11, ""),
needverification: jspb.Message.getFieldWithDefault(msg, 12, 0),
lookmemberinfo: jspb.Message.getFieldWithDefault(msg, 13, 0),
applymemberfriend: jspb.Message.getFieldWithDefault(msg, 14, 0),
notificationupdatetime: jspb.Message.getFieldWithDefault(msg, 15, 0),
notificationuserid: jspb.Message.getFieldWithDefault(msg, 16, ""),
attachedinfo: jspb.Message.getFieldWithDefault(msg, 17, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.GroupInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GroupInfo;
  return proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GroupInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setGroupname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotification(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntroduction(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFaceurl(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwneruserid(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatetime(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMembercount(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setEx(value);
      break;
    case 10:
      var value = /** @type {!proto.openim.sdk.group.GroupStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatoruserid(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNeedverification(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLookmemberinfo(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setApplymemberfriend(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNotificationupdatetime(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotificationuserid(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttachedinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GroupInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GroupInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGroupname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNotification();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIntroduction();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFaceurl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOwneruserid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCreatetime();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getMembercount();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getEx();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getCreatoruserid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getNeedverification();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getLookmemberinfo();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getApplymemberfriend();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getNotificationupdatetime();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getNotificationuserid();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getAttachedinfo();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
};


/**
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.group.GroupInfo.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupInfo} returns this
 */
proto.openim.sdk.group.GroupInfo.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string groupName = 2;
 * @return {string}
 */
proto.openim.sdk.group.GroupInfo.prototype.getGroupname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupInfo} returns this
 */
proto.openim.sdk.group.GroupInfo.prototype.setGroupname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string notification = 3;
 * @return {string}
 */
proto.openim.sdk.group.GroupInfo.prototype.getNotification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupInfo} returns this
 */
proto.openim.sdk.group.GroupInfo.prototype.setNotification = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string introduction = 4;
 * @return {string}
 */
proto.openim.sdk.group.GroupInfo.prototype.getIntroduction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupInfo} returns this
 */
proto.openim.sdk.group.GroupInfo.prototype.setIntroduction = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string faceURL = 5;
 * @return {string}
 */
proto.openim.sdk.group.GroupInfo.prototype.getFaceurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupInfo} returns this
 */
proto.openim.sdk.group.GroupInfo.prototype.setFaceurl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string ownerUserID = 6;
 * @return {string}
 */
proto.openim.sdk.group.GroupInfo.prototype.getOwneruserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupInfo} returns this
 */
proto.openim.sdk.group.GroupInfo.prototype.setOwneruserid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 createTime = 7;
 * @return {number}
 */
proto.openim.sdk.group.GroupInfo.prototype.getCreatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupInfo} returns this
 */
proto.openim.sdk.group.GroupInfo.prototype.setCreatetime = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 memberCount = 8;
 * @return {number}
 */
proto.openim.sdk.group.GroupInfo.prototype.getMembercount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupInfo} returns this
 */
proto.openim.sdk.group.GroupInfo.prototype.setMembercount = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string ex = 9;
 * @return {string}
 */
proto.openim.sdk.group.GroupInfo.prototype.getEx = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupInfo} returns this
 */
proto.openim.sdk.group.GroupInfo.prototype.setEx = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional GroupStatus status = 10;
 * @return {!proto.openim.sdk.group.GroupStatus}
 */
proto.openim.sdk.group.GroupInfo.prototype.getStatus = function() {
  return /** @type {!proto.openim.sdk.group.GroupStatus} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.openim.sdk.group.GroupStatus} value
 * @return {!proto.openim.sdk.group.GroupInfo} returns this
 */
proto.openim.sdk.group.GroupInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional string creatorUserID = 11;
 * @return {string}
 */
proto.openim.sdk.group.GroupInfo.prototype.getCreatoruserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupInfo} returns this
 */
proto.openim.sdk.group.GroupInfo.prototype.setCreatoruserid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional int32 needVerification = 12;
 * @return {number}
 */
proto.openim.sdk.group.GroupInfo.prototype.getNeedverification = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupInfo} returns this
 */
proto.openim.sdk.group.GroupInfo.prototype.setNeedverification = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int32 lookMemberInfo = 13;
 * @return {number}
 */
proto.openim.sdk.group.GroupInfo.prototype.getLookmemberinfo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupInfo} returns this
 */
proto.openim.sdk.group.GroupInfo.prototype.setLookmemberinfo = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int32 applyMemberFriend = 14;
 * @return {number}
 */
proto.openim.sdk.group.GroupInfo.prototype.getApplymemberfriend = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupInfo} returns this
 */
proto.openim.sdk.group.GroupInfo.prototype.setApplymemberfriend = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int64 notificationUpdateTime = 15;
 * @return {number}
 */
proto.openim.sdk.group.GroupInfo.prototype.getNotificationupdatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupInfo} returns this
 */
proto.openim.sdk.group.GroupInfo.prototype.setNotificationupdatetime = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional string notificationUserID = 16;
 * @return {string}
 */
proto.openim.sdk.group.GroupInfo.prototype.getNotificationuserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupInfo} returns this
 */
proto.openim.sdk.group.GroupInfo.prototype.setNotificationuserid = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string attachedInfo = 17;
 * @return {string}
 */
proto.openim.sdk.group.GroupInfo.prototype.getAttachedinfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupInfo} returns this
 */
proto.openim.sdk.group.GroupInfo.prototype.setAttachedinfo = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GroupMemberInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GroupMemberInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupMemberInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, ""),
userid: jspb.Message.getFieldWithDefault(msg, 2, ""),
nickname: jspb.Message.getFieldWithDefault(msg, 3, ""),
faceurl: jspb.Message.getFieldWithDefault(msg, 4, ""),
rolelevel: jspb.Message.getFieldWithDefault(msg, 5, 0),
jointime: jspb.Message.getFieldWithDefault(msg, 6, 0),
joinsource: jspb.Message.getFieldWithDefault(msg, 7, 0),
inviteruserid: jspb.Message.getFieldWithDefault(msg, 8, ""),
muteendtime: jspb.Message.getFieldWithDefault(msg, 9, 0),
operatoruserid: jspb.Message.getFieldWithDefault(msg, 10, ""),
ex: jspb.Message.getFieldWithDefault(msg, 11, ""),
attachedinfo: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GroupMemberInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GroupMemberInfo;
  return proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GroupMemberInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNickname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFaceurl(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRolelevel(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setJointime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setJoinsource(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setInviteruserid(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMuteendtime(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperatoruserid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setEx(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttachedinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GroupMemberInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getNickname();
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
  f = message.getRolelevel();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getJointime();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getJoinsource();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getInviteruserid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getMuteendtime();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getOperatoruserid();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getAttachedinfo();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupMemberInfo} returns this
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string userID = 2;
 * @return {string}
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupMemberInfo} returns this
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string nickname = 3;
 * @return {string}
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupMemberInfo} returns this
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string faceURL = 4;
 * @return {string}
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.getFaceurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupMemberInfo} returns this
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.setFaceurl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 roleLevel = 5;
 * @return {number}
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.getRolelevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupMemberInfo} returns this
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.setRolelevel = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 joinTime = 6;
 * @return {number}
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.getJointime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupMemberInfo} returns this
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.setJointime = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 joinSource = 7;
 * @return {number}
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.getJoinsource = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupMemberInfo} returns this
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.setJoinsource = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string inviterUserID = 8;
 * @return {string}
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.getInviteruserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupMemberInfo} returns this
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.setInviteruserid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 muteEndTime = 9;
 * @return {number}
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.getMuteendtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupMemberInfo} returns this
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.setMuteendtime = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string operatorUserID = 10;
 * @return {string}
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.getOperatoruserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupMemberInfo} returns this
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.setOperatoruserid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string ex = 11;
 * @return {string}
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.getEx = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupMemberInfo} returns this
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.setEx = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string attachedInfo = 12;
 * @return {string}
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.getAttachedinfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupMemberInfo} returns this
 */
proto.openim.sdk.group.GroupMemberInfo.prototype.setAttachedinfo = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GroupRequestInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GroupRequestInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupRequestInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, ""),
groupname: jspb.Message.getFieldWithDefault(msg, 2, ""),
notification: jspb.Message.getFieldWithDefault(msg, 3, ""),
introduction: jspb.Message.getFieldWithDefault(msg, 4, ""),
groupfaceurl: jspb.Message.getFieldWithDefault(msg, 5, ""),
createtime: jspb.Message.getFieldWithDefault(msg, 6, 0),
status: jspb.Message.getFieldWithDefault(msg, 7, 0),
creatoruserid: jspb.Message.getFieldWithDefault(msg, 8, ""),
grouptype: jspb.Message.getFieldWithDefault(msg, 9, 0),
owneruserid: jspb.Message.getFieldWithDefault(msg, 10, ""),
membercount: jspb.Message.getFieldWithDefault(msg, 11, 0),
userid: jspb.Message.getFieldWithDefault(msg, 12, ""),
nickname: jspb.Message.getFieldWithDefault(msg, 13, ""),
userfaceurl: jspb.Message.getFieldWithDefault(msg, 14, ""),
handleresult: jspb.Message.getFieldWithDefault(msg, 15, 0),
reqmsg: jspb.Message.getFieldWithDefault(msg, 16, ""),
handledmsg: jspb.Message.getFieldWithDefault(msg, 17, ""),
reqtime: jspb.Message.getFieldWithDefault(msg, 18, 0),
handleuserid: jspb.Message.getFieldWithDefault(msg, 19, ""),
handledtime: jspb.Message.getFieldWithDefault(msg, 20, 0),
ex: jspb.Message.getFieldWithDefault(msg, 21, ""),
attachedinfo: jspb.Message.getFieldWithDefault(msg, 22, ""),
joinsource: jspb.Message.getFieldWithDefault(msg, 23, 0),
inviteruserid: jspb.Message.getFieldWithDefault(msg, 24, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GroupRequestInfo}
 */
proto.openim.sdk.group.GroupRequestInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GroupRequestInfo;
  return proto.openim.sdk.group.GroupRequestInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GroupRequestInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GroupRequestInfo}
 */
proto.openim.sdk.group.GroupRequestInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setGroupname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotification(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntroduction(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupfaceurl(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatetime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatoruserid(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGrouptype(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwneruserid(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMembercount(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserfaceurl(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHandleresult(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setReqmsg(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setHandledmsg(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReqtime(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setHandleuserid(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHandledtime(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setEx(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttachedinfo(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setJoinsource(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setInviteruserid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GroupRequestInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GroupRequestInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupRequestInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGroupname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNotification();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIntroduction();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getGroupfaceurl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatetime();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getCreatoruserid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getGrouptype();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getOwneruserid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getMembercount();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getUserfaceurl();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getHandleresult();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getReqmsg();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getHandledmsg();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getReqtime();
  if (f !== 0) {
    writer.writeInt64(
      18,
      f
    );
  }
  f = message.getHandleuserid();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getHandledtime();
  if (f !== 0) {
    writer.writeInt64(
      20,
      f
    );
  }
  f = message.getEx();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getAttachedinfo();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getJoinsource();
  if (f !== 0) {
    writer.writeInt32(
      23,
      f
    );
  }
  f = message.getInviteruserid();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
};


/**
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string groupName = 2;
 * @return {string}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getGroupname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setGroupname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string notification = 3;
 * @return {string}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getNotification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setNotification = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string introduction = 4;
 * @return {string}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getIntroduction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setIntroduction = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string groupFaceURL = 5;
 * @return {string}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getGroupfaceurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setGroupfaceurl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 createTime = 6;
 * @return {number}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getCreatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setCreatetime = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 status = 7;
 * @return {number}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string creatorUserID = 8;
 * @return {string}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getCreatoruserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setCreatoruserid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 groupType = 9;
 * @return {number}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getGrouptype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setGrouptype = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string ownerUserID = 10;
 * @return {string}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getOwneruserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setOwneruserid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int32 memberCount = 11;
 * @return {number}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getMembercount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setMembercount = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string userID = 12;
 * @return {string}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string nickname = 13;
 * @return {string}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string userFaceURL = 14;
 * @return {string}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getUserfaceurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setUserfaceurl = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional int32 handleResult = 15;
 * @return {number}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getHandleresult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setHandleresult = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional string reqMsg = 16;
 * @return {string}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getReqmsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setReqmsg = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string handledMsg = 17;
 * @return {string}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getHandledmsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setHandledmsg = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional int64 reqTime = 18;
 * @return {number}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getReqtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setReqtime = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional string handleUserID = 19;
 * @return {string}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getHandleuserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setHandleuserid = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional int64 handledTime = 20;
 * @return {number}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getHandledtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setHandledtime = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional string ex = 21;
 * @return {string}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getEx = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setEx = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string attachedInfo = 22;
 * @return {string}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getAttachedinfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setAttachedinfo = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional int32 joinSource = 23;
 * @return {number}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getJoinsource = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setJoinsource = function(value) {
  return jspb.Message.setProto3IntField(this, 23, value);
};


/**
 * optional string inviterUserID = 24;
 * @return {string}
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.getInviteruserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupRequestInfo} returns this
 */
proto.openim.sdk.group.GroupRequestInfo.prototype.setInviteruserid = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.group.CreateGroupReq.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.CreateGroupReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.CreateGroupReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.CreateGroupReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.CreateGroupReq.toObject = function(includeInstance, msg) {
  var f, obj = {
memberuseridsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
adminuseridsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
groupinfo: (f = msg.getGroupinfo()) && proto.openim.sdk.group.GroupInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.CreateGroupReq}
 */
proto.openim.sdk.group.CreateGroupReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.CreateGroupReq;
  return proto.openim.sdk.group.CreateGroupReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.CreateGroupReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.CreateGroupReq}
 */
proto.openim.sdk.group.CreateGroupReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addMemberuserids(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAdminuserids(value);
      break;
    case 3:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroupinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.CreateGroupReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.CreateGroupReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.CreateGroupReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.CreateGroupReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemberuseridsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getAdminuseridsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getGroupinfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string memberUserIDs = 1;
 * @return {!Array<string>}
 */
proto.openim.sdk.group.CreateGroupReq.prototype.getMemberuseridsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.group.CreateGroupReq} returns this
 */
proto.openim.sdk.group.CreateGroupReq.prototype.setMemberuseridsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.group.CreateGroupReq} returns this
 */
proto.openim.sdk.group.CreateGroupReq.prototype.addMemberuserids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.group.CreateGroupReq} returns this
 */
proto.openim.sdk.group.CreateGroupReq.prototype.clearMemberuseridsList = function() {
  return this.setMemberuseridsList([]);
};


/**
 * repeated string adminUserIDs = 2;
 * @return {!Array<string>}
 */
proto.openim.sdk.group.CreateGroupReq.prototype.getAdminuseridsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.group.CreateGroupReq} returns this
 */
proto.openim.sdk.group.CreateGroupReq.prototype.setAdminuseridsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.group.CreateGroupReq} returns this
 */
proto.openim.sdk.group.CreateGroupReq.prototype.addAdminuserids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.group.CreateGroupReq} returns this
 */
proto.openim.sdk.group.CreateGroupReq.prototype.clearAdminuseridsList = function() {
  return this.setAdminuseridsList([]);
};


/**
 * optional GroupInfo groupInfo = 3;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.CreateGroupReq.prototype.getGroupinfo = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupInfo, 3));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.group.CreateGroupReq} returns this
*/
proto.openim.sdk.group.CreateGroupReq.prototype.setGroupinfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.CreateGroupReq} returns this
 */
proto.openim.sdk.group.CreateGroupReq.prototype.clearGroupinfo = function() {
  return this.setGroupinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.CreateGroupReq.prototype.hasGroupinfo = function() {
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
proto.openim.sdk.group.CreateGroupResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.CreateGroupResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.CreateGroupResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.CreateGroupResp.toObject = function(includeInstance, msg) {
  var f, obj = {
groupinfo: (f = msg.getGroupinfo()) && proto.openim.sdk.group.GroupInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.CreateGroupResp}
 */
proto.openim.sdk.group.CreateGroupResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.CreateGroupResp;
  return proto.openim.sdk.group.CreateGroupResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.CreateGroupResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.CreateGroupResp}
 */
proto.openim.sdk.group.CreateGroupResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroupinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.CreateGroupResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.CreateGroupResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.CreateGroupResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.CreateGroupResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional GroupInfo groupInfo = 1;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.CreateGroupResp.prototype.getGroupinfo = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.group.CreateGroupResp} returns this
*/
proto.openim.sdk.group.CreateGroupResp.prototype.setGroupinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.CreateGroupResp} returns this
 */
proto.openim.sdk.group.CreateGroupResp.prototype.clearGroupinfo = function() {
  return this.setGroupinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.CreateGroupResp.prototype.hasGroupinfo = function() {
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
proto.openim.sdk.group.JoinGroupReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.JoinGroupReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.JoinGroupReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.JoinGroupReq.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, ""),
reqmessage: jspb.Message.getFieldWithDefault(msg, 2, ""),
joinsource: jspb.Message.getFieldWithDefault(msg, 3, 0),
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
 * @return {!proto.openim.sdk.group.JoinGroupReq}
 */
proto.openim.sdk.group.JoinGroupReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.JoinGroupReq;
  return proto.openim.sdk.group.JoinGroupReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.JoinGroupReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.JoinGroupReq}
 */
proto.openim.sdk.group.JoinGroupReq.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setReqmessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setJoinsource(value);
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
proto.openim.sdk.group.JoinGroupReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.JoinGroupReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.JoinGroupReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.JoinGroupReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReqmessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getJoinsource();
  if (f !== 0) {
    writer.writeInt32(
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
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.group.JoinGroupReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.JoinGroupReq} returns this
 */
proto.openim.sdk.group.JoinGroupReq.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string reqMessage = 2;
 * @return {string}
 */
proto.openim.sdk.group.JoinGroupReq.prototype.getReqmessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.JoinGroupReq} returns this
 */
proto.openim.sdk.group.JoinGroupReq.prototype.setReqmessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 joinSource = 3;
 * @return {number}
 */
proto.openim.sdk.group.JoinGroupReq.prototype.getJoinsource = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.JoinGroupReq} returns this
 */
proto.openim.sdk.group.JoinGroupReq.prototype.setJoinsource = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string ex = 4;
 * @return {string}
 */
proto.openim.sdk.group.JoinGroupReq.prototype.getEx = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.JoinGroupReq} returns this
 */
proto.openim.sdk.group.JoinGroupReq.prototype.setEx = function(value) {
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
proto.openim.sdk.group.JoinGroupResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.JoinGroupResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.JoinGroupResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.JoinGroupResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.group.JoinGroupResp}
 */
proto.openim.sdk.group.JoinGroupResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.JoinGroupResp;
  return proto.openim.sdk.group.JoinGroupResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.JoinGroupResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.JoinGroupResp}
 */
proto.openim.sdk.group.JoinGroupResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.group.JoinGroupResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.JoinGroupResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.JoinGroupResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.JoinGroupResp.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.group.QuitGroupReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.QuitGroupReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.QuitGroupReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.QuitGroupReq.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.QuitGroupReq}
 */
proto.openim.sdk.group.QuitGroupReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.QuitGroupReq;
  return proto.openim.sdk.group.QuitGroupReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.QuitGroupReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.QuitGroupReq}
 */
proto.openim.sdk.group.QuitGroupReq.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.QuitGroupReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.QuitGroupReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.QuitGroupReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.QuitGroupReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.group.QuitGroupReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.QuitGroupReq} returns this
 */
proto.openim.sdk.group.QuitGroupReq.prototype.setGroupid = function(value) {
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
proto.openim.sdk.group.QuitGroupResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.QuitGroupResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.QuitGroupResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.QuitGroupResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.group.QuitGroupResp}
 */
proto.openim.sdk.group.QuitGroupResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.QuitGroupResp;
  return proto.openim.sdk.group.QuitGroupResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.QuitGroupResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.QuitGroupResp}
 */
proto.openim.sdk.group.QuitGroupResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.group.QuitGroupResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.QuitGroupResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.QuitGroupResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.QuitGroupResp.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.group.DismissGroupReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.DismissGroupReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.DismissGroupReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.DismissGroupReq.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.DismissGroupReq}
 */
proto.openim.sdk.group.DismissGroupReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.DismissGroupReq;
  return proto.openim.sdk.group.DismissGroupReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.DismissGroupReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.DismissGroupReq}
 */
proto.openim.sdk.group.DismissGroupReq.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.DismissGroupReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.DismissGroupReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.DismissGroupReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.DismissGroupReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.group.DismissGroupReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.DismissGroupReq} returns this
 */
proto.openim.sdk.group.DismissGroupReq.prototype.setGroupid = function(value) {
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
proto.openim.sdk.group.DismissGroupResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.DismissGroupResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.DismissGroupResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.DismissGroupResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.group.DismissGroupResp}
 */
proto.openim.sdk.group.DismissGroupResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.DismissGroupResp;
  return proto.openim.sdk.group.DismissGroupResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.DismissGroupResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.DismissGroupResp}
 */
proto.openim.sdk.group.DismissGroupResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.group.DismissGroupResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.DismissGroupResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.DismissGroupResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.DismissGroupResp.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.group.ChangeGroupMuteReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.ChangeGroupMuteReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.ChangeGroupMuteReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.ChangeGroupMuteReq.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, ""),
mute: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.ChangeGroupMuteReq}
 */
proto.openim.sdk.group.ChangeGroupMuteReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.ChangeGroupMuteReq;
  return proto.openim.sdk.group.ChangeGroupMuteReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.ChangeGroupMuteReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.ChangeGroupMuteReq}
 */
proto.openim.sdk.group.ChangeGroupMuteReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMute(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.ChangeGroupMuteReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.ChangeGroupMuteReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.ChangeGroupMuteReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.ChangeGroupMuteReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMute();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.group.ChangeGroupMuteReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.ChangeGroupMuteReq} returns this
 */
proto.openim.sdk.group.ChangeGroupMuteReq.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool mute = 2;
 * @return {boolean}
 */
proto.openim.sdk.group.ChangeGroupMuteReq.prototype.getMute = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.group.ChangeGroupMuteReq} returns this
 */
proto.openim.sdk.group.ChangeGroupMuteReq.prototype.setMute = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.ChangeGroupMuteResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.ChangeGroupMuteResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.ChangeGroupMuteResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.ChangeGroupMuteResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.group.ChangeGroupMuteResp}
 */
proto.openim.sdk.group.ChangeGroupMuteResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.ChangeGroupMuteResp;
  return proto.openim.sdk.group.ChangeGroupMuteResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.ChangeGroupMuteResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.ChangeGroupMuteResp}
 */
proto.openim.sdk.group.ChangeGroupMuteResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.group.ChangeGroupMuteResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.ChangeGroupMuteResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.ChangeGroupMuteResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.ChangeGroupMuteResp.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.group.ChangeGroupMemberMuteReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.ChangeGroupMemberMuteReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.ChangeGroupMemberMuteReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.ChangeGroupMemberMuteReq.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, ""),
userid: jspb.Message.getFieldWithDefault(msg, 2, ""),
mutedseconds: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.ChangeGroupMemberMuteReq}
 */
proto.openim.sdk.group.ChangeGroupMemberMuteReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.ChangeGroupMemberMuteReq;
  return proto.openim.sdk.group.ChangeGroupMemberMuteReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.ChangeGroupMemberMuteReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.ChangeGroupMemberMuteReq}
 */
proto.openim.sdk.group.ChangeGroupMemberMuteReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMutedseconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.ChangeGroupMemberMuteReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.ChangeGroupMemberMuteReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.ChangeGroupMemberMuteReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.ChangeGroupMemberMuteReq.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getMutedseconds();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.group.ChangeGroupMemberMuteReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.ChangeGroupMemberMuteReq} returns this
 */
proto.openim.sdk.group.ChangeGroupMemberMuteReq.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string userID = 2;
 * @return {string}
 */
proto.openim.sdk.group.ChangeGroupMemberMuteReq.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.ChangeGroupMemberMuteReq} returns this
 */
proto.openim.sdk.group.ChangeGroupMemberMuteReq.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 mutedSeconds = 3;
 * @return {number}
 */
proto.openim.sdk.group.ChangeGroupMemberMuteReq.prototype.getMutedseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.ChangeGroupMemberMuteReq} returns this
 */
proto.openim.sdk.group.ChangeGroupMemberMuteReq.prototype.setMutedseconds = function(value) {
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
proto.openim.sdk.group.ChangeGroupMemberMuteResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.ChangeGroupMemberMuteResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.ChangeGroupMemberMuteResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.ChangeGroupMemberMuteResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.group.ChangeGroupMemberMuteResp}
 */
proto.openim.sdk.group.ChangeGroupMemberMuteResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.ChangeGroupMemberMuteResp;
  return proto.openim.sdk.group.ChangeGroupMemberMuteResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.ChangeGroupMemberMuteResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.ChangeGroupMemberMuteResp}
 */
proto.openim.sdk.group.ChangeGroupMemberMuteResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.group.ChangeGroupMemberMuteResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.ChangeGroupMemberMuteResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.ChangeGroupMemberMuteResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.ChangeGroupMemberMuteResp.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.group.TransferGroupOwnerReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.TransferGroupOwnerReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.TransferGroupOwnerReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.TransferGroupOwnerReq.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, ""),
owneruserid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.TransferGroupOwnerReq}
 */
proto.openim.sdk.group.TransferGroupOwnerReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.TransferGroupOwnerReq;
  return proto.openim.sdk.group.TransferGroupOwnerReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.TransferGroupOwnerReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.TransferGroupOwnerReq}
 */
proto.openim.sdk.group.TransferGroupOwnerReq.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setOwneruserid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.TransferGroupOwnerReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.TransferGroupOwnerReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.TransferGroupOwnerReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.TransferGroupOwnerReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOwneruserid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.group.TransferGroupOwnerReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.TransferGroupOwnerReq} returns this
 */
proto.openim.sdk.group.TransferGroupOwnerReq.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ownerUserID = 2;
 * @return {string}
 */
proto.openim.sdk.group.TransferGroupOwnerReq.prototype.getOwneruserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.TransferGroupOwnerReq} returns this
 */
proto.openim.sdk.group.TransferGroupOwnerReq.prototype.setOwneruserid = function(value) {
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
proto.openim.sdk.group.TransferGroupOwnerResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.TransferGroupOwnerResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.TransferGroupOwnerResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.TransferGroupOwnerResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.group.TransferGroupOwnerResp}
 */
proto.openim.sdk.group.TransferGroupOwnerResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.TransferGroupOwnerResp;
  return proto.openim.sdk.group.TransferGroupOwnerResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.TransferGroupOwnerResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.TransferGroupOwnerResp}
 */
proto.openim.sdk.group.TransferGroupOwnerResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.group.TransferGroupOwnerResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.TransferGroupOwnerResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.TransferGroupOwnerResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.TransferGroupOwnerResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.group.KickGroupMemberReq.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.KickGroupMemberReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.KickGroupMemberReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.KickGroupMemberReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.KickGroupMemberReq.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, ""),
kickeduseridsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
reason: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.KickGroupMemberReq}
 */
proto.openim.sdk.group.KickGroupMemberReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.KickGroupMemberReq;
  return proto.openim.sdk.group.KickGroupMemberReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.KickGroupMemberReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.KickGroupMemberReq}
 */
proto.openim.sdk.group.KickGroupMemberReq.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addKickeduserids(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.KickGroupMemberReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.KickGroupMemberReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.KickGroupMemberReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.KickGroupMemberReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKickeduseridsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.group.KickGroupMemberReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.KickGroupMemberReq} returns this
 */
proto.openim.sdk.group.KickGroupMemberReq.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string kickedUserIDs = 2;
 * @return {!Array<string>}
 */
proto.openim.sdk.group.KickGroupMemberReq.prototype.getKickeduseridsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.group.KickGroupMemberReq} returns this
 */
proto.openim.sdk.group.KickGroupMemberReq.prototype.setKickeduseridsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.group.KickGroupMemberReq} returns this
 */
proto.openim.sdk.group.KickGroupMemberReq.prototype.addKickeduserids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.group.KickGroupMemberReq} returns this
 */
proto.openim.sdk.group.KickGroupMemberReq.prototype.clearKickeduseridsList = function() {
  return this.setKickeduseridsList([]);
};


/**
 * optional string reason = 3;
 * @return {string}
 */
proto.openim.sdk.group.KickGroupMemberReq.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.KickGroupMemberReq} returns this
 */
proto.openim.sdk.group.KickGroupMemberReq.prototype.setReason = function(value) {
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
proto.openim.sdk.group.KickGroupMemberResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.KickGroupMemberResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.KickGroupMemberResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.KickGroupMemberResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.group.KickGroupMemberResp}
 */
proto.openim.sdk.group.KickGroupMemberResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.KickGroupMemberResp;
  return proto.openim.sdk.group.KickGroupMemberResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.KickGroupMemberResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.KickGroupMemberResp}
 */
proto.openim.sdk.group.KickGroupMemberResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.group.KickGroupMemberResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.KickGroupMemberResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.KickGroupMemberResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.KickGroupMemberResp.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.group.SetGroupInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.SetGroupInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.SetGroupInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.SetGroupInfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, ""),
groupname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
notification: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
introduction: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
faceurl: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
ex: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
needverification: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
lookmemberinfo: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
applymemberfriend: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.SetGroupInfoReq}
 */
proto.openim.sdk.group.SetGroupInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.SetGroupInfoReq;
  return proto.openim.sdk.group.SetGroupInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.SetGroupInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.SetGroupInfoReq}
 */
proto.openim.sdk.group.SetGroupInfoReq.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setGroupname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotification(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntroduction(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFaceurl(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEx(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNeedverification(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLookmemberinfo(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setApplymemberfriend(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.SetGroupInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.SetGroupInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.SetGroupInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.SetGroupInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string groupName = 2;
 * @return {string}
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.getGroupname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.SetGroupInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.setGroupname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.openim.sdk.group.SetGroupInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.clearGroupname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.hasGroupname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string notification = 3;
 * @return {string}
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.getNotification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.SetGroupInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.setNotification = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.openim.sdk.group.SetGroupInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.clearNotification = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.hasNotification = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string introduction = 4;
 * @return {string}
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.getIntroduction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.SetGroupInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.setIntroduction = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.openim.sdk.group.SetGroupInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.clearIntroduction = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.hasIntroduction = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string faceURL = 5;
 * @return {string}
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.getFaceurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.SetGroupInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.setFaceurl = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.openim.sdk.group.SetGroupInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.clearFaceurl = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.hasFaceurl = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string ex = 6;
 * @return {string}
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.getEx = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.SetGroupInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.setEx = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.openim.sdk.group.SetGroupInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.clearEx = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.hasEx = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 needVerification = 7;
 * @return {number}
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.getNeedverification = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.SetGroupInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.setNeedverification = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.openim.sdk.group.SetGroupInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.clearNeedverification = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.hasNeedverification = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 lookMemberInfo = 8;
 * @return {number}
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.getLookmemberinfo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.SetGroupInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.setLookmemberinfo = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.openim.sdk.group.SetGroupInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.clearLookmemberinfo = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.hasLookmemberinfo = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 applyMemberFriend = 9;
 * @return {number}
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.getApplymemberfriend = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.SetGroupInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.setApplymemberfriend = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.openim.sdk.group.SetGroupInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.clearApplymemberfriend = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.SetGroupInfoReq.prototype.hasApplymemberfriend = function() {
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
proto.openim.sdk.group.SetGroupInfoResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.SetGroupInfoResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.SetGroupInfoResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.SetGroupInfoResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.group.SetGroupInfoResp}
 */
proto.openim.sdk.group.SetGroupInfoResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.SetGroupInfoResp;
  return proto.openim.sdk.group.SetGroupInfoResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.SetGroupInfoResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.SetGroupInfoResp}
 */
proto.openim.sdk.group.SetGroupInfoResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.group.SetGroupInfoResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.SetGroupInfoResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.SetGroupInfoResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.SetGroupInfoResp.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.group.SetGroupMemberInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.SetGroupMemberInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.SetGroupMemberInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, ""),
userid: jspb.Message.getFieldWithDefault(msg, 2, ""),
nickname: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
faceurl: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
rolelevel: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
ex: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.SetGroupMemberInfoReq}
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.SetGroupMemberInfoReq;
  return proto.openim.sdk.group.SetGroupMemberInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.SetGroupMemberInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.SetGroupMemberInfoReq}
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNickname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFaceurl(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRolelevel(value);
      break;
    case 6:
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
proto.openim.sdk.group.SetGroupMemberInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.SetGroupMemberInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.SetGroupMemberInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.SetGroupMemberInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string userID = 2;
 * @return {string}
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.SetGroupMemberInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string nickname = 3;
 * @return {string}
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.SetGroupMemberInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.prototype.setNickname = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.openim.sdk.group.SetGroupMemberInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.prototype.clearNickname = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.prototype.hasNickname = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string faceURL = 4;
 * @return {string}
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.prototype.getFaceurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.SetGroupMemberInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.prototype.setFaceurl = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.openim.sdk.group.SetGroupMemberInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.prototype.clearFaceurl = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.prototype.hasFaceurl = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 roleLevel = 5;
 * @return {number}
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.prototype.getRolelevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.SetGroupMemberInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.prototype.setRolelevel = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.openim.sdk.group.SetGroupMemberInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.prototype.clearRolelevel = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.prototype.hasRolelevel = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string ex = 6;
 * @return {string}
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.prototype.getEx = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.SetGroupMemberInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.prototype.setEx = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.openim.sdk.group.SetGroupMemberInfoReq} returns this
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.prototype.clearEx = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.SetGroupMemberInfoReq.prototype.hasEx = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.SetGroupMemberInfoResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.SetGroupMemberInfoResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.SetGroupMemberInfoResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.SetGroupMemberInfoResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.group.SetGroupMemberInfoResp}
 */
proto.openim.sdk.group.SetGroupMemberInfoResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.SetGroupMemberInfoResp;
  return proto.openim.sdk.group.SetGroupMemberInfoResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.SetGroupMemberInfoResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.SetGroupMemberInfoResp}
 */
proto.openim.sdk.group.SetGroupMemberInfoResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.group.SetGroupMemberInfoResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.SetGroupMemberInfoResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.SetGroupMemberInfoResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.SetGroupMemberInfoResp.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.group.GetJoinedGroupsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GetJoinedGroupsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GetJoinedGroupsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetJoinedGroupsReq.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.group.GetJoinedGroupsReq}
 */
proto.openim.sdk.group.GetJoinedGroupsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GetJoinedGroupsReq;
  return proto.openim.sdk.group.GetJoinedGroupsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GetJoinedGroupsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GetJoinedGroupsReq}
 */
proto.openim.sdk.group.GetJoinedGroupsReq.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.group.GetJoinedGroupsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GetJoinedGroupsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GetJoinedGroupsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetJoinedGroupsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.group.GetJoinedGroupsResp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GetJoinedGroupsResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GetJoinedGroupsResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GetJoinedGroupsResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetJoinedGroupsResp.toObject = function(includeInstance, msg) {
  var f, obj = {
groupsList: jspb.Message.toObjectList(msg.getGroupsList(),
    proto.openim.sdk.group.GroupInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GetJoinedGroupsResp}
 */
proto.openim.sdk.group.GetJoinedGroupsResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GetJoinedGroupsResp;
  return proto.openim.sdk.group.GetJoinedGroupsResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GetJoinedGroupsResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GetJoinedGroupsResp}
 */
proto.openim.sdk.group.GetJoinedGroupsResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.addGroups(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GetJoinedGroupsResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GetJoinedGroupsResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GetJoinedGroupsResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetJoinedGroupsResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GroupInfo groups = 1;
 * @return {!Array<!proto.openim.sdk.group.GroupInfo>}
 */
proto.openim.sdk.group.GetJoinedGroupsResp.prototype.getGroupsList = function() {
  return /** @type{!Array<!proto.openim.sdk.group.GroupInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.group.GroupInfo, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.group.GroupInfo>} value
 * @return {!proto.openim.sdk.group.GetJoinedGroupsResp} returns this
*/
proto.openim.sdk.group.GetJoinedGroupsResp.prototype.setGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.group.GroupInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.GetJoinedGroupsResp.prototype.addGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.group.GroupInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.group.GetJoinedGroupsResp} returns this
 */
proto.openim.sdk.group.GetJoinedGroupsResp.prototype.clearGroupsList = function() {
  return this.setGroupsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GetJoinedGroupsPageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GetJoinedGroupsPageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GetJoinedGroupsPageReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetJoinedGroupsPageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
pagination: (f = msg.getPagination()) && common_pb.RequestPagination.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GetJoinedGroupsPageReq}
 */
proto.openim.sdk.group.GetJoinedGroupsPageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GetJoinedGroupsPageReq;
  return proto.openim.sdk.group.GetJoinedGroupsPageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GetJoinedGroupsPageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GetJoinedGroupsPageReq}
 */
proto.openim.sdk.group.GetJoinedGroupsPageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new common_pb.RequestPagination;
      reader.readMessage(value,common_pb.RequestPagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GetJoinedGroupsPageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GetJoinedGroupsPageReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GetJoinedGroupsPageReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetJoinedGroupsPageReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.RequestPagination.serializeBinaryToWriter
    );
  }
};


/**
 * optional openim.sdk.common.RequestPagination pagination = 2;
 * @return {?proto.openim.sdk.common.RequestPagination}
 */
proto.openim.sdk.group.GetJoinedGroupsPageReq.prototype.getPagination = function() {
  return /** @type{?proto.openim.sdk.common.RequestPagination} */ (
    jspb.Message.getWrapperField(this, common_pb.RequestPagination, 2));
};


/**
 * @param {?proto.openim.sdk.common.RequestPagination|undefined} value
 * @return {!proto.openim.sdk.group.GetJoinedGroupsPageReq} returns this
*/
proto.openim.sdk.group.GetJoinedGroupsPageReq.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GetJoinedGroupsPageReq} returns this
 */
proto.openim.sdk.group.GetJoinedGroupsPageReq.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GetJoinedGroupsPageReq.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.group.GetJoinedGroupsPageResp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GetJoinedGroupsPageResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GetJoinedGroupsPageResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GetJoinedGroupsPageResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetJoinedGroupsPageResp.toObject = function(includeInstance, msg) {
  var f, obj = {
groupsList: jspb.Message.toObjectList(msg.getGroupsList(),
    proto.openim.sdk.group.GroupInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GetJoinedGroupsPageResp}
 */
proto.openim.sdk.group.GetJoinedGroupsPageResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GetJoinedGroupsPageResp;
  return proto.openim.sdk.group.GetJoinedGroupsPageResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GetJoinedGroupsPageResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GetJoinedGroupsPageResp}
 */
proto.openim.sdk.group.GetJoinedGroupsPageResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.addGroups(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GetJoinedGroupsPageResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GetJoinedGroupsPageResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GetJoinedGroupsPageResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetJoinedGroupsPageResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GroupInfo groups = 1;
 * @return {!Array<!proto.openim.sdk.group.GroupInfo>}
 */
proto.openim.sdk.group.GetJoinedGroupsPageResp.prototype.getGroupsList = function() {
  return /** @type{!Array<!proto.openim.sdk.group.GroupInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.group.GroupInfo, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.group.GroupInfo>} value
 * @return {!proto.openim.sdk.group.GetJoinedGroupsPageResp} returns this
*/
proto.openim.sdk.group.GetJoinedGroupsPageResp.prototype.setGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.group.GroupInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.GetJoinedGroupsPageResp.prototype.addGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.group.GroupInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.group.GetJoinedGroupsPageResp} returns this
 */
proto.openim.sdk.group.GetJoinedGroupsPageResp.prototype.clearGroupsList = function() {
  return this.setGroupsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoReq.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GetSpecifiedGroupsInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GetSpecifiedGroupsInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
groupidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GetSpecifiedGroupsInfoReq}
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GetSpecifiedGroupsInfoReq;
  return proto.openim.sdk.group.GetSpecifiedGroupsInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GetSpecifiedGroupsInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GetSpecifiedGroupsInfoReq}
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addGroupids(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GetSpecifiedGroupsInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GetSpecifiedGroupsInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string groupIDs = 1;
 * @return {!Array<string>}
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoReq.prototype.getGroupidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.group.GetSpecifiedGroupsInfoReq} returns this
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoReq.prototype.setGroupidsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.group.GetSpecifiedGroupsInfoReq} returns this
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoReq.prototype.addGroupids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.group.GetSpecifiedGroupsInfoReq} returns this
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoReq.prototype.clearGroupidsList = function() {
  return this.setGroupidsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoResp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GetSpecifiedGroupsInfoResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GetSpecifiedGroupsInfoResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoResp.toObject = function(includeInstance, msg) {
  var f, obj = {
groupsList: jspb.Message.toObjectList(msg.getGroupsList(),
    proto.openim.sdk.group.GroupInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GetSpecifiedGroupsInfoResp}
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GetSpecifiedGroupsInfoResp;
  return proto.openim.sdk.group.GetSpecifiedGroupsInfoResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GetSpecifiedGroupsInfoResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GetSpecifiedGroupsInfoResp}
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.addGroups(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GetSpecifiedGroupsInfoResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GetSpecifiedGroupsInfoResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GroupInfo groups = 1;
 * @return {!Array<!proto.openim.sdk.group.GroupInfo>}
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoResp.prototype.getGroupsList = function() {
  return /** @type{!Array<!proto.openim.sdk.group.GroupInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.group.GroupInfo, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.group.GroupInfo>} value
 * @return {!proto.openim.sdk.group.GetSpecifiedGroupsInfoResp} returns this
*/
proto.openim.sdk.group.GetSpecifiedGroupsInfoResp.prototype.setGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.group.GroupInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoResp.prototype.addGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.group.GroupInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.group.GetSpecifiedGroupsInfoResp} returns this
 */
proto.openim.sdk.group.GetSpecifiedGroupsInfoResp.prototype.clearGroupsList = function() {
  return this.setGroupsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.SearchGroupsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.SearchGroupsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.SearchGroupsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.SearchGroupsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
keyword: jspb.Message.getFieldWithDefault(msg, 1, ""),
searchgroupid: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
searchgroupname: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.SearchGroupsReq}
 */
proto.openim.sdk.group.SearchGroupsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.SearchGroupsReq;
  return proto.openim.sdk.group.SearchGroupsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.SearchGroupsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.SearchGroupsReq}
 */
proto.openim.sdk.group.SearchGroupsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyword(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSearchgroupid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSearchgroupname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.SearchGroupsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.SearchGroupsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.SearchGroupsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.SearchGroupsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSearchgroupid();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSearchgroupname();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string keyword = 1;
 * @return {string}
 */
proto.openim.sdk.group.SearchGroupsReq.prototype.getKeyword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.SearchGroupsReq} returns this
 */
proto.openim.sdk.group.SearchGroupsReq.prototype.setKeyword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool searchGroupID = 2;
 * @return {boolean}
 */
proto.openim.sdk.group.SearchGroupsReq.prototype.getSearchgroupid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.group.SearchGroupsReq} returns this
 */
proto.openim.sdk.group.SearchGroupsReq.prototype.setSearchgroupid = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool searchGroupName = 3;
 * @return {boolean}
 */
proto.openim.sdk.group.SearchGroupsReq.prototype.getSearchgroupname = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.group.SearchGroupsReq} returns this
 */
proto.openim.sdk.group.SearchGroupsReq.prototype.setSearchgroupname = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.group.SearchGroupsResp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.SearchGroupsResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.SearchGroupsResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.SearchGroupsResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.SearchGroupsResp.toObject = function(includeInstance, msg) {
  var f, obj = {
groupsList: jspb.Message.toObjectList(msg.getGroupsList(),
    proto.openim.sdk.group.GroupInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.SearchGroupsResp}
 */
proto.openim.sdk.group.SearchGroupsResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.SearchGroupsResp;
  return proto.openim.sdk.group.SearchGroupsResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.SearchGroupsResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.SearchGroupsResp}
 */
proto.openim.sdk.group.SearchGroupsResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.addGroups(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.SearchGroupsResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.SearchGroupsResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.SearchGroupsResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.SearchGroupsResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GroupInfo groups = 1;
 * @return {!Array<!proto.openim.sdk.group.GroupInfo>}
 */
proto.openim.sdk.group.SearchGroupsResp.prototype.getGroupsList = function() {
  return /** @type{!Array<!proto.openim.sdk.group.GroupInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.group.GroupInfo, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.group.GroupInfo>} value
 * @return {!proto.openim.sdk.group.SearchGroupsResp} returns this
*/
proto.openim.sdk.group.SearchGroupsResp.prototype.setGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.group.GroupInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.SearchGroupsResp.prototype.addGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.group.GroupInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.group.SearchGroupsResp} returns this
 */
proto.openim.sdk.group.SearchGroupsResp.prototype.clearGroupsList = function() {
  return this.setGroupsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq}
 */
proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq;
  return proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq}
 */
proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq} returns this
 */
proto.openim.sdk.group.GetGroupMemberOwnerAndAdminReq.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp.toObject = function(includeInstance, msg) {
  var f, obj = {
membersList: jspb.Message.toObjectList(msg.getMembersList(),
    proto.openim.sdk.group.GroupMemberInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp}
 */
proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp;
  return proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp}
 */
proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.addMembers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GroupMemberInfo members = 1;
 * @return {!Array<!proto.openim.sdk.group.GroupMemberInfo>}
 */
proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp.prototype.getMembersList = function() {
  return /** @type{!Array<!proto.openim.sdk.group.GroupMemberInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.group.GroupMemberInfo>} value
 * @return {!proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp} returns this
*/
proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp.prototype.setMembersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.group.GroupMemberInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp.prototype.addMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.group.GroupMemberInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp} returns this
 */
proto.openim.sdk.group.GetGroupMemberOwnerAndAdminResp.prototype.clearMembersList = function() {
  return this.setMembersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, ""),
jointimebegin: jspb.Message.getFieldWithDefault(msg, 2, 0),
jointimeend: jspb.Message.getFieldWithDefault(msg, 3, 0),
pagination: (f = msg.getPagination()) && common_pb.RequestPagination.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq}
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq;
  return proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq}
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setJointimebegin(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setJointimeend(value);
      break;
    case 4:
      var value = new common_pb.RequestPagination;
      reader.readMessage(value,common_pb.RequestPagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getJointimebegin();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getJointimeend();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.RequestPagination.serializeBinaryToWriter
    );
  }
};


/**
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq} returns this
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 joinTimeBegin = 2;
 * @return {number}
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq.prototype.getJointimebegin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq} returns this
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq.prototype.setJointimebegin = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 joinTimeEnd = 3;
 * @return {number}
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq.prototype.getJointimeend = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq} returns this
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq.prototype.setJointimeend = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional openim.sdk.common.RequestPagination pagination = 4;
 * @return {?proto.openim.sdk.common.RequestPagination}
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq.prototype.getPagination = function() {
  return /** @type{?proto.openim.sdk.common.RequestPagination} */ (
    jspb.Message.getWrapperField(this, common_pb.RequestPagination, 4));
};


/**
 * @param {?proto.openim.sdk.common.RequestPagination|undefined} value
 * @return {!proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq} returns this
*/
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq} returns this
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterReq.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp.toObject = function(includeInstance, msg) {
  var f, obj = {
membersList: jspb.Message.toObjectList(msg.getMembersList(),
    proto.openim.sdk.group.GroupMemberInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp}
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp;
  return proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp}
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.addMembers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GroupMemberInfo members = 1;
 * @return {!Array<!proto.openim.sdk.group.GroupMemberInfo>}
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp.prototype.getMembersList = function() {
  return /** @type{!Array<!proto.openim.sdk.group.GroupMemberInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.group.GroupMemberInfo>} value
 * @return {!proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp} returns this
*/
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp.prototype.setMembersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.group.GroupMemberInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp.prototype.addMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.group.GroupMemberInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp} returns this
 */
proto.openim.sdk.group.GetGroupMembersByJoinTimeFilterResp.prototype.clearMembersList = function() {
  return this.setMembersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, ""),
useridsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq}
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq;
  return proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq}
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addUserids(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUseridsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq} returns this
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string userIDs = 2;
 * @return {!Array<string>}
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq.prototype.getUseridsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq} returns this
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq.prototype.setUseridsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq} returns this
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq.prototype.addUserids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq} returns this
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoReq.prototype.clearUseridsList = function() {
  return this.setUseridsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp.toObject = function(includeInstance, msg) {
  var f, obj = {
membersList: jspb.Message.toObjectList(msg.getMembersList(),
    proto.openim.sdk.group.GroupMemberInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp}
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp;
  return proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp}
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.addMembers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GroupMemberInfo members = 1;
 * @return {!Array<!proto.openim.sdk.group.GroupMemberInfo>}
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp.prototype.getMembersList = function() {
  return /** @type{!Array<!proto.openim.sdk.group.GroupMemberInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.group.GroupMemberInfo>} value
 * @return {!proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp} returns this
*/
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp.prototype.setMembersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.group.GroupMemberInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp.prototype.addMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.group.GroupMemberInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp} returns this
 */
proto.openim.sdk.group.GetSpecifiedGroupMembersInfoResp.prototype.clearMembersList = function() {
  return this.setMembersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GetGroupMembersReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GetGroupMembersReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GetGroupMembersReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetGroupMembersReq.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, ""),
filter: jspb.Message.getFieldWithDefault(msg, 2, 0),
pagination: (f = msg.getPagination()) && common_pb.RequestPagination.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GetGroupMembersReq}
 */
proto.openim.sdk.group.GetGroupMembersReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GetGroupMembersReq;
  return proto.openim.sdk.group.GetGroupMembersReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GetGroupMembersReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GetGroupMembersReq}
 */
proto.openim.sdk.group.GetGroupMembersReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.openim.sdk.group.GroupFilter} */ (reader.readEnum());
      msg.setFilter(value);
      break;
    case 4:
      var value = new common_pb.RequestPagination;
      reader.readMessage(value,common_pb.RequestPagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GetGroupMembersReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GetGroupMembersReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GetGroupMembersReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetGroupMembersReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilter();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.RequestPagination.serializeBinaryToWriter
    );
  }
};


/**
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.group.GetGroupMembersReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GetGroupMembersReq} returns this
 */
proto.openim.sdk.group.GetGroupMembersReq.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional GroupFilter filter = 2;
 * @return {!proto.openim.sdk.group.GroupFilter}
 */
proto.openim.sdk.group.GetGroupMembersReq.prototype.getFilter = function() {
  return /** @type {!proto.openim.sdk.group.GroupFilter} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.openim.sdk.group.GroupFilter} value
 * @return {!proto.openim.sdk.group.GetGroupMembersReq} returns this
 */
proto.openim.sdk.group.GetGroupMembersReq.prototype.setFilter = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional openim.sdk.common.RequestPagination pagination = 4;
 * @return {?proto.openim.sdk.common.RequestPagination}
 */
proto.openim.sdk.group.GetGroupMembersReq.prototype.getPagination = function() {
  return /** @type{?proto.openim.sdk.common.RequestPagination} */ (
    jspb.Message.getWrapperField(this, common_pb.RequestPagination, 4));
};


/**
 * @param {?proto.openim.sdk.common.RequestPagination|undefined} value
 * @return {!proto.openim.sdk.group.GetGroupMembersReq} returns this
*/
proto.openim.sdk.group.GetGroupMembersReq.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GetGroupMembersReq} returns this
 */
proto.openim.sdk.group.GetGroupMembersReq.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GetGroupMembersReq.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.group.GetGroupMembersResp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GetGroupMembersResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GetGroupMembersResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GetGroupMembersResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetGroupMembersResp.toObject = function(includeInstance, msg) {
  var f, obj = {
membersList: jspb.Message.toObjectList(msg.getMembersList(),
    proto.openim.sdk.group.GroupMemberInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GetGroupMembersResp}
 */
proto.openim.sdk.group.GetGroupMembersResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GetGroupMembersResp;
  return proto.openim.sdk.group.GetGroupMembersResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GetGroupMembersResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GetGroupMembersResp}
 */
proto.openim.sdk.group.GetGroupMembersResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.addMembers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GetGroupMembersResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GetGroupMembersResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GetGroupMembersResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetGroupMembersResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GroupMemberInfo members = 1;
 * @return {!Array<!proto.openim.sdk.group.GroupMemberInfo>}
 */
proto.openim.sdk.group.GetGroupMembersResp.prototype.getMembersList = function() {
  return /** @type{!Array<!proto.openim.sdk.group.GroupMemberInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.group.GroupMemberInfo>} value
 * @return {!proto.openim.sdk.group.GetGroupMembersResp} returns this
*/
proto.openim.sdk.group.GetGroupMembersResp.prototype.setMembersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.group.GroupMemberInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GetGroupMembersResp.prototype.addMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.group.GroupMemberInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.group.GetGroupMembersResp} returns this
 */
proto.openim.sdk.group.GetGroupMembersResp.prototype.clearMembersList = function() {
  return this.setMembersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GetGroupRequestReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GetGroupRequestReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GetGroupRequestReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetGroupRequestReq.toObject = function(includeInstance, msg) {
  var f, obj = {
send: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GetGroupRequestReq}
 */
proto.openim.sdk.group.GetGroupRequestReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GetGroupRequestReq;
  return proto.openim.sdk.group.GetGroupRequestReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GetGroupRequestReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GetGroupRequestReq}
 */
proto.openim.sdk.group.GetGroupRequestReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSend(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GetGroupRequestReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GetGroupRequestReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GetGroupRequestReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetGroupRequestReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSend();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool send = 1;
 * @return {boolean}
 */
proto.openim.sdk.group.GetGroupRequestReq.prototype.getSend = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.group.GetGroupRequestReq} returns this
 */
proto.openim.sdk.group.GetGroupRequestReq.prototype.setSend = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.group.GetGroupRequestResp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GetGroupRequestResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GetGroupRequestResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GetGroupRequestResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetGroupRequestResp.toObject = function(includeInstance, msg) {
  var f, obj = {
requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.openim.sdk.group.GroupRequestInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GetGroupRequestResp}
 */
proto.openim.sdk.group.GetGroupRequestResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GetGroupRequestResp;
  return proto.openim.sdk.group.GetGroupRequestResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GetGroupRequestResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GetGroupRequestResp}
 */
proto.openim.sdk.group.GetGroupRequestResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupRequestInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupRequestInfo.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GetGroupRequestResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GetGroupRequestResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GetGroupRequestResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetGroupRequestResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openim.sdk.group.GroupRequestInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GroupRequestInfo requests = 1;
 * @return {!Array<!proto.openim.sdk.group.GroupRequestInfo>}
 */
proto.openim.sdk.group.GetGroupRequestResp.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.openim.sdk.group.GroupRequestInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.group.GroupRequestInfo, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.group.GroupRequestInfo>} value
 * @return {!proto.openim.sdk.group.GetGroupRequestResp} returns this
*/
proto.openim.sdk.group.GetGroupRequestResp.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.group.GroupRequestInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.group.GroupRequestInfo}
 */
proto.openim.sdk.group.GetGroupRequestResp.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.group.GroupRequestInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.group.GetGroupRequestResp} returns this
 */
proto.openim.sdk.group.GetGroupRequestResp.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.SearchGroupMembersReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.SearchGroupMembersReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.SearchGroupMembersReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.SearchGroupMembersReq.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, ""),
keyword: jspb.Message.getFieldWithDefault(msg, 2, ""),
searchuserid: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
searchmembernickname: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
pagination: (f = msg.getPagination()) && common_pb.RequestPagination.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.SearchGroupMembersReq}
 */
proto.openim.sdk.group.SearchGroupMembersReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.SearchGroupMembersReq;
  return proto.openim.sdk.group.SearchGroupMembersReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.SearchGroupMembersReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.SearchGroupMembersReq}
 */
proto.openim.sdk.group.SearchGroupMembersReq.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setKeyword(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSearchuserid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSearchmembernickname(value);
      break;
    case 5:
      var value = new common_pb.RequestPagination;
      reader.readMessage(value,common_pb.RequestPagination.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.SearchGroupMembersReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.SearchGroupMembersReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.SearchGroupMembersReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.SearchGroupMembersReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKeyword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSearchuserid();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getSearchmembernickname();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.RequestPagination.serializeBinaryToWriter
    );
  }
};


/**
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.group.SearchGroupMembersReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.SearchGroupMembersReq} returns this
 */
proto.openim.sdk.group.SearchGroupMembersReq.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Keyword = 2;
 * @return {string}
 */
proto.openim.sdk.group.SearchGroupMembersReq.prototype.getKeyword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.SearchGroupMembersReq} returns this
 */
proto.openim.sdk.group.SearchGroupMembersReq.prototype.setKeyword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool searchUserID = 3;
 * @return {boolean}
 */
proto.openim.sdk.group.SearchGroupMembersReq.prototype.getSearchuserid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.group.SearchGroupMembersReq} returns this
 */
proto.openim.sdk.group.SearchGroupMembersReq.prototype.setSearchuserid = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool searchMemberNickname = 4;
 * @return {boolean}
 */
proto.openim.sdk.group.SearchGroupMembersReq.prototype.getSearchmembernickname = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.group.SearchGroupMembersReq} returns this
 */
proto.openim.sdk.group.SearchGroupMembersReq.prototype.setSearchmembernickname = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional openim.sdk.common.RequestPagination pagination = 5;
 * @return {?proto.openim.sdk.common.RequestPagination}
 */
proto.openim.sdk.group.SearchGroupMembersReq.prototype.getPagination = function() {
  return /** @type{?proto.openim.sdk.common.RequestPagination} */ (
    jspb.Message.getWrapperField(this, common_pb.RequestPagination, 5));
};


/**
 * @param {?proto.openim.sdk.common.RequestPagination|undefined} value
 * @return {!proto.openim.sdk.group.SearchGroupMembersReq} returns this
*/
proto.openim.sdk.group.SearchGroupMembersReq.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.SearchGroupMembersReq} returns this
 */
proto.openim.sdk.group.SearchGroupMembersReq.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.SearchGroupMembersReq.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.group.SearchGroupMembersResp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.SearchGroupMembersResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.SearchGroupMembersResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.SearchGroupMembersResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.SearchGroupMembersResp.toObject = function(includeInstance, msg) {
  var f, obj = {
membersList: jspb.Message.toObjectList(msg.getMembersList(),
    proto.openim.sdk.group.GroupMemberInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.SearchGroupMembersResp}
 */
proto.openim.sdk.group.SearchGroupMembersResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.SearchGroupMembersResp;
  return proto.openim.sdk.group.SearchGroupMembersResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.SearchGroupMembersResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.SearchGroupMembersResp}
 */
proto.openim.sdk.group.SearchGroupMembersResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.addMembers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.SearchGroupMembersResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.SearchGroupMembersResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.SearchGroupMembersResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.SearchGroupMembersResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GroupMemberInfo members = 1;
 * @return {!Array<!proto.openim.sdk.group.GroupMemberInfo>}
 */
proto.openim.sdk.group.SearchGroupMembersResp.prototype.getMembersList = function() {
  return /** @type{!Array<!proto.openim.sdk.group.GroupMemberInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 1));
};


/**
 * @param {!Array<!proto.openim.sdk.group.GroupMemberInfo>} value
 * @return {!proto.openim.sdk.group.SearchGroupMembersResp} returns this
*/
proto.openim.sdk.group.SearchGroupMembersResp.prototype.setMembersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.openim.sdk.group.GroupMemberInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.SearchGroupMembersResp.prototype.addMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.openim.sdk.group.GroupMemberInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.group.SearchGroupMembersResp} returns this
 */
proto.openim.sdk.group.SearchGroupMembersResp.prototype.clearMembersList = function() {
  return this.setMembersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.IsJoinGroupReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.IsJoinGroupReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.IsJoinGroupReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.IsJoinGroupReq.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, ""),
userid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.IsJoinGroupReq}
 */
proto.openim.sdk.group.IsJoinGroupReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.IsJoinGroupReq;
  return proto.openim.sdk.group.IsJoinGroupReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.IsJoinGroupReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.IsJoinGroupReq}
 */
proto.openim.sdk.group.IsJoinGroupReq.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.IsJoinGroupReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.IsJoinGroupReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.IsJoinGroupReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.IsJoinGroupReq.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.group.IsJoinGroupReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.IsJoinGroupReq} returns this
 */
proto.openim.sdk.group.IsJoinGroupReq.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string userID = 2;
 * @return {string}
 */
proto.openim.sdk.group.IsJoinGroupReq.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.IsJoinGroupReq} returns this
 */
proto.openim.sdk.group.IsJoinGroupReq.prototype.setUserid = function(value) {
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
proto.openim.sdk.group.IsJoinGroupResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.IsJoinGroupResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.IsJoinGroupResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.IsJoinGroupResp.toObject = function(includeInstance, msg) {
  var f, obj = {
joined: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.IsJoinGroupResp}
 */
proto.openim.sdk.group.IsJoinGroupResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.IsJoinGroupResp;
  return proto.openim.sdk.group.IsJoinGroupResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.IsJoinGroupResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.IsJoinGroupResp}
 */
proto.openim.sdk.group.IsJoinGroupResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setJoined(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.IsJoinGroupResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.IsJoinGroupResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.IsJoinGroupResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.IsJoinGroupResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJoined();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool joined = 1;
 * @return {boolean}
 */
proto.openim.sdk.group.IsJoinGroupResp.prototype.getJoined = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.openim.sdk.group.IsJoinGroupResp} returns this
 */
proto.openim.sdk.group.IsJoinGroupResp.prototype.setJoined = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.group.GetUsersInGroupReq.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GetUsersInGroupReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GetUsersInGroupReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GetUsersInGroupReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetUsersInGroupReq.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, ""),
useridsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GetUsersInGroupReq}
 */
proto.openim.sdk.group.GetUsersInGroupReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GetUsersInGroupReq;
  return proto.openim.sdk.group.GetUsersInGroupReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GetUsersInGroupReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GetUsersInGroupReq}
 */
proto.openim.sdk.group.GetUsersInGroupReq.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addUserids(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GetUsersInGroupReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GetUsersInGroupReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GetUsersInGroupReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetUsersInGroupReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUseridsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.group.GetUsersInGroupReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GetUsersInGroupReq} returns this
 */
proto.openim.sdk.group.GetUsersInGroupReq.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string userIDs = 2;
 * @return {!Array<string>}
 */
proto.openim.sdk.group.GetUsersInGroupReq.prototype.getUseridsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.group.GetUsersInGroupReq} returns this
 */
proto.openim.sdk.group.GetUsersInGroupReq.prototype.setUseridsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.group.GetUsersInGroupReq} returns this
 */
proto.openim.sdk.group.GetUsersInGroupReq.prototype.addUserids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.group.GetUsersInGroupReq} returns this
 */
proto.openim.sdk.group.GetUsersInGroupReq.prototype.clearUseridsList = function() {
  return this.setUseridsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.group.GetUsersInGroupResp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GetUsersInGroupResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GetUsersInGroupResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GetUsersInGroupResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetUsersInGroupResp.toObject = function(includeInstance, msg) {
  var f, obj = {
useridsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GetUsersInGroupResp}
 */
proto.openim.sdk.group.GetUsersInGroupResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GetUsersInGroupResp;
  return proto.openim.sdk.group.GetUsersInGroupResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GetUsersInGroupResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GetUsersInGroupResp}
 */
proto.openim.sdk.group.GetUsersInGroupResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addUserids(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GetUsersInGroupResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GetUsersInGroupResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GetUsersInGroupResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetUsersInGroupResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUseridsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string userIDs = 1;
 * @return {!Array<string>}
 */
proto.openim.sdk.group.GetUsersInGroupResp.prototype.getUseridsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.group.GetUsersInGroupResp} returns this
 */
proto.openim.sdk.group.GetUsersInGroupResp.prototype.setUseridsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.group.GetUsersInGroupResp} returns this
 */
proto.openim.sdk.group.GetUsersInGroupResp.prototype.addUserids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.group.GetUsersInGroupResp} returns this
 */
proto.openim.sdk.group.GetUsersInGroupResp.prototype.clearUseridsList = function() {
  return this.setUseridsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.group.InviteUserToGroupReq.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.InviteUserToGroupReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.InviteUserToGroupReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.InviteUserToGroupReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.InviteUserToGroupReq.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, ""),
useridsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
reason: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.InviteUserToGroupReq}
 */
proto.openim.sdk.group.InviteUserToGroupReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.InviteUserToGroupReq;
  return proto.openim.sdk.group.InviteUserToGroupReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.InviteUserToGroupReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.InviteUserToGroupReq}
 */
proto.openim.sdk.group.InviteUserToGroupReq.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addUserids(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.InviteUserToGroupReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.InviteUserToGroupReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.InviteUserToGroupReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.InviteUserToGroupReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUseridsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.group.InviteUserToGroupReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.InviteUserToGroupReq} returns this
 */
proto.openim.sdk.group.InviteUserToGroupReq.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string userIDs = 2;
 * @return {!Array<string>}
 */
proto.openim.sdk.group.InviteUserToGroupReq.prototype.getUseridsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.group.InviteUserToGroupReq} returns this
 */
proto.openim.sdk.group.InviteUserToGroupReq.prototype.setUseridsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.group.InviteUserToGroupReq} returns this
 */
proto.openim.sdk.group.InviteUserToGroupReq.prototype.addUserids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.group.InviteUserToGroupReq} returns this
 */
proto.openim.sdk.group.InviteUserToGroupReq.prototype.clearUseridsList = function() {
  return this.setUseridsList([]);
};


/**
 * optional string reason = 3;
 * @return {string}
 */
proto.openim.sdk.group.InviteUserToGroupReq.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.InviteUserToGroupReq} returns this
 */
proto.openim.sdk.group.InviteUserToGroupReq.prototype.setReason = function(value) {
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
proto.openim.sdk.group.InviteUserToGroupResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.InviteUserToGroupResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.InviteUserToGroupResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.InviteUserToGroupResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.group.InviteUserToGroupResp}
 */
proto.openim.sdk.group.InviteUserToGroupResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.InviteUserToGroupResp;
  return proto.openim.sdk.group.InviteUserToGroupResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.InviteUserToGroupResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.InviteUserToGroupResp}
 */
proto.openim.sdk.group.InviteUserToGroupResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.group.InviteUserToGroupResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.InviteUserToGroupResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.InviteUserToGroupResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.InviteUserToGroupResp.serializeBinaryToWriter = function(message, writer) {
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
proto.openim.sdk.group.HandlerGroupRequestReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.HandlerGroupRequestReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.HandlerGroupRequestReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.HandlerGroupRequestReq.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, ""),
fromuserid: jspb.Message.getFieldWithDefault(msg, 2, ""),
handledmsg: jspb.Message.getFieldWithDefault(msg, 3, ""),
status: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.HandlerGroupRequestReq}
 */
proto.openim.sdk.group.HandlerGroupRequestReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.HandlerGroupRequestReq;
  return proto.openim.sdk.group.HandlerGroupRequestReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.HandlerGroupRequestReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.HandlerGroupRequestReq}
 */
proto.openim.sdk.group.HandlerGroupRequestReq.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setFromuserid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHandledmsg(value);
      break;
    case 4:
      var value = /** @type {!proto.openim.sdk.common.ApprovalStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.HandlerGroupRequestReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.HandlerGroupRequestReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.HandlerGroupRequestReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.HandlerGroupRequestReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFromuserid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHandledmsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.group.HandlerGroupRequestReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.HandlerGroupRequestReq} returns this
 */
proto.openim.sdk.group.HandlerGroupRequestReq.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string fromUserID = 2;
 * @return {string}
 */
proto.openim.sdk.group.HandlerGroupRequestReq.prototype.getFromuserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.HandlerGroupRequestReq} returns this
 */
proto.openim.sdk.group.HandlerGroupRequestReq.prototype.setFromuserid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string handledMsg = 3;
 * @return {string}
 */
proto.openim.sdk.group.HandlerGroupRequestReq.prototype.getHandledmsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.HandlerGroupRequestReq} returns this
 */
proto.openim.sdk.group.HandlerGroupRequestReq.prototype.setHandledmsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional openim.sdk.common.ApprovalStatus status = 4;
 * @return {!proto.openim.sdk.common.ApprovalStatus}
 */
proto.openim.sdk.group.HandlerGroupRequestReq.prototype.getStatus = function() {
  return /** @type {!proto.openim.sdk.common.ApprovalStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.openim.sdk.common.ApprovalStatus} value
 * @return {!proto.openim.sdk.group.HandlerGroupRequestReq} returns this
 */
proto.openim.sdk.group.HandlerGroupRequestReq.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.HandlerGroupRequestResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.HandlerGroupRequestResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.HandlerGroupRequestResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.HandlerGroupRequestResp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.openim.sdk.group.HandlerGroupRequestResp}
 */
proto.openim.sdk.group.HandlerGroupRequestResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.HandlerGroupRequestResp;
  return proto.openim.sdk.group.HandlerGroupRequestResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.HandlerGroupRequestResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.HandlerGroupRequestResp}
 */
proto.openim.sdk.group.HandlerGroupRequestResp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.openim.sdk.group.HandlerGroupRequestResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.HandlerGroupRequestResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.HandlerGroupRequestResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.HandlerGroupRequestResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.group.GetGroupMemberInfoReq.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GetGroupMemberInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GetGroupMemberInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GetGroupMemberInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetGroupMemberInfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
groupid: jspb.Message.getFieldWithDefault(msg, 1, ""),
useridsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GetGroupMemberInfoReq}
 */
proto.openim.sdk.group.GetGroupMemberInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GetGroupMemberInfoReq;
  return proto.openim.sdk.group.GetGroupMemberInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GetGroupMemberInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GetGroupMemberInfoReq}
 */
proto.openim.sdk.group.GetGroupMemberInfoReq.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addUserids(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GetGroupMemberInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GetGroupMemberInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GetGroupMemberInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetGroupMemberInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUseridsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string groupID = 1;
 * @return {string}
 */
proto.openim.sdk.group.GetGroupMemberInfoReq.prototype.getGroupid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GetGroupMemberInfoReq} returns this
 */
proto.openim.sdk.group.GetGroupMemberInfoReq.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string userIDs = 2;
 * @return {!Array<string>}
 */
proto.openim.sdk.group.GetGroupMemberInfoReq.prototype.getUseridsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.openim.sdk.group.GetGroupMemberInfoReq} returns this
 */
proto.openim.sdk.group.GetGroupMemberInfoReq.prototype.setUseridsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.group.GetGroupMemberInfoReq} returns this
 */
proto.openim.sdk.group.GetGroupMemberInfoReq.prototype.addUserids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.group.GetGroupMemberInfoReq} returns this
 */
proto.openim.sdk.group.GetGroupMemberInfoReq.prototype.clearUseridsList = function() {
  return this.setUseridsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GetGroupMemberInfoResp.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GetGroupMemberInfoResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GetGroupMemberInfoResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetGroupMemberInfoResp.toObject = function(includeInstance, msg) {
  var f, obj = {
membersMap: (f = msg.getMembersMap()) ? f.toObject(includeInstance, proto.openim.sdk.group.GroupMemberInfo.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GetGroupMemberInfoResp}
 */
proto.openim.sdk.group.GetGroupMemberInfoResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GetGroupMemberInfoResp;
  return proto.openim.sdk.group.GetGroupMemberInfoResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GetGroupMemberInfoResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GetGroupMemberInfoResp}
 */
proto.openim.sdk.group.GetGroupMemberInfoResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getMembersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader, "", new proto.openim.sdk.group.GroupMemberInfo());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GetGroupMemberInfoResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GetGroupMemberInfoResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GetGroupMemberInfoResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GetGroupMemberInfoResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMembersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter);
  }
};


/**
 * map<string, GroupMemberInfo> members = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.openim.sdk.group.GroupMemberInfo>}
 */
proto.openim.sdk.group.GetGroupMemberInfoResp.prototype.getMembersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.openim.sdk.group.GroupMemberInfo>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.openim.sdk.group.GroupMemberInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.openim.sdk.group.GetGroupMemberInfoResp} returns this
 */
proto.openim.sdk.group.GetGroupMemberInfoResp.prototype.clearMembersMap = function() {
  this.getMembersMap().clear();
  return this;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.group.GroupCreatedTips.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GroupCreatedTips.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GroupCreatedTips.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GroupCreatedTips} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupCreatedTips.toObject = function(includeInstance, msg) {
  var f, obj = {
group: (f = msg.getGroup()) && proto.openim.sdk.group.GroupInfo.toObject(includeInstance, f),
opuser: (f = msg.getOpuser()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
memberlistList: jspb.Message.toObjectList(msg.getMemberlistList(),
    proto.openim.sdk.group.GroupMemberInfo.toObject, includeInstance),
operationtime: jspb.Message.getFieldWithDefault(msg, 4, 0),
groupowneruser: (f = msg.getGroupowneruser()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
groupmemberversion: jspb.Message.getFieldWithDefault(msg, 6, 0),
groupmemberversionid: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GroupCreatedTips}
 */
proto.openim.sdk.group.GroupCreatedTips.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GroupCreatedTips;
  return proto.openim.sdk.group.GroupCreatedTips.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GroupCreatedTips} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GroupCreatedTips}
 */
proto.openim.sdk.group.GroupCreatedTips.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 2:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setOpuser(value);
      break;
    case 3:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.addMemberlist(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOperationtime(value);
      break;
    case 5:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setGroupowneruser(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGroupmemberversion(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupmemberversionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GroupCreatedTips.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GroupCreatedTips.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GroupCreatedTips} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupCreatedTips.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getOpuser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getMemberlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getOperationtime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getGroupowneruser();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getGroupmemberversion();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getGroupmemberversionid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional GroupInfo group = 1;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.GroupCreatedTips.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupCreatedTips} returns this
*/
proto.openim.sdk.group.GroupCreatedTips.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupCreatedTips} returns this
 */
proto.openim.sdk.group.GroupCreatedTips.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupCreatedTips.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GroupMemberInfo opUser = 2;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GroupCreatedTips.prototype.getOpuser = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 2));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupCreatedTips} returns this
*/
proto.openim.sdk.group.GroupCreatedTips.prototype.setOpuser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupCreatedTips} returns this
 */
proto.openim.sdk.group.GroupCreatedTips.prototype.clearOpuser = function() {
  return this.setOpuser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupCreatedTips.prototype.hasOpuser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated GroupMemberInfo memberList = 3;
 * @return {!Array<!proto.openim.sdk.group.GroupMemberInfo>}
 */
proto.openim.sdk.group.GroupCreatedTips.prototype.getMemberlistList = function() {
  return /** @type{!Array<!proto.openim.sdk.group.GroupMemberInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 3));
};


/**
 * @param {!Array<!proto.openim.sdk.group.GroupMemberInfo>} value
 * @return {!proto.openim.sdk.group.GroupCreatedTips} returns this
*/
proto.openim.sdk.group.GroupCreatedTips.prototype.setMemberlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.openim.sdk.group.GroupMemberInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GroupCreatedTips.prototype.addMemberlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.openim.sdk.group.GroupMemberInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.group.GroupCreatedTips} returns this
 */
proto.openim.sdk.group.GroupCreatedTips.prototype.clearMemberlistList = function() {
  return this.setMemberlistList([]);
};


/**
 * optional int64 operationTime = 4;
 * @return {number}
 */
proto.openim.sdk.group.GroupCreatedTips.prototype.getOperationtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupCreatedTips} returns this
 */
proto.openim.sdk.group.GroupCreatedTips.prototype.setOperationtime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional GroupMemberInfo groupOwnerUser = 5;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GroupCreatedTips.prototype.getGroupowneruser = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 5));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupCreatedTips} returns this
*/
proto.openim.sdk.group.GroupCreatedTips.prototype.setGroupowneruser = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupCreatedTips} returns this
 */
proto.openim.sdk.group.GroupCreatedTips.prototype.clearGroupowneruser = function() {
  return this.setGroupowneruser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupCreatedTips.prototype.hasGroupowneruser = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint64 groupMemberVersion = 6;
 * @return {number}
 */
proto.openim.sdk.group.GroupCreatedTips.prototype.getGroupmemberversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupCreatedTips} returns this
 */
proto.openim.sdk.group.GroupCreatedTips.prototype.setGroupmemberversion = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string groupMemberVersionID = 7;
 * @return {string}
 */
proto.openim.sdk.group.GroupCreatedTips.prototype.getGroupmemberversionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupCreatedTips} returns this
 */
proto.openim.sdk.group.GroupCreatedTips.prototype.setGroupmemberversionid = function(value) {
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
proto.openim.sdk.group.GroupInfoSetTips.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GroupInfoSetTips.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GroupInfoSetTips} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupInfoSetTips.toObject = function(includeInstance, msg) {
  var f, obj = {
opuser: (f = msg.getOpuser()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
mutetime: jspb.Message.getFieldWithDefault(msg, 2, 0),
group: (f = msg.getGroup()) && proto.openim.sdk.group.GroupInfo.toObject(includeInstance, f),
groupmemberversion: jspb.Message.getFieldWithDefault(msg, 4, 0),
groupmemberversionid: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GroupInfoSetTips}
 */
proto.openim.sdk.group.GroupInfoSetTips.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GroupInfoSetTips;
  return proto.openim.sdk.group.GroupInfoSetTips.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GroupInfoSetTips} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GroupInfoSetTips}
 */
proto.openim.sdk.group.GroupInfoSetTips.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setOpuser(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMutetime(value);
      break;
    case 3:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGroupmemberversion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupmemberversionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GroupInfoSetTips.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GroupInfoSetTips.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GroupInfoSetTips} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupInfoSetTips.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpuser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getMutetime();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getGroupmemberversion();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getGroupmemberversionid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional GroupMemberInfo opUser = 1;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GroupInfoSetTips.prototype.getOpuser = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupInfoSetTips} returns this
*/
proto.openim.sdk.group.GroupInfoSetTips.prototype.setOpuser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupInfoSetTips} returns this
 */
proto.openim.sdk.group.GroupInfoSetTips.prototype.clearOpuser = function() {
  return this.setOpuser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupInfoSetTips.prototype.hasOpuser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 muteTime = 2;
 * @return {number}
 */
proto.openim.sdk.group.GroupInfoSetTips.prototype.getMutetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupInfoSetTips} returns this
 */
proto.openim.sdk.group.GroupInfoSetTips.prototype.setMutetime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional GroupInfo group = 3;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.GroupInfoSetTips.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupInfo, 3));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupInfoSetTips} returns this
*/
proto.openim.sdk.group.GroupInfoSetTips.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupInfoSetTips} returns this
 */
proto.openim.sdk.group.GroupInfoSetTips.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupInfoSetTips.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 groupMemberVersion = 4;
 * @return {number}
 */
proto.openim.sdk.group.GroupInfoSetTips.prototype.getGroupmemberversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupInfoSetTips} returns this
 */
proto.openim.sdk.group.GroupInfoSetTips.prototype.setGroupmemberversion = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string groupMemberVersionID = 5;
 * @return {string}
 */
proto.openim.sdk.group.GroupInfoSetTips.prototype.getGroupmemberversionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupInfoSetTips} returns this
 */
proto.openim.sdk.group.GroupInfoSetTips.prototype.setGroupmemberversionid = function(value) {
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
proto.openim.sdk.group.GroupInfoSetNameTips.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GroupInfoSetNameTips.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GroupInfoSetNameTips} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupInfoSetNameTips.toObject = function(includeInstance, msg) {
  var f, obj = {
opuser: (f = msg.getOpuser()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
group: (f = msg.getGroup()) && proto.openim.sdk.group.GroupInfo.toObject(includeInstance, f),
groupmemberversion: jspb.Message.getFieldWithDefault(msg, 3, 0),
groupmemberversionid: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GroupInfoSetNameTips}
 */
proto.openim.sdk.group.GroupInfoSetNameTips.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GroupInfoSetNameTips;
  return proto.openim.sdk.group.GroupInfoSetNameTips.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GroupInfoSetNameTips} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GroupInfoSetNameTips}
 */
proto.openim.sdk.group.GroupInfoSetNameTips.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setOpuser(value);
      break;
    case 2:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGroupmemberversion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupmemberversionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GroupInfoSetNameTips.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GroupInfoSetNameTips.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GroupInfoSetNameTips} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupInfoSetNameTips.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpuser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getGroupmemberversion();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getGroupmemberversionid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional GroupMemberInfo opUser = 1;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GroupInfoSetNameTips.prototype.getOpuser = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupInfoSetNameTips} returns this
*/
proto.openim.sdk.group.GroupInfoSetNameTips.prototype.setOpuser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupInfoSetNameTips} returns this
 */
proto.openim.sdk.group.GroupInfoSetNameTips.prototype.clearOpuser = function() {
  return this.setOpuser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupInfoSetNameTips.prototype.hasOpuser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GroupInfo group = 2;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.GroupInfoSetNameTips.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupInfo, 2));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupInfoSetNameTips} returns this
*/
proto.openim.sdk.group.GroupInfoSetNameTips.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupInfoSetNameTips} returns this
 */
proto.openim.sdk.group.GroupInfoSetNameTips.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupInfoSetNameTips.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 groupMemberVersion = 3;
 * @return {number}
 */
proto.openim.sdk.group.GroupInfoSetNameTips.prototype.getGroupmemberversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupInfoSetNameTips} returns this
 */
proto.openim.sdk.group.GroupInfoSetNameTips.prototype.setGroupmemberversion = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string groupMemberVersionID = 4;
 * @return {string}
 */
proto.openim.sdk.group.GroupInfoSetNameTips.prototype.getGroupmemberversionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupInfoSetNameTips} returns this
 */
proto.openim.sdk.group.GroupInfoSetNameTips.prototype.setGroupmemberversionid = function(value) {
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
proto.openim.sdk.group.GroupInfoSetAnnouncementTips.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GroupInfoSetAnnouncementTips.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GroupInfoSetAnnouncementTips} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupInfoSetAnnouncementTips.toObject = function(includeInstance, msg) {
  var f, obj = {
opuser: (f = msg.getOpuser()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
group: (f = msg.getGroup()) && proto.openim.sdk.group.GroupInfo.toObject(includeInstance, f),
groupmemberversion: jspb.Message.getFieldWithDefault(msg, 3, 0),
groupmemberversionid: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GroupInfoSetAnnouncementTips}
 */
proto.openim.sdk.group.GroupInfoSetAnnouncementTips.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GroupInfoSetAnnouncementTips;
  return proto.openim.sdk.group.GroupInfoSetAnnouncementTips.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GroupInfoSetAnnouncementTips} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GroupInfoSetAnnouncementTips}
 */
proto.openim.sdk.group.GroupInfoSetAnnouncementTips.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setOpuser(value);
      break;
    case 2:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGroupmemberversion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupmemberversionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GroupInfoSetAnnouncementTips.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GroupInfoSetAnnouncementTips.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GroupInfoSetAnnouncementTips} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupInfoSetAnnouncementTips.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpuser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getGroupmemberversion();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getGroupmemberversionid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional GroupMemberInfo opUser = 1;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GroupInfoSetAnnouncementTips.prototype.getOpuser = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupInfoSetAnnouncementTips} returns this
*/
proto.openim.sdk.group.GroupInfoSetAnnouncementTips.prototype.setOpuser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupInfoSetAnnouncementTips} returns this
 */
proto.openim.sdk.group.GroupInfoSetAnnouncementTips.prototype.clearOpuser = function() {
  return this.setOpuser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupInfoSetAnnouncementTips.prototype.hasOpuser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GroupInfo group = 2;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.GroupInfoSetAnnouncementTips.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupInfo, 2));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupInfoSetAnnouncementTips} returns this
*/
proto.openim.sdk.group.GroupInfoSetAnnouncementTips.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupInfoSetAnnouncementTips} returns this
 */
proto.openim.sdk.group.GroupInfoSetAnnouncementTips.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupInfoSetAnnouncementTips.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 groupMemberVersion = 3;
 * @return {number}
 */
proto.openim.sdk.group.GroupInfoSetAnnouncementTips.prototype.getGroupmemberversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupInfoSetAnnouncementTips} returns this
 */
proto.openim.sdk.group.GroupInfoSetAnnouncementTips.prototype.setGroupmemberversion = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string groupMemberVersionID = 4;
 * @return {string}
 */
proto.openim.sdk.group.GroupInfoSetAnnouncementTips.prototype.getGroupmemberversionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupInfoSetAnnouncementTips} returns this
 */
proto.openim.sdk.group.GroupInfoSetAnnouncementTips.prototype.setGroupmemberversionid = function(value) {
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
proto.openim.sdk.group.JoinGroupApplicationTips.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.JoinGroupApplicationTips.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.JoinGroupApplicationTips} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.JoinGroupApplicationTips.toObject = function(includeInstance, msg) {
  var f, obj = {
group: (f = msg.getGroup()) && proto.openim.sdk.group.GroupInfo.toObject(includeInstance, f),
applicant: (f = msg.getApplicant()) && user_pb.UserInfo.toObject(includeInstance, f),
reqmsg: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.JoinGroupApplicationTips}
 */
proto.openim.sdk.group.JoinGroupApplicationTips.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.JoinGroupApplicationTips;
  return proto.openim.sdk.group.JoinGroupApplicationTips.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.JoinGroupApplicationTips} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.JoinGroupApplicationTips}
 */
proto.openim.sdk.group.JoinGroupApplicationTips.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 2:
      var value = new user_pb.UserInfo;
      reader.readMessage(value,user_pb.UserInfo.deserializeBinaryFromReader);
      msg.setApplicant(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReqmsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.JoinGroupApplicationTips.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.JoinGroupApplicationTips.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.JoinGroupApplicationTips} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.JoinGroupApplicationTips.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getApplicant();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      user_pb.UserInfo.serializeBinaryToWriter
    );
  }
  f = message.getReqmsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional GroupInfo group = 1;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.JoinGroupApplicationTips.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.group.JoinGroupApplicationTips} returns this
*/
proto.openim.sdk.group.JoinGroupApplicationTips.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.JoinGroupApplicationTips} returns this
 */
proto.openim.sdk.group.JoinGroupApplicationTips.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.JoinGroupApplicationTips.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional openim.sdk.user.UserInfo applicant = 2;
 * @return {?proto.openim.sdk.user.UserInfo}
 */
proto.openim.sdk.group.JoinGroupApplicationTips.prototype.getApplicant = function() {
  return /** @type{?proto.openim.sdk.user.UserInfo} */ (
    jspb.Message.getWrapperField(this, user_pb.UserInfo, 2));
};


/**
 * @param {?proto.openim.sdk.user.UserInfo|undefined} value
 * @return {!proto.openim.sdk.group.JoinGroupApplicationTips} returns this
*/
proto.openim.sdk.group.JoinGroupApplicationTips.prototype.setApplicant = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.JoinGroupApplicationTips} returns this
 */
proto.openim.sdk.group.JoinGroupApplicationTips.prototype.clearApplicant = function() {
  return this.setApplicant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.JoinGroupApplicationTips.prototype.hasApplicant = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string reqMsg = 3;
 * @return {string}
 */
proto.openim.sdk.group.JoinGroupApplicationTips.prototype.getReqmsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.JoinGroupApplicationTips} returns this
 */
proto.openim.sdk.group.JoinGroupApplicationTips.prototype.setReqmsg = function(value) {
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
proto.openim.sdk.group.MemberQuitTips.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.MemberQuitTips.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.MemberQuitTips} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.MemberQuitTips.toObject = function(includeInstance, msg) {
  var f, obj = {
group: (f = msg.getGroup()) && proto.openim.sdk.group.GroupInfo.toObject(includeInstance, f),
quituser: (f = msg.getQuituser()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
operationtime: jspb.Message.getFieldWithDefault(msg, 3, 0),
groupmemberversion: jspb.Message.getFieldWithDefault(msg, 4, 0),
groupmemberversionid: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.MemberQuitTips}
 */
proto.openim.sdk.group.MemberQuitTips.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.MemberQuitTips;
  return proto.openim.sdk.group.MemberQuitTips.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.MemberQuitTips} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.MemberQuitTips}
 */
proto.openim.sdk.group.MemberQuitTips.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 2:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setQuituser(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOperationtime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGroupmemberversion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupmemberversionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.MemberQuitTips.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.MemberQuitTips.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.MemberQuitTips} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.MemberQuitTips.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getQuituser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getOperationtime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getGroupmemberversion();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getGroupmemberversionid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional GroupInfo group = 1;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.MemberQuitTips.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.group.MemberQuitTips} returns this
*/
proto.openim.sdk.group.MemberQuitTips.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.MemberQuitTips} returns this
 */
proto.openim.sdk.group.MemberQuitTips.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.MemberQuitTips.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GroupMemberInfo quitUser = 2;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.MemberQuitTips.prototype.getQuituser = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 2));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.MemberQuitTips} returns this
*/
proto.openim.sdk.group.MemberQuitTips.prototype.setQuituser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.MemberQuitTips} returns this
 */
proto.openim.sdk.group.MemberQuitTips.prototype.clearQuituser = function() {
  return this.setQuituser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.MemberQuitTips.prototype.hasQuituser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 operationTime = 3;
 * @return {number}
 */
proto.openim.sdk.group.MemberQuitTips.prototype.getOperationtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.MemberQuitTips} returns this
 */
proto.openim.sdk.group.MemberQuitTips.prototype.setOperationtime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 groupMemberVersion = 4;
 * @return {number}
 */
proto.openim.sdk.group.MemberQuitTips.prototype.getGroupmemberversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.MemberQuitTips} returns this
 */
proto.openim.sdk.group.MemberQuitTips.prototype.setGroupmemberversion = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string groupMemberVersionID = 5;
 * @return {string}
 */
proto.openim.sdk.group.MemberQuitTips.prototype.getGroupmemberversionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.MemberQuitTips} returns this
 */
proto.openim.sdk.group.MemberQuitTips.prototype.setGroupmemberversionid = function(value) {
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
proto.openim.sdk.group.GroupApplicationAcceptedTips.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GroupApplicationAcceptedTips.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GroupApplicationAcceptedTips} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupApplicationAcceptedTips.toObject = function(includeInstance, msg) {
  var f, obj = {
group: (f = msg.getGroup()) && proto.openim.sdk.group.GroupInfo.toObject(includeInstance, f),
opuser: (f = msg.getOpuser()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
handlemsg: jspb.Message.getFieldWithDefault(msg, 4, ""),
receiveras: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GroupApplicationAcceptedTips}
 */
proto.openim.sdk.group.GroupApplicationAcceptedTips.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GroupApplicationAcceptedTips;
  return proto.openim.sdk.group.GroupApplicationAcceptedTips.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GroupApplicationAcceptedTips} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GroupApplicationAcceptedTips}
 */
proto.openim.sdk.group.GroupApplicationAcceptedTips.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 2:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setOpuser(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHandlemsg(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReceiveras(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GroupApplicationAcceptedTips.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GroupApplicationAcceptedTips.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GroupApplicationAcceptedTips} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupApplicationAcceptedTips.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getOpuser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getHandlemsg();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getReceiveras();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional GroupInfo group = 1;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.GroupApplicationAcceptedTips.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupApplicationAcceptedTips} returns this
*/
proto.openim.sdk.group.GroupApplicationAcceptedTips.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupApplicationAcceptedTips} returns this
 */
proto.openim.sdk.group.GroupApplicationAcceptedTips.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupApplicationAcceptedTips.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GroupMemberInfo opUser = 2;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GroupApplicationAcceptedTips.prototype.getOpuser = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 2));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupApplicationAcceptedTips} returns this
*/
proto.openim.sdk.group.GroupApplicationAcceptedTips.prototype.setOpuser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupApplicationAcceptedTips} returns this
 */
proto.openim.sdk.group.GroupApplicationAcceptedTips.prototype.clearOpuser = function() {
  return this.setOpuser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupApplicationAcceptedTips.prototype.hasOpuser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string handleMsg = 4;
 * @return {string}
 */
proto.openim.sdk.group.GroupApplicationAcceptedTips.prototype.getHandlemsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupApplicationAcceptedTips} returns this
 */
proto.openim.sdk.group.GroupApplicationAcceptedTips.prototype.setHandlemsg = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 receiverAs = 5;
 * @return {number}
 */
proto.openim.sdk.group.GroupApplicationAcceptedTips.prototype.getReceiveras = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupApplicationAcceptedTips} returns this
 */
proto.openim.sdk.group.GroupApplicationAcceptedTips.prototype.setReceiveras = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GroupApplicationRejectedTips.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GroupApplicationRejectedTips.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GroupApplicationRejectedTips} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupApplicationRejectedTips.toObject = function(includeInstance, msg) {
  var f, obj = {
group: (f = msg.getGroup()) && proto.openim.sdk.group.GroupInfo.toObject(includeInstance, f),
opuser: (f = msg.getOpuser()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
handlemsg: jspb.Message.getFieldWithDefault(msg, 4, ""),
receiveras: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GroupApplicationRejectedTips}
 */
proto.openim.sdk.group.GroupApplicationRejectedTips.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GroupApplicationRejectedTips;
  return proto.openim.sdk.group.GroupApplicationRejectedTips.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GroupApplicationRejectedTips} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GroupApplicationRejectedTips}
 */
proto.openim.sdk.group.GroupApplicationRejectedTips.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 2:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setOpuser(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHandlemsg(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReceiveras(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GroupApplicationRejectedTips.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GroupApplicationRejectedTips.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GroupApplicationRejectedTips} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupApplicationRejectedTips.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getOpuser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getHandlemsg();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getReceiveras();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional GroupInfo group = 1;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.GroupApplicationRejectedTips.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupApplicationRejectedTips} returns this
*/
proto.openim.sdk.group.GroupApplicationRejectedTips.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupApplicationRejectedTips} returns this
 */
proto.openim.sdk.group.GroupApplicationRejectedTips.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupApplicationRejectedTips.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GroupMemberInfo opUser = 2;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GroupApplicationRejectedTips.prototype.getOpuser = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 2));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupApplicationRejectedTips} returns this
*/
proto.openim.sdk.group.GroupApplicationRejectedTips.prototype.setOpuser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupApplicationRejectedTips} returns this
 */
proto.openim.sdk.group.GroupApplicationRejectedTips.prototype.clearOpuser = function() {
  return this.setOpuser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupApplicationRejectedTips.prototype.hasOpuser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string handleMsg = 4;
 * @return {string}
 */
proto.openim.sdk.group.GroupApplicationRejectedTips.prototype.getHandlemsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupApplicationRejectedTips} returns this
 */
proto.openim.sdk.group.GroupApplicationRejectedTips.prototype.setHandlemsg = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 receiverAs = 5;
 * @return {number}
 */
proto.openim.sdk.group.GroupApplicationRejectedTips.prototype.getReceiveras = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupApplicationRejectedTips} returns this
 */
proto.openim.sdk.group.GroupApplicationRejectedTips.prototype.setReceiveras = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GroupOwnerTransferredTips.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GroupOwnerTransferredTips} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.toObject = function(includeInstance, msg) {
  var f, obj = {
group: (f = msg.getGroup()) && proto.openim.sdk.group.GroupInfo.toObject(includeInstance, f),
opuser: (f = msg.getOpuser()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
newgroupowner: (f = msg.getNewgroupowner()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
oldgroupowner: jspb.Message.getFieldWithDefault(msg, 4, ""),
operationtime: jspb.Message.getFieldWithDefault(msg, 5, 0),
oldgroupownerinfo: (f = msg.getOldgroupownerinfo()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
groupmemberversion: jspb.Message.getFieldWithDefault(msg, 7, 0),
groupmemberversionid: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GroupOwnerTransferredTips}
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GroupOwnerTransferredTips;
  return proto.openim.sdk.group.GroupOwnerTransferredTips.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GroupOwnerTransferredTips} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GroupOwnerTransferredTips}
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 2:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setOpuser(value);
      break;
    case 3:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setNewgroupowner(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldgroupowner(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOperationtime(value);
      break;
    case 6:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setOldgroupownerinfo(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGroupmemberversion(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupmemberversionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GroupOwnerTransferredTips.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GroupOwnerTransferredTips} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getOpuser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getNewgroupowner();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getOldgroupowner();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOperationtime();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getOldgroupownerinfo();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getGroupmemberversion();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getGroupmemberversionid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional GroupInfo group = 1;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupOwnerTransferredTips} returns this
*/
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupOwnerTransferredTips} returns this
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GroupMemberInfo opUser = 2;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.getOpuser = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 2));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupOwnerTransferredTips} returns this
*/
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.setOpuser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupOwnerTransferredTips} returns this
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.clearOpuser = function() {
  return this.setOpuser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.hasOpuser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GroupMemberInfo newGroupOwner = 3;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.getNewgroupowner = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 3));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupOwnerTransferredTips} returns this
*/
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.setNewgroupowner = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupOwnerTransferredTips} returns this
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.clearNewgroupowner = function() {
  return this.setNewgroupowner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.hasNewgroupowner = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string oldGroupOwner = 4;
 * @return {string}
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.getOldgroupowner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupOwnerTransferredTips} returns this
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.setOldgroupowner = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 operationTime = 5;
 * @return {number}
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.getOperationtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupOwnerTransferredTips} returns this
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.setOperationtime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional GroupMemberInfo oldGroupOwnerInfo = 6;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.getOldgroupownerinfo = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 6));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupOwnerTransferredTips} returns this
*/
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.setOldgroupownerinfo = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupOwnerTransferredTips} returns this
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.clearOldgroupownerinfo = function() {
  return this.setOldgroupownerinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.hasOldgroupownerinfo = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint64 groupMemberVersion = 7;
 * @return {number}
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.getGroupmemberversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupOwnerTransferredTips} returns this
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.setGroupmemberversion = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string groupMemberVersionID = 8;
 * @return {string}
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.getGroupmemberversionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupOwnerTransferredTips} returns this
 */
proto.openim.sdk.group.GroupOwnerTransferredTips.prototype.setGroupmemberversionid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.group.MemberKickedTips.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.MemberKickedTips.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.MemberKickedTips.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.MemberKickedTips} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.MemberKickedTips.toObject = function(includeInstance, msg) {
  var f, obj = {
group: (f = msg.getGroup()) && proto.openim.sdk.group.GroupInfo.toObject(includeInstance, f),
opuser: (f = msg.getOpuser()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
kickeduserlistList: jspb.Message.toObjectList(msg.getKickeduserlistList(),
    proto.openim.sdk.group.GroupMemberInfo.toObject, includeInstance),
operationtime: jspb.Message.getFieldWithDefault(msg, 4, 0),
groupmemberversion: jspb.Message.getFieldWithDefault(msg, 5, 0),
groupmemberversionid: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.MemberKickedTips}
 */
proto.openim.sdk.group.MemberKickedTips.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.MemberKickedTips;
  return proto.openim.sdk.group.MemberKickedTips.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.MemberKickedTips} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.MemberKickedTips}
 */
proto.openim.sdk.group.MemberKickedTips.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 2:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setOpuser(value);
      break;
    case 3:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.addKickeduserlist(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOperationtime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGroupmemberversion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupmemberversionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.MemberKickedTips.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.MemberKickedTips.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.MemberKickedTips} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.MemberKickedTips.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getOpuser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getKickeduserlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getOperationtime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getGroupmemberversion();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getGroupmemberversionid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional GroupInfo group = 1;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.MemberKickedTips.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.group.MemberKickedTips} returns this
*/
proto.openim.sdk.group.MemberKickedTips.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.MemberKickedTips} returns this
 */
proto.openim.sdk.group.MemberKickedTips.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.MemberKickedTips.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GroupMemberInfo opUser = 2;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.MemberKickedTips.prototype.getOpuser = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 2));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.MemberKickedTips} returns this
*/
proto.openim.sdk.group.MemberKickedTips.prototype.setOpuser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.MemberKickedTips} returns this
 */
proto.openim.sdk.group.MemberKickedTips.prototype.clearOpuser = function() {
  return this.setOpuser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.MemberKickedTips.prototype.hasOpuser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated GroupMemberInfo kickedUserList = 3;
 * @return {!Array<!proto.openim.sdk.group.GroupMemberInfo>}
 */
proto.openim.sdk.group.MemberKickedTips.prototype.getKickeduserlistList = function() {
  return /** @type{!Array<!proto.openim.sdk.group.GroupMemberInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 3));
};


/**
 * @param {!Array<!proto.openim.sdk.group.GroupMemberInfo>} value
 * @return {!proto.openim.sdk.group.MemberKickedTips} returns this
*/
proto.openim.sdk.group.MemberKickedTips.prototype.setKickeduserlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.openim.sdk.group.GroupMemberInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.MemberKickedTips.prototype.addKickeduserlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.openim.sdk.group.GroupMemberInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.group.MemberKickedTips} returns this
 */
proto.openim.sdk.group.MemberKickedTips.prototype.clearKickeduserlistList = function() {
  return this.setKickeduserlistList([]);
};


/**
 * optional int64 operationTime = 4;
 * @return {number}
 */
proto.openim.sdk.group.MemberKickedTips.prototype.getOperationtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.MemberKickedTips} returns this
 */
proto.openim.sdk.group.MemberKickedTips.prototype.setOperationtime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 groupMemberVersion = 5;
 * @return {number}
 */
proto.openim.sdk.group.MemberKickedTips.prototype.getGroupmemberversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.MemberKickedTips} returns this
 */
proto.openim.sdk.group.MemberKickedTips.prototype.setGroupmemberversion = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string groupMemberVersionID = 6;
 * @return {string}
 */
proto.openim.sdk.group.MemberKickedTips.prototype.getGroupmemberversionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.MemberKickedTips} returns this
 */
proto.openim.sdk.group.MemberKickedTips.prototype.setGroupmemberversionid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.openim.sdk.group.MemberInvitedTips.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.MemberInvitedTips.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.MemberInvitedTips.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.MemberInvitedTips} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.MemberInvitedTips.toObject = function(includeInstance, msg) {
  var f, obj = {
group: (f = msg.getGroup()) && proto.openim.sdk.group.GroupInfo.toObject(includeInstance, f),
opuser: (f = msg.getOpuser()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
inviteduserlistList: jspb.Message.toObjectList(msg.getInviteduserlistList(),
    proto.openim.sdk.group.GroupMemberInfo.toObject, includeInstance),
operationtime: jspb.Message.getFieldWithDefault(msg, 4, 0),
groupmemberversion: jspb.Message.getFieldWithDefault(msg, 5, 0),
groupmemberversionid: jspb.Message.getFieldWithDefault(msg, 6, ""),
inviteruser: (f = msg.getInviteruser()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.MemberInvitedTips}
 */
proto.openim.sdk.group.MemberInvitedTips.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.MemberInvitedTips;
  return proto.openim.sdk.group.MemberInvitedTips.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.MemberInvitedTips} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.MemberInvitedTips}
 */
proto.openim.sdk.group.MemberInvitedTips.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 2:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setOpuser(value);
      break;
    case 3:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.addInviteduserlist(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOperationtime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGroupmemberversion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupmemberversionid(value);
      break;
    case 7:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setInviteruser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.MemberInvitedTips.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.MemberInvitedTips.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.MemberInvitedTips} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.MemberInvitedTips.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getOpuser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getInviteduserlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getOperationtime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getGroupmemberversion();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getGroupmemberversionid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getInviteruser();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional GroupInfo group = 1;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.MemberInvitedTips.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.group.MemberInvitedTips} returns this
*/
proto.openim.sdk.group.MemberInvitedTips.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.MemberInvitedTips} returns this
 */
proto.openim.sdk.group.MemberInvitedTips.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.MemberInvitedTips.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GroupMemberInfo opUser = 2;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.MemberInvitedTips.prototype.getOpuser = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 2));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.MemberInvitedTips} returns this
*/
proto.openim.sdk.group.MemberInvitedTips.prototype.setOpuser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.MemberInvitedTips} returns this
 */
proto.openim.sdk.group.MemberInvitedTips.prototype.clearOpuser = function() {
  return this.setOpuser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.MemberInvitedTips.prototype.hasOpuser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated GroupMemberInfo invitedUserList = 3;
 * @return {!Array<!proto.openim.sdk.group.GroupMemberInfo>}
 */
proto.openim.sdk.group.MemberInvitedTips.prototype.getInviteduserlistList = function() {
  return /** @type{!Array<!proto.openim.sdk.group.GroupMemberInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 3));
};


/**
 * @param {!Array<!proto.openim.sdk.group.GroupMemberInfo>} value
 * @return {!proto.openim.sdk.group.MemberInvitedTips} returns this
*/
proto.openim.sdk.group.MemberInvitedTips.prototype.setInviteduserlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.openim.sdk.group.GroupMemberInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.MemberInvitedTips.prototype.addInviteduserlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.openim.sdk.group.GroupMemberInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.openim.sdk.group.MemberInvitedTips} returns this
 */
proto.openim.sdk.group.MemberInvitedTips.prototype.clearInviteduserlistList = function() {
  return this.setInviteduserlistList([]);
};


/**
 * optional int64 operationTime = 4;
 * @return {number}
 */
proto.openim.sdk.group.MemberInvitedTips.prototype.getOperationtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.MemberInvitedTips} returns this
 */
proto.openim.sdk.group.MemberInvitedTips.prototype.setOperationtime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 groupMemberVersion = 5;
 * @return {number}
 */
proto.openim.sdk.group.MemberInvitedTips.prototype.getGroupmemberversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.MemberInvitedTips} returns this
 */
proto.openim.sdk.group.MemberInvitedTips.prototype.setGroupmemberversion = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string groupMemberVersionID = 6;
 * @return {string}
 */
proto.openim.sdk.group.MemberInvitedTips.prototype.getGroupmemberversionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.MemberInvitedTips} returns this
 */
proto.openim.sdk.group.MemberInvitedTips.prototype.setGroupmemberversionid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional GroupMemberInfo inviterUser = 7;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.MemberInvitedTips.prototype.getInviteruser = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 7));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.MemberInvitedTips} returns this
*/
proto.openim.sdk.group.MemberInvitedTips.prototype.setInviteruser = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.MemberInvitedTips} returns this
 */
proto.openim.sdk.group.MemberInvitedTips.prototype.clearInviteruser = function() {
  return this.setInviteruser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.MemberInvitedTips.prototype.hasInviteruser = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.openim.sdk.group.MemberEnterTips.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.MemberEnterTips.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.MemberEnterTips} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.MemberEnterTips.toObject = function(includeInstance, msg) {
  var f, obj = {
group: (f = msg.getGroup()) && proto.openim.sdk.group.GroupInfo.toObject(includeInstance, f),
entrantuser: (f = msg.getEntrantuser()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
operationtime: jspb.Message.getFieldWithDefault(msg, 3, 0),
groupmemberversion: jspb.Message.getFieldWithDefault(msg, 5, 0),
groupmemberversionid: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.MemberEnterTips}
 */
proto.openim.sdk.group.MemberEnterTips.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.MemberEnterTips;
  return proto.openim.sdk.group.MemberEnterTips.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.MemberEnterTips} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.MemberEnterTips}
 */
proto.openim.sdk.group.MemberEnterTips.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 2:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setEntrantuser(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOperationtime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGroupmemberversion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupmemberversionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.MemberEnterTips.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.MemberEnterTips.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.MemberEnterTips} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.MemberEnterTips.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getEntrantuser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getOperationtime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getGroupmemberversion();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getGroupmemberversionid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional GroupInfo group = 1;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.MemberEnterTips.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.group.MemberEnterTips} returns this
*/
proto.openim.sdk.group.MemberEnterTips.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.MemberEnterTips} returns this
 */
proto.openim.sdk.group.MemberEnterTips.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.MemberEnterTips.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GroupMemberInfo entrantUser = 2;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.MemberEnterTips.prototype.getEntrantuser = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 2));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.MemberEnterTips} returns this
*/
proto.openim.sdk.group.MemberEnterTips.prototype.setEntrantuser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.MemberEnterTips} returns this
 */
proto.openim.sdk.group.MemberEnterTips.prototype.clearEntrantuser = function() {
  return this.setEntrantuser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.MemberEnterTips.prototype.hasEntrantuser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 operationTime = 3;
 * @return {number}
 */
proto.openim.sdk.group.MemberEnterTips.prototype.getOperationtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.MemberEnterTips} returns this
 */
proto.openim.sdk.group.MemberEnterTips.prototype.setOperationtime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 groupMemberVersion = 5;
 * @return {number}
 */
proto.openim.sdk.group.MemberEnterTips.prototype.getGroupmemberversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.MemberEnterTips} returns this
 */
proto.openim.sdk.group.MemberEnterTips.prototype.setGroupmemberversion = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string groupMemberVersionID = 6;
 * @return {string}
 */
proto.openim.sdk.group.MemberEnterTips.prototype.getGroupmemberversionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.MemberEnterTips} returns this
 */
proto.openim.sdk.group.MemberEnterTips.prototype.setGroupmemberversionid = function(value) {
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
proto.openim.sdk.group.GroupDismissedTips.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GroupDismissedTips.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GroupDismissedTips} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupDismissedTips.toObject = function(includeInstance, msg) {
  var f, obj = {
group: (f = msg.getGroup()) && proto.openim.sdk.group.GroupInfo.toObject(includeInstance, f),
opuser: (f = msg.getOpuser()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
operationtime: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GroupDismissedTips}
 */
proto.openim.sdk.group.GroupDismissedTips.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GroupDismissedTips;
  return proto.openim.sdk.group.GroupDismissedTips.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GroupDismissedTips} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GroupDismissedTips}
 */
proto.openim.sdk.group.GroupDismissedTips.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 2:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setOpuser(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOperationtime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GroupDismissedTips.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GroupDismissedTips.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GroupDismissedTips} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupDismissedTips.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getOpuser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getOperationtime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional GroupInfo group = 1;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.GroupDismissedTips.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupDismissedTips} returns this
*/
proto.openim.sdk.group.GroupDismissedTips.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupDismissedTips} returns this
 */
proto.openim.sdk.group.GroupDismissedTips.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupDismissedTips.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GroupMemberInfo opUser = 2;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GroupDismissedTips.prototype.getOpuser = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 2));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupDismissedTips} returns this
*/
proto.openim.sdk.group.GroupDismissedTips.prototype.setOpuser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupDismissedTips} returns this
 */
proto.openim.sdk.group.GroupDismissedTips.prototype.clearOpuser = function() {
  return this.setOpuser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupDismissedTips.prototype.hasOpuser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 operationTime = 3;
 * @return {number}
 */
proto.openim.sdk.group.GroupDismissedTips.prototype.getOperationtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupDismissedTips} returns this
 */
proto.openim.sdk.group.GroupDismissedTips.prototype.setOperationtime = function(value) {
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
proto.openim.sdk.group.GroupMemberMutedTips.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GroupMemberMutedTips.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GroupMemberMutedTips} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupMemberMutedTips.toObject = function(includeInstance, msg) {
  var f, obj = {
group: (f = msg.getGroup()) && proto.openim.sdk.group.GroupInfo.toObject(includeInstance, f),
opuser: (f = msg.getOpuser()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
operationtime: jspb.Message.getFieldWithDefault(msg, 3, 0),
muteduser: (f = msg.getMuteduser()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
mutedseconds: jspb.Message.getFieldWithDefault(msg, 5, 0),
groupmemberversion: jspb.Message.getFieldWithDefault(msg, 6, 0),
groupmemberversionid: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GroupMemberMutedTips}
 */
proto.openim.sdk.group.GroupMemberMutedTips.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GroupMemberMutedTips;
  return proto.openim.sdk.group.GroupMemberMutedTips.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GroupMemberMutedTips} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GroupMemberMutedTips}
 */
proto.openim.sdk.group.GroupMemberMutedTips.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 2:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setOpuser(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOperationtime(value);
      break;
    case 4:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setMuteduser(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMutedseconds(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGroupmemberversion(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupmemberversionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GroupMemberMutedTips.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GroupMemberMutedTips.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GroupMemberMutedTips} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupMemberMutedTips.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getOpuser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getOperationtime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMuteduser();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getMutedseconds();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getGroupmemberversion();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getGroupmemberversionid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional GroupInfo group = 1;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.GroupMemberMutedTips.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupMemberMutedTips} returns this
*/
proto.openim.sdk.group.GroupMemberMutedTips.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupMemberMutedTips} returns this
 */
proto.openim.sdk.group.GroupMemberMutedTips.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupMemberMutedTips.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GroupMemberInfo opUser = 2;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GroupMemberMutedTips.prototype.getOpuser = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 2));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupMemberMutedTips} returns this
*/
proto.openim.sdk.group.GroupMemberMutedTips.prototype.setOpuser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupMemberMutedTips} returns this
 */
proto.openim.sdk.group.GroupMemberMutedTips.prototype.clearOpuser = function() {
  return this.setOpuser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupMemberMutedTips.prototype.hasOpuser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 operationTime = 3;
 * @return {number}
 */
proto.openim.sdk.group.GroupMemberMutedTips.prototype.getOperationtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupMemberMutedTips} returns this
 */
proto.openim.sdk.group.GroupMemberMutedTips.prototype.setOperationtime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional GroupMemberInfo mutedUser = 4;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GroupMemberMutedTips.prototype.getMuteduser = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 4));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupMemberMutedTips} returns this
*/
proto.openim.sdk.group.GroupMemberMutedTips.prototype.setMuteduser = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupMemberMutedTips} returns this
 */
proto.openim.sdk.group.GroupMemberMutedTips.prototype.clearMuteduser = function() {
  return this.setMuteduser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupMemberMutedTips.prototype.hasMuteduser = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 mutedSeconds = 5;
 * @return {number}
 */
proto.openim.sdk.group.GroupMemberMutedTips.prototype.getMutedseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupMemberMutedTips} returns this
 */
proto.openim.sdk.group.GroupMemberMutedTips.prototype.setMutedseconds = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 groupMemberVersion = 6;
 * @return {number}
 */
proto.openim.sdk.group.GroupMemberMutedTips.prototype.getGroupmemberversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupMemberMutedTips} returns this
 */
proto.openim.sdk.group.GroupMemberMutedTips.prototype.setGroupmemberversion = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string groupMemberVersionID = 7;
 * @return {string}
 */
proto.openim.sdk.group.GroupMemberMutedTips.prototype.getGroupmemberversionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupMemberMutedTips} returns this
 */
proto.openim.sdk.group.GroupMemberMutedTips.prototype.setGroupmemberversionid = function(value) {
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
proto.openim.sdk.group.GroupMemberCancelMutedTips.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GroupMemberCancelMutedTips.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GroupMemberCancelMutedTips} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupMemberCancelMutedTips.toObject = function(includeInstance, msg) {
  var f, obj = {
group: (f = msg.getGroup()) && proto.openim.sdk.group.GroupInfo.toObject(includeInstance, f),
opuser: (f = msg.getOpuser()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
operationtime: jspb.Message.getFieldWithDefault(msg, 3, 0),
muteduser: (f = msg.getMuteduser()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
groupmemberversion: jspb.Message.getFieldWithDefault(msg, 5, 0),
groupmemberversionid: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GroupMemberCancelMutedTips}
 */
proto.openim.sdk.group.GroupMemberCancelMutedTips.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GroupMemberCancelMutedTips;
  return proto.openim.sdk.group.GroupMemberCancelMutedTips.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GroupMemberCancelMutedTips} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GroupMemberCancelMutedTips}
 */
proto.openim.sdk.group.GroupMemberCancelMutedTips.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 2:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setOpuser(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOperationtime(value);
      break;
    case 4:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setMuteduser(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGroupmemberversion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupmemberversionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GroupMemberCancelMutedTips.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GroupMemberCancelMutedTips.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GroupMemberCancelMutedTips} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupMemberCancelMutedTips.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getOpuser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getOperationtime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMuteduser();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getGroupmemberversion();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getGroupmemberversionid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional GroupInfo group = 1;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.GroupMemberCancelMutedTips.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupMemberCancelMutedTips} returns this
*/
proto.openim.sdk.group.GroupMemberCancelMutedTips.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupMemberCancelMutedTips} returns this
 */
proto.openim.sdk.group.GroupMemberCancelMutedTips.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupMemberCancelMutedTips.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GroupMemberInfo opUser = 2;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GroupMemberCancelMutedTips.prototype.getOpuser = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 2));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupMemberCancelMutedTips} returns this
*/
proto.openim.sdk.group.GroupMemberCancelMutedTips.prototype.setOpuser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupMemberCancelMutedTips} returns this
 */
proto.openim.sdk.group.GroupMemberCancelMutedTips.prototype.clearOpuser = function() {
  return this.setOpuser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupMemberCancelMutedTips.prototype.hasOpuser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 operationTime = 3;
 * @return {number}
 */
proto.openim.sdk.group.GroupMemberCancelMutedTips.prototype.getOperationtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupMemberCancelMutedTips} returns this
 */
proto.openim.sdk.group.GroupMemberCancelMutedTips.prototype.setOperationtime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional GroupMemberInfo mutedUser = 4;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GroupMemberCancelMutedTips.prototype.getMuteduser = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 4));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupMemberCancelMutedTips} returns this
*/
proto.openim.sdk.group.GroupMemberCancelMutedTips.prototype.setMuteduser = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupMemberCancelMutedTips} returns this
 */
proto.openim.sdk.group.GroupMemberCancelMutedTips.prototype.clearMuteduser = function() {
  return this.setMuteduser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupMemberCancelMutedTips.prototype.hasMuteduser = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 groupMemberVersion = 5;
 * @return {number}
 */
proto.openim.sdk.group.GroupMemberCancelMutedTips.prototype.getGroupmemberversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupMemberCancelMutedTips} returns this
 */
proto.openim.sdk.group.GroupMemberCancelMutedTips.prototype.setGroupmemberversion = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string groupMemberVersionID = 6;
 * @return {string}
 */
proto.openim.sdk.group.GroupMemberCancelMutedTips.prototype.getGroupmemberversionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupMemberCancelMutedTips} returns this
 */
proto.openim.sdk.group.GroupMemberCancelMutedTips.prototype.setGroupmemberversionid = function(value) {
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
proto.openim.sdk.group.GroupMutedTips.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GroupMutedTips.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GroupMutedTips} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupMutedTips.toObject = function(includeInstance, msg) {
  var f, obj = {
group: (f = msg.getGroup()) && proto.openim.sdk.group.GroupInfo.toObject(includeInstance, f),
opuser: (f = msg.getOpuser()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
operationtime: jspb.Message.getFieldWithDefault(msg, 3, 0),
groupmemberversion: jspb.Message.getFieldWithDefault(msg, 4, 0),
groupmemberversionid: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GroupMutedTips}
 */
proto.openim.sdk.group.GroupMutedTips.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GroupMutedTips;
  return proto.openim.sdk.group.GroupMutedTips.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GroupMutedTips} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GroupMutedTips}
 */
proto.openim.sdk.group.GroupMutedTips.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 2:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setOpuser(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOperationtime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGroupmemberversion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupmemberversionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GroupMutedTips.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GroupMutedTips.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GroupMutedTips} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupMutedTips.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getOpuser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getOperationtime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getGroupmemberversion();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getGroupmemberversionid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional GroupInfo group = 1;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.GroupMutedTips.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupMutedTips} returns this
*/
proto.openim.sdk.group.GroupMutedTips.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupMutedTips} returns this
 */
proto.openim.sdk.group.GroupMutedTips.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupMutedTips.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GroupMemberInfo opUser = 2;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GroupMutedTips.prototype.getOpuser = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 2));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupMutedTips} returns this
*/
proto.openim.sdk.group.GroupMutedTips.prototype.setOpuser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupMutedTips} returns this
 */
proto.openim.sdk.group.GroupMutedTips.prototype.clearOpuser = function() {
  return this.setOpuser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupMutedTips.prototype.hasOpuser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 operationTime = 3;
 * @return {number}
 */
proto.openim.sdk.group.GroupMutedTips.prototype.getOperationtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupMutedTips} returns this
 */
proto.openim.sdk.group.GroupMutedTips.prototype.setOperationtime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 groupMemberVersion = 4;
 * @return {number}
 */
proto.openim.sdk.group.GroupMutedTips.prototype.getGroupmemberversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupMutedTips} returns this
 */
proto.openim.sdk.group.GroupMutedTips.prototype.setGroupmemberversion = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string groupMemberVersionID = 5;
 * @return {string}
 */
proto.openim.sdk.group.GroupMutedTips.prototype.getGroupmemberversionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupMutedTips} returns this
 */
proto.openim.sdk.group.GroupMutedTips.prototype.setGroupmemberversionid = function(value) {
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
proto.openim.sdk.group.GroupCancelMutedTips.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GroupCancelMutedTips.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GroupCancelMutedTips} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupCancelMutedTips.toObject = function(includeInstance, msg) {
  var f, obj = {
group: (f = msg.getGroup()) && proto.openim.sdk.group.GroupInfo.toObject(includeInstance, f),
opuser: (f = msg.getOpuser()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
operationtime: jspb.Message.getFieldWithDefault(msg, 3, 0),
groupmemberversion: jspb.Message.getFieldWithDefault(msg, 4, 0),
groupmemberversionid: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GroupCancelMutedTips}
 */
proto.openim.sdk.group.GroupCancelMutedTips.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GroupCancelMutedTips;
  return proto.openim.sdk.group.GroupCancelMutedTips.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GroupCancelMutedTips} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GroupCancelMutedTips}
 */
proto.openim.sdk.group.GroupCancelMutedTips.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 2:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setOpuser(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOperationtime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGroupmemberversion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupmemberversionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GroupCancelMutedTips.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GroupCancelMutedTips.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GroupCancelMutedTips} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupCancelMutedTips.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getOpuser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getOperationtime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getGroupmemberversion();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getGroupmemberversionid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional GroupInfo group = 1;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.GroupCancelMutedTips.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupCancelMutedTips} returns this
*/
proto.openim.sdk.group.GroupCancelMutedTips.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupCancelMutedTips} returns this
 */
proto.openim.sdk.group.GroupCancelMutedTips.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupCancelMutedTips.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GroupMemberInfo opUser = 2;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GroupCancelMutedTips.prototype.getOpuser = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 2));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupCancelMutedTips} returns this
*/
proto.openim.sdk.group.GroupCancelMutedTips.prototype.setOpuser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupCancelMutedTips} returns this
 */
proto.openim.sdk.group.GroupCancelMutedTips.prototype.clearOpuser = function() {
  return this.setOpuser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupCancelMutedTips.prototype.hasOpuser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 operationTime = 3;
 * @return {number}
 */
proto.openim.sdk.group.GroupCancelMutedTips.prototype.getOperationtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupCancelMutedTips} returns this
 */
proto.openim.sdk.group.GroupCancelMutedTips.prototype.setOperationtime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 groupMemberVersion = 4;
 * @return {number}
 */
proto.openim.sdk.group.GroupCancelMutedTips.prototype.getGroupmemberversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupCancelMutedTips} returns this
 */
proto.openim.sdk.group.GroupCancelMutedTips.prototype.setGroupmemberversion = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string groupMemberVersionID = 5;
 * @return {string}
 */
proto.openim.sdk.group.GroupCancelMutedTips.prototype.getGroupmemberversionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupCancelMutedTips} returns this
 */
proto.openim.sdk.group.GroupCancelMutedTips.prototype.setGroupmemberversionid = function(value) {
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
proto.openim.sdk.group.GroupMemberInfoSetTips.prototype.toObject = function(opt_includeInstance) {
  return proto.openim.sdk.group.GroupMemberInfoSetTips.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.openim.sdk.group.GroupMemberInfoSetTips} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupMemberInfoSetTips.toObject = function(includeInstance, msg) {
  var f, obj = {
group: (f = msg.getGroup()) && proto.openim.sdk.group.GroupInfo.toObject(includeInstance, f),
opuser: (f = msg.getOpuser()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
operationtime: jspb.Message.getFieldWithDefault(msg, 3, 0),
changeduser: (f = msg.getChangeduser()) && proto.openim.sdk.group.GroupMemberInfo.toObject(includeInstance, f),
groupmemberversion: jspb.Message.getFieldWithDefault(msg, 5, 0),
groupmemberversionid: jspb.Message.getFieldWithDefault(msg, 6, ""),
groupsortversion: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.openim.sdk.group.GroupMemberInfoSetTips}
 */
proto.openim.sdk.group.GroupMemberInfoSetTips.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.openim.sdk.group.GroupMemberInfoSetTips;
  return proto.openim.sdk.group.GroupMemberInfoSetTips.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.openim.sdk.group.GroupMemberInfoSetTips} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.openim.sdk.group.GroupMemberInfoSetTips}
 */
proto.openim.sdk.group.GroupMemberInfoSetTips.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.openim.sdk.group.GroupInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupInfo.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 2:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setOpuser(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOperationtime(value);
      break;
    case 4:
      var value = new proto.openim.sdk.group.GroupMemberInfo;
      reader.readMessage(value,proto.openim.sdk.group.GroupMemberInfo.deserializeBinaryFromReader);
      msg.setChangeduser(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGroupmemberversion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupmemberversionid(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGroupsortversion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.openim.sdk.group.GroupMemberInfoSetTips.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.openim.sdk.group.GroupMemberInfoSetTips.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.openim.sdk.group.GroupMemberInfoSetTips} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.openim.sdk.group.GroupMemberInfoSetTips.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.openim.sdk.group.GroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getOpuser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getOperationtime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getChangeduser();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.openim.sdk.group.GroupMemberInfo.serializeBinaryToWriter
    );
  }
  f = message.getGroupmemberversion();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getGroupmemberversionid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getGroupsortversion();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
};


/**
 * optional GroupInfo group = 1;
 * @return {?proto.openim.sdk.group.GroupInfo}
 */
proto.openim.sdk.group.GroupMemberInfoSetTips.prototype.getGroup = function() {
  return /** @type{?proto.openim.sdk.group.GroupInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupInfo, 1));
};


/**
 * @param {?proto.openim.sdk.group.GroupInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupMemberInfoSetTips} returns this
*/
proto.openim.sdk.group.GroupMemberInfoSetTips.prototype.setGroup = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupMemberInfoSetTips} returns this
 */
proto.openim.sdk.group.GroupMemberInfoSetTips.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupMemberInfoSetTips.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GroupMemberInfo opUser = 2;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GroupMemberInfoSetTips.prototype.getOpuser = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 2));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupMemberInfoSetTips} returns this
*/
proto.openim.sdk.group.GroupMemberInfoSetTips.prototype.setOpuser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupMemberInfoSetTips} returns this
 */
proto.openim.sdk.group.GroupMemberInfoSetTips.prototype.clearOpuser = function() {
  return this.setOpuser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupMemberInfoSetTips.prototype.hasOpuser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 operationTime = 3;
 * @return {number}
 */
proto.openim.sdk.group.GroupMemberInfoSetTips.prototype.getOperationtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupMemberInfoSetTips} returns this
 */
proto.openim.sdk.group.GroupMemberInfoSetTips.prototype.setOperationtime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional GroupMemberInfo changedUser = 4;
 * @return {?proto.openim.sdk.group.GroupMemberInfo}
 */
proto.openim.sdk.group.GroupMemberInfoSetTips.prototype.getChangeduser = function() {
  return /** @type{?proto.openim.sdk.group.GroupMemberInfo} */ (
    jspb.Message.getWrapperField(this, proto.openim.sdk.group.GroupMemberInfo, 4));
};


/**
 * @param {?proto.openim.sdk.group.GroupMemberInfo|undefined} value
 * @return {!proto.openim.sdk.group.GroupMemberInfoSetTips} returns this
*/
proto.openim.sdk.group.GroupMemberInfoSetTips.prototype.setChangeduser = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.openim.sdk.group.GroupMemberInfoSetTips} returns this
 */
proto.openim.sdk.group.GroupMemberInfoSetTips.prototype.clearChangeduser = function() {
  return this.setChangeduser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.openim.sdk.group.GroupMemberInfoSetTips.prototype.hasChangeduser = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 groupMemberVersion = 5;
 * @return {number}
 */
proto.openim.sdk.group.GroupMemberInfoSetTips.prototype.getGroupmemberversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupMemberInfoSetTips} returns this
 */
proto.openim.sdk.group.GroupMemberInfoSetTips.prototype.setGroupmemberversion = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string groupMemberVersionID = 6;
 * @return {string}
 */
proto.openim.sdk.group.GroupMemberInfoSetTips.prototype.getGroupmemberversionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.openim.sdk.group.GroupMemberInfoSetTips} returns this
 */
proto.openim.sdk.group.GroupMemberInfoSetTips.prototype.setGroupmemberversionid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint64 groupSortVersion = 7;
 * @return {number}
 */
proto.openim.sdk.group.GroupMemberInfoSetTips.prototype.getGroupsortversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.openim.sdk.group.GroupMemberInfoSetTips} returns this
 */
proto.openim.sdk.group.GroupMemberInfoSetTips.prototype.setGroupsortversion = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * @enum {number}
 */
proto.openim.sdk.group.GroupStatus = {
  DEFAULT: 0,
  DISMISSED: 2
};

/**
 * @enum {number}
 */
proto.openim.sdk.group.GroupFilter = {
  ALL: 0,
  OWNER: 1,
  ADMIN: 2,
  ORDINARYUSERS: 3,
  ADMINANDORDINARYUSERS: 4,
  OWNERANDADMIN: 5
};

goog.object.extend(exports, proto.openim.sdk.group);
