package group

import (
	"context"
	"fmt"
	"github.com/OpenIMSDK/Open-IM-Server/pkg/errs"
	"github.com/OpenIMSDK/Open-IM-Server/pkg/proto/group"
	"github.com/OpenIMSDK/Open-IM-Server/pkg/proto/sdkws"
	"github.com/OpenIMSDK/Open-IM-Server/pkg/proto/wrapperspb"
	"open_im_sdk/internal/util"
	"open_im_sdk/open_im_sdk_callback"
	"open_im_sdk/pkg/common"
	"open_im_sdk/pkg/constant"
	"open_im_sdk/pkg/db/model_struct"
	"open_im_sdk/pkg/log"
	"open_im_sdk/pkg/sdk_params_callback"
	api "open_im_sdk/pkg/server_api_params"
	"open_im_sdk/pkg/utils"
)

func (g *Group) SetGroupListener(callback open_im_sdk_callback.OnGroupListener) {
	if callback == nil {
		return
	}
	g.listener = callback
}

// deprecated use CreateGroupV2
func (g *Group) CreateGroup(ctx context.Context, groupBaseInfo sdk_params_callback.CreateGroupBaseInfoParam, memberList sdk_params_callback.CreateGroupMemberRoleParam) (*sdkws.GroupInfo, error) {
	req := &group.CreateGroupReq{
		GroupInfo: &sdkws.GroupInfo{
			GroupName:    groupBaseInfo.GroupName,
			Notification: groupBaseInfo.Notification,
			Introduction: groupBaseInfo.Introduction,
			FaceURL:      groupBaseInfo.FaceURL,
			Ex:           groupBaseInfo.Ex,
			GroupType:    groupBaseInfo.GroupType,
		},
	}
	if groupBaseInfo.NeedVerification != nil {
		req.GroupInfo.NeedVerification = *groupBaseInfo.NeedVerification
	}
	for _, info := range memberList {
		switch info.RoleLevel {
		case constant.GroupOrdinaryUsers:
			req.InitMembers = append(req.InitMembers, info.UserID)
		case constant.GroupOwner:
			req.OwnerUserID = info.UserID
		case constant.GroupAdmin:
			req.AdminUserIDs = append(req.AdminUserIDs, info.UserID)
		default:
			return nil, errs.ErrArgs.Wrap(fmt.Sprintf("CreateGroupV2: invalid role level %d", info.RoleLevel))
		}
	}
	return g.CreateGroupV2(ctx, req)
}

func (g *Group) CreateGroupV2(ctx context.Context, req *group.CreateGroupReq) (*sdkws.GroupInfo, error) {
	resp, err := util.CallApi[group.CreateGroupResp](ctx, constant.CreateGroupRouter, req)
	if err != nil {
		return nil, err
	}
	if err := g.SyncGroup(ctx, resp.GroupInfo.GroupID); err != nil {
		return nil, err
	}
	return resp.GroupInfo, nil
}

func (g *Group) JoinGroup(ctx context.Context, groupID, reqMsg string, joinSource int32) error {
	if err := util.ApiPost(ctx, constant.JoinGroupRouter, &group.JoinGroupReq{GroupID: groupID, ReqMessage: reqMsg, JoinSource: joinSource}, nil); err != nil {
		return err
	}
	if err := g.SyncSelfGroupApplication(ctx); err != nil {
		return err
	}
	if err := g.SyncGroup(ctx, groupID); err != nil {
		return err
	}
	return nil
}

func (g *Group) QuitGroup(ctx context.Context, groupID string) error {
	if err := util.ApiPost(ctx, constant.QuitGroupRouter, &group.QuitGroupReq{GroupID: groupID}, nil); err != nil {
		return err
	}
	if err := g.SyncGroup(ctx, groupID); err != nil {
		return err
	}
	return nil
}

func (g *Group) DismissGroup(ctx context.Context, groupID string) error {
	if err := util.ApiPost(ctx, constant.DismissGroupRouter, &group.DismissGroupReq{GroupID: groupID}, nil); err != nil {
		return err
	}
	if err := g.SyncGroup(ctx, groupID); err != nil {
		return err
	}
	return nil
}

