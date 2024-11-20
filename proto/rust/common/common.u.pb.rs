extern crate protobuf_upb as __pb;
extern crate std as __std;
#[allow(non_camel_case_types)]
pub struct OfflinePushInfo {
  inner: ::__pb::__runtime::MessageInner
}

impl std::fmt::Debug for OfflinePushInfo {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

impl std::default::Default for OfflinePushInfo {
  fn default() -> Self {
    Self::new()
  }
}

// SAFETY:
// - `OfflinePushInfo` is `Sync` because it does not implement interior mutability.
//    Neither does `OfflinePushInfoMut`.
unsafe impl Sync for OfflinePushInfo {}

// SAFETY:
// - `OfflinePushInfo` is `Send` because it uniquely owns its arena and does
//   not use thread-local data.
unsafe impl Send for OfflinePushInfo {}

impl ::__pb::Proxied for OfflinePushInfo {
  type View<'msg> = OfflinePushInfoView<'msg>;
  type Mut<'msg> = OfflinePushInfoMut<'msg>;
}

#[derive(Copy, Clone)]
#[allow(dead_code)]
pub struct OfflinePushInfoView<'msg> {
  msg: ::__pb::__runtime::RawMessage,
  _phantom: ::__std::marker::PhantomData<&'msg ()>,
}

impl std::fmt::Debug for OfflinePushInfoView<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> OfflinePushInfoView<'msg> {
  #[doc(hidden)]
  pub fn new(_private: ::__pb::__internal::Private, msg: ::__pb::__runtime::RawMessage) -> Self {
    Self { msg, _phantom: ::__std::marker::PhantomData }
  }

  fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
    self.msg
  }

  pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
    let arena = ::__pb::__runtime::Arena::new();
    // SAFETY: openim__sdk__common__OfflinePushInfo_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__sdk__common__OfflinePushInfo_msg_init) };
    let options = 0;
    let mut buf: *mut u8 = std::ptr::null_mut();
    let mut len = 0;

    // SAFETY: `mini_table` is the corresponding one that was used to
    // construct `self.raw_msg()`.
    let status = unsafe {
      ::__pb::__runtime::upb_Encode(self.raw_msg(), mini_table, options, arena.raw(),
          &mut buf, &mut len)
    };

    assert!(status == ::__pb::__runtime::EncodeStatus::Ok);
    let data = if len == 0 {
      std::ptr::NonNull::dangling()
    } else {
      std::ptr::NonNull::new(buf).unwrap()
    };

    // SAFETY:
    // - `arena` allocated `data`.
    // - `data` is valid for reads up to `len` and will not be mutated.
    unsafe {
      ::__pb::__runtime::SerializedData::from_raw_parts(arena, data, len)
    }
  }

  // title: optional string
  pub fn title(self) -> &'msg ::__pb::ProtoStr {
    let view = unsafe { openim_sdk_common_OfflinePushInfo_title(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }

  // desc: optional string
  pub fn desc(self) -> &'msg ::__pb::ProtoStr {
    let view = unsafe { openim_sdk_common_OfflinePushInfo_desc(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }

  // ex: optional string
  pub fn ex(self) -> &'msg ::__pb::ProtoStr {
    let view = unsafe { openim_sdk_common_OfflinePushInfo_ex(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }

  // iOSPushSound: optional string
  pub fn iOSPushSound(self) -> &'msg ::__pb::ProtoStr {
    let view = unsafe { openim_sdk_common_OfflinePushInfo_iOSPushSound(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }

  // iOSBadgeCount: optional bool
  pub fn iOSBadgeCount(self) -> bool {
    unsafe { openim_sdk_common_OfflinePushInfo_iOSBadgeCount(self.raw_msg()) }
  }

  // signalInfo: optional string
  pub fn signalInfo(self) -> &'msg ::__pb::ProtoStr {
    let view = unsafe { openim_sdk_common_OfflinePushInfo_signalInfo(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }

}

// SAFETY:
// - `OfflinePushInfoView` is `Sync` because it does not support mutation.
unsafe impl Sync for OfflinePushInfoView<'_> {}

// SAFETY:
// - `OfflinePushInfoView` is `Send` because while its alive a `OfflinePushInfoMut` cannot.
// - `OfflinePushInfoView` does not use thread-local data.
unsafe impl Send for OfflinePushInfoView<'_> {}

impl<'msg> ::__pb::ViewProxy<'msg> for OfflinePushInfoView<'msg> {
  type Proxied = OfflinePushInfo;

  fn as_view(&self) -> ::__pb::View<'msg, OfflinePushInfo> {
    *self
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, OfflinePushInfo> where 'msg: 'shorter {
    self
  }
}

impl ::__pb::__internal::ProxiedWithRawVTable for OfflinePushInfo {
  type VTable = ::__pb::__runtime::MessageVTable;

  fn make_view(_private: ::__pb::__internal::Private,
              mut_inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::View<'_, Self> {
    let msg = unsafe {
      (mut_inner.vtable().getter)(mut_inner.msg_ref().msg())
    };
    OfflinePushInfoView::new(::__pb::__internal::Private, msg.unwrap_or_else(||::__pb::__runtime::ScratchSpace::zeroed_block(::__pb::__internal::Private)))
  }

  fn make_mut(_private: ::__pb::__internal::Private,
              inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::Mut<'_, Self> {
    let raw_submsg = unsafe {
      (inner.vtable().mut_getter)(inner.msg_ref().msg(), inner.msg_ref().arena(::__pb::__internal::Private).raw())
    };
    OfflinePushInfoMut::from_parent(::__pb::__internal::Private, inner.msg_ref(), raw_submsg)
  }
}

impl ::__pb::__internal::ProxiedWithRawOptionalVTable for OfflinePushInfo {
  type OptionalVTable = ::__pb::__runtime::MessageVTable;

  fn upcast_vtable(_private: ::__pb::__internal::Private,
                   optional_vtable: &'static Self::OptionalVTable)
                  -> &'static Self::VTable {
    &optional_vtable
  }
}

impl ::__pb::ProxiedWithPresence for OfflinePushInfo {
  type PresentMutData<'a> = ::__pb::__runtime::MessagePresentMutData<'a, OfflinePushInfo>;
  type AbsentMutData<'a> = ::__pb::__runtime::MessageAbsentMutData<'a, OfflinePushInfo>;

  fn clear_present_field(present_mutator: Self::PresentMutData<'_>)
     -> Self::AbsentMutData<'_> {
     // SAFETY: The raw ptr msg_ref is valid
    unsafe {
      (present_mutator.optional_vtable().clearer)(present_mutator.msg_ref().msg());

     ::__pb::__internal::RawVTableOptionalMutatorData::new(::__pb::__internal::Private,
       present_mutator.msg_ref(),
       present_mutator.optional_vtable())
    }
  }

  fn set_absent_to_default(absent_mutator: Self::AbsentMutData<'_>)
     -> Self::PresentMutData<'_> {
   unsafe {
     ::__pb::__internal::RawVTableOptionalMutatorData::new(::__pb::__internal::Private,
       absent_mutator.msg_ref(),
       absent_mutator.optional_vtable())
   }
  }
}

impl<'msg> ::__pb::SettableValue<OfflinePushInfo> for OfflinePushInfoView<'msg> {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, OfflinePushInfo>)
    where OfflinePushInfo: 'dst {
    unsafe { ::__pb::__runtime::upb_Message_DeepCopy(
      mutator.inner.msg(),
      self.msg,
      ::__std::ptr::addr_of!(openim__sdk__common__OfflinePushInfo_msg_init),
      mutator.inner.arena(::__pb::__internal::Private).raw(),
    ) };
  }
}

impl ::__pb::SettableValue<OfflinePushInfo> for OfflinePushInfo {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, OfflinePushInfo>)
    where OfflinePushInfo: 'dst {
    self.as_view().set_on(::__pb::__internal::Private, mutator);
  }
}

unsafe impl ::__pb::ProxiedInRepeated for OfflinePushInfo {
  fn repeated_len(f: ::__pb::View<::__pb::Repeated<Self>>) -> usize {
    // SAFETY: `f.as_raw()` is a valid `upb_Array*`.
    unsafe { ::__pb::__runtime::upb_Array_Size(f.as_raw(::__pb::__internal::Private)) }
  }
  unsafe fn repeated_set_unchecked(
    mut f: ::__pb::Mut<::__pb::Repeated<Self>>,
    i: usize,
    v: ::__pb::View<Self>,
  ) {
    // SAFETY:
    // - `f.as_raw()` is a valid `upb_Array*`.
    // - `i < len(f)` is promised by the caller.
    let dest_msg = unsafe {
      ::__pb::__runtime::upb_Array_GetMutable(f.as_raw(::__pb::__internal::Private), i).msg
    }.expect("upb_Array* element should not be NULL");

    // SAFETY:
    // - `dest_msg` is a valid `upb_Message*`.
    // - `v.raw_msg()` and `dest_msg` both have message minitable `openim__sdk__common__OfflinePushInfo_msg_init`.
    unsafe {
      ::__pb::__runtime::upb_Message_DeepCopy(
        dest_msg,
        v.raw_msg(),
        ::__std::ptr::addr_of!(openim__sdk__common__OfflinePushInfo_msg_init),
        f.raw_arena(::__pb::__internal::Private),
      )
    };
  }

  unsafe fn repeated_get_unchecked(
    f: ::__pb::View<::__pb::Repeated<Self>>,
    i: usize,
  ) -> ::__pb::View<Self> {
    // SAFETY:
    // - `f.as_raw()` is a valid `const upb_Array*`.
    // - `i < len(f)` is promised by the caller.
    let msg_ptr = unsafe { ::__pb::__runtime::upb_Array_Get(f.as_raw(::__pb::__internal::Private), i).msg_val }
      .expect("upb_Array* element should not be NULL.");
    ::__pb::View::<Self>::new(::__pb::__internal::Private, msg_ptr)
  }

  fn repeated_clear(mut f: ::__pb::Mut<::__pb::Repeated<Self>>) {
    // SAFETY:
    // - `f.as_raw()` is a valid `upb_Array*`.
    unsafe {
      ::__pb::__runtime::upb_Array_Resize(f.as_raw(::__pb::__internal::Private), 0, f.raw_arena(::__pb::__internal::Private))
    };
  }
  fn repeated_push(mut f: ::__pb::Mut<::__pb::Repeated<Self>>, v: ::__pb::View<Self>) {
    // SAFETY:
    // - `v.raw_msg()` is a valid `const upb_Message*` with minitable `openim__sdk__common__OfflinePushInfo_msg_init`.
    let msg_ptr = unsafe {
      ::__pb::__runtime::upb_Message_DeepClone(
        v.raw_msg(),
        std::ptr::addr_of!(openim__sdk__common__OfflinePushInfo_msg_init),
        f.raw_arena(::__pb::__internal::Private),
      )
    }.expect("upb_Message_DeepClone failed.");

    // Append new default message to array.
    // SAFETY:
    // - `f.as_raw()` is a valid `upb_Array*`.
    // - `msg_ptr` is a valid `upb_Message*`.
    unsafe {
      ::__pb::__runtime::upb_Array_Append(
        f.as_raw(::__pb::__internal::Private),
        ::__pb::__runtime::upb_MessageValue{msg_val: Some(msg_ptr)},
        f.raw_arena(::__pb::__internal::Private),
      );
    };
  }

  fn repeated_copy_from(
    src: ::__pb::View<::__pb::Repeated<Self>>,
    dest: ::__pb::Mut<::__pb::Repeated<Self>>,
  ) {
      // SAFETY:
      // - Elements of `src` and `dest` have message minitable `openim__sdk__common__OfflinePushInfo_msg_init`.
      unsafe {
        ::__pb::__runtime::repeated_message_copy_from(src, dest, ::__std::ptr::addr_of!(openim__sdk__common__OfflinePushInfo_msg_init));
      }
  }
}
impl ::__pb::__runtime::UpbTypeConversions for OfflinePushInfo {
    fn upb_type() -> ::__pb::__runtime::CType {
        ::__pb::__runtime::CType::Message
    }

    fn to_message_value(
        val: ::__pb::View<'_, Self>) -> ::__pb::__runtime::upb_MessageValue {
        ::__pb::__runtime::upb_MessageValue { msg_val: Some(val.raw_msg()) }
    }

    unsafe fn to_message_value_copy_if_required(
      arena: ::__pb::__runtime::RawArena,
      val: ::__pb::View<'_, Self>) -> ::__pb::__runtime::upb_MessageValue {
      // Self::to_message_value(val)
      // SAFETY: The arena memory is not freed due to `ManuallyDrop`.
      let cloned_msg = ::__pb::__runtime::upb_Message_DeepClone(
          val.raw_msg(), ::__std::ptr::addr_of!(openim__sdk__common__OfflinePushInfo_msg_init), arena)
          .expect("upb_Message_DeepClone failed.");
      Self::to_message_value(
          OfflinePushInfoView::new(::__pb::__internal::Private, cloned_msg))
      }

