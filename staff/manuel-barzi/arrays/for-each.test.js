'use strict';

console.log('TEST forEach');

console.log('should array [1, 2, 3] be modified adding 10 to each value');
var a = [1, 2, 3];
forEach(a, function(value, index) { a[index] = value + 10 });
a.forEach(function(value, index) {
    console.assert(value === index + 1 + 10, 'should value at index ' + index + ' be ' + (index + 1 + 10));
})

console.log('should each value of array [1, 2, 3] be added 10 and stored in results array');
var a = [1, 2, 3];
var results = [];
forEach(a, function(value, index) { results[index] = value + 10 });
results.forEach(function(result, index) {
    console.assert(result === a[index] + 10, 'should value at index ' + index + ' be ' + (a[index] + 10));
});