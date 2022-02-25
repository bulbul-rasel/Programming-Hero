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
const heroKhan = {
    id: 103,
    money: 9000,
    name: 'KK Khan',
    IsRich: true,
}
kebria.treatDay(500)
const heroTreat = kebria.treatDay.bind(heroBalam)
heroTreat(200)
const khanTreat = kebria.treatDay.bind(heroKhan)
khanTreat(300)


