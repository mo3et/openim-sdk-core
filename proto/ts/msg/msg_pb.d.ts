// package: openim.sdk.msg
// file: msg.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as message_pb from "./message_pb";

export class MessageReceipt extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  clearMsgidlistList(): void;
  getMsgidlistList(): Array<string>;
  setMsgidlistList(value: Array<string>): void;
  addMsgidlist(value: string, index?: number): string;

  getReadtime(): number;
  setReadtime(value: number): void;

  getMsgfrom(): number;
  setMsgfrom(value: number): void;

  getContenttype(): number;
  setContenttype(value: number): void;

  getSessiontype(): number;
  setSessiontype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageReceipt.AsObject;
  static toObject(includeInstance: boolean, msg: MessageReceipt): MessageReceipt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageReceipt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageReceipt;
  static deserializeBinaryFromReader(message: MessageReceipt, reader: jspb.BinaryReader): MessageReceipt;
}

export namespace MessageReceipt {
  export type AsObject = {
    groupid: string,
    userid: string,
    msgidlistList: Array<string>,
    readtime: number,
    msgfrom: number,
    contenttype: number,
    sessiontype: number,
  }
}

export class MessageRevoked extends jspb.Message {
  getRevokerid(): string;
  setRevokerid(value: string): void;

  getRevokerrole(): number;
  setRevokerrole(value: number): void;

  getClientmsgid(): string;
  setClientmsgid(value: string): void;

  getRevokernickname(): string;
  setRevokernickname(value: string): void;

  getRevoketime(): number;
  setRevoketime(value: number): void;

  getSourcemessagesendtime(): number;
  setSourcemessagesendtime(value: number): void;

  getSourcemessagesendid(): string;
  setSourcemessagesendid(value: string): void;

  getSourcemessagesendernickname(): string;
  setSourcemessagesendernickname(value: string): void;

  getSessiontype(): number;
  setSessiontype(value: number): void;

  getSeq(): number;
  setSeq(value: number): void;

  getEx(): string;
  setEx(value: string): void;

  getIsadminrevoke(): boolean;
  setIsadminrevoke(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageRevoked.AsObject;
  static toObject(includeInstance: boolean, msg: MessageRevoked): MessageRevoked.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageRevoked, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageRevoked;
  static deserializeBinaryFromReader(message: MessageRevoked, reader: jspb.BinaryReader): MessageRevoked;
}

export namespace MessageRevoked {
  export type AsObject = {
    revokerid: string,
    revokerrole: number,
    clientmsgid: string,
    revokernickname: string,
    revoketime: number,
    sourcemessagesendtime: number,
    sourcemessagesendid: string,
    sourcemessagesendernickname: string,
    sessiontype: number,
    seq: number,
    ex: string,
    isadminrevoke: boolean,
  }
}

export class MessageReaction extends jspb.Message {
  getClientmsgid(): string;
  setClientmsgid(value: string): void;

  getReactiontype(): number;
  setReactiontype(value: number): void;

  getCounter(): number;
  setCounter(value: number): void;

  getUserid(): string;
  setUserid(value: string): void;

  getGroupid(): string;
  setGroupid(value: string): void;

  getSessiontype(): number;
  setSessiontype(value: number): void;

  getInfo(): string;
  setInfo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageReaction.AsObject;
  static toObject(includeInstance: boolean, msg: MessageReaction): MessageReaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageReaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageReaction;
  static deserializeBinaryFromReader(message: MessageReaction, reader: jspb.BinaryReader): MessageReaction;
}

export namespace MessageReaction {
  export type AsObject = {
    clientmsgid: string,
    reactiontype: number,
    counter: number,
    userid: string,
    groupid: string,
    sessiontype: number,
    info: string,
  }
}

export class ReactionElem extends jspb.Message {
  getCounter(): number;
  setCounter(value: number): void;

  getType(): number;
  setType(value: number): void;

  clearUserreactionlistList(): void;
  getUserreactionlistList(): Array<UserReactionElem>;
  setUserreactionlistList(value: Array<UserReactionElem>): void;
  addUserreactionlist(value?: UserReactionElem, index?: number): UserReactionElem;

  getCanrepeat(): boolean;
  setCanrepeat(value: boolean): void;

  getInfo(): string;
  setInfo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReactionElem.AsObject;
  static toObject(includeInstance: boolean, msg: ReactionElem): ReactionElem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReactionElem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReactionElem;
  static deserializeBinaryFromReader(message: ReactionElem, reader: jspb.BinaryReader): ReactionElem;
}

export namespace ReactionElem {
  export type AsObject = {
    counter: number,
    type: number,
    userreactionlistList: Array<UserReactionElem.AsObject>,
    canrepeat: boolean,
    info: string,
  }
}

export class UserReactionElem extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getCounter(): number;
  setCounter(value: number): void;

  getInfo(): string;
  setInfo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserReactionElem.AsObject;
  static toObject(includeInstance: boolean, msg: UserReactionElem): UserReactionElem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserReactionElem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserReactionElem;
  static deserializeBinaryFromReader(message: UserReactionElem, reader: jspb.BinaryReader): UserReactionElem;
}

export namespace UserReactionElem {
  export type AsObject = {
    userid: string,
    counter: number,
    info: string,
  }
}

export class GroupHasReadInfo extends jspb.Message {
  clearHasreaduseridlistList(): void;
  getHasreaduseridlistList(): Array<string>;
  setHasreaduseridlistList(value: Array<string>): void;
  addHasreaduseridlist(value: string, index?: number): string;

