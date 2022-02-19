const fish = { name: 'hilsha', id: 22, price: 9000, phone: '0123456789', address: 'chandpur', dress: 'silver' }

const { name, price, id, address, dress, phone } = fish;
console.log(id)
console.log(name, price, dress)
console.log(price, id)
console.log(dress, address)
console.log(id, phone)

const companey = {
    name: 'GP',
    ceo: { serial: 1, name: 'ajmol', age: 59 },
    web: {
        work: 'web development', fraemwork: 'react', employee: 22,
        tech: { language: 'js', salary: '20k' }
    }
}
const { serial, age } = companey.ceo;
const { work, employee, fraemwork } = companey.web;
const { salary } = companey.web.tech;

console.log(serial, work, age, fraemwork, salary)