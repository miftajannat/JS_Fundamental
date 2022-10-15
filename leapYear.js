var r = 2016;
console.log(r / 4);

var y = 3996;
var r = y % 4;
console.log(r == 0);

const year = 3996;
let remainder = year % 4;
if (remainder == 0) {
    console.log("Your year is a leap year");
}
else {
    console.log("Your year is not a leap year");
}

function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder == 0) {
        return true;
    }
    else {
        return false;
    }
}