func (g *Group) ChangeGroupMute(ctx context.Context, groupID string, isMute bool) (err error) {
	if isMute {
		err = util.ApiPost(ctx, constant.MuteGroupRouter, &group.MuteGroupReq{GroupID: groupID}, nil)
	} else {
		err = util.ApiPost(ctx, constant.CancelMuteGroupRouter, &group.CancelMuteGroupReq{GroupID: groupID}, nil)
	}
	if err != nil {
		return err
	}
	//if callback == nil {
	//	return
	//}
	//fName := utils.GetSelfFuncName()
	//go func() {
	//	log.NewInfo(operationID, fName, "args: ", groupID, isMute)
	//	g.changeGroupMute(groupID, isMute, callback, operationID)
	//	callback.OnSuccess(utils.StructToJsonString(sdk_params_callback.GroupMuteChangeCallback))
	//	log.NewInfo(operationID, fName, " callback: ", utils.StructToJsonString(sdk_params_callback.GroupMuteChangeCallback))
	//}()
	return nil
}

func (g *Group) ChangeGroupMemberMute(ctx context.Context, groupID, userID string, mutedSeconds uint32) (err error) {
	if mutedSeconds == 0 {
		err = util.ApiPost(ctx, constant.CancelMuteGroupMemberRouter, &group.CancelMuteGroupMemberReq{GroupID: groupID, UserID: userID}, nil)
	} else {
		err = util.ApiPost(ctx, constant.MuteGroupMemberRouter, &group.MuteGroupMemberReq{GroupID: groupID, UserID: userID, MutedSeconds: mutedSeconds}, nil)
	}
	if err != nil {
		return err
	}
	if err := g.SyncGroup(ctx, groupID); err != nil {
		return err
	}
	return nil
}

func (g *Group) SetGroupMemberRoleLevel(ctx context.Context, groupID, userID string, roleLevel int) error {
	return g.SetGroupMemberInfo(ctx, &group.SetGroupMemberInfo{GroupID: groupID, UserID: userID, RoleLevel: wrapperspb.Int32(int32(roleLevel))})
}

func (g *Group) SetGroupMemberInfo(ctx context.Context, groupMemberInfo *group.SetGroupMemberInfo) error {
	if err := util.ApiPost(ctx, constant.SetGroupMemberInfoRouter, &group.SetGroupMemberInfoReq{Members: []*group.SetGroupMemberInfo{groupMemberInfo}}, nil); err != nil {
		return err
	}
	return g.SyncGroupMember(ctx, groupMemberInfo.GroupID, []string{groupMemberInfo.UserID})
}

func (g *Group) GetJoinedGroupList(ctx context.Context) ([]*model_struct.LocalGroup, error) {
	return g.db.GetJoinedGroupListDB(ctx)
}

func (g *Group) GetGroupsInfo(ctx context.Context, groupIDList []string) ([]*model_struct.LocalGroup, error) {
	groupList, err := g.db.GetJoinedGroupListDB(ctx)
	common.CheckDBErrCallback(callback, err, operationID)
	superGroupList, err := g.db.GetJoinedSuperGroupList()
	common.CheckDBErrCallback(callback, err, operationID)
	if len(superGroupList) > 0 {
		groupList = append(groupList, superGroupList...)
	}
	var result sdk.GetGroupsInfoCallback
	var notInDB []string

	for _, v := range groupList {
		in := false
		for _, k := range groupIDList {
			if v.GroupID == k {
				in = true
				break
			}
		}
		if in {
			result = append(result, v)
		}
	}

	for _, v := range groupIDList {
		in := false
		for _, k := range result {
			if v == k.GroupID {
				in = true
				break
			}
		}
		if !in {
			notInDB = append(notInDB, v)
		}
	}
	if len(notInDB) > 0 {
		groupsInfoSvr, err := g.getGroupsInfoFromSvr(notInDB, operationID)
		log.Info(operationID, "getGroupsInfoFromSvr groupsInfoSvr", groupsInfoSvr)
		common.CheckArgsErrCallback(callback, err, operationID)
		transfer := common.TransferToLocalGroupInfo(groupsInfoSvr)
		result = append(result, transfer...)
	}

	return result

	fName := utils.GetSelfFuncName()
	go func() {
		log.NewInfo(operationID, fName, "args: ", groupIDList)
		var unmarshalGetGroupsInfoParam sdk_params_callback.GetGroupsInfoParam
		common.JsonUnmarshalAndArgsValidate(groupIDList, &unmarshalGetGroupsInfoParam, callback, operationID)
		groupsInfoList := g.getGroupsInfo(unmarshalGetGroupsInfoParam, callback, operationID)
		callback.OnSuccess(utils.StructToJsonStringDefault(groupsInfoList))
		log.NewInfo(operationID, fName, " callback: ", utils.StructToJsonStringDefault(groupsInfoList))

	}()
}

