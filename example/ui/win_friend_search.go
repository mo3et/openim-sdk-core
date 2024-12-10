package ui

import (
	"log"

	"github.com/AllenDang/cimgui-go/imgui"
	"github.com/openimsdk/openim-sdk-core/v3/example/common"
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	relation "github.com/openimsdk/openim-sdk-core/v3/proto/go/relation"
)

type WindowFriendSearch struct {
	WindowBase
	keyword  string
	userId   bool
	nickName bool
	remark   bool

	result []*relation.SearchFriendsInfo
}

func (w *WindowFriendSearch) Start() {
	w.keyword = ""
	w.userId = false
	w.nickName = true
	w.remark = false
}

func (w *WindowFriendSearch) Update() {
	if !w.Open {
		return
	}
	imgui.SetNextWindowSizeV(w.Size, imgui.CondFirstUseEver)
	imgui.SetNextWindowPosV(w.Pos, imgui.CondFirstUseEver, imgui.Vec2{X: 0, Y: 0})
	imgui.BeginV(w.Title, &w.Open, imgui.WindowFlagsNoCollapse|imgui.WindowFlagsHorizontalScrollbar|imgui.WindowFlagsAlwaysVerticalScrollbar)
	w.Size = imgui.WindowSize()
	w.Pos = imgui.WindowPos()

	imgui.InputTextWithHint("##inputStr", "nickname | userid | remark", &w.keyword, 0, func(data imgui.InputTextCallbackData) int {
		return 0
	})
	imgui.SameLine()

	if imgui.Button("Search") {
		res, err := open_im_sdk.IMUserContext.Relation().SearchFriends(common.NewCallContext(), &relation.SearchFriendsReq{
			Keyword:        w.keyword,
			SearchUserID:   w.userId,
			SearchNickname: w.nickName,
			SearchRemark:   w.remark,
		})
		if err != nil {
			log.Panic(err.Error())
		}
		w.result = res.Friends
	}

	imgui.Checkbox("UserId", &w.userId)
	imgui.SameLine()
	imgui.Checkbox("NickName", &w.nickName)
	imgui.SameLine()
	imgui.Checkbox("Remark", &w.remark)

	if len(w.result) > 0 {
		for i := 0; i < len(w.result); i++ {
			friend := w.result[i]
			imgui.Text(friend.Friend.Nickname)
		}
	}

	imgui.End()

}

func (w *WindowFriendSearch) Destroy() {

}

func newFriendSearchWindow() *WindowFriendSearch {
	win := &WindowFriendSearch{
		WindowBase: WindowBase{
			Pos:   imgui.Vec2{X: 100, Y: 100},
			Size:  imgui.Vec2{X: 500, Y: 300},
			Title: "FriendList",
			Id:    "FriendList",
			Open:  true,
		},
	}
	return win
}
