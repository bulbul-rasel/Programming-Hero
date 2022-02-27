// ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const numMul = numbers.map(number => number * 7)
console.log(`& multiplied value is :`, numMul);