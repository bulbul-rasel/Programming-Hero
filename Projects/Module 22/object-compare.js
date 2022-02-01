let phones = [
    { name: 'iPhone 11 Pro', price: 100000, storage: 64, camera: 12 },
    { name: 'Samsung s8', price: 45000, storage: 64, camera: 24 },
    { name: 'xiaomi note8', price: 10000, storage: 32, camera: 24 },
    { name: 'Nokia N90', price: 8000, storage: 4, camera: 5 },
    { name: 'iHuawei 7i', price: 20000, storage: 64, camera: 18 },
    { name: 'Oppo a32', price: 12000, storage: 64, camera: 12 }
];
let chepest = phones[0];

for (var phone of phones) {
    if (phone.price < chepest.price) {
        chepest = phone;
    }
}
console.log(chepest)