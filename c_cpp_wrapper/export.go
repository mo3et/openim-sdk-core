package main

/*
#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

typedef void (*CallBack)(void* dataPtr,int len);
extern CallBack eventCallBack;
extern void CallCallBack(CallBack cb,char* dataPtr,int dataLength);
*/
import "C"

import (
	"context"
	"crypto/rand"
	"crypto/sha256"
	"encoding/base64"
	"fmt"
	"log"
	"sync"
	"time"
	"unsafe"

	"google.golang.org/protobuf/proto"

	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/ccontext"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	pb "github.com/openimsdk/openim-sdk-core/v3/proto"
	"github.com/openimsdk/tools/errs"
)

var (
	handleCounter uint64
	resultMap     = make(map[uint64]*C.uint8_t)
	mu            sync.Mutex
	FuncMap       = make(map[pb.FuncRequestEventName]callFunc)
)

type ConnCallback struct{}

func NewConnCallback() *ConnCallback {
	return &ConnCallback{}
}

func (c ConnCallback) OnConnecting() {
	eventResp(pb.FuncRequestEventName_EventOnConnecting, &pb.EventOnConnectingData{})
}

func (c ConnCallback) OnConnectSuccess() {
	eventResp(pb.FuncRequestEventName_EventOnConnectSuccess, &pb.EventOnConnectSuccessData{})
}

func (c ConnCallback) OnConnectFailed(errCode int32, errMsg string) {
	eventResp(pb.FuncRequestEventName_EventOnConnectFailed, &pb.EventOnConnectFailedData{
		ErrCode: errCode,
		ErrMsg:  errMsg,
	})
}

func (c ConnCallback) OnKickedOffline() {
	eventResp(pb.FuncRequestEventName_EventOnKickedOffline, &pb.EventOnKickedOfflineData{})
}

func (c ConnCallback) OnUserTokenExpired() {
	eventResp(pb.FuncRequestEventName_EventOnUserTokenExpired, &pb.EventOnUserTokenExpiredData{})
}

func (c ConnCallback) OnUserTokenInvalid(errMsg string) {
	eventResp(pb.FuncRequestEventName_EventOnUserTokenInvalid, &pb.EventOnUserTokenInvalidData{
		ErrMsg: errMsg,
	})
}

type ConversationCallback struct {
}

func NewConversationCallback() *ConversationCallback {
	return &ConversationCallback{}
}

func (c ConversationCallback) OnSyncServerStart(reinstalled bool) {
	eventResp(pb.FuncRequestEventName_EventOnSyncServerStart, &pb.EventOnSyncServerStartData{
		Reinstalled: reinstalled,
	})
}

func (c ConversationCallback) OnSyncServerProgress(progress int) {
	eventResp(pb.FuncRequestEventName_EventOnSyncServerProgress, &pb.EventOnSyncServerProgressData{
		Progress: int32(progress),
	})
}

func (c ConversationCallback) OnSyncServerFinish(reinstalled bool) {
	eventResp(pb.FuncRequestEventName_EventOnSyncServerFinish, &pb.EventOnSyncServerFinishData{
		Reinstalled: reinstalled,
	})
}

func (c ConversationCallback) OnSyncServerFailed(reinstalled bool) {
	eventResp(pb.FuncRequestEventName_EventOnSyncServerFailed, &pb.EventOnSyncServerFailedData{
		Reinstalled: reinstalled,
	})
}

func (c ConversationCallback) OnNewConversation(conversationList string) {
	eventResp(pb.FuncRequestEventName_EventOnNewConversation, &pb.EventOnNewConversationData{
		ConversationList: conversationList,
	})
}

func (c ConversationCallback) OnConversationChanged(conversationList string) {
	eventResp(pb.FuncRequestEventName_EventOnConversationChanged, &pb.EventOnConversationChangedData{
		ConversationList: conversationList,
	})
}

func (c ConversationCallback) OnTotalUnreadMessageCountChanged(totalUnreadCount int32) {
	eventResp(pb.FuncRequestEventName_EventOnTotalUnreadMessageCountChanged, &pb.EventOnTotalUnreadMessageCountChangedData{
		TotalUnreadCount: totalUnreadCount,
	})
}

func (c ConversationCallback) OnConversationUserInputStatusChanged(change string) {
	eventResp(pb.FuncRequestEventName_EventOnConversationUserInputStatusChanged, &pb.EventOnConversationUserInputStatusChangedData{
		Change: change,
	})
}

