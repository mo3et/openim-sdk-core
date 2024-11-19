// package: openim.sdk.relation
// file: relation.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as shared_pb from "./shared_pb";

export class GetSpecifiedFriendsReq extends jspb.Message {
  clearFrienduseridsList(): void;
  getFrienduseridsList(): Array<string>;
  setFrienduseridsList(value: Array<string>): void;
  addFrienduserids(value: string, index?: number): string;

  getFilterblack(): boolean;
  setFilterblack(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSpecifiedFriendsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetSpecifiedFriendsReq): GetSpecifiedFriendsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSpecifiedFriendsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSpecifiedFriendsReq;
  static deserializeBinaryFromReader(message: GetSpecifiedFriendsReq, reader: jspb.BinaryReader): GetSpecifiedFriendsReq;
}

export namespace GetSpecifiedFriendsReq {
  export type AsObject = {
    frienduseridsList: Array<string>,
    filterblack: boolean,
  }
}

export class GetSpecifiedFriendsResp extends jspb.Message {
  clearFriendsList(): void;
  getFriendsList(): Array<shared_pb.FriendInfo>;
  setFriendsList(value: Array<shared_pb.FriendInfo>): void;
  addFriends(value?: shared_pb.FriendInfo, index?: number): shared_pb.FriendInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSpecifiedFriendsResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetSpecifiedFriendsResp): GetSpecifiedFriendsResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSpecifiedFriendsResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSpecifiedFriendsResp;
  static deserializeBinaryFromReader(message: GetSpecifiedFriendsResp, reader: jspb.BinaryReader): GetSpecifiedFriendsResp;
}

export namespace GetSpecifiedFriendsResp {
  export type AsObject = {
    friendsList: Array<shared_pb.FriendInfo.AsObject>,
  }
}

export class AddFriendReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getReqmsg(): string;
  setReqmsg(value: string): void;

  getEx(): string;
  setEx(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddFriendReq.AsObject;
  static toObject(includeInstance: boolean, msg: AddFriendReq): AddFriendReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddFriendReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddFriendReq;
  static deserializeBinaryFromReader(message: AddFriendReq, reader: jspb.BinaryReader): AddFriendReq;
}

export namespace AddFriendReq {
  export type AsObject = {
    userid: string,
    reqmsg: string,
    ex: string,
  }
}

export class AddFriendResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddFriendResp.AsObject;
  static toObject(includeInstance: boolean, msg: AddFriendResp): AddFriendResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddFriendResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddFriendResp;
  static deserializeBinaryFromReader(message: AddFriendResp, reader: jspb.BinaryReader): AddFriendResp;
}

export namespace AddFriendResp {
  export type AsObject = {
  }
}

export class GetFriendRequestsReq extends jspb.Message {
  getSend(): boolean;
  setSend(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFriendRequestsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetFriendRequestsReq): GetFriendRequestsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFriendRequestsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFriendRequestsReq;
  static deserializeBinaryFromReader(message: GetFriendRequestsReq, reader: jspb.BinaryReader): GetFriendRequestsReq;
}

export namespace GetFriendRequestsReq {
  export type AsObject = {
    send: boolean,
  }
}

export class GetFriendRequestsResp extends jspb.Message {
  clearRequestsList(): void;
  getRequestsList(): Array<shared_pb.FriendRequestInfo>;
  setRequestsList(value: Array<shared_pb.FriendRequestInfo>): void;
  addRequests(value?: shared_pb.FriendRequestInfo, index?: number): shared_pb.FriendRequestInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFriendRequestsResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetFriendRequestsResp): GetFriendRequestsResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFriendRequestsResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFriendRequestsResp;
  static deserializeBinaryFromReader(message: GetFriendRequestsResp, reader: jspb.BinaryReader): GetFriendRequestsResp;
}

export namespace GetFriendRequestsResp {
  export type AsObject = {
    requestsList: Array<shared_pb.FriendRequestInfo.AsObject>,
  }
}

