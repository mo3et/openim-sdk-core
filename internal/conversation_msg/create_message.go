package conversation_msg

import (
	"context"
	"errors"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/constant"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto"
	"github.com/openimsdk/tools/log"

	"os"
	"path/filepath"
	"strings"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/utils"
)

func (c *Conversation) CreateTextMessage(ctx context.Context, req *sdkpb.CreateTextMessageReq) (*sdkpb.CreateTextMessageResp, error) {
	s := sdkpb.IMMessage{}
	err := c.initBasicInfo(ctx, &s, constant.UserMsgType, constant.Text)
	if err != nil {
		return nil, err
	}
	s.Content = &sdkpb.IMMessage_TextElem{TextElem: &sdkpb.TextElem{Content: req.Text}}
	return &sdkpb.CreateTextMessageResp{Message: &s}, nil
}

func (c *Conversation) CreateAdvancedTextMessage(ctx context.Context, req *sdkpb.CreateAdvancedTextMessageReq) (*sdkpb.CreateAdvancedTextMessageResp, error) {
	s := sdkpb.IMMessage{}
	err := c.initBasicInfo(ctx, &s, constant.UserMsgType, constant.AdvancedText)
	if err != nil {
		return nil, err
	}
	s.Content = &sdkpb.IMMessage_AdvancedTextElem{AdvancedTextElem: &sdkpb.AdvancedTextElem{
		Text:              req.Text,
		MessageEntityList: req.MessageEntities,
	}}
	return &sdkpb.CreateAdvancedTextMessageResp{Message: &s}, nil
}

func (c *Conversation) CreateTextAtMessage(ctx context.Context, req *sdkpb.CreateTextAtMessageReq) (*sdkpb.CreateTextAtMessageResp, error) {
	if req.Text == "" {
		return nil, errors.New("text can not be empty")
	}
	if len(req.UserIDList) > 10 {
		return nil, sdkerrs.ErrArgs
	}
	s := sdkpb.IMMessage{}
	err := c.initBasicInfo(ctx, &s, constant.UserMsgType, constant.AtText)
	if err != nil {
		return nil, err
	}
	//Avoid nested references
	if req.QuoteMessage != nil {
		if req.QuoteMessage.ContentType == constant.Quote {
			req.QuoteMessage.ContentType = constant.Text
			req.QuoteMessage.Content = &sdkpb.IMMessage_TextElem{TextElem: &sdkpb.TextElem{
				Content: req.QuoteMessage.Content.(*sdkpb.IMMessage_QuoteElem).QuoteElem.Text,
			}}
		}
	}
	s.Content = &sdkpb.IMMessage_AtTextElem{AtTextElem: &sdkpb.AtTextElem{
		Text:         req.Text,
		AtUserList:   req.UserIDList,
		AtUsersInfo:  req.UsersInfo,
		QuoteMessage: req.QuoteMessage,
	}}
	return &sdkpb.CreateTextAtMessageResp{Message: &s}, nil
}

func (c *Conversation) CreateLocationMessage(ctx context.Context, req *sdkpb.CreateLocationMessageReq) (*sdkpb.CreateLocationMessageResp, error) {
	s := sdkpb.IMMessage{}
	err := c.initBasicInfo(ctx, &s, constant.UserMsgType, constant.Location)
	if err != nil {
		return nil, err
	}
	s.Content = &sdkpb.IMMessage_LocationElem{LocationElem: &sdkpb.LocationElem{
		Description: req.Description,
		Longitude:   req.Longitude,
		Latitude:    req.Latitude,
	}}
	return &sdkpb.CreateLocationMessageResp{Message: &s}, nil
}

func (c *Conversation) CreateCustomMessage(ctx context.Context, req *sdkpb.CreateCustomMessageReq) (*sdkpb.CreateCustomMessageResp, error) {
	s := sdkpb.IMMessage{}
	err := c.initBasicInfo(ctx, &s, constant.UserMsgType, constant.Custom)
	if err != nil {
		return nil, err
	}
	s.Content = &sdkpb.IMMessage_CustomElem{CustomElem: &sdkpb.CustomElem{
		Data:        req.Data,
		Extension:   req.Extension,
		Description: req.Description,
	}}
	return &sdkpb.CreateCustomMessageResp{Message: &s}, nil
}

