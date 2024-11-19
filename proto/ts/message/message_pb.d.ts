// package: openim.sdk.message
// file: message.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

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

