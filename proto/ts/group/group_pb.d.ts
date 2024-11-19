// package: openim.sdk.group
// file: group.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as user_pb from "./user_pb";

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

export class CreateGroupReq extends jspb.Message {
  clearMemberuseridsList(): void;
  getMemberuseridsList(): Array<string>;
  setMemberuseridsList(value: Array<string>): void;
  addMemberuserids(value: string, index?: number): string;

  clearAdminuseridsList(): void;
  getAdminuseridsList(): Array<string>;
  setAdminuseridsList(value: Array<string>): void;
  addAdminuserids(value: string, index?: number): string;

  hasGroupinfo(): boolean;
  clearGroupinfo(): void;
  getGroupinfo(): GroupInfo | undefined;
  setGroupinfo(value?: GroupInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupReq): CreateGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupReq;
  static deserializeBinaryFromReader(message: CreateGroupReq, reader: jspb.BinaryReader): CreateGroupReq;
}

export namespace CreateGroupReq {
  export type AsObject = {
    memberuseridsList: Array<string>,
    adminuseridsList: Array<string>,
    groupinfo?: GroupInfo.AsObject,
  }
}

export class CreateGroupResp extends jspb.Message {
  hasGroupinfo(): boolean;
  clearGroupinfo(): void;
  getGroupinfo(): GroupInfo | undefined;
  setGroupinfo(value?: GroupInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupResp): CreateGroupResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGroupResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupResp;
  static deserializeBinaryFromReader(message: CreateGroupResp, reader: jspb.BinaryReader): CreateGroupResp;
}

export namespace CreateGroupResp {
  export type AsObject = {
    groupinfo?: GroupInfo.AsObject,
  }
}

export class JoinGroupReq extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  getReqmessage(): string;
  setReqmessage(value: string): void;

  getJoinsource(): number;
  setJoinsource(value: number): void;

  getEx(): string;
  setEx(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: JoinGroupReq): JoinGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinGroupReq;
  static deserializeBinaryFromReader(message: JoinGroupReq, reader: jspb.BinaryReader): JoinGroupReq;
}

export namespace JoinGroupReq {
  export type AsObject = {
    groupid: string,
    reqmessage: string,
    joinsource: number,
    ex: string,
  }
}

export class JoinGroupResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinGroupResp.AsObject;
  static toObject(includeInstance: boolean, msg: JoinGroupResp): JoinGroupResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinGroupResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinGroupResp;
  static deserializeBinaryFromReader(message: JoinGroupResp, reader: jspb.BinaryReader): JoinGroupResp;
}

export namespace JoinGroupResp {
  export type AsObject = {
  }
}

export class QuitGroupReq extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuitGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: QuitGroupReq): QuitGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuitGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuitGroupReq;
  static deserializeBinaryFromReader(message: QuitGroupReq, reader: jspb.BinaryReader): QuitGroupReq;
}

export namespace QuitGroupReq {
  export type AsObject = {
    groupid: string,
  }
}

export class QuitGroupResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuitGroupResp.AsObject;
  static toObject(includeInstance: boolean, msg: QuitGroupResp): QuitGroupResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuitGroupResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuitGroupResp;
  static deserializeBinaryFromReader(message: QuitGroupResp, reader: jspb.BinaryReader): QuitGroupResp;
}

export namespace QuitGroupResp {
  export type AsObject = {
  }
}

export class DismissGroupReq extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DismissGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: DismissGroupReq): DismissGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DismissGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DismissGroupReq;
  static deserializeBinaryFromReader(message: DismissGroupReq, reader: jspb.BinaryReader): DismissGroupReq;
}

export namespace DismissGroupReq {
  export type AsObject = {
    groupid: string,
  }
}

export class DismissGroupResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DismissGroupResp.AsObject;
  static toObject(includeInstance: boolean, msg: DismissGroupResp): DismissGroupResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DismissGroupResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DismissGroupResp;
  static deserializeBinaryFromReader(message: DismissGroupResp, reader: jspb.BinaryReader): DismissGroupResp;
}

export namespace DismissGroupResp {
  export type AsObject = {
  }
}

export class ChangeGroupMuteReq extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  getMute(): boolean;
  setMute(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeGroupMuteReq.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeGroupMuteReq): ChangeGroupMuteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeGroupMuteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeGroupMuteReq;
  static deserializeBinaryFromReader(message: ChangeGroupMuteReq, reader: jspb.BinaryReader): ChangeGroupMuteReq;
}

export namespace ChangeGroupMuteReq {
  export type AsObject = {
    groupid: string,
    mute: boolean,
  }
}

export class ChangeGroupMuteResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeGroupMuteResp.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeGroupMuteResp): ChangeGroupMuteResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeGroupMuteResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeGroupMuteResp;
  static deserializeBinaryFromReader(message: ChangeGroupMuteResp, reader: jspb.BinaryReader): ChangeGroupMuteResp;
}

export namespace ChangeGroupMuteResp {
  export type AsObject = {
  }
}

export class ChangeGroupMemberMuteReq extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  getMutedseconds(): number;
  setMutedseconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeGroupMemberMuteReq.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeGroupMemberMuteReq): ChangeGroupMemberMuteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeGroupMemberMuteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeGroupMemberMuteReq;
  static deserializeBinaryFromReader(message: ChangeGroupMemberMuteReq, reader: jspb.BinaryReader): ChangeGroupMemberMuteReq;
}

export namespace ChangeGroupMemberMuteReq {
  export type AsObject = {
    groupid: string,
    userid: string,
    mutedseconds: number,
  }
}

export class ChangeGroupMemberMuteResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeGroupMemberMuteResp.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeGroupMemberMuteResp): ChangeGroupMemberMuteResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeGroupMemberMuteResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeGroupMemberMuteResp;
  static deserializeBinaryFromReader(message: ChangeGroupMemberMuteResp, reader: jspb.BinaryReader): ChangeGroupMemberMuteResp;
}

export namespace ChangeGroupMemberMuteResp {
  export type AsObject = {
  }
}

export class TransferGroupOwnerReq extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  getOwneruserid(): string;
  setOwneruserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferGroupOwnerReq.AsObject;
  static toObject(includeInstance: boolean, msg: TransferGroupOwnerReq): TransferGroupOwnerReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferGroupOwnerReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferGroupOwnerReq;
  static deserializeBinaryFromReader(message: TransferGroupOwnerReq, reader: jspb.BinaryReader): TransferGroupOwnerReq;
}

export namespace TransferGroupOwnerReq {
  export type AsObject = {
    groupid: string,
    owneruserid: string,
  }
}

export class TransferGroupOwnerResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferGroupOwnerResp.AsObject;
  static toObject(includeInstance: boolean, msg: TransferGroupOwnerResp): TransferGroupOwnerResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferGroupOwnerResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferGroupOwnerResp;
  static deserializeBinaryFromReader(message: TransferGroupOwnerResp, reader: jspb.BinaryReader): TransferGroupOwnerResp;
}

