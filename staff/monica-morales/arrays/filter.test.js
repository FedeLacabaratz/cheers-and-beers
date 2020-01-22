'use strict';
console.log('TEST filter');


function isBiggerThan(value){return value > 4};
var array = [5,7,3,6,1];
function filter(array, expression){
    var array2 = [];
    for(var i =0; i<array.length; i++){
        if(expression(array[i])){
            array2[array2.length] = array[i];
        };
    };
    return array2;
};
result =(filter(array, isBiggerThan));

console.assert( array.length != result.length,'the original array has same length that newArray');
console.log('Array original lenght is bigger than new array');

console.assert(typeof result != 'boolean', "the result isn't a boolean");
console.log("Result isn't a boolean");