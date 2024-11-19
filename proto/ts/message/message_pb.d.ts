// package: openim.sdk.message
// file: message.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

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

export class ImageInfo extends jspb.Message {
  getWidth(): number;
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getType(): string;
  setType(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ImageInfo): ImageInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageInfo;
  static deserializeBinaryFromReader(message: ImageInfo, reader: jspb.BinaryReader): ImageInfo;
}

export namespace ImageInfo {
  export type AsObject = {
    width: number,
    height: number,
    type: string,
    size: number,
  }
}

export class PictureBaseInfo extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getType(): string;
  setType(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getWidth(): number;
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PictureBaseInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PictureBaseInfo): PictureBaseInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PictureBaseInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PictureBaseInfo;
  static deserializeBinaryFromReader(message: PictureBaseInfo, reader: jspb.BinaryReader): PictureBaseInfo;
}

export namespace PictureBaseInfo {
  export type AsObject = {
    uuid: string,
    type: string,
    size: number,
    width: number,
    height: number,
    url: string,
  }
}

export class SoundBaseInfo extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getSoundpath(): string;
  setSoundpath(value: string): void;

  getSourceurl(): string;
  setSourceurl(value: string): void;

  getDatasize(): number;
  setDatasize(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  getSoundtype(): string;
  setSoundtype(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SoundBaseInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SoundBaseInfo): SoundBaseInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SoundBaseInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SoundBaseInfo;
  static deserializeBinaryFromReader(message: SoundBaseInfo, reader: jspb.BinaryReader): SoundBaseInfo;
}

export namespace SoundBaseInfo {
  export type AsObject = {
    uuid: string,
    soundpath: string,
    sourceurl: string,
    datasize: number,
    duration: number,
    soundtype: string,
  }
}

export class VideoBaseInfo extends jspb.Message {
  getVideopath(): string;
  setVideopath(value: string): void;

  getVideouuid(): string;
  setVideouuid(value: string): void;

  getVideourl(): string;
  setVideourl(value: string): void;

  getVideotype(): string;
  setVideotype(value: string): void;

  getVideosize(): number;
  setVideosize(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  getSnapshotpath(): string;
  setSnapshotpath(value: string): void;

  getSnapshotuuid(): string;
  setSnapshotuuid(value: string): void;

  getSnapshotsize(): number;
  setSnapshotsize(value: number): void;

  getSnapshoturl(): string;
  setSnapshoturl(value: string): void;

  getSnapshotwidth(): number;
  setSnapshotwidth(value: number): void;

  getSnapshotheight(): number;
  setSnapshotheight(value: number): void;

  getSnapshottype(): string;
  setSnapshottype(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoBaseInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VideoBaseInfo): VideoBaseInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoBaseInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoBaseInfo;
  static deserializeBinaryFromReader(message: VideoBaseInfo, reader: jspb.BinaryReader): VideoBaseInfo;
}

export namespace VideoBaseInfo {
  export type AsObject = {
    videopath: string,
    videouuid: string,
    videourl: string,
    videotype: string,
    videosize: number,
    duration: number,
    snapshotpath: string,
    snapshotuuid: string,
    snapshotsize: number,
    snapshoturl: string,
    snapshotwidth: number,
    snapshotheight: number,
    snapshottype: string,
  }
}

export class FileBaseInfo extends jspb.Message {
  getFilepath(): string;
  setFilepath(value: string): void;

  getUuid(): string;
  setUuid(value: string): void;

  getSourceurl(): string;
  setSourceurl(value: string): void;

  getFilename(): string;
  setFilename(value: string): void;

  getFilesize(): number;
  setFilesize(value: number): void;

  getFiletype(): string;
  setFiletype(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileBaseInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FileBaseInfo): FileBaseInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileBaseInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileBaseInfo;
  static deserializeBinaryFromReader(message: FileBaseInfo, reader: jspb.BinaryReader): FileBaseInfo;
}

export namespace FileBaseInfo {
  export type AsObject = {
    filepath: string,
    uuid: string,
    sourceurl: string,
    filename: string,
    filesize: number,
    filetype: string,
  }
}

export class TextElem extends jspb.Message {
  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextElem.AsObject;
  static toObject(includeInstance: boolean, msg: TextElem): TextElem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextElem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextElem;
  static deserializeBinaryFromReader(message: TextElem, reader: jspb.BinaryReader): TextElem;
}

export namespace TextElem {
  export type AsObject = {
    content: string,
  }
}

export class CardElem extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getNickname(): string;
  setNickname(value: string): void;

