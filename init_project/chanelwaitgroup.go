package main

import (
	"fmt"
	"sync"
	"time"
)

func myworker2(id int) {
	fmt.Printf("Worker %d starting\n", id)

	time.Sleep(time.Second)
	fmt.Printf("Worker %d done\n", id)
}

func main() {

	var wg sync.WaitGroup

	for i := 1; i <= 5; i++ {
		wg.Add(1)

		go func() {
			//Here’s why placing defer wg.Done() at the beginning is important:
			//1. Guaranteed Execution: By placing defer wg.Done() at the start, you ensure that wg.Done() will be called even if myworker2(id) panics or returns early for some reason. This guarantees that the WaitGroup counter is decremented properly.
			//2. Immediate Scheduling: The defer statement schedules the wg.Done() call to be executed when the surrounding function returns. This means it will always be executed after myworker2(id) completes, ensuring proper synchronization.
			defer wg.Done()
			myworker2(i)
		}()
	}

	wg.Wait()
	fmt.Printf("all done back in main")
}
