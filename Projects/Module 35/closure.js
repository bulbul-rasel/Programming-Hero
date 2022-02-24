function stopWatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}
let clock1 = stopWatch();
console.log(clock1());

function work(x, y = 4) {
    return x + y;
}
console.log(work(32);
