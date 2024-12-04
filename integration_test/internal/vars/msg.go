package vars

import (
	sharedpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
	"sync/atomic"
)

type StatMsg struct {
	CostTime    int64
	ReceiveTime int64
	Msg         *sharedpb.IMMessage
}

var (
	SendMsgCount     atomic.Int64
	RecvMsgConsuming chan *StatMsg
)
