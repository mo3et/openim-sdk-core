package gomobile

import (
	"github.com/openimsdk/openim-sdk-core/v3/bindings/base"
)

var currentMobileCallback MobileCallback

type MobileCallback interface {
	OnData([]byte)
}

func init() {
	base.SetDispatchFfiResultFunc(dispatchResultForGoMobile)
}

func dispatchResultForGoMobile(_ uint64, data []byte) {
	currentMobileCallback.OnData(data)
}

func FfiInit(cb MobileCallback, protocolType int) int {
	base.SetProtocolType(protocolType)
	currentMobileCallback = cb
	return 1
}

func FfiRequest(mobileData []byte) {
	base.FfiRequest(mobileData)
}
