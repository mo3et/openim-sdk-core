package test

import (
	"context"
	"fmt"
	"math/rand"
	"strconv"
	"time"

	commonpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	"github.com/openimsdk/tools/log"

	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/init"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/api"
	"github.com/openimsdk/protocol/auth"

	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/ccontext"
)

var ctx context.Context

func init() {
	fmt.Println("------------------------>>>>>>>>>>>>>>>>>>> test init func <<<<<<<<<<<<<<<<<<<------------------------")
	rand.Seed(time.Now().UnixNano())
	config := getConf(APIADDR, WSADDR)
	config.DataDir = "./"
	// isInit, err := open_im_sdk.IMUserContext.InitSDK(context.TODO(), &sdkpb.InitSDKReq{Config: config})
	// if err != nil {
	// 	panic(err)
	// }
	// if !isInit {
	// 	panic("init sdk failed")
	// }
	ctx = open_im_sdk.IMUserContext.Context()
	ctx = ccontext.WithOperationID(ctx, "initOperationID_"+strconv.Itoa(int(time.Now().UnixMilli())))
	token, err := GetUserToken(ctx, UserID, PlatformID, Secret, config)
	if err != nil {
		panic(err)
	}
	errCh := make(chan error)
	open_im_sdk.IMUserContext.SetConnListener(&onConnListener{})
	open_im_sdk.IMUserContext.SetConversationListener(&onConversationListener{ch: errCh})
	open_im_sdk.IMUserContext.SetMessageListener(&onMessageListener{})
	open_im_sdk.IMUserContext.SetFriendshipListener(&onFriendshipListener{})
	open_im_sdk.IMUserContext.SetGroupListener(&onGroupListener{})
	open_im_sdk.IMUserContext.SetUserListener(&onUserListener{})
	open_im_sdk.IMUserContext.SetCustomBusinessListener(&onCustomBusinessListener{})
	if _, err := open_im_sdk.IMUserContext.Login(ctx, &sdkpb.LoginReq{
		UserID: UserID,
		Token:  token,
	}); err != nil {
		panic(err)
	}
	select {
	case <-time.After(time.Second * 5):
		panic("init timeout")
	case err := <-errCh:
		if err != nil {
			panic(err)
		}
	}
	log.ZInfo(ctx, "############ init success ############")
}

func getConf(APIADDR, WSADDR string) *sdkpb.IMConfig {
	var cf sdkpb.IMConfig
	cf.ApiAddr = APIADDR
	cf.WsAddr = WSADDR
	cf.DataDir = "./"
	cf.LogLevel = 6
	cf.Platform = PlatformID
	cf.LogFilePath = "./"
	cf.IsLogStandardOutput = true
	cf.DbPath = fmt.Sprintf("./OpenIM_v3_%s.db", UserID)
	return &cf
}

func GetUserToken(ctx context.Context, userID string, platformID commonpb.Platform, secret string, imConf *sdkpb.IMConfig) (string, error) {
	adminReq := &auth.GetAdminTokenReq{
		UserID: AdminUserID,
		Secret: secret,
	}
	adminToken, err := api.ExtractField(ctx, api.GetAdminToken.Invoke, adminReq, (*auth.GetAdminTokenResp).GetToken)
	if err != nil {
		return "", err
	}
	userReq := &auth.GetUserTokenReq{
		UserID:     userID,
		PlatformID: int32(platformID),
	}
	ctx = ccontext.WithInfo(ctx, &ccontext.GlobalConfig{
		UserID:   userID,
		Token:    adminToken,
		IMConfig: imConf,
	})
	return api.ExtractField(ctx, api.GetUsersToken.Invoke, userReq, (*auth.GetUserTokenResp).GetToken)
}
