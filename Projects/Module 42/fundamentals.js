//declear variable 

const id = 101;
let presentClass = 'eignt';
presentClass = 'ten';
console.log(id, presentClass);

// basic condition 
if (id == 101 && presentClass == 'eight') {
    console.log('Class Eight or id 101');
}
else if (id == 101 && presentClass == 'ten') {
    console.log('Class Eight and id 101');
} else {
    console.log('something');
}

// array 

const numbers = [1, 2, 3, 4, 5, 6, 7]
numbers[0] = 8;
console.log(numbers);

// loop 
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    console.log(number);

}

// function 
function mul(num1, num2) {
    const result = num1 * num2;
    return result;
}
console.log('Result is :', mul(2, 3));

// object 
const student = {
    name: 'goribullah',
    roll: 12,
    subject: ['bangla', 'english', 'math']
}
console.log(student.roll);
console.log(student['name']);
console.log(student.subject[1]);