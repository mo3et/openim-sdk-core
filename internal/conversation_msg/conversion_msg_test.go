package conversation_msg

import (
	"github.com/openimsdk/openim-sdk-core/v3/pkg/utils"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/common"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
	"strings"
	"testing"
)

func TestName(t *testing.T) {
	content := strings.TrimSpace(s)

	var val any
	if err := utils.JsonStringToStruct(content, &val); err != nil {
		panic(err)
	}

	m := sdkpb.GetContentType(common.ContentType_Merge)
	elem := m.New()
	if err := utils.JsonStringToStruct(content, elem); err != nil {
		panic(err)
	}
	t.Log(elem)

	tmp := &sdkpb.IMMessage{
		ContentType: common.ContentType_Merge,
		Content: &sdkpb.IMMessage_MergeElem{
			MergeElem: elem.(*sdkpb.MergeElem),
		},
	}
	data, err := tmp.FormatContent()
	if err != nil {
		panic(err)
	}

	t.Log(string(data))

}

var s = `
{
  "title" : "jane15512jdjd和k1的聊天记录",
  "abstractList" : [ "jane15512jdjd：[聊天记录]" ],
  "multiMessage" : [ {
    "clientMsgID" : "5bfa8a942dcfd8085b6f545737fb0bf9",
    "serverMsgID" : "877b13575e39ed7a49025250334a16a1",
    "createTime" : 1732161213036,
    "sendTime" : 1732161215490,
    "sessionType" : 1,
    "sendID" : "9400234904",
    "recvID" : "5538979311",
    "msgFrom" : 100,
    "contentType" : 107,
    "senderPlatformID" : 3,
    "senderNickname" : "jane15512jdjd",
    "senderFaceUrl" : "https://web.rentsoft.cn/api_enterprise/object/9400234904/compressed-image_cropper_1730270515855.jpg",
    "seq" : 2,
    "isRead" : false,
    "status" : 2,
    "mergeElem" : {
      "title" : "jane15512jdjd和jane15513的聊天记录",
      "abstractList" : [ "jane15513：[图片]", "jane15512jdjd：234234", "jane15512jdjd：45234543" ],
      "multiMessage" : [ {
        "clientMsgID" : "c6bc75861ae46ebb0972e02264107346",
        "serverMsgID" : "d9fa95a04cd6058397b88379eb8704c1",
        "createTime" : 1730452776273,
        "sendTime" : 1730452778180,
        "sessionType" : 1,
        "sendID" : "7985262660",
        "recvID" : "9400234904",
        "msgFrom" : 100,
        "contentType" : 102,
        "senderPlatformID" : 1,
        "senderNickname" : "jane15513",
        "senderFaceUrl" : "https://web.rentsoft.cn/api_enterprise/object/7985262660/image_cropper_c612d5cf-4f91-4496-97b3-932b93e0f600-13004-000002c764f66e0a.jpg",
        "seq" : 9,
        "isRead" : true,
        "status" : 2,
        "pictureElem" : {
          "sourcePath" : "/var/mobile/Containers/Data/Application/B0A17452-16FE-486B-84BB-A218D16AB339/Library/Caches/494759beee69ab4560498d2a8edb6318_exif.jpg",
          "sourcePicture" : {
            "type" : "image/jpeg",
            "size" : 0,
            "width" : 1280,
            "height" : 2275,
            "url" : "https://web.rentsoft.cn/api_enterprise/object/7985262660/msg_picture_c6bc75861ae46ebb0972e02264107346.jpg"
          },
          "bigPicture" : {
            "type" : "image/jpeg",
            "size" : 0,
            "width" : 1280,
            "height" : 2275,
            "url" : "https://web.rentsoft.cn/api_enterprise/object/7985262660/msg_picture_c6bc75861ae46ebb0972e02264107346.jpg"
          },
          "snapshotPicture" : {
            "size" : 0,
            "width" : 640,
            "height" : 640,
            "url" : "https://web.rentsoft.cn/api_enterprise/object/7985262660/msg_picture_c6bc75861ae46ebb0972e02264107346.jpg?height=640&type=image&width=640"
          }
        },
        "attachedInfoElem" : {
          "groupHasReadInfo" : {
            "hasReadCount" : 0,
            "unreadCount" : 0
          },
          "isPrivateChat" : false,
          "burnDuration" : 0,
          "hasReadTime" : 0,
          "isEncryption" : false,
          "inEncryptStatus" : false
        }
      }, {
        "clientMsgID" : "3eb17b2deb83746a9923e0a226cbad79",
        "serverMsgID" : "7a5cdc6ed948887adb3acc1dec9f4eb6",
        "createTime" : 1732161176732,
        "sendTime" : 1732161178329,
        "sessionType" : 1,
        "sendID" : "9400234904",
        "recvID" : "7985262660",
        "msgFrom" : 100,
        "contentType" : 101,
        "senderPlatformID" : 3,
        "senderNickname" : "jane15512jdjd",
        "senderFaceUrl" : "https://web.rentsoft.cn/api_enterprise/object/9400234904/compressed-image_cropper_1730270515855.jpg",
        "seq" : 10,
        "isRead" : false,
        "status" : 2,
        "textElem" : {
          "content" : "234234"
        },
        "attachedInfoElem" : {
          "groupHasReadInfo" : {
            "hasReadCount" : 1,
            "unreadCount" : 13
          },
          "isPrivateChat" : false,
          "burnDuration" : 0,
          "hasReadTime" : 0,
          "isEncryption" : false,
          "inEncryptStatus" : false
        }
      }, {
        "clientMsgID" : "6b1702dd5741f8ee95aa501ae50bdca7",
        "serverMsgID" : "ab81a519124890eab8d5c102cf311a58",
        "createTime" : 1732161176747,
        "sendTime" : 1732161179394,
        "sessionType" : 1,
        "sendID" : "9400234904",
        "recvID" : "7985262660",
        "msgFrom" : 100,
        "contentType" : 101,
        "senderPlatformID" : 3,
        "senderNickname" : "jane15512jdjd",
        "senderFaceUrl" : "https://web.rentsoft.cn/api_enterprise/object/9400234904/compressed-image_cropper_1730270515855.jpg",
        "seq" : 11,
        "isRead" : false,
        "status" : 2,
        "textElem" : {
          "content" : "45234543"
        },
        "attachedInfoElem" : {
          "groupHasReadInfo" : {
            "hasReadCount" : 0,
            "unreadCount" : 0
          },
          "isPrivateChat" : false,
          "burnDuration" : 0,
          "hasReadTime" : 0,
          "isEncryption" : false,
          "inEncryptStatus" : false
        }
      } ]
    },
    "attachedInfoElem" : {
      "groupHasReadInfo" : {
        "hasReadCount" : 0,
        "unreadCount" : 0
      },
      "isPrivateChat" : false,
      "burnDuration" : 0,
      "hasReadTime" : 0,
      "isEncryption" : false,
      "inEncryptStatus" : false
    }
  } ]
}
`
