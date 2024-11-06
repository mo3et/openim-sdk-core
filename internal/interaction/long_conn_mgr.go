// Copyright © 2023 OpenIM SDK. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package interaction

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"runtime"
	"runtime/debug"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/golang/protobuf/proto"
	"github.com/gorilla/websocket"

	"github.com/openimsdk/openim-sdk-core/v3/open_im_sdk_callback"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/ccontext"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/common"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/constant"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/utils"

	"github.com/openimsdk/protocol/sdkws"
	"github.com/openimsdk/tools/errs"
	"github.com/openimsdk/tools/log"
)

const (
	// Time allowed to write a message to the peer.
	writeWait = 10 * time.Second

	// Time allowed to read the next pong message from the peer.
	pongWait = 30 * time.Second

	// Send pings to peer with this period. Must be less than pongWait.
	pingPeriod = (pongWait * 8) / 10

	// Maximum message size allowed from peer.
	maxMessageSize = 1024 * 1024

	//Maximum number of reconnection attempts
	maxReconnectAttempts = 300

	sendAndWaitTime = time.Second * 10
)

const (
	DefaultNotConnect = iota
	Closed            = iota + 1
	Connecting
	Connected
)

var (
	ErrChanClosed                = errors.New("send channel closed")
	ErrConnClosed                = errors.New("conn has closed")
	ErrNotSupportMessageProtocol = errors.New("not support message protocol")
	ErrClientClosed              = errors.New("client actively close the connection")
	ErrPanic                     = errors.New("panic error")
)

type LongConnMgr struct {
	//conn status mutex
	w          sync.Mutex
	connStatus int
	// The long connection,can be set tcp or websocket.
	conn       LongConn
	listener   func() open_im_sdk_callback.OnConnListener
	userOnline func(map[string][]int32)
	// Buffered channel of outbound messages.
	send               chan Message
	pushMsgAndMaxSeqCh chan common.Cmd2Value
	conversationCh     chan common.Cmd2Value
	loginMgrCh         chan common.Cmd2Value
	closedErr          error
	ctx                context.Context
	IsCompression      bool
	Syncer             *WsRespAsyn
	encoder            Encoder
	compressor         Compressor
	reconnectStrategy  ReconnectStrategy

	mutex        sync.Mutex
	IsBackground bool
	// write conn lock
	connWrite *sync.Mutex

	sub *subscription
}

type Message struct {
	Message GeneralWsReq
	Resp    chan *GeneralWsResp
}

func NewLongConnMgr(ctx context.Context, userOnline func(map[string][]int32), pushMsgAndMaxSeqCh, loginMgrCh chan common.Cmd2Value) *LongConnMgr {
	l := &LongConnMgr{
		userOnline:         userOnline,
		pushMsgAndMaxSeqCh: pushMsgAndMaxSeqCh,
		loginMgrCh:         loginMgrCh,
		IsCompression:      true,
		Syncer:             NewWsRespAsyn(),
		encoder:            NewGobEncoder(),
		compressor:         NewGzipCompressor(),
		reconnectStrategy:  NewExponentialRetry(),
		sub:                newSubscription(),
	}
	l.send = make(chan Message, 10)
	l.conn = NewWebSocket(WebSocket)
	l.connWrite = new(sync.Mutex)
	l.ctx = ctx
	return l
}

// SetListener sets the user's listener.
func (l *LongConnMgr) SetListener(listener func() open_im_sdk_callback.OnConnListener) {
	l.listener = listener
}

func (l *LongConnMgr) Run(ctx context.Context) {
	go l.readPump(ctx)
	go l.writePump(ctx)
	go l.heartbeat(ctx)
}

func (l *LongConnMgr) SendReqWaitResp(ctx context.Context, m proto.Message, reqIdentifier int, resp proto.Message) error {
	data, err := proto.Marshal(m)
	if err != nil {
		return sdkerrs.ErrArgs
	}
	msg := Message{
		Message: GeneralWsReq{
			ReqIdentifier: reqIdentifier,
			SendID:        ccontext.Info(ctx).UserID(),
			OperationID:   ccontext.Info(ctx).OperationID(),
			Data:          data,
		},
		Resp: make(chan *GeneralWsResp, 1),
	}
	l.send <- msg
	log.ZDebug(ctx, "send message to send channel success", "msg", m, "reqIdentifier", reqIdentifier)
	select {
	case <-ctx.Done():
		return sdkerrs.ErrCtxDeadline
	case v, ok := <-msg.Resp:
		if !ok {
			return errors.New("response channel closed")
		}
		if v.ErrCode != 0 {
			return errs.NewCodeError(v.ErrCode, v.ErrMsg)
		}
		if err := proto.Unmarshal(v.Data, resp); err != nil {
			return sdkerrs.ErrArgs
		}
		return nil
	}
}

