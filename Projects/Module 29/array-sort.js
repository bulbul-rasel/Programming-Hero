const numbers = [2, 8, 4, 9, 5, 7, 3, 1, 6]
// const sortNumbers = numbers.sort();
// const sortNumbers = numbers.reverse();
const sortNumbers = numbers.sort().reverse();

console.log(sortNumbers)

const names = ['gofur', 'abdule', 'korim', 'badsha', 'dipjol']
const sortName = names.sort()
// console.log(sortName)

const bigNumbers = [45, 24, 78, 99, 84, 2, 48, 4];
const sortBig = bigNumbers.sort(function (a, b) {
    return a - b;
})
console.log(sortBig)