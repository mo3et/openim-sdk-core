package ui

import (
	g "github.com/AllenDang/giu"
)

func DrawMainMenu() {
	g.MainMenuBar().Layout(
		g.Menu("User").Layout(
			g.MenuItem("UserInfo").OnClick(func() {
				showWindow("UserInfo--", newUserInfoWindow("test"))
			}),
			g.Separator(),
			g.MenuItem("Logout").OnClick(func() {

			}),
		),
		g.Menu("Friend").Layout(

			g.MenuItem("FriendList").OnClick(func() {

			}),
			g.MenuItem("SearchFriend").OnClick(func() {

			}),
			g.MenuItem("FriendApplication").OnClick(func() {

			}),
		),
		g.Menu("Group").Layout(
			g.MenuItem("GroupList").OnClick(func() {

			}),
			g.MenuItem("CreateGroup").OnClick(func() {

			}),
		),
		g.Menu("Conversation").Layout(
			g.MenuItem("ConversationList").OnClick(func() {

			}),
		),
		g.Menu("About").Layout(
			g.MenuItem("Version").OnClick(func() {

			}),
		),
	).Build()
}
