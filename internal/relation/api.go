package relation

import (
	"context"

	commonpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/relation"

	"github.com/openimsdk/protocol/wrapperspb"

	"github.com/openimsdk/protocol/relation"
	"github.com/openimsdk/tools/utils/datautil"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/datafetcher"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	"github.com/openimsdk/tools/log"
)

func (r *Relation) GetSpecifiedFriends(ctx context.Context, req *sdkpb.GetSpecifiedFriendsReq) (*sdkpb.GetSpecifiedFriendsResp, error) {
	dataFetcher := datafetcher.NewDataFetcher(
		r.db,
		r.friendListTableName(),
		r.loginUserID,
		func(localFriend *model_struct.LocalFriend) string {
			return localFriend.FriendUserID
		},
		func(ctx context.Context, values []*model_struct.LocalFriend) error {
			return r.db.BatchInsertFriend(ctx, values)
		},
		func(ctx context.Context, userIDs []string) ([]*model_struct.LocalFriend, bool, error) {
			localFriends, err := r.db.GetFriendInfoList(ctx, userIDs)
			return localFriends, true, err
		},
		func(ctx context.Context, userIDs []string) ([]*model_struct.LocalFriend, error) {
			serverFriend, err := r.GetDesignatedFriends(ctx, userIDs)
			if err != nil {
				return nil, err
			}
			return datautil.Batch(ServerFriendToLocalFriend, serverFriend), nil
		},
	)
	localFriendList, err := dataFetcher.FetchMissingAndFillLocal(ctx, req.FriendUserIDs)
	if err != nil {
		return nil, err
	}
	if !req.FilterBlack {
		return &sdkpb.GetSpecifiedFriendsResp{Friends: datautil.Batch(DbFriendToSdk, localFriendList)}, nil
	}
	log.ZDebug(ctx, "GetDesignatedFriendsInfo", "localFriendList", localFriendList)
	blackList, err := r.db.GetBlackInfoList(ctx, req.FriendUserIDs)
	if err != nil {
		return nil, err
	}
	if len(blackList) == 0 {
		return &sdkpb.GetSpecifiedFriendsResp{Friends: datautil.Batch(DbFriendToSdk, localFriendList)}, nil
	}

	log.ZDebug(ctx, "GetDesignatedFriendsInfo", "blackList", blackList)
	m := datautil.SliceSetAny(blackList, func(e *model_struct.LocalBlack) string {
		return e.BlockUserID
	})
	var res []*model_struct.LocalFriend
	for _, localFriend := range localFriendList {
		if _, ok := m[localFriend.FriendUserID]; !ok {
			res = append(res, localFriend)
		}
	}
	return &sdkpb.GetSpecifiedFriendsResp{Friends: datautil.Batch(DbFriendToSdk, res)}, nil
}

func (r *Relation) AddFriend(ctx context.Context, req *sdkpb.AddFriendReq) (*sdkpb.AddFriendResp, error) {
	if err := r.addFriend(ctx, &relation.ApplyToAddFriendReq{ToUserID: req.UserID, ReqMsg: req.ReqMsg, Ex: req.Ex}); err != nil {
		return nil, err
	}
	r.relationSyncMutex.Lock()
	defer r.relationSyncMutex.Unlock()
	if err := r.SyncAllSelfFriendApplication(ctx); err != nil {
		return nil, err
	}
	return &sdkpb.AddFriendResp{}, nil
}

func (r *Relation) GetFriendRequests(ctx context.Context, req *sdkpb.GetFriendRequestsReq) (*sdkpb.GetFriendRequestsResp, error) {
	var (
		request []*model_struct.LocalFriendRequest
		err     error
	)
	if req.Send {
		request, err = r.db.GetSendFriendApplication(ctx)
	} else {
		request, err = r.db.GetRecvFriendApplication(ctx)
	}
	if err != nil {
		return nil, err
	}
	return &sdkpb.GetFriendRequestsResp{Requests: datautil.Batch(DbFriendRequestToSdk, request)}, nil
}

func (r *Relation) HandlerFriendRequest(ctx context.Context, req *sdkpb.HandlerFriendRequestReq) (*sdkpb.HandlerFriendRequestResp, error) {
	if err := r.addFriendResponse(ctx, &relation.RespondFriendApplyReq{FromUserID: req.UserID, HandleResult: int32(req.Status), HandleMsg: req.HandleMsg}); err != nil {
		return nil, err
	}
	r.relationSyncMutex.Lock()
	defer r.relationSyncMutex.Unlock()

	if req.Status == commonpb.ApprovalStatus_Approved {
		_ = r.IncrSyncFriends(ctx)
	}
	_ = r.SyncAllFriendApplication(ctx)
	return &sdkpb.HandlerFriendRequestResp{}, nil
}

