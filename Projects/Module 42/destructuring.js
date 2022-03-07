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
const { name, ide } = employee;
const { height, weigth } = employee.specification;
const { brand } = employee.specification.watch;
console.log(brand);