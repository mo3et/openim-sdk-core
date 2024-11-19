// package: openim.sdk.shared
// file: shared.proto

import * as jspb from "google-protobuf";

export class UserInfo extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getNickname(): string;
  setNickname(value: string): void;

  getFaceurl(): string;
  setFaceurl(value: string): void;

  getEx(): string;
  setEx(value: string): void;

  getCreatetime(): number;
  setCreatetime(value: number): void;

  getAppmangerlevel(): number;
  setAppmangerlevel(value: number): void;

  getGlobalrecvmsgopt(): number;
  setGlobalrecvmsgopt(value: number): void;

  getAttached(): string;
  setAttached(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInfo;
  static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
  export type AsObject = {
    userid: string,
    nickname: string,
    faceurl: string,
    ex: string,
    createtime: number,
    appmangerlevel: number,
    globalrecvmsgopt: number,
    attached: string,
  }
}

export class FriendInfo extends jspb.Message {
  getOwneruserid(): string;
  setOwneruserid(value: string): void;

  getFrienduserid(): string;
  setFrienduserid(value: string): void;

  getRemark(): string;
  setRemark(value: string): void;

  getCreatetime(): number;
  setCreatetime(value: number): void;

  getAddsource(): number;
  setAddsource(value: number): void;

  getOperatoruserid(): string;
  setOperatoruserid(value: string): void;

  getNickname(): string;
  setNickname(value: string): void;

  getFaceurl(): string;
  setFaceurl(value: string): void;

  getEx(): string;
  setEx(value: string): void;

  getAttachedinfo(): string;
  setAttachedinfo(value: string): void;

  getIspinned(): boolean;
  setIspinned(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FriendInfo): FriendInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FriendInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendInfo;
  static deserializeBinaryFromReader(message: FriendInfo, reader: jspb.BinaryReader): FriendInfo;
}

export namespace FriendInfo {
  export type AsObject = {
    owneruserid: string,
    frienduserid: string,
    remark: string,
    createtime: number,
    addsource: number,
    operatoruserid: string,
    nickname: string,
    faceurl: string,
    ex: string,
    attachedinfo: string,
    ispinned: boolean,
  }
}

export class BlackInfo extends jspb.Message {
  getOwneruserid(): string;
  setOwneruserid(value: string): void;

  getBlockuserid(): string;
  setBlockuserid(value: string): void;

  getNickname(): string;
  setNickname(value: string): void;

  getFaceurl(): string;
  setFaceurl(value: string): void;

  getCreatetime(): number;
  setCreatetime(value: number): void;

  getAddsource(): number;
  setAddsource(value: number): void;

  getOperatoruserid(): string;
  setOperatoruserid(value: string): void;

  getEx(): string;
  setEx(value: string): void;

  getAttached(): string;
  setAttached(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlackInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BlackInfo): BlackInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlackInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlackInfo;
  static deserializeBinaryFromReader(message: BlackInfo, reader: jspb.BinaryReader): BlackInfo;
}

export namespace BlackInfo {
  export type AsObject = {
    owneruserid: string,
    blockuserid: string,
    nickname: string,
    faceurl: string,
    createtime: number,
    addsource: number,
    operatoruserid: string,
    ex: string,
    attached: string,
  }
}

export class FriendRequestInfo extends jspb.Message {
  getFromuserid(): string;
  setFromuserid(value: string): void;

  getFromnickname(): string;
  setFromnickname(value: string): void;

  getFromfaceurl(): string;
  setFromfaceurl(value: string): void;

  getTouserid(): string;
  setTouserid(value: string): void;

  getTonickname(): string;
  setTonickname(value: string): void;

  getTofaceurl(): string;
  setTofaceurl(value: string): void;

  getHandleresult(): number;
  setHandleresult(value: number): void;

  getReqmsg(): string;
  setReqmsg(value: string): void;

  getCreatetime(): number;
  setCreatetime(value: number): void;

  getHandleruserid(): string;
  setHandleruserid(value: string): void;

  getHandlemsg(): string;
  setHandlemsg(value: string): void;

  getHandletime(): number;
  setHandletime(value: number): void;

  getEx(): string;
  setEx(value: string): void;

