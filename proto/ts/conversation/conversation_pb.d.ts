// package: openim.sdk.conversation
// file: conversation.proto

import * as jspb from "google-protobuf";
import * as message_pb from "./message_pb";
import * as shared_pb from "./shared_pb";

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
  getConversationlistList(): Array<shared_pb.Conversation>;
  setConversationlistList(value: Array<shared_pb.Conversation>): void;
  addConversationlist(value?: shared_pb.Conversation, index?: number): shared_pb.Conversation;

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
    conversationlistList: Array<shared_pb.Conversation.AsObject>,
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
  getConversation(): shared_pb.Conversation | undefined;
  setConversation(value?: shared_pb.Conversation): void;

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
    conversation?: shared_pb.Conversation.AsObject,
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
  getConversationlistList(): Array<shared_pb.Conversation>;
  setConversationlistList(value: Array<shared_pb.Conversation>): void;
  addConversationlist(value?: shared_pb.Conversation, index?: number): shared_pb.Conversation;

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
    conversationlistList: Array<shared_pb.Conversation.AsObject>,
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

  hasRecvmsgopt(): boolean;
  clearRecvmsgopt(): void;
  getRecvmsgopt(): number;
  setRecvmsgopt(value: number): void;

  hasGroupattype(): boolean;
  clearGroupattype(): void;
  getGroupattype(): number;
  setGroupattype(value: number): void;

  hasIspinned(): boolean;
  clearIspinned(): void;
  getIspinned(): boolean;
  setIspinned(value: boolean): void;

  hasIsprivatechat(): boolean;
  clearIsprivatechat(): void;
  getIsprivatechat(): boolean;
  setIsprivatechat(value: boolean): void;

  hasBurnduration(): boolean;
  clearBurnduration(): void;
  getBurnduration(): number;
  setBurnduration(value: number): void;

  hasEx(): boolean;
  clearEx(): void;
  getEx(): string;
  setEx(value: string): void;

  hasMsgdestructtime(): boolean;
  clearMsgdestructtime(): void;
  getMsgdestructtime(): number;
  setMsgdestructtime(value: number): void;

  hasIsmsgdestruct(): boolean;
  clearIsmsgdestruct(): void;
  getIsmsgdestruct(): boolean;
  setIsmsgdestruct(value: boolean): void;

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
    recvmsgopt: number,
    groupattype: number,
    ispinned: boolean,
    isprivatechat: boolean,
    burnduration: number,
    ex: string,
    msgdestructtime: number,
    ismsgdestruct: boolean,
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
  getConversationlistList(): Array<shared_pb.Conversation>;
  setConversationlistList(value: Array<shared_pb.Conversation>): void;
  addConversationlist(value?: shared_pb.Conversation, index?: number): shared_pb.Conversation;

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
    conversationlistList: Array<shared_pb.Conversation.AsObject>,
  }
}

