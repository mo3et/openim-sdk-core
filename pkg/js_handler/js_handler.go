package js_handler

import (
	"context"
	"runtime"
	"syscall/js"
	"time"

	"google.golang.org/protobuf/proto"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/utils"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto"
	"github.com/openimsdk/tools/errs"
	"github.com/openimsdk/tools/log"
)

var (
	SqliteOpen  = jsfn[sdkpb.JsSqliteOpenReq, sdkpb.JsSqliteOpenResp](sdkpb.FuncRequestEventName_JsSqliteOpen)
	SqliteExec  = jsfn[sdkpb.JsSqliteExecReq, sdkpb.JsSqliteExecResp](sdkpb.FuncRequestEventName_JsSqliteExec)
	SqliteQuery = jsfn[sdkpb.JsSqliteQueryReq, sdkpb.JsSqliteQueryResp](sdkpb.FuncRequestEventName_JsSqliteQuery)
	SqliteClose = jsfn[sdkpb.JsSqliteCloseReq, sdkpb.JsSqliteCloseResp](sdkpb.FuncRequestEventName_JsSqliteClose)
)

func jsfn[A, B any](funcName sdkpb.FuncRequestEventName) jsFunc[A, B] {
	return func(ctx context.Context, req *A) (*B, error) {
		return Call[A, B](ctx, funcName, req)
	}
}

type jsFunc[A, B any] func(ctx context.Context, req *A) (*B, error)

var dispatchFfiResult func(ctc context.Context, funcName sdkpb.FuncRequestEventName, data []byte) ([]byte, error)

func Call[A, B any](ctx context.Context, funName sdkpb.FuncRequestEventName, req *A) (*B, error) {

	pbReq, ok := any(req).(proto.Message)
	if !ok {
		return nil, sdkerrs.ErrArgs.WrapMsg("called function argument is not of type proto.Message")
	}

	reqData, err := proto.Marshal(pbReq)
	if err != nil {
		return nil, errs.WrapMsg(err, "errInfo", "failed to unmarshal request")
	}
	var respData []byte
	if dispatchFfiResult != nil {
		respData, err = dispatchFfiResult(ctx, funName, reqData)
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

func SetDispatchFfiResult(f func(ctc context.Context, funcName sdkpb.FuncRequestEventName, data []byte) ([]byte, error)) {
	dispatchFfiResult = f
}

func waitAsyncFunc(ctx context.Context, data any) (js.Value, error) {
	if !(result.Type() == js.TypeObject && result.InstanceOf(js.Global().Get("Promise"))) {
		return result, nil
	}
	var (
		resArgs []js.Value
		ok      bool
		done    = make(chan struct{})
	)
	success := js.FuncOf(func(this js.Value, args []js.Value) any {
		resArgs = args
		ok = true
		close(done)
		return nil
	})
	defer success.Release()
	failed := js.FuncOf(func(this js.Value, args []js.Value) any {
		resArgs = args
		close(done)
		return nil
	})
	defer failed.Release()
	result.Call("then", success).Call("catch", failed)
	select {
	case <-ctx.Done():
		return js.Null(), context.Cause(ctx)
	case <-done:
	}
	if !ok {
		return js.Null(), jsError(resArgs[0])
	}
	return resArgs[0], nil
}

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
