package test

import (
	"fmt"
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	commonpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/third"
	"testing"
	"time"
)

func Test_UploadLog(t *testing.T) {
	tm := time.Now()
	_, err := open_im_sdk.IMUserContext.Third().UploadSDKData(ctx, &third.UploadSDKDataReq{
		Line: 2000,
		Ex:   "ex",
		Mode: commonpb.UploadSDKDataMode_UploadDB | commonpb.UploadSDKDataMode_UploadLogs,
	}, nil)
	if err != nil {
		t.Error(err)
	}
	fmt.Println(time.Since(tm).Microseconds())
}

//}
//func Test_SDKLogs(t *testing.T) {
//	open_im_sdk.IMUserContext.Third().Log(ctx, &sdkpb.LogReq{
//		LogLevel: 4,
//		File:     "cmd/abc.go",
//		Line:     666,
//		Msg:      "This is a test message",
//		Err:      "aasf",
//		Kvs: []*sdkpb.LogKv{{
//			Key: "key",
//			Value: &anypb.Any{
//				TypeUrl: "value",
//				Value:   []byte("value"),
//			},
//		}},
//	})
//}