export namespace TransferGroupOwnerResp {
  export type AsObject = {
  }
}

export class KickGroupMemberReq extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  clearKickeduseridsList(): void;
  getKickeduseridsList(): Array<string>;
  setKickeduseridsList(value: Array<string>): void;
  addKickeduserids(value: string, index?: number): string;

  getReason(): string;
  setReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KickGroupMemberReq.AsObject;
  static toObject(includeInstance: boolean, msg: KickGroupMemberReq): KickGroupMemberReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KickGroupMemberReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KickGroupMemberReq;
  static deserializeBinaryFromReader(message: KickGroupMemberReq, reader: jspb.BinaryReader): KickGroupMemberReq;
}

export namespace KickGroupMemberReq {
  export type AsObject = {
    groupid: string,
    kickeduseridsList: Array<string>,
    reason: string,
  }
}

export class KickGroupMemberResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KickGroupMemberResp.AsObject;
  static toObject(includeInstance: boolean, msg: KickGroupMemberResp): KickGroupMemberResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KickGroupMemberResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KickGroupMemberResp;
  static deserializeBinaryFromReader(message: KickGroupMemberResp, reader: jspb.BinaryReader): KickGroupMemberResp;
}

export namespace KickGroupMemberResp {
  export type AsObject = {
  }
}

export class SetGroupInfoReq extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  hasGroupname(): boolean;
  clearGroupname(): void;
  getGroupname(): string;
  setGroupname(value: string): void;

  hasNotification(): boolean;
  clearNotification(): void;
  getNotification(): string;
  setNotification(value: string): void;

  hasIntroduction(): boolean;
  clearIntroduction(): void;
  getIntroduction(): string;
  setIntroduction(value: string): void;

  hasFaceurl(): boolean;
  clearFaceurl(): void;
  getFaceurl(): string;
  setFaceurl(value: string): void;

  hasEx(): boolean;
  clearEx(): void;
  getEx(): string;
  setEx(value: string): void;

  hasNeedverification(): boolean;
  clearNeedverification(): void;
  getNeedverification(): number;
  setNeedverification(value: number): void;

  hasLookmemberinfo(): boolean;
  clearLookmemberinfo(): void;
  getLookmemberinfo(): number;
  setLookmemberinfo(value: number): void;

  hasApplymemberfriend(): boolean;
  clearApplymemberfriend(): void;
  getApplymemberfriend(): number;
  setApplymemberfriend(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetGroupInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetGroupInfoReq): SetGroupInfoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetGroupInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetGroupInfoReq;
  static deserializeBinaryFromReader(message: SetGroupInfoReq, reader: jspb.BinaryReader): SetGroupInfoReq;
}

export namespace SetGroupInfoReq {
  export type AsObject = {
    groupid: string,
    groupname: string,
    notification: string,
    introduction: string,
    faceurl: string,
    ex: string,
    needverification: number,
    lookmemberinfo: number,
    applymemberfriend: number,
  }
}

export class SetGroupInfoResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetGroupInfoResp.AsObject;
  static toObject(includeInstance: boolean, msg: SetGroupInfoResp): SetGroupInfoResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetGroupInfoResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetGroupInfoResp;
  static deserializeBinaryFromReader(message: SetGroupInfoResp, reader: jspb.BinaryReader): SetGroupInfoResp;
}

export namespace SetGroupInfoResp {
  export type AsObject = {
  }
}

export class SetGroupMemberInfoReq extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  hasNickname(): boolean;
  clearNickname(): void;
  getNickname(): string;
  setNickname(value: string): void;

  hasFaceurl(): boolean;
  clearFaceurl(): void;
  getFaceurl(): string;
  setFaceurl(value: string): void;

  hasRolelevel(): boolean;
  clearRolelevel(): void;
  getRolelevel(): number;
  setRolelevel(value: number): void;

  hasEx(): boolean;
  clearEx(): void;
  getEx(): string;
  setEx(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetGroupMemberInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetGroupMemberInfoReq): SetGroupMemberInfoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetGroupMemberInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetGroupMemberInfoReq;
  static deserializeBinaryFromReader(message: SetGroupMemberInfoReq, reader: jspb.BinaryReader): SetGroupMemberInfoReq;
}

export namespace SetGroupMemberInfoReq {
  export type AsObject = {
    groupid: string,
    userid: string,
    nickname: string,
    faceurl: string,
    rolelevel: number,
    ex: string,
  }
}

export class SetGroupMemberInfoResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetGroupMemberInfoResp.AsObject;
  static toObject(includeInstance: boolean, msg: SetGroupMemberInfoResp): SetGroupMemberInfoResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetGroupMemberInfoResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetGroupMemberInfoResp;
  static deserializeBinaryFromReader(message: SetGroupMemberInfoResp, reader: jspb.BinaryReader): SetGroupMemberInfoResp;
}

export namespace SetGroupMemberInfoResp {
  export type AsObject = {
  }
}

export class GetJoinedGroupsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJoinedGroupsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetJoinedGroupsReq): GetJoinedGroupsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetJoinedGroupsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJoinedGroupsReq;
  static deserializeBinaryFromReader(message: GetJoinedGroupsReq, reader: jspb.BinaryReader): GetJoinedGroupsReq;
}

export namespace GetJoinedGroupsReq {
  export type AsObject = {
  }
}

export class GetJoinedGroupsResp extends jspb.Message {
  clearGroupsList(): void;
  getGroupsList(): Array<GroupInfo>;
  setGroupsList(value: Array<GroupInfo>): void;
  addGroups(value?: GroupInfo, index?: number): GroupInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJoinedGroupsResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetJoinedGroupsResp): GetJoinedGroupsResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetJoinedGroupsResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJoinedGroupsResp;
  static deserializeBinaryFromReader(message: GetJoinedGroupsResp, reader: jspb.BinaryReader): GetJoinedGroupsResp;
}

export namespace GetJoinedGroupsResp {
  export type AsObject = {
    groupsList: Array<GroupInfo.AsObject>,
  }
}

export class GetJoinedGroupsPageReq extends jspb.Message {
  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): common_pb.RequestPagination | undefined;
  setPagination(value?: common_pb.RequestPagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJoinedGroupsPageReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetJoinedGroupsPageReq): GetJoinedGroupsPageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetJoinedGroupsPageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJoinedGroupsPageReq;
  static deserializeBinaryFromReader(message: GetJoinedGroupsPageReq, reader: jspb.BinaryReader): GetJoinedGroupsPageReq;
}

export namespace GetJoinedGroupsPageReq {
  export type AsObject = {
    pagination?: common_pb.RequestPagination.AsObject,
  }
}

