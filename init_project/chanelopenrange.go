package main

import (
	"fmt"
	"time"
)

func main() {
	queue := make(chan string)
	done := make(chan bool)

	// Goroutine to send values to the channel
	go func() {
		for i := 1; i <= 5; i++ {
			queue <- fmt.Sprintf("message %d", i)
			time.Sleep(500 * time.Millisecond) // Simulate work
		}
		close(queue) // Close the channel after sending all messages
	}()

	// Goroutine to receive values from the channel using range
	go func() {
		for msg := range queue {
			fmt.Println("receive ", msg)
		}
		done <- true // Signal that we're done receiving
	}()

	// Wait for the receiving goroutine to finish
	<-done
}