  getHasreadcount(): number;
  setHasreadcount(value: number): void;

  getGroupmembercount(): number;
  setGroupmembercount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupHasReadInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GroupHasReadInfo): GroupHasReadInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupHasReadInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupHasReadInfo;
  static deserializeBinaryFromReader(message: GroupHasReadInfo, reader: jspb.BinaryReader): GroupHasReadInfo;
}

export namespace GroupHasReadInfo {
  export type AsObject = {
    hasreaduseridlistList: Array<string>,
    hasreadcount: number,
    groupmembercount: number,
  }
}

export class GetAdvancedHistoryMessageListParams extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): void;

  getStartclientmsgid(): string;
  setStartclientmsgid(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdvancedHistoryMessageListParams.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdvancedHistoryMessageListParams): GetAdvancedHistoryMessageListParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAdvancedHistoryMessageListParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdvancedHistoryMessageListParams;
  static deserializeBinaryFromReader(message: GetAdvancedHistoryMessageListParams, reader: jspb.BinaryReader): GetAdvancedHistoryMessageListParams;
}

export namespace GetAdvancedHistoryMessageListParams {
  export type AsObject = {
    conversationid: string,
    startclientmsgid: string,
    count: number,
  }
}

export class GetAdvancedHistoryMessageListCallback extends jspb.Message {
  clearMessagelistList(): void;
  getMessagelistList(): Array<message_pb.IMMessage>;
  setMessagelistList(value: Array<message_pb.IMMessage>): void;
  addMessagelist(value?: message_pb.IMMessage, index?: number): message_pb.IMMessage;

  getIsend(): boolean;
  setIsend(value: boolean): void;

  getErrcode(): number;
  setErrcode(value: number): void;

  getErrmsg(): string;
  setErrmsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdvancedHistoryMessageListCallback.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdvancedHistoryMessageListCallback): GetAdvancedHistoryMessageListCallback.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAdvancedHistoryMessageListCallback, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdvancedHistoryMessageListCallback;
  static deserializeBinaryFromReader(message: GetAdvancedHistoryMessageListCallback, reader: jspb.BinaryReader): GetAdvancedHistoryMessageListCallback;
}

export namespace GetAdvancedHistoryMessageListCallback {
  export type AsObject = {
    messagelistList: Array<message_pb.IMMessage.AsObject>,
    isend: boolean,
    errcode: number,
    errmsg: string,
  }
}

export class SendMessageReq extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): message_pb.IMMessage | undefined;
  setMessage(value?: message_pb.IMMessage): void;

  getRecvid(): string;
  setRecvid(value: string): void;

  getGroupid(): string;
  setGroupid(value: string): void;

  hasOfflinepushinfo(): boolean;
  clearOfflinepushinfo(): void;
  getOfflinepushinfo(): common_pb.OfflinePushInfo | undefined;
  setOfflinepushinfo(value?: common_pb.OfflinePushInfo): void;

  getIsonlineonly(): boolean;
  setIsonlineonly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageReq): SendMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageReq;
  static deserializeBinaryFromReader(message: SendMessageReq, reader: jspb.BinaryReader): SendMessageReq;
}

export namespace SendMessageReq {
  export type AsObject = {
    message?: message_pb.IMMessage.AsObject,
    recvid: string,
    groupid: string,
    offlinepushinfo?: common_pb.OfflinePushInfo.AsObject,
    isonlineonly: boolean,
  }
}

export class SendMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): message_pb.IMMessage | undefined;
  setMessage(value?: message_pb.IMMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageResp.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageResp): SendMessageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendMessageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageResp;
  static deserializeBinaryFromReader(message: SendMessageResp, reader: jspb.BinaryReader): SendMessageResp;
}

export namespace SendMessageResp {
  export type AsObject = {
    message?: message_pb.IMMessage.AsObject,
  }
}

export class GetAdvancedHistoryMessageListReq extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): void;

  hasGetadvancedhistorymessagelistparams(): boolean;
  clearGetadvancedhistorymessagelistparams(): void;
  getGetadvancedhistorymessagelistparams(): GetAdvancedHistoryMessageListParams | undefined;
  setGetadvancedhistorymessagelistparams(value?: GetAdvancedHistoryMessageListParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdvancedHistoryMessageListReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdvancedHistoryMessageListReq): GetAdvancedHistoryMessageListReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAdvancedHistoryMessageListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdvancedHistoryMessageListReq;
  static deserializeBinaryFromReader(message: GetAdvancedHistoryMessageListReq, reader: jspb.BinaryReader): GetAdvancedHistoryMessageListReq;
}

export namespace GetAdvancedHistoryMessageListReq {
  export type AsObject = {
    conversationid: string,
    getadvancedhistorymessagelistparams?: GetAdvancedHistoryMessageListParams.AsObject,
  }
}

export class GetAdvancedHistoryMessageListResp extends jspb.Message {
  hasGetadvancedhistorymessagelistcallback(): boolean;
  clearGetadvancedhistorymessagelistcallback(): void;
  getGetadvancedhistorymessagelistcallback(): GetAdvancedHistoryMessageListCallback | undefined;
  setGetadvancedhistorymessagelistcallback(value?: GetAdvancedHistoryMessageListCallback): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdvancedHistoryMessageListResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdvancedHistoryMessageListResp): GetAdvancedHistoryMessageListResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAdvancedHistoryMessageListResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdvancedHistoryMessageListResp;
  static deserializeBinaryFromReader(message: GetAdvancedHistoryMessageListResp, reader: jspb.BinaryReader): GetAdvancedHistoryMessageListResp;
}

