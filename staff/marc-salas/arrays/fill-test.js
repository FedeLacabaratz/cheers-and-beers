'use strict'

console.log('FILL TEST');

console.log('array will conserve the same length as before');
var a = [1,2,3,4,5,6,7,8,9];
    console.assert(fill(a,0).length === 9, "array's length should be 9, not " + fill(a,0).length);

console.log('should remplace all the values of the array with the new value');
var a = [1,2,3,4,5,6,7,8,9];
fill(a,0).forEach(function(value){
    console.assert(value === 0, "all values should be 0");
});

console.log('all the values on a determinate marge should be remplaced');
var a = [1,2,3,4,5,6,7,8,9];
var b = [1,2,0,0,5,6,7,8,9];
console.assert(
    (fill(a,0,2,4)[2] ===0 && fill(a,0,2,4)[3] ===0  ), "array should be " + b + " not " + fill(a,0,2,4));