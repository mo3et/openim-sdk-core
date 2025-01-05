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
	Content          json.RawMessage         `json:"content,omitempty"`
	TextElem         *TextElem               `json:"textElem,omitempty"`
	CardElem         *CardElem               `json:"cardElem,omitempty"`
	PictureElem      *PictureElem            `json:"pictureElem,omitempty"`
	SoundElem        *SoundElem              `json:"soundElem,omitempty"`
	VideoElem        *VideoElem              `json:"videoElem,omitempty"`
	FileElem         *FileElem               `json:"fileElem,omitempty"`
	MergeElem        *MergeElem              `json:"mergeElem,omitempty"`
	AtTextElem       *AtTextElem             `json:"atTextElem,omitempty"`
	FaceElem         *FaceElem               `json:"faceElem,omitempty"`
	LocationElem     *LocationElem           `json:"locationElem,omitempty"`
	CustomElem       *CustomElem             `json:"customElem,omitempty"`
	QuoteElem        *QuoteElem              `json:"quoteElem,omitempty"`
	AdvancedTextElem *AdvancedTextElem       `json:"advancedTextElem,omitempty"`
	TypingElem       *TypingElem             `json:"typingElem,omitempty"`
	StreamElem       *StreamElem             `json:"streamElem,omitempty"`
}

func (x *jsonIMMessage) getNotNilElem() any {
	if x.TextElem != nil {
		return x.TextElem
	}
	if x.CardElem != nil {
		return x.CardElem
	}
	if x.PictureElem != nil {
		return x.PictureElem
	}
	if x.SoundElem != nil {
		return x.SoundElem
	}
	if x.VideoElem != nil {
		return x.VideoElem
	}
	if x.FileElem != nil {
		return x.FileElem
	}
	if x.MergeElem != nil {
		return x.MergeElem
	}
	if x.AtTextElem != nil {
		return x.AtTextElem
	}
	if x.FaceElem != nil {
		return x.FaceElem
	}
	if x.LocationElem != nil {
		return x.LocationElem
	}
	if x.CustomElem != nil {
		return x.CustomElem
	}
	if x.QuoteElem != nil {
		return x.QuoteElem
	}
	if x.AdvancedTextElem != nil {
		return x.AdvancedTextElem
	}
	if x.TypingElem != nil {
		return x.TypingElem
	}
	if x.StreamElem != nil {
		return x.StreamElem
	}
	return nil
}

func (x *IMMessage) setElem(msg *jsonIMMessage, elem any) error {
	switch v := elem.(type) {
	case *TextElem:
		msg.TextElem = v
	case *CardElem:
		msg.CardElem = v
	case *PictureElem:
		msg.PictureElem = v
	case *SoundElem:
		msg.SoundElem = v
	case *VideoElem:
		msg.VideoElem = v
	case *FileElem:
		msg.FileElem = v
	case *MergeElem:
		msg.MergeElem = v
	case *AtTextElem:
		msg.AtTextElem = v
	case *FaceElem:
		msg.FaceElem = v
	case *LocationElem:
		msg.LocationElem = v
	case *CustomElem:
		msg.CustomElem = v
	case *QuoteElem:
		msg.QuoteElem = v
	case *AdvancedTextElem:
		msg.AdvancedTextElem = v
	case *TypingElem:
		msg.TypingElem = v
	case *StreamElem:
		msg.StreamElem = v
	default:
		return fmt.Errorf("json unknown content type %T value %+v", elem, elem)
	}
	return nil
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
	if len(tmp.Content) == 0 {
		elem := tmp.getNotNilElem()
		if elem == nil {
			return fmt.Errorf("json content is empty clientMsgID %s", tmp.ClientMsgID)
		}
		m.Set(x, elem)
	} else {
		elem := m.New()
		if string(tmp.Content) == "e30=" {
			m.Set(x, elem)
		} else {
			if err := json.Unmarshal(tmp.Content, elem); err != nil {
				return err
			}
			m.Set(x, elem)
		}
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
	return nil
}

func (x *IMMessage) toJsonIMMessage(content json.RawMessage) *jsonIMMessage {
	return &jsonIMMessage{
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
	}
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
	return json.Marshal(x.toJsonIMMessage(content))
}

func (x *IMMessage) FormatContent() ([]byte, error) {
	if x.GetStatus() >= common.MsgStatus_HasDeleted {
		return nil, fmt.Errorf("json message is deleted")
	}
	ct, ok := ContentTypeMap[x.ContentType]
	if !ok {
		return nil, fmt.Errorf("json unknown content type %d", x.ContentType)
	}
	switch v := ct.Get(x.Content).(type) {
	case *QuoteElem:
		elemCt, ok := ContentTypeMap[v.QuoteMessage.GetContentType()]
		if !ok {
			return nil, fmt.Errorf("json unknown content type %d", x.ContentType)
		}
		elem := elemCt.Get(v.QuoteMessage.GetContent())
		type jsonQuoteElem struct {
			Text            string           `json:"text"`
			QuoteMessage    *jsonIMMessage   `json:"quoteMessage"`
			MessageEntities []*MessageEntity `json:"messageEntities"`
		}
		quoteElem := jsonQuoteElem{
			Text:            v.Text,
			QuoteMessage:    x.toJsonIMMessage(nil),
			MessageEntities: v.MessageEntities,
		}
		if err := x.setElem(quoteElem.QuoteMessage, elem); err != nil {
			return nil, err
		}
		return json.Marshal(quoteElem)
	case *MergeElem:
		res := make([]*jsonIMMessage, 0, len(v.MultiMessage))
		for _, message := range v.MultiMessage {
			elemCt, ok := ContentTypeMap[message.GetContentType()]
			if !ok {
				return nil, fmt.Errorf("json unknown content type %d", x.ContentType)
			}
			val := message.toJsonIMMessage(nil)
			elem := elemCt.Get(message.GetContent())
			if err := x.setElem(val, elem); err != nil {
				return nil, err
			}
			res = append(res, val)
		}
		type jsonMergeElem struct {
			Title           string           `json:"title"`
			AbstractList    []string         `json:"abstractList"`
			MultiMessage    []*jsonIMMessage `json:"multiMessage"`
			MessageEntities []*MessageEntity `json:"messageEntities"`
		}
		return json.Marshal(&jsonMergeElem{
			Title:           v.Title,
			AbstractList:    v.AbstractList,
			MultiMessage:    res,
			MessageEntities: v.MessageEntities,
		})
	default:
		return json.Marshal(v)
	}
}