export class GetJoinedGroupsPageResp extends jspb.Message {
  clearGroupsList(): void;
  getGroupsList(): Array<GroupInfo>;
  setGroupsList(value: Array<GroupInfo>): void;
  addGroups(value?: GroupInfo, index?: number): GroupInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJoinedGroupsPageResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetJoinedGroupsPageResp): GetJoinedGroupsPageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetJoinedGroupsPageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJoinedGroupsPageResp;
  static deserializeBinaryFromReader(message: GetJoinedGroupsPageResp, reader: jspb.BinaryReader): GetJoinedGroupsPageResp;
}

export namespace GetJoinedGroupsPageResp {
  export type AsObject = {
    groupsList: Array<GroupInfo.AsObject>,
  }
}

export class GetSpecifiedGroupsInfoReq extends jspb.Message {
  clearGroupidsList(): void;
  getGroupidsList(): Array<string>;
  setGroupidsList(value: Array<string>): void;
  addGroupids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSpecifiedGroupsInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSpecifiedGroupsInfoReq): GetSpecifiedGroupsInfoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSpecifiedGroupsInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSpecifiedGroupsInfoReq;
  static deserializeBinaryFromReader(message: GetSpecifiedGroupsInfoReq, reader: jspb.BinaryReader): GetSpecifiedGroupsInfoReq;
}

export namespace GetSpecifiedGroupsInfoReq {
  export type AsObject = {
    groupidsList: Array<string>,
  }
}

export class GetSpecifiedGroupsInfoResp extends jspb.Message {
  clearGroupsList(): void;
  getGroupsList(): Array<GroupInfo>;
  setGroupsList(value: Array<GroupInfo>): void;
  addGroups(value?: GroupInfo, index?: number): GroupInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSpecifiedGroupsInfoResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetSpecifiedGroupsInfoResp): GetSpecifiedGroupsInfoResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSpecifiedGroupsInfoResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSpecifiedGroupsInfoResp;
  static deserializeBinaryFromReader(message: GetSpecifiedGroupsInfoResp, reader: jspb.BinaryReader): GetSpecifiedGroupsInfoResp;
}

export namespace GetSpecifiedGroupsInfoResp {
  export type AsObject = {
    groupsList: Array<GroupInfo.AsObject>,
  }
}

export class SearchGroupsReq extends jspb.Message {
  getKeyword(): string;
  setKeyword(value: string): void;

  getSearchgroupid(): boolean;
  setSearchgroupid(value: boolean): void;

  getSearchgroupname(): boolean;
  setSearchgroupname(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchGroupsReq.AsObject;
  static toObject(includeInstance: boolean, msg: SearchGroupsReq): SearchGroupsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchGroupsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchGroupsReq;
  static deserializeBinaryFromReader(message: SearchGroupsReq, reader: jspb.BinaryReader): SearchGroupsReq;
}

export namespace SearchGroupsReq {
  export type AsObject = {
    keyword: string,
    searchgroupid: boolean,
    searchgroupname: boolean,
  }
}

export class SearchGroupsResp extends jspb.Message {
  clearGroupsList(): void;
  getGroupsList(): Array<GroupInfo>;
  setGroupsList(value: Array<GroupInfo>): void;
  addGroups(value?: GroupInfo, index?: number): GroupInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchGroupsResp.AsObject;
  static toObject(includeInstance: boolean, msg: SearchGroupsResp): SearchGroupsResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchGroupsResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchGroupsResp;
  static deserializeBinaryFromReader(message: SearchGroupsResp, reader: jspb.BinaryReader): SearchGroupsResp;
}

export namespace SearchGroupsResp {
  export type AsObject = {
    groupsList: Array<GroupInfo.AsObject>,
  }
}

export class GetGroupMemberOwnerAndAdminReq extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupMemberOwnerAndAdminReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupMemberOwnerAndAdminReq): GetGroupMemberOwnerAndAdminReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupMemberOwnerAndAdminReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupMemberOwnerAndAdminReq;
  static deserializeBinaryFromReader(message: GetGroupMemberOwnerAndAdminReq, reader: jspb.BinaryReader): GetGroupMemberOwnerAndAdminReq;
}

export namespace GetGroupMemberOwnerAndAdminReq {
  export type AsObject = {
    groupid: string,
  }
}

export class GetGroupMemberOwnerAndAdminResp extends jspb.Message {
  clearMembersList(): void;
  getMembersList(): Array<GroupMemberInfo>;
  setMembersList(value: Array<GroupMemberInfo>): void;
  addMembers(value?: GroupMemberInfo, index?: number): GroupMemberInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupMemberOwnerAndAdminResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupMemberOwnerAndAdminResp): GetGroupMemberOwnerAndAdminResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupMemberOwnerAndAdminResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupMemberOwnerAndAdminResp;
  static deserializeBinaryFromReader(message: GetGroupMemberOwnerAndAdminResp, reader: jspb.BinaryReader): GetGroupMemberOwnerAndAdminResp;
}

export namespace GetGroupMemberOwnerAndAdminResp {
  export type AsObject = {
    membersList: Array<GroupMemberInfo.AsObject>,
  }
}

export class GetGroupMembersByJoinTimeFilterReq extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  getJointimebegin(): number;
  setJointimebegin(value: number): void;

  getJointimeend(): number;
  setJointimeend(value: number): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): common_pb.RequestPagination | undefined;
  setPagination(value?: common_pb.RequestPagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupMembersByJoinTimeFilterReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupMembersByJoinTimeFilterReq): GetGroupMembersByJoinTimeFilterReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupMembersByJoinTimeFilterReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupMembersByJoinTimeFilterReq;
  static deserializeBinaryFromReader(message: GetGroupMembersByJoinTimeFilterReq, reader: jspb.BinaryReader): GetGroupMembersByJoinTimeFilterReq;
}

export namespace GetGroupMembersByJoinTimeFilterReq {
  export type AsObject = {
    groupid: string,
    jointimebegin: number,
    jointimeend: number,
    pagination?: common_pb.RequestPagination.AsObject,
  }
}

export class GetGroupMembersByJoinTimeFilterResp extends jspb.Message {
  clearMembersList(): void;
  getMembersList(): Array<GroupMemberInfo>;
  setMembersList(value: Array<GroupMemberInfo>): void;
  addMembers(value?: GroupMemberInfo, index?: number): GroupMemberInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupMembersByJoinTimeFilterResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupMembersByJoinTimeFilterResp): GetGroupMembersByJoinTimeFilterResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupMembersByJoinTimeFilterResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupMembersByJoinTimeFilterResp;
  static deserializeBinaryFromReader(message: GetGroupMembersByJoinTimeFilterResp, reader: jspb.BinaryReader): GetGroupMembersByJoinTimeFilterResp;
}

export namespace GetGroupMembersByJoinTimeFilterResp {
  export type AsObject = {
    membersList: Array<GroupMemberInfo.AsObject>,
  }
}