func (r *Relation) CheckFriend(ctx context.Context, req *sdkpb.CheckFriendReq) (*sdkpb.CheckFriendResp, error) {
	friendList, err := r.db.GetFriendInfoList(ctx, req.FriendUserIDs)
	if err != nil {
		return nil, err
	}
	blackList, err := r.db.GetBlackInfoList(ctx, req.FriendUserIDs)
	if err != nil {
		return nil, err
	}
	res := make([]*sdkpb.CheckFriendInfo, 0, len(req.FriendUserIDs))
	for _, v := range req.FriendUserIDs {
		var r sdkpb.CheckFriendInfo
		isBlack := false
		isFriend := false
		for _, b := range blackList {
			if v == b.BlockUserID {
				isBlack = true
				break
			}
		}
		for _, r := range friendList {
			if v == r.FriendUserID {
				isFriend = true
				break
			}
		}
		r.UserID = v
		if isFriend && !isBlack {
			r.Result = 1
		} else {
			r.Result = 0
		}
		res = append(res, &r)
	}
	return &sdkpb.CheckFriendResp{Result: res}, nil
}

func (r *Relation) DeleteFriend(ctx context.Context, req *sdkpb.DeleteFriendReq) (*sdkpb.DeleteFriendResp, error) {
	if err := r.deleteFriend(ctx, req.UserID); err != nil {
		return nil, err
	}

	r.relationSyncMutex.Lock()
	defer r.relationSyncMutex.Unlock()
	if err := r.IncrSyncFriends(ctx); err != nil {
		return nil, err
	}
	return &sdkpb.DeleteFriendResp{}, nil
}

func (r *Relation) GetFriends(ctx context.Context, req *sdkpb.GetFriendsReq) (*sdkpb.GetFriendsResp, error) {
	localFriendList, err := r.db.GetAllFriendList(ctx)
	if err != nil {
		return nil, err
	}
	if len(localFriendList) == 0 || !req.FilterBlack {
		return &sdkpb.GetFriendsResp{Friends: datautil.Batch(DbFriendToSdk, localFriendList)}, nil
	}
	localBlackList, err := r.db.GetBlackListDB(ctx)
	if err != nil {
		return nil, err
	}
	if len(localBlackList) == 0 {
		return &sdkpb.GetFriendsResp{Friends: datautil.Batch(DbFriendToSdk, localFriendList)}, nil
	}
	blackSet := datautil.SliceSetAny(localBlackList, func(e *model_struct.LocalBlack) string {
		return e.BlockUserID
	})
	var res []*model_struct.LocalFriend
	for _, friend := range localFriendList {
		if _, ok := blackSet[friend.FriendUserID]; !ok {
			res = append(res, friend)
		}
	}
	return &sdkpb.GetFriendsResp{Friends: datautil.Batch(DbFriendToSdk, res)}, nil
}

func (r *Relation) GetFriendsPage(ctx context.Context, req *sdkpb.GetFriendsPageReq) (*sdkpb.GetFriendsPageResp, error) {
	dataFetcher := datafetcher.NewDataFetcher(
		r.db,
		r.friendListTableName(),
		r.loginUserID,
		func(localFriend *model_struct.LocalFriend) string {
			return localFriend.FriendUserID
		},
		func(ctx context.Context, values []*model_struct.LocalFriend) error {
			return r.db.BatchInsertFriend(ctx, values)
		},
		func(ctx context.Context, userIDs []string) ([]*model_struct.LocalFriend, bool, error) {
			localFriendList, err := r.db.GetFriendInfoList(ctx, userIDs)
			return localFriendList, true, err
		},
		func(ctx context.Context, userIDs []string) ([]*model_struct.LocalFriend, error) {
			serverFriend, err := r.GetDesignatedFriends(ctx, userIDs)
			if err != nil {
				return nil, err
			}
			return datautil.Batch(ServerFriendToLocalFriend, serverFriend), nil
		},
	)
	localBlackList, err := r.db.GetBlackListDB(ctx)
	if err != nil {
		return nil, err
	}
	if (!req.FilterBlack) || len(localBlackList) == 0 {
		res, err := dataFetcher.FetchWithPagination(ctx, int(req.Pagination.Offset()), int(req.Pagination.ShowNumber))
		if err != nil {
			return nil, err
		}
		return &sdkpb.GetFriendsPageResp{Friends: datautil.Batch(DbFriendToSdk, res)}, nil
	}
	localFriendList, err := dataFetcher.FetchWithPagination(ctx, int(req.Pagination.Offset()), int(req.Pagination.ShowNumber)*2)
	if err != nil {
		return nil, err
	}
	blackUserIDs := datautil.SliceSetAny(localBlackList, func(e *model_struct.LocalBlack) string {
		return e.BlockUserID
	})
	res := localFriendList[:0]
	for _, friend := range localFriendList {
		if _, ok := blackUserIDs[friend.FriendUserID]; !ok {
			res = append(res, friend)
		}
		if len(res) == int(req.Pagination.ShowNumber) {
			break
		}
	}
	return &sdkpb.GetFriendsPageResp{Friends: datautil.Batch(DbFriendToSdk, res)}, nil
}

