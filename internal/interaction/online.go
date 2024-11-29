package interaction

import (
	"context"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/conversation"
	"github.com/openimsdk/tools/utils/datautil"
)

func (l *LongConnMgr) subscribeUsersStatus(ctx context.Context, userIDs []string) ([]*conversation.UserOnlinePlatformID, error) {
	if len(userIDs) == 0 {
		return []*conversation.UserOnlinePlatformID{}, nil
	}
	res, err := l.GetUserOnlinePlatformIDs(ctx, userIDs)
	if err != nil {
		return nil, err
	}
	status := make([]*conversation.UserOnlinePlatformID, 0, len(res))
	for userID, platformIDs := range res {
		value := &conversation.UserOnlinePlatformID{
			UserID: userID,
			PlatformIDs: datautil.Batch(func(platformID int32) common.Platform {
				return common.Platform(platformID)
			}, platformIDs),
		}
		status = append(status, value)
	}
	return status, nil
}

func (l *LongConnMgr) UnsubscribeUsersStatus(ctx context.Context, userIDs []string) error {
	return l.UnsubscribeUserOnlinePlatformIDs(ctx, userIDs)
}

func (l *LongConnMgr) SubscribeUsersStatus(ctx context.Context, userIDs []string) ([]*conversation.UserOnlinePlatformID, error) {
	return l.subscribeUsersStatus(ctx, userIDs)
}

//func (l *LongConnMgr) GetSubscribeUsersStatus(ctx context.Context) ([]*userPb.OnlineStatus, error) {
//	return l.subscribeUsersStatus(ctx, nil)
//}
