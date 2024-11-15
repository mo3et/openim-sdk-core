package third

import (
	"context"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/api"

	"github.com/openimsdk/protocol/third"
)

func (t *Third) UpdateFcmToken(ctx context.Context, fcmToken string, expireTime int64) error {
	return api.FcmUpdateToken.Execute(ctx, &third.FcmUpdateTokenReq{
		PlatformID: int32(t.platform),
		FcmToken:   fcmToken,
		Account:    t.loginUserID,
		ExpireTime: expireTime,
	})
}

func (t *Third) SetAppBadge(ctx context.Context, appUnreadCount int32) error {
	return api.SetAppBadge.Execute(ctx, &third.SetAppBadgeReq{
		UserID:         t.loginUserID,
		AppUnreadCount: appUnreadCount,
	})
}

func (t *Third) UploadLogs(ctx context.Context, line int, ex string, progress Progress) (err error) {
	return t.uploadLogs(ctx, line, ex, progress)
}

func (t *Third) Log(ctx context.Context, logLevel int, file string, line int, msg, err string, keysAndValues []any) {
	t.printLog(ctx, logLevel, file, line, msg, err, keysAndValues)
}
