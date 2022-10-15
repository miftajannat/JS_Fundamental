var inch = 156;
var feet = inch / 12;
console.log(feet);

// create function for converting many value inch to feet
function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}
var feet1 = inchToFeet(156);
console.log(feet1);
var feet2 = inchToFeet(288);
console.log(feet2);
var feet3 = inchToFeet(300);
console.log(feet3);


// declare all variable in one line
function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}
var senior = [156, 288, 300];
console.log(inchToFeet(senior[0]));


