// package: openim.init
// file: init.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class IMConfig extends jspb.Message {
  getAppframework(): common_pb.AppFrameworkMap[keyof common_pb.AppFrameworkMap];
  setAppframework(value: common_pb.AppFrameworkMap[keyof common_pb.AppFrameworkMap]): void;

  getPlatform(): common_pb.PlatformMap[keyof common_pb.PlatformMap];
  setPlatform(value: common_pb.PlatformMap[keyof common_pb.PlatformMap]): void;

  getApiaddr(): string;
  setApiaddr(value: string): void;

  getWsaddr(): string;
  setWsaddr(value: string): void;

  getDatadir(): string;
  setDatadir(value: string): void;

  getLoglevel(): number;
  setLoglevel(value: number): void;

  getIslogstandardoutput(): boolean;
  setIslogstandardoutput(value: boolean): void;

  getLogfilepath(): string;
  setLogfilepath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IMConfig.AsObject;
  static toObject(includeInstance: boolean, msg: IMConfig): IMConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IMConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IMConfig;
  static deserializeBinaryFromReader(message: IMConfig, reader: jspb.BinaryReader): IMConfig;
}

export namespace IMConfig {
  export type AsObject = {
    appframework: common_pb.AppFrameworkMap[keyof common_pb.AppFrameworkMap],
    platform: common_pb.PlatformMap[keyof common_pb.PlatformMap],
    apiaddr: string,
    wsaddr: string,
    datadir: string,
    loglevel: number,
    islogstandardoutput: boolean,
    logfilepath: string,
  }
}

export class InitSDKReq extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): IMConfig | undefined;
  setConfig(value?: IMConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitSDKReq.AsObject;
  static toObject(includeInstance: boolean, msg: InitSDKReq): InitSDKReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitSDKReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitSDKReq;
  static deserializeBinaryFromReader(message: InitSDKReq, reader: jspb.BinaryReader): InitSDKReq;
}

export namespace InitSDKReq {
  export type AsObject = {
    config?: IMConfig.AsObject,
  }
}

export class InitSDKResp extends jspb.Message {
  getSuc(): boolean;
  setSuc(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitSDKResp.AsObject;
  static toObject(includeInstance: boolean, msg: InitSDKResp): InitSDKResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitSDKResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitSDKResp;
  static deserializeBinaryFromReader(message: InitSDKResp, reader: jspb.BinaryReader): InitSDKResp;
}

export namespace InitSDKResp {
  export type AsObject = {
    suc: boolean,
  }
}

export class LoginReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginReq.AsObject;
  static toObject(includeInstance: boolean, msg: LoginReq): LoginReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginReq;
  static deserializeBinaryFromReader(message: LoginReq, reader: jspb.BinaryReader): LoginReq;
}

export namespace LoginReq {
  export type AsObject = {
    userid: string,
    token: string,
  }
}

export class LoginResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResp.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResp): LoginResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResp;
  static deserializeBinaryFromReader(message: LoginResp, reader: jspb.BinaryReader): LoginResp;
}

export namespace LoginResp {
  export type AsObject = {
  }
}

