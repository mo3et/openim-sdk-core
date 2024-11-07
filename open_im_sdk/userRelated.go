// Copyright © 2023 OpenIM SDK. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package open_im_sdk

import (
	"context"
	"encoding/json"
	"fmt"
	"runtime/debug"
	"strings"
	"sync"
	"time"
	"unsafe"

	"github.com/openimsdk/openim-sdk-core/v3/internal/flagconst"
	"github.com/openimsdk/openim-sdk-core/v3/internal/relation"
	"github.com/openimsdk/openim-sdk-core/v3/internal/third/file"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db"

	conv "github.com/openimsdk/openim-sdk-core/v3/internal/conversation_msg"
	"github.com/openimsdk/openim-sdk-core/v3/internal/group"
	"github.com/openimsdk/openim-sdk-core/v3/internal/interaction"
	"github.com/openimsdk/openim-sdk-core/v3/internal/third"
	"github.com/openimsdk/openim-sdk-core/v3/internal/user"
	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk_callback"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/ccontext"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/common"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/constant"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/db_interface"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	"github.com/openimsdk/openim-sdk-core/v3/sdk_struct"
	"github.com/openimsdk/protocol/push"
	"github.com/openimsdk/protocol/sdkws"
	"github.com/openimsdk/tools/errs"
	"github.com/openimsdk/tools/log"
	"github.com/openimsdk/tools/utils/jsonutil"
)

const (
	LogoutStatus = iota + 1
	Logging
	Logged
)

const (
	LogoutTips = "js sdk socket close"
)

var (
	// UserForSDK Client-independent user class
	UserForSDK *LoginMgr
	once       sync.Once
)

func init() {
	UserForSDK = NewLoginMgr()
	ctx := ccontext.WithInfo(context.Background(), UserForSDK.info)
	UserForSDK.ctx, UserForSDK.cancel = context.WithCancel(ctx)
	var convChanLen int
	convChanLen = 1000
	UserForSDK.conversationCh = make(chan common.Cmd2Value, convChanLen)
	UserForSDK.pushMsgAndMaxSeqCh = make(chan common.Cmd2Value, 1000)
	UserForSDK.loginMgrCh = make(chan common.Cmd2Value, 1)
	UserForSDK.longConnMgr = interaction.NewLongConnMgr(UserForSDK.ctx,
		UserForSDK.userOnlineStatusChange, UserForSDK.pushMsgAndMaxSeqCh, UserForSDK.loginMgrCh)
	UserForSDK.ctx = ccontext.WithApiErrCode(UserForSDK.ctx, &apiErrCallback{loginMgrCh: UserForSDK.loginMgrCh,
		listener: UserForSDK.connListener})
	UserForSDK.setLoginStatus(LogoutStatus)
	UserForSDK.user = user.NewUser(UserForSDK.conversationCh)
	UserForSDK.file = file.NewFile()
	UserForSDK.relation = relation.NewRelation(UserForSDK.conversationCh, UserForSDK.user)

	UserForSDK.group = group.NewGroup(UserForSDK.conversationCh)
	UserForSDK.third = third.NewThird(UserForSDK.file)

	UserForSDK.msgSyncer = interaction.NewMsgSyncer(ccontext.WithOperationID(ctx, "test"), UserForSDK.conversationCh, UserForSDK.pushMsgAndMaxSeqCh, UserForSDK.longConnMgr)
	UserForSDK.conversation = conv.NewConversation(UserForSDK.longConnMgr, UserForSDK.conversationCh,
		UserForSDK.relation, UserForSDK.group, UserForSDK.user, UserForSDK.file)
}

// CheckResourceLoad checks the SDK is resource load status.
func CheckResourceLoad(uSDK *LoginMgr, funcName string) error {
	if uSDK == nil {
		return errs.New("SDK not initialized,userForSDK is nil", "funcName", funcName).Wrap()
	}
	if funcName == "" {
		return nil
	}
	parts := strings.Split(funcName, ".")
	if parts[len(parts)-1] == "Login-fm" {
		return nil
	}
	if uSDK.getLoginStatus(context.Background()) != Logged {
		return errs.New("SDK not logged in", "funcName", funcName).Wrap()
	}
	return nil
}