export namespace GetAdvancedHistoryMessageListResp {
  export type AsObject = {
    getadvancedhistorymessagelistcallback?: GetAdvancedHistoryMessageListCallback.AsObject,
  }
}

export class GetAdvancedHistoryMessageListReverseReq extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): void;

  hasGetadvancedhistorymessagelistparams(): boolean;
  clearGetadvancedhistorymessagelistparams(): void;
  getGetadvancedhistorymessagelistparams(): GetAdvancedHistoryMessageListParams | undefined;
  setGetadvancedhistorymessagelistparams(value?: GetAdvancedHistoryMessageListParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdvancedHistoryMessageListReverseReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdvancedHistoryMessageListReverseReq): GetAdvancedHistoryMessageListReverseReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAdvancedHistoryMessageListReverseReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdvancedHistoryMessageListReverseReq;
  static deserializeBinaryFromReader(message: GetAdvancedHistoryMessageListReverseReq, reader: jspb.BinaryReader): GetAdvancedHistoryMessageListReverseReq;
}

export namespace GetAdvancedHistoryMessageListReverseReq {
  export type AsObject = {
    conversationid: string,
    getadvancedhistorymessagelistparams?: GetAdvancedHistoryMessageListParams.AsObject,
  }
}

export class GetAdvancedHistoryMessageListReverseResp extends jspb.Message {
  hasGetadvancedhistorymessagelistcallback(): boolean;
  clearGetadvancedhistorymessagelistcallback(): void;
  getGetadvancedhistorymessagelistcallback(): GetAdvancedHistoryMessageListCallback | undefined;
  setGetadvancedhistorymessagelistcallback(value?: GetAdvancedHistoryMessageListCallback): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdvancedHistoryMessageListReverseResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdvancedHistoryMessageListReverseResp): GetAdvancedHistoryMessageListReverseResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAdvancedHistoryMessageListReverseResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdvancedHistoryMessageListReverseResp;
  static deserializeBinaryFromReader(message: GetAdvancedHistoryMessageListReverseResp, reader: jspb.BinaryReader): GetAdvancedHistoryMessageListReverseResp;
}

export namespace GetAdvancedHistoryMessageListReverseResp {
  export type AsObject = {
    getadvancedhistorymessagelistcallback?: GetAdvancedHistoryMessageListCallback.AsObject,
  }
}

export class RevokeMessageReq extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): void;

  getClientmsgid(): string;
  setClientmsgid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeMessageReq): RevokeMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeMessageReq;
  static deserializeBinaryFromReader(message: RevokeMessageReq, reader: jspb.BinaryReader): RevokeMessageReq;
}

export namespace RevokeMessageReq {
  export type AsObject = {
    conversationid: string,
    clientmsgid: string,
  }
}

export class RevokeMessageResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeMessageResp.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeMessageResp): RevokeMessageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeMessageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeMessageResp;
  static deserializeBinaryFromReader(message: RevokeMessageResp, reader: jspb.BinaryReader): RevokeMessageResp;
}

export namespace RevokeMessageResp {
  export type AsObject = {
  }
}

export class TypingStatusUpdateReq extends jspb.Message {
  getRecvid(): string;
  setRecvid(value: string): void;

  getMsgtip(): string;
  setMsgtip(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypingStatusUpdateReq.AsObject;
  static toObject(includeInstance: boolean, msg: TypingStatusUpdateReq): TypingStatusUpdateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TypingStatusUpdateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypingStatusUpdateReq;
  static deserializeBinaryFromReader(message: TypingStatusUpdateReq, reader: jspb.BinaryReader): TypingStatusUpdateReq;
}

export namespace TypingStatusUpdateReq {
  export type AsObject = {
    recvid: string,
    msgtip: string,
  }
}

export class TypingStatusUpdateResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypingStatusUpdateResp.AsObject;
  static toObject(includeInstance: boolean, msg: TypingStatusUpdateResp): TypingStatusUpdateResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TypingStatusUpdateResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypingStatusUpdateResp;
  static deserializeBinaryFromReader(message: TypingStatusUpdateResp, reader: jspb.BinaryReader): TypingStatusUpdateResp;
}

export namespace TypingStatusUpdateResp {
  export type AsObject = {
  }
}

export class DeleteMessageReq extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): void;

  getClientmsgid(): string;
  setClientmsgid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMessageReq): DeleteMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMessageReq;
  static deserializeBinaryFromReader(message: DeleteMessageReq, reader: jspb.BinaryReader): DeleteMessageReq;
}

export namespace DeleteMessageReq {
  export type AsObject = {
    conversationid: string,
    clientmsgid: string,
  }
}

export class DeleteMessageResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMessageResp.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMessageResp): DeleteMessageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteMessageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMessageResp;
  static deserializeBinaryFromReader(message: DeleteMessageResp, reader: jspb.BinaryReader): DeleteMessageResp;
}

export namespace DeleteMessageResp {
  export type AsObject = {
  }
}

export class DeleteAllMsgFromLocalAndServerReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAllMsgFromLocalAndServerReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAllMsgFromLocalAndServerReq): DeleteAllMsgFromLocalAndServerReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAllMsgFromLocalAndServerReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAllMsgFromLocalAndServerReq;
  static deserializeBinaryFromReader(message: DeleteAllMsgFromLocalAndServerReq, reader: jspb.BinaryReader): DeleteAllMsgFromLocalAndServerReq;
}

export namespace DeleteAllMsgFromLocalAndServerReq {
  export type AsObject = {
  }
}

export class DeleteAllMsgFromLocalAndServerResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAllMsgFromLocalAndServerResp.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAllMsgFromLocalAndServerResp): DeleteAllMsgFromLocalAndServerResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAllMsgFromLocalAndServerResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAllMsgFromLocalAndServerResp;
  static deserializeBinaryFromReader(message: DeleteAllMsgFromLocalAndServerResp, reader: jspb.BinaryReader): DeleteAllMsgFromLocalAndServerResp;
}

export namespace DeleteAllMsgFromLocalAndServerResp {
  export type AsObject = {
  }
}

export class DeleteAllMessageFromLocalStorageReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAllMessageFromLocalStorageReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAllMessageFromLocalStorageReq): DeleteAllMessageFromLocalStorageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAllMessageFromLocalStorageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAllMessageFromLocalStorageReq;
  static deserializeBinaryFromReader(message: DeleteAllMessageFromLocalStorageReq, reader: jspb.BinaryReader): DeleteAllMessageFromLocalStorageReq;
}

export namespace DeleteAllMessageFromLocalStorageReq {
  export type AsObject = {
  }
}

export class DeleteAllMessageFromLocalStorageResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAllMessageFromLocalStorageResp.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAllMessageFromLocalStorageResp): DeleteAllMessageFromLocalStorageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAllMessageFromLocalStorageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAllMessageFromLocalStorageResp;
  static deserializeBinaryFromReader(message: DeleteAllMessageFromLocalStorageResp, reader: jspb.BinaryReader): DeleteAllMessageFromLocalStorageResp;
}

export namespace DeleteAllMessageFromLocalStorageResp {
  export type AsObject = {
  }
}

export class InsertSingleMessageToLocalStorageReq extends jspb.Message {
  hasMsg(): boolean;
  clearMsg(): void;
  getMsg(): message_pb.IMMessage | undefined;
  setMsg(value?: message_pb.IMMessage): void;

  getRecvid(): string;
  setRecvid(value: string): void;

  getSendid(): string;
  setSendid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsertSingleMessageToLocalStorageReq.AsObject;
  static toObject(includeInstance: boolean, msg: InsertSingleMessageToLocalStorageReq): InsertSingleMessageToLocalStorageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InsertSingleMessageToLocalStorageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsertSingleMessageToLocalStorageReq;
  static deserializeBinaryFromReader(message: InsertSingleMessageToLocalStorageReq, reader: jspb.BinaryReader): InsertSingleMessageToLocalStorageReq;
}

export namespace InsertSingleMessageToLocalStorageReq {
  export type AsObject = {
    msg?: message_pb.IMMessage.AsObject,
    recvid: string,
    sendid: string,
  }
}

export class InsertSingleMessageToLocalStorageResp extends jspb.Message {
  hasMsg(): boolean;
  clearMsg(): void;
  getMsg(): message_pb.IMMessage | undefined;
  setMsg(value?: message_pb.IMMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsertSingleMessageToLocalStorageResp.AsObject;
  static toObject(includeInstance: boolean, msg: InsertSingleMessageToLocalStorageResp): InsertSingleMessageToLocalStorageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InsertSingleMessageToLocalStorageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsertSingleMessageToLocalStorageResp;
  static deserializeBinaryFromReader(message: InsertSingleMessageToLocalStorageResp, reader: jspb.BinaryReader): InsertSingleMessageToLocalStorageResp;
}

export namespace InsertSingleMessageToLocalStorageResp {
  export type AsObject = {
    msg?: message_pb.IMMessage.AsObject,
  }
}

export class InsertGroupMessageToLocalStorageReq extends jspb.Message {
  hasMsg(): boolean;
  clearMsg(): void;
  getMsg(): message_pb.IMMessage | undefined;
  setMsg(value?: message_pb.IMMessage): void;

  getGroupid(): string;
  setGroupid(value: string): void;

  getSendid(): string;
  setSendid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsertGroupMessageToLocalStorageReq.AsObject;
  static toObject(includeInstance: boolean, msg: InsertGroupMessageToLocalStorageReq): InsertGroupMessageToLocalStorageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InsertGroupMessageToLocalStorageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsertGroupMessageToLocalStorageReq;
  static deserializeBinaryFromReader(message: InsertGroupMessageToLocalStorageReq, reader: jspb.BinaryReader): InsertGroupMessageToLocalStorageReq;
}

export namespace InsertGroupMessageToLocalStorageReq {
  export type AsObject = {
    msg?: message_pb.IMMessage.AsObject,
    groupid: string,
    sendid: string,
  }
}

export class InsertGroupMessageToLocalStorageResp extends jspb.Message {
  hasMsg(): boolean;
  clearMsg(): void;
  getMsg(): message_pb.IMMessage | undefined;
  setMsg(value?: message_pb.IMMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsertGroupMessageToLocalStorageResp.AsObject;
  static toObject(includeInstance: boolean, msg: InsertGroupMessageToLocalStorageResp): InsertGroupMessageToLocalStorageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InsertGroupMessageToLocalStorageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsertGroupMessageToLocalStorageResp;
  static deserializeBinaryFromReader(message: InsertGroupMessageToLocalStorageResp, reader: jspb.BinaryReader): InsertGroupMessageToLocalStorageResp;
}

export namespace InsertGroupMessageToLocalStorageResp {
  export type AsObject = {
    msg?: message_pb.IMMessage.AsObject,
  }
}

export class CreateTextMessageReq extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTextMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTextMessageReq): CreateTextMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTextMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTextMessageReq;
  static deserializeBinaryFromReader(message: CreateTextMessageReq, reader: jspb.BinaryReader): CreateTextMessageReq;
}

