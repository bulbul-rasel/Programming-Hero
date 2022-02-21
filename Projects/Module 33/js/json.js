// javaScript object notatin 
const nayok = { id: 12, name: 'Gorib Khan', role: 'Actor' };
const stringified = JSON.stringify(nayok);

// console.log(nayok);
// console.log(stringified);

const shop = {
    name: 'Aliya Shop',
    address: 'Ranvir Road',
    profit: 15000,
    products: ['laptop', ' mobile', 'pepsi'],
    owner: {
        name: 'aliya Bhatt',
        profession: 'accterss'
    },
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
console.log(shopStringified)
// console.log(shop);
const converted = JSON.parse(shopStringified)
console.log(converted);