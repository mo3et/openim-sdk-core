// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: event.proto
// Protobuf Java Version: 4.27.1

package openim.event;

public final class EventOuterClass {
  private EventOuterClass() {}
  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 27,
      /* patch= */ 1,
      /* suffix= */ "",
      EventOuterClass.class.getName());
  }
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  /**
   * Protobuf enum {@code openim.event.Event}
   */
  public enum Event
      implements com.google.protobuf.ProtocolMessageEnum {
    /**
     * <code>None = 0;</code>
     */
    None(0),
    /**
     * <code>OnConnecting = 1;</code>
     */
    OnConnecting(1),
    /**
     * <code>OnConnectSuccess = 2;</code>
     */
    OnConnectSuccess(2),
    /**
     * <code>OnConnectFailed = 3;</code>
     */
    OnConnectFailed(3),
    /**
     * <code>OnKickedOffline = 4;</code>
     */
    OnKickedOffline(4),
    /**
     * <code>OnUserTokenExpired = 5;</code>
     */
    OnUserTokenExpired(5),
    /**
     * <code>OnUserTokenInvalid = 6;</code>
     */
    OnUserTokenInvalid(6),
    UNRECOGNIZED(-1),
    ;

    static {
      com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
        com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
        /* major= */ 4,
        /* minor= */ 27,
        /* patch= */ 1,
        /* suffix= */ "",
        Event.class.getName());
    }
    /**
     * <code>None = 0;</code>
     */
    public static final int None_VALUE = 0;
    /**
     * <code>OnConnecting = 1;</code>
     */
    public static final int OnConnecting_VALUE = 1;
    /**
     * <code>OnConnectSuccess = 2;</code>
     */
    public static final int OnConnectSuccess_VALUE = 2;
    /**
     * <code>OnConnectFailed = 3;</code>
     */
    public static final int OnConnectFailed_VALUE = 3;
    /**
     * <code>OnKickedOffline = 4;</code>
     */
    public static final int OnKickedOffline_VALUE = 4;
    /**
     * <code>OnUserTokenExpired = 5;</code>
     */
    public static final int OnUserTokenExpired_VALUE = 5;
    /**
     * <code>OnUserTokenInvalid = 6;</code>
     */
    public static final int OnUserTokenInvalid_VALUE = 6;


    public final int getNumber() {
      if (this == UNRECOGNIZED) {
        throw new java.lang.IllegalArgumentException(
            "Can't get the number of an unknown enum value.");
      }
      return value;
    }

    /**
     * @param value The numeric wire value of the corresponding enum entry.
     * @return The enum associated with the given numeric wire value.
     * @deprecated Use {@link #forNumber(int)} instead.
     */
    @java.lang.Deprecated
    public static Event valueOf(int value) {
      return forNumber(value);
    }

    /**
     * @param value The numeric wire value of the corresponding enum entry.
     * @return The enum associated with the given numeric wire value.
     */
    public static Event forNumber(int value) {
      switch (value) {
        case 0: return None;
        case 1: return OnConnecting;
        case 2: return OnConnectSuccess;
        case 3: return OnConnectFailed;
        case 4: return OnKickedOffline;
        case 5: return OnUserTokenExpired;
        case 6: return OnUserTokenInvalid;
        default: return null;
      }
    }

    public static com.google.protobuf.Internal.EnumLiteMap<Event>
        internalGetValueMap() {
      return internalValueMap;
    }
    private static final com.google.protobuf.Internal.EnumLiteMap<
        Event> internalValueMap =
          new com.google.protobuf.Internal.EnumLiteMap<Event>() {
            public Event findValueByNumber(int number) {
              return Event.forNumber(number);
            }
          };

    public final com.google.protobuf.Descriptors.EnumValueDescriptor
        getValueDescriptor() {
      if (this == UNRECOGNIZED) {
        throw new java.lang.IllegalStateException(
            "Can't get the descriptor of an unrecognized enum value.");
      }
      return getDescriptor().getValues().get(ordinal());
    }
    public final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptorForType() {
      return getDescriptor();
    }
    public static final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptor() {
      return openim.event.EventOuterClass.getDescriptor().getEnumTypes().get(0);
    }

    private static final Event[] VALUES = values();

    public static Event valueOf(
        com.google.protobuf.Descriptors.EnumValueDescriptor desc) {
      if (desc.getType() != getDescriptor()) {
        throw new java.lang.IllegalArgumentException(
          "EnumValueDescriptor is not for this type.");
      }
      if (desc.getIndex() == -1) {
        return UNRECOGNIZED;
      }
      return VALUES[desc.getIndex()];
    }

    private final int value;

    private Event(int value) {
      this.value = value;
    }

    // @@protoc_insertion_point(enum_scope:openim.event.Event)
  }


  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\013event.proto\022\014openim.event*\223\001\n\005Event\022\010\n" +
      "\004None\020\000\022\020\n\014OnConnecting\020\001\022\024\n\020OnConnectSu" +
      "ccess\020\002\022\023\n\017OnConnectFailed\020\003\022\023\n\017OnKicked" +
      "Offline\020\004\022\026\n\022OnUserTokenExpired\020\005\022\026\n\022OnU" +
      "serTokenInvalid\020\006B8Z6github.com/openimsd" +
      "k/openim-sdk-core/v3/proto/go/eventb\006pro" +
      "to3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
    descriptor.resolveAllFeaturesImmutable();
  }

  // @@protoc_insertion_point(outer_class_scope)
}