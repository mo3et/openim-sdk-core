package base

import (
	"context"
	"fmt"
	"time"

	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/serializer"
	sdkcommon "github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	sdkevent "github.com/openimsdk/openim-sdk-core/v3/proto/go/event"
	"github.com/openimsdk/tools/log"
	"github.com/openimsdk/tools/mw"
)

// Functions to ignore in the process logging
var ignoredLogFuncMap = map[sdkevent.FuncRequestEventName]struct{}{
	sdkevent.FuncRequestEventName_Log: {},
}

func wrapFunc[A, B any](fn func(ctx context.Context, req *A) (*B, error)) callFunc {
	return func(ctx context.Context, _ uint64, name sdkevent.FuncRequestEventName, req []byte) (resp []byte, err error) {
		start := time.Now()
		var (
			pbReq  A
			pbResp *B
		)
		defer func(start time.Time) {
			if r := recover(); r != nil {
				err = sdkerrs.ErrInternal.WrapMsg(fmt.Sprintf("panic %+v", r))
				mw.PanicStackToLog(ctx, r)
			}
			if _, ignored := ignoredLogFuncMap[name]; ignored {
				return
			}
			elapsed := time.Since(start).Milliseconds()
			if err == nil {
				log.ZInfo(ctx, fmt.Sprintf("[%s -> Go SDK] Response Success - %s", sdkcommon.AppFramework_name[int32(open_im_sdk.IMUserContext.Info().AppFramework)],
					sdkevent.FuncRequestEventName_name[int32(name)]), "duration", fmt.Sprintf("%d ms", elapsed), "resp", pbResp)
			} else {
				log.ZError(ctx, fmt.Sprintf("[%s -> Go SDK] Response Error - %s", sdkcommon.AppFramework_name[int32(open_im_sdk.IMUserContext.Info().AppFramework)],
					sdkevent.FuncRequestEventName_name[int32(name)]), mw.FormatError(err), "duration", fmt.Sprintf("%d ms", elapsed))

			}
		}(start)

		if err := serializer.GetInstance().Unmarshal(req, any(&pbReq)); err != nil {
			return nil, err
		}

		if _, ignored := ignoredLogFuncMap[name]; !ignored {
			log.ZInfo(ctx, fmt.Sprintf("[%s -> Go SDK]  Request - %s", sdkcommon.AppFramework_name[int32(open_im_sdk.IMUserContext.Info().AppFramework)],
				sdkevent.FuncRequestEventName_name[int32(name)]), "req", pbReq)
		}

		pbResp, err = fn(ctx, &pbReq)
		if err != nil {
			return nil, err
		}

		return serializer.GetInstance().Marshal(any(pbResp))
	}
}