// readPump pumps messages from the websocket connection to the hub.
//
// The application runs readPump in a per-connection goroutine. The application
// ensures that there is at most one reader on a connection by executing all
// reads from this goroutine.

func (l *LongConnMgr) readPump(ctx context.Context) {
	defer func() {
		if r := recover(); r != nil {
			err := fmt.Sprintf("panic: %+v\n%s", r, debug.Stack())

			log.ZWarn(ctx, "readPump panic", nil, "panic info", err)
		}
	}()

	log.ZDebug(ctx, "readPump start", "goroutine ID:", getGoroutineID())
	defer func() {
		_ = l.close()
		log.ZWarn(l.ctx, "readPump closed", l.closedErr)
	}()
	connNum := 0
	for {
		select {
		case <-ctx.Done():
			l.closedErr = ctx.Err()
			log.ZInfo(l.ctx, "readPump done, sdk logout.....")
			return
		default:
		}
		ctx = ccontext.WithOperationID(ctx, utils.OperationIDGenerator())
		needRecon, err := l.reConn(ctx, &connNum)
		if !needRecon {
			l.closedErr = err
			return
		}
		if err != nil {
			log.ZWarn(l.ctx, "reConn", err)
			time.Sleep(l.reconnectStrategy.GetSleepInterval())
			continue
		}
		l.conn.SetReadLimit(maxMessageSize)
		_ = l.conn.SetReadDeadline(pongWait)
		messageType, message, err := l.conn.ReadMessage()
		if err != nil {
			log.ZError(l.ctx, "readMessage err", err, "goroutine ID:", getGoroutineID())
			_ = l.close()
			l.sub.onConnClosed(err)
			continue
		}
		switch messageType {
		case MessageBinary:
			err := l.handleMessage(message)
			if err != nil {
				l.closedErr = err
				return
			}
		case MessageText:
			l.closedErr = ErrNotSupportMessageProtocol
			return
		case CloseMessage:
			l.closedErr = ErrClientClosed
			return
		default:
		}
	}
}

// writePump pumps messages from the hub to the websocket connection.
//
// A goroutine running writePump is started for each connection. The
// application ensures that there is at most one writer to a connection by
// executing all writes from this goroutine.
func (l *LongConnMgr) writePump(ctx context.Context) {
	defer func() {
		if r := recover(); r != nil {
			err := fmt.Sprintf("panic: %+v\n%s", r, debug.Stack())

			log.ZWarn(ctx, "writePump panic", nil, "panic info", err)
		}
	}()

	log.ZDebug(ctx, "writePump start", "goroutine ID:", getGoroutineID())

	defer func() {
		l.close()
		close(l.send)
	}()
	for {
		select {
		case <-ctx.Done():
			l.closedErr = ctx.Err()
			log.ZInfo(l.ctx, "writePump done, sdk logout.....")
			return
		case message, ok := <-l.send:
			if !ok {
				// The hub closed the channel.
				_ = l.conn.SetWriteDeadline(writeWait)
				err := l.conn.WriteMessage(websocket.CloseMessage, []byte{})
				if err != nil {
					log.ZError(l.ctx, "send close message error", err)
				}
				l.closedErr = ErrChanClosed
				return
			}
			log.ZDebug(l.ctx, "writePump recv message", "reqIdentifier", message.Message.ReqIdentifier,
				"operationID", message.Message.OperationID, "sendID", message.Message.SendID)
			resp, err := l.sendAndWaitResp(&message.Message)
			if err != nil {
				resp = &GeneralWsResp{
					ReqIdentifier: message.Message.ReqIdentifier,
					OperationID:   message.Message.OperationID,
					Data:          nil,
				}
				if code, ok := errs.Unwrap(err).(errs.CodeError); ok {
					resp.ErrCode = code.Code()
					resp.ErrMsg = code.Msg()
				} else {
					log.ZError(l.ctx, "writeBinaryMsgAndRetry failed", err, "wsReq", message.Message)
				}

			}
			nErr := l.Syncer.notifyCh(message.Resp, resp, 1)
			if nErr != nil {
				log.ZError(l.ctx, "TriggerCmdNewMsgCome failed", nErr, "wsResp", resp)
			}
		}
	}
}

