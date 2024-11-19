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

	"github.com/openimsdk/openim-sdk-core/v3/bindings/wasm/fii"
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
	js.Global().Set("ffiInit", js.FuncOf(fii.FfiInit))
	js.Global().Set("ffiRequest", js.FuncOf(fii.FfiRequest))
}
