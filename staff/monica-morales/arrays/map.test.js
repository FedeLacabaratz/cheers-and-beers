'use strict';

console.log('TEST map');

console.log('It creates a new array, using the original, using a callback function');

var num = [1,4,2,9];
var newArray = map(num, expression);
var indexOneNum = num[0];
var indexOneNewArray = newArray[0];


console.assert(num.length === newArray.length, 'Array original has same length than newArray');
console.log('Array original is same length than newArray');

console.assert(indexOneNewArray % indexOneNum === 0, 'Index one of NewArray is even');
console.log('Elements of Array num are the double of NewArray');
