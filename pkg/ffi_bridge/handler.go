package ffi_bridge

import (
	"context"

	"google.golang.org/protobuf/proto"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	pb "github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/interop"
	"github.com/openimsdk/tools/errs"
)

var (
	FileOpen    = makeFunc[interop.JsFileOpenReq, interop.JsFileOpenResp](pb.FuncRequestEventName_JsFileOpen)
	FileRead    = makeFunc[interop.JsFileReadReq, interop.JsFileReadResp](pb.FuncRequestEventName_JsFileRead)
	FileClose   = makeFunc[interop.JsFileCloseReq, interop.JsFileCloseResp](pb.FuncRequestEventName_JsFileClose)
	SqliteOpen  = makeFunc[interop.JsSqliteOpenReq, interop.JsSqliteOpenResp](pb.FuncRequestEventName_JsSqliteOpen)
	SqliteExec  = makeFunc[interop.JsSqliteExecReq, interop.JsSqliteExecResp](pb.FuncRequestEventName_JsSqliteExec)
	SqliteQuery = makeFunc[interop.JsSqliteQueryReq, interop.JsSqliteQueryResp](pb.FuncRequestEventName_JsSqliteQuery)
	SqliteClose = makeFunc[interop.JsSqliteCloseReq, interop.JsSqliteCloseResp](pb.FuncRequestEventName_JsSqliteClose)
)

func makeFunc[A, B any](funcName pb.FuncRequestEventName) crossLangFunc[A, B] {
	return func(ctx context.Context, req *A) (*B, error) {
		return invokeFunc[A, B](ctx, funcName, req)
	}
}

type crossLangFunc[A, B any] func(ctx context.Context, req *A) (*B, error)

var sendFfiRequest func(ctc context.Context, funcName pb.FuncRequestEventName, data []byte) ([]byte, error)

func invokeFunc[A, B any](ctx context.Context, funName pb.FuncRequestEventName, req *A) (*B, error) {
	pbReq, ok := any(req).(proto.Message)
	if !ok {
		return nil, sdkerrs.ErrArgs.WrapMsg("called function argument is not of type proto.Message")
	}
	reqData, err := proto.Marshal(pbReq)
	if err != nil {
		return nil, errs.WrapMsg(err, "errInfo", "failed to unmarshal request")
	}
	if sendFfiRequest == nil {
		return nil, sdkerrs.ErrArgs.WrapMsg("dispatchFfiResult is nil")
	}
	respData, err := sendFfiRequest(ctx, funName, reqData)
	if err != nil {
		return nil, err
	}
	var resp B
	pbResp, ok := any(&resp).(proto.Message)
	if !ok {
		return nil, sdkerrs.ErrArgs.WrapMsg("called function return value is not of type proto.Message")
	}
	if err := proto.Unmarshal(respData, pbResp); err != nil {
		return nil, errs.WrapMsg(err, "errInfo", "failed to unmarshal resp")
	}
	return &resp, nil
}

func SetSendFfiRequestFunc(f func(ctc context.Context, funcName pb.FuncRequestEventName, data []byte) ([]byte, error)) {
	sendFfiRequest = f
}
