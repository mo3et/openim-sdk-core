package third

import (
	"context"
	"github.com/openimsdk/openim-sdk-core/v3/internal/third/file"
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk_callback"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto"

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

func (t *Third) UploadLogs(ctx context.Context, req *sdkpb.UploadLogsReq, callback open_im_sdk_callback.UploadLogsCallback) (*sdkpb.UploadLogsResp, error) {
	err := t.uploadLogs(ctx, int(req.Line), req.Ex, callback)
	if err != nil {
		return nil, err
	}
	return &sdkpb.UploadLogsResp{}, nil
}

func (t *Third) Log(ctx context.Context, req *sdkpb.LogReq) (*sdkpb.LogResp, error) {
	t.printLog(ctx, int(req.LogLevel), req.File, int(req.Line), req.Msg, req.Err, req.KeysAndValues)
	return &sdkpb.LogResp{}, nil
}

func (t *Third) UploadFile(ctx context.Context, req *file.UploadFileReq, callback open_im_sdk_callback.UploadFileCallback) (*file.UploadFileResp, error) {
	return t.fileUploader.UploadFileV2(ctx, req, callback)
}
