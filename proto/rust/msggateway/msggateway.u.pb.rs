extern crate protobuf_upb as __pb;
extern crate std as __std;
#[allow(non_camel_case_types)]
pub struct OnlinePushMsgReq {
  inner: ::__pb::__runtime::MessageInner
}

impl std::fmt::Debug for OnlinePushMsgReq {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

impl std::default::Default for OnlinePushMsgReq {
  fn default() -> Self {
    Self::new()
  }
}

// SAFETY:
// - `OnlinePushMsgReq` is `Sync` because it does not implement interior mutability.
//    Neither does `OnlinePushMsgReqMut`.
unsafe impl Sync for OnlinePushMsgReq {}

// SAFETY:
// - `OnlinePushMsgReq` is `Send` because it uniquely owns its arena and does
//   not use thread-local data.
unsafe impl Send for OnlinePushMsgReq {}

impl ::__pb::Proxied for OnlinePushMsgReq {
  type View<'msg> = OnlinePushMsgReqView<'msg>;
  type Mut<'msg> = OnlinePushMsgReqMut<'msg>;
}

#[derive(Copy, Clone)]
#[allow(dead_code)]
pub struct OnlinePushMsgReqView<'msg> {
  msg: ::__pb::__runtime::RawMessage,
  _phantom: ::__std::marker::PhantomData<&'msg ()>,
}

impl std::fmt::Debug for OnlinePushMsgReqView<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> OnlinePushMsgReqView<'msg> {
  #[doc(hidden)]
  pub fn new(_private: ::__pb::__internal::Private, msg: ::__pb::__runtime::RawMessage) -> Self {
    Self { msg, _phantom: ::__std::marker::PhantomData }
  }

  fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
    self.msg
  }

  pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
    let arena = ::__pb::__runtime::Arena::new();
    // SAFETY: openim__ffi__OnlinePushMsgReq_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__OnlinePushMsgReq_msg_init) };
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

  // pushToUserID: optional string
  pub fn pushToUserID(self) -> &'msg ::__pb::ProtoStr {
    let view = unsafe { openim_ffi_OnlinePushMsgReq_pushToUserID(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }

}

// SAFETY:
// - `OnlinePushMsgReqView` is `Sync` because it does not support mutation.
unsafe impl Sync for OnlinePushMsgReqView<'_> {}

// SAFETY:
// - `OnlinePushMsgReqView` is `Send` because while its alive a `OnlinePushMsgReqMut` cannot.
// - `OnlinePushMsgReqView` does not use thread-local data.
unsafe impl Send for OnlinePushMsgReqView<'_> {}

impl<'msg> ::__pb::ViewProxy<'msg> for OnlinePushMsgReqView<'msg> {
  type Proxied = OnlinePushMsgReq;

  fn as_view(&self) -> ::__pb::View<'msg, OnlinePushMsgReq> {
    *self
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, OnlinePushMsgReq> where 'msg: 'shorter {
    self
  }
}

impl ::__pb::__internal::ProxiedWithRawVTable for OnlinePushMsgReq {
  type VTable = ::__pb::__runtime::MessageVTable;

  fn make_view(_private: ::__pb::__internal::Private,
              mut_inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::View<'_, Self> {
    let msg = unsafe {
      (mut_inner.vtable().getter)(mut_inner.msg_ref().msg())
    };
    OnlinePushMsgReqView::new(::__pb::__internal::Private, msg.unwrap_or_else(||::__pb::__runtime::ScratchSpace::zeroed_block(::__pb::__internal::Private)))
  }

  fn make_mut(_private: ::__pb::__internal::Private,
              inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::Mut<'_, Self> {
    let raw_submsg = unsafe {
      (inner.vtable().mut_getter)(inner.msg_ref().msg(), inner.msg_ref().arena(::__pb::__internal::Private).raw())
    };
    OnlinePushMsgReqMut::from_parent(::__pb::__internal::Private, inner.msg_ref(), raw_submsg)
  }
}

impl ::__pb::__internal::ProxiedWithRawOptionalVTable for OnlinePushMsgReq {
  type OptionalVTable = ::__pb::__runtime::MessageVTable;

  fn upcast_vtable(_private: ::__pb::__internal::Private,
                   optional_vtable: &'static Self::OptionalVTable)
                  -> &'static Self::VTable {
    &optional_vtable
  }
}

impl ::__pb::ProxiedWithPresence for OnlinePushMsgReq {
  type PresentMutData<'a> = ::__pb::__runtime::MessagePresentMutData<'a, OnlinePushMsgReq>;
  type AbsentMutData<'a> = ::__pb::__runtime::MessageAbsentMutData<'a, OnlinePushMsgReq>;

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

impl<'msg> ::__pb::SettableValue<OnlinePushMsgReq> for OnlinePushMsgReqView<'msg> {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, OnlinePushMsgReq>)
    where OnlinePushMsgReq: 'dst {
    unsafe { ::__pb::__runtime::upb_Message_DeepCopy(
      mutator.inner.msg(),
      self.msg,
      ::__std::ptr::addr_of!(openim__ffi__OnlinePushMsgReq_msg_init),
      mutator.inner.arena(::__pb::__internal::Private).raw(),
    ) };
  }
}

impl ::__pb::SettableValue<OnlinePushMsgReq> for OnlinePushMsgReq {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, OnlinePushMsgReq>)
    where OnlinePushMsgReq: 'dst {
    self.as_view().set_on(::__pb::__internal::Private, mutator);
  }
}

unsafe impl ::__pb::ProxiedInRepeated for OnlinePushMsgReq {
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
    // - `v.raw_msg()` and `dest_msg` both have message minitable `openim__ffi__OnlinePushMsgReq_msg_init`.
    unsafe {
      ::__pb::__runtime::upb_Message_DeepCopy(
        dest_msg,
        v.raw_msg(),
        ::__std::ptr::addr_of!(openim__ffi__OnlinePushMsgReq_msg_init),
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
    // - `v.raw_msg()` is a valid `const upb_Message*` with minitable `openim__ffi__OnlinePushMsgReq_msg_init`.
    let msg_ptr = unsafe {
      ::__pb::__runtime::upb_Message_DeepClone(
        v.raw_msg(),
        std::ptr::addr_of!(openim__ffi__OnlinePushMsgReq_msg_init),
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
      // - Elements of `src` and `dest` have message minitable `openim__ffi__OnlinePushMsgReq_msg_init`.
      unsafe {
        ::__pb::__runtime::repeated_message_copy_from(src, dest, ::__std::ptr::addr_of!(openim__ffi__OnlinePushMsgReq_msg_init));
      }
  }
}
impl ::__pb::__runtime::UpbTypeConversions for OnlinePushMsgReq {
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
          val.raw_msg(), ::__std::ptr::addr_of!(openim__ffi__OnlinePushMsgReq_msg_init), arena)
          .expect("upb_Message_DeepClone failed.");
      Self::to_message_value(
          OnlinePushMsgReqView::new(::__pb::__internal::Private, cloned_msg))
      }

    unsafe fn from_message_value<'msg>(msg: ::__pb::__runtime::upb_MessageValue)
        -> ::__pb::View<'msg, Self> {
        OnlinePushMsgReqView::new(
            ::__pb::__internal::Private,
            unsafe { msg.msg_val }
                .expect("expected present message value in map"))
    }
}
impl ::__pb::ProxiedInMapValue<i32> for OnlinePushMsgReq {
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
impl ::__pb::ProxiedInMapValue<u32> for OnlinePushMsgReq {
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
impl ::__pb::ProxiedInMapValue<i64> for OnlinePushMsgReq {
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
impl ::__pb::ProxiedInMapValue<u64> for OnlinePushMsgReq {
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
impl ::__pb::ProxiedInMapValue<bool> for OnlinePushMsgReq {
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
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for OnlinePushMsgReq {
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
pub struct OnlinePushMsgReqMut<'msg> {
  inner: ::__pb::__runtime::MutatorMessageRef<'msg>,
}

impl std::fmt::Debug for OnlinePushMsgReqMut<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> OnlinePushMsgReqMut<'msg> {
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

  // pushToUserID: optional string
  pub fn pushToUserID(&self) -> &'_ ::__pb::ProtoStr {
    let view = unsafe { openim_ffi_OnlinePushMsgReq_pushToUserID(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }
  pub fn set_pushToUserID(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
    self.pushToUserID_mut().set(val);
  }
  fn pushToUserID_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
    unsafe {
      <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__internal::RawVTableMutator::new(
          ::__pb::__internal::Private,
          self.as_mutator_message_ref(),
          OnlinePushMsgReq::__PUSHTOUSERID_VTABLE,
        )
      )
    }
  }

}

// SAFETY:
// - `OnlinePushMsgReqMut` does not perform any shared mutation.
// - `OnlinePushMsgReqMut` is not `Send`, and so even in the presence of mutator
//   splitting, synchronous access of an arena is impossible.
unsafe impl Sync for OnlinePushMsgReqMut<'_> {}

impl<'msg> ::__pb::MutProxy<'msg> for OnlinePushMsgReqMut<'msg> {
  fn as_mut(&mut self) -> ::__pb::Mut<'_, OnlinePushMsgReq> {
    OnlinePushMsgReqMut { inner: self.inner }
  }
  fn into_mut<'shorter>(self) -> ::__pb::Mut<'shorter, OnlinePushMsgReq> where 'msg : 'shorter { self }
}

impl<'msg> ::__pb::ViewProxy<'msg> for OnlinePushMsgReqMut<'msg> {
  type Proxied = OnlinePushMsgReq;
  fn as_view(&self) -> ::__pb::View<'_, OnlinePushMsgReq> {
    OnlinePushMsgReqView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, OnlinePushMsgReq> where 'msg: 'shorter {
    OnlinePushMsgReqView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
}

#[allow(dead_code)]
impl OnlinePushMsgReq {
  pub fn new() -> Self {
    let arena = ::__pb::__runtime::Arena::new();
    Self {
      inner: ::__pb::__runtime::MessageInner {
        msg: unsafe { openim_ffi_OnlinePushMsgReq_new(arena.raw()) },
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
    // SAFETY: openim__ffi__OnlinePushMsgReq_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__OnlinePushMsgReq_msg_init) };
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

  pub fn as_view(&self) -> OnlinePushMsgReqView {
    OnlinePushMsgReqView::new(::__pb::__internal::Private, self.inner.msg)
  }

  pub fn as_mut(&mut self) -> OnlinePushMsgReqMut {
    OnlinePushMsgReqMut::new(::__pb::__internal::Private, &mut self.inner)
  }

  // pushToUserID: optional string
  pub fn pushToUserID(&self) -> &'_ ::__pb::ProtoStr {
    let view = unsafe { openim_ffi_OnlinePushMsgReq_pushToUserID(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }
  pub fn set_pushToUserID(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
    self.pushToUserID_mut().set(val);
  }
  const __PUSHTOUSERID_VTABLE: &'static ::__pb::__internal::BytesMutVTable =
    &::__pb::__internal::BytesMutVTable::new(
      ::__pb::__internal::Private,
      openim_ffi_OnlinePushMsgReq_pushToUserID,
      openim_ffi_OnlinePushMsgReq_set_pushToUserID,
    );
  fn pushToUserID_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
    unsafe {
      <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__internal::RawVTableMutator::new(
          ::__pb::__internal::Private,
          self.as_mutator_message_ref(),
          OnlinePushMsgReq::__PUSHTOUSERID_VTABLE,
        )
      )
    }
  }

}  // impl OnlinePushMsgReq

impl ::__std::ops::Drop for OnlinePushMsgReq {
  fn drop(&mut self) {
  }
}

extern "C" {
  fn openim_ffi_OnlinePushMsgReq_new(arena: ::__pb::__runtime::RawArena) -> ::__pb::__runtime::RawMessage;
  /// Opaque wrapper for this message's MiniTable. The only valid way to
  /// reference this static is with `std::ptr::addr_of!(..)`.
  static openim__ffi__OnlinePushMsgReq_msg_init: ::__pb::__runtime::upb_MiniTable;

  fn openim_ffi_OnlinePushMsgReq_pushToUserID(raw_msg: ::__pb::__runtime::RawMessage) -> ::__pb::__runtime::PtrAndLen;
  fn openim_ffi_OnlinePushMsgReq_set_pushToUserID(raw_msg: ::__pb::__runtime::RawMessage, val: ::__pb::__runtime::PtrAndLen);


}  // extern "C" for OnlinePushMsgReq


#[allow(non_camel_case_types)]
pub struct OnlinePushMsgResp {
  inner: ::__pb::__runtime::MessageInner
}

impl std::fmt::Debug for OnlinePushMsgResp {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

impl std::default::Default for OnlinePushMsgResp {
  fn default() -> Self {
    Self::new()
  }
}

// SAFETY:
// - `OnlinePushMsgResp` is `Sync` because it does not implement interior mutability.
//    Neither does `OnlinePushMsgRespMut`.
unsafe impl Sync for OnlinePushMsgResp {}

// SAFETY:
// - `OnlinePushMsgResp` is `Send` because it uniquely owns its arena and does
//   not use thread-local data.
unsafe impl Send for OnlinePushMsgResp {}

impl ::__pb::Proxied for OnlinePushMsgResp {
  type View<'msg> = OnlinePushMsgRespView<'msg>;
  type Mut<'msg> = OnlinePushMsgRespMut<'msg>;
}

#[derive(Copy, Clone)]
#[allow(dead_code)]
pub struct OnlinePushMsgRespView<'msg> {
  msg: ::__pb::__runtime::RawMessage,
  _phantom: ::__std::marker::PhantomData<&'msg ()>,
}

impl std::fmt::Debug for OnlinePushMsgRespView<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> OnlinePushMsgRespView<'msg> {
  #[doc(hidden)]
  pub fn new(_private: ::__pb::__internal::Private, msg: ::__pb::__runtime::RawMessage) -> Self {
    Self { msg, _phantom: ::__std::marker::PhantomData }
  }

  fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
    self.msg
  }

  pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
    let arena = ::__pb::__runtime::Arena::new();
    // SAFETY: openim__ffi__OnlinePushMsgResp_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__OnlinePushMsgResp_msg_init) };
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

  // resp: repeated message openim.ffi.SingleMsgToUserPlatform
  pub fn resp(self) -> ::__pb::RepeatedView<'msg, crate::SingleMsgToUserPlatform> {
    unsafe {
      _openim_ffi_OnlinePushMsgResp_resp_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<crate::SingleMsgToUserPlatform>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }

}

// SAFETY:
// - `OnlinePushMsgRespView` is `Sync` because it does not support mutation.
unsafe impl Sync for OnlinePushMsgRespView<'_> {}

// SAFETY:
// - `OnlinePushMsgRespView` is `Send` because while its alive a `OnlinePushMsgRespMut` cannot.
// - `OnlinePushMsgRespView` does not use thread-local data.
unsafe impl Send for OnlinePushMsgRespView<'_> {}

impl<'msg> ::__pb::ViewProxy<'msg> for OnlinePushMsgRespView<'msg> {
  type Proxied = OnlinePushMsgResp;

  fn as_view(&self) -> ::__pb::View<'msg, OnlinePushMsgResp> {
    *self
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, OnlinePushMsgResp> where 'msg: 'shorter {
    self
  }
}

impl ::__pb::__internal::ProxiedWithRawVTable for OnlinePushMsgResp {
  type VTable = ::__pb::__runtime::MessageVTable;

  fn make_view(_private: ::__pb::__internal::Private,
              mut_inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::View<'_, Self> {
    let msg = unsafe {
      (mut_inner.vtable().getter)(mut_inner.msg_ref().msg())
    };
    OnlinePushMsgRespView::new(::__pb::__internal::Private, msg.unwrap_or_else(||::__pb::__runtime::ScratchSpace::zeroed_block(::__pb::__internal::Private)))
  }

  fn make_mut(_private: ::__pb::__internal::Private,
              inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::Mut<'_, Self> {
    let raw_submsg = unsafe {
      (inner.vtable().mut_getter)(inner.msg_ref().msg(), inner.msg_ref().arena(::__pb::__internal::Private).raw())
    };
    OnlinePushMsgRespMut::from_parent(::__pb::__internal::Private, inner.msg_ref(), raw_submsg)
  }
}

impl ::__pb::__internal::ProxiedWithRawOptionalVTable for OnlinePushMsgResp {
  type OptionalVTable = ::__pb::__runtime::MessageVTable;

  fn upcast_vtable(_private: ::__pb::__internal::Private,
                   optional_vtable: &'static Self::OptionalVTable)
                  -> &'static Self::VTable {
    &optional_vtable
  }
}

impl ::__pb::ProxiedWithPresence for OnlinePushMsgResp {
  type PresentMutData<'a> = ::__pb::__runtime::MessagePresentMutData<'a, OnlinePushMsgResp>;
  type AbsentMutData<'a> = ::__pb::__runtime::MessageAbsentMutData<'a, OnlinePushMsgResp>;

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

impl<'msg> ::__pb::SettableValue<OnlinePushMsgResp> for OnlinePushMsgRespView<'msg> {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, OnlinePushMsgResp>)
    where OnlinePushMsgResp: 'dst {
    unsafe { ::__pb::__runtime::upb_Message_DeepCopy(
      mutator.inner.msg(),
      self.msg,
      ::__std::ptr::addr_of!(openim__ffi__OnlinePushMsgResp_msg_init),
      mutator.inner.arena(::__pb::__internal::Private).raw(),
    ) };
  }
}

impl ::__pb::SettableValue<OnlinePushMsgResp> for OnlinePushMsgResp {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, OnlinePushMsgResp>)
    where OnlinePushMsgResp: 'dst {
    self.as_view().set_on(::__pb::__internal::Private, mutator);
  }
}

unsafe impl ::__pb::ProxiedInRepeated for OnlinePushMsgResp {
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
    // - `v.raw_msg()` and `dest_msg` both have message minitable `openim__ffi__OnlinePushMsgResp_msg_init`.
    unsafe {
      ::__pb::__runtime::upb_Message_DeepCopy(
        dest_msg,
        v.raw_msg(),
        ::__std::ptr::addr_of!(openim__ffi__OnlinePushMsgResp_msg_init),
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
    // - `v.raw_msg()` is a valid `const upb_Message*` with minitable `openim__ffi__OnlinePushMsgResp_msg_init`.
    let msg_ptr = unsafe {
      ::__pb::__runtime::upb_Message_DeepClone(
        v.raw_msg(),
        std::ptr::addr_of!(openim__ffi__OnlinePushMsgResp_msg_init),
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
      // - Elements of `src` and `dest` have message minitable `openim__ffi__OnlinePushMsgResp_msg_init`.
      unsafe {
        ::__pb::__runtime::repeated_message_copy_from(src, dest, ::__std::ptr::addr_of!(openim__ffi__OnlinePushMsgResp_msg_init));
      }
  }
}
impl ::__pb::__runtime::UpbTypeConversions for OnlinePushMsgResp {
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
          val.raw_msg(), ::__std::ptr::addr_of!(openim__ffi__OnlinePushMsgResp_msg_init), arena)
          .expect("upb_Message_DeepClone failed.");
      Self::to_message_value(
          OnlinePushMsgRespView::new(::__pb::__internal::Private, cloned_msg))
      }

    unsafe fn from_message_value<'msg>(msg: ::__pb::__runtime::upb_MessageValue)
        -> ::__pb::View<'msg, Self> {
        OnlinePushMsgRespView::new(
            ::__pb::__internal::Private,
            unsafe { msg.msg_val }
                .expect("expected present message value in map"))
    }
}
impl ::__pb::ProxiedInMapValue<i32> for OnlinePushMsgResp {
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
impl ::__pb::ProxiedInMapValue<u32> for OnlinePushMsgResp {
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
impl ::__pb::ProxiedInMapValue<i64> for OnlinePushMsgResp {
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
impl ::__pb::ProxiedInMapValue<u64> for OnlinePushMsgResp {
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
impl ::__pb::ProxiedInMapValue<bool> for OnlinePushMsgResp {
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
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for OnlinePushMsgResp {
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
pub struct OnlinePushMsgRespMut<'msg> {
  inner: ::__pb::__runtime::MutatorMessageRef<'msg>,
}

impl std::fmt::Debug for OnlinePushMsgRespMut<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> OnlinePushMsgRespMut<'msg> {
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

  // resp: repeated message openim.ffi.SingleMsgToUserPlatform
  pub fn resp(&self) -> ::__pb::RepeatedView<'_, crate::SingleMsgToUserPlatform> {
    unsafe {
      _openim_ffi_OnlinePushMsgResp_resp_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<crate::SingleMsgToUserPlatform>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }
  pub fn resp_mut(&mut self) -> ::__pb::RepeatedMut<'_, crate::SingleMsgToUserPlatform> {
    unsafe {
      ::__pb::RepeatedMut::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__runtime::InnerRepeatedMut::new(
          ::__pb::__internal::Private,
          _openim_ffi_OnlinePushMsgResp_resp_mutable_upb_array(
            self.raw_msg(),
            /* optional size pointer */ std::ptr::null(),
            self.arena().raw(),
          ),
          self.arena(),
        ),
      )
    }
  }

}

// SAFETY:
// - `OnlinePushMsgRespMut` does not perform any shared mutation.
// - `OnlinePushMsgRespMut` is not `Send`, and so even in the presence of mutator
//   splitting, synchronous access of an arena is impossible.
unsafe impl Sync for OnlinePushMsgRespMut<'_> {}

impl<'msg> ::__pb::MutProxy<'msg> for OnlinePushMsgRespMut<'msg> {
  fn as_mut(&mut self) -> ::__pb::Mut<'_, OnlinePushMsgResp> {
    OnlinePushMsgRespMut { inner: self.inner }
  }
  fn into_mut<'shorter>(self) -> ::__pb::Mut<'shorter, OnlinePushMsgResp> where 'msg : 'shorter { self }
}

impl<'msg> ::__pb::ViewProxy<'msg> for OnlinePushMsgRespMut<'msg> {
  type Proxied = OnlinePushMsgResp;
  fn as_view(&self) -> ::__pb::View<'_, OnlinePushMsgResp> {
    OnlinePushMsgRespView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, OnlinePushMsgResp> where 'msg: 'shorter {
    OnlinePushMsgRespView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
}

#[allow(dead_code)]
impl OnlinePushMsgResp {
  pub fn new() -> Self {
    let arena = ::__pb::__runtime::Arena::new();
    Self {
      inner: ::__pb::__runtime::MessageInner {
        msg: unsafe { openim_ffi_OnlinePushMsgResp_new(arena.raw()) },
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
    // SAFETY: openim__ffi__OnlinePushMsgResp_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__OnlinePushMsgResp_msg_init) };
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

  pub fn as_view(&self) -> OnlinePushMsgRespView {
    OnlinePushMsgRespView::new(::__pb::__internal::Private, self.inner.msg)
  }

  pub fn as_mut(&mut self) -> OnlinePushMsgRespMut {
    OnlinePushMsgRespMut::new(::__pb::__internal::Private, &mut self.inner)
  }

  // resp: repeated message openim.ffi.SingleMsgToUserPlatform
  pub fn resp(&self) -> ::__pb::RepeatedView<'_, crate::SingleMsgToUserPlatform> {
    unsafe {
      _openim_ffi_OnlinePushMsgResp_resp_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<crate::SingleMsgToUserPlatform>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }
  pub fn resp_mut(&mut self) -> ::__pb::RepeatedMut<'_, crate::SingleMsgToUserPlatform> {
    unsafe {
      ::__pb::RepeatedMut::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__runtime::InnerRepeatedMut::new(
          ::__pb::__internal::Private,
          _openim_ffi_OnlinePushMsgResp_resp_mutable_upb_array(
            self.raw_msg(),
            /* optional size pointer */ std::ptr::null(),
            self.arena().raw(),
          ),
          self.arena(),
        ),
      )
    }
  }

}  // impl OnlinePushMsgResp

impl ::__std::ops::Drop for OnlinePushMsgResp {
  fn drop(&mut self) {
  }
}

extern "C" {
  fn openim_ffi_OnlinePushMsgResp_new(arena: ::__pb::__runtime::RawArena) -> ::__pb::__runtime::RawMessage;
  /// Opaque wrapper for this message's MiniTable. The only valid way to
  /// reference this static is with `std::ptr::addr_of!(..)`.
  static openim__ffi__OnlinePushMsgResp_msg_init: ::__pb::__runtime::upb_MiniTable;

  fn openim_ffi_OnlinePushMsgResp_clear_resp(raw_msg: ::__pb::__runtime::RawMessage);
  fn _openim_ffi_OnlinePushMsgResp_resp_mutable_upb_array(
    raw_msg: ::__pb::__runtime::RawMessage,
    size: *const usize,
    arena: ::__pb::__runtime::RawArena,
  ) -> ::__pb::__runtime::RawRepeatedField;
  //  Returns `None` when returned array pointer is NULL.
  fn _openim_ffi_OnlinePushMsgResp_resp_upb_array(
    raw_msg: ::__pb::__runtime::RawMessage,
    size: *const usize,
  ) -> Option<::__pb::__runtime::RawRepeatedField>;


}  // extern "C" for OnlinePushMsgResp


#[allow(non_camel_case_types)]
pub struct SingleMsgToUserResults {
  inner: ::__pb::__runtime::MessageInner
}

impl std::fmt::Debug for SingleMsgToUserResults {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

impl std::default::Default for SingleMsgToUserResults {
  fn default() -> Self {
    Self::new()
  }
}

// SAFETY:
// - `SingleMsgToUserResults` is `Sync` because it does not implement interior mutability.
//    Neither does `SingleMsgToUserResultsMut`.
unsafe impl Sync for SingleMsgToUserResults {}

// SAFETY:
// - `SingleMsgToUserResults` is `Send` because it uniquely owns its arena and does
//   not use thread-local data.
unsafe impl Send for SingleMsgToUserResults {}

impl ::__pb::Proxied for SingleMsgToUserResults {
  type View<'msg> = SingleMsgToUserResultsView<'msg>;
  type Mut<'msg> = SingleMsgToUserResultsMut<'msg>;
}

#[derive(Copy, Clone)]
#[allow(dead_code)]
pub struct SingleMsgToUserResultsView<'msg> {
  msg: ::__pb::__runtime::RawMessage,
  _phantom: ::__std::marker::PhantomData<&'msg ()>,
}

impl std::fmt::Debug for SingleMsgToUserResultsView<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> SingleMsgToUserResultsView<'msg> {
  #[doc(hidden)]
  pub fn new(_private: ::__pb::__internal::Private, msg: ::__pb::__runtime::RawMessage) -> Self {
    Self { msg, _phantom: ::__std::marker::PhantomData }
  }

  fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
    self.msg
  }

  pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
    let arena = ::__pb::__runtime::Arena::new();
    // SAFETY: openim__ffi__SingleMsgToUserResults_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__SingleMsgToUserResults_msg_init) };
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

  // userID: optional string
  pub fn userID(self) -> &'msg ::__pb::ProtoStr {
    let view = unsafe { openim_ffi_SingleMsgToUserResults_userID(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }

  // resp: repeated message openim.ffi.SingleMsgToUserPlatform
  pub fn resp(self) -> ::__pb::RepeatedView<'msg, crate::SingleMsgToUserPlatform> {
    unsafe {
      _openim_ffi_SingleMsgToUserResults_resp_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<crate::SingleMsgToUserPlatform>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }

  // onlinePush: optional bool
  pub fn onlinePush(self) -> bool {
    unsafe { openim_ffi_SingleMsgToUserResults_onlinePush(self.raw_msg()) }
  }

}

// SAFETY:
// - `SingleMsgToUserResultsView` is `Sync` because it does not support mutation.
unsafe impl Sync for SingleMsgToUserResultsView<'_> {}

// SAFETY:
// - `SingleMsgToUserResultsView` is `Send` because while its alive a `SingleMsgToUserResultsMut` cannot.
// - `SingleMsgToUserResultsView` does not use thread-local data.
unsafe impl Send for SingleMsgToUserResultsView<'_> {}

impl<'msg> ::__pb::ViewProxy<'msg> for SingleMsgToUserResultsView<'msg> {
  type Proxied = SingleMsgToUserResults;

  fn as_view(&self) -> ::__pb::View<'msg, SingleMsgToUserResults> {
    *self
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, SingleMsgToUserResults> where 'msg: 'shorter {
    self
  }
}

impl ::__pb::__internal::ProxiedWithRawVTable for SingleMsgToUserResults {
  type VTable = ::__pb::__runtime::MessageVTable;

  fn make_view(_private: ::__pb::__internal::Private,
              mut_inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::View<'_, Self> {
    let msg = unsafe {
      (mut_inner.vtable().getter)(mut_inner.msg_ref().msg())
    };
    SingleMsgToUserResultsView::new(::__pb::__internal::Private, msg.unwrap_or_else(||::__pb::__runtime::ScratchSpace::zeroed_block(::__pb::__internal::Private)))
  }

  fn make_mut(_private: ::__pb::__internal::Private,
              inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::Mut<'_, Self> {
    let raw_submsg = unsafe {
      (inner.vtable().mut_getter)(inner.msg_ref().msg(), inner.msg_ref().arena(::__pb::__internal::Private).raw())
    };
    SingleMsgToUserResultsMut::from_parent(::__pb::__internal::Private, inner.msg_ref(), raw_submsg)
  }
}

impl ::__pb::__internal::ProxiedWithRawOptionalVTable for SingleMsgToUserResults {
  type OptionalVTable = ::__pb::__runtime::MessageVTable;

  fn upcast_vtable(_private: ::__pb::__internal::Private,
                   optional_vtable: &'static Self::OptionalVTable)
                  -> &'static Self::VTable {
    &optional_vtable
  }
}

