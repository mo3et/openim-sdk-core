// package: openim.sdk.conversation
// file: conversation.proto

import * as jspb from "google-protobuf";
import * as group_pb from "./group_pb";
import * as message_pb from "./message_pb";
import * as relation_pb from "./relation_pb";

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

export class ConversationArgs extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): void;

  clearClientmsgidlistList(): void;
  getClientmsgidlistList(): Array<string>;
  setClientmsgidlistList(value: Array<string>): void;
  addClientmsgidlist(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationArgs.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationArgs): ConversationArgs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversationArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationArgs;
  static deserializeBinaryFromReader(message: ConversationArgs, reader: jspb.BinaryReader): ConversationArgs;
}

export namespace ConversationArgs {
  export type AsObject = {
    conversationid: string,
    clientmsgidlistList: Array<string>,
  }
}

export class FindMessageListCallback extends jspb.Message {
  getTotalcount(): number;
  setTotalcount(value: number): void;

  clearFindresultitemsList(): void;
  getFindresultitemsList(): Array<SearchByConversationResult>;
  setFindresultitemsList(value: Array<SearchByConversationResult>): void;
  addFindresultitems(value?: SearchByConversationResult, index?: number): SearchByConversationResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindMessageListCallback.AsObject;
  static toObject(includeInstance: boolean, msg: FindMessageListCallback): FindMessageListCallback.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindMessageListCallback, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindMessageListCallback;
  static deserializeBinaryFromReader(message: FindMessageListCallback, reader: jspb.BinaryReader): FindMessageListCallback;
}

export namespace FindMessageListCallback {
  export type AsObject = {
    totalcount: number,
    findresultitemsList: Array<SearchByConversationResult.AsObject>,
  }
}

export class SearchLocalMessagesParams extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): void;

  clearKeywordlistList(): void;
  getKeywordlistList(): Array<string>;
  setKeywordlistList(value: Array<string>): void;
  addKeywordlist(value: string, index?: number): string;

  getKeywordlistmatchtype(): number;
  setKeywordlistmatchtype(value: number): void;

  clearSenderuseridlistList(): void;
  getSenderuseridlistList(): Array<string>;
  setSenderuseridlistList(value: Array<string>): void;
  addSenderuseridlist(value: string, index?: number): string;

  clearMessagetypelistList(): void;
  getMessagetypelistList(): Array<number>;
  setMessagetypelistList(value: Array<number>): void;
  addMessagetypelist(value: number, index?: number): number;

  getSearchtimeposition(): number;
  setSearchtimeposition(value: number): void;

  getSearchtimeperiod(): number;
  setSearchtimeperiod(value: number): void;

  getPageindex(): number;
  setPageindex(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchLocalMessagesParams.AsObject;
  static toObject(includeInstance: boolean, msg: SearchLocalMessagesParams): SearchLocalMessagesParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchLocalMessagesParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchLocalMessagesParams;
  static deserializeBinaryFromReader(message: SearchLocalMessagesParams, reader: jspb.BinaryReader): SearchLocalMessagesParams;
}

export namespace SearchLocalMessagesParams {
  export type AsObject = {
    conversationid: string,
    keywordlistList: Array<string>,
    keywordlistmatchtype: number,
    senderuseridlistList: Array<string>,
    messagetypelistList: Array<number>,
    searchtimeposition: number,
    searchtimeperiod: number,
    pageindex: number,
    count: number,
  }
}

export class SearchLocalMessagesCallback extends jspb.Message {
  getTotalcount(): number;
  setTotalcount(value: number): void;

  clearSearchresultitemsList(): void;
  getSearchresultitemsList(): Array<SearchByConversationResult>;
  setSearchresultitemsList(value: Array<SearchByConversationResult>): void;
  addSearchresultitems(value?: SearchByConversationResult, index?: number): SearchByConversationResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchLocalMessagesCallback.AsObject;
  static toObject(includeInstance: boolean, msg: SearchLocalMessagesCallback): SearchLocalMessagesCallback.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchLocalMessagesCallback, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchLocalMessagesCallback;
  static deserializeBinaryFromReader(message: SearchLocalMessagesCallback, reader: jspb.BinaryReader): SearchLocalMessagesCallback;
}

export namespace SearchLocalMessagesCallback {
  export type AsObject = {
    totalcount: number,
    searchresultitemsList: Array<SearchByConversationResult.AsObject>,
  }
}

export class SearchByConversationResult extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): void;

  getConversationtype(): number;
  setConversationtype(value: number): void;

  getShowname(): string;
  setShowname(value: string): void;

  getFaceurl(): string;
  setFaceurl(value: string): void;

  getLatestmsgsendtime(): number;
  setLatestmsgsendtime(value: number): void;

  getMessagecount(): number;
  setMessagecount(value: number): void;

  clearMessagelistList(): void;
  getMessagelistList(): Array<message_pb.IMMessage>;
  setMessagelistList(value: Array<message_pb.IMMessage>): void;
  addMessagelist(value?: message_pb.IMMessage, index?: number): message_pb.IMMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchByConversationResult.AsObject;
  static toObject(includeInstance: boolean, msg: SearchByConversationResult): SearchByConversationResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchByConversationResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchByConversationResult;
  static deserializeBinaryFromReader(message: SearchByConversationResult, reader: jspb.BinaryReader): SearchByConversationResult;
}

export namespace SearchByConversationResult {
  export type AsObject = {
    conversationid: string,
    conversationtype: number,
    showname: string,
    faceurl: string,
    latestmsgsendtime: number,
    messagecount: number,
    messagelistList: Array<message_pb.IMMessage.AsObject>,
  }
}

export class GetAllConversationListReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllConversationListReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllConversationListReq): GetAllConversationListReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllConversationListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllConversationListReq;
  static deserializeBinaryFromReader(message: GetAllConversationListReq, reader: jspb.BinaryReader): GetAllConversationListReq;
}

export namespace GetAllConversationListReq {
  export type AsObject = {
  }
}

export class GetAllConversationListResp extends jspb.Message {
  clearConversationlistList(): void;
  getConversationlistList(): Array<Conversation>;
  setConversationlistList(value: Array<Conversation>): void;
  addConversationlist(value?: Conversation, index?: number): Conversation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllConversationListResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllConversationListResp): GetAllConversationListResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllConversationListResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllConversationListResp;
  static deserializeBinaryFromReader(message: GetAllConversationListResp, reader: jspb.BinaryReader): GetAllConversationListResp;
}

export namespace GetAllConversationListResp {
  export type AsObject = {
    conversationlistList: Array<Conversation.AsObject>,
  }
}

export class GetConversationListSplitReq extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConversationListSplitReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetConversationListSplitReq): GetConversationListSplitReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConversationListSplitReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConversationListSplitReq;
  static deserializeBinaryFromReader(message: GetConversationListSplitReq, reader: jspb.BinaryReader): GetConversationListSplitReq;
}

export namespace GetConversationListSplitReq {
  export type AsObject = {
    offset: number,
    count: number,
  }
}

export class GetConversationListSplitResp extends jspb.Message {
  clearConversationlistList(): void;
  getConversationlistList(): Array<Conversation>;
  setConversationlistList(value: Array<Conversation>): void;
  addConversationlist(value?: Conversation, index?: number): Conversation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConversationListSplitResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetConversationListSplitResp): GetConversationListSplitResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConversationListSplitResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConversationListSplitResp;
  static deserializeBinaryFromReader(message: GetConversationListSplitResp, reader: jspb.BinaryReader): GetConversationListSplitResp;
}

export namespace GetConversationListSplitResp {
  export type AsObject = {
    conversationlistList: Array<Conversation.AsObject>,
  }
}

export class HideConversationReq extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HideConversationReq.AsObject;
  static toObject(includeInstance: boolean, msg: HideConversationReq): HideConversationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HideConversationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HideConversationReq;
  static deserializeBinaryFromReader(message: HideConversationReq, reader: jspb.BinaryReader): HideConversationReq;
}

export namespace HideConversationReq {
  export type AsObject = {
    conversationid: string,
  }
}

