// json pharse 
const employee = {
    name: 'Hamja ali',
    ide: 'VS Code',
    salary: 20000,
    age: 25,
    language: ['c', 'c++', 'java'],
    specification: {
        height: 65,
        weigth: 70,
        dringking: 'water',
        watch: {
            brand: 'gear',
            bettery: '14mah'
        }
    }
}

const employeeJSON = JSON.stringify(employee)
console.log(employeeJSON);
const employeePharse = JSON.parse(employeeJSON)
console.log(employeePharse);

// fetch 
// fetch('url')
//     .then(res => res.JSON())
//     .then(data => console.log(data))

// keys 
const keys = Object.keys(employee)
// values 
const values = Object.values(employee)

//  for 
const numbers = [42, 85, 78, 65, 18, 96, 73, 45]
numbers.forEach(number => console.log(number))
// if return need 
numbers.map(num => num * 2)

const products = [
    { name: 'Phone', brand: 'iPhone', price: 17000, color: 'blue' },
    { name: 'Laptop', brand: 'hp', price: 37000, color: 'golden' },
    { name: 'Watch', brand: 'xiaomi', price: 3000, color: 'black' },
    { name: 'glass', brand: 'RayBan', price: 1000, color: 'blue' }
]
const newProduct = { name: 'jan na', price: 8751, brand: 'top' }
// add a new object 
const newProducts = [...products, newProduct]
// remove one specific 
const remaining = products.filter(p => p.name !== 'Phone')
console.log(remaining);