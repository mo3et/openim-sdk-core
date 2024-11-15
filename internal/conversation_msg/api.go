package conversation_msg

import (
	"context"
	"fmt"
	pbConversation "github.com/openimsdk/protocol/conversation"
	"net/url"
	"os"
	"path/filepath"
	"sort"
	"strings"
	"sync"
	"time"

	pconstant "github.com/openimsdk/protocol/constant"
	"github.com/openimsdk/tools/utils/datautil"

	"github.com/openimsdk/tools/errs"

	"github.com/openimsdk/openim-sdk-core/v3/internal/third/file"
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk_callback"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/common"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/constant"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/content_type"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdk_params_callback"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/server_api_params"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/utils"
	"github.com/openimsdk/openim-sdk-core/v3/sdk_struct"

	"github.com/openimsdk/tools/log"

	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto"
	"github.com/openimsdk/protocol/sdkws"

	"github.com/jinzhu/copier"
)

func (c *Conversation) GetAllConversationList(ctx context.Context, req *sdkpb.GetAllConversationListReq) (*sdkpb.GetAllConversationListResp, error) {
	conversationList, err := c.db.GetAllConversationListDB(ctx)
	if err != nil {
		return nil, err
	}
	return &sdkpb.GetAllConversationListResp{ConversationList: datautil.Batch(LocalConversationToSdkPB, conversationList)}, nil
}

func (c *Conversation) GetConversationListSplit(ctx context.Context, req *sdkpb.GetConversationListSplitReq) (*sdkpb.GetConversationListSplitResp, error) {
	conversations, err := c.db.GetConversationListSplitDB(ctx, int(req.Offset), int(req.Count))
	if err != nil {
		return nil, err
	}

	return &sdkpb.GetConversationListSplitResp{
		ConversationList: datautil.Batch(LocalConversationToSdkPB, conversations),
	}, nil
}

func (c *Conversation) HideConversation(ctx context.Context, req *sdkpb.HideConversationReq) (*sdkpb.HideConversationResp, error) {
	err := c.db.ResetConversation(ctx, req.ConversationID)
	if err != nil {
		return nil, err
	}
	return &sdkpb.HideConversationResp{}, nil
}

func (c *Conversation) GetAtAllTag(ctx context.Context, req *sdkpb.GetAtAllTagReq) (*sdkpb.GetAtAllTagResp, error) {
	return &sdkpb.GetAtAllTagResp{Tag: constant.AtAllString}, nil
}

func (c *Conversation) GetOneConversation(ctx context.Context, req *sdkpb.GetOneConversationReq) (*sdkpb.GetOneConversationResp, error) {
	conversationID := c.getConversationIDBySessionType(req.SourceID, int(req.SessionType))
	lc, err := c.db.GetConversation(ctx, conversationID)
	if err == nil {
		return &sdkpb.GetOneConversationResp{Conversation: LocalConversationToSdkPB(lc)}, nil
	} else {
		var newConversation model_struct.LocalConversation
		newConversation.ConversationID = conversationID
		newConversation.ConversationType = req.SessionType
		switch req.SessionType {
		case constant.SingleChatType:
			newConversation.UserID = req.SourceID
			faceUrl, name, err := c.getUserNameAndFaceURL(ctx, req.SourceID)
			if err != nil {
				return nil, err
			}
			newConversation.ShowName = name
			newConversation.FaceURL = faceUrl
		case constant.WriteGroupChatType, constant.ReadGroupChatType:
			newConversation.GroupID = req.SourceID
			g, err := c.group.FetchGroupOrError(ctx, req.SourceID)
			if err != nil {
				return nil, err
			}
			newConversation.ShowName = g.GroupName
			newConversation.FaceURL = g.FaceURL
		}
		time.Sleep(time.Millisecond * 500)
		lc, errTemp := c.db.GetConversation(ctx, conversationID)
		if errTemp == nil {
			return &sdkpb.GetOneConversationResp{Conversation: LocalConversationToSdkPB(lc)}, nil
		}
		err := c.db.InsertConversation(ctx, &newConversation)
		if err != nil {
			return nil, err
		}
		return &sdkpb.GetOneConversationResp{Conversation: LocalConversationToSdkPB(&newConversation)}, nil
	}
}

func (c *Conversation) GetMultipleConversation(ctx context.Context, req *sdkpb.GetMultipleConversationReq) (*sdkpb.GetMultipleConversationResp, error) {
	conversations, err := c.db.GetMultipleConversationDB(ctx, req.ConversationIDList)
	if err != nil {
		return nil, err
	}
	return &sdkpb.GetMultipleConversationResp{ConversationList: datautil.Batch(LocalConversationToSdkPB, conversations)}, nil
}

func (c *Conversation) HideAllConversations(ctx context.Context, req *sdkpb.HideAllConversationsReq) (*sdkpb.HideAllConversationsResp, error) {
	err := c.db.ResetAllConversation(ctx)
	if err != nil {
		return nil, err
	}
	return &sdkpb.HideAllConversationsResp{}, nil
}

func (c *Conversation) SetConversationDraft(ctx context.Context, req *sdkpb.SetConversationDraftReq) (*sdkpb.SetConversationDraftResp, error) {
	if req.DraftText != "" {
		err := c.db.SetConversationDraftDB(ctx, req.ConversationID, req.DraftText)
		if err != nil {
			return nil, err
		}
	} else {
		err := c.db.RemoveConversationDraft(ctx, req.ConversationID, req.DraftText)
		if err != nil {
			return nil, err
		}
	}
	_ = common.TriggerCmdUpdateConversation(ctx, common.UpdateConNode{Action: constant.ConChange, Args: []string{req.ConversationID}}, c.GetCh())
	return &sdkpb.SetConversationDraftResp{}, nil
}

