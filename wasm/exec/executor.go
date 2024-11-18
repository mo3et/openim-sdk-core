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

package exec

import (
	"context"
	"errors"
	"runtime"
	"syscall/js"
	"time"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/utils"
	"github.com/openimsdk/tools/errs"
	"github.com/openimsdk/tools/log"
)

type CallbackData struct {
	ErrCode int32  `json:"errCode"`
	ErrMsg  string `json:"errMsg"`
	Data    any    `json:"data"`
}

const TIMEOUT = 5
const JSNOTFOUND = 10002

var ErrType = errors.New("from javascript data type err")
var PrimaryKeyNull = errors.New("primary key is null err")

var ErrTimoutFromJavaScript = errors.New("invoke javascript timeout, maybe should check  function from javascript")
var jsErr = js.Global().Get("Error")

func Exec(args ...any) (output any, err error) {
	ctx := context.Background()
	defer func() {
		if r := recover(); r != nil {
			switch x := r.(type) {
			case string:
				err = errs.WrapMsg(errors.New(x), "")
			case error:
				err = x
			default:
				err = errs.WrapMsg(errors.New("unknown panic"), "")
			}
		}
	}()
	thenChannel := make(chan []js.Value)
	defer close(thenChannel)
	catchChannel := make(chan []js.Value)
	defer close(catchChannel)
	pc, _, _, _ := runtime.Caller(1)
	funcName := utils.CleanUpfuncName(runtime.FuncForPC(pc).Name())
	data := CallbackData{}
	thenFunc := js.FuncOf(func(this js.Value, args []js.Value) any {
		defer func() {
			if r := recover(); r != nil {
				switch x := r.(type) {
				case string:
					err = errs.WrapMsg(errors.New(x), "")
				case error:
					err = x
				default:
					err = errs.WrapMsg(errors.New("unknown panic"), "")
				}
			}
		}()
		log.ZDebug(ctx, "js then function", "=> (main go context) "+funcName+" "+
			"with response ", args[0].String())
		thenChannel <- args
		return nil
	})
	defer thenFunc.Release()
	catchFunc := js.FuncOf(func(this js.Value, args []js.Value) any {
		defer func() {
			if r := recover(); r != nil {
				switch x := r.(type) {
				case string:
					err = errs.WrapMsg(errors.New(x), "")
				case error:
					err = x
				default:
					err = errs.WrapMsg(errors.New("unknown panic"), "")
				}
			}
		}()
		log.ZDebug(ctx, "js catch function", "=> (main go context) "+funcName+" with respone ", args[0].String())
		catchChannel <- args
		return nil
	})
	defer catchFunc.Release()
	js.Global().Call(utils.FirstLower(funcName), args...).Call("then", thenFunc).Call("catch", catchFunc)
	select {
	case result := <-thenChannel:
		if len(result) > 0 {
			switch result[0].Type() {
			case js.TypeString:
				interErr := utils.JsonStringToStruct(result[0].String(), &data)
				if interErr != nil {
					err = errs.WrapMsg(err, "return json unmarshal err from javascript")
				}
			case js.TypeObject:
				return result[0], nil

			default:
				err = errors.New("unknown return type from javascript")
			}

		} else {
			err = errors.New("args err,length is 0")
		}

	case catch := <-catchChannel:
		if catch[0].InstanceOf(jsErr) {
			return nil, js.Error{Value: catch[0]}
		} else {
			panic("unknown javascript exception")
		}
	case <-time.After(TIMEOUT * time.Second):
		panic(ErrTimoutFromJavaScript)
	}
	if data.ErrCode != 0 {
		if data.ErrCode == JSNOTFOUND {
			return nil, errs.ErrRecordNotFound
		}
		return "", errors.New(data.ErrMsg)
	}
	return data.Data, err
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
