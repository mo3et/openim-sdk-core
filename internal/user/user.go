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

package user

import (
	"context"
	"fmt"

	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/event"

	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk_callback"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/cache"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/common"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/constant"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/db_interface"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/syncer"
	"github.com/openimsdk/tools/utils/datautil"
)

// NewUser creates a new User object.
func NewUser(conversationCh chan common.Cmd2Value) *User {
	user := &User{conversationCh: conversationCh}
	user.initSyncer()
	//user.OnlineStatusCache = cache.NewCache[string, *userPb.OnlineStatus]()
	user.UserCache = cache.NewManager[string, *model_struct.LocalUser](
		func(value *model_struct.LocalUser) string { return value.UserID },
		nil,
		func(ctx context.Context, userIDs []string) ([]*model_struct.LocalUser, error) {
			users, err := user.getUsersInfo(ctx, userIDs)
			if err != nil {
				return nil, err
			}
			return datautil.Batch(ServerUserToLocalUser, users), nil
		},
	)
	return user
}

// User is a struct that represents a user in the system.
type User struct {
	db_interface.DataBase
	loginUserID    string
	listener       func() open_im_sdk_callback.OnUserListener
	userSyncer     *syncer.Syncer[*model_struct.LocalUser, syncer.NoResp, string]
	commandSyncer  *syncer.Syncer[*model_struct.LocalUserCommand, syncer.NoResp, string]
	conversationCh chan common.Cmd2Value
	UserCache      *cache.Manager[string, *model_struct.LocalUser]

	//OnlineStatusCache *cache.Cache[string, *userPb.OnlineStatus]
}

// SetDataBase sets the DataBase field in User struct
func (u *User) SetDataBase(db db_interface.DataBase) {
	u.DataBase = db
}

// SetLoginUserID sets the loginUserID field in User struct
func (u *User) SetLoginUserID(loginUserID string) {
	u.loginUserID = loginUserID
}

// SetListener sets the user's listener.
func (u *User) SetListener(listener func() open_im_sdk_callback.OnUserListener) {
	u.listener = listener
}

func (u *User) initSyncer() {
	u.userSyncer = syncer.New[*model_struct.LocalUser, syncer.NoResp, string](
		func(ctx context.Context, value *model_struct.LocalUser) error {
			return u.InsertLoginUser(ctx, value)
		},
		func(ctx context.Context, value *model_struct.LocalUser) error {
			return fmt.Errorf("not support delete user %s", value.UserID)
		},
		func(ctx context.Context, serverUser, localUser *model_struct.LocalUser) error {
			u.UserCache.Delete(localUser.UserID)
			return u.DataBase.UpdateLoginUser(context.Background(), serverUser)
		},
		func(user *model_struct.LocalUser) string {
			return user.UserID
		},
		nil,
		func(ctx context.Context, state int, server, local *model_struct.LocalUser) error {
			switch state {
			case syncer.Update:
				u.listener().OnSelfInfoUpdated(&sdkpb.EventOnSelfInfoUpdatedData{User: DBUserToSdk(server)})
				if server.Nickname != local.Nickname || server.FaceURL != local.FaceURL {
					_ = common.TriggerCmdUpdateMessage(ctx, common.UpdateMessageNode{Action: constant.UpdateMsgFaceUrlAndNickName,
						Args: common.UpdateMessageInfo{SessionType: constant.SingleChatType, UserID: server.UserID, FaceURL: server.FaceURL, Nickname: server.Nickname}}, u.conversationCh)
				}
			}
			return nil
		},
	)
	u.commandSyncer = syncer.New[*model_struct.LocalUserCommand, syncer.NoResp, string](
		func(ctx context.Context, command *model_struct.LocalUserCommand) error {
			// Logic to insert a command
			return u.DataBase.ProcessUserCommandAdd(ctx, command)
		},
		func(ctx context.Context, command *model_struct.LocalUserCommand) error {
			// Logic to delete a command
			return u.DataBase.ProcessUserCommandDelete(ctx, command)
		},
		func(ctx context.Context, serverCommand *model_struct.LocalUserCommand, localCommand *model_struct.LocalUserCommand) error {
			// Logic to update a command
			if serverCommand == nil || localCommand == nil {
				return fmt.Errorf("nil command reference")
			}
			return u.DataBase.ProcessUserCommandUpdate(ctx, serverCommand)
		},
		func(command *model_struct.LocalUserCommand) string {
			// Return a unique identifier for the command
			if command == nil {
				return ""
			}
			return command.Uuid
		},
		func(a *model_struct.LocalUserCommand, b *model_struct.LocalUserCommand) bool {
			// Compare two commands to check if they are equal
			if a == nil || b == nil {
				return false
			}
			return a.Uuid == b.Uuid && a.Type == b.Type && a.Value == b.Value
		},
		func(ctx context.Context, state int, serverCommand *model_struct.LocalUserCommand, localCommand *model_struct.LocalUserCommand) error {
			if u.listener == nil {
				return nil
			}
			switch state {
			case syncer.Delete:
				u.listener().OnUserCommandDelete(&sdkpb.EventOnUserCommandDeleteData{Command: DBCommandToSdk(serverCommand)})
			case syncer.Update:
				u.listener().OnUserCommandUpdate(&sdkpb.EventOnUserCommandUpdateData{Command: DBCommandToSdk(serverCommand)})
			case syncer.Insert:
				u.listener().OnUserCommandAdd(&sdkpb.EventOnUserCommandAddData{Command: DBCommandToSdk(serverCommand)})
			}
			return nil
		},
	)
}

func (u *User) GetUserInfoWithCache(ctx context.Context, cacheKey string) (*model_struct.LocalUser, error) {
	return u.UserCache.FetchGet(ctx, cacheKey)
}

func (u *User) GetUserInfoWithCacheFunc(ctx context.Context, cacheKey string, fetchFunc func(ctx context.Context, key string) (*model_struct.LocalUser, error)) (*model_struct.LocalUser, error) {
	if userInfo, ok := u.UserCache.Load(cacheKey); ok {
		return userInfo, nil
	}

	fetchedData, err := fetchFunc(ctx, cacheKey)
	if err != nil {
		return nil, err
	}

	u.UserCache.Store(cacheKey, fetchedData)
	return fetchedData, nil
}

func (u *User) GetUsersInfoWithCache(ctx context.Context, cacheKeys []string) ([]*model_struct.LocalUser, error) {
	m, err := u.UserCache.MultiFetchGet(ctx, cacheKeys)
	if err != nil {
		return nil, err
	}
	return datautil.Values(m), nil
}
