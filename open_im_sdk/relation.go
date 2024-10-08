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

package open_im_sdk

import "github.com/openimsdk/openim-sdk-core/v3/open_im_sdk_callback"

func GetSpecifiedFriendsInfo(callback open_im_sdk_callback.Base, operationID string, userIDList string, filterBlack bool) {
	call(callback, operationID, UserForSDK.Relation().GetSpecifiedFriendsInfo, userIDList, filterBlack)
}

func GetFriendList(callback open_im_sdk_callback.Base, operationID string, filterBlack bool) {
	call(callback, operationID, UserForSDK.Relation().GetFriendList, filterBlack)
}

func GetFriendListPage(callback open_im_sdk_callback.Base, operationID string, offset int32, count int32, filterBlack bool) {
	call(callback, operationID, UserForSDK.Relation().GetFriendListPage, offset, count, filterBlack)
}

func SearchFriends(callback open_im_sdk_callback.Base, operationID string, searchParam string) {
	call(callback, operationID, UserForSDK.Relation().SearchFriends, searchParam)
}

func CheckFriend(callback open_im_sdk_callback.Base, operationID string, userIDList string) {
	call(callback, operationID, UserForSDK.Relation().CheckFriend, userIDList)
}

func AddFriend(callback open_im_sdk_callback.Base, operationID string, userIDReqMsg string) {
	call(callback, operationID, UserForSDK.Relation().AddFriend, userIDReqMsg)
}

func UpdateFriends(callback open_im_sdk_callback.Base, operationID string, req string) {
	call(callback, operationID, UserForSDK.Relation().UpdateFriends, req)
}

//func SetFriendRemark(callback open_im_sdk_callback.Base, operationID string, userIDRemark string) {
//	call(callback, operationID, UserForSDK.Relation().SetFriendRemark, userIDRemark)
//}
//func PinFriends(callback open_im_sdk_callback.Base, operationID string, pinFriendsParams string) {
//	call(callback, operationID, UserForSDK.Relation().PinFriends, pinFriendsParams)
//}

func DeleteFriend(callback open_im_sdk_callback.Base, operationID string, friendUserID string) {
	call(callback, operationID, UserForSDK.Relation().DeleteFriend, friendUserID)
}

func GetFriendApplicationListAsRecipient(callback open_im_sdk_callback.Base, operationID string) {
	call(callback, operationID, UserForSDK.Relation().GetFriendApplicationListAsRecipient)
}

func GetFriendApplicationListAsApplicant(callback open_im_sdk_callback.Base, operationID string) {
	call(callback, operationID, UserForSDK.Relation().GetFriendApplicationListAsApplicant)
}

func AcceptFriendApplication(callback open_im_sdk_callback.Base, operationID string, userIDHandleMsg string) {
	call(callback, operationID, UserForSDK.Relation().AcceptFriendApplication, userIDHandleMsg)
}

func RefuseFriendApplication(callback open_im_sdk_callback.Base, operationID string, userIDHandleMsg string) {
	call(callback, operationID, UserForSDK.Relation().RefuseFriendApplication, userIDHandleMsg)
}

func AddBlack(callback open_im_sdk_callback.Base, operationID string, blackUserID string, ex string) {
	call(callback, operationID, UserForSDK.Relation().AddBlack, blackUserID, ex)
}

func GetBlackList(callback open_im_sdk_callback.Base, operationID string) {
	call(callback, operationID, UserForSDK.Relation().GetBlackList)
}

func RemoveBlack(callback open_im_sdk_callback.Base, operationID string, removeUserID string) {
	call(callback, operationID, UserForSDK.Relation().RemoveBlack, removeUserID)
}

//func SetFriendsEx(callback open_im_sdk_callback.Base, operationID string, friendIDs string, ex string) {
//	call(callback, operationID, UserForSDK.Relation().SetFriendsEx, friendIDs, ex)
//}