func (g *Group) SearchGroups(callback open_im_sdk_callback.Base, searchParam, operationID string) {
	if callback == nil {
		return
	}
	fName := utils.GetSelfFuncName()
	go func() {
		log.NewInfo(operationID, fName, "args: ", searchParam)
		var unmarshalGetGroupsInfoParam sdk_params_callback.SearchGroupsParam
		common.JsonUnmarshalAndArgsValidate(searchParam, &unmarshalGetGroupsInfoParam, callback, operationID)
		unmarshalGetGroupsInfoParam.KeywordList = utils.TrimStringList(unmarshalGetGroupsInfoParam.KeywordList)
		groupsInfoList := g.searchGroups(callback, unmarshalGetGroupsInfoParam, operationID)
		callback.OnSuccess(utils.StructToJsonStringDefault(groupsInfoList))
		log.NewInfo(operationID, fName, " callback: ", utils.StructToJsonStringDefault(groupsInfoList), len(groupsInfoList))

	}()
}
func (g *Group) SetGroupInfo(callback open_im_sdk_callback.Base, groupInfo string, groupID string, operationID string) {
	if callback == nil {
		return
	}
	fName := utils.GetSelfFuncName()
	go func() {
		log.NewInfo(operationID, fName, "args: ", groupInfo, groupID)
		var unmarshalSetGroupInfoParam sdk_params_callback.SetGroupInfoParam
		common.JsonUnmarshalAndArgsValidate(groupInfo, &unmarshalSetGroupInfoParam, callback, operationID)
		g.setGroupInfo(callback, unmarshalSetGroupInfoParam, groupID, operationID)
		callback.OnSuccess(utils.StructToJsonString(sdk_params_callback.SetGroupInfoCallback))
		log.NewInfo(operationID, fName, " callback: ", utils.StructToJsonString(sdk_params_callback.SetGroupInfoCallback))
	}()
}

//func SetGroupVerification(callback open_im_sdk_callback.Base, operationID string, groupID string, verification int32)

func (g *Group) SetGroupVerification(callback open_im_sdk_callback.Base, verification int32, groupID string, operationID string) {
	if callback == nil {
		return
	}
	fName := utils.GetSelfFuncName()
	go func() {
		log.NewInfo(operationID, fName, "args: ", verification, groupID)
		var unmarshalSetGroupInfoParam sdk_params_callback.SetGroupInfoParam
		n := verification
		unmarshalSetGroupInfoParam.NeedVerification = &n
		g.setGroupInfo(callback, unmarshalSetGroupInfoParam, groupID, operationID)
		callback.OnSuccess(utils.StructToJsonString(sdk_params_callback.SetGroupInfoCallback))
		log.NewInfo(operationID, fName, " callback: ", utils.StructToJsonString(sdk_params_callback.SetGroupInfoCallback))
	}()
}
func (g *Group) SetGroupLookMemberInfo(callback open_im_sdk_callback.Base, rule int32, groupID string, operationID string) {
	if callback == nil {
		return
	}
	fName := utils.GetSelfFuncName()
	go func() {
		log.NewInfo(operationID, fName, "args: ", rule, groupID)
		apiReq := api.SetGroupInfoReq{}
		apiReq.GroupID = groupID
		apiReq.LookMemberInfo = &rule
		apiReq.OperationID = operationID
		g.modifyGroupInfo(callback, apiReq, operationID)
		callback.OnSuccess(utils.StructToJsonString(sdk_params_callback.SetGroupInfoCallback))
		log.NewInfo(operationID, fName, " callback: ", utils.StructToJsonString(sdk_params_callback.SetGroupInfoCallback))
	}()
}
func (g *Group) SetGroupApplyMemberFriend(callback open_im_sdk_callback.Base, rule int32, groupID string, operationID string) {
	if callback == nil {
		return
	}
	fName := utils.GetSelfFuncName()
	go func() {
		log.NewInfo(operationID, fName, "args: ", rule, groupID)
		apiReq := api.SetGroupInfoReq{}
		apiReq.GroupID = groupID
		apiReq.ApplyMemberFriend = &rule
		apiReq.OperationID = operationID
		g.modifyGroupInfo(callback, apiReq, operationID)
		callback.OnSuccess(utils.StructToJsonString(sdk_params_callback.SetGroupInfoCallback))
		log.NewInfo(operationID, fName, " callback: ", utils.StructToJsonString(sdk_params_callback.SetGroupInfoCallback))
	}()
}

