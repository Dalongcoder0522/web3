package main

import (
	"fmt"
	"reflect"
)

func sum(nums ...int) {
	fmt.Print(nums, " ")
	fmt.Println("nums 是切片:", isSlice(nums))
	total := 0

	for _, num := range nums {
		total += num
	}
	fmt.Println(total)
}

func isSlice(v interface{}) bool {
	return reflect.TypeOf(v).Kind() == reflect.Slice
}

func main() {

	sum(1, 2)
	sum(1, 2, 3)

	nums := []int{1, 2, 3, 4}
	sum(nums...)
}
