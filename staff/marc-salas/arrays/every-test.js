'use strict';

console.log("EVERY TEST");

console.log("should compare all the array's elements and return true if all of them are bigger than 10");
var a = [19,15,16,33,11];
function isBigEnough(value) {
    return value > 10;
}
console.assert( every(a,isBigEnough) === true, "should return true and not false" );

console.log("should return false cause the type of one argument is not a Number");
var a = [2, 15, "homer" ];
function isNumber(value) {
    return typeof value === 'number';
}
console.assert(every(a,isNumber) === false, "should returne false because there is an string in the array");