export namespace CreateTextMessageReq {
  export type AsObject = {
    text: string,
  }
}

export class CreateTextMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): message_pb.IMMessage | undefined;
  setMessage(value?: message_pb.IMMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTextMessageResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTextMessageResp): CreateTextMessageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTextMessageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTextMessageResp;
  static deserializeBinaryFromReader(message: CreateTextMessageResp, reader: jspb.BinaryReader): CreateTextMessageResp;
}

export namespace CreateTextMessageResp {
  export type AsObject = {
    message?: message_pb.IMMessage.AsObject,
  }
}

export class CreateAdvancedTextMessageReq extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  clearMessageentitiesList(): void;
  getMessageentitiesList(): Array<message_pb.MessageEntity>;
  setMessageentitiesList(value: Array<message_pb.MessageEntity>): void;
  addMessageentities(value?: message_pb.MessageEntity, index?: number): message_pb.MessageEntity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAdvancedTextMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAdvancedTextMessageReq): CreateAdvancedTextMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAdvancedTextMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAdvancedTextMessageReq;
  static deserializeBinaryFromReader(message: CreateAdvancedTextMessageReq, reader: jspb.BinaryReader): CreateAdvancedTextMessageReq;
}

export namespace CreateAdvancedTextMessageReq {
  export type AsObject = {
    text: string,
    messageentitiesList: Array<message_pb.MessageEntity.AsObject>,
  }
}

export class CreateAdvancedTextMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): message_pb.IMMessage | undefined;
  setMessage(value?: message_pb.IMMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAdvancedTextMessageResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAdvancedTextMessageResp): CreateAdvancedTextMessageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAdvancedTextMessageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAdvancedTextMessageResp;
  static deserializeBinaryFromReader(message: CreateAdvancedTextMessageResp, reader: jspb.BinaryReader): CreateAdvancedTextMessageResp;
}

export namespace CreateAdvancedTextMessageResp {
  export type AsObject = {
    message?: message_pb.IMMessage.AsObject,
  }
}

export class CreateTextAtMessageReq extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  clearUseridlistList(): void;
  getUseridlistList(): Array<string>;
  setUseridlistList(value: Array<string>): void;
  addUseridlist(value: string, index?: number): string;

  clearUsersinfoList(): void;
  getUsersinfoList(): Array<message_pb.AtInfo>;
  setUsersinfoList(value: Array<message_pb.AtInfo>): void;
  addUsersinfo(value?: message_pb.AtInfo, index?: number): message_pb.AtInfo;

  hasQuotemessage(): boolean;
  clearQuotemessage(): void;
  getQuotemessage(): message_pb.IMMessage | undefined;
  setQuotemessage(value?: message_pb.IMMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTextAtMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTextAtMessageReq): CreateTextAtMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTextAtMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTextAtMessageReq;
  static deserializeBinaryFromReader(message: CreateTextAtMessageReq, reader: jspb.BinaryReader): CreateTextAtMessageReq;
}

export namespace CreateTextAtMessageReq {
  export type AsObject = {
    text: string,
    useridlistList: Array<string>,
    usersinfoList: Array<message_pb.AtInfo.AsObject>,
    quotemessage?: message_pb.IMMessage.AsObject,
  }
}

export class CreateTextAtMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): message_pb.IMMessage | undefined;
  setMessage(value?: message_pb.IMMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTextAtMessageResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTextAtMessageResp): CreateTextAtMessageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTextAtMessageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTextAtMessageResp;
  static deserializeBinaryFromReader(message: CreateTextAtMessageResp, reader: jspb.BinaryReader): CreateTextAtMessageResp;
}

export namespace CreateTextAtMessageResp {
  export type AsObject = {
    message?: message_pb.IMMessage.AsObject,
  }
}

export class CreateLocationMessageReq extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): void;

  getLongitude(): number;
  setLongitude(value: number): void;

  getLatitude(): number;
  setLatitude(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLocationMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLocationMessageReq): CreateLocationMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLocationMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLocationMessageReq;
  static deserializeBinaryFromReader(message: CreateLocationMessageReq, reader: jspb.BinaryReader): CreateLocationMessageReq;
}

export namespace CreateLocationMessageReq {
  export type AsObject = {
    description: string,
    longitude: number,
    latitude: number,
  }
}

export class CreateLocationMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): message_pb.IMMessage | undefined;
  setMessage(value?: message_pb.IMMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLocationMessageResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLocationMessageResp): CreateLocationMessageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLocationMessageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLocationMessageResp;
  static deserializeBinaryFromReader(message: CreateLocationMessageResp, reader: jspb.BinaryReader): CreateLocationMessageResp;
}

export namespace CreateLocationMessageResp {
  export type AsObject = {
    message?: message_pb.IMMessage.AsObject,
  }
}

