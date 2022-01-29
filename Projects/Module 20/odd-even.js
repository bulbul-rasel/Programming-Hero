// Even Number 
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

var amarNmbr = 1551;
var isNmbrEven = isEven(amarNmbr)
console.log('Amar Number ta ki Even ? :', isNmbrEven);

var tarNmbr = 1552;
var isNmbrEven = isEven(tarNmbr)
console.log('Tar Number ta ki Even ? :', isNmbrEven);


// Odd number 
function isOdd(number) {
    if (number % 2 == 1) {
        return true;
    }
    return false;
}
// Anther Way 
// function isOdd(number) {
//     if (number % 2 != 0) {
//         return true;
//     }
//     return false;
// }

var amarNmbr = 1551;
var isNmbrOdd = isOdd(amarNmbr)
console.log('Amar Number ta ki Odd ? :', isNmbrOdd);
