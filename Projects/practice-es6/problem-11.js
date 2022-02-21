// const companey = {
//     name: 'GP',
//     ceo: { cName: 'Jolil Miya', salary: '80k', age: 56 },
//     dev: { name: 'webDev', language: 'React' }
// }
// const { name } = companey;
// const { cName, age } = companey.ceo;
// const { language } = companey.dev

// console.log(name);
// console.log(age, language, cName);
const companey = {
    name: 'GP',
    ceo: { cName: 'Jolil Miya', salary: '80k', age: 56 },
    dev: { name: 'webDev', language: 'React' },
    numbers: [1, 2, 3, 4, 5]
}
const { name } = companey;
const { cName, age } = companey.ceo;
const { language } = companey.dev

// console.log(name);
// console.log(age, language, cName);
console.log(companey.numbers);