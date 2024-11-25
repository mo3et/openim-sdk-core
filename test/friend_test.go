package test

//
//import (
//	"testing"
//	"time"
//
//	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
//	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto"
//)
//
//func Test_GetSpecifiedFriends(t *testing.T) {
//	info, err := open_im_sdk.IMUserContext.Relation().GetSpecifiedFriends(ctx, &sdkpb.GetSpecifiedFriendsReq{
//		FriendUserIDs: []string{"userID1", "userID2"},
//		FilterBlack:   false,
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("GetSpecifiedFriends success", ctx.Value("operationID"))
//	for _, userInfo := range info.Friends {
//		t.Log(userInfo)
//	}
//}
//
//func Test_AddFriend(t *testing.T) {
//	_, err := open_im_sdk.IMUserContext.Relation().AddFriend(ctx, &sdkpb.AddFriendReq{
//		UserID: "111",
//		ReqMsg: "hhh",
//		Ex:     "",
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("AddFriend success", ctx.Value("operationID"))
//}
//
//func Test_HandlerFriendRequest(t *testing.T) {
//	_, err := open_im_sdk.IMUserContext.Relation().HandlerFriendRequest(ctx, &sdkpb.HandlerFriendRequestReq{
//		UserID:    "request123",
//		HandleMsg: "accept",
//		Status:    sdkpb.ApprovalStatus_Approved,
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("HandlerFriendRequest success", ctx.Value("operationID"))
//	time.Sleep(time.Second * 30)
//}
//
//func Test_CheckFriend(t *testing.T) {
//	res, err := open_im_sdk.IMUserContext.Relation().CheckFriend(ctx, &sdkpb.CheckFriendReq{
//		FriendUserIDs: []string{"863454357", "45644221123"},
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("CheckFriend success", ctx.Value("operationID"))
//	for _, re := range res.Result {
//		t.Log(re)
//	}
//}
//
//func Test_DeleteFriend(t *testing.T) {
//	_, err := open_im_sdk.IMUserContext.Relation().DeleteFriend(ctx, &sdkpb.DeleteFriendReq{
//		UserID: "863454357",
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("DeleteFriend success", ctx.Value("operationID"))
//}
//
//func Test_GetFriends(t *testing.T) {
//	info, err := open_im_sdk.IMUserContext.Relation().GetFriends(ctx, &sdkpb.GetFriendsReq{
//		FilterBlack: false,
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("GetFriends success", ctx.Value("operationID"))
//	for _, userInfo := range info.Friends {
//		t.Log(userInfo)
//	}
//}
//
//func Test_SearchFriends(t *testing.T) {
//	info, err := open_im_sdk.IMUserContext.Relation().SearchFriends(ctx, &sdkpb.SearchFriendsReq{
//		Keyword:        "friendName",
//		SearchUserID:   true,
//		SearchNickname: true,
//		SearchRemark:   true,
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("SearchFriends success", ctx.Value("operationID"))
//	for _, item := range info.Friends {
//		t.Log(item)
//	}
//}
//
//func Test_AddBlack(t *testing.T) {
//	_, err := open_im_sdk.IMUserContext.Relation().AddBlack(ctx, &sdkpb.AddBlackReq{
//		UserID: "863454357",
//		Ex:     "ex",
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("AddBlack success", ctx.Value("operationID"))
//}
//
//func Test_DeleteBlack(t *testing.T) {
//	_, err := open_im_sdk.IMUserContext.Relation().DeleteBlack(ctx, &sdkpb.DeleteBlackReq{
//		UserID: "863454357",
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("DeleteBlack success", ctx.Value("operationID"))
//}
//
//func Test_GetBlacks(t *testing.T) {
//	info, err := open_im_sdk.IMUserContext.Relation().GetBlacks(ctx, &sdkpb.GetBlacksReq{})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("GetBlacks success", ctx.Value("operationID"))
//	for _, item := range info.Blacks {
//		t.Log(item)
//	}
//}
//
//func Test_UpdateFriends(t *testing.T) {
//	pinned := true
//	remark := "remark"
//	ex := "aaa"
//	_, err := open_im_sdk.IMUserContext.Relation().UpdateFriends(ctx, &sdkpb.UpdatesFriendsReq{
//		UserID: "2",
//		Pinned: &pinned,
//		Remark: &remark,
//		Ex:     &ex,
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("UpdateFriends success", ctx.Value("operationID"))
//}
