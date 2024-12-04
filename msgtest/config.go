package msgtest

import (
	"fmt"
	commonpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	initpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/init"
)

// config here

// system
var (
	TESTIP        = "127.0.0.1"
	APIADDR       = fmt.Sprintf("http://%v:10002", TESTIP)
	WSADDR        = fmt.Sprintf("ws://%v:10001", TESTIP)
	SECRET        = "openIM123"
	MANAGERUSERID = "openIMAdmin"

	PLATFORMID = commonpb.Platform_Android
	LogLevel   = commonpb.LogLevel_LevelDebug
)

func GetConfig() *initpb.IMConfig {
	var cf initpb.IMConfig
	cf.ApiAddr = APIADDR
	cf.Platform = PLATFORMID
	cf.WsAddr = WSADDR
	cf.DataDir = "./"
	cf.LogLevel = LogLevel
	cf.IsLogStandardOutput = true
	cf.LogFilePath = ""
	return &cf

}