export class HideConversationResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HideConversationResp.AsObject;
  static toObject(includeInstance: boolean, msg: HideConversationResp): HideConversationResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HideConversationResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HideConversationResp;
  static deserializeBinaryFromReader(message: HideConversationResp, reader: jspb.BinaryReader): HideConversationResp;
}

export namespace HideConversationResp {
  export type AsObject = {
  }
}

export class GetAtAllTagReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAtAllTagReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAtAllTagReq): GetAtAllTagReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAtAllTagReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAtAllTagReq;
  static deserializeBinaryFromReader(message: GetAtAllTagReq, reader: jspb.BinaryReader): GetAtAllTagReq;
}

export namespace GetAtAllTagReq {
  export type AsObject = {
  }
}

export class GetAtAllTagResp extends jspb.Message {
  getTag(): string;
  setTag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAtAllTagResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetAtAllTagResp): GetAtAllTagResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAtAllTagResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAtAllTagResp;
  static deserializeBinaryFromReader(message: GetAtAllTagResp, reader: jspb.BinaryReader): GetAtAllTagResp;
}

export namespace GetAtAllTagResp {
  export type AsObject = {
    tag: string,
  }
}

export class GetOneConversationReq extends jspb.Message {
  getSessiontype(): number;
  setSessiontype(value: number): void;

  getSourceid(): string;
  setSourceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOneConversationReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetOneConversationReq): GetOneConversationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOneConversationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOneConversationReq;
  static deserializeBinaryFromReader(message: GetOneConversationReq, reader: jspb.BinaryReader): GetOneConversationReq;
}

export namespace GetOneConversationReq {
  export type AsObject = {
    sessiontype: number,
    sourceid: string,
  }
}

export class GetOneConversationResp extends jspb.Message {
  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): Conversation | undefined;
  setConversation(value?: Conversation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOneConversationResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetOneConversationResp): GetOneConversationResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOneConversationResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOneConversationResp;
  static deserializeBinaryFromReader(message: GetOneConversationResp, reader: jspb.BinaryReader): GetOneConversationResp;
}

export namespace GetOneConversationResp {
  export type AsObject = {
    conversation?: Conversation.AsObject,
  }
}

export class GetMultipleConversationReq extends jspb.Message {
  clearConversationidlistList(): void;
  getConversationidlistList(): Array<string>;
  setConversationidlistList(value: Array<string>): void;
  addConversationidlist(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMultipleConversationReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetMultipleConversationReq): GetMultipleConversationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMultipleConversationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMultipleConversationReq;
  static deserializeBinaryFromReader(message: GetMultipleConversationReq, reader: jspb.BinaryReader): GetMultipleConversationReq;
}

export namespace GetMultipleConversationReq {
  export type AsObject = {
    conversationidlistList: Array<string>,
  }
}

export class GetMultipleConversationResp extends jspb.Message {
  clearConversationlistList(): void;
  getConversationlistList(): Array<Conversation>;
  setConversationlistList(value: Array<Conversation>): void;
  addConversationlist(value?: Conversation, index?: number): Conversation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMultipleConversationResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetMultipleConversationResp): GetMultipleConversationResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMultipleConversationResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMultipleConversationResp;
  static deserializeBinaryFromReader(message: GetMultipleConversationResp, reader: jspb.BinaryReader): GetMultipleConversationResp;
}

export namespace GetMultipleConversationResp {
  export type AsObject = {
    conversationlistList: Array<Conversation.AsObject>,
  }
}

export class HideAllConversationsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HideAllConversationsReq.AsObject;
  static toObject(includeInstance: boolean, msg: HideAllConversationsReq): HideAllConversationsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HideAllConversationsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HideAllConversationsReq;
  static deserializeBinaryFromReader(message: HideAllConversationsReq, reader: jspb.BinaryReader): HideAllConversationsReq;
}

export namespace HideAllConversationsReq {
  export type AsObject = {
  }
}

export class HideAllConversationsResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HideAllConversationsResp.AsObject;
  static toObject(includeInstance: boolean, msg: HideAllConversationsResp): HideAllConversationsResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HideAllConversationsResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HideAllConversationsResp;
  static deserializeBinaryFromReader(message: HideAllConversationsResp, reader: jspb.BinaryReader): HideAllConversationsResp;
}

export namespace HideAllConversationsResp {
  export type AsObject = {
  }
}

export class SetConversationDraftReq extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): void;

  getDrafttext(): string;
  setDrafttext(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetConversationDraftReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetConversationDraftReq): SetConversationDraftReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetConversationDraftReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetConversationDraftReq;
  static deserializeBinaryFromReader(message: SetConversationDraftReq, reader: jspb.BinaryReader): SetConversationDraftReq;
}

export namespace SetConversationDraftReq {
  export type AsObject = {
    conversationid: string,
    drafttext: string,
  }
}

export class SetConversationDraftResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetConversationDraftResp.AsObject;
  static toObject(includeInstance: boolean, msg: SetConversationDraftResp): SetConversationDraftResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetConversationDraftResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetConversationDraftResp;
  static deserializeBinaryFromReader(message: SetConversationDraftResp, reader: jspb.BinaryReader): SetConversationDraftResp;
}

export namespace SetConversationDraftResp {
  export type AsObject = {
  }
}

export class SetConversationReq extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): void;

  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): Conversation | undefined;
  setConversation(value?: Conversation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetConversationReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetConversationReq): SetConversationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetConversationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetConversationReq;
  static deserializeBinaryFromReader(message: SetConversationReq, reader: jspb.BinaryReader): SetConversationReq;
}

export namespace SetConversationReq {
  export type AsObject = {
    conversationid: string,
    conversation?: Conversation.AsObject,
  }
}

export class SetConversationResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetConversationResp.AsObject;
  static toObject(includeInstance: boolean, msg: SetConversationResp): SetConversationResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetConversationResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetConversationResp;
  static deserializeBinaryFromReader(message: SetConversationResp, reader: jspb.BinaryReader): SetConversationResp;
}

export namespace SetConversationResp {
  export type AsObject = {
  }
}

export class GetTotalUnreadMsgCountReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTotalUnreadMsgCountReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetTotalUnreadMsgCountReq): GetTotalUnreadMsgCountReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTotalUnreadMsgCountReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTotalUnreadMsgCountReq;
  static deserializeBinaryFromReader(message: GetTotalUnreadMsgCountReq, reader: jspb.BinaryReader): GetTotalUnreadMsgCountReq;
}

export namespace GetTotalUnreadMsgCountReq {
  export type AsObject = {
  }
}

export class GetTotalUnreadMsgCountResp extends jspb.Message {
  getTotalunreadcount(): number;
  setTotalunreadcount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTotalUnreadMsgCountResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetTotalUnreadMsgCountResp): GetTotalUnreadMsgCountResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTotalUnreadMsgCountResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTotalUnreadMsgCountResp;
  static deserializeBinaryFromReader(message: GetTotalUnreadMsgCountResp, reader: jspb.BinaryReader): GetTotalUnreadMsgCountResp;
}

export namespace GetTotalUnreadMsgCountResp {
  export type AsObject = {
    totalunreadcount: number,
  }
}

export class GetConversationIDBySessionTypeReq extends jspb.Message {
  getSourceid(): string;
  setSourceid(value: string): void;

  getSessiontype(): number;
  setSessiontype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConversationIDBySessionTypeReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetConversationIDBySessionTypeReq): GetConversationIDBySessionTypeReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConversationIDBySessionTypeReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConversationIDBySessionTypeReq;
  static deserializeBinaryFromReader(message: GetConversationIDBySessionTypeReq, reader: jspb.BinaryReader): GetConversationIDBySessionTypeReq;
}

export namespace GetConversationIDBySessionTypeReq {
  export type AsObject = {
    sourceid: string,
    sessiontype: number,
  }
}

export class GetConversationIDBySessionTypeResp extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConversationIDBySessionTypeResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetConversationIDBySessionTypeResp): GetConversationIDBySessionTypeResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConversationIDBySessionTypeResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConversationIDBySessionTypeResp;
  static deserializeBinaryFromReader(message: GetConversationIDBySessionTypeResp, reader: jspb.BinaryReader): GetConversationIDBySessionTypeResp;
}

