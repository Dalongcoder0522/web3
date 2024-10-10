package main

import "fmt"

func main() {
	// 方式1，声明并初始化一个空的切片
	var s1 []int = []int{}
	fmt.Println("s1 = ", s1)
	// 方式2，类型推导，并初始化一个空的切片
	var s2 = []int{}
	fmt.Println("s2 = ", s2)
	// 方式3，与方式2等价
	s3 := []int{}
	fmt.Println("s3 = ", s3)
	// 方式4，与方式1、2、3 等价，可以在大括号中定义切片初始元素
	s4 := []int{1, 2, 3, 4}
	fmt.Println("s4 = ", s4)
	// 方式5，用make()函数创建切片，创建[]int类型的切片，指定切片初始长度为0
	s5 := make([]int, 0)
	fmt.Println("s5 = ", s5)
	// 方式6，用make()函数创建切片，创建[]int类型的切片，指定切片初始长度为2，指定容量参数4
	s6 := make([]int, 2, 4)
	fmt.Println("s6 = ", s6)
	// 方式7，引用一个数组，初始化切片
	a := []int{6, 5, 4, 3, 2}
	fmt.Println("a = ", a)
	// 从数组下标2开始，直到数组的最后一个元素
	s7 := a[2:]
	fmt.Println("s7 = ", s7)
	s17 := append(s7, 100)
	fmt.Println("s17 = ", s17)
	s17 = append(s17, 200)
	s17[0] = 666
	fmt.Println("s17 = ", s17)
	// 从数组下标1开始，直到数组下标3的元素，创建一个新的切片
	s8 := a[1:3]
	fmt.Println("s8 = ", s8)
	// 从0到下标2的元素，创建一个新的切片
	s9 := a[:2]
	fmt.Println("s9 = ", s9)
}