export class GetSpecifiedGroupMembersInfoReq extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  clearUseridsList(): void;
  getUseridsList(): Array<string>;
  setUseridsList(value: Array<string>): void;
  addUserids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSpecifiedGroupMembersInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSpecifiedGroupMembersInfoReq): GetSpecifiedGroupMembersInfoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSpecifiedGroupMembersInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSpecifiedGroupMembersInfoReq;
  static deserializeBinaryFromReader(message: GetSpecifiedGroupMembersInfoReq, reader: jspb.BinaryReader): GetSpecifiedGroupMembersInfoReq;
}

export namespace GetSpecifiedGroupMembersInfoReq {
  export type AsObject = {
    groupid: string,
    useridsList: Array<string>,
  }
}

export class GetSpecifiedGroupMembersInfoResp extends jspb.Message {
  clearMembersList(): void;
  getMembersList(): Array<GroupMemberInfo>;
  setMembersList(value: Array<GroupMemberInfo>): void;
  addMembers(value?: GroupMemberInfo, index?: number): GroupMemberInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSpecifiedGroupMembersInfoResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetSpecifiedGroupMembersInfoResp): GetSpecifiedGroupMembersInfoResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSpecifiedGroupMembersInfoResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSpecifiedGroupMembersInfoResp;
  static deserializeBinaryFromReader(message: GetSpecifiedGroupMembersInfoResp, reader: jspb.BinaryReader): GetSpecifiedGroupMembersInfoResp;
}

export namespace GetSpecifiedGroupMembersInfoResp {
  export type AsObject = {
    membersList: Array<GroupMemberInfo.AsObject>,
  }
}

export class GetGroupMembersReq extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  getFilter(): GroupFilterMap[keyof GroupFilterMap];
  setFilter(value: GroupFilterMap[keyof GroupFilterMap]): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): common_pb.RequestPagination | undefined;
  setPagination(value?: common_pb.RequestPagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupMembersReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupMembersReq): GetGroupMembersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupMembersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupMembersReq;
  static deserializeBinaryFromReader(message: GetGroupMembersReq, reader: jspb.BinaryReader): GetGroupMembersReq;
}

export namespace GetGroupMembersReq {
  export type AsObject = {
    groupid: string,
    filter: GroupFilterMap[keyof GroupFilterMap],
    pagination?: common_pb.RequestPagination.AsObject,
  }
}

export class GetGroupMembersResp extends jspb.Message {
  clearMembersList(): void;
  getMembersList(): Array<GroupMemberInfo>;
  setMembersList(value: Array<GroupMemberInfo>): void;
  addMembers(value?: GroupMemberInfo, index?: number): GroupMemberInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupMembersResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupMembersResp): GetGroupMembersResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupMembersResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupMembersResp;
  static deserializeBinaryFromReader(message: GetGroupMembersResp, reader: jspb.BinaryReader): GetGroupMembersResp;
}

export namespace GetGroupMembersResp {
  export type AsObject = {
    membersList: Array<GroupMemberInfo.AsObject>,
  }
}

export class GetGroupRequestReq extends jspb.Message {
  getSend(): boolean;
  setSend(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupRequestReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupRequestReq): GetGroupRequestReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupRequestReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupRequestReq;
  static deserializeBinaryFromReader(message: GetGroupRequestReq, reader: jspb.BinaryReader): GetGroupRequestReq;
}

export namespace GetGroupRequestReq {
  export type AsObject = {
    send: boolean,
  }
}

export class GetGroupRequestResp extends jspb.Message {
  clearRequestsList(): void;
  getRequestsList(): Array<GroupRequestInfo>;
  setRequestsList(value: Array<GroupRequestInfo>): void;
  addRequests(value?: GroupRequestInfo, index?: number): GroupRequestInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupRequestResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupRequestResp): GetGroupRequestResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupRequestResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupRequestResp;
  static deserializeBinaryFromReader(message: GetGroupRequestResp, reader: jspb.BinaryReader): GetGroupRequestResp;
}

export namespace GetGroupRequestResp {
  export type AsObject = {
    requestsList: Array<GroupRequestInfo.AsObject>,
  }
}

export class SearchGroupMembersReq extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  getKeyword(): string;
  setKeyword(value: string): void;

  getSearchuserid(): boolean;
  setSearchuserid(value: boolean): void;

  getSearchmembernickname(): boolean;
  setSearchmembernickname(value: boolean): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): common_pb.RequestPagination | undefined;
  setPagination(value?: common_pb.RequestPagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchGroupMembersReq.AsObject;
  static toObject(includeInstance: boolean, msg: SearchGroupMembersReq): SearchGroupMembersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchGroupMembersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchGroupMembersReq;
  static deserializeBinaryFromReader(message: SearchGroupMembersReq, reader: jspb.BinaryReader): SearchGroupMembersReq;
}

export namespace SearchGroupMembersReq {
  export type AsObject = {
    groupid: string,
    keyword: string,
    searchuserid: boolean,
    searchmembernickname: boolean,
    pagination?: common_pb.RequestPagination.AsObject,
  }
}

export class SearchGroupMembersResp extends jspb.Message {
  clearMembersList(): void;
  getMembersList(): Array<GroupMemberInfo>;
  setMembersList(value: Array<GroupMemberInfo>): void;
  addMembers(value?: GroupMemberInfo, index?: number): GroupMemberInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchGroupMembersResp.AsObject;
  static toObject(includeInstance: boolean, msg: SearchGroupMembersResp): SearchGroupMembersResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchGroupMembersResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchGroupMembersResp;
  static deserializeBinaryFromReader(message: SearchGroupMembersResp, reader: jspb.BinaryReader): SearchGroupMembersResp;
}

export namespace SearchGroupMembersResp {
  export type AsObject = {
    membersList: Array<GroupMemberInfo.AsObject>,
  }
}

export class IsJoinGroupReq extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsJoinGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: IsJoinGroupReq): IsJoinGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsJoinGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsJoinGroupReq;
  static deserializeBinaryFromReader(message: IsJoinGroupReq, reader: jspb.BinaryReader): IsJoinGroupReq;
}

export namespace IsJoinGroupReq {
  export type AsObject = {
    groupid: string,
    userid: string,
  }
}

export class IsJoinGroupResp extends jspb.Message {
  getJoined(): boolean;
  setJoined(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsJoinGroupResp.AsObject;
  static toObject(includeInstance: boolean, msg: IsJoinGroupResp): IsJoinGroupResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IsJoinGroupResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsJoinGroupResp;
  static deserializeBinaryFromReader(message: IsJoinGroupResp, reader: jspb.BinaryReader): IsJoinGroupResp;
}

export namespace IsJoinGroupResp {
  export type AsObject = {
    joined: boolean,
  }
}

export class GetUsersInGroupReq extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  clearUseridsList(): void;
  getUseridsList(): Array<string>;
  setUseridsList(value: Array<string>): void;
  addUserids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersInGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersInGroupReq): GetUsersInGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUsersInGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersInGroupReq;
  static deserializeBinaryFromReader(message: GetUsersInGroupReq, reader: jspb.BinaryReader): GetUsersInGroupReq;
}

