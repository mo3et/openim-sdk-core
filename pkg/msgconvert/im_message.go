package msgconvert

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
	"github.com/openimsdk/tools/log"
)

func toIMMessageContent(ctx context.Context, message *shared.IMMessage, content string) {
	m, ok := shared.ContentTypeMap[message.ContentType]
	if ok {
		elem := m.New()
		if content == "" || content == shared.E30 {
			m.Set(message, elem)
		} else {
			if err := json.Unmarshal([]byte(content), elem); err == nil {
				m.Set(message, elem)
			} else {
				log.ZError(ctx, "Unmarshal MsgData Content error", err, "content", content, "message", message)
				message.Content = &shared.IMMessage_ErrorElem{
					ErrorElem: &shared.ErrorElem{
						ContentType: message.ContentType,
						Content:     content,
						Cause:       fmt.Sprintf("Unmarshal MsgData Content error %s", err),
					},
				}
				message.ContentType = common.ContentType_Error
			}
		}
	} else {
		message.Content = &shared.IMMessage_ErrorElem{
			ErrorElem: &shared.ErrorElem{
				ContentType: message.ContentType,
				Content:     content,
				Cause:       "unknown content type",
			},
		}
		message.ContentType = common.ContentType_Error
	}
}
