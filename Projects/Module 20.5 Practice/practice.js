// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 

function celciousToFarenheight(celcious) {
    var farenhight = (celcious * 1.8) + 32;
    return farenhight;
}
var farenheightTemp = celciousToFarenheight(25);
console.log('Farenhight Tempareture is :', farenheightTemp);

// ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে।

function farenheightToCelcious(farenheight) {
    var celcious = (5 / 9) * (farenheight - 32);
    return celcious;
}
var celciusTemp = farenheightToCelcious(80);
console.log('Celcious Tempareture is :', celciusTemp)

// ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 

function grade(marks) {
    if (marks >= 80 && marks <= 100) {
        console.log('You got A+, Your Number Is:', marks)
    }
    else if (marks >= 70 && marks <= 79) {
        console.log('You got A, Your Number Is:', marks)
    }
    else if (marks >= 60 && marks <= 69) {
        console.log('You got B, Your Number Is:', marks)
    }
    else if (marks >= 50 && marks <= 59) {
        console.log('You got C, Your Number Is:', marks)
    }
    else if (marks >= 40 && marks <= 49) {
        console.log('You got D+, Your Number Is:', marks)
    }
    else if (marks >= 0 && marks <= 39) {
        console.log('You got F+, Your Number Is:', marks)
    }
    else if (marks < 0 || marks > 100) {
        console.log('Marks is Invalid', marks);
    }

}
grade(500);

// ৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 

function interast(principle, rate, time) {
    var cal = (principle * rate * time) / 100;
    //console.log('Total Amount :', cal + parseInt(principle))
    return cal;
}
var myInterast = interast(1000, 5, 10);
console.log('My Bank Interest is: ', myInterast)

var totalAmount = 1000 + myInterast;
console.log('My Total amount is:', totalAmount)