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

package group

import (
	"context"
	"github.com/openimsdk/protocol/sdkws"
	"time"

	"github.com/openimsdk/tools/errs"

	"github.com/openimsdk/tools/utils/datautil"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/datafetcher"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/constant"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdk_params_callback"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"

	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto"
	"github.com/openimsdk/protocol/group"
)

func (g *Group) CreateGroup(ctx context.Context, req *sdkpb.CreateGroupReq) (*sdkpb.GroupInfo, error) {
	if req.GroupInfo.GroupType != constant.WorkingGroup {
		return nil, sdkerrs.ErrGroupType
	}
	req.GroupInfo.CreatorUserID = g.loginUserID
	resp, err := g.createGroup(ctx, &group.CreateGroupReq{
		MemberUserIDs: req.MemberUserIDs,
		AdminUserIDs:  req.AdminUserIDs,
		OwnerUserID:   g.loginUserID,
		GroupInfo: &sdkws.GroupInfo{
			GroupID:                req.GroupInfo.GroupID,
			GroupName:              req.GroupInfo.GroupName,
			Notification:           req.GroupInfo.Notification,
			Introduction:           req.GroupInfo.Introduction,
			FaceURL:                req.GroupInfo.FaceURL,
			OwnerUserID:            req.GroupInfo.OwnerUserID,
			CreateTime:             req.GroupInfo.CreateTime,
			MemberCount:            uint32(req.GroupInfo.MemberCount),
			Ex:                     req.GroupInfo.Ex,
			Status:                 req.GroupInfo.Status,
			CreatorUserID:          req.GroupInfo.CreatorUserID,
			GroupType:              req.GroupInfo.GroupType,
			NeedVerification:       req.GroupInfo.NeedVerification,
			LookMemberInfo:         req.GroupInfo.LookMemberInfo,
			ApplyMemberFriend:      req.GroupInfo.ApplyMemberFriend,
			NotificationUpdateTime: req.GroupInfo.NotificationUpdateTime,
			NotificationUserID:     req.GroupInfo.NotificationUserID,
		},
	})
	if err != nil {
		return nil, err
	}
	g.groupSyncMutex.Lock()
	defer g.groupSyncMutex.Unlock()

	if err := g.IncrSyncJoinGroup(ctx); err != nil {
		return nil, err
	}
	if err := g.IncrSyncGroupAndMember(ctx, resp.GroupInfo.GroupID); err != nil {
		return nil, err
	}
	return ServerGroupToSdk(resp.GroupInfo), nil
}

func (g *Group) JoinGroup(ctx context.Context, req *sdkpb.JoinGroupReq) (*sdkpb.JoinGroupResp, error) {
	if err := g.joinGroup(ctx, &group.JoinGroupReq{GroupID: req.GroupID, ReqMessage: req.ReqMessage, JoinSource: req.JoinSource, InviterUserID: g.loginUserID, Ex: req.Ex}); err != nil {
		return nil, err
	}
	if err := g.SyncSelfGroupApplications(ctx, req.GroupID); err != nil {
		return nil, err
	}
	return &sdkpb.JoinGroupResp{}, nil
}

func (g *Group) QuitGroup(ctx context.Context, req *sdkpb.QuitGroupReq) (*sdkpb.QuitGroupResp, error) {
	if err := g.quitGroup(ctx, req.GroupID); err != nil {
		return nil, err
	}
	g.groupSyncMutex.Lock()
	defer g.groupSyncMutex.Unlock()

	if err := g.IncrSyncJoinGroup(ctx); err != nil {
		return nil, err
	}
	return &sdkpb.QuitGroupResp{}, nil
}

func (g *Group) DismissGroup(ctx context.Context, req *sdkpb.DismissGroupReq) (*sdkpb.DismissGroupResp, error) {
	if err := g.dismissGroup(ctx, req.GroupID); err != nil {
		return nil, err
	}
	g.groupSyncMutex.Lock()
	defer g.groupSyncMutex.Unlock()

	if err := g.IncrSyncJoinGroup(ctx); err != nil {
		return nil, err
	}
	return &sdkpb.DismissGroupResp{}, nil
}

