package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	m := make(map[string]int)
	var wg sync.WaitGroup
	var lock sync.Mutex
	wg.Add(2)

	go func() {
		for {
			lock.Lock()
			m["a"]++
			lock.Unlock()
		}
	}()

	go func() {
		for {
			lock.Lock()
			m["a"]++
			fmt.Println(m["a"])
			lock.Unlock()
		}
	}()

	select {
	case <-time.After(time.Second * 5):
		fmt.Println("timeout, stopping")
	}
}
