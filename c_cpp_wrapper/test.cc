#include <iostream>
#include <cstring>
#include "your_library.h"
#include "../proto/ffi.pb.h"
#include "../proto/conversation.pb.h"
using namespace std;


void myCallback(void* dataPtr, int len) {
    cout << "Callback invoked with data length: " << len << endl;
}

int main() {

    unsigned long long handle = ffi_init(myCallback);
    cout << "Initialized with handle: " << handle << endl;


    openim::ffi::FfiRequest request;
    request.set_funcname(openim::sdk::conversation::RequestFuncName::GetAllConversationList);
    request.set_data("");
   // Serialize the request to a string
      string serialized_data;
      if (!request.SerializeToString(&serialized_data)) {
          cerr << "Failed to serialize request." << endl;
          return -1;
      }

      // Call ffi_request with the serialized data
      ffi_request((void*)serialized_data.data(), serialized_data.size());

  const char* requestData = "Hello from C++!";
    ffi_request((void*)requestData, strlen(requestData));

    ffi_drop_handle(handle);
    cout << "Handle dropped." << endl;
    while(true){
    }

    return 0;
}
