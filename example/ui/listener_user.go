package ui

import (
	pb_event "github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
)

type UserListener struct{}

func (u *UserListener) OnSelfInfoUpdated(data *pb_event.EventOnSelfInfoUpdatedData) {}

func (u *UserListener) OnUserStatusChanged(data *pb_event.EventOnUserStatusChangedData) {}

func (u *UserListener) OnUserCommandAdd(data *pb_event.EventOnUserCommandAddData) {}

func (u *UserListener) OnUserCommandDelete(data *pb_event.EventOnUserCommandDeleteData) {}

func (u *UserListener) OnUserCommandUpdate(data *pb_event.EventOnUserCommandUpdateData) {}

func newUserListener() *UserListener {
	return &UserListener{}
}
