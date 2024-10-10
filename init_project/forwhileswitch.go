package main

import "fmt"

func main() {
	var a [10]string
	a[0] = "Hello"
	for i := range a {
		fmt.Println("当前下标：", i)
	}
	for i, e := range a {
		fmt.Println("a[", i, "] = ", e)
	}

	// 遍历切片
	s := make([]string, 10)
	s[0] = "Hello"
	for i := range s {
		fmt.Println("当前下标：", i)
	}
	for i, e := range s {
		fmt.Println("s[", i, "] = ", e)
	}
	// 遍历map
	m := make(map[string]string)
	m["b"] = "Hello, b"
	m["a"] = "Hello, a"
	m["c"] = "Hello, c"
	for i := range m {
		fmt.Println("当前key：", i)
	}
	for k, v := range m {
		fmt.Println("m[", k, "] = ", v)
	}
}
