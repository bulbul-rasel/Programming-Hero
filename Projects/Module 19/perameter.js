
function bringSingara(taka) {
    console.log('Mama ami taka enechi', taka, 'taka');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
var money = 250;
var singara = bringSingara(money);
console.log('ami Singara Pabo', singara, 'ta')