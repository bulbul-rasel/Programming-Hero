var arr = [43, 25, 82, 65, 73, 91, 58];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    sum = sum + element;

}
console.log(sum);

// Using Function 

// function arraySum(number) {
//     var sum = 0;
//     for (let i = 0; i < number.length; i++) {
//         var element = number[i];

//         sum = sum + element;
//     }
//     return sum;
// }


var total = arraySum([10, 20, 30]);
console.log('Total Number is :', total)