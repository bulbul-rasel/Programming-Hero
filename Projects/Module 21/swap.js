var first = 5;
var second = 7;

console.log(first, second);
// One process 

// var temp = first;
// first = second;
// second = temp;

// console.log(first, second);

// destructring process 
[first, second] = [second, first]
console.log(first, second);