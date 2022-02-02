// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 

function findLowest(number) {
    var lowest = number[0];
    for (let i = 0; i < number.length; i++) {
        var element = number[i];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}

// biggest
// function findLowest(number) {
//     var lowest = number[0];
//     for (var i = 0; i < number.length; i++) {
//         var element = number[i];

//         if (element > lowest) {
//             lowest = element;
//         }
//     }
//     return lowest;
// }

let number = [10, 8, -20, 58, -10, 42, 1, -22, 60, 55];
var low = findLowest(number);
console.log(low);

// ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  

function min(num1, num2, num3) {
    var findMin = Math.min(num1, num2, num3);
    return findMin;
}
var minValue = min(20, 10, 30);
console.log(minValue);

// ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 

function avg(num) {
    var count = 0;
    var store = 0;
    for (var i = 0; i < num.length; i++) {

        var store = store + num[i];
        count++;
        var total = store / count;

    }
    return total;
}
var num = [10, 20, 30, 40, 50, 60, 70];
var findAvg = avg(num);
console.log(findAvg);

// ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 

function area(height, width) {
    return height * width;
}
console.log("Your Total Area is:", area(10, 20))

// ৫. কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 

function findSecondLargest(number) {
    var largest = number[0];
    var secondLargest = number[0];
    for (var i = 0; i < number.length; i++) {
        var element = number[i];
        if (element > largest) {
            secondLargest = largest;
            largest = element;
        }
        else if (element > secondLargest) {
            secondLargest = element;
        }
    }
    return secondLargest;
}
var num = [22, 12, 75, 54, 91, 34, 99, 75];
var gotSecondLargest = findSecondLargest(num);
console.log(gotSecondLargest)