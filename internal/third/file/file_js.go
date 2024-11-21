// Copyright © 2023 OpenIM open source community. All rights reserved.
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

package file

import (
	"bufio"
	"context"
	"errors"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/js-bridge"
	"io"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/ffi_bridge"
)

const readBufferSize = 1024 * 1024 * 5 // 5mb

func Open(ctx context.Context, req *UploadFileReq) (ReadFile, error) {
	file := &jsCallFile{ctx: ctx, uuid: req.Uuid}
	size, err := file.Open()
	if err != nil {
		return nil, err
	}
	jf := &jsFile{
		size: size,
		file: file,
	}
	jf.resetReaderBuffer()
	return jf, nil
}

type jsFile struct {
	size   int64
	file   *jsCallFile
	whence int
	reader io.Reader
}

func (j *jsFile) resetReaderBuffer() {
	j.reader = bufio.NewReaderSize(&reader{fn: j.read}, readBufferSize)
}

func (j *jsFile) read(p []byte) (n int, err error) {
	length := len(p)
	if length == 0 {
		return 0, errors.New("read buffer is empty")
	}
	if j.whence >= int(j.size) {
		return 0, io.EOF
	}
	if j.whence+length > int(j.size) {
		length = int(j.size) - j.whence
	}
	data, err := j.file.Read(int64(j.whence), int64(length))
	if err != nil {
		return 0, err
	}
	if len(data) > len(p) {
		return 0, errors.New("js read data > length")
	}
	j.whence += len(data)
	copy(p, data)
	return len(data), nil
}

func (j *jsFile) Read(p []byte) (n int, err error) {
	return j.reader.Read(p)
}

func (j *jsFile) Close() error {
	return j.file.Close()
}

func (j *jsFile) Size() int64 {
	return j.size
}

func (j *jsFile) StartSeek(whence int) error {
	if whence < 0 || whence > int(j.size) {
		return errors.New("seek whence is out of range")
	}
	j.whence = whence
	j.resetReaderBuffer()
	return nil
}

type reader struct {
	fn func(p []byte) (n int, err error)
}

func (r *reader) Read(p []byte) (n int, err error) {
	return r.fn(p)
}

type jsCallFile struct {
	ctx  context.Context
	uuid string
}

func (j *jsCallFile) Open() (int64, error) {
	resp, err := ffi_bridge.FileOpen(j.ctx, &js_bridge.JsFileOpenReq{Uuid: j.uuid})
	if err != nil {
		return 0, err
	}
	return resp.Size, nil
}

func (j *jsCallFile) Read(offset int64, length int64) ([]byte, error) {
	resp, err := ffi_bridge.FileRead(j.ctx, &js_bridge.JsFileReadReq{Uuid: j.uuid, Offset: offset, Length: length})
	if err != nil {
		return nil, err
	}
	return resp.Data, nil
}

func (j *jsCallFile) Close() error {
	_, err := ffi_bridge.FileClose(j.ctx, &js_bridge.JsFileCloseReq{Uuid: j.uuid})
	return err
}