func (l *LongConnMgr) heartbeat(ctx context.Context) {
	defer func() {
		if r := recover(); r != nil {
			err := fmt.Sprintf("panic: %+v\n%s", r, debug.Stack())

			log.ZWarn(ctx, "heartbeat panic", nil, "panic info", err)
		}
	}()

	log.ZDebug(ctx, "heartbeat start", "goroutine ID:", getGoroutineID())
	ticker := time.NewTicker(pingPeriod)
	defer func() {
		ticker.Stop()
		log.ZWarn(l.ctx, "heartbeat closed", nil, "heartbeat", "heartbeat done sdk logout.....")
	}()
	for {
		select {
		case <-ctx.Done():
			log.ZInfo(ctx, "heartbeat done sdk logout.....")
			return
		case <-ticker.C:
			log.ZInfo(ctx, "sendPingMessage", "goroutine ID:", getGoroutineID())
			l.sendPingMessage(ctx)
		}
	}

}

func (l *LongConnMgr) sendPingMessage(ctx context.Context) {
	l.connWrite.Lock()
	defer l.connWrite.Unlock()
	opid := utils.OperationIDGenerator()
	log.ZDebug(ctx, "ping Message Started", "goroutine ID:", getGoroutineID(), "opid", opid)
	if l.IsConnected() {
		log.ZDebug(ctx, "ping Message Started isConnected", "goroutine ID:", getGoroutineID(), "opid", opid)
		l.conn.SetWriteDeadline(writeWait)
		if err := l.conn.WriteMessage(PingMessage, []byte(opid)); err != nil {
			log.ZWarn(ctx, "ping Message failed", err, "goroutine ID:", getGoroutineID(), "opid", opid)
			return
		}
	} else {
		log.ZDebug(ctx, "ping Message failed, connection", "connStatus", l.GetConnectionStatus(), "goroutine ID:", getGoroutineID(), "opid", opid)
	}
}

func getGoroutineID() int64 {
	buf := make([]byte, 64)
	buf = buf[:runtime.Stack(buf, false)]
	idField := strings.Fields(strings.TrimPrefix(string(buf), "goroutine "))[0]
	id, err := strconv.ParseInt(idField, 10, 64)
	if err != nil {
		return 0
	}
	return id
}

func (l *LongConnMgr) sendAndWaitResp(msg *GeneralWsReq) (*GeneralWsResp, error) {
	tempChan, err := l.writeBinaryMsgAndRetry(msg)
	defer l.Syncer.DelCh(msg.MsgIncr)
	if err != nil {
		return nil, err
	} else {
		select {
		case resp := <-tempChan:
			return resp, nil
		case <-time.After(sendAndWaitTime):
			return nil, sdkerrs.ErrNetworkTimeOut
		}

	}
}

func (l *LongConnMgr) writeBinaryMsgAndRetry(msg *GeneralWsReq) (chan *GeneralWsResp, error) {
	msgIncr, tempChan := l.Syncer.AddCh(msg.SendID)
	msg.MsgIncr = msgIncr
	if l.GetConnectionStatus() != Connected && msg.ReqIdentifier == constant.GetNewestSeq {
		return tempChan, sdkerrs.ErrNetwork.WrapMsg("connection closed,conning...")
	}
	for i := 0; i < maxReconnectAttempts; i++ {
		err := l.writeBinaryMsg(*msg)
		if err != nil {
			log.ZError(l.ctx, "send binary message error", err, "message", msg)
			l.closedErr = err
			_ = l.close()
			time.Sleep(time.Second * 1)
			continue
		} else {
			return tempChan, nil
		}
	}
	return nil, sdkerrs.ErrNetwork.WrapMsg("send binary message error")
}

func (l *LongConnMgr) writeBinaryMsgAndNotRetry(msg *GeneralWsReq) (chan *GeneralWsResp, error) {
	msgIncr, tempChan := l.Syncer.AddCh(msg.SendID)
	msg.MsgIncr = msgIncr
	if err := l.writeBinaryMsg(*msg); err != nil {
		l.Syncer.DelCh(msgIncr)
		return nil, err
	}
	return tempChan, nil
}

func (l *LongConnMgr) writeBinaryMsg(req GeneralWsReq) error {
	l.connWrite.Lock()
	defer l.connWrite.Unlock()
	return l.writeBinaryMsgNoLock(req)
}

