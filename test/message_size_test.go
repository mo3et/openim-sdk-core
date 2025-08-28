package test

import (
	"context"
	"encoding/json"
	"strings"
	"testing"
	"unicode/utf8"

	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/constant"
	"github.com/openimsdk/openim-sdk-core/v3/sdk_struct"
	"github.com/stretchr/testify/assert"
)

// 模拟MongoDB文档结构
type MsgDocModel struct {
	DocID string          `bson:"doc_id"`
	Msg   []*MsgInfoModel `bson:"msgs"`
}

type MsgInfoModel struct {
	Msg     *MsgDataModel `bson:"msg"`
	Revoke  *RevokeModel  `bson:"revoke"`
	DelList []string      `bson:"del_list"`
	IsRead  bool          `bson:"is_read"`
}

type MsgDataModel struct {
	SendID           string            `bson:"send_id"`
	RecvID           string            `bson:"recv_id"`
	GroupID          string            `bson:"group_id"`
	ClientMsgID      string            `bson:"client_msg_id"`
	ServerMsgID      string            `bson:"server_msg_id"`
	SenderPlatformID int32             `bson:"sender_platform_id"`
	SenderNickname   string            `bson:"sender_nickname"`
	SenderFaceURL    string            `bson:"sender_face_url"`
	SessionType      int32             `bson:"session_type"`
	MsgFrom          int32             `bson:"msg_from"`
	ContentType      int32             `bson:"content_type"`
	Content          string            `bson:"content"`
	Seq              int64             `bson:"seq"`
	SendTime         int64             `bson:"send_time"`
	CreateTime       int64             `bson:"create_time"`
	Status           int32             `bson:"status"`
	IsRead           bool              `bson:"is_read"`
	Options          map[string]bool   `bson:"options"`
	OfflinePush      *OfflinePushModel `bson:"offline_push"`
	AtUserIDList     []string          `bson:"at_user_id_list"`
	AttachedInfo     string            `bson:"attached_info"`
	Ex               string            `bson:"ex"`
}

type OfflinePushModel struct {
	Title         string `bson:"title"`
	Desc          string `bson:"desc"`
	Ex            string `bson:"ex"`
	IOSPushSound  string `bson:"ios_push_sound"`
	IOSBadgeCount bool   `bson:"ios_badge_count"`
}

type RevokeModel struct {
	Role     int32  `bson:"role"`
	UserID   string `bson:"user_id"`
	Nickname string `bson:"nickname"`
	Time     int64  `bson:"time"`
}

func Test_MessageSizeLimit(t *testing.T) {
	// MongoDB 文档大小限制 (16MB)
	maxDocSize := 16 * 1024 * 1024
	// 每个文档最多消息数
	maxMsgPerDoc := 100
	// 每条消息的理论最大尺寸
	maxMsgSize := maxDocSize / maxMsgPerDoc
	// 保留的安全余量 (20%)
	safetyFactor := 0.8
	safeMsgSize := int(float64(maxMsgSize) * safetyFactor)

	t.Logf("MongoDB 文档最大限制: %d bytes (%.2f MB)", maxDocSize, float64(maxDocSize)/(1024*1024))
	t.Logf("每个文档最大消息数: %d", maxMsgPerDoc)
	t.Logf("每条消息理论最大尺寸: %d bytes (%.2f KB)", maxMsgSize, float64(maxMsgSize)/1024)
	t.Logf("每条消息安全尺寸 (80%%): %d bytes (%.2f KB)", safeMsgSize, float64(safeMsgSize)/1024)

	// 测试不同字符长度的消息大小
	testSizes := []int{60000, 70000, 80000, 90000}
	for _, size := range testSizes {
		textContent := strings.Repeat("测试消息内容-abcdefg12345", size/15)
		msgSize, docSize := calculateMessageSize(t, textContent)

		t.Logf("文本长度: %d 字符, 消息大小: %d bytes (%.2f KB), 文档大小(100条): %d bytes (%.2f MB)",
			len(textContent), msgSize, float64(msgSize)/1024, docSize, float64(docSize)/(1024*1024))

		// 检查是否超过安全限制
		if docSize > maxDocSize {
			t.Logf("警告: 此消息尺寸超过MongoDB 16MB限制! 不建议使用此长度。")
		} else {
			t.Logf("剩余空间: %d bytes (%.2f KB)", maxDocSize-docSize, float64(maxDocSize-docSize)/1024)
		}
	}

	// 进行二分查找，寻找最佳文本长度
	t.Log("\n开始二分查找最佳文本长度...")
	minLength := 10000
	maxLength := 200000
	bestLength := binarySearchBestSize(t, minLength, maxLength, maxDocSize, maxMsgPerDoc)

	t.Logf("推荐的最大文本长度: %d 字符", bestLength)
	textContent := strings.Repeat("测试消息内容-abcdefg12345", bestLength/15)
	msgSize, docSize := calculateMessageSize(t, textContent)
	docSizePercent := float64(docSize) / float64(maxDocSize) * 100

	t.Logf("最终建议: 消息文本长度限制为 %d 字符", bestLength)
	t.Logf("单条消息大小: %d bytes (%.2f KB)", msgSize, float64(msgSize)/1024)
	t.Logf("100条消息总大小: %d bytes (%.2f MB), 占MongoDB限制的 %.2f%%",
		docSize, float64(docSize)/(1024*1024), docSizePercent)
}

