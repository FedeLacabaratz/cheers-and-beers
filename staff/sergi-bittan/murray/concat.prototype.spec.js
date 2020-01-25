"use strict"

function concat(array,array2)
{
    if (!(array instanceof Array)) throw new TypeError(array + " is not an array"); 
    var newArr = [];
    for (var i = 0; i<array.length; i++)
    {
        newArr[newArr.length] = array[i];
    }
    for (var j = 0; j<array2.length; j++)
    {
        newArr[newArr.length] = array2[j];
    }
    return newArr;
};