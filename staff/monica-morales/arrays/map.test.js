'use strict';

console.log('TEST map');

console.log('It creates a new array, using the original, using a callback function');

var arr = [1,4,2,9];
var newArray = map(arr, expression);
var indexOneNum = arr[0];
var indexOneNewArray = newArray[0];

console.assert(arr.length === newArray.length, 'Array original has same length than newArray');
console.log('Array original is same length than newArray');

console.assert(indexOneNewArray % indexOneNum === 0, 'Index one of NewArray is even');
console.log('Elements of Array num are the double of NewArray');



console.log('should fail on non-array as first argument');
var arr = 'monica';
var _error;
try {
    map(arr, 1);
}catch(error){
    _error = error; 
}
    console.assert(_error instanceof TypeError, 'should error be of type TypeError');
    console.assert(_error.message === 'arr is not Array', 'should fail with message "arr is not a Array"');




var a = [1,2,3,4];
map(a);
console.log('should fail on there is an expression');
var _error;
try {
    map(a,expression);
}catch(error){
    _error = error; 
}
    console.assert(_error instanceof TypeError, 'should error be of type TypeError');
    console.assert(_error.message === 'is not expression', 'should fail with message "not exist an expression"');
