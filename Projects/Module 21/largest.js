// Find the leargest Number 

// function findLargest(number) {
//     var largest = number[0];
//     for (var i = 0; i < number.length; i++) {
//         var element = number[i];
//         if (element > largest) {
//             largest = element;
//         }
//     }
//     return largest;
// }
// var ages = [22, 12, 75, 54, 91, 34, 99, 75];
// var oldest = findLargest(ages);
// console.log(oldest)

// TextTrackList, Find the lowest Number 

function findLowest(number) {
    var low = number[0];
    for (var i = 0; i < number.length; i++) {
        var element = number[i];
        if (element < low) {
            low = element;
        }
    }
    return low;

}
var ages = [-2, 25, -24, 10, 45, -78, -101, 110];
var lowest = findLowest(ages);
console.log(lowest);