type LoginMgr struct {
	relation     *relation.Relation
	group        *group.Group
	conversation *conv.Conversation
	user         *user.User
	file         *file.File

	db          db_interface.DataBase
	longConnMgr *interaction.LongConnMgr
	msgSyncer   *interaction.MsgSyncer
	third       *third.Third

	w           sync.Mutex
	loginStatus int

	connListener         open_im_sdk_callback.OnConnListener
	groupListener        open_im_sdk_callback.OnGroupListener
	friendshipListener   open_im_sdk_callback.OnFriendshipListener
	conversationListener open_im_sdk_callback.OnConversationListener
	advancedMsgListener  open_im_sdk_callback.OnAdvancedMsgListener
	batchMsgListener     open_im_sdk_callback.OnBatchMsgListener
	userListener         open_im_sdk_callback.OnUserListener
	signalingListener    open_im_sdk_callback.OnSignalingListener
	businessListener     open_im_sdk_callback.OnCustomBusinessListener
	msgKvListener        open_im_sdk_callback.OnMessageKvInfoListener

	conversationCh     chan common.Cmd2Value
	cmdWsCh            chan common.Cmd2Value
	pushMsgAndMaxSeqCh chan common.Cmd2Value
	loginMgrCh         chan common.Cmd2Value

	ctx    context.Context
	cancel context.CancelFunc
	info   *ccontext.GlobalConfig
}

func (u *LoginMgr) Info() *ccontext.GlobalConfig {
	return u.info
}

func (u *LoginMgr) ConnListener() open_im_sdk_callback.OnConnListener {
	return u.connListener
}

func (u *LoginMgr) GroupListener() open_im_sdk_callback.OnGroupListener {
	return u.groupListener
}

func (u *LoginMgr) FriendshipListener() open_im_sdk_callback.OnFriendshipListener {
	return u.friendshipListener
}

func (u *LoginMgr) ConversationListener() open_im_sdk_callback.OnConversationListener {
	return u.conversationListener
}

func (u *LoginMgr) AdvancedMsgListener() open_im_sdk_callback.OnAdvancedMsgListener {
	return u.advancedMsgListener
}

func (u *LoginMgr) BatchMsgListener() open_im_sdk_callback.OnBatchMsgListener {
	return u.batchMsgListener
}

func (u *LoginMgr) UserListener() open_im_sdk_callback.OnUserListener {
	return u.userListener
}

func (u *LoginMgr) SignalingListener() open_im_sdk_callback.OnSignalingListener {
	return u.signalingListener
}

func (u *LoginMgr) BusinessListener() open_im_sdk_callback.OnCustomBusinessListener {
	return u.businessListener
}

func (u *LoginMgr) MsgKvListener() open_im_sdk_callback.OnMessageKvInfoListener {
	return u.msgKvListener
}

func (u *LoginMgr) Exit() {
	u.cancel()
}

func (u *LoginMgr) Third() *third.Third {
	return u.third
}

func (u *LoginMgr) Conversation() *conv.Conversation {
	return u.conversation
}

func (u *LoginMgr) User() *user.User {
	return u.user
}

func (u *LoginMgr) File() *file.File {
	return u.file
}

func (u *LoginMgr) Group() *group.Group {
	return u.group
}

func (u *LoginMgr) Relation() *relation.Relation {
	return u.relation
}

func (u *LoginMgr) SetConnListener(connListener open_im_sdk_callback.OnConnListener) {
	u.connListener = connListener
}

func (u *LoginMgr) SetConversationListener(conversationListener open_im_sdk_callback.OnConversationListener) {
	u.conversationListener = conversationListener
}

func (u *LoginMgr) SetAdvancedMsgListener(advancedMsgListener open_im_sdk_callback.OnAdvancedMsgListener) {
	u.advancedMsgListener = advancedMsgListener
}

func (u *LoginMgr) SetMessageKvInfoListener(messageKvInfoListener open_im_sdk_callback.OnMessageKvInfoListener) {
	u.msgKvListener = messageKvInfoListener
}

func (u *LoginMgr) SetBatchMsgListener(batchMsgListener open_im_sdk_callback.OnBatchMsgListener) {
	u.batchMsgListener = batchMsgListener
}

func (u *LoginMgr) SetFriendshipListener(friendshipListener open_im_sdk_callback.OnFriendshipListener) {
	u.friendshipListener = friendshipListener
}

func (u *LoginMgr) SetGroupListener(groupListener open_im_sdk_callback.OnGroupListener) {
	u.groupListener = groupListener
}

func (u *LoginMgr) SetUserListener(userListener open_im_sdk_callback.OnUserListener) {
	u.userListener = userListener
}

func (u *LoginMgr) SetCustomBusinessListener(listener open_im_sdk_callback.OnCustomBusinessListener) {
	u.businessListener = listener
}
func (u *LoginMgr) GetLoginUserID() string {
	return u.info.UserID
}
func (u *LoginMgr) logoutListener(ctx context.Context) {
	defer func() {
		if r := recover(); r != nil {
			err := fmt.Sprintf("panic: %+v\n%s", r, debug.Stack())

			log.ZWarn(ctx, "logoutListener panic", nil, "panic info", err)
		}
	}()

	for {
		select {
		case <-u.loginMgrCh:
			log.ZDebug(ctx, "logoutListener exit")
			err := u.logout(ctx, true)
			if err != nil {
				log.ZError(ctx, "logout error", err)
			}
		case <-ctx.Done():
			log.ZInfo(ctx, "logoutListener done sdk logout.....")
			return
		}
	}

}

