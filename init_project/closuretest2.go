package main

import "fmt"

func main() {
	// 创建一个闭包
	counter := func() func() int {
		count := 0
		return func() int {
			count++
			return count
		}
	}

	// 调用闭包
	fmt.Println(counter())         // 输出: 1
	fmt.Println(counter())         // 输出: 2
	fmt.Println(counter())         // 输出: 3
	fmt.Println(createCounter()()) // 输出: 1
	fmt.Println(createCounter()()) // 输出: 1
	fmt.Println(createCounter()()) // 输出: 1
}

// createCounter 返回一个闭包函数
func createCounter() func() int {
	count := 0
	return func() int {
		count++
		return count
	}
}
