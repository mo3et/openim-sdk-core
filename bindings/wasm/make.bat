
go clean -cache -modcache
set GOOS=js
set GOARCH=wasm
go build -trimpath -ldflags "-s -w" -o openIM.wasm main.go
