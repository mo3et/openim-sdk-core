package shared

import (
	"encoding/json"
	"fmt"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
)

type jsonIMMessage struct {
	ClientMsgID      string                  `json:"clientMsgID"`
	ServerMsgID      string                  `json:"serverMsgID"`
	CreateTime       int64                   `json:"createTime"`
	SendTime         int64                   `json:"sendTime"`
	SessionType      common.SessionType      `json:"sessionType"`
	SendID           string                  `json:"sendID"`
	RecvID           string                  `json:"recvID"`
	MsgFrom          common.MsgFrom          `json:"msgFrom"`
	ContentType      common.ContentType      `json:"contentType"`
	SenderPlatformID common.Platform         `json:"senderPlatformID"`
	SenderNickname   string                  `json:"senderNickname"`
	SenderFaceURL    string                  `json:"senderFaceURL"`
	GroupID          string                  `json:"groupID"`
	Seq              int64                   `json:"seq"`
	IsRead           bool                    `json:"isRead"`
	Status           common.MsgStatus        `json:"status"`
	OfflinePush      *common.OfflinePushInfo `json:"offlinePush"`
	Ex               string                  `json:"ex"`
	LocalEx          string                  `json:"localEx"`
	AttachedInfoElem *AttachedInfoElem       `json:"attachedInfoElem"`
	Content          json.RawMessage         `json:"content"`
}

func (x *IMMessage) UnmarshalJSON(b []byte) error {
	var tmp jsonIMMessage
	if err := json.Unmarshal(b, &tmp); err != nil {
		return err
	}
	m, ok := ContentTypeMap[tmp.ContentType]
	if !ok {
		return fmt.Errorf("json unknown content type %d", x.ContentType)
	}
	elem := m.New()
	if err := json.Unmarshal(tmp.Content, elem); err != nil {
		return err
	}
	x.ClientMsgID = tmp.ClientMsgID
	x.ServerMsgID = tmp.ServerMsgID
	x.CreateTime = tmp.CreateTime
	x.SendTime = tmp.SendTime
	x.SessionType = tmp.SessionType
	x.SendID = tmp.SendID
	x.RecvID = tmp.RecvID
	x.MsgFrom = tmp.MsgFrom
	x.ContentType = tmp.ContentType
	x.SenderPlatformID = tmp.SenderPlatformID
	x.SenderNickname = tmp.SenderNickname
	x.SenderFaceURL = tmp.SenderFaceURL
	x.GroupID = tmp.GroupID
	x.Seq = tmp.Seq
	x.IsRead = tmp.IsRead
	x.Status = tmp.Status
	x.OfflinePush = tmp.OfflinePush
	x.Ex = tmp.Ex
	x.LocalEx = tmp.LocalEx
	x.AttachedInfoElem = tmp.AttachedInfoElem
	m.Set(x, elem)
	return nil
}

func (x *IMMessage) MarshalJSON() ([]byte, error) {
	ct, ok := ContentTypeMap[x.ContentType]
	if !ok {
		return nil, fmt.Errorf("json unknown content type %d", x.ContentType)
	}
	elem := ct.Get(x.Content)
	content, err := json.Marshal(elem)
	if err != nil {
		return nil, err
	}
	return json.Marshal(&jsonIMMessage{
		ClientMsgID:      x.ClientMsgID,
		ServerMsgID:      x.ServerMsgID,
		CreateTime:       x.CreateTime,
		SendTime:         x.SendTime,
		SessionType:      x.SessionType,
		SendID:           x.SendID,
		RecvID:           x.RecvID,
		MsgFrom:          x.MsgFrom,
		ContentType:      x.ContentType,
		SenderPlatformID: x.SenderPlatformID,
		SenderNickname:   x.SenderNickname,
		SenderFaceURL:    x.SenderFaceURL,
		GroupID:          x.GroupID,
		Seq:              x.Seq,
		IsRead:           x.IsRead,
		Status:           x.Status,
		OfflinePush:      x.OfflinePush,
		Ex:               x.Ex,
		LocalEx:          x.LocalEx,
		AttachedInfoElem: x.AttachedInfoElem,
		Content:          content,
	})
}

//func (x *ErrorTips) UnmarshalJSON(b []byte) error {
//	return nil
//}
//
//func (x *ErrorTips) MarshalJSON() ([]byte, error) {
//	return json.Marshal(x.Data)
//}
