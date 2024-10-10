package main

import "fmt"

func main() {
	a := [5]int{6, 5, 4, 3, 2}
	// 从数组下标2开始，直到数组的最后一个元素
	s7 := a[2:]
	// 从数组下标1开始，直到数组下标3的元素，创建一个新的切片
	s8 := a[1:3]
	// 从0到下标2的元素，创建一个新的切片
	s9 := a[:2]
	fmt.Println(s7)
	fmt.Println(s8)
	fmt.Println(s9)
	//当切片是基于同一个数组指针创建出来时，修改数组中的值时，同样会影响到这些切片。切片是底层数组的引用，因此修改底层数组的元素会影响到切片，反之亦然。
	a[0] = 9
	a[1] = 8
	a[2] = 7
	fmt.Println(s7)
	fmt.Println(s8)
	fmt.Println(s9)
	s9[0] = 9999
	fmt.Println(a)
	fmt.Println(s9)

	//append函数
	s3 := []int{}
	fmt.Println("s3 = ", s3)
	// append函数追加元素
	s3 = append(s3)
	s3 = append(s3, 1)
	s3 = append(s3, 2, 3, 4, 5)
	fmt.Println("s3 = ", s3, cap(s3))

	//向指定位置添加元素的代码示例：
	//s4[:2] 生成一个包含 s4 前两个元素的切片，即 [1, 2]。
	//s4[2:] 生成一个包含 s4 从第 3 个元素开始到最后的切片，即 [4, 5]。
	//append([]int{3}, s4[2:]...) 将 3 和 s4[2:] 的元素 [4, 5] 合并成一个新的切片 [3, 4, 5]。
	//最后，append(s4[:2], [3, 4, 5]...) 将 [1, 2] 和 [3, 4, 5] 合并成一个新的切片 [1, 2, 3, 4, 5]。
	//因此，s4 最终的值是 [1, 2, 3, 4, 5]。
	s4 := []int{1, 2, 4, 5}
	s4 = append(s4[:2], append([]int{3}, s4[2:]...)...)
	fmt.Println("s4 = ", s4)
	//移除
	s5 := []int{1, 2, 3, 5, 4, 7, 8, 9}
	s6 := append(s5[:3], s5[4:]...)
	fmt.Println("s5 = ", s5)
	fmt.Println("s6 = ", s6)
	s6[0] = 999
	fmt.Println("s5 = ", s5)
	fmt.Println("s6 = ", s6)
	s5[0] = 888
	fmt.Println("s5 = ", s5)
	fmt.Println("s6 = ", s6)

	//copy slice
	src1 := []int{1, 2, 3}
	dst1 := []int{}

	src2 := []int{1, 2, 3, 4, 5}
	dst2 := make([]int, 3, 3)

	fmt.Println("before copy, src1 = ", src1)
	fmt.Println("before copy, dst1 = ", dst1)

	fmt.Println("before copy, src2 = ", src2)
	fmt.Println("before copy, dst2 = ", dst2)

	copy(dst1, src1)
	copy(dst2, src2)

	fmt.Println("after copy, src1 = ", src1)
	fmt.Println("after copy, dst1 = ", dst1)

	fmt.Println("after copy, src2 = ", src2)
	fmt.Println("after copy, dst2 = ", dst2)
}
