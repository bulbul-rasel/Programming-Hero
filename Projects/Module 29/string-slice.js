const antham = 'Amar sonar bangla ami tomay valobasi';
const word = antham.split(' ');
const withoutA = antham.split('a')
// console.log(withoutA)
// small Slice 
const smallSlich = antham.slice(2, 15)
// console.log(smallSlich)
//  subStr 
const anotherpart = antham.substr(11, 9)
// subString 
const anotherOnepart = antham.substring(11, 15)
// console.log(anotherOnepart)

const first = 'Amar';
const second = 'Sonar'

// const fullString = first.concat(second);
const fullString = first.concat(second).concat('Bangla');
// console.log(fullString)

const words = ['amr', 'sonar', 'bangla', 'ami', 'tomay', 'valobasi']
// const wordJoin = word.join('');
// const wordJoin = word.join(' ');
// const wordJoin = word.join(',');
const wordJoin = word.join(', ');
console.log(wordJoin)