impl ::__pb::ProxiedWithPresence for SingleMsgToUserResults {
  type PresentMutData<'a> = ::__pb::__runtime::MessagePresentMutData<'a, SingleMsgToUserResults>;
  type AbsentMutData<'a> = ::__pb::__runtime::MessageAbsentMutData<'a, SingleMsgToUserResults>;

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

impl<'msg> ::__pb::SettableValue<SingleMsgToUserResults> for SingleMsgToUserResultsView<'msg> {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, SingleMsgToUserResults>)
    where SingleMsgToUserResults: 'dst {
    unsafe { ::__pb::__runtime::upb_Message_DeepCopy(
      mutator.inner.msg(),
      self.msg,
      ::__std::ptr::addr_of!(openim__ffi__SingleMsgToUserResults_msg_init),
      mutator.inner.arena(::__pb::__internal::Private).raw(),
    ) };
  }
}

impl ::__pb::SettableValue<SingleMsgToUserResults> for SingleMsgToUserResults {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, SingleMsgToUserResults>)
    where SingleMsgToUserResults: 'dst {
    self.as_view().set_on(::__pb::__internal::Private, mutator);
  }
}

unsafe impl ::__pb::ProxiedInRepeated for SingleMsgToUserResults {
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
    // - `v.raw_msg()` and `dest_msg` both have message minitable `openim__ffi__SingleMsgToUserResults_msg_init`.
    unsafe {
      ::__pb::__runtime::upb_Message_DeepCopy(
        dest_msg,
        v.raw_msg(),
        ::__std::ptr::addr_of!(openim__ffi__SingleMsgToUserResults_msg_init),
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
    // - `v.raw_msg()` is a valid `const upb_Message*` with minitable `openim__ffi__SingleMsgToUserResults_msg_init`.
    let msg_ptr = unsafe {
      ::__pb::__runtime::upb_Message_DeepClone(
        v.raw_msg(),
        std::ptr::addr_of!(openim__ffi__SingleMsgToUserResults_msg_init),
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
      // - Elements of `src` and `dest` have message minitable `openim__ffi__SingleMsgToUserResults_msg_init`.
      unsafe {
        ::__pb::__runtime::repeated_message_copy_from(src, dest, ::__std::ptr::addr_of!(openim__ffi__SingleMsgToUserResults_msg_init));
      }
  }
}
impl ::__pb::__runtime::UpbTypeConversions for SingleMsgToUserResults {
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
          val.raw_msg(), ::__std::ptr::addr_of!(openim__ffi__SingleMsgToUserResults_msg_init), arena)
          .expect("upb_Message_DeepClone failed.");
      Self::to_message_value(
          SingleMsgToUserResultsView::new(::__pb::__internal::Private, cloned_msg))
      }

    unsafe fn from_message_value<'msg>(msg: ::__pb::__runtime::upb_MessageValue)
        -> ::__pb::View<'msg, Self> {
        SingleMsgToUserResultsView::new(
            ::__pb::__internal::Private,
            unsafe { msg.msg_val }
                .expect("expected present message value in map"))
    }
}
impl ::__pb::ProxiedInMapValue<i32> for SingleMsgToUserResults {
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
impl ::__pb::ProxiedInMapValue<u32> for SingleMsgToUserResults {
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
impl ::__pb::ProxiedInMapValue<i64> for SingleMsgToUserResults {
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
impl ::__pb::ProxiedInMapValue<u64> for SingleMsgToUserResults {
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
impl ::__pb::ProxiedInMapValue<bool> for SingleMsgToUserResults {
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
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for SingleMsgToUserResults {
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
pub struct SingleMsgToUserResultsMut<'msg> {
  inner: ::__pb::__runtime::MutatorMessageRef<'msg>,
}

impl std::fmt::Debug for SingleMsgToUserResultsMut<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> SingleMsgToUserResultsMut<'msg> {
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

  // userID: optional string
  pub fn userID(&self) -> &'_ ::__pb::ProtoStr {
    let view = unsafe { openim_ffi_SingleMsgToUserResults_userID(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }
  pub fn set_userID(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
    self.userID_mut().set(val);
  }
  fn userID_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
    unsafe {
      <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__internal::RawVTableMutator::new(
          ::__pb::__internal::Private,
          self.as_mutator_message_ref(),
          SingleMsgToUserResults::__USERID_VTABLE,
        )
      )
    }
  }

  // resp: repeated message openim.ffi.SingleMsgToUserPlatform
  pub fn resp(&self) -> ::__pb::RepeatedView<'_, crate::SingleMsgToUserPlatform> {
    unsafe {
      _openim_ffi_SingleMsgToUserResults_resp_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<crate::SingleMsgToUserPlatform>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }
  pub fn resp_mut(&mut self) -> ::__pb::RepeatedMut<'_, crate::SingleMsgToUserPlatform> {
    unsafe {
      ::__pb::RepeatedMut::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__runtime::InnerRepeatedMut::new(
          ::__pb::__internal::Private,
          _openim_ffi_SingleMsgToUserResults_resp_mutable_upb_array(
            self.raw_msg(),
            /* optional size pointer */ std::ptr::null(),
            self.arena().raw(),
          ),
          self.arena(),
        ),
      )
    }
  }

  // onlinePush: optional bool
  pub fn onlinePush(&self) -> bool {
    unsafe { openim_ffi_SingleMsgToUserResults_onlinePush(self.raw_msg()) }
  }
  pub fn set_onlinePush(&mut self, val: bool) {
    unsafe { openim_ffi_SingleMsgToUserResults_set_onlinePush(self.raw_msg(), val) }
  }

}

// SAFETY:
// - `SingleMsgToUserResultsMut` does not perform any shared mutation.
// - `SingleMsgToUserResultsMut` is not `Send`, and so even in the presence of mutator
//   splitting, synchronous access of an arena is impossible.
unsafe impl Sync for SingleMsgToUserResultsMut<'_> {}

impl<'msg> ::__pb::MutProxy<'msg> for SingleMsgToUserResultsMut<'msg> {
  fn as_mut(&mut self) -> ::__pb::Mut<'_, SingleMsgToUserResults> {
    SingleMsgToUserResultsMut { inner: self.inner }
  }
  fn into_mut<'shorter>(self) -> ::__pb::Mut<'shorter, SingleMsgToUserResults> where 'msg : 'shorter { self }
}

impl<'msg> ::__pb::ViewProxy<'msg> for SingleMsgToUserResultsMut<'msg> {
  type Proxied = SingleMsgToUserResults;
  fn as_view(&self) -> ::__pb::View<'_, SingleMsgToUserResults> {
    SingleMsgToUserResultsView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, SingleMsgToUserResults> where 'msg: 'shorter {
    SingleMsgToUserResultsView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
}

#[allow(dead_code)]
impl SingleMsgToUserResults {
  pub fn new() -> Self {
    let arena = ::__pb::__runtime::Arena::new();
    Self {
      inner: ::__pb::__runtime::MessageInner {
        msg: unsafe { openim_ffi_SingleMsgToUserResults_new(arena.raw()) },
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
    // SAFETY: openim__ffi__SingleMsgToUserResults_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__SingleMsgToUserResults_msg_init) };
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

  pub fn as_view(&self) -> SingleMsgToUserResultsView {
    SingleMsgToUserResultsView::new(::__pb::__internal::Private, self.inner.msg)
  }

  pub fn as_mut(&mut self) -> SingleMsgToUserResultsMut {
    SingleMsgToUserResultsMut::new(::__pb::__internal::Private, &mut self.inner)
  }

  // userID: optional string
  pub fn userID(&self) -> &'_ ::__pb::ProtoStr {
    let view = unsafe { openim_ffi_SingleMsgToUserResults_userID(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }
  pub fn set_userID(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
    self.userID_mut().set(val);
  }
  const __USERID_VTABLE: &'static ::__pb::__internal::BytesMutVTable =
    &::__pb::__internal::BytesMutVTable::new(
      ::__pb::__internal::Private,
      openim_ffi_SingleMsgToUserResults_userID,
      openim_ffi_SingleMsgToUserResults_set_userID,
    );
  fn userID_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
    unsafe {
      <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__internal::RawVTableMutator::new(
          ::__pb::__internal::Private,
          self.as_mutator_message_ref(),
          SingleMsgToUserResults::__USERID_VTABLE,
        )
      )
    }
  }

  // resp: repeated message openim.ffi.SingleMsgToUserPlatform
  pub fn resp(&self) -> ::__pb::RepeatedView<'_, crate::SingleMsgToUserPlatform> {
    unsafe {
      _openim_ffi_SingleMsgToUserResults_resp_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<crate::SingleMsgToUserPlatform>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }
  pub fn resp_mut(&mut self) -> ::__pb::RepeatedMut<'_, crate::SingleMsgToUserPlatform> {
    unsafe {
      ::__pb::RepeatedMut::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__runtime::InnerRepeatedMut::new(
          ::__pb::__internal::Private,
          _openim_ffi_SingleMsgToUserResults_resp_mutable_upb_array(
            self.raw_msg(),
            /* optional size pointer */ std::ptr::null(),
            self.arena().raw(),
          ),
          self.arena(),
        ),
      )
    }
  }

  // onlinePush: optional bool
  pub fn onlinePush(&self) -> bool {
    unsafe { openim_ffi_SingleMsgToUserResults_onlinePush(self.raw_msg()) }
  }
  pub fn set_onlinePush(&mut self, val: bool) {
    unsafe { openim_ffi_SingleMsgToUserResults_set_onlinePush(self.raw_msg(), val) }
  }

}  // impl SingleMsgToUserResults

impl ::__std::ops::Drop for SingleMsgToUserResults {
  fn drop(&mut self) {
  }
}

extern "C" {
  fn openim_ffi_SingleMsgToUserResults_new(arena: ::__pb::__runtime::RawArena) -> ::__pb::__runtime::RawMessage;
  /// Opaque wrapper for this message's MiniTable. The only valid way to
  /// reference this static is with `std::ptr::addr_of!(..)`.
  static openim__ffi__SingleMsgToUserResults_msg_init: ::__pb::__runtime::upb_MiniTable;

  fn openim_ffi_SingleMsgToUserResults_userID(raw_msg: ::__pb::__runtime::RawMessage) -> ::__pb::__runtime::PtrAndLen;
  fn openim_ffi_SingleMsgToUserResults_set_userID(raw_msg: ::__pb::__runtime::RawMessage, val: ::__pb::__runtime::PtrAndLen);

  fn openim_ffi_SingleMsgToUserResults_clear_resp(raw_msg: ::__pb::__runtime::RawMessage);
  fn _openim_ffi_SingleMsgToUserResults_resp_mutable_upb_array(
    raw_msg: ::__pb::__runtime::RawMessage,
    size: *const usize,
    arena: ::__pb::__runtime::RawArena,
  ) -> ::__pb::__runtime::RawRepeatedField;
  //  Returns `None` when returned array pointer is NULL.
  fn _openim_ffi_SingleMsgToUserResults_resp_upb_array(
    raw_msg: ::__pb::__runtime::RawMessage,
    size: *const usize,
  ) -> Option<::__pb::__runtime::RawRepeatedField>;

  fn openim_ffi_SingleMsgToUserResults_onlinePush(raw_msg: ::__pb::__runtime::RawMessage) -> bool;
  fn openim_ffi_SingleMsgToUserResults_set_onlinePush(raw_msg: ::__pb::__runtime::RawMessage, val: bool);


}  // extern "C" for SingleMsgToUserResults


#[allow(non_camel_case_types)]
pub struct OnlineBatchPushOneMsgReq {
  inner: ::__pb::__runtime::MessageInner
}

impl std::fmt::Debug for OnlineBatchPushOneMsgReq {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

impl std::default::Default for OnlineBatchPushOneMsgReq {
  fn default() -> Self {
    Self::new()
  }
}

// SAFETY:
// - `OnlineBatchPushOneMsgReq` is `Sync` because it does not implement interior mutability.
//    Neither does `OnlineBatchPushOneMsgReqMut`.
unsafe impl Sync for OnlineBatchPushOneMsgReq {}

// SAFETY:
// - `OnlineBatchPushOneMsgReq` is `Send` because it uniquely owns its arena and does
//   not use thread-local data.
unsafe impl Send for OnlineBatchPushOneMsgReq {}

impl ::__pb::Proxied for OnlineBatchPushOneMsgReq {
  type View<'msg> = OnlineBatchPushOneMsgReqView<'msg>;
  type Mut<'msg> = OnlineBatchPushOneMsgReqMut<'msg>;
}

#[derive(Copy, Clone)]
#[allow(dead_code)]
pub struct OnlineBatchPushOneMsgReqView<'msg> {
  msg: ::__pb::__runtime::RawMessage,
  _phantom: ::__std::marker::PhantomData<&'msg ()>,
}

impl std::fmt::Debug for OnlineBatchPushOneMsgReqView<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> OnlineBatchPushOneMsgReqView<'msg> {
  #[doc(hidden)]
  pub fn new(_private: ::__pb::__internal::Private, msg: ::__pb::__runtime::RawMessage) -> Self {
    Self { msg, _phantom: ::__std::marker::PhantomData }
  }

  fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
    self.msg
  }

  pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
    let arena = ::__pb::__runtime::Arena::new();
    // SAFETY: openim__ffi__OnlineBatchPushOneMsgReq_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__OnlineBatchPushOneMsgReq_msg_init) };
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

  // pushToUserIDs: repeated string
  pub fn pushToUserIDs(self) -> ::__pb::RepeatedView<'msg, ::__pb::ProtoStr> {
    unsafe {
      _openim_ffi_OnlineBatchPushOneMsgReq_pushToUserIDs_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<::__pb::ProtoStr>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }

}

// SAFETY:
// - `OnlineBatchPushOneMsgReqView` is `Sync` because it does not support mutation.
unsafe impl Sync for OnlineBatchPushOneMsgReqView<'_> {}

// SAFETY:
// - `OnlineBatchPushOneMsgReqView` is `Send` because while its alive a `OnlineBatchPushOneMsgReqMut` cannot.
// - `OnlineBatchPushOneMsgReqView` does not use thread-local data.
unsafe impl Send for OnlineBatchPushOneMsgReqView<'_> {}

impl<'msg> ::__pb::ViewProxy<'msg> for OnlineBatchPushOneMsgReqView<'msg> {
  type Proxied = OnlineBatchPushOneMsgReq;

  fn as_view(&self) -> ::__pb::View<'msg, OnlineBatchPushOneMsgReq> {
    *self
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, OnlineBatchPushOneMsgReq> where 'msg: 'shorter {
    self
  }
}

impl ::__pb::__internal::ProxiedWithRawVTable for OnlineBatchPushOneMsgReq {
  type VTable = ::__pb::__runtime::MessageVTable;

  fn make_view(_private: ::__pb::__internal::Private,
              mut_inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::View<'_, Self> {
    let msg = unsafe {
      (mut_inner.vtable().getter)(mut_inner.msg_ref().msg())
    };
    OnlineBatchPushOneMsgReqView::new(::__pb::__internal::Private, msg.unwrap_or_else(||::__pb::__runtime::ScratchSpace::zeroed_block(::__pb::__internal::Private)))
  }

  fn make_mut(_private: ::__pb::__internal::Private,
              inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::Mut<'_, Self> {
    let raw_submsg = unsafe {
      (inner.vtable().mut_getter)(inner.msg_ref().msg(), inner.msg_ref().arena(::__pb::__internal::Private).raw())
    };
    OnlineBatchPushOneMsgReqMut::from_parent(::__pb::__internal::Private, inner.msg_ref(), raw_submsg)
  }
}

impl ::__pb::__internal::ProxiedWithRawOptionalVTable for OnlineBatchPushOneMsgReq {
  type OptionalVTable = ::__pb::__runtime::MessageVTable;

  fn upcast_vtable(_private: ::__pb::__internal::Private,
                   optional_vtable: &'static Self::OptionalVTable)
                  -> &'static Self::VTable {
    &optional_vtable
  }
}

impl ::__pb::ProxiedWithPresence for OnlineBatchPushOneMsgReq {
  type PresentMutData<'a> = ::__pb::__runtime::MessagePresentMutData<'a, OnlineBatchPushOneMsgReq>;
  type AbsentMutData<'a> = ::__pb::__runtime::MessageAbsentMutData<'a, OnlineBatchPushOneMsgReq>;

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

impl<'msg> ::__pb::SettableValue<OnlineBatchPushOneMsgReq> for OnlineBatchPushOneMsgReqView<'msg> {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, OnlineBatchPushOneMsgReq>)
    where OnlineBatchPushOneMsgReq: 'dst {
    unsafe { ::__pb::__runtime::upb_Message_DeepCopy(
      mutator.inner.msg(),
      self.msg,
      ::__std::ptr::addr_of!(openim__ffi__OnlineBatchPushOneMsgReq_msg_init),
      mutator.inner.arena(::__pb::__internal::Private).raw(),
    ) };
  }
}

impl ::__pb::SettableValue<OnlineBatchPushOneMsgReq> for OnlineBatchPushOneMsgReq {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, OnlineBatchPushOneMsgReq>)
    where OnlineBatchPushOneMsgReq: 'dst {
    self.as_view().set_on(::__pb::__internal::Private, mutator);
  }
}

unsafe impl ::__pb::ProxiedInRepeated for OnlineBatchPushOneMsgReq {
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
    // - `v.raw_msg()` and `dest_msg` both have message minitable `openim__ffi__OnlineBatchPushOneMsgReq_msg_init`.
    unsafe {
      ::__pb::__runtime::upb_Message_DeepCopy(
        dest_msg,
        v.raw_msg(),
        ::__std::ptr::addr_of!(openim__ffi__OnlineBatchPushOneMsgReq_msg_init),
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
    // - `v.raw_msg()` is a valid `const upb_Message*` with minitable `openim__ffi__OnlineBatchPushOneMsgReq_msg_init`.
    let msg_ptr = unsafe {
      ::__pb::__runtime::upb_Message_DeepClone(
        v.raw_msg(),
        std::ptr::addr_of!(openim__ffi__OnlineBatchPushOneMsgReq_msg_init),
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
      // - Elements of `src` and `dest` have message minitable `openim__ffi__OnlineBatchPushOneMsgReq_msg_init`.
      unsafe {
        ::__pb::__runtime::repeated_message_copy_from(src, dest, ::__std::ptr::addr_of!(openim__ffi__OnlineBatchPushOneMsgReq_msg_init));
      }
  }
}
impl ::__pb::__runtime::UpbTypeConversions for OnlineBatchPushOneMsgReq {
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
          val.raw_msg(), ::__std::ptr::addr_of!(openim__ffi__OnlineBatchPushOneMsgReq_msg_init), arena)
          .expect("upb_Message_DeepClone failed.");
      Self::to_message_value(
          OnlineBatchPushOneMsgReqView::new(::__pb::__internal::Private, cloned_msg))
      }

    unsafe fn from_message_value<'msg>(msg: ::__pb::__runtime::upb_MessageValue)
        -> ::__pb::View<'msg, Self> {
        OnlineBatchPushOneMsgReqView::new(
            ::__pb::__internal::Private,
            unsafe { msg.msg_val }
                .expect("expected present message value in map"))
    }
}
impl ::__pb::ProxiedInMapValue<i32> for OnlineBatchPushOneMsgReq {
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
impl ::__pb::ProxiedInMapValue<u32> for OnlineBatchPushOneMsgReq {
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
impl ::__pb::ProxiedInMapValue<i64> for OnlineBatchPushOneMsgReq {
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
impl ::__pb::ProxiedInMapValue<u64> for OnlineBatchPushOneMsgReq {
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
impl ::__pb::ProxiedInMapValue<bool> for OnlineBatchPushOneMsgReq {
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
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for OnlineBatchPushOneMsgReq {
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
pub struct OnlineBatchPushOneMsgReqMut<'msg> {
  inner: ::__pb::__runtime::MutatorMessageRef<'msg>,
}

impl std::fmt::Debug for OnlineBatchPushOneMsgReqMut<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> OnlineBatchPushOneMsgReqMut<'msg> {
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

  // pushToUserIDs: repeated string
  pub fn pushToUserIDs(&self) -> ::__pb::RepeatedView<'_, ::__pb::ProtoStr> {
    unsafe {
      _openim_ffi_OnlineBatchPushOneMsgReq_pushToUserIDs_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<::__pb::ProtoStr>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }
  pub fn pushToUserIDs_mut(&mut self) -> ::__pb::RepeatedMut<'_, ::__pb::ProtoStr> {
    unsafe {
      ::__pb::RepeatedMut::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__runtime::InnerRepeatedMut::new(
          ::__pb::__internal::Private,
          _openim_ffi_OnlineBatchPushOneMsgReq_pushToUserIDs_mutable_upb_array(
            self.raw_msg(),
            /* optional size pointer */ std::ptr::null(),
            self.arena().raw(),
          ),
          self.arena(),
        ),
      )
    }
  }

}

// SAFETY:
// - `OnlineBatchPushOneMsgReqMut` does not perform any shared mutation.
// - `OnlineBatchPushOneMsgReqMut` is not `Send`, and so even in the presence of mutator
//   splitting, synchronous access of an arena is impossible.
unsafe impl Sync for OnlineBatchPushOneMsgReqMut<'_> {}

impl<'msg> ::__pb::MutProxy<'msg> for OnlineBatchPushOneMsgReqMut<'msg> {
  fn as_mut(&mut self) -> ::__pb::Mut<'_, OnlineBatchPushOneMsgReq> {
    OnlineBatchPushOneMsgReqMut { inner: self.inner }
  }
  fn into_mut<'shorter>(self) -> ::__pb::Mut<'shorter, OnlineBatchPushOneMsgReq> where 'msg : 'shorter { self }
}

impl<'msg> ::__pb::ViewProxy<'msg> for OnlineBatchPushOneMsgReqMut<'msg> {
  type Proxied = OnlineBatchPushOneMsgReq;
  fn as_view(&self) -> ::__pb::View<'_, OnlineBatchPushOneMsgReq> {
    OnlineBatchPushOneMsgReqView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, OnlineBatchPushOneMsgReq> where 'msg: 'shorter {
    OnlineBatchPushOneMsgReqView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
}

#[allow(dead_code)]
impl OnlineBatchPushOneMsgReq {
  pub fn new() -> Self {
    let arena = ::__pb::__runtime::Arena::new();
    Self {
      inner: ::__pb::__runtime::MessageInner {
        msg: unsafe { openim_ffi_OnlineBatchPushOneMsgReq_new(arena.raw()) },
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
    // SAFETY: openim__ffi__OnlineBatchPushOneMsgReq_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__OnlineBatchPushOneMsgReq_msg_init) };
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

  pub fn as_view(&self) -> OnlineBatchPushOneMsgReqView {
    OnlineBatchPushOneMsgReqView::new(::__pb::__internal::Private, self.inner.msg)
  }

  pub fn as_mut(&mut self) -> OnlineBatchPushOneMsgReqMut {
    OnlineBatchPushOneMsgReqMut::new(::__pb::__internal::Private, &mut self.inner)
  }

  // pushToUserIDs: repeated string
  pub fn pushToUserIDs(&self) -> ::__pb::RepeatedView<'_, ::__pb::ProtoStr> {
    unsafe {
      _openim_ffi_OnlineBatchPushOneMsgReq_pushToUserIDs_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<::__pb::ProtoStr>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }
  pub fn pushToUserIDs_mut(&mut self) -> ::__pb::RepeatedMut<'_, ::__pb::ProtoStr> {
    unsafe {
      ::__pb::RepeatedMut::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__runtime::InnerRepeatedMut::new(
          ::__pb::__internal::Private,
          _openim_ffi_OnlineBatchPushOneMsgReq_pushToUserIDs_mutable_upb_array(
            self.raw_msg(),
            /* optional size pointer */ std::ptr::null(),
            self.arena().raw(),
          ),
          self.arena(),
        ),
      )
    }
  }

}  // impl OnlineBatchPushOneMsgReq

impl ::__std::ops::Drop for OnlineBatchPushOneMsgReq {
  fn drop(&mut self) {
  }
}

extern "C" {
  fn openim_ffi_OnlineBatchPushOneMsgReq_new(arena: ::__pb::__runtime::RawArena) -> ::__pb::__runtime::RawMessage;
  /// Opaque wrapper for this message's MiniTable. The only valid way to
  /// reference this static is with `std::ptr::addr_of!(..)`.
  static openim__ffi__OnlineBatchPushOneMsgReq_msg_init: ::__pb::__runtime::upb_MiniTable;

  fn openim_ffi_OnlineBatchPushOneMsgReq_clear_pushToUserIDs(raw_msg: ::__pb::__runtime::RawMessage);
  fn _openim_ffi_OnlineBatchPushOneMsgReq_pushToUserIDs_mutable_upb_array(
    raw_msg: ::__pb::__runtime::RawMessage,
    size: *const usize,
    arena: ::__pb::__runtime::RawArena,
  ) -> ::__pb::__runtime::RawRepeatedField;
  //  Returns `None` when returned array pointer is NULL.
  fn _openim_ffi_OnlineBatchPushOneMsgReq_pushToUserIDs_upb_array(
    raw_msg: ::__pb::__runtime::RawMessage,
    size: *const usize,
  ) -> Option<::__pb::__runtime::RawRepeatedField>;


}  // extern "C" for OnlineBatchPushOneMsgReq


#[allow(non_camel_case_types)]
pub struct OnlineBatchPushOneMsgResp {
  inner: ::__pb::__runtime::MessageInner
}

impl std::fmt::Debug for OnlineBatchPushOneMsgResp {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

impl std::default::Default for OnlineBatchPushOneMsgResp {
  fn default() -> Self {
    Self::new()
  }
}

// SAFETY:
// - `OnlineBatchPushOneMsgResp` is `Sync` because it does not implement interior mutability.
//    Neither does `OnlineBatchPushOneMsgRespMut`.
unsafe impl Sync for OnlineBatchPushOneMsgResp {}

// SAFETY:
// - `OnlineBatchPushOneMsgResp` is `Send` because it uniquely owns its arena and does
//   not use thread-local data.
unsafe impl Send for OnlineBatchPushOneMsgResp {}

impl ::__pb::Proxied for OnlineBatchPushOneMsgResp {
  type View<'msg> = OnlineBatchPushOneMsgRespView<'msg>;
  type Mut<'msg> = OnlineBatchPushOneMsgRespMut<'msg>;
}

#[derive(Copy, Clone)]
#[allow(dead_code)]
pub struct OnlineBatchPushOneMsgRespView<'msg> {
  msg: ::__pb::__runtime::RawMessage,
  _phantom: ::__std::marker::PhantomData<&'msg ()>,
}

impl std::fmt::Debug for OnlineBatchPushOneMsgRespView<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> OnlineBatchPushOneMsgRespView<'msg> {
  #[doc(hidden)]
  pub fn new(_private: ::__pb::__internal::Private, msg: ::__pb::__runtime::RawMessage) -> Self {
    Self { msg, _phantom: ::__std::marker::PhantomData }
  }

  fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
    self.msg
  }

  pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
    let arena = ::__pb::__runtime::Arena::new();
    // SAFETY: openim__ffi__OnlineBatchPushOneMsgResp_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__OnlineBatchPushOneMsgResp_msg_init) };
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

  // singlePushResult: repeated message openim.ffi.SingleMsgToUserResults
  pub fn singlePushResult(self) -> ::__pb::RepeatedView<'msg, crate::SingleMsgToUserResults> {
    unsafe {
      _openim_ffi_OnlineBatchPushOneMsgResp_singlePushResult_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<crate::SingleMsgToUserResults>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }

}

// SAFETY:
// - `OnlineBatchPushOneMsgRespView` is `Sync` because it does not support mutation.
unsafe impl Sync for OnlineBatchPushOneMsgRespView<'_> {}

// SAFETY:
// - `OnlineBatchPushOneMsgRespView` is `Send` because while its alive a `OnlineBatchPushOneMsgRespMut` cannot.
// - `OnlineBatchPushOneMsgRespView` does not use thread-local data.
unsafe impl Send for OnlineBatchPushOneMsgRespView<'_> {}

impl<'msg> ::__pb::ViewProxy<'msg> for OnlineBatchPushOneMsgRespView<'msg> {
  type Proxied = OnlineBatchPushOneMsgResp;

  fn as_view(&self) -> ::__pb::View<'msg, OnlineBatchPushOneMsgResp> {
    *self
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, OnlineBatchPushOneMsgResp> where 'msg: 'shorter {
    self
  }
}

impl ::__pb::__internal::ProxiedWithRawVTable for OnlineBatchPushOneMsgResp {
  type VTable = ::__pb::__runtime::MessageVTable;

  fn make_view(_private: ::__pb::__internal::Private,
              mut_inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::View<'_, Self> {
    let msg = unsafe {
      (mut_inner.vtable().getter)(mut_inner.msg_ref().msg())
    };
    OnlineBatchPushOneMsgRespView::new(::__pb::__internal::Private, msg.unwrap_or_else(||::__pb::__runtime::ScratchSpace::zeroed_block(::__pb::__internal::Private)))
  }

  fn make_mut(_private: ::__pb::__internal::Private,
              inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::Mut<'_, Self> {
    let raw_submsg = unsafe {
      (inner.vtable().mut_getter)(inner.msg_ref().msg(), inner.msg_ref().arena(::__pb::__internal::Private).raw())
    };
    OnlineBatchPushOneMsgRespMut::from_parent(::__pb::__internal::Private, inner.msg_ref(), raw_submsg)
  }
}

impl ::__pb::__internal::ProxiedWithRawOptionalVTable for OnlineBatchPushOneMsgResp {
  type OptionalVTable = ::__pb::__runtime::MessageVTable;

  fn upcast_vtable(_private: ::__pb::__internal::Private,
                   optional_vtable: &'static Self::OptionalVTable)
                  -> &'static Self::VTable {
    &optional_vtable
  }
}

