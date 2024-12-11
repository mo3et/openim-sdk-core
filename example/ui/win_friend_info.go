package ui

import (
	"github.com/AllenDang/cimgui-go/imgui"
	"github.com/openimsdk/openim-sdk-core/v3/example/common"
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	pb_relation "github.com/openimsdk/openim-sdk-core/v3/proto/go/relation"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
	"log"
)

type WindowFriendInfo struct {
	WindowBase

	friendId   string
	friendInfo *shared.IMFriend
}

func (w *WindowFriendInfo) Start() {
	res, err := open_im_sdk.IMUserContext.Relation().GetSpecifiedFriends(common.NewCallContext(), &pb_relation.GetSpecifiedFriendsReq{
		FilterBlack:   true,
		FriendUserIDs: []string{w.friendId},
	})
	if err != nil {
		log.Panic(err.Error())
	}
	if len(res.Friends) == 1 {
		w.friendInfo = res.Friends[0]
	}
}

func (w *WindowFriendInfo) Update() {
	if !w.Open {
		return
	}
	if w.friendInfo == nil {
		return
	}

	imgui.SetNextWindowSizeV(w.Size, imgui.CondFirstUseEver)
	imgui.SetNextWindowPosV(w.Pos, imgui.CondFirstUseEver, imgui.Vec2{X: 0, Y: 0})
	imgui.BeginV(w.Title, &w.Open, imgui.WindowFlagsNoCollapse)
	w.Size = imgui.WindowSize()
	w.Pos = imgui.WindowPos()

	friend := w.friendInfo
	imgui.Text("UserID:")
	imgui.SetCursorPosX(50)
	imgui.Text(friend.FriendUserID)

	imgui.Text("OnwerUserId:")
	imgui.SetCursorPosX(50)
	imgui.Text(friend.OwnerUserID)

	imgui.Text("CreateTime:")
	imgui.SetCursorPosX(50)
	imgui.Text(common.TimeStampToStr(friend.CreateTime))

	imgui.Text("AddSource:")
	imgui.SetCursorPosX(50)
	imgui.Text(friend.AddSource.String())

	imgui.Text("OperatorUserId:")
	imgui.SetCursorPosX(50)
	imgui.Text(friend.OperatorUserID)

	imgui.Text("NickName:")
	imgui.SetCursorPosX(50)
	imgui.Text(friend.Nickname)

	imgui.Text("FaceURL:")
	imgui.SetCursorPosX(50)
	imgui.Text(friend.FaceURL)

	imgui.Text("Remark:")
	imgui.SetCursorPosX(50)
	imgui.InputTextWithHint("##Remark", "Ex", &friend.Remark, 0, func(data imgui.InputTextCallbackData) int {
		return 0
	})
	imgui.Text("Ex:")
	imgui.SetCursorPosX(50)
	imgui.InputTextWithHint("##Ex", "Ex", &friend.Ex, 0, func(data imgui.InputTextCallbackData) int {
		return 0
	})

	imgui.Text("IsPinned:")
	imgui.SetCursorPosX(50)
	imgui.Checkbox("##IsPinned", &friend.IsPinned)

	imgui.Spacing()

	imgui.SetCursorPosX(50)
	if imgui.Button("Modify") {
		_, err := open_im_sdk.IMUserContext.Relation().UpdateFriend(common.NewCallContext(), &pb_relation.UpdateFriendReq{
			UserID: friend.FriendUserID,
			Remark: &friend.Remark,
			Pinned: &friend.IsPinned,
			Ex:     &friend.Ex,
		})
		if err != nil {
			log.Panic(err.Error())
		}
	}
	imgui.End()
}

func (w *WindowFriendInfo) Destroy() {

}

func newFriendInfoWindow(friendId string) *WindowFriendInfo {
	win := &WindowFriendInfo{
		WindowBase: WindowBase{
			Pos:   imgui.Vec2{X: 100, Y: 100},
			Size:  imgui.Vec2{X: 500, Y: 800},
			Title: "Friend-" + friendId,
			Id:    "Friend_" + friendId,
			Open:  true,
		},
		friendId: friendId,
	}
	return win
}