func (c *Conversation) SetConversation(ctx context.Context, req *sdkpb.SetConversationReq) (*sdkpb.SetConversationResp, error) {
	c.conversationSyncMutex.Lock()
	defer c.conversationSyncMutex.Unlock()

	lc, err := c.db.GetConversation(ctx, req.ConversationID)
	if err != nil {
		return nil, err
	}
	apiReq := &pbConversation.SetConversationsReq{Conversation: req.Conversation}
	err = c.setConversation(ctx, apiReq, lc)
	if err != nil {
		return nil, err
	}
	err = c.IncrSyncConversations(ctx)
	if err != nil {
		return nil, err
	}
	return &sdkpb.SetConversationResp{}, nil
}

func (c *Conversation) GetTotalUnreadMsgCount(ctx context.Context, req *sdkpb.GetTotalUnreadMsgCountReq) (*sdkpb.GetTotalUnreadMsgCountResp, error) {
	totalUnreadCount, err := c.db.GetTotalUnreadMsgCountDB(ctx)
	if err != nil {
		return nil, err
	}
	return &sdkpb.GetTotalUnreadMsgCountResp{TotalUnreadCount: totalUnreadCount}, nil
}

func (c *Conversation) SetConversationListener(listener func() open_im_sdk_callback.OnConversationListener) {
	c.ConversationListener = listener
}

func (c *Conversation) msgDataToLocalErrChatLog(src *model_struct.LocalChatLog) *model_struct.LocalErrChatLog {
	var lc model_struct.LocalErrChatLog
	copier.Copy(&lc, src)
	return &lc

}

func (c *Conversation) updateMsgStatusAndTriggerConversation(ctx context.Context, clientMsgID, serverMsgID string, sendTime int64, status int32, s *sdkpb.MsgStruct,
	lc *model_struct.LocalConversation, isOnlineOnly bool) {
	log.ZDebug(ctx, "this is test send message ", "sendTime", sendTime, "status", status, "clientMsgID", clientMsgID, "serverMsgID", serverMsgID)
	if isOnlineOnly {
		return
	}
	s.SendTime = sendTime
	s.Status = status
	s.ServerMsgID = serverMsgID
	err := c.db.UpdateMessageTimeAndStatus(ctx, lc.ConversationID, clientMsgID, serverMsgID, sendTime, status)
	if err != nil {
		log.ZWarn(ctx, "send message update message status error", err,
			"sendTime", sendTime, "status", status, "clientMsgID", clientMsgID, "serverMsgID", serverMsgID)
	}
	err = c.db.DeleteSendingMessage(ctx, lc.ConversationID, clientMsgID)
	if err != nil {
		log.ZWarn(ctx, "send message delete sending message error", err)
	}
	lc.LatestMsg = utils.StructToJsonString(s)
	lc.LatestMsgSendTime = sendTime
	_ = common.TriggerCmdUpdateConversation(ctx, common.UpdateConNode{ConID: lc.ConversationID, Action: constant.AddConOrUpLatMsg, Args: *lc}, c.GetCh())
}

func (c *Conversation) fileName(ftype string, id string) string {
	return fmt.Sprintf("msg_%s_%s", ftype, id)
}

func (c *Conversation) checkID(ctx context.Context, s *sdkpb.MsgStruct,
	recvID, groupID string, options map[string]bool) (*model_struct.LocalConversation, error) {
	if recvID == "" && groupID == "" {
		return nil, sdkerrs.ErrArgs
	}
	s.SendID = c.loginUserID
	s.SenderPlatformID = c.platform
	lc := &model_struct.LocalConversation{LatestMsgSendTime: s.CreateTime}
	//assemble messages and conversations based on single or group chat types
	if recvID == "" {
		g, err := c.group.FetchGroupOrError(ctx, groupID)
		if err != nil {
			return nil, err
		}
		lc.ShowName = g.GroupName
		lc.FaceURL = g.FaceURL
		switch g.GroupType {
		case constant.NormalGroup:
			s.SessionType = constant.WriteGroupChatType
			lc.ConversationType = constant.WriteGroupChatType
			lc.ConversationID = c.getConversationIDBySessionType(groupID, constant.WriteGroupChatType)
		case constant.SuperGroup, constant.WorkingGroup:
			s.SessionType = constant.ReadGroupChatType
			lc.ConversationID = c.getConversationIDBySessionType(groupID, constant.ReadGroupChatType)
			lc.ConversationType = constant.ReadGroupChatType
		}
		s.GroupID = groupID
		lc.GroupID = groupID
		gm, err := c.db.GetGroupMemberInfoByGroupIDUserID(ctx, groupID, c.loginUserID)
		if err == nil && gm != nil {
			if gm.Nickname != "" {
				s.SenderNickname = gm.Nickname
			}
		} else { //Maybe the group member information hasn't been pulled locally yet.
			gm, err := c.group.GetSpecifiedGroupMembersInfo(ctx, groupID, []string{c.loginUserID})
			if err == nil && gm != nil {
				if gm[0].Nickname != "" {
					s.SenderNickname = gm[0].Nickname
				}
			}
		}
		var attachedInfo sdkpb.AttachedInfoElem
		attachedInfo.GroupHasReadInfo.GroupMemberCount = g.MemberCount
		s.AttachedInfoElem = &attachedInfo
	} else {
		s.SessionType = constant.SingleChatType
		s.RecvID = recvID
		lc.ConversationID = utils.GetConversationIDByMsg(s)
		lc.UserID = recvID
		lc.ConversationType = constant.SingleChatType
		oldLc, err := c.db.GetConversation(ctx, lc.ConversationID)
		if err == nil && oldLc.IsPrivateChat {
			options[constant.IsNotPrivate] = false
			var attachedInfo sdkpb.AttachedInfoElem
			attachedInfo.IsPrivateChat = true
			attachedInfo.BurnDuration = oldLc.BurnDuration
			s.AttachedInfoElem = &attachedInfo
		}
		if err != nil {
			t := time.Now()
			faceUrl, name, err := c.getUserNameAndFaceURL(ctx, recvID)
			log.ZDebug(ctx, "GetUserNameAndFaceURL", "cost time", time.Since(t))
			if err != nil {
				return nil, err
			}
			lc.FaceURL = faceUrl
			lc.ShowName = name
		}

	}
	return lc, nil
}
func (c *Conversation) getConversationIDBySessionType(sourceID string, sessionType int) string {
	switch sessionType {
	case constant.SingleChatType:
		l := []string{c.loginUserID, sourceID}
		sort.Strings(l)
		return "si_" + strings.Join(l, "_") // single chat
	case constant.WriteGroupChatType:
		return "g_" + sourceID // group chat
	case constant.ReadGroupChatType:
		return "sg_" + sourceID // super group chat
	case constant.NotificationChatType:
		return "sn_" + sourceID + "_" + c.loginUserID // server notification chat
	}
	return ""
}

