package main

import (
	"fmt"
	"time"
)

func worker(done chan bool) {
	//This is the function we’ll run in a goroutine. The done channel will be used to notify another goroutine that this function’s work is done.
	fmt.Print("working...")
	time.Sleep(time.Second)
	fmt.Println("done")

	done <- true
}

func main() {

	done := make(chan bool, 1)
	go worker(done)

	//Block until we receive a notification from the worker on the channel.
	<-done
	fmt.Println("back to main")
}
