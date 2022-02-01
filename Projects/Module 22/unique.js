// for name 

// var names = ['abul', 'babul', 'pagul', 'kabul', 'babul', 'abul', 'papul', 'abul', 'gabul', 'kabul', 'abul'];

// function removeDuplicate(names) {
//     const unique = [];

//     // for (var i = 0; i < names.length; i++) {
//     //     const element = names[i];
//     //     console.log(element);
//     // }
//     for (const element of names) {
//         if (unique.indexOf(element) == -1) {
//             unique.push(element);
//         }
//     }
//     return unique;
// }
// var findUnique = removeDuplicate(names);
// console.log(findUnique);

// for Number duplicate check 

var numbers = [10, 12, 8, 10, 7, 47, 8, 96, 8, 42, 7, 63];

function findDuplicalte(numbers) {
    const unique = [];

    for (const element of numbers) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
var removeDuplicate = findDuplicalte(numbers);
console.log(removeDuplicate);