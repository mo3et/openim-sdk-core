package interaction

import (
	"context"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/constant"
	userPb "github.com/openimsdk/protocol/user"
)

func (l *LongConnMgr) subscribeUsersStatus(ctx context.Context, userIDs []string) ([]*userPb.OnlineStatus, error) {
	if len(userIDs) == 0 {
		return []*userPb.OnlineStatus{}, nil
	}
	res, err := l.GetUserOnlinePlatformIDs(ctx, userIDs)
	if err != nil {
		return nil, err
	}
	status := make([]*userPb.OnlineStatus, 0, len(res))
	for userID, platformIDs := range res {
		value := &userPb.OnlineStatus{
			UserID:      userID,
			PlatformIDs: platformIDs,
		}
		if len(platformIDs) == 0 {
			value.Status = constant.Offline
		} else {
			value.Status = constant.Online
		}
		status = append(status, value)
	}
	return status, nil
}

func (l *LongConnMgr) UnsubscribeUsersStatus(ctx context.Context, userIDs []string) error {
	return l.UnsubscribeUserOnlinePlatformIDs(ctx, userIDs)
}

func (l *LongConnMgr) SubscribeUsersStatus(ctx context.Context, userIDs []string) ([]*userPb.OnlineStatus, error) {
	if len(userIDs) == 0 {
		return []*userPb.OnlineStatus{}, nil
	}
	return l.subscribeUsersStatus(ctx, userIDs)
}

func (l *LongConnMgr) GetSubscribeUsersStatus(ctx context.Context) ([]*userPb.OnlineStatus, error) {
	return l.subscribeUsersStatus(ctx, nil)
}
