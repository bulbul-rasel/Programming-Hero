// for (var i = 0; i <= 10; i++) {
//     if (i == 5) { break; }
//     console.log(i);
// }

var numbers = [20, 80, 100, 34, 69, 24, 105, 56];
//  for Break 
// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     if (number > 100) {
//         break;
//     }
//     console.log(number);
// }

// for continue 
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 70) {
        continue;
    }
    console.log(number);
}