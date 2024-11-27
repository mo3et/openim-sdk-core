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

package ccontext

import (
	"context"

	commonpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	pb "github.com/openimsdk/openim-sdk-core/v3/proto/go/init"
	"github.com/openimsdk/tools/mcontext"
)

type GlobalConfig struct {
	UserID string
	Token  string

	*pb.IMConfig
}

type ContextInfo interface {
	UserID() string
	Token() string
	PlatformID() int32
	ApiAddr() string
	WsAddr() string
	DataDir() string
	LogLevel() commonpb.LogLevel
	OperationID() string
}

func Info(ctx context.Context) ContextInfo {
	conf := ctx.Value(GlobalConfigKey{}).(*GlobalConfig)
	return &info{
		conf: conf,
		ctx:  ctx,
	}
}

func WithInfo(ctx context.Context, conf *GlobalConfig) context.Context {
	return context.WithValue(ctx, GlobalConfigKey{}, conf)
}

func WithOperationID(ctx context.Context, operationID string) context.Context {
	return mcontext.SetOperationID(ctx, operationID)
}

func GetOperationID(ctx context.Context) string {
	return mcontext.GetOperationID(ctx)
}

func WithApiErrCode(ctx context.Context, cb ApiErrCodeCallback) context.Context {
	return context.WithValue(ctx, apiErrCode{}, cb)
}

func GetApiErrCodeCallback(ctx context.Context) ApiErrCodeCallback {
	fn, _ := ctx.Value(apiErrCode{}).(ApiErrCodeCallback)
	if fn == nil {
		return &emptyApiErrCodeCallback{}
	}
	return fn
}

type GlobalConfigKey struct{}

type info struct {
	conf *GlobalConfig
	ctx  context.Context
}

func (i *info) UserID() string {
	return i.conf.UserID
}

func (i *info) Token() string {
	return i.conf.Token
}

func (i *info) PlatformID() int32 {
	return int32(i.conf.Platform)
}

func (i *info) ApiAddr() string {
	return i.conf.ApiAddr
}

func (i *info) WsAddr() string {
	return i.conf.WsAddr
}

func (i *info) DataDir() string {
	return i.conf.DataDir
}

func (i *info) LogLevel() commonpb.LogLevel {
	return i.conf.LogLevel
}

func (i *info) OperationID() string {
	return mcontext.GetOperationID(i.ctx)
}

type apiErrCode struct{}

type ApiErrCodeCallback interface {
	OnError(ctx context.Context, err error)
}

type emptyApiErrCodeCallback struct{}

func (e *emptyApiErrCodeCallback) OnError(ctx context.Context, err error) {}
