class proTeam {
    name;
    designation = 'Web Developer';
    address = 'Bangladesh';
    constructor(name, address) {
        this.name = name;
        this.address = address
    }
}
class Support extends proTeam {
    teamSupport;
    constructor(name, address, time) {
        super(name, address)
        this.teamSupport = time;
    }
    startSession() {
        console.log(this.name, 'Start a new sassion')
    }
}

class SupportTeam extends proTeam {
    // name;
    // designation = " Web dev support";
    // address;
    // constructor(name, address) {
    //     this.name = name;
    //     this.address = address;
    // }
    constructor(name, address) {
        super(name, address)
    }
    buildAroutine() {
        console.log(this.name, "Build a support routine")
    }
}
class NeptneDev extends proTeam {
    codeEditor;
    constructor(name, address, editor) {
        super(name, address)
        this.codeEditor = editor;
    }
    releaseVersion(version) {
        console.log(this.name, 'Realease A new version For Neptune app', version)
    }
}
const amir = new Support('Amir Khan', 'Bangladesh')
const salman = new Support('Salman Khan', 'Bangladesh')
const shahruk = new Support('ShahRuk Khan', 'Dubai')
const aksay = new Support('Akshay Kumar', 'Dubai', 10)

const ami = new NeptneDev('Ami K', 'Bd', 10)

// const aliya = new SupportTeam('Akshay Aliya bhatt', 'Mumbai')
const aliya = new SupportTeam('Aliya bhatt', 'Mumbai')
console.log(aliya)
console.log(ami)
ami.releaseVersion('10.12.8')
aliya.buildAroutine()
// console.log(salman)
// console.log(shahruk)
console.log(aksay)
amir.startSession();