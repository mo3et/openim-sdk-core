package ui

import (
	pb_event "github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
)

type CustomBusinessListener struct{}

func (c *CustomBusinessListener) OnRecvCustomBusinessMessage(data *pb_event.EventOnRecvCustomBusinessMessageData) {
}

func newCustomBusinessListener() *CustomBusinessListener {
	return &CustomBusinessListener{}
}
