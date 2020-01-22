'use strict'

console.log('SPLICE TEST');

console.log("should cut the correct number of values");
var a = [1,2,3,4,5,6];
splice(a,1,3);
console.assert(a.length === 3, "array's length should be 3, not " + a.length);

console.log('the result shoud have the all the cuted numbers in the correct order');
var a = [1,2,3,4,5,6]
var b = splice(a,1,3);
b.forEach(function(value, index){
    console.assert( value === index + 2, 
    "the value in index " + index +" should be " + (index + 2) +" and not " + value)});

console.log('the added value shoul be placed in the correc index of the array');
var a = [1,2,3,4,5,6]
splice(a,1,3,99);
console.assert(a[1]===99, "the value in index 1 shoud be 99 no " + a[1] );


