console.log('First');
console.log('Second');
// const timeIntervalId = setInterval(() => {
//     console.log('thik thik');
// }, 3000)
let second = 0;
const timeId = setInterval(() => {
    // second++;
    console.log(++second);
    if (second > 5) {
        clearInterval(timeId)
    }

}, 1000)

console.log('Third');
console.log('Four');
