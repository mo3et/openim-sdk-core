package shared

import (
	"encoding/json"
	"fmt"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	"reflect"
)

const E30 = "e30=" // base64 of "{}"

type jsonMergeElem struct {
	Title           string           `json:"title"`
	AbstractList    []string         `json:"abstractList"`
	MultiMessage    []*jsonIMMessage `json:"multiMessage"`
	MessageEntities []*MessageEntity `json:"messageEntities"`
}

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

func (x *jsonIMMessage) toIMMessage() *IMMessage {
	return &IMMessage{
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
		Content:          x.getNotNil(),
	}
}

func (x *jsonIMMessage) setElem(elem any) error {
	switch v := elem.(type) {
	case *TextElem:
		x.TextElem = v
	case *CardElem:
		x.CardElem = v
	case *PictureElem:
		x.PictureElem = v
	case *SoundElem:
		x.SoundElem = v
	case *VideoElem:
		x.VideoElem = v
	case *FileElem:
		x.FileElem = v
	case *MergeElem:
		x.MergeElem = v
	case *AtTextElem:
		x.AtTextElem = v
	case *FaceElem:
		x.FaceElem = v
	case *LocationElem:
		x.LocationElem = v
	case *CustomElem:
		x.CustomElem = v
	case *QuoteElem:
		x.QuoteElem = v
	case *AdvancedTextElem:
		x.AdvancedTextElem = v
	case *TypingElem:
		x.TypingElem = v
	case *StreamElem:
		x.StreamElem = v
	default:
		return fmt.Errorf("json unknown content type %T value %+v", elem, elem)
	}
	return nil
}

func (x *jsonIMMessage) getNotNil() isIMMessage_Content {
	switch {
	case x.TextElem != nil:
		return &IMMessage_TextElem{TextElem: x.TextElem}
	case x.CardElem != nil:
		return &IMMessage_CardElem{CardElem: x.CardElem}
	case x.PictureElem != nil:
		return &IMMessage_PictureElem{PictureElem: x.PictureElem}
	case x.SoundElem != nil:
		return &IMMessage_SoundElem{SoundElem: x.SoundElem}
	case x.VideoElem != nil:
		return &IMMessage_VideoElem{VideoElem: x.VideoElem}
	case x.FileElem != nil:
		return &IMMessage_FileElem{FileElem: x.FileElem}
	case x.MergeElem != nil:
		return &IMMessage_MergeElem{MergeElem: x.MergeElem}
	case x.AtTextElem != nil:
		return &IMMessage_AtTextElem{AtTextElem: x.AtTextElem}
	case x.FaceElem != nil:
		return &IMMessage_FaceElem{FaceElem: x.FaceElem}
	case x.LocationElem != nil:
		return &IMMessage_LocationElem{LocationElem: x.LocationElem}
	case x.CustomElem != nil:
		return &IMMessage_CustomElem{CustomElem: x.CustomElem}
	case x.QuoteElem != nil:
		return &IMMessage_QuoteElem{QuoteElem: x.QuoteElem}
	case x.AdvancedTextElem != nil:
		return &IMMessage_AdvancedTextElem{AdvancedTextElem: x.AdvancedTextElem}
	case x.TypingElem != nil:
		return &IMMessage_TypingElem{TypingElem: x.TypingElem}
	case x.StreamElem != nil:
		return &IMMessage_StreamElem{StreamElem: x.StreamElem}
	default:
		elem := &ErrorElem{
			ContentType: x.ContentType,
			Content:     string(x.Content),
			Cause:       "all known types are nil",
		}
		x.ContentType = common.ContentType_Error
		return &IMMessage_ErrorElem{
			ErrorElem: elem,
		}
	}
}

func (x *jsonIMMessage) getNotNilElem() any {
	val := x.getNotNil()
	return reflect.ValueOf(val).Elem().Field(0).Interface()
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
		if string(tmp.Content) == E30 {
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
		return nil, fmt.Errorf("message is invalid state")
	}
	ct, ok := ContentTypeMap[x.ContentType]
	if !ok {
		return nil, fmt.Errorf("unknown content type %d", x.ContentType)
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
			QuoteMessage:    v.QuoteMessage.toJsonIMMessage(nil),
			MessageEntities: v.MessageEntities,
		}
		if err := quoteElem.QuoteMessage.setElem(elem); err != nil {
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
			if err := val.setElem(elem); err != nil {
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

func (x *MergeElem) UnmarshalJSON(b []byte) error {
	var tmp jsonMergeElem
	if err := json.Unmarshal(b, &tmp); err != nil {
		return err
	}
	x.Title = tmp.Title
	x.AbstractList = tmp.AbstractList
	x.MultiMessage = make([]*IMMessage, 0, len(tmp.MultiMessage))
	for _, msg := range tmp.MultiMessage {
		x.MultiMessage = append(x.MultiMessage, msg.toIMMessage())
	}
	x.MessageEntities = tmp.MessageEntities
	return nil
}

func (x *MergeElem) MarshalJSON() ([]byte, error) {
	return json.Marshal(x)
}
