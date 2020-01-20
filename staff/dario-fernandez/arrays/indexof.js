'use strict'
function indexOf(array, value, initialIndex) {
    var index = -1
    for(var i = 0 + initialIndex; i < array.length; i++) {
        if(array[i] === value) {
            index = i
            break
        }
    }
    return index
}

var letters = ['a', 'b', 'c', 'd', 'e', 'b']

console.log(indexOf(letters, 'b'))