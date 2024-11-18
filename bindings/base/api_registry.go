package base

import (
	"context"

	"google.golang.org/protobuf/proto"

	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	pb "github.com/openimsdk/openim-sdk-core/v3/proto"
	"github.com/openimsdk/tools/errs"
)

func wrapFunc[A, B any](fn func(ctx context.Context, req *A) (*B, error)) callFunc {
	return func(ctx context.Context, _ uint64, _ pb.FuncRequestEventName, req []byte) ([]byte, error) {
		var pbReq A

		msg, ok := any(&pbReq).(proto.Message)
		if !ok {
			return nil, sdkerrs.ErrArgs.WrapMsg("called function argument is not of type proto.Message")
		}

		if err := proto.Unmarshal(req, msg); err != nil {
			return nil, errs.WrapMsg(err, "errInfo", "failed to unmarshal request")
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

func wrapFuncWithCallback[A, B, C any](fn func(ctx context.Context, req *A, callback C) (*B, error)) callFunc {
	return func(ctx context.Context, handlerID uint64, name pb.FuncRequestEventName, req []byte) ([]byte, error) {
		var pbReq A
		msg, ok := any(&pbReq).(proto.Message)
		if !ok {
			return nil, sdkerrs.ErrArgs.WrapMsg("called function argument is not of type proto.Message")
		}
		if err := proto.Unmarshal(req, msg); err != nil {
			return nil, errs.WrapMsg(err, "errInfo", "failed to unmarshal request")
		}
		cb, ok := callbackRegistry[name]
		if !ok {
			return nil, sdkerrs.ErrSdkInternal.WrapMsg("callback maybe not registered")
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

// wrapCallbackConstructor is a helper function to wrap callback constructors for use in callbackRegistry.
// It ensures that all callbacks adhere to the callbackFunc signature.
func wrapCallbackConstructor[T any](fn func(handleID uint64) T) callbackFunc {
	return func(handleID uint64) any {
		return fn(handleID)
	}
}

var callbackRegistry = map[pb.FuncRequestEventName]callbackFunc{
	pb.FuncRequestEventName_SendMessage: wrapCallbackConstructor(NewSendMessageCallback),
	pb.FuncRequestEventName_UploadLogs:  wrapCallbackConstructor(NewUploadLogsCallback),
	pb.FuncRequestEventName_UploadFile:  wrapCallbackConstructor(NewUploadFileCallback),
}

var FuncMap = map[pb.FuncRequestEventName]callFunc{
	pb.FuncRequestEventName_InitSDK: wrapFunc(open_im_sdk.UserForSDK.InitSDK),
	pb.FuncRequestEventName_Login:   wrapFunc(open_im_sdk.UserForSDK.Login),

	pb.FuncRequestEventName_GetAllConversationList:          wrapFunc(open_im_sdk.UserForSDK.Conversation().GetAllConversationList),
	pb.FuncRequestEventName_SendMessage:                     wrapFuncWithCallback(open_im_sdk.UserForSDK.Conversation().SendMessage),
	pb.FuncRequestEventName_UploadLogs:                      wrapFuncWithCallback(open_im_sdk.UserForSDK.Third().UploadLogs),
	pb.FuncRequestEventName_UploadFile:                      wrapFuncWithCallback(open_im_sdk.UserForSDK.Third().UploadFile),
	pb.FuncRequestEventName_CreateGroup:                     wrapFunc(open_im_sdk.UserForSDK.Group().CreateGroup),
	pb.FuncRequestEventName_JoinGroup:                       wrapFunc(open_im_sdk.UserForSDK.Group().JoinGroup),
	pb.FuncRequestEventName_QuitGroup:                       wrapFunc(open_im_sdk.UserForSDK.Group().QuitGroup),
	pb.FuncRequestEventName_DismissGroup:                    wrapFunc(open_im_sdk.UserForSDK.Group().DismissGroup),
	pb.FuncRequestEventName_ChangeGroupMute:                 wrapFunc(open_im_sdk.UserForSDK.Group().ChangeGroupMute),
	pb.FuncRequestEventName_ChangeGroupMemberMute:           wrapFunc(open_im_sdk.UserForSDK.Group().ChangeGroupMemberMute),
	pb.FuncRequestEventName_TransferGroupOwner:              wrapFunc(open_im_sdk.UserForSDK.Group().TransferGroupOwner),
	pb.FuncRequestEventName_KickGroupMember:                 wrapFunc(open_im_sdk.UserForSDK.Group().KickGroupMember),
	pb.FuncRequestEventName_SetGroupInfo:                    wrapFunc(open_im_sdk.UserForSDK.Group().SetGroupInfo),
	pb.FuncRequestEventName_SetGroupMemberInfo:              wrapFunc(open_im_sdk.UserForSDK.Group().SetGroupMemberInfo),
	pb.FuncRequestEventName_GetJoinedGroups:                 wrapFunc(open_im_sdk.UserForSDK.Group().GetJoinedGroups),
	pb.FuncRequestEventName_GetJoinedGroupsPage:             wrapFunc(open_im_sdk.UserForSDK.Group().GetJoinedGroupsPage),
	pb.FuncRequestEventName_GetSpecifiedGroupsInfo:          wrapFunc(open_im_sdk.UserForSDK.Group().GetSpecifiedGroupsInfo),
	pb.FuncRequestEventName_SearchGroups:                    wrapFunc(open_im_sdk.UserForSDK.Group().SearchGroups),
	pb.FuncRequestEventName_GetGroupMemberOwnerAndAdmin:     wrapFunc(open_im_sdk.UserForSDK.Group().GetGroupMemberOwnerAndAdmin),
	pb.FuncRequestEventName_GetGroupMembersByJoinTimeFilter: wrapFunc(open_im_sdk.UserForSDK.Group().GetGroupMembersByJoinTimeFilter),
	pb.FuncRequestEventName_GetSpecifiedGroupMembersInfo:    wrapFunc(open_im_sdk.UserForSDK.Group().GetSpecifiedGroupMembersInfo),
	pb.FuncRequestEventName_GetGroupMembers:                 wrapFunc(open_im_sdk.UserForSDK.Group().GetGroupMembers),
	pb.FuncRequestEventName_GetGroupRequest:                 wrapFunc(open_im_sdk.UserForSDK.Group().GetGroupRequest),
	pb.FuncRequestEventName_SearchGroupMembers:              wrapFunc(open_im_sdk.UserForSDK.Group().SearchGroupMembers),
	pb.FuncRequestEventName_IsJoinGroup:                     wrapFunc(open_im_sdk.UserForSDK.Group().IsJoinGroup),
	pb.FuncRequestEventName_GetUsersInGroup:                 wrapFunc(open_im_sdk.UserForSDK.Group().GetUsersInGroup),
	pb.FuncRequestEventName_InviteUserToGroup:               wrapFunc(open_im_sdk.UserForSDK.Group().InviteUserToGroup),
	pb.FuncRequestEventName_HandlerGroupRequest:             wrapFunc(open_im_sdk.UserForSDK.Group().HandlerGroupRequest),
	pb.FuncRequestEventName_GetGroupMemberInfo:              wrapFunc(open_im_sdk.UserForSDK.Group().GetGroupMemberInfo),

	pb.FuncRequestEventName_GetSpecifiedFriends:  wrapFunc(open_im_sdk.UserForSDK.Relation().GetSpecifiedFriends),
	pb.FuncRequestEventName_AddFriend:            wrapFunc(open_im_sdk.UserForSDK.Relation().AddFriend),
	pb.FuncRequestEventName_GetFriendRequests:    wrapFunc(open_im_sdk.UserForSDK.Relation().GetFriendRequests),
	pb.FuncRequestEventName_HandlerFriendRequest: wrapFunc(open_im_sdk.UserForSDK.Relation().HandlerFriendRequest),
	pb.FuncRequestEventName_CheckFriend:          wrapFunc(open_im_sdk.UserForSDK.Relation().CheckFriend),
	pb.FuncRequestEventName_DeleteFriend:         wrapFunc(open_im_sdk.UserForSDK.Relation().DeleteFriend),
	pb.FuncRequestEventName_GetFriends:           wrapFunc(open_im_sdk.UserForSDK.Relation().GetFriends),
	pb.FuncRequestEventName_GetFriendsPage:       wrapFunc(open_im_sdk.UserForSDK.Relation().GetFriendsPage),
	pb.FuncRequestEventName_SearchFriends:        wrapFunc(open_im_sdk.UserForSDK.Relation().SearchFriends),
	pb.FuncRequestEventName_AddBlack:             wrapFunc(open_im_sdk.UserForSDK.Relation().AddBlack),
	pb.FuncRequestEventName_DeleteBlack:          wrapFunc(open_im_sdk.UserForSDK.Relation().DeleteBlack),
	pb.FuncRequestEventName_GetBlacks:            wrapFunc(open_im_sdk.UserForSDK.Relation().GetBlacks),
	pb.FuncRequestEventName_UpdateFriends:        wrapFunc(open_im_sdk.UserForSDK.Relation().UpdateFriends),

	pb.FuncRequestEventName_GetConversationListSplit:             wrapFunc(open_im_sdk.UserForSDK.Conversation().GetConversationListSplit),
	pb.FuncRequestEventName_HideConversation:                     wrapFunc(open_im_sdk.UserForSDK.Conversation().HideConversation),
	pb.FuncRequestEventName_GetAtAllTag:                          wrapFunc(open_im_sdk.UserForSDK.Conversation().GetAtAllTag),
	pb.FuncRequestEventName_GetOneConversation:                   wrapFunc(open_im_sdk.UserForSDK.Conversation().GetOneConversation),
	pb.FuncRequestEventName_GetMultipleConversation:              wrapFunc(open_im_sdk.UserForSDK.Conversation().GetMultipleConversation),
	pb.FuncRequestEventName_HideAllConversations:                 wrapFunc(open_im_sdk.UserForSDK.Conversation().HideAllConversations),
	pb.FuncRequestEventName_SetConversationDraft:                 wrapFunc(open_im_sdk.UserForSDK.Conversation().SetConversationDraft),
	pb.FuncRequestEventName_SetConversation:                      wrapFunc(open_im_sdk.UserForSDK.Conversation().SetConversation),
	pb.FuncRequestEventName_GetTotalUnreadMsgCount:               wrapFunc(open_im_sdk.UserForSDK.Conversation().GetTotalUnreadMsgCount),
	pb.FuncRequestEventName_GetConversationIDBySessionType:       wrapFunc(open_im_sdk.UserForSDK.Conversation().GetConversationIDBySessionType),
	pb.FuncRequestEventName_FindMessageList:                      wrapFunc(open_im_sdk.UserForSDK.Conversation().FindMessageList),
	pb.FuncRequestEventName_GetAdvancedHistoryMessageList:        wrapFunc(open_im_sdk.UserForSDK.Conversation().GetAdvancedHistoryMessageList),
	pb.FuncRequestEventName_GetAdvancedHistoryMessageListReverse: wrapFunc(open_im_sdk.UserForSDK.Conversation().GetAdvancedHistoryMessageListReverse),
	pb.FuncRequestEventName_RevokeMessage:                        wrapFunc(open_im_sdk.UserForSDK.Conversation().RevokeMessage),
	pb.FuncRequestEventName_TypingStatusUpdate:                   wrapFunc(open_im_sdk.UserForSDK.Conversation().TypingStatusUpdate),
	pb.FuncRequestEventName_MarkConversationMessageAsRead:        wrapFunc(open_im_sdk.UserForSDK.Conversation().MarkConversationMessageAsRead),
	pb.FuncRequestEventName_MarkAllConversationMessageAsRead:     wrapFunc(open_im_sdk.UserForSDK.Conversation().MarkAllConversationMessageAsRead),
	pb.FuncRequestEventName_DeleteMessageFromLocalStorage:        wrapFunc(open_im_sdk.UserForSDK.Conversation().DeleteMessageFromLocalStorage),
	pb.FuncRequestEventName_DeleteMessage:                        wrapFunc(open_im_sdk.UserForSDK.Conversation().DeleteMessage),
	pb.FuncRequestEventName_DeleteAllMsgFromLocalAndServer:       wrapFunc(open_im_sdk.UserForSDK.Conversation().DeleteAllMsgFromLocalAndServer),
	pb.FuncRequestEventName_DeleteAllMessageFromLocalStorage:     wrapFunc(open_im_sdk.UserForSDK.Conversation().DeleteAllMessageFromLocalStorage),
	pb.FuncRequestEventName_ClearConversationAndDeleteAllMsg:     wrapFunc(open_im_sdk.UserForSDK.Conversation().ClearConversationAndDeleteAllMsg),
	pb.FuncRequestEventName_DeleteConversationAndDeleteAllMsg:    wrapFunc(open_im_sdk.UserForSDK.Conversation().DeleteConversationAndDeleteAllMsg),
	pb.FuncRequestEventName_InsertSingleMessageToLocalStorage:    wrapFunc(open_im_sdk.UserForSDK.Conversation().InsertSingleMessageToLocalStorage),
	pb.FuncRequestEventName_InsertGroupMessageToLocalStorage:     wrapFunc(open_im_sdk.UserForSDK.Conversation().InsertGroupMessageToLocalStorage),
	pb.FuncRequestEventName_SearchLocalMessages:                  wrapFunc(open_im_sdk.UserForSDK.Conversation().SearchLocalMessages),
	pb.FuncRequestEventName_SetMessageLocalEx:                    wrapFunc(open_im_sdk.UserForSDK.Conversation().SetMessageLocalEx),
	pb.FuncRequestEventName_SearchConversation:                   wrapFunc(open_im_sdk.UserForSDK.Conversation().SearchConversation),
}
