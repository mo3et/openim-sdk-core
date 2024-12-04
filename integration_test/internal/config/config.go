package config

import (
	commonpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	initpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/init"
)

const (
	TestIP              = "127.0.0.1"
	APIAddr             = "http://" + TestIP + ":10002"
	WsAddr              = "ws://" + TestIP + ":10001"
	AdminUserID         = "imAdmin"
	Secret              = "openIM123"
	PlatformID          = commonpb.Platform_Android
	AppFramework        = commonpb.AppFramework_Flutter
	LogLevel            = 3
	DataDir             = "./data/"
	LogFilePath         = "./logs/"
	IsLogStandardOutput = false
)

func GetConf() *initpb.IMConfig {
	var cf *initpb.IMConfig
	cf.ApiAddr = APIAddr
	cf.WsAddr = WsAddr
	cf.DataDir = DataDir
	cf.LogLevel = LogLevel
	cf.Platform = PlatformID
	cf.AppFramework = AppFramework
	cf.LogFilePath = LogFilePath
	cf.IsLogStandardOutput = IsLogStandardOutput
	return cf
}
