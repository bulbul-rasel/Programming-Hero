// Factorial for loop normal 

// var factorial = 1;
// for (let i = 1; i <= 7; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);

// Factorial for function 

function getFactorial(number) {
    var factorial = 1;

    for (var i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;

}
var amarFactorial = getFactorial(7);
console.log('Factorial Value is :', amarFactorial);