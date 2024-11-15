package base

import (
	"context"

	"google.golang.org/protobuf/proto"

	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	pb "github.com/openimsdk/openim-sdk-core/v3/proto"
)

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

var FuncMap = map[pb.FuncRequestEventName]callFunc{
	pb.FuncRequestEventName_InitSDK:                            Func(open_im_sdk.UserForSDK.InitSDK),
	pb.FuncRequestEventName_Login:                              Func(open_im_sdk.UserForSDK.Login),
	pb.FuncRequestEventName_GetAllConversationList:             Func(open_im_sdk.UserForSDK.Conversation().GetAllConversationList),
	pb.FuncRequestEventName_CreateGroup:                        Func(open_im_sdk.UserForSDK.Group().CreateGroup),
	pb.FuncRequestEventName_JoinGroup:                          Func(open_im_sdk.UserForSDK.Group().JoinGroup),
	pb.FuncRequestEventName_QuitGroup:                          Func(open_im_sdk.UserForSDK.Group().QuitGroup),
	pb.FuncRequestEventName_DismissGroup:                       Func(open_im_sdk.UserForSDK.Group().DismissGroup),
	pb.FuncRequestEventName_ChangeGroupMute:                    Func(open_im_sdk.UserForSDK.Group().ChangeGroupMute),
	pb.FuncRequestEventName_ChangeGroupMemberMute:              Func(open_im_sdk.UserForSDK.Group().ChangeGroupMemberMute),
	pb.FuncRequestEventName_TransferGroupOwner:                 Func(open_im_sdk.UserForSDK.Group().TransferGroupOwner),
	pb.FuncRequestEventName_KickGroupMember:                    Func(open_im_sdk.UserForSDK.Group().KickGroupMember),
	pb.FuncRequestEventName_SetGroupInfo:                       Func(open_im_sdk.UserForSDK.Group().SetGroupInfo),
	pb.FuncRequestEventName_SetGroupMemberInfo:                 Func(open_im_sdk.UserForSDK.Group().SetGroupMemberInfo),
	pb.FuncRequestEventName_GetJoinedGroups:                    Func(open_im_sdk.UserForSDK.Group().GetJoinedGroups),
	pb.FuncRequestEventName_GetJoinedGroupListPage:             Func(open_im_sdk.UserForSDK.Group().GetJoinedGroupListPage),
	pb.FuncRequestEventName_GetSpecifiedGroupsInfo:             Func(open_im_sdk.UserForSDK.Group().GetSpecifiedGroupsInfo),
	pb.FuncRequestEventName_SearchGroups:                       Func(open_im_sdk.UserForSDK.Group().SearchGroups),
	pb.FuncRequestEventName_GetGroupMemberOwnerAndAdmin:        Func(open_im_sdk.UserForSDK.Group().GetGroupMemberOwnerAndAdmin),
	pb.FuncRequestEventName_GetGroupMemberListByJoinTimeFilter: Func(open_im_sdk.UserForSDK.Group().GetGroupMemberListByJoinTimeFilter),
	pb.FuncRequestEventName_GetSpecifiedGroupMembersInfo:       Func(open_im_sdk.UserForSDK.Group().GetSpecifiedGroupMembersInfo),
	pb.FuncRequestEventName_GetGroupMemberList:                 Func(open_im_sdk.UserForSDK.Group().GetGroupMemberList),
	pb.FuncRequestEventName_GetGroupRequest:                    Func(open_im_sdk.UserForSDK.Group().GetGroupRequest),
	pb.FuncRequestEventName_SearchGroupMembers:                 Func(open_im_sdk.UserForSDK.Group().SearchGroupMembers),
	pb.FuncRequestEventName_IsJoinGroup:                        Func(open_im_sdk.UserForSDK.Group().IsJoinGroup),
	pb.FuncRequestEventName_GetUsersInGroup:                    Func(open_im_sdk.UserForSDK.Group().GetUsersInGroup),
	pb.FuncRequestEventName_InviteUserToGroup:                  Func(open_im_sdk.UserForSDK.Group().InviteUserToGroup),
	pb.FuncRequestEventName_HandlerGroupRequest:                Func(open_im_sdk.UserForSDK.Group().HandlerGroupRequest),
	pb.FuncRequestEventName_GetGroupMemberInfo:                 Func(open_im_sdk.UserForSDK.Group().GetGroupMemberInfo),
}