    unsafe fn from_message_value<'msg>(msg: ::__pb::__runtime::upb_MessageValue)
        -> ::__pb::View<'msg, Self> {
        OfflinePushInfoView::new(
            ::__pb::__internal::Private,
            unsafe { msg.msg_val }
                .expect("expected present message value in map"))
    }
}
impl ::__pb::ProxiedInMapValue<i32> for OfflinePushInfo {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<i32, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
          ::__pb::__runtime::upb_Map_New(
            arena.raw(),
            <i32 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
            <Self as ::__pb::__runtime::UpbTypeConversions>::upb_type())
        };

        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<i32, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<i32, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                <Self as ::__pb::__runtime::UpbTypeConversions>::to_message_value_copy_if_required(arena, value),
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(unsafe { <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(val.assume_init()) })
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>) -> bool {
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__std::ptr::null_mut())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<i32, Self>>) -> ::__pb::MapIter<'_, i32, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, i32, Self>
    ) -> Option<(::__pb::View<'a, i32>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <i32 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(v),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<u32> for OfflinePushInfo {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<u32, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
          ::__pb::__runtime::upb_Map_New(
            arena.raw(),
            <u32 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
            <Self as ::__pb::__runtime::UpbTypeConversions>::upb_type())
        };

        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<u32, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<u32, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                <Self as ::__pb::__runtime::UpbTypeConversions>::to_message_value_copy_if_required(arena, value),
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(unsafe { <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(val.assume_init()) })
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>) -> bool {
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__std::ptr::null_mut())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<u32, Self>>) -> ::__pb::MapIter<'_, u32, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, u32, Self>
    ) -> Option<(::__pb::View<'a, u32>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <u32 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(v),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<i64> for OfflinePushInfo {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<i64, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
          ::__pb::__runtime::upb_Map_New(
            arena.raw(),
            <i64 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
            <Self as ::__pb::__runtime::UpbTypeConversions>::upb_type())
        };

        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<i64, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<i64, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                <Self as ::__pb::__runtime::UpbTypeConversions>::to_message_value_copy_if_required(arena, value),
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(unsafe { <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(val.assume_init()) })
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>) -> bool {
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__std::ptr::null_mut())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<i64, Self>>) -> ::__pb::MapIter<'_, i64, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, i64, Self>
    ) -> Option<(::__pb::View<'a, i64>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <i64 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(v),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<u64> for OfflinePushInfo {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<u64, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
          ::__pb::__runtime::upb_Map_New(
            arena.raw(),
            <u64 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
            <Self as ::__pb::__runtime::UpbTypeConversions>::upb_type())
        };

        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<u64, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<u64, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                <Self as ::__pb::__runtime::UpbTypeConversions>::to_message_value_copy_if_required(arena, value),
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(unsafe { <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(val.assume_init()) })
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>) -> bool {
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__std::ptr::null_mut())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<u64, Self>>) -> ::__pb::MapIter<'_, u64, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, u64, Self>
    ) -> Option<(::__pb::View<'a, u64>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <u64 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(v),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<bool> for OfflinePushInfo {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<bool, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
          ::__pb::__runtime::upb_Map_New(
            arena.raw(),
            <bool as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
            <Self as ::__pb::__runtime::UpbTypeConversions>::upb_type())
        };

        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<bool, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<bool, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                <Self as ::__pb::__runtime::UpbTypeConversions>::to_message_value_copy_if_required(arena, value),
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(unsafe { <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(val.assume_init()) })
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>) -> bool {
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__std::ptr::null_mut())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<bool, Self>>) -> ::__pb::MapIter<'_, bool, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, bool, Self>
    ) -> Option<(::__pb::View<'a, bool>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <bool as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(v),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for OfflinePushInfo {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<::__pb::ProtoStr, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
          ::__pb::__runtime::upb_Map_New(
            arena.raw(),
            <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
            <Self as ::__pb::__runtime::UpbTypeConversions>::upb_type())
        };

        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<::__pb::ProtoStr, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                <Self as ::__pb::__runtime::UpbTypeConversions>::to_message_value_copy_if_required(arena, value),
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(unsafe { <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(val.assume_init()) })
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>) -> bool {
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__std::ptr::null_mut())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) -> ::__pb::MapIter<'_, ::__pb::ProtoStr, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, ::__pb::ProtoStr, Self>
    ) -> Option<(::__pb::View<'a, ::__pb::ProtoStr>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(v),
            )})
    }
}

#[allow(dead_code)]
#[allow(non_camel_case_types)]
pub struct OfflinePushInfoMut<'msg> {
  inner: ::__pb::__runtime::MutatorMessageRef<'msg>,
}

impl std::fmt::Debug for OfflinePushInfoMut<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> OfflinePushInfoMut<'msg> {
  #[doc(hidden)]
  pub fn from_parent(
             _private: ::__pb::__internal::Private,
             parent: ::__pb::__runtime::MutatorMessageRef<'msg>,
             msg: ::__pb::__runtime::RawMessage)
    -> Self {
    Self {
      inner: ::__pb::__runtime::MutatorMessageRef::from_parent(
               ::__pb::__internal::Private, parent, msg)
    }
  }

  #[doc(hidden)]
  pub fn new(_private: ::__pb::__internal::Private, msg: &'msg mut ::__pb::__runtime::MessageInner) -> Self {
    Self{ inner: ::__pb::__runtime::MutatorMessageRef::new(_private, msg) }
  }

  #[deprecated = "This .or_default() is a no-op, usages can be safely removed"]
  pub fn or_default(self) -> Self { self }

  fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
    self.inner.msg()
  }

  fn as_mutator_message_ref(&mut self) -> ::__pb::__runtime::MutatorMessageRef<'msg> {
    self.inner
  }

  pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
    ::__pb::ViewProxy::as_view(self).serialize()
  }

  fn arena(&self) -> &::__pb::__runtime::Arena {
    self.inner.arena(::__pb::__internal::Private)
  }

  // title: optional string
  pub fn title(&self) -> &'_ ::__pb::ProtoStr {
    let view = unsafe { openim_sdk_common_OfflinePushInfo_title(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }
  pub fn set_title(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
    self.title_mut().set(val);
  }
  fn title_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
    unsafe {
      <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__internal::RawVTableMutator::new(
          ::__pb::__internal::Private,
          self.as_mutator_message_ref(),
          OfflinePushInfo::__TITLE_VTABLE,
        )
      )
    }
  }

  // desc: optional string
  pub fn desc(&self) -> &'_ ::__pb::ProtoStr {
    let view = unsafe { openim_sdk_common_OfflinePushInfo_desc(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }
  pub fn set_desc(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
    self.desc_mut().set(val);
  }
  fn desc_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
    unsafe {
      <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__internal::RawVTableMutator::new(
          ::__pb::__internal::Private,
          self.as_mutator_message_ref(),
          OfflinePushInfo::__DESC_VTABLE,
        )
      )
    }
  }

  // ex: optional string
  pub fn ex(&self) -> &'_ ::__pb::ProtoStr {
    let view = unsafe { openim_sdk_common_OfflinePushInfo_ex(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }
  pub fn set_ex(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
    self.ex_mut().set(val);
  }
  fn ex_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
    unsafe {
      <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__internal::RawVTableMutator::new(
          ::__pb::__internal::Private,
          self.as_mutator_message_ref(),
          OfflinePushInfo::__EX_VTABLE,
        )
      )
    }
  }

  // iOSPushSound: optional string
  pub fn iOSPushSound(&self) -> &'_ ::__pb::ProtoStr {
    let view = unsafe { openim_sdk_common_OfflinePushInfo_iOSPushSound(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }
  pub fn set_iOSPushSound(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
    self.iOSPushSound_mut().set(val);
  }
  fn iOSPushSound_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
    unsafe {
      <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__internal::RawVTableMutator::new(
          ::__pb::__internal::Private,
          self.as_mutator_message_ref(),
          OfflinePushInfo::__IOSPUSHSOUND_VTABLE,
        )
      )
    }
  }

  // iOSBadgeCount: optional bool
  pub fn iOSBadgeCount(&self) -> bool {
    unsafe { openim_sdk_common_OfflinePushInfo_iOSBadgeCount(self.raw_msg()) }
  }
  pub fn set_iOSBadgeCount(&mut self, val: bool) {
    unsafe { openim_sdk_common_OfflinePushInfo_set_iOSBadgeCount(self.raw_msg(), val) }
  }

  // signalInfo: optional string
  pub fn signalInfo(&self) -> &'_ ::__pb::ProtoStr {
    let view = unsafe { openim_sdk_common_OfflinePushInfo_signalInfo(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }
  pub fn set_signalInfo(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
    self.signalInfo_mut().set(val);
  }
  fn signalInfo_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
    unsafe {
      <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__internal::RawVTableMutator::new(
          ::__pb::__internal::Private,
          self.as_mutator_message_ref(),
          OfflinePushInfo::__SIGNALINFO_VTABLE,
        )
      )
    }
  }

}

// SAFETY:
// - `OfflinePushInfoMut` does not perform any shared mutation.
// - `OfflinePushInfoMut` is not `Send`, and so even in the presence of mutator
//   splitting, synchronous access of an arena is impossible.
unsafe impl Sync for OfflinePushInfoMut<'_> {}

impl<'msg> ::__pb::MutProxy<'msg> for OfflinePushInfoMut<'msg> {
  fn as_mut(&mut self) -> ::__pb::Mut<'_, OfflinePushInfo> {
    OfflinePushInfoMut { inner: self.inner }
  }
  fn into_mut<'shorter>(self) -> ::__pb::Mut<'shorter, OfflinePushInfo> where 'msg : 'shorter { self }
}

impl<'msg> ::__pb::ViewProxy<'msg> for OfflinePushInfoMut<'msg> {
  type Proxied = OfflinePushInfo;
  fn as_view(&self) -> ::__pb::View<'_, OfflinePushInfo> {
    OfflinePushInfoView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, OfflinePushInfo> where 'msg: 'shorter {
    OfflinePushInfoView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
}

#[allow(dead_code)]
impl OfflinePushInfo {
  pub fn new() -> Self {
    let arena = ::__pb::__runtime::Arena::new();
    Self {
      inner: ::__pb::__runtime::MessageInner {
        msg: unsafe { openim_sdk_common_OfflinePushInfo_new(arena.raw()) },
        arena,
      }
    }
  }

  fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
    self.inner.msg
  }

  fn as_mutator_message_ref(&mut self) -> ::__pb::__runtime::MutatorMessageRef {
    ::__pb::__runtime::MutatorMessageRef::new(::__pb::__internal::Private, &mut self.inner)
  }

  fn arena(&self) -> &::__pb::__runtime::Arena {
    &self.inner.arena
  }

  pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
    self.as_view().serialize()
  }
  #[deprecated = "Prefer Msg::parse(), or use the new name 'clear_and_parse' to parse into a pre-existing message."]
  pub fn deserialize(&mut self, data: &[u8]) -> Result<(), ::__pb::ParseError> {
    self.clear_and_parse(data)
  }
  pub fn clear_and_parse(&mut self, data: &[u8]) -> Result<(), ::__pb::ParseError> {
    let mut msg = Self::new();
    // SAFETY: openim__sdk__common__OfflinePushInfo_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__sdk__common__OfflinePushInfo_msg_init) };
    let ext_reg = std::ptr::null();
    let options = 0;

    // SAFETY:
    // - `data.as_ptr()` is valid to read for `data.len()`
    // - `mini_table` is the one used to construct `msg.raw_msg()`
    // - `msg.arena().raw()` is held for the same lifetime as `msg`.
    let status = unsafe {
      ::__pb::__runtime::upb_Decode(
          data.as_ptr(), data.len(), msg.raw_msg(),
          mini_table, ext_reg, options, msg.arena().raw())
    };
    match status {
      ::__pb::__runtime::DecodeStatus::Ok => {
        std::mem::swap(self, &mut msg);
        Ok(())
      }
      _ => Err(::__pb::ParseError)
    }
  }
  pub fn parse(data: &[u8]) -> Result<Self, ::__pb::ParseError> {
    let mut msg = Self::new();
    msg.clear_and_parse(data).map(|_| msg)
  }

  pub fn as_view(&self) -> OfflinePushInfoView {
    OfflinePushInfoView::new(::__pb::__internal::Private, self.inner.msg)
  }

  pub fn as_mut(&mut self) -> OfflinePushInfoMut {
    OfflinePushInfoMut::new(::__pb::__internal::Private, &mut self.inner)
  }

  // title: optional string
  pub fn title(&self) -> &'_ ::__pb::ProtoStr {
    let view = unsafe { openim_sdk_common_OfflinePushInfo_title(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }
  pub fn set_title(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
    self.title_mut().set(val);
  }
  const __TITLE_VTABLE: &'static ::__pb::__internal::BytesMutVTable =
    &::__pb::__internal::BytesMutVTable::new(
      ::__pb::__internal::Private,
      openim_sdk_common_OfflinePushInfo_title,
      openim_sdk_common_OfflinePushInfo_set_title,
    );
  fn title_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
    unsafe {
      <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__internal::RawVTableMutator::new(
          ::__pb::__internal::Private,
          self.as_mutator_message_ref(),
          OfflinePushInfo::__TITLE_VTABLE,
        )
      )
    }
  }

  // desc: optional string
  pub fn desc(&self) -> &'_ ::__pb::ProtoStr {
    let view = unsafe { openim_sdk_common_OfflinePushInfo_desc(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }
  pub fn set_desc(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
    self.desc_mut().set(val);
  }
  const __DESC_VTABLE: &'static ::__pb::__internal::BytesMutVTable =
    &::__pb::__internal::BytesMutVTable::new(
      ::__pb::__internal::Private,
      openim_sdk_common_OfflinePushInfo_desc,
      openim_sdk_common_OfflinePushInfo_set_desc,
    );
  fn desc_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
    unsafe {
      <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__internal::RawVTableMutator::new(
          ::__pb::__internal::Private,
          self.as_mutator_message_ref(),
          OfflinePushInfo::__DESC_VTABLE,
        )
      )
    }
  }

  // ex: optional string
  pub fn ex(&self) -> &'_ ::__pb::ProtoStr {
    let view = unsafe { openim_sdk_common_OfflinePushInfo_ex(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }
  pub fn set_ex(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
    self.ex_mut().set(val);
  }
  const __EX_VTABLE: &'static ::__pb::__internal::BytesMutVTable =
    &::__pb::__internal::BytesMutVTable::new(
      ::__pb::__internal::Private,
      openim_sdk_common_OfflinePushInfo_ex,
      openim_sdk_common_OfflinePushInfo_set_ex,
    );
  fn ex_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
    unsafe {
      <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__internal::RawVTableMutator::new(
          ::__pb::__internal::Private,
          self.as_mutator_message_ref(),
          OfflinePushInfo::__EX_VTABLE,
        )
      )
    }
  }

  // iOSPushSound: optional string
  pub fn iOSPushSound(&self) -> &'_ ::__pb::ProtoStr {
    let view = unsafe { openim_sdk_common_OfflinePushInfo_iOSPushSound(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }
  pub fn set_iOSPushSound(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
    self.iOSPushSound_mut().set(val);
  }
  const __IOSPUSHSOUND_VTABLE: &'static ::__pb::__internal::BytesMutVTable =
    &::__pb::__internal::BytesMutVTable::new(
      ::__pb::__internal::Private,
      openim_sdk_common_OfflinePushInfo_iOSPushSound,
      openim_sdk_common_OfflinePushInfo_set_iOSPushSound,
    );
  fn iOSPushSound_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
    unsafe {
      <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__internal::RawVTableMutator::new(
          ::__pb::__internal::Private,
          self.as_mutator_message_ref(),
          OfflinePushInfo::__IOSPUSHSOUND_VTABLE,
        )
      )
    }
  }

  // iOSBadgeCount: optional bool
  pub fn iOSBadgeCount(&self) -> bool {
    unsafe { openim_sdk_common_OfflinePushInfo_iOSBadgeCount(self.raw_msg()) }
  }
  pub fn set_iOSBadgeCount(&mut self, val: bool) {
    unsafe { openim_sdk_common_OfflinePushInfo_set_iOSBadgeCount(self.raw_msg(), val) }
  }

  // signalInfo: optional string
  pub fn signalInfo(&self) -> &'_ ::__pb::ProtoStr {
    let view = unsafe { openim_sdk_common_OfflinePushInfo_signalInfo(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }
  pub fn set_signalInfo(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
    self.signalInfo_mut().set(val);
  }
  const __SIGNALINFO_VTABLE: &'static ::__pb::__internal::BytesMutVTable =
    &::__pb::__internal::BytesMutVTable::new(
      ::__pb::__internal::Private,
      openim_sdk_common_OfflinePushInfo_signalInfo,
      openim_sdk_common_OfflinePushInfo_set_signalInfo,
    );
  fn signalInfo_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
    unsafe {
      <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__internal::RawVTableMutator::new(
          ::__pb::__internal::Private,
          self.as_mutator_message_ref(),
          OfflinePushInfo::__SIGNALINFO_VTABLE,
        )
      )
    }
  }

}  // impl OfflinePushInfo