type AdvancedMsgCallback struct {
}

func (a AdvancedMsgCallback) OnRecvOfflineNewMessage(message string) {
	eventResp(pb.FuncRequestEventName_EventOnRecvOfflineNewMessage, &pb.EventOnRecvOfflineNewMessageData{
		Message: message,
	})
}

func (a AdvancedMsgCallback) OnMsgDeleted(message string) {
	eventResp(pb.FuncRequestEventName_EventOnMsgDeleted, &pb.EventOnMsgDeletedData{
		Message: message,
	})
}

func (a AdvancedMsgCallback) OnRecvOnlineOnlyMessage(message string) {
	eventResp(pb.FuncRequestEventName_EventOnRecvOnlineOnlyMessage, &pb.EventOnRecvOnlineOnlyMessageData{
		Message: message,
	})
}

func (a AdvancedMsgCallback) OnMsgEdited(message string) {
	eventResp(pb.FuncRequestEventName_EventOnMsgEdited, &pb.EventOnMsgEditedData{
		Message: message,
	})
}

func NewAdvancedMsgCallback() *AdvancedMsgCallback {
	return &AdvancedMsgCallback{}
}

func (a AdvancedMsgCallback) OnRecvNewMessage(message string) {
	eventResp(pb.FuncRequestEventName_EventOnRecvNewMessage, &pb.EventOnRecvNewMessageData{
		Message: message,
	})
}

func (a AdvancedMsgCallback) OnRecvC2CReadReceipt(msgReceiptList string) {
	eventResp(pb.FuncRequestEventName_EventOnRecvC2CReadReceipt, &pb.EventOnRecvC2CReadReceiptData{
		MsgReceiptList: msgReceiptList,
	})
}

func (a AdvancedMsgCallback) OnNewRecvMessageRevoked(messageRevoked string) {
	eventResp(pb.FuncRequestEventName_EventOnNewRecvMessageRevoked, &pb.EventOnNewRecvMessageRevokedData{
		MessageRevoked: messageRevoked,
	})
}

func setConnListener(_ context.Context, _ *pb.SetConnListenerReq) (*pb.SetConnListenerResp, error) {
	open_im_sdk.UserForSDK.SetConnListener(NewConnCallback())
	return &pb.SetConnListenerResp{}, nil
}

func setConversationListener(_ context.Context, _ *pb.SetConversationListenerReq) (*pb.SetConversationListenerResp, error) {
	open_im_sdk.UserForSDK.SetConversationListener(NewConversationCallback())
	return &pb.SetConversationListenerResp{}, nil
}

func setAdvancedMsgListener(_ context.Context, req *pb.SetAdvancedMsgListenerReq) (*pb.SetAdvancedMsgListenerResp, error) {
	open_im_sdk.UserForSDK.SetAdvancedMsgListener(NewAdvancedMsgCallback())
	return &pb.SetAdvancedMsgListenerResp{}, nil
}

type callFunc func(ctx context.Context, req []byte) ([]byte, error)

func init() {

	FuncMap[pb.FuncRequestEventName_InitSDK] = Func(open_im_sdk.UserForSDK.InitSDK)
	FuncMap[pb.FuncRequestEventName_Login] = Func(open_im_sdk.UserForSDK.Login)
	FuncMap[pb.FuncRequestEventName_GetAllConversationList] = Func(open_im_sdk.UserForSDK.Conversation().GetAllConversationList)
	FuncMap[pb.FuncRequestEventName_SetConnListener] = Func(setConnListener)
	FuncMap[pb.FuncRequestEventName_SetConversationListener] = Func(setConversationListener)
	FuncMap[pb.FuncRequestEventName_SetAdvancedMsgListener] = Func(setAdvancedMsgListener)

}

func Func[A, B any](fn func(ctx context.Context, req *A) (*B, error)) callFunc {
	return func(ctx context.Context, req []byte) ([]byte, error) {
		var pbReq A
		if err := proto.Unmarshal(req, any(&pbReq).(proto.Message)); err != nil {
			return nil, err
		}
		pbResp, err := fn(ctx, &pbReq)
		if err != nil {
			return nil, err
		}
		return proto.Marshal(any(pbResp).(proto.Message))
	}
}

func generateHandleID() uint64 {
	mu.Lock()
	defer mu.Unlock()
	handleCounter++
	return handleCounter
}

