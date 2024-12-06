package ui

import (
	pb_event "github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
)

type ConversationListener struct {
}

func (c *ConversationListener) OnSyncServerStart(data *pb_event.EventOnSyncServerStartData) {}

func (c *ConversationListener) OnSyncServerFinish(data *pb_event.EventOnSyncServerFinishData) {}

func (c *ConversationListener) OnSyncServerProgress(data *pb_event.EventOnSyncServerProgressData) {}

func (c *ConversationListener) OnSyncServerFailed(data *pb_event.EventOnSyncServerFailedData) {}

func (c *ConversationListener) OnNewConversation(data *pb_event.EventOnNewConversationData) {}

func (c *ConversationListener) OnConversationChanged(data *pb_event.EventOnConversationChangedData) {}

func (c *ConversationListener) OnTotalUnreadMessageCountChanged(data *pb_event.EventOnTotalUnreadMessageCountChangedData) {
}

func (c *ConversationListener) OnConversationUserInputStatusChanged(data *pb_event.EventOnConversationUserInputStatusChangedData) {
}

func newConversationListener() *ConversationListener {
	return &ConversationListener{}
}