// 计算给定文本内容的消息大小和100条消息的总大小
func calculateMessageSize(t *testing.T, textContent string) (int, int) {
	// 创建文本消息
	msg, err := createTextMessage(context.Background(), textContent)
	assert.NoError(t, err)

	// 创建存储模型
	msgData := convertToMsgDataModel(msg)
	msgInfo := &MsgInfoModel{
		Msg:    msgData,
		IsRead: false,
	}

	// 序列化单条消息计算大小
	msgBytes, err := json.Marshal(msgInfo)
	assert.NoError(t, err)
	msgSize := len(msgBytes)

	// 估算100条消息的总大小
	docSize := msgSize * 100

	return msgSize, docSize
}

// 创建文本消息
func createTextMessage(ctx context.Context, text string) (*sdk_struct.MsgStruct, error) {
	// 模拟SDK的创建消息功能
	s := sdk_struct.MsgStruct{
		TextElem: &sdk_struct.TextElem{Content: text},
	}

	// 填充基本信息
	s.CreateTime = 1628012800000
	s.SendTime = s.CreateTime
	s.IsRead = false
	s.Status = constant.MsgStatusSending
	s.SendID = "test_user_123456"
	s.SenderFaceURL = "https://example.com/avatar.jpg"
	s.SenderNickname = "TestUser"
	s.ClientMsgID = "test_client_msg_id_123456"
	s.MsgFrom = constant.UserMsgType
	s.ContentType = constant.Text
	s.SenderPlatformID = 1
	s.Content = sdk_struct.TextElem{Content: text}.Content

	return &s, nil
}

// 将SDK消息结构转换为MongoDB存储模型
func convertToMsgDataModel(msg *sdk_struct.MsgStruct) *MsgDataModel {
	return &MsgDataModel{
		SendID:           msg.SendID,
		RecvID:           msg.RecvID,
		GroupID:          msg.GroupID,
		ClientMsgID:      msg.ClientMsgID,
		ServerMsgID:      "server_msg_" + msg.ClientMsgID,
		SenderPlatformID: msg.SenderPlatformID,
		SenderNickname:   msg.SenderNickname,
		SenderFaceURL:    msg.SenderFaceURL,
		SessionType:      msg.SessionType,
		MsgFrom:          msg.MsgFrom,
		ContentType:      msg.ContentType,
		Content:          msg.Content, // 这里放入文本内容
		Seq:              msg.Seq,
		SendTime:         msg.SendTime,
		CreateTime:       msg.CreateTime,
		Status:           msg.Status,
		IsRead:           msg.IsRead,
		Options:          map[string]bool{"history": true},
		AttachedInfo:     msg.AttachedInfo,
		Ex:               msg.Ex,
	}
}