export namespace GetConversationIDBySessionTypeResp {
  export type AsObject = {
    conversationid: string,
  }
}

export class FindMessageListReq extends jspb.Message {
  clearConversationsargsList(): void;
  getConversationsargsList(): Array<ConversationArgs>;
  setConversationsargsList(value: Array<ConversationArgs>): void;
  addConversationsargs(value?: ConversationArgs, index?: number): ConversationArgs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindMessageListReq.AsObject;
  static toObject(includeInstance: boolean, msg: FindMessageListReq): FindMessageListReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindMessageListReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindMessageListReq;
  static deserializeBinaryFromReader(message: FindMessageListReq, reader: jspb.BinaryReader): FindMessageListReq;
}

export namespace FindMessageListReq {
  export type AsObject = {
    conversationsargsList: Array<ConversationArgs.AsObject>,
  }
}

export class FindMessageListResp extends jspb.Message {
  clearFindresultitemsList(): void;
  getFindresultitemsList(): Array<SearchByConversationResult>;
  setFindresultitemsList(value: Array<SearchByConversationResult>): void;
  addFindresultitems(value?: SearchByConversationResult, index?: number): SearchByConversationResult;

  getTotalcount(): number;
  setTotalcount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindMessageListResp.AsObject;
  static toObject(includeInstance: boolean, msg: FindMessageListResp): FindMessageListResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindMessageListResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindMessageListResp;
  static deserializeBinaryFromReader(message: FindMessageListResp, reader: jspb.BinaryReader): FindMessageListResp;
}

export namespace FindMessageListResp {
  export type AsObject = {
    findresultitemsList: Array<SearchByConversationResult.AsObject>,
    totalcount: number,
  }
}

export class MarkConversationMessageAsReadReq extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkConversationMessageAsReadReq.AsObject;
  static toObject(includeInstance: boolean, msg: MarkConversationMessageAsReadReq): MarkConversationMessageAsReadReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkConversationMessageAsReadReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkConversationMessageAsReadReq;
  static deserializeBinaryFromReader(message: MarkConversationMessageAsReadReq, reader: jspb.BinaryReader): MarkConversationMessageAsReadReq;
}

export namespace MarkConversationMessageAsReadReq {
  export type AsObject = {
    conversationid: string,
  }
}

export class MarkConversationMessageAsReadResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkConversationMessageAsReadResp.AsObject;
  static toObject(includeInstance: boolean, msg: MarkConversationMessageAsReadResp): MarkConversationMessageAsReadResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkConversationMessageAsReadResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkConversationMessageAsReadResp;
  static deserializeBinaryFromReader(message: MarkConversationMessageAsReadResp, reader: jspb.BinaryReader): MarkConversationMessageAsReadResp;
}

export namespace MarkConversationMessageAsReadResp {
  export type AsObject = {
  }
}

export class MarkAllConversationMessageAsReadReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkAllConversationMessageAsReadReq.AsObject;
  static toObject(includeInstance: boolean, msg: MarkAllConversationMessageAsReadReq): MarkAllConversationMessageAsReadReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkAllConversationMessageAsReadReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkAllConversationMessageAsReadReq;
  static deserializeBinaryFromReader(message: MarkAllConversationMessageAsReadReq, reader: jspb.BinaryReader): MarkAllConversationMessageAsReadReq;
}

export namespace MarkAllConversationMessageAsReadReq {
  export type AsObject = {
  }
}

export class MarkAllConversationMessageAsReadResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkAllConversationMessageAsReadResp.AsObject;
  static toObject(includeInstance: boolean, msg: MarkAllConversationMessageAsReadResp): MarkAllConversationMessageAsReadResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkAllConversationMessageAsReadResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkAllConversationMessageAsReadResp;
  static deserializeBinaryFromReader(message: MarkAllConversationMessageAsReadResp, reader: jspb.BinaryReader): MarkAllConversationMessageAsReadResp;
}

export namespace MarkAllConversationMessageAsReadResp {
  export type AsObject = {
  }
}

export class DeleteMessageFromLocalStorageReq extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): void;

  getClientmsgid(): string;
  setClientmsgid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMessageFromLocalStorageReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMessageFromLocalStorageReq): DeleteMessageFromLocalStorageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteMessageFromLocalStorageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMessageFromLocalStorageReq;
  static deserializeBinaryFromReader(message: DeleteMessageFromLocalStorageReq, reader: jspb.BinaryReader): DeleteMessageFromLocalStorageReq;
}

export namespace DeleteMessageFromLocalStorageReq {
  export type AsObject = {
    conversationid: string,
    clientmsgid: string,
  }
}

export class DeleteMessageFromLocalStorageResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMessageFromLocalStorageResp.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMessageFromLocalStorageResp): DeleteMessageFromLocalStorageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteMessageFromLocalStorageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMessageFromLocalStorageResp;
  static deserializeBinaryFromReader(message: DeleteMessageFromLocalStorageResp, reader: jspb.BinaryReader): DeleteMessageFromLocalStorageResp;
}

export namespace DeleteMessageFromLocalStorageResp {
  export type AsObject = {
  }
}

export class ClearConversationAndDeleteAllMsgReq extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearConversationAndDeleteAllMsgReq.AsObject;
  static toObject(includeInstance: boolean, msg: ClearConversationAndDeleteAllMsgReq): ClearConversationAndDeleteAllMsgReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClearConversationAndDeleteAllMsgReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearConversationAndDeleteAllMsgReq;
  static deserializeBinaryFromReader(message: ClearConversationAndDeleteAllMsgReq, reader: jspb.BinaryReader): ClearConversationAndDeleteAllMsgReq;
}

export namespace ClearConversationAndDeleteAllMsgReq {
  export type AsObject = {
    conversationid: string,
  }
}

export class ClearConversationAndDeleteAllMsgResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearConversationAndDeleteAllMsgResp.AsObject;
  static toObject(includeInstance: boolean, msg: ClearConversationAndDeleteAllMsgResp): ClearConversationAndDeleteAllMsgResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClearConversationAndDeleteAllMsgResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearConversationAndDeleteAllMsgResp;
  static deserializeBinaryFromReader(message: ClearConversationAndDeleteAllMsgResp, reader: jspb.BinaryReader): ClearConversationAndDeleteAllMsgResp;
}

export namespace ClearConversationAndDeleteAllMsgResp {
  export type AsObject = {
  }
}

export class DeleteConversationAndDeleteAllMsgReq extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConversationAndDeleteAllMsgReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConversationAndDeleteAllMsgReq): DeleteConversationAndDeleteAllMsgReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteConversationAndDeleteAllMsgReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConversationAndDeleteAllMsgReq;
  static deserializeBinaryFromReader(message: DeleteConversationAndDeleteAllMsgReq, reader: jspb.BinaryReader): DeleteConversationAndDeleteAllMsgReq;
}

export namespace DeleteConversationAndDeleteAllMsgReq {
  export type AsObject = {
    conversationid: string,
  }
}

export class DeleteConversationAndDeleteAllMsgResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConversationAndDeleteAllMsgResp.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConversationAndDeleteAllMsgResp): DeleteConversationAndDeleteAllMsgResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteConversationAndDeleteAllMsgResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConversationAndDeleteAllMsgResp;
  static deserializeBinaryFromReader(message: DeleteConversationAndDeleteAllMsgResp, reader: jspb.BinaryReader): DeleteConversationAndDeleteAllMsgResp;
}

export namespace DeleteConversationAndDeleteAllMsgResp {
  export type AsObject = {
  }
}