export class HandlerFriendRequestReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getHandlemsg(): string;
  setHandlemsg(value: string): void;

  getStatus(): common_pb.ApprovalStatusMap[keyof common_pb.ApprovalStatusMap];
  setStatus(value: common_pb.ApprovalStatusMap[keyof common_pb.ApprovalStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandlerFriendRequestReq.AsObject;
  static toObject(includeInstance: boolean, msg: HandlerFriendRequestReq): HandlerFriendRequestReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HandlerFriendRequestReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandlerFriendRequestReq;
  static deserializeBinaryFromReader(message: HandlerFriendRequestReq, reader: jspb.BinaryReader): HandlerFriendRequestReq;
}

export namespace HandlerFriendRequestReq {
  export type AsObject = {
    userid: string,
    handlemsg: string,
    status: common_pb.ApprovalStatusMap[keyof common_pb.ApprovalStatusMap],
  }
}

export class HandlerFriendRequestResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandlerFriendRequestResp.AsObject;
  static toObject(includeInstance: boolean, msg: HandlerFriendRequestResp): HandlerFriendRequestResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HandlerFriendRequestResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandlerFriendRequestResp;
  static deserializeBinaryFromReader(message: HandlerFriendRequestResp, reader: jspb.BinaryReader): HandlerFriendRequestResp;
}

export namespace HandlerFriendRequestResp {
  export type AsObject = {
  }
}

export class CheckFriendReq extends jspb.Message {
  clearFrienduseridsList(): void;
  getFrienduseridsList(): Array<string>;
  setFrienduseridsList(value: Array<string>): void;
  addFrienduserids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckFriendReq.AsObject;
  static toObject(includeInstance: boolean, msg: CheckFriendReq): CheckFriendReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckFriendReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckFriendReq;
  static deserializeBinaryFromReader(message: CheckFriendReq, reader: jspb.BinaryReader): CheckFriendReq;
}

export namespace CheckFriendReq {
  export type AsObject = {
    frienduseridsList: Array<string>,
  }
}

export class CheckFriendInfo extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getResult(): number;
  setResult(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckFriendInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CheckFriendInfo): CheckFriendInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckFriendInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckFriendInfo;
  static deserializeBinaryFromReader(message: CheckFriendInfo, reader: jspb.BinaryReader): CheckFriendInfo;
}

export namespace CheckFriendInfo {
  export type AsObject = {
    userid: string,
    result: number,
  }
}

export class CheckFriendResp extends jspb.Message {
  clearResultList(): void;
  getResultList(): Array<CheckFriendInfo>;
  setResultList(value: Array<CheckFriendInfo>): void;
  addResult(value?: CheckFriendInfo, index?: number): CheckFriendInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckFriendResp.AsObject;
  static toObject(includeInstance: boolean, msg: CheckFriendResp): CheckFriendResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckFriendResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckFriendResp;
  static deserializeBinaryFromReader(message: CheckFriendResp, reader: jspb.BinaryReader): CheckFriendResp;
}

export namespace CheckFriendResp {
  export type AsObject = {
    resultList: Array<CheckFriendInfo.AsObject>,
  }
}

export class DeleteFriendReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFriendReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFriendReq): DeleteFriendReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFriendReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFriendReq;
  static deserializeBinaryFromReader(message: DeleteFriendReq, reader: jspb.BinaryReader): DeleteFriendReq;
}

export namespace DeleteFriendReq {
  export type AsObject = {
    userid: string,
  }
}

export class DeleteFriendResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFriendResp.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFriendResp): DeleteFriendResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFriendResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFriendResp;
  static deserializeBinaryFromReader(message: DeleteFriendResp, reader: jspb.BinaryReader): DeleteFriendResp;
}

export namespace DeleteFriendResp {
  export type AsObject = {
  }
}

export class GetFriendsReq extends jspb.Message {
  getFilterblack(): boolean;
  setFilterblack(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFriendsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetFriendsReq): GetFriendsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFriendsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFriendsReq;
  static deserializeBinaryFromReader(message: GetFriendsReq, reader: jspb.BinaryReader): GetFriendsReq;
}

export namespace GetFriendsReq {
  export type AsObject = {
    filterblack: boolean,
  }
}

