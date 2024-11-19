package proto

import (
	"encoding/json"
	"google.golang.org/protobuf/proto"
	anypb "google.golang.org/protobuf/types/known/anypb"
	"testing"
)

func TestName(t *testing.T) {
	val := IMMessage{
		Content: &IMMessage_TextElem{
			TextElem: &TextElem{
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
	user := UserInfo{
		UserID:   "123",
		Nickname: "hello",
		FaceURL:  "",
	}
	req := LogReq{
		Kvs: []*LogKv{
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

	var req2 LogReq
	must(1, proto.Unmarshal(data, &req2))
	t.Log(req2.Kvs)
}

func typeURL(m proto.Message) string {
	descriptor := m.ProtoReflect().Descriptor()
	return string(descriptor.ParentFile().Package()) + "." + string(descriptor.Name())
}
