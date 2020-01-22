'use strict'

console.log("REVERSE TEST");

console.log('array should keep the same length');
var a = [1,2,3];
var b = reverse(a);
console.assert(a.length === 3, 'arrays length should be 3 not ' + a.length);

console.log('values should be paced inverted of the original order');
var a = [3,3,1];
var b = reverse(a);
b.forEach(function(value,index){
    console.assert(value === index + 1, "values are not reverted correctly" );
});