'use strict'

console.log('PUSH TEST');

console.log("should add the value inside the array");
var a = [1, 2, 3, 4];
push(a, 5);
console.assert(a.length === 5, "the value was not correctly added in the array");

console.log("should add more than one valune in the array");
var a = [1, 2, 3, 4];
push(a, 5, 6);
console.assert(a.length === 6, "the value was not correctly added in the array");

console.log("sould add the values at the end of the array respecting the original order");
var a = [1, 2, 3, 4];
push(a, 5, 6);
a.forEach(function (value, index) {
    console.assert(value === index + 1, "the value in index " + index + " should be " + (index + 1) + " and not " + value)
});

console.log('Should show the correct errors')
var _error;
try {
    var a = {};
    fill(1, 3);

} catch (error) {
    _error = error;
} finally {
    console.assert(_error instanceof TypeError, 'should error be of type TypeError');
    console.assert(_error.message === '1 is not an Array', 'wrong message');
}