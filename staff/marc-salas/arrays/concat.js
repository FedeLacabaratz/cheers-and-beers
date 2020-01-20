'use strict';

function concat(array, value){
    var result = [];
    for (var i=0; i < arguments.length; i++){
        if (typeof arguments[i] !== 'object' ) {
            result[result.length] = arguments[i];
        }else{
        for (var a = 0; a < arguments[i].length; a++){
            result[result.length] = arguments[i][a];
        }
    }
    }
        console.log(result.length);
        return result;
}