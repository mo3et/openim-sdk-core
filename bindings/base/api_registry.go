package base

import (
	"context"

	"google.golang.org/protobuf/proto"

	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	pb "github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
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
			return nil, sdkerrs.ErrInternal.WrapMsg("callback maybe not registered")
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
	pb.FuncRequestEventName_InitSDK:                wrapFunc(open_im_sdk.IMUserContext.InitSDK),
	pb.FuncRequestEventName_Login:                  wrapFunc(open_im_sdk.IMUserContext.Login),
	pb.FuncRequestEventName_Logout:                 wrapFunc(open_im_sdk.IMUserContext.Logout),
	pb.FuncRequestEventName_SetAppBackgroundStatus: wrapFunc(open_im_sdk.IMUserContext.SetAppBackgroundStatus),
	pb.FuncRequestEventName_NetworkStatusChanged:   wrapFunc(open_im_sdk.IMUserContext.NetworkStatusChanged),
	pb.FuncRequestEventName_GetLoginStatus:         wrapFunc(open_im_sdk.IMUserContext.GetLoginStatus),
	pb.FuncRequestEventName_Version:                wrapFunc(open_im_sdk.IMUserContext.Version),

	pb.FuncRequestEventName_SendMessage: wrapFuncWithCallback(open_im_sdk.IMUserContext.Conversation().SendMessage),
	pb.FuncRequestEventName_UploadLogs:  wrapFuncWithCallback(open_im_sdk.IMUserContext.Third().UploadSDKData),
	pb.FuncRequestEventName_UploadFile:  wrapFuncWithCallback(open_im_sdk.IMUserContext.Third().UploadFile),

	pb.FuncRequestEventName_Log:            wrapFunc(open_im_sdk.IMUserContext.Third().Log),
	pb.FuncRequestEventName_UpdateFcmToken: wrapFunc(open_im_sdk.IMUserContext.Third().UpdateFcmToken),
	pb.FuncRequestEventName_SetAppBadge:    wrapFunc(open_im_sdk.IMUserContext.Third().SetAppBadge),

	pb.FuncRequestEventName_CreateGroup:                     wrapFunc(open_im_sdk.IMUserContext.Group().CreateGroup),
	pb.FuncRequestEventName_JoinGroup:                       wrapFunc(open_im_sdk.IMUserContext.Group().JoinGroup),
	pb.FuncRequestEventName_QuitGroup:                       wrapFunc(open_im_sdk.IMUserContext.Group().QuitGroup),
	pb.FuncRequestEventName_DismissGroup:                    wrapFunc(open_im_sdk.IMUserContext.Group().DismissGroup),
	pb.FuncRequestEventName_ChangeGroupMute:                 wrapFunc(open_im_sdk.IMUserContext.Group().ChangeGroupMute),
	pb.FuncRequestEventName_ChangeGroupMemberMute:           wrapFunc(open_im_sdk.IMUserContext.Group().ChangeGroupMemberMute),
	pb.FuncRequestEventName_TransferGroupOwner:              wrapFunc(open_im_sdk.IMUserContext.Group().TransferGroupOwner),
	pb.FuncRequestEventName_KickGroupMember:                 wrapFunc(open_im_sdk.IMUserContext.Group().KickGroupMember),
	pb.FuncRequestEventName_SetGroupInfo:                    wrapFunc(open_im_sdk.IMUserContext.Group().SetGroupInfo),
	pb.FuncRequestEventName_SetGroupMemberInfo:              wrapFunc(open_im_sdk.IMUserContext.Group().SetGroupMemberInfo),
	pb.FuncRequestEventName_GetJoinedGroups:                 wrapFunc(open_im_sdk.IMUserContext.Group().GetJoinedGroups),
	pb.FuncRequestEventName_GetJoinedGroupsPage:             wrapFunc(open_im_sdk.IMUserContext.Group().GetJoinedGroupsPage),
	pb.FuncRequestEventName_GetSpecifiedGroupsInfo:          wrapFunc(open_im_sdk.IMUserContext.Group().GetSpecifiedGroupsInfo),
	pb.FuncRequestEventName_SearchGroups:                    wrapFunc(open_im_sdk.IMUserContext.Group().SearchGroups),
	pb.FuncRequestEventName_GetGroupMemberOwnerAndAdmin:     wrapFunc(open_im_sdk.IMUserContext.Group().GetGroupMemberOwnerAndAdmin),
	pb.FuncRequestEventName_GetGroupMembersByJoinTimeFilter: wrapFunc(open_im_sdk.IMUserContext.Group().GetGroupMembersByJoinTimeFilter),
	pb.FuncRequestEventName_GetSpecifiedGroupMembersInfo:    wrapFunc(open_im_sdk.IMUserContext.Group().GetSpecifiedGroupMembersInfo),
	pb.FuncRequestEventName_GetGroupMembers:                 wrapFunc(open_im_sdk.IMUserContext.Group().GetGroupMembers),
	pb.FuncRequestEventName_GetGroupRequest:                 wrapFunc(open_im_sdk.IMUserContext.Group().GetGroupRequest),
	pb.FuncRequestEventName_SearchGroupMembers:              wrapFunc(open_im_sdk.IMUserContext.Group().SearchGroupMembers),
	pb.FuncRequestEventName_IsJoinGroup:                     wrapFunc(open_im_sdk.IMUserContext.Group().IsJoinGroup),
	pb.FuncRequestEventName_GetUsersInGroup:                 wrapFunc(open_im_sdk.IMUserContext.Group().GetUsersInGroup),
	pb.FuncRequestEventName_InviteUserToGroup:               wrapFunc(open_im_sdk.IMUserContext.Group().InviteUserToGroup),
	pb.FuncRequestEventName_HandlerGroupRequest:             wrapFunc(open_im_sdk.IMUserContext.Group().HandlerGroupRequest),

	pb.FuncRequestEventName_GetSpecifiedFriends:  wrapFunc(open_im_sdk.IMUserContext.Relation().GetSpecifiedFriends),
	pb.FuncRequestEventName_AddFriend:            wrapFunc(open_im_sdk.IMUserContext.Relation().AddFriend),
	pb.FuncRequestEventName_GetFriendRequests:    wrapFunc(open_im_sdk.IMUserContext.Relation().GetFriendRequests),
	pb.FuncRequestEventName_HandlerFriendRequest: wrapFunc(open_im_sdk.IMUserContext.Relation().HandleFriendRequest),
	pb.FuncRequestEventName_CheckFriend:          wrapFunc(open_im_sdk.IMUserContext.Relation().CheckFriend),
	pb.FuncRequestEventName_DeleteFriend:         wrapFunc(open_im_sdk.IMUserContext.Relation().DeleteFriend),
	pb.FuncRequestEventName_GetFriends:           wrapFunc(open_im_sdk.IMUserContext.Relation().GetFriends),
	pb.FuncRequestEventName_GetFriendsPage:       wrapFunc(open_im_sdk.IMUserContext.Relation().GetFriendsPage),
	pb.FuncRequestEventName_SearchFriends:        wrapFunc(open_im_sdk.IMUserContext.Relation().SearchFriends),
	pb.FuncRequestEventName_AddBlack:             wrapFunc(open_im_sdk.IMUserContext.Relation().AddBlack),
	pb.FuncRequestEventName_DeleteBlack:          wrapFunc(open_im_sdk.IMUserContext.Relation().DeleteBlack),
	pb.FuncRequestEventName_GetBlacks:            wrapFunc(open_im_sdk.IMUserContext.Relation().GetBlacks),
	pb.FuncRequestEventName_UpdateFriends:        wrapFunc(open_im_sdk.IMUserContext.Relation().UpdateFriends),

	pb.FuncRequestEventName_GetAllConversationList:               wrapFunc(open_im_sdk.IMUserContext.Conversation().GetAllConversationList),
	pb.FuncRequestEventName_GetConversationListSplit:             wrapFunc(open_im_sdk.IMUserContext.Conversation().GetConversationListSplit),
	pb.FuncRequestEventName_HideConversation:                     wrapFunc(open_im_sdk.IMUserContext.Conversation().HideConversation),
	pb.FuncRequestEventName_GetAtAllTag:                          wrapFunc(open_im_sdk.IMUserContext.Conversation().GetAtAllTag),
	pb.FuncRequestEventName_GetOneConversation:                   wrapFunc(open_im_sdk.IMUserContext.Conversation().GetOneConversation),
	pb.FuncRequestEventName_GetMultipleConversation:              wrapFunc(open_im_sdk.IMUserContext.Conversation().GetMultipleConversation),
	pb.FuncRequestEventName_HideAllConversations:                 wrapFunc(open_im_sdk.IMUserContext.Conversation().HideAllConversations),
	pb.FuncRequestEventName_SetConversationDraft:                 wrapFunc(open_im_sdk.IMUserContext.Conversation().SetConversationDraft),
	pb.FuncRequestEventName_SetConversation:                      wrapFunc(open_im_sdk.IMUserContext.Conversation().SetConversation),
	pb.FuncRequestEventName_GetTotalUnreadMsgCount:               wrapFunc(open_im_sdk.IMUserContext.Conversation().GetTotalUnreadMsgCount),
	pb.FuncRequestEventName_GetConversationIDBySessionType:       wrapFunc(open_im_sdk.IMUserContext.Conversation().GetConversationIDBySessionType),
	pb.FuncRequestEventName_FindMessageList:                      wrapFunc(open_im_sdk.IMUserContext.Conversation().FindMessageList),
	pb.FuncRequestEventName_GetAdvancedHistoryMessageList:        wrapFunc(open_im_sdk.IMUserContext.Conversation().GetAdvancedHistoryMessageList),
	pb.FuncRequestEventName_GetAdvancedHistoryMessageListReverse: wrapFunc(open_im_sdk.IMUserContext.Conversation().GetAdvancedHistoryMessageListReverse),
	pb.FuncRequestEventName_RevokeMessage:                        wrapFunc(open_im_sdk.IMUserContext.Conversation().RevokeMessage),
	pb.FuncRequestEventName_TypingStatusUpdate:                   wrapFunc(open_im_sdk.IMUserContext.Conversation().TypingStatusUpdate),
	pb.FuncRequestEventName_MarkConversationMessageAsRead:        wrapFunc(open_im_sdk.IMUserContext.Conversation().MarkConversationMessageAsRead),
	pb.FuncRequestEventName_MarkAllConversationMessageAsRead:     wrapFunc(open_im_sdk.IMUserContext.Conversation().MarkAllConversationMessageAsRead),
	pb.FuncRequestEventName_DeleteMessageFromLocalStorage:        wrapFunc(open_im_sdk.IMUserContext.Conversation().DeleteMessageFromLocalStorage),
	pb.FuncRequestEventName_DeleteMessage:                        wrapFunc(open_im_sdk.IMUserContext.Conversation().DeleteMessage),
	pb.FuncRequestEventName_DeleteAllMsgFromLocalAndServer:       wrapFunc(open_im_sdk.IMUserContext.Conversation().DeleteAllMsgFromLocalAndServer),
	pb.FuncRequestEventName_DeleteAllMessageFromLocalStorage:     wrapFunc(open_im_sdk.IMUserContext.Conversation().DeleteAllMessageFromLocalStorage),
	pb.FuncRequestEventName_ClearConversationAndDeleteAllMsg:     wrapFunc(open_im_sdk.IMUserContext.Conversation().ClearConversationAndDeleteAllMsg),
	pb.FuncRequestEventName_DeleteConversationAndDeleteAllMsg:    wrapFunc(open_im_sdk.IMUserContext.Conversation().DeleteConversationAndDeleteAllMsg),
	pb.FuncRequestEventName_InsertSingleMessageToLocalStorage:    wrapFunc(open_im_sdk.IMUserContext.Conversation().InsertSingleMessageToLocalStorage),
	pb.FuncRequestEventName_InsertGroupMessageToLocalStorage:     wrapFunc(open_im_sdk.IMUserContext.Conversation().InsertGroupMessageToLocalStorage),
	pb.FuncRequestEventName_SearchLocalMessages:                  wrapFunc(open_im_sdk.IMUserContext.Conversation().SearchLocalMessages),
	pb.FuncRequestEventName_SetMessageLocalEx:                    wrapFunc(open_im_sdk.IMUserContext.Conversation().SetMessageLocalEx),
	pb.FuncRequestEventName_SearchConversation:                   wrapFunc(open_im_sdk.IMUserContext.Conversation().SearchConversation),
	pb.FuncRequestEventName_SubscribeUsersOnlineStatus:           wrapFunc(open_im_sdk.IMUserContext.Conversation().SubscribeUsersOnlineStatus),
	pb.FuncRequestEventName_UnsubscribeUsersOnlineStatus:         wrapFunc(open_im_sdk.IMUserContext.Conversation().UnsubscribeUsersOnlineStatus),

	pb.FuncRequestEventName_CreateTextMessage:          wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateTextMessage),
	pb.FuncRequestEventName_CreateAdvancedTextMessage:  wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateAdvancedTextMessage),
	pb.FuncRequestEventName_CreateTextAtMessage:        wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateTextAtMessage),
	pb.FuncRequestEventName_CreateLocationMessage:      wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateLocationMessage),
	pb.FuncRequestEventName_CreateCustomMessage:        wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateCustomMessage),
	pb.FuncRequestEventName_CreateQuoteMessage:         wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateQuoteMessage),
	pb.FuncRequestEventName_CreateAdvancedQuoteMessage: wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateAdvancedQuoteMessage),
	pb.FuncRequestEventName_CreateCardMessage:          wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateCardMessage),
	pb.FuncRequestEventName_CreateImageMessage:         wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateImageMessage),
	pb.FuncRequestEventName_CreateSoundMessage:         wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateSoundMessage),
	pb.FuncRequestEventName_CreateVideoMessage:         wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateVideoMessage),
	pb.FuncRequestEventName_CreateFileMessage:          wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateFileMessage),
	pb.FuncRequestEventName_CreateMergerMessage:        wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateMergerMessage),
	pb.FuncRequestEventName_CreateFaceMessage:          wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateFaceMessage),
	pb.FuncRequestEventName_CreateForwardMessage:       wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateForwardMessage),

	pb.FuncRequestEventName_ProcessUserCommandGetAll: wrapFunc(open_im_sdk.IMUserContext.User().ProcessUserCommandGetAll),
	pb.FuncRequestEventName_GetSelfUserInfo:          wrapFunc(open_im_sdk.IMUserContext.User().GetSelfUserInfo),
	pb.FuncRequestEventName_SetSelfInfo:              wrapFunc(open_im_sdk.IMUserContext.User().SetSelfInfo),
	pb.FuncRequestEventName_ProcessUserCommandAdd:    wrapFunc(open_im_sdk.IMUserContext.User().ProcessUserCommandAdd),
	pb.FuncRequestEventName_ProcessUserCommandDelete: wrapFunc(open_im_sdk.IMUserContext.User().ProcessUserCommandDelete),
	pb.FuncRequestEventName_ProcessUserCommandUpdate: wrapFunc(open_im_sdk.IMUserContext.User().ProcessUserCommandUpdate),
	pb.FuncRequestEventName_GetUsersInfo:             wrapFunc(open_im_sdk.IMUserContext.User().GetUsersInfo),
}