func (g *Group) ChangeGroupMute(ctx context.Context, req *sdkpb.ChangeGroupMuteReq) (*sdkpb.ChangeGroupMuteResp, error) {
	var err error
	if req.Mute {
		err = g.muteGroup(ctx, req.GroupID)
	} else {
		err = g.cancelMuteGroup(ctx, req.GroupID)
	}
	if err != nil {
		return nil, err
	}

	g.groupSyncMutex.Lock()
	defer g.groupSyncMutex.Unlock()

	if err := g.IncrSyncGroupAndMember(ctx, req.GroupID); err != nil {
		return nil, err
	}
	return &sdkpb.ChangeGroupMuteResp{}, nil
}

func (g *Group) ChangeGroupMemberMute(ctx context.Context, req *sdkpb.ChangeGroupMemberMuteReq) (*sdkpb.ChangeGroupMemberMuteResp, error) {
	var err error
	if req.MutedSeconds == 0 {
		err = g.cancelMuteGroupMember(ctx, &group.CancelMuteGroupMemberReq{GroupID: req.GroupID, UserID: req.UserID})
	} else {
		err = g.muteGroupMember(ctx, &group.MuteGroupMemberReq{GroupID: req.GroupID, UserID: req.UserID, MutedSeconds: req.MutedSeconds})
	}
	if err != nil {
		return nil, err
	}
	return &sdkpb.ChangeGroupMemberMuteResp{}, nil
}

func (g *Group) TransferGroupOwner(ctx context.Context, req *sdkpb.TransferGroupOwnerReq) (*sdkpb.TransferGroupOwnerResp, error) {
	if err := g.transferGroup(ctx, &group.TransferGroupOwnerReq{GroupID: req.GroupID, OldOwnerUserID: g.loginUserID, NewOwnerUserID: req.OwnerUserID}); err != nil {
		return nil, err
	}
	g.groupSyncMutex.Lock()
	defer g.groupSyncMutex.Unlock()

	if err := g.IncrSyncGroupAndMember(ctx, req.GroupID); err != nil {
		return nil, err
	}
	return &sdkpb.TransferGroupOwnerResp{}, nil
}

func (g *Group) KickGroupMember(ctx context.Context, req *sdkpb.KickGroupMemberReq) (*sdkpb.KickGroupMemberResp, error) {
	if err := g.kickGroupMember(ctx, &group.KickGroupMemberReq{GroupID: req.GroupID, KickedUserIDs: req.KickedUserIDs, Reason: req.Reason}); err != nil {
		return nil, err
	}

	g.groupSyncMutex.Lock()
	defer g.groupSyncMutex.Unlock()
	if err := g.IncrSyncGroupAndMember(ctx, req.GroupID); err != nil {
		return nil, err
	}
	return &sdkpb.KickGroupMemberResp{}, nil
}

func (g *Group) SetGroupInfo(ctx context.Context, req *sdkpb.SetGroupInfoReq) (*sdkpb.SetGroupInfoResp, error) {
	info := &group.SetGroupInfoExReq{
		GroupID:           req.GroupID,
		GroupName:         req.GroupName,
		Notification:      req.Notification,
		Introduction:      req.Introduction,
		FaceURL:           req.FaceURL,
		Ex:                req.Ex,
		NeedVerification:  req.NeedVerification,
		LookMemberInfo:    req.LookMemberInfo,
		ApplyMemberFriend: req.ApplyMemberFriend,
	}
	if err := g.setGroupInfo(ctx, info); err != nil {
		return nil, err
	}

	g.groupSyncMutex.Lock()
	defer g.groupSyncMutex.Unlock()
	if err := g.IncrSyncJoinGroup(ctx); err != nil {
		return nil, err
	}
	return &sdkpb.SetGroupInfoResp{}, nil
}

func (g *Group) SetGroupMemberInfo(ctx context.Context, req *sdkpb.SetGroupMemberInfoReq) (*sdkpb.SetGroupMemberInfoResp, error) {
	member := &group.SetGroupMemberInfo{
		GroupID:   req.GroupID,
		UserID:    req.UserID,
		Nickname:  req.Nickname,
		FaceURL:   req.FaceURL,
		RoleLevel: req.RoleLevel,
		Ex:        req.Ex,
	}
	if err := g.setGroupMemberInfo(ctx, member); err != nil {
		return nil, err
	}

	g.groupSyncMutex.Lock()
	defer g.groupSyncMutex.Unlock()
	if err := g.IncrSyncGroupAndMember(ctx, member.GroupID); err != nil {
		return nil, err
	}
	return &sdkpb.SetGroupMemberInfoResp{}, nil
}

