// Inches to feet 

function inchesToFeet(inches) {
    var feet = inches / 12;
    return feet;
}
var amarIches = inchesToFeet(144);
console.log('144 inches e koto feet hoy.. :', amarIches);

var babarIches = inchesToFeet(120);
console.log('144 inches e koto feet hoy BABA.. :', babarIches);

var maIches = inchesToFeet(96);
console.log('144 inches e koto feet hoy MA.. :', maIches);

// Mile to KiloMeter 

function mileToKm(mile) {
    var km = mile * 1.61;
    return km;
}
var marathon = mileToKm(26);
console.log('Marathon Run koto KiloMeter hoy..:', marathon);