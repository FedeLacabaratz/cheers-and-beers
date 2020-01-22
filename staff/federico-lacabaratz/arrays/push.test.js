'use strict';

console.log('------------------------ TEST push ------------------------');

console.log('should have added 4 at the end of array [1, 2, 3]');
var a = [1, 2, 3];
var length = push(a, 4);
console.assert(length === 4, 'should array length be 4');
console.assert(a[a.length - 1] === 4, 'should last value be 4');
a.forEach(function (value, index) {
    console.assert(value === index + 1, 'should value at index ' + index + ' be ' + (index + 1) + ', but got ' + value);
});

console.log('should have added 5 at the end of array [1, 2, 3, 4]');
var a = [1, 2, 3, 4];
var length = push(a, 5);
console.assert(length === 5, 'should array length be 5');
console.assert(a[a.length - 1] === 5, 'should last value be 5');
console.assert(a[0] === 1, 'should value at index 0 be 1');
console.assert(a[1] === 2, 'should value at index 1 be 2');
console.assert(a[2] === 3, 'should value at index 2 be 3');
console.assert(a[3] === 4, 'should value at index 3 be 4');