func (l *LongConnMgr) writeSubInfo(subscribeUserID, unsubscribeUserID []string, lock bool) error {
	opID := utils.OperationIDGenerator()
	sCtx := ccontext.WithOperationID(l.ctx, opID)
	log.ZInfo(sCtx, "writeSubInfo start", "goroutine ID:", getGoroutineID())
	subReq := sdkws.SubUserOnlineStatus{
		SubscribeUserID:   subscribeUserID,
		UnsubscribeUserID: unsubscribeUserID,
	}
	data, err := proto.Marshal(&subReq)
	if err != nil {
		log.ZError(sCtx, "proto.Marshal", err)
		return err
	}
	req := GeneralWsReq{
		ReqIdentifier: constant.WsSubUserOnlineStatus,
		SendID:        ccontext.Info(sCtx).UserID(),
		OperationID:   opID,
		MsgIncr:       utils.OperationIDGenerator(),
		Data:          data,
	}
	if lock {
		return l.writeBinaryMsg(req)
	} else {
		return l.writeBinaryMsgNoLock(req)
	}
}

func (l *LongConnMgr) writeBinaryMsgNoLock(req GeneralWsReq) error {
	encodeBuf, err := l.encoder.Encode(req)
	if err != nil {
		return err
	}
	if l.GetConnectionStatus() != Connected {
		return sdkerrs.ErrNetwork.WrapMsg("connection closed,re conning...")
	}
	_ = l.conn.SetWriteDeadline(writeWait)
	if l.IsCompression {
		resultBuf, compressErr := l.compressor.CompressWithPool(encodeBuf)
		if compressErr != nil {
			return compressErr
		}
		return l.conn.WriteMessage(MessageBinary, resultBuf)
	} else {
		return l.conn.WriteMessage(MessageBinary, encodeBuf)
	}
}

func (l *LongConnMgr) close() error {
	l.w.Lock()
	defer l.w.Unlock()
	if l.connStatus == Closed || l.connStatus == Connecting || l.connStatus == DefaultNotConnect {
		return nil
	}
	l.connStatus = Closed
	log.ZWarn(l.ctx, "conn closed", l.closedErr)
	return l.conn.Close()
}

func (l *LongConnMgr) handleMessage(message []byte) error {
	if l.IsCompression {
		var decompressErr error
		message, decompressErr = l.compressor.DecompressWithPool(message)
		if decompressErr != nil {
			log.ZError(l.ctx, "DeCompress failed", decompressErr, message)
			return sdkerrs.ErrMsgDeCompression
		}
	}
	var wsResp GeneralWsResp
	err := l.encoder.Decode(message, &wsResp)
	if err != nil {
		log.ZError(l.ctx, "decodeBinaryWs err", err, "message", message)
		return sdkerrs.ErrMsgDecodeBinaryWs
	}
	ctx := context.WithValue(l.ctx, "operationID", wsResp.OperationID)
	log.ZInfo(ctx, "recv msg", "errCode", wsResp.ErrCode, "errMsg", wsResp.ErrMsg,
		"reqIdentifier", wsResp.ReqIdentifier)
	switch wsResp.ReqIdentifier {
	case constant.PushMsg:
		if err = l.doPushMsg(ctx, wsResp); err != nil {
			log.ZError(ctx, "doWSPushMsg failed", err, "wsResp", wsResp)
		}
	case constant.LogoutMsg:
		if err := l.Syncer.NotifyResp(ctx, wsResp); err != nil {
			log.ZError(ctx, "notifyResp failed", err, "wsResp", wsResp)
		}
		return sdkerrs.ErrLoginOut
	case constant.KickOnlineMsg:
		log.ZDebug(ctx, "socket receive client kicked offline")

		err = errs.ErrTokenKicked.WrapMsg("socket receive client kicked offline")
		ccontext.GetApiErrCodeCallback(ctx).OnError(ctx, err)
		return err
	case constant.GetNewestSeq:
		fallthrough
	case constant.PullMsgByRange:
		fallthrough
	case constant.PullMsgBySeqList:
		fallthrough
	case constant.GetConvMaxReadSeq:
		fallthrough
	case constant.SendMsg:
		fallthrough
	case constant.SendSignalMsg:
		fallthrough
	case constant.SetBackgroundStatus:
		if err := l.Syncer.NotifyResp(ctx, wsResp); err != nil {
			log.ZError(ctx, "notifyResp failed", err, "reqIdentifier", wsResp.ReqIdentifier, "errCode",
				wsResp.ErrCode, "errMsg", wsResp.ErrMsg, "msgIncr", wsResp.MsgIncr, "operationID", wsResp.OperationID)
		}
	case constant.WsSubUserOnlineStatus:
		if err := l.handlerUserOnlineChange(ctx, wsResp); err != nil {
			log.ZError(ctx, "handlerUserOnlineChange failed", err, "wsResp", wsResp)
		}
	default:
		//return sdkerrs.ErrMsgBinaryTypeNotSupport
	}
	return nil
}

