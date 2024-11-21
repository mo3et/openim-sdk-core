package ffi_bridge

import (
	"context"

	"google.golang.org/protobuf/proto"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	pb "github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
	third "github.com/openimsdk/openim-sdk-core/v3/proto/go/js-bridge"
	"github.com/openimsdk/tools/errs"
)

var (
	FileOpen    = makeFunc[third.JsFileOpenReq, third.JsFileOpenResp](pb.FuncRequestEventName_JsFileOpen)
	FileRead    = makeFunc[third.JsFileReadReq, third.JsFileReadResp](pb.FuncRequestEventName_JsFileRead)
	FileClose   = makeFunc[third.JsFileCloseReq, third.JsFileCloseResp](pb.FuncRequestEventName_JsFileClose)
	SqliteOpen  = makeFunc[third.JsSqliteOpenReq, third.JsSqliteOpenResp](pb.FuncRequestEventName_JsSqliteOpen)
	SqliteExec  = makeFunc[third.JsSqliteExecReq, third.JsSqliteExecResp](pb.FuncRequestEventName_JsSqliteExec)
	SqliteQuery = makeFunc[third.JsSqliteQueryReq, third.JsSqliteQueryResp](pb.FuncRequestEventName_JsSqliteQuery)
	SqliteClose = makeFunc[third.JsSqliteCloseReq, third.JsSqliteCloseResp](pb.FuncRequestEventName_JsSqliteClose)
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
	var respData []byte
	if sendFfiRequest != nil {
		respData, err = sendFfiRequest(ctx, funName, reqData)
	} else {
		return nil, sdkerrs.ErrArgs.WrapMsg("dispatchFfiResult is nil")
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
