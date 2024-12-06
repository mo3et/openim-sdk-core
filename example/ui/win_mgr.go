package ui

var windowMap = make(map[string]IWindow)

type IWindow interface {
	Start()
	Update()
	Destroy()
}

type WindowBase struct {
	X, Y float32 // pos
	W, H float32 // width,height
	Name string  // title name
}

func (w *WindowBase) Start() {

}

func (w *WindowBase) Update() {

}

func (w *WindowBase) Destroy() {

}

func showWindow(name string, win IWindow) {
	windowMap[name] = win
}

func drawAllWindow() {
	for _, win := range windowMap {
		win.Update()
	}
}
