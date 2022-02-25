const bottol = { name: 'Bottol', hold: 'Liqued', price: 200, isCleaned: true, size: '2L', color: 'Blue' }
// Getting all Property Name 
const keys = Object.keys(bottol)
const values = Object.values(bottol)
const sob = Object.entries(bottol)

// Object.seal(bottol)
Object.freeze(bottol)
bottol.price = 250;
delete bottol.isCleaned;
console.log(bottol);