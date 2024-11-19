#!/bin/bash

# 设定根目录为当前脚本所在目录
ROOT_DIR="$(pwd)"

# 输出目录
OUT_DIR="${ROOT_DIR}/pbts_out"
rm -rf ${OUT_DIR}
mkdir -p ${OUT_DIR}

# 收集所有.proto文件的路径
proto_files=()
while IFS= read -r -d $'\0' proto_file; do
    proto_files+=("${proto_file}")
done < <(find ${ROOT_DIR} -name "*.proto" -print0)

# 一次性使用protoc生成所有.proto文件的TS文件
protoc --plugin=protoc-gen-ts_proto="${ROOT_DIR}/node_modules/.bin/protoc-gen-ts_proto" \
       --ts_proto_opt=esModuleInterop=true,messages=true \
       --proto_path="${ROOT_DIR}" \
       --ts_proto_out="${OUT_DIR}" \
       "${proto_files[@]}"

echo "Generated TypeScript files in ${OUT_DIR}"