func (c *Conversation) GetConversationIDBySessionType(ctx context.Context, req *sdkpb.GetConversationIDBySessionTypeReq) (*sdkpb.GetConversationIDBySessionTypeResp, error) {
	conversationID := c.getConversationIDBySessionType(req.SourceID, int(req.SessionType))
	return &sdkpb.GetConversationIDBySessionTypeResp{ConversationID: conversationID}, nil
}

func (c *Conversation) SendMessage(ctx context.Context, req *sdkpb.SendMessageReq) (*sdkpb.SendMessageResp, error) {
	// Message is created by URL
	if (req.Message.FileElem != nil && req.Message.FileElem.SourceURL != "") ||
		(req.Message.SoundElem != nil && req.Message.SoundElem.SourceURL != "") ||
		(req.Message.VideoElem != nil && req.Message.VideoElem.VideoURL != "") ||
		(req.Message.PictureElem != nil && (req.Message.PictureElem.SourcePicture.Url != "" || req.Message.PictureElem.BigPicture.Url != "" || req.Message.PictureElem.SnapshotPicture.Url != "")) {
		msg, err := c.sendMessageNotOss(ctx, req.Message, req.RecvID, req.GroupID, req.OfflinePushInfo, req.IsOnlineOnly)
		if err != nil {
			return nil, err
		}
		return &sdkpb.SendMessageResp{Message: msg}, nil
	}

	filepathExt := func(name ...string) string {
		for _, path := range name {
			if ext := filepath.Ext(path); ext != "" {
				return ext
			}
		}
		return ""
	}
	options := make(map[string]bool, 2)
	lc, err := c.checkID(ctx, req.Message, req.RecvID, req.GroupID, options)
	if err != nil {
		return nil, err
	}
	callback, _ := ctx.Value("callback").(open_im_sdk_callback.SendMsgCallBack)
	log.ZDebug(ctx, "before insert message is", "message", req.Message)
	if !req.IsOnlineOnly {
		oldMessage, err := c.db.GetMessage(ctx, lc.ConversationID, req.Message.ClientMsgID)
		if err != nil {
			localMessage := MsgStructToLocalChatLog(req.Message)
			err := c.db.InsertMessage(ctx, lc.ConversationID, localMessage)
			if err != nil {
				return nil, err
			}
			err = c.db.InsertSendingMessage(ctx, &model_struct.LocalSendingMessages{
				ConversationID: lc.ConversationID,
				ClientMsgID:    localMessage.ClientMsgID,
			})
			if err != nil {
				return nil, err
			}
		} else {
			if oldMessage.Status != constant.MsgStatusSendFailed {
				return nil, sdkerrs.ErrMsgRepeated
			} else {
				req.Message.Status = constant.MsgStatusSending
				err = c.db.InsertSendingMessage(ctx, &model_struct.LocalSendingMessages{
					ConversationID: lc.ConversationID,
					ClientMsgID:    req.Message.ClientMsgID,
				})
				if err != nil {
					return nil, err
				}
			}
		}
		lc.LatestMsg = utils.StructToJsonString(req.Message)
		log.ZDebug(ctx, "send message come here", "conversion", *lc)
		_ = common.TriggerCmdUpdateConversation(ctx, common.UpdateConNode{ConID: lc.ConversationID, Action: constant.AddConOrUpLatMsg, Args: *lc}, c.GetCh())
	}

	var delFile []string
	//media file handle
	switch req.Message.ContentType {
	case constant.Picture:
		if req.Message.Status == constant.MsgStatusSendSuccess {
			req.Message.Content = utils.StructToJsonString(req.Message.PictureElem)
			break
		}
		var sourcePath string
		if utils.FileExist(req.Message.PictureElem.SourcePath) {
			sourcePath = req.Message.PictureElem.SourcePath
			delFile = append(delFile, utils.FileTmpPath(req.Message.PictureElem.SourcePath, c.DataDir))
		} else {
			sourcePath = utils.FileTmpPath(req.Message.PictureElem.SourcePath, c.DataDir)
			delFile = append(delFile, sourcePath)
		}
		log.ZDebug(ctx, "send picture", "path", sourcePath)

		res, err := c.file.UploadFile(ctx, &file.UploadFileReq{
			ContentType: req.Message.PictureElem.SourcePicture.Type,
			Filepath:    sourcePath,
			Uuid:        req.Message.PictureElem.SourcePicture.Uuid,
			Name:        c.fileName("picture", req.Message.ClientMsgID) + filepathExt(req.Message.PictureElem.SourcePicture.Uuid, sourcePath),
			Cause:       "msg-picture",
		}, NewUploadFileCallback(ctx, callback.OnProgress, req.Message, lc.ConversationID, c.db))
		if err != nil {
			c.updateMsgStatusAndTriggerConversation(ctx, req.Message.ClientMsgID, "", req.Message.CreateTime, constant.MsgStatusSendFailed, req.Message, lc, req.IsOnlineOnly)
			return nil, err
		}
		req.Message.PictureElem.SourcePicture.Url = res.URL
		req.Message.PictureElem.BigPicture = req.Message.PictureElem.SourcePicture
		u, err := url.Parse(res.URL)
		if err == nil {
			snapshot := u.Query()
			snapshot.Set("type", "image")
			snapshot.Set("width", "640")
			snapshot.Set("height", "640")
			u.RawQuery = snapshot.Encode()
			req.Message.PictureElem.SnapshotPicture = &sdkpb.PictureBaseInfo{
				Width:  640,
				Height: 640,
				Url:    u.String(),
			}
		} else {
			log.ZError(ctx, "parse url failed", err, "url", res.URL, "err", err)
			req.Message.PictureElem.SnapshotPicture = req.Message.PictureElem.SourcePicture
		}
		req.Message.Content = utils.StructToJsonString(req.Message.PictureElem)
	case constant.Sound:
		if req.Message.Status == constant.MsgStatusSendSuccess {
			req.Message.Content = utils.StructToJsonString(req.Message.SoundElem)
			break
		}
		var sourcePath string
		if utils.FileExist(req.Message.SoundElem.SoundPath) {
			sourcePath = req.Message.SoundElem.SoundPath
			delFile = append(delFile, utils.FileTmpPath(req.Message.SoundElem.SoundPath, c.DataDir))
		} else {
			sourcePath = utils.FileTmpPath(req.Message.SoundElem.SoundPath, c.DataDir)
			delFile = append(delFile, sourcePath)
		}
		// log.Info("", "file", sourcePath, delFile)

		res, err := c.file.UploadFile(ctx, &file.UploadFileReq{
			ContentType: req.Message.SoundElem.SoundType,
			Filepath:    sourcePath,
			Uuid:        req.Message.SoundElem.Uuid,
			Name:        c.fileName("voice", req.Message.ClientMsgID) + filepathExt(req.Message.SoundElem.Uuid, sourcePath),
			Cause:       "msg-voice",
		}, NewUploadFileCallback(ctx, callback.OnProgress, req.Message, lc.ConversationID, c.db))
		if err != nil {
			c.updateMsgStatusAndTriggerConversation(ctx, req.Message.ClientMsgID, "", req.Message.CreateTime, constant.MsgStatusSendFailed, req.Message, lc, req.IsOnlineOnly)
			return nil, err
		}
		req.Message.SoundElem.SourceURL = res.URL
		req.Message.Content = utils.StructToJsonString(req.Message.SoundElem)
	case constant.Video:
		if req.Message.Status == constant.MsgStatusSendSuccess {
			req.Message.Content = utils.StructToJsonString(req.Message.VideoElem)
			break
		}
		var videoPath string
		var snapPath string
		if utils.FileExist(req.Message.VideoElem.VideoPath) {
			videoPath = req.Message.VideoElem.VideoPath
			snapPath = req.Message.VideoElem.SnapshotPath
			delFile = append(delFile, utils.FileTmpPath(req.Message.VideoElem.VideoPath, c.DataDir))
			delFile = append(delFile, utils.FileTmpPath(req.Message.VideoElem.SnapshotPath, c.DataDir))
		} else {
			videoPath = utils.FileTmpPath(req.Message.VideoElem.VideoPath, c.DataDir)
			snapPath = utils.FileTmpPath(req.Message.VideoElem.SnapshotPath, c.DataDir)
			delFile = append(delFile, videoPath)
			delFile = append(delFile, snapPath)
		}
		log.ZDebug(ctx, "file", "videoPath", videoPath, "snapPath", snapPath, "delFile", delFile)

		var wg sync.WaitGroup
		wg.Add(2)
		var putErrs error
		go func() {
			defer wg.Done()
			snapRes, err := c.file.UploadFile(ctx, &file.UploadFileReq{
				ContentType: req.Message.VideoElem.SnapshotType,
				Filepath:    snapPath,
				Uuid:        req.Message.VideoElem.SnapshotUUID,
				Name:        c.fileName("videoSnapshot", req.Message.ClientMsgID) + filepathExt(req.Message.VideoElem.SnapshotUUID, snapPath),
				Cause:       "msg-video-snapshot",
			}, nil)
			if err != nil {
				log.ZWarn(ctx, "upload video snapshot failed", err)
				return
			}
			req.Message.VideoElem.SnapshotURL = snapRes.URL
		}()

		go func() {
			defer wg.Done()
			res, err := c.file.UploadFile(ctx, &file.UploadFileReq{
				ContentType: content_type.GetType(req.Message.VideoElem.VideoType, filepath.Ext(req.Message.VideoElem.VideoPath)),
				Filepath:    videoPath,
				Uuid:        req.Message.VideoElem.VideoUUID,
				Name:        c.fileName("video", req.Message.ClientMsgID) + filepathExt(req.Message.VideoElem.VideoUUID, videoPath),
				Cause:       "msg-video",
			}, NewUploadFileCallback(ctx, callback.OnProgress, req.Message, lc.ConversationID, c.db))
			if err != nil {
				c.updateMsgStatusAndTriggerConversation(ctx, req.Message.ClientMsgID, "", req.Message.CreateTime, constant.MsgStatusSendFailed, req.Message, lc, req.IsOnlineOnly)
				putErrs = err
				return
			}
			if res != nil {
				req.Message.VideoElem.VideoURL = res.URL
			}
		}()
		wg.Wait()
		if err := putErrs; err != nil {
			return nil, err
		}
		req.Message.Content = utils.StructToJsonString(req.Message.VideoElem)
	case constant.File:
		if req.Message.Status == constant.MsgStatusSendSuccess {
			req.Message.Content = utils.StructToJsonString(req.Message.FileElem)
			break
		}
		name := req.Message.FileElem.FileName

		if name == "" {
			name = req.Message.FileElem.FilePath
		}
		if name == "" {
			name = fmt.Sprintf("msg_file_%req.Message.unknown", req.Message.ClientMsgID)
		}

		delFile = append(delFile, req.Message.FileElem.FilePath)

		res, err := c.file.UploadFile(ctx, &file.UploadFileReq{
			ContentType: content_type.GetType(req.Message.FileElem.FileType, filepath.Ext(req.Message.FileElem.FilePath), filepath.Ext(req.Message.FileElem.FileName)),
			Filepath:    req.Message.FileElem.FilePath,
			Uuid:        req.Message.FileElem.Uuid,
			Name:        c.fileName("file", req.Message.ClientMsgID) + "/" + filepath.Base(name),
			Cause:       "msg-file",
		}, NewUploadFileCallback(ctx, callback.OnProgress, req.Message, lc.ConversationID, c.db))
		if err != nil {
			c.updateMsgStatusAndTriggerConversation(ctx, req.Message.ClientMsgID, "", req.Message.CreateTime, constant.MsgStatusSendFailed, req.Message, lc, req.IsOnlineOnly)
			return nil, err
		}
		req.Message.FileElem.SourceURL = res.URL
		req.Message.Content = utils.StructToJsonString(req.Message.FileElem)
	case constant.Text:
		req.Message.Content = utils.StructToJsonString(req.Message.TextElem)
	case constant.AtText:
		req.Message.Content = utils.StructToJsonString(req.Message.AtTextElem)
	case constant.Location:
		req.Message.Content = utils.StructToJsonString(req.Message.LocationElem)
	case constant.Custom:
		req.Message.Content = utils.StructToJsonString(req.Message.CustomElem)
	case constant.Merger:
		req.Message.Content = utils.StructToJsonString(req.Message.MergeElem)
	case constant.Quote:
		req.Message.Content = utils.StructToJsonString(req.Message.QuoteElem)
	case constant.Card:
		req.Message.Content = utils.StructToJsonString(req.Message.CardElem)
	case constant.Face:
		req.Message.Content = utils.StructToJsonString(req.Message.FaceElem)
	case constant.AdvancedText:
		req.Message.Content = utils.StructToJsonString(req.Message.AdvancedTextElem)
	case pconstant.Stream:
		req.Message.Content = utils.StructToJsonString(req.Message.StreamElem)
	default:
		return nil, sdkerrs.ErrMsgContentTypeNotSupport
	}
	if utils.IsContainInt(int(req.Message.ContentType), []int{constant.Picture, constant.Sound, constant.Video, constant.File}) {
		if !req.IsOnlineOnly {
			localMessage := MsgStructToLocalChatLog(req.Message)
			log.ZDebug(ctx, "update message is ", "localMessage", localMessage)
			err = c.db.UpdateMessage(ctx, lc.ConversationID, localMessage)
			if err != nil {
				return nil, err
			}
		}
	}

	msg, err := c.sendMessageToServer(ctx, req.Message, lc, callback, delFile, req.OfflinePushInfo, options, req.IsOnlineOnly)
	if err != nil {
		return nil, err
	}
	return &sdkpb.SendMessageResp{Message: msg}, nil
}