  getFaceurl(): string;
  setFaceurl(value: string): void;

  getEx(): string;
  setEx(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CardElem.AsObject;
  static toObject(includeInstance: boolean, msg: CardElem): CardElem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CardElem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CardElem;
  static deserializeBinaryFromReader(message: CardElem, reader: jspb.BinaryReader): CardElem;
}

export namespace CardElem {
  export type AsObject = {
    userid: string,
    nickname: string,
    faceurl: string,
    ex: string,
  }
}

export class PictureElem extends jspb.Message {
  getSourcepath(): string;
  setSourcepath(value: string): void;

  hasSourcepicture(): boolean;
  clearSourcepicture(): void;
  getSourcepicture(): PictureBaseInfo | undefined;
  setSourcepicture(value?: PictureBaseInfo): void;

  hasBigpicture(): boolean;
  clearBigpicture(): void;
  getBigpicture(): PictureBaseInfo | undefined;
  setBigpicture(value?: PictureBaseInfo): void;

  hasSnapshotpicture(): boolean;
  clearSnapshotpicture(): void;
  getSnapshotpicture(): PictureBaseInfo | undefined;
  setSnapshotpicture(value?: PictureBaseInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PictureElem.AsObject;
  static toObject(includeInstance: boolean, msg: PictureElem): PictureElem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PictureElem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PictureElem;
  static deserializeBinaryFromReader(message: PictureElem, reader: jspb.BinaryReader): PictureElem;
}

export namespace PictureElem {
  export type AsObject = {
    sourcepath: string,
    sourcepicture?: PictureBaseInfo.AsObject,
    bigpicture?: PictureBaseInfo.AsObject,
    snapshotpicture?: PictureBaseInfo.AsObject,
  }
}

export class SoundElem extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getSoundpath(): string;
  setSoundpath(value: string): void;

  getSourceurl(): string;
  setSourceurl(value: string): void;

