package third

import (
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk_callback"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
)

type Progress interface {
	OnProgress(current int64, size int64)
}

type progressConvert struct {
	p open_im_sdk_callback.UploadLogsCallback
}

func (p progressConvert) OnUploadFileProgress(data *event.EventOnUploadFileProgressData) {
	p.p.OnUploadLogsProgress(&event.EventOnUploadLogsProgressData{Progress: data.Progress})
}
