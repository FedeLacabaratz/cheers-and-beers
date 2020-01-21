'use strict';
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function splice(array, index, count, value) {
    var result = []
    getComputedStyle
    for (var i = 1; i <= count; i++) {
        result[result.length] = array[index + (i - 1)];
    }
    if (value) {
        array[index] = value;
        count = count - 1;
        for (var b = index + 1; b < array.length; b++) {
            array[b] = array[b + count];
    } 
    }else{
        for (var b = index; b < array.length; b++) {
            array[b] = array[b + count];
        }
    }
    array.length = array.length - (count);
    console.log(array);
    return result;
}