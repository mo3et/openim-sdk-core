package wasm_sqlite

import (
	"context"
	"fmt"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/ccontext"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/ffi_bridge"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/interop"
	"github.com/openimsdk/tools/log"
	"sync"
	"time"
)

const detectionInterval = time.Minute

var dbPool = &jsDBPool{conns: make(map[string]*jsDbID)}

type jsDbID struct {
	id     int64
	ticker *time.Ticker
	count  int
}

type jsDBPool struct {
	lock  sync.Mutex
	conns map[string]*jsDbID
}

func (x *jsDBPool) checkClose(ctx context.Context, name string, id int64) bool {
	x.lock.Lock()
	defer x.lock.Unlock()
	conn, ok := x.conns[name]
	if !ok {
		log.ZDebug(ctx, "js sqlite check close not found", nil, "name", name, "id", id)
		return true
	}
	if conn.id != id {
		log.ZDebug(ctx, "js sqlite check close neq id", nil, "name", name, "id", id, "conn.id", conn.id)
		return true
	}
	if conn.count > 0 {
		log.ZDebug(ctx, "js sqlite check close count", nil, "name", name, "id", id, "count", conn.count)
		return false
	}
	log.ZDebug(ctx, "js sqlite start close", nil, "name", name, "id", id)
	delete(x.conns, name)
	if _, err := ffi_bridge.SqliteClose(ctx, &interop.JsSqliteCloseReq{Id: id}); err != nil {
		log.ZError(ctx, "jsDBPool.checkClose", err, "name", name, "id", id)
	}
	return true
}

func (x *jsDBPool) startTimer(name string, conn *jsDbID) {
	defer conn.ticker.Stop()
	ctx := ccontext.WithOperationID(context.Background(), fmt.Sprintf("JS_DB_TIMEOUT_%d", conn.id))
	for range conn.ticker.C {
		if x.checkClose(ctx, name, conn.id) {
			return
		}
	}
}

func (x *jsDBPool) openID(ctx context.Context, name string) (int64, error) {
	x.lock.Lock()
	defer x.lock.Unlock()
	if conn, ok := x.conns[name]; ok {
		conn.count++
		log.ZDebug(ctx, "js sqlite open", "name", name, "id", conn.id, "count", conn.count)
		return conn.id, nil
	}
	res, err := ffi_bridge.SqliteOpen(ctx, &interop.JsSqliteOpenReq{Name: name})
	if err != nil {
		return 0, err
	}
	conn := &jsDbID{id: res.Id, ticker: time.NewTicker(detectionInterval), count: 1}
	x.conns[name] = conn
	go x.startTimer(name, conn)
	log.ZDebug(ctx, "js sqlite open new", "name", name, "id", conn.id, "count", conn.count)
	return conn.id, nil
}

func (x *jsDBPool) close(ctx context.Context, name string, id int64) {
	x.lock.Lock()
	defer x.lock.Unlock()
	conn, ok := x.conns[name]
	if ok && conn.id == id {
		conn.count--
		log.ZDebug(ctx, "js sqlite call close", "name", name, "id", conn.id, "count", conn.count)
	} else {
		log.ZDebug(ctx, "js sqlite call close error", "name", name, "id", id)
	}
}
