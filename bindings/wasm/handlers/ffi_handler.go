//go:build js && wasm
// +build js,wasm

package handlers

import (
	"fmt"
	"syscall/js"

	"github.com/openimsdk/openim-sdk-core/v3/bindings/base"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
)

var eventCallBack js.Value
var reqCallBack js.Value

func init() {
	base.SetDispatchFfiResultFunc(dispatchFfiResultForWasm)
	base.SetSendFfiRequestFunc(sendRequestToJs)
}

func dispatchFfiResultForWasm(_ uint64, data []byte) {
	if eventCallBack.Type() == js.TypeFunction {
		eventCallBack.Invoke(JSUint8ArrayFromGoBytes(data))
	}
}

func sendRequestToJs(_ uint64, data []byte) ([]byte, error) {
	if reqCallBack.Type() == js.TypeFunction {
		resp := reqCallBack.Invoke(JSUint8ArrayFromGoBytes(data))
		if resp.InstanceOf(js.Global().Get("Uint8Array")) {
			length := resp.Get("length").Int()
			if length == 0 {
				fmt.Println("The Uint8Array is empty.")
				return nil, sdkerrs.ErrInternal.WrapMsg("The Uint8Array is empty.")
			} else {
				return GoBytesFromJSUint8Array(resp), nil
			}
		} else {
			return nil, sdkerrs.ErrInternal.WrapMsg("The returned value is not a Uint8Array.")
		}
	}
	return nil, sdkerrs.ErrInternal.WrapMsg("eventCallBack set error from javascript")
}

func FfiRequest(_ js.Value, args []js.Value) any {
	if len(args) > 0 {
		//Ensure the first argument passed from JavaScript is a Uint8Array;
		//otherwise, the process will crash.
		return js.ValueOf(base.FfiRequest(GoBytesFromJSUint8Array(args[0])))
	} else {
		return js.ValueOf(-1)
	}
}
func FfiInit(_ js.Value, args []js.Value) any {
	if len(args) != 2 {
		return js.ValueOf(-1)
	}

	assignCallback := func(arg js.Value, target *js.Value) bool {
		if arg.Type() == js.TypeFunction {
			*target = arg
			return true
		}
		return false
	}

	var handleID uint64 = 0
	if assignCallback(args[0], &eventCallBack) && assignCallback(args[1], &reqCallBack) {
		handleID = base.GenerateHandleID()
	}
	return js.ValueOf(handleID)
}

// GoBytesFromJSUint8Array extracts a Go byte slice from a JavaScript Uint8Array.
// This function copies the data from JavaScript to Go.
func GoBytesFromJSUint8Array(jsUint8Array js.Value) []byte {
	// Create a Go byte slice with the same length as the JavaScript Uint8Array
	dst := make([]byte, jsUint8Array.Length())
	// Copy data from JavaScript Uint8Array to the Go byte slice
	js.CopyBytesToGo(dst, jsUint8Array)
	return dst
}

// JSUint8ArrayFromGoBytes creates a JavaScript Uint8Array from a Go byte slice.
// This function copies the data from Go to JavaScript.
func JSUint8ArrayFromGoBytes(data []byte) js.Value {
	// Create a new Uint8Array in JavaScript with the same length as the Go byte slice
	uint8Array := js.Global().Get("Uint8Array").New(len(data))
	// Copy data from Go byte slice to JavaScript Uint8Array
	js.CopyBytesToJS(uint8Array, data)
	return uint8Array
}