impl ::__std::ops::Drop for OfflinePushInfo {
  fn drop(&mut self) {
  }
}

extern "C" {
  fn openim_sdk_common_OfflinePushInfo_new(arena: ::__pb::__runtime::RawArena) -> ::__pb::__runtime::RawMessage;
  /// Opaque wrapper for this message's MiniTable. The only valid way to
  /// reference this static is with `std::ptr::addr_of!(..)`.
  static openim__sdk__common__OfflinePushInfo_msg_init: ::__pb::__runtime::upb_MiniTable;

  fn openim_sdk_common_OfflinePushInfo_title(raw_msg: ::__pb::__runtime::RawMessage) -> ::__pb::__runtime::PtrAndLen;
  fn openim_sdk_common_OfflinePushInfo_set_title(raw_msg: ::__pb::__runtime::RawMessage, val: ::__pb::__runtime::PtrAndLen);

  fn openim_sdk_common_OfflinePushInfo_desc(raw_msg: ::__pb::__runtime::RawMessage) -> ::__pb::__runtime::PtrAndLen;
  fn openim_sdk_common_OfflinePushInfo_set_desc(raw_msg: ::__pb::__runtime::RawMessage, val: ::__pb::__runtime::PtrAndLen);

  fn openim_sdk_common_OfflinePushInfo_ex(raw_msg: ::__pb::__runtime::RawMessage) -> ::__pb::__runtime::PtrAndLen;
  fn openim_sdk_common_OfflinePushInfo_set_ex(raw_msg: ::__pb::__runtime::RawMessage, val: ::__pb::__runtime::PtrAndLen);

  fn openim_sdk_common_OfflinePushInfo_iOSPushSound(raw_msg: ::__pb::__runtime::RawMessage) -> ::__pb::__runtime::PtrAndLen;
  fn openim_sdk_common_OfflinePushInfo_set_iOSPushSound(raw_msg: ::__pb::__runtime::RawMessage, val: ::__pb::__runtime::PtrAndLen);

  fn openim_sdk_common_OfflinePushInfo_iOSBadgeCount(raw_msg: ::__pb::__runtime::RawMessage) -> bool;
  fn openim_sdk_common_OfflinePushInfo_set_iOSBadgeCount(raw_msg: ::__pb::__runtime::RawMessage, val: bool);

  fn openim_sdk_common_OfflinePushInfo_signalInfo(raw_msg: ::__pb::__runtime::RawMessage) -> ::__pb::__runtime::PtrAndLen;
  fn openim_sdk_common_OfflinePushInfo_set_signalInfo(raw_msg: ::__pb::__runtime::RawMessage, val: ::__pb::__runtime::PtrAndLen);


}  // extern "C" for OfflinePushInfo


#[allow(non_camel_case_types)]
pub struct RequestPagination {
  inner: ::__pb::__runtime::MessageInner
}

impl std::fmt::Debug for RequestPagination {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

impl std::default::Default for RequestPagination {
  fn default() -> Self {
    Self::new()
  }
}

// SAFETY:
// - `RequestPagination` is `Sync` because it does not implement interior mutability.
//    Neither does `RequestPaginationMut`.
unsafe impl Sync for RequestPagination {}

// SAFETY:
// - `RequestPagination` is `Send` because it uniquely owns its arena and does
//   not use thread-local data.
unsafe impl Send for RequestPagination {}

impl ::__pb::Proxied for RequestPagination {
  type View<'msg> = RequestPaginationView<'msg>;
  type Mut<'msg> = RequestPaginationMut<'msg>;
}

#[derive(Copy, Clone)]
#[allow(dead_code)]
pub struct RequestPaginationView<'msg> {
  msg: ::__pb::__runtime::RawMessage,
  _phantom: ::__std::marker::PhantomData<&'msg ()>,
}

impl std::fmt::Debug for RequestPaginationView<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> RequestPaginationView<'msg> {
  #[doc(hidden)]
  pub fn new(_private: ::__pb::__internal::Private, msg: ::__pb::__runtime::RawMessage) -> Self {
    Self { msg, _phantom: ::__std::marker::PhantomData }
  }

  fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
    self.msg
  }

  pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
    let arena = ::__pb::__runtime::Arena::new();
    // SAFETY: openim__sdk__common__RequestPagination_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__sdk__common__RequestPagination_msg_init) };
    let options = 0;
    let mut buf: *mut u8 = std::ptr::null_mut();
    let mut len = 0;

    // SAFETY: `mini_table` is the corresponding one that was used to
    // construct `self.raw_msg()`.
    let status = unsafe {
      ::__pb::__runtime::upb_Encode(self.raw_msg(), mini_table, options, arena.raw(),
          &mut buf, &mut len)
    };

    assert!(status == ::__pb::__runtime::EncodeStatus::Ok);
    let data = if len == 0 {
      std::ptr::NonNull::dangling()
    } else {
      std::ptr::NonNull::new(buf).unwrap()
    };

    // SAFETY:
    // - `arena` allocated `data`.
    // - `data` is valid for reads up to `len` and will not be mutated.
    unsafe {
      ::__pb::__runtime::SerializedData::from_raw_parts(arena, data, len)
    }
  }

  // pageNumber: optional int32
  pub fn pageNumber(self) -> i32 {
    unsafe { openim_sdk_common_RequestPagination_pageNumber(self.raw_msg()) }
  }

  // showNumber: optional int32
  pub fn showNumber(self) -> i32 {
    unsafe { openim_sdk_common_RequestPagination_showNumber(self.raw_msg()) }
  }

}

// SAFETY:
// - `RequestPaginationView` is `Sync` because it does not support mutation.
unsafe impl Sync for RequestPaginationView<'_> {}

// SAFETY:
// - `RequestPaginationView` is `Send` because while its alive a `RequestPaginationMut` cannot.
// - `RequestPaginationView` does not use thread-local data.
unsafe impl Send for RequestPaginationView<'_> {}

impl<'msg> ::__pb::ViewProxy<'msg> for RequestPaginationView<'msg> {
  type Proxied = RequestPagination;

  fn as_view(&self) -> ::__pb::View<'msg, RequestPagination> {
    *self
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, RequestPagination> where 'msg: 'shorter {
    self
  }
}

impl ::__pb::__internal::ProxiedWithRawVTable for RequestPagination {
  type VTable = ::__pb::__runtime::MessageVTable;

  fn make_view(_private: ::__pb::__internal::Private,
              mut_inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::View<'_, Self> {
    let msg = unsafe {
      (mut_inner.vtable().getter)(mut_inner.msg_ref().msg())
    };
    RequestPaginationView::new(::__pb::__internal::Private, msg.unwrap_or_else(||::__pb::__runtime::ScratchSpace::zeroed_block(::__pb::__internal::Private)))
  }

  fn make_mut(_private: ::__pb::__internal::Private,
              inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::Mut<'_, Self> {
    let raw_submsg = unsafe {
      (inner.vtable().mut_getter)(inner.msg_ref().msg(), inner.msg_ref().arena(::__pb::__internal::Private).raw())
    };
    RequestPaginationMut::from_parent(::__pb::__internal::Private, inner.msg_ref(), raw_submsg)
  }
}

impl ::__pb::__internal::ProxiedWithRawOptionalVTable for RequestPagination {
  type OptionalVTable = ::__pb::__runtime::MessageVTable;

  fn upcast_vtable(_private: ::__pb::__internal::Private,
                   optional_vtable: &'static Self::OptionalVTable)
                  -> &'static Self::VTable {
    &optional_vtable
  }
}

impl ::__pb::ProxiedWithPresence for RequestPagination {
  type PresentMutData<'a> = ::__pb::__runtime::MessagePresentMutData<'a, RequestPagination>;
  type AbsentMutData<'a> = ::__pb::__runtime::MessageAbsentMutData<'a, RequestPagination>;

  fn clear_present_field(present_mutator: Self::PresentMutData<'_>)
     -> Self::AbsentMutData<'_> {
     // SAFETY: The raw ptr msg_ref is valid
    unsafe {
      (present_mutator.optional_vtable().clearer)(present_mutator.msg_ref().msg());

     ::__pb::__internal::RawVTableOptionalMutatorData::new(::__pb::__internal::Private,
       present_mutator.msg_ref(),
       present_mutator.optional_vtable())
    }
  }

  fn set_absent_to_default(absent_mutator: Self::AbsentMutData<'_>)
     -> Self::PresentMutData<'_> {
   unsafe {
     ::__pb::__internal::RawVTableOptionalMutatorData::new(::__pb::__internal::Private,
       absent_mutator.msg_ref(),
       absent_mutator.optional_vtable())
   }
  }
}

impl<'msg> ::__pb::SettableValue<RequestPagination> for RequestPaginationView<'msg> {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, RequestPagination>)
    where RequestPagination: 'dst {
    unsafe { ::__pb::__runtime::upb_Message_DeepCopy(
      mutator.inner.msg(),
      self.msg,
      ::__std::ptr::addr_of!(openim__sdk__common__RequestPagination_msg_init),
      mutator.inner.arena(::__pb::__internal::Private).raw(),
    ) };
  }
}

impl ::__pb::SettableValue<RequestPagination> for RequestPagination {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, RequestPagination>)
    where RequestPagination: 'dst {
    self.as_view().set_on(::__pb::__internal::Private, mutator);
  }
}

unsafe impl ::__pb::ProxiedInRepeated for RequestPagination {
  fn repeated_len(f: ::__pb::View<::__pb::Repeated<Self>>) -> usize {
    // SAFETY: `f.as_raw()` is a valid `upb_Array*`.
    unsafe { ::__pb::__runtime::upb_Array_Size(f.as_raw(::__pb::__internal::Private)) }
  }
  unsafe fn repeated_set_unchecked(
    mut f: ::__pb::Mut<::__pb::Repeated<Self>>,
    i: usize,
    v: ::__pb::View<Self>,
  ) {
    // SAFETY:
    // - `f.as_raw()` is a valid `upb_Array*`.
    // - `i < len(f)` is promised by the caller.
    let dest_msg = unsafe {
      ::__pb::__runtime::upb_Array_GetMutable(f.as_raw(::__pb::__internal::Private), i).msg
    }.expect("upb_Array* element should not be NULL");

    // SAFETY:
    // - `dest_msg` is a valid `upb_Message*`.
    // - `v.raw_msg()` and `dest_msg` both have message minitable `openim__sdk__common__RequestPagination_msg_init`.
    unsafe {
      ::__pb::__runtime::upb_Message_DeepCopy(
        dest_msg,
        v.raw_msg(),
        ::__std::ptr::addr_of!(openim__sdk__common__RequestPagination_msg_init),
        f.raw_arena(::__pb::__internal::Private),
      )
    };
  }

  unsafe fn repeated_get_unchecked(
    f: ::__pb::View<::__pb::Repeated<Self>>,
    i: usize,
  ) -> ::__pb::View<Self> {
    // SAFETY:
    // - `f.as_raw()` is a valid `const upb_Array*`.
    // - `i < len(f)` is promised by the caller.
    let msg_ptr = unsafe { ::__pb::__runtime::upb_Array_Get(f.as_raw(::__pb::__internal::Private), i).msg_val }
      .expect("upb_Array* element should not be NULL.");
    ::__pb::View::<Self>::new(::__pb::__internal::Private, msg_ptr)
  }

  fn repeated_clear(mut f: ::__pb::Mut<::__pb::Repeated<Self>>) {
    // SAFETY:
    // - `f.as_raw()` is a valid `upb_Array*`.
    unsafe {
      ::__pb::__runtime::upb_Array_Resize(f.as_raw(::__pb::__internal::Private), 0, f.raw_arena(::__pb::__internal::Private))
    };
  }
  fn repeated_push(mut f: ::__pb::Mut<::__pb::Repeated<Self>>, v: ::__pb::View<Self>) {
    // SAFETY:
    // - `v.raw_msg()` is a valid `const upb_Message*` with minitable `openim__sdk__common__RequestPagination_msg_init`.
    let msg_ptr = unsafe {
      ::__pb::__runtime::upb_Message_DeepClone(
        v.raw_msg(),
        std::ptr::addr_of!(openim__sdk__common__RequestPagination_msg_init),
        f.raw_arena(::__pb::__internal::Private),
      )
    }.expect("upb_Message_DeepClone failed.");

    // Append new default message to array.
    // SAFETY:
    // - `f.as_raw()` is a valid `upb_Array*`.
    // - `msg_ptr` is a valid `upb_Message*`.
    unsafe {
      ::__pb::__runtime::upb_Array_Append(
        f.as_raw(::__pb::__internal::Private),
        ::__pb::__runtime::upb_MessageValue{msg_val: Some(msg_ptr)},
        f.raw_arena(::__pb::__internal::Private),
      );
    };
  }

  fn repeated_copy_from(
    src: ::__pb::View<::__pb::Repeated<Self>>,
    dest: ::__pb::Mut<::__pb::Repeated<Self>>,
  ) {
      // SAFETY:
      // - Elements of `src` and `dest` have message minitable `openim__sdk__common__RequestPagination_msg_init`.
      unsafe {
        ::__pb::__runtime::repeated_message_copy_from(src, dest, ::__std::ptr::addr_of!(openim__sdk__common__RequestPagination_msg_init));
      }
  }
}
impl ::__pb::__runtime::UpbTypeConversions for RequestPagination {
    fn upb_type() -> ::__pb::__runtime::CType {
        ::__pb::__runtime::CType::Message
    }

    fn to_message_value(
        val: ::__pb::View<'_, Self>) -> ::__pb::__runtime::upb_MessageValue {
        ::__pb::__runtime::upb_MessageValue { msg_val: Some(val.raw_msg()) }
    }

