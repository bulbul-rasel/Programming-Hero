// document.getElementById('sixteenGB').addEventListener('click', function () {
//     // const memoryCost = document.getElementById('memory-cost');
//     // memoryCost.innerText = 200;

//     // const bestPrice = document.getElementById('best-price').innerText;
//     // const memoryPrice = document.getElementById('memory-cost').innerText;
//     // const storagePrice = document.getElementById('storage-cost').innerText;
//     // const deliveryPrice = document.getElementById('delivery-cost').innerText;

//     // const totalPrice = parseInt(bestPrice) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice);

//     // const total = document.getElementById('total-price');
//     // total.innerText = totalPrice;
//     updatePrice('memory-cost', 200);
// });
// // document.getElementById('eightGB').addEventListener('click', function () {
//     updatePrice('memory-cost', 0);
// });
// document.getElementById('ssd3').addEventListener('click', function () {
//     updatePrice('storage-cost', 300);
// });
// document.getElementById('ssd2').addEventListener('click', function () {
//     updatePrice('storage-cost', 200);
// });
// document.getElementById('ssd1').addEventListener('click', function () {
//     updatePrice('storage-cost', 0);
// });
// document.getElementById('paid-delivery').addEventListener('click', function () {
//     updatePrice('delivery-cost', 20);
// });
// document.getElementById('free-delivery').addEventListener('click', function () {
//     updatePrice('delivery-cost', 0);
// });
function updatePrice(itemId, price) {
    const memoryCost = document.getElementById(itemId);
    memoryCost.innerText = price;

    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;

    let totalPrice = parseInt(bestPrice) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice);

    const total = document.getElementById('total-price');
    total.innerText = totalPrice;
}

function onClick(clickId, itemId, price) {
    document.getElementById(clickId).addEventListener('click', function () {
        updatePrice(itemId, price);
        // document.getElementById(clickId).style.backgroundColor = 'blue'
    });
}
onClick('sixteenGB', 'memory-cost', 400);
onClick('eightGB', 'memory-cost', 0);
onClick('ssd3', 'storage-cost', 300);
onClick('ssd2', 'storage-cost', 200);
onClick('ssd1', 'storage-cost', 0);
onClick('paid-delivery', 'delivery-cost', 20);
onClick('free-delivery', 'delivery-cost', 0);

const fakeCode = 'pHero';
document.getElementById('apply-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    const code = promoInput.value;
    if (code === fakeCode) {
        const total = document.getElementById('total-price');
        let totalPrice = parseFloat(total.innerText);
        const discont = (totalPrice * 20) / 100;
        totalPrice = totalPrice - discont;
        total.innerText = totalPrice;
        // document.getElementById('applied-text')
    } else {
        alert('give Exaxt Promo Code')
    }
    promoInput.value = ''
})
