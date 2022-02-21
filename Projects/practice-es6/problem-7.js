const product = [
    { name: 'iPhone', price: 4000, battery: 3000 },
    { name: 'xioami', price: 3500, battery: 4000 },
    { name: 'huawei', price: 5000, battery: 3500 },
    { name: 'oppo', price: 4500, battery: 5000 }
]
const findFive = product.find(five => five.price == 5000)
console.log(findFive);