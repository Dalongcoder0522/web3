package main

import "fmt"

func main() {
	s := make([]int, 2, 2) //初始化0，0在增加就扩容了
	fmt.Println("initial, s =", s)

	s2 := append(s, 4)
	fmt.Println("after append, s length:", len(s))
	fmt.Println("after append, s capacity:", cap(s))

	fmt.Println("after append, s2 length:", len(s2))
	fmt.Println("after append, s2 capacity:", cap(s2))
	fmt.Println("after append, s =", s)
	fmt.Println("after append, s2 =", s2)

	s[0] = 1024
	fmt.Println("after set position 0, s =", s)
	fmt.Println("after set position 0, s2 =", s2)

	appendInFunc2(s2)
	fmt.Println("after append in func, s2 =", s2)
}

func appendInFunc2(param []int) {
	param1 := append(param, 511)
	param2 := append(param1, 512)
	fmt.Println("in func, param1 =", param1)
	fmt.Println("in func, param2 =", param2)
	param2[2] = 500
	fmt.Println("set position 2 in func, param1 =", param1)
	fmt.Println("set position 2 in func, param2 =", param2)
	param1[0] = 999
	fmt.Println("没扩容set position 1 in func, param1 =", param1)
	fmt.Println("set position 1 in func, param2 =", param2)
	param2[0] = 888
	fmt.Println("扩容后set position 1 in func, param1 =", param1)
	fmt.Println("set position 1 in func, param2 =", param2)
}