func (c *Conversation) sendMessageNotOss(ctx context.Context, s *sdkpb.MsgStruct, recvID, groupID string,
	p *sdkpb.OfflinePushInfo, isOnlineOnly bool) (*sdkpb.MsgStruct, error) {
	options := make(map[string]bool, 2)
	lc, err := c.checkID(ctx, s, recvID, groupID, options)
	if err != nil {
		return nil, err
	}
	callback, _ := ctx.Value("callback").(open_im_sdk_callback.SendMsgCallBack)
	if !isOnlineOnly {
		oldMessage, err := c.db.GetMessage(ctx, lc.ConversationID, s.ClientMsgID)
		if err != nil {
			localMessage := MsgStructToLocalChatLog(s)
			err := c.db.InsertMessage(ctx, lc.ConversationID, localMessage)
			if err != nil {
				return nil, err
			}
			err = c.db.InsertSendingMessage(ctx, &model_struct.LocalSendingMessages{
				ConversationID: lc.ConversationID,
				ClientMsgID:    localMessage.ClientMsgID,
			})
			if err != nil {
				return nil, err
			}
		} else {
			if oldMessage.Status != constant.MsgStatusSendFailed {
				return nil, sdkerrs.ErrMsgRepeated
			} else {
				s.Status = constant.MsgStatusSending
				err = c.db.InsertSendingMessage(ctx, &model_struct.LocalSendingMessages{
					ConversationID: lc.ConversationID,
					ClientMsgID:    s.ClientMsgID,
				})
				if err != nil {
					return nil, err
				}
			}
		}
	}
	lc.LatestMsg = utils.StructToJsonString(s)
	var delFile []string
	switch s.ContentType {
	case constant.Picture:
		s.Content = utils.StructToJsonString(s.PictureElem)
	case constant.Sound:
		s.Content = utils.StructToJsonString(s.SoundElem)
	case constant.Video:
		s.Content = utils.StructToJsonString(s.VideoElem)
	case constant.File:
		s.Content = utils.StructToJsonString(s.FileElem)
	case constant.Text:
		s.Content = utils.StructToJsonString(s.TextElem)
	case constant.AtText:
		s.Content = utils.StructToJsonString(s.AtTextElem)
	case constant.Location:
		s.Content = utils.StructToJsonString(s.LocationElem)
	case constant.Custom:
		s.Content = utils.StructToJsonString(s.CustomElem)
	case constant.Merger:
		s.Content = utils.StructToJsonString(s.MergeElem)
	case constant.Quote:
		s.Content = utils.StructToJsonString(s.QuoteElem)
	case constant.Card:
		s.Content = utils.StructToJsonString(s.CardElem)
	case constant.Face:
		s.Content = utils.StructToJsonString(s.FaceElem)
	case constant.AdvancedText:
		s.Content = utils.StructToJsonString(s.AdvancedTextElem)
	case pconstant.Stream:
		s.Content = utils.StructToJsonString(s.StreamElem)
	default:
		return nil, sdkerrs.ErrMsgContentTypeNotSupport
	}
	if utils.IsContainInt(int(s.ContentType), []int{constant.Picture, constant.Sound, constant.Video, constant.File}) {
		if isOnlineOnly {
			localMessage := MsgStructToLocalChatLog(s)
			err = c.db.UpdateMessage(ctx, lc.ConversationID, localMessage)
			if err != nil {
				return nil, err
			}
		}
	}
	return c.sendMessageToServer(ctx, s, lc, callback, delFile, p, options, isOnlineOnly)
}

