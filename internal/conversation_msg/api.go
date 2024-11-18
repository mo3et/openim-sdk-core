package conversation_msg

import (
	"context"
	"fmt"
	"net/url"
	"os"
	"path/filepath"
	"sort"
	"strings"
	"sync"
	"time"

	pbConversation "github.com/openimsdk/protocol/conversation"
	"github.com/openimsdk/tools/utils/stringutil"

	pconstant "github.com/openimsdk/protocol/constant"
	"github.com/openimsdk/tools/utils/datautil"

	"github.com/openimsdk/tools/errs"

	"github.com/openimsdk/openim-sdk-core/v3/internal/third/file"
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk_callback"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/common"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/constant"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/content_type"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/utils"
	"github.com/openimsdk/openim-sdk-core/v3/sdk_struct"

	"github.com/openimsdk/tools/log"

	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto"
	"github.com/openimsdk/protocol/sdkws"

	"github.com/jinzhu/copier"
)

var (
	msgContentTypeErr = errs.New("message content not match contentType")
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

func (c *Conversation) updateMsgStatusAndTriggerConversation(ctx context.Context, clientMsgID, serverMsgID string, sendTime int64, status sdkpb.MsgStatus, s *sdkpb.IMMessage,
	lc *model_struct.LocalConversation, isOnlineOnly bool) {
	log.ZDebug(ctx, "this is test send message ", "sendTime", sendTime, "status", status, "clientMsgID", clientMsgID, "serverMsgID", serverMsgID)
	if isOnlineOnly {
		return
	}
	s.SendTime = sendTime
	s.Status = status
	s.ServerMsgID = serverMsgID
	err := c.db.UpdateMessageTimeAndStatus(ctx, lc.ConversationID, clientMsgID, serverMsgID, sendTime, int32(status))
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

func (c *Conversation) checkID(ctx context.Context, s *sdkpb.IMMessage,
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
			gm, err := c.group.GetSpecifiedGroupMembersInfo(ctx, &sdkpb.GetSpecifiedGroupMembersInfoReq{
				GroupID: groupID,
				UserIDs: []string{c.loginUserID},
			})
			if err == nil && gm.Members != nil {
				if gm.Members[0].Nickname != "" {
					s.SenderNickname = gm.Members[0].Nickname
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

func getMsgUrl(msg *sdkpb.IMMessage) string {
	switch msg.ContentType {
	case sdkpb.ContentType_File:
		if c, ok := msg.Content.(*sdkpb.IMMessage_FileElem); ok {
			return c.FileElem.SourceURL
		}
	case sdkpb.ContentType_Sound:
		if c, ok := msg.Content.(*sdkpb.IMMessage_SoundElem); ok {
			return c.SoundElem.SourceURL
		}
	case sdkpb.ContentType_Video:
		if c, ok := msg.Content.(*sdkpb.IMMessage_VideoElem); ok {
			return c.VideoElem.VideoURL
		}
	case sdkpb.ContentType_Picture:
		if c, ok := msg.Content.(*sdkpb.IMMessage_PictureElem); ok {
			firstNotNil := func(strs ...string) string {
				for _, str := range strs {
					if str != "" {
						return str
					}
				}
				return ""
			}
			return firstNotNil(c.PictureElem.SourcePicture.Url, c.PictureElem.BigPicture.Url, c.PictureElem.SnapshotPicture.Url)
		}
	}
	return ""
}

func (c *Conversation) SendMessage(ctx context.Context, req *sdkpb.SendMessageReq, callback open_im_sdk_callback.SendMsgCallBack) (*sdkpb.SendMessageResp, error) {
	// Message is created by URL
	if getMsgUrl(req.Message) != "" {
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
			break
		}
		msgElem, ok := req.Message.Content.(*sdkpb.IMMessage_PictureElem)
		if !ok {
			return nil, msgContentTypeErr.Wrap()
		}
		var sourcePath string
		if utils.FileExist(msgElem.PictureElem.SourcePath) {
			sourcePath = msgElem.PictureElem.SourcePath
			delFile = append(delFile, utils.FileTmpPath(msgElem.PictureElem.SourcePath, c.DataDir))
		} else {
			sourcePath = utils.FileTmpPath(msgElem.PictureElem.SourcePath, c.DataDir)
			delFile = append(delFile, sourcePath)
		}
		log.ZDebug(ctx, "send picture", "path", sourcePath)

		res, err := c.file.UploadFile(ctx, &file.UploadFileReq{
			ContentType: msgElem.PictureElem.SourcePicture.Type,
			Filepath:    sourcePath,
			Uuid:        msgElem.PictureElem.SourcePicture.Uuid,
			Name:        c.fileName("picture", req.Message.ClientMsgID) + filepathExt(msgElem.PictureElem.SourcePicture.Uuid, sourcePath),
			Cause:       "msg-picture",
		}, NewUploadFileCallback(ctx, callback.OnSendMsgProgress, req.Message, lc.ConversationID, c.db))
		if err != nil {
			c.updateMsgStatusAndTriggerConversation(ctx, req.Message.ClientMsgID, "", req.Message.CreateTime, sdkpb.MsgStatus_SendFailed, req.Message, lc, req.IsOnlineOnly)
			return nil, err
		}
		msgElem.PictureElem.SourcePicture.Url = res.URL
		msgElem.PictureElem.BigPicture = msgElem.PictureElem.SourcePicture
		u, err := url.Parse(res.URL)
		if err == nil {
			snapshot := u.Query()
			snapshot.Set("type", "image")
			snapshot.Set("width", "640")
			snapshot.Set("height", "640")
			u.RawQuery = snapshot.Encode()
			msgElem.PictureElem.SnapshotPicture = &sdkpb.PictureBaseInfo{
				Width:  640,
				Height: 640,
				Url:    u.String(),
			}
		} else {
			log.ZError(ctx, "parse url failed", err, "url", res.URL, "err", err)
			msgElem.PictureElem.SnapshotPicture = msgElem.PictureElem.SourcePicture
		}

	case constant.Sound:
		if req.Message.Status == constant.MsgStatusSendSuccess {
			break
		}
		msgElem, ok := req.Message.Content.(*sdkpb.IMMessage_SoundElem)
		if !ok {
			return nil, msgContentTypeErr.Wrap()
		}
		var sourcePath string
		if utils.FileExist(msgElem.SoundElem.SoundPath) {
			sourcePath = msgElem.SoundElem.SoundPath
			delFile = append(delFile, utils.FileTmpPath(msgElem.SoundElem.SoundPath, c.DataDir))
		} else {
			sourcePath = utils.FileTmpPath(msgElem.SoundElem.SoundPath, c.DataDir)
			delFile = append(delFile, sourcePath)
		}
		// log.Info("", "file", sourcePath, delFile)

		res, err := c.file.UploadFile(ctx, &file.UploadFileReq{
			ContentType: msgElem.SoundElem.SoundType,
			Filepath:    sourcePath,
			Uuid:        msgElem.SoundElem.Uuid,
			Name:        c.fileName("voice", req.Message.ClientMsgID) + filepathExt(msgElem.SoundElem.Uuid, sourcePath),
			Cause:       "msg-voice",
		}, NewUploadFileCallback(ctx, callback.OnSendMsgProgress, req.Message, lc.ConversationID, c.db))
		if err != nil {
			c.updateMsgStatusAndTriggerConversation(ctx, req.Message.ClientMsgID, "", req.Message.CreateTime, sdkpb.MsgStatus_SendFailed, req.Message, lc, req.IsOnlineOnly)
			return nil, err
		}
		msgElem.SoundElem.SourceURL = res.URL
	case constant.Video:
		if req.Message.Status == constant.MsgStatusSendSuccess {
			break
		}
		msgElem, ok := req.Message.Content.(*sdkpb.IMMessage_VideoElem)
		if !ok {
			return nil, msgContentTypeErr.Wrap()
		}
		var videoPath string
		var snapPath string
		if utils.FileExist(msgElem.VideoElem.VideoPath) {
			videoPath = msgElem.VideoElem.VideoPath
			snapPath = msgElem.VideoElem.SnapshotPath
			delFile = append(delFile, utils.FileTmpPath(msgElem.VideoElem.VideoPath, c.DataDir))
			delFile = append(delFile, utils.FileTmpPath(msgElem.VideoElem.SnapshotPath, c.DataDir))
		} else {
			videoPath = utils.FileTmpPath(msgElem.VideoElem.VideoPath, c.DataDir)
			snapPath = utils.FileTmpPath(msgElem.VideoElem.SnapshotPath, c.DataDir)
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
				ContentType: msgElem.VideoElem.SnapshotType,
				Filepath:    snapPath,
				Uuid:        msgElem.VideoElem.SnapshotUUID,
				Name:        c.fileName("videoSnapshot", req.Message.ClientMsgID) + filepathExt(msgElem.VideoElem.SnapshotUUID, snapPath),
				Cause:       "msg-video-snapshot",
			}, nil)
			if err != nil {
				log.ZWarn(ctx, "upload video snapshot failed", err)
				return
			}
			msgElem.VideoElem.SnapshotURL = snapRes.URL
		}()

		go func() {
			defer wg.Done()
			res, err := c.file.UploadFile(ctx, &file.UploadFileReq{
				ContentType: content_type.GetType(msgElem.VideoElem.VideoType, filepath.Ext(msgElem.VideoElem.VideoPath)),
				Filepath:    videoPath,
				Uuid:        msgElem.VideoElem.VideoUUID,
				Name:        c.fileName("video", req.Message.ClientMsgID) + filepathExt(msgElem.VideoElem.VideoUUID, videoPath),
				Cause:       "msg-video",
			}, NewUploadFileCallback(ctx, callback.OnSendMsgProgress, req.Message, lc.ConversationID, c.db))
			if err != nil {
				c.updateMsgStatusAndTriggerConversation(ctx, req.Message.ClientMsgID, "", req.Message.CreateTime, sdkpb.MsgStatus_SendFailed, req.Message, lc, req.IsOnlineOnly)
				putErrs = err
				return
			}
			if res != nil {
				msgElem.VideoElem.VideoURL = res.URL
			}
		}()
		wg.Wait()
		if err := putErrs; err != nil {
			return nil, err
		}
	case constant.File:
		if req.Message.Status == constant.MsgStatusSendSuccess {
			break
		}
		msgElem, ok := req.Message.Content.(*sdkpb.IMMessage_FileElem)
		if !ok {
			return nil, msgContentTypeErr.Wrap()
		}
		name := msgElem.FileElem.FileName

		if name == "" {
			name = msgElem.FileElem.FilePath
		}
		if name == "" {
			name = fmt.Sprintf("msg_file_%req.Message.unknown", req.Message.ClientMsgID)
		}

		delFile = append(delFile, msgElem.FileElem.FilePath)

		res, err := c.file.UploadFile(ctx, &file.UploadFileReq{
			ContentType: content_type.GetType(msgElem.FileElem.FileType, filepath.Ext(msgElem.FileElem.FilePath), filepath.Ext(msgElem.FileElem.FileName)),
			Filepath:    msgElem.FileElem.FilePath,
			Uuid:        msgElem.FileElem.Uuid,
			Name:        c.fileName("file", req.Message.ClientMsgID) + "/" + filepath.Base(name),
			Cause:       "msg-file",
		}, NewUploadFileCallback(ctx, callback.OnSendMsgProgress, req.Message, lc.ConversationID, c.db))
		if err != nil {
			c.updateMsgStatusAndTriggerConversation(ctx, req.Message.ClientMsgID, "", req.Message.CreateTime, constant.MsgStatusSendFailed, req.Message, lc, req.IsOnlineOnly)
			return nil, err
		}
		msgElem.FileElem.SourceURL = res.URL
	case constant.Text:
	case constant.AtText:
	case constant.Location:
	case constant.Custom:
	case constant.Merger:
	case constant.Quote:
	case constant.Card:
	case constant.Face:
	case constant.AdvancedText:
	case pconstant.Stream:
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

	msg, err := c.sendMessageToServer(ctx, req.Message, lc, delFile, req.OfflinePushInfo, options, req.IsOnlineOnly)
	if err != nil {
		return nil, err
	}
	return &sdkpb.SendMessageResp{Message: msg}, nil
}

func (c *Conversation) sendMessageNotOss(ctx context.Context, s *sdkpb.IMMessage, recvID, groupID string,
	p *sdkpb.OfflinePushInfo, isOnlineOnly bool) (*sdkpb.IMMessage, error) {
	options := make(map[string]bool, 2)
	lc, err := c.checkID(ctx, s, recvID, groupID, options)
	if err != nil {
		return nil, err
	}
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
	if utils.IsContainInt(int(s.ContentType), []int{constant.Picture, constant.Sound, constant.Video, constant.File}) {
		if isOnlineOnly {
			localMessage := MsgStructToLocalChatLog(s)
			err = c.db.UpdateMessage(ctx, lc.ConversationID, localMessage)
			if err != nil {
				return nil, err
			}
		}
	}
	return c.sendMessageToServer(ctx, s, lc, delFile, p, options, isOnlineOnly)
}

func (c *Conversation) sendMessageToServer(ctx context.Context, s *sdkpb.IMMessage, lc *model_struct.LocalConversation,
	delFiles []string, offlinePushInfo *sdkws.OfflinePushInfo, options map[string]bool, isOnlineOnly bool) (*sdkpb.IMMessage, error) {
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
	_ = copier.Copy(&wsMsgData, s)
	wsMsgData.AttachedInfo = utils.StructToJsonString(s.AttachedInfoElem)
	wsMsgData.Content = stringutil.StructToJsonBytes(s.Content)
	wsMsgData.CreateTime = s.CreateTime
	wsMsgData.SendTime = 0
	wsMsgData.Options = options
	if wsMsgData.ContentType == constant.AtText {
		atElem, ok := s.Content.(*sdkpb.IMMessage_AtTextElem)
		if !ok {
			return nil, msgContentTypeErr.Wrap()
		}
		wsMsgData.AtUserIDList = atElem.AtTextElem.AtUserList
	}
	wsMsgData.OfflinePushInfo = offlinePushInfo

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
		for _, f := range delFiles {
			err := os.Remove(f)
			if err != nil {
				log.ZError(ctx, "delete temp File is failed", err, "filePath", f)
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
			var tempMessageList []*sdkpb.IMMessage
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
			findResultItem.MessageCount = int32(len(findResultItem.MessageList))
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
		s := make([]*sdkpb.IMMessage, 0)
		result.MessageList = s
	}
	c.streamMsgReplace(ctx, req.ConversationID, result.MessageList)
	return &sdkpb.GetAdvancedHistoryMessageListResp{GetAdvancedHistoryMessageListCallback: result}, nil
}

func (c *Conversation) GetAdvancedHistoryMessageListReverse(ctx context.Context, req *sdkpb.GetAdvancedHistoryMessageListReverseReq) (*sdkpb.GetAdvancedHistoryMessageListReverseResp, error) {
	result, err := c.getAdvancedHistoryMessageList(ctx, req.GetAdvancedHistoryMessageListParams, true)
	if err != nil {
		return nil, err
	}
	if len(result.MessageList) == 0 {
		s := make([]*sdkpb.IMMessage, 0)
		result.MessageList = s
	}
	c.streamMsgReplace(ctx, req.ConversationID, result.MessageList)
	return &sdkpb.GetAdvancedHistoryMessageListReverseResp{GetAdvancedHistoryMessageListCallback: result}, nil
}

func (c *Conversation) RevokeMessage(ctx context.Context, req *sdkpb.RevokeMessageReq) (*sdkpb.RevokeMessageResp, error) {
	err := c.revokeOneMessage(ctx, req.ConversationID, req.ClientMsgID)
	if err != nil {
		return nil, err
	}
	return &sdkpb.RevokeMessageResp{}, nil
}

func (c *Conversation) TypingStatusUpdate(ctx context.Context, req *sdkpb.TypingStatusUpdateReq) (*sdkpb.TypingStatusUpdateResp, error) {
	err := c.typingStatusUpdate(ctx, req.RecvID, req.MsgTip)
	if err != nil {
		return nil, err
	}
	return &sdkpb.TypingStatusUpdateResp{}, nil
}

func (c *Conversation) MarkConversationMessageAsRead(ctx context.Context, req *sdkpb.MarkConversationMessageAsReadReq) (*sdkpb.MarkConversationMessageAsReadResp, error) {
	err := c.markConversationMessageAsRead(ctx, req.ConversationID)
	if err != nil {
		return nil, err
	}
	return &sdkpb.MarkConversationMessageAsReadResp{}, nil
}

func (c *Conversation) MarkAllConversationMessageAsRead(ctx context.Context, req *sdkpb.MarkAllConversationMessageAsReadReq) (*sdkpb.MarkAllConversationMessageAsReadResp, error) {
	conversationIDs, err := c.db.FindAllUnreadConversationConversationID(ctx)
	if err != nil {
		return nil, err
	}
	for _, conversationID := range conversationIDs {
		if err = c.markConversationMessageAsRead(ctx, conversationID); err != nil {
			return nil, err
		}
	}
	return &sdkpb.MarkAllConversationMessageAsReadResp{}, nil
}

func (c *Conversation) DeleteMessageFromLocalStorage(ctx context.Context, req *sdkpb.DeleteMessageFromLocalStorageReq) (*sdkpb.DeleteMessageFromLocalStorageResp, error) {
	err := c.deleteMessageFromLocal(ctx, req.ConversationID, req.ClientMsgID)
	if err != nil {
		return nil, err
	}
	return &sdkpb.DeleteMessageFromLocalStorageResp{}, nil
}

func (c *Conversation) DeleteMessage(ctx context.Context, req *sdkpb.DeleteMessageReq) (*sdkpb.DeleteMessageResp, error) {
	err := c.deleteMessage(ctx, req.ConversationID, req.ClientMsgID)
	if err != nil {
		return nil, err
	}
	return &sdkpb.DeleteMessageResp{}, nil
}

func (c *Conversation) DeleteAllMsgFromLocalAndServer(ctx context.Context, req *sdkpb.DeleteAllMsgFromLocalAndServerReq) (*sdkpb.DeleteAllMsgFromLocalAndServerResp, error) {
	err := c.deleteAllMsgFromLocalAndServer(ctx)
	if err != nil {
		return nil, err
	}
	return &sdkpb.DeleteAllMsgFromLocalAndServerResp{}, nil
}

func (c *Conversation) DeleteAllMessageFromLocalStorage(ctx context.Context, req *sdkpb.DeleteAllMessageFromLocalStorageReq) (*sdkpb.DeleteAllMessageFromLocalStorageResp, error) {
	err := c.deleteAllMsgFromLocal(ctx, true)
	if err != nil {
		return nil, err
	}
	return &sdkpb.DeleteAllMessageFromLocalStorageResp{}, nil
}

func (c *Conversation) ClearConversationAndDeleteAllMsg(ctx context.Context, req *sdkpb.ClearConversationAndDeleteAllMsgReq) (*sdkpb.ClearConversationAndDeleteAllMsgResp, error) {
	err := c.clearConversationFromLocalAndServer(ctx, req.ConversationID, c.db.ClearConversation)
	if err != nil {
		return nil, err
	}
	return &sdkpb.ClearConversationAndDeleteAllMsgResp{}, nil
}

func (c *Conversation) DeleteConversationAndDeleteAllMsg(ctx context.Context, req *sdkpb.DeleteConversationAndDeleteAllMsgReq) (*sdkpb.DeleteConversationAndDeleteAllMsgResp, error) {
	err := c.clearConversationFromLocalAndServer(ctx, req.ConversationID, c.db.ResetConversation)
	if err != nil {
		return nil, err
	}
	return &sdkpb.DeleteConversationAndDeleteAllMsgResp{}, nil
}

func (c *Conversation) InsertSingleMessageToLocalStorage(ctx context.Context, req *sdkpb.InsertSingleMessageToLocalStorageReq) (*sdkpb.InsertSingleMessageToLocalStorageResp, error) {
	if req.RecvID == "" || req.SendID == "" {
		return nil, sdkerrs.ErrArgs
	}
	var conversation model_struct.LocalConversation
	if req.SendID != c.loginUserID {
		faceUrl, name, err := c.getUserNameAndFaceURL(ctx, req.SendID)
		if err != nil {
			//log.Error(operationID, "GetUserNameAndFaceURL err", err.Error(), req.SendID)
		}
		req.Msg.SenderFaceURL = faceUrl
		req.Msg.SenderNickname = name
		conversation.FaceURL = faceUrl
		conversation.ShowName = name
		conversation.UserID = req.SendID
		conversation.ConversationID = c.getConversationIDBySessionType(req.SendID, constant.SingleChatType)

	} else {
		conversation.UserID = req.RecvID
		conversation.ConversationID = c.getConversationIDBySessionType(req.RecvID, constant.SingleChatType)
		_, err := c.db.GetConversation(ctx, conversation.ConversationID)
		if err != nil {
			faceUrl, name, err := c.getUserNameAndFaceURL(ctx, req.RecvID)
			if err != nil {
				return nil, err
			}
			conversation.FaceURL = faceUrl
			conversation.ShowName = name
		}
	}

	req.Msg.SendID = req.SendID
	req.Msg.RecvID = req.RecvID
	req.Msg.ClientMsgID = utils.GetMsgID(req.Msg.SendID)
	req.Msg.SendTime = utils.GetCurrentTimestampByMill()
	req.Msg.SessionType = constant.SingleChatType
	req.Msg.Status = constant.MsgStatusSendSuccess
	localMessage := MsgStructToLocalChatLog(req.Msg)
	conversation.LatestMsg = utils.StructToJsonString(req.Msg)
	conversation.ConversationType = constant.SingleChatType
	conversation.LatestMsgSendTime = req.Msg.SendTime
	err := c.insertMessageToLocalStorage(ctx, conversation.ConversationID, localMessage)
	if err != nil {
		return nil, err
	}
	_ = common.TriggerCmdUpdateConversation(ctx, common.UpdateConNode{ConID: conversation.ConversationID, Action: constant.AddConOrUpLatMsg, Args: conversation}, c.GetCh())
	return &sdkpb.InsertSingleMessageToLocalStorageResp{Msg: req.Msg}, nil
}

func (c *Conversation) InsertGroupMessageToLocalStorage(ctx context.Context, req *sdkpb.InsertGroupMessageToLocalStorageReq) (*sdkpb.InsertGroupMessageToLocalStorageResp, error) {
	if req.GroupID == "" || req.SendID == "" {
		return nil, sdkerrs.ErrArgs
	}
	var conversation model_struct.LocalConversation
	var err error
	_, conversation.ConversationType, err = c.getConversationTypeByGroupID(ctx, req.GroupID)
	if err != nil {
		return nil, err
	}

	conversation.ConversationID = c.getConversationIDBySessionType(req.GroupID, int(conversation.ConversationType))
	if req.SendID != c.loginUserID {
		faceUrl, name, err := c.getUserNameAndFaceURL(ctx, req.SendID)
		if err != nil {
			// log.Error("", "getUserNameAndFaceUrlByUid err", err.Error(), req.SendID)
		}
		req.Msg.SenderFaceURL = faceUrl
		req.Msg.SenderNickname = name
	}
	req.Msg.SendID = req.SendID
	req.Msg.RecvID = req.GroupID
	req.Msg.GroupID = req.GroupID
	req.Msg.ClientMsgID = utils.GetMsgID(req.Msg.SendID)
	req.Msg.SendTime = utils.GetCurrentTimestampByMill()
	req.Msg.SessionType = sdkpb.SessionType(conversation.ConversationType)
	req.Msg.Status = constant.MsgStatusSendSuccess
	localMessage := MsgStructToLocalChatLog(req.Msg)
	conversation.LatestMsg = utils.StructToJsonString(req.Msg)
	conversation.LatestMsgSendTime = req.Msg.SendTime
	conversation.FaceURL = req.Msg.SenderFaceURL
	conversation.ShowName = req.Msg.SenderNickname
	err = c.insertMessageToLocalStorage(ctx, conversation.ConversationID, localMessage)
	if err != nil {
		return nil, err
	}
	_ = common.TriggerCmdUpdateConversation(ctx, common.UpdateConNode{ConID: conversation.ConversationID, Action: constant.AddConOrUpLatMsg, Args: conversation}, c.GetCh())
	return &sdkpb.InsertGroupMessageToLocalStorageResp{Msg: req.Msg}, nil
}

func (c *Conversation) SearchLocalMessages(ctx context.Context, req *sdkpb.SearchLocalMessagesReq) (*sdkpb.SearchLocalMessagesResp, error) {
	req.SearchParam.KeywordList = utils.TrimStringList(req.SearchParam.KeywordList)
	searchResult, err := c.searchLocalMessages(ctx, req.SearchParam)
	if err != nil {
		return nil, err
	}
	return &sdkpb.SearchLocalMessagesResp{SearchResult: searchResult}, nil
}

func (c *Conversation) SetMessageLocalEx(ctx context.Context, req *sdkpb.SetMessageLocalExReq) (*sdkpb.SetMessageLocalExResp, error) {
	err := c.db.UpdateColumnsMessage(ctx, req.ConversationID, req.ClientMsgID, map[string]interface{}{"local_ex": req.LocalEx})
	if err != nil {
		return nil, err
	}
	conversation, err := c.db.GetConversation(ctx, req.ConversationID)
	if err != nil {
		return nil, err
	}
	var latestMsg sdk_struct.MsgStruct
	utils.JsonStringToStruct(conversation.LatestMsg, &latestMsg)
	if latestMsg.ClientMsgID == req.ClientMsgID {
		log.ZDebug(ctx, "latestMsg local ex changed", "seq", latestMsg.Seq, "clientMsgID", latestMsg.ClientMsgID)
		latestMsg.LocalEx = req.LocalEx
		latestMsgStr := utils.StructToJsonString(latestMsg)
		if err = c.db.UpdateColumnsConversation(ctx, req.ConversationID, map[string]interface{}{"latest_msg": latestMsgStr, "latest_msg_send_time": latestMsg.SendTime}); err != nil {
			return nil, err
		}
		c.doUpdateConversation(common.Cmd2Value{Value: common.UpdateConNode{Action: constant.ConChange, Args: []string{req.ConversationID}}})
	}
	return &sdkpb.SetMessageLocalExResp{Success: true}, nil
}

func (c *Conversation) initBasicInfo(ctx context.Context, message *sdkpb.IMMessage, msgFrom sdkpb.MsgFrom, contentType sdkpb.ContentType) error {
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
	message.SenderPlatformID = c.platform
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

func (c *Conversation) SearchConversation(ctx context.Context, req *sdkpb.SearchConversationReq) (*sdkpb.SearchConversationResp, error) {
	if req.SearchParam == "" {
		return nil, sdkerrs.ErrArgs.WrapMsg("search parameter cannot be empty")
	}

	conversations, err := c.db.SearchConversations(ctx, req.SearchParam)
	if err != nil {
		return nil, err
	}

	apiConversations := make([]*sdkpb.Conversation, len(conversations))
	for i, localConv := range conversations {
		apiConv := &sdkpb.Conversation{
			ConversationID:   localConv.ConversationID,
			ConversationType: localConv.ConversationType,
			UserID:           localConv.UserID,
			GroupID:          localConv.GroupID,
			RecvMsgOpt:       localConv.RecvMsgOpt,
			UnreadCount:      localConv.UnreadCount,
			DraftTextTime:    localConv.DraftTextTime,
			IsPinned:         localConv.IsPinned,
			IsPrivateChat:    localConv.IsPrivateChat,
			BurnDuration:     localConv.BurnDuration,
			GroupAtType:      localConv.GroupAtType,
			Ex:               localConv.Ex,
		}
		apiConversations[i] = apiConv
	}
	return &sdkpb.SearchConversationResp{
		ConversationList: apiConversations,
	}, nil
}
