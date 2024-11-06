cmake_minimum_required(VERSION 3.30)
project(YourProjectName VERSION 1.0)

# Set C++ standard
set(CMAKE_CXX_STANDARD 14)
set(CMAKE_CXX_STANDARD_REQUIRED True)

# Manually set Protobuf paths (replace with actual installation path)
set(Protobuf_INCLUDE_DIR "D:/cpp/protobuf/install/include")
set(Protobuf_LIBRARIES "D:/cpp/protobuf/install/lib/libprotobuf.a")
set(Protobuf_PROTOC_EXECUTABLE "D:/cpp/protobuf/install/bin/protoc")
set(Abseil_INCLUDE_DIR "D:/cpp/abseil/install/include")
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -D_GLIBCXX_USE_CXX11_ABI=0")
set(Abseil_LIBRARIES
    "D:/cpp/abseil-cpp/install/lib/libabsl_base.a"
    "D:/cpp/abseil-cpp/install/lib/libabsl_log_internal_conditions.a"
    "D:/cpp/abseil-cpp/install/lib/libabsl_log_internal_check_op.a"
    "D:/cpp/abseil-cpp/install/lib/libabsl_log_internal_fnmatch.a"
    "D:/cpp/abseil-cpp/install/lib/libabsl_log_internal_format.a"
    "D:/cpp/abseil-cpp/install/lib/libabsl_log_internal_globals.a"
    "D:/cpp/abseil-cpp/install/lib/libabsl_log_internal_log_sink_set.a"
    "D:/cpp/abseil-cpp/install/lib/libabsl_log_internal_message.a"
    "D:/cpp/abseil-cpp/install/lib/libabsl_log_internal_nullguard.a"
    "D:/cpp/abseil-cpp/install/lib/libabsl_log_internal_proto.a"
    "D:/cpp/abseil-cpp/install/lib/libabsl_log_initialize.a"
    "D:/cpp/abseil-cpp/install/lib/libabsl_log_globals.a"
    "D:/cpp/abseil-cpp/install/lib/libabsl_strings.a"
    "D:/cpp/abseil-cpp/install/lib/libabsl_str_format_internal.a"
    "D:/cpp/abseil-cpp/install/lib/libabsl_symbolize.a"
    "D:/cpp/abseil-cpp/install/lib/libabsl_demangle_internal.a"
    "D:/cpp/abseil-cpp/install/lib/libabsl_stacktrace.a"
    "D:/cpp/abseil-cpp/install/lib/libabsl_time.a"
    "D:/cpp/abseil-cpp/install/lib/libabsl_time_zone.a"
    "D:/cpp/abseil-cpp/install/lib/libabsl_synchronization.a"
    "D:/cpp/abseil-cpp/install/lib/libabsl_throw_delegate.a"
    "D:/cpp/abseil-cpp/install/lib/libabsl_malloc_internal.a"
)




# Include directories
include_directories(${Protobuf_INCLUDE_DIR} ${Abseil_INCLUDE_DIR} "${CMAKE_CURRENT_SOURCE_DIR}/../proto" "${CMAKE_CURRENT_SOURCE_DIR}")

# Set source files
set(SOURCES test.cc ../proto/ffi.pb.cc ../proto/conversation.pb.cc)

# Add executable
add_executable(test ${SOURCES})


# Set library path
link_directories("D:/cpp/abseil-cpp/install/lib")
# Link Protobuf and your library
target_link_libraries(test ${Protobuf_LIBRARIES} ${Abseil_LIBRARIES} "${CMAKE_CURRENT_SOURCE_DIR}/your_library.dll")