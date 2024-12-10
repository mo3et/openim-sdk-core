package ui

import (
	"fmt"
	"log"

	"github.com/AllenDang/cimgui-go/imgui"
	"github.com/openimsdk/openim-sdk-core/v3/example/common"
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	relation "github.com/openimsdk/openim-sdk-core/v3/proto/go/relation"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
)

type WindowFriendList struct {
	WindowBase

	friends []*shared.IMFriend
}

func (w *WindowFriendList) Start() {
	res, err := open_im_sdk.IMUserContext.Relation().GetFriends(common.NewCallContext(), &relation.GetFriendsReq{
		FilterBlack: true,
	})
	if err != nil {
		log.Panic(err.Error())
	}
	w.friends = res.Friends
	w.Open = true
}

func (w *WindowFriendList) Update() {
	if !w.Open {
		return
	}
	imgui.SetNextWindowSizeV(w.Size, imgui.CondFirstUseEver)
	imgui.SetNextWindowPosV(w.Pos, imgui.CondFirstUseEver, imgui.Vec2{X: 0, Y: 0})
	imgui.BeginV(w.Title, &w.Open, imgui.WindowFlagsNoCollapse|imgui.WindowFlagsHorizontalScrollbar|imgui.WindowFlagsAlwaysVerticalScrollbar)
	w.Size = imgui.WindowSize()
	w.Pos = imgui.WindowPos()

	if imgui.BeginTableV("FriendListTable", 6, imgui.TableFlagsBorders|imgui.TableFlagsRowBg|imgui.TableFlagsScrollX, imgui.Vec2{X: 0, Y: 0}, 0) {

		imgui.TableSetupColumn("Nickname")
		imgui.TableSetupColumn("FaceURL")
		imgui.TableSetupColumn("Remark")
		imgui.TableSetupColumn("Chat")
		imgui.TableSetupColumn("Delete")
		imgui.TableSetupColumn("Detail")
		imgui.TableHeadersRow()

		for i := 0; i < len(w.friends); i++ {
			friend := w.friends[i]

			imgui.TableNextColumn()
			imgui.TableSetColumnIndex(0)
			imgui.Text(friend.Nickname)

			imgui.TableSetColumnIndex(1)
			imgui.Text(friend.FaceURL)

			imgui.TableSetColumnIndex(2)
			imgui.Text(friend.Remark)

			imgui.TableSetColumnIndex(3)
			imgui.PushIDStr(fmt.Sprintf("Btn_Chat_%d", i))
			if imgui.Button("Chat") {
			}
			imgui.PopID()

			imgui.TableSetColumnIndex(4)
			imgui.PushIDStr(fmt.Sprintf("Btn_Delete_%d", i))
			if imgui.Button("Delete") {
			}
			imgui.PopID()

			imgui.TableSetColumnIndex(5)
			imgui.PushIDStr(fmt.Sprintf("Btn_Detail_%d", i))
			if imgui.Button("Detail") {

			}
			imgui.PopID()
		}

		imgui.EndTable()
	}
	imgui.End()
}

func (w *WindowFriendList) Destroy() {

}

func newFriendListWindow() *WindowFriendList {
	win := &WindowFriendList{
		WindowBase: WindowBase{
			Pos:   imgui.Vec2{X: 100, Y: 100},
			Size:  imgui.Vec2{X: 500, Y: 300},
			Title: "FriendList",
			Id:    "FriendList",
		},
	}
	return win
}
