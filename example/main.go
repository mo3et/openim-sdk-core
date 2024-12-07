package main

import (
	"log"

	"github.com/AllenDang/cimgui-go/backend"
	ebitenbackend "github.com/AllenDang/cimgui-go/backend/ebiten-backend"
	"github.com/AllenDang/cimgui-go/imgui"
	"github.com/openimsdk/openim-sdk-core/v3/example/ui"
)

var currentBackend backend.Backend[ebitenbackend.EbitenBackendFlags]

func init() {
	log.SetFlags(log.Llongfile)
}

func loop() {
	ui.DrawMainMenu()
	ui.DrawAllWindow()
}

func main() {
	userId := "6521273309"
	token := "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiI2NTIxMjczMzA5IiwiUGxhdGZvcm1JRCI6MywiZXhwIjoxNzQxMzIzMjI5LCJuYmYiOjE3MzM1NDY5MjksImlhdCI6MTczMzU0NzIyOX0.K4Mx8b2brgPP2El_mfjSI9b6ZZKADEtjWTpNMjyCJXk"
	nickName := ui.Login(userId, token)

	currentBackend, _ = backend.CreateBackend(ebitenbackend.NewEbitenBackend())
	currentBackend.SetBgColor(imgui.NewVec4(0.45, 0.55, 0.6, 1.0))
	currentBackend.CreateWindow(nickName, 1200, 900)
	currentBackend.SetCloseCallback(func(b backend.Backend[ebitenbackend.EbitenBackendFlags]) {
	})

	currentBackend.Run(loop)
}
