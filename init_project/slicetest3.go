package main

import "fmt"

/**
 *底层原理
 */
func main() {
	//在不使用 append() 函数的情况下，在函数内部对切片的修改，都会影响到原始实例。
	//使用 append()函数时，需要分两种情况：
	//当没有触发切片扩容时：
	s := make([]int, 3, 6) //有6-3=3的容量，超过就扩容了
	fmt.Println("initial, s =", s)
	s[1] = 2
	fmt.Println("after set position 1, s =", s)

	s2 := append(s, 4)
	fmt.Println("after append, s2 length:", len(s2))
	fmt.Println("after append, s2 capacity:", cap(s2))
	fmt.Println("after append, s =", s)
	fmt.Println("after append, s2 =", s2)

	s[0] = 1024
	fmt.Println("after set position 0, s =", s)
	fmt.Println("after set position 0, s2 =", s2)

	appendInFunc(s)
	fmt.Println("after append in func, s =", s)
	fmt.Println("after append in func, s2 =", s2)
}

func appendInFunc(param []int) {
	param = append(param, 1022)
	fmt.Println("in func, param =", param)
	param[2] = 512
	fmt.Println("set position 2 in func, param =", param)
}
