package ui

import (
	g "github.com/AllenDang/giu"
)

func drawMainMenu() {
	g.MainMenuBar().Layout(
		g.Menu("File").Layout(
			g.MenuItem("UserInfo").OnClick(func() {
				showWindow("UserInfo--", newUserInfoWindow("test"))
			}),
			g.Separator(),
			g.MenuItem("Exit").OnClick(func() {

			}),
		),
	).Build()
}
