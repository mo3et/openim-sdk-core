// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.2
// 	protoc        v5.27.1
// source: user.proto

package user

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type UserInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserID           string `protobuf:"bytes,1,opt,name=userID,proto3" json:"userID,omitempty"`
	Nickname         string `protobuf:"bytes,2,opt,name=nickname,proto3" json:"nickname,omitempty"`
	FaceURL          string `protobuf:"bytes,3,opt,name=faceURL,proto3" json:"faceURL,omitempty"`
	Ex               string `protobuf:"bytes,4,opt,name=ex,proto3" json:"ex,omitempty"`
	CreateTime       int64  `protobuf:"varint,5,opt,name=createTime,proto3" json:"createTime,omitempty"`
	AppMangerLevel   int32  `protobuf:"varint,6,opt,name=appMangerLevel,proto3" json:"appMangerLevel,omitempty"`
	GlobalRecvMsgOpt int32  `protobuf:"varint,7,opt,name=globalRecvMsgOpt,proto3" json:"globalRecvMsgOpt,omitempty"`
	Attached         string `protobuf:"bytes,8,opt,name=attached,proto3" json:"attached,omitempty"`
}

func (x *UserInfo) Reset() {
	*x = UserInfo{}
	mi := &file_user_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *UserInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UserInfo) ProtoMessage() {}

func (x *UserInfo) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UserInfo.ProtoReflect.Descriptor instead.
func (*UserInfo) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{0}
}

func (x *UserInfo) GetUserID() string {
	if x != nil {
		return x.UserID
	}
	return ""
}

func (x *UserInfo) GetNickname() string {
	if x != nil {
		return x.Nickname
	}
	return ""
}

func (x *UserInfo) GetFaceURL() string {
	if x != nil {
		return x.FaceURL
	}
	return ""
}

func (x *UserInfo) GetEx() string {
	if x != nil {
		return x.Ex
	}
	return ""
}

func (x *UserInfo) GetCreateTime() int64 {
	if x != nil {
		return x.CreateTime
	}
	return 0
}

func (x *UserInfo) GetAppMangerLevel() int32 {
	if x != nil {
		return x.AppMangerLevel
	}
	return 0
}

func (x *UserInfo) GetGlobalRecvMsgOpt() int32 {
	if x != nil {
		return x.GlobalRecvMsgOpt
	}
	return 0
}

func (x *UserInfo) GetAttached() string {
	if x != nil {
		return x.Attached
	}
	return ""
}

type CommandInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserID     string `protobuf:"bytes,1,opt,name=userID,proto3" json:"userID,omitempty"`
	Type       int32  `protobuf:"varint,2,opt,name=type,proto3" json:"type,omitempty"`
	CreateTime int64  `protobuf:"varint,3,opt,name=createTime,proto3" json:"createTime,omitempty"`
	Uuid       string `protobuf:"bytes,4,opt,name=uuid,proto3" json:"uuid,omitempty"`
	Value      string `protobuf:"bytes,5,opt,name=value,proto3" json:"value,omitempty"`
	Ex         string `protobuf:"bytes,6,opt,name=ex,proto3" json:"ex,omitempty"`
}

func (x *CommandInfo) Reset() {
	*x = CommandInfo{}
	mi := &file_user_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *CommandInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CommandInfo) ProtoMessage() {}

func (x *CommandInfo) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CommandInfo.ProtoReflect.Descriptor instead.
func (*CommandInfo) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{1}
}

func (x *CommandInfo) GetUserID() string {
	if x != nil {
		return x.UserID
	}
	return ""
}

func (x *CommandInfo) GetType() int32 {
	if x != nil {
		return x.Type
	}
	return 0
}

func (x *CommandInfo) GetCreateTime() int64 {
	if x != nil {
		return x.CreateTime
	}
	return 0
}

func (x *CommandInfo) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *CommandInfo) GetValue() string {
	if x != nil {
		return x.Value
	}
	return ""
}

func (x *CommandInfo) GetEx() string {
	if x != nil {
		return x.Ex
	}
	return ""
}

type GetSelfUserInfoReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *GetSelfUserInfoReq) Reset() {
	*x = GetSelfUserInfoReq{}
	mi := &file_user_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetSelfUserInfoReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetSelfUserInfoReq) ProtoMessage() {}

