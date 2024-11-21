package user

import (
	"github.com/openimsdk/openim-sdk-core/v3/pkg/db/model_struct"
	sdkpb "github.com/openimsdk/openim-sdk-core/v3/proto/go/shared"
	"github.com/openimsdk/openim-sdk-core/v3/sdk_struct"
	"github.com/openimsdk/protocol/user"

	"github.com/openimsdk/protocol/sdkws"
)

func ServerUserToLocalUser(user *sdkws.UserInfo) *model_struct.LocalUser {
	return &model_struct.LocalUser{
		UserID:     user.UserID,
		Nickname:   user.Nickname,
		FaceURL:    user.FaceURL,
		CreateTime: user.CreateTime,
		Ex:         user.Ex,
		//AppMangerLevel:   user.AppMangerLevel,
		GlobalRecvMsgOpt: user.GlobalRecvMsgOpt,
		//AttachedInfo: user.AttachedInfo,
	}
}
func ServerCommandToLocalCommand(data *user.AllCommandInfoResp) *model_struct.LocalUserCommand {
	return &model_struct.LocalUserCommand{
		Type:       data.Type,
		CreateTime: data.CreateTime,
		Uuid:       data.Uuid,
		Value:      data.Value,
	}
}
func LocalUserToPublicUser(user *model_struct.LocalUser) *sdk_struct.PublicUser {
	return &sdk_struct.PublicUser{
		UserID:     user.UserID,
		Nickname:   user.Nickname,
		FaceURL:    user.FaceURL,
		Ex:         user.Ex,
		CreateTime: user.CreateTime,
	}
}

func ServerUserToSdk(info *sdkws.UserInfo) *sdkpb.IMUser {
	return &sdkpb.IMUser{
		UserID:           info.UserID,
		Nickname:         info.Nickname,
		FaceURL:          info.FaceURL,
		CreateTime:       info.CreateTime,
		Ex:               info.Ex,
		GlobalRecvMsgOpt: info.GlobalRecvMsgOpt,
	}
}

func DBUserToSdk(info *model_struct.LocalUser) *sdkpb.IMUser {
	return &sdkpb.IMUser{
		UserID:           info.UserID,
		Nickname:         info.Nickname,
		FaceURL:          info.FaceURL,
		CreateTime:       info.CreateTime,
		Ex:               info.Ex,
		Attached:         info.AttachedInfo,
		GlobalRecvMsgOpt: info.GlobalRecvMsgOpt,
	}
}

func DBCommandToSdk(info *model_struct.LocalUserCommand) *sdkpb.CommandInfo {
	return &sdkpb.CommandInfo{
		UserID:     info.UserID,
		Type:       info.Type,
		Uuid:       info.Uuid,
		CreateTime: info.CreateTime,
		Value:      info.Value,
		Ex:         info.Ex,
	}
}
