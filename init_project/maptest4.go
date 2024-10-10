package main

import (
	"fmt"
	"time"
)

// 下面示例模拟 map 集合在程序中，同时被多个 goroutine 读写：
// fatal error: concurrent map writes
func main() {
	m := make(map[string]int)

	go func() {
		for {
			m["a"]++
		}
	}()

	go func() {
		for {
			m["a"]++
			fmt.Println(m["a"])
		}
	}()

	select {
	case <-time.After(time.Second * 5):
		fmt.Println("timeout, stopping")
	}
}