export class CreateCustomMessageReq extends jspb.Message {
  getData(): string;
  setData(value: string): void;

  getExtension$(): string;
  setExtension$(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomMessageReq): CreateCustomMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCustomMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomMessageReq;
  static deserializeBinaryFromReader(message: CreateCustomMessageReq, reader: jspb.BinaryReader): CreateCustomMessageReq;
}

export namespace CreateCustomMessageReq {
  export type AsObject = {
    data: string,
    extension: string,
    description: string,
  }
}

export class CreateCustomMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): message_pb.IMMessage | undefined;
  setMessage(value?: message_pb.IMMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomMessageResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomMessageResp): CreateCustomMessageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCustomMessageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomMessageResp;
  static deserializeBinaryFromReader(message: CreateCustomMessageResp, reader: jspb.BinaryReader): CreateCustomMessageResp;
}

export namespace CreateCustomMessageResp {
  export type AsObject = {
    message?: message_pb.IMMessage.AsObject,
  }
}

export class CreateQuoteMessageReq extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  hasQuotemessage(): boolean;
  clearQuotemessage(): void;
  getQuotemessage(): message_pb.IMMessage | undefined;
  setQuotemessage(value?: message_pb.IMMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateQuoteMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateQuoteMessageReq): CreateQuoteMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateQuoteMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateQuoteMessageReq;
  static deserializeBinaryFromReader(message: CreateQuoteMessageReq, reader: jspb.BinaryReader): CreateQuoteMessageReq;
}

export namespace CreateQuoteMessageReq {
  export type AsObject = {
    text: string,
    quotemessage?: message_pb.IMMessage.AsObject,
  }
}

export class CreateQuoteMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): message_pb.IMMessage | undefined;
  setMessage(value?: message_pb.IMMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateQuoteMessageResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateQuoteMessageResp): CreateQuoteMessageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateQuoteMessageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateQuoteMessageResp;
  static deserializeBinaryFromReader(message: CreateQuoteMessageResp, reader: jspb.BinaryReader): CreateQuoteMessageResp;
}

export namespace CreateQuoteMessageResp {
  export type AsObject = {
    message?: message_pb.IMMessage.AsObject,
  }
}

export class CreateAdvancedQuoteMessageReq extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  hasQuotemessage(): boolean;
  clearQuotemessage(): void;
  getQuotemessage(): message_pb.IMMessage | undefined;
  setQuotemessage(value?: message_pb.IMMessage): void;

  clearMessageentitiesList(): void;
  getMessageentitiesList(): Array<message_pb.MessageEntity>;
  setMessageentitiesList(value: Array<message_pb.MessageEntity>): void;
  addMessageentities(value?: message_pb.MessageEntity, index?: number): message_pb.MessageEntity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAdvancedQuoteMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAdvancedQuoteMessageReq): CreateAdvancedQuoteMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAdvancedQuoteMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAdvancedQuoteMessageReq;
  static deserializeBinaryFromReader(message: CreateAdvancedQuoteMessageReq, reader: jspb.BinaryReader): CreateAdvancedQuoteMessageReq;
}

export namespace CreateAdvancedQuoteMessageReq {
  export type AsObject = {
    text: string,
    quotemessage?: message_pb.IMMessage.AsObject,
    messageentitiesList: Array<message_pb.MessageEntity.AsObject>,
  }
}

export class CreateAdvancedQuoteMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): message_pb.IMMessage | undefined;
  setMessage(value?: message_pb.IMMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAdvancedQuoteMessageResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAdvancedQuoteMessageResp): CreateAdvancedQuoteMessageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAdvancedQuoteMessageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAdvancedQuoteMessageResp;
  static deserializeBinaryFromReader(message: CreateAdvancedQuoteMessageResp, reader: jspb.BinaryReader): CreateAdvancedQuoteMessageResp;
}

export namespace CreateAdvancedQuoteMessageResp {
  export type AsObject = {
    message?: message_pb.IMMessage.AsObject,
  }
}

export class CreateCardMessageReq extends jspb.Message {
  hasCard(): boolean;
  clearCard(): void;
  getCard(): message_pb.CardElem | undefined;
  setCard(value?: message_pb.CardElem): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCardMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCardMessageReq): CreateCardMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCardMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCardMessageReq;
  static deserializeBinaryFromReader(message: CreateCardMessageReq, reader: jspb.BinaryReader): CreateCardMessageReq;
}

export namespace CreateCardMessageReq {
  export type AsObject = {
    card?: message_pb.CardElem.AsObject,
  }
}

export class CreateCardMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): message_pb.IMMessage | undefined;
  setMessage(value?: message_pb.IMMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCardMessageResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCardMessageResp): CreateCardMessageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCardMessageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCardMessageResp;
  static deserializeBinaryFromReader(message: CreateCardMessageResp, reader: jspb.BinaryReader): CreateCardMessageResp;
}

export namespace CreateCardMessageResp {
  export type AsObject = {
    message?: message_pb.IMMessage.AsObject,
  }
}

export class CreateImageMessageReq extends jspb.Message {
  getImagesourcepath(): string;
  setImagesourcepath(value: string): void;

  hasSourcepicture(): boolean;
  clearSourcepicture(): void;
  getSourcepicture(): message_pb.PictureBaseInfo | undefined;
  setSourcepicture(value?: message_pb.PictureBaseInfo): void;

