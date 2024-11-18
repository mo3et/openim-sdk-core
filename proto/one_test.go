package proto

import (
	"encoding/json"
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
