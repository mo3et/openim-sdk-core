package proto

func (x *RequestPagination) Offset() int32 {
	return (x.PageNumber - 1) * x.ShowNumber
}
