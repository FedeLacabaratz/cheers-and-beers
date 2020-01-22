'use strict';

console.log('TEST Includes');

var numbers = [32, 45, 2, 1, 56, 78];

var included = 78;

console.log('If it returns true, this means the input number is included within the array');
var newArr = includes(numbers, included);

console.assert(newArr === 78, 'the input number doesn\'t exist within the array');