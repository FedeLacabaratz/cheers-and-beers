'use strict'

function every(array, expresion) {
    debugger
    var bool = true
    for(var i = 0; i < array.length; i++) {
        if(!expresion(array[i])){
            bool = false
            break
        }
    }
    return bool
}

// --------TEST-------------
// var numbers = [3, 3, 2, 3, 3, 3]
// console.log(every(numbers, function(number){
//     return number === 3
// }))