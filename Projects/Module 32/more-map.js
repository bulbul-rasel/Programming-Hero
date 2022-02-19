const friends = ['tom cruis', 'Tom Latham', 'Tom Pain', 'Tom Mohabbot ali']
const fLenght = friends.map(friend => friend.length)
console.log(fLenght)

const name = [

    { 'name': 'jewel', 'age': '20' },
    { 'name': 'bulbul', 'age': '22' },
    { 'name': 'foyaz', 'age': '24' },
    { 'name': 'mehedi', 'age': '28' },
]
const data = name.map(x => x.age)
const data1 = name.map(x => x.name)
// const data2 = name.map(x => x)
name.forEach(names => console.log(names))
console.log(data)
console.log(data1)
// console.log(data2)