package ui

import (
	"log"

	"github.com/AllenDang/cimgui-go/imgui"
	"github.com/openimsdk/openim-sdk-core/v3/example/common"
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	pb_conversation "github.com/openimsdk/openim-sdk-core/v3/proto/go/conversation"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
)

type WindowConversationInfo struct {
	WindowBase
	conversationId string
	conversation   *shared.IMConversation
}

func (w *WindowConversationInfo) Start() {
	res, err := open_im_sdk.IMUserContext.Conversation().GetMultipleConversation(common.NewCallContext(), &pb_conversation.GetMultipleConversationReq{
		ConversationIDList: []string{w.conversationId},
	})
	if err != nil {
		log.Panic(err.Error())
	}
	if len(res.ConversationList) == 1 {
		w.conversation = res.ConversationList[0]
	} else {
		w.conversation = nil
	}
	w.Open = true
}

func (w *WindowConversationInfo) Update() {
	if !w.Open {
		return
	}

	if imgui.BeginV(w.Title, &w.Open, imgui.WindowFlagsHorizontalScrollbar|imgui.WindowFlagsAlwaysVerticalScrollbar) {
		if w.conversation != nil {
			var conversation = w.conversation

			imgui.Text("ConversationID:")
			imgui.SetCursorPosX(50)
			imgui.Text(conversation.ConversationID)

			imgui.Text("ConversationType:")
			imgui.SetCursorPosX(50)
			imgui.Text(conversation.ConversationType.String())

			imgui.Text("UserId:")
			imgui.SetCursorPosX(50)
			imgui.Text(conversation.UserID)

			imgui.Text("GroupId:")
			imgui.SetCursorPosX(50)
			imgui.Text(conversation.GroupID)

			imgui.Text("ShowName:")
			imgui.SetCursorPosX(50)
			imgui.Text(conversation.ShowName)

			imgui.Text("FaceURL:")
			imgui.SetCursorPosX(50)
			imgui.Text(conversation.FaceURL)

			imgui.Text("IsPinned:")
			imgui.SetCursorPosX(50)
			imgui.Checkbox("##IsPinned", &conversation.IsPinned)

			imgui.Text("IsPrivateChat:")
			imgui.SetCursorPosX(50)
			imgui.Checkbox("##IsPrivateChat", &conversation.IsPrivateChat)

			imgui.Text("Ex:")
			imgui.SetCursorPosX(50)
			imgui.InputTextWithHint("##Ex", "Ex", &conversation.Ex, 0, func(data imgui.InputTextCallbackData) int {
				return 0
			})

			imgui.Spacing()
			imgui.SetCursorPosX(50)
			imgui.PushIDStr("Btn_Update")
			if imgui.Button("Update") {
				_, err := open_im_sdk.IMUserContext.Conversation().SetConversation(common.NewCallContext(), &pb_conversation.SetConversationReq{
					ConversationID:  conversation.ConversationID,
					RecvMsgOpt:      &conversation.RecvMsgOpt,
					GroupAtType:     &conversation.GroupAtType,
					IsPinned:        &conversation.IsPinned,
					IsPrivateChat:   &conversation.IsPrivateChat,
					BurnDuration:    &conversation.BurnDuration,
					Ex:              &conversation.Ex,
					MsgDestructTime: &conversation.MsgDestructTime,
					IsMsgDestruct:   &conversation.IsMsgDestruct,
				})
				if err != nil {
					log.Panic(err.Error())
				}
			}
			imgui.PopID()
		}
	}
	imgui.End()
}

func (w *WindowConversationInfo) Destroy() {

}

func newConversationInfoWindow(conversationId string) *WindowConversationInfo {
	win := &WindowConversationInfo{
		WindowBase: WindowBase{
			X:     100,
			Y:     100,
			W:     500,
			H:     300,
			Title: "Conversation Info - " + conversationId,
			Id:    "Conversation List_" + conversationId,
		},
		conversationId: conversationId,
	}
	return win
}
