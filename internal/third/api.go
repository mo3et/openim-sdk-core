package third

import (
	"context"
	"fmt"

	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk_callback"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/third"
	"github.com/openimsdk/tools/errs"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/api"

	"github.com/openimsdk/protocol/third"
)

func (t *Third) UpdateFcmToken(ctx context.Context, req *sdkpb.UpdateFcmTokenReq) (*sdkpb.UpdateFcmTokenResp, error) {
	err := api.FcmUpdateToken.Execute(ctx, &third.FcmUpdateTokenReq{PlatformID: int32(t.platform), FcmToken: req.FcmToken, Account: t.loginUserID, ExpireTime: req.ExpireTime})
	if err != nil {
		return nil, err
	}
	return &sdkpb.UpdateFcmTokenResp{}, nil
}

func (t *Third) SetAppBadge(ctx context.Context, req *sdkpb.SetAppBadgeReq) (*sdkpb.SetAppBadgeResp, error) {
	err := api.SetAppBadge.Execute(ctx, &third.SetAppBadgeReq{UserID: t.loginUserID, AppUnreadCount: req.AppUnreadCount})
	if err != nil {
		return nil, err
	}
	return &sdkpb.SetAppBadgeResp{}, nil
}

func (t *Third) UploadSDKData(ctx context.Context, req *sdkpb.UploadSDKDataReq, callback open_im_sdk_callback.UploadLogsCallback) (*sdkpb.UploadSDKDataResp, error) {
	err := t.uploadSDKData(ctx, req, callback)
	if err != nil {
		return nil, err
	}
	return &sdkpb.UploadSDKDataResp{}, nil
}

func (t *Third) Log(ctx context.Context, req *sdkpb.LogReq) (*sdkpb.LogResp, error) {
	kvs := make([]any, 0, len(req.Kvs)*2)
	for _, kv := range req.Kvs {
		if msg, err := kv.Value.UnmarshalNew(); err == nil {
			kvs = append(kvs, kv.Key, msg)
		} else {
			kvs = append(kvs, kv.Key, fmt.Sprintf("proto unmarshal any url type %s data %v error %v", kv.Value.TypeUrl, kv.Value.Value, err))
		}
	}
	var err error
	if req.Err != "" {
		err = errs.New(req.Err)
	}
	t.printLog(ctx, int(req.LogLevel), req.File, int(req.Line), req.Msg, err, kvs)
	return &sdkpb.LogResp{}, nil
}

func (t *Third) UploadFile(ctx context.Context, req *sdkpb.UploadFileReq, callback open_im_sdk_callback.UploadFileCallback) (*sdkpb.UploadFileResp, error) {
	return t.fileUploader.UploadFileV2(ctx, req, callback)
}
