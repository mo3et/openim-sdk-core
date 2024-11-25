package model_struct

import (
	"github.com/openimsdk/openim-sdk-core/v3/pkg/utils"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"testing"
	"time"
)

func TestLocalConversation(t *testing.T) {
	db, err := gorm.Open(sqlite.Open(":memory:"), &gorm.Config{})
	if err != nil {
		panic(err)
	}
	db = db.Debug()
	if err := db.AutoMigrate(&LocalConversation{}); err != nil {
		panic(err)
	}
	cs := []*LocalConversation{
		{
			ConversationID: "1",
			LatestMsg: &LocalChatLog{
				ClientMsgID: "1",
				Content:     "hello_1",
			},
		},
		{
			ConversationID: "2",
			LatestMsg: &LocalChatLog{
				ClientMsgID: "",
			},
		},
	}
	if err := db.Session(&gorm.Session{}).Table(utils.GetTableName(cs[0].ConversationID)).Migrator().AutoMigrate(&LocalChatLog{}); err != nil {
		panic(err)
	}
	if err := db.Table(utils.GetTableName(cs[0].ConversationID)).Create(cs[0].LatestMsg).Error; err != nil {
		panic(err)
	}
	if err := db.Create(&cs).Error; err != nil {
		panic(err)
	}
	if err := db.Model(&LocalConversation{}).Where("conversation_id", "2").Updates(map[string]any{"latest_msg": &LocalChatLog{ClientMsgID: "2", Content: "hello_2"}}).Error; err != nil {
		panic(err)
	}
	if err := db.Session(&gorm.Session{}).Table(utils.GetTableName("2")).Migrator().AutoMigrate(&LocalChatLog{}); err != nil {
		panic(err)
	}
	if err := db.Table(utils.GetTableName("2")).Create(&LocalChatLog{ClientMsgID: "2", Content: "hello_2"}).Error; err != nil {
		panic(err)
	}
	var cs1 []*LocalConversation
	if err := db.Find(&cs1).Error; err != nil {
		panic(err)
	}
	for _, c := range cs1 {
		t.Logf("%+v", c)
	}
}

func TestLocalVersionSync(t *testing.T) {
	val := &LocalVersionSync{
		Table:      "table",
		EntityID:   "1234",
		VersionID:  "5678",
		Version:    1,
		CreateTime: time.Now().Unix(),
		UIDList:    []string{"1", "2", "3"},
	}
	db, err := gorm.Open(sqlite.Open(":memory:"), &gorm.Config{})
	if err != nil {
		panic(err)
	}
	if err := db.AutoMigrate(&LocalVersionSync{}); err != nil {
		panic(err)
	}
	db = db.Debug()
	if err := db.Create(val).Error; err != nil {
		panic(err)
	}
	var val1 LocalVersionSync
	if err := db.First(&val1).Error; err != nil {
		panic(err)
	}
	t.Logf("%+v", val1)
}
