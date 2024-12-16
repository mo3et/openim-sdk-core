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

	"github.com/openimsdk/openim-sdk-core/v3/proto/go/third"

	pbConversation "github.com/openimsdk/protocol/conversation"
	"github.com/openimsdk/protocol/wrapperspb"
	"github.com/openimsdk/tools/utils/datautil"

	"github.com/openimsdk/tools/errs"

	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk_callback"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/common"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/constant"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/content_type"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/utils"
	"github.com/openimsdk/tools/log"

	commonpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/conversation"
	grouppb "github.com/openimsdk/openim-sdk-core/v3/proto/go/group"
	msgpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/message"
	sharedpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"

	"github.com/openimsdk/protocol/sdkws"
)

var (
	msgContentTypeErr = errs.New("message content not match contentType")
)

func (c *Conversation) GetAllConversationList(ctx context.Context, req *sdkpb.GetAllConversationListReq) (*sdkpb.GetAllConversationListResp, error) {
	conversationList, err := c.db.GetAllConversationListDB(ctx)
	if err != nil {
		return nil, err
	}
	return &sdkpb.GetAllConversationListResp{ConversationList: BatchCtx(ctx, LocalConversationToIMConversation, conversationList)}, nil
}

func (c *Conversation) GetConversationListSplit(ctx context.Context, req *sdkpb.GetConversationListSplitReq) (*sdkpb.GetConversationListSplitResp, error) {
	conversations, err := c.db.GetConversationListSplitDB(ctx, int((req.Pagination.PageNumber-1)*req.Pagination.ShowNumber), int(req.Pagination.ShowNumber))
	if err != nil {
		return nil, err
	}

	return &sdkpb.GetConversationListSplitResp{
		ConversationList: BatchCtx(ctx, LocalConversationToIMConversation, conversations),
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
		return &sdkpb.GetOneConversationResp{Conversation: LocalConversationToIMConversation(ctx, lc)}, nil
	} else {
		var newConversation model_struct.LocalConversation
		newConversation.ConversationID = conversationID
		newConversation.ConversationType = int32(req.SessionType)
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
		//double check if the conversation exists
		lc, err := c.db.GetConversation(ctx, conversationID)
		if err == nil {
			return &sdkpb.GetOneConversationResp{Conversation: LocalConversationToIMConversation(ctx, lc)}, nil
		}
		return &sdkpb.GetOneConversationResp{Conversation: LocalConversationToIMConversation(ctx, &newConversation)}, nil
	}
}

