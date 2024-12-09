package main

/*
#cgo LDFLAGS: -L. -llibopenimsdk
#include "libopenimsdk.h"
#include <stdlib.h>
#include <stdint.h>

extern void callback(void* dataPtr, int len);

*/
import "C"

import (
	"encoding/json"
	"fmt"
	"sync/atomic"
	"time"
	"unsafe"

	"google.golang.org/protobuf/proto"

	commonpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	converationpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/conversation"
	eventpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
	ffipb "github.com/openimsdk/openim-sdk-core/v3/proto/go/ffi"
	initpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/init"
)

var handleCounter atomic.Uint64

//export callback
func callback(dataPtr unsafe.Pointer, len C.int) {
	// Convert the C data pointer to a Go byte slice
	goData := C.GoBytes(dataPtr, len)

	// Unmarshal the Protobuf data
	var response ffipb.FfiResult
	err := proto.Unmarshal(goData, &response)
	if err != nil {
		fmt.Println("Failed to unmarshal received data:", err)
		return
	}
	switch response.FuncName {
	case eventpb.FuncRequestEventName_InitSDK:
		var res initpb.InitSDKResp
		err := proto.Unmarshal(response.Data, &res)
		if err != nil {
			fmt.Println("Failed to unmarshal InitSDKResp:", err)
			return
		}
		fmt.Printf("Received InitSDKResp: %s\n", res.String())
		C.ffi_drop_handle(C.ulonglong(response.HandleID))
		fmt.Println("Handle dropped successfully request", response.HandleID)

	case eventpb.FuncRequestEventName_Login:
		var res initpb.LoginResp
		err := proto.Unmarshal(response.Data, &res)
		if err != nil {
			fmt.Println("Failed to unmarshal LoginResp:", err)
			return
		}
		fmt.Printf("Received LoginResp: %+v\n", res.String())
		C.ffi_drop_handle(C.ulonglong(response.HandleID))
		fmt.Println("Handle dropped successfully request", response.HandleID)
	case eventpb.FuncRequestEventName_GetAllConversationList:
		var res converationpb.GetAllConversationListResp
		err := proto.Unmarshal(response.Data, &res)
		if err != nil {
			fmt.Println("Failed to unmarshal GetAllConversationListResp:", err)
			return
		}
		fmt.Printf("Received GetAllConversationListResp: %+v\n", res.String())
		C.ffi_drop_handle(C.ulonglong(response.HandleID))
		fmt.Println("Handle dropped successfully request", response.HandleID)
	default:
		fmt.Printf("Received response: %s\n", response.String())

	}

	// Print the unmarshaled response
	fmt.Printf("Received response: %s\n", response.String())
}
func GenerateHandleID() uint64 {
	return handleCounter.Add(1)
}

func main() {
	// Set the callback and call ffi_init_c
	callback := C.CallBack(C.callback)
	handleID := C.ffi_init(callback, 1)
	fmt.Printf("Initialized handle ID: %d\n", handleID)

	// Marshal the request data
	data, err := json.Marshal(&initpb.InitSDKReq{
		Config: &initpb.IMConfig{
			AppFramework:        commonpb.AppFramework_Flutter,
			Platform:            2,
			ApiAddr:             "https://web.rentsoft.cn/api",
			WsAddr:              "wss://web.rentsoft.cn/msg_gateway",
			DataDir:             "./",
			LogLevel:            5,
			IsLogStandardOutput: true,
			LogFilePath:         "./",
		},
	})
	if err != nil {
		fmt.Println("GetAllConversationListReq proto.Marshal failed:", err)
		return
	}

	// Create and marshal the FfiRequest
	req := ffipb.FfiRequest{
		FuncName: eventpb.FuncRequestEventName_InitSDK,
		Data:     data,
		HandleID: GenerateHandleID(),
	}
	ffiReq, err := json.Marshal(&req)
	if err != nil {
		fmt.Println("FfiRequest proto.Marshal failed:", err)
		return
	}

	// Call ffi_request with sample data
	length := C.int(len(ffiReq))
	C.ffi_request(unsafe.Pointer(&ffiReq[0]), length)

	time.Sleep(time.Second * 1)

	//data, err = proto.Marshal(&initpb.LoginReq{
	//	UserID: "3325086438",
	//	Token:  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiIzMzI1MDg2NDM4IiwiUGxhdGZvcm1JRCI6MiwiZXhwIjoxNzM3NDQ5Nzg2LCJuYmYiOjE3Mjk2NzM0ODYsImlhdCI6MTcyOTY3Mzc4Nn0.obyGZDP3yFiTT7tYkkdEkhAjDtSJI-z9-17FUXXJcxY",
	//})
	//if err != nil {
	//	fmt.Println("GetAllConversationListReq proto.Marshal failed:", err)
	//	return
	//}
	//
	//// Create and marshal the FfiRequest
	//req = ffipb.FfiRequest{
	//	FuncName: eventpb.FuncRequestEventName_Login,
	//	Data:     data,
	//	HandleID: GenerateHandleID(),
	//}
	//ffiReq, err = proto.Marshal(&req)
	//if err != nil {
	//	fmt.Println("FfiRequest proto.Marshal failed:", err)
	//	return
	//}
	//
	//// Call ffi_request with sample data
	//length = C.int(len(ffiReq))
	//C.ffi_request(unsafe.Pointer(&ffiReq[0]), length)

	//
	//// Release the handle after use
	//C.ffi_drop_handle(handleID)
	//fmt.Println("Handle dropped successfully callback", handleID)

	// Keep the program running to allow callbacks to be received
	time.Sleep(time.Minute * 1)
}
