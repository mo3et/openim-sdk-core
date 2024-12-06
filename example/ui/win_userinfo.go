package ui

import (
	g "github.com/AllenDang/giu"
)

type WindowUserInfo struct {
	WindowBase

	userId string
}

func (w *WindowUserInfo) Start() {

}

func (w *WindowUserInfo) Update() {
	g.Window(w.userId).Pos(w.X, w.Y).Size(w.W, w.H).Layout(
		g.Label("I'm a label in window 1"),
	)
}

func (w *WindowUserInfo) Destroy() {

}

func newUserInfoWindow(userId string) *WindowUserInfo {
	win := &WindowUserInfo{
		WindowBase: WindowBase{
			X: 0,
			Y: 0,
			W: 200,
			H: 200,
		},
		userId: userId,
	}
	return win
}
