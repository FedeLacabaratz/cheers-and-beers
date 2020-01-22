"use strict";

console.log("TEST every");

var arr = [1,3,4,5,6,7,7];
var expresion = function(val){ return val <= 7};
var result = every(arr,expresion);


console.assert(result === true , "should be true")