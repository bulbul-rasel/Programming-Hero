const kebria = {
    id: 101,
    money: 10000,
    name: 'Rj Kebria',
    IsRich: true,
    treatDay: function (expence, tips, tax) {
        this.money = this.money - expence - tips - tax;
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
kebria.treatDay(500, 100, 7)
const heroTreat = kebria.treatDay.bind(heroBalam)
heroTreat(200, 50, 5)
const khanTreat = kebria.treatDay.bind(heroKhan)
khanTreat(300, 50, 7)
// Call 
kebria.treatDay.call(heroBalam, 500)

//apply
// kebria.treatDay.apply(heroBalam, [1000, 100, 15])