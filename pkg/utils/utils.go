package utils

import (
	"crypto/md5"
	"encoding/hex"
	"encoding/json"
	"sort"

	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/constant"
	"github.com/pkg/errors"

	"math/rand"
	"runtime"
	"strconv"
	"strings"
	"time"
)

func OperationIDGenerator() string {
	return strconv.FormatInt(time.Now().UnixNano()+int64(rand.Uint32()), 10)
}
func GetMsgID(sendID string) string {
	t := Int64ToString(GetCurrentTimestampByNano())
	return Md5(t + sendID + Int64ToString(rand.Int63n(GetCurrentTimestampByNano())))
}
func Md5(s string) string {
	h := md5.New()
	h.Write([]byte(s))
	cipher := h.Sum(nil)
	return hex.EncodeToString(cipher)
}

// Get the current timestamp by Mill
func GetCurrentTimestampByMill() int64 {
	return time.Now().UnixNano() / 1e6
}

// Get the current timestamp by Nano
func GetCurrentTimestampByNano() int64 {
	return time.Now().UnixNano()
}

func StructToJsonString(param any) string {
	dataType, err := json.Marshal(param)
	if err != nil {
		panic(err)
	}
	dataString := string(dataType)
	return dataString
}

// The incoming parameter must be a pointer
func JsonStringToStruct(s string, args any) error {
	return Wrap(json.Unmarshal([]byte(s), args), "json Unmarshal failed")
}

func UnixSecondToTime(second int64) time.Time {
	return time.Unix(second, 0)
}
func IntToString(i int) string {
	return strconv.FormatInt(int64(i), 10)
}
func Int64ToString(i int64) string {
	return strconv.FormatInt(i, 10)
}

func IsContain(target string, List []string) bool {

	for _, element := range List {

		if target == element {
			return true
		}
	}
	return false

}
func IsContainInt(target int, List []int) bool {

	for _, element := range List {

		if target == element {
			return true
		}
	}
	return false

}

func GetSwitchFromOptions(Options map[string]bool, key string) (result bool) {
	if flag, ok := Options[key]; !ok || flag {
		return true
	}
	return false
}
func SetSwitchFromOptions(Options map[string]bool, key string, value bool) {
	Options[key] = value
}

func Wrap(err error, message string) error {
	return errors.Wrap(err, "==> "+printCallerNameAndLine()+message)
}

func GetSelfFuncName() string {
	pc, _, _, _ := runtime.Caller(1)
	return CleanUpfuncName(runtime.FuncForPC(pc).Name())
}
func CleanUpfuncName(funcName string) string {
	end := strings.LastIndex(funcName, ".")
	if end == -1 {
		return ""
	}
	return funcName[end+1:]
}

func printCallerNameAndLine() string {
	pc, _, line, _ := runtime.Caller(2)
	return runtime.FuncForPC(pc).Name() + "()@" + strconv.Itoa(line) + ": "
}

func GetConversationIDByMsg(msg *sdkpb.IMMessage) string {
	switch msg.SessionType {
	case constant.SingleChatType:
		l := []string{msg.SendID, msg.RecvID}
		sort.Strings(l)
		return "si_" + strings.Join(l, "_") // single chat
	case constant.WriteGroupChatType:
		return "g_" + msg.GroupID // group chat
	case constant.ReadGroupChatType:
		return "sg_" + msg.GroupID // super group chat
	case constant.NotificationChatType:
		return "sn_" + msg.SendID + "_" + msg.RecvID // server notification chat
	}
	return ""
}

func GetConversationIDByGroupID(groupID string) string {
	return "sg_" + groupID
}

func GetConversationTableName(conversationID string) string {
	return constant.ChatLogsTableNamePre + conversationID
}
func GetTableName(conversationID string) string {
	return constant.ChatLogsTableNamePre + conversationID
}

func KMP(rMainString string, rSubString string) (isInMainString bool) {
	mainString := strings.ToLower(rMainString)
	subString := strings.ToLower(rSubString)
	mainIdx := 0
	subIdx := 0
	mainLen := len(mainString)
	subLen := len(subString)
	next := computeNextArray(subString)
	for {
		if mainIdx >= mainLen || subIdx >= subLen {
			break
		}

		if mainString[mainIdx] == subString[subIdx] {
			mainIdx++
			subIdx++
		} else {
			if subIdx != 0 {
				subIdx = next[subIdx-1]
			} else {
				mainIdx++
			}

		}
	}
	if subIdx >= subLen {
		if mainIdx-subLen >= 0 {
			return true
		}
	}
	return false

}

func computeNextArray(subString string) []int {
	next := make([]int, len(subString))
	index := 0
	i := 1
	for i < len(subString) {
		if subString[i] == subString[index] {
			next[i] = index + 1
			i++
			index++
		} else {
			if index != 0 {
				index = next[index-1]
			} else {
				i++
			}
		}
	}
	return next
}

func TrimStringList(list []string) (result []string) {
	for _, v := range list {
		if len(strings.Trim(v, " ")) != 0 {
			result = append(result, v)
		}
	}
	return result

}

func UnmarshalNotificationElem(bytes []byte, t any) error {
	var elem struct {
		Detail string `json:"detail,omitempty"`
	}
	if err := JsonStringToStruct(string(bytes), &elem); err != nil {
		return err
	}

	if err := JsonStringToStruct(elem.Detail, t); err != nil {
		return err
	}
	return nil
}