  getAttached(): string;
  setAttached(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendRequestInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FriendRequestInfo): FriendRequestInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FriendRequestInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendRequestInfo;
  static deserializeBinaryFromReader(message: FriendRequestInfo, reader: jspb.BinaryReader): FriendRequestInfo;
}

export namespace FriendRequestInfo {
  export type AsObject = {
    fromuserid: string,
    fromnickname: string,
    fromfaceurl: string,
    touserid: string,
    tonickname: string,
    tofaceurl: string,
    handleresult: number,
    reqmsg: string,
    createtime: number,
    handleruserid: string,
    handlemsg: string,
    handletime: number,
    ex: string,
    attached: string,
  }
}

export class GroupInfo extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  getGroupname(): string;
  setGroupname(value: string): void;

  getNotification(): string;
  setNotification(value: string): void;

  getIntroduction(): string;
  setIntroduction(value: string): void;

  getFaceurl(): string;
  setFaceurl(value: string): void;

  getOwneruserid(): string;
  setOwneruserid(value: string): void;

  getCreatetime(): number;
  setCreatetime(value: number): void;

  getMembercount(): number;
  setMembercount(value: number): void;

  getEx(): string;
  setEx(value: string): void;

  getStatus(): GroupStatusMap[keyof GroupStatusMap];
  setStatus(value: GroupStatusMap[keyof GroupStatusMap]): void;

  getCreatoruserid(): string;
  setCreatoruserid(value: string): void;

  getNeedverification(): number;
  setNeedverification(value: number): void;

  getLookmemberinfo(): number;
  setLookmemberinfo(value: number): void;

  getApplymemberfriend(): number;
  setApplymemberfriend(value: number): void;

  getNotificationupdatetime(): number;
  setNotificationupdatetime(value: number): void;

  getNotificationuserid(): string;
  setNotificationuserid(value: string): void;

  getAttachedinfo(): string;
  setAttachedinfo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GroupInfo): GroupInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupInfo;
  static deserializeBinaryFromReader(message: GroupInfo, reader: jspb.BinaryReader): GroupInfo;
}

export namespace GroupInfo {
  export type AsObject = {
    groupid: string,
    groupname: string,
    notification: string,
    introduction: string,
    faceurl: string,
    owneruserid: string,
    createtime: number,
    membercount: number,
    ex: string,
    status: GroupStatusMap[keyof GroupStatusMap],
    creatoruserid: string,
    needverification: number,
    lookmemberinfo: number,
    applymemberfriend: number,
    notificationupdatetime: number,
    notificationuserid: string,
    attachedinfo: string,
  }
}

export class GroupMemberInfo extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  getNickname(): string;
  setNickname(value: string): void;

  getFaceurl(): string;
  setFaceurl(value: string): void;

  getRolelevel(): number;
  setRolelevel(value: number): void;

  getJointime(): number;
  setJointime(value: number): void;

  getJoinsource(): number;
  setJoinsource(value: number): void;

  getInviteruserid(): string;
  setInviteruserid(value: string): void;

  getMuteendtime(): number;
  setMuteendtime(value: number): void;

  getOperatoruserid(): string;
  setOperatoruserid(value: string): void;

  getEx(): string;
  setEx(value: string): void;

  getAttachedinfo(): string;
  setAttachedinfo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupMemberInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GroupMemberInfo): GroupMemberInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupMemberInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupMemberInfo;
  static deserializeBinaryFromReader(message: GroupMemberInfo, reader: jspb.BinaryReader): GroupMemberInfo;
}

export namespace GroupMemberInfo {
  export type AsObject = {
    groupid: string,
    userid: string,
    nickname: string,
    faceurl: string,
    rolelevel: number,
    jointime: number,
    joinsource: number,
    inviteruserid: string,
    muteendtime: number,
    operatoruserid: string,
    ex: string,
    attachedinfo: string,
  }
}