  hasBigpicture(): boolean;
  clearBigpicture(): void;
  getBigpicture(): message_pb.PictureBaseInfo | undefined;
  setBigpicture(value?: message_pb.PictureBaseInfo): void;

  hasSnapshotpicture(): boolean;
  clearSnapshotpicture(): void;
  getSnapshotpicture(): message_pb.PictureBaseInfo | undefined;
  setSnapshotpicture(value?: message_pb.PictureBaseInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateImageMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateImageMessageReq): CreateImageMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateImageMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateImageMessageReq;
  static deserializeBinaryFromReader(message: CreateImageMessageReq, reader: jspb.BinaryReader): CreateImageMessageReq;
}

export namespace CreateImageMessageReq {
  export type AsObject = {
    imagesourcepath: string,
    sourcepicture?: message_pb.PictureBaseInfo.AsObject,
    bigpicture?: message_pb.PictureBaseInfo.AsObject,
    snapshotpicture?: message_pb.PictureBaseInfo.AsObject,
  }
}

export class CreateImageMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): message_pb.IMMessage | undefined;
  setMessage(value?: message_pb.IMMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateImageMessageResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateImageMessageResp): CreateImageMessageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateImageMessageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateImageMessageResp;
  static deserializeBinaryFromReader(message: CreateImageMessageResp, reader: jspb.BinaryReader): CreateImageMessageResp;
}

export namespace CreateImageMessageResp {
  export type AsObject = {
    message?: message_pb.IMMessage.AsObject,
  }
}

export class CreateSoundMessageReq extends jspb.Message {
  getSoundpath(): string;
  setSoundpath(value: string): void;

  getDuration(): number;
  setDuration(value: number): void;

  hasSoundelem(): boolean;
  clearSoundelem(): void;
  getSoundelem(): message_pb.SoundBaseInfo | undefined;
  setSoundelem(value?: message_pb.SoundBaseInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSoundMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSoundMessageReq): CreateSoundMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSoundMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSoundMessageReq;
  static deserializeBinaryFromReader(message: CreateSoundMessageReq, reader: jspb.BinaryReader): CreateSoundMessageReq;
}

export namespace CreateSoundMessageReq {
  export type AsObject = {
    soundpath: string,
    duration: number,
    soundelem?: message_pb.SoundBaseInfo.AsObject,
  }
}

export class CreateSoundMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): message_pb.IMMessage | undefined;
  setMessage(value?: message_pb.IMMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSoundMessageResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSoundMessageResp): CreateSoundMessageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSoundMessageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSoundMessageResp;
  static deserializeBinaryFromReader(message: CreateSoundMessageResp, reader: jspb.BinaryReader): CreateSoundMessageResp;
}

export namespace CreateSoundMessageResp {
  export type AsObject = {
    message?: message_pb.IMMessage.AsObject,
  }
}

export class CreateVideoMessageReq extends jspb.Message {
  getVideosourcepath(): string;
  setVideosourcepath(value: string): void;

  getVideotype(): string;
  setVideotype(value: string): void;

  getDuration(): number;
  setDuration(value: number): void;

  getSnapshotsourcepath(): string;
  setSnapshotsourcepath(value: string): void;

  hasVideoelem(): boolean;
  clearVideoelem(): void;
  getVideoelem(): message_pb.VideoBaseInfo | undefined;
  setVideoelem(value?: message_pb.VideoBaseInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVideoMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVideoMessageReq): CreateVideoMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateVideoMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVideoMessageReq;
  static deserializeBinaryFromReader(message: CreateVideoMessageReq, reader: jspb.BinaryReader): CreateVideoMessageReq;
}

export namespace CreateVideoMessageReq {
  export type AsObject = {
    videosourcepath: string,
    videotype: string,
    duration: number,
    snapshotsourcepath: string,
    videoelem?: message_pb.VideoBaseInfo.AsObject,
  }
}

export class CreateVideoMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): message_pb.IMMessage | undefined;
  setMessage(value?: message_pb.IMMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVideoMessageResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVideoMessageResp): CreateVideoMessageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateVideoMessageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVideoMessageResp;
  static deserializeBinaryFromReader(message: CreateVideoMessageResp, reader: jspb.BinaryReader): CreateVideoMessageResp;
}

export namespace CreateVideoMessageResp {
  export type AsObject = {
    message?: message_pb.IMMessage.AsObject,
  }
}

export class CreateFileMessageReq extends jspb.Message {
  getFilesourcepath(): string;
  setFilesourcepath(value: string): void;

  getFilename(): string;
  setFilename(value: string): void;

  hasFileelem(): boolean;
  clearFileelem(): void;
  getFileelem(): message_pb.FileBaseInfo | undefined;
  setFileelem(value?: message_pb.FileBaseInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFileMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFileMessageReq): CreateFileMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFileMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFileMessageReq;
  static deserializeBinaryFromReader(message: CreateFileMessageReq, reader: jspb.BinaryReader): CreateFileMessageReq;
}

export namespace CreateFileMessageReq {
  export type AsObject = {
    filesourcepath: string,
    filename: string,
    fileelem?: message_pb.FileBaseInfo.AsObject,
  }
}

export class CreateFileMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): message_pb.IMMessage | undefined;
  setMessage(value?: message_pb.IMMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFileMessageResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFileMessageResp): CreateFileMessageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFileMessageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFileMessageResp;
  static deserializeBinaryFromReader(message: CreateFileMessageResp, reader: jspb.BinaryReader): CreateFileMessageResp;
}