func (c *Conversation) GetMultipleConversation(ctx context.Context, req *sdkpb.GetMultipleConversationReq) (*sdkpb.GetMultipleConversationResp, error) {
	conversations, err := c.db.GetMultipleConversationDB(ctx, req.ConversationIDList)
	if err != nil {
		return nil, err
	}
	return &sdkpb.GetMultipleConversationResp{ConversationList: BatchCtx(ctx, LocalConversationToIMConversation, conversations)}, nil
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
	apiReq := &pbConversation.SetConversationsReq{Conversation: &pbConversation.ConversationReq{
		ConversationID:   lc.ConversationID,
		ConversationType: lc.ConversationType,
		UserID:           lc.UserID,
		GroupID:          lc.GroupID,
		RecvMsgOpt:       wrapperspb.Int32Ptr((*int32)(req.RecvMsgOpt)),
		IsPinned:         wrapperspb.BoolPtr(req.IsPinned),
		IsPrivateChat:    wrapperspb.BoolPtr(req.IsPrivateChat),
		Ex:               wrapperspb.StringPtr(req.Ex),
		BurnDuration:     wrapperspb.Int32Ptr(req.BurnDuration),
		GroupAtType:      wrapperspb.Int32Ptr((*int32)(req.GroupAtType)),
	}}
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

func (c *Conversation) msgDataToLocalErrChatLog(src *model_struct.LocalChatLog) *model_struct.LocalErrChatLog {
	var lc model_struct.LocalErrChatLog
	//copier.Copy(&lc, src)
	return &lc

}

func (c *Conversation) updateMsgStatusAndTriggerConversation(ctx context.Context, clientMsgID, serverMsgID string, sendTime int64, status commonpb.MsgStatus, s *sharedpb.IMMessage,
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
	lc.LatestMsg = IMMessageToLocalChatLog(ctx, s)
	lc.LatestMsgSendTime = sendTime
	_ = common.TriggerCmdUpdateConversation(ctx, common.UpdateConNode{ConID: lc.ConversationID, Action: constant.AddConOrUpLatMsg, Args: *lc}, c.GetCh())
}

func (c *Conversation) fileName(ftype string, id string) string {
	return fmt.Sprintf("msg_%s_%s", ftype, id)
}

func (c *Conversation) checkID(ctx context.Context, s *sharedpb.IMMessage,
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
			gm, err := c.group.GetSpecifiedGroupMembersInfo(ctx, &grouppb.GetSpecifiedGroupMembersInfoReq{
				GroupID: groupID,
				UserIDs: []string{c.loginUserID},
			})
			if err == nil && gm.Members != nil {
				if gm.Members[0].Nickname != "" {
					s.SenderNickname = gm.Members[0].Nickname
				}
			}
		}
	} else {
		s.SessionType = constant.SingleChatType
		s.RecvID = recvID
		lc.ConversationID = utils.GetConversationIDByMsg(s)
		lc.UserID = recvID
		lc.ConversationType = constant.SingleChatType
		oldLc, err := c.db.GetConversation(ctx, lc.ConversationID)
		if err == nil && oldLc.IsPrivateChat {
			options[constant.IsNotPrivate] = false
			var attachedInfo sharedpb.AttachedInfoElem
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

func getMsgUrl(msg *sharedpb.IMMessage) string {
	switch msg.ContentType {
	case commonpb.ContentType_File:
		if c, ok := msg.Content.(*sharedpb.IMMessage_FileElem); ok {
			return c.FileElem.SourceURL
		}
	case commonpb.ContentType_Sound:
		if c, ok := msg.Content.(*sharedpb.IMMessage_SoundElem); ok {
			return c.SoundElem.SourceURL
		}
	case commonpb.ContentType_Video:
		if c, ok := msg.Content.(*sharedpb.IMMessage_VideoElem); ok {
			return c.VideoElem.VideoURL
		}
	case commonpb.ContentType_Picture:
		if c, ok := msg.Content.(*sharedpb.IMMessage_PictureElem); ok {
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

func (c *Conversation) SendMessage(ctx context.Context, req *msgpb.SendMessageReq, callback open_im_sdk_callback.SendMsgCallBack) (*msgpb.SendMessageResp, error) {
	// Message is created by URL
	if getMsgUrl(req.Message) != "" {
		msg, err := c.sendMessageNotOss(ctx, req.Message, req.RecvID, req.GroupID, req.Message.OfflinePush, req.IsOnlineOnly)
		if err != nil {
			return nil, err
		}
		return &msgpb.SendMessageResp{Message: msg}, nil
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
			localMessage := IMMessageToLocalChatLog(ctx, req.Message)
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
			if commonpb.MsgStatus(oldMessage.Status) != commonpb.MsgStatus_SendFailed {
				return nil, sdkerrs.ErrMsgRepeat
			} else {
				req.Message.Status = commonpb.MsgStatus_Sending
				err = c.db.InsertSendingMessage(ctx, &model_struct.LocalSendingMessages{
					ConversationID: lc.ConversationID,
					ClientMsgID:    req.Message.ClientMsgID,
				})
				if err != nil {
					return nil, err
				}
			}
		}
		lc.LatestMsg = IMMessageToLocalChatLog(ctx, req.Message)
		log.ZDebug(ctx, "send message come here", "conversion", *lc)
		_ = common.TriggerCmdUpdateConversation(ctx, common.UpdateConNode{ConID: lc.ConversationID, Action: constant.AddConOrUpLatMsg, Args: *lc}, c.GetCh())
	}

	var delFile []string
	//media file handle
	switch req.Message.ContentType {
	case commonpb.ContentType_Picture:
		if req.Message.Status == commonpb.MsgStatus_SendSuccess {
			break
		}
		msgElem, ok := req.Message.Content.(*sharedpb.IMMessage_PictureElem)
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

		res, err := c.file.UploadFile(ctx, &third.UploadFileReq{
			MimeType:     msgElem.PictureElem.SourcePicture.Type,
			Filepath:     sourcePath,
			Name:         c.fileName("picture", req.Message.ClientMsgID) + filepathExt(msgElem.PictureElem.SourcePicture.Uuid, sourcePath),
			FileCategory: "msg-picture",
		}, NewUploadFileCallback(ctx, callback.OnSendMsgProgress, req.Message, lc.ConversationID, c.db))
		if err != nil {
			c.updateMsgStatusAndTriggerConversation(ctx, req.Message.ClientMsgID, "", req.Message.CreateTime, commonpb.MsgStatus_SendFailed, req.Message, lc, req.IsOnlineOnly)
			return nil, err
		}
		msgElem.PictureElem.SourcePicture.Url = res.Url
		msgElem.PictureElem.BigPicture = msgElem.PictureElem.SourcePicture
		u, err := url.Parse(res.Url)
		if err == nil {
			snapshot := u.Query()
			snapshot.Set("type", "image")
			snapshot.Set("width", "640")
			snapshot.Set("height", "640")
			u.RawQuery = snapshot.Encode()
			msgElem.PictureElem.SnapshotPicture = &sharedpb.PictureBaseInfo{
				Width:  640,
				Height: 640,
				Url:    u.String(),
			}
		} else {
			log.ZError(ctx, "parse url failed", err, "url", res.Url, "err", err)
			msgElem.PictureElem.SnapshotPicture = msgElem.PictureElem.SourcePicture
		}

	case commonpb.ContentType_Sound:
		if req.Message.Status == commonpb.MsgStatus_SendSuccess {
			break
		}
		msgElem, ok := req.Message.Content.(*sharedpb.IMMessage_SoundElem)
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

		res, err := c.file.UploadFile(ctx, &third.UploadFileReq{
			MimeType:     msgElem.SoundElem.SoundType,
			Filepath:     sourcePath,
			Name:         c.fileName("voice", req.Message.ClientMsgID) + filepathExt(msgElem.SoundElem.Uuid, sourcePath),
			FileCategory: "msg-voice",
		}, NewUploadFileCallback(ctx, callback.OnSendMsgProgress, req.Message, lc.ConversationID, c.db))
		if err != nil {
			c.updateMsgStatusAndTriggerConversation(ctx, req.Message.ClientMsgID, "", req.Message.CreateTime, commonpb.MsgStatus_SendFailed, req.Message, lc, req.IsOnlineOnly)
			return nil, err
		}
		msgElem.SoundElem.SourceURL = res.Url
	case commonpb.ContentType_Video:
		if req.Message.Status == commonpb.MsgStatus_SendSuccess {
			break
		}
		msgElem, ok := req.Message.Content.(*sharedpb.IMMessage_VideoElem)
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
			snapRes, err := c.file.UploadFile(ctx, &third.UploadFileReq{
				MimeType:     msgElem.VideoElem.SnapshotType,
				Filepath:     snapPath,
				Name:         c.fileName("videoSnapshot", req.Message.ClientMsgID) + filepathExt(msgElem.VideoElem.SnapshotUUID, snapPath),
				FileCategory: "msg-video-snapshot",
			}, nil)
			if err != nil {
				log.ZWarn(ctx, "upload video snapshot failed", err)
				return
			}
			msgElem.VideoElem.SnapshotURL = snapRes.Url
		}()

		go func() {
			defer wg.Done()
			res, err := c.file.UploadFile(ctx, &third.UploadFileReq{
				MimeType:     content_type.GetType(msgElem.VideoElem.VideoType, filepath.Ext(msgElem.VideoElem.VideoPath)),
				Filepath:     videoPath,
				Name:         c.fileName("video", req.Message.ClientMsgID) + filepathExt(msgElem.VideoElem.VideoUUID, videoPath),
				FileCategory: "msg-video",
			}, NewUploadFileCallback(ctx, callback.OnSendMsgProgress, req.Message, lc.ConversationID, c.db))
			if err != nil {
				c.updateMsgStatusAndTriggerConversation(ctx, req.Message.ClientMsgID, "", req.Message.CreateTime, commonpb.MsgStatus_SendFailed, req.Message, lc, req.IsOnlineOnly)
				putErrs = err
				return
			}
			if res != nil {
				msgElem.VideoElem.VideoURL = res.Url
			}
		}()
		wg.Wait()
		if err := putErrs; err != nil {
			return nil, err
		}
	case commonpb.ContentType_File:
		if req.Message.Status == commonpb.MsgStatus_SendSuccess {
			break
		}
		msgElem, ok := req.Message.Content.(*sharedpb.IMMessage_FileElem)
		if !ok {
			return nil, msgContentTypeErr.Wrap()
		}
		name := msgElem.FileElem.FileName

		if name == "" {
			name = msgElem.FileElem.FilePath
		}
		if name == "" {
			name = fmt.Sprintf("msg_file_%s.unknown", req.Message.ClientMsgID)
		}
		var sourcePath string
		if utils.FileExist(msgElem.FileElem.FilePath) {
			sourcePath = msgElem.FileElem.FilePath
			delFile = append(delFile, utils.FileTmpPath(msgElem.FileElem.FilePath, c.DataDir))
		} else {
			sourcePath = utils.FileTmpPath(msgElem.FileElem.FilePath, c.DataDir)
			delFile = append(delFile, sourcePath)
		}

		res, err := c.file.UploadFile(ctx, &third.UploadFileReq{
			MimeType: content_type.GetType(msgElem.FileElem.FileType, filepath.Ext(msgElem.FileElem.FilePath),
				filepath.Ext(msgElem.FileElem.FileName)),
			Filepath:     sourcePath,
			Name:         c.fileName("file", req.Message.ClientMsgID) + "/" + filepath.Base(name),
			FileCategory: "msg-file",
		}, NewUploadFileCallback(ctx, callback.OnSendMsgProgress, req.Message, lc.ConversationID, c.db))
		if err != nil {
			c.updateMsgStatusAndTriggerConversation(ctx, req.Message.ClientMsgID, "", req.Message.CreateTime, constant.MsgStatusSendFailed, req.Message, lc, req.IsOnlineOnly)
			return nil, err
		}
		msgElem.FileElem.SourceURL = res.Url
	case commonpb.ContentType_Text:
	case commonpb.ContentType_AtText:
	case commonpb.ContentType_Location:
	case commonpb.ContentType_Custom:
	case commonpb.ContentType_Merge:
	case commonpb.ContentType_Quote:
	case commonpb.ContentType_Card:
	case commonpb.ContentType_Face:
	case commonpb.ContentType_AdvancedText:
	case commonpb.ContentType_Stream:
	default:
		return nil, sdkerrs.ErrMsgContentTypeNotSupport
	}
	if datautil.Contain(req.Message.ContentType, commonpb.ContentType_Picture, commonpb.ContentType_Sound, commonpb.ContentType_Video, commonpb.ContentType_File) {
		if !req.IsOnlineOnly {
			localMessage := IMMessageToLocalChatLog(ctx, req.Message)
			log.ZDebug(ctx, "update message is ", "localMessage", localMessage)
			err = c.db.UpdateMessage(ctx, lc.ConversationID, localMessage)
			if err != nil {
				return nil, err
			}
		}
	}

	msg, err := c.sendMessageToServer(ctx, req.Message, lc, delFile, req.Message.OfflinePush, options, req.IsOnlineOnly)
	if err != nil {
		return nil, err
	}
	return &msgpb.SendMessageResp{Message: msg}, nil
}

func (c *Conversation) sendMessageNotOss(ctx context.Context, s *sharedpb.IMMessage, recvID, groupID string,
	p *commonpb.OfflinePushInfo, isOnlineOnly bool) (*sharedpb.IMMessage, error) {
	options := make(map[string]bool, 2)
	lc, err := c.checkID(ctx, s, recvID, groupID, options)
	if err != nil {
		return nil, err
	}
	if !isOnlineOnly {
		oldMessage, err := c.db.GetMessage(ctx, lc.ConversationID, s.ClientMsgID)
		if err != nil {
			localMessage := IMMessageToLocalChatLog(ctx, s)
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
				return nil, sdkerrs.ErrMsgRepeat
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
	lc.LatestMsg = IMMessageToLocalChatLog(ctx, s)
	var delFile []string
	if utils.IsContainInt(int(s.ContentType), []int{constant.Picture, constant.Sound, constant.Video, constant.File}) {
		if isOnlineOnly {
			localMessage := IMMessageToLocalChatLog(ctx, s)
			err = c.db.UpdateMessage(ctx, lc.ConversationID, localMessage)
			if err != nil {
				return nil, err
			}
		}
	}
	return c.sendMessageToServer(ctx, s, lc, delFile, p, options, isOnlineOnly)
}

func (c *Conversation) sendMessageToServer(ctx context.Context, s *sharedpb.IMMessage, lc *model_struct.LocalConversation,
	delFiles []string, offlinePushInfo *commonpb.OfflinePushInfo, options map[string]bool, isOnlineOnly bool) (*sharedpb.IMMessage, error) {
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
	wsMsgData := IMMessageToMsgData(s)
	wsMsgData.SendTime = 0
	wsMsgData.Options = options
	if wsMsgData.ContentType == constant.AtText {
		atElem, ok := s.Content.(*sharedpb.IMMessage_AtTextElem)
		if !ok {
			return nil, msgContentTypeErr.Wrap()
		}
		wsMsgData.AtUserIDList = atElem.AtTextElem.AtUserList
	}
	wsMsgData.OfflinePushInfo = sdkOfflinePushInfoToServerOfflinePushInfo(offlinePushInfo)

	var sendMsgResp sdkws.UserSendMsgResp

	err := c.LongConnMgr.SendReqWaitResp(ctx, wsMsgData, constant.SendMsg, &sendMsgResp)
	if err != nil {
		//if send message network timeout need to double-check message has received by db.
		if sdkerrs.ErrNetworkTimeout.Is(err) && !isOnlineOnly {
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
		conversation *sharedpb.IMConversation
		msgIDList    []string
	}
	var s []*tempConversationAndMessageList
	for _, conversationsArgs := range req.ConversationsArgs {
		localConversation, err := c.db.GetConversation(ctx, conversationsArgs.ConversationID)
		if err != nil {
			log.ZError(ctx, "GetConversation err", err, "conversationsArgs", conversationsArgs)
		} else {
			t := new(tempConversationAndMessageList)
			t.conversation = LocalConversationToIMConversation(ctx, localConversation)
			t.msgIDList = conversationsArgs.ClientMsgIDList
			s = append(s, t)
		}
	}
	for _, v := range s {
		messages, err := c.db.GetMessagesByClientMsgIDs(ctx, v.conversation.ConversationID, v.msgIDList)
		if err == nil {
			var tempMessageList []*sharedpb.IMMessage
			for _, message := range messages {
				temp := LocalChatLogToIMMessage(ctx, message)
				tempMessageList = append(tempMessageList, temp)
			}
			findResultItem := sdkpb.SearchByConversationResult{}
			findResultItem.ConversationID = v.conversation.ConversationID
			findResultItem.FaceURL = v.conversation.FaceURL
			findResultItem.ShowName = v.conversation.ShowName
			findResultItem.ConversationType = int32(v.conversation.ConversationType)
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

func (c *Conversation) GetHistoryMessageList(ctx context.Context, req *msgpb.GetHistoryMessageListReq) (*msgpb.GetHistoryMessageListResp, error) {
	result, err := c.getHistoryMessageList(ctx, req)
	if err != nil {
		return nil, err
	}
	c.streamMsgReplace(ctx, req.ConversationID, result.MessageList)
	return result, nil
}

func (c *Conversation) RevokeMessage(ctx context.Context, req *msgpb.RevokeMessageReq) (*msgpb.RevokeMessageResp, error) {
	err := c.revokeOneMessage(ctx, req.ConversationID, req.ClientMsgID)
	if err != nil {
		return nil, err
	}
	return &msgpb.RevokeMessageResp{}, nil
}

func (c *Conversation) TypingStatusUpdate(ctx context.Context, req *msgpb.TypingStatusUpdateReq) (*msgpb.TypingStatusUpdateResp, error) {
	err := c.typingStatusUpdate(ctx, req.RecvID, req.MsgTip)
	if err != nil {
		return nil, err
	}
	return &msgpb.TypingStatusUpdateResp{}, nil
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

func (c *Conversation) DeleteMessageFromLocal(ctx context.Context, req *sdkpb.DeleteMessageFromLocalReq) (*sdkpb.DeleteMessageFromLocalResp, error) {
	err := c.deleteMessageFromLocal(ctx, req.ConversationID, req.ClientMsgID)
	if err != nil {
		return nil, err
	}
	return &sdkpb.DeleteMessageFromLocalResp{}, nil
}

func (c *Conversation) DeleteMessage(ctx context.Context, req *msgpb.DeleteMessageReq) (*msgpb.DeleteMessageResp, error) {
	err := c.deleteMessage(ctx, req.ConversationID, req.ClientMsgID)
	if err != nil {
		return nil, err
	}
	return &msgpb.DeleteMessageResp{}, nil
}

func (c *Conversation) DeleteAllMsgFromLocalAndServer(ctx context.Context, req *msgpb.DeleteAllMsgFromLocalAndServerReq) (*msgpb.DeleteAllMsgFromLocalAndServerResp, error) {
	err := c.deleteAllMsgFromLocalAndServer(ctx)
	if err != nil {
		return nil, err
	}
	return &msgpb.DeleteAllMsgFromLocalAndServerResp{}, nil
}

func (c *Conversation) DeleteAllMessageFromLocal(ctx context.Context, req *msgpb.DeleteAllMessageFromLocalReq) (*msgpb.DeleteAllMessageFromLocalResp, error) {
	err := c.deleteAllMsgFromLocal(ctx, true)
	if err != nil {
		return nil, err
	}
	return &msgpb.DeleteAllMessageFromLocalResp{}, nil
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

func (c *Conversation) InsertSingleMessageToLocal(ctx context.Context, req *msgpb.InsertSingleMessageToLocalReq) (*msgpb.InsertSingleMessageToLocalResp, error) {
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
	localMessage := IMMessageToLocalChatLog(ctx, req.Msg)
	conversation.LatestMsg = localMessage
	conversation.ConversationType = constant.SingleChatType
	conversation.LatestMsgSendTime = req.Msg.SendTime
	err := c.db.InsertMessage(ctx, conversation.ConversationID, localMessage)

	if err != nil {
		return nil, err
	}
	_ = common.TriggerCmdUpdateConversation(ctx, common.UpdateConNode{ConID: conversation.ConversationID, Action: constant.AddConOrUpLatMsg, Args: conversation}, c.GetCh())
	return &msgpb.InsertSingleMessageToLocalResp{Msg: req.Msg}, nil
}

func (c *Conversation) InsertGroupMessageToLocal(ctx context.Context, req *msgpb.InsertGroupMessageToLocalReq) (*msgpb.InsertGroupMessageToLocalResp, error) {
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
	req.Msg.SessionType = commonpb.SessionType(conversation.ConversationType)
	req.Msg.Status = constant.MsgStatusSendSuccess
	localMessage := IMMessageToLocalChatLog(ctx, req.Msg)
	conversation.LatestMsg = localMessage
	conversation.LatestMsgSendTime = req.Msg.SendTime
	conversation.FaceURL = req.Msg.SenderFaceURL
	conversation.ShowName = req.Msg.SenderNickname
	err = c.db.InsertMessage(ctx, conversation.ConversationID, localMessage)
	if err != nil {
		return nil, err
	}
	_ = common.TriggerCmdUpdateConversation(ctx, common.UpdateConNode{ConID: conversation.ConversationID, Action: constant.AddConOrUpLatMsg, Args: conversation}, c.GetCh())
	return &msgpb.InsertGroupMessageToLocalResp{Msg: req.Msg}, nil
}

func (c *Conversation) SearchLocalMessages(ctx context.Context, req *sdkpb.SearchLocalMessagesReq) (*sdkpb.SearchLocalMessagesResp, error) {
	req.Keywords = utils.TrimStringList(req.Keywords)
	return c.searchLocalMessages(ctx, req)
}

func (c *Conversation) SetMessageLocalEx(ctx context.Context, req *sdkpb.SetMessageLocalExReq) (*sdkpb.SetMessageLocalExResp, error) {
	err := c.db.UpdateColumnsMessage(ctx, req.ConversationID, req.ClientMsgID, map[string]any{"local_ex": req.LocalEx})
	if err != nil {
		return nil, err
	}
	conversation, err := c.db.GetConversation(ctx, req.ConversationID)
	if err != nil {
		return nil, err
	}
	if conversation.LatestMsg != nil && conversation.LatestMsg.ClientMsgID == req.ClientMsgID {
		log.ZDebug(ctx, "latestMsg local ex changed", "seq", conversation.LatestMsg.Seq, "clientMsgID", conversation.LatestMsg.ClientMsgID)
		conversation.LatestMsg.LocalEx = req.LocalEx
		if err = c.db.UpdateColumnsConversation(ctx, req.ConversationID, map[string]any{"latest_msg": conversation.LatestMsg, "latest_msg_send_time": conversation.LatestMsg.SendTime}); err != nil {
			return nil, err
		}
		c.doUpdateConversation(common.Cmd2Value{Value: common.UpdateConNode{Action: constant.ConChange, Args: []string{req.ConversationID}}})
	}
	return &sdkpb.SetMessageLocalExResp{Success: true}, nil
}

func (c *Conversation) initBasicInfo(ctx context.Context, message *sharedpb.IMMessage, msgFrom commonpb.MsgFrom, contentType commonpb.ContentType) error {
	message.CreateTime = utils.GetCurrentTimestampByMill()
	message.SendTime = message.CreateTime
	message.IsRead = false
	message.Status = constant.MsgStatusSending
	message.SendID = c.loginUserID
	userInfo, err := c.user.GetUserInfoWithCache(ctx, c.loginUserID)
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
	return &sdkpb.SearchConversationResp{
		ConversationList: BatchCtx(ctx, LocalConversationToIMConversation, conversations),
	}, nil
}

func (c *Conversation) SubscribeUsersOnlineStatus(ctx context.Context, req *sdkpb.SubscribeUsersOnlineStatusReq) (*sdkpb.SubscribeUsersOnlineStatusResp, error) {
	status, err := c.SubscribeUsersStatus(ctx, req.UserIDs)
	if err != nil {
		return nil, err
	}
	return &sdkpb.SubscribeUsersOnlineStatusResp{Status: status}, nil
}

func (c *Conversation) UnsubscribeUsersOnlineStatus(ctx context.Context, req *sdkpb.UnsubscribeUsersOnlineStatusReq) (*sdkpb.UnsubscribeUsersOnlineStatusResp, error) {
	if err := c.UnsubscribeUsersStatus(ctx, req.UserIDs); err != nil {
		return nil, err
	}
	return &sdkpb.UnsubscribeUsersOnlineStatusResp{}, nil
}

func (c *Conversation) ChangeInputStates(ctx context.Context, req *sdkpb.ChangeInputStatesReq) (*sdkpb.ChangeInputStatesResp, error) {
	if err := c.typing.ChangeInputStates(ctx, req.ConversationID, req.Focus); err != nil {
		return nil, err
	}
	return &sdkpb.ChangeInputStatesResp{}, nil
}

func (c *Conversation) GetInputStates(ctx context.Context, req *sdkpb.GetInputStatesReq) (*sdkpb.GetInputStatesResp, error) {
	return &sdkpb.GetInputStatesResp{
		Platforms: datautil.Batch(func(platformID int32) commonpb.Platform {
			return commonpb.Platform(platformID)
		}, c.typing.GetInputStates(req.ConversationID, req.UserID)),
	}, nil
}
