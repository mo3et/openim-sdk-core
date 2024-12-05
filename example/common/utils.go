package common

import (
	"context"
	"fmt"
	"runtime"
	"time"

	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/ccontext"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
)

func generateUniqueID() string {
	timestamp := time.Now().UnixNano()
	return fmt.Sprintf("%d", timestamp)
}

func NewCallContext() context.Context {
	return ccontext.WithOperationID(open_im_sdk.IMUserContext.Context(), generateUniqueID())
}

func TimeStampToStr(timestampSec int64) string {
	t := time.Unix(timestampSec, 0)
	return t.Format(time.DateTime)
}

func GetSDKPlatform() common.Platform {
	if runtime.GOOS == "windows" {
		return common.Platform_Windows
	} else if runtime.GOOS == "linux" {
		return common.Platform_Linux
	} else if runtime.GOOS == "darwin" {
		return common.Platform_macOS
	}
	return common.Platform_Platform_
}