export class GetFriendsResp extends jspb.Message {
  clearFriendsList(): void;
  getFriendsList(): Array<shared_pb.FriendInfo>;
  setFriendsList(value: Array<shared_pb.FriendInfo>): void;
  addFriends(value?: shared_pb.FriendInfo, index?: number): shared_pb.FriendInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFriendsResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetFriendsResp): GetFriendsResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFriendsResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFriendsResp;
  static deserializeBinaryFromReader(message: GetFriendsResp, reader: jspb.BinaryReader): GetFriendsResp;
}

export namespace GetFriendsResp {
  export type AsObject = {
    friendsList: Array<shared_pb.FriendInfo.AsObject>,
  }
}

export class GetFriendsPageReq extends jspb.Message {
  getFilterblack(): boolean;
  setFilterblack(value: boolean): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): common_pb.RequestPagination | undefined;
  setPagination(value?: common_pb.RequestPagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFriendsPageReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetFriendsPageReq): GetFriendsPageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFriendsPageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFriendsPageReq;
  static deserializeBinaryFromReader(message: GetFriendsPageReq, reader: jspb.BinaryReader): GetFriendsPageReq;
}

export namespace GetFriendsPageReq {
  export type AsObject = {
    filterblack: boolean,
    pagination?: common_pb.RequestPagination.AsObject,
  }
}

export class GetFriendsPageResp extends jspb.Message {
  clearFriendsList(): void;
  getFriendsList(): Array<shared_pb.FriendInfo>;
  setFriendsList(value: Array<shared_pb.FriendInfo>): void;
  addFriends(value?: shared_pb.FriendInfo, index?: number): shared_pb.FriendInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFriendsPageResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetFriendsPageResp): GetFriendsPageResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFriendsPageResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFriendsPageResp;
  static deserializeBinaryFromReader(message: GetFriendsPageResp, reader: jspb.BinaryReader): GetFriendsPageResp;
}

export namespace GetFriendsPageResp {
  export type AsObject = {
    friendsList: Array<shared_pb.FriendInfo.AsObject>,
  }
}

export class SearchFriendsReq extends jspb.Message {
  getKeyword(): string;
  setKeyword(value: string): void;

  getSearchuserid(): boolean;
  setSearchuserid(value: boolean): void;

  getSearchnickname(): boolean;
  setSearchnickname(value: boolean): void;

  getSearchremark(): boolean;
  setSearchremark(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchFriendsReq.AsObject;
  static toObject(includeInstance: boolean, msg: SearchFriendsReq): SearchFriendsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchFriendsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchFriendsReq;
  static deserializeBinaryFromReader(message: SearchFriendsReq, reader: jspb.BinaryReader): SearchFriendsReq;
}

export namespace SearchFriendsReq {
  export type AsObject = {
    keyword: string,
    searchuserid: boolean,
    searchnickname: boolean,
    searchremark: boolean,
  }
}

export class SearchFriendsInfo extends jspb.Message {
  hasFriend(): boolean;
  clearFriend(): void;
  getFriend(): shared_pb.FriendInfo | undefined;
  setFriend(value?: shared_pb.FriendInfo): void;