export namespace CreateFileMessageResp {
  export type AsObject = {
    message?: message_pb.IMMessage.AsObject,
  }
}

export class CreateMergerMessageReq extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<message_pb.IMMessage>;
  setMessagesList(value: Array<message_pb.IMMessage>): void;
  addMessages(value?: message_pb.IMMessage, index?: number): message_pb.IMMessage;

  getTitle(): string;
  setTitle(value: string): void;

  clearSummariesList(): void;
  getSummariesList(): Array<string>;
  setSummariesList(value: Array<string>): void;
  addSummaries(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMergerMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMergerMessageReq): CreateMergerMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMergerMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMergerMessageReq;
  static deserializeBinaryFromReader(message: CreateMergerMessageReq, reader: jspb.BinaryReader): CreateMergerMessageReq;
}

export namespace CreateMergerMessageReq {
  export type AsObject = {
    messagesList: Array<message_pb.IMMessage.AsObject>,
    title: string,
    summariesList: Array<string>,
  }
}

export class CreateMergerMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): message_pb.IMMessage | undefined;
  setMessage(value?: message_pb.IMMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMergerMessageResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMergerMessageResp): CreateMergerMessageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMergerMessageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMergerMessageResp;
  static deserializeBinaryFromReader(message: CreateMergerMessageResp, reader: jspb.BinaryReader): CreateMergerMessageResp;
}

export namespace CreateMergerMessageResp {
  export type AsObject = {
    message?: message_pb.IMMessage.AsObject,
  }
}

export class CreateFaceMessageReq extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFaceMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFaceMessageReq): CreateFaceMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFaceMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFaceMessageReq;
  static deserializeBinaryFromReader(message: CreateFaceMessageReq, reader: jspb.BinaryReader): CreateFaceMessageReq;
}

export namespace CreateFaceMessageReq {
  export type AsObject = {
    index: number,
    data: string,
  }
}

export class CreateFaceMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): message_pb.IMMessage | undefined;
  setMessage(value?: message_pb.IMMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFaceMessageResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFaceMessageResp): CreateFaceMessageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFaceMessageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFaceMessageResp;
  static deserializeBinaryFromReader(message: CreateFaceMessageResp, reader: jspb.BinaryReader): CreateFaceMessageResp;
}

export namespace CreateFaceMessageResp {
  export type AsObject = {
    message?: message_pb.IMMessage.AsObject,
  }
}

export class CreateForwardMessageReq extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): message_pb.IMMessage | undefined;
  setMessage(value?: message_pb.IMMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateForwardMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateForwardMessageReq): CreateForwardMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateForwardMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateForwardMessageReq;
  static deserializeBinaryFromReader(message: CreateForwardMessageReq, reader: jspb.BinaryReader): CreateForwardMessageReq;
}

export namespace CreateForwardMessageReq {
  export type AsObject = {
    message?: message_pb.IMMessage.AsObject,
  }
}

export class CreateForwardMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): message_pb.IMMessage | undefined;
  setMessage(value?: message_pb.IMMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateForwardMessageResp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateForwardMessageResp): CreateForwardMessageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateForwardMessageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateForwardMessageResp;
  static deserializeBinaryFromReader(message: CreateForwardMessageResp, reader: jspb.BinaryReader): CreateForwardMessageResp;
}

export namespace CreateForwardMessageResp {
  export type AsObject = {
    message?: message_pb.IMMessage.AsObject,
  }
}

export class UploadLogsReq extends jspb.Message {
  getLine(): number;
  setLine(value: number): void;

  getEx(): string;
  setEx(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadLogsReq.AsObject;
  static toObject(includeInstance: boolean, msg: UploadLogsReq): UploadLogsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadLogsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadLogsReq;
  static deserializeBinaryFromReader(message: UploadLogsReq, reader: jspb.BinaryReader): UploadLogsReq;
}

export namespace UploadLogsReq {
  export type AsObject = {
    line: number,
    ex: string,
  }
}

export class UploadLogsResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadLogsResp.AsObject;
  static toObject(includeInstance: boolean, msg: UploadLogsResp): UploadLogsResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadLogsResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadLogsResp;
  static deserializeBinaryFromReader(message: UploadLogsResp, reader: jspb.BinaryReader): UploadLogsResp;
}

export namespace UploadLogsResp {
  export type AsObject = {
  }
}

export class LogReq extends jspb.Message {
  getLoglevel(): number;
  setLoglevel(value: number): void;

  getFile(): string;
  setFile(value: string): void;

  getLine(): number;
  setLine(value: number): void;

  getMsg(): string;
  setMsg(value: string): void;

  getErr(): string;
  setErr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogReq.AsObject;
  static toObject(includeInstance: boolean, msg: LogReq): LogReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogReq;
  static deserializeBinaryFromReader(message: LogReq, reader: jspb.BinaryReader): LogReq;
}

export namespace LogReq {
  export type AsObject = {
    loglevel: number,
    file: string,
    line: number,
    msg: string,
    err: string,
  }
}

export class LogResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogResp.AsObject;
  static toObject(includeInstance: boolean, msg: LogResp): LogResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogResp;
  static deserializeBinaryFromReader(message: LogResp, reader: jspb.BinaryReader): LogResp;
}

export namespace LogResp {
  export type AsObject = {
  }
}