func (x *GetSelfUserInfoReq) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetSelfUserInfoReq.ProtoReflect.Descriptor instead.
func (*GetSelfUserInfoReq) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{2}
}

type GetSelfUserInfoResp struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	User *UserInfo `protobuf:"bytes,1,opt,name=user,proto3" json:"user,omitempty"`
}

func (x *GetSelfUserInfoResp) Reset() {
	*x = GetSelfUserInfoResp{}
	mi := &file_user_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetSelfUserInfoResp) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetSelfUserInfoResp) ProtoMessage() {}

func (x *GetSelfUserInfoResp) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetSelfUserInfoResp.ProtoReflect.Descriptor instead.
func (*GetSelfUserInfoResp) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{3}
}

func (x *GetSelfUserInfoResp) GetUser() *UserInfo {
	if x != nil {
		return x.User
	}
	return nil
}

type SetSelfInfoReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserID           string  `protobuf:"bytes,1,opt,name=userID,proto3" json:"userID,omitempty"`
	Nickname         *string `protobuf:"bytes,2,opt,name=nickname,proto3,oneof" json:"nickname,omitempty"`
	FaceURL          *string `protobuf:"bytes,3,opt,name=faceURL,proto3,oneof" json:"faceURL,omitempty"`
	Ex               *string `protobuf:"bytes,4,opt,name=ex,proto3,oneof" json:"ex,omitempty"`
	GlobalRecvMsgOpt *int32  `protobuf:"varint,7,opt,name=globalRecvMsgOpt,proto3,oneof" json:"globalRecvMsgOpt,omitempty"`
}

func (x *SetSelfInfoReq) Reset() {
	*x = SetSelfInfoReq{}
	mi := &file_user_proto_msgTypes[4]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *SetSelfInfoReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SetSelfInfoReq) ProtoMessage() {}

func (x *SetSelfInfoReq) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[4]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SetSelfInfoReq.ProtoReflect.Descriptor instead.
func (*SetSelfInfoReq) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{4}
}

func (x *SetSelfInfoReq) GetUserID() string {
	if x != nil {
		return x.UserID
	}
	return ""
}

func (x *SetSelfInfoReq) GetNickname() string {
	if x != nil && x.Nickname != nil {
		return *x.Nickname
	}
	return ""
}

func (x *SetSelfInfoReq) GetFaceURL() string {
	if x != nil && x.FaceURL != nil {
		return *x.FaceURL
	}
	return ""
}

func (x *SetSelfInfoReq) GetEx() string {
	if x != nil && x.Ex != nil {
		return *x.Ex
	}
	return ""
}

func (x *SetSelfInfoReq) GetGlobalRecvMsgOpt() int32 {
	if x != nil && x.GlobalRecvMsgOpt != nil {
		return *x.GlobalRecvMsgOpt
	}
	return 0
}

type SetSelfInfoResp struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *SetSelfInfoResp) Reset() {
	*x = SetSelfInfoResp{}
	mi := &file_user_proto_msgTypes[5]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *SetSelfInfoResp) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SetSelfInfoResp) ProtoMessage() {}

func (x *SetSelfInfoResp) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[5]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SetSelfInfoResp.ProtoReflect.Descriptor instead.
func (*SetSelfInfoResp) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{5}
}

type ProcessUserCommandAddReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserID string  `protobuf:"bytes,1,opt,name=userID,proto3" json:"userID,omitempty"`
	Type   int32   `protobuf:"varint,2,opt,name=type,proto3" json:"type,omitempty"`
	Uuid   string  `protobuf:"bytes,3,opt,name=uuid,proto3" json:"uuid,omitempty"`
	Value  *string `protobuf:"bytes,4,opt,name=value,proto3,oneof" json:"value,omitempty"`
	Ex     *string `protobuf:"bytes,5,opt,name=ex,proto3,oneof" json:"ex,omitempty"`
}

func (x *ProcessUserCommandAddReq) Reset() {
	*x = ProcessUserCommandAddReq{}
	mi := &file_user_proto_msgTypes[6]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ProcessUserCommandAddReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProcessUserCommandAddReq) ProtoMessage() {}

func (x *ProcessUserCommandAddReq) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[6]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProcessUserCommandAddReq.ProtoReflect.Descriptor instead.
func (*ProcessUserCommandAddReq) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{6}
}