  getDatasize(): number;
  setDatasize(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  getSoundtype(): string;
  setSoundtype(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SoundElem.AsObject;
  static toObject(includeInstance: boolean, msg: SoundElem): SoundElem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SoundElem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SoundElem;
  static deserializeBinaryFromReader(message: SoundElem, reader: jspb.BinaryReader): SoundElem;
}

export namespace SoundElem {
  export type AsObject = {
    uuid: string,
    soundpath: string,
    sourceurl: string,
    datasize: number,
    duration: number,
    soundtype: string,
  }
}

export class VideoElem extends jspb.Message {
  getVideopath(): string;
  setVideopath(value: string): void;

  getVideouuid(): string;
  setVideouuid(value: string): void;

  getVideourl(): string;
  setVideourl(value: string): void;

  getVideotype(): string;
  setVideotype(value: string): void;

  getVideosize(): number;
  setVideosize(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  getSnapshotpath(): string;
  setSnapshotpath(value: string): void;

  getSnapshotuuid(): string;
  setSnapshotuuid(value: string): void;

  getSnapshotsize(): number;
  setSnapshotsize(value: number): void;

  getSnapshoturl(): string;
  setSnapshoturl(value: string): void;

  getSnapshotwidth(): number;
  setSnapshotwidth(value: number): void;

  getSnapshotheight(): number;
  setSnapshotheight(value: number): void;

  getSnapshottype(): string;
  setSnapshottype(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoElem.AsObject;
  static toObject(includeInstance: boolean, msg: VideoElem): VideoElem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoElem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoElem;
  static deserializeBinaryFromReader(message: VideoElem, reader: jspb.BinaryReader): VideoElem;
}

export namespace VideoElem {
  export type AsObject = {
    videopath: string,
    videouuid: string,
    videourl: string,
    videotype: string,
    videosize: number,
    duration: number,
    snapshotpath: string,
    snapshotuuid: string,
    snapshotsize: number,
    snapshoturl: string,
    snapshotwidth: number,
    snapshotheight: number,
    snapshottype: string,
  }
}

export class FileElem extends jspb.Message {
  getFilepath(): string;
  setFilepath(value: string): void;

  getUuid(): string;
  setUuid(value: string): void;

  getSourceurl(): string;
  setSourceurl(value: string): void;

  getFilename(): string;
  setFilename(value: string): void;

  getFilesize(): number;
  setFilesize(value: number): void;

  getFiletype(): string;
  setFiletype(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileElem.AsObject;
  static toObject(includeInstance: boolean, msg: FileElem): FileElem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileElem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileElem;
  static deserializeBinaryFromReader(message: FileElem, reader: jspb.BinaryReader): FileElem;
}

export namespace FileElem {
  export type AsObject = {
    filepath: string,
    uuid: string,
    sourceurl: string,
    filename: string,
    filesize: number,
    filetype: string,
  }
}

export class MergeElem extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  clearAbstractlistList(): void;
  getAbstractlistList(): Array<string>;
  setAbstractlistList(value: Array<string>): void;
  addAbstractlist(value: string, index?: number): string;

  clearMultimessageList(): void;
  getMultimessageList(): Array<IMMessage>;
  setMultimessageList(value: Array<IMMessage>): void;
  addMultimessage(value?: IMMessage, index?: number): IMMessage;

  clearMessageentitylistList(): void;
  getMessageentitylistList(): Array<MessageEntity>;
  setMessageentitylistList(value: Array<MessageEntity>): void;
  addMessageentitylist(value?: MessageEntity, index?: number): MessageEntity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MergeElem.AsObject;
  static toObject(includeInstance: boolean, msg: MergeElem): MergeElem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MergeElem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MergeElem;
  static deserializeBinaryFromReader(message: MergeElem, reader: jspb.BinaryReader): MergeElem;
}

export namespace MergeElem {
  export type AsObject = {
    title: string,
    abstractlistList: Array<string>,
    multimessageList: Array<IMMessage.AsObject>,
    messageentitylistList: Array<MessageEntity.AsObject>,
  }
}

export class AtTextElem extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  clearAtuserlistList(): void;
  getAtuserlistList(): Array<string>;
  setAtuserlistList(value: Array<string>): void;
  addAtuserlist(value: string, index?: number): string;

  clearAtusersinfoList(): void;
  getAtusersinfoList(): Array<AtInfo>;
  setAtusersinfoList(value: Array<AtInfo>): void;
  addAtusersinfo(value?: AtInfo, index?: number): AtInfo;

  hasQuotemessage(): boolean;
  clearQuotemessage(): void;
  getQuotemessage(): IMMessage | undefined;
  setQuotemessage(value?: IMMessage): void;

  getIsatself(): boolean;
  setIsatself(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AtTextElem.AsObject;
  static toObject(includeInstance: boolean, msg: AtTextElem): AtTextElem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AtTextElem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AtTextElem;
  static deserializeBinaryFromReader(message: AtTextElem, reader: jspb.BinaryReader): AtTextElem;
}

export namespace AtTextElem {
  export type AsObject = {
    text: string,
    atuserlistList: Array<string>,
    atusersinfoList: Array<AtInfo.AsObject>,
    quotemessage?: IMMessage.AsObject,
    isatself: boolean,
  }
}

export class FaceElem extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceElem.AsObject;
  static toObject(includeInstance: boolean, msg: FaceElem): FaceElem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FaceElem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceElem;
  static deserializeBinaryFromReader(message: FaceElem, reader: jspb.BinaryReader): FaceElem;
}

export namespace FaceElem {
  export type AsObject = {
    index: number,
    data: string,
  }
}

export class LocationElem extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): void;

  getLongitude(): number;
  setLongitude(value: number): void;

  getLatitude(): number;
  setLatitude(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationElem.AsObject;
  static toObject(includeInstance: boolean, msg: LocationElem): LocationElem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationElem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationElem;
  static deserializeBinaryFromReader(message: LocationElem, reader: jspb.BinaryReader): LocationElem;
}

export namespace LocationElem {
  export type AsObject = {
    description: string,
    longitude: number,
    latitude: number,
  }
}

export class CustomElem extends jspb.Message {
  getData(): string;
  setData(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getExtension$(): string;
  setExtension$(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomElem.AsObject;
  static toObject(includeInstance: boolean, msg: CustomElem): CustomElem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomElem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomElem;
  static deserializeBinaryFromReader(message: CustomElem, reader: jspb.BinaryReader): CustomElem;
}

export namespace CustomElem {
  export type AsObject = {
    data: string,
    description: string,
    extension: string,
  }
}

export class QuoteElem extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  hasQuotemessage(): boolean;
  clearQuotemessage(): void;
  getQuotemessage(): IMMessage | undefined;
  setQuotemessage(value?: IMMessage): void;

  clearMessageentitylistList(): void;
  getMessageentitylistList(): Array<MessageEntity>;
  setMessageentitylistList(value: Array<MessageEntity>): void;
  addMessageentitylist(value?: MessageEntity, index?: number): MessageEntity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuoteElem.AsObject;
  static toObject(includeInstance: boolean, msg: QuoteElem): QuoteElem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuoteElem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuoteElem;
  static deserializeBinaryFromReader(message: QuoteElem, reader: jspb.BinaryReader): QuoteElem;
}

export namespace QuoteElem {
  export type AsObject = {
    text: string,
    quotemessage?: IMMessage.AsObject,
    messageentitylistList: Array<MessageEntity.AsObject>,
  }
}

export class NotificationElem extends jspb.Message {
  getDetail(): string;
  setDetail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationElem.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationElem): NotificationElem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotificationElem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationElem;
  static deserializeBinaryFromReader(message: NotificationElem, reader: jspb.BinaryReader): NotificationElem;
}

export namespace NotificationElem {
  export type AsObject = {
    detail: string,
  }
}

export class AdvancedTextElem extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  clearMessageentitylistList(): void;
  getMessageentitylistList(): Array<MessageEntity>;
  setMessageentitylistList(value: Array<MessageEntity>): void;
  addMessageentitylist(value?: MessageEntity, index?: number): MessageEntity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdvancedTextElem.AsObject;
  static toObject(includeInstance: boolean, msg: AdvancedTextElem): AdvancedTextElem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdvancedTextElem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdvancedTextElem;
  static deserializeBinaryFromReader(message: AdvancedTextElem, reader: jspb.BinaryReader): AdvancedTextElem;
}

export namespace AdvancedTextElem {
  export type AsObject = {
    text: string,
    messageentitylistList: Array<MessageEntity.AsObject>,
  }
}

export class TypingElem extends jspb.Message {
  getMsgtips(): string;
  setMsgtips(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypingElem.AsObject;
  static toObject(includeInstance: boolean, msg: TypingElem): TypingElem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TypingElem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypingElem;
  static deserializeBinaryFromReader(message: TypingElem, reader: jspb.BinaryReader): TypingElem;
}

export namespace TypingElem {
  export type AsObject = {
    msgtips: string,
  }
}

export class StreamElem extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  clearPacketsList(): void;
  getPacketsList(): Array<string>;
  setPacketsList(value: Array<string>): void;
  addPackets(value: string, index?: number): string;

