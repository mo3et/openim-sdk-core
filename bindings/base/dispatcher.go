package base

import (
	"context"
	"crypto/rand"
	"crypto/sha256"
	"encoding/base64"
	"fmt"
	"log"
	"sync/atomic"
	"time"

	"google.golang.org/protobuf/proto"

	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/ccontext"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	pb "github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
	ffi "github.com/openimsdk/openim-sdk-core/v3/proto/go/ffi"
	initpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/init"
	"github.com/openimsdk/tools/errs"
)

var (
	handleCounter     atomic.Uint64
	dispatchFfiResult func(handleID uint64, data []byte)
)

type callFunc func(ctx context.Context, handlerID uint64, name pb.FuncRequestEventName, req []byte) ([]byte, error)

func SetDispatchFfiResult(f func(handleID uint64, data []byte)) {
	dispatchFfiResult = f
}

func DispatchFfiResult(handleID uint64, data []byte) {
	if dispatchFfiResult != nil {
		dispatchFfiResult(handleID, data)
	}
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
	dispatchFfiResultPb(handleID, &ffiResult)

}
func activeSuccessResp(handleID uint64, funcName pb.FuncRequestEventName, res []byte) {

	var ffiResponse ffi.FfiResult
	ffiResponse.Data = res
	ffiResponse.FuncName = funcName
	ffiResponse.HandleID = handleID
	dispatchFfiResultPb(handleID, &ffiResponse)
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
	dispatchFfiResultPb(ffiResponse.HandleID, &ffiResponse)
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
	dispatchFfiResultPb(ffiResponse.HandleID, &ffiResponse)
}

func dispatchFfiResultPb(handleID uint64, ffiResponse *ffi.FfiResult) {
	data, err := proto.Marshal(ffiResponse)
	if err != nil {
	}
	DispatchFfiResult(handleID, data)
}

func FfiRequest(data []byte) uint64 {
	//t := time.Now()
	handleID := GenerateHandleID()
	go func() {
		//defer func(start time.Time) {
		//	if r := recover(); r != nil {
		//		fmt.Sprintf("panic: %+v\n%s", r, debug.Stack())
		//		err = fmt.Errorf("call panic: %+v", r)
		//	} else {
		//		elapsed := time.Since(start).Milliseconds()
		//		if err == nil {
		//			log.ZInfo(ctx, "fn call success", "function name", funcName, "cost time", fmt.Sprintf("%d ms", elapsed), "resp", res)
		//		} else {
		//			log.ZError(ctx, "fn call error", err, "function name", funcName, "cost time", fmt.Sprintf("%d ms", elapsed))
		//
		//		}
		//
		//	}
		//}(t)
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
			ctx := ccontext.WithOperationID(open_im_sdk.UserForSDK.Context(),
				generateUniqueID(open_im_sdk.UserForSDK.Info().UserID, int32(open_im_sdk.UserForSDK.Info().Platform)))
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
		open_im_sdk.UserForSDK.Info().IMConfig = &initpb.IMConfig{}
		return nil
	}
	if open_im_sdk.UserForSDK.Info().IMConfig == nil {
		return sdkerrs.ErrNotInit.WrapMsg("SDK not initialized", "funcName", funcName.String())
	}
	if funcName == pb.FuncRequestEventName_Login {
		return nil
	}
	if open_im_sdk.UserForSDK.GetLoginStatus(context.Background()) != open_im_sdk.Logged {
		return sdkerrs.ErrNotLogin.WrapMsg("SDK not login", "funcName", funcName.String())
	}
	return nil
}

func generateUniqueID(userID string, platformID int32) string {
	timestamp := time.Now().UnixNano() // Get current timestamp in nanoseconds

	// Generate 16 bytes of random data
	randomBytes := make([]byte, 16)
	if _, err := rand.Read(randomBytes); err != nil {
		log.Println("Error generating random bytes:", err)
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
