var grittings = 'Hello, How are You?';

function reverse(text) {
    let reverse = '';
    for (const element of text) {
        console.log(element);
        reverse = element + reverse;
    }
    return reverse;
}
var reverseLetter = reverse(grittings);
console.log(reverseLetter)