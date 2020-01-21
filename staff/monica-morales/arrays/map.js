'use strict';

var numbers =[3,5,8,9];

function map(arr, expression){
    var newArray = [];
    for(var i = 0; i<arr.length; i++){
        newArray[newArray.length] = expression(arr[i]);
    }
    return newArray;
};

function expression(element){
    return element*2;
};

console.log(map(numbers,expression));
