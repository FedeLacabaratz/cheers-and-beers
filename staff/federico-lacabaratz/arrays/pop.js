'use strict';

function pop(array) {
    
    var result = [];

    for (var i=0; i<array.length-1; i++) {

        result[i] = array[i];
     
    };
    return result;
};