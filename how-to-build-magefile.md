# how to use mage build in multi-language 

> 我需要你做的是一套统一的标准，比如你写了生成这些工具，别人加一种语言，如何更方便加
>
> 主要是告诉别人如何加，写清楚，每个语言使用的工具和版本

We use `mage` to replace `makefile` and `shell script`. **Mage** requires a Go environment.

## Dependencies:
### Install Go:
- View the [Go install documentation](https://go.dev/doc/install).
- Add `go/bin` to the PATH environment variable.

### Install Mage:
- View the [Mage install documentation](https://magefile.org/).

### Install language dependencies:
#### Basic:
Protocol Buffer Compiler (protoc):
- view the [Proto Buffer Compiler Installation docs](https://grpc.io/docs/protoc-installation/).
- update PATH environment variable.

#### Go:
```shell 
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
```

#### Java:
- view the [Java Usage](https://github.com/protocolbuffers/protobuf/tree/main/java).

#### CSharp:
- view the [CSharp Usage](https://github.com/protocolbuffers/protobuf/tree/main/csharp).

#### TypeScript:
- view the [ts-proto docs](https://github.com/stephenh/ts-proto#quickstart).
- install `ts-proto` by `npm install ts-proto`.

## Usage:
Normally, we use `mage Gen<Language>` to compile specifical language pb file.(like `mage gengo`, `mage genjava`, `mage gencs`, `mage gents`). You can check target use `mage -l`.

You also use Aliases to simplify the command. For example, `mage gengo` can be replaced by `mage go`.


You need to focus to `protoDir`, `protoModules` variables.
- Modify the `protoDir` variable to the directory where the `.proto` files are located.
- Add the new modules in `protoModules` when you create new `.proto` file and want to generate it.

You can also modify the `OutDir` to change the output directory. 


## Modify:
Now, we use Rust as an example. Reference to  [grpc-rs](https://github.com/tikv/grpc-rs).
### Dependencies:
install the protobuf compiler and gRPC compiler:
```shell
cargo install protobuf-codegen
cargo install grpcio-compiler
```

### Implementing Rust code generation:
1. Add new language to _Language Target_ const. Like `RS = "rust"`. This operation defines the destination folder for code generation.
2. Check 'protoModules' is include you need to generate module.
3. Create a new function in `magefile.go` to generate Rust code.
For example:
```go
func GenRust() error {
    return genCode("rust", "protos", "protos", "protos")
}

```



## More:
- [Protobuf docs](https://protobuf.dev/)
- [gRPC docs](https://grpc.io/docs)