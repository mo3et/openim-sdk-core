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
	"strings"
)

var Default = GenGo

var (
	GO     = "go"
	JAVA   = "java"
	CSharp = "csharp"
	JS     = "js"
	TS     = "ts"
)

var protoModules = []string{
	"common",
	"conversation",
	"event",
	"ffi",
	"group",
	"init",
	"message",
	"msg",
	"msggateway",
	"relation",
	"shared",
	"user",
}

var protoDir = filepath.Join(".", "proto")

/*
protoc --go_out=:./ --go_opt=module=github.com/openimsdk/openim-sdk-core/v3/proto *.proto
protoc --go_out=./${name} --go_opt=module=github.com/openimsdk/openim-sdk-core/v3/proto/go/${name} proto/${name}.proto
*/

/*
JavaScript need install `protoc-gen-js`
Typescript need install `ts-protoc-gen`
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
			"--go_opt=module=github.com/openimsdk/openim-sdk-core/v3/proto/" + strings.Join([]string{GO, module}, "/"),
			filepath.Join("proto", module) + ".proto",
		}
		// log.Println("args : ", args)
		cmd := exec.Command(protoc, args...)
		connectStd(cmd)
		if err := cmd.Run(); err != nil {
			return err
		}
	}

	// log.Println("genrating proto to path : ", goOutDir)
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
			return err
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
			return err
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
			return err
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

	for _, module := range protoModules {
		if err := os.MkdirAll(filepath.Join(tsOutDir, module), 0755); err != nil {
			return err
		}

		args := []string{
			"--proto_path=" + protoDir,
			"--ts_out=" + filepath.Join(tsOutDir, module),
			filepath.Join("proto", module) + ".proto",
		}

		cmd := exec.Command(protoc, args...)
		connectStd(cmd)

		if err := cmd.Run(); err != nil {
			return err
		}
	}

	return nil
}

// Tools

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
