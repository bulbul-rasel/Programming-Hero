const myObject = { a: 20, b: 30, c: 10, x: 45, y: 85, z: 71 }
const { x, a } = myObject;
// console.log(x)

const [p, q] = [45, 55];
console.log(q)

const companey = {
    name: 'GP',
    ceo: { serial: 1, name: 'ajmol', age: 59 },
    web: {
        work: 'web development', fraemwork: 'react', employee: 22,
        tech: { language: 'js', salary: '20k' }
    }
}
// console.log(companey.web.tech.salary)
console.log(companey?.backend?.tech.salary)