impl ::__pb::ProxiedWithPresence for OnlineBatchPushOneMsgResp {
  type PresentMutData<'a> = ::__pb::__runtime::MessagePresentMutData<'a, OnlineBatchPushOneMsgResp>;
  type AbsentMutData<'a> = ::__pb::__runtime::MessageAbsentMutData<'a, OnlineBatchPushOneMsgResp>;

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

impl<'msg> ::__pb::SettableValue<OnlineBatchPushOneMsgResp> for OnlineBatchPushOneMsgRespView<'msg> {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, OnlineBatchPushOneMsgResp>)
    where OnlineBatchPushOneMsgResp: 'dst {
    unsafe { ::__pb::__runtime::upb_Message_DeepCopy(
      mutator.inner.msg(),
      self.msg,
      ::__std::ptr::addr_of!(openim__ffi__OnlineBatchPushOneMsgResp_msg_init),
      mutator.inner.arena(::__pb::__internal::Private).raw(),
    ) };
  }
}

impl ::__pb::SettableValue<OnlineBatchPushOneMsgResp> for OnlineBatchPushOneMsgResp {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, OnlineBatchPushOneMsgResp>)
    where OnlineBatchPushOneMsgResp: 'dst {
    self.as_view().set_on(::__pb::__internal::Private, mutator);
  }
}

unsafe impl ::__pb::ProxiedInRepeated for OnlineBatchPushOneMsgResp {
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
    // - `v.raw_msg()` and `dest_msg` both have message minitable `openim__ffi__OnlineBatchPushOneMsgResp_msg_init`.
    unsafe {
      ::__pb::__runtime::upb_Message_DeepCopy(
        dest_msg,
        v.raw_msg(),
        ::__std::ptr::addr_of!(openim__ffi__OnlineBatchPushOneMsgResp_msg_init),
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
    // - `v.raw_msg()` is a valid `const upb_Message*` with minitable `openim__ffi__OnlineBatchPushOneMsgResp_msg_init`.
    let msg_ptr = unsafe {
      ::__pb::__runtime::upb_Message_DeepClone(
        v.raw_msg(),
        std::ptr::addr_of!(openim__ffi__OnlineBatchPushOneMsgResp_msg_init),
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
      // - Elements of `src` and `dest` have message minitable `openim__ffi__OnlineBatchPushOneMsgResp_msg_init`.
      unsafe {
        ::__pb::__runtime::repeated_message_copy_from(src, dest, ::__std::ptr::addr_of!(openim__ffi__OnlineBatchPushOneMsgResp_msg_init));
      }
  }
}
impl ::__pb::__runtime::UpbTypeConversions for OnlineBatchPushOneMsgResp {
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
          val.raw_msg(), ::__std::ptr::addr_of!(openim__ffi__OnlineBatchPushOneMsgResp_msg_init), arena)
          .expect("upb_Message_DeepClone failed.");
      Self::to_message_value(
          OnlineBatchPushOneMsgRespView::new(::__pb::__internal::Private, cloned_msg))
      }

    unsafe fn from_message_value<'msg>(msg: ::__pb::__runtime::upb_MessageValue)
        -> ::__pb::View<'msg, Self> {
        OnlineBatchPushOneMsgRespView::new(
            ::__pb::__internal::Private,
            unsafe { msg.msg_val }
                .expect("expected present message value in map"))
    }
}
impl ::__pb::ProxiedInMapValue<i32> for OnlineBatchPushOneMsgResp {
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
impl ::__pb::ProxiedInMapValue<u32> for OnlineBatchPushOneMsgResp {
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
impl ::__pb::ProxiedInMapValue<i64> for OnlineBatchPushOneMsgResp {
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
impl ::__pb::ProxiedInMapValue<u64> for OnlineBatchPushOneMsgResp {
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
impl ::__pb::ProxiedInMapValue<bool> for OnlineBatchPushOneMsgResp {
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
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for OnlineBatchPushOneMsgResp {
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
pub struct OnlineBatchPushOneMsgRespMut<'msg> {
  inner: ::__pb::__runtime::MutatorMessageRef<'msg>,
}

impl std::fmt::Debug for OnlineBatchPushOneMsgRespMut<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> OnlineBatchPushOneMsgRespMut<'msg> {
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

  // singlePushResult: repeated message openim.ffi.SingleMsgToUserResults
  pub fn singlePushResult(&self) -> ::__pb::RepeatedView<'_, crate::SingleMsgToUserResults> {
    unsafe {
      _openim_ffi_OnlineBatchPushOneMsgResp_singlePushResult_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<crate::SingleMsgToUserResults>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }
  pub fn singlePushResult_mut(&mut self) -> ::__pb::RepeatedMut<'_, crate::SingleMsgToUserResults> {
    unsafe {
      ::__pb::RepeatedMut::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__runtime::InnerRepeatedMut::new(
          ::__pb::__internal::Private,
          _openim_ffi_OnlineBatchPushOneMsgResp_singlePushResult_mutable_upb_array(
            self.raw_msg(),
            /* optional size pointer */ std::ptr::null(),
            self.arena().raw(),
          ),
          self.arena(),
        ),
      )
    }
  }

}

// SAFETY:
// - `OnlineBatchPushOneMsgRespMut` does not perform any shared mutation.
// - `OnlineBatchPushOneMsgRespMut` is not `Send`, and so even in the presence of mutator
//   splitting, synchronous access of an arena is impossible.
unsafe impl Sync for OnlineBatchPushOneMsgRespMut<'_> {}

impl<'msg> ::__pb::MutProxy<'msg> for OnlineBatchPushOneMsgRespMut<'msg> {
  fn as_mut(&mut self) -> ::__pb::Mut<'_, OnlineBatchPushOneMsgResp> {
    OnlineBatchPushOneMsgRespMut { inner: self.inner }
  }
  fn into_mut<'shorter>(self) -> ::__pb::Mut<'shorter, OnlineBatchPushOneMsgResp> where 'msg : 'shorter { self }
}

impl<'msg> ::__pb::ViewProxy<'msg> for OnlineBatchPushOneMsgRespMut<'msg> {
  type Proxied = OnlineBatchPushOneMsgResp;
  fn as_view(&self) -> ::__pb::View<'_, OnlineBatchPushOneMsgResp> {
    OnlineBatchPushOneMsgRespView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, OnlineBatchPushOneMsgResp> where 'msg: 'shorter {
    OnlineBatchPushOneMsgRespView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
}

#[allow(dead_code)]
impl OnlineBatchPushOneMsgResp {
  pub fn new() -> Self {
    let arena = ::__pb::__runtime::Arena::new();
    Self {
      inner: ::__pb::__runtime::MessageInner {
        msg: unsafe { openim_ffi_OnlineBatchPushOneMsgResp_new(arena.raw()) },
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
    // SAFETY: openim__ffi__OnlineBatchPushOneMsgResp_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__OnlineBatchPushOneMsgResp_msg_init) };
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

  pub fn as_view(&self) -> OnlineBatchPushOneMsgRespView {
    OnlineBatchPushOneMsgRespView::new(::__pb::__internal::Private, self.inner.msg)
  }

  pub fn as_mut(&mut self) -> OnlineBatchPushOneMsgRespMut {
    OnlineBatchPushOneMsgRespMut::new(::__pb::__internal::Private, &mut self.inner)
  }

  // singlePushResult: repeated message openim.ffi.SingleMsgToUserResults
  pub fn singlePushResult(&self) -> ::__pb::RepeatedView<'_, crate::SingleMsgToUserResults> {
    unsafe {
      _openim_ffi_OnlineBatchPushOneMsgResp_singlePushResult_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<crate::SingleMsgToUserResults>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }
  pub fn singlePushResult_mut(&mut self) -> ::__pb::RepeatedMut<'_, crate::SingleMsgToUserResults> {
    unsafe {
      ::__pb::RepeatedMut::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__runtime::InnerRepeatedMut::new(
          ::__pb::__internal::Private,
          _openim_ffi_OnlineBatchPushOneMsgResp_singlePushResult_mutable_upb_array(
            self.raw_msg(),
            /* optional size pointer */ std::ptr::null(),
            self.arena().raw(),
          ),
          self.arena(),
        ),
      )
    }
  }

}  // impl OnlineBatchPushOneMsgResp

impl ::__std::ops::Drop for OnlineBatchPushOneMsgResp {
  fn drop(&mut self) {
  }
}

extern "C" {
  fn openim_ffi_OnlineBatchPushOneMsgResp_new(arena: ::__pb::__runtime::RawArena) -> ::__pb::__runtime::RawMessage;
  /// Opaque wrapper for this message's MiniTable. The only valid way to
  /// reference this static is with `std::ptr::addr_of!(..)`.
  static openim__ffi__OnlineBatchPushOneMsgResp_msg_init: ::__pb::__runtime::upb_MiniTable;

  fn openim_ffi_OnlineBatchPushOneMsgResp_clear_singlePushResult(raw_msg: ::__pb::__runtime::RawMessage);
  fn _openim_ffi_OnlineBatchPushOneMsgResp_singlePushResult_mutable_upb_array(
    raw_msg: ::__pb::__runtime::RawMessage,
    size: *const usize,
    arena: ::__pb::__runtime::RawArena,
  ) -> ::__pb::__runtime::RawRepeatedField;
  //  Returns `None` when returned array pointer is NULL.
  fn _openim_ffi_OnlineBatchPushOneMsgResp_singlePushResult_upb_array(
    raw_msg: ::__pb::__runtime::RawMessage,
    size: *const usize,
  ) -> Option<::__pb::__runtime::RawRepeatedField>;


}  // extern "C" for OnlineBatchPushOneMsgResp


#[allow(non_camel_case_types)]
pub struct SingleMsgToUserPlatform {
  inner: ::__pb::__runtime::MessageInner
}

impl std::fmt::Debug for SingleMsgToUserPlatform {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

impl std::default::Default for SingleMsgToUserPlatform {
  fn default() -> Self {
    Self::new()
  }
}

// SAFETY:
// - `SingleMsgToUserPlatform` is `Sync` because it does not implement interior mutability.
//    Neither does `SingleMsgToUserPlatformMut`.
unsafe impl Sync for SingleMsgToUserPlatform {}

// SAFETY:
// - `SingleMsgToUserPlatform` is `Send` because it uniquely owns its arena and does
//   not use thread-local data.
unsafe impl Send for SingleMsgToUserPlatform {}

impl ::__pb::Proxied for SingleMsgToUserPlatform {
  type View<'msg> = SingleMsgToUserPlatformView<'msg>;
  type Mut<'msg> = SingleMsgToUserPlatformMut<'msg>;
}

#[derive(Copy, Clone)]
#[allow(dead_code)]
pub struct SingleMsgToUserPlatformView<'msg> {
  msg: ::__pb::__runtime::RawMessage,
  _phantom: ::__std::marker::PhantomData<&'msg ()>,
}

impl std::fmt::Debug for SingleMsgToUserPlatformView<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> SingleMsgToUserPlatformView<'msg> {
  #[doc(hidden)]
  pub fn new(_private: ::__pb::__internal::Private, msg: ::__pb::__runtime::RawMessage) -> Self {
    Self { msg, _phantom: ::__std::marker::PhantomData }
  }

  fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
    self.msg
  }

  pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
    let arena = ::__pb::__runtime::Arena::new();
    // SAFETY: openim__ffi__SingleMsgToUserPlatform_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__SingleMsgToUserPlatform_msg_init) };
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

  // ResultCode: optional int64
  pub fn ResultCode(self) -> i64 {
    unsafe { openim_ffi_SingleMsgToUserPlatform_ResultCode(self.raw_msg()) }
  }

  // RecvID: optional string
  pub fn RecvID(self) -> &'msg ::__pb::ProtoStr {
    let view = unsafe { openim_ffi_SingleMsgToUserPlatform_RecvID(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }

  // RecvPlatFormID: optional int32
  pub fn RecvPlatFormID(self) -> i32 {
    unsafe { openim_ffi_SingleMsgToUserPlatform_RecvPlatFormID(self.raw_msg()) }
  }

}

// SAFETY:
// - `SingleMsgToUserPlatformView` is `Sync` because it does not support mutation.
unsafe impl Sync for SingleMsgToUserPlatformView<'_> {}

// SAFETY:
// - `SingleMsgToUserPlatformView` is `Send` because while its alive a `SingleMsgToUserPlatformMut` cannot.
// - `SingleMsgToUserPlatformView` does not use thread-local data.
unsafe impl Send for SingleMsgToUserPlatformView<'_> {}

impl<'msg> ::__pb::ViewProxy<'msg> for SingleMsgToUserPlatformView<'msg> {
  type Proxied = SingleMsgToUserPlatform;

  fn as_view(&self) -> ::__pb::View<'msg, SingleMsgToUserPlatform> {
    *self
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, SingleMsgToUserPlatform> where 'msg: 'shorter {
    self
  }
}

impl ::__pb::__internal::ProxiedWithRawVTable for SingleMsgToUserPlatform {
  type VTable = ::__pb::__runtime::MessageVTable;

  fn make_view(_private: ::__pb::__internal::Private,
              mut_inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::View<'_, Self> {
    let msg = unsafe {
      (mut_inner.vtable().getter)(mut_inner.msg_ref().msg())
    };
    SingleMsgToUserPlatformView::new(::__pb::__internal::Private, msg.unwrap_or_else(||::__pb::__runtime::ScratchSpace::zeroed_block(::__pb::__internal::Private)))
  }

  fn make_mut(_private: ::__pb::__internal::Private,
              inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::Mut<'_, Self> {
    let raw_submsg = unsafe {
      (inner.vtable().mut_getter)(inner.msg_ref().msg(), inner.msg_ref().arena(::__pb::__internal::Private).raw())
    };
    SingleMsgToUserPlatformMut::from_parent(::__pb::__internal::Private, inner.msg_ref(), raw_submsg)
  }
}

impl ::__pb::__internal::ProxiedWithRawOptionalVTable for SingleMsgToUserPlatform {
  type OptionalVTable = ::__pb::__runtime::MessageVTable;

  fn upcast_vtable(_private: ::__pb::__internal::Private,
                   optional_vtable: &'static Self::OptionalVTable)
                  -> &'static Self::VTable {
    &optional_vtable
  }
}

impl ::__pb::ProxiedWithPresence for SingleMsgToUserPlatform {
  type PresentMutData<'a> = ::__pb::__runtime::MessagePresentMutData<'a, SingleMsgToUserPlatform>;
  type AbsentMutData<'a> = ::__pb::__runtime::MessageAbsentMutData<'a, SingleMsgToUserPlatform>;

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

impl<'msg> ::__pb::SettableValue<SingleMsgToUserPlatform> for SingleMsgToUserPlatformView<'msg> {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, SingleMsgToUserPlatform>)
    where SingleMsgToUserPlatform: 'dst {
    unsafe { ::__pb::__runtime::upb_Message_DeepCopy(
      mutator.inner.msg(),
      self.msg,
      ::__std::ptr::addr_of!(openim__ffi__SingleMsgToUserPlatform_msg_init),
      mutator.inner.arena(::__pb::__internal::Private).raw(),
    ) };
  }
}

impl ::__pb::SettableValue<SingleMsgToUserPlatform> for SingleMsgToUserPlatform {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, SingleMsgToUserPlatform>)
    where SingleMsgToUserPlatform: 'dst {
    self.as_view().set_on(::__pb::__internal::Private, mutator);
  }
}

unsafe impl ::__pb::ProxiedInRepeated for SingleMsgToUserPlatform {
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
    // - `v.raw_msg()` and `dest_msg` both have message minitable `openim__ffi__SingleMsgToUserPlatform_msg_init`.
    unsafe {
      ::__pb::__runtime::upb_Message_DeepCopy(
        dest_msg,
        v.raw_msg(),
        ::__std::ptr::addr_of!(openim__ffi__SingleMsgToUserPlatform_msg_init),
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
    // - `v.raw_msg()` is a valid `const upb_Message*` with minitable `openim__ffi__SingleMsgToUserPlatform_msg_init`.
    let msg_ptr = unsafe {
      ::__pb::__runtime::upb_Message_DeepClone(
        v.raw_msg(),
        std::ptr::addr_of!(openim__ffi__SingleMsgToUserPlatform_msg_init),
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
      // - Elements of `src` and `dest` have message minitable `openim__ffi__SingleMsgToUserPlatform_msg_init`.
      unsafe {
        ::__pb::__runtime::repeated_message_copy_from(src, dest, ::__std::ptr::addr_of!(openim__ffi__SingleMsgToUserPlatform_msg_init));
      }
  }
}
impl ::__pb::__runtime::UpbTypeConversions for SingleMsgToUserPlatform {
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
          val.raw_msg(), ::__std::ptr::addr_of!(openim__ffi__SingleMsgToUserPlatform_msg_init), arena)
          .expect("upb_Message_DeepClone failed.");
      Self::to_message_value(
          SingleMsgToUserPlatformView::new(::__pb::__internal::Private, cloned_msg))
      }

    unsafe fn from_message_value<'msg>(msg: ::__pb::__runtime::upb_MessageValue)
        -> ::__pb::View<'msg, Self> {
        SingleMsgToUserPlatformView::new(
            ::__pb::__internal::Private,
            unsafe { msg.msg_val }
                .expect("expected present message value in map"))
    }
}
impl ::__pb::ProxiedInMapValue<i32> for SingleMsgToUserPlatform {
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
impl ::__pb::ProxiedInMapValue<u32> for SingleMsgToUserPlatform {
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
impl ::__pb::ProxiedInMapValue<i64> for SingleMsgToUserPlatform {
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
impl ::__pb::ProxiedInMapValue<u64> for SingleMsgToUserPlatform {
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
impl ::__pb::ProxiedInMapValue<bool> for SingleMsgToUserPlatform {
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
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for SingleMsgToUserPlatform {
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
pub struct SingleMsgToUserPlatformMut<'msg> {
  inner: ::__pb::__runtime::MutatorMessageRef<'msg>,
}

impl std::fmt::Debug for SingleMsgToUserPlatformMut<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> SingleMsgToUserPlatformMut<'msg> {
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

  // ResultCode: optional int64
  pub fn ResultCode(&self) -> i64 {
    unsafe { openim_ffi_SingleMsgToUserPlatform_ResultCode(self.raw_msg()) }
  }
  pub fn set_ResultCode(&mut self, val: i64) {
    unsafe { openim_ffi_SingleMsgToUserPlatform_set_ResultCode(self.raw_msg(), val) }
  }

  // RecvID: optional string
  pub fn RecvID(&self) -> &'_ ::__pb::ProtoStr {
    let view = unsafe { openim_ffi_SingleMsgToUserPlatform_RecvID(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }
  pub fn set_RecvID(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
    self.RecvID_mut().set(val);
  }
  fn RecvID_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
    unsafe {
      <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__internal::RawVTableMutator::new(
          ::__pb::__internal::Private,
          self.as_mutator_message_ref(),
          SingleMsgToUserPlatform::__RECVID_VTABLE,
        )
      )
    }
  }

  // RecvPlatFormID: optional int32
  pub fn RecvPlatFormID(&self) -> i32 {
    unsafe { openim_ffi_SingleMsgToUserPlatform_RecvPlatFormID(self.raw_msg()) }
  }
  pub fn set_RecvPlatFormID(&mut self, val: i32) {
    unsafe { openim_ffi_SingleMsgToUserPlatform_set_RecvPlatFormID(self.raw_msg(), val) }
  }

}

// SAFETY:
// - `SingleMsgToUserPlatformMut` does not perform any shared mutation.
// - `SingleMsgToUserPlatformMut` is not `Send`, and so even in the presence of mutator
//   splitting, synchronous access of an arena is impossible.
unsafe impl Sync for SingleMsgToUserPlatformMut<'_> {}

impl<'msg> ::__pb::MutProxy<'msg> for SingleMsgToUserPlatformMut<'msg> {
  fn as_mut(&mut self) -> ::__pb::Mut<'_, SingleMsgToUserPlatform> {
    SingleMsgToUserPlatformMut { inner: self.inner }
  }
  fn into_mut<'shorter>(self) -> ::__pb::Mut<'shorter, SingleMsgToUserPlatform> where 'msg : 'shorter { self }
}

impl<'msg> ::__pb::ViewProxy<'msg> for SingleMsgToUserPlatformMut<'msg> {
  type Proxied = SingleMsgToUserPlatform;
  fn as_view(&self) -> ::__pb::View<'_, SingleMsgToUserPlatform> {
    SingleMsgToUserPlatformView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, SingleMsgToUserPlatform> where 'msg: 'shorter {
    SingleMsgToUserPlatformView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
}

#[allow(dead_code)]
impl SingleMsgToUserPlatform {
  pub fn new() -> Self {
    let arena = ::__pb::__runtime::Arena::new();
    Self {
      inner: ::__pb::__runtime::MessageInner {
        msg: unsafe { openim_ffi_SingleMsgToUserPlatform_new(arena.raw()) },
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
    // SAFETY: openim__ffi__SingleMsgToUserPlatform_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__SingleMsgToUserPlatform_msg_init) };
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

  pub fn as_view(&self) -> SingleMsgToUserPlatformView {
    SingleMsgToUserPlatformView::new(::__pb::__internal::Private, self.inner.msg)
  }

  pub fn as_mut(&mut self) -> SingleMsgToUserPlatformMut {
    SingleMsgToUserPlatformMut::new(::__pb::__internal::Private, &mut self.inner)
  }

  // ResultCode: optional int64
  pub fn ResultCode(&self) -> i64 {
    unsafe { openim_ffi_SingleMsgToUserPlatform_ResultCode(self.raw_msg()) }
  }
  pub fn set_ResultCode(&mut self, val: i64) {
    unsafe { openim_ffi_SingleMsgToUserPlatform_set_ResultCode(self.raw_msg(), val) }
  }

  // RecvID: optional string
  pub fn RecvID(&self) -> &'_ ::__pb::ProtoStr {
    let view = unsafe { openim_ffi_SingleMsgToUserPlatform_RecvID(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }
  pub fn set_RecvID(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
    self.RecvID_mut().set(val);
  }
  const __RECVID_VTABLE: &'static ::__pb::__internal::BytesMutVTable =
    &::__pb::__internal::BytesMutVTable::new(
      ::__pb::__internal::Private,
      openim_ffi_SingleMsgToUserPlatform_RecvID,
      openim_ffi_SingleMsgToUserPlatform_set_RecvID,
    );
  fn RecvID_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
    unsafe {
      <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__internal::RawVTableMutator::new(
          ::__pb::__internal::Private,
          self.as_mutator_message_ref(),
          SingleMsgToUserPlatform::__RECVID_VTABLE,
        )
      )
    }
  }

  // RecvPlatFormID: optional int32
  pub fn RecvPlatFormID(&self) -> i32 {
    unsafe { openim_ffi_SingleMsgToUserPlatform_RecvPlatFormID(self.raw_msg()) }
  }
  pub fn set_RecvPlatFormID(&mut self, val: i32) {
    unsafe { openim_ffi_SingleMsgToUserPlatform_set_RecvPlatFormID(self.raw_msg(), val) }
  }

}  // impl SingleMsgToUserPlatform

impl ::__std::ops::Drop for SingleMsgToUserPlatform {
  fn drop(&mut self) {
  }
}

extern "C" {
  fn openim_ffi_SingleMsgToUserPlatform_new(arena: ::__pb::__runtime::RawArena) -> ::__pb::__runtime::RawMessage;
  /// Opaque wrapper for this message's MiniTable. The only valid way to
  /// reference this static is with `std::ptr::addr_of!(..)`.
  static openim__ffi__SingleMsgToUserPlatform_msg_init: ::__pb::__runtime::upb_MiniTable;

  fn openim_ffi_SingleMsgToUserPlatform_ResultCode(raw_msg: ::__pb::__runtime::RawMessage) -> i64;
  fn openim_ffi_SingleMsgToUserPlatform_set_ResultCode(raw_msg: ::__pb::__runtime::RawMessage, val: i64);

  fn openim_ffi_SingleMsgToUserPlatform_RecvID(raw_msg: ::__pb::__runtime::RawMessage) -> ::__pb::__runtime::PtrAndLen;
  fn openim_ffi_SingleMsgToUserPlatform_set_RecvID(raw_msg: ::__pb::__runtime::RawMessage, val: ::__pb::__runtime::PtrAndLen);

  fn openim_ffi_SingleMsgToUserPlatform_RecvPlatFormID(raw_msg: ::__pb::__runtime::RawMessage) -> i32;
  fn openim_ffi_SingleMsgToUserPlatform_set_RecvPlatFormID(raw_msg: ::__pb::__runtime::RawMessage, val: i32);


}  // extern "C" for SingleMsgToUserPlatform


#[allow(non_camel_case_types)]
pub struct GetUsersOnlineStatusReq {
  inner: ::__pb::__runtime::MessageInner
}

impl std::fmt::Debug for GetUsersOnlineStatusReq {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

impl std::default::Default for GetUsersOnlineStatusReq {
  fn default() -> Self {
    Self::new()
  }
}

// SAFETY:
// - `GetUsersOnlineStatusReq` is `Sync` because it does not implement interior mutability.
//    Neither does `GetUsersOnlineStatusReqMut`.
unsafe impl Sync for GetUsersOnlineStatusReq {}

// SAFETY:
// - `GetUsersOnlineStatusReq` is `Send` because it uniquely owns its arena and does
//   not use thread-local data.
unsafe impl Send for GetUsersOnlineStatusReq {}

impl ::__pb::Proxied for GetUsersOnlineStatusReq {
  type View<'msg> = GetUsersOnlineStatusReqView<'msg>;
  type Mut<'msg> = GetUsersOnlineStatusReqMut<'msg>;
}

#[derive(Copy, Clone)]
#[allow(dead_code)]
pub struct GetUsersOnlineStatusReqView<'msg> {
  msg: ::__pb::__runtime::RawMessage,
  _phantom: ::__std::marker::PhantomData<&'msg ()>,
}

impl std::fmt::Debug for GetUsersOnlineStatusReqView<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> GetUsersOnlineStatusReqView<'msg> {
  #[doc(hidden)]
  pub fn new(_private: ::__pb::__internal::Private, msg: ::__pb::__runtime::RawMessage) -> Self {
    Self { msg, _phantom: ::__std::marker::PhantomData }
  }

  fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
    self.msg
  }

  pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
    let arena = ::__pb::__runtime::Arena::new();
    // SAFETY: openim__ffi__GetUsersOnlineStatusReq_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusReq_msg_init) };
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

  // userIDs: repeated string
  pub fn userIDs(self) -> ::__pb::RepeatedView<'msg, ::__pb::ProtoStr> {
    unsafe {
      _openim_ffi_GetUsersOnlineStatusReq_userIDs_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<::__pb::ProtoStr>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }

}

// SAFETY:
// - `GetUsersOnlineStatusReqView` is `Sync` because it does not support mutation.
unsafe impl Sync for GetUsersOnlineStatusReqView<'_> {}

// SAFETY:
// - `GetUsersOnlineStatusReqView` is `Send` because while its alive a `GetUsersOnlineStatusReqMut` cannot.
// - `GetUsersOnlineStatusReqView` does not use thread-local data.
unsafe impl Send for GetUsersOnlineStatusReqView<'_> {}

impl<'msg> ::__pb::ViewProxy<'msg> for GetUsersOnlineStatusReqView<'msg> {
  type Proxied = GetUsersOnlineStatusReq;

  fn as_view(&self) -> ::__pb::View<'msg, GetUsersOnlineStatusReq> {
    *self
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, GetUsersOnlineStatusReq> where 'msg: 'shorter {
    self
  }
}

impl ::__pb::__internal::ProxiedWithRawVTable for GetUsersOnlineStatusReq {
  type VTable = ::__pb::__runtime::MessageVTable;

  fn make_view(_private: ::__pb::__internal::Private,
              mut_inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::View<'_, Self> {
    let msg = unsafe {
      (mut_inner.vtable().getter)(mut_inner.msg_ref().msg())
    };
    GetUsersOnlineStatusReqView::new(::__pb::__internal::Private, msg.unwrap_or_else(||::__pb::__runtime::ScratchSpace::zeroed_block(::__pb::__internal::Private)))
  }

  fn make_mut(_private: ::__pb::__internal::Private,
              inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::Mut<'_, Self> {
    let raw_submsg = unsafe {
      (inner.vtable().mut_getter)(inner.msg_ref().msg(), inner.msg_ref().arena(::__pb::__internal::Private).raw())
    };
    GetUsersOnlineStatusReqMut::from_parent(::__pb::__internal::Private, inner.msg_ref(), raw_submsg)
  }
}

impl ::__pb::__internal::ProxiedWithRawOptionalVTable for GetUsersOnlineStatusReq {
  type OptionalVTable = ::__pb::__runtime::MessageVTable;

  fn upcast_vtable(_private: ::__pb::__internal::Private,
                   optional_vtable: &'static Self::OptionalVTable)
                  -> &'static Self::VTable {
    &optional_vtable
  }
}

impl ::__pb::ProxiedWithPresence for GetUsersOnlineStatusReq {
  type PresentMutData<'a> = ::__pb::__runtime::MessagePresentMutData<'a, GetUsersOnlineStatusReq>;
  type AbsentMutData<'a> = ::__pb::__runtime::MessageAbsentMutData<'a, GetUsersOnlineStatusReq>;

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

impl<'msg> ::__pb::SettableValue<GetUsersOnlineStatusReq> for GetUsersOnlineStatusReqView<'msg> {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, GetUsersOnlineStatusReq>)
    where GetUsersOnlineStatusReq: 'dst {
    unsafe { ::__pb::__runtime::upb_Message_DeepCopy(
      mutator.inner.msg(),
      self.msg,
      ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusReq_msg_init),
      mutator.inner.arena(::__pb::__internal::Private).raw(),
    ) };
  }
}

impl ::__pb::SettableValue<GetUsersOnlineStatusReq> for GetUsersOnlineStatusReq {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, GetUsersOnlineStatusReq>)
    where GetUsersOnlineStatusReq: 'dst {
    self.as_view().set_on(::__pb::__internal::Private, mutator);
  }
}