func (x *ProcessUserCommandAddReq) GetUserID() string {
	if x != nil {
		return x.UserID
	}
	return ""
}

func (x *ProcessUserCommandAddReq) GetType() int32 {
	if x != nil {
		return x.Type
	}
	return 0
}

func (x *ProcessUserCommandAddReq) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *ProcessUserCommandAddReq) GetValue() string {
	if x != nil && x.Value != nil {
		return *x.Value
	}
	return ""
}

func (x *ProcessUserCommandAddReq) GetEx() string {
	if x != nil && x.Ex != nil {
		return *x.Ex
	}
	return ""
}

type ProcessUserCommandAddResp struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ProcessUserCommandAddResp) Reset() {
	*x = ProcessUserCommandAddResp{}
	mi := &file_user_proto_msgTypes[7]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ProcessUserCommandAddResp) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProcessUserCommandAddResp) ProtoMessage() {}

func (x *ProcessUserCommandAddResp) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[7]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProcessUserCommandAddResp.ProtoReflect.Descriptor instead.
func (*ProcessUserCommandAddResp) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{7}
}

type ProcessUserCommandDeleteReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserID string `protobuf:"bytes,1,opt,name=userID,proto3" json:"userID,omitempty"`
	Type   int32  `protobuf:"varint,2,opt,name=type,proto3" json:"type,omitempty"`
	Uuid   string `protobuf:"bytes,3,opt,name=uuid,proto3" json:"uuid,omitempty"`
}

func (x *ProcessUserCommandDeleteReq) Reset() {
	*x = ProcessUserCommandDeleteReq{}
	mi := &file_user_proto_msgTypes[8]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ProcessUserCommandDeleteReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProcessUserCommandDeleteReq) ProtoMessage() {}

func (x *ProcessUserCommandDeleteReq) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[8]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProcessUserCommandDeleteReq.ProtoReflect.Descriptor instead.
func (*ProcessUserCommandDeleteReq) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{8}
}

func (x *ProcessUserCommandDeleteReq) GetUserID() string {
	if x != nil {
		return x.UserID
	}
	return ""
}

func (x *ProcessUserCommandDeleteReq) GetType() int32 {
	if x != nil {
		return x.Type
	}
	return 0
}

func (x *ProcessUserCommandDeleteReq) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

type ProcessUserCommandDeleteResp struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ProcessUserCommandDeleteResp) Reset() {
	*x = ProcessUserCommandDeleteResp{}
	mi := &file_user_proto_msgTypes[9]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ProcessUserCommandDeleteResp) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProcessUserCommandDeleteResp) ProtoMessage() {}

func (x *ProcessUserCommandDeleteResp) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[9]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProcessUserCommandDeleteResp.ProtoReflect.Descriptor instead.
func (*ProcessUserCommandDeleteResp) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{9}
}

type ProcessUserCommandUpdateReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserID string  `protobuf:"bytes,1,opt,name=userID,proto3" json:"userID,omitempty"`
	Type   int32   `protobuf:"varint,2,opt,name=type,proto3" json:"type,omitempty"`
	Uuid   string  `protobuf:"bytes,3,opt,name=uuid,proto3" json:"uuid,omitempty"`
	Value  *string `protobuf:"bytes,4,opt,name=value,proto3,oneof" json:"value,omitempty"`
	Ex     *string `protobuf:"bytes,5,opt,name=ex,proto3,oneof" json:"ex,omitempty"`
}

func (x *ProcessUserCommandUpdateReq) Reset() {
	*x = ProcessUserCommandUpdateReq{}
	mi := &file_user_proto_msgTypes[10]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ProcessUserCommandUpdateReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProcessUserCommandUpdateReq) ProtoMessage() {}

func (x *ProcessUserCommandUpdateReq) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[10]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProcessUserCommandUpdateReq.ProtoReflect.Descriptor instead.
func (*ProcessUserCommandUpdateReq) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{10}
}

func (x *ProcessUserCommandUpdateReq) GetUserID() string {
	if x != nil {
		return x.UserID
	}
	return ""
}

func (x *ProcessUserCommandUpdateReq) GetType() int32 {
	if x != nil {
		return x.Type
	}
	return 0
}

func (x *ProcessUserCommandUpdateReq) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *ProcessUserCommandUpdateReq) GetValue() string {
	if x != nil && x.Value != nil {
		return *x.Value
	}
	return ""
}

