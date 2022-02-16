function getPin() {
    let pin = Math.round(Math.random() * 10000);
    let pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin()
    document.getElementById('display-pin').value = pin;
}
document.getElementById('keypad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

});
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const preType = document.getElementById('typed-numbers');
    const typedNumbers = preType.value;

    const successMessege = document.getElementById('notify-success');

    const failError = document.getElementById('notify-fail');

    if (pin == typedNumbers && typedNumbers != '') {
        successMessege.style.display = 'block'
        failError.style.display = 'none'
    } else {
        failError.style.display = 'block'
        successMessege.style.display = 'none'
    }
    preType.value = ''
}