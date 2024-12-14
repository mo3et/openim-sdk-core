//go:build js && wasm

package handlers

import (
	"context"
	"syscall/js"

	"github.com/openimsdk/openim-sdk-core/v3/bindings/base"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	"github.com/openimsdk/tools/log"
)

var (
	eventCallBack js.Value
	reqCallBack   js.Value
)

func init() {
	base.SetDispatchFfiResultFunc(dispatchFfiResultForWasm)
	base.SetSendFfiRequestFunc(sendRequestToJs)
}

func dispatchFfiResultForWasm(_ uint64, data []byte) {
	if eventCallBack.Type() == js.TypeFunction {
		eventCallBack.Invoke(JSUint8ArrayFromGoBytes(data))
	}
}

func sendRequestToJs(ctx context.Context, _ uint64, data []byte) ([]byte, error) {
	if reqCallBack.Type() != js.TypeFunction {
		return nil, sdkerrs.ErrInternal.WrapMsg("eventCallBack set error from javascript")
	}
	var ok bool
	dataChannel := make(chan []js.Value, 1)
	thenFunc := js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		ok = true
		dataChannel <- args
		return nil
	})
	defer thenFunc.Release()
	catchFunc := js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		dataChannel <- args
		return nil
	})
	defer catchFunc.Release()
	reqCallBack.Invoke(JSUint8ArrayFromGoBytes(data)).Call("then", thenFunc).Call("catch", catchFunc)
	select {
	case <-ctx.Done():
		return nil, context.Cause(ctx)
	case result := <-dataChannel:
		if len(result) == 0 {
			return nil, sdkerrs.ErrInternal.WrapMsg("The Js returned value is empty.")
		}
		resp := result[0]
		if !ok {
			if !resp.InstanceOf(js.Global().Get("Error")) {
				return nil, sdkerrs.ErrInternal.WrapMsg("The Js returned err is not the Error.")
			}
			return nil, js.Error{Value: resp}
		} else {
			if !resp.InstanceOf(js.Global().Get("Uint8Array")) {
				return nil, sdkerrs.ErrInternal.WrapMsg("The returned value is not a Uint8Array.")
			}
			length := resp.Get("length").Int()
			if length == 0 {
				return nil, sdkerrs.ErrInternal.WrapMsg("The Uint8Array is empty.")
			}
			log.ZDebug(ctx, "sendRequestToJs", "length", resp.Length())
			return GoBytesFromJSUint8Array(resp), nil
		}
	}
}

func FfiRequest(_ js.Value, args []js.Value) any {
	if len(args) == 0 {
		return js.ValueOf(-1)
	}
	//Ensure the first argument passed from JavaScript is a Uint8Array;
	//otherwise, the process will crash.
	base.FfiRequest(GoBytesFromJSUint8Array(args[0]))
	return js.ValueOf(1)
}
func FfiInit(_ js.Value, args []js.Value) any {
	if len(args) != 3 {
		return js.ValueOf(-1)
	}

	assignCallback := func(arg js.Value, target *js.Value) bool {
		if arg.Type() == js.TypeFunction {
			*target = arg
			return true
		}
		return false
	}
	base.SetProtocolType(args[2].Int())
	if assignCallback(args[0], &eventCallBack) && assignCallback(args[1], &reqCallBack) {
		return 1
	}
	return -1
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