func (x *ProcessUserCommandUpdateReq) GetEx() string {
	if x != nil && x.Ex != nil {
		return *x.Ex
	}
	return ""
}

type ProcessUserCommandUpdateResp struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ProcessUserCommandUpdateResp) Reset() {
	*x = ProcessUserCommandUpdateResp{}
	mi := &file_user_proto_msgTypes[11]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ProcessUserCommandUpdateResp) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProcessUserCommandUpdateResp) ProtoMessage() {}

func (x *ProcessUserCommandUpdateResp) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[11]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProcessUserCommandUpdateResp.ProtoReflect.Descriptor instead.
func (*ProcessUserCommandUpdateResp) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{11}
}

type ProcessUserCommandGetAllReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ProcessUserCommandGetAllReq) Reset() {
	*x = ProcessUserCommandGetAllReq{}
	mi := &file_user_proto_msgTypes[12]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ProcessUserCommandGetAllReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProcessUserCommandGetAllReq) ProtoMessage() {}

func (x *ProcessUserCommandGetAllReq) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[12]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProcessUserCommandGetAllReq.ProtoReflect.Descriptor instead.
func (*ProcessUserCommandGetAllReq) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{12}
}

type ProcessUserCommandGetAllResp struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Commands []*CommandInfo `protobuf:"bytes,1,rep,name=commands,proto3" json:"commands,omitempty"`
}

func (x *ProcessUserCommandGetAllResp) Reset() {
	*x = ProcessUserCommandGetAllResp{}
	mi := &file_user_proto_msgTypes[13]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ProcessUserCommandGetAllResp) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProcessUserCommandGetAllResp) ProtoMessage() {}

func (x *ProcessUserCommandGetAllResp) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[13]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProcessUserCommandGetAllResp.ProtoReflect.Descriptor instead.
func (*ProcessUserCommandGetAllResp) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{13}
}

func (x *ProcessUserCommandGetAllResp) GetCommands() []*CommandInfo {
	if x != nil {
		return x.Commands
	}
	return nil
}

type GetUsersInfoReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserIDs []string `protobuf:"bytes,1,rep,name=userIDs,proto3" json:"userIDs,omitempty"`
}

func (x *GetUsersInfoReq) Reset() {
	*x = GetUsersInfoReq{}
	mi := &file_user_proto_msgTypes[14]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetUsersInfoReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetUsersInfoReq) ProtoMessage() {}

func (x *GetUsersInfoReq) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[14]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetUsersInfoReq.ProtoReflect.Descriptor instead.
func (*GetUsersInfoReq) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{14}
}

func (x *GetUsersInfoReq) GetUserIDs() []string {
	if x != nil {
		return x.UserIDs
	}
	return nil
}

type GetUsersInfoResp struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Users []*UserInfo `protobuf:"bytes,1,rep,name=users,proto3" json:"users,omitempty"`
}

func (x *GetUsersInfoResp) Reset() {
	*x = GetUsersInfoResp{}
	mi := &file_user_proto_msgTypes[15]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetUsersInfoResp) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetUsersInfoResp) ProtoMessage() {}

func (x *GetUsersInfoResp) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[15]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetUsersInfoResp.ProtoReflect.Descriptor instead.
func (*GetUsersInfoResp) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{15}
}

func (x *GetUsersInfoResp) GetUsers() []*UserInfo {
	if x != nil {
		return x.Users
	}
	return nil
}

type GetUsersInfoFromServerReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserIDs []string `protobuf:"bytes,1,rep,name=userIDs,proto3" json:"userIDs,omitempty"`
}

func (x *GetUsersInfoFromServerReq) Reset() {
	*x = GetUsersInfoFromServerReq{}
	mi := &file_user_proto_msgTypes[16]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetUsersInfoFromServerReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetUsersInfoFromServerReq) ProtoMessage() {}

func (x *GetUsersInfoFromServerReq) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[16]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetUsersInfoFromServerReq.ProtoReflect.Descriptor instead.
func (*GetUsersInfoFromServerReq) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{16}
}

func (x *GetUsersInfoFromServerReq) GetUserIDs() []string {
	if x != nil {
		return x.UserIDs
	}
	return nil
}

