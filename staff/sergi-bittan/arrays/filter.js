"use strict"

//var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])


var result = [1,2,4,5,];

function filter(arr,expresion) 
{
    var newArr = [];
    for (var i = 0; i<arr.length; i++)
    {
        if (expresion(arr[i]))
        {
            newArr[newArr.length] = arr[i];
        }
    }
    return newArr;
};

var result = [1,2,4,5,];
var expresion = function(val){return val * 2};
var result = filter(result,expresion);
//console.log(result);

