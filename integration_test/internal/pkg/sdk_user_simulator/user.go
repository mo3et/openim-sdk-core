package sdk_user_simulator

import (
	"context"
	initpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/init"
	"sync"

	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/utils"
	"github.com/openimsdk/tools/errs"
)

var (
	MapLock        sync.Mutex
	UserMessageMap = make(map[string]*MsgListenerCallBak)
	timeOffset     int64
)

func GetRelativeServerTime() int64 {
	return utils.GetCurrentTimestampByMill() + timeOffset
}

func InitSDK(userID string, cf *initpb.IMConfig) (*open_im_sdk.UserContext, error) {
	userForSDK := open_im_sdk.NewIMUserContext()
	var testConnListener testConnListener
	testConnListener.UserID = userID
	isInit, _ := userForSDK.InitSDK(context.TODO(), &initpb.InitSDKReq{Config: cf})
	if !isInit.Suc {
		return nil, errs.New("sdk init failed").Wrap()
	}

	SetListener(userForSDK, userID)

	return userForSDK, nil
}

func SetListener(userForSDK *open_im_sdk.UserContext, userID string) {
	var testConversation conversationCallBack
	userForSDK.SetConversationListener(&testConversation)
	var testUser userCallback
	userForSDK.SetUserListener(testUser)

	msgCallBack := NewMsgListenerCallBak(userID)
	MapLock.Lock()
	UserMessageMap[userID] = msgCallBack
	MapLock.Unlock()

	var friendshipListener testFriendshipListener
	userForSDK.SetFriendshipListener(friendshipListener)

	var groupListener testGroupListener
	userForSDK.SetGroupListener(groupListener)
}
