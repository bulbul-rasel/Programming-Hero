function addNumbers(num1, num2) {
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    return result;
}
const sum = addNumbers(10, 20, 30, 45, 84, 887, 14)
// console.log(sum)

function getFullname(firstName, lastName) {
    let fullName = '';
    for (let part of arguments) {
        fullName = fullName + part + ' '
    }
    return fullName;
}
const name = getFullname('omuk', 'sanket', 'bin', 'tomuk', 'sonket')
console.log(name)