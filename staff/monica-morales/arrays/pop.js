'use strict';

function pop(array){
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an Array');
    
    var NewArray = new Array;
    for(var i =0; i<array.length-1; i++){
        NewArray[i] = array[i];
    }
    return NewArray;
};

