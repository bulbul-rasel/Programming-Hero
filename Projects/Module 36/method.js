const student = {
    id: 101,
    money: 10000,
    name: 'Rj Kebria',
    IsRich: false,
    major: 'CSE',
    subject: ['English', 'Mathemetics', 'Physics', 'Electronics'],
    bestFriend: {
        name: 'Gofur',
        major: 'EEE',
        subject: ['English', "Mathemetics", 'Programming']
    },
    takeExam: function () {
        console.log(this.subject[2], "Taking Exam");
    },
    treatDay: function (expence, tips) {
        this.money = this.money - expence - tips;
        return this.money
    }
}
student.takeExam()
const treat = student.treatDay(2000, 100)
const treat2 = student.treatDay(500, 20)
console.log(treat2);