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
	"time"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	commonpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	pb "github.com/openimsdk/openim-sdk-core/v3/proto/go/init"
	"github.com/openimsdk/openim-sdk-core/v3/version"
	"github.com/openimsdk/tools/log"
)

const (
	rotateCount  uint = 1
	rotationTime uint = 24
)

func (u *UserContext) InitSDK(ctx context.Context, req *pb.InitSDKReq) (*pb.InitSDKResp, error) {
	log.ZDebug(ctx, "init sdk", "req", req.String())

	u.info.IMConfig = req.GetConfig()
	log.ZDebug(ctx, "init sdk", "log", 111)
	if req.GetConfig() == nil {
		log.ZDebug(ctx, "init sdk", "config is nil", true)
	}
	if err := log.InitLoggerFromConfig("open-im-sdk-core", "",
		commonpb.AppFramework_name[int32(req.Config.AppFramework)], commonpb.Platform_name[int32(req.Config.Platform)], int(req.Config.LogLevel),
		req.Config.IsLogStandardOutput, false, req.Config.LogFilePath, rotateCount, rotationTime, version.Version, true); err != nil {
		return nil, err
	}
	log.ZDebug(ctx, "init sdk", "true", true)
	return &pb.InitSDKResp{Suc: true}, nil
}

func (u *UserContext) Login(ctx context.Context, req *pb.LoginReq) (*pb.LoginResp, error) {
	if u.getLoginStatus() == pb.LoginStatus_Logged {
		return nil, sdkerrs.ErrLoginRepeat
	}
	u.setLoginStatus(pb.LoginStatus_Logging)
	log.ZDebug(ctx, "login start... ", "userID", req.UserID, "token", req.Token)
	t1 := time.Now()

	u.info.UserID = req.UserID
	u.info.Token = req.Token

	if err := u.initialize(ctx, req.UserID); err != nil {
		return nil, err
	}

	u.run(ctx)
	u.setLoginStatus(pb.LoginStatus_Logged)
	log.ZDebug(ctx, "login success...", "login cost time: ", time.Since(t1))
	return &pb.LoginResp{}, nil
}

func (u *UserContext) Logout(ctx context.Context, req *pb.LogoutReq) (*pb.LogoutResp, error) {
	if err := u.logout(ctx, false); err != nil {
		return nil, err
	}
	return &pb.LogoutResp{}, nil
}

func (u *UserContext) SetAppBackgroundStatus(ctx context.Context, req *pb.SetAppBackgroundStatusReq) (*pb.SetAppBackgroundStatusResp, error) {
	if err := u.setAppBackgroundStatus(ctx, req.IsBackground); err != nil {
		return nil, err
	}
	return &pb.SetAppBackgroundStatusResp{}, nil
}

func (u *UserContext) NetworkStatusChanged(ctx context.Context, req *pb.NetworkStatusChangedReq) (*pb.NetworkStatusChangedResp, error) {
	u.longConnMgr.Close(ctx)
	return &pb.NetworkStatusChangedResp{}, nil
}

func (u *UserContext) GetLoginStatus(ctx context.Context, req *pb.GetLoginStatusReq) (*pb.GetLoginStatusResp, error) {
	return &pb.GetLoginStatusResp{Status: u.getLoginStatus()}, nil
}

func (u *UserContext) Version(ctx context.Context, req *pb.VersionReq) (*pb.VersionResp, error) {
	return &pb.VersionResp{Version: version.Version}, nil
}
