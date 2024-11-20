package test

import (
	"context"
	"testing"

	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/conversation"
	// sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto"

	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
)

func Test_GetAllConversationList(t *testing.T) {
	conversations, err := open_im_sdk.UserForSDK.Conversation().GetAllConversationList(ctx, nil)
	if err != nil {
		t.Fatal(err)
	}
	for _, c := range conversations.ConversationList {
		t.Log(c)
	}
}

func Test_GetConversationListSplit(t *testing.T) {
	conversations, err := open_im_sdk.UserForSDK.Conversation().GetConversationListSplit(ctx, &sdkpb.GetConversationListSplitReq{
		Offset: 0,
		Count:  20,
	})
	if err != nil {
		t.Fatal(err)
	}
	for _, c := range conversations.ConversationList {
		t.Log(c)
	}
}

func Test_HideConversation(t *testing.T) {
	_, err := open_im_sdk.UserForSDK.Conversation().HideConversation(ctx, &sdkpb.HideConversationReq{ConversationID: "asdasd"})
	if err != nil {
		t.Fatal(err)
	}
}

//func Test_GetConversationRecvMessageOpt(t *testing.T) {
//	opts, err := open_im_sdk.UserForSDK.Conversation().GetConversationRecvMessageOpt(ctx, []string{"asdasd"})
//	if err != nil {
//		t.Fatal(err)
//	}
//	for _, v := range opts {
//		t.Log(v.ConversationID, *v.Execute)
//	}
//}

func Test_GetGlobalRecvMessageOpt(t *testing.T) {
	opt, err := open_im_sdk.UserForSDK.Conversation().GetOneConversation(ctx, &sdkpb.GetOneConversationReq{
		SessionType: 2,
		SourceID:    "1772958501",
	})
	if err != nil {
		t.Fatal(err)
	}
	t.Log(opt.Conversation)
}

func Test_GetGetMultipleConversation(t *testing.T) {
	conversations, err := open_im_sdk.UserForSDK.Conversation().GetMultipleConversation(ctx, &sdkpb.GetMultipleConversationReq{ConversationIDList: []string{"asdasd"}})
	if err != nil {
		t.Fatal(err)
	}
	for _, v := range conversations.ConversationList {
		t.Log(v)
	}
}

func Test_SetConversationDraft(t *testing.T) {
	_, err := open_im_sdk.UserForSDK.Conversation().SetConversationDraft(ctx, &sdkpb.SetConversationDraftReq{
		ConversationID: "group_17729585012",
		DraftText:      "draft",
	})
	if err != nil {
		t.Fatal(err)
	}
}

func Test_SetConversation(t *testing.T) {
	_, err := open_im_sdk.UserForSDK.Conversation().SetConversation(ctx, &sdkpb.SetConversationReq{
		ConversationID: "group_17729585012",
	})
	if err != nil {
		t.Fatal(err)
	}
}

func Test_GetTotalUnreadMsgCount(t *testing.T) {
	count, err := open_im_sdk.UserForSDK.Conversation().GetTotalUnreadMsgCount(ctx, nil)
	if err != nil {
		t.Fatal(err)
	}
	t.Log(count)
}

func Test_SendMessage(t *testing.T) {
	ctx = context.WithValue(ctx, "callback", TestSendMsg{})
	msg, _ := open_im_sdk.UserForSDK.Conversation().CreateTextMessage(ctx, &sdkpb.CreateTextMessageReq{Text: "textMsg"})
	_, err := open_im_sdk.UserForSDK.Conversation().SendMessage(ctx, &sdkpb.SendMessageReq{
		Message: msg.Message,
	}, nil)
	if err != nil {
		t.Fatal(err)
	}
}

func Test_FindMessageList(t *testing.T) {
	msgs, err := open_im_sdk.UserForSDK.Conversation().FindMessageList(ctx, &sdkpb.FindMessageListReq{})
	if err != nil {
		t.Fatal(err)
	}
	t.Log(msgs.TotalCount)
	for _, v := range msgs.FindResultItems {
		t.Log(v)
	}
}

func Test_GetAdvancedHistoryMessageList(t *testing.T) {
	msgs, err := open_im_sdk.UserForSDK.Conversation().GetAdvancedHistoryMessageList(ctx, nil)
	if err != nil {
		t.Fatal(err)
	}
	for _, v := range msgs.GetAdvancedHistoryMessageListCallback.MessageList {
		t.Log(v)
	}
}

func Test_GetAdvancedHistoryMessageListReverse(t *testing.T) {
	msgs, err := open_im_sdk.UserForSDK.Conversation().GetAdvancedHistoryMessageListReverse(ctx, nil)
	if err != nil {
		t.Fatal(err)
	}
	for _, v := range msgs.GetAdvancedHistoryMessageListCallback.MessageList {
		t.Log(v)
	}
}