    unsafe fn to_message_value_copy_if_required(
      arena: ::__pb::__runtime::RawArena,
      val: ::__pb::View<'_, Self>) -> ::__pb::__runtime::upb_MessageValue {
      // Self::to_message_value(val)
      // SAFETY: The arena memory is not freed due to `ManuallyDrop`.
      let cloned_msg = ::__pb::__runtime::upb_Message_DeepClone(
          val.raw_msg(), ::__std::ptr::addr_of!(openim__sdk__common__RequestPagination_msg_init), arena)
          .expect("upb_Message_DeepClone failed.");
      Self::to_message_value(
          RequestPaginationView::new(::__pb::__internal::Private, cloned_msg))
      }

    unsafe fn from_message_value<'msg>(msg: ::__pb::__runtime::upb_MessageValue)
        -> ::__pb::View<'msg, Self> {
        RequestPaginationView::new(
            ::__pb::__internal::Private,
            unsafe { msg.msg_val }
                .expect("expected present message value in map"))
    }
}
impl ::__pb::ProxiedInMapValue<i32> for RequestPagination {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<i32, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
          ::__pb::__runtime::upb_Map_New(
            arena.raw(),
            <i32 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
            <Self as ::__pb::__runtime::UpbTypeConversions>::upb_type())
        };

        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<i32, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<i32, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                <Self as ::__pb::__runtime::UpbTypeConversions>::to_message_value_copy_if_required(arena, value),
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(unsafe { <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(val.assume_init()) })
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>) -> bool {
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__std::ptr::null_mut())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<i32, Self>>) -> ::__pb::MapIter<'_, i32, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, i32, Self>
    ) -> Option<(::__pb::View<'a, i32>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <i32 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(v),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<u32> for RequestPagination {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<u32, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
          ::__pb::__runtime::upb_Map_New(
            arena.raw(),
            <u32 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
            <Self as ::__pb::__runtime::UpbTypeConversions>::upb_type())
        };

        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<u32, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<u32, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                <Self as ::__pb::__runtime::UpbTypeConversions>::to_message_value_copy_if_required(arena, value),
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(unsafe { <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(val.assume_init()) })
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>) -> bool {
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__std::ptr::null_mut())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<u32, Self>>) -> ::__pb::MapIter<'_, u32, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, u32, Self>
    ) -> Option<(::__pb::View<'a, u32>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <u32 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(v),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<i64> for RequestPagination {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<i64, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
          ::__pb::__runtime::upb_Map_New(
            arena.raw(),
            <i64 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
            <Self as ::__pb::__runtime::UpbTypeConversions>::upb_type())
        };

        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<i64, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<i64, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                <Self as ::__pb::__runtime::UpbTypeConversions>::to_message_value_copy_if_required(arena, value),
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(unsafe { <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(val.assume_init()) })
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>) -> bool {
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__std::ptr::null_mut())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<i64, Self>>) -> ::__pb::MapIter<'_, i64, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, i64, Self>
    ) -> Option<(::__pb::View<'a, i64>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <i64 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(v),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<u64> for RequestPagination {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<u64, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
          ::__pb::__runtime::upb_Map_New(
            arena.raw(),
            <u64 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
            <Self as ::__pb::__runtime::UpbTypeConversions>::upb_type())
        };

        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<u64, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<u64, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                <Self as ::__pb::__runtime::UpbTypeConversions>::to_message_value_copy_if_required(arena, value),
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(unsafe { <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(val.assume_init()) })
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>) -> bool {
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__std::ptr::null_mut())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<u64, Self>>) -> ::__pb::MapIter<'_, u64, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, u64, Self>
    ) -> Option<(::__pb::View<'a, u64>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <u64 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(v),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<bool> for RequestPagination {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<bool, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
          ::__pb::__runtime::upb_Map_New(
            arena.raw(),
            <bool as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
            <Self as ::__pb::__runtime::UpbTypeConversions>::upb_type())
        };

        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<bool, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<bool, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                <Self as ::__pb::__runtime::UpbTypeConversions>::to_message_value_copy_if_required(arena, value),
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(unsafe { <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(val.assume_init()) })
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>) -> bool {
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__std::ptr::null_mut())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<bool, Self>>) -> ::__pb::MapIter<'_, bool, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, bool, Self>
    ) -> Option<(::__pb::View<'a, bool>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <bool as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(v),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for RequestPagination {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<::__pb::ProtoStr, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
          ::__pb::__runtime::upb_Map_New(
            arena.raw(),
            <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
            <Self as ::__pb::__runtime::UpbTypeConversions>::upb_type())
        };

        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<::__pb::ProtoStr, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                <Self as ::__pb::__runtime::UpbTypeConversions>::to_message_value_copy_if_required(arena, value),
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(unsafe { <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(val.assume_init()) })
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>) -> bool {
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__std::ptr::null_mut())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) -> ::__pb::MapIter<'_, ::__pb::ProtoStr, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, ::__pb::ProtoStr, Self>
    ) -> Option<(::__pb::View<'a, ::__pb::ProtoStr>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                <Self as ::__pb::__runtime::UpbTypeConversions>::from_message_value(v),
            )})
    }
}

#[allow(dead_code)]
#[allow(non_camel_case_types)]
pub struct RequestPaginationMut<'msg> {
  inner: ::__pb::__runtime::MutatorMessageRef<'msg>,
}

impl std::fmt::Debug for RequestPaginationMut<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> RequestPaginationMut<'msg> {
  #[doc(hidden)]
  pub fn from_parent(
             _private: ::__pb::__internal::Private,
             parent: ::__pb::__runtime::MutatorMessageRef<'msg>,
             msg: ::__pb::__runtime::RawMessage)
    -> Self {
    Self {
      inner: ::__pb::__runtime::MutatorMessageRef::from_parent(
               ::__pb::__internal::Private, parent, msg)
    }
  }

  #[doc(hidden)]
  pub fn new(_private: ::__pb::__internal::Private, msg: &'msg mut ::__pb::__runtime::MessageInner) -> Self {
    Self{ inner: ::__pb::__runtime::MutatorMessageRef::new(_private, msg) }
  }

  #[deprecated = "This .or_default() is a no-op, usages can be safely removed"]
  pub fn or_default(self) -> Self { self }

  fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
    self.inner.msg()
  }

  fn as_mutator_message_ref(&mut self) -> ::__pb::__runtime::MutatorMessageRef<'msg> {
    self.inner
  }

  pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
    ::__pb::ViewProxy::as_view(self).serialize()
  }

  fn arena(&self) -> &::__pb::__runtime::Arena {
    self.inner.arena(::__pb::__internal::Private)
  }

  // pageNumber: optional int32
  pub fn pageNumber(&self) -> i32 {
    unsafe { openim_sdk_common_RequestPagination_pageNumber(self.raw_msg()) }
  }
  pub fn set_pageNumber(&mut self, val: i32) {
    unsafe { openim_sdk_common_RequestPagination_set_pageNumber(self.raw_msg(), val) }
  }

  // showNumber: optional int32
  pub fn showNumber(&self) -> i32 {
    unsafe { openim_sdk_common_RequestPagination_showNumber(self.raw_msg()) }
  }
  pub fn set_showNumber(&mut self, val: i32) {
    unsafe { openim_sdk_common_RequestPagination_set_showNumber(self.raw_msg(), val) }
  }

}

// SAFETY:
// - `RequestPaginationMut` does not perform any shared mutation.
// - `RequestPaginationMut` is not `Send`, and so even in the presence of mutator
//   splitting, synchronous access of an arena is impossible.
unsafe impl Sync for RequestPaginationMut<'_> {}

impl<'msg> ::__pb::MutProxy<'msg> for RequestPaginationMut<'msg> {
  fn as_mut(&mut self) -> ::__pb::Mut<'_, RequestPagination> {
    RequestPaginationMut { inner: self.inner }
  }
  fn into_mut<'shorter>(self) -> ::__pb::Mut<'shorter, RequestPagination> where 'msg : 'shorter { self }
}

impl<'msg> ::__pb::ViewProxy<'msg> for RequestPaginationMut<'msg> {
  type Proxied = RequestPagination;
  fn as_view(&self) -> ::__pb::View<'_, RequestPagination> {
    RequestPaginationView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, RequestPagination> where 'msg: 'shorter {
    RequestPaginationView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
}

#[allow(dead_code)]
impl RequestPagination {
  pub fn new() -> Self {
    let arena = ::__pb::__runtime::Arena::new();
    Self {
      inner: ::__pb::__runtime::MessageInner {
        msg: unsafe { openim_sdk_common_RequestPagination_new(arena.raw()) },
        arena,
      }
    }
  }

  fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
    self.inner.msg
  }

  fn as_mutator_message_ref(&mut self) -> ::__pb::__runtime::MutatorMessageRef {
    ::__pb::__runtime::MutatorMessageRef::new(::__pb::__internal::Private, &mut self.inner)
  }

  fn arena(&self) -> &::__pb::__runtime::Arena {
    &self.inner.arena
  }

  pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
    self.as_view().serialize()
  }
  #[deprecated = "Prefer Msg::parse(), or use the new name 'clear_and_parse' to parse into a pre-existing message."]
  pub fn deserialize(&mut self, data: &[u8]) -> Result<(), ::__pb::ParseError> {
    self.clear_and_parse(data)
  }
  pub fn clear_and_parse(&mut self, data: &[u8]) -> Result<(), ::__pb::ParseError> {
    let mut msg = Self::new();
    // SAFETY: openim__sdk__common__RequestPagination_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__sdk__common__RequestPagination_msg_init) };
    let ext_reg = std::ptr::null();
    let options = 0;

    // SAFETY:
    // - `data.as_ptr()` is valid to read for `data.len()`
    // - `mini_table` is the one used to construct `msg.raw_msg()`
    // - `msg.arena().raw()` is held for the same lifetime as `msg`.
    let status = unsafe {
      ::__pb::__runtime::upb_Decode(
          data.as_ptr(), data.len(), msg.raw_msg(),
          mini_table, ext_reg, options, msg.arena().raw())
    };
    match status {
      ::__pb::__runtime::DecodeStatus::Ok => {
        std::mem::swap(self, &mut msg);
        Ok(())
      }
      _ => Err(::__pb::ParseError)
    }
  }
  pub fn parse(data: &[u8]) -> Result<Self, ::__pb::ParseError> {
    let mut msg = Self::new();
    msg.clear_and_parse(data).map(|_| msg)
  }

  pub fn as_view(&self) -> RequestPaginationView {
    RequestPaginationView::new(::__pb::__internal::Private, self.inner.msg)
  }

  pub fn as_mut(&mut self) -> RequestPaginationMut {
    RequestPaginationMut::new(::__pb::__internal::Private, &mut self.inner)
  }

  // pageNumber: optional int32
  pub fn pageNumber(&self) -> i32 {
    unsafe { openim_sdk_common_RequestPagination_pageNumber(self.raw_msg()) }
  }
  pub fn set_pageNumber(&mut self, val: i32) {
    unsafe { openim_sdk_common_RequestPagination_set_pageNumber(self.raw_msg(), val) }
  }

  // showNumber: optional int32
  pub fn showNumber(&self) -> i32 {
    unsafe { openim_sdk_common_RequestPagination_showNumber(self.raw_msg()) }
  }
  pub fn set_showNumber(&mut self, val: i32) {
    unsafe { openim_sdk_common_RequestPagination_set_showNumber(self.raw_msg(), val) }
  }

}  // impl RequestPagination

impl ::__std::ops::Drop for RequestPagination {
  fn drop(&mut self) {
  }
}

extern "C" {
  fn openim_sdk_common_RequestPagination_new(arena: ::__pb::__runtime::RawArena) -> ::__pb::__runtime::RawMessage;
  /// Opaque wrapper for this message's MiniTable. The only valid way to
  /// reference this static is with `std::ptr::addr_of!(..)`.
  static openim__sdk__common__RequestPagination_msg_init: ::__pb::__runtime::upb_MiniTable;

  fn openim_sdk_common_RequestPagination_pageNumber(raw_msg: ::__pb::__runtime::RawMessage) -> i32;
  fn openim_sdk_common_RequestPagination_set_pageNumber(raw_msg: ::__pb::__runtime::RawMessage, val: i32);

  fn openim_sdk_common_RequestPagination_showNumber(raw_msg: ::__pb::__runtime::RawMessage) -> i32;
  fn openim_sdk_common_RequestPagination_set_showNumber(raw_msg: ::__pb::__runtime::RawMessage, val: i32);


}  // extern "C" for RequestPagination


#[repr(transparent)]
#[derive(Clone, Copy, PartialEq, Eq)]
pub struct SessionType(i32);

#[allow(non_upper_case_globals)]
impl SessionType {
  pub const Sessiontype: SessionType = SessionType(0);
  pub const Singlechattype: SessionType = SessionType(1);
  pub const Writegroupchattype: SessionType = SessionType(2);
  pub const Readgroupchattype: SessionType = SessionType(3);
  pub const Notificationchattype: SessionType = SessionType(4);
}

impl ::__std::convert::From<SessionType> for i32 {
  fn from(val: SessionType) -> i32 {
    val.0
  }
}

impl ::__std::convert::From<i32> for SessionType {
  fn from(val: i32) -> SessionType {
    Self(val)
  }
}

impl ::__std::default::Default for SessionType {
  fn default() -> Self {
    Self(0)
  }
}

impl ::__std::fmt::Debug for SessionType {
  fn fmt(&self, f: &mut ::__std::fmt::Formatter<'_>) -> ::__std::fmt::Result {
    f.debug_tuple(stringify!(SessionType)).field(&self.0).finish()
  }
}

impl ::__pb::Proxied for SessionType {
  type View<'a> = SessionType;
  type Mut<'a> = ::__pb::PrimitiveMut<'a, SessionType>;
}

impl ::__pb::ViewProxy<'_> for SessionType {
  type Proxied = SessionType;

  fn as_view(&self) -> SessionType {
    *self
  }

  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, SessionType> {
    self
  }
}

impl ::__pb::SettableValue<SessionType> for SessionType {
  fn set_on<'msg>(
      self,
      private: ::__pb::__internal::Private,
      mut mutator: ::__pb::Mut<'msg, SessionType>
  ) where SessionType: 'msg {
    mutator.set_primitive(private, self)
  }
}

impl ::__pb::ProxiedWithPresence for SessionType {
  type PresentMutData<'a> = ::__pb::__internal::RawVTableOptionalMutatorData<'a, SessionType>;
  type AbsentMutData<'a> = ::__pb::__internal::RawVTableOptionalMutatorData<'a, SessionType>;

  fn clear_present_field(
    present_mutator: Self::PresentMutData<'_>,
  ) -> Self::AbsentMutData<'_> {
    present_mutator.clear(::__pb::__internal::Private)
  }

  fn set_absent_to_default(
    absent_mutator: Self::AbsentMutData<'_>,
  ) -> Self::PresentMutData<'_> {
    absent_mutator.set_absent_to_default(::__pb::__internal::Private)
  }
}

