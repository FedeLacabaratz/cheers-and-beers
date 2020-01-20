'use strict';

function filter (array, condition){
    var result = [];
    for (var i =0; i < array.length; i++){
        debugger
        if (condition(array[i])){
            result[result.length] = array[i];
        }

    }
    return result;
}