  getEnd(): boolean;
  setEnd(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamElem.AsObject;
  static toObject(includeInstance: boolean, msg: StreamElem): StreamElem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamElem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamElem;
  static deserializeBinaryFromReader(message: StreamElem, reader: jspb.BinaryReader): StreamElem;
}

export namespace StreamElem {
  export type AsObject = {
    type: string,
    content: string,
    packetsList: Array<string>,
    end: boolean,
  }
}

export class AtInfo extends jspb.Message {
  getAtuserid(): string;
  setAtuserid(value: string): void;

  getGroupnickname(): string;
  setGroupnickname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AtInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AtInfo): AtInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AtInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AtInfo;
  static deserializeBinaryFromReader(message: AtInfo, reader: jspb.BinaryReader): AtInfo;
}

export namespace AtInfo {
  export type AsObject = {
    atuserid: string,
    groupnickname: string,
  }
}

export class AttachedInfoElem extends jspb.Message {
  hasGrouphasreadinfo(): boolean;
  clearGrouphasreadinfo(): void;
  getGrouphasreadinfo(): GroupHasReadInfo | undefined;
  setGrouphasreadinfo(value?: GroupHasReadInfo): void;

  getIsprivatechat(): boolean;
  setIsprivatechat(value: boolean): void;

  getBurnduration(): number;
  setBurnduration(value: number): void;

  getHasreadtime(): number;
  setHasreadtime(value: number): void;

  hasProgress(): boolean;
  clearProgress(): void;
  getProgress(): UploadProgress | undefined;
  setProgress(value?: UploadProgress): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachedInfoElem.AsObject;
  static toObject(includeInstance: boolean, msg: AttachedInfoElem): AttachedInfoElem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AttachedInfoElem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachedInfoElem;
  static deserializeBinaryFromReader(message: AttachedInfoElem, reader: jspb.BinaryReader): AttachedInfoElem;
}

export namespace AttachedInfoElem {
  export type AsObject = {
    grouphasreadinfo?: GroupHasReadInfo.AsObject,
    isprivatechat: boolean,
    burnduration: number,
    hasreadtime: number,
    progress?: UploadProgress.AsObject,
  }
}

export class UploadProgress extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  getSave(): number;
  setSave(value: number): void;

