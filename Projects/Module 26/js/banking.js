
document.getElementById('diposit-button').addEventListener('click', function () {
    const dipositInput = document.getElementById('diposit-input');
    const newDipositAmountText = dipositInput.value;
    const newDipositAmount = parseFloat(newDipositAmountText);
    // update diposit total
    const dipositTotal = document.getElementById('diposit-total');
    const previousDipositText = dipositTotal.innerText;
    const previousDipositAmmount = parseFloat(previousDipositText);

    const newDipositTotal = newDipositAmount + previousDipositAmmount;

    dipositTotal.innerText = newDipositTotal;
    //update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDipositAmount;
    balanceTotal.innerText = newBalanceTotal;
    dipositInput.value = '';
});
//  withdraw handle
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;


    // Update total Balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    withdrawInput.value = '';

})