func (g *Group) GetGroupMemberList(callback open_im_sdk_callback.Base, groupID string, filter, offset, count int32, operationID string) {
	if callback == nil {
		return
	}
	fName := utils.GetSelfFuncName()
	go func() {
		log.NewInfo(operationID, fName, "args: ", groupID, offset, count)
		groupMemberList := g.getGroupMemberList(callback, groupID, filter, offset, count, operationID)
		callback.OnSuccess(utils.StructToJsonStringDefault(groupMemberList))
		log.NewInfo(operationID, fName, " callback: ", utils.StructToJsonStringDefault(groupMemberList))
	}()
}
func (g *Group) GetGroupMemberOwnerAndAdmin(callback open_im_sdk_callback.Base, groupID string, operationID string) {
	if callback == nil {
		return
	}
	fName := utils.GetSelfFuncName()
	go func() {
		log.NewInfo(operationID, fName, "args: ", groupID)
		groupMemberList := g.getGroupMemberOwnerAndAdmin(callback, groupID, operationID)
		callback.OnSuccess(utils.StructToJsonStringDefault(groupMemberList))
		log.NewInfo(operationID, fName, " callback: ", utils.StructToJsonStringDefault(groupMemberList))
	}()
}

// getGroupMemberListByJoinTimeFilter
func (g *Group) GetGroupMemberListByJoinTimeFilter(callback open_im_sdk_callback.Base, groupID string, offset, count int32, joinTimeBegin, joinTimeEnd int64, filterUserID, operationID string) {
	if callback == nil {
		return
	}
	fName := utils.GetSelfFuncName()
	go func() {
		log.NewInfo(operationID, fName, "args: ", groupID, offset, count, filterUserID)
		var userIDList []string
		common.JsonUnmarshalAndArgsValidate(filterUserID, &userIDList, callback, operationID)
		groupMemberList := g.getGroupMemberListByJoinTimeFilter(callback, groupID, offset, count, joinTimeBegin, joinTimeEnd, userIDList, operationID)
		callback.OnSuccess(utils.StructToJsonStringDefault(groupMemberList))
		log.NewInfo(operationID, fName, " callback: ", utils.StructToJsonStringDefault(groupMemberList))
	}()
}

func (g *Group) GetGroupMembersInfo(callback open_im_sdk_callback.Base, groupID string, userIDList string, operationID string) {
	if callback == nil {
		return
	}
	fName := utils.GetSelfFuncName()
	go func() {
		log.NewInfo(operationID, fName, "args: ", groupID, userIDList)
		var unmarshalParam sdk_params_callback.GetGroupMembersInfoParam
		common.JsonUnmarshalCallback(userIDList, &unmarshalParam, callback, operationID)
		groupMemberList := g.getGroupMembersInfo(callback, groupID, unmarshalParam, operationID)
		callback.OnSuccess(utils.StructToJsonStringDefault(groupMemberList))
		log.NewInfo(operationID, fName, " callback: ", utils.StructToJsonStringDefault(groupMemberList))
	}()
}

func (g *Group) KickGroupMember(callback open_im_sdk_callback.Base, groupID string, reason string, userIDList string, operationID string) {
	if callback == nil {
		return
	}
	fName := utils.GetSelfFuncName()
	go func() {
		log.NewInfo(operationID, fName, "args: ", groupID, reason, userIDList)
		var unmarshalParam sdk_params_callback.KickGroupMemberParam
		common.JsonUnmarshalCallback(userIDList, &unmarshalParam, callback, operationID)
		result := g.kickGroupMember(callback, groupID, unmarshalParam, reason, operationID)
		callback.OnSuccess(utils.StructToJsonStringDefault(result))
		log.NewInfo(operationID, fName, " callback: ", utils.StructToJsonStringDefault(result))
	}()
}

func (g *Group) TransferGroupOwner(callback open_im_sdk_callback.Base, groupID, newOwnerUserID string, operationID string) {
	if callback == nil {
		return
	}
	fName := utils.GetSelfFuncName()
	go func() {
		log.NewInfo(operationID, fName, "args: ", groupID, newOwnerUserID)
		g.transferGroupOwner(callback, groupID, newOwnerUserID, operationID)
		callback.OnSuccess(utils.StructToJsonString(sdk_params_callback.TransferGroupOwnerCallback))
		log.NewInfo(operationID, fName, " callback: ", utils.StructToJsonStringDefault(sdk_params_callback.TransferGroupOwnerCallback))
	}()
}

