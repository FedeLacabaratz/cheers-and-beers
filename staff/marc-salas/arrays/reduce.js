'use strict'


function reduce(array,func, initial){
    var result = initial || 0;
    for (var i = 0; i < array.length; i++){
        result = func(result, array[i]);
    }
    return result;
}