// Object Literal 
const person = { name: "Shakib Al Hasan", job: "Cricketer" }
// Using constractor Metod 
const human = new Object()

const student = Object.create(person)

console.log(student.job);

// Using Class 
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const man = new People('Manus', 12);
console.log(man);

// Using Functon 

function Manus(name) {
    this.name = name;
}
const peop = new Manus('Gaffar')
console.log(peop);