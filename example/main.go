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
	token := "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiJ0ZXN0IiwiUGxhdGZvcm1JRCI6MywiZXhwIjoxNzQxMTU1OTAzLCJuYmYiOjE3MzMzNzk2MDMsImlhdCI6MTczMzM3OTkwM30.GdMMCBvFmBIX9wVQzoG5zITzwK2RwUGls2U3t2udvLY"
	ui.Init(userId, token)

	wnd := giu.NewMasterWindow("IMSDK", 1000, 800, giu.MasterWindowFlagsFloating|giu.MasterWindowFlagsNotResizable)
	wnd.Run(Loop)

	ui.Exit()
}
