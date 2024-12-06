package main

import (
	"log"

	"github.com/AllenDang/giu"
	"github.com/openimsdk/openim-sdk-core/v3/example/ui"
)

func init() {
	log.SetFlags(log.Llongfile)
}

func Loop() {
	ui.Update()
}

func main() {
	userId := "test"
	token := "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiJ0ZXN0IiwiUGxhdGZvcm1JRCI6MywiZXhwIjoxNzQxMjIyMTA2LCJuYmYiOjE3MzM0NDU4MDYsImlhdCI6MTczMzQ0NjEwNn0.DpD1FXp2BhJuqhklOttb6l43WMExx2qohC-Z20BtHCA"

	wnd := giu.NewMasterWindow("IMSDK", 1000, 800, giu.MasterWindowFlagsFloating|giu.MasterWindowFlagsNotResizable)
	ui.SetWindowTitle = func(name string) {
		wnd.SetTitle("IMSDK-" + name)
	}

	ui.Init(userId, token)

	wnd.Run(Loop)

	ui.Exit()
}
