package relation

import (
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto"
	"github.com/openimsdk/protocol/sdkws"
)

func ServerFriendRequestToLocalFriendRequest(info *sdkws.FriendRequest) *model_struct.LocalFriendRequest {
	return &model_struct.LocalFriendRequest{
		FromUserID:   info.FromUserID,
		FromNickname: info.FromNickname,
		FromFaceURL:  info.FromFaceURL,
		//FromGender:    info.FromGender,
		ToUserID:   info.ToUserID,
		ToNickname: info.ToNickname,
		ToFaceURL:  info.ToFaceURL,
		//ToGender:      info.ToGender,
		HandleResult:  info.HandleResult,
		ReqMsg:        info.ReqMsg,
		CreateTime:    info.CreateTime,
		HandlerUserID: info.HandlerUserID,
		HandleMsg:     info.HandleMsg,
		HandleTime:    info.HandleTime,
		Ex:            info.Ex,
		//AttachedInfo:  info.AttachedInfo,
	}
}

func ServerFriendToLocalFriend(info *sdkws.FriendInfo) *model_struct.LocalFriend {
	return &model_struct.LocalFriend{
		OwnerUserID:    info.OwnerUserID,
		FriendUserID:   info.FriendUser.UserID,
		Remark:         info.Remark,
		CreateTime:     info.CreateTime,
		AddSource:      info.AddSource,
		OperatorUserID: info.OperatorUserID,
		Nickname:       info.FriendUser.Nickname,
		FaceURL:        info.FriendUser.FaceURL,
		Ex:             info.Ex,
		//AttachedInfo:   info.FriendUser.AttachedInfo,
		IsPinned: info.IsPinned,
	}
}

func ServerBlackToLocalBlack(info *sdkws.BlackInfo) *model_struct.LocalBlack {
	return &model_struct.LocalBlack{
		OwnerUserID:    info.OwnerUserID,
		BlockUserID:    info.BlackUserInfo.UserID,
		CreateTime:     info.CreateTime,
		AddSource:      info.AddSource,
		OperatorUserID: info.OperatorUserID,
		Nickname:       info.BlackUserInfo.Nickname,
		FaceURL:        info.BlackUserInfo.FaceURL,
		Ex:             info.Ex,
		//AttachedInfo:   info.FriendUser.AttachedInfo,
	}
}

func DbFriendToSdk(info *model_struct.LocalFriend) *sdkpb.IMFriend {
	return &sdkpb.IMFriend{
		OwnerUserID:    info.OwnerUserID,
		FriendUserID:   info.FriendUserID,
		Remark:         info.Remark,
		CreateTime:     info.CreateTime,
		AddSource:      info.AddSource,
		OperatorUserID: info.OperatorUserID,
		Nickname:       info.Nickname,
		FaceURL:        info.FaceURL,
		Ex:             info.Ex,
		AttachedInfo:   info.AttachedInfo,
		IsPinned:       info.IsPinned,
	}
}

func DbFriendRequestToSdk(info *model_struct.LocalFriendRequest) *sdkpb.IMFriendRequest {
	return &sdkpb.IMFriendRequest{
		FromUserID:    info.FromUserID,
		FromNickname:  info.FromNickname,
		FromFaceURL:   info.FromFaceURL,
		ToUserID:      info.ToUserID,
		ToNickname:    info.ToNickname,
		ToFaceURL:     info.ToFaceURL,
		HandleResult:  info.HandleResult,
		ReqMsg:        info.ReqMsg,
		CreateTime:    info.CreateTime,
		HandlerUserID: info.HandlerUserID,
		HandleMsg:     info.HandleMsg,
		HandleTime:    info.HandleTime,
		Ex:            info.Ex,
		Attached:      info.AttachedInfo,
	}
}

func DbBlackToSdk(info *model_struct.LocalBlack) *sdkpb.IMBlack {
	return &sdkpb.IMBlack{
		OwnerUserID:    info.OwnerUserID,
		BlockUserID:    info.BlockUserID,
		Nickname:       info.Nickname,
		FaceURL:        info.FaceURL,
		CreateTime:     info.CreateTime,
		AddSource:      info.AddSource,
		OperatorUserID: info.OperatorUserID,
		Ex:             info.Ex,
		Attached:       info.AttachedInfo,
	}
}
