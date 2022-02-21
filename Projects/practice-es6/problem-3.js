// problem 3a 
const divFive = (num) => (num / 5)
console.log(divFive(10));

// problem 3b 
const add = (num1, num2) => ((2 + num1) * (2 + num2))
const sum = add(5, 5)
console.log(sum);

// problem 3c 
const mul = (mul1, mul2, mul3) => (mul1 * mul2 * mul3)
console.log(mul(2, 2, 2));

// problem 3d 
const multiply = (mul11, mul22) => {
    const mulAdd = 2 + mul11;
    const mulAdd2 = 2 + mul22;

    const subAdd = mulAdd * mulAdd2;
    return subAdd;
}
const res = multiply(5, 5)
console.log(res);