func (l *LongConnMgr) handlerUserOnlineChange(ctx context.Context, wsResp GeneralWsResp) error {
	if wsResp.ErrCode != 0 {
		return errs.New("handlerUserOnlineChange failed")
	}
	var tips sdkws.SubUserOnlineStatusTips
	if err := proto.Unmarshal(wsResp.Data, &tips); err != nil {
		return err
	}
	log.ZDebug(ctx, "handlerUserOnlineChange", "tips", &tips)
	l.callbackUserOnlineChange(l.sub.setUserState(tips.Subscribers))
	return nil
}

func (l *LongConnMgr) GetUserOnlinePlatformIDs(ctx context.Context, userIDs []string) (map[string][]int32, error) {
	ctx, cancel := context.WithTimeout(ctx, time.Second*5)
	defer cancel()
	exist, wait, subUserIDs, unsubUserIDs := l.sub.getUserOnline(userIDs)
	if len(subUserIDs)+len(unsubUserIDs) > 0 {
		if err := l.writeSubInfo(subUserIDs, unsubUserIDs, true); err != nil {
			l.sub.writeFailed(wait, err)
			return nil, err
		}
	}
	for userID, statues := range wait {
		select {
		case <-ctx.Done():
			return nil, context.Cause(ctx)
		case <-statues.Done():
			online, err := statues.Result()
			if err != nil {
				return nil, err
			}
			exist[userID] = online
		}
	}
	return exist, nil
}

func (l *LongConnMgr) UnsubscribeUserOnlinePlatformIDs(ctx context.Context, userIDs []string) error {
	if len(userIDs) > 0 {
		l.sub.unsubscribe(userIDs)
	}
	return nil
}

func (l *LongConnMgr) writeConnFirstSubMsg(ctx context.Context) error {
	userIDs := l.sub.getNewConnSubUserIDs()
	log.ZDebug(ctx, "writeConnFirstSubMsg getNewConnSubUserIDs", "userIDs", userIDs)
	if len(userIDs) == 0 {
		return nil
	}
	if err := l.writeSubInfo(userIDs, nil, false); err != nil {
		l.sub.onConnClosed(err)
		return err
	}
	return nil
}

func (l *LongConnMgr) callbackUserOnlineChange(users map[string][]int32) {
	log.ZDebug(l.ctx, "#### ===> callbackUserOnlineChange", "users", users)
	if len(users) == 0 {
		return
	}
	l.userOnline(users)
	//for userID, onlinePlatformIDs := range users {
	//	status := userPb.OnlineStatus{
	//		UserID:      userID,
	//		PlatformIDs: onlinePlatformIDs,
	//	}
	//	if len(status.PlatformIDs) == 0 {
	//		status.Status = constant.Offline
	//	} else {
	//		status.Status = constant.Online
	//	}
	//	c.userOnline.OnUserStatusChanged(utils.StructToJsonString(users))
	//}
}

func (l *LongConnMgr) IsConnected() bool {
	l.w.Lock()
	defer l.w.Unlock()
	if l.connStatus == Connected {
		return true
	}
	return false

}
func (l *LongConnMgr) GetConnectionStatus() int {
	l.w.Lock()
	defer l.w.Unlock()
	return l.connStatus
}

func (l *LongConnMgr) SetConnectionStatus(status int) {
	l.w.Lock()
	defer l.w.Unlock()
	l.connStatus = status
}

