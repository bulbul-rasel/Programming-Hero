// ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 

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
const { sum } = companey;
const { passRank } = companey;
// const { name } = companey;
const { language, name } = companey.dev.work
// console.log(`This is Companey name`, name);
console.log(`This is Companey Language`, language, `Work is`, name, `Rangking year`, passRank[1], `Result is :`, sum(2, 3));