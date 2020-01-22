'use strict'

function fill(array,value,index = 0,end = array.length){
    
    if (!(array instanceof Array)) { throw new TypeError(array +' is not an Array')};

 //   index = index || 0;
 //   end = end || array.length;
    for (var i = index; i < end; i++){
        array[i] = value;
    }
    return array;
}