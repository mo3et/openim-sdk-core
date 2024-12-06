package main

import (
	"log"

	"github.com/AllenDang/giu"
	"github.com/openimsdk/openim-sdk-core/v3/example/ui"
)

func init() {
	log.SetFlags(log.Llongfile)
}

func main() {
	userId := "test"
	token := "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiJ0ZXN0IiwiUGxhdGZvcm1JRCI6MywiZXhwIjoxNzQxMjI4NzA5LCJuYmYiOjE3MzM0NTI0MDksImlhdCI6MTczMzQ1MjcwOX0.pRc_U7j5AZU9PBy1BhFfYykB-yHQu9_dAfCNWx1yCjo"
	nickName := ui.Login(userId, token)
	if nickName != "" {
		wnd := giu.NewMasterWindow(nickName, 1000, 800, 0)
		wnd.Run(func() {
			ui.DrawMainMenu()
			ui.DrawAllWindow()
		})
	}
}