unsafe impl ::__pb::ProxiedInRepeated for GetUsersOnlineStatusReq {
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
    // - `v.raw_msg()` and `dest_msg` both have message minitable `openim__ffi__GetUsersOnlineStatusReq_msg_init`.
    unsafe {
      ::__pb::__runtime::upb_Message_DeepCopy(
        dest_msg,
        v.raw_msg(),
        ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusReq_msg_init),
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
    // - `v.raw_msg()` is a valid `const upb_Message*` with minitable `openim__ffi__GetUsersOnlineStatusReq_msg_init`.
    let msg_ptr = unsafe {
      ::__pb::__runtime::upb_Message_DeepClone(
        v.raw_msg(),
        std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusReq_msg_init),
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
      // - Elements of `src` and `dest` have message minitable `openim__ffi__GetUsersOnlineStatusReq_msg_init`.
      unsafe {
        ::__pb::__runtime::repeated_message_copy_from(src, dest, ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusReq_msg_init));
      }
  }
}
impl ::__pb::__runtime::UpbTypeConversions for GetUsersOnlineStatusReq {
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
          val.raw_msg(), ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusReq_msg_init), arena)
          .expect("upb_Message_DeepClone failed.");
      Self::to_message_value(
          GetUsersOnlineStatusReqView::new(::__pb::__internal::Private, cloned_msg))
      }

    unsafe fn from_message_value<'msg>(msg: ::__pb::__runtime::upb_MessageValue)
        -> ::__pb::View<'msg, Self> {
        GetUsersOnlineStatusReqView::new(
            ::__pb::__internal::Private,
            unsafe { msg.msg_val }
                .expect("expected present message value in map"))
    }
}
impl ::__pb::ProxiedInMapValue<i32> for GetUsersOnlineStatusReq {
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
impl ::__pb::ProxiedInMapValue<u32> for GetUsersOnlineStatusReq {
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
impl ::__pb::ProxiedInMapValue<i64> for GetUsersOnlineStatusReq {
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
impl ::__pb::ProxiedInMapValue<u64> for GetUsersOnlineStatusReq {
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
impl ::__pb::ProxiedInMapValue<bool> for GetUsersOnlineStatusReq {
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
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for GetUsersOnlineStatusReq {
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
pub struct GetUsersOnlineStatusReqMut<'msg> {
  inner: ::__pb::__runtime::MutatorMessageRef<'msg>,
}

impl std::fmt::Debug for GetUsersOnlineStatusReqMut<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> GetUsersOnlineStatusReqMut<'msg> {
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

  // userIDs: repeated string
  pub fn userIDs(&self) -> ::__pb::RepeatedView<'_, ::__pb::ProtoStr> {
    unsafe {
      _openim_ffi_GetUsersOnlineStatusReq_userIDs_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<::__pb::ProtoStr>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }
  pub fn userIDs_mut(&mut self) -> ::__pb::RepeatedMut<'_, ::__pb::ProtoStr> {
    unsafe {
      ::__pb::RepeatedMut::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__runtime::InnerRepeatedMut::new(
          ::__pb::__internal::Private,
          _openim_ffi_GetUsersOnlineStatusReq_userIDs_mutable_upb_array(
            self.raw_msg(),
            /* optional size pointer */ std::ptr::null(),
            self.arena().raw(),
          ),
          self.arena(),
        ),
      )
    }
  }

}

// SAFETY:
// - `GetUsersOnlineStatusReqMut` does not perform any shared mutation.
// - `GetUsersOnlineStatusReqMut` is not `Send`, and so even in the presence of mutator
//   splitting, synchronous access of an arena is impossible.
unsafe impl Sync for GetUsersOnlineStatusReqMut<'_> {}

impl<'msg> ::__pb::MutProxy<'msg> for GetUsersOnlineStatusReqMut<'msg> {
  fn as_mut(&mut self) -> ::__pb::Mut<'_, GetUsersOnlineStatusReq> {
    GetUsersOnlineStatusReqMut { inner: self.inner }
  }
  fn into_mut<'shorter>(self) -> ::__pb::Mut<'shorter, GetUsersOnlineStatusReq> where 'msg : 'shorter { self }
}

impl<'msg> ::__pb::ViewProxy<'msg> for GetUsersOnlineStatusReqMut<'msg> {
  type Proxied = GetUsersOnlineStatusReq;
  fn as_view(&self) -> ::__pb::View<'_, GetUsersOnlineStatusReq> {
    GetUsersOnlineStatusReqView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, GetUsersOnlineStatusReq> where 'msg: 'shorter {
    GetUsersOnlineStatusReqView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
}

#[allow(dead_code)]
impl GetUsersOnlineStatusReq {
  pub fn new() -> Self {
    let arena = ::__pb::__runtime::Arena::new();
    Self {
      inner: ::__pb::__runtime::MessageInner {
        msg: unsafe { openim_ffi_GetUsersOnlineStatusReq_new(arena.raw()) },
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
    // SAFETY: openim__ffi__GetUsersOnlineStatusReq_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusReq_msg_init) };
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

  pub fn as_view(&self) -> GetUsersOnlineStatusReqView {
    GetUsersOnlineStatusReqView::new(::__pb::__internal::Private, self.inner.msg)
  }

  pub fn as_mut(&mut self) -> GetUsersOnlineStatusReqMut {
    GetUsersOnlineStatusReqMut::new(::__pb::__internal::Private, &mut self.inner)
  }

  // userIDs: repeated string
  pub fn userIDs(&self) -> ::__pb::RepeatedView<'_, ::__pb::ProtoStr> {
    unsafe {
      _openim_ffi_GetUsersOnlineStatusReq_userIDs_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<::__pb::ProtoStr>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }
  pub fn userIDs_mut(&mut self) -> ::__pb::RepeatedMut<'_, ::__pb::ProtoStr> {
    unsafe {
      ::__pb::RepeatedMut::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__runtime::InnerRepeatedMut::new(
          ::__pb::__internal::Private,
          _openim_ffi_GetUsersOnlineStatusReq_userIDs_mutable_upb_array(
            self.raw_msg(),
            /* optional size pointer */ std::ptr::null(),
            self.arena().raw(),
          ),
          self.arena(),
        ),
      )
    }
  }

}  // impl GetUsersOnlineStatusReq

impl ::__std::ops::Drop for GetUsersOnlineStatusReq {
  fn drop(&mut self) {
  }
}

extern "C" {
  fn openim_ffi_GetUsersOnlineStatusReq_new(arena: ::__pb::__runtime::RawArena) -> ::__pb::__runtime::RawMessage;
  /// Opaque wrapper for this message's MiniTable. The only valid way to
  /// reference this static is with `std::ptr::addr_of!(..)`.
  static openim__ffi__GetUsersOnlineStatusReq_msg_init: ::__pb::__runtime::upb_MiniTable;

  fn openim_ffi_GetUsersOnlineStatusReq_clear_userIDs(raw_msg: ::__pb::__runtime::RawMessage);
  fn _openim_ffi_GetUsersOnlineStatusReq_userIDs_mutable_upb_array(
    raw_msg: ::__pb::__runtime::RawMessage,
    size: *const usize,
    arena: ::__pb::__runtime::RawArena,
  ) -> ::__pb::__runtime::RawRepeatedField;
  //  Returns `None` when returned array pointer is NULL.
  fn _openim_ffi_GetUsersOnlineStatusReq_userIDs_upb_array(
    raw_msg: ::__pb::__runtime::RawMessage,
    size: *const usize,
  ) -> Option<::__pb::__runtime::RawRepeatedField>;


}  // extern "C" for GetUsersOnlineStatusReq


#[allow(non_camel_case_types)]
pub struct GetUsersOnlineStatusResp {
  inner: ::__pb::__runtime::MessageInner
}

impl std::fmt::Debug for GetUsersOnlineStatusResp {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

impl std::default::Default for GetUsersOnlineStatusResp {
  fn default() -> Self {
    Self::new()
  }
}

// SAFETY:
// - `GetUsersOnlineStatusResp` is `Sync` because it does not implement interior mutability.
//    Neither does `GetUsersOnlineStatusRespMut`.
unsafe impl Sync for GetUsersOnlineStatusResp {}

// SAFETY:
// - `GetUsersOnlineStatusResp` is `Send` because it uniquely owns its arena and does
//   not use thread-local data.
unsafe impl Send for GetUsersOnlineStatusResp {}

impl ::__pb::Proxied for GetUsersOnlineStatusResp {
  type View<'msg> = GetUsersOnlineStatusRespView<'msg>;
  type Mut<'msg> = GetUsersOnlineStatusRespMut<'msg>;
}

#[derive(Copy, Clone)]
#[allow(dead_code)]
pub struct GetUsersOnlineStatusRespView<'msg> {
  msg: ::__pb::__runtime::RawMessage,
  _phantom: ::__std::marker::PhantomData<&'msg ()>,
}

impl std::fmt::Debug for GetUsersOnlineStatusRespView<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> GetUsersOnlineStatusRespView<'msg> {
  #[doc(hidden)]
  pub fn new(_private: ::__pb::__internal::Private, msg: ::__pb::__runtime::RawMessage) -> Self {
    Self { msg, _phantom: ::__std::marker::PhantomData }
  }

  fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
    self.msg
  }

  pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
    let arena = ::__pb::__runtime::Arena::new();
    // SAFETY: openim__ffi__GetUsersOnlineStatusResp_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp_msg_init) };
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

  // successResult: repeated message openim.ffi.GetUsersOnlineStatusResp.SuccessResult
  pub fn successResult(self) -> ::__pb::RepeatedView<'msg, crate::get_users_online_status_resp::SuccessResult> {
    unsafe {
      _openim_ffi_GetUsersOnlineStatusResp_successResult_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<crate::get_users_online_status_resp::SuccessResult>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }

  // failedResult: repeated message openim.ffi.GetUsersOnlineStatusResp.FailedDetail
  pub fn failedResult(self) -> ::__pb::RepeatedView<'msg, crate::get_users_online_status_resp::FailedDetail> {
    unsafe {
      _openim_ffi_GetUsersOnlineStatusResp_failedResult_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<crate::get_users_online_status_resp::FailedDetail>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }

}

// SAFETY:
// - `GetUsersOnlineStatusRespView` is `Sync` because it does not support mutation.
unsafe impl Sync for GetUsersOnlineStatusRespView<'_> {}

// SAFETY:
// - `GetUsersOnlineStatusRespView` is `Send` because while its alive a `GetUsersOnlineStatusRespMut` cannot.
// - `GetUsersOnlineStatusRespView` does not use thread-local data.
unsafe impl Send for GetUsersOnlineStatusRespView<'_> {}

impl<'msg> ::__pb::ViewProxy<'msg> for GetUsersOnlineStatusRespView<'msg> {
  type Proxied = GetUsersOnlineStatusResp;

  fn as_view(&self) -> ::__pb::View<'msg, GetUsersOnlineStatusResp> {
    *self
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, GetUsersOnlineStatusResp> where 'msg: 'shorter {
    self
  }
}

impl ::__pb::__internal::ProxiedWithRawVTable for GetUsersOnlineStatusResp {
  type VTable = ::__pb::__runtime::MessageVTable;

  fn make_view(_private: ::__pb::__internal::Private,
              mut_inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::View<'_, Self> {
    let msg = unsafe {
      (mut_inner.vtable().getter)(mut_inner.msg_ref().msg())
    };
    GetUsersOnlineStatusRespView::new(::__pb::__internal::Private, msg.unwrap_or_else(||::__pb::__runtime::ScratchSpace::zeroed_block(::__pb::__internal::Private)))
  }

  fn make_mut(_private: ::__pb::__internal::Private,
              inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::Mut<'_, Self> {
    let raw_submsg = unsafe {
      (inner.vtable().mut_getter)(inner.msg_ref().msg(), inner.msg_ref().arena(::__pb::__internal::Private).raw())
    };
    GetUsersOnlineStatusRespMut::from_parent(::__pb::__internal::Private, inner.msg_ref(), raw_submsg)
  }
}

impl ::__pb::__internal::ProxiedWithRawOptionalVTable for GetUsersOnlineStatusResp {
  type OptionalVTable = ::__pb::__runtime::MessageVTable;

  fn upcast_vtable(_private: ::__pb::__internal::Private,
                   optional_vtable: &'static Self::OptionalVTable)
                  -> &'static Self::VTable {
    &optional_vtable
  }
}

impl ::__pb::ProxiedWithPresence for GetUsersOnlineStatusResp {
  type PresentMutData<'a> = ::__pb::__runtime::MessagePresentMutData<'a, GetUsersOnlineStatusResp>;
  type AbsentMutData<'a> = ::__pb::__runtime::MessageAbsentMutData<'a, GetUsersOnlineStatusResp>;

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

impl<'msg> ::__pb::SettableValue<GetUsersOnlineStatusResp> for GetUsersOnlineStatusRespView<'msg> {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, GetUsersOnlineStatusResp>)
    where GetUsersOnlineStatusResp: 'dst {
    unsafe { ::__pb::__runtime::upb_Message_DeepCopy(
      mutator.inner.msg(),
      self.msg,
      ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp_msg_init),
      mutator.inner.arena(::__pb::__internal::Private).raw(),
    ) };
  }
}

impl ::__pb::SettableValue<GetUsersOnlineStatusResp> for GetUsersOnlineStatusResp {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, GetUsersOnlineStatusResp>)
    where GetUsersOnlineStatusResp: 'dst {
    self.as_view().set_on(::__pb::__internal::Private, mutator);
  }
}

unsafe impl ::__pb::ProxiedInRepeated for GetUsersOnlineStatusResp {
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
    // - `v.raw_msg()` and `dest_msg` both have message minitable `openim__ffi__GetUsersOnlineStatusResp_msg_init`.
    unsafe {
      ::__pb::__runtime::upb_Message_DeepCopy(
        dest_msg,
        v.raw_msg(),
        ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp_msg_init),
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
    // - `v.raw_msg()` is a valid `const upb_Message*` with minitable `openim__ffi__GetUsersOnlineStatusResp_msg_init`.
    let msg_ptr = unsafe {
      ::__pb::__runtime::upb_Message_DeepClone(
        v.raw_msg(),
        std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp_msg_init),
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
      // - Elements of `src` and `dest` have message minitable `openim__ffi__GetUsersOnlineStatusResp_msg_init`.
      unsafe {
        ::__pb::__runtime::repeated_message_copy_from(src, dest, ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp_msg_init));
      }
  }
}
impl ::__pb::__runtime::UpbTypeConversions for GetUsersOnlineStatusResp {
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
          val.raw_msg(), ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp_msg_init), arena)
          .expect("upb_Message_DeepClone failed.");
      Self::to_message_value(
          GetUsersOnlineStatusRespView::new(::__pb::__internal::Private, cloned_msg))
      }

    unsafe fn from_message_value<'msg>(msg: ::__pb::__runtime::upb_MessageValue)
        -> ::__pb::View<'msg, Self> {
        GetUsersOnlineStatusRespView::new(
            ::__pb::__internal::Private,
            unsafe { msg.msg_val }
                .expect("expected present message value in map"))
    }
}
impl ::__pb::ProxiedInMapValue<i32> for GetUsersOnlineStatusResp {
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
impl ::__pb::ProxiedInMapValue<u32> for GetUsersOnlineStatusResp {
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
impl ::__pb::ProxiedInMapValue<i64> for GetUsersOnlineStatusResp {
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
impl ::__pb::ProxiedInMapValue<u64> for GetUsersOnlineStatusResp {
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
impl ::__pb::ProxiedInMapValue<bool> for GetUsersOnlineStatusResp {
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
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for GetUsersOnlineStatusResp {
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
pub struct GetUsersOnlineStatusRespMut<'msg> {
  inner: ::__pb::__runtime::MutatorMessageRef<'msg>,
}

impl std::fmt::Debug for GetUsersOnlineStatusRespMut<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> GetUsersOnlineStatusRespMut<'msg> {
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

  // successResult: repeated message openim.ffi.GetUsersOnlineStatusResp.SuccessResult
  pub fn successResult(&self) -> ::__pb::RepeatedView<'_, crate::get_users_online_status_resp::SuccessResult> {
    unsafe {
      _openim_ffi_GetUsersOnlineStatusResp_successResult_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<crate::get_users_online_status_resp::SuccessResult>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }
  pub fn successResult_mut(&mut self) -> ::__pb::RepeatedMut<'_, crate::get_users_online_status_resp::SuccessResult> {
    unsafe {
      ::__pb::RepeatedMut::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__runtime::InnerRepeatedMut::new(
          ::__pb::__internal::Private,
          _openim_ffi_GetUsersOnlineStatusResp_successResult_mutable_upb_array(
            self.raw_msg(),
            /* optional size pointer */ std::ptr::null(),
            self.arena().raw(),
          ),
          self.arena(),
        ),
      )
    }
  }

  // failedResult: repeated message openim.ffi.GetUsersOnlineStatusResp.FailedDetail
  pub fn failedResult(&self) -> ::__pb::RepeatedView<'_, crate::get_users_online_status_resp::FailedDetail> {
    unsafe {
      _openim_ffi_GetUsersOnlineStatusResp_failedResult_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<crate::get_users_online_status_resp::FailedDetail>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }
  pub fn failedResult_mut(&mut self) -> ::__pb::RepeatedMut<'_, crate::get_users_online_status_resp::FailedDetail> {
    unsafe {
      ::__pb::RepeatedMut::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__runtime::InnerRepeatedMut::new(
          ::__pb::__internal::Private,
          _openim_ffi_GetUsersOnlineStatusResp_failedResult_mutable_upb_array(
            self.raw_msg(),
            /* optional size pointer */ std::ptr::null(),
            self.arena().raw(),
          ),
          self.arena(),
        ),
      )
    }
  }

}

// SAFETY:
// - `GetUsersOnlineStatusRespMut` does not perform any shared mutation.
// - `GetUsersOnlineStatusRespMut` is not `Send`, and so even in the presence of mutator
//   splitting, synchronous access of an arena is impossible.
unsafe impl Sync for GetUsersOnlineStatusRespMut<'_> {}

impl<'msg> ::__pb::MutProxy<'msg> for GetUsersOnlineStatusRespMut<'msg> {
  fn as_mut(&mut self) -> ::__pb::Mut<'_, GetUsersOnlineStatusResp> {
    GetUsersOnlineStatusRespMut { inner: self.inner }
  }
  fn into_mut<'shorter>(self) -> ::__pb::Mut<'shorter, GetUsersOnlineStatusResp> where 'msg : 'shorter { self }
}

impl<'msg> ::__pb::ViewProxy<'msg> for GetUsersOnlineStatusRespMut<'msg> {
  type Proxied = GetUsersOnlineStatusResp;
  fn as_view(&self) -> ::__pb::View<'_, GetUsersOnlineStatusResp> {
    GetUsersOnlineStatusRespView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, GetUsersOnlineStatusResp> where 'msg: 'shorter {
    GetUsersOnlineStatusRespView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
}

#[allow(dead_code)]
impl GetUsersOnlineStatusResp {
  pub fn new() -> Self {
    let arena = ::__pb::__runtime::Arena::new();
    Self {
      inner: ::__pb::__runtime::MessageInner {
        msg: unsafe { openim_ffi_GetUsersOnlineStatusResp_new(arena.raw()) },
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
    // SAFETY: openim__ffi__GetUsersOnlineStatusResp_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp_msg_init) };
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

  pub fn as_view(&self) -> GetUsersOnlineStatusRespView {
    GetUsersOnlineStatusRespView::new(::__pb::__internal::Private, self.inner.msg)
  }

  pub fn as_mut(&mut self) -> GetUsersOnlineStatusRespMut {
    GetUsersOnlineStatusRespMut::new(::__pb::__internal::Private, &mut self.inner)
  }

  // successResult: repeated message openim.ffi.GetUsersOnlineStatusResp.SuccessResult
  pub fn successResult(&self) -> ::__pb::RepeatedView<'_, crate::get_users_online_status_resp::SuccessResult> {
    unsafe {
      _openim_ffi_GetUsersOnlineStatusResp_successResult_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<crate::get_users_online_status_resp::SuccessResult>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }
  pub fn successResult_mut(&mut self) -> ::__pb::RepeatedMut<'_, crate::get_users_online_status_resp::SuccessResult> {
    unsafe {
      ::__pb::RepeatedMut::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__runtime::InnerRepeatedMut::new(
          ::__pb::__internal::Private,
          _openim_ffi_GetUsersOnlineStatusResp_successResult_mutable_upb_array(
            self.raw_msg(),
            /* optional size pointer */ std::ptr::null(),
            self.arena().raw(),
          ),
          self.arena(),
        ),
      )
    }
  }

  // failedResult: repeated message openim.ffi.GetUsersOnlineStatusResp.FailedDetail
  pub fn failedResult(&self) -> ::__pb::RepeatedView<'_, crate::get_users_online_status_resp::FailedDetail> {
    unsafe {
      _openim_ffi_GetUsersOnlineStatusResp_failedResult_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<crate::get_users_online_status_resp::FailedDetail>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }
  pub fn failedResult_mut(&mut self) -> ::__pb::RepeatedMut<'_, crate::get_users_online_status_resp::FailedDetail> {
    unsafe {
      ::__pb::RepeatedMut::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__runtime::InnerRepeatedMut::new(
          ::__pb::__internal::Private,
          _openim_ffi_GetUsersOnlineStatusResp_failedResult_mutable_upb_array(
            self.raw_msg(),
            /* optional size pointer */ std::ptr::null(),
            self.arena().raw(),
          ),
          self.arena(),
        ),
      )
    }
  }

}  // impl GetUsersOnlineStatusResp

impl ::__std::ops::Drop for GetUsersOnlineStatusResp {
  fn drop(&mut self) {
  }
}

extern "C" {
  fn openim_ffi_GetUsersOnlineStatusResp_new(arena: ::__pb::__runtime::RawArena) -> ::__pb::__runtime::RawMessage;
  /// Opaque wrapper for this message's MiniTable. The only valid way to
  /// reference this static is with `std::ptr::addr_of!(..)`.
  static openim__ffi__GetUsersOnlineStatusResp_msg_init: ::__pb::__runtime::upb_MiniTable;

  fn openim_ffi_GetUsersOnlineStatusResp_clear_successResult(raw_msg: ::__pb::__runtime::RawMessage);
  fn _openim_ffi_GetUsersOnlineStatusResp_successResult_mutable_upb_array(
    raw_msg: ::__pb::__runtime::RawMessage,
    size: *const usize,
    arena: ::__pb::__runtime::RawArena,
  ) -> ::__pb::__runtime::RawRepeatedField;
  //  Returns `None` when returned array pointer is NULL.
  fn _openim_ffi_GetUsersOnlineStatusResp_successResult_upb_array(
    raw_msg: ::__pb::__runtime::RawMessage,
    size: *const usize,
  ) -> Option<::__pb::__runtime::RawRepeatedField>;

  fn openim_ffi_GetUsersOnlineStatusResp_clear_failedResult(raw_msg: ::__pb::__runtime::RawMessage);
  fn _openim_ffi_GetUsersOnlineStatusResp_failedResult_mutable_upb_array(
    raw_msg: ::__pb::__runtime::RawMessage,
    size: *const usize,
    arena: ::__pb::__runtime::RawArena,
  ) -> ::__pb::__runtime::RawRepeatedField;
  //  Returns `None` when returned array pointer is NULL.
  fn _openim_ffi_GetUsersOnlineStatusResp_failedResult_upb_array(
    raw_msg: ::__pb::__runtime::RawMessage,
    size: *const usize,
  ) -> Option<::__pb::__runtime::RawRepeatedField>;


}  // extern "C" for GetUsersOnlineStatusResp

pub mod get_users_online_status_resp {
  #[allow(non_camel_case_types)]
  pub struct SuccessDetail {
    inner: ::__pb::__runtime::MessageInner
  }

