// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 

function namta(num) {
    for (var i = 1; i <= 10; i++) {
        var result = num * i;
        console.log('The Value is', num, '*', i, '=', result)
    }

}
namta(13);

// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

function LowerCase(name) {
    return name.toLowerCase();
    // return name.toUpperCase();
}
console.log('Output as Uppercase/LowerCase :', LowerCase('BulBul Ahammed Rasel'))

// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 

function fullName(firstName, LastName) {
    var name = firstName + ' ' + LastName;
    return name;
}
var getName = fullName('Bulbul', 'Rasel');
console.log('String Concatenation :', getName)


// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

function square(num) {
    return num * num;
}
console.log('The result of Square is: ', square(5));

// ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :



const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],

    crust: 'deep dish',

    serves: 2

}
console.log('Print Papperoni or print object property from array object: ', pizza.toppings[2]);