func (g *Group) GetJoinedGroups(ctx context.Context, req *sdkpb.GetJoinedGroupsReq) (*sdkpb.GetJoinedGroupsResp, error) {
	groups, err := g.getServerJoinGroup(ctx)
	if err != nil {
		return nil, err
	}
	return &sdkpb.GetJoinedGroupsResp{
		Groups: datautil.Batch(ServerGroupToSdk, groups),
	}, nil
}

func (g *Group) GetJoinedGroupListPage(ctx context.Context, offset, count int32) ([]*model_struct.LocalGroup, error) {
	// todo
	dataFetcher := datafetcher.NewDataFetcher(
		g.db,
		g.groupTableName(),
		g.loginUserID,
		func(localGroup *model_struct.LocalGroup) string {
			return localGroup.GroupID
		},
		func(ctx context.Context, values []*model_struct.LocalGroup) error {
			return g.db.BatchInsertGroup(ctx, values)
		},
		func(ctx context.Context, groupIDs []string) ([]*model_struct.LocalGroup, bool, error) {
			localGroups, err := g.db.GetGroups(ctx, groupIDs)
			return localGroups, true, err
		},
		func(ctx context.Context, groupIDs []string) ([]*model_struct.LocalGroup, error) {
			serverGroupInfo, err := g.getGroupsInfoFromServer(ctx, groupIDs)
			if err != nil {
				return nil, err
			}
			return datautil.Batch(ServerGroupToLocalGroup, serverGroupInfo), nil
		},
	)
	return dataFetcher.FetchWithPagination(ctx, int(offset), int(count))
}

func (g *Group) GetSpecifiedGroupsInfo(ctx context.Context, req *sdkpb.GetSpecifiedGroupsInfoReq) (*sdkpb.GetSpecifiedGroupsInfoResp, error) {
	dataFetcher := datafetcher.NewDataFetcher(
		g.db,
		g.groupTableName(),
		g.loginUserID,
		func(localGroup *model_struct.LocalGroup) string {
			return localGroup.GroupID
		},
		func(ctx context.Context, values []*model_struct.LocalGroup) error {
			return g.db.BatchInsertGroup(ctx, values)
		},
		func(ctx context.Context, groupIDs []string) ([]*model_struct.LocalGroup, bool, error) {
			localGroups, err := g.db.GetGroups(ctx, groupIDs)
			return localGroups, true, err
		},
		func(ctx context.Context, groupIDs []string) ([]*model_struct.LocalGroup, error) {
			serverGroupInfo, err := g.getGroupsInfoFromServer(ctx, groupIDs)
			if err != nil {
				return nil, err
			}
			return datautil.Batch(ServerGroupToLocalGroup, serverGroupInfo), nil
		},
	)
	groups, err := dataFetcher.FetchMissingAndCombineLocal(ctx, req.GroupIDs)
	if err != nil {
		return nil, err
	}
	return &sdkpb.GetSpecifiedGroupsInfoResp{
		Groups: datautil.Batch(DBGroupToSdk, groups),
	}, nil
}

func (g *Group) SearchGroups(ctx context.Context, req *sdkpb.SearchGroupsReq) (*sdkpb.SearchGroupsResp, error) {
	if !req.SearchGroupName && !req.SearchGroupID {
		return nil, sdkerrs.ErrArgs.WrapMsg("keyword is null or search field all false")
	}
	groups, err := g.db.GetAllGroupInfoByGroupIDOrGroupName(ctx, req.Keyword, req.SearchGroupID, req.SearchGroupName)
	if err != nil {
		return nil, err
	}
	return &sdkpb.SearchGroupsResp{
		Groups: datautil.Batch(DBGroupToSdk, groups),
	}, nil
}

func (g *Group) GetGroupMemberOwnerAndAdmin(ctx context.Context, req *sdkpb.GetGroupMemberOwnerAndAdminReq) (*sdkpb.GetGroupMemberOwnerAndAdminResp, error) {
	members, err := g.db.GetGroupMemberOwnerAndAdminDB(ctx, req.GroupID)
	if err != nil {
		return nil, err
	}
	return &sdkpb.GetGroupMemberOwnerAndAdminResp{
		Members: datautil.Batch(DBGroupMemberToSdk, members),
	}, nil
}

