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

func dispatchResultForGoMobile(_ int64, data []byte) {
	currentMobileCallback.OnData(data)
}

// Note: The two interfaces provided by the Go language are no longer recommended for GoMobile binding.
// Instead, it is advised to use cgo binding (ffi_c).
// This is because GoMobile's support for Swift on iOS is not sufficiently robust.
// There are design flaws in GoMobile's handling of []byte (details can be found at https://github.com/golang/go/issues/33745),
// and the Go team cannot guarantee a quick fix for these issues.
// For these reasons, cgo binding is recommended.
// If you must use GoMobile for bridging, you can try copying the []byte data once in FfiRequest
// before passing it to the logic inside Go. However, this approach introduces performance overhead,
// so it is not recommended.

func FfiInit(cb MobileCallback, protocolType int) int {
	base.SetProtocolType(protocolType)
	currentMobileCallback = cb
	return 1
}

func FfiRequest(mobileData []byte) {
	base.FfiRequest(mobileData)
}