func NewLoginMgr() *LoginMgr {
	once.Do(func() {
		UserForSDK = &LoginMgr{
			info: &ccontext.GlobalConfig{},
		}
	})
	return UserForSDK
}
func (u *LoginMgr) getLoginStatus(_ context.Context) int {
	u.w.Lock()
	defer u.w.Unlock()
	return u.loginStatus
}
func (u *LoginMgr) setLoginStatus(status int) {
	u.w.Lock()
	defer u.w.Unlock()
	u.loginStatus = status
}
func (u *LoginMgr) checkSendingMessage(ctx context.Context) {
	sendingMessages, err := u.db.GetAllSendingMessages(ctx)
	if err != nil {
		log.ZError(ctx, "GetAllSendingMessages failed", err)
	}
	for _, message := range sendingMessages {
		if err := u.handlerSendingMsg(ctx, message); err != nil {
			log.ZError(ctx, "handlerSendingMsg failed", err, "message", message)
		}
		if err := u.db.DeleteSendingMessage(ctx, message.ConversationID, message.ClientMsgID); err != nil {
			log.ZError(ctx, "DeleteSendingMessage failed", err, "conversationID", message.ConversationID, "clientMsgID", message.ClientMsgID)
		}
	}
}

func (u *LoginMgr) handlerSendingMsg(ctx context.Context, sendingMsg *model_struct.LocalSendingMessages) error {
	tableMessage, err := u.db.GetMessage(ctx, sendingMsg.ConversationID, sendingMsg.ClientMsgID)
	if err != nil {
		return err
	}
	if tableMessage.Status != constant.MsgStatusSending {
		return nil
	}
	err = u.db.UpdateMessage(ctx, sendingMsg.ConversationID, &model_struct.LocalChatLog{ClientMsgID: sendingMsg.ClientMsgID, Status: constant.MsgStatusSendFailed})
	if err != nil {
		return err
	}
	conversation, err := u.db.GetConversation(ctx, sendingMsg.ConversationID)
	if err != nil {
		return err
	}
	latestMsg := &sdk_struct.MsgStruct{}
	if err := json.Unmarshal([]byte(conversation.LatestMsg), &latestMsg); err != nil {
		return err
	}
	if latestMsg.ClientMsgID == sendingMsg.ClientMsgID {
		latestMsg.Status = constant.MsgStatusSendFailed
		conversation.LatestMsg = jsonutil.StructToJsonString(latestMsg)
		return u.db.UpdateConversation(ctx, conversation)
	}
	return nil
}

func (u *LoginMgr) initialize(ctx context.Context, userID string) error {
	var err error
	u.db, err = db.NewDataBase(ctx, userID, u.info.DataDir, int(u.info.LogLevel))
	if err != nil {
		return sdkerrs.ErrSdkInternal.WrapMsg("init database " + err.Error())
	}
	u.checkSendingMessage(ctx)
	u.user.SetLoginUserID(userID)
	u.user.SetDataBase(u.db)
	u.file.SetLoginUserID(userID)
	u.file.SetDataBase(u.db)
	u.relation.SetDataBase(u.db)
	u.relation.SetLoginUserID(userID)
	u.group.SetDataBase(u.db)
	u.group.SetLoginUserID(userID)
	u.third.SetPlatformID(int32(u.info.PlatformID))
	u.third.SetLoginUserID(userID)
	u.third.SetSystemType(u.info.SystemType)
	u.third.SetLogFilePath(u.info.LogFilePath)
	u.msgSyncer.SetLoginUserID(userID)
	u.msgSyncer.SetDataBase(u.db)
	u.conversation.SetLoginUserID(userID)
	u.conversation.SetDataBase(u.db)
	u.conversation.SetPlatformID(int32(u.info.PlatformID))
	u.conversation.SetDataDir(u.info.DataDir)
	u.conversation.SetIsExternalExtensions(u.info.IsExternalExtensions)
	err = u.msgSyncer.LoadSeq(ctx)
	if err != nil {
		return err
	}
	return nil
}

