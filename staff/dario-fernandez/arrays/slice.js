'use strict'

function slice(array, startIndex, stopIndex = array.length) {
    var newArray = []
    for(var i = startIndex; i < stopIndex; i++) {
        newArray[newArray.length] = array[i]
    }
    return newArray
}