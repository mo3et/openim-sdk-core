package model_struct

import (
	"context"
	"database/sql/driver"
	"encoding/json"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/utils"
	"github.com/openimsdk/tools/errs"
	"github.com/openimsdk/tools/log"
	"gorm.io/gorm"
)

type latestMsgID struct {
	ClientMsgID string `json:"clientMsgID"`
}

func (a *LocalChatLog) Value() (driver.Value, error) {
	if a == nil || a.ClientMsgID == "" {
		return "", nil
	}
	data, err := json.Marshal(&latestMsgID{ClientMsgID: a.ClientMsgID})
	if err != nil {
		return nil, err
	}
	return string(data), nil
}

func (a *LocalChatLog) Scan(value any) error {
	var b []byte
	switch v := value.(type) {
	case []byte:
		b = v
	case string:
		b = []byte(v)
	default:
		return errs.New("type assertion to []byte failed").Wrap()
	}
	if len(b) > 0 {
		var msgID latestMsgID
		if err := json.Unmarshal(b, &msgID); err != nil {
			log.ZError(context.Background(), "db last message json.Unmarshal failed", err, "data", string(b))
		}
		a.ClientMsgID = msgID.ClientMsgID
	}
	return nil
}

func (a *LocalConversation) AfterFind(tx *gorm.DB) error {
	if a.LatestMsg == nil || a.LatestMsg.ClientMsgID == "" {
		a.LatestMsg = nil
		return nil
	}
	if err := tx.Table(utils.GetTableName(a.ConversationID)).Where("client_msg_id = ?", a.LatestMsg.ClientMsgID).Take(a.LatestMsg).Error; err != nil {
		log.ZError(tx.Statement.Context, "db find latest message failed", err, "conversationID", a.ConversationID, "clientMsgID", a.LatestMsg.ClientMsgID)
		a.LatestMsg = nil
	}
	return nil
}

func (a *StringArray) Value() (driver.Value, error) {
	data, err := json.Marshal(a)
	if err != nil {
		return nil, err
	}
	return string(data), nil
	//return json.Marshal(a)
}

func (a *StringArray) Scan(value any) error {
	var b []byte
	switch v := value.(type) {
	case []byte:
		b = v
	case string:
		b = []byte(v)
		//var err error
		//b, err = base64.StdEncoding.DecodeString(v)
		//if err != nil {
		//	return err
		//}
	default:
		return errs.New("type assertion to []byte failed").Wrap()
	}
	return json.Unmarshal(b, a)
}
