// package: openim.sdk.common
// file: common.proto

import * as jspb from "google-protobuf";

export class OfflinePushInfo extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDesc(): string;
  setDesc(value: string): void;

  getEx(): string;
  setEx(value: string): void;

  getIospushsound(): string;
  setIospushsound(value: string): void;

  getIosbadgecount(): boolean;
  setIosbadgecount(value: boolean): void;

  getSignalinfo(): string;
  setSignalinfo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfflinePushInfo.AsObject;
  static toObject(includeInstance: boolean, msg: OfflinePushInfo): OfflinePushInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OfflinePushInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfflinePushInfo;
  static deserializeBinaryFromReader(message: OfflinePushInfo, reader: jspb.BinaryReader): OfflinePushInfo;
}

export namespace OfflinePushInfo {
  export type AsObject = {
    title: string,
    desc: string,
    ex: string,
    iospushsound: string,
    iosbadgecount: boolean,
    signalinfo: string,
  }
}

export class RequestPagination extends jspb.Message {
  getPagenumber(): number;
  setPagenumber(value: number): void;

  getShownumber(): number;
  setShownumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestPagination.AsObject;
  static toObject(includeInstance: boolean, msg: RequestPagination): RequestPagination.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestPagination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestPagination;
  static deserializeBinaryFromReader(message: RequestPagination, reader: jspb.BinaryReader): RequestPagination;
}

export namespace RequestPagination {
  export type AsObject = {
    pagenumber: number,
    shownumber: number,
  }
}

export interface SessionTypeMap {
  SESSIONTYPE_: 0;
  SINGLECHATTYPE: 1;
  WRITEGROUPCHATTYPE: 2;
  READGROUPCHATTYPE: 3;
  NOTIFICATIONCHATTYPE: 4;
}

export const SessionType: SessionTypeMap;

export interface MsgFromMap {
  MSGFROM_: 0;
  USERMSGTYPE: 100;
  SYSMSGTYPE: 200;
}

export const MsgFrom: MsgFromMap;

export interface PlatformMap {
  PLATFORM_: 0;
  IOS: 1;
  ANDROID: 2;
  WINDOWS: 3;
  MACOS: 4;
  WEB: 5;
  MINIWEB: 6;
  LINUX: 7;
  ANDROIDPAD: 8;
  IPAD: 9;
  ADMIN: 10;
  HARMONYOS: 11;
}

export const Platform: PlatformMap;

export interface AppFrameworkMap {
  APPFRAMEWORK_: 0;
  NATIVE: 1;
  FLUTTER: 2;
  REACTNATIVE: 3;
  ELECTRON: 4;
  UNITY: 5;
  UNREALENGINE: 6;
  QT: 7;
  DOTNET: 8;
  DOTNETMAUI: 9;
  AVALONIA: 10;
  CORDOVA: 11;
  UNIAPP: 12;
}

export const AppFramework: AppFrameworkMap;

export interface MsgStatusMap {
  MSGSTATUS_: 0;
  SENDING: 1;
  SENDSUCCESS: 2;
  SENDFAILED: 3;
  HASDELETED: 4;
  FILTERED: 5;
}

export const MsgStatus: MsgStatusMap;

export interface ContentTypeMap {
  CONTENTTYPE_: 0;
  TEXT: 101;
  PICTURE: 102;
  SOUND: 103;
  VIDEO: 104;
  FILE: 105;
  ATTEXT: 106;
  MERGE: 107;
  CARD: 108;
  LOCATION: 109;
  CUSTOM: 110;
  TYPING: 113;
  QUOTE: 114;
  FACE: 115;
  STREAM: 116;
  ADVANCEDTEXT: 117;
  CUSTOMMSGNOTTRIGGERCONVERSATION: 119;
  CUSTOMMSGONLINEONLY: 120;
  FRIENDAPPLICATIONAPPROVEDNOTIFICATION: 1201;
  FRIENDAPPLICATIONREJECTEDNOTIFICATION: 1202;
  FRIENDAPPLICATIONNOTIFICATION: 1203;
  FRIENDADDEDNOTIFICATION: 1204;
  FRIENDDELETEDNOTIFICATION: 1205;
  FRIENDREMARKSETNOTIFICATION: 1206;
  BLACKADDEDNOTIFICATION: 1207;
  BLACKDELETEDNOTIFICATION: 1208;
  FRIENDINFOUPDATEDNOTIFICATION: 1209;
  FRIENDSINFOUPDATENOTIFICATION: 1210;
  CONVERSATIONCHANGENOTIFICATION: 1300;
  USERINFOUPDATEDNOTIFICATION: 1303;
  USERSTATUSCHANGENOTIFICATION: 1304;
  USERCOMMANDADDNOTIFICATION: 1305;
  USERCOMMANDDELETENOTIFICATION: 1306;
  USERCOMMANDUPDATENOTIFICATION: 1307;
  GROUPCREATEDNOTIFICATION: 1501;
  GROUPINFOSETNOTIFICATION: 1502;
  JOINGROUPAPPLICATIONNOTIFICATION: 1503;
  MEMBERQUITNOTIFICATION: 1504;
  GROUPAPPLICATIONACCEPTEDNOTIFICATION: 1505;
  GROUPAPPLICATIONREJECTEDNOTIFICATION: 1506;
  GROUPOWNERTRANSFERREDNOTIFICATION: 1507;
  MEMBERKICKEDNOTIFICATION: 1508;
  MEMBERINVITEDNOTIFICATION: 1509;
  MEMBERENTERNOTIFICATION: 1510;
  GROUPDISMISSEDNOTIFICATION: 1511;
  GROUPMEMBERMUTEDNOTIFICATION: 1512;
  GROUPMEMBERCANCELMUTEDNOTIFICATION: 1513;
  GROUPMUTEDNOTIFICATION: 1514;
  GROUPCANCELMUTEDNOTIFICATION: 1515;
  GROUPMEMBERINFOSETNOTIFICATION: 1516;
  GROUPMEMBERSETTOADMINNOTIFICATION: 1517;
  GROUPMEMBERSETTOORDINARYUSERNOTIFICATION: 1518;
  GROUPINFOSETANNOUNCEMENTNOTIFICATION: 1519;
  GROUPINFOSETNAMENOTIFICATION: 1520;
  CONVERSATIONPRIVATECHATNOTIFICATION: 1701;
  CLEARCONVERSATIONNOTIFICATION: 1703;
  BUSINESSNOTIFICATION: 2001;
  REVOKENOTIFICATION: 2101;
  DELETEMSGSNOTIFICATION: 2102;
  HASREADRECEIPT: 2200;
}

export const ContentType: ContentTypeMap;

export interface ApprovalStatusMap {
  DEFAULT: 0;
  APPROVED: 1;
  REJECTED: -1;
}

export const ApprovalStatus: ApprovalStatusMap;

