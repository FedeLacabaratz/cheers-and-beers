'use strict';

console.log("FILTER TEST");

console.log("should return all the value that complies the condition");
var a = [1,15,19,10,5];
function isBigEnough(value) {
    return value >= 10;
}
console.assert( filter(a,isBigEnough).length === 3,"should pass 3 values not " + filter(a,isBigEnough).length);

console.log("sould compare all the values of the array");
var a = ["hola","hola","hola","homer"];
function isLongEnough(value) {
    return value.length >= 5;
}
console.assert( filter(a,isLongEnough) == 'homer',"should be homer not " +  filter(a,isLongEnough));