func (c *Conversation) CreateQuoteMessage(ctx context.Context, req *sdkpb.CreateQuoteMessageReq) (*sdkpb.CreateQuoteMessageResp, error) {
	s := sdkpb.IMMessage{}
	err := c.initBasicInfo(ctx, &s, constant.UserMsgType, constant.Quote)
	if err != nil {
		return nil, err
	}
	//Avoid nested references
	if req.QuoteMessage.ContentType == constant.Quote {
		req.QuoteMessage.ContentType = constant.Text
		req.QuoteMessage.Content = &sdkpb.IMMessage_TextElem{TextElem: &sdkpb.TextElem{
			Content: req.QuoteMessage.Content.(*sdkpb.IMMessage_QuoteElem).QuoteElem.Text,
		}}
	}
	s.Content = &sdkpb.IMMessage_QuoteElem{QuoteElem: &sdkpb.QuoteElem{
		Text:         req.Text,
		QuoteMessage: req.QuoteMessage,
	}}
	return &sdkpb.CreateQuoteMessageResp{Message: &s}, nil
}

func (c *Conversation) CreateAdvancedQuoteMessage(ctx context.Context, req *sdkpb.CreateAdvancedQuoteMessageReq) (*sdkpb.CreateAdvancedQuoteMessageResp, error) {
	s := sdkpb.IMMessage{}
	err := c.initBasicInfo(ctx, &s, constant.UserMsgType, constant.Quote)
	if err != nil {
		return nil, err
	}
	//Avoid nested references
	if req.QuoteMessage.ContentType == constant.Quote {
		req.QuoteMessage.ContentType = constant.Text
		req.QuoteMessage.Content = &sdkpb.IMMessage_TextElem{TextElem: &sdkpb.TextElem{
			Content: req.QuoteMessage.Content.(*sdkpb.IMMessage_QuoteElem).QuoteElem.Text,
		}}
	}
	s.Content = &sdkpb.IMMessage_QuoteElem{QuoteElem: &sdkpb.QuoteElem{
		Text:              req.Text,
		QuoteMessage:      req.QuoteMessage,
		MessageEntityList: req.MessageEntities,
	}}
	return &sdkpb.CreateAdvancedQuoteMessageResp{Message: &s}, nil
}

func (c *Conversation) CreateCardMessage(ctx context.Context, req *sdkpb.CreateCardMessageReq) (*sdkpb.CreateCardMessageResp, error) {
	s := sdkpb.IMMessage{}
	err := c.initBasicInfo(ctx, &s, constant.UserMsgType, constant.Card)
	if err != nil {
		return nil, err
	}
	s.Content = &sdkpb.IMMessage_CardElem{CardElem: req.Card}
	return &sdkpb.CreateCardMessageResp{Message: &s}, nil
}

func (c *Conversation) CreateImageMessage(ctx context.Context, req *sdkpb.CreateImageMessageReq) (*sdkpb.CreateImageMessageResp, error) {
	s := sdkpb.IMMessage{}
	err := c.initBasicInfo(ctx, &s, constant.UserMsgType, constant.Picture)
	if err != nil {
		return nil, err
	}

	// Create by file path
	if req.SourcePicture != nil || req.BigPicture != nil || req.SnapshotPicture != nil {
		dstFile := utils.FileTmpPath(req.ImageSourcePath, c.DataDir)
		_, err := utils.CopyFile(req.ImageSourcePath, dstFile)
		if err != nil {
			return nil, err
		}

		imageInfo, err := getImageInfo(req.ImageSourcePath)
		if err != nil {
			return nil, err
		}

		s.Content = &sdkpb.IMMessage_PictureElem{PictureElem: &sdkpb.PictureElem{
			SourcePath: req.ImageSourcePath,
			SourcePicture: &sdkpb.PictureBaseInfo{
				Width:  imageInfo.Width,
				Height: imageInfo.Height,
				Type:   imageInfo.Type,
			},
		}}
	} else { // Create by URL
		s.Content = &sdkpb.IMMessage_PictureElem{PictureElem: &sdkpb.PictureElem{
			SourcePath:      req.ImageSourcePath,
			SourcePicture:   req.SourcePicture,
			BigPicture:      req.BigPicture,
			SnapshotPicture: req.SnapshotPicture,
		}}
	}

	return &sdkpb.CreateImageMessageResp{Message: &s}, nil
}

