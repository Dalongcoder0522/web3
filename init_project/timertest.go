package main

import (
	"fmt"
	"time"
)

func main() {

	timer1 := time.NewTimer(2 * time.Second)

	time1 := <-timer1.C //这里阻塞,等待timer1的通道有数据,然后从通道中取出数据,这里就是2秒后触发的定时器事件
	fmt.Println("Timer 1 fired", time1)

	timer2 := time.NewTimer(time.Second)
	go func() {
		time2 := <-timer2.C
		fmt.Println("Timer 2 fired", time2)
	}()
	//stop2 := timer2.Stop()
	//if stop2 {
	//	fmt.Println("Timer 2 stopped")
	//}

	time.Sleep(2 * time.Second)
}
