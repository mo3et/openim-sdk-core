// Copyright © 2023 OpenIM SDK. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package open_im_sdk

import (
	"context"
	"fmt"
	"time"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/ccontext"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/constant"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	commonpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	pb "github.com/openimsdk/openim-sdk-core/v3/proto/go/init"
	"github.com/openimsdk/openim-sdk-core/v3/version"
	"github.com/openimsdk/tools/log"
)

func GetSdkVersion() string {
	return version.Version
}

const (
	rotateCount  uint = 1
	rotationTime uint = 24
)

func UnInitSDK(operationID string) {
	if UserForSDK == nil {
		fmt.Println(operationID, "UserForSDK is nil,")
		return
	}
	UserForSDK.UnInitSDK()
	UserForSDK = nil

}

func GetLoginStatus(operationID string) int {
	if UserForSDK == nil {
		return constant.Uninitialized
	}
	return UserForSDK.GetLoginStatus(ccontext.WithOperationID(context.Background(), operationID))
}

func GetLoginUserID() string {
	if UserForSDK == nil {
		return ""
	}
	return UserForSDK.GetLoginUserID()
}

func (u *LoginMgr) InitSDK(ctx context.Context, req *pb.InitSDKReq) (*pb.InitSDKResp, error) {
	u.info.IMConfig = req.GetConfig()
	if u.info.IMConfig != nil {
		log.ZWarn(ctx, "哈哈哈哈和", nil)
	}
	if err := log.InitLoggerFromConfig("open-im-sdk-core", "",
		commonpb.AppFramework_name[int32(req.Config.AppFramework)], commonpb.Platform_name[int32(req.Config.Platform)], int(req.Config.LogLevel),
		req.Config.IsLogStandardOutput, false, req.Config.LogFilePath, rotateCount, rotationTime, version.Version, true); err != nil {
		return nil, err
	}
	return &pb.InitSDKResp{Suc: true}, nil
}

func (u *LoginMgr) Login(ctx context.Context, req *pb.LoginReq) (*pb.LoginResp, error) {
	if u.getLoginStatus(ctx) == Logged {
		return nil, sdkerrs.ErrLoginRepeat
	}
	fmt.Println("login comm here")
	u.setLoginStatus(Logging)
	log.ZDebug(ctx, "login start... ", "userID", req.UserID, "token", req.Token)
	t1 := time.Now()

	u.info.UserID = req.UserID
	u.info.Token = req.Token

	if err := u.initialize(ctx, req.UserID); err != nil {
		return nil, err
	}

	u.run(ctx)
	u.setLoginStatus(Logged)
	log.ZDebug(ctx, "login success...", "login cost time: ", time.Since(t1))
	return &pb.LoginResp{}, nil
}

func (u *LoginMgr) Logout(ctx context.Context) error {
	return u.logout(ctx, false)
}

func (u *LoginMgr) SetAppBackgroundStatus(ctx context.Context, isBackground bool) error {
	return u.setAppBackgroundStatus(ctx, isBackground)
}

func (u *LoginMgr) NetworkStatusChanged(ctx context.Context) {
	u.longConnMgr.Close(ctx)
}

func (u *LoginMgr) GetLoginStatus(ctx context.Context) int {
	return u.getLoginStatus(ctx)
}
