package wasm_sqlite

import (
	"context"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/ffi_bridge"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/interop"
	"github.com/openimsdk/tools/log"
	"sync"
)

var dbPool = &jsDBPool{conns: make(map[string]*jsDBCache)}

type jsDBCache struct {
	id    int64
	count int
}

type jsDBPool struct {
	lock  sync.Mutex
	conns map[string]*jsDBCache
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
	conn := &jsDBCache{id: res.Id, count: 1}
	x.conns[name] = conn
	log.ZDebug(ctx, "js sqlite open new", "name", name, "id", conn.id, "count", conn.count)
	return conn.id, nil
}

func (x *jsDBPool) close(ctx context.Context, name string) {
	x.lock.Lock()
	defer x.lock.Unlock()
	conn, ok := x.conns[name]
	if !ok {
		log.ZWarn(ctx, "js sqlite call close not found", nil, "name", name)
		return
	}
	conn.count--
	if conn.count > 0 {
		log.ZDebug(ctx, "js sqlite call close count", "name", name, "id", conn.id, "count", conn.count)
		return
	}
	delete(x.conns, name)
	if _, err := ffi_bridge.SqliteClose(ctx, &interop.JsSqliteCloseReq{Id: conn.id}); err != nil {
		log.ZError(ctx, "jsDBPool.checkClose", err, "name", name, "id", conn.id)
	}
}
