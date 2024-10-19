package main

import "fmt"

type base struct {
	num int
}

func (b base) describe() string {
	return fmt.Sprintf("base with num=%v", b.num)
}

type container struct {
	base
	str string
}

func main() {

	co := container{
		base: base{
			num: 1,
		},
		str: "some name",
	}

	fmt.Printf("co={num: %v, str: %v}\n", co.num, co.str)

	fmt.Println("also num:", co.base.num)

	fmt.Println("describe:", co.describe())

	type describer interface {
		describe() string
	}

	var d describer = co
	fmt.Println("describer:", d.describe())

	co.base = base{
		num: 2,
	}
	fmt.Println("describer 2:", d.describe()) //为什么不输出2？
	fmt.Println("describer num 2:", co.num)
	d = co
	fmt.Println("describer 3:", d.describe())
	co.base.num = 9
	fmt.Println("describer 4:", d.describe()) //为什么不输出9？
}
