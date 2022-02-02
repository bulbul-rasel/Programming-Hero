// let products = [
//     { name: 'laptop', price: 75000 },
//     { name: 'shirt', price: 500 },
//     { name: 'phone', price: 3300 },
//     { name: 'pant', price: 700 }
// ];
// let totalPrice = 0;
// for (const product of products) {
//     totalPrice = totalPrice + product.price;
// }
// console.log(totalPrice)

let products = [
    { name: 'laptop', price: 75000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 4 },
    { name: 'phone', price: 33000, quantity: 2 },
    { name: 'pant', price: 700, quantity: 4 }
];

var total = 0;
for (let product of products) {
    var totalPoduct = product.price * product.quantity;
    total = totalPoduct + total;
}
console.log(total);