func (g *Group) GetGroupMemberListByJoinTimeFilter(ctx context.Context, groupID string, offset, count int32, joinTimeBegin, joinTimeEnd int64, userIDs []string) ([]*model_struct.LocalGroupMember, error) {
	// todo
	if joinTimeEnd == 0 {
		joinTimeEnd = time.Now().UnixMilli()
	}

	dataFetcher := datafetcher.NewDataFetcher(
		g.db,
		g.groupAndMemberVersionTableName(),
		groupID,
		func(localGroupMember *model_struct.LocalGroupMember) string {
			return localGroupMember.UserID
		},
		func(ctx context.Context, values []*model_struct.LocalGroupMember) error {
			return g.db.BatchInsertGroupMember(ctx, values)
		},
		func(ctx context.Context, userIDs []string) ([]*model_struct.LocalGroupMember, bool, error) {
			localGroupMembers, err := g.db.GetGroupMemberListSplitByJoinTimeFilter(ctx, groupID, int(offset), int(count), joinTimeBegin, joinTimeEnd, userIDs)
			return localGroupMembers, true, err
		},
		func(ctx context.Context, userIDs []string) ([]*model_struct.LocalGroupMember, error) {
			serverGroupMember, err := g.GetDesignatedGroupMembers(ctx, groupID, userIDs)
			if err != nil {
				return nil, err
			}
			return datautil.Batch(ServerGroupMemberToLocalGroupMember, serverGroupMember), nil
		},
	)

	return dataFetcher.FetchWithPagination(ctx, int(offset), int(count))
}

func (g *Group) GetSpecifiedGroupMembersInfo(ctx context.Context, req *sdkpb.GetSpecifiedGroupMembersInfoReq) (*sdkpb.GetSpecifiedGroupMembersInfoResp, error) {
	g.groupSyncMutex.Lock()
	defer g.groupSyncMutex.Unlock()

	lvs, err := g.db.GetVersionSync(ctx, g.groupTableName(), g.loginUserID)
	if err != nil {
		return nil, err
	}
	if datautil.Contain(req.GroupID, lvs.UIDList...) {
		_, err := g.db.GetVersionSync(ctx, g.groupAndMemberVersionTableName(), req.GroupID)
		if err != nil {
			if !errs.ErrRecordNotFound.Is(err) {
				return nil, err
			}
			err := g.IncrSyncGroupAndMember(ctx, req.GroupID)
			if err != nil {
				return nil, err
			}
		}
	} else { // If the user is no longer in the group, return nil immediately
		return &sdkpb.GetSpecifiedGroupMembersInfoResp{}, nil
	}
	dataFetcher := datafetcher.NewDataFetcher(
		g.db,
		g.groupAndMemberVersionTableName(),
		req.GroupID,
		func(localGroupMember *model_struct.LocalGroupMember) string {
			return localGroupMember.UserID
		},
		func(ctx context.Context, values []*model_struct.LocalGroupMember) error {
			return g.db.BatchInsertGroupMember(ctx, values)
		},
		func(ctx context.Context, userIDs []string) ([]*model_struct.LocalGroupMember, bool, error) {
			localGroupMembers, err := g.db.GetGroupSomeMemberInfo(ctx, req.GroupID, req.UserIDs)
			if err != nil {
				return nil, false, err
			}
			localGroup, err := g.db.GetGroupInfoByGroupID(ctx, req.GroupID)
			if err != nil {
				return nil, false, err
			}
			if localGroup.MemberCount < groupMemberSyncLimit {
				return localGroupMembers, false, nil
			}
			return localGroupMembers, true, nil
		},
		func(ctx context.Context, userIDs []string) ([]*model_struct.LocalGroupMember, error) {
			serverGroupMember, err := g.GetDesignatedGroupMembers(ctx, req.GroupID, userIDs)
			if err != nil {
				return nil, err
			}
			if len(serverGroupMember) == 0 {
				return nil, nil
			}
			return datautil.Batch(ServerGroupMemberToLocalGroupMember, serverGroupMember), nil
		},
	)
	members, err := dataFetcher.FetchMissingAndFillLocal(ctx, req.UserIDs)
	if err != nil {
		return nil, err
	}
	return &sdkpb.GetSpecifiedGroupMembersInfoResp{
		Members: datautil.Batch(DBGroupMemberToSdk, members),
	}, nil
}

