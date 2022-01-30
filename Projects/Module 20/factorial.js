// Factorial for loop normal 

// var factorial = 1;
// for (let i = 1; i <= 7; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);

// Factorial for function 

// function getFactorial(number) {
//     var factorial = 1;

//     for (var i = 1; i <= number; i++) {
//         factorial = factorial * i;
//     }
//     return factorial;

// }
// var amarFactorial = getFactorial(7);
// console.log('Factorial Value is :', amarFactorial);

// Using While loop 

// function myFactorial(number) {
//     var factorial = 1;
//     var i = 1;
//     while (i <= number) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }
// var amarFactorial = myFactorial(6);
// console.log('Amar Factorial er Number :', amarFactorial);

// Factorial reverse way

// function getFactorial(number) {
//     let factorial = 1;
//     var i = number;
//     while (i >= 1) {

//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
// }

// Using for loop 

function getFactorial(number) {
    let factorial = 1;
    for (var i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial
}

let amarFactorial = getFactorial(6);
console.log('Amar factorial', amarFactorial)