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

//go:build js && wasm
// +build js,wasm

package main

import (
	"fmt"
	"runtime"
	"runtime/debug"

	"syscall/js"

	"github.com/openimsdk/openim-sdk-core/v3/bindings/wasm/handlers"
)

func main() {
	defer func() {
		if r := recover(); r != nil {
			fmt.Println("MAIN", "panic info is:", r, debug.Stack())
		}
	}()
	fmt.Println("runtime env", runtime.GOARCH, runtime.GOOS)
	registerFunc()
	<-make(chan bool)
}

func registerFunc() {
	js.Global().Set("ffiInit", js.FuncOf(handlers.FfiInit))
	js.Global().Set("ffiRequest", js.FuncOf(handlers.FfiRequest))
}

// General error codes.
const (
	NoError                  = 0
	DatabaseError            = 90002
	NetworkError             = 90004
	DataError                = 90007
	CallbackError            = 80000
	ServerInternalError      = 500
	ArgsError                = 1001
	NoPermissionError        = 1002
	DuplicateKeyError        = 1003
	RecordNotFoundError      = 1004
	UserIDNotFoundError      = 1101
	RegisteredAlreadyError   = 1102
	GroupIDNotFoundError     = 1201
	GroupIDExisted           = 1202
	NotInGroupYetError       = 1203
	DismissedAlreadyError    = 1204
	GroupTypeNotSupport      = 1205
	GroupRequestHandled      = 1206
	CanNotAddYourselfError   = 1301
	BlockedByPeer            = 1302
	NotPeersFriend           = 1303
	RelationshipAlreadyError = 1304
	MessageHasReadDisable    = 1401
	MutedInGroup             = 1402
	MutedGroup               = 1403
	MsgAlreadyRevoke         = 1404
	TokenExpiredError        = 1501
	TokenInvalidError        = 1502
	TokenMalformedError      = 1503
	TokenNotValidYetError    = 1504
	TokenUnknownError        = 1505
	TokenKickedError         = 1506
	TokenNotExistError       = 1507
	ConnOverMaxNumLimit      = 1601
	ConnArgsErr              = 1602
	PushMsgErr               = 1603
	IOSBackgroundPushErr     = 1604
	FileUploadedExpiredError = 1701
)
