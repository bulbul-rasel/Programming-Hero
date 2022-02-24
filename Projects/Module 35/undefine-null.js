/*
1. variable value not assigned
2. function not returded
3. write retirn bt if didnot return anything
4. parameter that is not passed
5. property that dosen't exist in an object
6. if accessing array element out of range
7. access deleted element of array
*/

let x;
console.log(x);

function sum(x, y) {
    const total = x + y;
}
const result = sum(3, 4);
console.log(result);