package ui

import (
	pb_event "github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
)

type FriendshipListener struct{}

func (f *FriendshipListener) OnFriendApplicationAdded(data *pb_event.EventOnFriendApplicationAddedData) {
}

func (f *FriendshipListener) OnFriendApplicationDeleted(data *pb_event.EventOnFriendApplicationDeletedData) {
}

func (f *FriendshipListener) OnFriendApplicationAccepted(data *pb_event.EventOnFriendApplicationAcceptedData) {
}

func (f *FriendshipListener) OnFriendApplicationRejected(data *pb_event.EventOnFriendApplicationRejectedData) {
}

func (f *FriendshipListener) OnFriendAdded(data *pb_event.EventOnFriendAddedData) {}

func (f *FriendshipListener) OnFriendDeleted(data *pb_event.EventOnFriendDeletedData) {}

func (f *FriendshipListener) OnFriendInfoChanged(data *pb_event.EventOnFriendInfoChangedData) {}

func (f *FriendshipListener) OnBlackAdded(data *pb_event.EventOnBlackAddedData) {}

func (f *FriendshipListener) OnBlackDeleted(data *pb_event.EventOnBlackDeletedData) {}

func newFriendshipListener() *FriendshipListener {
	return &FriendshipListener{}
}
