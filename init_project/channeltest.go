package main

import (
	"fmt"
)

func main() {
	messages := make(chan string)
	go func() {
		fmt.Println("before send ping")
		messages <- "ping" //这行代码会阻塞，直到有其他goroutine接收到这个消息
		fmt.Println("after send ping")
	}()
	//time.Sleep(5 * time.Second)
	fmt.Println("before receive ping")
	//msg := <-messages	//这行代码会阻塞，直到有其他goroutine发送消息,注释之后就不阻塞了main执行完程序都退出。
	fmt.Println("after receive ping")
	//fmt.Println(msg)}
}
