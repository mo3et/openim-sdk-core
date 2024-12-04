package sdk

import (
	"context"
	"github.com/openimsdk/openim-sdk-core/v3/integration_test/internal/vars"
	msgpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/message"
	sharedpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
)

func (s *TestSDK) SendSingleMsg(ctx context.Context, msg *sharedpb.IMMessage, receiveID string) (*sharedpb.IMMessage, error) {
	vars.SendMsgCount.Add(1)
	res, err := s.SDK.Conversation().SendMessage(ctx, &msgpb.SendMessageReq{
		Message:      msg,
		RecvID:       receiveID,
		GroupID:      "",
		IsOnlineOnly: false,
	}, nil)
	if err != nil {
		return nil, err
	}
	return res.Message, nil
}

func (s *TestSDK) SendGroupMsg(ctx context.Context, msg *sharedpb.IMMessage, groupID string) (*sharedpb.IMMessage, error) {
	vars.SendMsgCount.Add(1)
	res, err := s.SDK.Conversation().SendMessage(ctx, &msgpb.SendMessageReq{
		Message:      msg,
		RecvID:       "",
		GroupID:      groupID,
		IsOnlineOnly: false,
	}, nil)
	if err != nil {
		return nil, err
	}
	return res.Message, nil
}
