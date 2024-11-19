// package: openim.ffi
// file: ffi.proto

import * as jspb from "google-protobuf";
import * as event_pb from "./event_pb";

export class FfiRequest extends jspb.Message {
  getFuncname(): event_pb.FuncRequestEventNameMap[keyof event_pb.FuncRequestEventNameMap];
  setFuncname(value: event_pb.FuncRequestEventNameMap[keyof event_pb.FuncRequestEventNameMap]): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FfiRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FfiRequest): FfiRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FfiRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FfiRequest;
  static deserializeBinaryFromReader(message: FfiRequest, reader: jspb.BinaryReader): FfiRequest;
}

export namespace FfiRequest {
  export type AsObject = {
    funcname: event_pb.FuncRequestEventNameMap[keyof event_pb.FuncRequestEventNameMap],
    data: Uint8Array | string,
  }
}

export class FfiResult extends jspb.Message {
  getErrcode(): number;
  setErrcode(value: number): void;

  getErrmsg(): string;
  setErrmsg(value: string): void;

  getFuncname(): event_pb.FuncRequestEventNameMap[keyof event_pb.FuncRequestEventNameMap];
  setFuncname(value: event_pb.FuncRequestEventNameMap[keyof event_pb.FuncRequestEventNameMap]): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getHandleid(): number;
  setHandleid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FfiResult.AsObject;
  static toObject(includeInstance: boolean, msg: FfiResult): FfiResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FfiResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FfiResult;
  static deserializeBinaryFromReader(message: FfiResult, reader: jspb.BinaryReader): FfiResult;
}

export namespace FfiResult {
  export type AsObject = {
    errcode: number,
    errmsg: string,
    funcname: event_pb.FuncRequestEventNameMap[keyof event_pb.FuncRequestEventNameMap],
    data: Uint8Array | string,
    handleid: number,
  }
}