export class GroupRequestInfo extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  getGroupname(): string;
  setGroupname(value: string): void;

  getNotification(): string;
  setNotification(value: string): void;

  getIntroduction(): string;
  setIntroduction(value: string): void;

  getGroupfaceurl(): string;
  setGroupfaceurl(value: string): void;

  getCreatetime(): number;
  setCreatetime(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getCreatoruserid(): string;
  setCreatoruserid(value: string): void;

  getGrouptype(): number;
  setGrouptype(value: number): void;

  getOwneruserid(): string;
  setOwneruserid(value: string): void;

  getMembercount(): number;
  setMembercount(value: number): void;

  getUserid(): string;
  setUserid(value: string): void;

  getNickname(): string;
  setNickname(value: string): void;

  getUserfaceurl(): string;
  setUserfaceurl(value: string): void;

  getHandleresult(): number;
  setHandleresult(value: number): void;

  getReqmsg(): string;
  setReqmsg(value: string): void;

  getHandledmsg(): string;
  setHandledmsg(value: string): void;

  getReqtime(): number;
  setReqtime(value: number): void;

  getHandleuserid(): string;
  setHandleuserid(value: string): void;

  getHandledtime(): number;
  setHandledtime(value: number): void;

  getEx(): string;
  setEx(value: string): void;

  getAttachedinfo(): string;
  setAttachedinfo(value: string): void;

  getJoinsource(): number;
  setJoinsource(value: number): void;

  getInviteruserid(): string;
  setInviteruserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupRequestInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GroupRequestInfo): GroupRequestInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupRequestInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupRequestInfo;
  static deserializeBinaryFromReader(message: GroupRequestInfo, reader: jspb.BinaryReader): GroupRequestInfo;
}

export namespace GroupRequestInfo {
  export type AsObject = {
    groupid: string,
    groupname: string,
    notification: string,
    introduction: string,
    groupfaceurl: string,
    createtime: number,
    status: number,
    creatoruserid: string,
    grouptype: number,
    owneruserid: string,
    membercount: number,
    userid: string,
    nickname: string,
    userfaceurl: string,
    handleresult: number,
    reqmsg: string,
    handledmsg: string,
    reqtime: number,
    handleuserid: string,
    handledtime: number,
    ex: string,
    attachedinfo: string,
    joinsource: number,
    inviteruserid: string,
  }
}

export class Conversation extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): void;

  getConversationtype(): number;
  setConversationtype(value: number): void;

  getUserid(): string;
  setUserid(value: string): void;

  getGroupid(): string;
  setGroupid(value: string): void;

  getShowname(): string;
  setShowname(value: string): void;

  getFaceurl(): string;
  setFaceurl(value: string): void;

  getRecvmsgopt(): number;
  setRecvmsgopt(value: number): void;

  getUnreadcount(): number;
  setUnreadcount(value: number): void;

  getGroupattype(): number;
  setGroupattype(value: number): void;

  getLatestmsg(): string;
  setLatestmsg(value: string): void;

  getLatestmsgsendtime(): number;
  setLatestmsgsendtime(value: number): void;

  getDrafttext(): string;
  setDrafttext(value: string): void;

  getDrafttexttime(): number;
  setDrafttexttime(value: number): void;

  getIspinned(): boolean;
  setIspinned(value: boolean): void;

  getIsprivatechat(): boolean;
  setIsprivatechat(value: boolean): void;

  getBurnduration(): number;
  setBurnduration(value: number): void;

  getEx(): string;
  setEx(value: string): void;

  getMsgdestructtime(): number;
  setMsgdestructtime(value: number): void;

  getIsmsgdestruct(): boolean;
  setIsmsgdestruct(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Conversation.AsObject;
  static toObject(includeInstance: boolean, msg: Conversation): Conversation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Conversation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Conversation;
  static deserializeBinaryFromReader(message: Conversation, reader: jspb.BinaryReader): Conversation;
}

export namespace Conversation {
  export type AsObject = {
    conversationid: string,
    conversationtype: number,
    userid: string,
    groupid: string,
    showname: string,
    faceurl: string,
    recvmsgopt: number,
    unreadcount: number,
    groupattype: number,
    latestmsg: string,
    latestmsgsendtime: number,
    drafttext: string,
    drafttexttime: number,
    ispinned: boolean,
    isprivatechat: boolean,
    burnduration: number,
    ex: string,
    msgdestructtime: number,
    ismsgdestruct: boolean,
  }
}

export interface GroupStatusMap {
  DEFAULT: 0;
  DISMISSED: 2;
}

export const GroupStatus: GroupStatusMap;

export interface GroupFilterMap {
  ALL: 0;
  OWNER: 1;
  ADMIN: 2;
  ORDINARYUSERS: 3;
  ADMINANDORDINARYUSERS: 4;
  OWNERANDADMIN: 5;
}

export const GroupFilter: GroupFilterMap;