export class SearchLocalMessagesReq extends jspb.Message {
  hasSearchparam(): boolean;
  clearSearchparam(): void;
  getSearchparam(): SearchLocalMessagesParams | undefined;
  setSearchparam(value?: SearchLocalMessagesParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchLocalMessagesReq.AsObject;
  static toObject(includeInstance: boolean, msg: SearchLocalMessagesReq): SearchLocalMessagesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchLocalMessagesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchLocalMessagesReq;
  static deserializeBinaryFromReader(message: SearchLocalMessagesReq, reader: jspb.BinaryReader): SearchLocalMessagesReq;
}

export namespace SearchLocalMessagesReq {
  export type AsObject = {
    searchparam?: SearchLocalMessagesParams.AsObject,
  }
}

export class SearchLocalMessagesResp extends jspb.Message {
  hasSearchresult(): boolean;
  clearSearchresult(): void;
  getSearchresult(): SearchLocalMessagesCallback | undefined;
  setSearchresult(value?: SearchLocalMessagesCallback): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchLocalMessagesResp.AsObject;
  static toObject(includeInstance: boolean, msg: SearchLocalMessagesResp): SearchLocalMessagesResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchLocalMessagesResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchLocalMessagesResp;
  static deserializeBinaryFromReader(message: SearchLocalMessagesResp, reader: jspb.BinaryReader): SearchLocalMessagesResp;
}

export namespace SearchLocalMessagesResp {
  export type AsObject = {
    searchresult?: SearchLocalMessagesCallback.AsObject,
  }
}

export class SetMessageLocalExReq extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): void;

  getClientmsgid(): string;
  setClientmsgid(value: string): void;

  getLocalex(): string;
  setLocalex(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetMessageLocalExReq.AsObject;
  static toObject(includeInstance: boolean, msg: SetMessageLocalExReq): SetMessageLocalExReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetMessageLocalExReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetMessageLocalExReq;
  static deserializeBinaryFromReader(message: SetMessageLocalExReq, reader: jspb.BinaryReader): SetMessageLocalExReq;
}

export namespace SetMessageLocalExReq {
  export type AsObject = {
    conversationid: string,
    clientmsgid: string,
    localex: string,
  }
}

export class SetMessageLocalExResp extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetMessageLocalExResp.AsObject;
  static toObject(includeInstance: boolean, msg: SetMessageLocalExResp): SetMessageLocalExResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetMessageLocalExResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetMessageLocalExResp;
  static deserializeBinaryFromReader(message: SetMessageLocalExResp, reader: jspb.BinaryReader): SetMessageLocalExResp;
}

export namespace SetMessageLocalExResp {
  export type AsObject = {
    success: boolean,
  }
}

export class SearchConversationReq extends jspb.Message {
  getSearchparam(): string;
  setSearchparam(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchConversationReq.AsObject;
  static toObject(includeInstance: boolean, msg: SearchConversationReq): SearchConversationReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchConversationReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchConversationReq;
  static deserializeBinaryFromReader(message: SearchConversationReq, reader: jspb.BinaryReader): SearchConversationReq;
}

export namespace SearchConversationReq {
  export type AsObject = {
    searchparam: string,
  }
}

export class SearchConversationResp extends jspb.Message {
  clearConversationlistList(): void;
  getConversationlistList(): Array<Conversation>;
  setConversationlistList(value: Array<Conversation>): void;
  addConversationlist(value?: Conversation, index?: number): Conversation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchConversationResp.AsObject;
  static toObject(includeInstance: boolean, msg: SearchConversationResp): SearchConversationResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchConversationResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchConversationResp;
  static deserializeBinaryFromReader(message: SearchConversationResp, reader: jspb.BinaryReader): SearchConversationResp;
}

export namespace SearchConversationResp {
  export type AsObject = {
    conversationlistList: Array<Conversation.AsObject>,
  }
}

export class EventOnSendMsgProgressData extends jspb.Message {
  getProgress(): number;
  setProgress(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnSendMsgProgressData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnSendMsgProgressData): EventOnSendMsgProgressData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnSendMsgProgressData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnSendMsgProgressData;
  static deserializeBinaryFromReader(message: EventOnSendMsgProgressData, reader: jspb.BinaryReader): EventOnSendMsgProgressData;
}

export namespace EventOnSendMsgProgressData {
  export type AsObject = {
    progress: number,
  }
}

export class EventOnUploadFileProgressData extends jspb.Message {
  getProgress(): number;
  setProgress(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnUploadFileProgressData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnUploadFileProgressData): EventOnUploadFileProgressData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnUploadFileProgressData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnUploadFileProgressData;
  static deserializeBinaryFromReader(message: EventOnUploadFileProgressData, reader: jspb.BinaryReader): EventOnUploadFileProgressData;
}

export namespace EventOnUploadFileProgressData {
  export type AsObject = {
    progress: number,
  }
}

export class EventEventOnUploadLogsProgressData extends jspb.Message {
  getProgress(): number;
  setProgress(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventEventOnUploadLogsProgressData.AsObject;
  static toObject(includeInstance: boolean, msg: EventEventOnUploadLogsProgressData): EventEventOnUploadLogsProgressData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventEventOnUploadLogsProgressData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventEventOnUploadLogsProgressData;
  static deserializeBinaryFromReader(message: EventEventOnUploadLogsProgressData, reader: jspb.BinaryReader): EventEventOnUploadLogsProgressData;
}

export namespace EventEventOnUploadLogsProgressData {
  export type AsObject = {
    progress: number,
    total: number,
  }
}

export class EventOnConnectingData extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnConnectingData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnConnectingData): EventOnConnectingData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnConnectingData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnConnectingData;
  static deserializeBinaryFromReader(message: EventOnConnectingData, reader: jspb.BinaryReader): EventOnConnectingData;
}

export namespace EventOnConnectingData {
  export type AsObject = {
  }
}

export class EventOnConnectSuccessData extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnConnectSuccessData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnConnectSuccessData): EventOnConnectSuccessData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnConnectSuccessData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnConnectSuccessData;
  static deserializeBinaryFromReader(message: EventOnConnectSuccessData, reader: jspb.BinaryReader): EventOnConnectSuccessData;
}

export namespace EventOnConnectSuccessData {
  export type AsObject = {
  }
}

export class EventOnConnectFailedData extends jspb.Message {
  getErrcode(): number;
  setErrcode(value: number): void;

  getErrmsg(): string;
  setErrmsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnConnectFailedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnConnectFailedData): EventOnConnectFailedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnConnectFailedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnConnectFailedData;
  static deserializeBinaryFromReader(message: EventOnConnectFailedData, reader: jspb.BinaryReader): EventOnConnectFailedData;
}

export namespace EventOnConnectFailedData {
  export type AsObject = {
    errcode: number,
    errmsg: string,
  }
}

export class EventOnKickedOfflineData extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnKickedOfflineData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnKickedOfflineData): EventOnKickedOfflineData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnKickedOfflineData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnKickedOfflineData;
  static deserializeBinaryFromReader(message: EventOnKickedOfflineData, reader: jspb.BinaryReader): EventOnKickedOfflineData;
}

export namespace EventOnKickedOfflineData {
  export type AsObject = {
  }
}

export class EventOnUserTokenExpiredData extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnUserTokenExpiredData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnUserTokenExpiredData): EventOnUserTokenExpiredData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnUserTokenExpiredData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnUserTokenExpiredData;
  static deserializeBinaryFromReader(message: EventOnUserTokenExpiredData, reader: jspb.BinaryReader): EventOnUserTokenExpiredData;
}

export namespace EventOnUserTokenExpiredData {
  export type AsObject = {
  }
}

export class EventOnUserTokenInvalidData extends jspb.Message {
  getErrmsg(): string;
  setErrmsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnUserTokenInvalidData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnUserTokenInvalidData): EventOnUserTokenInvalidData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnUserTokenInvalidData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnUserTokenInvalidData;
  static deserializeBinaryFromReader(message: EventOnUserTokenInvalidData, reader: jspb.BinaryReader): EventOnUserTokenInvalidData;
}

export namespace EventOnUserTokenInvalidData {
  export type AsObject = {
    errmsg: string,
  }
}

export class EventOnSyncServerStartData extends jspb.Message {
  getReinstalled(): boolean;
  setReinstalled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnSyncServerStartData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnSyncServerStartData): EventOnSyncServerStartData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnSyncServerStartData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnSyncServerStartData;
  static deserializeBinaryFromReader(message: EventOnSyncServerStartData, reader: jspb.BinaryReader): EventOnSyncServerStartData;
}

