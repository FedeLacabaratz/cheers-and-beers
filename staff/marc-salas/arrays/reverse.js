'use strict';

function reverse (array){
    var array = [];
    for (var i = 0; i < array.length; i++ ){
        array[(array.length -1) - i] = array[i];
    }
    return array;

}