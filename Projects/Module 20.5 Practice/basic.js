// ১. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে হবে। 

var name = 'Bulbul';
let roll = 1;
const id = 101;

console.log(id);

// ২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// ৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে। 

for (let i = 50; i <= 80; i++) {
    if (i % 2 != 0) {
        console.log('Number is Odd:', i);
    }

}

// ৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো 

function add(num1, num2, num3) {
    var sum = num1 + num2 + num3;
    return sum;

}
var summation = add(10, 20, 30);
console.log('The Sum of Three Number is :', summation);
