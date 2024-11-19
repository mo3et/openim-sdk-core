// package: openim.ffi
// file: msggateway.proto

import * as jspb from "google-protobuf";

export class OnlinePushMsgReq extends jspb.Message {
  getPushtouserid(): string;
  setPushtouserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnlinePushMsgReq.AsObject;
  static toObject(includeInstance: boolean, msg: OnlinePushMsgReq): OnlinePushMsgReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OnlinePushMsgReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnlinePushMsgReq;
  static deserializeBinaryFromReader(message: OnlinePushMsgReq, reader: jspb.BinaryReader): OnlinePushMsgReq;
}

export namespace OnlinePushMsgReq {
  export type AsObject = {
    pushtouserid: string,
  }
}

export class OnlinePushMsgResp extends jspb.Message {
  clearRespList(): void;
  getRespList(): Array<SingleMsgToUserPlatform>;
  setRespList(value: Array<SingleMsgToUserPlatform>): void;
  addResp(value?: SingleMsgToUserPlatform, index?: number): SingleMsgToUserPlatform;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnlinePushMsgResp.AsObject;
  static toObject(includeInstance: boolean, msg: OnlinePushMsgResp): OnlinePushMsgResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OnlinePushMsgResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnlinePushMsgResp;
  static deserializeBinaryFromReader(message: OnlinePushMsgResp, reader: jspb.BinaryReader): OnlinePushMsgResp;
}

export namespace OnlinePushMsgResp {
  export type AsObject = {
    respList: Array<SingleMsgToUserPlatform.AsObject>,
  }
}

export class SingleMsgToUserResults extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  clearRespList(): void;
  getRespList(): Array<SingleMsgToUserPlatform>;
  setRespList(value: Array<SingleMsgToUserPlatform>): void;
  addResp(value?: SingleMsgToUserPlatform, index?: number): SingleMsgToUserPlatform;

  getOnlinepush(): boolean;
  setOnlinepush(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleMsgToUserResults.AsObject;
  static toObject(includeInstance: boolean, msg: SingleMsgToUserResults): SingleMsgToUserResults.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SingleMsgToUserResults, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleMsgToUserResults;
  static deserializeBinaryFromReader(message: SingleMsgToUserResults, reader: jspb.BinaryReader): SingleMsgToUserResults;
}

export namespace SingleMsgToUserResults {
  export type AsObject = {
    userid: string,
    respList: Array<SingleMsgToUserPlatform.AsObject>,
    onlinepush: boolean,
  }
}

export class OnlineBatchPushOneMsgReq extends jspb.Message {
  clearPushtouseridsList(): void;
  getPushtouseridsList(): Array<string>;
  setPushtouseridsList(value: Array<string>): void;
  addPushtouserids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnlineBatchPushOneMsgReq.AsObject;
  static toObject(includeInstance: boolean, msg: OnlineBatchPushOneMsgReq): OnlineBatchPushOneMsgReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OnlineBatchPushOneMsgReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnlineBatchPushOneMsgReq;
  static deserializeBinaryFromReader(message: OnlineBatchPushOneMsgReq, reader: jspb.BinaryReader): OnlineBatchPushOneMsgReq;
}

export namespace OnlineBatchPushOneMsgReq {
  export type AsObject = {
    pushtouseridsList: Array<string>,
  }
}

export class OnlineBatchPushOneMsgResp extends jspb.Message {
  clearSinglepushresultList(): void;
  getSinglepushresultList(): Array<SingleMsgToUserResults>;
  setSinglepushresultList(value: Array<SingleMsgToUserResults>): void;
  addSinglepushresult(value?: SingleMsgToUserResults, index?: number): SingleMsgToUserResults;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnlineBatchPushOneMsgResp.AsObject;
  static toObject(includeInstance: boolean, msg: OnlineBatchPushOneMsgResp): OnlineBatchPushOneMsgResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OnlineBatchPushOneMsgResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnlineBatchPushOneMsgResp;
  static deserializeBinaryFromReader(message: OnlineBatchPushOneMsgResp, reader: jspb.BinaryReader): OnlineBatchPushOneMsgResp;
}

export namespace OnlineBatchPushOneMsgResp {
  export type AsObject = {
    singlepushresultList: Array<SingleMsgToUserResults.AsObject>,
  }
}

export class SingleMsgToUserPlatform extends jspb.Message {
  getResultcode(): number;
  setResultcode(value: number): void;