func (c *Conversation) CreateSoundMessage(ctx context.Context, req *sdkpb.CreateSoundMessageReq) (*sdkpb.CreateSoundMessageResp, error) {
	s := sdkpb.IMMessage{}

	err := c.initBasicInfo(ctx, &s, constant.UserMsgType, constant.Sound)
	if err != nil {
		return nil, err
	}

	// Create by file path
	if req.SoundElem == nil {
		dstFile := utils.FileTmpPath(req.SoundPath, c.DataDir)
		_, err := utils.CopyFile(req.SoundPath, dstFile)
		if err != nil {
			return nil, err
		}

		fi, err := os.Stat(req.SoundPath)
		if err != nil {
			return nil, err
		}

		s.Content = &sdkpb.IMMessage_SoundElem{SoundElem: &sdkpb.SoundElem{
			SoundPath: req.SoundPath,
			Duration:  req.Duration,
			DataSize:  fi.Size(),
			SoundType: strings.Replace(filepath.Ext(fi.Name()), ".", "", 1),
		}}
	} else { // Create by URL
		s.Content = &sdkpb.IMMessage_SoundElem{SoundElem: &sdkpb.SoundElem{
			Uuid:      req.SoundElem.Uuid,
			SoundPath: req.SoundElem.SoundPath,
			SourceURL: req.SoundElem.SourceURL,
			DataSize:  req.SoundElem.DataSize,
			Duration:  req.SoundElem.Duration,
			SoundType: req.SoundElem.SoundType,
		}}
	}
	return &sdkpb.CreateSoundMessageResp{Message: &s}, nil
}

func (c *Conversation) CreateVideoMessage(ctx context.Context, req *sdkpb.CreateVideoMessageReq) (*sdkpb.CreateVideoMessageResp, error) {
	s := sdkpb.IMMessage{}
	err := c.initBasicInfo(ctx, &s, constant.UserMsgType, constant.Video)
	if err != nil {
		return nil, err
	}

	// Create by file path
	if req.VideoElem == nil {
		dstFile := utils.FileTmpPath(req.VideoSourcePath, c.DataDir) //a->b
		written, err := utils.CopyFile(req.VideoSourcePath, dstFile)
		if err != nil {
			//log.Error("internal", "open file failed: ", err, videoFullPath)
			return nil, err
		}

		log.ZDebug(ctx, "videoFullPath dstFile", "videoFullPath", req.VideoSourcePath,
			"dstFile", dstFile, "written", written)

		dstFile = utils.FileTmpPath(req.SnapshotSourcePath, c.DataDir) //a->b
		sWritten, err := utils.CopyFile(req.SnapshotSourcePath, dstFile)
		if err != nil {
			//log.Error("internal", "open file failed: ", err, snapshotFullPath)
			return nil, err
		}

		log.ZDebug(ctx, "snapshotFullPath dstFile", "snapshotFullPath", req.SnapshotSourcePath,
			"dstFile", dstFile, "sWritten", sWritten)

		elem := &sdkpb.VideoElem{
			VideoPath: req.VideoSourcePath,
			VideoType: req.VideoType,
			Duration:  req.Duration,
		}
		s.Content = &sdkpb.IMMessage_VideoElem{VideoElem: elem}

		if req.SnapshotSourcePath == "" {
			elem.SnapshotPath = ""
		} else {
			elem.SnapshotPath = req.SnapshotSourcePath
		}

		fi, err := os.Stat(elem.VideoPath)
		if err != nil {
			//log.Error("internal", "get file Attributes error", err.Error())
			return nil, err
		}

		elem.VideoSize = fi.Size()
		if req.SnapshotSourcePath != "" {
			imageInfo, err := getImageInfo(elem.SnapshotPath)
			if err != nil {
				log.ZError(ctx, "getImageInfo err:", err, "snapshotFullPath", req.SnapshotSourcePath)
				return nil, err
			}

			elem.SnapshotHeight = imageInfo.Height
			elem.SnapshotWidth = imageInfo.Width
			elem.SnapshotSize = imageInfo.Size
		}
	} else { // Create by URL
		s.Content = &sdkpb.IMMessage_VideoElem{VideoElem: &sdkpb.VideoElem{
			VideoPath:      req.VideoElem.VideoPath,
			VideoUUID:      req.VideoElem.VideoUUID,
			VideoURL:       req.VideoElem.VideoURL,
			VideoType:      req.VideoElem.VideoType,
			VideoSize:      req.VideoElem.VideoSize,
			Duration:       req.VideoElem.Duration,
			SnapshotPath:   req.VideoElem.SnapshotPath,
			SnapshotUUID:   req.VideoElem.SnapshotUUID,
			SnapshotSize:   req.VideoElem.SnapshotSize,
			SnapshotURL:    req.VideoElem.SnapshotURL,
			SnapshotWidth:  req.VideoElem.SnapshotWidth,
			SnapshotHeight: req.VideoElem.SnapshotHeight,
			SnapshotType:   req.VideoElem.SnapshotType,
		}}
	}

	return &sdkpb.CreateVideoMessageResp{Message: &s}, nil
}