func (c *Conversation) sendMessageToServer(ctx context.Context, s *sdkpb.MsgStruct, lc *model_struct.LocalConversation, callback open_im_sdk_callback.SendMsgCallBack,
	delFiles []string, offlinePushInfo *sdkws.OfflinePushInfo, options map[string]bool, isOnlineOnly bool) (*sdkpb.MsgStruct, error) {
	if isOnlineOnly {
		utils.SetSwitchFromOptions(options, constant.IsHistory, false)
		utils.SetSwitchFromOptions(options, constant.IsPersistent, false)
		utils.SetSwitchFromOptions(options, constant.IsSenderSync, false)
		utils.SetSwitchFromOptions(options, constant.IsConversationUpdate, false)
		utils.SetSwitchFromOptions(options, constant.IsSenderConversationUpdate, false)
		utils.SetSwitchFromOptions(options, constant.IsUnreadCount, false)
		utils.SetSwitchFromOptions(options, constant.IsOfflinePush, false)
	}
	//Protocol conversion
	var wsMsgData sdkws.MsgData
	copier.Copy(&wsMsgData, s)
	wsMsgData.AttachedInfo = utils.StructToJsonString(s.AttachedInfoElem)
	wsMsgData.Content = []byte(s.Content)
	wsMsgData.CreateTime = s.CreateTime
	wsMsgData.SendTime = 0
	wsMsgData.Options = options
	if wsMsgData.ContentType == constant.AtText {
		wsMsgData.AtUserIDList = s.AtTextElem.AtUserList
	}
	wsMsgData.OfflinePushInfo = offlinePushInfo
	s.Content = ""
	var sendMsgResp sdkws.UserSendMsgResp

	err := c.LongConnMgr.SendReqWaitResp(ctx, &wsMsgData, constant.SendMsg, &sendMsgResp)
	if err != nil {
		//if send message network timeout need to double-check message has received by db.
		if sdkerrs.ErrNetworkTimeOut.Is(err) && !isOnlineOnly {
			oldMessage, _ := c.db.GetMessage(ctx, lc.ConversationID, s.ClientMsgID)
			if oldMessage.Status == constant.MsgStatusSendSuccess {
				sendMsgResp.SendTime = oldMessage.SendTime
				sendMsgResp.ClientMsgID = oldMessage.ClientMsgID
				sendMsgResp.ServerMsgID = oldMessage.ServerMsgID
			} else {
				log.ZError(ctx, "send msg to server failed", err, "message", s)
				c.updateMsgStatusAndTriggerConversation(ctx, s.ClientMsgID, "", s.CreateTime,
					constant.MsgStatusSendFailed, s, lc, isOnlineOnly)
				return s, err
			}
		} else {
			log.ZError(ctx, "send msg to server failed", err, "message", s)
			c.updateMsgStatusAndTriggerConversation(ctx, s.ClientMsgID, "", s.CreateTime,
				constant.MsgStatusSendFailed, s, lc, isOnlineOnly)
			return s, err
		}
	}
	s.SendTime = sendMsgResp.SendTime
	s.Status = constant.MsgStatusSendSuccess
	s.ServerMsgID = sendMsgResp.ServerMsgID
	go func() {
		//remove media cache file
		for _, file := range delFiles {
			err := os.Remove(file)
			if err != nil {
				log.ZError(ctx, "delete temp File is failed", err, "filePath", file)
			}
			// log.ZDebug(ctx, "remove temp file:", "file", file)
		}

		c.updateMsgStatusAndTriggerConversation(ctx, sendMsgResp.ClientMsgID, sendMsgResp.ServerMsgID, sendMsgResp.SendTime, constant.MsgStatusSendSuccess, s, lc, isOnlineOnly)
	}()
	return s, nil

}