func (l *LongConnMgr) reConn(ctx context.Context, num *int) (needRecon bool, err error) {
	if l.IsConnected() {
		return true, nil
	}
	l.connWrite.Lock()
	defer l.connWrite.Unlock()
	l.listener().OnConnecting()
	l.SetConnectionStatus(Connecting)
	url := fmt.Sprintf("%s?sendID=%s&token=%s&platformID=%d&operationID=%s&isBackground=%t",
		ccontext.Info(ctx).WsAddr(), ccontext.Info(ctx).UserID(), ccontext.Info(ctx).Token(),
		ccontext.Info(ctx).PlatformID(), ccontext.Info(ctx).OperationID(), l.GetBackground())
	if l.IsCompression {
		url += fmt.Sprintf("&compression=%s", "gzip")
	}
	log.ZDebug(ctx, "conn start", "url", url)
	resp, err := l.conn.Dial(url, nil)
	if err != nil {
		l.SetConnectionStatus(Closed)
		if resp != nil {
			body, err := io.ReadAll(resp.Body)
			if err != nil {
				return true, err
			}
			log.ZInfo(ctx, "reConn resp", "body", string(body))
			var apiResp struct {
				ErrCode int    `json:"errCode"`
				ErrMsg  string `json:"errMsg"`
				ErrDlt  string `json:"errDlt"`
			}
			if err := json.Unmarshal(body, &apiResp); err != nil {
				return true, err
			}
			err = errs.NewCodeError(apiResp.ErrCode, apiResp.ErrMsg).WithDetail(apiResp.ErrDlt).Wrap()
			ccontext.GetApiErrCodeCallback(ctx).OnError(ctx, err)
			switch apiResp.ErrCode {
			case
				errs.TokenExpiredError,
				errs.TokenInvalidError,
				errs.TokenMalformedError,
				errs.TokenNotValidYetError,
				errs.TokenUnknownError,
				errs.TokenNotExistError,
				errs.TokenKickedError:
				return false, err
			default:
				return true, err
			}
		}
		l.listener().OnConnectFailed(sdkerrs.NetworkError, err.Error())
		return true, err
	}
	if err := l.writeConnFirstSubMsg(ctx); err != nil {
		log.ZError(ctx, "first write user online sub info error", err)
		ccontext.GetApiErrCodeCallback(ctx).OnError(ctx, err)
		l.listener().OnConnectFailed(sdkerrs.NetworkError, err.Error())
		l.conn.Close()
		return true, err
	}
	l.listener().OnConnectSuccess()
	l.sub.onConnSuccess()
	l.ctx = newContext(l.conn.LocalAddr())
	l.ctx = context.WithValue(ctx, "ConnContext", l.ctx)
	l.SetConnectionStatus(Connected)
	l.conn.SetPongHandler(l.pongHandler)
	l.conn.SetPingHandler(l.pingHandler)
	*num++
	log.ZInfo(l.ctx, "long conn establish success", "localAddr", l.conn.LocalAddr(), "connNum", *num)
	l.reconnectStrategy.Reset()
	_ = common.TriggerCmdConnected(ctx, l.pushMsgAndMaxSeqCh)
	return true, nil
}

func (l *LongConnMgr) doPushMsg(ctx context.Context, wsResp GeneralWsResp) error {
	var msg sdkws.PushMessages
	err := proto.Unmarshal(wsResp.Data, &msg)
	if err != nil {
		return err
	}
	return common.TriggerCmdPushMsg(ctx, &msg, l.pushMsgAndMaxSeqCh)
}
func (l *LongConnMgr) Close(ctx context.Context) {
	if l.GetConnectionStatus() == Connected {
		log.ZInfo(ctx, "network change conn close")
		l.closedErr = errors.New("closed by client network change")
		_ = l.close()
	} else {
		log.ZInfo(ctx, "conn already closed")
	}

}
func (l *LongConnMgr) GetBackground() bool {
	l.mutex.Lock()
	defer l.mutex.Unlock()
	return l.IsBackground
}
func (l *LongConnMgr) SetBackground(isBackground bool) {
	l.mutex.Lock()
	defer l.mutex.Unlock()
	l.IsBackground = isBackground
}

// receive ping and send pong.
func (l *LongConnMgr) pingHandler(_ string) error {
	if err := l.conn.SetReadDeadline(pongWait); err != nil {
		return err
	}

	return l.writePongMsg()
}

// when client send pong.
func (l *LongConnMgr) pongHandler(appData string) error {
	log.ZDebug(l.ctx, "server Pong Message Received", "appData", appData)
	if err := l.conn.SetReadDeadline(pongWait); err != nil {
		return err
	}
	return nil
}

func (l *LongConnMgr) writePongMsg() error {
	l.connWrite.Lock()
	defer l.connWrite.Unlock()

	err := l.conn.SetWriteDeadline(writeWait)
	if err != nil {
		return err
	}

	return l.conn.WriteMessage(PongMessage, nil)
}
