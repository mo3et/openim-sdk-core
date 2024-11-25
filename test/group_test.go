package test

//
//import (
//	"testing"
//
//	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
//	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto"
//	"github.com/openimsdk/tools/utils/datautil"
//)
//
//func Test_CreateGroupV2(t *testing.T) {
//	req := &sdkpb.CreateGroupReq{
//		MemberUserIDs: []string{"7299270930"},
//		AdminUserIDs:  []string{"1"},
//		GroupInfo: &sdkpb.IMGroup{
//			GroupName:   "test",
//			OwnerUserID: UserID,
//		},
//	}
//	info, err := open_im_sdk.IMUserContext.Group().CreateGroup(ctx, req)
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Logf("group info: %s", info.String())
//}
//
//func Test_JoinGroup(t *testing.T) {
//	_, err := open_im_sdk.IMUserContext.Group().JoinGroup(ctx, &sdkpb.JoinGroupReq{
//		GroupID:    "3889561099",
//		ReqMessage: "1234",
//		JoinSource: 3,
//		Ex:         "ex",
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("JoinGroup success")
//}
//
//func Test_QuitGroup(t *testing.T) {
//	_, err := open_im_sdk.IMUserContext.Group().QuitGroup(ctx, &sdkpb.QuitGroupReq{
//		GroupID: "xadxwr24",
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("QuitGroup success")
//}
//
//func Test_DismissGroup(t *testing.T) {
//	_, err := open_im_sdk.IMUserContext.Group().DismissGroup(ctx, &sdkpb.DismissGroupReq{
//		GroupID: "1728503199",
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("DismissGroup success")
//}
//
//func Test_ChangeGroupMute(t *testing.T) {
//	_, err := open_im_sdk.IMUserContext.Group().ChangeGroupMute(ctx, &sdkpb.ChangeGroupMuteReq{
//		GroupID: "3459296007",
//		Mute:    true,
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("ChangeGroupMute success", ctx.Value("operationID"))
//}
//
//func Test_CancelMuteGroup(t *testing.T) {
//	_, err := open_im_sdk.IMUserContext.Group().ChangeGroupMute(ctx, &sdkpb.ChangeGroupMuteReq{
//		GroupID: "3459296007",
//		Mute:    false,
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("CancelMuteGroup success", ctx.Value("operationID"))
//}
//
//func Test_ChangeGroupMemberMute(t *testing.T) {
//	_, err := open_im_sdk.IMUserContext.Group().ChangeGroupMemberMute(ctx, &sdkpb.ChangeGroupMemberMuteReq{
//		GroupID:      "3459296007",
//		UserID:       UserID,
//		MutedSeconds: 10000,
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("ChangeGroupMemberMute success", ctx.Value("operationID"))
//}
//
//func Test_CancelChangeGroupMemberMute(t *testing.T) {
//	_, err := open_im_sdk.IMUserContext.Group().ChangeGroupMemberMute(ctx, &sdkpb.ChangeGroupMemberMuteReq{
//		GroupID:      "3459296007",
//		UserID:       UserID,
//		MutedSeconds: 0,
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("CancelChangeGroupMemberMute success", ctx.Value("operationID"))
//}
//
//func Test_SetGroupMemberInfo(t *testing.T) {
//	_, err := open_im_sdk.IMUserContext.Group().SetGroupMemberInfo(ctx, &sdkpb.SetGroupMemberInfoReq{
//		GroupID:  "3889561099",
//		UserID:   UserID,
//		FaceURL:  datautil.ToPtr("https://doc.rentsoft.cn/images/logo.png"),
//		Nickname: datautil.ToPtr("testupdatename"),
//		Ex:       datautil.ToPtr("a"),
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("SetGroupMemberInfo success", ctx.Value("operationID"))
//}
//
//func Test_SearchGroupMembers(t *testing.T) {
//	info, err := open_im_sdk.IMUserContext.Group().SearchGroupMembers(ctx, &sdkpb.SearchGroupMembersReq{
//		GroupID:              "3459296007",
//		Keyword:              "A",
//		SearchUserID:         false,
//		SearchMemberNickname: false,
//		Pagination: &sdkpb.RequestPagination{
//			PageNumber: 1,
//			ShowNumber: 10,
//		},
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Logf("SearchGroupMembers: %d\n", len(info.Members))
//	for _, localGroup := range info.Members {
//		t.Logf("%#v", localGroup)
//	}
//}
//
//func Test_KickGroupMember(t *testing.T) {
//	_, err := open_im_sdk.IMUserContext.Group().KickGroupMember(ctx, &sdkpb.KickGroupMemberReq{
//		GroupID:       "3459296007",
//		KickedUserIDs: []string{"863454357"},
//		Reason:        "test",
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("KickGroupMember success", ctx.Value("operationID"))
//}
//
//func Test_TransferGroupOwner(t *testing.T) {
//	_, err := open_im_sdk.IMUserContext.Group().TransferGroupOwner(ctx, &sdkpb.TransferGroupOwnerReq{
//		GroupID:     "1728503199",
//		OwnerUserID: "5226390099",
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("TransferGroupOwner success", ctx.Value("operationID"))
//}
//
//func Test_InviteUserToGroup(t *testing.T) {
//	_, err := open_im_sdk.IMUserContext.Group().InviteUserToGroup(ctx, &sdkpb.InviteUserToGroupReq{
//		GroupID: "3459296007",
//		Reason:  "test",
//		UserIDs: []string{"45644221123"},
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("InviteUserToGroup success", ctx.Value("operationID"))
//}
//
//func Test_GetGroup(t *testing.T) {
//	t.Log("--------------------------")
//	infos, err := open_im_sdk.IMUserContext.Group().GetSpecifiedGroupsInfo(ctx, &sdkpb.GetSpecifiedGroupsInfoReq{
//		GroupIDs: []string{"3179997540"},
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	for i, info := range infos.Groups {
//		t.Logf("%d: %#v", i, info)
//	}
//}
//
//func Test_GetServerSelfGroupApplication(t *testing.T) {
//	t.Log("--------------------------")
//	infos, err := open_im_sdk.IMUserContext.Group().GetServerSelfGroupApplication(ctx)
//	if err != nil {
//		t.Fatal(err)
//	}
//	for i, info := range infos {
//		t.Logf("%d: %#v", i, info)
//	}
//}
//
//func Test_IsJoinGroup(t *testing.T) {
//	t.Log("--------------------------")
//	join, err := open_im_sdk.IMUserContext.Group().IsJoinGroup(ctx, &sdkpb.IsJoinGroupReq{
//		GroupID: "3889561099",
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("join:", join.Joined)
//}
//
//func Test_GetGroupMembers(t *testing.T) {
//	t.Log("--------------------------")
//	m := map[sdkpb.GroupFilter]string{
//		sdkpb.GroupFilter_Owner:         "Group Owner",
//		sdkpb.GroupFilter_Admin:         "Administrator",
//		sdkpb.GroupFilter_OrdinaryUsers: "Members",
//	}
//
//	members, err := open_im_sdk.IMUserContext.Group().GetGroupMembers(ctx, &sdkpb.GetGroupMembersReq{
//		GroupID: "3889561099",
//		Filter:  0,
//		Pagination: &sdkpb.RequestPagination{
//			PageNumber: 1,
//			ShowNumber: 10,
//		},
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	for i, member := range members.Members {
//		name := m[sdkpb.GroupFilter(member.RoleLevel)]
//		t.Log(i, member.UserID, member.Nickname, name)
//	}
//	t.Log("--------------------------")
//}
//
//func Test_SetGroupInfo(t *testing.T) {
//	_, err := open_im_sdk.IMUserContext.Group().SetGroupInfo(ctx, &sdkpb.SetGroupInfoReq{
//		GroupID: "3889561099",
//		Ex:      datautil.ToPtr("groupex"),
//	})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Log("SetGroupInfo success")
//}
//
//func Test_GetJoinedGroupListPage(t *testing.T) {
//	t.Log("-----------------------")
//	info, err := open_im_sdk.IMUserContext.Group().GetJoinedGroups(ctx, &sdkpb.GetJoinedGroupsReq{})
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Logf("Joined Groups: %v", info.Groups)
//	t.Log("-----------------------")
//}