export namespace EventOnSyncServerStartData {
  export type AsObject = {
    reinstalled: boolean,
  }
}

export class EventOnSyncServerFinishData extends jspb.Message {
  getReinstalled(): boolean;
  setReinstalled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnSyncServerFinishData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnSyncServerFinishData): EventOnSyncServerFinishData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnSyncServerFinishData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnSyncServerFinishData;
  static deserializeBinaryFromReader(message: EventOnSyncServerFinishData, reader: jspb.BinaryReader): EventOnSyncServerFinishData;
}

export namespace EventOnSyncServerFinishData {
  export type AsObject = {
    reinstalled: boolean,
  }
}

export class EventOnSyncServerFailedData extends jspb.Message {
  getReinstalled(): boolean;
  setReinstalled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnSyncServerFailedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnSyncServerFailedData): EventOnSyncServerFailedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnSyncServerFailedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnSyncServerFailedData;
  static deserializeBinaryFromReader(message: EventOnSyncServerFailedData, reader: jspb.BinaryReader): EventOnSyncServerFailedData;
}

export namespace EventOnSyncServerFailedData {
  export type AsObject = {
    reinstalled: boolean,
  }
}

export class EventOnSyncServerProgressData extends jspb.Message {
  getProgress(): number;
  setProgress(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnSyncServerProgressData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnSyncServerProgressData): EventOnSyncServerProgressData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnSyncServerProgressData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnSyncServerProgressData;
  static deserializeBinaryFromReader(message: EventOnSyncServerProgressData, reader: jspb.BinaryReader): EventOnSyncServerProgressData;
}

export namespace EventOnSyncServerProgressData {
  export type AsObject = {
    progress: number,
  }
}

export class EventOnNewConversationData extends jspb.Message {
  getConversationlist(): string;
  setConversationlist(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnNewConversationData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnNewConversationData): EventOnNewConversationData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnNewConversationData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnNewConversationData;
  static deserializeBinaryFromReader(message: EventOnNewConversationData, reader: jspb.BinaryReader): EventOnNewConversationData;
}

export namespace EventOnNewConversationData {
  export type AsObject = {
    conversationlist: string,
  }
}

export class EventOnConversationChangedData extends jspb.Message {
  getConversationlist(): string;
  setConversationlist(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnConversationChangedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnConversationChangedData): EventOnConversationChangedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnConversationChangedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnConversationChangedData;
  static deserializeBinaryFromReader(message: EventOnConversationChangedData, reader: jspb.BinaryReader): EventOnConversationChangedData;
}

export namespace EventOnConversationChangedData {
  export type AsObject = {
    conversationlist: string,
  }
}

export class EventOnTotalUnreadMessageCountChangedData extends jspb.Message {
  getTotalunreadcount(): number;
  setTotalunreadcount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnTotalUnreadMessageCountChangedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnTotalUnreadMessageCountChangedData): EventOnTotalUnreadMessageCountChangedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnTotalUnreadMessageCountChangedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnTotalUnreadMessageCountChangedData;
  static deserializeBinaryFromReader(message: EventOnTotalUnreadMessageCountChangedData, reader: jspb.BinaryReader): EventOnTotalUnreadMessageCountChangedData;
}

export namespace EventOnTotalUnreadMessageCountChangedData {
  export type AsObject = {
    totalunreadcount: number,
  }
}

export class EventOnConversationUserInputStatusChangedData extends jspb.Message {
  getChange(): string;
  setChange(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnConversationUserInputStatusChangedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnConversationUserInputStatusChangedData): EventOnConversationUserInputStatusChangedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnConversationUserInputStatusChangedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnConversationUserInputStatusChangedData;
  static deserializeBinaryFromReader(message: EventOnConversationUserInputStatusChangedData, reader: jspb.BinaryReader): EventOnConversationUserInputStatusChangedData;
}

export namespace EventOnConversationUserInputStatusChangedData {
  export type AsObject = {
    change: string,
  }
}

export class EventOnRecvNewMessageData extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnRecvNewMessageData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnRecvNewMessageData): EventOnRecvNewMessageData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnRecvNewMessageData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnRecvNewMessageData;
  static deserializeBinaryFromReader(message: EventOnRecvNewMessageData, reader: jspb.BinaryReader): EventOnRecvNewMessageData;
}

export namespace EventOnRecvNewMessageData {
  export type AsObject = {
    conversationid: string,
    message: string,
  }
}

export class EventOnRecvC2CReadReceiptData extends jspb.Message {
  getMsgreceiptlist(): string;
  setMsgreceiptlist(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnRecvC2CReadReceiptData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnRecvC2CReadReceiptData): EventOnRecvC2CReadReceiptData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnRecvC2CReadReceiptData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnRecvC2CReadReceiptData;
  static deserializeBinaryFromReader(message: EventOnRecvC2CReadReceiptData, reader: jspb.BinaryReader): EventOnRecvC2CReadReceiptData;
}

export namespace EventOnRecvC2CReadReceiptData {
  export type AsObject = {
    msgreceiptlist: string,
  }
}

export class EventOnNewRecvMessageRevokedData extends jspb.Message {
  getMessagerevoked(): string;
  setMessagerevoked(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnNewRecvMessageRevokedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnNewRecvMessageRevokedData): EventOnNewRecvMessageRevokedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnNewRecvMessageRevokedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnNewRecvMessageRevokedData;
  static deserializeBinaryFromReader(message: EventOnNewRecvMessageRevokedData, reader: jspb.BinaryReader): EventOnNewRecvMessageRevokedData;
}

export namespace EventOnNewRecvMessageRevokedData {
  export type AsObject = {
    messagerevoked: string,
  }
}

export class EventOnRecvOfflineNewMessageData extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnRecvOfflineNewMessageData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnRecvOfflineNewMessageData): EventOnRecvOfflineNewMessageData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnRecvOfflineNewMessageData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnRecvOfflineNewMessageData;
  static deserializeBinaryFromReader(message: EventOnRecvOfflineNewMessageData, reader: jspb.BinaryReader): EventOnRecvOfflineNewMessageData;
}

export namespace EventOnRecvOfflineNewMessageData {
  export type AsObject = {
    message: string,
  }
}

export class EventOnMsgDeletedData extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnMsgDeletedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnMsgDeletedData): EventOnMsgDeletedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnMsgDeletedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnMsgDeletedData;
  static deserializeBinaryFromReader(message: EventOnMsgDeletedData, reader: jspb.BinaryReader): EventOnMsgDeletedData;
}

export namespace EventOnMsgDeletedData {
  export type AsObject = {
    message: string,
  }
}

export class EventOnRecvOnlineOnlyMessageData extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnRecvOnlineOnlyMessageData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnRecvOnlineOnlyMessageData): EventOnRecvOnlineOnlyMessageData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnRecvOnlineOnlyMessageData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnRecvOnlineOnlyMessageData;
  static deserializeBinaryFromReader(message: EventOnRecvOnlineOnlyMessageData, reader: jspb.BinaryReader): EventOnRecvOnlineOnlyMessageData;
}

export namespace EventOnRecvOnlineOnlyMessageData {
  export type AsObject = {
    conversationid: string,
    message: string,
  }
}

export class EventOnMsgEditedData extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnMsgEditedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnMsgEditedData): EventOnMsgEditedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnMsgEditedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnMsgEditedData;
  static deserializeBinaryFromReader(message: EventOnMsgEditedData, reader: jspb.BinaryReader): EventOnMsgEditedData;
}

export namespace EventOnMsgEditedData {
  export type AsObject = {
    conversationid: string,
    message: string,
  }
}

export class EventOnFriendApplicationAddedData extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): relation_pb.FriendRequestInfo | undefined;
  setRequest(value?: relation_pb.FriendRequestInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnFriendApplicationAddedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnFriendApplicationAddedData): EventOnFriendApplicationAddedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnFriendApplicationAddedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnFriendApplicationAddedData;
  static deserializeBinaryFromReader(message: EventOnFriendApplicationAddedData, reader: jspb.BinaryReader): EventOnFriendApplicationAddedData;
}

