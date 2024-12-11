package ui

import (
	"fmt"
	"log"

	"github.com/AllenDang/cimgui-go/imgui"
	"github.com/openimsdk/openim-sdk-core/v3/example/common"
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	pb_init "github.com/openimsdk/openim-sdk-core/v3/proto/go/init"
)

type WindowVersion struct {
	WindowBase
	VersionStr string
}

func (w *WindowVersion) Start() {
	res, err := open_im_sdk.IMUserContext.Version(common.NewCallContext(), &pb_init.VersionReq{})
	if err != nil {
		log.Panic(err.Error())
	}
	w.VersionStr = fmt.Sprintf("OpenIM SDK Version:%s", res.Version)
}

func (w *WindowVersion) Update() {
	if !w.Open {
		return
	}
	viewSize := imgui.MainViewport().Size()
	imgui.SetNextWindowPos(imgui.Vec2{
		X: (viewSize.X - w.Size.X) / 2,
		Y: (viewSize.Y - w.Size.Y) / 2,
	})
	imgui.SetNextWindowSize(w.Size)

	imgui.BeginV(w.Title, &w.Open, imgui.WindowFlagsNoCollapse|imgui.WindowFlagsNoMove|imgui.WindowFlagsNoResize)
	w.Size = imgui.WindowSize()
	w.Pos = imgui.WindowPos()
	textSize := imgui.CalcTextSize(w.VersionStr)
	startPos := imgui.Vec2{
		X: (w.Size.X - textSize.X) * 0.5,
		Y: (w.Size.Y - textSize.Y) * 0.5,
	}
	imgui.SetCursorPos(startPos)
	imgui.Text(w.VersionStr)

	imgui.End()
}

func (w *WindowVersion) Destroy() {

}

func newVersionWindow() *WindowVersion {
	win := &WindowVersion{
		WindowBase: WindowBase{
			Title: "Version",
			Open:  true,
			Pos:   imgui.Vec2{X: 100, Y: 100},
			Size:  imgui.Vec2{X: 300, Y: 300},
		},
	}
	return win
}
