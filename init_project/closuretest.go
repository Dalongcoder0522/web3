package main

import "fmt"

type Q struct {
	i int
}

func (a *Q) add(v int) int {
	a.i += v
	return a.i
}

// 声明函数变量
var function1 func(int) int

// 声明闭包
var squart2 func(int) int = func(p int) int {
	p *= p
	return p
}

func main() {
	a := Q{1}
	// 把方法赋值给函数变量
	function1 = a.add

	// 声明一个闭包并直接执行
	// 此闭包返回值是另外一个闭包
	// 返回值闭包赋值给returnFunc变量
	returnFunc := func() func(int, string) (int, string) {
		fmt.Println("this is an anonymous function")
		return func(i int, s string) (int, string) {
			return i, s
		}
	}()

	// 执行returnFunc闭包
	ret1, ret2 := returnFunc(1, "test")
	fmt.Println("call closure function, return1 = ", ret1, "; return2 = ", ret2)

	fmt.Println("a.i = ", a.i)
	fmt.Println("after call function1, a.i = ", function1(1))
	fmt.Println("a.i = ", a.i)
}
