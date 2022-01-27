// Class Marks Gradewise 

var fullMarks = 100;


var sadiaMarks = 55;

if (sadiaMarks < 33) {
    console.log('Saadia Fail koreche...! :(');
}
else if (sadiaMarks >= 33 && sadiaMarks <= 49) {
    console.log('Sadia D paice')
}
else if (sadiaMarks >= 50 && sadiaMarks <= 59) {
    console.log('Sadia C paice')
}
else if (sadiaMarks >= 60 && sadiaMarks <= 69) {
    console.log('Sadia B paice')
}
else if (sadiaMarks >= 70 && sadiaMarks <= 79) {
    console.log('Sadia A paice')
}
else if (sadiaMarks >= 80 && sadiaMarks <= 100) {
    console.log('Sadia A+ paice')
} else if (sadiaMarks < 0 && sadiaMarks > 100) {
    console.log(' Sadiar result Invalid..!')
}
else {
    console.log('Invalid results')
}

// Traffc Signal 

var greenLight = true;
var yellowLight = true;
var RedLight = true;

if (greenLight == false) {
    console.log('You Can Creoos the road..')
} else if (yellowLight == false) {
    console.log('You Should Stop..')
} else {
    console.log("You are not allowed to cross the road..")
}