unsafe impl ::__pb::ProxiedInRepeated for SessionType {
  fn repeated_len(r: ::__pb::View<::__pb::Repeated<Self>>) -> usize {
    ::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, r).len()
  }

  fn repeated_push(r: ::__pb::Mut<::__pb::Repeated<Self>>, val: SessionType) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r).push(val.into())
  }

  fn repeated_clear(r: ::__pb::Mut<::__pb::Repeated<Self>>) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r).clear()
  }

  unsafe fn repeated_get_unchecked(
      r: ::__pb::View<::__pb::Repeated<Self>>,
      index: usize,
  ) -> ::__pb::View<SessionType> {
    // SAFETY: In-bounds as promised by the caller.
    unsafe {
      ::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, r)
        .get_unchecked(index)
        .try_into()
        .unwrap_unchecked()
    }
  }

  unsafe fn repeated_set_unchecked(
      r: ::__pb::Mut<::__pb::Repeated<Self>>,
      index: usize,
      val: SessionType,
  ) {
    // SAFETY: In-bounds as promised by the caller.
    unsafe {
      ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r)
        .set_unchecked(index, val.into())
    }
  }

  fn repeated_copy_from(
      src: ::__pb::View<::__pb::Repeated<Self>>,
      dest: ::__pb::Mut<::__pb::Repeated<Self>>,
  ) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, dest)
      .copy_from(::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, src))
  }
}

impl ::__pb::__internal::PrimitiveWithRawVTable for SessionType {}

// SAFETY: this is an enum type
unsafe impl ::__pb::__internal::Enum for SessionType {
  const NAME: &'static str = "SessionType";
}

impl ::__pb::ProxiedInMapValue<i32> for SessionType {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<i32, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<i32, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<i32, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(SessionType(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<i32, Self>>) -> ::__pb::MapIter<'_, i32, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, i32, Self>
    ) -> Option<(::__pb::View<'a, i32>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <i32 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<u32> for SessionType {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<u32, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<u32, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<u32, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(SessionType(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<u32, Self>>) -> ::__pb::MapIter<'_, u32, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, u32, Self>
    ) -> Option<(::__pb::View<'a, u32>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <u32 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<i64> for SessionType {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<i64, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<i64, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<i64, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(SessionType(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<i64, Self>>) -> ::__pb::MapIter<'_, i64, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, i64, Self>
    ) -> Option<(::__pb::View<'a, i64>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <i64 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<u64> for SessionType {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<u64, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<u64, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<u64, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(SessionType(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<u64, Self>>) -> ::__pb::MapIter<'_, u64, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, u64, Self>
    ) -> Option<(::__pb::View<'a, u64>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <u64 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<bool> for SessionType {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<bool, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <bool as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<bool, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<bool, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(SessionType(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<bool, Self>>) -> ::__pb::MapIter<'_, bool, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, bool, Self>
    ) -> Option<(::__pb::View<'a, bool>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <bool as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for SessionType {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<::__pb::ProtoStr, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<::__pb::ProtoStr, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(SessionType(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) -> ::__pb::MapIter<'_, ::__pb::ProtoStr, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, ::__pb::ProtoStr, Self>
    ) -> Option<(::__pb::View<'a, ::__pb::ProtoStr>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}

#[repr(transparent)]
#[derive(Clone, Copy, PartialEq, Eq)]
pub struct MsgFrom(i32);

#[allow(non_upper_case_globals)]
impl MsgFrom {
  pub const Msgfrom: MsgFrom = MsgFrom(0);
  pub const Usermsgtype: MsgFrom = MsgFrom(100);
  pub const Sysmsgtype: MsgFrom = MsgFrom(200);
}

impl ::__std::convert::From<MsgFrom> for i32 {
  fn from(val: MsgFrom) -> i32 {
    val.0
  }
}

impl ::__std::convert::From<i32> for MsgFrom {
  fn from(val: i32) -> MsgFrom {
    Self(val)
  }
}

impl ::__std::default::Default for MsgFrom {
  fn default() -> Self {
    Self(0)
  }
}

impl ::__std::fmt::Debug for MsgFrom {
  fn fmt(&self, f: &mut ::__std::fmt::Formatter<'_>) -> ::__std::fmt::Result {
    f.debug_tuple(stringify!(MsgFrom)).field(&self.0).finish()
  }
}

impl ::__pb::Proxied for MsgFrom {
  type View<'a> = MsgFrom;
  type Mut<'a> = ::__pb::PrimitiveMut<'a, MsgFrom>;
}

impl ::__pb::ViewProxy<'_> for MsgFrom {
  type Proxied = MsgFrom;

  fn as_view(&self) -> MsgFrom {
    *self
  }

  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, MsgFrom> {
    self
  }
}

impl ::__pb::SettableValue<MsgFrom> for MsgFrom {
  fn set_on<'msg>(
      self,
      private: ::__pb::__internal::Private,
      mut mutator: ::__pb::Mut<'msg, MsgFrom>
  ) where MsgFrom: 'msg {
    mutator.set_primitive(private, self)
  }
}

impl ::__pb::ProxiedWithPresence for MsgFrom {
  type PresentMutData<'a> = ::__pb::__internal::RawVTableOptionalMutatorData<'a, MsgFrom>;
  type AbsentMutData<'a> = ::__pb::__internal::RawVTableOptionalMutatorData<'a, MsgFrom>;

  fn clear_present_field(
    present_mutator: Self::PresentMutData<'_>,
  ) -> Self::AbsentMutData<'_> {
    present_mutator.clear(::__pb::__internal::Private)
  }

  fn set_absent_to_default(
    absent_mutator: Self::AbsentMutData<'_>,
  ) -> Self::PresentMutData<'_> {
    absent_mutator.set_absent_to_default(::__pb::__internal::Private)
  }
}

unsafe impl ::__pb::ProxiedInRepeated for MsgFrom {
  fn repeated_len(r: ::__pb::View<::__pb::Repeated<Self>>) -> usize {
    ::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, r).len()
  }

  fn repeated_push(r: ::__pb::Mut<::__pb::Repeated<Self>>, val: MsgFrom) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r).push(val.into())
  }

  fn repeated_clear(r: ::__pb::Mut<::__pb::Repeated<Self>>) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r).clear()
  }

  unsafe fn repeated_get_unchecked(
      r: ::__pb::View<::__pb::Repeated<Self>>,
      index: usize,
  ) -> ::__pb::View<MsgFrom> {
    // SAFETY: In-bounds as promised by the caller.
    unsafe {
      ::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, r)
        .get_unchecked(index)
        .try_into()
        .unwrap_unchecked()
    }
  }

  unsafe fn repeated_set_unchecked(
      r: ::__pb::Mut<::__pb::Repeated<Self>>,
      index: usize,
      val: MsgFrom,
  ) {
    // SAFETY: In-bounds as promised by the caller.
    unsafe {
      ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r)
        .set_unchecked(index, val.into())
    }
  }

  fn repeated_copy_from(
      src: ::__pb::View<::__pb::Repeated<Self>>,
      dest: ::__pb::Mut<::__pb::Repeated<Self>>,
  ) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, dest)
      .copy_from(::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, src))
  }
}

impl ::__pb::__internal::PrimitiveWithRawVTable for MsgFrom {}

// SAFETY: this is an enum type
unsafe impl ::__pb::__internal::Enum for MsgFrom {
  const NAME: &'static str = "MsgFrom";
}

impl ::__pb::ProxiedInMapValue<i32> for MsgFrom {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<i32, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<i32, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<i32, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(MsgFrom(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<i32, Self>>) -> ::__pb::MapIter<'_, i32, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, i32, Self>
    ) -> Option<(::__pb::View<'a, i32>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <i32 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<u32> for MsgFrom {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<u32, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<u32, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<u32, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(MsgFrom(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<u32, Self>>) -> ::__pb::MapIter<'_, u32, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, u32, Self>
    ) -> Option<(::__pb::View<'a, u32>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <u32 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<i64> for MsgFrom {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<i64, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<i64, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<i64, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(MsgFrom(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<i64, Self>>) -> ::__pb::MapIter<'_, i64, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, i64, Self>
    ) -> Option<(::__pb::View<'a, i64>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <i64 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<u64> for MsgFrom {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<u64, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<u64, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<u64, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(MsgFrom(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<u64, Self>>) -> ::__pb::MapIter<'_, u64, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, u64, Self>
    ) -> Option<(::__pb::View<'a, u64>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <u64 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<bool> for MsgFrom {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<bool, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <bool as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<bool, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<bool, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(MsgFrom(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<bool, Self>>) -> ::__pb::MapIter<'_, bool, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, bool, Self>
    ) -> Option<(::__pb::View<'a, bool>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <bool as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for MsgFrom {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<::__pb::ProtoStr, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<::__pb::ProtoStr, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(MsgFrom(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) -> ::__pb::MapIter<'_, ::__pb::ProtoStr, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, ::__pb::ProtoStr, Self>
    ) -> Option<(::__pb::View<'a, ::__pb::ProtoStr>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}

#[repr(transparent)]
#[derive(Clone, Copy, PartialEq, Eq)]
pub struct Platform(i32);

#[allow(non_upper_case_globals)]
impl Platform {
  pub const Platform: Platform = Platform(0);
  pub const Ios: Platform = Platform(1);
  pub const Android: Platform = Platform(2);
  pub const Windows: Platform = Platform(3);
  pub const Macos: Platform = Platform(4);
  pub const Web: Platform = Platform(5);
  pub const Miniweb: Platform = Platform(6);
  pub const Linux: Platform = Platform(7);
  pub const Androidpad: Platform = Platform(8);
  pub const Ipad: Platform = Platform(9);
  pub const Admin: Platform = Platform(10);
  pub const Harmonyos: Platform = Platform(11);
}

impl ::__std::convert::From<Platform> for i32 {
  fn from(val: Platform) -> i32 {
    val.0
  }
}

impl ::__std::convert::From<i32> for Platform {
  fn from(val: i32) -> Platform {
    Self(val)
  }
}

impl ::__std::default::Default for Platform {
  fn default() -> Self {
    Self(0)
  }
}

impl ::__std::fmt::Debug for Platform {
  fn fmt(&self, f: &mut ::__std::fmt::Formatter<'_>) -> ::__std::fmt::Result {
    f.debug_tuple(stringify!(Platform)).field(&self.0).finish()
  }
}

impl ::__pb::Proxied for Platform {
  type View<'a> = Platform;
  type Mut<'a> = ::__pb::PrimitiveMut<'a, Platform>;
}

impl ::__pb::ViewProxy<'_> for Platform {
  type Proxied = Platform;

  fn as_view(&self) -> Platform {
    *self
  }

  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, Platform> {
    self
  }
}

impl ::__pb::SettableValue<Platform> for Platform {
  fn set_on<'msg>(
      self,
      private: ::__pb::__internal::Private,
      mut mutator: ::__pb::Mut<'msg, Platform>
  ) where Platform: 'msg {
    mutator.set_primitive(private, self)
  }
}

impl ::__pb::ProxiedWithPresence for Platform {
  type PresentMutData<'a> = ::__pb::__internal::RawVTableOptionalMutatorData<'a, Platform>;
  type AbsentMutData<'a> = ::__pb::__internal::RawVTableOptionalMutatorData<'a, Platform>;

  fn clear_present_field(
    present_mutator: Self::PresentMutData<'_>,
  ) -> Self::AbsentMutData<'_> {
    present_mutator.clear(::__pb::__internal::Private)
  }

  fn set_absent_to_default(
    absent_mutator: Self::AbsentMutData<'_>,
  ) -> Self::PresentMutData<'_> {
    absent_mutator.set_absent_to_default(::__pb::__internal::Private)
  }
}

unsafe impl ::__pb::ProxiedInRepeated for Platform {
  fn repeated_len(r: ::__pb::View<::__pb::Repeated<Self>>) -> usize {
    ::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, r).len()
  }

  fn repeated_push(r: ::__pb::Mut<::__pb::Repeated<Self>>, val: Platform) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r).push(val.into())
  }

  fn repeated_clear(r: ::__pb::Mut<::__pb::Repeated<Self>>) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r).clear()
  }

  unsafe fn repeated_get_unchecked(
      r: ::__pb::View<::__pb::Repeated<Self>>,
      index: usize,
  ) -> ::__pb::View<Platform> {
    // SAFETY: In-bounds as promised by the caller.
    unsafe {
      ::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, r)
        .get_unchecked(index)
        .try_into()
        .unwrap_unchecked()
    }
  }

  unsafe fn repeated_set_unchecked(
      r: ::__pb::Mut<::__pb::Repeated<Self>>,
      index: usize,
      val: Platform,
  ) {
    // SAFETY: In-bounds as promised by the caller.
    unsafe {
      ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r)
        .set_unchecked(index, val.into())
    }
  }

  fn repeated_copy_from(
      src: ::__pb::View<::__pb::Repeated<Self>>,
      dest: ::__pb::Mut<::__pb::Repeated<Self>>,
  ) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, dest)
      .copy_from(::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, src))
  }
}

impl ::__pb::__internal::PrimitiveWithRawVTable for Platform {}

// SAFETY: this is an enum type
unsafe impl ::__pb::__internal::Enum for Platform {
  const NAME: &'static str = "Platform";
}

