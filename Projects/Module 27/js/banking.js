// Using Function 

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field 
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText)
    totalElement.innerText = previousTotal + amount;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    } else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);

    // const depositAmount = getInputValue('deposit-input');

    // get current deposit 
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositTotalText)
    // depositTotal.innerText = previousDepositTotal + depositAmount;

    // updateTotalField('deposit-total', depositAmount)

    // Update total balance 
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depositAmount;
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount)
        updateBalance(depositAmount, true);
    } else {
        alert('Give Valid Input');
    }

    // // clear input field 
    // depositInput.value = '';



});
// For withdraw 
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);

    // const withdrawAmount = getInputValue('withdraw-input')

    // update withdraw Total
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(withdrawTotalText);
    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // updateTotalField('withdraw-total', withdrawAmount)

    // update total balance 
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
    const withdrawAmount = getInputValue('withdraw-input')
    const currentBalance = getCurrentBalance()
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount)
        updateBalance(withdrawAmount, false)
    } else {
        alert('Give Valid Input');
    }
    // // clear withdraw input 
    // withdrawInput.value = '';

});