  impl std::fmt::Debug for SuccessDetail {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
      f.debug_struct(std::any::type_name::<Self>())
        .field("raw_msg", &self.raw_msg())
        .finish()
    }
  }

  impl std::default::Default for SuccessDetail {
    fn default() -> Self {
      Self::new()
    }
  }

  // SAFETY:
  // - `SuccessDetail` is `Sync` because it does not implement interior mutability.
  //    Neither does `SuccessDetailMut`.
  unsafe impl Sync for SuccessDetail {}

  // SAFETY:
  // - `SuccessDetail` is `Send` because it uniquely owns its arena and does
  //   not use thread-local data.
  unsafe impl Send for SuccessDetail {}

  impl ::__pb::Proxied for SuccessDetail {
    type View<'msg> = SuccessDetailView<'msg>;
    type Mut<'msg> = SuccessDetailMut<'msg>;
  }

  #[derive(Copy, Clone)]
  #[allow(dead_code)]
  pub struct SuccessDetailView<'msg> {
    msg: ::__pb::__runtime::RawMessage,
    _phantom: ::__std::marker::PhantomData<&'msg ()>,
  }

  impl std::fmt::Debug for SuccessDetailView<'_> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
      f.debug_struct(std::any::type_name::<Self>())
        .field("raw_msg", &self.raw_msg())
        .finish()
    }
  }

  #[allow(dead_code)]
  impl<'msg> SuccessDetailView<'msg> {
    #[doc(hidden)]
    pub fn new(_private: ::__pb::__internal::Private, msg: ::__pb::__runtime::RawMessage) -> Self {
      Self { msg, _phantom: ::__std::marker::PhantomData }
    }

    fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
      self.msg
    }

    pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
      let arena = ::__pb::__runtime::Arena::new();
      // SAFETY: openim__ffi__GetUsersOnlineStatusResp__SuccessDetail_msg_init is a static of a const object.
      let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp__SuccessDetail_msg_init) };
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

    // platformID: optional int32
    pub fn platformID(self) -> i32 {
      unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_platformID(self.raw_msg()) }
    }

    // connID: optional string
    pub fn connID(self) -> &'msg ::__pb::ProtoStr {
      let view = unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_connID(self.raw_msg()).as_ref() };
      // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
      unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
    }

    // isBackground: optional bool
    pub fn isBackground(self) -> bool {
      unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_isBackground(self.raw_msg()) }
    }

    // token: optional string
    pub fn token(self) -> &'msg ::__pb::ProtoStr {
      let view = unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_token(self.raw_msg()).as_ref() };
      // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
      unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
    }

  }

  // SAFETY:
  // - `SuccessDetailView` is `Sync` because it does not support mutation.
  unsafe impl Sync for SuccessDetailView<'_> {}

  // SAFETY:
  // - `SuccessDetailView` is `Send` because while its alive a `SuccessDetailMut` cannot.
  // - `SuccessDetailView` does not use thread-local data.
  unsafe impl Send for SuccessDetailView<'_> {}

  impl<'msg> ::__pb::ViewProxy<'msg> for SuccessDetailView<'msg> {
    type Proxied = SuccessDetail;

    fn as_view(&self) -> ::__pb::View<'msg, SuccessDetail> {
      *self
    }
    fn into_view<'shorter>(self) -> ::__pb::View<'shorter, SuccessDetail> where 'msg: 'shorter {
      self
    }
  }

  impl ::__pb::__internal::ProxiedWithRawVTable for SuccessDetail {
    type VTable = ::__pb::__runtime::MessageVTable;

    fn make_view(_private: ::__pb::__internal::Private,
                mut_inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
                -> ::__pb::View<'_, Self> {
      let msg = unsafe {
        (mut_inner.vtable().getter)(mut_inner.msg_ref().msg())
      };
      SuccessDetailView::new(::__pb::__internal::Private, msg.unwrap_or_else(||::__pb::__runtime::ScratchSpace::zeroed_block(::__pb::__internal::Private)))
    }

    fn make_mut(_private: ::__pb::__internal::Private,
                inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
                -> ::__pb::Mut<'_, Self> {
      let raw_submsg = unsafe {
        (inner.vtable().mut_getter)(inner.msg_ref().msg(), inner.msg_ref().arena(::__pb::__internal::Private).raw())
      };
      SuccessDetailMut::from_parent(::__pb::__internal::Private, inner.msg_ref(), raw_submsg)
    }
  }

  impl ::__pb::__internal::ProxiedWithRawOptionalVTable for SuccessDetail {
    type OptionalVTable = ::__pb::__runtime::MessageVTable;

    fn upcast_vtable(_private: ::__pb::__internal::Private,
                     optional_vtable: &'static Self::OptionalVTable)
                    -> &'static Self::VTable {
      &optional_vtable
    }
  }

  impl ::__pb::ProxiedWithPresence for SuccessDetail {
    type PresentMutData<'a> = ::__pb::__runtime::MessagePresentMutData<'a, SuccessDetail>;
    type AbsentMutData<'a> = ::__pb::__runtime::MessageAbsentMutData<'a, SuccessDetail>;

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

  impl<'msg> ::__pb::SettableValue<SuccessDetail> for SuccessDetailView<'msg> {
    fn set_on<'dst>(
      self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, SuccessDetail>)
      where SuccessDetail: 'dst {
      unsafe { ::__pb::__runtime::upb_Message_DeepCopy(
        mutator.inner.msg(),
        self.msg,
        ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp__SuccessDetail_msg_init),
        mutator.inner.arena(::__pb::__internal::Private).raw(),
      ) };
    }
  }

  impl ::__pb::SettableValue<SuccessDetail> for SuccessDetail {
    fn set_on<'dst>(
      self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, SuccessDetail>)
      where SuccessDetail: 'dst {
      self.as_view().set_on(::__pb::__internal::Private, mutator);
    }
  }

  unsafe impl ::__pb::ProxiedInRepeated for SuccessDetail {
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
      // - `v.raw_msg()` and `dest_msg` both have message minitable `openim__ffi__GetUsersOnlineStatusResp__SuccessDetail_msg_init`.
      unsafe {
        ::__pb::__runtime::upb_Message_DeepCopy(
          dest_msg,
          v.raw_msg(),
          ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp__SuccessDetail_msg_init),
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
      // - `v.raw_msg()` is a valid `const upb_Message*` with minitable `openim__ffi__GetUsersOnlineStatusResp__SuccessDetail_msg_init`.
      let msg_ptr = unsafe {
        ::__pb::__runtime::upb_Message_DeepClone(
          v.raw_msg(),
          std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp__SuccessDetail_msg_init),
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
        // - Elements of `src` and `dest` have message minitable `openim__ffi__GetUsersOnlineStatusResp__SuccessDetail_msg_init`.
        unsafe {
          ::__pb::__runtime::repeated_message_copy_from(src, dest, ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp__SuccessDetail_msg_init));
        }
    }
  }
  impl ::__pb::__runtime::UpbTypeConversions for SuccessDetail {
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
            val.raw_msg(), ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp__SuccessDetail_msg_init), arena)
            .expect("upb_Message_DeepClone failed.");
        Self::to_message_value(
            SuccessDetailView::new(::__pb::__internal::Private, cloned_msg))
        }

      unsafe fn from_message_value<'msg>(msg: ::__pb::__runtime::upb_MessageValue)
          -> ::__pb::View<'msg, Self> {
          SuccessDetailView::new(
              ::__pb::__internal::Private,
              unsafe { msg.msg_val }
                  .expect("expected present message value in map"))
      }
  }
  impl ::__pb::ProxiedInMapValue<i32> for SuccessDetail {
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
  impl ::__pb::ProxiedInMapValue<u32> for SuccessDetail {
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
  impl ::__pb::ProxiedInMapValue<i64> for SuccessDetail {
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
  impl ::__pb::ProxiedInMapValue<u64> for SuccessDetail {
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
  impl ::__pb::ProxiedInMapValue<bool> for SuccessDetail {
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
  impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for SuccessDetail {
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
  pub struct SuccessDetailMut<'msg> {
    inner: ::__pb::__runtime::MutatorMessageRef<'msg>,
  }

  impl std::fmt::Debug for SuccessDetailMut<'_> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
      f.debug_struct(std::any::type_name::<Self>())
        .field("raw_msg", &self.raw_msg())
        .finish()
    }
  }

  #[allow(dead_code)]
  impl<'msg> SuccessDetailMut<'msg> {
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

    // platformID: optional int32
    pub fn platformID(&self) -> i32 {
      unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_platformID(self.raw_msg()) }
    }
    pub fn set_platformID(&mut self, val: i32) {
      unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_set_platformID(self.raw_msg(), val) }
    }

    // connID: optional string
    pub fn connID(&self) -> &'_ ::__pb::ProtoStr {
      let view = unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_connID(self.raw_msg()).as_ref() };
      // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
      unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
    }
    pub fn set_connID(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
      self.connID_mut().set(val);
    }
    fn connID_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
      unsafe {
        <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
          ::__pb::__internal::Private,
          ::__pb::__internal::RawVTableMutator::new(
            ::__pb::__internal::Private,
            self.as_mutator_message_ref(),
            SuccessDetail::__CONNID_VTABLE,
          )
        )
      }
    }

    // isBackground: optional bool
    pub fn isBackground(&self) -> bool {
      unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_isBackground(self.raw_msg()) }
    }
    pub fn set_isBackground(&mut self, val: bool) {
      unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_set_isBackground(self.raw_msg(), val) }
    }

    // token: optional string
    pub fn token(&self) -> &'_ ::__pb::ProtoStr {
      let view = unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_token(self.raw_msg()).as_ref() };
      // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
      unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
    }
    pub fn set_token(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
      self.token_mut().set(val);
    }
    fn token_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
      unsafe {
        <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
          ::__pb::__internal::Private,
          ::__pb::__internal::RawVTableMutator::new(
            ::__pb::__internal::Private,
            self.as_mutator_message_ref(),
            SuccessDetail::__TOKEN_VTABLE,
          )
        )
      }
    }

  }

  // SAFETY:
  // - `SuccessDetailMut` does not perform any shared mutation.
  // - `SuccessDetailMut` is not `Send`, and so even in the presence of mutator
  //   splitting, synchronous access of an arena is impossible.
  unsafe impl Sync for SuccessDetailMut<'_> {}

  impl<'msg> ::__pb::MutProxy<'msg> for SuccessDetailMut<'msg> {
    fn as_mut(&mut self) -> ::__pb::Mut<'_, SuccessDetail> {
      SuccessDetailMut { inner: self.inner }
    }
    fn into_mut<'shorter>(self) -> ::__pb::Mut<'shorter, SuccessDetail> where 'msg : 'shorter { self }
  }

  impl<'msg> ::__pb::ViewProxy<'msg> for SuccessDetailMut<'msg> {
    type Proxied = SuccessDetail;
    fn as_view(&self) -> ::__pb::View<'_, SuccessDetail> {
      SuccessDetailView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
    }
    fn into_view<'shorter>(self) -> ::__pb::View<'shorter, SuccessDetail> where 'msg: 'shorter {
      SuccessDetailView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
    }
  }

  #[allow(dead_code)]
  impl SuccessDetail {
    pub fn new() -> Self {
      let arena = ::__pb::__runtime::Arena::new();
      Self {
        inner: ::__pb::__runtime::MessageInner {
          msg: unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_new(arena.raw()) },
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
      // SAFETY: openim__ffi__GetUsersOnlineStatusResp__SuccessDetail_msg_init is a static of a const object.
      let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp__SuccessDetail_msg_init) };
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

    pub fn as_view(&self) -> SuccessDetailView {
      SuccessDetailView::new(::__pb::__internal::Private, self.inner.msg)
    }

    pub fn as_mut(&mut self) -> SuccessDetailMut {
      SuccessDetailMut::new(::__pb::__internal::Private, &mut self.inner)
    }

    // platformID: optional int32
    pub fn platformID(&self) -> i32 {
      unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_platformID(self.raw_msg()) }
    }
    pub fn set_platformID(&mut self, val: i32) {
      unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_set_platformID(self.raw_msg(), val) }
    }

    // connID: optional string
    pub fn connID(&self) -> &'_ ::__pb::ProtoStr {
      let view = unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_connID(self.raw_msg()).as_ref() };
      // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
      unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
    }
    pub fn set_connID(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
      self.connID_mut().set(val);
    }
    const __CONNID_VTABLE: &'static ::__pb::__internal::BytesMutVTable =
      &::__pb::__internal::BytesMutVTable::new(
        ::__pb::__internal::Private,
        openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_connID,
        openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_set_connID,
      );
    fn connID_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
      unsafe {
        <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
          ::__pb::__internal::Private,
          ::__pb::__internal::RawVTableMutator::new(
            ::__pb::__internal::Private,
            self.as_mutator_message_ref(),
            SuccessDetail::__CONNID_VTABLE,
          )
        )
      }
    }

    // isBackground: optional bool
    pub fn isBackground(&self) -> bool {
      unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_isBackground(self.raw_msg()) }
    }
    pub fn set_isBackground(&mut self, val: bool) {
      unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_set_isBackground(self.raw_msg(), val) }
    }

    // token: optional string
    pub fn token(&self) -> &'_ ::__pb::ProtoStr {
      let view = unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_token(self.raw_msg()).as_ref() };
      // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
      unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
    }
    pub fn set_token(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
      self.token_mut().set(val);
    }
    const __TOKEN_VTABLE: &'static ::__pb::__internal::BytesMutVTable =
      &::__pb::__internal::BytesMutVTable::new(
        ::__pb::__internal::Private,
        openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_token,
        openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_set_token,
      );
    fn token_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
      unsafe {
        <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
          ::__pb::__internal::Private,
          ::__pb::__internal::RawVTableMutator::new(
            ::__pb::__internal::Private,
            self.as_mutator_message_ref(),
            SuccessDetail::__TOKEN_VTABLE,
          )
        )
      }
    }

  }  // impl SuccessDetail

  impl ::__std::ops::Drop for SuccessDetail {
    fn drop(&mut self) {
    }
  }

  extern "C" {
    fn openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_new(arena: ::__pb::__runtime::RawArena) -> ::__pb::__runtime::RawMessage;
    /// Opaque wrapper for this message's MiniTable. The only valid way to
    /// reference this static is with `std::ptr::addr_of!(..)`.
    static openim__ffi__GetUsersOnlineStatusResp__SuccessDetail_msg_init: ::__pb::__runtime::upb_MiniTable;

    fn openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_platformID(raw_msg: ::__pb::__runtime::RawMessage) -> i32;
    fn openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_set_platformID(raw_msg: ::__pb::__runtime::RawMessage, val: i32);

    fn openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_connID(raw_msg: ::__pb::__runtime::RawMessage) -> ::__pb::__runtime::PtrAndLen;
    fn openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_set_connID(raw_msg: ::__pb::__runtime::RawMessage, val: ::__pb::__runtime::PtrAndLen);

    fn openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_isBackground(raw_msg: ::__pb::__runtime::RawMessage) -> bool;
    fn openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_set_isBackground(raw_msg: ::__pb::__runtime::RawMessage, val: bool);

    fn openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_token(raw_msg: ::__pb::__runtime::RawMessage) -> ::__pb::__runtime::PtrAndLen;
    fn openim_ffi_GetUsersOnlineStatusResp_SuccessDetail_set_token(raw_msg: ::__pb::__runtime::RawMessage, val: ::__pb::__runtime::PtrAndLen);


  }  // extern "C" for SuccessDetail

  #[allow(non_camel_case_types)]
  pub struct FailedDetail {
    inner: ::__pb::__runtime::MessageInner
  }

  impl std::fmt::Debug for FailedDetail {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
      f.debug_struct(std::any::type_name::<Self>())
        .field("raw_msg", &self.raw_msg())
        .finish()
    }
  }

  impl std::default::Default for FailedDetail {
    fn default() -> Self {
      Self::new()
    }
  }

  // SAFETY:
  // - `FailedDetail` is `Sync` because it does not implement interior mutability.
  //    Neither does `FailedDetailMut`.
  unsafe impl Sync for FailedDetail {}

  // SAFETY:
  // - `FailedDetail` is `Send` because it uniquely owns its arena and does
  //   not use thread-local data.
  unsafe impl Send for FailedDetail {}

  impl ::__pb::Proxied for FailedDetail {
    type View<'msg> = FailedDetailView<'msg>;
    type Mut<'msg> = FailedDetailMut<'msg>;
  }

  #[derive(Copy, Clone)]
  #[allow(dead_code)]
  pub struct FailedDetailView<'msg> {
    msg: ::__pb::__runtime::RawMessage,
    _phantom: ::__std::marker::PhantomData<&'msg ()>,
  }

  impl std::fmt::Debug for FailedDetailView<'_> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
      f.debug_struct(std::any::type_name::<Self>())
        .field("raw_msg", &self.raw_msg())
        .finish()
    }
  }

  #[allow(dead_code)]
  impl<'msg> FailedDetailView<'msg> {
    #[doc(hidden)]
    pub fn new(_private: ::__pb::__internal::Private, msg: ::__pb::__runtime::RawMessage) -> Self {
      Self { msg, _phantom: ::__std::marker::PhantomData }
    }

    fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
      self.msg
    }

    pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
      let arena = ::__pb::__runtime::Arena::new();
      // SAFETY: openim__ffi__GetUsersOnlineStatusResp__FailedDetail_msg_init is a static of a const object.
      let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp__FailedDetail_msg_init) };
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

    // userID: optional string
    pub fn userID(self) -> &'msg ::__pb::ProtoStr {
      let view = unsafe { openim_ffi_GetUsersOnlineStatusResp_FailedDetail_userID(self.raw_msg()).as_ref() };
      // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
      unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
    }

  }

  // SAFETY:
  // - `FailedDetailView` is `Sync` because it does not support mutation.
  unsafe impl Sync for FailedDetailView<'_> {}

  // SAFETY:
  // - `FailedDetailView` is `Send` because while its alive a `FailedDetailMut` cannot.
  // - `FailedDetailView` does not use thread-local data.
  unsafe impl Send for FailedDetailView<'_> {}

  impl<'msg> ::__pb::ViewProxy<'msg> for FailedDetailView<'msg> {
    type Proxied = FailedDetail;

    fn as_view(&self) -> ::__pb::View<'msg, FailedDetail> {
      *self
    }
    fn into_view<'shorter>(self) -> ::__pb::View<'shorter, FailedDetail> where 'msg: 'shorter {
      self
    }
  }

  impl ::__pb::__internal::ProxiedWithRawVTable for FailedDetail {
    type VTable = ::__pb::__runtime::MessageVTable;

    fn make_view(_private: ::__pb::__internal::Private,
                mut_inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
                -> ::__pb::View<'_, Self> {
      let msg = unsafe {
        (mut_inner.vtable().getter)(mut_inner.msg_ref().msg())
      };
      FailedDetailView::new(::__pb::__internal::Private, msg.unwrap_or_else(||::__pb::__runtime::ScratchSpace::zeroed_block(::__pb::__internal::Private)))
    }

    fn make_mut(_private: ::__pb::__internal::Private,
                inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
                -> ::__pb::Mut<'_, Self> {
      let raw_submsg = unsafe {
        (inner.vtable().mut_getter)(inner.msg_ref().msg(), inner.msg_ref().arena(::__pb::__internal::Private).raw())
      };
      FailedDetailMut::from_parent(::__pb::__internal::Private, inner.msg_ref(), raw_submsg)
    }
  }

  impl ::__pb::__internal::ProxiedWithRawOptionalVTable for FailedDetail {
    type OptionalVTable = ::__pb::__runtime::MessageVTable;

    fn upcast_vtable(_private: ::__pb::__internal::Private,
                     optional_vtable: &'static Self::OptionalVTable)
                    -> &'static Self::VTable {
      &optional_vtable
    }
  }

  impl ::__pb::ProxiedWithPresence for FailedDetail {
    type PresentMutData<'a> = ::__pb::__runtime::MessagePresentMutData<'a, FailedDetail>;
    type AbsentMutData<'a> = ::__pb::__runtime::MessageAbsentMutData<'a, FailedDetail>;

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

  impl<'msg> ::__pb::SettableValue<FailedDetail> for FailedDetailView<'msg> {
    fn set_on<'dst>(
      self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, FailedDetail>)
      where FailedDetail: 'dst {
      unsafe { ::__pb::__runtime::upb_Message_DeepCopy(
        mutator.inner.msg(),
        self.msg,
        ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp__FailedDetail_msg_init),
        mutator.inner.arena(::__pb::__internal::Private).raw(),
      ) };
    }
  }

  impl ::__pb::SettableValue<FailedDetail> for FailedDetail {
    fn set_on<'dst>(
      self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, FailedDetail>)
      where FailedDetail: 'dst {
      self.as_view().set_on(::__pb::__internal::Private, mutator);
    }
  }

  unsafe impl ::__pb::ProxiedInRepeated for FailedDetail {
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
      // - `v.raw_msg()` and `dest_msg` both have message minitable `openim__ffi__GetUsersOnlineStatusResp__FailedDetail_msg_init`.
      unsafe {
        ::__pb::__runtime::upb_Message_DeepCopy(
          dest_msg,
          v.raw_msg(),
          ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp__FailedDetail_msg_init),
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
      // - `v.raw_msg()` is a valid `const upb_Message*` with minitable `openim__ffi__GetUsersOnlineStatusResp__FailedDetail_msg_init`.
      let msg_ptr = unsafe {
        ::__pb::__runtime::upb_Message_DeepClone(
          v.raw_msg(),
          std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp__FailedDetail_msg_init),
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
        // - Elements of `src` and `dest` have message minitable `openim__ffi__GetUsersOnlineStatusResp__FailedDetail_msg_init`.
        unsafe {
          ::__pb::__runtime::repeated_message_copy_from(src, dest, ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp__FailedDetail_msg_init));
        }
    }
  }
  impl ::__pb::__runtime::UpbTypeConversions for FailedDetail {
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
            val.raw_msg(), ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp__FailedDetail_msg_init), arena)
            .expect("upb_Message_DeepClone failed.");
        Self::to_message_value(
            FailedDetailView::new(::__pb::__internal::Private, cloned_msg))
        }

      unsafe fn from_message_value<'msg>(msg: ::__pb::__runtime::upb_MessageValue)
          -> ::__pb::View<'msg, Self> {
          FailedDetailView::new(
              ::__pb::__internal::Private,
              unsafe { msg.msg_val }
                  .expect("expected present message value in map"))
      }
  }
  impl ::__pb::ProxiedInMapValue<i32> for FailedDetail {
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
  impl ::__pb::ProxiedInMapValue<u32> for FailedDetail {
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
  impl ::__pb::ProxiedInMapValue<i64> for FailedDetail {
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
  impl ::__pb::ProxiedInMapValue<u64> for FailedDetail {
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
  impl ::__pb::ProxiedInMapValue<bool> for FailedDetail {
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
  impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for FailedDetail {
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
  pub struct FailedDetailMut<'msg> {
    inner: ::__pb::__runtime::MutatorMessageRef<'msg>,
  }

  impl std::fmt::Debug for FailedDetailMut<'_> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
      f.debug_struct(std::any::type_name::<Self>())
        .field("raw_msg", &self.raw_msg())
        .finish()
    }
  }

  #[allow(dead_code)]
  impl<'msg> FailedDetailMut<'msg> {
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

    // userID: optional string
    pub fn userID(&self) -> &'_ ::__pb::ProtoStr {
      let view = unsafe { openim_ffi_GetUsersOnlineStatusResp_FailedDetail_userID(self.raw_msg()).as_ref() };
      // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
      unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
    }
    pub fn set_userID(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
      self.userID_mut().set(val);
    }
    fn userID_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
      unsafe {
        <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
          ::__pb::__internal::Private,
          ::__pb::__internal::RawVTableMutator::new(
            ::__pb::__internal::Private,
            self.as_mutator_message_ref(),
            FailedDetail::__USERID_VTABLE,
          )
        )
      }
    }

  }

  // SAFETY:
  // - `FailedDetailMut` does not perform any shared mutation.
  // - `FailedDetailMut` is not `Send`, and so even in the presence of mutator
  //   splitting, synchronous access of an arena is impossible.
  unsafe impl Sync for FailedDetailMut<'_> {}

  impl<'msg> ::__pb::MutProxy<'msg> for FailedDetailMut<'msg> {
    fn as_mut(&mut self) -> ::__pb::Mut<'_, FailedDetail> {
      FailedDetailMut { inner: self.inner }
    }
    fn into_mut<'shorter>(self) -> ::__pb::Mut<'shorter, FailedDetail> where 'msg : 'shorter { self }
  }

  impl<'msg> ::__pb::ViewProxy<'msg> for FailedDetailMut<'msg> {
    type Proxied = FailedDetail;
    fn as_view(&self) -> ::__pb::View<'_, FailedDetail> {
      FailedDetailView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
    }
    fn into_view<'shorter>(self) -> ::__pb::View<'shorter, FailedDetail> where 'msg: 'shorter {
      FailedDetailView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
    }
  }

  #[allow(dead_code)]
  impl FailedDetail {
    pub fn new() -> Self {
      let arena = ::__pb::__runtime::Arena::new();
      Self {
        inner: ::__pb::__runtime::MessageInner {
          msg: unsafe { openim_ffi_GetUsersOnlineStatusResp_FailedDetail_new(arena.raw()) },
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
      // SAFETY: openim__ffi__GetUsersOnlineStatusResp__FailedDetail_msg_init is a static of a const object.
      let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp__FailedDetail_msg_init) };
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

    pub fn as_view(&self) -> FailedDetailView {
      FailedDetailView::new(::__pb::__internal::Private, self.inner.msg)
    }

    pub fn as_mut(&mut self) -> FailedDetailMut {
      FailedDetailMut::new(::__pb::__internal::Private, &mut self.inner)
    }

    // userID: optional string
    pub fn userID(&self) -> &'_ ::__pb::ProtoStr {
      let view = unsafe { openim_ffi_GetUsersOnlineStatusResp_FailedDetail_userID(self.raw_msg()).as_ref() };
      // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
      unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
    }
    pub fn set_userID(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
      self.userID_mut().set(val);
    }
    const __USERID_VTABLE: &'static ::__pb::__internal::BytesMutVTable =
      &::__pb::__internal::BytesMutVTable::new(
        ::__pb::__internal::Private,
        openim_ffi_GetUsersOnlineStatusResp_FailedDetail_userID,
        openim_ffi_GetUsersOnlineStatusResp_FailedDetail_set_userID,
      );
    fn userID_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
      unsafe {
        <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
          ::__pb::__internal::Private,
          ::__pb::__internal::RawVTableMutator::new(
            ::__pb::__internal::Private,
            self.as_mutator_message_ref(),
            FailedDetail::__USERID_VTABLE,
          )
        )
      }
    }

  }  // impl FailedDetail

  impl ::__std::ops::Drop for FailedDetail {
    fn drop(&mut self) {
    }
  }

  extern "C" {
    fn openim_ffi_GetUsersOnlineStatusResp_FailedDetail_new(arena: ::__pb::__runtime::RawArena) -> ::__pb::__runtime::RawMessage;
    /// Opaque wrapper for this message's MiniTable. The only valid way to
    /// reference this static is with `std::ptr::addr_of!(..)`.
    static openim__ffi__GetUsersOnlineStatusResp__FailedDetail_msg_init: ::__pb::__runtime::upb_MiniTable;

    fn openim_ffi_GetUsersOnlineStatusResp_FailedDetail_userID(raw_msg: ::__pb::__runtime::RawMessage) -> ::__pb::__runtime::PtrAndLen;
    fn openim_ffi_GetUsersOnlineStatusResp_FailedDetail_set_userID(raw_msg: ::__pb::__runtime::RawMessage, val: ::__pb::__runtime::PtrAndLen);


  }  // extern "C" for FailedDetail

  #[allow(non_camel_case_types)]
  pub struct SuccessResult {
    inner: ::__pb::__runtime::MessageInner
  }

  impl std::fmt::Debug for SuccessResult {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
      f.debug_struct(std::any::type_name::<Self>())
        .field("raw_msg", &self.raw_msg())
        .finish()
    }
  }

  impl std::default::Default for SuccessResult {
    fn default() -> Self {
      Self::new()
    }
  }

  // SAFETY:
  // - `SuccessResult` is `Sync` because it does not implement interior mutability.
  //    Neither does `SuccessResultMut`.
  unsafe impl Sync for SuccessResult {}

  // SAFETY:
  // - `SuccessResult` is `Send` because it uniquely owns its arena and does
  //   not use thread-local data.
  unsafe impl Send for SuccessResult {}

  impl ::__pb::Proxied for SuccessResult {
    type View<'msg> = SuccessResultView<'msg>;
    type Mut<'msg> = SuccessResultMut<'msg>;
  }

  #[derive(Copy, Clone)]
  #[allow(dead_code)]
  pub struct SuccessResultView<'msg> {
    msg: ::__pb::__runtime::RawMessage,
    _phantom: ::__std::marker::PhantomData<&'msg ()>,
  }

  impl std::fmt::Debug for SuccessResultView<'_> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
      f.debug_struct(std::any::type_name::<Self>())
        .field("raw_msg", &self.raw_msg())
        .finish()
    }
  }

  #[allow(dead_code)]
  impl<'msg> SuccessResultView<'msg> {
    #[doc(hidden)]
    pub fn new(_private: ::__pb::__internal::Private, msg: ::__pb::__runtime::RawMessage) -> Self {
      Self { msg, _phantom: ::__std::marker::PhantomData }
    }

    fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
      self.msg
    }

    pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
      let arena = ::__pb::__runtime::Arena::new();
      // SAFETY: openim__ffi__GetUsersOnlineStatusResp__SuccessResult_msg_init is a static of a const object.
      let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp__SuccessResult_msg_init) };
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

    // userID: optional string
    pub fn userID(self) -> &'msg ::__pb::ProtoStr {
      let view = unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessResult_userID(self.raw_msg()).as_ref() };
      // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
      unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
    }

    // status: optional int32
    pub fn status(self) -> i32 {
      unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessResult_status(self.raw_msg()) }
    }

    // detailPlatformStatus: repeated message openim.ffi.GetUsersOnlineStatusResp.SuccessDetail
    pub fn detailPlatformStatus(self) -> ::__pb::RepeatedView<'msg, crate::get_users_online_status_resp::SuccessDetail> {
      unsafe {
        _openim_ffi_GetUsersOnlineStatusResp_SuccessResult_detailPlatformStatus_upb_array(
          self.raw_msg(),
          /* optional size pointer */ std::ptr::null(),
        ) }
        .map_or_else(
          ::__pb::__runtime::empty_array::<crate::get_users_online_status_resp::SuccessDetail>,
          |raw| unsafe {
            ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
          }
        )
    }

  }

  // SAFETY:
  // - `SuccessResultView` is `Sync` because it does not support mutation.
  unsafe impl Sync for SuccessResultView<'_> {}

  // SAFETY:
  // - `SuccessResultView` is `Send` because while its alive a `SuccessResultMut` cannot.
  // - `SuccessResultView` does not use thread-local data.
  unsafe impl Send for SuccessResultView<'_> {}

  impl<'msg> ::__pb::ViewProxy<'msg> for SuccessResultView<'msg> {
    type Proxied = SuccessResult;

    fn as_view(&self) -> ::__pb::View<'msg, SuccessResult> {
      *self
    }
    fn into_view<'shorter>(self) -> ::__pb::View<'shorter, SuccessResult> where 'msg: 'shorter {
      self
    }
  }

  impl ::__pb::__internal::ProxiedWithRawVTable for SuccessResult {
    type VTable = ::__pb::__runtime::MessageVTable;

    fn make_view(_private: ::__pb::__internal::Private,
                mut_inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
                -> ::__pb::View<'_, Self> {
      let msg = unsafe {
        (mut_inner.vtable().getter)(mut_inner.msg_ref().msg())
      };
      SuccessResultView::new(::__pb::__internal::Private, msg.unwrap_or_else(||::__pb::__runtime::ScratchSpace::zeroed_block(::__pb::__internal::Private)))
    }

    fn make_mut(_private: ::__pb::__internal::Private,
                inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
                -> ::__pb::Mut<'_, Self> {
      let raw_submsg = unsafe {
        (inner.vtable().mut_getter)(inner.msg_ref().msg(), inner.msg_ref().arena(::__pb::__internal::Private).raw())
      };
      SuccessResultMut::from_parent(::__pb::__internal::Private, inner.msg_ref(), raw_submsg)
    }
  }

  impl ::__pb::__internal::ProxiedWithRawOptionalVTable for SuccessResult {
    type OptionalVTable = ::__pb::__runtime::MessageVTable;

    fn upcast_vtable(_private: ::__pb::__internal::Private,
                     optional_vtable: &'static Self::OptionalVTable)
                    -> &'static Self::VTable {
      &optional_vtable
    }
  }

  impl ::__pb::ProxiedWithPresence for SuccessResult {
    type PresentMutData<'a> = ::__pb::__runtime::MessagePresentMutData<'a, SuccessResult>;
    type AbsentMutData<'a> = ::__pb::__runtime::MessageAbsentMutData<'a, SuccessResult>;

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

  impl<'msg> ::__pb::SettableValue<SuccessResult> for SuccessResultView<'msg> {
    fn set_on<'dst>(
      self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, SuccessResult>)
      where SuccessResult: 'dst {
      unsafe { ::__pb::__runtime::upb_Message_DeepCopy(
        mutator.inner.msg(),
        self.msg,
        ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp__SuccessResult_msg_init),
        mutator.inner.arena(::__pb::__internal::Private).raw(),
      ) };
    }
  }

  impl ::__pb::SettableValue<SuccessResult> for SuccessResult {
    fn set_on<'dst>(
      self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, SuccessResult>)
      where SuccessResult: 'dst {
      self.as_view().set_on(::__pb::__internal::Private, mutator);
    }
  }

  unsafe impl ::__pb::ProxiedInRepeated for SuccessResult {
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
      // - `v.raw_msg()` and `dest_msg` both have message minitable `openim__ffi__GetUsersOnlineStatusResp__SuccessResult_msg_init`.
      unsafe {
        ::__pb::__runtime::upb_Message_DeepCopy(
          dest_msg,
          v.raw_msg(),
          ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp__SuccessResult_msg_init),
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
      // - `v.raw_msg()` is a valid `const upb_Message*` with minitable `openim__ffi__GetUsersOnlineStatusResp__SuccessResult_msg_init`.
      let msg_ptr = unsafe {
        ::__pb::__runtime::upb_Message_DeepClone(
          v.raw_msg(),
          std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp__SuccessResult_msg_init),
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
        // - Elements of `src` and `dest` have message minitable `openim__ffi__GetUsersOnlineStatusResp__SuccessResult_msg_init`.
        unsafe {
          ::__pb::__runtime::repeated_message_copy_from(src, dest, ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp__SuccessResult_msg_init));
        }
    }
  }
  impl ::__pb::__runtime::UpbTypeConversions for SuccessResult {
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
            val.raw_msg(), ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp__SuccessResult_msg_init), arena)
            .expect("upb_Message_DeepClone failed.");
        Self::to_message_value(
            SuccessResultView::new(::__pb::__internal::Private, cloned_msg))
        }

      unsafe fn from_message_value<'msg>(msg: ::__pb::__runtime::upb_MessageValue)
          -> ::__pb::View<'msg, Self> {
          SuccessResultView::new(
              ::__pb::__internal::Private,
              unsafe { msg.msg_val }
                  .expect("expected present message value in map"))
      }
  }
  impl ::__pb::ProxiedInMapValue<i32> for SuccessResult {
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
  impl ::__pb::ProxiedInMapValue<u32> for SuccessResult {
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
  impl ::__pb::ProxiedInMapValue<i64> for SuccessResult {
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
  impl ::__pb::ProxiedInMapValue<u64> for SuccessResult {
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
  impl ::__pb::ProxiedInMapValue<bool> for SuccessResult {
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
  impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for SuccessResult {
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
  pub struct SuccessResultMut<'msg> {
    inner: ::__pb::__runtime::MutatorMessageRef<'msg>,
  }

  impl std::fmt::Debug for SuccessResultMut<'_> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
      f.debug_struct(std::any::type_name::<Self>())
        .field("raw_msg", &self.raw_msg())
        .finish()
    }
  }

  #[allow(dead_code)]
  impl<'msg> SuccessResultMut<'msg> {
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

    // userID: optional string
    pub fn userID(&self) -> &'_ ::__pb::ProtoStr {
      let view = unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessResult_userID(self.raw_msg()).as_ref() };
      // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
      unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
    }
    pub fn set_userID(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
      self.userID_mut().set(val);
    }
    fn userID_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
      unsafe {
        <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
          ::__pb::__internal::Private,
          ::__pb::__internal::RawVTableMutator::new(
            ::__pb::__internal::Private,
            self.as_mutator_message_ref(),
            SuccessResult::__USERID_VTABLE,
          )
        )
      }
    }

    // status: optional int32
    pub fn status(&self) -> i32 {
      unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessResult_status(self.raw_msg()) }
    }
    pub fn set_status(&mut self, val: i32) {
      unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessResult_set_status(self.raw_msg(), val) }
    }

    // detailPlatformStatus: repeated message openim.ffi.GetUsersOnlineStatusResp.SuccessDetail
    pub fn detailPlatformStatus(&self) -> ::__pb::RepeatedView<'_, crate::get_users_online_status_resp::SuccessDetail> {
      unsafe {
        _openim_ffi_GetUsersOnlineStatusResp_SuccessResult_detailPlatformStatus_upb_array(
          self.raw_msg(),
          /* optional size pointer */ std::ptr::null(),
        ) }
        .map_or_else(
          ::__pb::__runtime::empty_array::<crate::get_users_online_status_resp::SuccessDetail>,
          |raw| unsafe {
            ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
          }
        )
    }
    pub fn detailPlatformStatus_mut(&mut self) -> ::__pb::RepeatedMut<'_, crate::get_users_online_status_resp::SuccessDetail> {
      unsafe {
        ::__pb::RepeatedMut::from_inner(
          ::__pb::__internal::Private,
          ::__pb::__runtime::InnerRepeatedMut::new(
            ::__pb::__internal::Private,
            _openim_ffi_GetUsersOnlineStatusResp_SuccessResult_detailPlatformStatus_mutable_upb_array(
              self.raw_msg(),
              /* optional size pointer */ std::ptr::null(),
              self.arena().raw(),
            ),
            self.arena(),
          ),
        )
      }
    }

  }

  // SAFETY:
  // - `SuccessResultMut` does not perform any shared mutation.
  // - `SuccessResultMut` is not `Send`, and so even in the presence of mutator
  //   splitting, synchronous access of an arena is impossible.
  unsafe impl Sync for SuccessResultMut<'_> {}

  impl<'msg> ::__pb::MutProxy<'msg> for SuccessResultMut<'msg> {
    fn as_mut(&mut self) -> ::__pb::Mut<'_, SuccessResult> {
      SuccessResultMut { inner: self.inner }
    }
    fn into_mut<'shorter>(self) -> ::__pb::Mut<'shorter, SuccessResult> where 'msg : 'shorter { self }
  }

  impl<'msg> ::__pb::ViewProxy<'msg> for SuccessResultMut<'msg> {
    type Proxied = SuccessResult;
    fn as_view(&self) -> ::__pb::View<'_, SuccessResult> {
      SuccessResultView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
    }
    fn into_view<'shorter>(self) -> ::__pb::View<'shorter, SuccessResult> where 'msg: 'shorter {
      SuccessResultView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
    }
  }

  #[allow(dead_code)]
  impl SuccessResult {
    pub fn new() -> Self {
      let arena = ::__pb::__runtime::Arena::new();
      Self {
        inner: ::__pb::__runtime::MessageInner {
          msg: unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessResult_new(arena.raw()) },
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
      // SAFETY: openim__ffi__GetUsersOnlineStatusResp__SuccessResult_msg_init is a static of a const object.
      let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__GetUsersOnlineStatusResp__SuccessResult_msg_init) };
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

    pub fn as_view(&self) -> SuccessResultView {
      SuccessResultView::new(::__pb::__internal::Private, self.inner.msg)
    }

    pub fn as_mut(&mut self) -> SuccessResultMut {
      SuccessResultMut::new(::__pb::__internal::Private, &mut self.inner)
    }

    // userID: optional string
    pub fn userID(&self) -> &'_ ::__pb::ProtoStr {
      let view = unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessResult_userID(self.raw_msg()).as_ref() };
      // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
      unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
    }
    pub fn set_userID(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
      self.userID_mut().set(val);
    }
    const __USERID_VTABLE: &'static ::__pb::__internal::BytesMutVTable =
      &::__pb::__internal::BytesMutVTable::new(
        ::__pb::__internal::Private,
        openim_ffi_GetUsersOnlineStatusResp_SuccessResult_userID,
        openim_ffi_GetUsersOnlineStatusResp_SuccessResult_set_userID,
      );
    fn userID_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
      unsafe {
        <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
          ::__pb::__internal::Private,
          ::__pb::__internal::RawVTableMutator::new(
            ::__pb::__internal::Private,
            self.as_mutator_message_ref(),
            SuccessResult::__USERID_VTABLE,
          )
        )
      }
    }

    // status: optional int32
    pub fn status(&self) -> i32 {
      unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessResult_status(self.raw_msg()) }
    }
    pub fn set_status(&mut self, val: i32) {
      unsafe { openim_ffi_GetUsersOnlineStatusResp_SuccessResult_set_status(self.raw_msg(), val) }
    }

    // detailPlatformStatus: repeated message openim.ffi.GetUsersOnlineStatusResp.SuccessDetail
    pub fn detailPlatformStatus(&self) -> ::__pb::RepeatedView<'_, crate::get_users_online_status_resp::SuccessDetail> {
      unsafe {
        _openim_ffi_GetUsersOnlineStatusResp_SuccessResult_detailPlatformStatus_upb_array(
          self.raw_msg(),
          /* optional size pointer */ std::ptr::null(),
        ) }
        .map_or_else(
          ::__pb::__runtime::empty_array::<crate::get_users_online_status_resp::SuccessDetail>,
          |raw| unsafe {
            ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
          }
        )
    }
    pub fn detailPlatformStatus_mut(&mut self) -> ::__pb::RepeatedMut<'_, crate::get_users_online_status_resp::SuccessDetail> {
      unsafe {
        ::__pb::RepeatedMut::from_inner(
          ::__pb::__internal::Private,
          ::__pb::__runtime::InnerRepeatedMut::new(
            ::__pb::__internal::Private,
            _openim_ffi_GetUsersOnlineStatusResp_SuccessResult_detailPlatformStatus_mutable_upb_array(
              self.raw_msg(),
              /* optional size pointer */ std::ptr::null(),
              self.arena().raw(),
            ),
            self.arena(),
          ),
        )
      }
    }

  }  // impl SuccessResult

  impl ::__std::ops::Drop for SuccessResult {
    fn drop(&mut self) {
    }
  }

  extern "C" {
    fn openim_ffi_GetUsersOnlineStatusResp_SuccessResult_new(arena: ::__pb::__runtime::RawArena) -> ::__pb::__runtime::RawMessage;
    /// Opaque wrapper for this message's MiniTable. The only valid way to
    /// reference this static is with `std::ptr::addr_of!(..)`.
    static openim__ffi__GetUsersOnlineStatusResp__SuccessResult_msg_init: ::__pb::__runtime::upb_MiniTable;

    fn openim_ffi_GetUsersOnlineStatusResp_SuccessResult_userID(raw_msg: ::__pb::__runtime::RawMessage) -> ::__pb::__runtime::PtrAndLen;
    fn openim_ffi_GetUsersOnlineStatusResp_SuccessResult_set_userID(raw_msg: ::__pb::__runtime::RawMessage, val: ::__pb::__runtime::PtrAndLen);

    fn openim_ffi_GetUsersOnlineStatusResp_SuccessResult_status(raw_msg: ::__pb::__runtime::RawMessage) -> i32;
    fn openim_ffi_GetUsersOnlineStatusResp_SuccessResult_set_status(raw_msg: ::__pb::__runtime::RawMessage, val: i32);

    fn openim_ffi_GetUsersOnlineStatusResp_SuccessResult_clear_detailPlatformStatus(raw_msg: ::__pb::__runtime::RawMessage);
    fn _openim_ffi_GetUsersOnlineStatusResp_SuccessResult_detailPlatformStatus_mutable_upb_array(
      raw_msg: ::__pb::__runtime::RawMessage,
      size: *const usize,
      arena: ::__pb::__runtime::RawArena,
    ) -> ::__pb::__runtime::RawRepeatedField;
    //  Returns `None` when returned array pointer is NULL.
    fn _openim_ffi_GetUsersOnlineStatusResp_SuccessResult_detailPlatformStatus_upb_array(
      raw_msg: ::__pb::__runtime::RawMessage,
      size: *const usize,
    ) -> Option<::__pb::__runtime::RawRepeatedField>;


  }  // extern "C" for SuccessResult


}  // mod get_users_online_status_resp