impl ::__pb::ProxiedInMapValue<i32> for Platform {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<i32, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<i32, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<i32, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(Platform(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<i32, Self>>) -> ::__pb::MapIter<'_, i32, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, i32, Self>
    ) -> Option<(::__pb::View<'a, i32>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <i32 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<u32> for Platform {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<u32, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<u32, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<u32, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(Platform(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<u32, Self>>) -> ::__pb::MapIter<'_, u32, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, u32, Self>
    ) -> Option<(::__pb::View<'a, u32>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <u32 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<i64> for Platform {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<i64, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<i64, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<i64, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(Platform(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<i64, Self>>) -> ::__pb::MapIter<'_, i64, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, i64, Self>
    ) -> Option<(::__pb::View<'a, i64>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <i64 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<u64> for Platform {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<u64, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<u64, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<u64, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(Platform(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<u64, Self>>) -> ::__pb::MapIter<'_, u64, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, u64, Self>
    ) -> Option<(::__pb::View<'a, u64>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <u64 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<bool> for Platform {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<bool, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <bool as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<bool, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<bool, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(Platform(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<bool, Self>>) -> ::__pb::MapIter<'_, bool, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, bool, Self>
    ) -> Option<(::__pb::View<'a, bool>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <bool as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for Platform {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<::__pb::ProtoStr, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<::__pb::ProtoStr, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(Platform(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) -> ::__pb::MapIter<'_, ::__pb::ProtoStr, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, ::__pb::ProtoStr, Self>
    ) -> Option<(::__pb::View<'a, ::__pb::ProtoStr>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}

#[repr(transparent)]
#[derive(Clone, Copy, PartialEq, Eq)]
pub struct AppFramework(i32);

#[allow(non_upper_case_globals)]
impl AppFramework {
  pub const Appframework: AppFramework = AppFramework(0);
  pub const Native: AppFramework = AppFramework(1);
  pub const Flutter: AppFramework = AppFramework(2);
  pub const Reactnative: AppFramework = AppFramework(3);
  pub const Electron: AppFramework = AppFramework(4);
  pub const Unity: AppFramework = AppFramework(5);
  pub const Unrealengine: AppFramework = AppFramework(6);
  pub const Qt: AppFramework = AppFramework(7);
  pub const Dotnet: AppFramework = AppFramework(8);
  pub const Dotnetmaui: AppFramework = AppFramework(9);
  pub const Avalonia: AppFramework = AppFramework(10);
  pub const Cordova: AppFramework = AppFramework(11);
  pub const Uniapp: AppFramework = AppFramework(12);
}

impl ::__std::convert::From<AppFramework> for i32 {
  fn from(val: AppFramework) -> i32 {
    val.0
  }
}

impl ::__std::convert::From<i32> for AppFramework {
  fn from(val: i32) -> AppFramework {
    Self(val)
  }
}

impl ::__std::default::Default for AppFramework {
  fn default() -> Self {
    Self(0)
  }
}

impl ::__std::fmt::Debug for AppFramework {
  fn fmt(&self, f: &mut ::__std::fmt::Formatter<'_>) -> ::__std::fmt::Result {
    f.debug_tuple(stringify!(AppFramework)).field(&self.0).finish()
  }
}

impl ::__pb::Proxied for AppFramework {
  type View<'a> = AppFramework;
  type Mut<'a> = ::__pb::PrimitiveMut<'a, AppFramework>;
}

impl ::__pb::ViewProxy<'_> for AppFramework {
  type Proxied = AppFramework;

  fn as_view(&self) -> AppFramework {
    *self
  }

  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, AppFramework> {
    self
  }
}

impl ::__pb::SettableValue<AppFramework> for AppFramework {
  fn set_on<'msg>(
      self,
      private: ::__pb::__internal::Private,
      mut mutator: ::__pb::Mut<'msg, AppFramework>
  ) where AppFramework: 'msg {
    mutator.set_primitive(private, self)
  }
}

impl ::__pb::ProxiedWithPresence for AppFramework {
  type PresentMutData<'a> = ::__pb::__internal::RawVTableOptionalMutatorData<'a, AppFramework>;
  type AbsentMutData<'a> = ::__pb::__internal::RawVTableOptionalMutatorData<'a, AppFramework>;

  fn clear_present_field(
    present_mutator: Self::PresentMutData<'_>,
  ) -> Self::AbsentMutData<'_> {
    present_mutator.clear(::__pb::__internal::Private)
  }

  fn set_absent_to_default(
    absent_mutator: Self::AbsentMutData<'_>,
  ) -> Self::PresentMutData<'_> {
    absent_mutator.set_absent_to_default(::__pb::__internal::Private)
  }
}

unsafe impl ::__pb::ProxiedInRepeated for AppFramework {
  fn repeated_len(r: ::__pb::View<::__pb::Repeated<Self>>) -> usize {
    ::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, r).len()
  }

  fn repeated_push(r: ::__pb::Mut<::__pb::Repeated<Self>>, val: AppFramework) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r).push(val.into())
  }

  fn repeated_clear(r: ::__pb::Mut<::__pb::Repeated<Self>>) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r).clear()
  }

  unsafe fn repeated_get_unchecked(
      r: ::__pb::View<::__pb::Repeated<Self>>,
      index: usize,
  ) -> ::__pb::View<AppFramework> {
    // SAFETY: In-bounds as promised by the caller.
    unsafe {
      ::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, r)
        .get_unchecked(index)
        .try_into()
        .unwrap_unchecked()
    }
  }

  unsafe fn repeated_set_unchecked(
      r: ::__pb::Mut<::__pb::Repeated<Self>>,
      index: usize,
      val: AppFramework,
  ) {
    // SAFETY: In-bounds as promised by the caller.
    unsafe {
      ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r)
        .set_unchecked(index, val.into())
    }
  }

  fn repeated_copy_from(
      src: ::__pb::View<::__pb::Repeated<Self>>,
      dest: ::__pb::Mut<::__pb::Repeated<Self>>,
  ) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, dest)
      .copy_from(::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, src))
  }
}

impl ::__pb::__internal::PrimitiveWithRawVTable for AppFramework {}

// SAFETY: this is an enum type
unsafe impl ::__pb::__internal::Enum for AppFramework {
  const NAME: &'static str = "AppFramework";
}

impl ::__pb::ProxiedInMapValue<i32> for AppFramework {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<i32, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<i32, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<i32, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(AppFramework(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<i32, Self>>) -> ::__pb::MapIter<'_, i32, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, i32, Self>
    ) -> Option<(::__pb::View<'a, i32>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <i32 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<u32> for AppFramework {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<u32, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<u32, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<u32, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(AppFramework(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<u32, Self>>) -> ::__pb::MapIter<'_, u32, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, u32, Self>
    ) -> Option<(::__pb::View<'a, u32>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <u32 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<i64> for AppFramework {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<i64, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<i64, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<i64, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(AppFramework(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<i64, Self>>) -> ::__pb::MapIter<'_, i64, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, i64, Self>
    ) -> Option<(::__pb::View<'a, i64>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <i64 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<u64> for AppFramework {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<u64, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<u64, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<u64, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(AppFramework(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<u64, Self>>) -> ::__pb::MapIter<'_, u64, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, u64, Self>
    ) -> Option<(::__pb::View<'a, u64>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <u64 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<bool> for AppFramework {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<bool, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <bool as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<bool, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<bool, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(AppFramework(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<bool, Self>>) -> ::__pb::MapIter<'_, bool, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, bool, Self>
    ) -> Option<(::__pb::View<'a, bool>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <bool as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for AppFramework {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<::__pb::ProtoStr, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<::__pb::ProtoStr, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(AppFramework(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) -> ::__pb::MapIter<'_, ::__pb::ProtoStr, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, ::__pb::ProtoStr, Self>
    ) -> Option<(::__pb::View<'a, ::__pb::ProtoStr>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}

#[repr(transparent)]
#[derive(Clone, Copy, PartialEq, Eq)]
pub struct MsgStatus(i32);

#[allow(non_upper_case_globals)]
impl MsgStatus {
  pub const Msgstatus: MsgStatus = MsgStatus(0);
  pub const Sending: MsgStatus = MsgStatus(1);
  pub const Sendsuccess: MsgStatus = MsgStatus(2);
  pub const Sendfailed: MsgStatus = MsgStatus(3);
  pub const Hasdeleted: MsgStatus = MsgStatus(4);
  pub const Filtered: MsgStatus = MsgStatus(5);
}

impl ::__std::convert::From<MsgStatus> for i32 {
  fn from(val: MsgStatus) -> i32 {
    val.0
  }
}

impl ::__std::convert::From<i32> for MsgStatus {
  fn from(val: i32) -> MsgStatus {
    Self(val)
  }
}

impl ::__std::default::Default for MsgStatus {
  fn default() -> Self {
    Self(0)
  }
}

impl ::__std::fmt::Debug for MsgStatus {
  fn fmt(&self, f: &mut ::__std::fmt::Formatter<'_>) -> ::__std::fmt::Result {
    f.debug_tuple(stringify!(MsgStatus)).field(&self.0).finish()
  }
}

impl ::__pb::Proxied for MsgStatus {
  type View<'a> = MsgStatus;
  type Mut<'a> = ::__pb::PrimitiveMut<'a, MsgStatus>;
}

impl ::__pb::ViewProxy<'_> for MsgStatus {
  type Proxied = MsgStatus;

  fn as_view(&self) -> MsgStatus {
    *self
  }

  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, MsgStatus> {
    self
  }
}

impl ::__pb::SettableValue<MsgStatus> for MsgStatus {
  fn set_on<'msg>(
      self,
      private: ::__pb::__internal::Private,
      mut mutator: ::__pb::Mut<'msg, MsgStatus>
  ) where MsgStatus: 'msg {
    mutator.set_primitive(private, self)
  }
}

impl ::__pb::ProxiedWithPresence for MsgStatus {
  type PresentMutData<'a> = ::__pb::__internal::RawVTableOptionalMutatorData<'a, MsgStatus>;
  type AbsentMutData<'a> = ::__pb::__internal::RawVTableOptionalMutatorData<'a, MsgStatus>;

  fn clear_present_field(
    present_mutator: Self::PresentMutData<'_>,
  ) -> Self::AbsentMutData<'_> {
    present_mutator.clear(::__pb::__internal::Private)
  }

  fn set_absent_to_default(
    absent_mutator: Self::AbsentMutData<'_>,
  ) -> Self::PresentMutData<'_> {
    absent_mutator.set_absent_to_default(::__pb::__internal::Private)
  }
}

unsafe impl ::__pb::ProxiedInRepeated for MsgStatus {
  fn repeated_len(r: ::__pb::View<::__pb::Repeated<Self>>) -> usize {
    ::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, r).len()
  }

  fn repeated_push(r: ::__pb::Mut<::__pb::Repeated<Self>>, val: MsgStatus) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r).push(val.into())
  }

  fn repeated_clear(r: ::__pb::Mut<::__pb::Repeated<Self>>) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r).clear()
  }

  unsafe fn repeated_get_unchecked(
      r: ::__pb::View<::__pb::Repeated<Self>>,
      index: usize,
  ) -> ::__pb::View<MsgStatus> {
    // SAFETY: In-bounds as promised by the caller.
    unsafe {
      ::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, r)
        .get_unchecked(index)
        .try_into()
        .unwrap_unchecked()
    }
  }

  unsafe fn repeated_set_unchecked(
      r: ::__pb::Mut<::__pb::Repeated<Self>>,
      index: usize,
      val: MsgStatus,
  ) {
    // SAFETY: In-bounds as promised by the caller.
    unsafe {
      ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r)
        .set_unchecked(index, val.into())
    }
  }

  fn repeated_copy_from(
      src: ::__pb::View<::__pb::Repeated<Self>>,
      dest: ::__pb::Mut<::__pb::Repeated<Self>>,
  ) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, dest)
      .copy_from(::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, src))
  }
}

impl ::__pb::__internal::PrimitiveWithRawVTable for MsgStatus {}

// SAFETY: this is an enum type
unsafe impl ::__pb::__internal::Enum for MsgStatus {
  const NAME: &'static str = "MsgStatus";
}

impl ::__pb::ProxiedInMapValue<i32> for MsgStatus {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<i32, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<i32, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<i32, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(MsgStatus(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<i32, Self>>) -> ::__pb::MapIter<'_, i32, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, i32, Self>
    ) -> Option<(::__pb::View<'a, i32>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <i32 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<u32> for MsgStatus {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<u32, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<u32, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<u32, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(MsgStatus(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<u32, Self>>) -> ::__pb::MapIter<'_, u32, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, u32, Self>
    ) -> Option<(::__pb::View<'a, u32>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <u32 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<i64> for MsgStatus {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<i64, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<i64, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<i64, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(MsgStatus(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<i64, Self>>) -> ::__pb::MapIter<'_, i64, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, i64, Self>
    ) -> Option<(::__pb::View<'a, i64>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <i64 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<u64> for MsgStatus {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<u64, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<u64, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<u64, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(MsgStatus(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<u64, Self>>) -> ::__pb::MapIter<'_, u64, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, u64, Self>
    ) -> Option<(::__pb::View<'a, u64>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <u64 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<bool> for MsgStatus {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<bool, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <bool as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<bool, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<bool, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(MsgStatus(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<bool, Self>>) -> ::__pb::MapIter<'_, bool, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, bool, Self>
    ) -> Option<(::__pb::View<'a, bool>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <bool as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for MsgStatus {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<::__pb::ProtoStr, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<::__pb::ProtoStr, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(MsgStatus(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) -> ::__pb::MapIter<'_, ::__pb::ProtoStr, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, ::__pb::ProtoStr, Self>
    ) -> Option<(::__pb::View<'a, ::__pb::ProtoStr>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}

#[repr(transparent)]
#[derive(Clone, Copy, PartialEq, Eq)]
pub struct ContentType(i32);

#[allow(non_upper_case_globals)]
impl ContentType {
  pub const Contenttype: ContentType = ContentType(0);
  pub const Text: ContentType = ContentType(101);
  pub const Picture: ContentType = ContentType(102);
  pub const Sound: ContentType = ContentType(103);
  pub const Video: ContentType = ContentType(104);
  pub const File: ContentType = ContentType(105);
  pub const Attext: ContentType = ContentType(106);
  pub const Merge: ContentType = ContentType(107);
  pub const Card: ContentType = ContentType(108);
  pub const Location: ContentType = ContentType(109);
  pub const Custom: ContentType = ContentType(110);
  pub const Typing: ContentType = ContentType(113);
  pub const Quote: ContentType = ContentType(114);
  pub const Face: ContentType = ContentType(115);
  pub const Stream: ContentType = ContentType(116);
  pub const Advancedtext: ContentType = ContentType(117);
  pub const Custommsgnottriggerconversation: ContentType = ContentType(119);
  pub const Custommsgonlineonly: ContentType = ContentType(120);
  pub const Friendapplicationapprovednotification: ContentType = ContentType(1201);
  pub const Friendapplicationrejectednotification: ContentType = ContentType(1202);
  pub const Friendapplicationnotification: ContentType = ContentType(1203);
  pub const Friendaddednotification: ContentType = ContentType(1204);
  pub const Frienddeletednotification: ContentType = ContentType(1205);
  pub const Friendremarksetnotification: ContentType = ContentType(1206);
  pub const Blackaddednotification: ContentType = ContentType(1207);
  pub const Blackdeletednotification: ContentType = ContentType(1208);
  pub const Friendinfoupdatednotification: ContentType = ContentType(1209);
  pub const Friendsinfoupdatenotification: ContentType = ContentType(1210);
  pub const Conversationchangenotification: ContentType = ContentType(1300);
  pub const Userinfoupdatednotification: ContentType = ContentType(1303);
  pub const Userstatuschangenotification: ContentType = ContentType(1304);
  pub const Usercommandaddnotification: ContentType = ContentType(1305);
  pub const Usercommanddeletenotification: ContentType = ContentType(1306);
  pub const Usercommandupdatenotification: ContentType = ContentType(1307);
  pub const Groupcreatednotification: ContentType = ContentType(1501);
  pub const Groupinfosetnotification: ContentType = ContentType(1502);
  pub const Joingroupapplicationnotification: ContentType = ContentType(1503);
  pub const Memberquitnotification: ContentType = ContentType(1504);
  pub const Groupapplicationacceptednotification: ContentType = ContentType(1505);
  pub const Groupapplicationrejectednotification: ContentType = ContentType(1506);
  pub const Groupownertransferrednotification: ContentType = ContentType(1507);
  pub const Memberkickednotification: ContentType = ContentType(1508);
  pub const Memberinvitednotification: ContentType = ContentType(1509);
  pub const Memberenternotification: ContentType = ContentType(1510);
  pub const Groupdismissednotification: ContentType = ContentType(1511);
  pub const Groupmembermutednotification: ContentType = ContentType(1512);
  pub const Groupmembercancelmutednotification: ContentType = ContentType(1513);
  pub const Groupmutednotification: ContentType = ContentType(1514);
  pub const Groupcancelmutednotification: ContentType = ContentType(1515);
  pub const Groupmemberinfosetnotification: ContentType = ContentType(1516);
  pub const Groupmembersettoadminnotification: ContentType = ContentType(1517);
  pub const Groupmembersettoordinaryusernotification: ContentType = ContentType(1518);
  pub const Groupinfosetannouncementnotification: ContentType = ContentType(1519);
  pub const Groupinfosetnamenotification: ContentType = ContentType(1520);
  pub const Conversationprivatechatnotification: ContentType = ContentType(1701);
  pub const Clearconversationnotification: ContentType = ContentType(1703);
  pub const Businessnotification: ContentType = ContentType(2001);
  pub const Revokenotification: ContentType = ContentType(2101);
  pub const Deletemsgsnotification: ContentType = ContentType(2102);
  pub const Hasreadreceipt: ContentType = ContentType(2200);
}

impl ::__std::convert::From<ContentType> for i32 {
  fn from(val: ContentType) -> i32 {
    val.0
  }
}

impl ::__std::convert::From<i32> for ContentType {
  fn from(val: i32) -> ContentType {
    Self(val)
  }
}

impl ::__std::default::Default for ContentType {
  fn default() -> Self {
    Self(0)
  }
}

impl ::__std::fmt::Debug for ContentType {
  fn fmt(&self, f: &mut ::__std::fmt::Formatter<'_>) -> ::__std::fmt::Result {
    f.debug_tuple(stringify!(ContentType)).field(&self.0).finish()
  }
}

impl ::__pb::Proxied for ContentType {
  type View<'a> = ContentType;
  type Mut<'a> = ::__pb::PrimitiveMut<'a, ContentType>;
}

impl ::__pb::ViewProxy<'_> for ContentType {
  type Proxied = ContentType;

  fn as_view(&self) -> ContentType {
    *self
  }

  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, ContentType> {
    self
  }
}

impl ::__pb::SettableValue<ContentType> for ContentType {
  fn set_on<'msg>(
      self,
      private: ::__pb::__internal::Private,
      mut mutator: ::__pb::Mut<'msg, ContentType>
  ) where ContentType: 'msg {
    mutator.set_primitive(private, self)
  }
}

