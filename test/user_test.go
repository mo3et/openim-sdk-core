package test

//
//import (
//	"testing"
//	"time"
//
//	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
//	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto"
//	"github.com/openimsdk/tools/utils/datautil"
//)
//
//func Test_GetSelfUserInfo(t *testing.T) {
//	userInfo, err := open_im_sdk.IMUserContext.User().GetSelfUserInfo(ctx, &sdkpb.GetSelfUserInfoReq{})
//	if err != nil {
//		t.Error(err)
//	}
//	t.Log(userInfo)
//}
//
//func Test_SetSelfInfoEx(t *testing.T) {
//	newNickName := "test"
//	newFaceURL := "http://test.com"
//	_, err := open_im_sdk.IMUserContext.User().SetSelfInfo(ctx, &sdkpb.SetSelfInfoReq{
//		Nickname: datautil.ToPtr(newNickName),
//		FaceURL:  datautil.ToPtr(newFaceURL),
//		Ex:       datautil.ToPtr("ASD"),
//	})
//	if err != nil {
//		t.Error(err)
//	}
//
//	userInfo, err := open_im_sdk.IMUserContext.User().GetSelfUserInfo(ctx, &sdkpb.GetSelfUserInfoReq{})
//	if err != nil {
//		t.Error(err)
//	}
//	if userInfo.User.UserID != UserID || userInfo.User.Nickname != newNickName || userInfo.User.FaceURL != newFaceURL {
//		t.Error("user info does not match")
//	}
//	t.Log(userInfo)
//	time.Sleep(time.Second * 10)
//}
//
//func Test_ProcessUserCommandAdd(t *testing.T) {
//	req := &sdkpb.ProcessUserCommandAddReq{
//		UserID: "3",
//		Type:   8,
//		Uuid:   "1",
//		Value:  datautil.ToPtr("ASD"),
//		Ex:     datautil.ToPtr("ASD"),
//	}
//	_, err := open_im_sdk.IMUserContext.User().ProcessUserCommandAdd(ctx, req)
//	if err != nil {
//		t.Errorf("Failed to add user command: %v", err)
//	}
//}
//
//func Test_UserCommandGet(t *testing.T) {
//	result, err := open_im_sdk.IMUserContext.User().ProcessUserCommandGetAll(ctx, &sdkpb.ProcessUserCommandGetAllReq{})
//	if err != nil {
//		t.Errorf("Failed to get user commands: %v", err)
//	}
//	t.Logf("User commands: %v", result.Commands)
//}
//
//func Test_UserCommandDelete(t *testing.T) {
//	req := &sdkpb.ProcessUserCommandDeleteReq{
//		UserID: "3",
//		Type:   8,
//		Uuid:   "1",
//	}
//	_, err := open_im_sdk.IMUserContext.User().ProcessUserCommandDelete(ctx, req)
//	if err != nil {
//		t.Errorf("Failed to delete user command: %v", err)
//	}
//}
