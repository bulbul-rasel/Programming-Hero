const bottol = { name: 'Bottol', hold: 'Liqued', price: 200, isCleaned: true, size: '2L', color: 'Blue' }

for (const prop in bottol) {
    console.log(prop, bottol[prop]);
}
const keys = Object.keys(bottol)
for (const prop of keys) {
    // console.log(prop, bottol[prop]);
}
const entries = Object.entries(bottol)
for (const [keys, values] of entries) {
    // console.log(keys, values);
}
