'use strict';

function reverse (array){
    var result = [];
    for (var i = 0; i < array.length; i++ ){
        result[(array.length -1) - i] = array[i];
    }
    array = result;
    return array;
}