// 二分查找最佳文本长度
func binarySearchBestSize(t *testing.T, min int, max int, maxDocSize int, maxMsgPerDoc int) int {
	targetSizePercent := 80.0 // 目标使用MongoDB限制的80%
	targetSize := int(float64(maxDocSize) * targetSizePercent / 100)

	for min <= max {
		mid := min + (max-min)/2
		textContent := strings.Repeat("测试消息内容-abcdefg12345", mid/15)
		_, docSize := calculateMessageSize(t, textContent)

		t.Logf("测试长度: %d, 文档大小: %.2f MB (%.2f%%)",
			mid, float64(docSize)/(1024*1024), float64(docSize)*100/float64(maxDocSize))

		if docSize > targetSize && docSize < maxDocSize {
			return mid // 找到一个刚好在目标范围内的值
		} else if docSize > maxDocSize {
			max = mid - 1 // 太大了，减小长度
		} else {
			min = mid + 1 // 太小了，增加长度
		}
	}

	// 如果没找到完美匹配，返回最接近但不超过限制的值
	return min - 1
}

func Test_SendMessageLarge(t *testing.T) {
	ctx = context.WithValue(ctx, "callback", TestSendMsg{})
	msg, _ := open_im_sdk.IMUserContext.Conversation().CreateTextMessage(ctx, "textMsg")
	_, err := open_im_sdk.IMUserContext.Conversation().SendMessage(ctx, msg, "2278262199", "", nil, false)
	if err != nil {
		t.Fatal(err)
	}
}

// SendLargeMessage 发送一条大型文本消息，使用计算出的推荐消息大小
func SendLargeMessage(t *testing.T) error {
	// 先计算出安全的消息大小限制
	maxDocSize := 16 * 1024 * 1024
	// maxMsgPerDoc := 100

	// 使用之前计算的结果，选择一个安全的文本长度 (75000)
	// 这个值是根据之前的测试结果，在70000-80000范围内选择的安全值
	safeTextLength := 75000

	// 创建大文本内容
	textContent := strings.Repeat("测试消息内容-abcdefg12345", safeTextLength/15)

	// 获取字节长度与字符数
	byteLength := len(textContent)
	charCount := utf8.RuneCountInString(textContent)

	// 获取最终消息大小，用于记录
	msgSize, docSize := calculateMessageSize(t, textContent)
	// t.Logf("发送消息 - 文本长度: %d 字符, 消息大小: %.2f KB, 预估文档大小(100条): %.2f MB (%.2f%%)",
	// 	len(textContent), float64(msgSize)/1024, float64(docSize)/(1024*1024),
	// 	float64(docSize)*100/float64(maxDocSize))

	t.Logf("发送消息 - 字节长度: %d 字节, 字符数: %d 字符, 消息大小: %.2f KB, 预估文档大小(100条): %.2f MB (%.2f%%)",
		byteLength, charCount, float64(msgSize)/1024, float64(docSize)/(1024*1024),
		float64(docSize)*100/float64(maxDocSize))

	// 准备发送回调
	// ctx := context.WithValue(context.Background(), "callback", TestSendMsg{})

	// 创建文本消息
	msg, err := open_im_sdk.IMUserContext.Conversation().CreateTextMessage(ctx, textContent)
	if err != nil {
		t.Logf("创建消息失败: %v", err)
		return err
	}

	// 发送消息
	t.Log("开始发送大型消息...")
	_, err = open_im_sdk.IMUserContext.Conversation().SendMessage(ctx, msg, "2278262199", "", nil, false)
	if err != nil {
		t.Logf("发送消息失败: %v", err)
		return err
	}

	t.Log("大型消息发送成功!")
	// t.Logf("发送消息 - 文本长度: %d 字符, 消息大小: %.2f KB, 预估文档大小(100条): %.2f MB (%.2f%%)",
	// 	len(textContent), float64(msgSize)/1024, float64(docSize)/(1024*1024),
	// 	float64(docSize)*100/float64(maxDocSize))

	t.Logf("发送消息 - 字节长度: %d 字节, 字符数: %d 字符, 消息大小: %.2f KB, 预估文档大小(100条): %.2f MB (%.2f%%)",
		byteLength, charCount, float64(msgSize)/1024, float64(docSize)/(1024*1024),
		float64(docSize)*100/float64(maxDocSize))

	return nil
}

// 保留测试函数用于测试调用
func Test_SendLargeMessage(t *testing.T) {
	// for i := range 4 {
	// t.Logf("第 %d 次发送大消息", i+1)
	err := SendLargeMessage(t)
	if err != nil {
		// t.Fatalf("第 %d 次发送失败: %v", i+1, err)
		t.Fatal(err)
	}
	// }
}
