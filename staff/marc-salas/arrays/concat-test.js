'use strict';

console.log("CONCAT TEST");

var a = [1,2,3];
var b = [4,5,6];
var c = [];

console.log("array's length should be 6 ")
console.assert( concat(a,b).length === 6, "array's length should be 6 " );

console.log("Should concat the array a = [1,2,3] to array b = [4,5,6] to one array [1,2,3,4,5,6] ")
concat(a,b).forEach(function (value, index){
    console.assert( value === index +1, "Value on index "+ index+ " should be " + (index + 1) +" but is " + value)
} )
