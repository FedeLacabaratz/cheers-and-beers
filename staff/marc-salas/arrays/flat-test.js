'use strict';

console.log("FLAT TEST");

var a = [1,2,[3,4,[5,6,[7,8,[9,10]]]]];

console.log('should reduce the deep of the array  one level');
console.assert(flat(a).length === 5, "The array's deep it's not the correct");

console.log('should reduce the deep of the array as much levels as the user indicates');
console.assert((flat(a,2).length === 7 && flat(a,3).length === 9 ), "The array's deep it's not the correct")

console.log('should reduce the deep of the array  all the levels');
console.assert(flat(a,Infinity).length === 10, "The array's deep it's not the correct");




