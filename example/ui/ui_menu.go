package ui

import (
	"log"
	"os"

	"github.com/AllenDang/cimgui-go/imgui"
	"github.com/openimsdk/openim-sdk-core/v3/example/common"
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	pb_init "github.com/openimsdk/openim-sdk-core/v3/proto/go/init"
)

func DrawMainMenu() {
	if imgui.BeginMainMenuBar() {
		if imgui.BeginMenu("User") {
			if imgui.MenuItemBool("UserInfo") {
				userId := open_im_sdk.IMUserContext.GetLoginUserID()
				showWindow(newUserInfoWindow(userId))
			}
			imgui.Separator()
			if imgui.MenuItemBool("Logout") {
				_, err := open_im_sdk.IMUserContext.Logout(common.NewCallContext(), &pb_init.LogoutReq{})
				if err != nil {
					log.Panic(err)
				} else {
					os.Exit(0)
				}
			}
			imgui.EndMenu()
		}
		if imgui.BeginMenu("Friend") {
			if imgui.MenuItemBool("FriendList") {
				showWindow(newFriendListWindow())
			}
			if imgui.MenuItemBool("SearchFriend") {

			}
			if imgui.MenuItemBool("FriendApplication") {

			}
			imgui.EndMenu()
		}
		if imgui.BeginMenu("Group") {
			if imgui.MenuItemBool("GroupList") {

			}
			if imgui.MenuItemBool("CreateGroup") {

			}

			imgui.EndMenu()
		}
		if imgui.BeginMenu("Conversation") {
			if imgui.MenuItemBool("ConversationList") {
				showWindow(newConversationListWindow())
			}
			imgui.EndMenu()
		}
		if imgui.BeginMenu("About") {
			if imgui.MenuItemBool("Version") {
				showWindow(newVersionWindow())
			}
			if imgui.MenuItemBool("Official Website") {
				common.OpenBrowser("https://www.openim.io/en")
			}
			if imgui.MenuItemBool("Doc Website") {
				common.OpenBrowser("https://docs.openim.io/")
			}
			imgui.EndMenu()
		}
		imgui.EndMainMenuBar()
	}
}
