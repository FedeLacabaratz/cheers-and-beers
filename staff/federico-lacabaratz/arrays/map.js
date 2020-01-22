'use strict';

function map(arr, condition) {

    var arr2= [];

    for (var i=0; i<arr.length; i++) { 
        arr2[arr2.length] = condition(arr[i])
    }
    return arr2;
}