package ui

import (
	pb_event "github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
)

type ConnListener struct {
}

func (l *ConnListener) OnConnecting(data *pb_event.EventOnConnectingData) {

}

func (l *ConnListener) OnConnectSuccess(data *pb_event.EventOnConnectSuccessData) {

}

func (l *ConnListener) OnConnectFailed(data *pb_event.EventOnConnectFailedData) {

}

func (l *ConnListener) OnKickedOffline(data *pb_event.EventOnKickedOfflineData) {

}

func (l *ConnListener) OnUserTokenExpired(data *pb_event.EventOnUserTokenExpiredData) {

}

func (l *ConnListener) OnUserTokenInvalid(data *pb_event.EventOnUserTokenInvalidData) {

}

func newConnListener() *ConnListener {
	return &ConnListener{}
}
