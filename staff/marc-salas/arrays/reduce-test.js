'use strict'

console.log("REDUCE TEST");

console.log("should return the correct value passing for all the values of the array");
var a = [1,2,3,4]
function add(acum,currentValue){
    return acum + currentValue;
}
console.assert(reduce(a,add) === 10, "result shuld be 10 not " + reduce(a,add) );

console.log("shoult start the acum flrom the input value");
var a = [1,2,3,4]
function add(acum,currentValue){
    return acum + currentValue;
}
console.assert(reduce(a,add,3) === 13, "result shuld be 10 not " + reduce(a,add,3) );
