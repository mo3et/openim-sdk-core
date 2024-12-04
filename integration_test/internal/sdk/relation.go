package sdk

import (
	"context"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/relation"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
)

func (s *TestSDK) GetAllFriends(ctx context.Context) ([]*shared.IMFriend, error) {
	res, err := s.SDK.Relation().GetFriends(ctx, &relation.GetFriendsReq{FilterBlack: false})
	if err != nil {
		return nil, err
	}

	return res.Friends, nil
}
