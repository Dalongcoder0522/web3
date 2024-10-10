package main

import "fmt"

func main() {
	//a, b := 1, 2
	//sum := a + b
	//sub := a - b
	//mul := a * b
	//div := a / b
	//mod := a % b
	//
	//fmt.Println(sum, sub, mul, div, mod)
	//
	//a := 1
	// 正确写法
	//a++
	//a--

	// 错误的使用方式
	//++a
	//--a

	// 错误使用方式，不可以自增时计算,也不能赋值
	//b := a++ + 1
	//c := a--
	//a := 10 + 0.1
	//b := byte(1) + 1
	//fmt.Println(a, b)
	//
	//sum := a + float64(b)
	//fmt.Println(sum)
	//
	//sub := byte(a) - b
	//fmt.Println(sub)
	//
	//mul := a * float64(b)
	//fmt.Println(mul)
	//div := uint8(a) / b
	//fmt.Println(mul, div)
	a := 4
	var ptr *int
	fmt.Println(a)

	ptr = &a
	fmt.Printf("*ptr 为 %d\n", *ptr)

}
