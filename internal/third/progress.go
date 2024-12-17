package third

import (
	"context"
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk_callback"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
)

type Progress interface {
	OnProgress(current int64, size int64)
}

type progressConvert struct {
	p open_im_sdk_callback.UploadLogsCallback
}

func (p *progressConvert) OnUploadFileProgress(ctx context.Context, data *event.EventOnUploadFileProgressData) {
	p.p.OnUploadLogsProgress(ctx, &event.EventOnUploadLogsProgressData{Progress: data.Progress})
}
