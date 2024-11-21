//go:build mage
// +build mage

package main

import (
	"fmt"
	"go/build"
	"log"
	"os"
	"os/exec"
	"path/filepath"
	"regexp"
	"runtime"
	"strings"
)

var Default = GenGo

var Aliases = map[string]interface{}{
	"go":   GenGo,
	"java": GenJava,
	"js":   GenJS,
	"ts":   GenTS,
	"rs":   GenRust,
	"a":    All,

	"android": BuildAndroid,
	"ios":     BuildIOS,
	"linux":   BuildLinux,
	"windows": BuildWindows,
	"cpp":     CPPBuild,
}

/* Protocol Generate */

// Langeuage target
// Define output directories for each target language
const (
	GO     = "go"
	JAVA   = "java"
	CSharp = "csharp"
	JS     = "js"
	TS     = "ts"
	RS     = "rust"
)

// protoModules lists all the protobuf modules to be processed for code generation.
var protoModules = []string{
	"common",
	"conversation",
	"error",
	"event",
	"ffi",
	"group",
	"init",
	"interop",
	"message",
	"relation",
	"shared",
	"third",
	"user",
}

// proto files directory path
// ignore Separator, just append folder name, like "./pb/proto" is (".", "pb", "proto")

var protoDir = filepath.Join(".", "proto") // "./proto"

/*
protoc --go_out=:./ --go_opt=module=github.com/openimsdk/openim-sdk-core/v3/proto *.proto
protoc --go_out=./${name} --go_opt=module=github.com/openimsdk/openim-sdk-core/v3/proto/go/${name} proto/${name}.proto
*/

/*
JavaScript requires installing `protoc-gen-js` via a package manager
TypeScript requires installing `ts-proto` via a package manager
*/

func All() error {
	if err := GenGo(); err != nil {
		return err
	}
	if err := GenJava(); err != nil {
		return err
	}
	if err := GenCSharp(); err != nil {
		return err
	}
	if err := GenJS(); err != nil {
		return err
	}
	if err := GenTS(); err != nil {
		return err
	}
	return nil
}

func GenGo() error {
	log.SetOutput(os.Stdout)
	// log.SetFlags(log.Lshortfile)
	log.Println("Generating Go code from proto files")

	goOutDir := filepath.Join(protoDir, GO)

	protoc, err := getToolPath("protoc")
	if err != nil {
		return err
	}

	for _, module := range protoModules {
		if err := os.MkdirAll(filepath.Join(goOutDir, module), 0755); err != nil {
			return err
		}

		args := []string{
			"--proto_path=" + protoDir,
			"--go_out=" + filepath.Join(goOutDir, module),
			"--go-grpc_out=" + filepath.Join(goOutDir, module),
			"--go_opt=module=github.com/openimsdk/openim-sdk-core/v3/proto/" + strings.Join([]string{GO, module}, "/"),
			"--go-grpc_opt=module=github.com/openimsdk/openim-sdk-core/v3/proto/" + strings.Join([]string{GO, module}, "/"),
			filepath.Join("proto", module) + ".proto",
		}

		cmd := exec.Command(protoc, args...)
		connectStd(cmd)
		if err := cmd.Run(); err != nil {
			log.Printf("Error generating Go code for module %s: %v\n", module, err)
			continue
		}
	}

	if err := removeOmitemptyTags(); err != nil {
		log.Println("Remove Omitempty is Error", err)
		return err
	} else {
		log.Println("Remove Omitempty is Success")
	}

	return nil
}

func GenJava() error {
	log.SetOutput(os.Stdout)
	log.SetFlags(log.Lshortfile)
	log.Println("Generating Java code from proto files")

	javaOutDir := filepath.Join(protoDir, JAVA)

	protoc, err := getToolPath("protoc")
	if err != nil {
		return err
	}

	for _, module := range protoModules {
		if err := os.MkdirAll(filepath.Join(javaOutDir, module), 0755); err != nil {
			return err
		}

		args := []string{
			"--proto_path=" + protoDir,
			"--java_out=" + filepath.Join(javaOutDir, module),
			filepath.Join("proto", module) + ".proto",
		}

		cmd := exec.Command(protoc, args...)
		connectStd(cmd)
		if err := cmd.Run(); err != nil {
			log.Printf("Error generating Java code for module %s: %v\n", module, err)
			continue
		}
	}

	return nil
}

