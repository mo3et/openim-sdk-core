package model_struct

import (
	"context"
	"database/sql/driver"
	"encoding/json"
	"fmt"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/utils"
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
		return newUnsupportedScanTypeError(value)
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

func (a StringArray) Value() (driver.Value, error) {
	data, err := json.Marshal(a)
	if err != nil {
		return nil, err
	}
	return string(data), nil
}

func (a *StringArray) Scan(value any) error {
	var b []byte
	switch v := value.(type) {
	case []byte:
		b = v
	case string:
		b = []byte(v)
	default:
		return newUnsupportedScanTypeError(value)
	}
	return json.Unmarshal(b, a)
}

func (a *AttachedInfoElem) Value() (driver.Value, error) {
	data, err := json.Marshal(a)
	if err != nil {
		return nil, err
	}
	return string(data), nil
}

func (a *AttachedInfoElem) Scan(value any) error {
	var b []byte
	switch v := value.(type) {
	case []byte:
		b = v
	case string:
		b = []byte(v)
	default:
		return newUnsupportedScanTypeError(value)
	}
	return json.Unmarshal(b, a)
}

func newUnsupportedScanTypeError(value any) error {
	return sdkerrs.ErrInternal.WrapMsg("gorm unsupported scan type", "type", fmt.Sprintf("%T", value), "value", value)
}
