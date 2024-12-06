package ui

import (
	pb_event "github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
)

type GroupListener struct{}

func (g *GroupListener) OnJoinedGroupAdded(data *pb_event.EventOnJoinedGroupAddedData) {}

func (g *GroupListener) OnJoinedGroupDeleted(data *pb_event.EventOnJoinedGroupDeletedData) {}

func (g *GroupListener) OnGroupMemberAdded(data *pb_event.EventOnGroupMemberAddedData) {}

func (g *GroupListener) OnGroupMemberDeleted(data *pb_event.EventOnGroupMemberDeletedData) {}

func (g *GroupListener) OnGroupApplicationAdded(data *pb_event.EventOnGroupApplicationAddedData) {}

func (g *GroupListener) OnGroupApplicationDeleted(data *pb_event.EventOnGroupApplicationDeletedData) {
}

func (g *GroupListener) OnGroupInfoChanged(data *pb_event.EventOnGroupInfoChangedData) {}

func (g *GroupListener) OnGroupDismissed(data *pb_event.EventOnGroupDismissedData) {}

func (g *GroupListener) OnGroupMemberInfoChanged(data *pb_event.EventOnGroupMemberInfoChangedData) {}

func (g *GroupListener) OnGroupApplicationAccepted(data *pb_event.EventOnGroupApplicationAcceptedData) {
}

func (g *GroupListener) OnGroupApplicationRejected(data *pb_event.EventOnGroupApplicationRejectedData) {
}

func newGroupListener() *GroupListener {
	return &GroupListener{}
}
