class Support {
    name;

    designation = 'Web Developer';
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address
    }
    startSession() {
        console.log(this.name, 'Start a new sassion')
    }
}
const amir = new Support('Amir Khan', 'Bangladesh')
const salman = new Support('Salman Khan', 'Dubai')
console.log(amir)
console.log(salman)
amir.startSession();