export namespace GetUsersInGroupReq {
  export type AsObject = {
    groupid: string,
    useridsList: Array<string>,
  }
}

export class GetUsersInGroupResp extends jspb.Message {
  clearUseridsList(): void;
  getUseridsList(): Array<string>;
  setUseridsList(value: Array<string>): void;
  addUserids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersInGroupResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersInGroupResp): GetUsersInGroupResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUsersInGroupResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersInGroupResp;
  static deserializeBinaryFromReader(message: GetUsersInGroupResp, reader: jspb.BinaryReader): GetUsersInGroupResp;
}

export namespace GetUsersInGroupResp {
  export type AsObject = {
    useridsList: Array<string>,
  }
}

export class InviteUserToGroupReq extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  clearUseridsList(): void;
  getUseridsList(): Array<string>;
  setUseridsList(value: Array<string>): void;
  addUserids(value: string, index?: number): string;

  getReason(): string;
  setReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteUserToGroupReq.AsObject;
  static toObject(includeInstance: boolean, msg: InviteUserToGroupReq): InviteUserToGroupReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InviteUserToGroupReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteUserToGroupReq;
  static deserializeBinaryFromReader(message: InviteUserToGroupReq, reader: jspb.BinaryReader): InviteUserToGroupReq;
}

export namespace InviteUserToGroupReq {
  export type AsObject = {
    groupid: string,
    useridsList: Array<string>,
    reason: string,
  }
}

export class InviteUserToGroupResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteUserToGroupResp.AsObject;
  static toObject(includeInstance: boolean, msg: InviteUserToGroupResp): InviteUserToGroupResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InviteUserToGroupResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteUserToGroupResp;
  static deserializeBinaryFromReader(message: InviteUserToGroupResp, reader: jspb.BinaryReader): InviteUserToGroupResp;
}

export namespace InviteUserToGroupResp {
  export type AsObject = {
  }
}

export class HandlerGroupRequestReq extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  getFromuserid(): string;
  setFromuserid(value: string): void;

  getHandledmsg(): string;
  setHandledmsg(value: string): void;

  getStatus(): common_pb.ApprovalStatusMap[keyof common_pb.ApprovalStatusMap];
  setStatus(value: common_pb.ApprovalStatusMap[keyof common_pb.ApprovalStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandlerGroupRequestReq.AsObject;
  static toObject(includeInstance: boolean, msg: HandlerGroupRequestReq): HandlerGroupRequestReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HandlerGroupRequestReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandlerGroupRequestReq;
  static deserializeBinaryFromReader(message: HandlerGroupRequestReq, reader: jspb.BinaryReader): HandlerGroupRequestReq;
}

export namespace HandlerGroupRequestReq {
  export type AsObject = {
    groupid: string,
    fromuserid: string,
    handledmsg: string,
    status: common_pb.ApprovalStatusMap[keyof common_pb.ApprovalStatusMap],
  }
}

export class HandlerGroupRequestResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandlerGroupRequestResp.AsObject;
  static toObject(includeInstance: boolean, msg: HandlerGroupRequestResp): HandlerGroupRequestResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HandlerGroupRequestResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandlerGroupRequestResp;
  static deserializeBinaryFromReader(message: HandlerGroupRequestResp, reader: jspb.BinaryReader): HandlerGroupRequestResp;
}

export namespace HandlerGroupRequestResp {
  export type AsObject = {
  }
}

export class GetGroupMemberInfoReq extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  clearUseridsList(): void;
  getUseridsList(): Array<string>;
  setUseridsList(value: Array<string>): void;
  addUserids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupMemberInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupMemberInfoReq): GetGroupMemberInfoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupMemberInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupMemberInfoReq;
  static deserializeBinaryFromReader(message: GetGroupMemberInfoReq, reader: jspb.BinaryReader): GetGroupMemberInfoReq;
}

export namespace GetGroupMemberInfoReq {
  export type AsObject = {
    groupid: string,
    useridsList: Array<string>,
  }
}

export class GetGroupMemberInfoResp extends jspb.Message {
  getMembersMap(): jspb.Map<string, GroupMemberInfo>;
  clearMembersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupMemberInfoResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupMemberInfoResp): GetGroupMemberInfoResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGroupMemberInfoResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupMemberInfoResp;
  static deserializeBinaryFromReader(message: GetGroupMemberInfoResp, reader: jspb.BinaryReader): GetGroupMemberInfoResp;
}

export namespace GetGroupMemberInfoResp {
  export type AsObject = {
    membersMap: Array<[string, GroupMemberInfo.AsObject]>,
  }
}

export class GroupCreatedTips extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): GroupInfo | undefined;
  setGroup(value?: GroupInfo): void;

  hasOpuser(): boolean;
  clearOpuser(): void;
  getOpuser(): GroupMemberInfo | undefined;
  setOpuser(value?: GroupMemberInfo): void;

  clearMemberlistList(): void;
  getMemberlistList(): Array<GroupMemberInfo>;
  setMemberlistList(value: Array<GroupMemberInfo>): void;
  addMemberlist(value?: GroupMemberInfo, index?: number): GroupMemberInfo;

  getOperationtime(): number;
  setOperationtime(value: number): void;

  hasGroupowneruser(): boolean;
  clearGroupowneruser(): void;
  getGroupowneruser(): GroupMemberInfo | undefined;
  setGroupowneruser(value?: GroupMemberInfo): void;

  getGroupmemberversion(): number;
  setGroupmemberversion(value: number): void;

  getGroupmemberversionid(): string;
  setGroupmemberversionid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupCreatedTips.AsObject;
  static toObject(includeInstance: boolean, msg: GroupCreatedTips): GroupCreatedTips.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupCreatedTips, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupCreatedTips;
  static deserializeBinaryFromReader(message: GroupCreatedTips, reader: jspb.BinaryReader): GroupCreatedTips;
}

export namespace GroupCreatedTips {
  export type AsObject = {
    group?: GroupInfo.AsObject,
    opuser?: GroupMemberInfo.AsObject,
    memberlistList: Array<GroupMemberInfo.AsObject>,
    operationtime: number,
    groupowneruser?: GroupMemberInfo.AsObject,
    groupmemberversion: number,
    groupmemberversionid: string,
  }
}

export class GroupInfoSetTips extends jspb.Message {
  hasOpuser(): boolean;
  clearOpuser(): void;
  getOpuser(): GroupMemberInfo | undefined;
  setOpuser(value?: GroupMemberInfo): void;

