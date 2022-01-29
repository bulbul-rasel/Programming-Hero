
function isLeapYear(year) {
    if (year % 4 == 0 && (year != 1800) && (year != 1900) && (year != 2100) && (year != 2200) && (year != 230000) && (year != 2500)) {
        return true;
    }
    return false;
}

const amarYear = 2500;
var isYearLeapYear = isLeapYear(amarYear);
console.log("Amar Year ki Leap Year..? :", isYearLeapYear);