func (g *Group) GetGroupMemberList(ctx context.Context, groupID string, filter, offset, count int32) ([]*model_struct.LocalGroupMember, error) {
	// todo
	g.groupSyncMutex.Lock()
	defer g.groupSyncMutex.Unlock()

	lvs, err := g.db.GetVersionSync(ctx, g.groupTableName(), g.loginUserID)
	if err != nil {
		return nil, err
	}
	if datautil.Contain(groupID, lvs.UIDList...) {

		_, err := g.db.GetVersionSync(ctx, g.groupAndMemberVersionTableName(), groupID)
		if err != nil {
			if !errs.ErrRecordNotFound.Is(err) {
				return nil, err
			}
			err := g.IncrSyncGroupAndMember(ctx, groupID)
			if err != nil {
				return nil, err
			}
		}
	} else { // If the user is no longer in the group, return nil immediately
		return nil, nil
	}

	dataFetcher := datafetcher.NewDataFetcher(
		g.db,
		g.groupAndMemberVersionTableName(),
		groupID,
		func(localGroupMember *model_struct.LocalGroupMember) string {
			return localGroupMember.UserID
		},
		func(ctx context.Context, values []*model_struct.LocalGroupMember) error {
			return g.db.BatchInsertGroupMember(ctx, values)
		},
		func(ctx context.Context, userIDs []string) ([]*model_struct.LocalGroupMember, bool, error) {
			localGroupMembers, err := g.db.GetGroupMemberListByUserIDs(ctx, groupID, filter, userIDs)
			if err != nil {
				return nil, false, err
			}
			switch filter {
			case constant.GroupFilterOwner:
				fallthrough
			case constant.GroupFilterAdmin:
				fallthrough
			case constant.GroupFilterOwnerAndAdmin:
				return localGroupMembers, false, nil
			case constant.GroupFilterAll:
				fallthrough
			case constant.GroupFilterOrdinaryUsers:
				fallthrough
			case constant.GroupFilterAdminAndOrdinaryUsers:
				return localGroupMembers, true, nil
			}
			return nil, false, sdkerrs.ErrArgs
		},
		func(ctx context.Context, userIDs []string) ([]*model_struct.LocalGroupMember, error) {
			serverGroupMember, err := g.GetDesignatedGroupMembers(ctx, groupID, userIDs)
			if err != nil {
				return nil, err
			}
			return datautil.Batch(ServerGroupMemberToLocalGroupMember, serverGroupMember), nil
		},
	)
	switch filter {
	case constant.GroupFilterOrdinaryUsers:
		groupOwnerAndGroupMember, err := g.db.GetGroupMemberListSplit(ctx, groupID, constant.GroupFilterOwnerAndAdmin, 0, 100)
		if err != nil {
			return nil, err
		}
		offset = offset + int32(len(groupOwnerAndGroupMember))
	case constant.GroupFilterAdminAndOrdinaryUsers:
		groupOwnerAndGroupMember, err := g.db.GetGroupMemberListSplit(ctx, groupID, constant.GroupFilterOwner, 0, 100)
		if err != nil {
			return nil, err
		}
		offset = offset + int32(len(groupOwnerAndGroupMember))
	}
	return dataFetcher.FetchWithPagination(ctx, int(offset), int(count))
}

func (g *Group) GetGroupRequest(ctx context.Context, req *sdkpb.GetGroupRequestReq) (*sdkpb.GetGroupRequestResp, error) {
	var requests []*sdkpb.GroupRequest
	if req.Send {
		res, err := g.db.GetSendGroupApplication(ctx)
		if err != nil {
			return nil, err
		}
		requests = datautil.Batch(DBGroupRequestToSdk, res)
	} else {
		res, err := g.db.GetAdminGroupApplication(ctx)
		if err != nil {
			return nil, err
		}
		requests = datautil.Batch(DBAdminGroupRequestToSdk, res)
	}
	return &sdkpb.GetGroupRequestResp{Requests: requests}, nil
}

