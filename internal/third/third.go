// Copyright © 2023 OpenIM SDK. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package third

import (
	"sync"

	"github.com/openimsdk/openim-sdk-core/v3/internal/third/file"
	pb "github.com/openimsdk/openim-sdk-core/v3/proto"
)

type Third struct {
	platform      pb.Platform
	loginUserID   string
	appFramework  pb.AppFramework
	LogFilePath   string
	fileUploader  *file.File
	logUploadLock sync.Mutex
}

func (t *Third) SetPlatform(platform pb.Platform) {
	t.platform = platform
}

func (t *Third) SetLoginUserID(loginUserID string) {
	t.loginUserID = loginUserID
}

func (t *Third) SetAppFramework(appFramework pb.AppFramework) {
	t.appFramework = appFramework
}

func (t *Third) SetLogFilePath(LogFilePath string) {
	t.LogFilePath = LogFilePath
}

func NewThird(fileUploader *file.File) *Third {
	return &Third{fileUploader: fileUploader}
}

//func NewThird(platformID int32, loginUserID, systemType, LogFilePath string, fileUploader *file.File) *Third {
//	return &Third{platformID: platformID, loginUserID: loginUserID, systemType: systemType, LogFilePath: LogFilePath, fileUploader: fileUploader}
//}
