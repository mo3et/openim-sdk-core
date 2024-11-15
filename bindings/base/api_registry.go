package base

import (
	"context"

	"google.golang.org/protobuf/proto"

	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	pb "github.com/openimsdk/openim-sdk-core/v3/proto"
)

var FuncMap = make(map[pb.FuncRequestEventName]callFunc)

func Func[A, B any](fn func(ctx context.Context, req *A) (*B, error)) callFunc {
	return func(ctx context.Context, req []byte) ([]byte, error) {
		var pbReq A

		msg, ok := any(&pbReq).(proto.Message)
		if !ok {
			return nil, sdkerrs.ErrArgs.WrapMsg("called function argument is not of type proto.Message")
		}

		if err := proto.Unmarshal(req, msg); err != nil {
			return nil, err
		}

		pbResp, err := fn(ctx, &pbReq)
		if err != nil {
			return nil, err
		}

		respMsg, ok := any(pbResp).(proto.Message)
		if !ok {
			return nil, sdkerrs.ErrArgs.WrapMsg("called function argument is not of type proto.Message")
		}

		return proto.Marshal(respMsg)
	}
}

func init() {

	FuncMap[pb.FuncRequestEventName_InitSDK] = Func(open_im_sdk.UserForSDK.InitSDK)
	FuncMap[pb.FuncRequestEventName_Login] = Func(open_im_sdk.UserForSDK.Login)
	FuncMap[pb.FuncRequestEventName_GetAllConversationList] = Func(open_im_sdk.UserForSDK.Conversation().GetAllConversationList)

	FuncMap[pb.FuncRequestEventName_CreateGroup] = Func(open_im_sdk.UserForSDK.Group().CreateGroup)
	FuncMap[pb.FuncRequestEventName_JoinGroup] = Func(open_im_sdk.UserForSDK.Group().JoinGroup)
	FuncMap[pb.FuncRequestEventName_QuitGroup] = Func(open_im_sdk.UserForSDK.Group().QuitGroup)
	FuncMap[pb.FuncRequestEventName_DismissGroup] = Func(open_im_sdk.UserForSDK.Group().DismissGroup)
	FuncMap[pb.FuncRequestEventName_ChangeGroupMute] = Func(open_im_sdk.UserForSDK.Group().ChangeGroupMute)
	FuncMap[pb.FuncRequestEventName_ChangeGroupMemberMute] = Func(open_im_sdk.UserForSDK.Group().ChangeGroupMemberMute)
	FuncMap[pb.FuncRequestEventName_TransferGroupOwner] = Func(open_im_sdk.UserForSDK.Group().TransferGroupOwner)
	FuncMap[pb.FuncRequestEventName_KickGroupMember] = Func(open_im_sdk.UserForSDK.Group().KickGroupMember)
	FuncMap[pb.FuncRequestEventName_SetGroupInfo] = Func(open_im_sdk.UserForSDK.Group().SetGroupInfo)
	FuncMap[pb.FuncRequestEventName_SetGroupMemberInfo] = Func(open_im_sdk.UserForSDK.Group().SetGroupMemberInfo)
	FuncMap[pb.FuncRequestEventName_GetJoinedGroups] = Func(open_im_sdk.UserForSDK.Group().GetJoinedGroups)
	//FuncMap[pb.FuncRequestEventName_GetJoinedGroupListPage] = Func(open_im_sdk.UserForSDK.Group().GetJoinedGroupListPage)
	//FuncMap[pb.FuncRequestEventName_GetSpecifiedGroupsInfo] = Func(open_im_sdk.UserForSDK.Group().GetSpecifiedGroupsInfo)
	//FuncMap[pb.FuncRequestEventName_SearchGroups] = Func(open_im_sdk.UserForSDK.Group().SearchGroups)
	//FuncMap[pb.FuncRequestEventName_GetGroupMemberOwnerAndAdmin] = Func(open_im_sdk.UserForSDK.Group().GetGroupMemberOwnerAndAdmin)
	//FuncMap[pb.FuncRequestEventName_GetGroupMemberListByJoinTimeFilter] = Func(open_im_sdk.UserForSDK.Group().GetGroupMemberListByJoinTimeFilter)
	//FuncMap[pb.FuncRequestEventName_GetSpecifiedGroupMembersInfo] = Func(open_im_sdk.UserForSDK.Group().GetSpecifiedGroupMembersInfo)
	//FuncMap[pb.FuncRequestEventName_GetGroupMemberList] = Func(open_im_sdk.UserForSDK.Group().GetGroupMemberList)
	//FuncMap[pb.FuncRequestEventName_GetGroupRequest] = Func(open_im_sdk.UserForSDK.Group().GetGroupRequest)
	//FuncMap[pb.FuncRequestEventName_SearchGroupMembers] = Func(open_im_sdk.UserForSDK.Group().SearchGroupMembers)
	FuncMap[pb.FuncRequestEventName_IsJoinGroup] = Func(open_im_sdk.UserForSDK.Group().IsJoinGroup)
	FuncMap[pb.FuncRequestEventName_GetUsersInGroup] = Func(open_im_sdk.UserForSDK.Group().GetUsersInGroup)
	FuncMap[pb.FuncRequestEventName_InviteUserToGroup] = Func(open_im_sdk.UserForSDK.Group().InviteUserToGroup)
	FuncMap[pb.FuncRequestEventName_HandlerGroupRequest] = Func(open_im_sdk.UserForSDK.Group().HandlerGroupRequest)
	FuncMap[pb.FuncRequestEventName_GetGroupMemberInfo] = Func(open_im_sdk.UserForSDK.Group().GetGroupMemberInfo)
}
