package test

import (
	"context"
	"testing"

	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/conversation"
	msgpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/message"

	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
)

func Test_GetAllConversationList(t *testing.T) {
	conversations, err := open_im_sdk.IMUserContext.Conversation().GetAllConversationList(ctx, nil)
	if err != nil {
		t.Fatal(err)
	}
	for _, c := range conversations.ConversationList {
		t.Log(c)
	}
}

func Test_GetConversationListSplit(t *testing.T) {
	conversations, err := open_im_sdk.IMUserContext.Conversation().GetConversationListSplit(ctx, &sdkpb.GetConversationListSplitReq{
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
	_, err := open_im_sdk.IMUserContext.Conversation().HideConversation(ctx, &sdkpb.HideConversationReq{ConversationID: "asdasd"})
	if err != nil {
		t.Fatal(err)
	}
}

//func Test_GetConversationRecvMessageOpt(t *testing.T) {
//	opts, err := open_im_sdk.IMUserContext.Conversation().GetConversationRecvMessageOpt(ctx, []string{"asdasd"})
//	if err != nil {
//		t.Fatal(err)
//	}
//	for _, v := range opts {
//		t.Log(v.ConversationID, *v.Execute)
//	}
//}

func Test_GetGlobalRecvMessageOpt(t *testing.T) {
	opt, err := open_im_sdk.IMUserContext.Conversation().GetOneConversation(ctx, &sdkpb.GetOneConversationReq{
		SessionType: 2,
		SourceID:    "1772958501",
	})
	if err != nil {
		t.Fatal(err)
	}
	t.Log(opt.Conversation)
}

func Test_GetGetMultipleConversation(t *testing.T) {
	conversations, err := open_im_sdk.IMUserContext.Conversation().GetMultipleConversation(ctx, &sdkpb.GetMultipleConversationReq{ConversationIDList: []string{"asdasd"}})
	if err != nil {
		t.Fatal(err)
	}
	for _, v := range conversations.ConversationList {
		t.Log(v)
	}
}

func Test_SetConversationDraft(t *testing.T) {
	_, err := open_im_sdk.IMUserContext.Conversation().SetConversationDraft(ctx, &sdkpb.SetConversationDraftReq{
		ConversationID: "group_17729585012",
		DraftText:      "draft",
	})
	if err != nil {
		t.Fatal(err)
	}
}

func Test_SetConversation(t *testing.T) {
	_, err := open_im_sdk.IMUserContext.Conversation().SetConversation(ctx, &sdkpb.SetConversationReq{
		ConversationID: "group_17729585012",
	})
	if err != nil {
		t.Fatal(err)
	}
}

func Test_GetTotalUnreadMsgCount(t *testing.T) {
	count, err := open_im_sdk.IMUserContext.Conversation().GetTotalUnreadMsgCount(ctx, nil)
	if err != nil {
		t.Fatal(err)
	}
	t.Log(count)
}

func Test_SendMessage(t *testing.T) {
	ctx = context.WithValue(ctx, "callback", TestSendMsg{})
	msg, _ := open_im_sdk.IMUserContext.Conversation().CreateTextMessage(ctx, &msgpb.CreateTextMessageReq{Text: "textMsg"})
	_, err := open_im_sdk.IMUserContext.Conversation().SendMessage(ctx, &msgpb.SendMessageReq{
		Message: msg.Message,
	}, nil)
	if err != nil {
		t.Fatal(err)
	}
}

func Test_FindMessageList(t *testing.T) {
	msgs, err := open_im_sdk.IMUserContext.Conversation().FindMessageList(ctx, &sdkpb.FindMessageListReq{})
	if err != nil {
		t.Fatal(err)
	}
	t.Log(msgs.TotalCount)
	for _, v := range msgs.FindResultItems {
		t.Log(v)
	}
}

func Test_GetAdvancedHistoryMessageList(t *testing.T) {
	msgs, err := open_im_sdk.IMUserContext.Conversation().GetAdvancedHistoryMessageList(ctx, nil)
	if err != nil {
		t.Fatal(err)
	}
	for _, v := range msgs.GetAdvancedHistoryMessageListCallback.MessageList {
		t.Log(v)
	}
}

func Test_GetAdvancedHistoryMessageListReverse(t *testing.T) {
	msgs, err := open_im_sdk.IMUserContext.Conversation().GetAdvancedHistoryMessageListReverse(ctx, nil)
	if err != nil {
		t.Fatal(err)
	}
	for _, v := range msgs.GetAdvancedHistoryMessageListCallback.MessageList {
		t.Log(v)
	}
}

func Test_InsertSingleMessageToLocalStorage(t *testing.T) {
	_, err := open_im_sdk.IMUserContext.Conversation().InsertSingleMessageToLocalStorage(ctx, &sdkpb.InsertSingleMessageToLocalStorageReq{
		Msg:    &sdkpb.IMMessage{},
		RecvID: "3411008330",
		SendID: "",
	})
	if err != nil {
		t.Fatal(err)
	}
}

func Test_InsertGroupMessageToLocalStorage(t *testing.T) {
	_, err := open_im_sdk.IMUserContext.Conversation().InsertGroupMessageToLocalStorage(ctx, &sdkpb.InsertGroupMessageToLocalStorageReq{
		Msg:     &sdkpb.IMMessage{},
		GroupID: "group_17729585012",
		SendID:  "",
	})
	if err != nil {
		t.Fatal(err)
	}
}

func Test_SearchLocalMessages(t *testing.T) {
	// req := &sdk_params_callback.SearchLocalMessagesParams{
	// 	Count:            20,
	// 	KeywordList:      []string{"1"},
	// 	MessageTypeList:  []int{105},
	// 	PageIndex:        1,
	// 	SenderUserIDList: []string{},
	// }

	msgs, err := open_im_sdk.IMUserContext.Conversation().SearchLocalMessages(ctx, &sdkpb.SearchLocalMessagesReq{SearchParam: &sdkpb.SearchLocalMessagesParams{
		ConversationID:   "sg_3161900504",
		KeywordList:      []string{"1"},
		SenderUserIDList: []string{"1695766238"},
		MessageTypeList:  []int32{105},
		Count:            20,
	}})
	if err != nil {
		t.Fatal(err)
	}
	for _, v := range msgs.SearchResult.SearchResultItems {
		t.Log(v)
	}
}

func Test_SetMessageLocalEx(t *testing.T) {
	_, err := open_im_sdk.IMUserContext.Conversation().SetMessageLocalEx(ctx, &sdkpb.SetMessageLocalExReq{
		ConversationID: "si_2975755104_6386894923",
		ClientMsgID:    "53ca4b3be29f7ea231a5e82e7af8a43f",
		LocalEx:        "{key,value}",
	})
	if err != nil {
		t.Fatal(err)
	}
}

func Test_DeleteAllMsgFromLocalAndSvr(t *testing.T) {
	_, err := open_im_sdk.IMUserContext.Conversation().DeleteAllMsgFromLocalAndServer(ctx, nil)
	if err != nil {
		t.Fatal(err)
	}
}

func Test_DeleteAllMessageFromLocalStorage(t *testing.T) {
	_, err := open_im_sdk.IMUserContext.Conversation().DeleteAllMessageFromLocalStorage(ctx, nil)
	if err != nil {
		t.Fatal(err)
	}
}

func Test_DeleteMessage(t *testing.T) {
	_, err := open_im_sdk.IMUserContext.Conversation().DeleteMessage(ctx, &sdkpb.DeleteMessageReq{
		ConversationID: "si_1695766238_5099153716",
		ClientMsgID:    "8b67803979bce9c6daf82fb64dbffc5f",
	})
	if err != nil {
		t.Fatal(err)
	}
}

func Test_ClearConversationAndDeleteAllMsg(t *testing.T) {
	_, err := open_im_sdk.IMUserContext.Conversation().ClearConversationAndDeleteAllMsg(ctx, &sdkpb.ClearConversationAndDeleteAllMsgReq{
		ConversationID: "si_3271407977_7152307910",
	})
	if err != nil {
		t.Fatal(err)
	}
}

// func Test_RevokeMessage(t *testing.T) {
// 	err := open_im_sdk.IMUserContext.Conversation().RevokeMessage(ctx, &sdk_struct.MsgStruct{SessionType: 1, ContentType: 101,
// 		ClientMsgID: "380e2eb1709875340d769880982ebb21", Seq: 57, SendID: "9169012630", RecvID: "2456093263"})
// 	if err != nil {
// 		t.Fatal(err)
// 	}
// 	time.Sleep(time.Second * 10)
// }

func Test_MarkConversationMessageAsRead(t *testing.T) {
	_, err := open_im_sdk.IMUserContext.Conversation().MarkConversationMessageAsRead(ctx, &sdkpb.MarkConversationMessageAsReadReq{
		ConversationID: "si_2688118337_7249315132",
	})
	if err != nil {
		t.Fatal(err)
	}
}

func Test_MarkAllConversationMessageAsRead(t *testing.T) {
	_, err := open_im_sdk.IMUserContext.Conversation().MarkAllConversationMessageAsRead(ctx, nil)
	if err != nil {
		t.Fatal(err)
	}
}

func Test_SendImgMsg(t *testing.T) {
	ctx = context.WithValue(ctx, "callback", TestSendMsg{})
	msg, err := open_im_sdk.IMUserContext.Conversation().CreateImageMessage(ctx, &sdkpb.CreateImageMessageReq{
		ImageSourcePath: "C:\\Users\\Admin\\Desktop\\test.png",
		SourcePicture:   &sdkpb.PictureBaseInfo{},
		BigPicture:      &sdkpb.PictureBaseInfo{},
		SnapshotPicture: &sdkpb.PictureBaseInfo{},
	})
	if err != nil {
		t.Fatal(err)
	}
	res, err := open_im_sdk.IMUserContext.Conversation().SendMessage(ctx, &sdkpb.SendMessageReq{
		Message:         msg.Message,
		RecvID:          "1919501984",
		GroupID:         "",
		OfflinePushInfo: nil,
		IsOnlineOnly:    false,
	}, nil)
	if err != nil {
		t.Fatal(err)
	}
	t.Logf("send smg => %+v\n", res)
}

func Test_SearchConversation(t *testing.T) {
	result, err := open_im_sdk.IMUserContext.Conversation().SearchConversation(ctx, &sdkpb.SearchConversationReq{SearchParam: "a"})
	if err != nil {
		t.Fatal(err)
	}
	for _, v := range result.ConversationList {
		t.Log(v)
	}
}