#[allow(non_camel_case_types)]
pub struct SingleDetail {
  inner: ::__pb::__runtime::MessageInner
}

impl std::fmt::Debug for SingleDetail {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

impl std::default::Default for SingleDetail {
  fn default() -> Self {
    Self::new()
  }
}

// SAFETY:
// - `SingleDetail` is `Sync` because it does not implement interior mutability.
//    Neither does `SingleDetailMut`.
unsafe impl Sync for SingleDetail {}

// SAFETY:
// - `SingleDetail` is `Send` because it uniquely owns its arena and does
//   not use thread-local data.
unsafe impl Send for SingleDetail {}

impl ::__pb::Proxied for SingleDetail {
  type View<'msg> = SingleDetailView<'msg>;
  type Mut<'msg> = SingleDetailMut<'msg>;
}

#[derive(Copy, Clone)]
#[allow(dead_code)]
pub struct SingleDetailView<'msg> {
  msg: ::__pb::__runtime::RawMessage,
  _phantom: ::__std::marker::PhantomData<&'msg ()>,
}

impl std::fmt::Debug for SingleDetailView<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> SingleDetailView<'msg> {
  #[doc(hidden)]
  pub fn new(_private: ::__pb::__internal::Private, msg: ::__pb::__runtime::RawMessage) -> Self {
    Self { msg, _phantom: ::__std::marker::PhantomData }
  }

  fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
    self.msg
  }

  pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
    let arena = ::__pb::__runtime::Arena::new();
    // SAFETY: openim__ffi__SingleDetail_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__SingleDetail_msg_init) };
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

  // userID: optional string
  pub fn userID(self) -> &'msg ::__pb::ProtoStr {
    let view = unsafe { openim_ffi_SingleDetail_userID(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }

  // status: optional int32
  pub fn status(self) -> i32 {
    unsafe { openim_ffi_SingleDetail_status(self.raw_msg()) }
  }

  // singlePlatformToken: repeated message openim.ffi.SinglePlatformToken
  pub fn singlePlatformToken(self) -> ::__pb::RepeatedView<'msg, crate::SinglePlatformToken> {
    unsafe {
      _openim_ffi_SingleDetail_singlePlatformToken_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<crate::SinglePlatformToken>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }

}

// SAFETY:
// - `SingleDetailView` is `Sync` because it does not support mutation.
unsafe impl Sync for SingleDetailView<'_> {}

// SAFETY:
// - `SingleDetailView` is `Send` because while its alive a `SingleDetailMut` cannot.
// - `SingleDetailView` does not use thread-local data.
unsafe impl Send for SingleDetailView<'_> {}

impl<'msg> ::__pb::ViewProxy<'msg> for SingleDetailView<'msg> {
  type Proxied = SingleDetail;

  fn as_view(&self) -> ::__pb::View<'msg, SingleDetail> {
    *self
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, SingleDetail> where 'msg: 'shorter {
    self
  }
}

impl ::__pb::__internal::ProxiedWithRawVTable for SingleDetail {
  type VTable = ::__pb::__runtime::MessageVTable;

  fn make_view(_private: ::__pb::__internal::Private,
              mut_inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::View<'_, Self> {
    let msg = unsafe {
      (mut_inner.vtable().getter)(mut_inner.msg_ref().msg())
    };
    SingleDetailView::new(::__pb::__internal::Private, msg.unwrap_or_else(||::__pb::__runtime::ScratchSpace::zeroed_block(::__pb::__internal::Private)))
  }

  fn make_mut(_private: ::__pb::__internal::Private,
              inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::Mut<'_, Self> {
    let raw_submsg = unsafe {
      (inner.vtable().mut_getter)(inner.msg_ref().msg(), inner.msg_ref().arena(::__pb::__internal::Private).raw())
    };
    SingleDetailMut::from_parent(::__pb::__internal::Private, inner.msg_ref(), raw_submsg)
  }
}

impl ::__pb::__internal::ProxiedWithRawOptionalVTable for SingleDetail {
  type OptionalVTable = ::__pb::__runtime::MessageVTable;

  fn upcast_vtable(_private: ::__pb::__internal::Private,
                   optional_vtable: &'static Self::OptionalVTable)
                  -> &'static Self::VTable {
    &optional_vtable
  }
}

impl ::__pb::ProxiedWithPresence for SingleDetail {
  type PresentMutData<'a> = ::__pb::__runtime::MessagePresentMutData<'a, SingleDetail>;
  type AbsentMutData<'a> = ::__pb::__runtime::MessageAbsentMutData<'a, SingleDetail>;

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

impl<'msg> ::__pb::SettableValue<SingleDetail> for SingleDetailView<'msg> {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, SingleDetail>)
    where SingleDetail: 'dst {
    unsafe { ::__pb::__runtime::upb_Message_DeepCopy(
      mutator.inner.msg(),
      self.msg,
      ::__std::ptr::addr_of!(openim__ffi__SingleDetail_msg_init),
      mutator.inner.arena(::__pb::__internal::Private).raw(),
    ) };
  }
}

impl ::__pb::SettableValue<SingleDetail> for SingleDetail {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, SingleDetail>)
    where SingleDetail: 'dst {
    self.as_view().set_on(::__pb::__internal::Private, mutator);
  }
}

unsafe impl ::__pb::ProxiedInRepeated for SingleDetail {
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
    // - `v.raw_msg()` and `dest_msg` both have message minitable `openim__ffi__SingleDetail_msg_init`.
    unsafe {
      ::__pb::__runtime::upb_Message_DeepCopy(
        dest_msg,
        v.raw_msg(),
        ::__std::ptr::addr_of!(openim__ffi__SingleDetail_msg_init),
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
    // - `v.raw_msg()` is a valid `const upb_Message*` with minitable `openim__ffi__SingleDetail_msg_init`.
    let msg_ptr = unsafe {
      ::__pb::__runtime::upb_Message_DeepClone(
        v.raw_msg(),
        std::ptr::addr_of!(openim__ffi__SingleDetail_msg_init),
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
      // - Elements of `src` and `dest` have message minitable `openim__ffi__SingleDetail_msg_init`.
      unsafe {
        ::__pb::__runtime::repeated_message_copy_from(src, dest, ::__std::ptr::addr_of!(openim__ffi__SingleDetail_msg_init));
      }
  }
}
impl ::__pb::__runtime::UpbTypeConversions for SingleDetail {
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
          val.raw_msg(), ::__std::ptr::addr_of!(openim__ffi__SingleDetail_msg_init), arena)
          .expect("upb_Message_DeepClone failed.");
      Self::to_message_value(
          SingleDetailView::new(::__pb::__internal::Private, cloned_msg))
      }

    unsafe fn from_message_value<'msg>(msg: ::__pb::__runtime::upb_MessageValue)
        -> ::__pb::View<'msg, Self> {
        SingleDetailView::new(
            ::__pb::__internal::Private,
            unsafe { msg.msg_val }
                .expect("expected present message value in map"))
    }
}
impl ::__pb::ProxiedInMapValue<i32> for SingleDetail {
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
impl ::__pb::ProxiedInMapValue<u32> for SingleDetail {
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
impl ::__pb::ProxiedInMapValue<i64> for SingleDetail {
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
impl ::__pb::ProxiedInMapValue<u64> for SingleDetail {
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
impl ::__pb::ProxiedInMapValue<bool> for SingleDetail {
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
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for SingleDetail {
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
pub struct SingleDetailMut<'msg> {
  inner: ::__pb::__runtime::MutatorMessageRef<'msg>,
}

impl std::fmt::Debug for SingleDetailMut<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> SingleDetailMut<'msg> {
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

  // userID: optional string
  pub fn userID(&self) -> &'_ ::__pb::ProtoStr {
    let view = unsafe { openim_ffi_SingleDetail_userID(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }
  pub fn set_userID(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
    self.userID_mut().set(val);
  }
  fn userID_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
    unsafe {
      <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__internal::RawVTableMutator::new(
          ::__pb::__internal::Private,
          self.as_mutator_message_ref(),
          SingleDetail::__USERID_VTABLE,
        )
      )
    }
  }

  // status: optional int32
  pub fn status(&self) -> i32 {
    unsafe { openim_ffi_SingleDetail_status(self.raw_msg()) }
  }
  pub fn set_status(&mut self, val: i32) {
    unsafe { openim_ffi_SingleDetail_set_status(self.raw_msg(), val) }
  }

  // singlePlatformToken: repeated message openim.ffi.SinglePlatformToken
  pub fn singlePlatformToken(&self) -> ::__pb::RepeatedView<'_, crate::SinglePlatformToken> {
    unsafe {
      _openim_ffi_SingleDetail_singlePlatformToken_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<crate::SinglePlatformToken>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }
  pub fn singlePlatformToken_mut(&mut self) -> ::__pb::RepeatedMut<'_, crate::SinglePlatformToken> {
    unsafe {
      ::__pb::RepeatedMut::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__runtime::InnerRepeatedMut::new(
          ::__pb::__internal::Private,
          _openim_ffi_SingleDetail_singlePlatformToken_mutable_upb_array(
            self.raw_msg(),
            /* optional size pointer */ std::ptr::null(),
            self.arena().raw(),
          ),
          self.arena(),
        ),
      )
    }
  }

}

// SAFETY:
// - `SingleDetailMut` does not perform any shared mutation.
// - `SingleDetailMut` is not `Send`, and so even in the presence of mutator
//   splitting, synchronous access of an arena is impossible.
unsafe impl Sync for SingleDetailMut<'_> {}

impl<'msg> ::__pb::MutProxy<'msg> for SingleDetailMut<'msg> {
  fn as_mut(&mut self) -> ::__pb::Mut<'_, SingleDetail> {
    SingleDetailMut { inner: self.inner }
  }
  fn into_mut<'shorter>(self) -> ::__pb::Mut<'shorter, SingleDetail> where 'msg : 'shorter { self }
}

impl<'msg> ::__pb::ViewProxy<'msg> for SingleDetailMut<'msg> {
  type Proxied = SingleDetail;
  fn as_view(&self) -> ::__pb::View<'_, SingleDetail> {
    SingleDetailView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, SingleDetail> where 'msg: 'shorter {
    SingleDetailView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
}

#[allow(dead_code)]
impl SingleDetail {
  pub fn new() -> Self {
    let arena = ::__pb::__runtime::Arena::new();
    Self {
      inner: ::__pb::__runtime::MessageInner {
        msg: unsafe { openim_ffi_SingleDetail_new(arena.raw()) },
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
    // SAFETY: openim__ffi__SingleDetail_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__SingleDetail_msg_init) };
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

  pub fn as_view(&self) -> SingleDetailView {
    SingleDetailView::new(::__pb::__internal::Private, self.inner.msg)
  }

  pub fn as_mut(&mut self) -> SingleDetailMut {
    SingleDetailMut::new(::__pb::__internal::Private, &mut self.inner)
  }

  // userID: optional string
  pub fn userID(&self) -> &'_ ::__pb::ProtoStr {
    let view = unsafe { openim_ffi_SingleDetail_userID(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }
  pub fn set_userID(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
    self.userID_mut().set(val);
  }
  const __USERID_VTABLE: &'static ::__pb::__internal::BytesMutVTable =
    &::__pb::__internal::BytesMutVTable::new(
      ::__pb::__internal::Private,
      openim_ffi_SingleDetail_userID,
      openim_ffi_SingleDetail_set_userID,
    );
  fn userID_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
    unsafe {
      <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__internal::RawVTableMutator::new(
          ::__pb::__internal::Private,
          self.as_mutator_message_ref(),
          SingleDetail::__USERID_VTABLE,
        )
      )
    }
  }

  // status: optional int32
  pub fn status(&self) -> i32 {
    unsafe { openim_ffi_SingleDetail_status(self.raw_msg()) }
  }
  pub fn set_status(&mut self, val: i32) {
    unsafe { openim_ffi_SingleDetail_set_status(self.raw_msg(), val) }
  }

  // singlePlatformToken: repeated message openim.ffi.SinglePlatformToken
  pub fn singlePlatformToken(&self) -> ::__pb::RepeatedView<'_, crate::SinglePlatformToken> {
    unsafe {
      _openim_ffi_SingleDetail_singlePlatformToken_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<crate::SinglePlatformToken>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }
  pub fn singlePlatformToken_mut(&mut self) -> ::__pb::RepeatedMut<'_, crate::SinglePlatformToken> {
    unsafe {
      ::__pb::RepeatedMut::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__runtime::InnerRepeatedMut::new(
          ::__pb::__internal::Private,
          _openim_ffi_SingleDetail_singlePlatformToken_mutable_upb_array(
            self.raw_msg(),
            /* optional size pointer */ std::ptr::null(),
            self.arena().raw(),
          ),
          self.arena(),
        ),
      )
    }
  }

}  // impl SingleDetail

impl ::__std::ops::Drop for SingleDetail {
  fn drop(&mut self) {
  }
}

extern "C" {
  fn openim_ffi_SingleDetail_new(arena: ::__pb::__runtime::RawArena) -> ::__pb::__runtime::RawMessage;
  /// Opaque wrapper for this message's MiniTable. The only valid way to
  /// reference this static is with `std::ptr::addr_of!(..)`.
  static openim__ffi__SingleDetail_msg_init: ::__pb::__runtime::upb_MiniTable;

  fn openim_ffi_SingleDetail_userID(raw_msg: ::__pb::__runtime::RawMessage) -> ::__pb::__runtime::PtrAndLen;
  fn openim_ffi_SingleDetail_set_userID(raw_msg: ::__pb::__runtime::RawMessage, val: ::__pb::__runtime::PtrAndLen);

  fn openim_ffi_SingleDetail_status(raw_msg: ::__pb::__runtime::RawMessage) -> i32;
  fn openim_ffi_SingleDetail_set_status(raw_msg: ::__pb::__runtime::RawMessage, val: i32);

  fn openim_ffi_SingleDetail_clear_singlePlatformToken(raw_msg: ::__pb::__runtime::RawMessage);
  fn _openim_ffi_SingleDetail_singlePlatformToken_mutable_upb_array(
    raw_msg: ::__pb::__runtime::RawMessage,
    size: *const usize,
    arena: ::__pb::__runtime::RawArena,
  ) -> ::__pb::__runtime::RawRepeatedField;
  //  Returns `None` when returned array pointer is NULL.
  fn _openim_ffi_SingleDetail_singlePlatformToken_upb_array(
    raw_msg: ::__pb::__runtime::RawMessage,
    size: *const usize,
  ) -> Option<::__pb::__runtime::RawRepeatedField>;


}  // extern "C" for SingleDetail


#[allow(non_camel_case_types)]
pub struct SinglePlatformToken {
  inner: ::__pb::__runtime::MessageInner
}

impl std::fmt::Debug for SinglePlatformToken {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

impl std::default::Default for SinglePlatformToken {
  fn default() -> Self {
    Self::new()
  }
}

// SAFETY:
// - `SinglePlatformToken` is `Sync` because it does not implement interior mutability.
//    Neither does `SinglePlatformTokenMut`.
unsafe impl Sync for SinglePlatformToken {}

// SAFETY:
// - `SinglePlatformToken` is `Send` because it uniquely owns its arena and does
//   not use thread-local data.
unsafe impl Send for SinglePlatformToken {}

impl ::__pb::Proxied for SinglePlatformToken {
  type View<'msg> = SinglePlatformTokenView<'msg>;
  type Mut<'msg> = SinglePlatformTokenMut<'msg>;
}

#[derive(Copy, Clone)]
#[allow(dead_code)]
pub struct SinglePlatformTokenView<'msg> {
  msg: ::__pb::__runtime::RawMessage,
  _phantom: ::__std::marker::PhantomData<&'msg ()>,
}

impl std::fmt::Debug for SinglePlatformTokenView<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> SinglePlatformTokenView<'msg> {
  #[doc(hidden)]
  pub fn new(_private: ::__pb::__internal::Private, msg: ::__pb::__runtime::RawMessage) -> Self {
    Self { msg, _phantom: ::__std::marker::PhantomData }
  }

  fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
    self.msg
  }

  pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
    let arena = ::__pb::__runtime::Arena::new();
    // SAFETY: openim__ffi__SinglePlatformToken_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__SinglePlatformToken_msg_init) };
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

  // platformID: optional int32
  pub fn platformID(self) -> i32 {
    unsafe { openim_ffi_SinglePlatformToken_platformID(self.raw_msg()) }
  }

  // total: optional int32
  pub fn total(self) -> i32 {
    unsafe { openim_ffi_SinglePlatformToken_total(self.raw_msg()) }
  }

  // token: repeated string
  pub fn token(self) -> ::__pb::RepeatedView<'msg, ::__pb::ProtoStr> {
    unsafe {
      _openim_ffi_SinglePlatformToken_token_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<::__pb::ProtoStr>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }

}

// SAFETY:
// - `SinglePlatformTokenView` is `Sync` because it does not support mutation.
unsafe impl Sync for SinglePlatformTokenView<'_> {}

// SAFETY:
// - `SinglePlatformTokenView` is `Send` because while its alive a `SinglePlatformTokenMut` cannot.
// - `SinglePlatformTokenView` does not use thread-local data.
unsafe impl Send for SinglePlatformTokenView<'_> {}

impl<'msg> ::__pb::ViewProxy<'msg> for SinglePlatformTokenView<'msg> {
  type Proxied = SinglePlatformToken;

  fn as_view(&self) -> ::__pb::View<'msg, SinglePlatformToken> {
    *self
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, SinglePlatformToken> where 'msg: 'shorter {
    self
  }
}

impl ::__pb::__internal::ProxiedWithRawVTable for SinglePlatformToken {
  type VTable = ::__pb::__runtime::MessageVTable;

  fn make_view(_private: ::__pb::__internal::Private,
              mut_inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::View<'_, Self> {
    let msg = unsafe {
      (mut_inner.vtable().getter)(mut_inner.msg_ref().msg())
    };
    SinglePlatformTokenView::new(::__pb::__internal::Private, msg.unwrap_or_else(||::__pb::__runtime::ScratchSpace::zeroed_block(::__pb::__internal::Private)))
  }

  fn make_mut(_private: ::__pb::__internal::Private,
              inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::Mut<'_, Self> {
    let raw_submsg = unsafe {
      (inner.vtable().mut_getter)(inner.msg_ref().msg(), inner.msg_ref().arena(::__pb::__internal::Private).raw())
    };
    SinglePlatformTokenMut::from_parent(::__pb::__internal::Private, inner.msg_ref(), raw_submsg)
  }
}

impl ::__pb::__internal::ProxiedWithRawOptionalVTable for SinglePlatformToken {
  type OptionalVTable = ::__pb::__runtime::MessageVTable;

  fn upcast_vtable(_private: ::__pb::__internal::Private,
                   optional_vtable: &'static Self::OptionalVTable)
                  -> &'static Self::VTable {
    &optional_vtable
  }
}

impl ::__pb::ProxiedWithPresence for SinglePlatformToken {
  type PresentMutData<'a> = ::__pb::__runtime::MessagePresentMutData<'a, SinglePlatformToken>;
  type AbsentMutData<'a> = ::__pb::__runtime::MessageAbsentMutData<'a, SinglePlatformToken>;

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

impl<'msg> ::__pb::SettableValue<SinglePlatformToken> for SinglePlatformTokenView<'msg> {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, SinglePlatformToken>)
    where SinglePlatformToken: 'dst {
    unsafe { ::__pb::__runtime::upb_Message_DeepCopy(
      mutator.inner.msg(),
      self.msg,
      ::__std::ptr::addr_of!(openim__ffi__SinglePlatformToken_msg_init),
      mutator.inner.arena(::__pb::__internal::Private).raw(),
    ) };
  }
}

impl ::__pb::SettableValue<SinglePlatformToken> for SinglePlatformToken {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, SinglePlatformToken>)
    where SinglePlatformToken: 'dst {
    self.as_view().set_on(::__pb::__internal::Private, mutator);
  }
}