export namespace EventOnFriendApplicationAddedData {
  export type AsObject = {
    request?: relation_pb.FriendRequestInfo.AsObject,
  }
}

export class EventOnFriendApplicationDeletedData extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): relation_pb.FriendRequestInfo | undefined;
  setRequest(value?: relation_pb.FriendRequestInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnFriendApplicationDeletedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnFriendApplicationDeletedData): EventOnFriendApplicationDeletedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnFriendApplicationDeletedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnFriendApplicationDeletedData;
  static deserializeBinaryFromReader(message: EventOnFriendApplicationDeletedData, reader: jspb.BinaryReader): EventOnFriendApplicationDeletedData;
}

export namespace EventOnFriendApplicationDeletedData {
  export type AsObject = {
    request?: relation_pb.FriendRequestInfo.AsObject,
  }
}

export class EventOnFriendApplicationAcceptedData extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): relation_pb.FriendRequestInfo | undefined;
  setRequest(value?: relation_pb.FriendRequestInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnFriendApplicationAcceptedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnFriendApplicationAcceptedData): EventOnFriendApplicationAcceptedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnFriendApplicationAcceptedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnFriendApplicationAcceptedData;
  static deserializeBinaryFromReader(message: EventOnFriendApplicationAcceptedData, reader: jspb.BinaryReader): EventOnFriendApplicationAcceptedData;
}

export namespace EventOnFriendApplicationAcceptedData {
  export type AsObject = {
    request?: relation_pb.FriendRequestInfo.AsObject,
  }
}

export class EventOnFriendApplicationRejectedData extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): relation_pb.FriendRequestInfo | undefined;
  setRequest(value?: relation_pb.FriendRequestInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnFriendApplicationRejectedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnFriendApplicationRejectedData): EventOnFriendApplicationRejectedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnFriendApplicationRejectedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnFriendApplicationRejectedData;
  static deserializeBinaryFromReader(message: EventOnFriendApplicationRejectedData, reader: jspb.BinaryReader): EventOnFriendApplicationRejectedData;
}

export namespace EventOnFriendApplicationRejectedData {
  export type AsObject = {
    request?: relation_pb.FriendRequestInfo.AsObject,
  }
}

export class EventOnFriendAddedData extends jspb.Message {
  hasFriend(): boolean;
  clearFriend(): void;
  getFriend(): relation_pb.FriendInfo | undefined;
  setFriend(value?: relation_pb.FriendInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnFriendAddedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnFriendAddedData): EventOnFriendAddedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnFriendAddedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnFriendAddedData;
  static deserializeBinaryFromReader(message: EventOnFriendAddedData, reader: jspb.BinaryReader): EventOnFriendAddedData;
}

export namespace EventOnFriendAddedData {
  export type AsObject = {
    friend?: relation_pb.FriendInfo.AsObject,
  }
}

export class EventOnFriendDeletedData extends jspb.Message {
  hasFriend(): boolean;
  clearFriend(): void;
  getFriend(): relation_pb.FriendInfo | undefined;
  setFriend(value?: relation_pb.FriendInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnFriendDeletedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnFriendDeletedData): EventOnFriendDeletedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnFriendDeletedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnFriendDeletedData;
  static deserializeBinaryFromReader(message: EventOnFriendDeletedData, reader: jspb.BinaryReader): EventOnFriendDeletedData;
}

export namespace EventOnFriendDeletedData {
  export type AsObject = {
    friend?: relation_pb.FriendInfo.AsObject,
  }
}

export class EventOnFriendInfoChangedData extends jspb.Message {
  hasFriend(): boolean;
  clearFriend(): void;
  getFriend(): relation_pb.FriendInfo | undefined;
  setFriend(value?: relation_pb.FriendInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnFriendInfoChangedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnFriendInfoChangedData): EventOnFriendInfoChangedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnFriendInfoChangedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnFriendInfoChangedData;
  static deserializeBinaryFromReader(message: EventOnFriendInfoChangedData, reader: jspb.BinaryReader): EventOnFriendInfoChangedData;
}

export namespace EventOnFriendInfoChangedData {
  export type AsObject = {
    friend?: relation_pb.FriendInfo.AsObject,
  }
}

export class EventOnBlackAddedData extends jspb.Message {
  hasBlack(): boolean;
  clearBlack(): void;
  getBlack(): relation_pb.BlackInfo | undefined;
  setBlack(value?: relation_pb.BlackInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnBlackAddedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnBlackAddedData): EventOnBlackAddedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnBlackAddedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnBlackAddedData;
  static deserializeBinaryFromReader(message: EventOnBlackAddedData, reader: jspb.BinaryReader): EventOnBlackAddedData;
}

export namespace EventOnBlackAddedData {
  export type AsObject = {
    black?: relation_pb.BlackInfo.AsObject,
  }
}

export class EventOnBlackDeletedData extends jspb.Message {
  hasBlack(): boolean;
  clearBlack(): void;
  getBlack(): relation_pb.BlackInfo | undefined;
  setBlack(value?: relation_pb.BlackInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnBlackDeletedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnBlackDeletedData): EventOnBlackDeletedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnBlackDeletedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnBlackDeletedData;
  static deserializeBinaryFromReader(message: EventOnBlackDeletedData, reader: jspb.BinaryReader): EventOnBlackDeletedData;
}

export namespace EventOnBlackDeletedData {
  export type AsObject = {
    black?: relation_pb.BlackInfo.AsObject,
  }
}

export class EventOnJoinedGroupAddedData extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): group_pb.GroupInfo | undefined;
  setGroup(value?: group_pb.GroupInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnJoinedGroupAddedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnJoinedGroupAddedData): EventOnJoinedGroupAddedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnJoinedGroupAddedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnJoinedGroupAddedData;
  static deserializeBinaryFromReader(message: EventOnJoinedGroupAddedData, reader: jspb.BinaryReader): EventOnJoinedGroupAddedData;
}

export namespace EventOnJoinedGroupAddedData {
  export type AsObject = {
    group?: group_pb.GroupInfo.AsObject,
  }
}

export class EventOnJoinedGroupDeletedData extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): group_pb.GroupInfo | undefined;
  setGroup(value?: group_pb.GroupInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnJoinedGroupDeletedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnJoinedGroupDeletedData): EventOnJoinedGroupDeletedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnJoinedGroupDeletedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnJoinedGroupDeletedData;
  static deserializeBinaryFromReader(message: EventOnJoinedGroupDeletedData, reader: jspb.BinaryReader): EventOnJoinedGroupDeletedData;
}

export namespace EventOnJoinedGroupDeletedData {
  export type AsObject = {
    group?: group_pb.GroupInfo.AsObject,
  }
}

export class EventOnGroupMemberAddedData extends jspb.Message {
  hasMember(): boolean;
  clearMember(): void;
  getMember(): group_pb.GroupMemberInfo | undefined;
  setMember(value?: group_pb.GroupMemberInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnGroupMemberAddedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnGroupMemberAddedData): EventOnGroupMemberAddedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnGroupMemberAddedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnGroupMemberAddedData;
  static deserializeBinaryFromReader(message: EventOnGroupMemberAddedData, reader: jspb.BinaryReader): EventOnGroupMemberAddedData;
}

export namespace EventOnGroupMemberAddedData {
  export type AsObject = {
    member?: group_pb.GroupMemberInfo.AsObject,
  }
}

export class EventOnGroupMemberDeletedData extends jspb.Message {
  hasMember(): boolean;
  clearMember(): void;
  getMember(): group_pb.GroupMemberInfo | undefined;
  setMember(value?: group_pb.GroupMemberInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnGroupMemberDeletedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnGroupMemberDeletedData): EventOnGroupMemberDeletedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnGroupMemberDeletedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnGroupMemberDeletedData;
  static deserializeBinaryFromReader(message: EventOnGroupMemberDeletedData, reader: jspb.BinaryReader): EventOnGroupMemberDeletedData;
}

export namespace EventOnGroupMemberDeletedData {
  export type AsObject = {
    member?: group_pb.GroupMemberInfo.AsObject,
  }
}

