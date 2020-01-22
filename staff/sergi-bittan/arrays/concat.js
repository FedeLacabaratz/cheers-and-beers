"use strict"



var arr = [1,4,5,7,4,3,6,2,3,4,];
var arr2 = [1,5,8];

var newArr = [];
function concat(arr,arr2)
{
    
    for (var i = 0; i<arr.length; i++)
    {
        newArr[newArr.length] = arr[i];
    }
    for (var j = 0; j<arr2.length; j++)
    {
        newArr[newArr.length] = arr2[j];
    }
    return newArr;
};

//concat(arr,arr2);