  getCurrent(): number;
  setCurrent(value: number): void;

  getUploadid(): string;
  setUploadid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadProgress.AsObject;
  static toObject(includeInstance: boolean, msg: UploadProgress): UploadProgress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadProgress;
  static deserializeBinaryFromReader(message: UploadProgress, reader: jspb.BinaryReader): UploadProgress;
}

export namespace UploadProgress {
  export type AsObject = {
    total: number,
    save: number,
    current: number,
    uploadid: string,
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

export class MessageEntity extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getOffset(): number;
  setOffset(value: number): void;

  getLength(): number;
  setLength(value: number): void;

  getUrl(): string;
  setUrl(value: string): void;

  getEx(): string;
  setEx(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageEntity.AsObject;
  static toObject(includeInstance: boolean, msg: MessageEntity): MessageEntity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageEntity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageEntity;
  static deserializeBinaryFromReader(message: MessageEntity, reader: jspb.BinaryReader): MessageEntity;
}

export namespace MessageEntity {
  export type AsObject = {
    type: string,
    offset: number,
    length: number,
    url: string,
    ex: string,
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

export class IMMessage extends jspb.Message {
  getClientmsgid(): string;
  setClientmsgid(value: string): void;

  getServermsgid(): string;
  setServermsgid(value: string): void;

  getCreatetime(): number;
  setCreatetime(value: number): void;

  getSendtime(): number;
  setSendtime(value: number): void;

  getSessiontype(): common_pb.SessionTypeMap[keyof common_pb.SessionTypeMap];
  setSessiontype(value: common_pb.SessionTypeMap[keyof common_pb.SessionTypeMap]): void;

  getSendid(): string;
  setSendid(value: string): void;

  getRecvid(): string;
  setRecvid(value: string): void;

  getMsgfrom(): common_pb.MsgFromMap[keyof common_pb.MsgFromMap];
  setMsgfrom(value: common_pb.MsgFromMap[keyof common_pb.MsgFromMap]): void;

  getContenttype(): common_pb.ContentTypeMap[keyof common_pb.ContentTypeMap];
  setContenttype(value: common_pb.ContentTypeMap[keyof common_pb.ContentTypeMap]): void;

  getSenderplatformid(): common_pb.PlatformMap[keyof common_pb.PlatformMap];
  setSenderplatformid(value: common_pb.PlatformMap[keyof common_pb.PlatformMap]): void;

  getSendernickname(): string;
  setSendernickname(value: string): void;

  getSenderfaceurl(): string;
  setSenderfaceurl(value: string): void;

  getGroupid(): string;
  setGroupid(value: string): void;

  getSeq(): number;
  setSeq(value: number): void;

  getIsread(): boolean;
  setIsread(value: boolean): void;

  getStatus(): common_pb.MsgStatusMap[keyof common_pb.MsgStatusMap];
  setStatus(value: common_pb.MsgStatusMap[keyof common_pb.MsgStatusMap]): void;

  hasOfflinepush(): boolean;
  clearOfflinepush(): void;
  getOfflinepush(): common_pb.OfflinePushInfo | undefined;
  setOfflinepush(value?: common_pb.OfflinePushInfo): void;

  getEx(): string;
  setEx(value: string): void;

  getLocalex(): string;
  setLocalex(value: string): void;

  hasTextelem(): boolean;
  clearTextelem(): void;
  getTextelem(): TextElem | undefined;
  setTextelem(value?: TextElem): void;

  hasCardelem(): boolean;
  clearCardelem(): void;
  getCardelem(): CardElem | undefined;
  setCardelem(value?: CardElem): void;

  hasPictureelem(): boolean;
  clearPictureelem(): void;
  getPictureelem(): PictureElem | undefined;
  setPictureelem(value?: PictureElem): void;

  hasSoundelem(): boolean;
  clearSoundelem(): void;
  getSoundelem(): SoundElem | undefined;
  setSoundelem(value?: SoundElem): void;

  hasVideoelem(): boolean;
  clearVideoelem(): void;
  getVideoelem(): VideoElem | undefined;
  setVideoelem(value?: VideoElem): void;

  hasFileelem(): boolean;
  clearFileelem(): void;
  getFileelem(): FileElem | undefined;
  setFileelem(value?: FileElem): void;

  hasMergeelem(): boolean;
  clearMergeelem(): void;
  getMergeelem(): MergeElem | undefined;
  setMergeelem(value?: MergeElem): void;

  hasAttextelem(): boolean;
  clearAttextelem(): void;
  getAttextelem(): AtTextElem | undefined;
  setAttextelem(value?: AtTextElem): void;

  hasFaceelem(): boolean;
  clearFaceelem(): void;
  getFaceelem(): FaceElem | undefined;
  setFaceelem(value?: FaceElem): void;

  hasLocationelem(): boolean;
  clearLocationelem(): void;
  getLocationelem(): LocationElem | undefined;
  setLocationelem(value?: LocationElem): void;

  hasCustomelem(): boolean;
  clearCustomelem(): void;
  getCustomelem(): CustomElem | undefined;
  setCustomelem(value?: CustomElem): void;

  hasQuoteelem(): boolean;
  clearQuoteelem(): void;
  getQuoteelem(): QuoteElem | undefined;
  setQuoteelem(value?: QuoteElem): void;

  hasNotificationelem(): boolean;
  clearNotificationelem(): void;
  getNotificationelem(): NotificationElem | undefined;
  setNotificationelem(value?: NotificationElem): void;

  hasAdvancedtextelem(): boolean;
  clearAdvancedtextelem(): void;
  getAdvancedtextelem(): AdvancedTextElem | undefined;
  setAdvancedtextelem(value?: AdvancedTextElem): void;

  hasTypingelem(): boolean;
  clearTypingelem(): void;
  getTypingelem(): TypingElem | undefined;
  setTypingelem(value?: TypingElem): void;

  hasStreamelem(): boolean;
  clearStreamelem(): void;
  getStreamelem(): StreamElem | undefined;
  setStreamelem(value?: StreamElem): void;

  hasAttachedinfoelem(): boolean;
  clearAttachedinfoelem(): void;
  getAttachedinfoelem(): AttachedInfoElem | undefined;
  setAttachedinfoelem(value?: AttachedInfoElem): void;

  getContentCase(): IMMessage.ContentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IMMessage.AsObject;
  static toObject(includeInstance: boolean, msg: IMMessage): IMMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IMMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IMMessage;
  static deserializeBinaryFromReader(message: IMMessage, reader: jspb.BinaryReader): IMMessage;
}

export namespace IMMessage {
  export type AsObject = {
    clientmsgid: string,
    servermsgid: string,
    createtime: number,
    sendtime: number,
    sessiontype: common_pb.SessionTypeMap[keyof common_pb.SessionTypeMap],
    sendid: string,
    recvid: string,
    msgfrom: common_pb.MsgFromMap[keyof common_pb.MsgFromMap],
    contenttype: common_pb.ContentTypeMap[keyof common_pb.ContentTypeMap],
    senderplatformid: common_pb.PlatformMap[keyof common_pb.PlatformMap],
    sendernickname: string,
    senderfaceurl: string,
    groupid: string,
    seq: number,
    isread: boolean,
    status: common_pb.MsgStatusMap[keyof common_pb.MsgStatusMap],
    offlinepush?: common_pb.OfflinePushInfo.AsObject,
    ex: string,
    localex: string,
    textelem?: TextElem.AsObject,
    cardelem?: CardElem.AsObject,
    pictureelem?: PictureElem.AsObject,
    soundelem?: SoundElem.AsObject,
    videoelem?: VideoElem.AsObject,
    fileelem?: FileElem.AsObject,
    mergeelem?: MergeElem.AsObject,
    attextelem?: AtTextElem.AsObject,
    faceelem?: FaceElem.AsObject,
    locationelem?: LocationElem.AsObject,
    customelem?: CustomElem.AsObject,
    quoteelem?: QuoteElem.AsObject,
    notificationelem?: NotificationElem.AsObject,
    advancedtextelem?: AdvancedTextElem.AsObject,
    typingelem?: TypingElem.AsObject,
    streamelem?: StreamElem.AsObject,
    attachedinfoelem?: AttachedInfoElem.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    TEXTELEM = 23,
    CARDELEM = 24,
    PICTUREELEM = 25,
    SOUNDELEM = 26,
    VIDEOELEM = 27,
    FILEELEM = 28,
    MERGEELEM = 29,
    ATTEXTELEM = 30,
    FACEELEM = 31,
    LOCATIONELEM = 32,
    CUSTOMELEM = 33,
    QUOTEELEM = 34,
    NOTIFICATIONELEM = 35,
    ADVANCEDTEXTELEM = 36,
    TYPINGELEM = 37,
    STREAMELEM = 38,
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
  getMessagelistList(): Array<IMMessage>;
  setMessagelistList(value: Array<IMMessage>): void;
  addMessagelist(value?: IMMessage, index?: number): IMMessage;

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
    messagelistList: Array<IMMessage.AsObject>,
    isend: boolean,
    errcode: number,
    errmsg: string,
  }
}

export class SendMessageReq extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): IMMessage | undefined;
  setMessage(value?: IMMessage): void;

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
    message?: IMMessage.AsObject,
    recvid: string,
    groupid: string,
    offlinepushinfo?: common_pb.OfflinePushInfo.AsObject,
    isonlineonly: boolean,
  }
}

export class SendMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): IMMessage | undefined;
  setMessage(value?: IMMessage): void;

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
    message?: IMMessage.AsObject,
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
  getMsg(): IMMessage | undefined;
  setMsg(value?: IMMessage): void;

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
    msg?: IMMessage.AsObject,
    recvid: string,
    sendid: string,
  }
}