export class EventOnGroupApplicationAddedData extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): group_pb.GroupRequestInfo | undefined;
  setRequest(value?: group_pb.GroupRequestInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnGroupApplicationAddedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnGroupApplicationAddedData): EventOnGroupApplicationAddedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnGroupApplicationAddedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnGroupApplicationAddedData;
  static deserializeBinaryFromReader(message: EventOnGroupApplicationAddedData, reader: jspb.BinaryReader): EventOnGroupApplicationAddedData;
}

export namespace EventOnGroupApplicationAddedData {
  export type AsObject = {
    request?: group_pb.GroupRequestInfo.AsObject,
  }
}

export class EventOnGroupApplicationDeletedData extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): group_pb.GroupRequestInfo | undefined;
  setRequest(value?: group_pb.GroupRequestInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnGroupApplicationDeletedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnGroupApplicationDeletedData): EventOnGroupApplicationDeletedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnGroupApplicationDeletedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnGroupApplicationDeletedData;
  static deserializeBinaryFromReader(message: EventOnGroupApplicationDeletedData, reader: jspb.BinaryReader): EventOnGroupApplicationDeletedData;
}

export namespace EventOnGroupApplicationDeletedData {
  export type AsObject = {
    request?: group_pb.GroupRequestInfo.AsObject,
  }
}

export class EventOnGroupInfoChangedData extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): group_pb.GroupInfo | undefined;
  setGroup(value?: group_pb.GroupInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnGroupInfoChangedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnGroupInfoChangedData): EventOnGroupInfoChangedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnGroupInfoChangedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnGroupInfoChangedData;
  static deserializeBinaryFromReader(message: EventOnGroupInfoChangedData, reader: jspb.BinaryReader): EventOnGroupInfoChangedData;
}

export namespace EventOnGroupInfoChangedData {
  export type AsObject = {
    group?: group_pb.GroupInfo.AsObject,
  }
}

export class EventOnGroupDismissedData extends jspb.Message {
  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): group_pb.GroupInfo | undefined;
  setGroup(value?: group_pb.GroupInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnGroupDismissedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnGroupDismissedData): EventOnGroupDismissedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnGroupDismissedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnGroupDismissedData;
  static deserializeBinaryFromReader(message: EventOnGroupDismissedData, reader: jspb.BinaryReader): EventOnGroupDismissedData;
}

export namespace EventOnGroupDismissedData {
  export type AsObject = {
    group?: group_pb.GroupInfo.AsObject,
  }
}

export class EventOnGroupMemberInfoChangedData extends jspb.Message {
  hasMember(): boolean;
  clearMember(): void;
  getMember(): group_pb.GroupMemberInfo | undefined;
  setMember(value?: group_pb.GroupMemberInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnGroupMemberInfoChangedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnGroupMemberInfoChangedData): EventOnGroupMemberInfoChangedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnGroupMemberInfoChangedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnGroupMemberInfoChangedData;
  static deserializeBinaryFromReader(message: EventOnGroupMemberInfoChangedData, reader: jspb.BinaryReader): EventOnGroupMemberInfoChangedData;
}

export namespace EventOnGroupMemberInfoChangedData {
  export type AsObject = {
    member?: group_pb.GroupMemberInfo.AsObject,
  }
}

export class EventOnGroupApplicationAcceptedData extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): group_pb.GroupRequestInfo | undefined;
  setRequest(value?: group_pb.GroupRequestInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnGroupApplicationAcceptedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnGroupApplicationAcceptedData): EventOnGroupApplicationAcceptedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnGroupApplicationAcceptedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnGroupApplicationAcceptedData;
  static deserializeBinaryFromReader(message: EventOnGroupApplicationAcceptedData, reader: jspb.BinaryReader): EventOnGroupApplicationAcceptedData;
}

export namespace EventOnGroupApplicationAcceptedData {
  export type AsObject = {
    request?: group_pb.GroupRequestInfo.AsObject,
  }
}

export class EventOnGroupApplicationRejectedData extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): group_pb.GroupRequestInfo | undefined;
  setRequest(value?: group_pb.GroupRequestInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnGroupApplicationRejectedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnGroupApplicationRejectedData): EventOnGroupApplicationRejectedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnGroupApplicationRejectedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnGroupApplicationRejectedData;
  static deserializeBinaryFromReader(message: EventOnGroupApplicationRejectedData, reader: jspb.BinaryReader): EventOnGroupApplicationRejectedData;
}

export namespace EventOnGroupApplicationRejectedData {
  export type AsObject = {
    request?: group_pb.GroupRequestInfo.AsObject,
  }
}

export class EventOnRecvCustomBusinessMessageData extends jspb.Message {
  getBusinessmessage(): string;
  setBusinessmessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnRecvCustomBusinessMessageData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnRecvCustomBusinessMessageData): EventOnRecvCustomBusinessMessageData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnRecvCustomBusinessMessageData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnRecvCustomBusinessMessageData;
  static deserializeBinaryFromReader(message: EventOnRecvCustomBusinessMessageData, reader: jspb.BinaryReader): EventOnRecvCustomBusinessMessageData;
}

export namespace EventOnRecvCustomBusinessMessageData {
  export type AsObject = {
    businessmessage: string,
  }
}

export class EventOnSelfInfoUpdatedData extends jspb.Message {
  getUserinfo(): string;
  setUserinfo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnSelfInfoUpdatedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnSelfInfoUpdatedData): EventOnSelfInfoUpdatedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnSelfInfoUpdatedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnSelfInfoUpdatedData;
  static deserializeBinaryFromReader(message: EventOnSelfInfoUpdatedData, reader: jspb.BinaryReader): EventOnSelfInfoUpdatedData;
}

export namespace EventOnSelfInfoUpdatedData {
  export type AsObject = {
    userinfo: string,
  }
}

export class EventOnUserStatusChangedData extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  clearPlatformidsList(): void;
  getPlatformidsList(): Array<number>;
  setPlatformidsList(value: Array<number>): void;
  addPlatformids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnUserStatusChangedData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnUserStatusChangedData): EventOnUserStatusChangedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnUserStatusChangedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnUserStatusChangedData;
  static deserializeBinaryFromReader(message: EventOnUserStatusChangedData, reader: jspb.BinaryReader): EventOnUserStatusChangedData;
}

export namespace EventOnUserStatusChangedData {
  export type AsObject = {
    userid: string,
    platformidsList: Array<number>,
  }
}

export class EventOnUserCommandAddData extends jspb.Message {
  getUsercommand(): string;
  setUsercommand(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnUserCommandAddData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnUserCommandAddData): EventOnUserCommandAddData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnUserCommandAddData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnUserCommandAddData;
  static deserializeBinaryFromReader(message: EventOnUserCommandAddData, reader: jspb.BinaryReader): EventOnUserCommandAddData;
}

export namespace EventOnUserCommandAddData {
  export type AsObject = {
    usercommand: string,
  }
}

export class EventOnUserCommandDeleteData extends jspb.Message {
  getUsercommand(): string;
  setUsercommand(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnUserCommandDeleteData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnUserCommandDeleteData): EventOnUserCommandDeleteData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnUserCommandDeleteData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnUserCommandDeleteData;
  static deserializeBinaryFromReader(message: EventOnUserCommandDeleteData, reader: jspb.BinaryReader): EventOnUserCommandDeleteData;
}

export namespace EventOnUserCommandDeleteData {
  export type AsObject = {
    usercommand: string,
  }
}

