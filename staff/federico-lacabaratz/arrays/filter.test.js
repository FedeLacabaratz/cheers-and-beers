'use strict';

console.log('DEMO Filter');

var a = [10, 13, 56, 34, 57, 22, 5, 72, 33, 1];

function isBiggerThan(value) {
    return value > 18;

};

console.log('It will show all numbers bigger than 18'); 
var result = filter(a, isBiggerThan);

console.log('Verifies that all numbers within the array are > than 18');
for (var i=0; i<result.length; i++) {
    console.assert(result[i] > 18, 'theres is an item in the result array that is not < 18');
};

console.log('Verifies each element within the array to be > than 18');
console.assert(result[0] === 56, "a[0] this should be 56"); 
console.assert(result[1] === 34, "a[1] this should be 34"); 
console.assert(result[2] === 57, "a[2] this should be 57"); 
console.assert(result[3] === 22, "a[3] this should be 22"); 
console.assert(result[4] === 72, "a[4] this should be 72"); 
console.assert(result[5] === 33, "a[5] this should be 33"); 
