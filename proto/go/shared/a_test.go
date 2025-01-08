package shared

import (
	"encoding/json"
	"reflect"
	"strings"
	"testing"
	"unsafe"
)

func TestName1111(t *testing.T) {
	data := []byte(strings.TrimSpace(teststr))
	var elem MergeElem
	if err := json.Unmarshal(data, &elem); err != nil {
		t.Fatal(err)
		return
	}
	t.Log("success")
}

func TestName111111(t *testing.T) {
	tx := any(&IMMessage_TextElem{TextElem: &TextElem{Content: "hello world!"}})
	t.Logf("%T", tx)
	a := reflect.ValueOf(tx).Elem().Field(0).Interface()
	t.Logf("%T", a)
	type tmp struct {
		Data any
	}
	v := (*(*tmp)(unsafe.Pointer(&tx))).Data
	t.Logf("%T", v)
	t.Log(v)
}

var teststr = `
{
  "title" : "和jane15512的聊天记录",
  "abstractList" : [ "jane15511：[聊天记录]" ],
  "multiMessage" : [ {
    "clientMsgID" : "8e66734ecda9914a6a14275fdde34be0",
    "serverMsgID" : "faa62e4a7d383fb7828df374619b877c",
    "createTime" : 1730189692305,
    "sendTime" : 1730189693207,
    "sessionType" : 1,
    "sendID" : "8441096703",
    "recvID" : "9400234904",
    "msgFrom" : 100,
    "contentType" : 107,
    "senderPlatformID" : 5,
    "senderNickname" : "jane15511",
    "content" : "{\"title\":\"和jane15512的聊天记录\",\"abstractList\":[\"jane15511：后悔\"],\"multiMessage\":[{\"clientMsgID\":\"6800823652807053887c9985fabdf9d5\",\"serverMsgID\":\"5dda3a97b87c16149a8302557d9a1c38\",\"createTime\":1730189657096,\"sendTime\":1730189657611,\"sessionType\":1,\"sendID\":\"8441096703\",\"recvID\":\"9400234904\",\"msgFrom\":100,\"contentType\":101,\"senderPlatformID\":5,\"senderNickname\":\"jane15511\",\"seq\":0,\"isRead\":false,\"status\":2,\"textElem\":{\"content\":\"后悔\"}}]}",
    "seq" : 0,
    "isRead" : true,
    "status" : 2,
    "mergeElem" : {
      "title" : "和jane15512的聊天记录",
      "abstractList" : [ "jane15511：后悔" ],
      "multiMessage" : [ {
        "clientMsgID" : "6800823652807053887c9985fabdf9d5",
        "serverMsgID" : "5dda3a97b87c16149a8302557d9a1c38",
        "createTime" : 1730189657096,
        "sendTime" : 1730189657611,
        "sessionType" : 1,
        "sendID" : "8441096703",
        "recvID" : "9400234904",
        "msgFrom" : 100,
        "contentType" : 101,
        "senderPlatformID" : 5,
        "senderNickname" : "jane15511",
        "seq" : 0,
        "isRead" : false,
        "status" : 2,
        "textElem" : {
          "content" : "后悔"
        }
      } ]
    }
  } ]
}
`