  getRecvid(): string;
  setRecvid(value: string): void;

  getRecvplatformid(): number;
  setRecvplatformid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleMsgToUserPlatform.AsObject;
  static toObject(includeInstance: boolean, msg: SingleMsgToUserPlatform): SingleMsgToUserPlatform.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SingleMsgToUserPlatform, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleMsgToUserPlatform;
  static deserializeBinaryFromReader(message: SingleMsgToUserPlatform, reader: jspb.BinaryReader): SingleMsgToUserPlatform;
}

export namespace SingleMsgToUserPlatform {
  export type AsObject = {
    resultcode: number,
    recvid: string,
    recvplatformid: number,
  }
}

export class GetUsersOnlineStatusReq extends jspb.Message {
  clearUseridsList(): void;
  getUseridsList(): Array<string>;
  setUseridsList(value: Array<string>): void;
  addUserids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersOnlineStatusReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersOnlineStatusReq): GetUsersOnlineStatusReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUsersOnlineStatusReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersOnlineStatusReq;
  static deserializeBinaryFromReader(message: GetUsersOnlineStatusReq, reader: jspb.BinaryReader): GetUsersOnlineStatusReq;
}

export namespace GetUsersOnlineStatusReq {
  export type AsObject = {
    useridsList: Array<string>,
  }
}

export class GetUsersOnlineStatusResp extends jspb.Message {
  clearSuccessresultList(): void;
  getSuccessresultList(): Array<GetUsersOnlineStatusResp.SuccessResult>;
  setSuccessresultList(value: Array<GetUsersOnlineStatusResp.SuccessResult>): void;
  addSuccessresult(value?: GetUsersOnlineStatusResp.SuccessResult, index?: number): GetUsersOnlineStatusResp.SuccessResult;

  clearFailedresultList(): void;
  getFailedresultList(): Array<GetUsersOnlineStatusResp.FailedDetail>;
  setFailedresultList(value: Array<GetUsersOnlineStatusResp.FailedDetail>): void;
  addFailedresult(value?: GetUsersOnlineStatusResp.FailedDetail, index?: number): GetUsersOnlineStatusResp.FailedDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersOnlineStatusResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersOnlineStatusResp): GetUsersOnlineStatusResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUsersOnlineStatusResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersOnlineStatusResp;
  static deserializeBinaryFromReader(message: GetUsersOnlineStatusResp, reader: jspb.BinaryReader): GetUsersOnlineStatusResp;
}

export namespace GetUsersOnlineStatusResp {
  export type AsObject = {
    successresultList: Array<GetUsersOnlineStatusResp.SuccessResult.AsObject>,
    failedresultList: Array<GetUsersOnlineStatusResp.FailedDetail.AsObject>,
  }

  export class SuccessDetail extends jspb.Message {
    getPlatformid(): number;
    setPlatformid(value: number): void;

    getConnid(): string;
    setConnid(value: string): void;

    getIsbackground(): boolean;
    setIsbackground(value: boolean): void;

    getToken(): string;
    setToken(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessDetail.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessDetail): SuccessDetail.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessDetail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessDetail;
    static deserializeBinaryFromReader(message: SuccessDetail, reader: jspb.BinaryReader): SuccessDetail;
  }

  export namespace SuccessDetail {
    export type AsObject = {
      platformid: number,
      connid: string,
      isbackground: boolean,
      token: string,
    }
  }

  export class FailedDetail extends jspb.Message {
    getUserid(): string;
    setUserid(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailedDetail.AsObject;
    static toObject(includeInstance: boolean, msg: FailedDetail): FailedDetail.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailedDetail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailedDetail;
    static deserializeBinaryFromReader(message: FailedDetail, reader: jspb.BinaryReader): FailedDetail;
  }

  export namespace FailedDetail {
    export type AsObject = {
      userid: string,
    }
  }

  export class SuccessResult extends jspb.Message {
    getUserid(): string;
    setUserid(value: string): void;

    getStatus(): number;
    setStatus(value: number): void;

    clearDetailplatformstatusList(): void;
    getDetailplatformstatusList(): Array<GetUsersOnlineStatusResp.SuccessDetail>;
    setDetailplatformstatusList(value: Array<GetUsersOnlineStatusResp.SuccessDetail>): void;
    addDetailplatformstatus(value?: GetUsersOnlineStatusResp.SuccessDetail, index?: number): GetUsersOnlineStatusResp.SuccessDetail;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuccessResult.AsObject;
    static toObject(includeInstance: boolean, msg: SuccessResult): SuccessResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuccessResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuccessResult;
    static deserializeBinaryFromReader(message: SuccessResult, reader: jspb.BinaryReader): SuccessResult;
  }

