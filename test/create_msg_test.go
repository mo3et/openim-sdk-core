package test

import (
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto"
	"testing"
)

func Test_CreateTextMessage(t *testing.T) {
	message, err := open_im_sdk.UserForSDK.Conversation().CreateTextMessage(ctx, &sdkpb.CreateTextMessageReq{Text: "textMsg"})
	if err != nil {
		t.Error(err)
	}
	t.Log(message)
}

func Test_CreateAdvancedTextMessage(t *testing.T) {
	message, err := open_im_sdk.UserForSDK.Conversation().CreateAdvancedTextMessage(ctx, &sdkpb.CreateAdvancedTextMessageReq{
		Text:            "textAdMsg",
		MessageEntities: []*sdkpb.MessageEntity{},
	})
	if err != nil {
		t.Error(err)
	}
	t.Log(message)
}
func Test_CreateTextAtMessage(t *testing.T) {
	message, err := open_im_sdk.UserForSDK.Conversation().CreateTextAtMessage(ctx, &sdkpb.CreateTextAtMessageReq{
		Text:         "textATtsg",
		UserIDList:   []string{},
		UsersInfo:    []*sdkpb.AtInfo{},
		QuoteMessage: &sdkpb.IMMessage{},
	})
	if err != nil {
		t.Error(err)
	}
	t.Log(message)
}

func Test_CreateQuoteMessage(t *testing.T) {
	message, err := open_im_sdk.UserForSDK.Conversation().CreateQuoteMessage(ctx, &sdkpb.CreateQuoteMessageReq{
		Text:         "textATtsg",
		QuoteMessage: &sdkpb.IMMessage{},
	})
	if err != nil {
		t.Error(err)
	}
	t.Log(message)
}

func Test_CreateAdvancedQuoteMessage(t *testing.T) {
	message, err := open_im_sdk.UserForSDK.Conversation().CreateAdvancedQuoteMessage(ctx, &sdkpb.CreateAdvancedQuoteMessageReq{
		Text:            "textATtsg",
		QuoteMessage:    &sdkpb.IMMessage{},
		MessageEntities: []*sdkpb.MessageEntity{},
	})
	if err != nil {
		t.Error(err)
	}
	t.Log(message)
}

func Test_CreateCardMessage(t *testing.T) {
	message, err := open_im_sdk.UserForSDK.Conversation().CreateCardMessage(ctx, &sdkpb.CreateCardMessageReq{
		Card: &sdkpb.CardElem{
			UserID:   "123456",
			Nickname: "testname",
			FaceURL:  "",
			Ex:       "",
		},
	})
	if err != nil {
		t.Error(err)
	}
	t.Log(message)
}

func Test_CreateImageMessage(t *testing.T) {
	message, err := open_im_sdk.UserForSDK.Conversation().CreateImageMessage(ctx, &sdkpb.CreateImageMessageReq{
		ImageSourcePath: ".\\test.png",
		SourcePicture:   &sdkpb.PictureBaseInfo{},
		BigPicture:      &sdkpb.PictureBaseInfo{},
		SnapshotPicture: &sdkpb.PictureBaseInfo{},
	})
	if err != nil {
		t.Error(err)
	}
	t.Log(message)
}

func Test_CreateSoundMessage(t *testing.T) {
	message, err := open_im_sdk.UserForSDK.Conversation().CreateSoundMessage(ctx, &sdkpb.CreateSoundMessageReq{
		SoundPath: ".\\test.png",
		Duration:  20,
		SoundElem: &sdkpb.SoundBaseInfo{},
	})
	if err != nil {
		t.Error(err)
	}
	t.Log(message)
}

func Test_CreateVideoMessage(t *testing.T) {
	message, err := open_im_sdk.UserForSDK.Conversation().CreateVideoMessage(ctx, &sdkpb.CreateVideoMessageReq{
		VideoSourcePath:    ".\\test.png",
		VideoType:          "mp4",
		Duration:           10,
		SnapshotSourcePath: ".\\test.png",
		VideoElem:          &sdkpb.VideoBaseInfo{},
	})
	if err != nil {
		t.Error(err)
	}
	t.Log(message)
}

func Test_CreateFileMessage(t *testing.T) {
	message, err := open_im_sdk.UserForSDK.Conversation().CreateFileMessage(ctx, &sdkpb.CreateFileMessageReq{
		FileSourcePath: ".\\test.png",
		FileName:       "png",
		FileElem:       &sdkpb.FileBaseInfo{},
	})
	if err != nil {
		t.Error(err)
	}
	t.Log(message)
}

func Test_CreateLocationMessage(t *testing.T) {
	message, err := open_im_sdk.UserForSDK.Conversation().CreateLocationMessage(ctx, &sdkpb.CreateLocationMessageReq{
		Description: "",
		Longitude:   0,
		Latitude:    0,
	})
	if err != nil {
		t.Error(err)
	}
	t.Log(message)
}

func Test_CreateCustomMessage(t *testing.T) {
	message, err := open_im_sdk.UserForSDK.Conversation().CreateCustomMessage(ctx, &sdkpb.CreateCustomMessageReq{
		Data:        "",
		Extension:   "",
		Description: "",
	})
	if err != nil {
		t.Error(err)
	}
	t.Log(message)
}

func Test_CreateMergerMessage(t *testing.T) {
	message, err := open_im_sdk.UserForSDK.Conversation().CreateMergerMessage(ctx, &sdkpb.CreateMergerMessageReq{
		Messages:  []*sdkpb.IMMessage{},
		Title:     "title",
		Summaries: []string{"summary"},
	})
	if err != nil {
		t.Error(err)
	}
	t.Log(message)
}

func Test_CreateFaceMessage(t *testing.T) {
	message, err := open_im_sdk.UserForSDK.Conversation().CreateFaceMessage(ctx, &sdkpb.CreateFaceMessageReq{
		Index: 0,
		Data:  "www.faceURL.com",
	})
	if err != nil {
		t.Error(err)
	}
	t.Log(message)
}

func Test_CreateForwardMessage(t *testing.T) {
	message, err := open_im_sdk.UserForSDK.Conversation().CreateForwardMessage(ctx, &sdkpb.CreateForwardMessageReq{
		Message: &sdkpb.IMMessage{},
	})
	if err != nil {
		t.Error(err)
	}
	t.Log(message)
}

func Test_FetchSurroundingMessages(t *testing.T) {
	msgs, err := open_im_sdk.UserForSDK.Conversation().FetchSurroundingMessages(ctx, "sg_3559850526", 15, 14, 8)
	if err != nil {
		t.Error(err)
		return
	}
	t.Log(len(msgs))
	for _, msg := range msgs {
		t.Logf("[%d] %#v", msg.Seq, msg.Content)
	}
	t.Log(msgs)
}