unsafe impl ::__pb::ProxiedInRepeated for SinglePlatformToken {
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
    // - `v.raw_msg()` and `dest_msg` both have message minitable `openim__ffi__SinglePlatformToken_msg_init`.
    unsafe {
      ::__pb::__runtime::upb_Message_DeepCopy(
        dest_msg,
        v.raw_msg(),
        ::__std::ptr::addr_of!(openim__ffi__SinglePlatformToken_msg_init),
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
    // - `v.raw_msg()` is a valid `const upb_Message*` with minitable `openim__ffi__SinglePlatformToken_msg_init`.
    let msg_ptr = unsafe {
      ::__pb::__runtime::upb_Message_DeepClone(
        v.raw_msg(),
        std::ptr::addr_of!(openim__ffi__SinglePlatformToken_msg_init),
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
      // - Elements of `src` and `dest` have message minitable `openim__ffi__SinglePlatformToken_msg_init`.
      unsafe {
        ::__pb::__runtime::repeated_message_copy_from(src, dest, ::__std::ptr::addr_of!(openim__ffi__SinglePlatformToken_msg_init));
      }
  }
}
impl ::__pb::__runtime::UpbTypeConversions for SinglePlatformToken {
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
          val.raw_msg(), ::__std::ptr::addr_of!(openim__ffi__SinglePlatformToken_msg_init), arena)
          .expect("upb_Message_DeepClone failed.");
      Self::to_message_value(
          SinglePlatformTokenView::new(::__pb::__internal::Private, cloned_msg))
      }

    unsafe fn from_message_value<'msg>(msg: ::__pb::__runtime::upb_MessageValue)
        -> ::__pb::View<'msg, Self> {
        SinglePlatformTokenView::new(
            ::__pb::__internal::Private,
            unsafe { msg.msg_val }
                .expect("expected present message value in map"))
    }
}
impl ::__pb::ProxiedInMapValue<i32> for SinglePlatformToken {
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
impl ::__pb::ProxiedInMapValue<u32> for SinglePlatformToken {
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
impl ::__pb::ProxiedInMapValue<i64> for SinglePlatformToken {
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
impl ::__pb::ProxiedInMapValue<u64> for SinglePlatformToken {
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
impl ::__pb::ProxiedInMapValue<bool> for SinglePlatformToken {
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
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for SinglePlatformToken {
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
pub struct SinglePlatformTokenMut<'msg> {
  inner: ::__pb::__runtime::MutatorMessageRef<'msg>,
}

impl std::fmt::Debug for SinglePlatformTokenMut<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> SinglePlatformTokenMut<'msg> {
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

  // platformID: optional int32
  pub fn platformID(&self) -> i32 {
    unsafe { openim_ffi_SinglePlatformToken_platformID(self.raw_msg()) }
  }
  pub fn set_platformID(&mut self, val: i32) {
    unsafe { openim_ffi_SinglePlatformToken_set_platformID(self.raw_msg(), val) }
  }

  // total: optional int32
  pub fn total(&self) -> i32 {
    unsafe { openim_ffi_SinglePlatformToken_total(self.raw_msg()) }
  }
  pub fn set_total(&mut self, val: i32) {
    unsafe { openim_ffi_SinglePlatformToken_set_total(self.raw_msg(), val) }
  }

  // token: repeated string
  pub fn token(&self) -> ::__pb::RepeatedView<'_, ::__pb::ProtoStr> {
    unsafe {
      _openim_ffi_SinglePlatformToken_token_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<::__pb::ProtoStr>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }
  pub fn token_mut(&mut self) -> ::__pb::RepeatedMut<'_, ::__pb::ProtoStr> {
    unsafe {
      ::__pb::RepeatedMut::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__runtime::InnerRepeatedMut::new(
          ::__pb::__internal::Private,
          _openim_ffi_SinglePlatformToken_token_mutable_upb_array(
            self.raw_msg(),
            /* optional size pointer */ std::ptr::null(),
            self.arena().raw(),
          ),
          self.arena(),
        ),
      )
    }
  }

}

// SAFETY:
// - `SinglePlatformTokenMut` does not perform any shared mutation.
// - `SinglePlatformTokenMut` is not `Send`, and so even in the presence of mutator
//   splitting, synchronous access of an arena is impossible.
unsafe impl Sync for SinglePlatformTokenMut<'_> {}

impl<'msg> ::__pb::MutProxy<'msg> for SinglePlatformTokenMut<'msg> {
  fn as_mut(&mut self) -> ::__pb::Mut<'_, SinglePlatformToken> {
    SinglePlatformTokenMut { inner: self.inner }
  }
  fn into_mut<'shorter>(self) -> ::__pb::Mut<'shorter, SinglePlatformToken> where 'msg : 'shorter { self }
}

impl<'msg> ::__pb::ViewProxy<'msg> for SinglePlatformTokenMut<'msg> {
  type Proxied = SinglePlatformToken;
  fn as_view(&self) -> ::__pb::View<'_, SinglePlatformToken> {
    SinglePlatformTokenView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, SinglePlatformToken> where 'msg: 'shorter {
    SinglePlatformTokenView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
}

#[allow(dead_code)]
impl SinglePlatformToken {
  pub fn new() -> Self {
    let arena = ::__pb::__runtime::Arena::new();
    Self {
      inner: ::__pb::__runtime::MessageInner {
        msg: unsafe { openim_ffi_SinglePlatformToken_new(arena.raw()) },
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
    // SAFETY: openim__ffi__SinglePlatformToken_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__SinglePlatformToken_msg_init) };
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

  pub fn as_view(&self) -> SinglePlatformTokenView {
    SinglePlatformTokenView::new(::__pb::__internal::Private, self.inner.msg)
  }

  pub fn as_mut(&mut self) -> SinglePlatformTokenMut {
    SinglePlatformTokenMut::new(::__pb::__internal::Private, &mut self.inner)
  }

  // platformID: optional int32
  pub fn platformID(&self) -> i32 {
    unsafe { openim_ffi_SinglePlatformToken_platformID(self.raw_msg()) }
  }
  pub fn set_platformID(&mut self, val: i32) {
    unsafe { openim_ffi_SinglePlatformToken_set_platformID(self.raw_msg(), val) }
  }

  // total: optional int32
  pub fn total(&self) -> i32 {
    unsafe { openim_ffi_SinglePlatformToken_total(self.raw_msg()) }
  }
  pub fn set_total(&mut self, val: i32) {
    unsafe { openim_ffi_SinglePlatformToken_set_total(self.raw_msg(), val) }
  }

  // token: repeated string
  pub fn token(&self) -> ::__pb::RepeatedView<'_, ::__pb::ProtoStr> {
    unsafe {
      _openim_ffi_SinglePlatformToken_token_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<::__pb::ProtoStr>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }
  pub fn token_mut(&mut self) -> ::__pb::RepeatedMut<'_, ::__pb::ProtoStr> {
    unsafe {
      ::__pb::RepeatedMut::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__runtime::InnerRepeatedMut::new(
          ::__pb::__internal::Private,
          _openim_ffi_SinglePlatformToken_token_mutable_upb_array(
            self.raw_msg(),
            /* optional size pointer */ std::ptr::null(),
            self.arena().raw(),
          ),
          self.arena(),
        ),
      )
    }
  }

}  // impl SinglePlatformToken

impl ::__std::ops::Drop for SinglePlatformToken {
  fn drop(&mut self) {
  }
}

extern "C" {
  fn openim_ffi_SinglePlatformToken_new(arena: ::__pb::__runtime::RawArena) -> ::__pb::__runtime::RawMessage;
  /// Opaque wrapper for this message's MiniTable. The only valid way to
  /// reference this static is with `std::ptr::addr_of!(..)`.
  static openim__ffi__SinglePlatformToken_msg_init: ::__pb::__runtime::upb_MiniTable;

  fn openim_ffi_SinglePlatformToken_platformID(raw_msg: ::__pb::__runtime::RawMessage) -> i32;
  fn openim_ffi_SinglePlatformToken_set_platformID(raw_msg: ::__pb::__runtime::RawMessage, val: i32);

  fn openim_ffi_SinglePlatformToken_total(raw_msg: ::__pb::__runtime::RawMessage) -> i32;
  fn openim_ffi_SinglePlatformToken_set_total(raw_msg: ::__pb::__runtime::RawMessage, val: i32);

  fn openim_ffi_SinglePlatformToken_clear_token(raw_msg: ::__pb::__runtime::RawMessage);
  fn _openim_ffi_SinglePlatformToken_token_mutable_upb_array(
    raw_msg: ::__pb::__runtime::RawMessage,
    size: *const usize,
    arena: ::__pb::__runtime::RawArena,
  ) -> ::__pb::__runtime::RawRepeatedField;
  //  Returns `None` when returned array pointer is NULL.
  fn _openim_ffi_SinglePlatformToken_token_upb_array(
    raw_msg: ::__pb::__runtime::RawMessage,
    size: *const usize,
  ) -> Option<::__pb::__runtime::RawRepeatedField>;


}  // extern "C" for SinglePlatformToken


#[allow(non_camel_case_types)]
pub struct KickUserOfflineReq {
  inner: ::__pb::__runtime::MessageInner
}

impl std::fmt::Debug for KickUserOfflineReq {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

impl std::default::Default for KickUserOfflineReq {
  fn default() -> Self {
    Self::new()
  }
}

// SAFETY:
// - `KickUserOfflineReq` is `Sync` because it does not implement interior mutability.
//    Neither does `KickUserOfflineReqMut`.
unsafe impl Sync for KickUserOfflineReq {}

// SAFETY:
// - `KickUserOfflineReq` is `Send` because it uniquely owns its arena and does
//   not use thread-local data.
unsafe impl Send for KickUserOfflineReq {}

impl ::__pb::Proxied for KickUserOfflineReq {
  type View<'msg> = KickUserOfflineReqView<'msg>;
  type Mut<'msg> = KickUserOfflineReqMut<'msg>;
}

#[derive(Copy, Clone)]
#[allow(dead_code)]
pub struct KickUserOfflineReqView<'msg> {
  msg: ::__pb::__runtime::RawMessage,
  _phantom: ::__std::marker::PhantomData<&'msg ()>,
}

impl std::fmt::Debug for KickUserOfflineReqView<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> KickUserOfflineReqView<'msg> {
  #[doc(hidden)]
  pub fn new(_private: ::__pb::__internal::Private, msg: ::__pb::__runtime::RawMessage) -> Self {
    Self { msg, _phantom: ::__std::marker::PhantomData }
  }

  fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
    self.msg
  }

  pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
    let arena = ::__pb::__runtime::Arena::new();
    // SAFETY: openim__ffi__KickUserOfflineReq_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__KickUserOfflineReq_msg_init) };
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

  // platformID: optional int32
  pub fn platformID(self) -> i32 {
    unsafe { openim_ffi_KickUserOfflineReq_platformID(self.raw_msg()) }
  }

  // kickUserIDList: repeated string
  pub fn kickUserIDList(self) -> ::__pb::RepeatedView<'msg, ::__pb::ProtoStr> {
    unsafe {
      _openim_ffi_KickUserOfflineReq_kickUserIDList_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<::__pb::ProtoStr>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }

}

// SAFETY:
// - `KickUserOfflineReqView` is `Sync` because it does not support mutation.
unsafe impl Sync for KickUserOfflineReqView<'_> {}

// SAFETY:
// - `KickUserOfflineReqView` is `Send` because while its alive a `KickUserOfflineReqMut` cannot.
// - `KickUserOfflineReqView` does not use thread-local data.
unsafe impl Send for KickUserOfflineReqView<'_> {}

impl<'msg> ::__pb::ViewProxy<'msg> for KickUserOfflineReqView<'msg> {
  type Proxied = KickUserOfflineReq;

  fn as_view(&self) -> ::__pb::View<'msg, KickUserOfflineReq> {
    *self
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, KickUserOfflineReq> where 'msg: 'shorter {
    self
  }
}

impl ::__pb::__internal::ProxiedWithRawVTable for KickUserOfflineReq {
  type VTable = ::__pb::__runtime::MessageVTable;

  fn make_view(_private: ::__pb::__internal::Private,
              mut_inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::View<'_, Self> {
    let msg = unsafe {
      (mut_inner.vtable().getter)(mut_inner.msg_ref().msg())
    };
    KickUserOfflineReqView::new(::__pb::__internal::Private, msg.unwrap_or_else(||::__pb::__runtime::ScratchSpace::zeroed_block(::__pb::__internal::Private)))
  }

  fn make_mut(_private: ::__pb::__internal::Private,
              inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::Mut<'_, Self> {
    let raw_submsg = unsafe {
      (inner.vtable().mut_getter)(inner.msg_ref().msg(), inner.msg_ref().arena(::__pb::__internal::Private).raw())
    };
    KickUserOfflineReqMut::from_parent(::__pb::__internal::Private, inner.msg_ref(), raw_submsg)
  }
}

impl ::__pb::__internal::ProxiedWithRawOptionalVTable for KickUserOfflineReq {
  type OptionalVTable = ::__pb::__runtime::MessageVTable;

  fn upcast_vtable(_private: ::__pb::__internal::Private,
                   optional_vtable: &'static Self::OptionalVTable)
                  -> &'static Self::VTable {
    &optional_vtable
  }
}

impl ::__pb::ProxiedWithPresence for KickUserOfflineReq {
  type PresentMutData<'a> = ::__pb::__runtime::MessagePresentMutData<'a, KickUserOfflineReq>;
  type AbsentMutData<'a> = ::__pb::__runtime::MessageAbsentMutData<'a, KickUserOfflineReq>;

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

impl<'msg> ::__pb::SettableValue<KickUserOfflineReq> for KickUserOfflineReqView<'msg> {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, KickUserOfflineReq>)
    where KickUserOfflineReq: 'dst {
    unsafe { ::__pb::__runtime::upb_Message_DeepCopy(
      mutator.inner.msg(),
      self.msg,
      ::__std::ptr::addr_of!(openim__ffi__KickUserOfflineReq_msg_init),
      mutator.inner.arena(::__pb::__internal::Private).raw(),
    ) };
  }
}

impl ::__pb::SettableValue<KickUserOfflineReq> for KickUserOfflineReq {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, KickUserOfflineReq>)
    where KickUserOfflineReq: 'dst {
    self.as_view().set_on(::__pb::__internal::Private, mutator);
  }
}

unsafe impl ::__pb::ProxiedInRepeated for KickUserOfflineReq {
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
    // - `v.raw_msg()` and `dest_msg` both have message minitable `openim__ffi__KickUserOfflineReq_msg_init`.
    unsafe {
      ::__pb::__runtime::upb_Message_DeepCopy(
        dest_msg,
        v.raw_msg(),
        ::__std::ptr::addr_of!(openim__ffi__KickUserOfflineReq_msg_init),
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
    // - `v.raw_msg()` is a valid `const upb_Message*` with minitable `openim__ffi__KickUserOfflineReq_msg_init`.
    let msg_ptr = unsafe {
      ::__pb::__runtime::upb_Message_DeepClone(
        v.raw_msg(),
        std::ptr::addr_of!(openim__ffi__KickUserOfflineReq_msg_init),
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
      // - Elements of `src` and `dest` have message minitable `openim__ffi__KickUserOfflineReq_msg_init`.
      unsafe {
        ::__pb::__runtime::repeated_message_copy_from(src, dest, ::__std::ptr::addr_of!(openim__ffi__KickUserOfflineReq_msg_init));
      }
  }
}
impl ::__pb::__runtime::UpbTypeConversions for KickUserOfflineReq {
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
          val.raw_msg(), ::__std::ptr::addr_of!(openim__ffi__KickUserOfflineReq_msg_init), arena)
          .expect("upb_Message_DeepClone failed.");
      Self::to_message_value(
          KickUserOfflineReqView::new(::__pb::__internal::Private, cloned_msg))
      }

    unsafe fn from_message_value<'msg>(msg: ::__pb::__runtime::upb_MessageValue)
        -> ::__pb::View<'msg, Self> {
        KickUserOfflineReqView::new(
            ::__pb::__internal::Private,
            unsafe { msg.msg_val }
                .expect("expected present message value in map"))
    }
}
impl ::__pb::ProxiedInMapValue<i32> for KickUserOfflineReq {
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
impl ::__pb::ProxiedInMapValue<u32> for KickUserOfflineReq {
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
impl ::__pb::ProxiedInMapValue<i64> for KickUserOfflineReq {
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
impl ::__pb::ProxiedInMapValue<u64> for KickUserOfflineReq {
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
impl ::__pb::ProxiedInMapValue<bool> for KickUserOfflineReq {
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
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for KickUserOfflineReq {
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
pub struct KickUserOfflineReqMut<'msg> {
  inner: ::__pb::__runtime::MutatorMessageRef<'msg>,
}

impl std::fmt::Debug for KickUserOfflineReqMut<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> KickUserOfflineReqMut<'msg> {
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

  // platformID: optional int32
  pub fn platformID(&self) -> i32 {
    unsafe { openim_ffi_KickUserOfflineReq_platformID(self.raw_msg()) }
  }
  pub fn set_platformID(&mut self, val: i32) {
    unsafe { openim_ffi_KickUserOfflineReq_set_platformID(self.raw_msg(), val) }
  }

  // kickUserIDList: repeated string
  pub fn kickUserIDList(&self) -> ::__pb::RepeatedView<'_, ::__pb::ProtoStr> {
    unsafe {
      _openim_ffi_KickUserOfflineReq_kickUserIDList_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<::__pb::ProtoStr>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }
  pub fn kickUserIDList_mut(&mut self) -> ::__pb::RepeatedMut<'_, ::__pb::ProtoStr> {
    unsafe {
      ::__pb::RepeatedMut::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__runtime::InnerRepeatedMut::new(
          ::__pb::__internal::Private,
          _openim_ffi_KickUserOfflineReq_kickUserIDList_mutable_upb_array(
            self.raw_msg(),
            /* optional size pointer */ std::ptr::null(),
            self.arena().raw(),
          ),
          self.arena(),
        ),
      )
    }
  }

}

// SAFETY:
// - `KickUserOfflineReqMut` does not perform any shared mutation.
// - `KickUserOfflineReqMut` is not `Send`, and so even in the presence of mutator
//   splitting, synchronous access of an arena is impossible.
unsafe impl Sync for KickUserOfflineReqMut<'_> {}

impl<'msg> ::__pb::MutProxy<'msg> for KickUserOfflineReqMut<'msg> {
  fn as_mut(&mut self) -> ::__pb::Mut<'_, KickUserOfflineReq> {
    KickUserOfflineReqMut { inner: self.inner }
  }
  fn into_mut<'shorter>(self) -> ::__pb::Mut<'shorter, KickUserOfflineReq> where 'msg : 'shorter { self }
}

impl<'msg> ::__pb::ViewProxy<'msg> for KickUserOfflineReqMut<'msg> {
  type Proxied = KickUserOfflineReq;
  fn as_view(&self) -> ::__pb::View<'_, KickUserOfflineReq> {
    KickUserOfflineReqView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, KickUserOfflineReq> where 'msg: 'shorter {
    KickUserOfflineReqView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
}

#[allow(dead_code)]
impl KickUserOfflineReq {
  pub fn new() -> Self {
    let arena = ::__pb::__runtime::Arena::new();
    Self {
      inner: ::__pb::__runtime::MessageInner {
        msg: unsafe { openim_ffi_KickUserOfflineReq_new(arena.raw()) },
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
    // SAFETY: openim__ffi__KickUserOfflineReq_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__KickUserOfflineReq_msg_init) };
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

  pub fn as_view(&self) -> KickUserOfflineReqView {
    KickUserOfflineReqView::new(::__pb::__internal::Private, self.inner.msg)
  }

  pub fn as_mut(&mut self) -> KickUserOfflineReqMut {
    KickUserOfflineReqMut::new(::__pb::__internal::Private, &mut self.inner)
  }

  // platformID: optional int32
  pub fn platformID(&self) -> i32 {
    unsafe { openim_ffi_KickUserOfflineReq_platformID(self.raw_msg()) }
  }
  pub fn set_platformID(&mut self, val: i32) {
    unsafe { openim_ffi_KickUserOfflineReq_set_platformID(self.raw_msg(), val) }
  }

  // kickUserIDList: repeated string
  pub fn kickUserIDList(&self) -> ::__pb::RepeatedView<'_, ::__pb::ProtoStr> {
    unsafe {
      _openim_ffi_KickUserOfflineReq_kickUserIDList_upb_array(
        self.raw_msg(),
        /* optional size pointer */ std::ptr::null(),
      ) }
      .map_or_else(
        ::__pb::__runtime::empty_array::<::__pb::ProtoStr>,
        |raw| unsafe {
          ::__pb::RepeatedView::from_raw(::__pb::__internal::Private, raw)
        }
      )
  }
  pub fn kickUserIDList_mut(&mut self) -> ::__pb::RepeatedMut<'_, ::__pb::ProtoStr> {
    unsafe {
      ::__pb::RepeatedMut::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__runtime::InnerRepeatedMut::new(
          ::__pb::__internal::Private,
          _openim_ffi_KickUserOfflineReq_kickUserIDList_mutable_upb_array(
            self.raw_msg(),
            /* optional size pointer */ std::ptr::null(),
            self.arena().raw(),
          ),
          self.arena(),
        ),
      )
    }
  }

}  // impl KickUserOfflineReq

impl ::__std::ops::Drop for KickUserOfflineReq {
  fn drop(&mut self) {
  }
}

extern "C" {
  fn openim_ffi_KickUserOfflineReq_new(arena: ::__pb::__runtime::RawArena) -> ::__pb::__runtime::RawMessage;
  /// Opaque wrapper for this message's MiniTable. The only valid way to
  /// reference this static is with `std::ptr::addr_of!(..)`.
  static openim__ffi__KickUserOfflineReq_msg_init: ::__pb::__runtime::upb_MiniTable;

  fn openim_ffi_KickUserOfflineReq_platformID(raw_msg: ::__pb::__runtime::RawMessage) -> i32;
  fn openim_ffi_KickUserOfflineReq_set_platformID(raw_msg: ::__pb::__runtime::RawMessage, val: i32);

  fn openim_ffi_KickUserOfflineReq_clear_kickUserIDList(raw_msg: ::__pb::__runtime::RawMessage);
  fn _openim_ffi_KickUserOfflineReq_kickUserIDList_mutable_upb_array(
    raw_msg: ::__pb::__runtime::RawMessage,
    size: *const usize,
    arena: ::__pb::__runtime::RawArena,
  ) -> ::__pb::__runtime::RawRepeatedField;
  //  Returns `None` when returned array pointer is NULL.
  fn _openim_ffi_KickUserOfflineReq_kickUserIDList_upb_array(
    raw_msg: ::__pb::__runtime::RawMessage,
    size: *const usize,
  ) -> Option<::__pb::__runtime::RawRepeatedField>;


}  // extern "C" for KickUserOfflineReq


#[allow(non_camel_case_types)]
pub struct KickUserOfflineResp {
  inner: ::__pb::__runtime::MessageInner
}

impl std::fmt::Debug for KickUserOfflineResp {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

impl std::default::Default for KickUserOfflineResp {
  fn default() -> Self {
    Self::new()
  }
}

// SAFETY:
// - `KickUserOfflineResp` is `Sync` because it does not implement interior mutability.
//    Neither does `KickUserOfflineRespMut`.
unsafe impl Sync for KickUserOfflineResp {}

// SAFETY:
// - `KickUserOfflineResp` is `Send` because it uniquely owns its arena and does
//   not use thread-local data.
unsafe impl Send for KickUserOfflineResp {}

impl ::__pb::Proxied for KickUserOfflineResp {
  type View<'msg> = KickUserOfflineRespView<'msg>;
  type Mut<'msg> = KickUserOfflineRespMut<'msg>;
}

#[derive(Copy, Clone)]
#[allow(dead_code)]
pub struct KickUserOfflineRespView<'msg> {
  msg: ::__pb::__runtime::RawMessage,
  _phantom: ::__std::marker::PhantomData<&'msg ()>,
}

impl std::fmt::Debug for KickUserOfflineRespView<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> KickUserOfflineRespView<'msg> {
  #[doc(hidden)]
  pub fn new(_private: ::__pb::__internal::Private, msg: ::__pb::__runtime::RawMessage) -> Self {
    Self { msg, _phantom: ::__std::marker::PhantomData }
  }

  fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
    self.msg
  }

  pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
    let arena = ::__pb::__runtime::Arena::new();
    // SAFETY: openim__ffi__KickUserOfflineResp_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__KickUserOfflineResp_msg_init) };
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

}

// SAFETY:
// - `KickUserOfflineRespView` is `Sync` because it does not support mutation.
unsafe impl Sync for KickUserOfflineRespView<'_> {}

// SAFETY:
// - `KickUserOfflineRespView` is `Send` because while its alive a `KickUserOfflineRespMut` cannot.
// - `KickUserOfflineRespView` does not use thread-local data.
unsafe impl Send for KickUserOfflineRespView<'_> {}

impl<'msg> ::__pb::ViewProxy<'msg> for KickUserOfflineRespView<'msg> {
  type Proxied = KickUserOfflineResp;

  fn as_view(&self) -> ::__pb::View<'msg, KickUserOfflineResp> {
    *self
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, KickUserOfflineResp> where 'msg: 'shorter {
    self
  }
}

impl ::__pb::__internal::ProxiedWithRawVTable for KickUserOfflineResp {
  type VTable = ::__pb::__runtime::MessageVTable;

  fn make_view(_private: ::__pb::__internal::Private,
              mut_inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::View<'_, Self> {
    let msg = unsafe {
      (mut_inner.vtable().getter)(mut_inner.msg_ref().msg())
    };
    KickUserOfflineRespView::new(::__pb::__internal::Private, msg.unwrap_or_else(||::__pb::__runtime::ScratchSpace::zeroed_block(::__pb::__internal::Private)))
  }

  fn make_mut(_private: ::__pb::__internal::Private,
              inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::Mut<'_, Self> {
    let raw_submsg = unsafe {
      (inner.vtable().mut_getter)(inner.msg_ref().msg(), inner.msg_ref().arena(::__pb::__internal::Private).raw())
    };
    KickUserOfflineRespMut::from_parent(::__pb::__internal::Private, inner.msg_ref(), raw_submsg)
  }
}

impl ::__pb::__internal::ProxiedWithRawOptionalVTable for KickUserOfflineResp {
  type OptionalVTable = ::__pb::__runtime::MessageVTable;

  fn upcast_vtable(_private: ::__pb::__internal::Private,
                   optional_vtable: &'static Self::OptionalVTable)
                  -> &'static Self::VTable {
    &optional_vtable
  }
}

impl ::__pb::ProxiedWithPresence for KickUserOfflineResp {
  type PresentMutData<'a> = ::__pb::__runtime::MessagePresentMutData<'a, KickUserOfflineResp>;
  type AbsentMutData<'a> = ::__pb::__runtime::MessageAbsentMutData<'a, KickUserOfflineResp>;

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

impl<'msg> ::__pb::SettableValue<KickUserOfflineResp> for KickUserOfflineRespView<'msg> {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, KickUserOfflineResp>)
    where KickUserOfflineResp: 'dst {
    unsafe { ::__pb::__runtime::upb_Message_DeepCopy(
      mutator.inner.msg(),
      self.msg,
      ::__std::ptr::addr_of!(openim__ffi__KickUserOfflineResp_msg_init),
      mutator.inner.arena(::__pb::__internal::Private).raw(),
    ) };
  }
}

impl ::__pb::SettableValue<KickUserOfflineResp> for KickUserOfflineResp {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, KickUserOfflineResp>)
    where KickUserOfflineResp: 'dst {
    self.as_view().set_on(::__pb::__internal::Private, mutator);
  }
}

