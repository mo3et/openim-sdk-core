package proto

import (
	"encoding/json"
	"testing"

	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
	thirdpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/third"
	"google.golang.org/protobuf/proto"
	anypb "google.golang.org/protobuf/types/known/anypb"
)

func TestName(t *testing.T) {
	val := sdkpb.IMMessage{
		Content: &sdkpb.IMMessage_TextElem{
			TextElem: &sdkpb.TextElem{
				Content: "hello",
			},
		},
	}
	data, err := json.Marshal(&val)
	if err != nil {
		panic(err)
	}

	t.Log(string(data))
}

func must[V any](v V, err error) V {
	if err != nil {
		panic(err)
	}
	return v
}

func TestName2(t *testing.T) {
	user := sdkpb.IMUser{
		UserID:   "123",
		Nickname: "hello",
		FaceURL:  "",
	}
	req := thirdpb.LogReq{
		Kvs: []*thirdpb.LogKv{
			{
				Key: "key",
				Value: &anypb.Any{
					TypeUrl: typeURL(&user),
					Value:   must(proto.Marshal(&user)),
				},
			},
		},
	}
	data := must(proto.Marshal(&req))
	t.Log(string(data))

	var req2 thirdpb.LogReq
	must(1, proto.Unmarshal(data, &req2))
	t.Log(req2.Kvs)
}

func typeURL(m proto.Message) string {
	descriptor := m.ProtoReflect().Descriptor()
	return string(descriptor.ParentFile().Package()) + "." + string(descriptor.Name())
}
