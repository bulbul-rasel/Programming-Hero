const products = [
    'Amar Hp Laptop',
    'Foyaz er hp notebook laptop',
    'lenevo core i9 laptop',
    'iPhone 13pro max Phone',
    'Amar Huawei phone',
    'Asus Rog Laptop',
    'Update Samsung phone',
    'Lenevo yega laptop'
]
const searching = 'laptop'
// const searching = 'lenevo'
// index of 
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}
// includes 
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product)
    }
}
// startsWith 
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        // output.push(product)
    }
}
// endsWith 
for (const product of products) {
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product)
    }
}
console.log(output);