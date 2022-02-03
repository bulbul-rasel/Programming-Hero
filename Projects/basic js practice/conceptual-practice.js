// Multiple if else multiple condition 

function totalBill(unit) {
    let bill;
    if (typeof unit != "number") {
        return 'Please Input Valid Number';
    }
    if (unit <= 0) {
        return 'Please Give positive Number';
    }
    if (unit <= 100) {
        bill = unit * 5;
    }
    else if (unit > 100 && unit < 200) {
        let firstBill = unit * 5;
        let secondBill = (unit - 100) * 6;
        bill = firstBill + secondBill;
    } else {
        let firstBill = 100 * 5;
        let secondBill = 100 * 6;
        let thirdBill = (unit - 200) * 7;
        bill = firstBill + secondBill + thirdBill;
    }
    return bill;
}
console.log('Total Bill :', totalBill(-80));

// Count the number whice is divisible by 3 (1-20)

function divisibleThree() {
    var count = 0;
    var sum = 0;

    for (let i = 1; i <= 20; i++) {
        if (i % 3 == 0) {

            // console.log(i);
            sum = sum + i;
            count++;

        }
    }
    var avg = sum / count;
    console.log(avg);// average of (1-20) which divisible by 3
    return count; // how many number is divisible by 3 (1-20)
}
console.log(divisibleThree());

// find the total vowel in a sentance

function countVowel(sentance) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for (const i of sentance) {
        if (vowels.indexOf(i) > -1) {
            count++;
        }
    }
    return count;
}
let sentance = 'A Quick brown fox jumps over the lazy dog';
console.log(countVowel(sentance));


// Find if anybody got A+ from your friends

function findAplus(marks) {
    for (let i = 0; i < marks.length; i++) {
        let element = marks[i];
        if (element >= 80) {
            return true;
        }
    }
    return false;
}
console.log(findAplus([80]));

// Find the second leargest 

let number = [45, 41, 56, 35, 64, 60];

function secondLargest(number) {
    let lergest = number[0];
    let secondLargest = number[0];

    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element > lergest) {
            secondLargest = lergest;
            lergest = element;
        } else if (element > secondLargest) {
            secondLargest = element;
        }
    }
    return secondLargest;
}
console.log(secondLargest(number));