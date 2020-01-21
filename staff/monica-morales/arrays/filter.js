'use strict'


function filter(array, expression){
    var array2 = [];
    for(var i =0; i<array.length; i++){
        if(expression(array[i])){
            array2[array2.length] = array[i];
        };
    };
    return array2;
};