func GenCSharp() error {
	log.SetOutput(os.Stdout)
	log.SetFlags(log.Lshortfile)
	log.Println("Generating C# code from proto files")

	csharpOutDir := filepath.Join(protoDir, CSharp)

	protoc, err := getToolPath("protoc")
	if err != nil {
		return err
	}

	for _, module := range protoModules {
		if err := os.MkdirAll(filepath.Join(csharpOutDir, module), 0755); err != nil {
			return err
		}

		args := []string{
			"--proto_path=" + protoDir,
			"--csharp_out=" + filepath.Join(csharpOutDir, module),
			filepath.Join("proto", module) + ".proto",
		}

		cmd := exec.Command(protoc, args...)
		connectStd(cmd)

		if err := cmd.Run(); err != nil {
			log.Printf("Error generating C# code for module %s: %v\n", module, err)
			continue
		}
	}

	return nil
}

func GenJS() error {
	log.SetOutput(os.Stdout)
	log.SetFlags(log.Lshortfile)
	log.Println("Generating JavaScript code from proto files")

	jsOutDir := filepath.Join(protoDir, JS)

	protoc, err := getToolPath("protoc")
	if err != nil {
		return err
	}

	for _, module := range protoModules {
		if err := os.MkdirAll(filepath.Join(jsOutDir, module), 0755); err != nil {
			return err
		}

		args := []string{
			"--proto_path=" + protoDir,
			"--js_out=import_style=commonjs,binary:" + filepath.Join(jsOutDir, module),
			filepath.Join("proto", module) + ".proto",
		}

		cmd := exec.Command(protoc, args...)
		connectStd(cmd)
		if err := cmd.Run(); err != nil {
			log.Printf("Error generating JavaScript code for module %s: %v\n", module, err)
			continue
		}
	}

	return nil
}

func GenTS() error {
	log.SetOutput(os.Stdout)
	log.SetFlags(log.Lshortfile)
	log.Println("Generating TypeScript code from proto files")

	tsOutDir := filepath.Join(protoDir, TS)

	protoc, err := getToolPath("protoc")
	if err != nil {
		return err
	}

	tsProto := filepath.Join(".", "node_modules", ".bin", "protoc-gen-ts_proto")

	if runtime.GOOS == "windows" {
		tsProto = filepath.Join(".", "node_modules", ".bin", "protoc-gen-ts_proto.cmd")
	}

	if _, err := os.Stat(tsProto); err != nil {
		log.Println("tsProto Not Found. Error: ", err, " tsProto Path: ", tsProto)
		return err
	}

	for _, module := range protoModules {
		if err := os.MkdirAll(filepath.Join(tsOutDir, module), 0755); err != nil {
			return err
		}

		args := []string{
			"--proto_path=" + protoDir,
			"--plugin=protoc-gen-ts_proto=" + tsProto,
			"--ts_proto_opt=esModuleInterop=true,messages=true",
			"--ts_proto_out=" + filepath.Join(tsOutDir, module),
			filepath.Join("proto", module) + ".proto",
		}

		cmd := exec.Command(protoc, args...)
		connectStd(cmd)
		if err := cmd.Run(); err != nil {
			log.Printf("Error generating TypeScript code for module %s: %v\n", module, err)
			continue
		}
	}

	return nil
}

func GenRust() error {
	log.SetOutput(os.Stdout)
	log.SetFlags(log.Lshortfile)
	log.Println("Generating Rust code from proto files")

	rsOutDir := filepath.Join(protoDir, RS)

	protoc, err := getToolPath("protoc")
	if err != nil {
		return err
	}

	rustgRPC, err := getRustToolPath("grpc_rust_plugin")
	if err != nil {
		return err
	}

	for _, module := range protoModules {
		if err := os.MkdirAll(filepath.Join(rsOutDir, module), 0755); err != nil {
			return err
		}

		args := []string{
			"--proto_path=" + protoDir,
			"--rust_out=kernel=upb:" + filepath.Join(rsOutDir, module),
			"--grpc_out=" + filepath.Join(rsOutDir, module),
			"--plugin=protoc-gen-grpc=" + rustgRPC,
			"--rust_opt=experimental-codegen=enabled",
			filepath.Join("proto", module) + ".proto",
		}

		cmd := exec.Command(protoc, args...)
		connectStd(cmd)
		if err := cmd.Run(); err != nil {
			log.Printf("Error generating Rust code for module %s: %v\n", module, err)
			continue
		}
	}

	return nil
}

/* Tools */

var bindlingDir = filepath.Join(".", "bindings")

// generate wasm file
func Wasm() error {
	log.SetOutput(os.Stdout)
	log.SetFlags(log.Lshortfile)
	log.Println("Generating WebAssembly file")

	wasmDir := filepath.Join(bindlingDir, "wasm")

	cmd := exec.Command("go", "build", "-trimpath", "-ldflags", "-s -w", "-o", filepath.Join(wasmDir, "output", "openIM.wasm"), filepath.Join(wasmDir, "main.go"))
	cmd.Env = append(os.Environ(), "GOOS=js", "GOARCH=wasm")

	connectStd(cmd)
	if err := cmd.Run(); err != nil {
		log.Printf("Error generating WebAssembly file: %v\n", err)
	}

	return nil
}

