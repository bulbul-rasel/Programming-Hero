const kebria = {
    id: 101,
    money: 10000,
    name: 'Rj Kebria',
    IsRich: true,
    treatDay: function (expence) {
        this.money = this.money - expence;
        console.log(this);
        return this.money
    }
}
const heroBalam = {
    id: 102,
    money: 8000,
    name: 'Rj Balam',
    IsRich: false,
}

function add() {
    console.log(this);
}