type GetUsersInfoFromServerResp struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Users []*UserInfo `protobuf:"bytes,1,rep,name=users,proto3" json:"users,omitempty"`
}

func (x *GetUsersInfoFromServerResp) Reset() {
	*x = GetUsersInfoFromServerResp{}
	mi := &file_user_proto_msgTypes[17]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetUsersInfoFromServerResp) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetUsersInfoFromServerResp) ProtoMessage() {}

func (x *GetUsersInfoFromServerResp) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[17]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetUsersInfoFromServerResp.ProtoReflect.Descriptor instead.
func (*GetUsersInfoFromServerResp) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{17}
}

func (x *GetUsersInfoFromServerResp) GetUsers() []*UserInfo {
	if x != nil {
		return x.Users
	}
	return nil
}

var File_user_proto protoreflect.FileDescriptor

var file_user_proto_rawDesc = []byte{
	0x0a, 0x0a, 0x75, 0x73, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0f, 0x6f, 0x70,
	0x65, 0x6e, 0x69, 0x6d, 0x2e, 0x73, 0x64, 0x6b, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x22, 0xf8, 0x01,
	0x0a, 0x08, 0x55, 0x73, 0x65, 0x72, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x16, 0x0a, 0x06, 0x75, 0x73,
	0x65, 0x72, 0x49, 0x44, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72,
	0x49, 0x44, 0x12, 0x1a, 0x0a, 0x08, 0x6e, 0x69, 0x63, 0x6b, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x6e, 0x69, 0x63, 0x6b, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x18,
	0x0a, 0x07, 0x66, 0x61, 0x63, 0x65, 0x55, 0x52, 0x4c, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x07, 0x66, 0x61, 0x63, 0x65, 0x55, 0x52, 0x4c, 0x12, 0x0e, 0x0a, 0x02, 0x65, 0x78, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x65, 0x78, 0x12, 0x1e, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0a, 0x63, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x26, 0x0a, 0x0e, 0x61, 0x70, 0x70, 0x4d,
	0x61, 0x6e, 0x67, 0x65, 0x72, 0x4c, 0x65, 0x76, 0x65, 0x6c, 0x18, 0x06, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x0e, 0x61, 0x70, 0x70, 0x4d, 0x61, 0x6e, 0x67, 0x65, 0x72, 0x4c, 0x65, 0x76, 0x65, 0x6c,
	0x12, 0x2a, 0x0a, 0x10, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x52, 0x65, 0x63, 0x76, 0x4d, 0x73,
	0x67, 0x4f, 0x70, 0x74, 0x18, 0x07, 0x20, 0x01, 0x28, 0x05, 0x52, 0x10, 0x67, 0x6c, 0x6f, 0x62,
	0x61, 0x6c, 0x52, 0x65, 0x63, 0x76, 0x4d, 0x73, 0x67, 0x4f, 0x70, 0x74, 0x12, 0x1a, 0x0a, 0x08,
	0x61, 0x74, 0x74, 0x61, 0x63, 0x68, 0x65, 0x64, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08,
	0x61, 0x74, 0x74, 0x61, 0x63, 0x68, 0x65, 0x64, 0x22, 0x93, 0x01, 0x0a, 0x0b, 0x43, 0x6f, 0x6d,
	0x6d, 0x61, 0x6e, 0x64, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x16, 0x0a, 0x06, 0x75, 0x73, 0x65, 0x72,
	0x49, 0x44, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x44,
	0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04,
	0x74, 0x79, 0x70, 0x65, 0x12, 0x1e, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x69,
	0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x54, 0x69, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75,
	0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x0e,
	0x0a, 0x02, 0x65, 0x78, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x65, 0x78, 0x22, 0x14,
	0x0a, 0x12, 0x47, 0x65, 0x74, 0x53, 0x65, 0x6c, 0x66, 0x55, 0x73, 0x65, 0x72, 0x49, 0x6e, 0x66,
	0x6f, 0x52, 0x65, 0x71, 0x22, 0x44, 0x0a, 0x13, 0x47, 0x65, 0x74, 0x53, 0x65, 0x6c, 0x66, 0x55,
	0x73, 0x65, 0x72, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x12, 0x2d, 0x0a, 0x04, 0x75,
	0x73, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x6f, 0x70, 0x65, 0x6e,
	0x69, 0x6d, 0x2e, 0x73, 0x64, 0x6b, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72,
	0x49, 0x6e, 0x66, 0x6f, 0x52, 0x04, 0x75, 0x73, 0x65, 0x72, 0x22, 0xe3, 0x01, 0x0a, 0x0e, 0x53,
	0x65, 0x74, 0x53, 0x65, 0x6c, 0x66, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x71, 0x12, 0x16, 0x0a,
	0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x44, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75,
	0x73, 0x65, 0x72, 0x49, 0x44, 0x12, 0x1f, 0x0a, 0x08, 0x6e, 0x69, 0x63, 0x6b, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x08, 0x6e, 0x69, 0x63, 0x6b, 0x6e,
	0x61, 0x6d, 0x65, 0x88, 0x01, 0x01, 0x12, 0x1d, 0x0a, 0x07, 0x66, 0x61, 0x63, 0x65, 0x55, 0x52,
	0x4c, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x07, 0x66, 0x61, 0x63, 0x65, 0x55,
	0x52, 0x4c, 0x88, 0x01, 0x01, 0x12, 0x13, 0x0a, 0x02, 0x65, 0x78, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x09, 0x48, 0x02, 0x52, 0x02, 0x65, 0x78, 0x88, 0x01, 0x01, 0x12, 0x2f, 0x0a, 0x10, 0x67, 0x6c,
	0x6f, 0x62, 0x61, 0x6c, 0x52, 0x65, 0x63, 0x76, 0x4d, 0x73, 0x67, 0x4f, 0x70, 0x74, 0x18, 0x07,
	0x20, 0x01, 0x28, 0x05, 0x48, 0x03, 0x52, 0x10, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x52, 0x65,
	0x63, 0x76, 0x4d, 0x73, 0x67, 0x4f, 0x70, 0x74, 0x88, 0x01, 0x01, 0x42, 0x0b, 0x0a, 0x09, 0x5f,
	0x6e, 0x69, 0x63, 0x6b, 0x6e, 0x61, 0x6d, 0x65, 0x42, 0x0a, 0x0a, 0x08, 0x5f, 0x66, 0x61, 0x63,
	0x65, 0x55, 0x52, 0x4c, 0x42, 0x05, 0x0a, 0x03, 0x5f, 0x65, 0x78, 0x42, 0x13, 0x0a, 0x11, 0x5f,
	0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x52, 0x65, 0x63, 0x76, 0x4d, 0x73, 0x67, 0x4f, 0x70, 0x74,
	0x22, 0x11, 0x0a, 0x0f, 0x53, 0x65, 0x74, 0x53, 0x65, 0x6c, 0x66, 0x49, 0x6e, 0x66, 0x6f, 0x52,
	0x65, 0x73, 0x70, 0x22, 0x9b, 0x01, 0x0a, 0x18, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x55,
	0x73, 0x65, 0x72, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x41, 0x64, 0x64, 0x52, 0x65, 0x71,
	0x12, 0x16, 0x0a, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x44, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x44, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x12, 0x0a, 0x04,
	0x75, 0x75, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64,
	0x12, 0x19, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x48,
	0x00, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x88, 0x01, 0x01, 0x12, 0x13, 0x0a, 0x02, 0x65,
	0x78, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x02, 0x65, 0x78, 0x88, 0x01, 0x01,
	0x42, 0x08, 0x0a, 0x06, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x42, 0x05, 0x0a, 0x03, 0x5f, 0x65,
	0x78, 0x22, 0x1b, 0x0a, 0x19, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x55, 0x73, 0x65, 0x72,
	0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x41, 0x64, 0x64, 0x52, 0x65, 0x73, 0x70, 0x22, 0x5d,
	0x0a, 0x1b, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x55, 0x73, 0x65, 0x72, 0x43, 0x6f, 0x6d,
	0x6d, 0x61, 0x6e, 0x64, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x71, 0x12, 0x16, 0x0a,
	0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x44, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75,
	0x73, 0x65, 0x72, 0x49, 0x44, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69,
	0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x22, 0x1e, 0x0a,
	0x1c, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x55, 0x73, 0x65, 0x72, 0x43, 0x6f, 0x6d, 0x6d,
	0x61, 0x6e, 0x64, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x22, 0x9e, 0x01,
	0x0a, 0x1b, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x55, 0x73, 0x65, 0x72, 0x43, 0x6f, 0x6d,
	0x6d, 0x61, 0x6e, 0x64, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x12, 0x16, 0x0a,
	0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x44, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75,
	0x73, 0x65, 0x72, 0x49, 0x44, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69,
	0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12, 0x19, 0x0a,
	0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x05,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x88, 0x01, 0x01, 0x12, 0x13, 0x0a, 0x02, 0x65, 0x78, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x02, 0x65, 0x78, 0x88, 0x01, 0x01, 0x42, 0x08, 0x0a,
	0x06, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x42, 0x05, 0x0a, 0x03, 0x5f, 0x65, 0x78, 0x22, 0x1e,
	0x0a, 0x1c, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x55, 0x73, 0x65, 0x72, 0x43, 0x6f, 0x6d,
	0x6d, 0x61, 0x6e, 0x64, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x22, 0x1d,
	0x0a, 0x1b, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x55, 0x73, 0x65, 0x72, 0x43, 0x6f, 0x6d,
	0x6d, 0x61, 0x6e, 0x64, 0x47, 0x65, 0x74, 0x41, 0x6c, 0x6c, 0x52, 0x65, 0x71, 0x22, 0x58, 0x0a,
	0x1c, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x55, 0x73, 0x65, 0x72, 0x43, 0x6f, 0x6d, 0x6d,
	0x61, 0x6e, 0x64, 0x47, 0x65, 0x74, 0x41, 0x6c, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x12, 0x38, 0x0a,
	0x08, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x1c, 0x2e, 0x6f, 0x70, 0x65, 0x6e, 0x69, 0x6d, 0x2e, 0x73, 0x64, 0x6b, 0x2e, 0x75, 0x73, 0x65,
	0x72, 0x2e, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x08, 0x63,
	0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x73, 0x22, 0x2b, 0x0a, 0x0f, 0x47, 0x65, 0x74, 0x55, 0x73,
	0x65, 0x72, 0x73, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x71, 0x12, 0x18, 0x0a, 0x07, 0x75, 0x73,
	0x65, 0x72, 0x49, 0x44, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x09, 0x52, 0x07, 0x75, 0x73, 0x65,
	0x72, 0x49, 0x44, 0x73, 0x22, 0x43, 0x0a, 0x10, 0x47, 0x65, 0x74, 0x55, 0x73, 0x65, 0x72, 0x73,
	0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x12, 0x2f, 0x0a, 0x05, 0x75, 0x73, 0x65, 0x72,
	0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x6f, 0x70, 0x65, 0x6e, 0x69, 0x6d,
	0x2e, 0x73, 0x64, 0x6b, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x49, 0x6e,
	0x66, 0x6f, 0x52, 0x05, 0x75, 0x73, 0x65, 0x72, 0x73, 0x22, 0x35, 0x0a, 0x19, 0x47, 0x65, 0x74,
	0x55, 0x73, 0x65, 0x72, 0x73, 0x49, 0x6e, 0x66, 0x6f, 0x46, 0x72, 0x6f, 0x6d, 0x53, 0x65, 0x72,
	0x76, 0x65, 0x72, 0x52, 0x65, 0x71, 0x12, 0x18, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72, 0x49, 0x44,
	0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x09, 0x52, 0x07, 0x75, 0x73, 0x65, 0x72, 0x49, 0x44, 0x73,
	0x22, 0x4d, 0x0a, 0x1a, 0x47, 0x65, 0x74, 0x55, 0x73, 0x65, 0x72, 0x73, 0x49, 0x6e, 0x66, 0x6f,
	0x46, 0x72, 0x6f, 0x6d, 0x53, 0x65, 0x72, 0x76, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x12, 0x2f,
	0x0a, 0x05, 0x75, 0x73, 0x65, 0x72, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x19, 0x2e,
	0x6f, 0x70, 0x65, 0x6e, 0x69, 0x6d, 0x2e, 0x73, 0x64, 0x6b, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x2e,
	0x55, 0x73, 0x65, 0x72, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x05, 0x75, 0x73, 0x65, 0x72, 0x73, 0x42,
	0x40, 0x5a, 0x35, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6f, 0x70,
	0x65, 0x6e, 0x69, 0x6d, 0x73, 0x64, 0x6b, 0x2f, 0x6f, 0x70, 0x65, 0x6e, 0x69, 0x6d, 0x2d, 0x73,
	0x64, 0x6b, 0x2d, 0x63, 0x6f, 0x72, 0x65, 0x2f, 0x76, 0x33, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x2f, 0x67, 0x6f, 0x2f, 0x75, 0x73, 0x65, 0x72, 0xaa, 0x02, 0x06, 0x4f, 0x70, 0x65, 0x6e, 0x49,
	0x4d, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_user_proto_rawDescOnce sync.Once
	file_user_proto_rawDescData = file_user_proto_rawDesc
)

