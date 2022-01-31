// For simple method 

// var fibo = [0, 1];
// for (var i = 2; i <= 10; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//     // console.log(fibo);
// }
// console.log(fibo);

// Fibonacci for Function method 

function getFibo(num) {
    if (typeof num != 'num') {
        return 'Please Enter Number';
    }
    if (num < 2) {
        return 'Please enter greater than 2';
    }
    var fibo = [0, 1];
    for (var i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2]
    }
    return fibo;
}
var fiboSeries = getFibo('bulbul');
console.log(fiboSeries);