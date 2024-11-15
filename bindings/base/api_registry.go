package base

import (
	"context"
	"fmt"

	"google.golang.org/protobuf/proto"

	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	pb "github.com/openimsdk/openim-sdk-core/v3/proto"
)

type call struct {
	handlerID uint64
	fn        func(ctx context.Context, req []byte) ([]byte, error)
}

func Func[A, B any](fn func(ctx context.Context, req *A) (*B, error)) callFunc {
	return func(ctx context.Context, _ uint64, _ pb.FuncRequestEventName, req []byte) ([]byte, error) {
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

func Func2[A, B, C any](fn func(ctx context.Context, req *A, callback C) (*B, error)) callFunc {
	return func(ctx context.Context, handlerID uint64, name pb.FuncRequestEventName, req []byte) ([]byte, error) {
		var pbReq A
		msg, ok := any(&pbReq).(proto.Message)
		if !ok {
			return nil, sdkerrs.ErrArgs.WrapMsg("called function argument is not of type proto.Message")
		}
		if err := proto.Unmarshal(req, msg); err != nil {
			return nil, err
		}
		cb, ok := cbMap[name]
		if !ok {
			return nil, fmt.Errorf("callback not found for %s", name)
		}
		pbResp, err := fn(ctx, &pbReq, cb(handlerID).(C))
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

type callbackFunc func(handleID uint64) any

func CB[T any](fn func(handleID uint64) T) callbackFunc {
	return func(handleID uint64) any {
		return fn(handleID)
	}
}

var cbMap = map[pb.FuncRequestEventName]callbackFunc{
	pb.FuncRequestEventName_Login: CB(NewSendMessageCallback),
}

var FuncMap = map[pb.FuncRequestEventName]callFunc{
	pb.FuncRequestEventName_InitSDK: Func(open_im_sdk.UserForSDK.InitSDK),
	pb.FuncRequestEventName_Login:   Func(open_im_sdk.UserForSDK.Login),

	pb.FuncRequestEventName_GetAllConversationList:   Func(open_im_sdk.UserForSDK.Conversation().GetAllConversationList),
	pb.FuncRequestEventName_GetConversationListSplit: Func(open_im_sdk.UserForSDK.Conversation().GetConversationListSplit),

	pb.FuncRequestEventName_CreateGroup:                     Func(open_im_sdk.UserForSDK.Group().CreateGroup),
	pb.FuncRequestEventName_JoinGroup:                       Func(open_im_sdk.UserForSDK.Group().JoinGroup),
	pb.FuncRequestEventName_QuitGroup:                       Func(open_im_sdk.UserForSDK.Group().QuitGroup),
	pb.FuncRequestEventName_DismissGroup:                    Func(open_im_sdk.UserForSDK.Group().DismissGroup),
	pb.FuncRequestEventName_ChangeGroupMute:                 Func(open_im_sdk.UserForSDK.Group().ChangeGroupMute),
	pb.FuncRequestEventName_ChangeGroupMemberMute:           Func(open_im_sdk.UserForSDK.Group().ChangeGroupMemberMute),
	pb.FuncRequestEventName_TransferGroupOwner:              Func(open_im_sdk.UserForSDK.Group().TransferGroupOwner),
	pb.FuncRequestEventName_KickGroupMember:                 Func(open_im_sdk.UserForSDK.Group().KickGroupMember),
	pb.FuncRequestEventName_SetGroupInfo:                    Func(open_im_sdk.UserForSDK.Group().SetGroupInfo),
	pb.FuncRequestEventName_SetGroupMemberInfo:              Func(open_im_sdk.UserForSDK.Group().SetGroupMemberInfo),
	pb.FuncRequestEventName_GetJoinedGroups:                 Func(open_im_sdk.UserForSDK.Group().GetJoinedGroups),
	pb.FuncRequestEventName_GetJoinedGroupsPage:             Func(open_im_sdk.UserForSDK.Group().GetJoinedGroupsPage),
	pb.FuncRequestEventName_GetSpecifiedGroupsInfo:          Func(open_im_sdk.UserForSDK.Group().GetSpecifiedGroupsInfo),
	pb.FuncRequestEventName_SearchGroups:                    Func(open_im_sdk.UserForSDK.Group().SearchGroups),
	pb.FuncRequestEventName_GetGroupMemberOwnerAndAdmin:     Func(open_im_sdk.UserForSDK.Group().GetGroupMemberOwnerAndAdmin),
	pb.FuncRequestEventName_GetGroupMembersByJoinTimeFilter: Func(open_im_sdk.UserForSDK.Group().GetGroupMembersByJoinTimeFilter),
	pb.FuncRequestEventName_GetSpecifiedGroupMembersInfo:    Func(open_im_sdk.UserForSDK.Group().GetSpecifiedGroupMembersInfo),
	pb.FuncRequestEventName_GetGroupMembers:                 Func(open_im_sdk.UserForSDK.Group().GetGroupMembers),
	pb.FuncRequestEventName_GetGroupRequest:                 Func(open_im_sdk.UserForSDK.Group().GetGroupRequest),
	pb.FuncRequestEventName_SearchGroupMembers:              Func(open_im_sdk.UserForSDK.Group().SearchGroupMembers),
	pb.FuncRequestEventName_IsJoinGroup:                     Func(open_im_sdk.UserForSDK.Group().IsJoinGroup),
	pb.FuncRequestEventName_GetUsersInGroup:                 Func(open_im_sdk.UserForSDK.Group().GetUsersInGroup),
	pb.FuncRequestEventName_InviteUserToGroup:               Func(open_im_sdk.UserForSDK.Group().InviteUserToGroup),
	pb.FuncRequestEventName_HandlerGroupRequest:             Func(open_im_sdk.UserForSDK.Group().HandlerGroupRequest),
	pb.FuncRequestEventName_GetGroupMemberInfo:              Func(open_im_sdk.UserForSDK.Group().GetGroupMemberInfo),

	pb.FuncRequestEventName_GetSpecifiedFriends:  Func(open_im_sdk.UserForSDK.Relation().GetSpecifiedFriends),
	pb.FuncRequestEventName_AddFriend:            Func(open_im_sdk.UserForSDK.Relation().AddFriend),
	pb.FuncRequestEventName_GetFriendRequests:    Func(open_im_sdk.UserForSDK.Relation().GetFriendRequests),
	pb.FuncRequestEventName_HandlerFriendRequest: Func(open_im_sdk.UserForSDK.Relation().HandlerFriendRequest),
	pb.FuncRequestEventName_CheckFriend:          Func(open_im_sdk.UserForSDK.Relation().CheckFriend),
	pb.FuncRequestEventName_DeleteFriend:         Func(open_im_sdk.UserForSDK.Relation().DeleteFriend),
	pb.FuncRequestEventName_GetFriends:           Func(open_im_sdk.UserForSDK.Relation().GetFriends),
	pb.FuncRequestEventName_GetFriendsPage:       Func(open_im_sdk.UserForSDK.Relation().GetFriendsPage),
	pb.FuncRequestEventName_SearchFriends:        Func(open_im_sdk.UserForSDK.Relation().SearchFriends),
	pb.FuncRequestEventName_AddBlack:             Func(open_im_sdk.UserForSDK.Relation().AddBlack),
	pb.FuncRequestEventName_DeleteBlack:          Func(open_im_sdk.UserForSDK.Relation().DeleteBlack),
	pb.FuncRequestEventName_GetBlacks:            Func(open_im_sdk.UserForSDK.Relation().GetBlacks),
	pb.FuncRequestEventName_UpdateFriends:        Func(open_im_sdk.UserForSDK.Relation().UpdateFriends),
}