  getMutetime(): number;
  setMutetime(value: number): void;

  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): GroupInfo | undefined;
  setGroup(value?: GroupInfo): void;

  getGroupmemberversion(): number;
  setGroupmemberversion(value: number): void;

  getGroupmemberversionid(): string;
  setGroupmemberversionid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupInfoSetTips.AsObject;
  static toObject(includeInstance: boolean, msg: GroupInfoSetTips): GroupInfoSetTips.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupInfoSetTips, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupInfoSetTips;
  static deserializeBinaryFromReader(message: GroupInfoSetTips, reader: jspb.BinaryReader): GroupInfoSetTips;
}

export namespace GroupInfoSetTips {
  export type AsObject = {
    opuser?: GroupMemberInfo.AsObject,
    mutetime: number,
    group?: GroupInfo.AsObject,
    groupmemberversion: number,
    groupmemberversionid: string,
  }
}

export class GroupInfoSetNameTips extends jspb.Message {
  hasOpuser(): boolean;
  clearOpuser(): void;
  getOpuser(): GroupMemberInfo | undefined;
  setOpuser(value?: GroupMemberInfo): void;

  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): GroupInfo | undefined;
  setGroup(value?: GroupInfo): void;

  getGroupmemberversion(): number;
  setGroupmemberversion(value: number): void;

  getGroupmemberversionid(): string;
  setGroupmemberversionid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupInfoSetNameTips.AsObject;
  static toObject(includeInstance: boolean, msg: GroupInfoSetNameTips): GroupInfoSetNameTips.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupInfoSetNameTips, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupInfoSetNameTips;
  static deserializeBinaryFromReader(message: GroupInfoSetNameTips, reader: jspb.BinaryReader): GroupInfoSetNameTips;
}

export namespace GroupInfoSetNameTips {
  export type AsObject = {
    opuser?: GroupMemberInfo.AsObject,
    group?: GroupInfo.AsObject,
    groupmemberversion: number,
    groupmemberversionid: string,
  }
}

export class GroupInfoSetAnnouncementTips extends jspb.Message {
  hasOpuser(): boolean;
  clearOpuser(): void;
  getOpuser(): GroupMemberInfo | undefined;
  setOpuser(value?: GroupMemberInfo): void;

  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): GroupInfo | undefined;
  setGroup(value?: GroupInfo): void;

  getGroupmemberversion(): number;
  setGroupmemberversion(value: number): void;

  getGroupmemberversionid(): string;
  setGroupmemberversionid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupInfoSetAnnouncementTips.AsObject;
  static toObject(includeInstance: boolean, msg: GroupInfoSetAnnouncementTips): GroupInfoSetAnnouncementTips.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupInfoSetAnnouncementTips, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupInfoSetAnnouncementTips;
  static deserializeBinaryFromReader(message: GroupInfoSetAnnouncementTips, reader: jspb.BinaryReader): GroupInfoSetAnnouncementTips;
}

export namespace GroupInfoSetAnnouncementTips {
  export type AsObject = {
    opuser?: GroupMemberInfo.AsObject,
    group?: GroupInfo.AsObject,
    groupmemberversion: number,
    groupmemberversionid: string,
  }
}

export class JoinGroupApplicationTips extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): GroupInfo | undefined;
  setGroup(value?: GroupInfo): void;

  hasApplicant(): boolean;
  clearApplicant(): void;
  getApplicant(): user_pb.UserInfo | undefined;
  setApplicant(value?: user_pb.UserInfo): void;

  getReqmsg(): string;
  setReqmsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinGroupApplicationTips.AsObject;
  static toObject(includeInstance: boolean, msg: JoinGroupApplicationTips): JoinGroupApplicationTips.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinGroupApplicationTips, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinGroupApplicationTips;
  static deserializeBinaryFromReader(message: JoinGroupApplicationTips, reader: jspb.BinaryReader): JoinGroupApplicationTips;
}

export namespace JoinGroupApplicationTips {
  export type AsObject = {
    group?: GroupInfo.AsObject,
    applicant?: user_pb.UserInfo.AsObject,
    reqmsg: string,
  }
}

export class MemberQuitTips extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): GroupInfo | undefined;
  setGroup(value?: GroupInfo): void;

  hasQuituser(): boolean;
  clearQuituser(): void;
  getQuituser(): GroupMemberInfo | undefined;
  setQuituser(value?: GroupMemberInfo): void;

  getOperationtime(): number;
  setOperationtime(value: number): void;

  getGroupmemberversion(): number;
  setGroupmemberversion(value: number): void;

  getGroupmemberversionid(): string;
  setGroupmemberversionid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberQuitTips.AsObject;
  static toObject(includeInstance: boolean, msg: MemberQuitTips): MemberQuitTips.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemberQuitTips, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberQuitTips;
  static deserializeBinaryFromReader(message: MemberQuitTips, reader: jspb.BinaryReader): MemberQuitTips;
}

export namespace MemberQuitTips {
  export type AsObject = {
    group?: GroupInfo.AsObject,
    quituser?: GroupMemberInfo.AsObject,
    operationtime: number,
    groupmemberversion: number,
    groupmemberversionid: string,
  }
}

export class GroupApplicationAcceptedTips extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): GroupInfo | undefined;
  setGroup(value?: GroupInfo): void;

  hasOpuser(): boolean;
  clearOpuser(): void;
  getOpuser(): GroupMemberInfo | undefined;
  setOpuser(value?: GroupMemberInfo): void;

  getHandlemsg(): string;
  setHandlemsg(value: string): void;

  getReceiveras(): number;
  setReceiveras(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupApplicationAcceptedTips.AsObject;
  static toObject(includeInstance: boolean, msg: GroupApplicationAcceptedTips): GroupApplicationAcceptedTips.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupApplicationAcceptedTips, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupApplicationAcceptedTips;
  static deserializeBinaryFromReader(message: GroupApplicationAcceptedTips, reader: jspb.BinaryReader): GroupApplicationAcceptedTips;
}

export namespace GroupApplicationAcceptedTips {
  export type AsObject = {
    group?: GroupInfo.AsObject,
    opuser?: GroupMemberInfo.AsObject,
    handlemsg: string,
    receiveras: number,
  }
}

export class GroupApplicationRejectedTips extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): GroupInfo | undefined;
  setGroup(value?: GroupInfo): void;

  hasOpuser(): boolean;
  clearOpuser(): void;
  getOpuser(): GroupMemberInfo | undefined;
  setOpuser(value?: GroupMemberInfo): void;

  getHandlemsg(): string;
  setHandlemsg(value: string): void;

  getReceiveras(): number;
  setReceiveras(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupApplicationRejectedTips.AsObject;
  static toObject(includeInstance: boolean, msg: GroupApplicationRejectedTips): GroupApplicationRejectedTips.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupApplicationRejectedTips, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupApplicationRejectedTips;
  static deserializeBinaryFromReader(message: GroupApplicationRejectedTips, reader: jspb.BinaryReader): GroupApplicationRejectedTips;
}

