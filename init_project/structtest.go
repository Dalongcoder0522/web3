package main

import "fmt"

type A struct {
	a     string
	bytes [2]byte
}

func (a A) string() string {
	return a.a
}

func (a A) stringA() string {
	return a.a
}

func (a A) setA(v string) {
	a.a = v
}

func (a *A) stringPA() string {
	//当你有一个结构体指针 a *A，Go 会自动将 a.a 解释为 (*a).a。这是 Go 语言的一种语法糖，简化了指针的使用。
	return a.a
}

func (a *A) setPA(v string) {
	a.a = v
}

func value(a A, value string) {
	a.a = value
}

func point(a *A, value string) {
	a.a = value
}

func main() {
	a := A{
		a: "a",
	}
	{
		a := A{
			a: "a",
		}
		a.a = "b"
		fmt.Println(a.a)
	}
	fmt.Println(a.a)
	value(a, "haha")
	fmt.Println(a.a)

	point(&a, "any")
	fmt.Println(a.a)

	pa := &a

	// a *A
	// a.setPA("pa")

	// a A
	fmt.Println(a.string())
	// a A
	fmt.Println(a.stringA())
	// a *A
	fmt.Println(a.stringPA())

	// a A
	fmt.Println(pa.string())
	// a A
	fmt.Println(pa.stringA())
	// a *A
	fmt.Println(pa.stringPA())
}