func (c *Conversation) FindMessageList(ctx context.Context, req *sdkpb.FindMessageListReq) (*sdkpb.FindMessageListResp, error) {
	var r sdkpb.FindMessageListResp
	type tempConversationAndMessageList struct {
		conversation *sdkpb.Conversation
		msgIDList    []string
	}
	var s []*tempConversationAndMessageList
	for _, conversationsArgs := range req.ConversationsArgs {
		localConversation, err := c.db.GetConversation(ctx, conversationsArgs.ConversationID)
		if err != nil {
			log.ZError(ctx, "GetConversation err", err, "conversationsArgs", conversationsArgs)
		} else {
			t := new(tempConversationAndMessageList)
			t.conversation = LocalConversationToSdkPB(localConversation)
			t.msgIDList = conversationsArgs.ClientMsgIDList
			s = append(s, t)
		}
	}
	for _, v := range s {
		messages, err := c.db.GetMessagesByClientMsgIDs(ctx, v.conversation.ConversationID, v.msgIDList)
		if err == nil {
			var tempMessageList []*sdkpb.MsgStruct
			for _, message := range messages {
				temp := LocalChatLogToMsgPB(message)
				tempMessageList = append(tempMessageList, temp)
			}
			findResultItem := sdkpb.SearchByConversationResult{}
			findResultItem.ConversationID = v.conversation.ConversationID
			findResultItem.FaceURL = v.conversation.FaceURL
			findResultItem.ShowName = v.conversation.ShowName
			findResultItem.ConversationType = v.conversation.ConversationType
			findResultItem.MessageList = tempMessageList
			findResultItem.MessageCount = len(findResultItem.MessageList)
			r.FindResultItems = append(r.FindResultItems, &findResultItem)
			r.TotalCount += findResultItem.MessageCount
		} else {
			log.ZError(ctx, "GetMessagesByClientMsgIDs err", err, "conversationID", v.conversation.ConversationID, "msgIDList", v.msgIDList)
		}
	}
	return &r, nil
}

func (c *Conversation) GetAdvancedHistoryMessageList(ctx context.Context, req *sdkpb.GetAdvancedHistoryMessageListReq) (*sdkpb.GetAdvancedHistoryMessageListResp, error) {
	result, err := c.getAdvancedHistoryMessageList(ctx, req.GetAdvancedHistoryMessageListParams, false)
	if err != nil {
		return nil, err
	}
	if len(result.MessageList) == 0 {
		s := make([]*sdkpb.MsgStruct, 0)
		result.MessageList = s
	}
	c.streamMsgReplace(ctx, req.ConversationID, result.MessageList)
	return &sdkpb.GetAdvancedHistoryMessageListResp{GetAdvancedHistoryMessageListCallback: result}, nil
}

