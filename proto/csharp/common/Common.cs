// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: common.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021, 8981
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Openim.Sdk.Common {

  /// <summary>Holder for reflection information generated from common.proto</summary>
  public static partial class CommonReflection {

    #region Descriptor
    /// <summary>File descriptor for common.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static CommonReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Cgxjb21tb24ucHJvdG8SEW9wZW5pbS5zZGsuY29tbW9uInsKD09mZmxpbmVQ",
            "dXNoSW5mbxINCgV0aXRsZRgBIAEoCRIMCgRkZXNjGAIgASgJEgoKAmV4GAMg",
            "ASgJEhQKDGlPU1B1c2hTb3VuZBgEIAEoCRIVCg1pT1NCYWRnZUNvdW50GAUg",
            "ASgIEhIKCnNpZ25hbEluZm8YBiABKAkiOwoRUmVxdWVzdFBhZ2luYXRpb24S",
            "EgoKcGFnZU51bWJlchgBIAEoBRISCgpzaG93TnVtYmVyGAIgASgFKnwKC1Nl",
            "c3Npb25UeXBlEhAKDFNlc3Npb25UeXBlXxAAEhIKDlNpbmdsZUNoYXRUeXBl",
            "EAESFgoSV3JpdGVHcm91cENoYXRUeXBlEAISFQoRUmVhZEdyb3VwQ2hhdFR5",
            "cGUQAxIYChROb3RpZmljYXRpb25DaGF0VHlwZRAEKjkKB01zZ0Zyb20SDAoI",
            "TXNnRnJvbV8QABIPCgtVc2VyTXNnVHlwZRBkEg8KClN5c01zZ1R5cGUQyAEq",
            "nAEKCFBsYXRmb3JtEg0KCVBsYXRmb3JtXxAAEgcKA2lPUxABEgsKB0FuZHJv",
            "aWQQAhILCgdXaW5kb3dzEAMSCQoFbWFjT1MQBBIHCgNXZWIQBRILCgdNaW5p",
            "V2ViEAYSCQoFTGludXgQBxIOCgpBbmRyb2lkUGFkEAgSCAoEaVBhZBAJEgkK",
            "BUFkbWluEAoSDQoJSGFybW9ueU9TEAsqwQEKDEFwcEZyYW1ld29yaxIRCg1B",
            "cHBGcmFtZXdvcmtfEAASCgoGTmF0aXZlEAESCwoHRmx1dHRlchACEg8KC1Jl",
            "YWN0TmF0aXZlEAMSDAoIRWxlY3Ryb24QBBIJCgVVbml0eRAFEhAKDFVucmVh",
            "bEVuZ2luZRAGEgYKAlF0EAcSCgoGRG90TmV0EAgSDgoKRG90TmV0TUFVSRAJ",
            "EgwKCEF2YWxvbmlhEAoSCwoHQ29yZG92YRALEgoKBlVuaUFwcBAMKmcKCU1z",
            "Z1N0YXR1cxIOCgpNc2dTdGF0dXNfEAASCwoHU2VuZGluZxABEg8KC1NlbmRT",
            "dWNjZXNzEAISDgoKU2VuZEZhaWxlZBADEg4KCkhhc0RlbGV0ZWQQBBIMCghG",
            "aWx0ZXJlZBAFKskNCgtDb250ZW50VHlwZRIQCgxDb250ZW50VHlwZV8QABII",
            "CgRUZXh0EGUSCwoHUGljdHVyZRBmEgkKBVNvdW5kEGcSCQoFVmlkZW8QaBII",
            "CgRGaWxlEGkSCgoGQXRUZXh0EGoSCQoFTWVyZ2UQaxIICgRDYXJkEGwSDAoI",
            "TG9jYXRpb24QbRIKCgZDdXN0b20QbhIKCgZUeXBpbmcQcRIJCgVRdW90ZRBy",
            "EggKBEZhY2UQcxIKCgZTdHJlYW0QdBIQCgxBZHZhbmNlZFRleHQQdRIjCh9D",
            "dXN0b21Nc2dOb3RUcmlnZ2VyQ29udmVyc2F0aW9uEHcSFwoTQ3VzdG9tTXNn",
            "T25saW5lT25seRB4EioKJUZyaWVuZEFwcGxpY2F0aW9uQXBwcm92ZWROb3Rp",
            "ZmljYXRpb24QsQkSKgolRnJpZW5kQXBwbGljYXRpb25SZWplY3RlZE5vdGlm",
            "aWNhdGlvbhCyCRIiCh1GcmllbmRBcHBsaWNhdGlvbk5vdGlmaWNhdGlvbhCz",
            "CRIcChdGcmllbmRBZGRlZE5vdGlmaWNhdGlvbhC0CRIeChlGcmllbmREZWxl",
            "dGVkTm90aWZpY2F0aW9uELUJEiAKG0ZyaWVuZFJlbWFya1NldE5vdGlmaWNh",
            "dGlvbhC2CRIbChZCbGFja0FkZGVkTm90aWZpY2F0aW9uELcJEh0KGEJsYWNr",
            "RGVsZXRlZE5vdGlmaWNhdGlvbhC4CRIiCh1GcmllbmRJbmZvVXBkYXRlZE5v",
            "dGlmaWNhdGlvbhC5CRIiCh1GcmllbmRzSW5mb1VwZGF0ZU5vdGlmaWNhdGlv",
            "bhC6CRIjCh5Db252ZXJzYXRpb25DaGFuZ2VOb3RpZmljYXRpb24QlAoSIAob",
            "VXNlckluZm9VcGRhdGVkTm90aWZpY2F0aW9uEJcKEiEKHFVzZXJTdGF0dXND",
            "aGFuZ2VOb3RpZmljYXRpb24QmAoSHwoaVXNlckNvbW1hbmRBZGROb3RpZmlj",
            "YXRpb24QmQoSIgodVXNlckNvbW1hbmREZWxldGVOb3RpZmljYXRpb24QmgoS",
            "IgodVXNlckNvbW1hbmRVcGRhdGVOb3RpZmljYXRpb24QmwoSHQoYR3JvdXBD",
            "cmVhdGVkTm90aWZpY2F0aW9uEN0LEh0KGEdyb3VwSW5mb1NldE5vdGlmaWNh",
            "dGlvbhDeCxIlCiBKb2luR3JvdXBBcHBsaWNhdGlvbk5vdGlmaWNhdGlvbhDf",
            "CxIbChZNZW1iZXJRdWl0Tm90aWZpY2F0aW9uEOALEikKJEdyb3VwQXBwbGlj",
            "YXRpb25BY2NlcHRlZE5vdGlmaWNhdGlvbhDhCxIpCiRHcm91cEFwcGxpY2F0",
            "aW9uUmVqZWN0ZWROb3RpZmljYXRpb24Q4gsSJgohR3JvdXBPd25lclRyYW5z",
            "ZmVycmVkTm90aWZpY2F0aW9uEOMLEh0KGE1lbWJlcktpY2tlZE5vdGlmaWNh",
            "dGlvbhDkCxIeChlNZW1iZXJJbnZpdGVkTm90aWZpY2F0aW9uEOULEhwKF01l",
            "bWJlckVudGVyTm90aWZpY2F0aW9uEOYLEh8KGkdyb3VwRGlzbWlzc2VkTm90",
            "aWZpY2F0aW9uEOcLEiEKHEdyb3VwTWVtYmVyTXV0ZWROb3RpZmljYXRpb24Q",
            "6AsSJwoiR3JvdXBNZW1iZXJDYW5jZWxNdXRlZE5vdGlmaWNhdGlvbhDpCxIb",
            "ChZHcm91cE11dGVkTm90aWZpY2F0aW9uEOoLEiEKHEdyb3VwQ2FuY2VsTXV0",
            "ZWROb3RpZmljYXRpb24Q6wsSIwoeR3JvdXBNZW1iZXJJbmZvU2V0Tm90aWZp",
            "Y2F0aW9uEOwLEiYKIUdyb3VwTWVtYmVyU2V0VG9BZG1pbk5vdGlmaWNhdGlv",
            "bhDtCxItCihHcm91cE1lbWJlclNldFRvT3JkaW5hcnlVc2VyTm90aWZpY2F0",
            "aW9uEO4LEikKJEdyb3VwSW5mb1NldEFubm91bmNlbWVudE5vdGlmaWNhdGlv",
            "bhDvCxIhChxHcm91cEluZm9TZXROYW1lTm90aWZpY2F0aW9uEPALEigKI0Nv",
            "bnZlcnNhdGlvblByaXZhdGVDaGF0Tm90aWZpY2F0aW9uEKUNEiIKHUNsZWFy",
            "Q29udmVyc2F0aW9uTm90aWZpY2F0aW9uEKcNEhkKFEJ1c2luZXNzTm90aWZp",
            "Y2F0aW9uENEPEhcKElJldm9rZU5vdGlmaWNhdGlvbhC1EBIbChZEZWxldGVN",
            "c2dzTm90aWZpY2F0aW9uELYQEhMKDkhhc1JlYWRSZWNlaXB0EJgRKkIKDkFw",
            "cHJvdmFsU3RhdHVzEgsKB0RlZmF1bHQQABIMCghBcHByb3ZlZBABEhUKCFJl",
            "amVjdGVkEP///////////wFCOVo3Z2l0aHViLmNvbS9vcGVuaW1zZGsvb3Bl",
            "bmltLXNkay1jb3JlL3YzL3Byb3RvL2dvL2NvbW1vbmIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(new[] {typeof(global::Openim.Sdk.Common.SessionType), typeof(global::Openim.Sdk.Common.MsgFrom), typeof(global::Openim.Sdk.Common.Platform), typeof(global::Openim.Sdk.Common.AppFramework), typeof(global::Openim.Sdk.Common.MsgStatus), typeof(global::Openim.Sdk.Common.ContentType), typeof(global::Openim.Sdk.Common.ApprovalStatus), }, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Openim.Sdk.Common.OfflinePushInfo), global::Openim.Sdk.Common.OfflinePushInfo.Parser, new[]{ "Title", "Desc", "Ex", "IOSPushSound", "IOSBadgeCount", "SignalInfo" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Openim.Sdk.Common.RequestPagination), global::Openim.Sdk.Common.RequestPagination.Parser, new[]{ "PageNumber", "ShowNumber" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Enums
  public enum SessionType {
    [pbr::OriginalName("SessionType_")] SessionType = 0,
    /// <summary>
    /// SingleChatType represents a single chat session type.
    /// </summary>
    [pbr::OriginalName("SingleChatType")] SingleChatType = 1,
    /// <summary>
    /// WriteGroupChatType represents a write-diffusion group chat session type (not currently enabled, can be ignored).
    /// </summary>
    [pbr::OriginalName("WriteGroupChatType")] WriteGroupChatType = 2,
    /// <summary>
    /// ReadGroupChatType represents a read-diffusion group chat session type, used for all current group chats in OpenIM.
    /// </summary>
    [pbr::OriginalName("ReadGroupChatType")] ReadGroupChatType = 3,
    /// <summary>
    /// NotificationChatType represents a notification session type, generated by the client when the server sends a notification.
    /// </summary>
    [pbr::OriginalName("NotificationChatType")] NotificationChatType = 4,
  }

  public enum MsgFrom {
    [pbr::OriginalName("MsgFrom_")] MsgFrom = 0,
    /// <summary>
    /// UserMsgType represents a message type originating from a user.
    /// </summary>
    [pbr::OriginalName("UserMsgType")] UserMsgType = 100,
    /// <summary>
    /// SysMsgType represents a system message type, typically generated by the system.
    /// </summary>
    [pbr::OriginalName("SysMsgType")] SysMsgType = 200,
  }

  public enum Platform {
    [pbr::OriginalName("Platform_")] Platform = 0,
    /// <summary>
    /// iOS represents the Apple iOS platform.
    /// </summary>
    [pbr::OriginalName("iOS")] IOs = 1,
    /// <summary>
    /// Android represents the Android platform.
    /// </summary>
    [pbr::OriginalName("Android")] Android = 2,
    /// <summary>
    /// Windows represents the Microsoft Windows platform.
    /// </summary>
    [pbr::OriginalName("Windows")] Windows = 3,
    /// <summary>
    /// macOS represents the Apple macOS platform.
    /// </summary>
    [pbr::OriginalName("macOS")] MacOs = 4,
    /// <summary>
    /// Web represents the web browser platform.
    /// </summary>
    [pbr::OriginalName("Web")] Web = 5,
    /// <summary>
    /// MiniWeb represents the mini-program or mini-web platform.
    /// </summary>
    [pbr::OriginalName("MiniWeb")] MiniWeb = 6,
    /// <summary>
    /// Linux represents the Linux platform.
    /// </summary>
    [pbr::OriginalName("Linux")] Linux = 7,
    /// <summary>
    /// AndroidPad represents the Android tablet platform.
    /// </summary>
    [pbr::OriginalName("AndroidPad")] AndroidPad = 8,
    /// <summary>
    /// iPad represents the Apple iPad platform.
    /// </summary>
    [pbr::OriginalName("iPad")] IPad = 9,
    /// <summary>
    /// Admin represents the admin panel or management platform, typically used for backend administrators.
    /// This platform is specifically for administrative filling and can generally be ignored.
    /// </summary>
    [pbr::OriginalName("Admin")] Admin = 10,
    /// <summary>
    /// HarmonyOS represents the Huawei HarmonyOS platform.
    /// </summary>
    [pbr::OriginalName("HarmonyOS")] HarmonyOs = 11,
  }

  public enum AppFramework {
    [pbr::OriginalName("AppFramework_")] AppFramework = 0,
    [pbr::OriginalName("Native")] Native = 1,
    [pbr::OriginalName("Flutter")] Flutter = 2,
    [pbr::OriginalName("ReactNative")] ReactNative = 3,
    [pbr::OriginalName("Electron")] Electron = 4,
    [pbr::OriginalName("Unity")] Unity = 5,
    [pbr::OriginalName("UnrealEngine")] UnrealEngine = 6,
    [pbr::OriginalName("Qt")] Qt = 7,
    [pbr::OriginalName("DotNet")] DotNet = 8,
    [pbr::OriginalName("DotNetMAUI")] DotNetMaui = 9,
    [pbr::OriginalName("Avalonia")] Avalonia = 10,
    [pbr::OriginalName("Cordova")] Cordova = 11,
    [pbr::OriginalName("UniApp")] UniApp = 12,
  }

  public enum MsgStatus {
    [pbr::OriginalName("MsgStatus_")] MsgStatus = 0,
    [pbr::OriginalName("Sending")] Sending = 1,
    [pbr::OriginalName("SendSuccess")] SendSuccess = 2,
    [pbr::OriginalName("SendFailed")] SendFailed = 3,
    [pbr::OriginalName("HasDeleted")] HasDeleted = 4,
    [pbr::OriginalName("Filtered")] Filtered = 5,
  }

  public enum ContentType {
    [pbr::OriginalName("ContentType_")] ContentType = 0,
    [pbr::OriginalName("Text")] Text = 101,
    [pbr::OriginalName("Picture")] Picture = 102,
    [pbr::OriginalName("Sound")] Sound = 103,
    [pbr::OriginalName("Video")] Video = 104,
    [pbr::OriginalName("File")] File = 105,
    [pbr::OriginalName("AtText")] AtText = 106,
    [pbr::OriginalName("Merge")] Merge = 107,
    [pbr::OriginalName("Card")] Card = 108,
    [pbr::OriginalName("Location")] Location = 109,
    [pbr::OriginalName("Custom")] Custom = 110,
    [pbr::OriginalName("Typing")] Typing = 113,
    [pbr::OriginalName("Quote")] Quote = 114,
    [pbr::OriginalName("Face")] Face = 115,
    [pbr::OriginalName("Stream")] Stream = 116,
    [pbr::OriginalName("AdvancedText")] AdvancedText = 117,
    [pbr::OriginalName("CustomMsgNotTriggerConversation")] CustomMsgNotTriggerConversation = 119,
    [pbr::OriginalName("CustomMsgOnlineOnly")] CustomMsgOnlineOnly = 120,
    [pbr::OriginalName("FriendApplicationApprovedNotification")] FriendApplicationApprovedNotification = 1201,
    [pbr::OriginalName("FriendApplicationRejectedNotification")] FriendApplicationRejectedNotification = 1202,
    [pbr::OriginalName("FriendApplicationNotification")] FriendApplicationNotification = 1203,
    [pbr::OriginalName("FriendAddedNotification")] FriendAddedNotification = 1204,
    [pbr::OriginalName("FriendDeletedNotification")] FriendDeletedNotification = 1205,
    [pbr::OriginalName("FriendRemarkSetNotification")] FriendRemarkSetNotification = 1206,
    [pbr::OriginalName("BlackAddedNotification")] BlackAddedNotification = 1207,
    [pbr::OriginalName("BlackDeletedNotification")] BlackDeletedNotification = 1208,
    [pbr::OriginalName("FriendInfoUpdatedNotification")] FriendInfoUpdatedNotification = 1209,
    [pbr::OriginalName("FriendsInfoUpdateNotification")] FriendsInfoUpdateNotification = 1210,
    /// <summary>
    ///  FriendNotificationEnd = 1299;
    /// </summary>
    [pbr::OriginalName("ConversationChangeNotification")] ConversationChangeNotification = 1300,
    /// <summary>
    ///  UserNotificationBegin = 1301;
    /// </summary>
    [pbr::OriginalName("UserInfoUpdatedNotification")] UserInfoUpdatedNotification = 1303,
    [pbr::OriginalName("UserStatusChangeNotification")] UserStatusChangeNotification = 1304,
    [pbr::OriginalName("UserCommandAddNotification")] UserCommandAddNotification = 1305,
    [pbr::OriginalName("UserCommandDeleteNotification")] UserCommandDeleteNotification = 1306,
    /// <summary>
    ///  UserNotificationEnd = 1399;
    /// </summary>
    [pbr::OriginalName("UserCommandUpdateNotification")] UserCommandUpdateNotification = 1307,
    /// <summary>
    ///  GroupNotificationBegin = 1500;
    /// </summary>
    [pbr::OriginalName("GroupCreatedNotification")] GroupCreatedNotification = 1501,
    [pbr::OriginalName("GroupInfoSetNotification")] GroupInfoSetNotification = 1502,
    [pbr::OriginalName("JoinGroupApplicationNotification")] JoinGroupApplicationNotification = 1503,
    [pbr::OriginalName("MemberQuitNotification")] MemberQuitNotification = 1504,
    [pbr::OriginalName("GroupApplicationAcceptedNotification")] GroupApplicationAcceptedNotification = 1505,
    [pbr::OriginalName("GroupApplicationRejectedNotification")] GroupApplicationRejectedNotification = 1506,
    [pbr::OriginalName("GroupOwnerTransferredNotification")] GroupOwnerTransferredNotification = 1507,
    [pbr::OriginalName("MemberKickedNotification")] MemberKickedNotification = 1508,
    [pbr::OriginalName("MemberInvitedNotification")] MemberInvitedNotification = 1509,
    [pbr::OriginalName("MemberEnterNotification")] MemberEnterNotification = 1510,
    [pbr::OriginalName("GroupDismissedNotification")] GroupDismissedNotification = 1511,
    [pbr::OriginalName("GroupMemberMutedNotification")] GroupMemberMutedNotification = 1512,
    [pbr::OriginalName("GroupMemberCancelMutedNotification")] GroupMemberCancelMutedNotification = 1513,
    [pbr::OriginalName("GroupMutedNotification")] GroupMutedNotification = 1514,
    [pbr::OriginalName("GroupCancelMutedNotification")] GroupCancelMutedNotification = 1515,
    [pbr::OriginalName("GroupMemberInfoSetNotification")] GroupMemberInfoSetNotification = 1516,
    [pbr::OriginalName("GroupMemberSetToAdminNotification")] GroupMemberSetToAdminNotification = 1517,
    [pbr::OriginalName("GroupMemberSetToOrdinaryUserNotification")] GroupMemberSetToOrdinaryUserNotification = 1518,
    [pbr::OriginalName("GroupInfoSetAnnouncementNotification")] GroupInfoSetAnnouncementNotification = 1519,
    /// <summary>
    ///  GroupNotificationEnd                     = 1599;
    /// </summary>
    [pbr::OriginalName("GroupInfoSetNameNotification")] GroupInfoSetNameNotification = 1520,
    [pbr::OriginalName("ConversationPrivateChatNotification")] ConversationPrivateChatNotification = 1701,
    [pbr::OriginalName("ClearConversationNotification")] ClearConversationNotification = 1703,
    [pbr::OriginalName("BusinessNotification")] BusinessNotification = 2001,
    [pbr::OriginalName("RevokeNotification")] RevokeNotification = 2101,
    [pbr::OriginalName("DeleteMsgsNotification")] DeleteMsgsNotification = 2102,
    [pbr::OriginalName("HasReadReceipt")] HasReadReceipt = 2200,
  }

  public enum ApprovalStatus {
    [pbr::OriginalName("Default")] Default = 0,
    [pbr::OriginalName("Approved")] Approved = 1,
    [pbr::OriginalName("Rejected")] Rejected = -1,
  }

  #endregion

  #region Messages
  [global::System.Diagnostics.DebuggerDisplayAttribute("{ToString(),nq}")]
  public sealed partial class OfflinePushInfo : pb::IMessage<OfflinePushInfo>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<OfflinePushInfo> _parser = new pb::MessageParser<OfflinePushInfo>(() => new OfflinePushInfo());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<OfflinePushInfo> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Openim.Sdk.Common.CommonReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public OfflinePushInfo() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public OfflinePushInfo(OfflinePushInfo other) : this() {
      title_ = other.title_;
      desc_ = other.desc_;
      ex_ = other.ex_;
      iOSPushSound_ = other.iOSPushSound_;
      iOSBadgeCount_ = other.iOSBadgeCount_;
      signalInfo_ = other.signalInfo_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public OfflinePushInfo Clone() {
      return new OfflinePushInfo(this);
    }

    /// <summary>Field number for the "title" field.</summary>
    public const int TitleFieldNumber = 1;
    private string title_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string Title {
      get { return title_; }
      set {
        title_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "desc" field.</summary>
    public const int DescFieldNumber = 2;
    private string desc_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string Desc {
      get { return desc_; }
      set {
        desc_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "ex" field.</summary>
    public const int ExFieldNumber = 3;
    private string ex_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string Ex {
      get { return ex_; }
      set {
        ex_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "iOSPushSound" field.</summary>
    public const int IOSPushSoundFieldNumber = 4;
    private string iOSPushSound_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string IOSPushSound {
      get { return iOSPushSound_; }
      set {
        iOSPushSound_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "iOSBadgeCount" field.</summary>
    public const int IOSBadgeCountFieldNumber = 5;
    private bool iOSBadgeCount_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool IOSBadgeCount {
      get { return iOSBadgeCount_; }
      set {
        iOSBadgeCount_ = value;
      }
    }

    /// <summary>Field number for the "signalInfo" field.</summary>
    public const int SignalInfoFieldNumber = 6;
    private string signalInfo_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string SignalInfo {
      get { return signalInfo_; }
      set {
        signalInfo_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as OfflinePushInfo);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(OfflinePushInfo other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Title != other.Title) return false;
      if (Desc != other.Desc) return false;
      if (Ex != other.Ex) return false;
      if (IOSPushSound != other.IOSPushSound) return false;
      if (IOSBadgeCount != other.IOSBadgeCount) return false;
      if (SignalInfo != other.SignalInfo) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (Title.Length != 0) hash ^= Title.GetHashCode();
      if (Desc.Length != 0) hash ^= Desc.GetHashCode();
      if (Ex.Length != 0) hash ^= Ex.GetHashCode();
      if (IOSPushSound.Length != 0) hash ^= IOSPushSound.GetHashCode();
      if (IOSBadgeCount != false) hash ^= IOSBadgeCount.GetHashCode();
      if (SignalInfo.Length != 0) hash ^= SignalInfo.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (Title.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(Title);
      }
      if (Desc.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(Desc);
      }
      if (Ex.Length != 0) {
        output.WriteRawTag(26);
        output.WriteString(Ex);
      }
      if (IOSPushSound.Length != 0) {
        output.WriteRawTag(34);
        output.WriteString(IOSPushSound);
      }
      if (IOSBadgeCount != false) {
        output.WriteRawTag(40);
        output.WriteBool(IOSBadgeCount);
      }
      if (SignalInfo.Length != 0) {
        output.WriteRawTag(50);
        output.WriteString(SignalInfo);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (Title.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(Title);
      }
      if (Desc.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(Desc);
      }
      if (Ex.Length != 0) {
        output.WriteRawTag(26);
        output.WriteString(Ex);
      }
      if (IOSPushSound.Length != 0) {
        output.WriteRawTag(34);
        output.WriteString(IOSPushSound);
      }
      if (IOSBadgeCount != false) {
        output.WriteRawTag(40);
        output.WriteBool(IOSBadgeCount);
      }
      if (SignalInfo.Length != 0) {
        output.WriteRawTag(50);
        output.WriteString(SignalInfo);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      if (Title.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Title);
      }
      if (Desc.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Desc);
      }
      if (Ex.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Ex);
      }
      if (IOSPushSound.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(IOSPushSound);
      }
      if (IOSBadgeCount != false) {
        size += 1 + 1;
      }
      if (SignalInfo.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(SignalInfo);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(OfflinePushInfo other) {
      if (other == null) {
        return;
      }
      if (other.Title.Length != 0) {
        Title = other.Title;
      }
      if (other.Desc.Length != 0) {
        Desc = other.Desc;
      }
      if (other.Ex.Length != 0) {
        Ex = other.Ex;
      }
      if (other.IOSPushSound.Length != 0) {
        IOSPushSound = other.IOSPushSound;
      }
      if (other.IOSBadgeCount != false) {
        IOSBadgeCount = other.IOSBadgeCount;
      }
      if (other.SignalInfo.Length != 0) {
        SignalInfo = other.SignalInfo;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
      if ((tag & 7) == 4) {
        // Abort on any end group tag.
        return;
      }
      switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            Title = input.ReadString();
            break;
          }
          case 18: {
            Desc = input.ReadString();
            break;
          }
          case 26: {
            Ex = input.ReadString();
            break;
          }
          case 34: {
            IOSPushSound = input.ReadString();
            break;
          }
          case 40: {
            IOSBadgeCount = input.ReadBool();
            break;
          }
          case 50: {
            SignalInfo = input.ReadString();
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
      if ((tag & 7) == 4) {
        // Abort on any end group tag.
        return;
      }
      switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 10: {
            Title = input.ReadString();
            break;
          }
          case 18: {
            Desc = input.ReadString();
            break;
          }
          case 26: {
            Ex = input.ReadString();
            break;
          }
          case 34: {
            IOSPushSound = input.ReadString();
            break;
          }
          case 40: {
            IOSBadgeCount = input.ReadBool();
            break;
          }
          case 50: {
            SignalInfo = input.ReadString();
            break;
          }
        }
      }
    }
    #endif

  }

  [global::System.Diagnostics.DebuggerDisplayAttribute("{ToString(),nq}")]
  public sealed partial class RequestPagination : pb::IMessage<RequestPagination>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<RequestPagination> _parser = new pb::MessageParser<RequestPagination>(() => new RequestPagination());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<RequestPagination> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Openim.Sdk.Common.CommonReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public RequestPagination() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public RequestPagination(RequestPagination other) : this() {
      pageNumber_ = other.pageNumber_;
      showNumber_ = other.showNumber_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public RequestPagination Clone() {
      return new RequestPagination(this);
    }

    /// <summary>Field number for the "pageNumber" field.</summary>
    public const int PageNumberFieldNumber = 1;
    private int pageNumber_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int PageNumber {
      get { return pageNumber_; }
      set {
        pageNumber_ = value;
      }
    }

    /// <summary>Field number for the "showNumber" field.</summary>
    public const int ShowNumberFieldNumber = 2;
    private int showNumber_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int ShowNumber {
      get { return showNumber_; }
      set {
        showNumber_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as RequestPagination);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(RequestPagination other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (PageNumber != other.PageNumber) return false;
      if (ShowNumber != other.ShowNumber) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (PageNumber != 0) hash ^= PageNumber.GetHashCode();
      if (ShowNumber != 0) hash ^= ShowNumber.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (PageNumber != 0) {
        output.WriteRawTag(8);
        output.WriteInt32(PageNumber);
      }
      if (ShowNumber != 0) {
        output.WriteRawTag(16);
        output.WriteInt32(ShowNumber);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (PageNumber != 0) {
        output.WriteRawTag(8);
        output.WriteInt32(PageNumber);
      }
      if (ShowNumber != 0) {
        output.WriteRawTag(16);
        output.WriteInt32(ShowNumber);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      if (PageNumber != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(PageNumber);
      }
      if (ShowNumber != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(ShowNumber);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(RequestPagination other) {
      if (other == null) {
        return;
      }
      if (other.PageNumber != 0) {
        PageNumber = other.PageNumber;
      }
      if (other.ShowNumber != 0) {
        ShowNumber = other.ShowNumber;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
      if ((tag & 7) == 4) {
        // Abort on any end group tag.
        return;
      }
      switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 8: {
            PageNumber = input.ReadInt32();
            break;
          }
          case 16: {
            ShowNumber = input.ReadInt32();
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
      if ((tag & 7) == 4) {
        // Abort on any end group tag.
        return;
      }
      switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 8: {
            PageNumber = input.ReadInt32();
            break;
          }
          case 16: {
            ShowNumber = input.ReadInt32();
            break;
          }
        }
      }
    }
    #endif

  }

  #endregion

}

#endregion Designer generated code
