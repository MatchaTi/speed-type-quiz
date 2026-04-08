package main

import (
	"fmt"
	"strings"
)

func main() {
	text := "   Hello World   "
	text = strings.TrimSpace(text)
	text = strings.ToUpper(text)
	fmt.Println(text)
}