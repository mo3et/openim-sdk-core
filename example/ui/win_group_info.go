package ui

import (
	"fmt"
	"log"

	"github.com/AllenDang/cimgui-go/imgui"
	"github.com/openimsdk/openim-sdk-core/v3/example/common"
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	pb_group "github.com/openimsdk/openim-sdk-core/v3/proto/go/group"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
)

type WindowGroupInfo struct {
	WindowBase

	groupId string
	group   *shared.IMGroup
}

func (w *WindowGroupInfo) Start() {
	res, err := open_im_sdk.IMUserContext.Group().GetSpecifiedGroupsInfo(common.NewCallContext(), &pb_group.GetSpecifiedGroupsInfoReq{
		GroupIDs: []string{w.groupId},
	})
	if err != nil {
		log.Panic(err.Error())
	}
	if len(res.Groups) == 1 {
		w.group = res.Groups[0]
	}
}

func (w *WindowGroupInfo) Update() {
	if !w.Open {
		return
	}
	if w.group == nil {
		return
	}

	imgui.SetNextWindowSizeV(w.Size, imgui.CondFirstUseEver)
	imgui.SetNextWindowPosV(w.Pos, imgui.CondFirstUseEver, imgui.Vec2{X: 0, Y: 0})
	imgui.BeginV(w.Title, &w.Open, imgui.WindowFlagsNoCollapse)
	w.Size = imgui.WindowSize()
	w.Pos = imgui.WindowPos()

	group := w.group
	imgui.Text("GroupID:")
	imgui.SetCursorPosX(50)
	imgui.Text(group.GroupID)

	imgui.Text("GroupName:")
	imgui.SetCursorPosX(50)
	imgui.InputTextWithHint("##GroupName", "group name", &group.GroupName, 0, func(data imgui.InputTextCallbackData) int {
		return 0
	})

	imgui.Text("FaceURL:")
	imgui.SetCursorPosX(50)
	imgui.InputTextWithHint("##FaceURL", "Face URL", &group.FaceURL, 0, func(data imgui.InputTextCallbackData) int {
		return 0
	})

	imgui.Text("Notification:")
	imgui.SetCursorPosX(50)
	imgui.InputTextWithHint("##Notification", "notification", &group.Notification, 0, func(data imgui.InputTextCallbackData) int {
		return 0
	})

	imgui.Text("Introduction:")
	imgui.SetCursorPosX(50)
	imgui.InputTextWithHint("##Introduction", "intorduction", &group.Introduction, 0, func(data imgui.InputTextCallbackData) int {
		return 0
	})

	imgui.Text("OwnerUserId:")
	imgui.SetCursorPosX(50)
	imgui.Text(group.OwnerUserID)

	imgui.Text("CreateTime:")
	imgui.SetCursorPosX(50)
	imgui.Text(common.TimeStampToStr(group.CreateTime))

	imgui.Text("MemberCount:")
	imgui.SetCursorPosX(50)
	imgui.Text(fmt.Sprintf("%d", group.MemberCount))

	imgui.Text("Ex:")
	imgui.SetCursorPosX(50)
	imgui.InputTextWithHint("##Ex", "ex", &group.Ex, 0, func(data imgui.InputTextCallbackData) int {
		return 0
	})

	imgui.Text("Status:")
	imgui.SetCursorPosX(50)
	imgui.Text(group.Status.String())

	imgui.Text("CreateUserId:")
	imgui.SetCursorPosX(50)
	imgui.Text(group.CreatorUserID)

	imgui.Spacing()

	imgui.SetCursorPosX(50)
	if imgui.Button("Modify") {
		_, err := open_im_sdk.IMUserContext.Group().SetGroupInfo(common.NewCallContext(), &pb_group.SetGroupInfoReq{
			GroupID:      group.GroupID,
			GroupName:    &group.GroupName,
			Notification: &group.Notification,
			Introduction: &group.Introduction,
			FaceURL:      &group.FaceURL,
			Ex:           &group.Ex,
		})
		if err != nil {
			log.Panic(err.Error())
		}
	}
	imgui.End()
}

func (w *WindowGroupInfo) Destroy() {

}

func newGroupInfoWindow(groupId string) *WindowGroupInfo {
	win := &WindowGroupInfo{
		WindowBase: WindowBase{
			Pos:   imgui.Vec2{X: 100, Y: 100},
			Size:  imgui.Vec2{X: 500, Y: 800},
			Title: "Group_" + groupId,
			Id:    "Group_" + groupId,
			Open:  true,
		},
		groupId: groupId,
	}
	return win
}