export class InsertSingleMessageToLocalStorageResp extends jspb.Message {
  hasMsg(): boolean;
  clearMsg(): void;
  getMsg(): IMMessage | undefined;
  setMsg(value?: IMMessage): void;

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
    msg?: IMMessage.AsObject,
  }
}

export class InsertGroupMessageToLocalStorageReq extends jspb.Message {
  hasMsg(): boolean;
  clearMsg(): void;
  getMsg(): IMMessage | undefined;
  setMsg(value?: IMMessage): void;

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
    msg?: IMMessage.AsObject,
    groupid: string,
    sendid: string,
  }
}

export class InsertGroupMessageToLocalStorageResp extends jspb.Message {
  hasMsg(): boolean;
  clearMsg(): void;
  getMsg(): IMMessage | undefined;
  setMsg(value?: IMMessage): void;

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
    msg?: IMMessage.AsObject,
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
  getMessage(): IMMessage | undefined;
  setMessage(value?: IMMessage): void;

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
    message?: IMMessage.AsObject,
  }
}

export class CreateAdvancedTextMessageReq extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  clearMessageentitiesList(): void;
  getMessageentitiesList(): Array<MessageEntity>;
  setMessageentitiesList(value: Array<MessageEntity>): void;
  addMessageentities(value?: MessageEntity, index?: number): MessageEntity;

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
    messageentitiesList: Array<MessageEntity.AsObject>,
  }
}

