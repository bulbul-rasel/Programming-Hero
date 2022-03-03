console.log('Connected...!');

const maComing = () => {
    alert('Ma is comming, Open the Book')
}

const askPicnic = () => {
    const response = confirm('Are, You interested to going to Picnic?')
    if (response == true) {
        alert('Tahole taka bKash kore de..')
    } else {
        alert('DGM...!Dure giye mor..')
    }

    console.log(response);
}
const askName = () => {
    const name = prompt('Give your name')
    if (name) {
        console.log(name);
    }
}