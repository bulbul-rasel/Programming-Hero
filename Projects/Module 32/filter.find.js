const numbers = [3, 67, 23, 54, 1, 7, 16, 345, 7, 13, 56];
const bigNumber = numbers.filter(number => number > 20)
console.log(bigNumber)

const name = [

    { 'name': 'jewel', 'age': '20' },
    { 'name': 'bulbul', 'age': '22' },
    { 'name': 'foyaz', 'age': '24' },
    { 'name': 'mehedi', 'age': '28' },
]

const findAge = name.filter(ages => ages.age > 22)
// const findName = name.filter(names => names.name == 'bulbul')
const findName = name.filter(names => names.name == 'bulbul1')
const findName1 = name.find(names => names.name == 'bulbul')
// const findName1 = name.find(names => names.name == 'bulbuld')
console.log(findName)
console.log(findName1)