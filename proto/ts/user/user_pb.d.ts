// package: openim.sdk.user
// file: user.proto

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

export class CommandInfo extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getType(): number;
  setType(value: number): void;

  getCreatetime(): number;
  setCreatetime(value: number): void;

  getUuid(): string;
  setUuid(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getEx(): string;
  setEx(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CommandInfo): CommandInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommandInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandInfo;
  static deserializeBinaryFromReader(message: CommandInfo, reader: jspb.BinaryReader): CommandInfo;
}

export namespace CommandInfo {
  export type AsObject = {
    userid: string,
    type: number,
    createtime: number,
    uuid: string,
    value: string,
    ex: string,
  }
}

export class GetSelfUserInfoReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSelfUserInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSelfUserInfoReq): GetSelfUserInfoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSelfUserInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSelfUserInfoReq;
  static deserializeBinaryFromReader(message: GetSelfUserInfoReq, reader: jspb.BinaryReader): GetSelfUserInfoReq;
}

export namespace GetSelfUserInfoReq {
  export type AsObject = {
  }
}

export class GetSelfUserInfoResp extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): UserInfo | undefined;
  setUser(value?: UserInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSelfUserInfoResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetSelfUserInfoResp): GetSelfUserInfoResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSelfUserInfoResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSelfUserInfoResp;
  static deserializeBinaryFromReader(message: GetSelfUserInfoResp, reader: jspb.BinaryReader): GetSelfUserInfoResp;
}

export namespace GetSelfUserInfoResp {
  export type AsObject = {
    user?: UserInfo.AsObject,
  }
}

export class SetSelfInfoReq extends jspb.Message {
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

  hasEx(): boolean;
  clearEx(): void;
  getEx(): string;
  setEx(value: string): void;

  hasGlobalrecvmsgopt(): boolean;
  clearGlobalrecvmsgopt(): void;
  getGlobalrecvmsgopt(): number;
  setGlobalrecvmsgopt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSelfInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetSelfInfoReq): SetSelfInfoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetSelfInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSelfInfoReq;
  static deserializeBinaryFromReader(message: SetSelfInfoReq, reader: jspb.BinaryReader): SetSelfInfoReq;
}

export namespace SetSelfInfoReq {
  export type AsObject = {
    userid: string,
    nickname: string,
    faceurl: string,
    ex: string,
    globalrecvmsgopt: number,
  }
}

export class SetSelfInfoResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSelfInfoResp.AsObject;
  static toObject(includeInstance: boolean, msg: SetSelfInfoResp): SetSelfInfoResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetSelfInfoResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSelfInfoResp;
  static deserializeBinaryFromReader(message: SetSelfInfoResp, reader: jspb.BinaryReader): SetSelfInfoResp;
}

export namespace SetSelfInfoResp {
  export type AsObject = {
  }
}

export class ProcessUserCommandAddReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getType(): number;
  setType(value: number): void;

  getUuid(): string;
  setUuid(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): string;
  setValue(value: string): void;

  hasEx(): boolean;
  clearEx(): void;
  getEx(): string;
  setEx(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessUserCommandAddReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessUserCommandAddReq): ProcessUserCommandAddReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessUserCommandAddReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessUserCommandAddReq;
  static deserializeBinaryFromReader(message: ProcessUserCommandAddReq, reader: jspb.BinaryReader): ProcessUserCommandAddReq;
}

export namespace ProcessUserCommandAddReq {
  export type AsObject = {
    userid: string,
    type: number,
    uuid: string,
    value: string,
    ex: string,
  }
}

export class ProcessUserCommandAddResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessUserCommandAddResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessUserCommandAddResp): ProcessUserCommandAddResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessUserCommandAddResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessUserCommandAddResp;
  static deserializeBinaryFromReader(message: ProcessUserCommandAddResp, reader: jspb.BinaryReader): ProcessUserCommandAddResp;
}

export namespace ProcessUserCommandAddResp {
  export type AsObject = {
  }
}

export class ProcessUserCommandDeleteReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getType(): number;
  setType(value: number): void;

  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessUserCommandDeleteReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessUserCommandDeleteReq): ProcessUserCommandDeleteReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessUserCommandDeleteReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessUserCommandDeleteReq;
  static deserializeBinaryFromReader(message: ProcessUserCommandDeleteReq, reader: jspb.BinaryReader): ProcessUserCommandDeleteReq;
}

export namespace ProcessUserCommandDeleteReq {
  export type AsObject = {
    userid: string,
    type: number,
    uuid: string,
  }
}

export class ProcessUserCommandDeleteResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessUserCommandDeleteResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessUserCommandDeleteResp): ProcessUserCommandDeleteResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessUserCommandDeleteResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessUserCommandDeleteResp;
  static deserializeBinaryFromReader(message: ProcessUserCommandDeleteResp, reader: jspb.BinaryReader): ProcessUserCommandDeleteResp;
}

