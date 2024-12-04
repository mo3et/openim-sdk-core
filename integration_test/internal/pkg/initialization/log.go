package initialization

import (
	"fmt"
	commonpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	initpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/init"

	"github.com/openimsdk/openim-sdk-core/v3/version"
	"github.com/openimsdk/tools/log"
)

const (
	rotateCount  uint = 1
	rotationTime uint = 24
)

func InitLog(cf *initpb.IMConfig) error {
	if err := log.InitLoggerFromConfig("open-im-sdk-core", "", commonpb.AppFramework_name[int32(cf.AppFramework)], commonpb.Platform_name[int32(cf.Platform)], int(cf.LogLevel), cf.IsLogStandardOutput, false, cf.LogFilePath, rotateCount, rotationTime, version.Version, true); err != nil {
		fmt.Println("log init failed ", err.Error())
		return err
	}
	return nil
}