  export namespace SuccessResult {
    export type AsObject = {
      userid: string,
      status: number,
      detailplatformstatusList: Array<GetUsersOnlineStatusResp.SuccessDetail.AsObject>,
    }
  }
}

export class SingleDetail extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  clearSingleplatformtokenList(): void;
  getSingleplatformtokenList(): Array<SinglePlatformToken>;
  setSingleplatformtokenList(value: Array<SinglePlatformToken>): void;
  addSingleplatformtoken(value?: SinglePlatformToken, index?: number): SinglePlatformToken;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleDetail.AsObject;
  static toObject(includeInstance: boolean, msg: SingleDetail): SingleDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SingleDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleDetail;
  static deserializeBinaryFromReader(message: SingleDetail, reader: jspb.BinaryReader): SingleDetail;
}

export namespace SingleDetail {
  export type AsObject = {
    userid: string,
    status: number,
    singleplatformtokenList: Array<SinglePlatformToken.AsObject>,
  }
}

export class SinglePlatformToken extends jspb.Message {
  getPlatformid(): number;
  setPlatformid(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  clearTokenList(): void;
  getTokenList(): Array<string>;
  setTokenList(value: Array<string>): void;
  addToken(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SinglePlatformToken.AsObject;
  static toObject(includeInstance: boolean, msg: SinglePlatformToken): SinglePlatformToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SinglePlatformToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SinglePlatformToken;
  static deserializeBinaryFromReader(message: SinglePlatformToken, reader: jspb.BinaryReader): SinglePlatformToken;
}

export namespace SinglePlatformToken {
  export type AsObject = {
    platformid: number,
    total: number,
    tokenList: Array<string>,
  }
}

export class KickUserOfflineReq extends jspb.Message {
  getPlatformid(): number;
  setPlatformid(value: number): void;

  clearKickuseridlistList(): void;
  getKickuseridlistList(): Array<string>;
  setKickuseridlistList(value: Array<string>): void;
  addKickuseridlist(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KickUserOfflineReq.AsObject;
  static toObject(includeInstance: boolean, msg: KickUserOfflineReq): KickUserOfflineReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KickUserOfflineReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KickUserOfflineReq;
  static deserializeBinaryFromReader(message: KickUserOfflineReq, reader: jspb.BinaryReader): KickUserOfflineReq;
}

export namespace KickUserOfflineReq {
  export type AsObject = {
    platformid: number,
    kickuseridlistList: Array<string>,
  }
}

export class KickUserOfflineResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KickUserOfflineResp.AsObject;
  static toObject(includeInstance: boolean, msg: KickUserOfflineResp): KickUserOfflineResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KickUserOfflineResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KickUserOfflineResp;
  static deserializeBinaryFromReader(message: KickUserOfflineResp, reader: jspb.BinaryReader): KickUserOfflineResp;
}

export namespace KickUserOfflineResp {
  export type AsObject = {
  }
}

export class MultiTerminalLoginCheckReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getPlatformid(): number;
  setPlatformid(value: number): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiTerminalLoginCheckReq.AsObject;
  static toObject(includeInstance: boolean, msg: MultiTerminalLoginCheckReq): MultiTerminalLoginCheckReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiTerminalLoginCheckReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiTerminalLoginCheckReq;
  static deserializeBinaryFromReader(message: MultiTerminalLoginCheckReq, reader: jspb.BinaryReader): MultiTerminalLoginCheckReq;
}

export namespace MultiTerminalLoginCheckReq {
  export type AsObject = {
    userid: string,
    platformid: number,
    token: string,
  }
}

export class MultiTerminalLoginCheckResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiTerminalLoginCheckResp.AsObject;
  static toObject(includeInstance: boolean, msg: MultiTerminalLoginCheckResp): MultiTerminalLoginCheckResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiTerminalLoginCheckResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiTerminalLoginCheckResp;
  static deserializeBinaryFromReader(message: MultiTerminalLoginCheckResp, reader: jspb.BinaryReader): MultiTerminalLoginCheckResp;
}

export namespace MultiTerminalLoginCheckResp {
  export type AsObject = {
  }
}