  getRelationship(): RelationshipMap[keyof RelationshipMap];
  setRelationship(value: RelationshipMap[keyof RelationshipMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchFriendsInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SearchFriendsInfo): SearchFriendsInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchFriendsInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchFriendsInfo;
  static deserializeBinaryFromReader(message: SearchFriendsInfo, reader: jspb.BinaryReader): SearchFriendsInfo;
}

export namespace SearchFriendsInfo {
  export type AsObject = {
    friend?: shared_pb.FriendInfo.AsObject,
    relationship: RelationshipMap[keyof RelationshipMap],
  }
}

export class SearchFriendsResp extends jspb.Message {
  clearFriendsList(): void;
  getFriendsList(): Array<SearchFriendsInfo>;
  setFriendsList(value: Array<SearchFriendsInfo>): void;
  addFriends(value?: SearchFriendsInfo, index?: number): SearchFriendsInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchFriendsResp.AsObject;
  static toObject(includeInstance: boolean, msg: SearchFriendsResp): SearchFriendsResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchFriendsResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchFriendsResp;
  static deserializeBinaryFromReader(message: SearchFriendsResp, reader: jspb.BinaryReader): SearchFriendsResp;
}

export namespace SearchFriendsResp {
  export type AsObject = {
    friendsList: Array<SearchFriendsInfo.AsObject>,
  }
}

export class AddBlackReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getEx(): string;
  setEx(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBlackReq.AsObject;
  static toObject(includeInstance: boolean, msg: AddBlackReq): AddBlackReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddBlackReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBlackReq;
  static deserializeBinaryFromReader(message: AddBlackReq, reader: jspb.BinaryReader): AddBlackReq;
}

export namespace AddBlackReq {
  export type AsObject = {
    userid: string,
    ex: string,
  }
}

export class AddBlackResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBlackResp.AsObject;
  static toObject(includeInstance: boolean, msg: AddBlackResp): AddBlackResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddBlackResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBlackResp;
  static deserializeBinaryFromReader(message: AddBlackResp, reader: jspb.BinaryReader): AddBlackResp;
}

export namespace AddBlackResp {
  export type AsObject = {
  }
}

export class DeleteBlackReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBlackReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBlackReq): DeleteBlackReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBlackReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBlackReq;
  static deserializeBinaryFromReader(message: DeleteBlackReq, reader: jspb.BinaryReader): DeleteBlackReq;
}

export namespace DeleteBlackReq {
  export type AsObject = {
    userid: string,
  }
}

export class DeleteBlackResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBlackResp.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBlackResp): DeleteBlackResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBlackResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBlackResp;
  static deserializeBinaryFromReader(message: DeleteBlackResp, reader: jspb.BinaryReader): DeleteBlackResp;
}

export namespace DeleteBlackResp {
  export type AsObject = {
  }
}

export class GetBlacksReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlacksReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlacksReq): GetBlacksReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlacksReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlacksReq;
  static deserializeBinaryFromReader(message: GetBlacksReq, reader: jspb.BinaryReader): GetBlacksReq;
}

export namespace GetBlacksReq {
  export type AsObject = {
  }
}

export class GetBlacksResp extends jspb.Message {
  clearBlacksList(): void;
  getBlacksList(): Array<shared_pb.BlackInfo>;
  setBlacksList(value: Array<shared_pb.BlackInfo>): void;
  addBlacks(value?: shared_pb.BlackInfo, index?: number): shared_pb.BlackInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlacksResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlacksResp): GetBlacksResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlacksResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlacksResp;
  static deserializeBinaryFromReader(message: GetBlacksResp, reader: jspb.BinaryReader): GetBlacksResp;
}

export namespace GetBlacksResp {
  export type AsObject = {
    blacksList: Array<shared_pb.BlackInfo.AsObject>,
  }
}

export class UpdatesFriendsReq extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  hasPinned(): boolean;
  clearPinned(): void;
  getPinned(): boolean;
  setPinned(value: boolean): void;

  hasRemark(): boolean;
  clearRemark(): void;
  getRemark(): string;
  setRemark(value: string): void;

  hasEx(): boolean;
  clearEx(): void;
  getEx(): string;
  setEx(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatesFriendsReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatesFriendsReq): UpdatesFriendsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatesFriendsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatesFriendsReq;
  static deserializeBinaryFromReader(message: UpdatesFriendsReq, reader: jspb.BinaryReader): UpdatesFriendsReq;
}

export namespace UpdatesFriendsReq {
  export type AsObject = {
    userid: string,
    pinned: boolean,
    remark: string,
    ex: string,
  }
}

export class UpdatesFriendsResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatesFriendsResp.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatesFriendsResp): UpdatesFriendsResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatesFriendsResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatesFriendsResp;
  static deserializeBinaryFromReader(message: UpdatesFriendsResp, reader: jspb.BinaryReader): UpdatesFriendsResp;
}

export namespace UpdatesFriendsResp {
  export type AsObject = {
  }
}

export interface RelationshipMap {
  BLACK: 0;
  FRIEND: 1;
}

export const Relationship: RelationshipMap;