func (g *Group) InviteUserToGroup(callback open_im_sdk_callback.Base, groupID, reason string, userIDList string, operationID string) {
	if callback == nil {
		return
	}
	fName := utils.GetSelfFuncName()
	go func() {
		log.NewInfo(operationID, fName, "args: ", groupID, reason, userIDList)
		var unmarshalParam sdk_params_callback.InviteUserToGroupParam
		common.JsonUnmarshalAndArgsValidate(userIDList, &unmarshalParam, callback, operationID)
		result := g.inviteUserToGroup(callback, groupID, reason, unmarshalParam, operationID)
		callback.OnSuccess(utils.StructToJsonStringDefault(result))
		log.NewInfo(operationID, fName, "callback: ", utils.StructToJsonStringDefault(result))
	}()
}

func (g *Group) GetRecvGroupApplicationList(callback open_im_sdk_callback.Base, operationID string) {
	if callback == nil {
		return
	}
	fName := utils.GetSelfFuncName()
	go func() {
		log.NewInfo(operationID, fName, "args: ")
		result := g.getRecvGroupApplicationList(callback, operationID)
		callback.OnSuccess(utils.StructToJsonStringDefault(result))
		log.NewInfo(operationID, fName, "callback: ", utils.StructToJsonString(result))
	}()
}

func (g *Group) GetSendGroupApplicationList(callback open_im_sdk_callback.Base, operationID string) {
	if callback == nil {
		return
	}
	fName := utils.GetSelfFuncName()
	go func() {
		log.NewInfo(operationID, "output results")
		result := g.getSendGroupApplicationList(callback, operationID)
		callback.OnSuccess(utils.StructToJsonStringDefault(result))
		log.NewInfo(operationID, fName, "callback: ", utils.StructToJsonString(result))
	}()
}

func (g *Group) AcceptGroupApplication(callback open_im_sdk_callback.Base, groupID, fromUserID, handleMsg string, operationID string) {
	if callback == nil {
		return
	}
	fName := utils.GetSelfFuncName()
	go func() {
		log.NewInfo(operationID, fName, "args: ", groupID, fromUserID, handleMsg)
		g.processGroupApplication(callback, groupID, fromUserID, handleMsg, 1, operationID)
		callback.OnSuccess(utils.StructToJsonString(sdk_params_callback.AcceptGroupApplicationCallback))
		log.NewInfo(operationID, fName, "callback: ", utils.StructToJsonString(sdk_params_callback.AcceptGroupApplicationCallback))
	}()
}

func (g *Group) RefuseGroupApplication(callback open_im_sdk_callback.Base, groupID, fromUserID, handleMsg string, operationID string) {
	if callback == nil {
		return
	}
	fName := utils.GetSelfFuncName()
	go func() {
		log.NewInfo(operationID, fName, "args: ", groupID, fromUserID, handleMsg)
		g.processGroupApplication(callback, groupID, fromUserID, handleMsg, -1, operationID)
		callback.OnSuccess(utils.StructToJsonString(sdk_params_callback.RefuseGroupApplicationCallback))
		log.NewInfo(operationID, fName, "callback: ", utils.StructToJsonString(sdk_params_callback.RefuseGroupApplicationCallback))
	}()
}

func (g *Group) SetGroupMemberNickname(callback open_im_sdk_callback.Base, groupID, userID string, GroupMemberNickname string, operationID string) {
	if callback == nil {
		return
	}
	fName := utils.GetSelfFuncName()
	go func() {
		log.NewInfo(operationID, fName, "args: ", groupID, userID, GroupMemberNickname)
		g.setGroupMemberNickname(callback, groupID, userID, GroupMemberNickname, operationID)
		callback.OnSuccess(utils.StructToJsonString(sdk_params_callback.SetGroupMemberNicknameCallback))
		log.NewInfo(operationID, fName, "callback: ", utils.StructToJsonString(sdk_params_callback.SetGroupMemberNicknameCallback))
	}()
}

func (g *Group) SearchGroupMembers(callback open_im_sdk_callback.Base, searchParam string, operationID string) {
	if callback == nil {
		return
	}
	fName := utils.GetSelfFuncName()
	go func() {
		log.NewInfo(operationID, fName, "args: ", searchParam)
		var unmarshalSearchGroupMembersParam sdk_params_callback.SearchGroupMembersParam
		common.JsonUnmarshalAndArgsValidate(searchParam, &unmarshalSearchGroupMembersParam, callback, operationID)
		members := g.searchGroupMembers(callback, unmarshalSearchGroupMembersParam, operationID)
		callback.OnSuccess(utils.StructToJsonStringDefault(members))
		log.NewInfo(operationID, fName, "callback: ", utils.StructToJsonStringDefault(members))
	}()
}