export class CreateAdvancedTextMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): IMMessage | undefined;
  setMessage(value?: IMMessage): void;

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
    message?: IMMessage.AsObject,
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
  getUsersinfoList(): Array<AtInfo>;
  setUsersinfoList(value: Array<AtInfo>): void;
  addUsersinfo(value?: AtInfo, index?: number): AtInfo;

  hasQuotemessage(): boolean;
  clearQuotemessage(): void;
  getQuotemessage(): IMMessage | undefined;
  setQuotemessage(value?: IMMessage): void;

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
    usersinfoList: Array<AtInfo.AsObject>,
    quotemessage?: IMMessage.AsObject,
  }
}

export class CreateTextAtMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): IMMessage | undefined;
  setMessage(value?: IMMessage): void;

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
    message?: IMMessage.AsObject,
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
  getMessage(): IMMessage | undefined;
  setMessage(value?: IMMessage): void;

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
    message?: IMMessage.AsObject,
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
  getMessage(): IMMessage | undefined;
  setMessage(value?: IMMessage): void;

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
    message?: IMMessage.AsObject,
  }
}

export class CreateQuoteMessageReq extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  hasQuotemessage(): boolean;
  clearQuotemessage(): void;
  getQuotemessage(): IMMessage | undefined;
  setQuotemessage(value?: IMMessage): void;

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
    quotemessage?: IMMessage.AsObject,
  }
}

export class CreateQuoteMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): IMMessage | undefined;
  setMessage(value?: IMMessage): void;

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
    message?: IMMessage.AsObject,
  }
}

export class CreateAdvancedQuoteMessageReq extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  hasQuotemessage(): boolean;
  clearQuotemessage(): void;
  getQuotemessage(): IMMessage | undefined;
  setQuotemessage(value?: IMMessage): void;

  clearMessageentitiesList(): void;
  getMessageentitiesList(): Array<MessageEntity>;
  setMessageentitiesList(value: Array<MessageEntity>): void;
  addMessageentities(value?: MessageEntity, index?: number): MessageEntity;

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
    quotemessage?: IMMessage.AsObject,
    messageentitiesList: Array<MessageEntity.AsObject>,
  }
}

export class CreateAdvancedQuoteMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): IMMessage | undefined;
  setMessage(value?: IMMessage): void;

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
    message?: IMMessage.AsObject,
  }
}

export class CreateCardMessageReq extends jspb.Message {
  hasCard(): boolean;
  clearCard(): void;
  getCard(): CardElem | undefined;
  setCard(value?: CardElem): void;

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
    card?: CardElem.AsObject,
  }
}

export class CreateCardMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): IMMessage | undefined;
  setMessage(value?: IMMessage): void;

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
    message?: IMMessage.AsObject,
  }
}

export class CreateImageMessageReq extends jspb.Message {
  getImagesourcepath(): string;
  setImagesourcepath(value: string): void;

  hasSourcepicture(): boolean;
  clearSourcepicture(): void;
  getSourcepicture(): PictureBaseInfo | undefined;
  setSourcepicture(value?: PictureBaseInfo): void;

  hasBigpicture(): boolean;
  clearBigpicture(): void;
  getBigpicture(): PictureBaseInfo | undefined;
  setBigpicture(value?: PictureBaseInfo): void;

  hasSnapshotpicture(): boolean;
  clearSnapshotpicture(): void;
  getSnapshotpicture(): PictureBaseInfo | undefined;
  setSnapshotpicture(value?: PictureBaseInfo): void;

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
    sourcepicture?: PictureBaseInfo.AsObject,
    bigpicture?: PictureBaseInfo.AsObject,
    snapshotpicture?: PictureBaseInfo.AsObject,
  }
}

export class CreateImageMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): IMMessage | undefined;
  setMessage(value?: IMMessage): void;

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
    message?: IMMessage.AsObject,
  }
}

export class CreateSoundMessageReq extends jspb.Message {
  getSoundpath(): string;
  setSoundpath(value: string): void;

  getDuration(): number;
  setDuration(value: number): void;

  hasSoundelem(): boolean;
  clearSoundelem(): void;
  getSoundelem(): SoundBaseInfo | undefined;
  setSoundelem(value?: SoundBaseInfo): void;

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
    soundelem?: SoundBaseInfo.AsObject,
  }
}

export class CreateSoundMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): IMMessage | undefined;
  setMessage(value?: IMMessage): void;

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
    message?: IMMessage.AsObject,
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
  getVideoelem(): VideoBaseInfo | undefined;
  setVideoelem(value?: VideoBaseInfo): void;

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
    videoelem?: VideoBaseInfo.AsObject,
  }
}

export class CreateVideoMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): IMMessage | undefined;
  setMessage(value?: IMMessage): void;

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
    message?: IMMessage.AsObject,
  }
}

export class CreateFileMessageReq extends jspb.Message {
  getFilesourcepath(): string;
  setFilesourcepath(value: string): void;

  getFilename(): string;
  setFilename(value: string): void;

  hasFileelem(): boolean;
  clearFileelem(): void;
  getFileelem(): FileBaseInfo | undefined;
  setFileelem(value?: FileBaseInfo): void;

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
    fileelem?: FileBaseInfo.AsObject,
  }
}

export class CreateFileMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): IMMessage | undefined;
  setMessage(value?: IMMessage): void;

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
    message?: IMMessage.AsObject,
  }
}

export class CreateMergerMessageReq extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<IMMessage>;
  setMessagesList(value: Array<IMMessage>): void;
  addMessages(value?: IMMessage, index?: number): IMMessage;

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
    messagesList: Array<IMMessage.AsObject>,
    title: string,
    summariesList: Array<string>,
  }
}

export class CreateMergerMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): IMMessage | undefined;
  setMessage(value?: IMMessage): void;

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
    message?: IMMessage.AsObject,
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
  getMessage(): IMMessage | undefined;
  setMessage(value?: IMMessage): void;

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
    message?: IMMessage.AsObject,
  }
}

export class CreateForwardMessageReq extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): IMMessage | undefined;
  setMessage(value?: IMMessage): void;

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
    message?: IMMessage.AsObject,
  }
}

export class CreateForwardMessageResp extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): IMMessage | undefined;
  setMessage(value?: IMMessage): void;

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
    message?: IMMessage.AsObject,
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

