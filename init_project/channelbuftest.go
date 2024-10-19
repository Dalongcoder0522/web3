package main

import (
	"fmt"
	"time"
)

func main() {
	//Because this channel is buffered, we can send these values into the channel without a corresponding concurrent receive.
	messages := make(chan string, 2)

	messages <- "buffered"
	time.Sleep(2 * time.Second)
	messages <- "channel"

	fmt.Println(<-messages)
	fmt.Println(<-messages)
}
