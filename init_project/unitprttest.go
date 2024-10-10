package main

import (
	"fmt"
	"unsafe"
)

func main() {
	var x int = 42
	p := unsafe.Pointer(&x)
	up := uintptr(p)
	fmt.Printf("Pointer: %v, Uintptr: %v\n", p, up)
}