func file_user_proto_rawDescGZIP() []byte {
	file_user_proto_rawDescOnce.Do(func() {
		file_user_proto_rawDescData = protoimpl.X.CompressGZIP(file_user_proto_rawDescData)
	})
	return file_user_proto_rawDescData
}

var file_user_proto_msgTypes = make([]protoimpl.MessageInfo, 18)
var file_user_proto_goTypes = []any{
	(*UserInfo)(nil),                     // 0: openim.sdk.user.UserInfo
	(*CommandInfo)(nil),                  // 1: openim.sdk.user.CommandInfo
	(*GetSelfUserInfoReq)(nil),           // 2: openim.sdk.user.GetSelfUserInfoReq
	(*GetSelfUserInfoResp)(nil),          // 3: openim.sdk.user.GetSelfUserInfoResp
	(*SetSelfInfoReq)(nil),               // 4: openim.sdk.user.SetSelfInfoReq
	(*SetSelfInfoResp)(nil),              // 5: openim.sdk.user.SetSelfInfoResp
	(*ProcessUserCommandAddReq)(nil),     // 6: openim.sdk.user.ProcessUserCommandAddReq
	(*ProcessUserCommandAddResp)(nil),    // 7: openim.sdk.user.ProcessUserCommandAddResp
	(*ProcessUserCommandDeleteReq)(nil),  // 8: openim.sdk.user.ProcessUserCommandDeleteReq
	(*ProcessUserCommandDeleteResp)(nil), // 9: openim.sdk.user.ProcessUserCommandDeleteResp
	(*ProcessUserCommandUpdateReq)(nil),  // 10: openim.sdk.user.ProcessUserCommandUpdateReq
	(*ProcessUserCommandUpdateResp)(nil), // 11: openim.sdk.user.ProcessUserCommandUpdateResp
	(*ProcessUserCommandGetAllReq)(nil),  // 12: openim.sdk.user.ProcessUserCommandGetAllReq
	(*ProcessUserCommandGetAllResp)(nil), // 13: openim.sdk.user.ProcessUserCommandGetAllResp
	(*GetUsersInfoReq)(nil),              // 14: openim.sdk.user.GetUsersInfoReq
	(*GetUsersInfoResp)(nil),             // 15: openim.sdk.user.GetUsersInfoResp
	(*GetUsersInfoFromServerReq)(nil),    // 16: openim.sdk.user.GetUsersInfoFromServerReq
	(*GetUsersInfoFromServerResp)(nil),   // 17: openim.sdk.user.GetUsersInfoFromServerResp
}
var file_user_proto_depIdxs = []int32{
	0, // 0: openim.sdk.user.GetSelfUserInfoResp.user:type_name -> openim.sdk.user.UserInfo
	1, // 1: openim.sdk.user.ProcessUserCommandGetAllResp.commands:type_name -> openim.sdk.user.CommandInfo
	0, // 2: openim.sdk.user.GetUsersInfoResp.users:type_name -> openim.sdk.user.UserInfo
	0, // 3: openim.sdk.user.GetUsersInfoFromServerResp.users:type_name -> openim.sdk.user.UserInfo
	4, // [4:4] is the sub-list for method output_type
	4, // [4:4] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_user_proto_init() }
func file_user_proto_init() {
	if File_user_proto != nil {
		return
	}
	file_user_proto_msgTypes[4].OneofWrappers = []any{}
	file_user_proto_msgTypes[6].OneofWrappers = []any{}
	file_user_proto_msgTypes[10].OneofWrappers = []any{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_user_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   18,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_user_proto_goTypes,
		DependencyIndexes: file_user_proto_depIdxs,
		MessageInfos:      file_user_proto_msgTypes,
	}.Build()
	File_user_proto = out.File
	file_user_proto_rawDesc = nil
	file_user_proto_goTypes = nil
	file_user_proto_depIdxs = nil
}
