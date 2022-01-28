var mobile = {
    name: ' Huawei',
    size: 6,
    color: 'blue gradient',
    price: 23000
};
// console.log(mobile);
console.log(mobile.price);

mobile.price = 19000;
mobile["price"] = 17000;

var propertyPrice = "price";
mobile[propertyPrice] = 15000;

console.log(mobile);