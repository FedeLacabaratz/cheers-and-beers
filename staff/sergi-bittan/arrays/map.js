"use strict"


function map(arr,expresion)
{
    var newArr = [];
    for (var i = 0; i<arr.length;i++)
    {
        newArr[newArr.length] = expresion(arr[i]);
    }
    return newArr;
}

var result = [1,3,5,6,7,5];
var expresion = function(elem) {return elem + 10};
var result = map(result,expresion);
//console.log(map(arr, function(num){ return num +10}));

