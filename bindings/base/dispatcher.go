package base

import (
	"context"
	"crypto/rand"
	"crypto/sha256"
	"encoding/base64"
	"fmt"
	"runtime/debug"
	"sync/atomic"
	"time"

	"google.golang.org/protobuf/proto"

	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/ccontext"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/ffi_bridge"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	pb "github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
	ffi "github.com/openimsdk/openim-sdk-core/v3/proto/go/ffi"
	initpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/init"
	"github.com/openimsdk/tools/errs"
	"github.com/openimsdk/tools/log"
	"github.com/openimsdk/tools/mw"
)

var (
	handleCounter        atomic.Uint64
	dispatchFfiResultFun func(handleID uint64, data []byte)
	sendFfiRequestFun    func(handleID uint64, data []byte) ([]byte, error)
)

type callFunc func(ctx context.Context, handlerID uint64, name pb.FuncRequestEventName, req []byte) ([]byte, error)

func SetDispatchFfiResultFunc(f func(handleID uint64, data []byte)) {
	dispatchFfiResultFun = f
}

func SetSendFfiRequestFunc(f func(handleID uint64, data []byte) ([]byte, error)) {
	sendFfiRequestFun = f
}

func init() {
	ffi_bridge.SetSendFfiRequestFunc(GoFfiRequestHandler)
}

func GoFfiRequestHandler(ctx context.Context, funcName pb.FuncRequestEventName, data []byte) ([]byte, error) {
	handleID := GenerateHandleID()
	ffiRequest := &ffi.FfiRequest{
		OperationID: ccontext.GetOperationID(ctx),
		HandleID:    handleID,
		FuncName:    funcName,
		Data:        data,
	}
	ffiRequestData, err := proto.Marshal(ffiRequest)
	if err != nil {
		return nil, sdkerrs.ErrArgs.Wrap()
	}
	return sendFfiRequestFun(handleID, ffiRequestData)
}

func GenerateHandleID() uint64 {
	return handleCounter.Add(1)
}

func activeErrResp(handleID uint64, funcName pb.FuncRequestEventName, err error) {
	var ffiResult ffi.FfiResult
	ffiResult.HandleID = handleID
	ffiResult.FuncName = funcName
	if code, ok := err.(errs.CodeError); ok {
		ffiResult.ErrCode = int32(code.Code())
		ffiResult.ErrMsg = code.Error()
	} else {
		ffiResult.ErrCode = sdkerrs.UnknownCode
		ffiResult.ErrMsg = fmt.Sprintf("error %T not implement CodeError: %s", err, err)
	}
	dispatchFfiResult(handleID, &ffiResult)

}
func activeSuccessResp(handleID uint64, funcName pb.FuncRequestEventName, res []byte) {

	var ffiResponse ffi.FfiResult
	ffiResponse.Data = res
	ffiResponse.FuncName = funcName
	ffiResponse.HandleID = handleID
	dispatchFfiResult(handleID, &ffiResponse)
}

func passiveEventResp(eventName pb.FuncRequestEventName, data any) {
	var ffiResponse ffi.FfiResult
	var err error
	if v, ok := data.(proto.Message); ok {
		ffiResponse.Data, err = proto.Marshal(v)
		if err != nil {
			ffiResponse.ErrCode = sdkerrs.ArgsError
			ffiResponse.ErrMsg = "data marshal error"
		}
	} else {
		ffiResponse.ErrCode = sdkerrs.ArgsError
		ffiResponse.ErrMsg = "data is not proto.Message"
	}
	ffiResponse.FuncName = eventName
	ffiResponse.HandleID = GenerateHandleID()
	dispatchFfiResult(ffiResponse.HandleID, &ffiResponse)
}

func activeEventResp(eventName pb.FuncRequestEventName, handleID uint64, data any) {
	var ffiResponse ffi.FfiResult
	var err error
	if v, ok := data.(proto.Message); ok {
		ffiResponse.Data, err = proto.Marshal(v)
		if err != nil {
			ffiResponse.ErrCode = sdkerrs.ArgsError
			ffiResponse.ErrMsg = "data marshal error"
		}
	} else {
		ffiResponse.ErrCode = sdkerrs.ArgsError
		ffiResponse.ErrMsg = "data is not proto.Message"
	}
	ffiResponse.FuncName = eventName
	ffiResponse.HandleID = handleID
	dispatchFfiResult(ffiResponse.HandleID, &ffiResponse)
}

