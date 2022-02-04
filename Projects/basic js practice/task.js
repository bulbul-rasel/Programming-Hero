// Problem 1: Ana To Vori

function anaToVori(ana) {
    //for string validation
    if (typeof ana != "number") {
        return 'Please Input Valid Number';
    }
    //for negative validation
    if (ana < 0) {
        return 'Please Give positive Number';
    }
    //ana to vori formula 
    var vori = ana / 16;

    return vori;
}
console.log(anaToVori(40));


// Problem 2: Panda cost total price

function pandaCost(singara, somucha, jilapi) {

    //for string validation
    if ((typeof singara != "number") || (typeof somucha != "number") || (typeof jilapi != "number")) {
        return 'Please Input Valid Number';
    }
    //for negative validation
    if ((singara < 0) || (somucha < 0) || (jilapi < 0)) {
        return 'Please Give positive Number';
    }

    //declare unit Price
    var singaraPrice = 7;
    var somuchaPrice = 10;
    var jilapiPrice = 15;

    //calculate Single item Price
    var totalSingaraPrice = singara * singaraPrice;
    var totalSomuchaPrice = somucha * somuchaPrice;
    var totalJilapiPrice = jilapi * jilapiPrice;

    //calculate total Price
    var totalPrice = totalSingaraPrice + totalSomuchaPrice + totalJilapiPrice;

    return totalPrice;
}
console.log(pandaCost(1, 2, 1));

// Problem 3: Picnic Budget for multiple condition

function picnicBudget(person) {

    //for string validation
    if (typeof person != "number") {
        return 'Please Input Valid Number';
    }
    //for negative validation
    if (person < 0) {
        return 'Please Give positive Number';
    }

    let taka;

    //for first 100 person
    if (person <= 100) {
        taka = person * 5000; //for first 100 taka
    }
    //for second 100 person
    else if (person > 100 && person <= 200) {
        var firstHundred = 100 * 5000; //for first 100 taka
        var secondHundred = (person - 100) * 4000; //for second 100 taka
        taka = firstHundred + secondHundred; //total for second Hundred person taka
    } else {
        //for after 200 person
        var firstHundred = 100 * 5000; //for first 100 taka
        var secondHundred = 100 * 4000; //for second 100 taka
        var overTwoHundred = (person - 200) * 3000; //fot rest of person taka
        taka = firstHundred + secondHundred + overTwoHundred; //total for rest of person taka
    }
    return taka;
}
console.log(picnicBudget(250));

// Practice 4: Find first odd string

let friendName = ['abul', 'Bulbul', 'Jobbar', 'Roni', 'Foyaz', 'Abdullah', 'Rasel']; //Array input

function oddFriend(name) {

    var keep = '';
    var oddName = '';
    for (var i = 0; i < name.length; i++) {
        //count array index value length
        keep = name[i].length;

        if (keep % 2 != 0 && typeof name[i] == 'string') {
            //Store odd length name
            oddName = name[i];
            return oddName;
        }
        //for string validation
        else if (keep % 2 != 0 && typeof name[i] != 'string') {
            return 'Invalid array Input';
        }

    }
    return oddName;
}
console.log(oddFriend(friendName));