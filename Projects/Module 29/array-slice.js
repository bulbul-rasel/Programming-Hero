const number = [3, 4, 8, 2, 4, 7, 54, 21, 45, 15, 79];
const numberSlice = number.slice(4, 8);
// console.log(numberSlice)
// console.log(number)
// const numberSlice2 = number.splice(4, 2)
// console.log(numberSlice2)
// console.log(number)
// const numberSlice2 = number.splice(4, 2, 77, 55, 88, 99)
const numberSlice2 = number.splice(4, 0, 77, 55, 88, 99)
console.log(numberSlice2)
console.log(number)