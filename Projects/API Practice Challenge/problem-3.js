// ৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে।
notPram = () => {
    const num = 10;
    return num;
}
const noPram = notPram()
console.log(`Single Number is:`, noPram);

// ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ৭ দিয়ে ভাগ করে ভাগফল রিটার্ন করবে।

singleFun = (num) => {
    const res = num / 10;
    return res;
}
const single = singleFun(50)
console.log(`The value of divede 10 is:`, single);

// ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।

doubleFun = (num1, num2) => {
    const sum = num1 + num2;
    const res = sum / 2;
    return res;
}
const double = doubleFun(10, 10);
console.log(`Double parameter Sum then devide is :`, double);

// ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
// array Method 
andDouble = (num1, num2) => {
    const array = [num1, num2];
    var resultValue = 0;
    for (var i = 0; i < array.length; i++) {

        var result = array[i] + 7;
        resultValue = resultValue + result;
    }
    return resultValue;


}
const andDoubleFun = andDouble(7, 9)
console.log(`Result is: `, andDoubleFun);

// simle method 
doubleAgain = (num1, num2) => {
    const result = (num1 + 7) + (num2 + 7)
    return result
}
const doubleDo = doubleAgain(7, 7)
console.log(`Result is:`, doubleDo);