const first = { a: 1 }
const second = { a: 1 }
const third = first;
if (first === third) {
    // console.log("They are Equal");
} else {
    // console.log('They Are not Equal');
}
if (JSON.stringify(first) === JSON.stringify(second)) {
    console.log('They are Equal');
} else {
    console.log("They are NOT Equal");
}

const first2 = { a: 1, b: 2, c: 3 }
const second2 = { b: '2', a: 1 }

function compareObject(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false
        }
    }
    return true
}
const compare = compareObject(first2, second2)
console.log((compare));