func (c *Conversation) GetAdvancedHistoryMessageListReverse(ctx context.Context, req sdk_params_callback.GetAdvancedHistoryMessageListParams) (*sdk_params_callback.GetAdvancedHistoryMessageListCallback, error) {
	result, err := c.getAdvancedHistoryMessageList(ctx, req, true)
	if err != nil {
		return nil, err
	}
	if len(result.MessageList) == 0 {
		s := make([]*sdk_struct.MsgStruct, 0)
		result.MessageList = s
	}
	c.streamMsgReplace(ctx, req.ConversationID, result.MessageList)
	return result, nil
}

func (c *Conversation) RevokeMessage(ctx context.Context, conversationID, clientMsgID string) error {
	return c.revokeOneMessage(ctx, conversationID, clientMsgID)
}

func (c *Conversation) TypingStatusUpdate(ctx context.Context, recvID, msgTip string) error {
	return c.typingStatusUpdate(ctx, recvID, msgTip)
}

func (c *Conversation) MarkConversationMessageAsRead(ctx context.Context, conversationID string) error {
	return c.markConversationMessageAsRead(ctx, conversationID)
}

func (c *Conversation) MarkAllConversationMessageAsRead(ctx context.Context) error {
	conversationIDs, err := c.db.FindAllUnreadConversationConversationID(ctx)
	if err != nil {
		return err
	}
	for _, conversationID := range conversationIDs {
		if err = c.markConversationMessageAsRead(ctx, conversationID); err != nil {
			return err
		}
	}
	return nil
}

// deprecated
func (c *Conversation) MarkMessagesAsReadByMsgID(ctx context.Context, conversationID string, clientMsgIDs []string) error {
	return c.markMessagesAsReadByMsgID(ctx, conversationID, clientMsgIDs)
}

func (c *Conversation) DeleteMessageFromLocalStorage(ctx context.Context, conversationID string, clientMsgID string) error {
	return c.deleteMessageFromLocal(ctx, conversationID, clientMsgID)
}

func (c *Conversation) DeleteMessage(ctx context.Context, conversationID string, clientMsgID string) error {
	return c.deleteMessage(ctx, conversationID, clientMsgID)
}

func (c *Conversation) DeleteAllMsgFromLocalAndServer(ctx context.Context) error {
	return c.deleteAllMsgFromLocalAndServer(ctx)
}

func (c *Conversation) DeleteAllMessageFromLocalStorage(ctx context.Context) error {
	return c.deleteAllMsgFromLocal(ctx, true)
}

func (c *Conversation) ClearConversationAndDeleteAllMsg(ctx context.Context, conversationID string) error {
	return c.clearConversationFromLocalAndServer(ctx, conversationID, c.db.ClearConversation)
}

func (c *Conversation) DeleteConversationAndDeleteAllMsg(ctx context.Context, conversationID string) error {
	return c.clearConversationFromLocalAndServer(ctx, conversationID, c.db.ResetConversation)
}

func (c *Conversation) InsertSingleMessageToLocalStorage(ctx context.Context, s *sdk_struct.MsgStruct, recvID, sendID string) (*sdk_struct.MsgStruct, error) {
	if recvID == "" || sendID == "" {
		return nil, sdkerrs.ErrArgs
	}
	var conversation model_struct.LocalConversation
	if sendID != c.loginUserID {
		faceUrl, name, err := c.getUserNameAndFaceURL(ctx, sendID)
		if err != nil {
			//log.Error(operationID, "GetUserNameAndFaceURL err", err.Error(), sendID)
		}
		s.SenderFaceURL = faceUrl
		s.SenderNickname = name
		conversation.FaceURL = faceUrl
		conversation.ShowName = name
		conversation.UserID = sendID
		conversation.ConversationID = c.getConversationIDBySessionType(sendID, constant.SingleChatType)

	} else {
		conversation.UserID = recvID
		conversation.ConversationID = c.getConversationIDBySessionType(recvID, constant.SingleChatType)
		_, err := c.db.GetConversation(ctx, conversation.ConversationID)
		if err != nil {
			faceUrl, name, err := c.getUserNameAndFaceURL(ctx, recvID)
			if err != nil {
				return nil, err
			}
			conversation.FaceURL = faceUrl
			conversation.ShowName = name
		}
	}

	s.SendID = sendID
	s.RecvID = recvID
	s.ClientMsgID = utils.GetMsgID(s.SendID)
	s.SendTime = utils.GetCurrentTimestampByMill()
	s.SessionType = constant.SingleChatType
	s.Status = constant.MsgStatusSendSuccess
	localMessage := MsgStructToLocalChatLog(s)
	conversation.LatestMsg = utils.StructToJsonString(s)
	conversation.ConversationType = constant.SingleChatType
	conversation.LatestMsgSendTime = s.SendTime
	err := c.insertMessageToLocalStorage(ctx, conversation.ConversationID, localMessage)
	if err != nil {
		return nil, err
	}
	_ = common.TriggerCmdUpdateConversation(ctx, common.UpdateConNode{ConID: conversation.ConversationID, Action: constant.AddConOrUpLatMsg, Args: conversation}, c.GetCh())
	return s, nil

}

