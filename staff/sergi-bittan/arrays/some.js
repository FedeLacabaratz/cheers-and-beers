"use strict"
//arr.some(callback(element[, index[, array]])[, thisArg])
//true si la función callback devuelve un valor truthy para cualquier elemento del array; en caso contrario, false.


var arr = [1,3,4,5,6,7,7];

function some(arr,expresion)
{
    var boolean = false;
    for (var i = 0; i<arr.length;i++)
    {
        if (expresion(arr[i]))
        {
            boolean = true;
            break;
        }
    }
    return boolean;
}

//console.log(some(arr,function(val){ return val > 7}));





var arr = [2,4,66,7,2,6,8,9,];

function some(arr,expresion)
{
    var boolean = false;
    for (var i = 0;i<arr.length;i++)
    {
        if (expresion(arr[i]))
        {
            boolean = true;
            break;
        }
    }
    return boolean;
}