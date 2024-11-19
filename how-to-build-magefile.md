# how to use mage build in multi-language 

> 我需要你做的是一套统一的标准，比如你写了生成这些工具，别人加一种语言，如何更方便加
>
> 主要是告诉别人如何加，写清楚，每个语言使用的工具和版本

We use `mage` to replace `makefile` and `shell script` generation. **Mage** requires a Go environment.

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
Normally, we use `mage Gen<Language>` to compile specifical language pb file.(like `mage GenGo`, `mage GenJava`, `mage GenCS`, `mage GenTS`). You can check target use `mage -l`.



`mage -l` outputs all executable targets.

## Modify:
Now we use Python as an example.