'use strict';
var arr = [1,2,[3,4,[5,6,[7,8,[9,10]]]], {}];

function flat(array, deep , acumulator) {
    deep  === undefined? deep =1 : null;
    var result = acumulator || [];
    for (var i =0; i < array.length; i++){
        if (array[i] instanceof Array && deep > 0){
            deep --
            flat(array[i], deep, result)
        } else {
            result[result.length] = array[i];
        }
    }
    return result;
}