impl ::__pb::ProxiedWithPresence for ContentType {
  type PresentMutData<'a> = ::__pb::__internal::RawVTableOptionalMutatorData<'a, ContentType>;
  type AbsentMutData<'a> = ::__pb::__internal::RawVTableOptionalMutatorData<'a, ContentType>;

  fn clear_present_field(
    present_mutator: Self::PresentMutData<'_>,
  ) -> Self::AbsentMutData<'_> {
    present_mutator.clear(::__pb::__internal::Private)
  }

  fn set_absent_to_default(
    absent_mutator: Self::AbsentMutData<'_>,
  ) -> Self::PresentMutData<'_> {
    absent_mutator.set_absent_to_default(::__pb::__internal::Private)
  }
}

unsafe impl ::__pb::ProxiedInRepeated for ContentType {
  fn repeated_len(r: ::__pb::View<::__pb::Repeated<Self>>) -> usize {
    ::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, r).len()
  }

  fn repeated_push(r: ::__pb::Mut<::__pb::Repeated<Self>>, val: ContentType) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r).push(val.into())
  }

  fn repeated_clear(r: ::__pb::Mut<::__pb::Repeated<Self>>) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r).clear()
  }

  unsafe fn repeated_get_unchecked(
      r: ::__pb::View<::__pb::Repeated<Self>>,
      index: usize,
  ) -> ::__pb::View<ContentType> {
    // SAFETY: In-bounds as promised by the caller.
    unsafe {
      ::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, r)
        .get_unchecked(index)
        .try_into()
        .unwrap_unchecked()
    }
  }

  unsafe fn repeated_set_unchecked(
      r: ::__pb::Mut<::__pb::Repeated<Self>>,
      index: usize,
      val: ContentType,
  ) {
    // SAFETY: In-bounds as promised by the caller.
    unsafe {
      ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r)
        .set_unchecked(index, val.into())
    }
  }

  fn repeated_copy_from(
      src: ::__pb::View<::__pb::Repeated<Self>>,
      dest: ::__pb::Mut<::__pb::Repeated<Self>>,
  ) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, dest)
      .copy_from(::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, src))
  }
}

impl ::__pb::__internal::PrimitiveWithRawVTable for ContentType {}

// SAFETY: this is an enum type
unsafe impl ::__pb::__internal::Enum for ContentType {
  const NAME: &'static str = "ContentType";
}

impl ::__pb::ProxiedInMapValue<i32> for ContentType {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<i32, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<i32, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<i32, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ContentType(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<i32, Self>>) -> ::__pb::MapIter<'_, i32, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, i32, Self>
    ) -> Option<(::__pb::View<'a, i32>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <i32 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<u32> for ContentType {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<u32, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<u32, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<u32, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ContentType(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<u32, Self>>) -> ::__pb::MapIter<'_, u32, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, u32, Self>
    ) -> Option<(::__pb::View<'a, u32>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <u32 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<i64> for ContentType {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<i64, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<i64, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<i64, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ContentType(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<i64, Self>>) -> ::__pb::MapIter<'_, i64, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, i64, Self>
    ) -> Option<(::__pb::View<'a, i64>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <i64 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<u64> for ContentType {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<u64, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<u64, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<u64, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ContentType(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<u64, Self>>) -> ::__pb::MapIter<'_, u64, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, u64, Self>
    ) -> Option<(::__pb::View<'a, u64>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <u64 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<bool> for ContentType {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<bool, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <bool as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<bool, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<bool, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ContentType(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<bool, Self>>) -> ::__pb::MapIter<'_, bool, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, bool, Self>
    ) -> Option<(::__pb::View<'a, bool>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <bool as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for ContentType {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<::__pb::ProtoStr, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<::__pb::ProtoStr, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ContentType(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) -> ::__pb::MapIter<'_, ::__pb::ProtoStr, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, ::__pb::ProtoStr, Self>
    ) -> Option<(::__pb::View<'a, ::__pb::ProtoStr>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}

#[repr(transparent)]
#[derive(Clone, Copy, PartialEq, Eq)]
pub struct ApprovalStatus(i32);

#[allow(non_upper_case_globals)]
impl ApprovalStatus {
  pub const Default: ApprovalStatus = ApprovalStatus(0);
  pub const Approved: ApprovalStatus = ApprovalStatus(1);
  pub const Rejected: ApprovalStatus = ApprovalStatus(-1);
}

impl ::__std::convert::From<ApprovalStatus> for i32 {
  fn from(val: ApprovalStatus) -> i32 {
    val.0
  }
}

impl ::__std::convert::From<i32> for ApprovalStatus {
  fn from(val: i32) -> ApprovalStatus {
    Self(val)
  }
}

impl ::__std::default::Default for ApprovalStatus {
  fn default() -> Self {
    Self(0)
  }
}

impl ::__std::fmt::Debug for ApprovalStatus {
  fn fmt(&self, f: &mut ::__std::fmt::Formatter<'_>) -> ::__std::fmt::Result {
    f.debug_tuple(stringify!(ApprovalStatus)).field(&self.0).finish()
  }
}

impl ::__pb::Proxied for ApprovalStatus {
  type View<'a> = ApprovalStatus;
  type Mut<'a> = ::__pb::PrimitiveMut<'a, ApprovalStatus>;
}

impl ::__pb::ViewProxy<'_> for ApprovalStatus {
  type Proxied = ApprovalStatus;

  fn as_view(&self) -> ApprovalStatus {
    *self
  }

  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, ApprovalStatus> {
    self
  }
}

impl ::__pb::SettableValue<ApprovalStatus> for ApprovalStatus {
  fn set_on<'msg>(
      self,
      private: ::__pb::__internal::Private,
      mut mutator: ::__pb::Mut<'msg, ApprovalStatus>
  ) where ApprovalStatus: 'msg {
    mutator.set_primitive(private, self)
  }
}

impl ::__pb::ProxiedWithPresence for ApprovalStatus {
  type PresentMutData<'a> = ::__pb::__internal::RawVTableOptionalMutatorData<'a, ApprovalStatus>;
  type AbsentMutData<'a> = ::__pb::__internal::RawVTableOptionalMutatorData<'a, ApprovalStatus>;

  fn clear_present_field(
    present_mutator: Self::PresentMutData<'_>,
  ) -> Self::AbsentMutData<'_> {
    present_mutator.clear(::__pb::__internal::Private)
  }

  fn set_absent_to_default(
    absent_mutator: Self::AbsentMutData<'_>,
  ) -> Self::PresentMutData<'_> {
    absent_mutator.set_absent_to_default(::__pb::__internal::Private)
  }
}

unsafe impl ::__pb::ProxiedInRepeated for ApprovalStatus {
  fn repeated_len(r: ::__pb::View<::__pb::Repeated<Self>>) -> usize {
    ::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, r).len()
  }

  fn repeated_push(r: ::__pb::Mut<::__pb::Repeated<Self>>, val: ApprovalStatus) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r).push(val.into())
  }

  fn repeated_clear(r: ::__pb::Mut<::__pb::Repeated<Self>>) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r).clear()
  }

  unsafe fn repeated_get_unchecked(
      r: ::__pb::View<::__pb::Repeated<Self>>,
      index: usize,
  ) -> ::__pb::View<ApprovalStatus> {
    // SAFETY: In-bounds as promised by the caller.
    unsafe {
      ::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, r)
        .get_unchecked(index)
        .try_into()
        .unwrap_unchecked()
    }
  }

  unsafe fn repeated_set_unchecked(
      r: ::__pb::Mut<::__pb::Repeated<Self>>,
      index: usize,
      val: ApprovalStatus,
  ) {
    // SAFETY: In-bounds as promised by the caller.
    unsafe {
      ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r)
        .set_unchecked(index, val.into())
    }
  }

  fn repeated_copy_from(
      src: ::__pb::View<::__pb::Repeated<Self>>,
      dest: ::__pb::Mut<::__pb::Repeated<Self>>,
  ) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, dest)
      .copy_from(::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, src))
  }
}

impl ::__pb::__internal::PrimitiveWithRawVTable for ApprovalStatus {}

// SAFETY: this is an enum type
unsafe impl ::__pb::__internal::Enum for ApprovalStatus {
  const NAME: &'static str = "ApprovalStatus";
}

impl ::__pb::ProxiedInMapValue<i32> for ApprovalStatus {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<i32, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<i32, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<i32, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ApprovalStatus(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<i32, Self>>) -> ::__pb::MapIter<'_, i32, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, i32, Self>
    ) -> Option<(::__pb::View<'a, i32>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <i32 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<u32> for ApprovalStatus {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<u32, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<u32, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<u32, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ApprovalStatus(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<u32, Self>>) -> ::__pb::MapIter<'_, u32, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, u32, Self>
    ) -> Option<(::__pb::View<'a, u32>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <u32 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<i64> for ApprovalStatus {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<i64, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<i64, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<i64, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ApprovalStatus(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<i64, Self>>) -> ::__pb::MapIter<'_, i64, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, i64, Self>
    ) -> Option<(::__pb::View<'a, i64>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <i64 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<u64> for ApprovalStatus {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<u64, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<u64, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<u64, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ApprovalStatus(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<u64, Self>>) -> ::__pb::MapIter<'_, u64, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, u64, Self>
    ) -> Option<(::__pb::View<'a, u64>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <u64 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<bool> for ApprovalStatus {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<bool, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <bool as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<bool, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<bool, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ApprovalStatus(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<bool, Self>>) -> ::__pb::MapIter<'_, bool, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, bool, Self>
    ) -> Option<(::__pb::View<'a, bool>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <bool as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for ApprovalStatus {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<::__pb::ProtoStr, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<::__pb::ProtoStr, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ApprovalStatus(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) -> ::__pb::MapIter<'_, ::__pb::ProtoStr, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, ::__pb::ProtoStr, Self>
    ) -> Option<(::__pb::View<'a, ::__pb::ProtoStr>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}

#[repr(transparent)]
#[derive(Clone, Copy, PartialEq, Eq)]
pub struct ConvRecvMsgOpt(i32);

#[allow(non_upper_case_globals)]
impl ConvRecvMsgOpt {
  pub const Receivemessage: ConvRecvMsgOpt = ConvRecvMsgOpt(0);
  pub const Notreceivemessage: ConvRecvMsgOpt = ConvRecvMsgOpt(1);
  pub const Receivenotnotifymessage: ConvRecvMsgOpt = ConvRecvMsgOpt(2);
}

impl ::__std::convert::From<ConvRecvMsgOpt> for i32 {
  fn from(val: ConvRecvMsgOpt) -> i32 {
    val.0
  }
}

impl ::__std::convert::From<i32> for ConvRecvMsgOpt {
  fn from(val: i32) -> ConvRecvMsgOpt {
    Self(val)
  }
}

impl ::__std::default::Default for ConvRecvMsgOpt {
  fn default() -> Self {
    Self(0)
  }
}

impl ::__std::fmt::Debug for ConvRecvMsgOpt {
  fn fmt(&self, f: &mut ::__std::fmt::Formatter<'_>) -> ::__std::fmt::Result {
    f.debug_tuple(stringify!(ConvRecvMsgOpt)).field(&self.0).finish()
  }
}

impl ::__pb::Proxied for ConvRecvMsgOpt {
  type View<'a> = ConvRecvMsgOpt;
  type Mut<'a> = ::__pb::PrimitiveMut<'a, ConvRecvMsgOpt>;
}

impl ::__pb::ViewProxy<'_> for ConvRecvMsgOpt {
  type Proxied = ConvRecvMsgOpt;

  fn as_view(&self) -> ConvRecvMsgOpt {
    *self
  }

  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, ConvRecvMsgOpt> {
    self
  }
}

