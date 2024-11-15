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
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"

	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto"
	"github.com/openimsdk/protocol/sdkws"
)

func ServerGroupToLocalGroup(info *sdkws.GroupInfo) *model_struct.LocalGroup {
	return &model_struct.LocalGroup{
		GroupID:                info.GroupID,
		GroupName:              info.GroupName,
		Notification:           info.Notification,
		Introduction:           info.Introduction,
		FaceURL:                info.FaceURL,
		CreateTime:             info.CreateTime,
		Status:                 info.Status,
		CreatorUserID:          info.CreatorUserID,
		GroupType:              info.GroupType,
		OwnerUserID:            info.OwnerUserID,
		MemberCount:            int32(info.MemberCount),
		Ex:                     info.Ex,
		NeedVerification:       info.NeedVerification,
		LookMemberInfo:         info.LookMemberInfo,
		ApplyMemberFriend:      info.ApplyMemberFriend,
		NotificationUpdateTime: info.NotificationUpdateTime,
		NotificationUserID:     info.NotificationUserID,
		//AttachedInfo:           info.AttachedInfo, // TODO
	}
}

func ServerGroupMemberToLocalGroupMember(info *sdkws.GroupMemberFullInfo) *model_struct.LocalGroupMember {
	return &model_struct.LocalGroupMember{
		GroupID:        info.GroupID,
		UserID:         info.UserID,
		Nickname:       info.Nickname,
		FaceURL:        info.FaceURL,
		RoleLevel:      info.RoleLevel,
		JoinTime:       info.JoinTime,
		JoinSource:     info.JoinSource,
		InviterUserID:  info.InviterUserID,
		MuteEndTime:    info.MuteEndTime,
		OperatorUserID: info.OperatorUserID,
		Ex:             info.Ex,
		//AttachedInfo:   info.AttachedInfo, // todo
	}
}

func ServerGroupRequestToLocalGroupRequest(info *sdkws.GroupRequest) *model_struct.LocalGroupRequest {
	return &model_struct.LocalGroupRequest{
		GroupID:       info.GroupInfo.GroupID,
		GroupName:     info.GroupInfo.GroupName,
		Notification:  info.GroupInfo.Notification,
		Introduction:  info.GroupInfo.Introduction,
		GroupFaceURL:  info.GroupInfo.FaceURL,
		CreateTime:    info.GroupInfo.CreateTime,
		Status:        info.GroupInfo.Status,
		CreatorUserID: info.GroupInfo.CreatorUserID,
		GroupType:     info.GroupInfo.GroupType,
		OwnerUserID:   info.GroupInfo.OwnerUserID,
		MemberCount:   int32(info.GroupInfo.MemberCount),
		UserID:        info.UserInfo.UserID,
		Nickname:      info.UserInfo.Nickname,
		UserFaceURL:   info.UserInfo.FaceURL,
		//Gender:        info.UserInfo.Gender,
		HandleResult: info.HandleResult,
		ReqMsg:       info.ReqMsg,
		HandledMsg:   info.HandleMsg,
		ReqTime:      info.ReqTime,
		HandleUserID: info.HandleUserID,
		HandledTime:  info.HandleTime,
		Ex:           info.Ex,
		//AttachedInfo:  info.AttachedInfo,
		JoinSource:    info.JoinSource,
		InviterUserID: info.InviterUserID,
	}
}

func ServerGroupRequestToLocalAdminGroupRequest(info *sdkws.GroupRequest) *model_struct.LocalAdminGroupRequest {
	return &model_struct.LocalAdminGroupRequest{
		LocalGroupRequest: *ServerGroupRequestToLocalGroupRequest(info),
	}
}

func ServerGroupToSdk(info *sdkws.GroupInfo) *sdkpb.GroupInfo {
	return &sdkpb.GroupInfo{
		GroupID:                info.GroupID,
		GroupName:              info.GroupName,
		Notification:           info.Notification,
		Introduction:           info.Introduction,
		FaceURL:                info.FaceURL,
		OwnerUserID:            info.OwnerUserID,
		CreateTime:             info.CreateTime,
		MemberCount:            int64(info.MemberCount),
		Ex:                     info.Ex,
		Status:                 info.Status,
		CreatorUserID:          info.CreatorUserID,
		NeedVerification:       info.NeedVerification,
		LookMemberInfo:         info.LookMemberInfo,
		ApplyMemberFriend:      info.ApplyMemberFriend,
		NotificationUpdateTime: info.NotificationUpdateTime,
		NotificationUserID:     info.NotificationUserID,
	}
}

func DBGroupToSdk(info *model_struct.LocalGroup) *sdkpb.GroupInfo {
	return &sdkpb.GroupInfo{
		GroupID:                info.GroupID,
		GroupName:              info.GroupName,
		Notification:           info.Notification,
		Introduction:           info.Introduction,
		FaceURL:                info.FaceURL,
		CreateTime:             info.CreateTime,
		Status:                 info.Status,
		CreatorUserID:          info.CreatorUserID,
		OwnerUserID:            info.OwnerUserID,
		MemberCount:            int64(info.MemberCount),
		Ex:                     info.Ex,
		AttachedInfo:           info.AttachedInfo,
		NeedVerification:       info.NeedVerification,
		LookMemberInfo:         info.LookMemberInfo,
		ApplyMemberFriend:      info.ApplyMemberFriend,
		NotificationUpdateTime: info.NotificationUpdateTime,
		NotificationUserID:     info.NotificationUserID,
	}
}

func DBGroupMemberToSdk(info *model_struct.LocalGroupMember) *sdkpb.GroupMemberInfo {
	return &sdkpb.GroupMemberInfo{
		GroupID:        info.GroupID,
		UserID:         info.UserID,
		Nickname:       info.Nickname,
		FaceURL:        info.FaceURL,
		RoleLevel:      info.RoleLevel,
		JoinTime:       info.JoinTime,
		JoinSource:     info.JoinSource,
		InviterUserID:  info.InviterUserID,
		MuteEndTime:    info.MuteEndTime,
		OperatorUserID: info.OperatorUserID,
		Ex:             info.Ex,
		AttachedInfo:   info.AttachedInfo,
	}
}

func DBGroupRequestToSdk(info *model_struct.LocalGroupRequest) *sdkpb.GroupRequest {
	return &sdkpb.GroupRequest{
		GroupID:       info.GroupID,
		GroupName:     info.GroupName,
		Notification:  info.Notification,
		Introduction:  info.Introduction,
		GroupFaceURL:  info.GroupFaceURL,
		CreateTime:    info.CreateTime,
		Status:        info.Status,
		CreatorUserID: info.CreatorUserID,
		GroupType:     info.GroupType,
		OwnerUserID:   info.OwnerUserID,
		MemberCount:   info.MemberCount,
		UserID:        info.UserID,
		Nickname:      info.Nickname,
		UserFaceURL:   info.UserFaceURL,
		HandleResult:  info.HandleResult,
		ReqMsg:        info.ReqMsg,
		HandledMsg:    info.HandledMsg,
		ReqTime:       info.ReqTime,
		HandleUserID:  info.HandleUserID,
		HandledTime:   info.HandledTime,
		Ex:            info.Ex,
		AttachedInfo:  info.AttachedInfo,
		JoinSource:    info.JoinSource,
		InviterUserID: info.InviterUserID,
	}
}

func DBAdminGroupRequestToSdk(info *model_struct.LocalAdminGroupRequest) *sdkpb.GroupRequest {
	return DBGroupRequestToSdk(&info.LocalGroupRequest)
}
