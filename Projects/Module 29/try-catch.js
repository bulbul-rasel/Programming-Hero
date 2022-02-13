const myName = 'ami'

try {
    myName = 'tmi'
}
catch (error) {
    console.log('My error is', error)
}
console.log(myName)