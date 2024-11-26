package user

import (
	"context"

	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/user"
	"github.com/openimsdk/protocol/wrapperspb"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/common"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/constant"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	"github.com/openimsdk/protocol/sdkws"
	userPb "github.com/openimsdk/protocol/user"
	"github.com/openimsdk/tools/log"
	"github.com/openimsdk/tools/utils/datautil"
)

// ProcessUserCommandGetAll get user's choice
func (u *User) ProcessUserCommandGetAll(ctx context.Context, req *sdkpb.ProcessUserCommandGetAllReq) (*sdkpb.ProcessUserCommandGetAllResp, error) {
	localCommands, err := u.DataBase.ProcessUserCommandGetAll(ctx)
	if err != nil {
		return nil, err // Handle the error appropriately
	}
	return &sdkpb.ProcessUserCommandGetAllResp{Commands: datautil.Batch(DBCommandToSdk, localCommands)}, nil
}

func (u *User) GetSelfUserInfo(ctx context.Context, _ *sdkpb.GetSelfUserInfoReq) (*sdkpb.GetSelfUserInfoResp, error) {
	userInfo, err := u.GetLoginUser(ctx, u.loginUserID)
	if err == nil {
		return &sdkpb.GetSelfUserInfoResp{User: DBUserToSdk(userInfo)}, nil
	}

	userInfoFromServer, err := u.getUsersInfo(ctx, []string{u.loginUserID})
	if err != nil {
		return nil, err
	}

	if len(userInfoFromServer) == 0 {
		return nil, sdkerrs.ErrUserIDNotFound
	}

	if err := u.InsertLoginUser(ctx, ServerUserToLocalUser(userInfoFromServer[0])); err != nil {
		return nil, err
	}
	return &sdkpb.GetSelfUserInfoResp{User: ServerUserToSdk(userInfoFromServer[0])}, nil
}

func (u *User) SetSelfInfo(ctx context.Context, req *sdkpb.SetSelfInfoReq) (*sdkpb.SetSelfInfoResp, error) {
	// updateSelfUserInfo updates the user's information with Ex field.
	if err := u.updateUserInfo(ctx, &sdkws.UserInfoWithEx{
		Nickname:         wrapperspb.StringPtr(req.Nickname),
		FaceURL:          wrapperspb.StringPtr(req.FaceURL),
		Ex:               wrapperspb.StringPtr(req.Ex),
		GlobalRecvMsgOpt: wrapperspb.Int32Ptr((*int32)(req.GlobalRecvMsgOpt))}); err != nil {
		return nil, err
	}
	err := u.SyncLoginUserInfo(ctx)
	if err != nil {
		log.ZWarn(ctx, "SyncLoginUserInfo", err)
	}
	return &sdkpb.SetSelfInfoResp{}, nil
}

// ProcessUserCommandAdd CRUD user command
func (u *User) ProcessUserCommandAdd(ctx context.Context, req *sdkpb.ProcessUserCommandAddReq) (*sdkpb.ProcessUserCommandAddResp, error) {
	if err := u.processUserCommandAdd(ctx, &userPb.ProcessUserCommandAddReq{Type: req.Type, Uuid: req.Uuid, Value: wrapperspb.StringPtr(req.Value), Ex: wrapperspb.StringPtr(req.Ex)}); err != nil {
		return nil, err
	}
	if err := u.SyncAllCommand(ctx); err != nil {
		return nil, err
	}
	return &sdkpb.ProcessUserCommandAddResp{}, nil
}

// ProcessUserCommandDelete delete user's choice
func (u *User) ProcessUserCommandDelete(ctx context.Context, req *sdkpb.ProcessUserCommandDeleteReq) (*sdkpb.ProcessUserCommandDeleteResp, error) {
	if err := u.processUserCommandDelete(ctx, &userPb.ProcessUserCommandDeleteReq{Type: req.Type, Uuid: req.Uuid}); err != nil {
		return nil, err
	}
	if err := u.SyncAllCommand(ctx); err != nil {
		return nil, err
	}
	return &sdkpb.ProcessUserCommandDeleteResp{}, nil
}

// ProcessUserCommandUpdate update user's choice
func (u *User) ProcessUserCommandUpdate(ctx context.Context, req *sdkpb.ProcessUserCommandUpdateReq) (*sdkpb.ProcessUserCommandUpdateResp, error) {
	if err := u.processUserCommandUpdate(ctx, &userPb.ProcessUserCommandUpdateReq{Type: req.Type, Uuid: req.Uuid, Value: wrapperspb.StringPtr(req.Value), Ex: wrapperspb.StringPtr(req.Ex)}); err != nil {
		return nil, err
	}
	if err := u.SyncAllCommand(ctx); err != nil {
		return nil, err
	}
	return &sdkpb.ProcessUserCommandUpdateResp{}, nil
}

func (u *User) GetUsersInfo(ctx context.Context, req *sdkpb.GetUsersInfoReq) (*sdkpb.GetUsersInfoResp, error) {
	usersInfo, err := u.GetUsersInfoWithCache(ctx, req.UserIDs)
	if err != nil {
		return nil, err
	}

	res := datautil.Batch(DBUserToSdk, usersInfo)

	friendList, err := u.GetFriendInfoList(ctx, req.UserIDs)
	if err != nil {
		return nil, err
	}
	friendMap := datautil.SliceToMap(friendList, func(friend *model_struct.LocalFriend) string {
		return friend.FriendUserID
	})

	for _, userInfo := range res {

		// update single conversation

		conversation, err := u.GetConversationByUserID(ctx, userInfo.UserID)
		if err != nil {
			log.ZWarn(ctx, "GetConversationByUserID failed", err, "userInfo", usersInfo)
		} else {
			if _, ok := friendMap[userInfo.UserID]; ok {
				continue
			}
			log.ZDebug(ctx, "GetConversationByUserID", "conversation", conversation)
			if conversation.ShowName != userInfo.Nickname || conversation.FaceURL != userInfo.FaceURL {
				_ = common.TriggerCmdUpdateConversation(ctx, common.UpdateConNode{Action: constant.UpdateConFaceUrlAndNickName,
					Args: common.SourceIDAndSessionType{SourceID: userInfo.UserID, SessionType: conversation.ConversationType, FaceURL: userInfo.FaceURL, Nickname: userInfo.Nickname}}, u.conversationCh)
				_ = common.TriggerCmdUpdateMessage(ctx, common.UpdateMessageNode{Action: constant.UpdateMsgFaceUrlAndNickName,
					Args: common.UpdateMessageInfo{SessionType: conversation.ConversationType, UserID: userInfo.UserID, FaceURL: userInfo.FaceURL, Nickname: userInfo.Nickname}}, u.conversationCh)
			}
		}
	}
	return &sdkpb.GetUsersInfoResp{Users: res}, nil
}

// GetUsersInfoFromServer retrieves user information from the server.
func (u *User) GetUsersInfoFromServer(ctx context.Context, req *sdkpb.GetUsersInfoFromServerReq) (*sdkpb.GetUsersInfoFromServerResp, error) {
	users, err := u.getUsersInfo(ctx, req.UserIDs)
	if err != nil {
		return nil, sdkerrs.WrapMsg(err, "GetUsersInfoFromServer failed")
	}
	return &sdkpb.GetUsersInfoFromServerResp{Users: datautil.Batch(ServerUserToSdk, users)}, nil
}
