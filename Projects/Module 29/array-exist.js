function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'Give array value'
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kutub', 'Robi', 'saron', 'Abdullah', 'oneTwotr']
let myBigBuddy = megaFriend(12354);
// console.log(myBigBuddy)
//  IndexOf Array 
if (friends.indexOf('Abdullah')) {
    // console.log('Abdullah Ache')
} else {
    console.log('Dosenot exits')
}
if (friends.includes('saron')) {
    console.log('Soron Ache')
}
// array concat 
const first = [1, 2, 3, 5];
const second = [4, 6, 7];
const combined = first.concat(second);
console.log(combined)