package ui

import (
	"log"

	"github.com/openimsdk/openim-sdk-core/v3/example/common"
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	pb_common "github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	pb_init "github.com/openimsdk/openim-sdk-core/v3/proto/go/init"
)

func Init(userId, token string) {
	initRes, err := open_im_sdk.IMUserContext.InitSDK(common.NewCallContext(), &pb_init.InitSDKReq{
		Config: &pb_init.IMConfig{
			AppFramework:        pb_common.AppFramework_AppFramework_,
			Platform:            common.GetSDKPlatform(),
			ApiAddr:             "http://127.0.0.1:10002",
			WsAddr:              "ws://127.0.0.1:10001",
			DataDir:             ".cache/",
			DbPath:              ".cache/",
			LogLevel:            pb_common.LogLevel_LevelDebug,
			IsLogStandardOutput: true,
			LogFilePath:         ".cache/log/",
		},
	})
	if err != nil {
		log.Panicf("InitSDK Error: %s", err.Error())
		return
	}

	if !initRes.Suc {
		log.Panic("InitSDK Failed")
		return
	} else {
		log.Println("InitSDK Success")
	}

	_, err = open_im_sdk.IMUserContext.Login(common.NewCallContext(), &pb_init.LoginReq{
		UserID: userId,
		Token:  token,
	})

	if err != nil {
		log.Panicf("Login Error: %s", err.Error())
		return
	}
}

func Update() {
	drawMainMenu()
}

func Exit() {

}
