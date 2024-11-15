package main

/*
#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

typedef void (*CallBack)(void* dataPtr,int len);
extern CallBack eventCallBack;
extern void CallCallBack(CallBack cb,char* dataPtr,int dataLength);
*/
import "C"

import (
	"context"
	"fmt"
	"sync"
	"time"
	"unsafe"

	"github.com/openimsdk/openim-sdk-core/v3/bindings/base"
	"github.com/openimsdk/tools/log"
)

var (
	resultMap = make(map[uint64]*C.uint8_t)
	mu        sync.Mutex
)

const (
	checkTimePeriod = time.Minute * 1
)

func init() {
	base.SetDispatchFfiResult(dispatchResultForC)
	go monitorResultMapSize()
}

func dispatchResultForC(handleID uint64, data []byte) {
	cData := (*C.uint8_t)(C.malloc(C.size_t(len(data))))
	if cData == nil {
		fmt.Println("Failed to allocate memory")
		return
	}
	cDataPtr := (*[1 << 30]byte)(unsafe.Pointer(cData))[:len(data):len(data)]
	copy(cDataPtr, data)

	mu.Lock()
	fmt.Println("resp c data put into resultMap", handleID)
	resultMap[handleID] = cData
	mu.Unlock()
	if C.eventCallBack != nil {
		len := C.int(len(data))
		C.CallCallBack(C.eventCallBack, (*C.char)(unsafe.Pointer(cData)), len)
	}
}
func monitorResultMapSize() {
	ticker := time.NewTicker(checkTimePeriod)
	defer ticker.Stop()

	for range ticker.C {
		mu.Lock()
		totalBytes := 0
		for _, result := range resultMap {
			totalBytes += result.length // Use the actual length stored in ResultData
		}
		totalMB := float64(totalBytes) / (1024 * 1024)
		fmt.Printf("Current resultMap size: %.2f MB\n", totalMB)
		log.ZDebug(context.Background(), fmt.Sprintf("Current resultMap size: %.2f MB", totalMB))
		mu.Unlock()
	}
}

//export ffi_init
func ffi_init(event C.CallBack) uint64 {
	handleID := base.GenerateHandleID()
	C.eventCallBack = event
	return handleID
}

//export ffi_request
func ffi_request(data *C.void, length C.int) uint64 {
	//t := time.Now()
	//Synchronously copy data to prevent memory from being released prematurely after calling the Go function.
	goData := C.GoBytes(unsafe.Pointer(data), length)
	return base.FfiRequest(goData)
}

//export ffi_drop_handle
func ffi_drop_handle(handleID uint64) {
	mu.Lock()
	defer mu.Unlock()
	fmt.Println("ffi_drop_handle come here", handleID)
	if cData, ok := resultMap[handleID]; ok {
		fmt.Println("free resource", handleID)
		C.free(unsafe.Pointer(cData))
		delete(resultMap, handleID)
	} else {
		fmt.Println("can not find resource", handleID)
	}
}
