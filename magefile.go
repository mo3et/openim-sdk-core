// go:build mage
//go:build mage
// +build mage

package main

import (
	"go/build"
	"log"
	"os"
	"os/exec"
	"path/filepath"
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
	"msggateway",
	"relation",
	"user",
}

var protoDir = "./proto"

/*
protoc --go_out=:./ --go_opt=module=github.com/openimsdk/openim-sdk-core/v3/proto *.proto
protoc --go_out=./${name} --go_opt=module=github.com/openimsdk/openim-sdk-core/v3/proto/go/${name} proto/${name}.proto
*/

func GenGo() error {
	log.Println("Generating Go code from proto files")
	log.SetOutput(os.Stdout)
	log.SetFlags(log.Lshortfile)

	goOutDir := filepath.Join(protoDir, GO)

	protoc, err := getToolPath("protoc")
	if err != nil {
		return err
	}

	// protocGoPath, err := getToolPath("protoc-gen-go")
	// if err != nil {
	// 	return err
	// }

	for _, module := range protoModules {
		if err := os.MkdirAll(filepath.Join(goOutDir, module), 0755); err != nil {
			return err
		}

		args := []string{
			"--proto_path=" + protoDir,
			"--go_out=" + filepath.Join(goOutDir, module),
			"--go_opt=module=github.com/openimsdk/openim-sdk-core/v3/proto/" + filepath.Join(GO, module),
			filepath.Join("proto", module) + ".proto",
		}
		log.Println("args : ", args)
		cmd := exec.Command(protoc, args...)
		connectStd(cmd)
		if err := cmd.Run(); err != nil {
			return err
		}
	}
	log.Println("genrating proto to path : ", goOutDir)
	return nil
}

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
