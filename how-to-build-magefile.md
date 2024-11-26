# how to use mage build in multi-language 

We use `mage` to replace `makefile` and `shell script`. **Mage** requires a Go environment.

## Dependencies:
### Install Go:
- View the [Go install documentation](https://go.dev/doc/install).
- Add `go/bin` to the PATH environment variable.

### Install Mage:
- You can use `bootstrap_install_mage.bat` or `bootstrap_install_mage.sh` to install mage.

### Install language dependencies:
#### Basic:
Protocol Buffer Compiler (protoc):
- view the [Proto Buffer Compiler Installation docs](https://grpc.io/docs/protoc-installation/).
- update PATH environment variable.

#### Go:
```shell 
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
go install github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc@latest
```
- view the [Go usage](https://grpc.io/docs/languages/go/quickstart/#regenerate-grpc-code)

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

Tips: You can

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
    // Specify log output
	log.SetOutput(os.Stdout)
	log.Println("Generating Rust code from proto files")

    // Define the rust_out directory
	rsOutDir := filepath.Join(protoDir, RS)

    // get tool path for protoc
	protoc, err := getToolPath("protoc")
	if err != nil {
		return err
	}

    // get rust tool path for grpc_rust_plugin
	rustgRPC, err := getRustToolPath("grpc_rust_plugin")
	if err != nil {
		return err
	}

    // loop execute protoc genereate for each module
	for _, module := range protoModules {
        // create module directory
		if err := os.MkdirAll(filepath.Join(rsOutDir, module), 0755); err != nil {
			return err
		}

        // define protoc args
		args := []string{
			"--proto_path=" + protoDir,
			"--rust_out=kernel=upb:" + filepath.Join(rsOutDir, module),
			"--grpc_out=" + filepath.Join(rsOutDir, module),
			"--plugin=protoc-gen-grpc=" + rustgRPC,
			"--rust_opt=experimental-codegen=enabled",
			filepath.Join("proto", module) + ".proto",
		}
    
        // save execute command
		cmd := exec.Command(protoc, args...)
        
        // connect std IO
		connectStd(cmd)

        // run command
		if err := cmd.Run(); err != nil {
			log.Printf("Error generating Rust code for module %s: %v\n", module, err)
			continue
		}
	}

	return nil
}
```

Fianlly, you just use `mage genrust` to generate Rust code.

## Other:
If you need to generate specific language gRPC code, you can refer to the specific language usage docs. Such as [grpc docs in Go](https://grpc.io/docs/languages/go/quickstart/#regenerate-grpc-code). Mostly, you just add args like 
```go
"--go-grpc_out=" + <path>, 
"--go-grpc_opt=module=" + <package-path>,
``` 
in Go.

## More:
- [Protobuf docs](https://protobuf.dev/)
- [gRPC docs](https://grpc.io/docs)