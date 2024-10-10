package main

import "fmt"

func main() {
	// 仅声明
	var a [5]int
	fmt.Println("a = ", a)

	marr := make([]map[string]string, 2)
	marr[0] = make(map[string]string)
	marr[0]["test"] = "1"
	fmt.Println("marr = ", marr)

	// 声明以及初始化
	var b [5]int = [5]int{1, 2, 3, 4, 5}
	fmt.Println("b = ", b)

	// 类型推导声明方式
	var c = [5]string{"c1", "c2", "c3", "c4", "c5"}
	fmt.Println("c = ", c)

	d := [3]int{3, 2, 1}
	fmt.Println("d = ", d)

	s5 := make([]int, 1)
	fmt.Println("s5 = ", s5)

	// 使用 ... 代替数组长度
	autoLen := [...]string{"auto1", "auto2", "auto3"}
	fmt.Println("autoLen = ", autoLen)

	// 声明时初始化指定下标的元素值
	positionInit := [5]string{1: "position1", 3: "position3"}
	fmt.Println("positionInit = ", positionInit)

	// 初始化时，元素个数不能超过数组声明的长度
	//overLen := [2]int{1, 2, 3}

	t := [5]int{5, 4, 3, 2, 1}

	// 方式1，使用下标读取数据
	element := t[2]
	fmt.Println("element = ", element)

	// 方式2，使用range遍历
	for i, v := range t {
		fmt.Println("index = ", i, "value = ", v)
	}

	for i := range t {
		fmt.Println("only index, index = ", i)
	}

	// 读取数组长度
	fmt.Println("len(t) = ", len(t))
	// 使用下标，for循环遍历数组
	for i := 0; i < len(t); i++ {
		fmt.Println("use len(), index = ", i, "value = ", t[i])
	}
}
