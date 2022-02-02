// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 

function celciousToFarenheight(celcious) {
    var farenheight = celcious * 1.8 + 32;
    return farenheight;
}
console.log('Farenheight Temparature is :', celciousToFarenheight(15));

// ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে।

function farenheightToCelcoius(farenheight) {
    var celcious = (5 / 9) * (farenheight - 32);
    return celcious;
}
console.log('Celcious Tempareture is :', farenheightToCelcoius(100));

// ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 

function grade(marks) {
    if (marks < 0 && marks > 100) {
        console.log('Invalid Marks..! Please Input Valid Marks')
    }
    else if (marks >= 0 && marks <= 39) {
        console.log('She is Fail, She got F, Her Number: ', marks)
    }
    else if (marks >= 40 && marks <= 49) {
        console.log('She is Passed, She got D, Her Number: ', marks)
    }
    else if (marks >= 50 && marks <= 59) {
        console.log('She is Passed, She got C, Her Number: ', marks)
    }
    else if (marks >= 60 && marks <= 69) {
        console.log('She is  Passed, She got B, Her Number: ', marks)
    }
    else if (marks >= 70 && marks <= 89) {
        console.log('She is Passed, She got A, Her Number: ', marks)
    }
    else if (marks >= 80 && marks <= 100) {
        console.log('She is Passed, She got A+, Her Number: ', marks)
    }
}
grade(10);

// ৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 

function calInterest(principle, rate, time) {
    var interest = (principle * rate * time) / 100;
    return interest;
}
console.log('My interest :', calInterest(1000, 5, 10));