function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText)

    inputField.value = '';
    return amountValue;
}
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText)

    totalElement.innerText = previousTotal + amount;
}

function updateTotal(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = previousbalanceTotal + amount;
    } else {
        balanceTotal.innerText = previousbalanceTotal - amount;
    }

}
document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText)
    // const depositAmount = getInputValue('deposit-input');

    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousdepositTotal = parseFloat(depositTotalText)

    // depositTotal.innerText = previousdepositTotal + depositAmount;
    // updateTotalField('deposit-total', depositAmount)

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousbalanceTotal = parseFloat(balanceTotalText);

    // balanceTotal.innerText = previousbalanceTotal + depositAmount;
    // updateTotal(depositAmount, true)

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount)
        updateTotal(depositAmount, true)
    } else {
        alert('Please Enter Valid Input')
    }


    // depositInput.value = '';
});
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    // const withdrawAmount = getInputValue('withdraw-input');

    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previouswithdrawTotal = parseFloat(withdrawTotalText);

    // withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount;
    // updateTotalField('withdraw-total', withdrawAmount)

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousbalanceTotal = parseFloat(balanceTotalText);

    // balanceTotal.innerText = previousbalanceTotal - withdrawAmount;
    // updateTotal(withdrawAmount, false);
    const withdrawAmount = getInputValue('withdraw-input');
    if (withdrawAmount > 0) {
        updateTotalField('withdraw-total', withdrawAmount)
        updateTotal(withdrawAmount, false);
    } else {
        alert('Please Enter Valid Input')
    }

    // withdrawInput.value = '';
})