package wasm_sqlite

import (
	"context"
	js_bridge "github.com/openimsdk/openim-sdk-core/v3/proto/go/js-bridge"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/ffi_bridge"
)

type Tx struct {
	ctx context.Context
	id  int64
}

func (t Tx) Commit() error {
	_, err := ffi_bridge.SqliteExec(t.ctx, &js_bridge.JsSqliteExecReq{Id: t.id, Sql: "COMMIT", Args: emptyArgs})
	return err
}

func (t Tx) Rollback() error {
	_, err := ffi_bridge.SqliteExec(t.ctx, &js_bridge.JsSqliteExecReq{Id: t.id, Sql: "ROLLBACK", Args: emptyArgs})
	return err
}
