function clickMe() {
    document.body.style.backgroundColor = 'red';
}
// on click button using id function 
const clickBlue = document.getElementById('click-blue');
clickBlue.onclick = blueBtn;

function blueBtn() {
    document.body.style.backgroundColor = 'blue';
}

// annonimus function
const clickGreen = document.getElementById('click-green')
clickGreen.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

//handle event listner
const clickGoldenRod = document.getElementById('click-golden-rod');
clickGoldenRod.addEventListener('click', clickMeGoldenRod);
function clickMeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

// another way event listner

const clickaqua = document.getElementById('click-aqua');
clickaqua.addEventListener('click', function () {
    document.body.style.backgroundColor = 'aqua';
})

// shortcut way for event listner 

document.getElementById('click-gray').addEventListener('click', function () {
    document.body.style.backgroundColor = 'gray';
})
document.getElementById('head').addEventListener('mouseenter', function () {
    console.log('Mouse entering');
})
document.getElementById('head').addEventListener('mouseout', function () {
    console.log('Mouse Out');
})