func dispatchFfiResult(handleID uint64, ffiResponse *ffi.FfiResult) {
	data, err := proto.Marshal(ffiResponse)
	if err != nil {
		log.ZError(context.Background(), "ffiResponse marshal error", err)
	}
	if dispatchFfiResultFun != nil {
		dispatchFfiResultFun(handleID, data)
	}
}

func FfiRequest(data []byte) uint64 {
	//t := time.Now()
	handleID := GenerateHandleID()
	go func() {
		defer func() {
			if r := recover(); r != nil {
				fmt.Sprintf("panic: %+v\n%s", r, debug.Stack())
				mw.PanicStackToLog(context.Background(), r)
			}
		}()
		log.ZInfo(context.Background(), "fn call success1")
		var ffiRequest ffi.FfiRequest
		err := proto.Unmarshal(data, &ffiRequest)
		if err != nil {
			activeErrResp(handleID, ffiRequest.FuncName, errs.WrapMsg(err, "ffiRequest unmarshal error",
				"dataLength", len(data)))
			return
		}

		if err := checkResourceLoad(ffiRequest.FuncName); err != nil {
			activeErrResp(handleID, ffiRequest.FuncName, err)
			return
		}

		if fn, ok := FuncMap[ffiRequest.FuncName]; ok {
			ctx := ccontext.WithOperationID(open_im_sdk.IMUserContext.Context(),
				generateUniqueID(open_im_sdk.IMUserContext.Info().UserID, int32(open_im_sdk.IMUserContext.Info().Platform)))
			res, err := fn(ctx, handleID, ffiRequest.FuncName, ffiRequest.Data)
			if err != nil {
				activeErrResp(handleID, ffiRequest.FuncName, err)
				return
			}
			setListener(ffiRequest.FuncName)
			activeSuccessResp(handleID, ffiRequest.FuncName, res)
		} else {
			activeErrResp(handleID, ffiRequest.FuncName, sdkerrs.ErrFuncNotFound.WrapMsg("func not found",
				"funcName", ffiRequest.FuncName.String()))
		}
	}()
	return handleID
}

func checkResourceLoad(funcName pb.FuncRequestEventName) error {
	if funcName == pb.FuncRequestEventName_InitSDK {
		open_im_sdk.IMUserContext.Info().IMConfig = &initpb.IMConfig{}
		return nil
	}
	if open_im_sdk.IMUserContext.Info().IMConfig == nil {
		return sdkerrs.ErrNotInit.WrapMsg("SDK not initialized", "funcName", funcName.String())
	}
	if funcName == pb.FuncRequestEventName_Login {
		return nil
	}
	resp, err := open_im_sdk.IMUserContext.GetLoginStatus(context.Background(), &initpb.GetLoginStatusReq{})
	if err != nil {
		return err
	}
	if resp.Status == initpb.LoginStatus_Logged {
		return sdkerrs.ErrNotLogin.WrapMsg("SDK not login", "funcName", funcName.String())
	}
	return nil
}

func generateUniqueID(userID string, platformID int32) string {
	timestamp := time.Now().UnixNano() // Get current timestamp in nanoseconds

	// Generate 16 bytes of random data
	randomBytes := make([]byte, 16)
	if _, err := rand.Read(randomBytes); err != nil {
		log.ZWarn(context.Background(), "Error generating random bytes", err)
		return ""
	}

	// Combine the components into a single string
	combined := fmt.Sprintf("%s-%d-%d-%s", userID, platformID, timestamp, base64.StdEncoding.EncodeToString(randomBytes))

	// Hash the combined string
	hash := sha256.Sum256([]byte(combined))

	// Encode the hash in Base64
	uniqueID := base64.StdEncoding.EncodeToString(hash[:])

	return uniqueID
}
