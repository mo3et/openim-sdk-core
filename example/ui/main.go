package ui

import (
	"log"

	"github.com/openimsdk/openim-sdk-core/v3/example/common"
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	pb_common "github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	pb_init "github.com/openimsdk/openim-sdk-core/v3/proto/go/init"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/user"
)

func init() {
	open_im_sdk.IMUserContext.SetConnListener(newConnListener())
	open_im_sdk.IMUserContext.SetConversationListener(newConversationListener())
	open_im_sdk.IMUserContext.SetMessageListener(newMessageListener())
	open_im_sdk.IMUserContext.SetFriendshipListener(newFriendshipListener())
	open_im_sdk.IMUserContext.SetGroupListener(newGroupListener())
	open_im_sdk.IMUserContext.SetUserListener(newUserListener())
	open_im_sdk.IMUserContext.SetCustomBusinessListener(newCustomBusinessListener())
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
}

func Login(userId, token string) string {
	_, err := open_im_sdk.IMUserContext.Login(common.NewCallContext(), &pb_init.LoginReq{
		UserID: userId,
		Token:  token,
	})

	if err != nil {
		log.Panicf("Login Error: %s", err.Error())
		return ""
	} else {
		res, err := open_im_sdk.IMUserContext.User().GetSelfUserInfo(common.NewCallContext(), &user.GetSelfUserInfoReq{})
		if err != nil {
			log.Panicf("Login Error: %s", err.Error())
			return ""
		} else {
			return res.User.Nickname
		}
	}
}
