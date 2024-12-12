package ui

import (
	"log"

	"github.com/AllenDang/cimgui-go/imgui"
	"github.com/openimsdk/openim-sdk-core/v3/example/common"
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	pb_group "github.com/openimsdk/openim-sdk-core/v3/proto/go/group"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/relation"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
)

type WindowGroupCreate struct {
	WindowBase

	groupName    string
	friendList   []*shared.IMFriend
	selectMember []bool
}

func (w *WindowGroupCreate) Start() {
	w.groupName = ""
	res, err := open_im_sdk.IMUserContext.Relation().GetFriends(common.NewCallContext(), &relation.GetFriendsReq{
		FilterBlack: true,
	})
	if err != nil {
		log.Panic(err.Error())
	}
	w.friendList = res.Friends
	w.selectMember = make([]bool, len(w.friendList))
	for i := 0; i < len(w.friendList); i++ {
		w.selectMember[i] = false
	}
}

func (w *WindowGroupCreate) Update() {
	if !w.Open {
		return
	}

	imgui.SetNextWindowSizeV(w.Size, imgui.CondFirstUseEver)
	imgui.SetNextWindowPosV(w.Pos, imgui.CondFirstUseEver, imgui.Vec2{X: 0, Y: 0})
	imgui.BeginV(w.Title, &w.Open, imgui.WindowFlagsNoCollapse)
	w.Size = imgui.WindowSize()
	w.Pos = imgui.WindowPos()

	imgui.Text("Group Name")
	imgui.SameLine()
	imgui.InputTextWithHint("##gameName", "group name", &w.groupName, 0, func(data imgui.InputTextCallbackData) int {
		return 0
	})
	imgui.Text("Select Members:")
	if imgui.BeginTableV("SelectFriendListTable", 2, imgui.TableFlagsBorders|imgui.TableFlagsRowBg|imgui.TableFlagsScrollX, imgui.Vec2{X: 0, Y: 500}, 0) {

		for i := 0; i < len(w.friendList); i++ {
			friend := w.friendList[i]

			imgui.TableNextColumn()

			imgui.TableSetColumnIndex(0)
			imgui.Text(friend.Nickname)

			imgui.TableSetColumnIndex(1)
			imgui.Checkbox("##Select", &w.selectMember[i])
		}

		imgui.EndTable()
	}

	imgui.Spacing()

	imgui.SetCursorPosX(50)
	if imgui.Button("Create") {
		memebers := make([]string, 0)
		for k, v := range w.selectMember {
			if v {
				memebers = append(memebers, w.friendList[k].FriendUserID)
			}
		}
		_, err := open_im_sdk.IMUserContext.Group().CreateGroup(common.NewCallContext(), &pb_group.CreateGroupReq{
			AdminUserIDs:  []string{},
			MemberUserIDs: memebers,
			GroupName:     w.groupName,
		})
		if err != nil {
			log.Println(err.Error())
		}
	}
	imgui.End()
}

func (w *WindowGroupCreate) Destroy() {

}

func newGroupCreateWindow() *WindowGroupCreate {
	win := &WindowGroupCreate{
		WindowBase: WindowBase{
			Pos:   imgui.Vec2{X: 100, Y: 100},
			Size:  imgui.Vec2{X: 300, Y: 800},
			Title: "CreateGroup",
			Id:    "CreateGroup",
			Open:  true,
		},
	}
	return win
}