func (c *Conversation) CreateFileMessage(ctx context.Context, req *sdkpb.CreateFileMessageReq) (*sdkpb.CreateFileMessageResp, error) {
	s := sdkpb.IMMessage{}
	err := c.initBasicInfo(ctx, &s, constant.UserMsgType, constant.File)
	if err != nil {
		return nil, err
	}

	// Create by file path
	if req.FileElem == nil {
		dstFile := utils.FileTmpPath(req.FileSourcePath, c.DataDir)
		_, err := utils.CopyFile(req.FileSourcePath, dstFile)
		if err != nil {
			//log.Error("internal", "open file failed: ", err.Error(), fileFullPath)
			return nil, err
		}

		fi, err := os.Stat(req.FileSourcePath)
		if err != nil {
			//log.Error("internal", "get file Attributes error", err.Error())
			return nil, err
		}

		s.Content = &sdkpb.IMMessage_FileElem{FileElem: &sdkpb.FileElem{
			FilePath: req.FileSourcePath,
			FileName: req.FileName,
			FileSize: fi.Size(),
		}}
	} else { // Create by URL
		s.Content = &sdkpb.IMMessage_FileElem{FileElem: &sdkpb.FileElem{
			FilePath:  req.FileElem.FilePath,
			Uuid:      req.FileElem.Uuid,
			SourceURL: req.FileElem.SourceURL,
			FileName:  req.FileElem.FileName,
			FileSize:  req.FileElem.FileSize,
			FileType:  req.FileElem.FileType,
		}}
	}

	return &sdkpb.CreateFileMessageResp{Message: &s}, nil
}

func (c *Conversation) CreateMergerMessage(ctx context.Context, req *sdkpb.CreateMergerMessageReq) (*sdkpb.CreateMergerMessageResp, error) {
	s := sdkpb.IMMessage{}
	err := c.initBasicInfo(ctx, &s, constant.UserMsgType, constant.Merger)
	if err != nil {
		return nil, err
	}
	elem := &sdkpb.MergeElem{
		Title:        req.Title,
		AbstractList: req.Summaries,
		MultiMessage: req.Messages,
	}
	s.Content = &sdkpb.IMMessage_MergeElem{MergeElem: elem}
	return &sdkpb.CreateMergerMessageResp{Message: &s}, nil
}

func (c *Conversation) CreateFaceMessage(ctx context.Context, req *sdkpb.CreateFaceMessageReq) (*sdkpb.CreateFaceMessageResp, error) {
	s := sdkpb.IMMessage{}
	err := c.initBasicInfo(ctx, &s, constant.UserMsgType, constant.Face)
	if err != nil {
		return nil, err
	}
	elem := &sdkpb.FaceElem{
		Index: req.Index,
		Data:  req.Data,
	}
	s.Content = &sdkpb.IMMessage_FaceElem{FaceElem: elem}
	return &sdkpb.CreateFaceMessageResp{Message: &s}, nil
}

func (c *Conversation) CreateForwardMessage(ctx context.Context, req *sdkpb.CreateForwardMessageReq) (*sdkpb.CreateForwardMessageResp, error) {
	if req.Message.Status != constant.MsgStatusSendSuccess {
		log.ZError(ctx, "only send success message can be Forward",
			errors.New("only send success message can be Forward"))
		return nil, errors.New("only send success message can be Forward")
	}
	err := c.initBasicInfo(ctx, req.Message, constant.UserMsgType, req.Message.ContentType)
	if err != nil {
		return nil, err
	}
	// Forward message seq is set to 0
	req.Message.Seq = 0
	req.Message.Status = constant.MsgStatusSendSuccess
	return &sdkpb.CreateForwardMessageResp{Message: req.Message}, nil
}
