package ui

import (
	"fmt"
	"log"

	g "github.com/AllenDang/giu"
	"github.com/openimsdk/openim-sdk-core/v3/example/common"
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/user"
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
}

func (w *WindowUserInfo) Update() {
	g.Window(w.userId).Size(w.W, w.H).Pos(w.X, w.Y).Layout(
		g.Condition(w.userInfo != nil, g.Layout{
			g.Label(fmt.Sprintf("UserId: %s ", w.userInfo.UserID)),
			g.Row(g.Layout{
				g.Label("NickName:"),
				g.InputText(&w.userInfo.Nickname),
			}),
			g.Row(g.Layout{
				g.Label("FaceURL:"),
				g.InputText(&w.userInfo.FaceURL),
			}),
			g.Row(g.Layout{
				g.Label("Created Time:"),
				g.Label(common.TimeStampToStr(w.userInfo.CreateTime)),
			}),
			g.Row(g.Layout{
				g.Label("Ex:"),
				g.InputText(&w.userInfo.Ex),
			}),
			g.Row(g.Layout{
				g.Label("Attached:"),
				g.InputText(&w.userInfo.Attached),
			}),
			g.Button("Change").OnClick(func() {
				_, err := open_im_sdk.IMUserContext.User().SetSelfInfo(common.NewCallContext(), &user.SetSelfInfoReq{
					UserID:   w.userInfo.UserID,
					Nickname: &w.userInfo.Nickname,
					FaceURL:  &w.userInfo.FaceURL,
					Ex:       &w.userInfo.Ex,
				})
				if err != nil {
					log.Panic(err.Error())
				}
			}),
		}, g.Layout{}),
	)
}

func (w *WindowUserInfo) Destroy() {

}

func newUserInfoWindow(userId string) *WindowUserInfo {
	win := &WindowUserInfo{
		WindowBase: WindowBase{
			X: 100,
			Y: 100,
			W: 500,
			H: 300,
		},
		userId: userId,
	}
	return win
}