//func Test_InsertSingleMessageToLocalStorage(t *testing.T) {
//	_, err := open_im_sdk.UserForSDK.Conversation().InsertSingleMessageToLocalStorage(ctx, &sdk_struct.MsgStruct{}, "3411008330", "")
//	if err != nil {
//		t.Fatal(err)
//	}
//}
//
//func Test_InsertGroupMessageToLocalStorage(t *testing.T) {
//	_, err := open_im_sdk.UserForSDK.Conversation().InsertGroupMessageToLocalStorage(ctx, &sdk_struct.MsgStruct{}, "group_17729585012", "")
//	if err != nil {
//		t.Fatal(err)
//	}
//}
//
//func Test_SearchLocalMessages(t *testing.T) {
//	// req := &sdk_params_callback.SearchLocalMessagesParams{
//	// 	Count:            20,
//	// 	KeywordList:      []string{"1"},
//	// 	MessageTypeList:  []int{105},
//	// 	PageIndex:        1,
//	// 	SenderUserIDList: []string{},
//	// }
//
//	req := &sdk_params_callback.SearchLocalMessagesParams{
//		KeywordList:      []string{"1"},
//		ConversationID:   "sg_3161900504",
//		MessageTypeList:  []int{105},
//		PageIndex:        1,
//		Count:            20,
//		SenderUserIDList: []string{"1695766238"},
//	}
//
//	msgs, err := open_im_sdk.UserForSDK.Conversation().SearchLocalMessages(ctx, req)
//	if err != nil {
//		t.Fatal(err)
//	}
//	for _, v := range msgs.SearchResultItems {
//		t.Log(v)
//	}
//}
//
//func Test_SetMessageLocalEx(t *testing.T) {
//	err := open_im_sdk.UserForSDK.Conversation().SetMessageLocalEx(ctx, "si_2975755104_6386894923", "53ca4b3be29f7ea231a5e82e7af8a43f", "{key,value}")
//	if err != nil {
//		t.Fatal(err)
//	}
//}
//
//func Test_DeleteAllMsgFromLocalAndSvr(t *testing.T) {
//	err := open_im_sdk.UserForSDK.Conversation().DeleteAllMsgFromLocalAndServer(ctx)
//	if err != nil {
//		t.Fatal(err)
//	}
//}
//
//func Test_DeleteAllMessageFromLocalStorage(t *testing.T) {
//	err := open_im_sdk.UserForSDK.Conversation().DeleteAllMessageFromLocalStorage(ctx)
//	if err != nil {
//		t.Fatal(err)
//	}
//}
//
//func Test_DeleteMessage(t *testing.T) {
//	err := open_im_sdk.UserForSDK.Conversation().DeleteMessage(ctx, "si_1695766238_5099153716", "8b67803979bce9c6daf82fb64dbffc5f")
//	if err != nil {
//		t.Fatal(err)
//	}
//}
//
//func Test_ClearConversationAndDeleteAllMsg(t *testing.T) {
//	err := open_im_sdk.UserForSDK.Conversation().ClearConversationAndDeleteAllMsg(ctx, "si_3271407977_7152307910")
//	if err != nil {
//		t.Fatal(err)
//	}
//}
//
//// func Test_RevokeMessage(t *testing.T) {
//// 	err := open_im_sdk.UserForSDK.Conversation().RevokeMessage(ctx, &sdk_struct.MsgStruct{SessionType: 1, ContentType: 101,
//// 		ClientMsgID: "380e2eb1709875340d769880982ebb21", Seq: 57, SendID: "9169012630", RecvID: "2456093263"})
//// 	if err != nil {
//// 		t.Fatal(err)
//// 	}
//// 	time.Sleep(time.Second * 10)
//// }
//
//func Test_MarkConversationMessageAsRead(t *testing.T) {
//	err := open_im_sdk.UserForSDK.Conversation().MarkConversationMessageAsRead(ctx, "si_2688118337_7249315132")
//	if err != nil {
//		t.Fatal(err)
//	}
//}
//
//func Test_MarkAllConversationMessageAsRead(t *testing.T) {
//	err := open_im_sdk.UserForSDK.Conversation().MarkAllConversationMessageAsRead(ctx)
//	if err != nil {
//		t.Fatal(err)
//	}
//}
//
//func Test_MarkMsgsAsRead(t *testing.T) {
//	err := open_im_sdk.UserForSDK.Conversation().MarkMessagesAsReadByMsgID(ctx, "si_2688118337_7249315132",
//		[]string{"fb56ed151b675e0837ed3af79dbf66b1",
//			"635715c539be2e7812a0fc802f0cdc54", "1aba3fae3dc3f61c17e8eb09519cf8e1"})
//	if err != nil {
//		t.Fatal(err)
//	}
//}
//
//func Test_SendImgMsg(t *testing.T) {
//	ctx = context.WithValue(ctx, "callback", TestSendMsg{})
//	msg, err := open_im_sdk.UserForSDK.Conversation().CreateImageMessage(ctx, "C:\\Users\\Admin\\Desktop\\test.png", &sdk_struct.PictureBaseInfo{}, &sdk_struct.PictureBaseInfo{}, &sdk_struct.PictureBaseInfo{})
//	if err != nil {
//		t.Fatal(err)
//	}
//	res, err := open_im_sdk.UserForSDK.Conversation().SendMessage(ctx, msg, "1919501984", "", nil, false)
//	if err != nil {
//		t.Fatal(err)
//	}
//	t.Logf("send smg => %+v\n", res)
//}
//
//func Test_SearchConversation(t *testing.T) {
//	result, err := open_im_sdk.UserForSDK.Conversation().SearchConversation(ctx, "a")
//	if err != nil {
//		t.Fatal(err)
//	}
//	for _, v := range result {
//		t.Log(v)
//	}
//}
