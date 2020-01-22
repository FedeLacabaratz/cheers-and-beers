'use strict';

console.log('TEST Concat');

var a = ['a', 'b', 'c'];
var b = ['d', 'e', 'f'];

var result = concat(a, b);

console.log('This should merge arrays a and b');
console.assert(result.length === (a.length + b.length), 'it should return a new array =', concat(a, b));


console.log('This should merge both numbers and letters into a single array')
var a = [1, 3, 4, 5];
var b = ['z', 'x', 'y', 'q'];
var result = concat(a, b);

console.log('This should check each element of the array');
console.assert(result[0] === 1, 'The value in a[0] should equal 1');
console.assert(result[1] === 3, 'The value in a[1] should equal 3');
console.assert(result[2] === 4, 'The value in a[2] should equal 4');
console.assert(result[3] === 5, 'The value in a[3] should equal 5');
console.assert(result[4] === 'z', 'The value in b[0] should equal z');
console.assert(result[5] === 'x', 'The value in b[1] should equal x');
console.assert(result[6] === 'y', 'The value in b[2] should equal y');
console.assert(result[7] === 'q', 'The value in b[3] should equal q');