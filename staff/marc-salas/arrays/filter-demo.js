'use strict';

console.log("filer demo");
var a = [1,15,16,33,9,"Marc","palabrota",true];

console.log("it", a);

function isBigEnough(value) {
    return value >= 10;
}
console.log("should show 15, 16, 33 of the 'a' array ", filter(a, isBigEnough));

function isLongEnough(value) {
    return value.length > 4;
}
console.log("should show palabrota of the 'a' array ", filter(a, isLongEnough));