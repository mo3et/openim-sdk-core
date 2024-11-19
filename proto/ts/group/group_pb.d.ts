// package: openim.sdk.group
// file: group.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as shared_pb from "./shared_pb";

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
  getGroupinfo(): shared_pb.GroupInfo | undefined;
  setGroupinfo(value?: shared_pb.GroupInfo): void;

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
    groupinfo?: shared_pb.GroupInfo.AsObject,
  }
}

export class CreateGroupResp extends jspb.Message {
  hasGroupinfo(): boolean;
  clearGroupinfo(): void;
  getGroupinfo(): shared_pb.GroupInfo | undefined;
  setGroupinfo(value?: shared_pb.GroupInfo): void;

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
    groupinfo?: shared_pb.GroupInfo.AsObject,
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
  getGroupsList(): Array<shared_pb.GroupInfo>;
  setGroupsList(value: Array<shared_pb.GroupInfo>): void;
  addGroups(value?: shared_pb.GroupInfo, index?: number): shared_pb.GroupInfo;

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
    groupsList: Array<shared_pb.GroupInfo.AsObject>,
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
  getGroupsList(): Array<shared_pb.GroupInfo>;
  setGroupsList(value: Array<shared_pb.GroupInfo>): void;
  addGroups(value?: shared_pb.GroupInfo, index?: number): shared_pb.GroupInfo;

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
    groupsList: Array<shared_pb.GroupInfo.AsObject>,
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
  getGroupsList(): Array<shared_pb.GroupInfo>;
  setGroupsList(value: Array<shared_pb.GroupInfo>): void;
  addGroups(value?: shared_pb.GroupInfo, index?: number): shared_pb.GroupInfo;

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
    groupsList: Array<shared_pb.GroupInfo.AsObject>,
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
  getGroupsList(): Array<shared_pb.GroupInfo>;
  setGroupsList(value: Array<shared_pb.GroupInfo>): void;
  addGroups(value?: shared_pb.GroupInfo, index?: number): shared_pb.GroupInfo;

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
    groupsList: Array<shared_pb.GroupInfo.AsObject>,
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
  getMembersList(): Array<shared_pb.GroupMemberInfo>;
  setMembersList(value: Array<shared_pb.GroupMemberInfo>): void;
  addMembers(value?: shared_pb.GroupMemberInfo, index?: number): shared_pb.GroupMemberInfo;

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
    membersList: Array<shared_pb.GroupMemberInfo.AsObject>,
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
  getMembersList(): Array<shared_pb.GroupMemberInfo>;
  setMembersList(value: Array<shared_pb.GroupMemberInfo>): void;
  addMembers(value?: shared_pb.GroupMemberInfo, index?: number): shared_pb.GroupMemberInfo;

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
    membersList: Array<shared_pb.GroupMemberInfo.AsObject>,
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
  getMembersList(): Array<shared_pb.GroupMemberInfo>;
  setMembersList(value: Array<shared_pb.GroupMemberInfo>): void;
  addMembers(value?: shared_pb.GroupMemberInfo, index?: number): shared_pb.GroupMemberInfo;

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
    membersList: Array<shared_pb.GroupMemberInfo.AsObject>,
  }
}

export class GetGroupMembersReq extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  getFilter(): shared_pb.GroupFilterMap[keyof shared_pb.GroupFilterMap];
  setFilter(value: shared_pb.GroupFilterMap[keyof shared_pb.GroupFilterMap]): void;

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
    filter: shared_pb.GroupFilterMap[keyof shared_pb.GroupFilterMap],
    pagination?: common_pb.RequestPagination.AsObject,
  }
}

export class GetGroupMembersResp extends jspb.Message {
  clearMembersList(): void;
  getMembersList(): Array<shared_pb.GroupMemberInfo>;
  setMembersList(value: Array<shared_pb.GroupMemberInfo>): void;
  addMembers(value?: shared_pb.GroupMemberInfo, index?: number): shared_pb.GroupMemberInfo;

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
    membersList: Array<shared_pb.GroupMemberInfo.AsObject>,
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
  getRequestsList(): Array<shared_pb.GroupRequestInfo>;
  setRequestsList(value: Array<shared_pb.GroupRequestInfo>): void;
  addRequests(value?: shared_pb.GroupRequestInfo, index?: number): shared_pb.GroupRequestInfo;

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
    requestsList: Array<shared_pb.GroupRequestInfo.AsObject>,
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
  getMembersList(): Array<shared_pb.GroupMemberInfo>;
  setMembersList(value: Array<shared_pb.GroupMemberInfo>): void;
  addMembers(value?: shared_pb.GroupMemberInfo, index?: number): shared_pb.GroupMemberInfo;

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
    membersList: Array<shared_pb.GroupMemberInfo.AsObject>,
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
  getMembersMap(): jspb.Map<string, shared_pb.GroupMemberInfo>;
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
    membersMap: Array<[string, shared_pb.GroupMemberInfo.AsObject]>,
  }
}