impl ::__pb::SettableValue<ConvRecvMsgOpt> for ConvRecvMsgOpt {
  fn set_on<'msg>(
      self,
      private: ::__pb::__internal::Private,
      mut mutator: ::__pb::Mut<'msg, ConvRecvMsgOpt>
  ) where ConvRecvMsgOpt: 'msg {
    mutator.set_primitive(private, self)
  }
}

impl ::__pb::ProxiedWithPresence for ConvRecvMsgOpt {
  type PresentMutData<'a> = ::__pb::__internal::RawVTableOptionalMutatorData<'a, ConvRecvMsgOpt>;
  type AbsentMutData<'a> = ::__pb::__internal::RawVTableOptionalMutatorData<'a, ConvRecvMsgOpt>;

  fn clear_present_field(
    present_mutator: Self::PresentMutData<'_>,
  ) -> Self::AbsentMutData<'_> {
    present_mutator.clear(::__pb::__internal::Private)
  }

  fn set_absent_to_default(
    absent_mutator: Self::AbsentMutData<'_>,
  ) -> Self::PresentMutData<'_> {
    absent_mutator.set_absent_to_default(::__pb::__internal::Private)
  }
}

unsafe impl ::__pb::ProxiedInRepeated for ConvRecvMsgOpt {
  fn repeated_len(r: ::__pb::View<::__pb::Repeated<Self>>) -> usize {
    ::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, r).len()
  }

  fn repeated_push(r: ::__pb::Mut<::__pb::Repeated<Self>>, val: ConvRecvMsgOpt) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r).push(val.into())
  }

  fn repeated_clear(r: ::__pb::Mut<::__pb::Repeated<Self>>) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r).clear()
  }

  unsafe fn repeated_get_unchecked(
      r: ::__pb::View<::__pb::Repeated<Self>>,
      index: usize,
  ) -> ::__pb::View<ConvRecvMsgOpt> {
    // SAFETY: In-bounds as promised by the caller.
    unsafe {
      ::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, r)
        .get_unchecked(index)
        .try_into()
        .unwrap_unchecked()
    }
  }

  unsafe fn repeated_set_unchecked(
      r: ::__pb::Mut<::__pb::Repeated<Self>>,
      index: usize,
      val: ConvRecvMsgOpt,
  ) {
    // SAFETY: In-bounds as promised by the caller.
    unsafe {
      ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r)
        .set_unchecked(index, val.into())
    }
  }

  fn repeated_copy_from(
      src: ::__pb::View<::__pb::Repeated<Self>>,
      dest: ::__pb::Mut<::__pb::Repeated<Self>>,
  ) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, dest)
      .copy_from(::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, src))
  }
}

impl ::__pb::__internal::PrimitiveWithRawVTable for ConvRecvMsgOpt {}

// SAFETY: this is an enum type
unsafe impl ::__pb::__internal::Enum for ConvRecvMsgOpt {
  const NAME: &'static str = "ConvRecvMsgOpt";
}

impl ::__pb::ProxiedInMapValue<i32> for ConvRecvMsgOpt {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<i32, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<i32, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<i32, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ConvRecvMsgOpt(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<i32, Self>>) -> ::__pb::MapIter<'_, i32, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, i32, Self>
    ) -> Option<(::__pb::View<'a, i32>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <i32 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<u32> for ConvRecvMsgOpt {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<u32, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<u32, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<u32, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ConvRecvMsgOpt(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<u32, Self>>) -> ::__pb::MapIter<'_, u32, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, u32, Self>
    ) -> Option<(::__pb::View<'a, u32>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <u32 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<i64> for ConvRecvMsgOpt {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<i64, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<i64, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<i64, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ConvRecvMsgOpt(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<i64, Self>>) -> ::__pb::MapIter<'_, i64, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, i64, Self>
    ) -> Option<(::__pb::View<'a, i64>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <i64 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<u64> for ConvRecvMsgOpt {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<u64, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<u64, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<u64, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ConvRecvMsgOpt(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<u64, Self>>) -> ::__pb::MapIter<'_, u64, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, u64, Self>
    ) -> Option<(::__pb::View<'a, u64>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <u64 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<bool> for ConvRecvMsgOpt {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<bool, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <bool as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<bool, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<bool, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ConvRecvMsgOpt(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<bool, Self>>) -> ::__pb::MapIter<'_, bool, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, bool, Self>
    ) -> Option<(::__pb::View<'a, bool>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <bool as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for ConvRecvMsgOpt {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<::__pb::ProtoStr, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<::__pb::ProtoStr, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ConvRecvMsgOpt(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) -> ::__pb::MapIter<'_, ::__pb::ProtoStr, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, ::__pb::ProtoStr, Self>
    ) -> Option<(::__pb::View<'a, ::__pb::ProtoStr>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}

#[repr(transparent)]
#[derive(Clone, Copy, PartialEq, Eq)]
pub struct ConvGroupAtType(i32);

#[allow(non_upper_case_globals)]
impl ConvGroupAtType {
  pub const Atnormal: ConvGroupAtType = ConvGroupAtType(0);
  pub const Atme: ConvGroupAtType = ConvGroupAtType(1);
  pub const Atall: ConvGroupAtType = ConvGroupAtType(2);
  pub const Atallatme: ConvGroupAtType = ConvGroupAtType(3);
}

impl ::__std::convert::From<ConvGroupAtType> for i32 {
  fn from(val: ConvGroupAtType) -> i32 {
    val.0
  }
}

impl ::__std::convert::From<i32> for ConvGroupAtType {
  fn from(val: i32) -> ConvGroupAtType {
    Self(val)
  }
}

impl ::__std::default::Default for ConvGroupAtType {
  fn default() -> Self {
    Self(0)
  }
}

impl ::__std::fmt::Debug for ConvGroupAtType {
  fn fmt(&self, f: &mut ::__std::fmt::Formatter<'_>) -> ::__std::fmt::Result {
    f.debug_tuple(stringify!(ConvGroupAtType)).field(&self.0).finish()
  }
}

impl ::__pb::Proxied for ConvGroupAtType {
  type View<'a> = ConvGroupAtType;
  type Mut<'a> = ::__pb::PrimitiveMut<'a, ConvGroupAtType>;
}

impl ::__pb::ViewProxy<'_> for ConvGroupAtType {
  type Proxied = ConvGroupAtType;

  fn as_view(&self) -> ConvGroupAtType {
    *self
  }

  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, ConvGroupAtType> {
    self
  }
}

impl ::__pb::SettableValue<ConvGroupAtType> for ConvGroupAtType {
  fn set_on<'msg>(
      self,
      private: ::__pb::__internal::Private,
      mut mutator: ::__pb::Mut<'msg, ConvGroupAtType>
  ) where ConvGroupAtType: 'msg {
    mutator.set_primitive(private, self)
  }
}

impl ::__pb::ProxiedWithPresence for ConvGroupAtType {
  type PresentMutData<'a> = ::__pb::__internal::RawVTableOptionalMutatorData<'a, ConvGroupAtType>;
  type AbsentMutData<'a> = ::__pb::__internal::RawVTableOptionalMutatorData<'a, ConvGroupAtType>;

  fn clear_present_field(
    present_mutator: Self::PresentMutData<'_>,
  ) -> Self::AbsentMutData<'_> {
    present_mutator.clear(::__pb::__internal::Private)
  }

  fn set_absent_to_default(
    absent_mutator: Self::AbsentMutData<'_>,
  ) -> Self::PresentMutData<'_> {
    absent_mutator.set_absent_to_default(::__pb::__internal::Private)
  }
}

unsafe impl ::__pb::ProxiedInRepeated for ConvGroupAtType {
  fn repeated_len(r: ::__pb::View<::__pb::Repeated<Self>>) -> usize {
    ::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, r).len()
  }

  fn repeated_push(r: ::__pb::Mut<::__pb::Repeated<Self>>, val: ConvGroupAtType) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r).push(val.into())
  }

  fn repeated_clear(r: ::__pb::Mut<::__pb::Repeated<Self>>) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r).clear()
  }

  unsafe fn repeated_get_unchecked(
      r: ::__pb::View<::__pb::Repeated<Self>>,
      index: usize,
  ) -> ::__pb::View<ConvGroupAtType> {
    // SAFETY: In-bounds as promised by the caller.
    unsafe {
      ::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, r)
        .get_unchecked(index)
        .try_into()
        .unwrap_unchecked()
    }
  }

  unsafe fn repeated_set_unchecked(
      r: ::__pb::Mut<::__pb::Repeated<Self>>,
      index: usize,
      val: ConvGroupAtType,
  ) {
    // SAFETY: In-bounds as promised by the caller.
    unsafe {
      ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, r)
        .set_unchecked(index, val.into())
    }
  }

  fn repeated_copy_from(
      src: ::__pb::View<::__pb::Repeated<Self>>,
      dest: ::__pb::Mut<::__pb::Repeated<Self>>,
  ) {
    ::__pb::__runtime::cast_enum_repeated_mut(::__pb::__internal::Private, dest)
      .copy_from(::__pb::__runtime::cast_enum_repeated_view(::__pb::__internal::Private, src))
  }
}

impl ::__pb::__internal::PrimitiveWithRawVTable for ConvGroupAtType {}

// SAFETY: this is an enum type
unsafe impl ::__pb::__internal::Enum for ConvGroupAtType {
  const NAME: &'static str = "ConvGroupAtType";
}

impl ::__pb::ProxiedInMapValue<i32> for ConvGroupAtType {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<i32, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<i32, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<i32, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ConvGroupAtType(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<i32, Self>>, key: ::__pb::View<'_, i32>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <i32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<i32, Self>>) -> ::__pb::MapIter<'_, i32, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, i32, Self>
    ) -> Option<(::__pb::View<'a, i32>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <i32 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<u32> for ConvGroupAtType {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<u32, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<u32, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<u32, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ConvGroupAtType(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<u32, Self>>, key: ::__pb::View<'_, u32>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <u32 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<u32, Self>>) -> ::__pb::MapIter<'_, u32, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, u32, Self>
    ) -> Option<(::__pb::View<'a, u32>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <u32 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<i64> for ConvGroupAtType {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<i64, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<i64, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<i64, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ConvGroupAtType(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<i64, Self>>, key: ::__pb::View<'_, i64>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <i64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<i64, Self>>) -> ::__pb::MapIter<'_, i64, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, i64, Self>
    ) -> Option<(::__pb::View<'a, i64>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <i64 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<u64> for ConvGroupAtType {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<u64, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<u64, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<u64, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ConvGroupAtType(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<u64, Self>>, key: ::__pb::View<'_, u64>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <u64 as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<u64, Self>>) -> ::__pb::MapIter<'_, u64, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, u64, Self>
    ) -> Option<(::__pb::View<'a, u64>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <u64 as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<bool> for ConvGroupAtType {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<bool, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <bool as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<bool, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<bool, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ConvGroupAtType(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<bool, Self>>, key: ::__pb::View<'_, bool>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <bool as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<bool, Self>>) -> ::__pb::MapIter<'_, bool, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, bool, Self>
    ) -> Option<(::__pb::View<'a, bool>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <bool as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for ConvGroupAtType {
    fn map_new(_private: ::__pb::__internal::Private) -> ::__pb::Map<::__pb::ProtoStr, Self> {
        let arena = ::__pb::__runtime::Arena::new();
        let raw = unsafe {
            ::__pb::__runtime::upb_Map_New(
                arena.raw(),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::upb_type(),
                ::__pb::__runtime::CType::Enum)
        };
        ::__pb::Map::from_inner(
            ::__pb::__internal::Private,
            ::__pb::__runtime::InnerMap::new(::__pb::__internal::Private, raw, arena))
    }

    unsafe fn map_free(_private: ::__pb::__internal::Private, _map: &mut ::__pb::Map<::__pb::ProtoStr, Self>) {
        // No-op: the memory will be dropped by the arena.
    }

    fn map_clear(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) {
        unsafe {
            ::__pb::__runtime::upb_Map_Clear(map.as_raw(::__pb::__internal::Private));
        }
    }

    fn map_len(map: ::__pb::View<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) -> usize {
        unsafe {
            ::__pb::__runtime::upb_Map_Size(map.as_raw(::__pb::__internal::Private))
        }
    }

    fn map_insert(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>, value: ::__pb::View<'_, Self>) -> bool {
        let arena = map.inner(::__pb::__internal::Private).raw_arena(::__pb::__internal::Private);
        unsafe {
            ::__pb::__runtime::upb_Map_InsertAndReturnIfInserted(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                ::__pb::__runtime::upb_MessageValue { int32_val: value.0 },
                arena
            )
        }
    }

    fn map_get<'a>(map: ::__pb::View<'a, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>) -> Option<::__pb::View<'a, Self>> {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        let found = unsafe {
            ::__pb::__runtime::upb_Map_Get(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        };
        if !found {
            return None;
        }
        Some(ConvGroupAtType(unsafe { val.assume_init().int32_val }))
    }

    fn map_remove(mut map: ::__pb::Mut<'_, ::__pb::Map<::__pb::ProtoStr, Self>>, key: ::__pb::View<'_, ::__pb::ProtoStr>) -> bool {
        let mut val = ::__std::mem::MaybeUninit::uninit();
        unsafe {
            ::__pb::__runtime::upb_Map_Delete(
                map.as_raw(::__pb::__internal::Private),
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::to_message_value(key),
                val.as_mut_ptr())
        }
    }
    fn map_iter(map: ::__pb::View<'_, ::__pb::Map<::__pb::ProtoStr, Self>>) -> ::__pb::MapIter<'_, ::__pb::ProtoStr, Self> {
        // SAFETY: View<Map<'_,..>> guarantees its RawMap outlives '_.
        unsafe {
            ::__pb::MapIter::from_raw(::__pb::__internal::Private, ::__pb::__runtime::RawMapIter::new(::__pb::__internal::Private, map.as_raw(::__pb::__internal::Private)))
        }
    }

    fn map_iter_next<'a>(
        iter: &mut ::__pb::MapIter<'a, ::__pb::ProtoStr, Self>
    ) -> Option<(::__pb::View<'a, ::__pb::ProtoStr>, ::__pb::View<'a, Self>)> {
        // SAFETY: MapIter<'a, ..> guarantees its RawMapIter outlives 'a.
        unsafe { iter.as_raw_mut(::__pb::__internal::Private).next_unchecked(::__pb::__internal::Private) }
            // SAFETY: MapIter<K, V> returns key and values message values
            //         with the variants for K and V active.
            .map(|(k, v)| unsafe {(
                <::__pb::ProtoStr as ::__pb::__runtime::UpbTypeConversions>::from_message_value(k),
                Self(v.int32_val),
            )})
    }
}