// ffi_c

var soName = "libopenimsdk"

var outPath = filepath.Join(".", "output")
var goSrc = filepath.Join(".", bindlingDir, "ffi_c")

// BuildAll compiles the project for all platforms.
func CPPBuild() {
	if err := BuildAndroid(); err != nil {
		fmt.Println("Error building for Android:", err)
	}
	if err := BuildIOS(); err != nil {
		fmt.Println("Error building for iOS:", err)
	}
	if err := BuildLinux(); err != nil {
		fmt.Println("Error building for Linux:", err)
	}
	if err := BuildWindows(); err != nil {
		fmt.Println("Error building for Windows:", err)
	}
}

// BuildAndroid compiles the project for Android.
func BuildAndroid() error {
	architectures := []struct {
		Arch, API string
	}{
		{"arm", "16"},
		{"arm64", "21"},
		{"386", "16"},
		{"amd64", "21"},
	}

	androidOut := filepath.Join(outPath, "android")

	for _, arch := range architectures {
		if err := os.MkdirAll(filepath.Join(goSrc, androidOut, arch.Arch), 0755); err != nil {
			return err
		}

		if err := buildAndroid(androidOut, arch.Arch, arch.API); err != nil {
			fmt.Printf("Failed to build for Android %s: %v\n", arch.Arch, err)
		}
	}
	return nil
}

// BuildIOS compiles the project for iOS.
func BuildIOS() error {
	log.SetOutput(os.Stdout)
	// log.SetFlags(log.Lshortfile)
	log.Println("Building for iOS...")

	arch := os.Getenv("GOARCH")

	if len(arch) == 0 {
		arch = runtime.GOARCH
	}

	os.Setenv("GOOS", "darwin")
	os.Setenv("GOARCH", arch)
	os.Setenv("CGO_ENABLED", "1")
	os.Setenv("CC", "clang")

	iosOut := filepath.Join(outPath, "ios")

	if err := os.MkdirAll(filepath.Join(goSrc, iosOut), 0755); err != nil {
		return err
	}

	log.Println(filepath.Join(goSrc, iosOut))

	cmd := exec.Command("go", "build", "-buildmode=c-shared", "-o", filepath.Join(iosOut, strings.Join([]string{soName, "dylib"}, ".")), ".")
	cmd.Dir = goSrc
	cmd.Env = os.Environ()
	cmd.Stderr = os.Stderr
	cmd.Stdout = os.Stdout

	if err := cmd.Run(); err != nil {
		return err
	}
	log.Println("Build for iOS completed successfully.")
	return nil
}

// BuildLinux compiles the project for Linux.
func BuildLinux() error {
	log.SetOutput(os.Stdout)
	// log.SetFlags(log.Lshortfile)
	log.Println("Building for Linux...")

	arch := os.Getenv("GOARCH")
	cc := os.Getenv("CC")
	cxx := os.Getenv("CXX")

	if len(arch) == 0 {
		arch = runtime.GOARCH
	}

	if len(cc) == 0 {
		cc = "gcc"
	}

	if len(cxx) != 0 {
		os.Setenv("CXX", cxx)
	}

	linuxOut := filepath.Join(outPath, "linux")

	os.Setenv("GOOS", "linux")
	os.Setenv("GOARCH", arch)
	os.Setenv("CGO_ENABLED", "1")
	os.Setenv("CC", cc) //

	if err := os.MkdirAll(filepath.Join(goSrc, linuxOut), 0755); err != nil {
		return err
	}

	cmd := exec.Command("go", "build", "-buildmode=c-shared", "-trimpath", "-ldflags=-s -w", "-o", filepath.Join(linuxOut, strings.Join([]string{soName, "so"}, ".")), ".")
	cmd.Dir = goSrc
	cmd.Env = os.Environ()

	connectStd(cmd)
	if err := cmd.Run(); err != nil {
		log.Printf("Failed to build for Linux: %v\n", err)
		return err
	}
	log.Println("Build for Linux completed successfully.")
	return nil
}

// BuildWindows compiles the project for Windows.
func BuildWindows() error {
	log.SetOutput(os.Stdout)
	// log.SetFlags(log.Lshortfile)
	log.Println("Building for Windows...")

	arch := os.Getenv("GOARCH")
	cc := os.Getenv("CC")
	cxx := os.Getenv("CXX")

	if len(arch) == 0 {
		arch = runtime.GOARCH
	}

	if len(cc) == 0 {
		cc = "gcc"
	}

	if len(cxx) != 0 {
		os.Setenv("CXX", cxx)
	}

	windowsOut := filepath.Join(outPath, "windows")

	os.Setenv("GOOS", "windows")
	os.Setenv("GOARCH", arch)
	os.Setenv("CGO_ENABLED", "1")
	os.Setenv("CC", cc)

	if err := os.MkdirAll(filepath.Join(goSrc, windowsOut), 0755); err != nil {
		return err
	}

	cmd := exec.Command("go", "build", "-buildmode=c-shared", "-trimpath", "-ldflags=-s -w", "-o", filepath.Join(windowsOut, strings.Join([]string{soName, "dll"}, ".")), ".")
	cmd.Dir = goSrc
	cmd.Env = os.Environ()

	connectStd(cmd)

	if err := cmd.Run(); err != nil {
		log.Printf("Failed to build for Windows: %v\n", err)
		return err
	}
	log.Println("Build for Windows completed successfully.")
	return nil
}

