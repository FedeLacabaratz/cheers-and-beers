"use strict"

//arr.includes(searchElement[, fromIndex])

var result = [1,4,5,7,4,3,6,2,3,4,];
var arr2 = [1,5,8];

function concat(arr,arr2)
{
    for (var i = 0; i<arr2.length; i++)
    {
        arr[arr.length] = arr2[i];
    }
    return arr;
};

//concat(arr,arr2);