func (r *Relation) SearchFriends(ctx context.Context, req *sdkpb.SearchFriendsReq) (*sdkpb.SearchFriendsResp, error) {
	if !req.SearchNickname && !req.SearchUserID && !req.SearchRemark {
		return nil, sdkerrs.ErrArgs.WrapMsg("keyword is null or search field all false")
	}
	localFriendList, err := r.db.SearchFriendList(ctx, req.Keyword, req.SearchUserID, req.SearchNickname, req.SearchRemark)
	if err != nil {
		return nil, err
	}
	localBlackList, err := r.db.GetBlackListDB(ctx)
	if err != nil {
		return nil, err
	}
	m := make(map[string]struct{})
	for _, black := range localBlackList {
		m[black.BlockUserID] = struct{}{}
	}
	res := make([]*sdkpb.SearchFriendsInfo, 0, len(localFriendList))
	for _, localFriend := range localFriendList {
		var relationship sdkpb.Relationship
		if _, ok := m[localFriend.FriendUserID]; ok {
			relationship = sdkpb.Relationship_Black
		} else {
			relationship = sdkpb.Relationship_Friend
		}
		res = append(res, &sdkpb.SearchFriendsInfo{
			Friend:       DbFriendToSdk(localFriend),
			Relationship: relationship,
		})
	}
	return &sdkpb.SearchFriendsResp{Friends: res}, nil
}

func (r *Relation) AddBlack(ctx context.Context, req *sdkpb.AddBlackReq) (*sdkpb.AddBlackResp, error) {
	if err := r.addBlack(ctx, &relation.AddBlackReq{BlackUserID: req.UserID, Ex: req.Ex}); err != nil {
		return nil, err
	}
	if err := r.SyncAllBlackList(ctx); err != nil {
		return nil, err
	}
	return &sdkpb.AddBlackResp{}, nil
}

func (r *Relation) DeleteBlack(ctx context.Context, req *sdkpb.DeleteBlackReq) (*sdkpb.DeleteBlackResp, error) {
	if err := r.removeBlack(ctx, req.UserID); err != nil {
		return nil, err
	}

	r.relationSyncMutex.Lock()
	defer r.relationSyncMutex.Unlock()
	if err := r.SyncAllBlackList(ctx); err != nil {
		return nil, err
	}
	return &sdkpb.DeleteBlackResp{}, nil
}

func (r *Relation) GetBlacks(ctx context.Context, req *sdkpb.GetBlacksReq) (*sdkpb.GetBlacksResp, error) {
	res, err := r.db.GetBlackListDB(ctx)
	if err != nil {
		return nil, err
	}
	return &sdkpb.GetBlacksResp{Blacks: datautil.Batch(DbBlackToSdk, res)}, nil
}

func (r *Relation) UpdateFriends(ctx context.Context, req *sdkpb.UpdatesFriendsReq) (*sdkpb.UpdatesFriendsResp, error) {
	sReq := &relation.UpdateFriendsReq{FriendUserIDs: []string{req.UserID}, IsPinned: wrapperspb.BoolPtr(req.Pinned), Remark: wrapperspb.StringPtr(req.Remark), Ex: wrapperspb.StringPtr(req.Ex)}
	if err := r.updateFriends(ctx, sReq); err != nil {
		return nil, err
	}

	r.relationSyncMutex.Lock()
	defer r.relationSyncMutex.Unlock()
	if err := r.IncrSyncFriends(ctx); err != nil {
		return nil, err
	}
	return &sdkpb.UpdatesFriendsResp{}, nil
}