// buildAndroid builds the Android library for the specified architecture.
func buildAndroid(aOutPath, arch, apiLevel string) error {
	log.SetOutput(os.Stdout)
	log.SetFlags(log.Lshortfile)
	log.Printf("Building for Android %s...\n", arch)

	ndkPath := os.Getenv("ANDROID_NDK_HOME")
	osSuffix := ""
	if runtime.GOOS == "windows" {
		osSuffix = ".cmd" //
	}

	ccBasePath := ndkPath + "/toolchains/llvm/prebuilt/" + runtime.GOOS + "-x86_64/bin/"

	var cc string
	switch arch {
	case "arm":
		cc = ccBasePath + "armv7a-linux-androideabi" + apiLevel + "-clang" + osSuffix
	case "arm64":
		cc = ccBasePath + "aarch64-linux-android" + apiLevel + "-clang" + osSuffix
	case "386":
		cc = ccBasePath + "i686-linux-android" + apiLevel + "-clang" + osSuffix
	case "amd64":
		cc = ccBasePath + "x86_64-linux-android" + apiLevel + "-clang" + osSuffix
	}

	env := []string{
		"CGO_ENABLED=1",
		"GOOS=android",
		"GOARCH=" + arch,
		"CC=" + cc,
	}
	cmd := exec.Command("go", "build", "-buildmode=c-shared", "-trimpath", "-ldflags=-s -w", "-o", filepath.Join(aOutPath, arch, strings.Join([]string{soName, "so"}, ".")), ".")

	cmd.Dir = goSrc
	cmd.Env = append(os.Environ(), env...)

	connectStd(cmd)
	return cmd.Run()
}

/*  Dependencies func */

func getWorkDirToolPath(name string) string {
	toolPath := ""
	workDir, err := os.Getwd()
	if err != nil {
		log.Println("Error", err)
		return toolPath
	}
	toolsPath := filepath.Join(workDir, "tools")
	filepath.Walk(toolsPath, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		if strings.TrimSuffix(info.Name(), filepath.Ext(info.Name())) == name {
			toolPath = path
		}
		return nil
	})
	return toolPath
}

func getToolPath(name string) (string, error) {
	toolPath := getWorkDirToolPath(name)
	if toolPath != "" {
		return toolPath, nil
	}
	if p, err := exec.LookPath(name); err == nil {
		return p, nil
	}
	// check under gopath
	gopath := os.Getenv("GOPATH")
	if gopath == "" {
		gopath = build.Default.GOPATH
	}
	p := filepath.Join(gopath, "bin", name)

	if _, err := os.Stat(p); err != nil {
		return "", err
	}
	return p, nil
}

func getRustToolPath(name string) (string, error) {
	toolPath := getWorkDirToolPath(name)
	if toolPath != "" {
		return toolPath, nil
	}

	if p, err := exec.LookPath(name); err == nil {
		return p, nil
	}

	cargoHome := os.Getenv("CARGO_HOME")
	if cargoHome == "" {
		cargoHome = filepath.Join(os.Getenv("HOME"), ".cargo")
	}
	p := filepath.Join(cargoHome, "bin", name)

	if _, err := os.Stat(p); err != nil {
		return "", err
	}
	return p, nil
}

func connectStd(cmd *exec.Cmd) {
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
}

func removeOmitemptyTags() error {
	protoGoDir := filepath.Join(protoDir, GO) // "./proto/go"

	re := regexp.MustCompile(`,\s*omitempty`)

	return filepath.Walk(protoGoDir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			fmt.Println("access path error:", err)
			return err
		}
		if !info.IsDir() && strings.HasSuffix(path, ".pb.go") {
			input, err := os.ReadFile(path)
			if err != nil {
				fmt.Println("ReadFile error. Path: %s, Error %v", path, err)
				return err
			}

			output := re.ReplaceAllString(string(input), "")

			// check replace is happened
			if string(input) != output {
				err = os.WriteFile(path, []byte(output), info.Mode())
				if err != nil {
					fmt.Printf("Error writing file: %s, error: %v\n", path, err)
					return err
				}
				// fmt.Println("Modified file:", path)
			}
		}

		return nil
	})
}
