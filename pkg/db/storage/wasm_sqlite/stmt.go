package wasm_sqlite

import (
	"bytes"
	"context"
	"database/sql/driver"
	"encoding/json"

	"github.com/openimsdk/openim-sdk-core/v3/proto/go/interop"
	"github.com/openimsdk/tools/log"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/ffi_bridge"
	"github.com/openimsdk/tools/errs"
)

type Stmt struct {
	ctx   context.Context
	id    int64
	query string
}

func (s *Stmt) NumInput() int {
	return -1
}

func (s *Stmt) Close() error {
	return nil
}

func (s *Stmt) marshalArgs(args []driver.Value) (string, error) {
	if len(args) == 0 {
		return emptyArgs, nil
	} else {
		data, err := json.Marshal(args)
		if err != nil {
			return "", err
		}
		return string(data), nil
	}
}

func (s *Stmt) Exec(args []driver.Value) (driver.Result, error) {
	str, err := s.marshalArgs(args)
	if err != nil {
		return nil, err
	}
	resp, err := ffi_bridge.SqliteExec(s.ctx, &interop.JsSqliteExecReq{Id: s.id, Sql: s.query, Args: str})
	if err != nil {
		return nil, err
	}
	return &baseExecResult{Affected: resp.Affected}, nil
}

func (s *Stmt) Query(args []driver.Value) (driver.Rows, error) {
	str, err := s.marshalArgs(args)
	if err != nil {
		return nil, err
	}
	resp, err := ffi_bridge.SqliteQuery(s.ctx, &interop.JsSqliteQueryReq{Id: s.id, Sql: s.query, Args: str})
	if err != nil {
		return nil, err
	}
	var jsonString string
	decoder := json.NewDecoder(bytes.NewReader([]byte(resp.Result)))
	decoder.UseNumber()

	if err := decoder.Decode(&jsonString); err != nil {
		log.ZError(context.Background(), "result unmarshal failed (step 1)", err, "result", resp.Result)
		return nil, errs.WrapMsg(err, "result unmarshal failed (step 1)", "result", resp.Result)
	}

	var res []rawRows
	if err := json.Unmarshal([]byte(jsonString), &res); err != nil {
		log.ZError(context.Background(), "result unmarshal failed (step 2)", err, "result", jsonString)
		return nil, errs.WrapMsg(err, "result unmarshal failed (step 2)", "result", jsonString)
	}

	if len(res) == 0 {
		return &rawRows{}, nil
	}
	val := res[0]
	val.init()
	return &val, nil
}
