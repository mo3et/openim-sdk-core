package ui

import (
	"fmt"
	"log"

	"github.com/AllenDang/cimgui-go/imgui"
	"github.com/openimsdk/openim-sdk-core/v3/example/common"
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	pb_conversation "github.com/openimsdk/openim-sdk-core/v3/proto/go/conversation"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
)

type WindowConversationList struct {
	WindowBase

	conversations []*shared.IMConversation
}

func (w *WindowConversationList) Start() {
	res, err := open_im_sdk.IMUserContext.Conversation().GetAllConversationList(common.NewCallContext(), &pb_conversation.GetAllConversationListReq{})
	if err != nil {
		log.Panic(err.Error())
	}
	w.conversations = res.ConversationList
	w.Open = true
}

func (w *WindowConversationList) Update() {
	if !w.Open {
		return
	}

	if imgui.BeginV(w.Title, &w.Open, imgui.WindowFlagsHorizontalScrollbar|imgui.WindowFlagsAlwaysVerticalScrollbar) {

		if imgui.BeginTableV("FriendListTable", 6, imgui.TableFlagsBorders|imgui.TableFlagsRowBg|imgui.TableFlagsScrollX, imgui.Vec2{X: 0, Y: 0}, 0) {

			imgui.TableSetupColumn("ShowName")
			imgui.TableSetupColumn("FaceURL")
			imgui.TableSetupColumn("UnreadCount")
			imgui.TableSetupColumn("Chat")
			imgui.TableSetupColumn("Delete")
			imgui.TableSetupColumn("Detail")
			imgui.TableHeadersRow()

			for i := 0; i < len(w.conversations); i++ {
				conversation := w.conversations[i]

				imgui.TableNextColumn()
				imgui.TableSetColumnIndex(0)
				imgui.Text(conversation.ShowName)

				imgui.TableSetColumnIndex(1)
				imgui.Text(conversation.FaceURL)

				imgui.TableSetColumnIndex(2)
				imgui.Text(fmt.Sprintf("%d", conversation.UnreadCount))

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
				imgui.PushIDStr(fmt.Sprintf("Btn_Detail", i))
				if imgui.Button("Detail") {
					showWindow(newConversationInfoWindow(conversation.ConversationID))
				}
				imgui.PopID()
			}

			imgui.EndTable()
		}
		imgui.End()
	}
}

func (w *WindowConversationList) Destroy() {

}

func newConversationListWindow() *WindowConversationList {
	win := &WindowConversationList{
		WindowBase: WindowBase{
			X:     100,
			Y:     100,
			W:     500,
			H:     300,
			Title: "Conversation List",
			Id:    "Conversation List",
		},
	}
	return win
}