export namespace GroupApplicationRejectedTips {
  export type AsObject = {
    group?: GroupInfo.AsObject,
    opuser?: GroupMemberInfo.AsObject,
    handlemsg: string,
    receiveras: number,
  }
}

export class GroupOwnerTransferredTips extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): GroupInfo | undefined;
  setGroup(value?: GroupInfo): void;

  hasOpuser(): boolean;
  clearOpuser(): void;
  getOpuser(): GroupMemberInfo | undefined;
  setOpuser(value?: GroupMemberInfo): void;

  hasNewgroupowner(): boolean;
  clearNewgroupowner(): void;
  getNewgroupowner(): GroupMemberInfo | undefined;
  setNewgroupowner(value?: GroupMemberInfo): void;

  getOldgroupowner(): string;
  setOldgroupowner(value: string): void;

  getOperationtime(): number;
  setOperationtime(value: number): void;

  hasOldgroupownerinfo(): boolean;
  clearOldgroupownerinfo(): void;
  getOldgroupownerinfo(): GroupMemberInfo | undefined;
  setOldgroupownerinfo(value?: GroupMemberInfo): void;

  getGroupmemberversion(): number;
  setGroupmemberversion(value: number): void;

  getGroupmemberversionid(): string;
  setGroupmemberversionid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupOwnerTransferredTips.AsObject;
  static toObject(includeInstance: boolean, msg: GroupOwnerTransferredTips): GroupOwnerTransferredTips.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupOwnerTransferredTips, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupOwnerTransferredTips;
  static deserializeBinaryFromReader(message: GroupOwnerTransferredTips, reader: jspb.BinaryReader): GroupOwnerTransferredTips;
}

export namespace GroupOwnerTransferredTips {
  export type AsObject = {
    group?: GroupInfo.AsObject,
    opuser?: GroupMemberInfo.AsObject,
    newgroupowner?: GroupMemberInfo.AsObject,
    oldgroupowner: string,
    operationtime: number,
    oldgroupownerinfo?: GroupMemberInfo.AsObject,
    groupmemberversion: number,
    groupmemberversionid: string,
  }
}

export class MemberKickedTips extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): GroupInfo | undefined;
  setGroup(value?: GroupInfo): void;

  hasOpuser(): boolean;
  clearOpuser(): void;
  getOpuser(): GroupMemberInfo | undefined;
  setOpuser(value?: GroupMemberInfo): void;

  clearKickeduserlistList(): void;
  getKickeduserlistList(): Array<GroupMemberInfo>;
  setKickeduserlistList(value: Array<GroupMemberInfo>): void;
  addKickeduserlist(value?: GroupMemberInfo, index?: number): GroupMemberInfo;

  getOperationtime(): number;
  setOperationtime(value: number): void;

  getGroupmemberversion(): number;
  setGroupmemberversion(value: number): void;

  getGroupmemberversionid(): string;
  setGroupmemberversionid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberKickedTips.AsObject;
  static toObject(includeInstance: boolean, msg: MemberKickedTips): MemberKickedTips.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemberKickedTips, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberKickedTips;
  static deserializeBinaryFromReader(message: MemberKickedTips, reader: jspb.BinaryReader): MemberKickedTips;
}

export namespace MemberKickedTips {
  export type AsObject = {
    group?: GroupInfo.AsObject,
    opuser?: GroupMemberInfo.AsObject,
    kickeduserlistList: Array<GroupMemberInfo.AsObject>,
    operationtime: number,
    groupmemberversion: number,
    groupmemberversionid: string,
  }
}

export class MemberInvitedTips extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): GroupInfo | undefined;
  setGroup(value?: GroupInfo): void;

  hasOpuser(): boolean;
  clearOpuser(): void;
  getOpuser(): GroupMemberInfo | undefined;
  setOpuser(value?: GroupMemberInfo): void;

  clearInviteduserlistList(): void;
  getInviteduserlistList(): Array<GroupMemberInfo>;
  setInviteduserlistList(value: Array<GroupMemberInfo>): void;
  addInviteduserlist(value?: GroupMemberInfo, index?: number): GroupMemberInfo;

  getOperationtime(): number;
  setOperationtime(value: number): void;

  getGroupmemberversion(): number;
  setGroupmemberversion(value: number): void;

  getGroupmemberversionid(): string;
  setGroupmemberversionid(value: string): void;

  hasInviteruser(): boolean;
  clearInviteruser(): void;
  getInviteruser(): GroupMemberInfo | undefined;
  setInviteruser(value?: GroupMemberInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberInvitedTips.AsObject;
  static toObject(includeInstance: boolean, msg: MemberInvitedTips): MemberInvitedTips.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemberInvitedTips, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberInvitedTips;
  static deserializeBinaryFromReader(message: MemberInvitedTips, reader: jspb.BinaryReader): MemberInvitedTips;
}

export namespace MemberInvitedTips {
  export type AsObject = {
    group?: GroupInfo.AsObject,
    opuser?: GroupMemberInfo.AsObject,
    inviteduserlistList: Array<GroupMemberInfo.AsObject>,
    operationtime: number,
    groupmemberversion: number,
    groupmemberversionid: string,
    inviteruser?: GroupMemberInfo.AsObject,
  }
}

export class MemberEnterTips extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): GroupInfo | undefined;
  setGroup(value?: GroupInfo): void;

  hasEntrantuser(): boolean;
  clearEntrantuser(): void;
  getEntrantuser(): GroupMemberInfo | undefined;
  setEntrantuser(value?: GroupMemberInfo): void;

  getOperationtime(): number;
  setOperationtime(value: number): void;

  getGroupmemberversion(): number;
  setGroupmemberversion(value: number): void;

  getGroupmemberversionid(): string;
  setGroupmemberversionid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberEnterTips.AsObject;
  static toObject(includeInstance: boolean, msg: MemberEnterTips): MemberEnterTips.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemberEnterTips, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberEnterTips;
  static deserializeBinaryFromReader(message: MemberEnterTips, reader: jspb.BinaryReader): MemberEnterTips;
}

export namespace MemberEnterTips {
  export type AsObject = {
    group?: GroupInfo.AsObject,
    entrantuser?: GroupMemberInfo.AsObject,
    operationtime: number,
    groupmemberversion: number,
    groupmemberversionid: string,
  }
}

export class GroupDismissedTips extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): GroupInfo | undefined;
  setGroup(value?: GroupInfo): void;

  hasOpuser(): boolean;
  clearOpuser(): void;
  getOpuser(): GroupMemberInfo | undefined;
  setOpuser(value?: GroupMemberInfo): void;

  getOperationtime(): number;
  setOperationtime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupDismissedTips.AsObject;
  static toObject(includeInstance: boolean, msg: GroupDismissedTips): GroupDismissedTips.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupDismissedTips, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupDismissedTips;
  static deserializeBinaryFromReader(message: GroupDismissedTips, reader: jspb.BinaryReader): GroupDismissedTips;
}