func (c *Conversation) InsertGroupMessageToLocalStorage(ctx context.Context, s *sdk_struct.MsgStruct, groupID, sendID string) (*sdk_struct.MsgStruct, error) {
	if groupID == "" || sendID == "" {
		return nil, sdkerrs.ErrArgs
	}
	var conversation model_struct.LocalConversation
	var err error
	_, conversation.ConversationType, err = c.getConversationTypeByGroupID(ctx, groupID)
	if err != nil {
		return nil, err
	}

	conversation.ConversationID = c.getConversationIDBySessionType(groupID, int(conversation.ConversationType))
	if sendID != c.loginUserID {
		faceUrl, name, err := c.getUserNameAndFaceURL(ctx, sendID)
		if err != nil {
			// log.Error("", "getUserNameAndFaceUrlByUid err", err.Error(), sendID)
		}
		s.SenderFaceURL = faceUrl
		s.SenderNickname = name
	}
	s.SendID = sendID
	s.RecvID = groupID
	s.GroupID = groupID
	s.ClientMsgID = utils.GetMsgID(s.SendID)
	s.SendTime = utils.GetCurrentTimestampByMill()
	s.SessionType = conversation.ConversationType
	s.Status = constant.MsgStatusSendSuccess
	localMessage := MsgStructToLocalChatLog(s)
	conversation.LatestMsg = utils.StructToJsonString(s)
	conversation.LatestMsgSendTime = s.SendTime
	conversation.FaceURL = s.SenderFaceURL
	conversation.ShowName = s.SenderNickname
	err = c.insertMessageToLocalStorage(ctx, conversation.ConversationID, localMessage)
	if err != nil {
		return nil, err
	}
	_ = common.TriggerCmdUpdateConversation(ctx, common.UpdateConNode{ConID: conversation.ConversationID, Action: constant.AddConOrUpLatMsg, Args: conversation}, c.GetCh())
	return s, nil

}

func (c *Conversation) SearchLocalMessages(ctx context.Context, searchParam *sdk_params_callback.SearchLocalMessagesParams) (*sdk_params_callback.SearchLocalMessagesCallback, error) {
	searchParam.KeywordList = utils.TrimStringList(searchParam.KeywordList)
	return c.searchLocalMessages(ctx, searchParam)

}
func (c *Conversation) SetMessageLocalEx(ctx context.Context, conversationID string, clientMsgID string, localEx string) error {
	err := c.db.UpdateColumnsMessage(ctx, conversationID, clientMsgID, map[string]interface{}{"local_ex": localEx})
	if err != nil {
		return err
	}
	conversation, err := c.db.GetConversation(ctx, conversationID)
	if err != nil {
		return err
	}
	var latestMsg sdk_struct.MsgStruct
	utils.JsonStringToStruct(conversation.LatestMsg, &latestMsg)
	if latestMsg.ClientMsgID == clientMsgID {
		log.ZDebug(ctx, "latestMsg local ex changed", "seq", latestMsg.Seq, "clientMsgID", latestMsg.ClientMsgID)
		latestMsg.LocalEx = localEx
		latestMsgStr := utils.StructToJsonString(latestMsg)
		if err = c.db.UpdateColumnsConversation(ctx, conversationID, map[string]interface{}{"latest_msg": latestMsgStr, "latest_msg_send_time": latestMsg.SendTime}); err != nil {
			return err
		}
		c.doUpdateConversation(common.Cmd2Value{Value: common.UpdateConNode{Action: constant.ConChange, Args: []string{conversationID}}})
	}
	return nil
}

func (c *Conversation) initBasicInfo(ctx context.Context, message *sdk_struct.MsgStruct, msgFrom, contentType int32) error {
	message.CreateTime = utils.GetCurrentTimestampByMill()
	message.SendTime = message.CreateTime
	message.IsRead = false
	message.Status = constant.MsgStatusSending
	message.SendID = c.loginUserID
	userInfo, err := c.user.GetUserInfoWithCacheFunc(ctx, c.loginUserID, c.db.GetLoginUser)
	if err != nil {
		return err
	}
	message.SenderFaceURL = userInfo.FaceURL
	message.SenderNickname = userInfo.Nickname
	ClientMsgID := utils.GetMsgID(message.SendID)
	message.ClientMsgID = ClientMsgID
	message.MsgFrom = msgFrom
	message.ContentType = contentType
	message.SenderPlatformID = c.platformID
	return nil
}

func (c *Conversation) getConversationTypeByGroupID(ctx context.Context, groupID string) (conversationID string, conversationType int32, err error) {
	g, err := c.group.FetchGroupOrError(ctx, groupID)
	if err != nil {
		return "", 0, errs.WrapMsg(err, "get group info error")
	}
	switch g.GroupType {
	case constant.NormalGroup:
		return c.getConversationIDBySessionType(groupID, constant.WriteGroupChatType), constant.WriteGroupChatType, nil
	case constant.SuperGroup, constant.WorkingGroup:
		return c.getConversationIDBySessionType(groupID, constant.ReadGroupChatType), constant.ReadGroupChatType, nil
	default:
		return "", 0, sdkerrs.ErrGroupType
	}
}

func (c *Conversation) SearchConversation(ctx context.Context, searchParam string) ([]*server_api_params.Conversation, error) {
	// Check if search parameter is empty
	if searchParam == "" {
		return nil, sdkerrs.ErrArgs.WrapMsg("search parameter cannot be empty")
	}

	// Perform the search in your database or data source
	// This is a placeholder for the actual database call
	conversations, err := c.db.SearchConversations(ctx, searchParam)
	if err != nil {
		// Handle any errors that occurred during the search
		return nil, err
	}
	apiConversations := make([]*server_api_params.Conversation, len(conversations))
	for i, localConv := range conversations {
		// Create new server_api_params.Conversation and map fields from localConv
		apiConv := &server_api_params.Conversation{
			ConversationID:        localConv.ConversationID,
			ConversationType:      localConv.ConversationType,
			UserID:                localConv.UserID,
			GroupID:               localConv.GroupID,
			RecvMsgOpt:            localConv.RecvMsgOpt,
			UnreadCount:           localConv.UnreadCount,
			DraftTextTime:         localConv.DraftTextTime,
			IsPinned:              localConv.IsPinned,
			IsPrivateChat:         localConv.IsPrivateChat,
			BurnDuration:          localConv.BurnDuration,
			GroupAtType:           localConv.GroupAtType,
			IsNotInGroup:          localConv.IsNotInGroup,
			UpdateUnreadCountTime: localConv.UpdateUnreadCountTime,
			AttachedInfo:          localConv.AttachedInfo,
			Ex:                    localConv.Ex,
		}
		apiConversations[i] = apiConv
	}
	// Return the list of conversations
	return apiConversations, nil
}