unsafe impl ::__pb::ProxiedInRepeated for KickUserOfflineResp {
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
    // - `v.raw_msg()` and `dest_msg` both have message minitable `openim__ffi__KickUserOfflineResp_msg_init`.
    unsafe {
      ::__pb::__runtime::upb_Message_DeepCopy(
        dest_msg,
        v.raw_msg(),
        ::__std::ptr::addr_of!(openim__ffi__KickUserOfflineResp_msg_init),
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
    // - `v.raw_msg()` is a valid `const upb_Message*` with minitable `openim__ffi__KickUserOfflineResp_msg_init`.
    let msg_ptr = unsafe {
      ::__pb::__runtime::upb_Message_DeepClone(
        v.raw_msg(),
        std::ptr::addr_of!(openim__ffi__KickUserOfflineResp_msg_init),
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
      // - Elements of `src` and `dest` have message minitable `openim__ffi__KickUserOfflineResp_msg_init`.
      unsafe {
        ::__pb::__runtime::repeated_message_copy_from(src, dest, ::__std::ptr::addr_of!(openim__ffi__KickUserOfflineResp_msg_init));
      }
  }
}
impl ::__pb::__runtime::UpbTypeConversions for KickUserOfflineResp {
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
          val.raw_msg(), ::__std::ptr::addr_of!(openim__ffi__KickUserOfflineResp_msg_init), arena)
          .expect("upb_Message_DeepClone failed.");
      Self::to_message_value(
          KickUserOfflineRespView::new(::__pb::__internal::Private, cloned_msg))
      }

    unsafe fn from_message_value<'msg>(msg: ::__pb::__runtime::upb_MessageValue)
        -> ::__pb::View<'msg, Self> {
        KickUserOfflineRespView::new(
            ::__pb::__internal::Private,
            unsafe { msg.msg_val }
                .expect("expected present message value in map"))
    }
}
impl ::__pb::ProxiedInMapValue<i32> for KickUserOfflineResp {
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
impl ::__pb::ProxiedInMapValue<u32> for KickUserOfflineResp {
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
impl ::__pb::ProxiedInMapValue<i64> for KickUserOfflineResp {
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
impl ::__pb::ProxiedInMapValue<u64> for KickUserOfflineResp {
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
impl ::__pb::ProxiedInMapValue<bool> for KickUserOfflineResp {
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
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for KickUserOfflineResp {
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
pub struct KickUserOfflineRespMut<'msg> {
  inner: ::__pb::__runtime::MutatorMessageRef<'msg>,
}

impl std::fmt::Debug for KickUserOfflineRespMut<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> KickUserOfflineRespMut<'msg> {
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

}

// SAFETY:
// - `KickUserOfflineRespMut` does not perform any shared mutation.
// - `KickUserOfflineRespMut` is not `Send`, and so even in the presence of mutator
//   splitting, synchronous access of an arena is impossible.
unsafe impl Sync for KickUserOfflineRespMut<'_> {}

impl<'msg> ::__pb::MutProxy<'msg> for KickUserOfflineRespMut<'msg> {
  fn as_mut(&mut self) -> ::__pb::Mut<'_, KickUserOfflineResp> {
    KickUserOfflineRespMut { inner: self.inner }
  }
  fn into_mut<'shorter>(self) -> ::__pb::Mut<'shorter, KickUserOfflineResp> where 'msg : 'shorter { self }
}

impl<'msg> ::__pb::ViewProxy<'msg> for KickUserOfflineRespMut<'msg> {
  type Proxied = KickUserOfflineResp;
  fn as_view(&self) -> ::__pb::View<'_, KickUserOfflineResp> {
    KickUserOfflineRespView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, KickUserOfflineResp> where 'msg: 'shorter {
    KickUserOfflineRespView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
}

#[allow(dead_code)]
impl KickUserOfflineResp {
  pub fn new() -> Self {
    let arena = ::__pb::__runtime::Arena::new();
    Self {
      inner: ::__pb::__runtime::MessageInner {
        msg: unsafe { openim_ffi_KickUserOfflineResp_new(arena.raw()) },
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
    // SAFETY: openim__ffi__KickUserOfflineResp_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__KickUserOfflineResp_msg_init) };
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

  pub fn as_view(&self) -> KickUserOfflineRespView {
    KickUserOfflineRespView::new(::__pb::__internal::Private, self.inner.msg)
  }

  pub fn as_mut(&mut self) -> KickUserOfflineRespMut {
    KickUserOfflineRespMut::new(::__pb::__internal::Private, &mut self.inner)
  }

}  // impl KickUserOfflineResp

impl ::__std::ops::Drop for KickUserOfflineResp {
  fn drop(&mut self) {
  }
}

extern "C" {
  fn openim_ffi_KickUserOfflineResp_new(arena: ::__pb::__runtime::RawArena) -> ::__pb::__runtime::RawMessage;
  /// Opaque wrapper for this message's MiniTable. The only valid way to
  /// reference this static is with `std::ptr::addr_of!(..)`.
  static openim__ffi__KickUserOfflineResp_msg_init: ::__pb::__runtime::upb_MiniTable;


}  // extern "C" for KickUserOfflineResp


#[allow(non_camel_case_types)]
pub struct MultiTerminalLoginCheckReq {
  inner: ::__pb::__runtime::MessageInner
}

impl std::fmt::Debug for MultiTerminalLoginCheckReq {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

impl std::default::Default for MultiTerminalLoginCheckReq {
  fn default() -> Self {
    Self::new()
  }
}

// SAFETY:
// - `MultiTerminalLoginCheckReq` is `Sync` because it does not implement interior mutability.
//    Neither does `MultiTerminalLoginCheckReqMut`.
unsafe impl Sync for MultiTerminalLoginCheckReq {}

// SAFETY:
// - `MultiTerminalLoginCheckReq` is `Send` because it uniquely owns its arena and does
//   not use thread-local data.
unsafe impl Send for MultiTerminalLoginCheckReq {}

impl ::__pb::Proxied for MultiTerminalLoginCheckReq {
  type View<'msg> = MultiTerminalLoginCheckReqView<'msg>;
  type Mut<'msg> = MultiTerminalLoginCheckReqMut<'msg>;
}

#[derive(Copy, Clone)]
#[allow(dead_code)]
pub struct MultiTerminalLoginCheckReqView<'msg> {
  msg: ::__pb::__runtime::RawMessage,
  _phantom: ::__std::marker::PhantomData<&'msg ()>,
}

impl std::fmt::Debug for MultiTerminalLoginCheckReqView<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> MultiTerminalLoginCheckReqView<'msg> {
  #[doc(hidden)]
  pub fn new(_private: ::__pb::__internal::Private, msg: ::__pb::__runtime::RawMessage) -> Self {
    Self { msg, _phantom: ::__std::marker::PhantomData }
  }

  fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
    self.msg
  }

  pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
    let arena = ::__pb::__runtime::Arena::new();
    // SAFETY: openim__ffi__MultiTerminalLoginCheckReq_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__MultiTerminalLoginCheckReq_msg_init) };
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

  // userID: optional string
  pub fn userID(self) -> &'msg ::__pb::ProtoStr {
    let view = unsafe { openim_ffi_MultiTerminalLoginCheckReq_userID(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }

  // platformID: optional int32
  pub fn platformID(self) -> i32 {
    unsafe { openim_ffi_MultiTerminalLoginCheckReq_platformID(self.raw_msg()) }
  }

  // token: optional string
  pub fn token(self) -> &'msg ::__pb::ProtoStr {
    let view = unsafe { openim_ffi_MultiTerminalLoginCheckReq_token(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }

}

// SAFETY:
// - `MultiTerminalLoginCheckReqView` is `Sync` because it does not support mutation.
unsafe impl Sync for MultiTerminalLoginCheckReqView<'_> {}

// SAFETY:
// - `MultiTerminalLoginCheckReqView` is `Send` because while its alive a `MultiTerminalLoginCheckReqMut` cannot.
// - `MultiTerminalLoginCheckReqView` does not use thread-local data.
unsafe impl Send for MultiTerminalLoginCheckReqView<'_> {}

impl<'msg> ::__pb::ViewProxy<'msg> for MultiTerminalLoginCheckReqView<'msg> {
  type Proxied = MultiTerminalLoginCheckReq;

  fn as_view(&self) -> ::__pb::View<'msg, MultiTerminalLoginCheckReq> {
    *self
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, MultiTerminalLoginCheckReq> where 'msg: 'shorter {
    self
  }
}

impl ::__pb::__internal::ProxiedWithRawVTable for MultiTerminalLoginCheckReq {
  type VTable = ::__pb::__runtime::MessageVTable;

  fn make_view(_private: ::__pb::__internal::Private,
              mut_inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::View<'_, Self> {
    let msg = unsafe {
      (mut_inner.vtable().getter)(mut_inner.msg_ref().msg())
    };
    MultiTerminalLoginCheckReqView::new(::__pb::__internal::Private, msg.unwrap_or_else(||::__pb::__runtime::ScratchSpace::zeroed_block(::__pb::__internal::Private)))
  }

  fn make_mut(_private: ::__pb::__internal::Private,
              inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::Mut<'_, Self> {
    let raw_submsg = unsafe {
      (inner.vtable().mut_getter)(inner.msg_ref().msg(), inner.msg_ref().arena(::__pb::__internal::Private).raw())
    };
    MultiTerminalLoginCheckReqMut::from_parent(::__pb::__internal::Private, inner.msg_ref(), raw_submsg)
  }
}

impl ::__pb::__internal::ProxiedWithRawOptionalVTable for MultiTerminalLoginCheckReq {
  type OptionalVTable = ::__pb::__runtime::MessageVTable;

  fn upcast_vtable(_private: ::__pb::__internal::Private,
                   optional_vtable: &'static Self::OptionalVTable)
                  -> &'static Self::VTable {
    &optional_vtable
  }
}

impl ::__pb::ProxiedWithPresence for MultiTerminalLoginCheckReq {
  type PresentMutData<'a> = ::__pb::__runtime::MessagePresentMutData<'a, MultiTerminalLoginCheckReq>;
  type AbsentMutData<'a> = ::__pb::__runtime::MessageAbsentMutData<'a, MultiTerminalLoginCheckReq>;

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

impl<'msg> ::__pb::SettableValue<MultiTerminalLoginCheckReq> for MultiTerminalLoginCheckReqView<'msg> {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, MultiTerminalLoginCheckReq>)
    where MultiTerminalLoginCheckReq: 'dst {
    unsafe { ::__pb::__runtime::upb_Message_DeepCopy(
      mutator.inner.msg(),
      self.msg,
      ::__std::ptr::addr_of!(openim__ffi__MultiTerminalLoginCheckReq_msg_init),
      mutator.inner.arena(::__pb::__internal::Private).raw(),
    ) };
  }
}

impl ::__pb::SettableValue<MultiTerminalLoginCheckReq> for MultiTerminalLoginCheckReq {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, MultiTerminalLoginCheckReq>)
    where MultiTerminalLoginCheckReq: 'dst {
    self.as_view().set_on(::__pb::__internal::Private, mutator);
  }
}

unsafe impl ::__pb::ProxiedInRepeated for MultiTerminalLoginCheckReq {
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
    // - `v.raw_msg()` and `dest_msg` both have message minitable `openim__ffi__MultiTerminalLoginCheckReq_msg_init`.
    unsafe {
      ::__pb::__runtime::upb_Message_DeepCopy(
        dest_msg,
        v.raw_msg(),
        ::__std::ptr::addr_of!(openim__ffi__MultiTerminalLoginCheckReq_msg_init),
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
    // - `v.raw_msg()` is a valid `const upb_Message*` with minitable `openim__ffi__MultiTerminalLoginCheckReq_msg_init`.
    let msg_ptr = unsafe {
      ::__pb::__runtime::upb_Message_DeepClone(
        v.raw_msg(),
        std::ptr::addr_of!(openim__ffi__MultiTerminalLoginCheckReq_msg_init),
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
      // - Elements of `src` and `dest` have message minitable `openim__ffi__MultiTerminalLoginCheckReq_msg_init`.
      unsafe {
        ::__pb::__runtime::repeated_message_copy_from(src, dest, ::__std::ptr::addr_of!(openim__ffi__MultiTerminalLoginCheckReq_msg_init));
      }
  }
}
impl ::__pb::__runtime::UpbTypeConversions for MultiTerminalLoginCheckReq {
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
          val.raw_msg(), ::__std::ptr::addr_of!(openim__ffi__MultiTerminalLoginCheckReq_msg_init), arena)
          .expect("upb_Message_DeepClone failed.");
      Self::to_message_value(
          MultiTerminalLoginCheckReqView::new(::__pb::__internal::Private, cloned_msg))
      }

    unsafe fn from_message_value<'msg>(msg: ::__pb::__runtime::upb_MessageValue)
        -> ::__pb::View<'msg, Self> {
        MultiTerminalLoginCheckReqView::new(
            ::__pb::__internal::Private,
            unsafe { msg.msg_val }
                .expect("expected present message value in map"))
    }
}
impl ::__pb::ProxiedInMapValue<i32> for MultiTerminalLoginCheckReq {
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
impl ::__pb::ProxiedInMapValue<u32> for MultiTerminalLoginCheckReq {
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
impl ::__pb::ProxiedInMapValue<i64> for MultiTerminalLoginCheckReq {
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
impl ::__pb::ProxiedInMapValue<u64> for MultiTerminalLoginCheckReq {
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
impl ::__pb::ProxiedInMapValue<bool> for MultiTerminalLoginCheckReq {
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
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for MultiTerminalLoginCheckReq {
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
pub struct MultiTerminalLoginCheckReqMut<'msg> {
  inner: ::__pb::__runtime::MutatorMessageRef<'msg>,
}

impl std::fmt::Debug for MultiTerminalLoginCheckReqMut<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> MultiTerminalLoginCheckReqMut<'msg> {
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

  // userID: optional string
  pub fn userID(&self) -> &'_ ::__pb::ProtoStr {
    let view = unsafe { openim_ffi_MultiTerminalLoginCheckReq_userID(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }
  pub fn set_userID(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
    self.userID_mut().set(val);
  }
  fn userID_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
    unsafe {
      <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__internal::RawVTableMutator::new(
          ::__pb::__internal::Private,
          self.as_mutator_message_ref(),
          MultiTerminalLoginCheckReq::__USERID_VTABLE,
        )
      )
    }
  }

  // platformID: optional int32
  pub fn platformID(&self) -> i32 {
    unsafe { openim_ffi_MultiTerminalLoginCheckReq_platformID(self.raw_msg()) }
  }
  pub fn set_platformID(&mut self, val: i32) {
    unsafe { openim_ffi_MultiTerminalLoginCheckReq_set_platformID(self.raw_msg(), val) }
  }

  // token: optional string
  pub fn token(&self) -> &'_ ::__pb::ProtoStr {
    let view = unsafe { openim_ffi_MultiTerminalLoginCheckReq_token(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }
  pub fn set_token(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
    self.token_mut().set(val);
  }
  fn token_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
    unsafe {
      <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__internal::RawVTableMutator::new(
          ::__pb::__internal::Private,
          self.as_mutator_message_ref(),
          MultiTerminalLoginCheckReq::__TOKEN_VTABLE,
        )
      )
    }
  }

}

// SAFETY:
// - `MultiTerminalLoginCheckReqMut` does not perform any shared mutation.
// - `MultiTerminalLoginCheckReqMut` is not `Send`, and so even in the presence of mutator
//   splitting, synchronous access of an arena is impossible.
unsafe impl Sync for MultiTerminalLoginCheckReqMut<'_> {}

impl<'msg> ::__pb::MutProxy<'msg> for MultiTerminalLoginCheckReqMut<'msg> {
  fn as_mut(&mut self) -> ::__pb::Mut<'_, MultiTerminalLoginCheckReq> {
    MultiTerminalLoginCheckReqMut { inner: self.inner }
  }
  fn into_mut<'shorter>(self) -> ::__pb::Mut<'shorter, MultiTerminalLoginCheckReq> where 'msg : 'shorter { self }
}

impl<'msg> ::__pb::ViewProxy<'msg> for MultiTerminalLoginCheckReqMut<'msg> {
  type Proxied = MultiTerminalLoginCheckReq;
  fn as_view(&self) -> ::__pb::View<'_, MultiTerminalLoginCheckReq> {
    MultiTerminalLoginCheckReqView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, MultiTerminalLoginCheckReq> where 'msg: 'shorter {
    MultiTerminalLoginCheckReqView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
}

#[allow(dead_code)]
impl MultiTerminalLoginCheckReq {
  pub fn new() -> Self {
    let arena = ::__pb::__runtime::Arena::new();
    Self {
      inner: ::__pb::__runtime::MessageInner {
        msg: unsafe { openim_ffi_MultiTerminalLoginCheckReq_new(arena.raw()) },
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
    // SAFETY: openim__ffi__MultiTerminalLoginCheckReq_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__MultiTerminalLoginCheckReq_msg_init) };
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

  pub fn as_view(&self) -> MultiTerminalLoginCheckReqView {
    MultiTerminalLoginCheckReqView::new(::__pb::__internal::Private, self.inner.msg)
  }

  pub fn as_mut(&mut self) -> MultiTerminalLoginCheckReqMut {
    MultiTerminalLoginCheckReqMut::new(::__pb::__internal::Private, &mut self.inner)
  }

  // userID: optional string
  pub fn userID(&self) -> &'_ ::__pb::ProtoStr {
    let view = unsafe { openim_ffi_MultiTerminalLoginCheckReq_userID(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }
  pub fn set_userID(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
    self.userID_mut().set(val);
  }
  const __USERID_VTABLE: &'static ::__pb::__internal::BytesMutVTable =
    &::__pb::__internal::BytesMutVTable::new(
      ::__pb::__internal::Private,
      openim_ffi_MultiTerminalLoginCheckReq_userID,
      openim_ffi_MultiTerminalLoginCheckReq_set_userID,
    );
  fn userID_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
    unsafe {
      <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__internal::RawVTableMutator::new(
          ::__pb::__internal::Private,
          self.as_mutator_message_ref(),
          MultiTerminalLoginCheckReq::__USERID_VTABLE,
        )
      )
    }
  }

  // platformID: optional int32
  pub fn platformID(&self) -> i32 {
    unsafe { openim_ffi_MultiTerminalLoginCheckReq_platformID(self.raw_msg()) }
  }
  pub fn set_platformID(&mut self, val: i32) {
    unsafe { openim_ffi_MultiTerminalLoginCheckReq_set_platformID(self.raw_msg(), val) }
  }

  // token: optional string
  pub fn token(&self) -> &'_ ::__pb::ProtoStr {
    let view = unsafe { openim_ffi_MultiTerminalLoginCheckReq_token(self.raw_msg()).as_ref() };
    // SAFETY: The runtime doesn't require ProtoStr to be UTF-8.
    unsafe { ::__pb::ProtoStr::from_utf8_unchecked(view) }
  }
  pub fn set_token(&mut self, val: impl ::__pb::SettableValue<::__pb::ProtoStr>) {
    self.token_mut().set(val);
  }
  const __TOKEN_VTABLE: &'static ::__pb::__internal::BytesMutVTable =
    &::__pb::__internal::BytesMutVTable::new(
      ::__pb::__internal::Private,
      openim_ffi_MultiTerminalLoginCheckReq_token,
      openim_ffi_MultiTerminalLoginCheckReq_set_token,
    );
  fn token_mut(&mut self) -> ::__pb::Mut<'_, ::__pb::ProtoStr> {
    unsafe {
      <::__pb::Mut<::__pb::ProtoStr>>::from_inner(
        ::__pb::__internal::Private,
        ::__pb::__internal::RawVTableMutator::new(
          ::__pb::__internal::Private,
          self.as_mutator_message_ref(),
          MultiTerminalLoginCheckReq::__TOKEN_VTABLE,
        )
      )
    }
  }

}  // impl MultiTerminalLoginCheckReq

impl ::__std::ops::Drop for MultiTerminalLoginCheckReq {
  fn drop(&mut self) {
  }
}

extern "C" {
  fn openim_ffi_MultiTerminalLoginCheckReq_new(arena: ::__pb::__runtime::RawArena) -> ::__pb::__runtime::RawMessage;
  /// Opaque wrapper for this message's MiniTable. The only valid way to
  /// reference this static is with `std::ptr::addr_of!(..)`.
  static openim__ffi__MultiTerminalLoginCheckReq_msg_init: ::__pb::__runtime::upb_MiniTable;

  fn openim_ffi_MultiTerminalLoginCheckReq_userID(raw_msg: ::__pb::__runtime::RawMessage) -> ::__pb::__runtime::PtrAndLen;
  fn openim_ffi_MultiTerminalLoginCheckReq_set_userID(raw_msg: ::__pb::__runtime::RawMessage, val: ::__pb::__runtime::PtrAndLen);

  fn openim_ffi_MultiTerminalLoginCheckReq_platformID(raw_msg: ::__pb::__runtime::RawMessage) -> i32;
  fn openim_ffi_MultiTerminalLoginCheckReq_set_platformID(raw_msg: ::__pb::__runtime::RawMessage, val: i32);

  fn openim_ffi_MultiTerminalLoginCheckReq_token(raw_msg: ::__pb::__runtime::RawMessage) -> ::__pb::__runtime::PtrAndLen;
  fn openim_ffi_MultiTerminalLoginCheckReq_set_token(raw_msg: ::__pb::__runtime::RawMessage, val: ::__pb::__runtime::PtrAndLen);


}  // extern "C" for MultiTerminalLoginCheckReq


#[allow(non_camel_case_types)]
pub struct MultiTerminalLoginCheckResp {
  inner: ::__pb::__runtime::MessageInner
}

impl std::fmt::Debug for MultiTerminalLoginCheckResp {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

impl std::default::Default for MultiTerminalLoginCheckResp {
  fn default() -> Self {
    Self::new()
  }
}

// SAFETY:
// - `MultiTerminalLoginCheckResp` is `Sync` because it does not implement interior mutability.
//    Neither does `MultiTerminalLoginCheckRespMut`.
unsafe impl Sync for MultiTerminalLoginCheckResp {}

// SAFETY:
// - `MultiTerminalLoginCheckResp` is `Send` because it uniquely owns its arena and does
//   not use thread-local data.
unsafe impl Send for MultiTerminalLoginCheckResp {}

impl ::__pb::Proxied for MultiTerminalLoginCheckResp {
  type View<'msg> = MultiTerminalLoginCheckRespView<'msg>;
  type Mut<'msg> = MultiTerminalLoginCheckRespMut<'msg>;
}

#[derive(Copy, Clone)]
#[allow(dead_code)]
pub struct MultiTerminalLoginCheckRespView<'msg> {
  msg: ::__pb::__runtime::RawMessage,
  _phantom: ::__std::marker::PhantomData<&'msg ()>,
}

impl std::fmt::Debug for MultiTerminalLoginCheckRespView<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> MultiTerminalLoginCheckRespView<'msg> {
  #[doc(hidden)]
  pub fn new(_private: ::__pb::__internal::Private, msg: ::__pb::__runtime::RawMessage) -> Self {
    Self { msg, _phantom: ::__std::marker::PhantomData }
  }

  fn raw_msg(&self) -> ::__pb::__runtime::RawMessage {
    self.msg
  }

  pub fn serialize(&self) -> ::__pb::__runtime::SerializedData {
    let arena = ::__pb::__runtime::Arena::new();
    // SAFETY: openim__ffi__MultiTerminalLoginCheckResp_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__MultiTerminalLoginCheckResp_msg_init) };
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

}

// SAFETY:
// - `MultiTerminalLoginCheckRespView` is `Sync` because it does not support mutation.
unsafe impl Sync for MultiTerminalLoginCheckRespView<'_> {}

// SAFETY:
// - `MultiTerminalLoginCheckRespView` is `Send` because while its alive a `MultiTerminalLoginCheckRespMut` cannot.
// - `MultiTerminalLoginCheckRespView` does not use thread-local data.
unsafe impl Send for MultiTerminalLoginCheckRespView<'_> {}

impl<'msg> ::__pb::ViewProxy<'msg> for MultiTerminalLoginCheckRespView<'msg> {
  type Proxied = MultiTerminalLoginCheckResp;

  fn as_view(&self) -> ::__pb::View<'msg, MultiTerminalLoginCheckResp> {
    *self
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, MultiTerminalLoginCheckResp> where 'msg: 'shorter {
    self
  }
}

impl ::__pb::__internal::ProxiedWithRawVTable for MultiTerminalLoginCheckResp {
  type VTable = ::__pb::__runtime::MessageVTable;

  fn make_view(_private: ::__pb::__internal::Private,
              mut_inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::View<'_, Self> {
    let msg = unsafe {
      (mut_inner.vtable().getter)(mut_inner.msg_ref().msg())
    };
    MultiTerminalLoginCheckRespView::new(::__pb::__internal::Private, msg.unwrap_or_else(||::__pb::__runtime::ScratchSpace::zeroed_block(::__pb::__internal::Private)))
  }

  fn make_mut(_private: ::__pb::__internal::Private,
              inner: ::__pb::__internal::RawVTableMutator<'_, Self>)
              -> ::__pb::Mut<'_, Self> {
    let raw_submsg = unsafe {
      (inner.vtable().mut_getter)(inner.msg_ref().msg(), inner.msg_ref().arena(::__pb::__internal::Private).raw())
    };
    MultiTerminalLoginCheckRespMut::from_parent(::__pb::__internal::Private, inner.msg_ref(), raw_submsg)
  }
}

impl ::__pb::__internal::ProxiedWithRawOptionalVTable for MultiTerminalLoginCheckResp {
  type OptionalVTable = ::__pb::__runtime::MessageVTable;

  fn upcast_vtable(_private: ::__pb::__internal::Private,
                   optional_vtable: &'static Self::OptionalVTable)
                  -> &'static Self::VTable {
    &optional_vtable
  }
}

impl ::__pb::ProxiedWithPresence for MultiTerminalLoginCheckResp {
  type PresentMutData<'a> = ::__pb::__runtime::MessagePresentMutData<'a, MultiTerminalLoginCheckResp>;
  type AbsentMutData<'a> = ::__pb::__runtime::MessageAbsentMutData<'a, MultiTerminalLoginCheckResp>;

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

impl<'msg> ::__pb::SettableValue<MultiTerminalLoginCheckResp> for MultiTerminalLoginCheckRespView<'msg> {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, MultiTerminalLoginCheckResp>)
    where MultiTerminalLoginCheckResp: 'dst {
    unsafe { ::__pb::__runtime::upb_Message_DeepCopy(
      mutator.inner.msg(),
      self.msg,
      ::__std::ptr::addr_of!(openim__ffi__MultiTerminalLoginCheckResp_msg_init),
      mutator.inner.arena(::__pb::__internal::Private).raw(),
    ) };
  }
}

impl ::__pb::SettableValue<MultiTerminalLoginCheckResp> for MultiTerminalLoginCheckResp {
  fn set_on<'dst>(
    self, _private: ::__pb::__internal::Private, mutator: ::__pb::Mut<'dst, MultiTerminalLoginCheckResp>)
    where MultiTerminalLoginCheckResp: 'dst {
    self.as_view().set_on(::__pb::__internal::Private, mutator);
  }
}

unsafe impl ::__pb::ProxiedInRepeated for MultiTerminalLoginCheckResp {
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
    // - `v.raw_msg()` and `dest_msg` both have message minitable `openim__ffi__MultiTerminalLoginCheckResp_msg_init`.
    unsafe {
      ::__pb::__runtime::upb_Message_DeepCopy(
        dest_msg,
        v.raw_msg(),
        ::__std::ptr::addr_of!(openim__ffi__MultiTerminalLoginCheckResp_msg_init),
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
    // - `v.raw_msg()` is a valid `const upb_Message*` with minitable `openim__ffi__MultiTerminalLoginCheckResp_msg_init`.
    let msg_ptr = unsafe {
      ::__pb::__runtime::upb_Message_DeepClone(
        v.raw_msg(),
        std::ptr::addr_of!(openim__ffi__MultiTerminalLoginCheckResp_msg_init),
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
      // - Elements of `src` and `dest` have message minitable `openim__ffi__MultiTerminalLoginCheckResp_msg_init`.
      unsafe {
        ::__pb::__runtime::repeated_message_copy_from(src, dest, ::__std::ptr::addr_of!(openim__ffi__MultiTerminalLoginCheckResp_msg_init));
      }
  }
}
impl ::__pb::__runtime::UpbTypeConversions for MultiTerminalLoginCheckResp {
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
          val.raw_msg(), ::__std::ptr::addr_of!(openim__ffi__MultiTerminalLoginCheckResp_msg_init), arena)
          .expect("upb_Message_DeepClone failed.");
      Self::to_message_value(
          MultiTerminalLoginCheckRespView::new(::__pb::__internal::Private, cloned_msg))
      }

    unsafe fn from_message_value<'msg>(msg: ::__pb::__runtime::upb_MessageValue)
        -> ::__pb::View<'msg, Self> {
        MultiTerminalLoginCheckRespView::new(
            ::__pb::__internal::Private,
            unsafe { msg.msg_val }
                .expect("expected present message value in map"))
    }
}
impl ::__pb::ProxiedInMapValue<i32> for MultiTerminalLoginCheckResp {
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
impl ::__pb::ProxiedInMapValue<u32> for MultiTerminalLoginCheckResp {
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
impl ::__pb::ProxiedInMapValue<i64> for MultiTerminalLoginCheckResp {
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
impl ::__pb::ProxiedInMapValue<u64> for MultiTerminalLoginCheckResp {
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
impl ::__pb::ProxiedInMapValue<bool> for MultiTerminalLoginCheckResp {
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
impl ::__pb::ProxiedInMapValue<::__pb::ProtoStr> for MultiTerminalLoginCheckResp {
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
pub struct MultiTerminalLoginCheckRespMut<'msg> {
  inner: ::__pb::__runtime::MutatorMessageRef<'msg>,
}

impl std::fmt::Debug for MultiTerminalLoginCheckRespMut<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    f.debug_struct(std::any::type_name::<Self>())
      .field("raw_msg", &self.raw_msg())
      .finish()
  }
}

#[allow(dead_code)]
impl<'msg> MultiTerminalLoginCheckRespMut<'msg> {
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

}

// SAFETY:
// - `MultiTerminalLoginCheckRespMut` does not perform any shared mutation.
// - `MultiTerminalLoginCheckRespMut` is not `Send`, and so even in the presence of mutator
//   splitting, synchronous access of an arena is impossible.
unsafe impl Sync for MultiTerminalLoginCheckRespMut<'_> {}

impl<'msg> ::__pb::MutProxy<'msg> for MultiTerminalLoginCheckRespMut<'msg> {
  fn as_mut(&mut self) -> ::__pb::Mut<'_, MultiTerminalLoginCheckResp> {
    MultiTerminalLoginCheckRespMut { inner: self.inner }
  }
  fn into_mut<'shorter>(self) -> ::__pb::Mut<'shorter, MultiTerminalLoginCheckResp> where 'msg : 'shorter { self }
}

impl<'msg> ::__pb::ViewProxy<'msg> for MultiTerminalLoginCheckRespMut<'msg> {
  type Proxied = MultiTerminalLoginCheckResp;
  fn as_view(&self) -> ::__pb::View<'_, MultiTerminalLoginCheckResp> {
    MultiTerminalLoginCheckRespView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
  fn into_view<'shorter>(self) -> ::__pb::View<'shorter, MultiTerminalLoginCheckResp> where 'msg: 'shorter {
    MultiTerminalLoginCheckRespView { msg: self.raw_msg(), _phantom: ::__std::marker::PhantomData }
  }
}

#[allow(dead_code)]
impl MultiTerminalLoginCheckResp {
  pub fn new() -> Self {
    let arena = ::__pb::__runtime::Arena::new();
    Self {
      inner: ::__pb::__runtime::MessageInner {
        msg: unsafe { openim_ffi_MultiTerminalLoginCheckResp_new(arena.raw()) },
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
    // SAFETY: openim__ffi__MultiTerminalLoginCheckResp_msg_init is a static of a const object.
    let mini_table = unsafe { ::__std::ptr::addr_of!(openim__ffi__MultiTerminalLoginCheckResp_msg_init) };
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

  pub fn as_view(&self) -> MultiTerminalLoginCheckRespView {
    MultiTerminalLoginCheckRespView::new(::__pb::__internal::Private, self.inner.msg)
  }

  pub fn as_mut(&mut self) -> MultiTerminalLoginCheckRespMut {
    MultiTerminalLoginCheckRespMut::new(::__pb::__internal::Private, &mut self.inner)
  }

}  // impl MultiTerminalLoginCheckResp

impl ::__std::ops::Drop for MultiTerminalLoginCheckResp {
  fn drop(&mut self) {
  }
}

extern "C" {
  fn openim_ffi_MultiTerminalLoginCheckResp_new(arena: ::__pb::__runtime::RawArena) -> ::__pb::__runtime::RawMessage;
  /// Opaque wrapper for this message's MiniTable. The only valid way to
  /// reference this static is with `std::ptr::addr_of!(..)`.
  static openim__ffi__MultiTerminalLoginCheckResp_msg_init: ::__pb::__runtime::upb_MiniTable;


}  // extern "C" for MultiTerminalLoginCheckResp