func (u *LoginMgr) setListener(ctx context.Context) {
	setListener(ctx, &u.userListener, u.UserListener, u.user.SetListener, newEmptyUserListener)
	setListener(ctx, &u.friendshipListener, u.FriendshipListener, u.relation.SetListener, newEmptyFriendshipListener)
	setListener(ctx, &u.groupListener, u.GroupListener, u.group.SetGroupListener, newEmptyGroupListener)
	setListener(ctx, &u.conversationListener, u.ConversationListener, u.conversation.SetConversationListener, newEmptyConversationListener)
	setListener(ctx, &u.advancedMsgListener, u.AdvancedMsgListener, u.conversation.SetMsgListener, newEmptyAdvancedMsgListener)
	setListener(ctx, &u.batchMsgListener, u.BatchMsgListener, u.conversation.SetBatchMsgListener, nil)
	setListener(ctx, &u.businessListener, u.BusinessListener, u.conversation.SetBusinessListener, newEmptyCustomBusinessListener)
	setListener(ctx, &u.connListener, u.ConnListener, u.longConnMgr.SetListener, newEmptyConnListener)
}

func setListener[T any](ctx context.Context, listener *T, getter func() T, setFunc func(listener func() T), newFunc func(context.Context) T) {
	if *(*unsafe.Pointer)(unsafe.Pointer(listener)) == nil && newFunc != nil {
		*listener = newFunc(ctx)
	}
	setFunc(getter)
}

func (u *LoginMgr) run(ctx context.Context) {
	u.longConnMgr.Run(ctx)
	go u.msgSyncer.DoListener(ctx)
	go common.DoListener(u.ctx, u.conversation)
	go u.logoutListener(ctx)
}

func (u *LoginMgr) Context() context.Context {
	return u.ctx
}

func (u *LoginMgr) initResources() {
	ctx := ccontext.WithInfo(context.Background(), u.info)
	u.ctx, u.cancel = context.WithCancel(ctx)
	var convChanLen int
	if flagconst.TestMode {
		convChanLen = 100000
	} else {
		convChanLen = 1000
	}
	u.conversationCh = make(chan common.Cmd2Value, convChanLen)
	u.pushMsgAndMaxSeqCh = make(chan common.Cmd2Value, 1000)
	u.loginMgrCh = make(chan common.Cmd2Value, 1)
	u.longConnMgr = interaction.NewLongConnMgr(u.ctx, u.userOnlineStatusChange, u.pushMsgAndMaxSeqCh, u.loginMgrCh)
	u.ctx = ccontext.WithApiErrCode(u.ctx, &apiErrCallback{loginMgrCh: u.loginMgrCh, listener: u.connListener})
	u.setLoginStatus(LogoutStatus)
}

func (u *LoginMgr) userOnlineStatusChange(users map[string][]int32) {
	u.User().UserOnlineStatusChange(users)
}

func (u *LoginMgr) UnInitSDK() {
	if u.getLoginStatus(context.Background()) == Logged {
		fmt.Println("sdk not logout, please logout first")
		return
	}
	u.info = nil
	u.setLoginStatus(0)
}

// token error recycle recourse, kicked not recycle
func (u *LoginMgr) logout(ctx context.Context, isTokenValid bool) error {
	if ccontext.Info(ctx).OperationID() == LogoutTips {
		isTokenValid = true
	}
	if !isTokenValid {
		ctx, cancel := context.WithTimeout(ctx, 20*time.Second)
		defer cancel()
		err := u.longConnMgr.SendReqWaitResp(ctx, &push.DelUserPushTokenReq{UserID: u.info.UserID, PlatformID: int32(u.info.PlatformID)}, constant.LogoutMsg, &push.DelUserPushTokenResp{})
		if err != nil {
			log.ZWarn(ctx, "TriggerCmdLogout server recycle resources failed...", err)
		} else {
			log.ZDebug(ctx, "TriggerCmdLogout server recycle resources success...")
		}
	}
	u.Exit()
	err := u.db.Close(u.ctx)
	if err != nil {
		log.ZWarn(ctx, "TriggerCmdLogout db recycle resources failed...", err)
	}
	// user object must be rest  when user logout
	u.initResources()
	log.ZDebug(ctx, "TriggerCmdLogout client success...",
		"isTokenValid", isTokenValid)
	return nil
}

func (u *LoginMgr) setAppBackgroundStatus(ctx context.Context, isBackground bool) error {
	if u.longConnMgr.GetConnectionStatus() == interaction.DefaultNotConnect {
		u.longConnMgr.SetBackground(isBackground)
		return nil
	}
	var resp sdkws.SetAppBackgroundStatusResp
	err := u.longConnMgr.SendReqWaitResp(ctx, &sdkws.SetAppBackgroundStatusReq{UserID: u.info.UserID, IsBackground: isBackground}, constant.SetBackgroundStatus, &resp)
	if err != nil {
		return err
	} else {
		u.longConnMgr.SetBackground(isBackground)
		if !isBackground {
			_ = common.TriggerCmdWakeUpDataSync(ctx, u.pushMsgAndMaxSeqCh)
		}

		return nil
	}
}

func (u *LoginMgr) LongConnMgr() *interaction.LongConnMgr {
	return u.longConnMgr
}
