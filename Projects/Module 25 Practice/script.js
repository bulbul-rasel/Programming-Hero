// var a = document.getElementById('h2s');
// a = document.body.style.color = 'blue';

// task 2 
var h2s = document.getElementsByTagName('h2');

for (const h2 of h2s) {
    h2.style.color = 'lightblue'
}
// Task 3
backpack.style.backgroundColor = ('tomato');
// Task 4
var cards = document.getElementsByClassName('card')

for (const card of cards) {
    card.style.borderRadius = "30px";
}

// Task 5
function clickMe() {
    // document.body.style.color = 'red';
    console.log('Somossa nai click hoici')
}

// task 6

document.getElementById('delete-btn').addEventListener('click', function () {
    document.getElementById('delete-btn').style.display = 'none'
})


// task 7 
document.getElementById('send-mail').addEventListener('keyup', function (event) {
    const sendBtn = document.getElementById('send-btn')
    if (event.target.value == 'email@') {
        sendBtn.removeAttribute('disabled');
    }
    else {
        sendBtn.setAttribute('disabled', true);
    }
})

// task 8 
document.getElementById('makeOrange').addEventListener('dblclick', function () {
    document.getElementById('makeOrange').style.backgroundColor = 'orange'
})