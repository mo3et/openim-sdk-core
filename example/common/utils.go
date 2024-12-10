package common

import (
	"context"
	"fmt"
	"os/exec"
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

func OpenBrowser(url string) error {
	var cmd *exec.Cmd
	switch runtime.GOOS {
	case "linux":
		cmd = exec.Command("xdg-open", url) // Linux
	case "windows":
		cmd = exec.Command("cmd", "/C", "start", url) // Windows
	case "darwin":
		cmd = exec.Command("open", url) // macOS
	default:
		return fmt.Errorf("unsupported platform")
	}
	return cmd.Start()
}
