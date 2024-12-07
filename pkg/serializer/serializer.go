package serializer

import (
	"context"
	"encoding/json"
	"sync"

	"github.com/golang/protobuf/proto"

	"github.com/openimsdk/openim-sdk-core/v3/pkg/sdkerrs"
	"github.com/openimsdk/tools/log"
)

const (
	Json = iota + 1
	ProtocolBuffers
	Thrift
	FlatBuffers
)

var (
	serializerInstance Serializer
	once               sync.Once
)

// Serializer interface defines the basic methods for marshaling and unmarshaling
type Serializer interface {
	Marshal(v any) ([]byte, error)
	Unmarshal(data []byte, v any) error
}

// SetProtocolType sets the serialization protocol type
// protocolType: The serialization protocol type (1 for JSON, 2 for Protocol Buffers, 3 for Thrift, 4 for FlatBuffers, etc.)
func SetProtocolType(protocolType int) {
	// Handle logic based on the serialization protocol type
	switch protocolType {
	case Json:
		// Initialize for JSON
		serializerInstance = NewJsonSerializer()
	case ProtocolBuffers:
		// Initialize for Protocol Buffers
		serializerInstance = NewPbSerializer()
	case Thrift:
		fallthrough
	case FlatBuffers:
		fallthrough
	default:
		log.ZError(context.Background(), "Unsupported protocol type", nil, "protocolType", protocolType)
	}
}

func GetInstance() Serializer {
	if serializerInstance == nil {
		once.Do(func() {
			serializerInstance = NewJsonSerializer()
		})
	}
	return serializerInstance
}

// JsonSerializer handles JSON marshaling
type JsonSerializer struct{}

func NewJsonSerializer() *JsonSerializer {
	return &JsonSerializer{}
}

// Marshal encodes an object into JSON
func (j *JsonSerializer) Marshal(v any) ([]byte, error) {
	return json.Marshal(v)
}

// Unmarshal decodes data into an object using JSON
func (j *JsonSerializer) Unmarshal(data []byte, v any) error {
	return json.Unmarshal(data, v)
}

// PbSerializer handles Protocol Buffers (PB) marshaling
type PbSerializer struct{}

func NewPbSerializer() *PbSerializer {
	return &PbSerializer{}
}

// Marshal encodes an object into PB format
func (p *PbSerializer) Marshal(v any) ([]byte, error) {
	if pb, ok := v.(proto.Message); ok {
		return proto.Marshal(pb)
	}
	return nil, sdkerrs.ErrArgs.WrapMsg("called function argument is not of type proto.Message")
}

// Unmarshal decodes data into an object using PB
func (p *PbSerializer) Unmarshal(data []byte, v any) error {
	if pb, ok := v.(proto.Message); ok {
		return proto.Unmarshal(data, pb)
	}
	return sdkerrs.ErrArgs.WrapMsg("called function argument is not of type proto.Message")
}
