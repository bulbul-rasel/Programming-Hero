var business = 500;
var minister = 550;
var army = 600;

// 2 condition way 
// if (business > minister) {
//     console.log('Bisiness is bigger');
// } else {
//     console.log('Minister is Bigger')
// }

// 3 condition Way 

// if (business > minister && business > army) {
//     console.log('Business Is Bigger')
// }
// else if (minister > business && minister > army) {
//     console.log('Minister is bigger')
// } else {
//     console.log('Army is bigger')
// }

// usinf math Max 

// var max = Math.max(business, minister, army);
// console.log(max);

// Using Function And Practice 1

// function findLeargest(first, second, third) {
//     if (first > second && first > third) {
//         return first;
//     }
//     else if (second > first && second > third) {
//         return second
//     } else {
//         return third
//     }
// }
// var largest = findLeargest(80, 45, 55);
// console.log('Largest Number is :', largest)

// find Smalest using function task 2

function findSmallest(first, second, third) {
    if (first < second && first < third) {
        return first;
    }
    else if (second < first && second < third) {
        return second
    } else {
        return third
    }
}
var smallest = findSmallest(80, 45, 55);
console.log('LowestNumber is :', smallest)