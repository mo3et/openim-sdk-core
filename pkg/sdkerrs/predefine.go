// Copyright © 2023 OpenIM SDK. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package sdkerrs

import (
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/error"
	"github.com/openimsdk/tools/errs"
)

//var (
//	// Common errors
//	ErrArgs            = errs.NewCodeError(ArgsError, "Invalid input arguments")
//	ErrCtxDeadline     = errs.NewCodeError(CtxDeadlineExceededError, "Context deadline exceeded")
//	ErrSdkInternal     = errs.NewCodeError(SdkInternalError, "Internal SDK error")
//	ErrSdkFuncNotFound = errs.NewCodeError(SdkFuncNotFoundError, "Function not found")
//	ErrSdkNotInit      = errs.NewCodeError(SdkNotInitError, "SDK not initialized")
//	ErrSdkNotLogin     = errs.NewCodeError(SdkNotLoginError, "User not logged in")
//	ErrNetwork         = errs.NewCodeError(NetworkError, "Network error")
//	ErrNetworkTimeOut  = errs.NewCodeError(NetworkTimeoutError, "Network timeout error")
//
//	ErrGroupIDNotFound = errs.NewCodeError(GroupIDNotFoundError, "Group ID not found")
//	ErrUserIDNotFound  = errs.NewCodeError(UserIDNotFoundError, "User ID not found")
//
//	ErrResourceLoad = errs.NewCodeError(ResourceLoadNotCompleteError, "Resource initialization incomplete")
//
//	// Message-related errors
//	ErrFileNotFound             = errs.NewCodeError(FileNotFoundError, "File not found")
//	ErrMsgDecodeBinaryWs        = errs.NewCodeError(MsgDecodeBinaryWsError, "Message binary WebSocket decoding failed")
//	ErrMsgDeCompression         = errs.NewCodeError(MsgDeCompressionError, "Message decompression failed")
//	ErrMsgBinaryTypeNotSupport  = errs.NewCodeError(MsgBinaryTypeNotSupportError, "Message type not supported")
//	ErrMsgRepeated              = errs.NewCodeError(MsgRepeatError, "Only failed messages can be resent")
//	ErrMsgContentTypeNotSupport = errs.NewCodeError(MsgContentTypeNotSupportError, "Message content type not supported")
//	ErrMsgHasNoSeq              = errs.NewCodeError(MsgHasNoSeqError, "Message has no sequence number")
//
//	// Conversation-related errors
//	ErrNotSupportOpt  = errs.NewCodeError(NotSupportOptError, "Operation not supported for supergroup")
//	ErrNotSupportType = errs.NewCodeError(NotSupportTypeError, "Only supergroup type supported")
//	ErrUnreadCount    = errs.NewCodeError(UnreadCountError, "Unread count is zero")
//
//	// Group-related errors
//	ErrGroupType = errs.NewCodeError(GroupTypeErr, "Invalid group type")
//
//	ErrLoginOut    = errs.NewCodeError(LoginOutError, "User has logged out")
//	ErrLoginRepeat = errs.NewCodeError(ArgsError, "User has logged in repeatedly")
//)

var (
	ErrNetwork                  = errs.NewCodeError(int(sdkpb.ErrorCode_SdkNetwork), "network error")
	ErrNetworkTimeout           = errs.NewCodeError(int(sdkpb.ErrorCode_SdkNetworkTimeout), "network timeout error")
	ErrArgs                     = errs.NewCodeError(int(sdkpb.ErrorCode_SdkArgs), "invalid input arguments")
	ErrCtxDeadlineExceeded      = errs.NewCodeError(int(sdkpb.ErrorCode_SdkCtxDeadlineExceeded), "context deadline exceeded")
	ErrResourceLoadNotComplete  = errs.NewCodeError(int(sdkpb.ErrorCode_SdkResourceLoadNotComplete), "resource initialization incomplete")
	ErrUnknownCode              = errs.NewCodeError(int(sdkpb.ErrorCode_SdkUnknownCode), "unknown error")
	ErrInternal                 = errs.NewCodeError(int(sdkpb.ErrorCode_SdkInternal), "internal sdk error")
	ErrFuncNotFound             = errs.NewCodeError(int(sdkpb.ErrorCode_SdkFuncNotFound), "function not found")
	ErrNotInit                  = errs.NewCodeError(int(sdkpb.ErrorCode_SdkNotInit), "sdk not initialized")
	ErrNotLogin                 = errs.NewCodeError(int(sdkpb.ErrorCode_SdkNotLogin), "user not logged in")
	ErrUserIDNotFound           = errs.NewCodeError(int(sdkpb.ErrorCode_SdkUserIDNotFound), "user id not found")
	ErrLoginOut                 = errs.NewCodeError(int(sdkpb.ErrorCode_SdkLoginOut), "user has logged out")
	ErrLoginRepeat              = errs.NewCodeError(int(sdkpb.ErrorCode_SdkLoginRepeat), "user has logged in repeatedly")
	ErrFileNotFound             = errs.NewCodeError(int(sdkpb.ErrorCode_SdkFileNotFound), "file not found")
	ErrMsgDeCompression         = errs.NewCodeError(int(sdkpb.ErrorCode_SdkMsgDeCompression), "message decompression failed")
	ErrMsgDecodeBinaryWs        = errs.NewCodeError(int(sdkpb.ErrorCode_SdkMsgDecodeBinaryWs), "message binary websocket decoding failed")
	ErrMsgBinaryTypeNotSupport  = errs.NewCodeError(int(sdkpb.ErrorCode_SdkMsgBinaryTypeNotSupport), "message type not supported")
	ErrMsgRepeat                = errs.NewCodeError(int(sdkpb.ErrorCode_SdkMsgRepeat), "only failed messages can be resent")
	ErrMsgContentTypeNotSupport = errs.NewCodeError(int(sdkpb.ErrorCode_SdkMsgContentTypeNotSupport), "message content type not supported")
	ErrMsgHasNoSeq              = errs.NewCodeError(int(sdkpb.ErrorCode_SdkMsgHasNoSeq), "message has no sequence number")
	ErrNotSupportOpt            = errs.NewCodeError(int(sdkpb.ErrorCode_SdkNotSupportOpt), "operation not supported for supergroup")
	ErrNotSupportType           = errs.NewCodeError(int(sdkpb.ErrorCode_SdkNotSupportType), "only supergroup type supported")
	ErrUnreadCount              = errs.NewCodeError(int(sdkpb.ErrorCode_SdkUnreadCount), "unread count is zero")
	ErrGroupIDNotFound          = errs.NewCodeError(int(sdkpb.ErrorCode_SdkGroupIDNotFound), "group id not found")
	ErrGroupType                = errs.NewCodeError(int(sdkpb.ErrorCode_SdkGroupType), "invalid group type")
)
