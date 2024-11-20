package wasm_sqlite

import (
	"context"
	"github.com/openimsdk/openim-sdk-core/v3/pkg/js_handler"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto"
)

type Tx struct {
	ctx context.Context
	id  int64
}

func (t Tx) Commit() error {
	_, err := js_handler.SqliteExec(t.ctx, &sdkpb.JsSqliteExecReq{Id: t.id, Sql: "COMMIT", Args: emptyArgs})
	return err
}

func (t Tx) Rollback() error {
	_, err := js_handler.SqliteExec(t.ctx, &sdkpb.JsSqliteExecReq{Id: t.id, Sql: "ROLLBACK", Args: emptyArgs})
	return err
}
