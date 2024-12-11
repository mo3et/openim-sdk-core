package ui

import (
	"log"

	"github.com/AllenDang/cimgui-go/imgui"
	"github.com/openimsdk/openim-sdk-core/v3/example/common"
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/user"
)

type WindowUserSearch struct {
	WindowBase
	inputStr string

	result *shared.IMUser
}

func (w *WindowUserSearch) Start() {
	w.inputStr = ""
	w.result = nil
}

func (w *WindowUserSearch) Update() {
	if !w.Open {
		return
	}
	imgui.SetNextWindowSizeV(w.Size, imgui.CondFirstUseEver)
	imgui.SetNextWindowPosV(w.Pos, imgui.CondFirstUseEver, imgui.Vec2{X: 0, Y: 0})
	imgui.BeginV(w.Title, &w.Open, imgui.WindowFlagsNoCollapse|imgui.WindowFlagsHorizontalScrollbar|imgui.WindowFlagsAlwaysVerticalScrollbar)
	w.Size = imgui.WindowSize()
	w.Pos = imgui.WindowPos()

	imgui.InputTextWithHint("##inputStr", "userId", &w.inputStr, 0, func(data imgui.InputTextCallbackData) int {
		return 0
	})
	imgui.SameLine()

	if imgui.Button("Search") {
		res, err := open_im_sdk.IMUserContext.User().GetUsersInfo(common.NewCallContext(), &user.GetUsersInfoReq{
			UserIDs: []string{w.inputStr},
		})
		if err != nil {
			log.Panic(err.Error())
		}
		if len(res.Users) == 1 {
			w.result = res.Users[0]
		}
	}

	if w.result != nil {
		imgui.Text(w.result.Nickname)
	}

	imgui.End()

}

func (w *WindowUserSearch) Destroy() {

}

func newUserSearchWindow() *WindowUserSearch {
	win := &WindowUserSearch{
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