//export ffi_init
func ffi_init(event C.CallBack) uint64 {
	handleID := generateHandleID()
	C.eventCallBack = event
	return handleID
}

func errResp(handleID uint64, funcName pb.FuncRequestEventName, err error) {
	var ffiResult pb.FfiResult
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
func successResp(handleID uint64, funcName pb.FuncRequestEventName, res []byte) {

	var ffiResponse pb.FfiResult
	ffiResponse.Data = res
	ffiResponse.FuncName = funcName
	ffiResponse.HandleID = handleID
	dispatchFfiResult(handleID, &ffiResponse)
}

func eventResp(eventName pb.FuncRequestEventName, data any) {
	var ffiResponse pb.FfiResult
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
	ffiResponse.HandleID = generateHandleID()
	dispatchFfiResult(ffiResponse.HandleID, &ffiResponse)
}

func dispatchFfiResult(handleID uint64, ffiResponse *pb.FfiResult) {
	data, err := proto.Marshal(ffiResponse)
	if err != nil {
	}
	cData := (*C.uint8_t)(C.malloc(C.size_t(len(data))))
	if cData == nil {
		fmt.Println("Failed to allocate memory")
		return
	}
	cDataPtr := (*[1 << 30]byte)(unsafe.Pointer(cData))[:len(data):len(data)]
	copy(cDataPtr, data)

	mu.Lock()
	fmt.Println("resp c data put into resultMap", handleID)
	resultMap[handleID] = cData
	mu.Unlock()
	if C.eventCallBack != nil {
		len := C.int(len(data))
		C.CallCallBack(C.eventCallBack, (*C.char)(unsafe.Pointer(cData)), len)
	}
}

//export ffi_request
func ffi_request(data *C.void, length C.int) uint64 {
	//t := time.Now()
	handleID := generateHandleID()
	//Synchronously copy data to prevent memory from being released prematurely after calling the Go function.
	goData := C.GoBytes(unsafe.Pointer(data), length)
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
		var ffiRequest pb.FfiRequest
		err := proto.Unmarshal(goData, &ffiRequest)
		if err != nil {
			errResp(handleID, ffiRequest.FuncName, errs.WrapMsg(err, "ffiRequest unmarshal error",
				"dataLength", int(length)))
			return
		}
		if err := checkResourceLoad(ffiRequest.FuncName); err != nil {
			errResp(handleID, ffiRequest.FuncName, err)
			return
		}
		if fn, ok := FuncMap[ffiRequest.FuncName]; ok {
			ctx := ccontext.WithOperationID(open_im_sdk.UserForSDK.Context(),
				generateUniqueID(open_im_sdk.UserForSDK.Info().UserID, int32(open_im_sdk.UserForSDK.Info().PlatformID)))
			res, err := fn(ctx, ffiRequest.Data)
			if err != nil {
				errResp(handleID, ffiRequest.FuncName, err)
				return
			}
			successResp(handleID, ffiRequest.FuncName, res)
		} else {
			errResp(handleID, ffiRequest.FuncName, sdkerrs.ErrSdkFuncNotFound.WrapMsg("func not found",
				"funcName", ffiRequest.FuncName.String()))
		}
	}()
	return handleID
}

func checkResourceLoad(funcName pb.FuncRequestEventName) error {
	if funcName == pb.FuncRequestEventName_InitSDK {
		open_im_sdk.UserForSDK.Info().IMConfig = &pb.IMConfig{}
		return nil
	}
	if open_im_sdk.UserForSDK.Info().IMConfig == nil {
		return sdkerrs.ErrSdkNotInit.WrapMsg("SDK not initialized", "funcName", funcName.String())
	}
	if funcName == pb.FuncRequestEventName_Login {
		return nil
	}
	//if open_im_sdk.UserForSDK.GetLoginStatus(context.Background()) != open_im_sdk.Logged {
	//	return sdkerrs.ErrSdkNotLogin.WrapMsg("SDK not login", "funcName", funcName.String())
	//}
	return nil
}

//export ffi_drop_handle
func ffi_drop_handle(handleID uint64) {
	mu.Lock()
	defer mu.Unlock()
	fmt.Println("ffi_drop_handle come here", handleID)
	if cData, ok := resultMap[handleID]; ok {
		fmt.Println("free resource", handleID)
		C.free(unsafe.Pointer(cData))
		delete(resultMap, handleID)
	} else {
		fmt.Println("can not find resource", handleID)
	}
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

func main() {
}
