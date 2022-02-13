let myFavDate = new Date(1971 - 12 - 16)
// console.log(myFavDate)
let myspDate = new Date(1971, 3, 26, 11, 40, 22, 70)
// console.log(myspDate)
if (myFavDate.getTime < myspDate.getTime) {
    console.log('Favorite date is earliar')
} else {
    console.log('My special date is earliar')
}