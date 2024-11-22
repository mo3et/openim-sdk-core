package conversation_msg

import sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"

type MsgList []*sdkpb.IMMessage

func (n MsgList) Len() int {
	return len(n)
}

func (n MsgList) Less(i, j int) bool {
	return n[i].SendTime < n[j].SendTime
}

func (n MsgList) Swap(i, j int) {
	n[i], n[j] = n[j], n[i]
}