export class EventOnUserCommandUpdateData extends jspb.Message {
  getUsercommand(): string;
  setUsercommand(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOnUserCommandUpdateData.AsObject;
  static toObject(includeInstance: boolean, msg: EventOnUserCommandUpdateData): EventOnUserCommandUpdateData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOnUserCommandUpdateData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOnUserCommandUpdateData;
  static deserializeBinaryFromReader(message: EventOnUserCommandUpdateData, reader: jspb.BinaryReader): EventOnUserCommandUpdateData;
}

export namespace EventOnUserCommandUpdateData {
  export type AsObject = {
    usercommand: string,
  }
}

export interface FuncRequestEventNameMap {
  NONE: 0;
  GETALLCONVERSATIONLIST: 1;
  GETCONVERSATIONLIST: 2;
  GETCONVERSATION: 3;
  INITSDK: 4;
  LOGIN: 5;
  SENDMESSAGE: 6;
  UPLOADLOGS: 7;
  UPLOADFILE: 8;
  LOG: 9;
  EVENTONSENDMSGPROGRESS: 12;
  EVENTONUPLOADFILEPROGRESS: 13;
  EVENTONUPLOADLOGSPROGRESS: 14;
  EVENTONCONNECTING: 15;
  EVENTONCONNECTSUCCESS: 16;
  EVENTONCONNECTFAILED: 17;
  EVENTONKICKEDOFFLINE: 18;
  EVENTONUSERTOKENEXPIRED: 19;
  EVENTONUSERTOKENINVALID: 20;
  EVENTONSYNCSERVERSTART: 21;
  EVENTONSYNCSERVERFINISH: 22;
  EVENTONSYNCSERVERFAILED: 23;
  EVENTONSYNCSERVERPROGRESS: 24;
  EVENTONNEWCONVERSATION: 25;
  EVENTONCONVERSATIONCHANGED: 26;
  EVENTONTOTALUNREADMESSAGECOUNTCHANGED: 27;
  EVENTONCONVERSATIONUSERINPUTSTATUSCHANGED: 28;
  EVENTONRECVNEWMESSAGE: 29;
  EVENTONRECVC2CREADRECEIPT: 30;
  EVENTONNEWRECVMESSAGEREVOKED: 31;
  EVENTONRECVOFFLINENEWMESSAGE: 32;
  EVENTONMSGDELETED: 33;
  EVENTONRECVONLINEONLYMESSAGE: 34;
  EVENTONMSGEDITED: 35;
  EVENTONFRIENDAPPLICATIONADDED: 36;
  EVENTONFRIENDAPPLICATIONDELETED: 37;
  EVENTONFRIENDAPPLICATIONACCEPTED: 38;
  EVENTONFRIENDAPPLICATIONREJECTED: 39;
  EVENTONFRIENDADDED: 40;
  EVENTONFRIENDDELETED: 41;
  EVENTONFRIENDINFOCHANGED: 42;
  EVENTONBLACKADDED: 43;
  EVENTONBLACKDELETED: 44;
  EVENTONJOINEDGROUPADDED: 45;
  EVENTONJOINEDGROUPDELETED: 46;
  EVENTONGROUPMEMBERADDED: 47;
  EVENTONGROUPMEMBERDELETED: 48;
  EVENTONGROUPAPPLICATIONADDED: 49;
  EVENTONGROUPAPPLICATIONDELETED: 50;
  EVENTONGROUPINFOCHANGED: 51;
  EVENTONGROUPDISMISSED: 52;
  EVENTONGROUPMEMBERINFOCHANGED: 53;
  EVENTONGROUPAPPLICATIONACCEPTED: 54;
  EVENTONGROUPAPPLICATIONREJECTED: 55;
  EVENTONRECVCUSTOMBUSINESSMESSAGE: 56;
  EVENTONSELFINFOUPDATED: 57;
  EVENTONUSERSTATUSCHANGED: 58;
  EVENTONUSERCOMMANDADD: 59;
  EVENTONUSERCOMMANDDELETE: 60;
  EVENTONUSERCOMMANDUPDATE: 61;
  CREATEGROUP: 1000;
  JOINGROUP: 1001;
  QUITGROUP: 1002;
  DISMISSGROUP: 1003;
  CHANGEGROUPMUTE: 1004;
  CHANGEGROUPMEMBERMUTE: 1005;
  TRANSFERGROUPOWNER: 1006;
  KICKGROUPMEMBER: 1007;
  SETGROUPINFO: 1008;
  SETGROUPMEMBERINFO: 1009;
  GETJOINEDGROUPS: 1010;
  GETJOINEDGROUPSPAGE: 1011;
  GETSPECIFIEDGROUPSINFO: 1012;
  SEARCHGROUPS: 1013;
  GETGROUPMEMBEROWNERANDADMIN: 1014;
  GETGROUPMEMBERSBYJOINTIMEFILTER: 1015;
  GETSPECIFIEDGROUPMEMBERSINFO: 1016;
  GETGROUPMEMBERS: 1017;
  GETGROUPREQUEST: 1018;
  SEARCHGROUPMEMBERS: 1019;
  ISJOINGROUP: 1020;
  GETUSERSINGROUP: 1021;
  INVITEUSERTOGROUP: 1022;
  HANDLERGROUPREQUEST: 1023;
  GETGROUPMEMBERINFO: 1024;
  GETSPECIFIEDFRIENDS: 1100;
  ADDFRIEND: 1101;
  GETFRIENDREQUESTS: 1102;
  HANDLERFRIENDREQUEST: 1103;
  CHECKFRIEND: 1104;
  DELETEFRIEND: 1105;
  GETFRIENDS: 1106;
  GETFRIENDSPAGE: 1107;
  SEARCHFRIENDS: 1108;
  ADDBLACK: 1109;
  DELETEBLACK: 1110;
  GETBLACKS: 1111;
  UPDATEFRIENDS: 1112;
  GETCONVERSATIONLISTSPLIT: 2000;
  HIDECONVERSATION: 2001;
  GETATALLTAG: 2002;
  GETONECONVERSATION: 2003;
  GETMULTIPLECONVERSATION: 2004;
  HIDEALLCONVERSATIONS: 2005;
  SETCONVERSATIONDRAFT: 2006;
  SETCONVERSATION: 2007;
  GETTOTALUNREADMSGCOUNT: 2008;
  GETCONVERSATIONIDBYSESSIONTYPE: 2009;
  FINDMESSAGELIST: 2010;
  GETADVANCEDHISTORYMESSAGELIST: 2011;
  GETADVANCEDHISTORYMESSAGELISTREVERSE: 2012;
  REVOKEMESSAGE: 2013;
  TYPINGSTATUSUPDATE: 2014;
  MARKCONVERSATIONMESSAGEASREAD: 2015;
  MARKALLCONVERSATIONMESSAGEASREAD: 2016;
  DELETEMESSAGEFROMLOCALSTORAGE: 2017;
  DELETEMESSAGE: 2018;
  DELETEALLMSGFROMLOCALANDSERVER: 2019;
  DELETEALLMESSAGEFROMLOCALSTORAGE: 2020;
  CLEARCONVERSATIONANDDELETEALLMSG: 2021;
  DELETECONVERSATIONANDDELETEALLMSG: 2022;
  INSERTSINGLEMESSAGETOLOCALSTORAGE: 2023;
  INSERTGROUPMESSAGETOLOCALSTORAGE: 2024;
  SEARCHLOCALMESSAGES: 2025;
  SETMESSAGELOCALEX: 2026;
  SEARCHCONVERSATION: 2027;
  CREATETEXTMESSAGE: 2028;
  CREATEADVANCEDTEXTMESSAGE: 2029;
  CREATETEXTATMESSAGE: 2030;
  CREATELOCATIONMESSAGE: 2031;
  CREATECUSTOMMESSAGE: 2032;
  CREATEQUOTEMESSAGE: 2033;
  CREATEADVANCEDQUOTEMESSAGE: 2034;
  CREATECARDMESSAGE: 2035;
  CREATEIMAGEMESSAGE: 2036;
  CREATESOUNDMESSAGE: 2037;
  CREATEVIDEOMESSAGE: 2038;
  CREATEFILEMESSAGE: 2039;
  CREATEMERGERMESSAGE: 2040;
  CREATEFACEMESSAGE: 2041;
  CREATEFORWARDMESSAGE: 2042;
  PROCESSUSERCOMMANDGETALL: 2100;
  GETSELFUSERINFO: 2101;
  SETSELFINFO: 2102;
  PROCESSUSERCOMMANDADD: 2103;
  PROCESSUSERCOMMANDDELETE: 2104;
  PROCESSUSERCOMMANDUPDATE: 2105;
  GETUSERSINFO: 2106;
  GETUSERSINFOFROMSERVER: 2107;
}

export const FuncRequestEventName: FuncRequestEventNameMap;

