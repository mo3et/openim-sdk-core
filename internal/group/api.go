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
	"time"

	"github.com/openimsdk/protocol/sdkws"
	"github.com/openimsdk/protocol/wrapperspb"

	"github.com/openimsdk/tools/errs"

	"github.com/openimsdk/tools/utils/datautil"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/datafetcher"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/constant"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"

	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/group"
	sharedpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
	"github.com/openimsdk/protocol/group"
)

func (g *Group) CreateGroup(ctx context.Context, req *sdkpb.CreateGroupReq) (*sharedpb.IMGroup, error) {
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
			Status:                 int32(req.GroupInfo.Status),
			CreatorUserID:          req.GroupInfo.CreatorUserID,
			GroupType:              constant.WorkingGroup,
			NeedVerification:       int32(req.GroupInfo.NeedVerification),
			LookMemberInfo:         int32(req.GroupInfo.LookMemberInfo),
			ApplyMemberFriend:      int32(req.GroupInfo.ApplyMemberFriend),
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
	if err := g.joinGroup(ctx, &group.JoinGroupReq{GroupID: req.GroupID, ReqMessage: req.ReqMessage, JoinSource: int32(req.JoinSource), InviterUserID: g.loginUserID, Ex: req.Ex}); err != nil {
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
		GroupName:         wrapperspb.StringPtr(req.GroupName),
		Notification:      wrapperspb.StringPtr(req.Notification),
		Introduction:      wrapperspb.StringPtr(req.Introduction),
		FaceURL:           wrapperspb.StringPtr(req.FaceURL),
		Ex:                wrapperspb.StringPtr(req.Ex),
		NeedVerification:  wrapperspb.Int32Ptr((*int32)(req.NeedVerification)),
		LookMemberInfo:    wrapperspb.Int32Ptr((*int32)(req.LookMemberInfo)),
		ApplyMemberFriend: wrapperspb.Int32Ptr((*int32)(req.ApplyMemberFriend)),
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
		Nickname:  wrapperspb.StringPtr(req.Nickname),
		FaceURL:   wrapperspb.StringPtr(req.FaceURL),
		RoleLevel: wrapperspb.Int32Ptr((*int32)(req.RoleLevel)),
		Ex:        wrapperspb.StringPtr(req.Ex),
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

func (g *Group) GetJoinedGroupsPage(ctx context.Context, req *sdkpb.GetJoinedGroupsPageReq) (*sdkpb.GetJoinedGroupsPageResp, error) {
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
	res, err := dataFetcher.FetchWithPagination(ctx, int(req.Pagination.PageNumber), int(req.Pagination.ShowNumber))
	if err != nil {
		return nil, err
	}
	return &sdkpb.GetJoinedGroupsPageResp{Groups: datautil.Batch(DBGroupToSdk, res)}, nil
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

func (g *Group) GetGroupMembersByJoinTimeFilter(ctx context.Context, req *sdkpb.GetGroupMembersByJoinTimeFilterReq) (*sdkpb.GetGroupMembersByJoinTimeFilterResp, error) {
	if req.JoinTimeEnd == 0 {
		req.JoinTimeEnd = time.Now().UnixMilli()
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
			localGroupMembers, err := g.db.GetGroupMemberListSplitByJoinTimeFilter(ctx, req.GroupID, int(req.Pagination.PageNumber), int(req.Pagination.ShowNumber), req.JoinTimeBegin, req.JoinTimeEnd, userIDs)
			return localGroupMembers, true, err
		},
		func(ctx context.Context, userIDs []string) ([]*model_struct.LocalGroupMember, error) {
			serverGroupMember, err := g.GetDesignatedGroupMembers(ctx, req.GroupID, userIDs)
			if err != nil {
				return nil, err
			}
			return datautil.Batch(ServerGroupMemberToLocalGroupMember, serverGroupMember), nil
		},
	)
	res, err := dataFetcher.FetchWithPagination(ctx, int(req.Pagination.PageNumber), int(req.Pagination.ShowNumber))
	if err != nil {
		return nil, err
	}
	return &sdkpb.GetGroupMembersByJoinTimeFilterResp{Members: datautil.Batch(DBGroupMemberToSdk, res)}, nil
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

func (g *Group) GetGroupMembers(ctx context.Context, req *sdkpb.GetGroupMembersReq) (*sdkpb.GetGroupMembersResp, error) {
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
		return &sdkpb.GetGroupMembersResp{}, nil
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
			localGroupMembers, err := g.db.GetGroupMemberListByUserIDs(ctx, req.GroupID, int32(req.Filter), userIDs)
			if err != nil {
				return nil, false, err
			}
			switch req.Filter {
			case sdkpb.GroupMemberFilter_Owner:
				fallthrough
			case sdkpb.GroupMemberFilter_Admin:
				fallthrough
			case sdkpb.GroupMemberFilter_OwnerAndAdmin:
				return localGroupMembers, false, nil
			case sdkpb.GroupMemberFilter_All:
				fallthrough
			case sdkpb.GroupMemberFilter_OrdinaryUsers:
				fallthrough
			case sdkpb.GroupMemberFilter_AdminAndOrdinaryUsers:
				return localGroupMembers, true, nil
			}
			return nil, false, sdkerrs.ErrArgs
		},
		func(ctx context.Context, userIDs []string) ([]*model_struct.LocalGroupMember, error) {
			serverGroupMember, err := g.GetDesignatedGroupMembers(ctx, req.GroupID, userIDs)
			if err != nil {
				return nil, err
			}
			return datautil.Batch(ServerGroupMemberToLocalGroupMember, serverGroupMember), nil
		},
	)
	var offset int32
	switch req.Filter {
	case sdkpb.GroupMemberFilter_OrdinaryUsers:
		groupOwnerAndGroupMember, err := g.db.GetGroupMemberListSplit(ctx, req.GroupID, constant.GroupFilterOwnerAndAdmin, 0, 100)
		if err != nil {
			return nil, err
		}
		offset = req.Pagination.PageNumber + int32(len(groupOwnerAndGroupMember))
	case sdkpb.GroupMemberFilter_AdminAndOrdinaryUsers:
		groupOwnerAndGroupMember, err := g.db.GetGroupMemberListSplit(ctx, req.GroupID, constant.GroupFilterOwner, 0, 100)
		if err != nil {
			return nil, err
		}
		offset = req.Pagination.PageNumber + int32(len(groupOwnerAndGroupMember))
	}
	res, err := dataFetcher.FetchWithPagination(ctx, int(offset), int(req.Pagination.ShowNumber))
	if err != nil {
		return nil, err
	}
	return &sdkpb.GetGroupMembersResp{Members: datautil.Batch(DBGroupMemberToSdk, res)}, nil
}

func (g *Group) GetGroupApplication(ctx context.Context, req *sdkpb.GetGroupApplicationReq) (*sdkpb.GetGroupApplicationResp, error) {
	var requests []*sharedpb.IMGroupApplication
	if req.Send {
		res, err := g.db.GetSendGroupApplication(ctx)
		if err != nil {
			return nil, err
		}
		requests = datautil.Batch(DBGroupRequestToIMGroupApplication, res)
	} else {
		res, err := g.db.GetAdminGroupApplication(ctx)
		if err != nil {
			return nil, err
		}
		requests = datautil.Batch(DBAdminGroupRequestToSdk, res)
	}
	return &sdkpb.GetGroupApplicationResp{Applications: requests}, nil
}

func (g *Group) SearchGroupMembers(ctx context.Context, req *sdkpb.SearchGroupMembersReq) (*sdkpb.SearchGroupMembersResp, error) {
	res, err := g.db.SearchGroupMembersDB(ctx, req.Keyword, req.GroupID, req.SearchMemberNickname, req.SearchUserID, int(req.Pagination.PageNumber), int(req.Pagination.ShowNumber))
	if err != nil {
		return nil, err
	}
	return &sdkpb.SearchGroupMembersResp{Members: datautil.Batch(DBGroupMemberToSdk, res)}, nil
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

func (g *Group) HandleGroupApplication(ctx context.Context, req *sdkpb.HandleGroupApplicationReq) (*sdkpb.HandleGroupApplicationResp, error) {
	if err := g.handlerGroupApplication(ctx, &group.GroupApplicationResponseReq{GroupID: req.GroupID, FromUserID: req.FromUserID, HandledMsg: req.HandledMsg, HandleResult: int32(req.Status)}); err != nil {
		return nil, err
	}
	return &sdkpb.HandleGroupApplicationResp{}, nil
}