func wrapFuncWithCallback[A, B, C any](fn func(ctx context.Context, req *A, callback C) (*B, error)) callFunc {
	return func(ctx context.Context, handlerID uint64, name sdkevent.FuncRequestEventName, req []byte) (resp []byte, err error) {
		start := time.Now()
		var (
			pbReq  A
			pbResp *B
		)
		defer func(start time.Time) {
			if r := recover(); r != nil {
				err = sdkerrs.ErrInternal.WrapMsg(fmt.Sprintf("panic %+v", r))
				mw.PanicStackToLog(ctx, r)
			}
			elapsed := time.Since(start).Milliseconds()
			if err == nil {
				log.ZInfo(ctx, fmt.Sprintf("[%s -> Go SDK] Response Success - %s", sdkcommon.AppFramework_name[int32(open_im_sdk.IMUserContext.Info().AppFramework)],
					sdkevent.FuncRequestEventName_name[int32(name)]), "duration", fmt.Sprintf("%d ms", elapsed), "resp", pbResp)
			} else {
				log.ZError(ctx, fmt.Sprintf("[%s -> Go SDK] Response Error - %s", sdkcommon.AppFramework_name[int32(open_im_sdk.IMUserContext.Info().AppFramework)],
					sdkevent.FuncRequestEventName_name[int32(name)]), mw.FormatError(err), "duration", fmt.Sprintf("%d ms", elapsed))

			}
		}(start)
		if err := serializer.GetInstance().Unmarshal(req, any(&pbReq)); err != nil {
			return nil, err
		}
		log.ZInfo(ctx, fmt.Sprintf("[%s -> Go SDK]  Request - %s", sdkcommon.AppFramework_name[int32(open_im_sdk.IMUserContext.Info().AppFramework)],
			sdkevent.FuncRequestEventName_name[int32(name)]), "req", pbReq)
		cb, ok := callbackRegistry[name]
		if !ok {
			return nil, sdkerrs.ErrInternal.WrapMsg("callback maybe not registered")
		}
		pbResp, err = fn(ctx, &pbReq, cb(handlerID).(C))
		if err != nil {
			return nil, err
		}
		return serializer.GetInstance().Marshal(any(pbResp))
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

var callbackRegistry = map[sdkevent.FuncRequestEventName]callbackFunc{
	sdkevent.FuncRequestEventName_SendMessage: wrapCallbackConstructor(NewSendMessageCallback),
	sdkevent.FuncRequestEventName_UploadLogs:  wrapCallbackConstructor(NewUploadLogsCallback),
	sdkevent.FuncRequestEventName_UploadFile:  wrapCallbackConstructor(NewUploadFileCallback),
}

var FuncMap = map[sdkevent.FuncRequestEventName]callFunc{
	sdkevent.FuncRequestEventName_InitSDK:                wrapFunc(open_im_sdk.IMUserContext.InitSDK),
	sdkevent.FuncRequestEventName_Login:                  wrapFunc(open_im_sdk.IMUserContext.Login),
	sdkevent.FuncRequestEventName_Logout:                 wrapFunc(open_im_sdk.IMUserContext.Logout),
	sdkevent.FuncRequestEventName_SetAppBackgroundStatus: wrapFunc(open_im_sdk.IMUserContext.SetAppBackgroundStatus),
	sdkevent.FuncRequestEventName_NetworkStatusChanged:   wrapFunc(open_im_sdk.IMUserContext.NetworkStatusChanged),
	sdkevent.FuncRequestEventName_GetLoginStatus:         wrapFunc(open_im_sdk.IMUserContext.GetLoginStatus),
	sdkevent.FuncRequestEventName_Version:                wrapFunc(open_im_sdk.IMUserContext.Version),

	sdkevent.FuncRequestEventName_SendMessage: wrapFuncWithCallback(open_im_sdk.IMUserContext.Conversation().SendMessage),
	sdkevent.FuncRequestEventName_UploadLogs:  wrapFuncWithCallback(open_im_sdk.IMUserContext.Third().UploadSDKData),
	sdkevent.FuncRequestEventName_UploadFile:  wrapFuncWithCallback(open_im_sdk.IMUserContext.Third().UploadFile),

	sdkevent.FuncRequestEventName_Log:            wrapFunc(open_im_sdk.IMUserContext.Third().Log),
	sdkevent.FuncRequestEventName_UpdateFcmToken: wrapFunc(open_im_sdk.IMUserContext.Third().UpdateFcmToken),
	sdkevent.FuncRequestEventName_SetAppBadge:    wrapFunc(open_im_sdk.IMUserContext.Third().SetAppBadge),

	sdkevent.FuncRequestEventName_CreateGroup:                     wrapFunc(open_im_sdk.IMUserContext.Group().CreateGroup),
	sdkevent.FuncRequestEventName_JoinGroup:                       wrapFunc(open_im_sdk.IMUserContext.Group().JoinGroup),
	sdkevent.FuncRequestEventName_QuitGroup:                       wrapFunc(open_im_sdk.IMUserContext.Group().QuitGroup),
	sdkevent.FuncRequestEventName_DismissGroup:                    wrapFunc(open_im_sdk.IMUserContext.Group().DismissGroup),
	sdkevent.FuncRequestEventName_ChangeGroupMute:                 wrapFunc(open_im_sdk.IMUserContext.Group().ChangeGroupMute),
	sdkevent.FuncRequestEventName_ChangeGroupMemberMute:           wrapFunc(open_im_sdk.IMUserContext.Group().ChangeGroupMemberMute),
	sdkevent.FuncRequestEventName_TransferGroupOwner:              wrapFunc(open_im_sdk.IMUserContext.Group().TransferGroupOwner),
	sdkevent.FuncRequestEventName_KickGroupMember:                 wrapFunc(open_im_sdk.IMUserContext.Group().KickGroupMember),
	sdkevent.FuncRequestEventName_SetGroupInfo:                    wrapFunc(open_im_sdk.IMUserContext.Group().SetGroupInfo),
	sdkevent.FuncRequestEventName_SetGroupMemberInfo:              wrapFunc(open_im_sdk.IMUserContext.Group().SetGroupMemberInfo),
	sdkevent.FuncRequestEventName_GetJoinedGroups:                 wrapFunc(open_im_sdk.IMUserContext.Group().GetJoinedGroups),
	sdkevent.FuncRequestEventName_GetJoinedGroupsPage:             wrapFunc(open_im_sdk.IMUserContext.Group().GetJoinedGroupsPage),
	sdkevent.FuncRequestEventName_GetSpecifiedGroupsInfo:          wrapFunc(open_im_sdk.IMUserContext.Group().GetSpecifiedGroupsInfo),
	sdkevent.FuncRequestEventName_SearchGroups:                    wrapFunc(open_im_sdk.IMUserContext.Group().SearchGroups),
	sdkevent.FuncRequestEventName_GetGroupMemberOwnerAndAdmin:     wrapFunc(open_im_sdk.IMUserContext.Group().GetGroupMemberOwnerAndAdmin),
	sdkevent.FuncRequestEventName_GetGroupMembersByJoinTimeFilter: wrapFunc(open_im_sdk.IMUserContext.Group().GetGroupMembersByJoinTimeFilter),
	sdkevent.FuncRequestEventName_GetSpecifiedGroupMembersInfo:    wrapFunc(open_im_sdk.IMUserContext.Group().GetSpecifiedGroupMembersInfo),
	sdkevent.FuncRequestEventName_GetGroupMembers:                 wrapFunc(open_im_sdk.IMUserContext.Group().GetGroupMembers),
	sdkevent.FuncRequestEventName_GetGroupApplication:             wrapFunc(open_im_sdk.IMUserContext.Group().GetGroupApplication),
	sdkevent.FuncRequestEventName_SearchGroupMembers:              wrapFunc(open_im_sdk.IMUserContext.Group().SearchGroupMembers),
	sdkevent.FuncRequestEventName_IsJoinGroup:                     wrapFunc(open_im_sdk.IMUserContext.Group().IsJoinGroup),
	sdkevent.FuncRequestEventName_GetUsersInGroup:                 wrapFunc(open_im_sdk.IMUserContext.Group().GetUsersInGroup),
	sdkevent.FuncRequestEventName_InviteUserToGroup:               wrapFunc(open_im_sdk.IMUserContext.Group().InviteUserToGroup),
	sdkevent.FuncRequestEventName_HandleGroupApplication:          wrapFunc(open_im_sdk.IMUserContext.Group().HandleGroupApplication),

	sdkevent.FuncRequestEventName_GetSpecifiedFriends:     wrapFunc(open_im_sdk.IMUserContext.Relation().GetSpecifiedFriends),
	sdkevent.FuncRequestEventName_AddFriend:               wrapFunc(open_im_sdk.IMUserContext.Relation().AddFriend),
	sdkevent.FuncRequestEventName_GetFriendApplication:    wrapFunc(open_im_sdk.IMUserContext.Relation().GetFriendApplication),
	sdkevent.FuncRequestEventName_HandleFriendApplication: wrapFunc(open_im_sdk.IMUserContext.Relation().HandleFriendApplication),
	sdkevent.FuncRequestEventName_CheckFriend:             wrapFunc(open_im_sdk.IMUserContext.Relation().CheckFriend),
	sdkevent.FuncRequestEventName_DeleteFriend:            wrapFunc(open_im_sdk.IMUserContext.Relation().DeleteFriend),
	sdkevent.FuncRequestEventName_GetFriends:              wrapFunc(open_im_sdk.IMUserContext.Relation().GetFriends),
	sdkevent.FuncRequestEventName_GetFriendsPage:          wrapFunc(open_im_sdk.IMUserContext.Relation().GetFriendsPage),
	sdkevent.FuncRequestEventName_SearchFriends:           wrapFunc(open_im_sdk.IMUserContext.Relation().SearchFriends),
	sdkevent.FuncRequestEventName_AddBlack:                wrapFunc(open_im_sdk.IMUserContext.Relation().AddBlack),
	sdkevent.FuncRequestEventName_DeleteBlack:             wrapFunc(open_im_sdk.IMUserContext.Relation().DeleteBlack),
	sdkevent.FuncRequestEventName_GetBlacks:               wrapFunc(open_im_sdk.IMUserContext.Relation().GetBlacks),
	sdkevent.FuncRequestEventName_UpdateFriend:            wrapFunc(open_im_sdk.IMUserContext.Relation().UpdateFriend),

	sdkevent.FuncRequestEventName_GetAllConversationList:            wrapFunc(open_im_sdk.IMUserContext.Conversation().GetAllConversationList),
	sdkevent.FuncRequestEventName_GetConversationListSplit:          wrapFunc(open_im_sdk.IMUserContext.Conversation().GetConversationListSplit),
	sdkevent.FuncRequestEventName_HideConversation:                  wrapFunc(open_im_sdk.IMUserContext.Conversation().HideConversation),
	sdkevent.FuncRequestEventName_GetAtAllTag:                       wrapFunc(open_im_sdk.IMUserContext.Conversation().GetAtAllTag),
	sdkevent.FuncRequestEventName_GetOneConversation:                wrapFunc(open_im_sdk.IMUserContext.Conversation().GetOneConversation),
	sdkevent.FuncRequestEventName_GetMultipleConversation:           wrapFunc(open_im_sdk.IMUserContext.Conversation().GetMultipleConversation),
	sdkevent.FuncRequestEventName_HideAllConversations:              wrapFunc(open_im_sdk.IMUserContext.Conversation().HideAllConversations),
	sdkevent.FuncRequestEventName_SetConversationDraft:              wrapFunc(open_im_sdk.IMUserContext.Conversation().SetConversationDraft),
	sdkevent.FuncRequestEventName_SetConversation:                   wrapFunc(open_im_sdk.IMUserContext.Conversation().SetConversation),
	sdkevent.FuncRequestEventName_GetTotalUnreadMsgCount:            wrapFunc(open_im_sdk.IMUserContext.Conversation().GetTotalUnreadMsgCount),
	sdkevent.FuncRequestEventName_GetConversationIDBySessionType:    wrapFunc(open_im_sdk.IMUserContext.Conversation().GetConversationIDBySessionType),
	sdkevent.FuncRequestEventName_FindMessageList:                   wrapFunc(open_im_sdk.IMUserContext.Conversation().FindMessageList),
	sdkevent.FuncRequestEventName_GetHistoryMessageList:             wrapFunc(open_im_sdk.IMUserContext.Conversation().GetHistoryMessageList),
	sdkevent.FuncRequestEventName_RevokeMessage:                     wrapFunc(open_im_sdk.IMUserContext.Conversation().RevokeMessage),
	sdkevent.FuncRequestEventName_TypingStatusUpdate:                wrapFunc(open_im_sdk.IMUserContext.Conversation().TypingStatusUpdate),
	sdkevent.FuncRequestEventName_MarkConversationMessageAsRead:     wrapFunc(open_im_sdk.IMUserContext.Conversation().MarkConversationMessageAsRead),
	sdkevent.FuncRequestEventName_MarkAllConversationMessageAsRead:  wrapFunc(open_im_sdk.IMUserContext.Conversation().MarkAllConversationMessageAsRead),
	sdkevent.FuncRequestEventName_DeleteMessageFromLocal:            wrapFunc(open_im_sdk.IMUserContext.Conversation().DeleteMessageFromLocal),
	sdkevent.FuncRequestEventName_DeleteMessage:                     wrapFunc(open_im_sdk.IMUserContext.Conversation().DeleteMessage),
	sdkevent.FuncRequestEventName_DeleteAllMsgFromLocalAndServer:    wrapFunc(open_im_sdk.IMUserContext.Conversation().DeleteAllMsgFromLocalAndServer),
	sdkevent.FuncRequestEventName_DeleteAllMessageFromLocal:         wrapFunc(open_im_sdk.IMUserContext.Conversation().DeleteAllMessageFromLocal),
	sdkevent.FuncRequestEventName_ClearConversationAndDeleteAllMsg:  wrapFunc(open_im_sdk.IMUserContext.Conversation().ClearConversationAndDeleteAllMsg),
	sdkevent.FuncRequestEventName_DeleteConversationAndDeleteAllMsg: wrapFunc(open_im_sdk.IMUserContext.Conversation().DeleteConversationAndDeleteAllMsg),
	sdkevent.FuncRequestEventName_InsertSingleMessageToLocal:        wrapFunc(open_im_sdk.IMUserContext.Conversation().InsertSingleMessageToLocal),
	sdkevent.FuncRequestEventName_InsertGroupMessageToLocal:         wrapFunc(open_im_sdk.IMUserContext.Conversation().InsertGroupMessageToLocal),
	sdkevent.FuncRequestEventName_SearchLocalMessages:               wrapFunc(open_im_sdk.IMUserContext.Conversation().SearchLocalMessages),
	sdkevent.FuncRequestEventName_SetMessageLocalEx:                 wrapFunc(open_im_sdk.IMUserContext.Conversation().SetMessageLocalEx),
	sdkevent.FuncRequestEventName_SearchConversation:                wrapFunc(open_im_sdk.IMUserContext.Conversation().SearchConversation),
	sdkevent.FuncRequestEventName_SubscribeUsersOnlineStatus:        wrapFunc(open_im_sdk.IMUserContext.Conversation().SubscribeUsersOnlineStatus),
	sdkevent.FuncRequestEventName_UnsubscribeUsersOnlineStatus:      wrapFunc(open_im_sdk.IMUserContext.Conversation().UnsubscribeUsersOnlineStatus),
	sdkevent.FuncRequestEventName_ChangeInputStates:                 wrapFunc(open_im_sdk.IMUserContext.Conversation().ChangeInputStates),
	sdkevent.FuncRequestEventName_GetInputStates:                    wrapFunc(open_im_sdk.IMUserContext.Conversation().GetInputStates),

	sdkevent.FuncRequestEventName_CreateTextMessage:          wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateTextMessage),
	sdkevent.FuncRequestEventName_CreateAdvancedTextMessage:  wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateAdvancedTextMessage),
	sdkevent.FuncRequestEventName_CreateTextAtMessage:        wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateTextAtMessage),
	sdkevent.FuncRequestEventName_CreateLocationMessage:      wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateLocationMessage),
	sdkevent.FuncRequestEventName_CreateCustomMessage:        wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateCustomMessage),
	sdkevent.FuncRequestEventName_CreateQuoteMessage:         wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateQuoteMessage),
	sdkevent.FuncRequestEventName_CreateAdvancedQuoteMessage: wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateAdvancedQuoteMessage),
	sdkevent.FuncRequestEventName_CreateCardMessage:          wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateCardMessage),
	sdkevent.FuncRequestEventName_CreateImageMessage:         wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateImageMessage),
	sdkevent.FuncRequestEventName_CreateSoundMessage:         wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateSoundMessage),
	sdkevent.FuncRequestEventName_CreateVideoMessage:         wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateVideoMessage),
	sdkevent.FuncRequestEventName_CreateFileMessage:          wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateFileMessage),
	sdkevent.FuncRequestEventName_CreateMergerMessage:        wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateMergerMessage),
	sdkevent.FuncRequestEventName_CreateFaceMessage:          wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateFaceMessage),
	sdkevent.FuncRequestEventName_CreateForwardMessage:       wrapFunc(open_im_sdk.IMUserContext.Conversation().CreateForwardMessage),

	sdkevent.FuncRequestEventName_ProcessUserCommandGetAll: wrapFunc(open_im_sdk.IMUserContext.User().ProcessUserCommandGetAll),
	sdkevent.FuncRequestEventName_GetSelfUserInfo:          wrapFunc(open_im_sdk.IMUserContext.User().GetSelfUserInfo),
	sdkevent.FuncRequestEventName_SetSelfInfo:              wrapFunc(open_im_sdk.IMUserContext.User().SetSelfInfo),
	sdkevent.FuncRequestEventName_ProcessUserCommandAdd:    wrapFunc(open_im_sdk.IMUserContext.User().ProcessUserCommandAdd),
	sdkevent.FuncRequestEventName_ProcessUserCommandDelete: wrapFunc(open_im_sdk.IMUserContext.User().ProcessUserCommandDelete),
	sdkevent.FuncRequestEventName_ProcessUserCommandUpdate: wrapFunc(open_im_sdk.IMUserContext.User().ProcessUserCommandUpdate),
	sdkevent.FuncRequestEventName_GetUsersInfo:             wrapFunc(open_im_sdk.IMUserContext.User().GetUsersInfo),
}
