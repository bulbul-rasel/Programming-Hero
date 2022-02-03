// ১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।  

function triArea(base, height, n) {
    var area = (base + height + n) / 2;
    var totalArea = Math.sqrt(area * (area - base) * (area - height) * (area - n));
    return totalArea;
}
console.log('Triangle area is :', triArea(24, 30, 18));

// ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 
var primeNumber = true
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            primeNumber = false;
        }
    }
    // if (num == 1) {
    //     console.log(num, 'Is not a prime Number');
    // }
    if (primeNumber == true) {
        console.log(num, 'is a prime number');
    } else {
        console.log(num, 'Is not a prime Number');
    }
    // let div = 2;
    // while (num > div) {
    //     if (num % div == 0) {
    //         return false;
    //     } else {
    //         div++;
    //     }
    //     return true;
    // }
}
// console.log(isPrime(2));
isPrime(1);

// ________________________________________

function test_prime(n) {

    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(test_prime(15));

// Anothe way for prime Number 
var prime = true;
function testPrime(num) {
    if (num == 1) {
        // console.log('1 is not a prime number')
        prime = false;
    }
    else if (num == 2) {
        // console.log('2 is a Prime Number')
        prime = true;
    }
    else {
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                // console.log(num, 'is not a prime number')
                prime = false;

            }

        }
        // console.log(num, 'is a prime number');
        prime = true;

    }
}
// testPrime(10);
// var getPrime = testPrime(11);
// console.log("Is prime ?", getPrime)
testPrime(10);