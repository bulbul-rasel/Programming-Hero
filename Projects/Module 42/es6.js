const numbers = [1, 2, 3, 4, 5, 6, 7]
const student = {
    name: 'goribullah',
    roll: 12,
    subject: ['bangla', 'english', 'math']
}
// template string 
const about = `his name is: ${student.name} His Roll is: ${numbers[2]} His favorit is: ${student.subject[2]}`


//  arrow function  

const single = () => 55;
const addNmbr = (num) => num + 22;
const isEven = x => x % 2 == 0;
const double = (num1, num2) => {
    const result = num1 + num2;
    return result;
}

// spreed operator 
const newNumber = [...numbers, 55];
newNumber.push(20)
console.log(newNumber);