export namespace GroupDismissedTips {
  export type AsObject = {
    group?: GroupInfo.AsObject,
    opuser?: GroupMemberInfo.AsObject,
    operationtime: number,
  }
}

export class GroupMemberMutedTips extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): GroupInfo | undefined;
  setGroup(value?: GroupInfo): void;

  hasOpuser(): boolean;
  clearOpuser(): void;
  getOpuser(): GroupMemberInfo | undefined;
  setOpuser(value?: GroupMemberInfo): void;

  getOperationtime(): number;
  setOperationtime(value: number): void;

  hasMuteduser(): boolean;
  clearMuteduser(): void;
  getMuteduser(): GroupMemberInfo | undefined;
  setMuteduser(value?: GroupMemberInfo): void;

  getMutedseconds(): number;
  setMutedseconds(value: number): void;

  getGroupmemberversion(): number;
  setGroupmemberversion(value: number): void;

  getGroupmemberversionid(): string;
  setGroupmemberversionid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupMemberMutedTips.AsObject;
  static toObject(includeInstance: boolean, msg: GroupMemberMutedTips): GroupMemberMutedTips.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupMemberMutedTips, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupMemberMutedTips;
  static deserializeBinaryFromReader(message: GroupMemberMutedTips, reader: jspb.BinaryReader): GroupMemberMutedTips;
}

export namespace GroupMemberMutedTips {
  export type AsObject = {
    group?: GroupInfo.AsObject,
    opuser?: GroupMemberInfo.AsObject,
    operationtime: number,
    muteduser?: GroupMemberInfo.AsObject,
    mutedseconds: number,
    groupmemberversion: number,
    groupmemberversionid: string,
  }
}

export class GroupMemberCancelMutedTips extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): GroupInfo | undefined;
  setGroup(value?: GroupInfo): void;

  hasOpuser(): boolean;
  clearOpuser(): void;
  getOpuser(): GroupMemberInfo | undefined;
  setOpuser(value?: GroupMemberInfo): void;

  getOperationtime(): number;
  setOperationtime(value: number): void;

  hasMuteduser(): boolean;
  clearMuteduser(): void;
  getMuteduser(): GroupMemberInfo | undefined;
  setMuteduser(value?: GroupMemberInfo): void;

  getGroupmemberversion(): number;
  setGroupmemberversion(value: number): void;

  getGroupmemberversionid(): string;
  setGroupmemberversionid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupMemberCancelMutedTips.AsObject;
  static toObject(includeInstance: boolean, msg: GroupMemberCancelMutedTips): GroupMemberCancelMutedTips.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupMemberCancelMutedTips, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupMemberCancelMutedTips;
  static deserializeBinaryFromReader(message: GroupMemberCancelMutedTips, reader: jspb.BinaryReader): GroupMemberCancelMutedTips;
}

export namespace GroupMemberCancelMutedTips {
  export type AsObject = {
    group?: GroupInfo.AsObject,
    opuser?: GroupMemberInfo.AsObject,
    operationtime: number,
    muteduser?: GroupMemberInfo.AsObject,
    groupmemberversion: number,
    groupmemberversionid: string,
  }
}

export class GroupMutedTips extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): GroupInfo | undefined;
  setGroup(value?: GroupInfo): void;

  hasOpuser(): boolean;
  clearOpuser(): void;
  getOpuser(): GroupMemberInfo | undefined;
  setOpuser(value?: GroupMemberInfo): void;

  getOperationtime(): number;
  setOperationtime(value: number): void;

  getGroupmemberversion(): number;
  setGroupmemberversion(value: number): void;

  getGroupmemberversionid(): string;
  setGroupmemberversionid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupMutedTips.AsObject;
  static toObject(includeInstance: boolean, msg: GroupMutedTips): GroupMutedTips.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupMutedTips, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupMutedTips;
  static deserializeBinaryFromReader(message: GroupMutedTips, reader: jspb.BinaryReader): GroupMutedTips;
}

export namespace GroupMutedTips {
  export type AsObject = {
    group?: GroupInfo.AsObject,
    opuser?: GroupMemberInfo.AsObject,
    operationtime: number,
    groupmemberversion: number,
    groupmemberversionid: string,
  }
}

export class GroupCancelMutedTips extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): GroupInfo | undefined;
  setGroup(value?: GroupInfo): void;

  hasOpuser(): boolean;
  clearOpuser(): void;
  getOpuser(): GroupMemberInfo | undefined;
  setOpuser(value?: GroupMemberInfo): void;

  getOperationtime(): number;
  setOperationtime(value: number): void;

  getGroupmemberversion(): number;
  setGroupmemberversion(value: number): void;

  getGroupmemberversionid(): string;
  setGroupmemberversionid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupCancelMutedTips.AsObject;
  static toObject(includeInstance: boolean, msg: GroupCancelMutedTips): GroupCancelMutedTips.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupCancelMutedTips, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupCancelMutedTips;
  static deserializeBinaryFromReader(message: GroupCancelMutedTips, reader: jspb.BinaryReader): GroupCancelMutedTips;
}

export namespace GroupCancelMutedTips {
  export type AsObject = {
    group?: GroupInfo.AsObject,
    opuser?: GroupMemberInfo.AsObject,
    operationtime: number,
    groupmemberversion: number,
    groupmemberversionid: string,
  }
}

export class GroupMemberInfoSetTips extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): GroupInfo | undefined;
  setGroup(value?: GroupInfo): void;

  hasOpuser(): boolean;
  clearOpuser(): void;
  getOpuser(): GroupMemberInfo | undefined;
  setOpuser(value?: GroupMemberInfo): void;

  getOperationtime(): number;
  setOperationtime(value: number): void;

  hasChangeduser(): boolean;
  clearChangeduser(): void;
  getChangeduser(): GroupMemberInfo | undefined;
  setChangeduser(value?: GroupMemberInfo): void;

  getGroupmemberversion(): number;
  setGroupmemberversion(value: number): void;

  getGroupmemberversionid(): string;
  setGroupmemberversionid(value: string): void;

  getGroupsortversion(): number;
  setGroupsortversion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupMemberInfoSetTips.AsObject;
  static toObject(includeInstance: boolean, msg: GroupMemberInfoSetTips): GroupMemberInfoSetTips.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupMemberInfoSetTips, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupMemberInfoSetTips;
  static deserializeBinaryFromReader(message: GroupMemberInfoSetTips, reader: jspb.BinaryReader): GroupMemberInfoSetTips;
}

export namespace GroupMemberInfoSetTips {
  export type AsObject = {
    group?: GroupInfo.AsObject,
    opuser?: GroupMemberInfo.AsObject,
    operationtime: number,
    changeduser?: GroupMemberInfo.AsObject,
    groupmemberversion: number,
    groupmemberversionid: string,
    groupsortversion: number,
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

