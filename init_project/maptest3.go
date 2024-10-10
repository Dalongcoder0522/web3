package main

import "fmt"

func main() {
	m := make(map[string]int, 1)
	m["a"] = 1
	receiveMap(m)
	fmt.Println("m =", m)
}

// passing by reference
func receiveMap(param map[string]int) {
	fmt.Println("before modify, in receiveMap func: param[\"a\"] = ", param["a"])
	param["a"] = 2
	fmt.Println("after modify, in receiveMap func: m[\"a\"] = ", param["a"])
	param["b"] = 3
}
