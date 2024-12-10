package gomobile

import (
	"github.com/openimsdk/openim-sdk-core/v3/bindings/base"
)

var currentMobileCallback mobileCallback

type mobileCallback interface {
	onData([]byte)
}

func init() {
	base.SetDispatchFfiResultFunc(dispatchResultForGoMobile)
}

func dispatchResultForGoMobile(_ uint64, data []byte) {
	currentMobileCallback.onData(data)
}

func FfiInit(cb mobileCallback, protocolType int) int {
	base.SetProtocolType(protocolType)
	currentMobileCallback = cb
	return 1
}

func FfiRequest(mobileData []byte) {
	base.FfiRequest(mobileData)
}
