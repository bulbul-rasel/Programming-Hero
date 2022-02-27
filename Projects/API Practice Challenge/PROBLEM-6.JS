// ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

const companey = {
    id: 101,
    name: 'GP',
    ceo: { cName: 'Jolil Miya', salary: '80k', age: 56 },
    dev: {
        work: { name: 'webDev', language: 'React' },
        hudai: { kam: 'nai', kahi: 'jani na' }
    },
    passRank: [2018, 2020, 2021],
    sum(num, num2) {
        return num + num2;
    }
}
const { passRank } = companey;
const balance = passRank;
console.log(`Second time Ranking  Position is :`, balance[1]);