package shared

import (
	"fmt"
	"testing"
)

func TestName(t *testing.T) {

	var temp *IMMessage
	fmt.Println(temp.GetAttachedInfoElem().GetProgress())

	//var n *name
	//
	//t.Log(n.GetName())

}

type name struct {
	a string
}

func (n name) GetName() string {
	return "n.a"
}
