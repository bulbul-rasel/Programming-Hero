const products = [
    { name: 'Phone', brand: 'iPhone', price: 17000, color: 'blue' },
    { name: 'Laptop', brand: 'hp', price: 37000, color: 'golden' },
    { name: 'Watch', brand: 'xiaomi', price: 3000, color: 'black' },
    { name: 'glass', brand: 'RayBan', price: 1000, color: 'blue' }
]
// map 
const brands = products.map(product => product.brand)
console.log(brands);
// for each 
products.forEach(product => console.log(product.color))
// filter 
const specificName = products.filter(product => product.name.includes('n'))
console.log(specificName);
// find
const onne = products.find(p => p.price > 5000)
console.log(onne);
