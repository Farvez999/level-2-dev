// normal function 
function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(2, 2)

// arror function
const addArrow = (num1: number, num2: number): number => num1 + num2

//call back funtion
const arr = [1, 3, 5]
const newArr = arr.map((elem: number) => elem * elem)