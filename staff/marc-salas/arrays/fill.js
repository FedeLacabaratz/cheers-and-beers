'use strict'

function fill(array,value,index,end){
    index = index || 0;
    end = end || array.length;
    for (var i = index; i < end; i++){
        array[i] = value;
    }
    return array;
}