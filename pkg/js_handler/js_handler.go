package js_handler

import (
	"context"
	"google.golang.org/protobuf/proto"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	eventpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/js-bridge"
	"github.com/openimsdk/tools/errs"
)

var (
	FileOpen    = jsfn[sdkpb.JsFileOpenReq, sdkpb.JsFileOpenResp](eventpb.FuncRequestEventName_JsFileOpen)
	FileRead    = jsfn[sdkpb.JsFileReadReq, sdkpb.JsFileReadResp](eventpb.FuncRequestEventName_JsFileRead)
	FileClose   = jsfn[sdkpb.JsFileCloseReq, sdkpb.JsFileCloseResp](eventpb.FuncRequestEventName_JsFileClose)
	SqliteOpen  = jsfn[sdkpb.JsSqliteOpenReq, sdkpb.JsSqliteOpenResp](eventpb.FuncRequestEventName_JsSqliteOpen)
	SqliteExec  = jsfn[sdkpb.JsSqliteExecReq, sdkpb.JsSqliteExecResp](eventpb.FuncRequestEventName_JsSqliteExec)
	SqliteQuery = jsfn[sdkpb.JsSqliteQueryReq, sdkpb.JsSqliteQueryResp](eventpb.FuncRequestEventName_JsSqliteQuery)
	SqliteClose = jsfn[sdkpb.JsSqliteCloseReq, sdkpb.JsSqliteCloseResp](eventpb.FuncRequestEventName_JsSqliteClose)
)

func jsfn[A, B any](funcName eventpb.FuncRequestEventName) jsFunc[A, B] {
	return func(ctx context.Context, req *A) (*B, error) {
		return Call[A, B](ctx, funcName, req)
	}
}

type jsFunc[A, B any] func(ctx context.Context, req *A) (*B, error)

var dispatchFfiResult func(ctc context.Context, funcName eventpb.FuncRequestEventName, data []byte) ([]byte, error)

func Call[A, B any](ctx context.Context, funName eventpb.FuncRequestEventName, req *A) (*B, error) {
	pbReq, ok := any(req).(proto.Message)
	if !ok {
		return nil, sdkerrs.ErrArgs.WrapMsg("called function argument is not of type proto.Message")
	}

	reqData, err := proto.Marshal(pbReq)
	if err != nil {
		return nil, errs.WrapMsg(err, "errInfo", "failed to unmarshal request")
	}
	if dispatchFfiResult == nil {
		return nil, sdkerrs.ErrArgs.WrapMsg("dispatchFfiResult is nil")
	}
	respData, err := dispatchFfiResult(ctx, funName, reqData)
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

func SetDispatchFfiResult(f func(ctc context.Context, funcName eventpb.FuncRequestEventName, data []byte) ([]byte, error)) {
	dispatchFfiResult = f
}
