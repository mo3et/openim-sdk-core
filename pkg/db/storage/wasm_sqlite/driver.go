package wasm_sqlite

import (
	"context"
	"database/sql/driver"
	"github.com/openimsdk/openim-sdk-core/v3/proto/go/js-bridge"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/ffi_bridge"
)

const emptyArgs = "[]"

type DriverContext struct {
	ctx context.Context
}

func (d DriverContext) open(name string) (int64, error) {
	resp, err := ffi_bridge.SqliteOpen(d.ctx, &js_bridge.JsSqliteOpenReq{Name: name})
	if err != nil {
		return 0, err
	}
	return resp.Id, nil
}

func (d DriverContext) Open(name string) (driver.Conn, error) {
	id, err := d.open(name)
	if err != nil {
		return nil, err
	}
	return &Conn{ctx: d.ctx, id: id}, nil
}

func (d DriverContext) OpenConnector(name string) (driver.Connector, error) {
	return &Connector{name: name}, nil
}

type Connector struct {
	name string
}

func (c Connector) Connect(ctx context.Context) (driver.Conn, error) {
	return (DriverContext{ctx: ctx}).Open(c.name)
}

func (c Connector) Driver() driver.Driver {
	return DriverContext{}
}

type Conn struct {
	ctx context.Context
	id  int64
}

func (c Conn) Prepare(query string) (driver.Stmt, error) {
	return &Stmt{ctx: c.ctx, id: c.id, query: query}, nil
}

func (c Conn) Close() error {
	_, err := ffi_bridge.SqliteClose(c.ctx, &js_bridge.JsSqliteCloseReq{Id: c.id})
	return err
}

func (c Conn) Begin() (driver.Tx, error) {
	_, err := ffi_bridge.SqliteExec(c.ctx, &js_bridge.JsSqliteExecReq{Id: c.id, Sql: "BEGIN", Args: emptyArgs})
	if err != nil {
		return nil, err
	}
	return &Tx{ctx: c.ctx, id: c.id}, nil
}