export namespace ProcessUserCommandDeleteResp {
  export type AsObject = {
  }
}

export class ProcessUserCommandUpdateReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getType(): number;
  setType(value: number): void;

  getUuid(): string;
  setUuid(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): string;
  setValue(value: string): void;

  hasEx(): boolean;
  clearEx(): void;
  getEx(): string;
  setEx(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessUserCommandUpdateReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessUserCommandUpdateReq): ProcessUserCommandUpdateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessUserCommandUpdateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessUserCommandUpdateReq;
  static deserializeBinaryFromReader(message: ProcessUserCommandUpdateReq, reader: jspb.BinaryReader): ProcessUserCommandUpdateReq;
}

export namespace ProcessUserCommandUpdateReq {
  export type AsObject = {
    userid: string,
    type: number,
    uuid: string,
    value: string,
    ex: string,
  }
}

export class ProcessUserCommandUpdateResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessUserCommandUpdateResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessUserCommandUpdateResp): ProcessUserCommandUpdateResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessUserCommandUpdateResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessUserCommandUpdateResp;
  static deserializeBinaryFromReader(message: ProcessUserCommandUpdateResp, reader: jspb.BinaryReader): ProcessUserCommandUpdateResp;
}

export namespace ProcessUserCommandUpdateResp {
  export type AsObject = {
  }
}

export class ProcessUserCommandGetAllReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessUserCommandGetAllReq.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessUserCommandGetAllReq): ProcessUserCommandGetAllReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessUserCommandGetAllReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessUserCommandGetAllReq;
  static deserializeBinaryFromReader(message: ProcessUserCommandGetAllReq, reader: jspb.BinaryReader): ProcessUserCommandGetAllReq;
}

export namespace ProcessUserCommandGetAllReq {
  export type AsObject = {
  }
}

export class ProcessUserCommandGetAllResp extends jspb.Message {
  clearCommandsList(): void;
  getCommandsList(): Array<CommandInfo>;
  setCommandsList(value: Array<CommandInfo>): void;
  addCommands(value?: CommandInfo, index?: number): CommandInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessUserCommandGetAllResp.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessUserCommandGetAllResp): ProcessUserCommandGetAllResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessUserCommandGetAllResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessUserCommandGetAllResp;
  static deserializeBinaryFromReader(message: ProcessUserCommandGetAllResp, reader: jspb.BinaryReader): ProcessUserCommandGetAllResp;
}

export namespace ProcessUserCommandGetAllResp {
  export type AsObject = {
    commandsList: Array<CommandInfo.AsObject>,
  }
}

export class GetUsersInfoReq extends jspb.Message {
  clearUseridsList(): void;
  getUseridsList(): Array<string>;
  setUseridsList(value: Array<string>): void;
  addUserids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersInfoReq): GetUsersInfoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUsersInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersInfoReq;
  static deserializeBinaryFromReader(message: GetUsersInfoReq, reader: jspb.BinaryReader): GetUsersInfoReq;
}

export namespace GetUsersInfoReq {
  export type AsObject = {
    useridsList: Array<string>,
  }
}

export class GetUsersInfoResp extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<UserInfo>;
  setUsersList(value: Array<UserInfo>): void;
  addUsers(value?: UserInfo, index?: number): UserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersInfoResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersInfoResp): GetUsersInfoResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUsersInfoResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersInfoResp;
  static deserializeBinaryFromReader(message: GetUsersInfoResp, reader: jspb.BinaryReader): GetUsersInfoResp;
}

export namespace GetUsersInfoResp {
  export type AsObject = {
    usersList: Array<UserInfo.AsObject>,
  }
}

export class GetUsersInfoFromServerReq extends jspb.Message {
  clearUseridsList(): void;
  getUseridsList(): Array<string>;
  setUseridsList(value: Array<string>): void;
  addUserids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersInfoFromServerReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersInfoFromServerReq): GetUsersInfoFromServerReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUsersInfoFromServerReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersInfoFromServerReq;
  static deserializeBinaryFromReader(message: GetUsersInfoFromServerReq, reader: jspb.BinaryReader): GetUsersInfoFromServerReq;
}

export namespace GetUsersInfoFromServerReq {
  export type AsObject = {
    useridsList: Array<string>,
  }
}

export class GetUsersInfoFromServerResp extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<UserInfo>;
  setUsersList(value: Array<UserInfo>): void;
  addUsers(value?: UserInfo, index?: number): UserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersInfoFromServerResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersInfoFromServerResp): GetUsersInfoFromServerResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUsersInfoFromServerResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersInfoFromServerResp;
  static deserializeBinaryFromReader(message: GetUsersInfoFromServerResp, reader: jspb.BinaryReader): GetUsersInfoFromServerResp;
}

export namespace GetUsersInfoFromServerResp {
  export type AsObject = {
    usersList: Array<UserInfo.AsObject>,
  }
}

