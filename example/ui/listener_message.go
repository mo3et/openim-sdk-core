package ui

import (
	pb_event "github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
)

type MessageListener struct{}

func (m *MessageListener) OnRecvNewMessage(data *pb_event.EventOnRecvNewMessageData) {}

func (m *MessageListener) OnRecvC2CReadReceipt(data *pb_event.EventOnRecvC2CReadReceiptData) {}

func (m *MessageListener) OnNewRecvMessageRevoked(data *pb_event.EventOnNewRecvMessageRevokedData) {}

func (m *MessageListener) OnRecvOfflineNewMessage(data *pb_event.EventOnRecvOfflineNewMessageData) {}

func (m *MessageListener) OnMessageDeleted(data *pb_event.EventOnMessageDeletedData) {}

func (m *MessageListener) OnRecvOnlineOnlyMessage(data *pb_event.EventOnRecvOnlineOnlyMessageData) {}

func (m *MessageListener) OnMessageEdited(data *pb_event.EventOnMessageEditedData) {}

func newMessageListener() *MessageListener {
	return &MessageListener{}
}
