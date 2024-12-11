package ui

import (
	"github.com/AllenDang/cimgui-go/imgui"
	"github.com/openimsdk/openim-sdk-core/v3/example/common"
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/user"
	"log"
)

type WindowUserInfo struct {
	WindowBase

	userId   string
	userInfo *shared.IMUser
}

func (w *WindowUserInfo) Start() {
	res, err := open_im_sdk.IMUserContext.User().GetSelfUserInfo(common.NewCallContext(), &user.GetSelfUserInfoReq{})
	if err != nil {
		log.Panic(err.Error())
	}
	w.userInfo = res.User
	w.Open = true
}

func (w *WindowUserInfo) Update() {
	if !w.Open {
		return
	}
	if w.userInfo == nil {
		return
	}

	imgui.SetNextWindowSizeV(w.Size, imgui.CondFirstUseEver)
	imgui.SetNextWindowPosV(w.Pos, imgui.CondFirstUseEver, imgui.Vec2{X: 0, Y: 0})
	imgui.BeginV(w.Title, &w.Open, imgui.WindowFlagsNoCollapse)
	w.Size = imgui.WindowSize()
	w.Pos = imgui.WindowPos()

	imgui.Text("UserID:")
	imgui.SetCursorPosX(50)
	imgui.Text(w.userInfo.UserID)

	imgui.Text("CreateTime:")
	imgui.SetCursorPosX(50)
	imgui.Text(common.TimeStampToStr(w.userInfo.CreateTime))

	imgui.Text("Nickname:")
	imgui.SetCursorPosX(50)
	imgui.InputTextWithHint("##NickName", "Enter Your Nick Name", &w.userInfo.Nickname, 0, func(data imgui.InputTextCallbackData) int {
		return 0
	})

	imgui.Text("FaceURL:")
	imgui.SetCursorPosX(50)
	imgui.InputTextWithHint("##FaceUrl", "Face Url", &w.userInfo.FaceURL, 0, func(data imgui.InputTextCallbackData) int {
		return 0
	})

	imgui.Text("Ex:")
	imgui.SetCursorPosX(50)
	imgui.InputTextWithHint("##Ex", "Ex", &w.userInfo.Ex, 0, func(data imgui.InputTextCallbackData) int {
		return 0
	})

	imgui.Spacing()
	imgui.SetCursorPosX(50)
	imgui.PushIDStr("Btn_Update")
	if imgui.Button("Update") {
		log.Println(w.userInfo)
		_, err := open_im_sdk.IMUserContext.User().SetSelfInfo(common.NewCallContext(), &user.SetSelfInfoReq{
			UserID:   w.userInfo.UserID,
			Nickname: &w.userInfo.Nickname,
			FaceURL:  &w.userInfo.FaceURL,
			Ex:       &w.userInfo.Ex,
		})
		if err != nil {
			log.Panic(err.Error())
		}
	}
	imgui.PopID()
	imgui.End()
}

func (w *WindowUserInfo) Destroy() {

}

func newUserInfoWindow(userId string) *WindowUserInfo {
	win := &WindowUserInfo{
		WindowBase: WindowBase{
			Pos:   imgui.Vec2{X: 100, Y: 100},
			Size:  imgui.Vec2{X: 500, Y: 300},
			Title: "UserInfo-" + userId,
			Id:    "UserInfo_" + userId,
		},
		userId: userId,
	}
	return win
}
