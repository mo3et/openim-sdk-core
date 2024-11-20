package ffi_bridge

import (
	"context"

	"google.golang.org/protobuf/proto"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto"
	"github.com/openimsdk/tools/errs"
)

var (
	FileOpen    = makeFunc[sdkpb.JsFileOpenReq, sdkpb.JsFileOpenResp](sdkpb.FuncRequestEventName_JsFileOpen)
	FileRead    = makeFunc[sdkpb.JsFileReadReq, sdkpb.JsFileReadResp](sdkpb.FuncRequestEventName_JsFileRead)
	FileClose   = makeFunc[sdkpb.JsFileCloseReq, sdkpb.JsFileCloseResp](sdkpb.FuncRequestEventName_JsFileClose)
	SqliteOpen  = makeFunc[sdkpb.JsSqliteOpenReq, sdkpb.JsSqliteOpenResp](sdkpb.FuncRequestEventName_JsSqliteOpen)
	SqliteExec  = makeFunc[sdkpb.JsSqliteExecReq, sdkpb.JsSqliteExecResp](sdkpb.FuncRequestEventName_JsSqliteExec)
	SqliteQuery = makeFunc[sdkpb.JsSqliteQueryReq, sdkpb.JsSqliteQueryResp](sdkpb.FuncRequestEventName_JsSqliteQuery)
	SqliteClose = makeFunc[sdkpb.JsSqliteCloseReq, sdkpb.JsSqliteCloseResp](sdkpb.FuncRequestEventName_JsSqliteClose)
)

func makeFunc[A, B any](funcName sdkpb.FuncRequestEventName) crossLangFunc[A, B] {
	return func(ctx context.Context, req *A) (*B, error) {
		return invokeFunc[A, B](ctx, funcName, req)
	}
}

type crossLangFunc[A, B any] func(ctx context.Context, req *A) (*B, error)

var sendFfiRequest func(ctc context.Context, funcName sdkpb.FuncRequestEventName, data []byte) ([]byte, error)

func invokeFunc[A, B any](ctx context.Context, funName sdkpb.FuncRequestEventName, req *A) (*B, error) {

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

func SetSendFfiRequestFunc(f func(ctc context.Context, funcName sdkpb.FuncRequestEventName, data []byte) ([]byte, error)) {
	sendFfiRequest = f
}
