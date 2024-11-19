package user

import (
	"context"
	"github.com/openimsdk/tools/errs"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/api"
	"github.com/openimsdk/protocol/sdkws"
	"github.com/openimsdk/protocol/user"
)

func (u *User) getUsersInfo(ctx context.Context, userIDs []string) ([]*sdkws.UserInfo, error) {
	req := &user.GetDesignateUsersReq{UserIDs: userIDs}
	return api.ExtractField(ctx, api.GetUsersInfo.Invoke, req, (*user.GetDesignateUsersResp).GetUsersInfo)
}

func (u *User) getUserInfo(ctx context.Context, userID string) (*sdkws.UserInfo, error) {
	users, err := u.getUsersInfo(ctx, []string{userID})
	if err != nil {
		return nil, err
	}
	if len(users) == 0 {
		return nil, errs.ErrRecordNotFound.WrapMsg("user id not found")
	}
	return users[0], nil
}

func (u *User) updateUserInfo(ctx context.Context, userInfo *sdkws.UserInfoWithEx) error {
	userInfo.UserID = u.loginUserID
	return api.UpdateUserInfoEx.Execute(ctx, &user.UpdateUserInfoExReq{UserInfo: userInfo})
}

func (u *User) processUserCommandAdd(ctx context.Context, req *user.ProcessUserCommandAddReq) error {
	req.UserID = u.loginUserID
	return api.ProcessUserCommandAdd.Execute(ctx, req)
}

func (u *User) processUserCommandDelete(ctx context.Context, req *user.ProcessUserCommandDeleteReq) error {
	req.UserID = u.loginUserID
	return api.ProcessUserCommandDelete.Execute(ctx, req)
}

func (u *User) processUserCommandUpdate(ctx context.Context, req *user.ProcessUserCommandUpdateReq) error {
	req.UserID = u.loginUserID
	return api.ProcessUserCommandUpdate.Execute(ctx, req)
}

func (u *User) processUserCommandGetAll(ctx context.Context, req *user.ProcessUserCommandGetAllReq) (*user.ProcessUserCommandGetAllResp, error) {
	req.UserID = u.loginUserID
	return api.ProcessUserCommandGetAll.Invoke(ctx, req)
}