func (g *Group) SearchGroupMembers(ctx context.Context, searchParam *sdk_params_callback.SearchGroupMembersParam) ([]*model_struct.LocalGroupMember, error) {
	// todo
	return g.db.SearchGroupMembersDB(ctx, searchParam.KeywordList[0], searchParam.GroupID, searchParam.IsSearchMemberNickname, searchParam.IsSearchUserID, searchParam.Offset, searchParam.Count)
}

func (g *Group) IsJoinGroup(ctx context.Context, req *sdkpb.IsJoinGroupReq) (*sdkpb.IsJoinGroupResp, error) {
	g.groupSyncMutex.Lock()
	defer g.groupSyncMutex.Unlock()

	lvs, err := g.db.GetVersionSync(ctx, g.groupTableName(), g.loginUserID)
	if err != nil {
		return &sdkpb.IsJoinGroupResp{Joined: false}, err
	}
	if datautil.Contain(req.GroupID, lvs.UIDList...) {
		return &sdkpb.IsJoinGroupResp{Joined: true}, err
	}
	return &sdkpb.IsJoinGroupResp{Joined: false}, err
}

func (g *Group) GetUsersInGroup(ctx context.Context, req *sdkpb.GetUsersInGroupReq) (*sdkpb.GetUsersInGroupResp, error) {
	g.groupSyncMutex.Lock()
	defer g.groupSyncMutex.Unlock()

	lvs, err := g.db.GetVersionSync(ctx, g.groupTableName(), g.loginUserID)
	if err != nil {
		return nil, err
	}
	if !datautil.Contain(req.GroupID, lvs.UIDList...) {
		return &sdkpb.GetUsersInGroupResp{}, nil
	}
	lvs, err = g.db.GetVersionSync(ctx, g.groupAndMemberVersionTableName(), req.GroupID)
	if err != nil {
		return nil, err
	}

	groupMembersMap := datautil.SliceSetAny(lvs.UIDList, func(e string) string {
		return e
	})

	var usersInGroup []string
	for _, userID := range req.UserIDs {
		if _, exists := groupMembersMap[userID]; exists {
			usersInGroup = append(usersInGroup, userID)
		}
	}

	return &sdkpb.GetUsersInGroupResp{UserIDs: usersInGroup}, nil
}

func (g *Group) InviteUserToGroup(ctx context.Context, req *sdkpb.InviteUserToGroupReq) (*sdkpb.InviteUserToGroupResp, error) {
	if err := g.inviteUserToGroup(ctx, &group.InviteUserToGroupReq{GroupID: req.GroupID, Reason: req.Reason, InvitedUserIDs: req.UserIDs}); err != nil {
		return nil, err
	}

	g.groupSyncMutex.Lock()
	defer g.groupSyncMutex.Unlock()

	if err := g.IncrSyncGroupAndMember(ctx, req.GroupID); err != nil {
		return nil, err
	}
	return &sdkpb.InviteUserToGroupResp{}, nil
}

func (g *Group) HandlerGroupRequest(ctx context.Context, req *sdkpb.HandlerGroupRequestReq) (*sdkpb.HandlerGroupRequestResp, error) {
	var result int32
	if req.Refuse {
		result = constant.GroupResponseRefuse
	} else {
		result = constant.GroupResponseAgree
	}
	if err := g.handlerGroupApplication(ctx, &group.GroupApplicationResponseReq{GroupID: req.GroupID, FromUserID: req.FromUserID, HandledMsg: req.HandledMsg, HandleResult: result}); err != nil {
		return nil, err
	}
	return &sdkpb.HandlerGroupRequestResp{}, nil
}

func (g *Group) GetGroupMemberInfo(ctx context.Context, req *sdkpb.GetGroupMemberInfoReq) (*sdkpb.GetGroupMemberInfoResp, error) {
	members, err := g.GetGroupMembersInfo(ctx, req.GroupID, req.UserIDs)
	if err != nil {
		return nil, err
	}
	res := make(map[string]*sdkpb.GroupMemberInfo)
	for userID, member := range members {
		res[userID] = DBGroupMemberToSdk(member)
	}
	return &sdkpb.GetGroupMemberInfoResp{Members: res}, nil
}
