'use strict'

function flat(array, depth = 1) {
    debugger
    var newArray = []
    for(var i = 0; i < array.length; i++) {
        if(array[i].__proto__.constructor.name === 'Array' && depth > 0) {
            var subarray = flat(array[i], depth - 1)
            for(var j = 0; j < subarray.length; j++){
                newArray[newArray.length] = subarray[j]
            }
        } else {
            newArray[newArray.length] = array[i]
        }
    }
    return newArray
}


var testArray = [1, 2, [3, [4]]]
flat(testArray, 2)





































// 'use strict'

// function flat(array, depth = 1) {
//     // debugger
//     var newArray = []
//     for(var i = 0; i < array.length; i++) {
//         if(array[i].__proto__.constructor.name === 'Array') {
//             for(var j = 0; j < array[i].length; j++) {
//                 if(array[i][j].__proto__.constructor.name === 'Array' && depth){
//                     newArray[newArray.length] = flat(array, depth - 1)
//                 } else {
//                     newArray[newArray.length] = array[i][j]
//                 }
//             } 
//         } else {
//             newArray[newArray.length] = array[i]
//         }
//     }
//     return newArray
// }

// // ------TEST--------

// var testArray = [1, 2, [3, [4, 5]], [6, 7, [8, [9, 10]]]]
// // var testArray = [1, 2, [3, 4, 5]]

// flat(testArray)
// //console.log('Should print [1, 2, 3, 4, 5] ==> ' + flat(testArray))
// // console.log('Should print [1, 2, 3, [4, 5]] ==> ' + flat(testArray, 1))
// // console.log('Should print [1, 2, 3, 4, 5] ==> ' + flat(testArray, 2))




// // var newArray = [];
// //     for(var i = 0; i < array.length; i++) {
// //         if(array[i].__proto__.constructor.name === 'Array' && depth) {
// //             newArray[newArray.length] = flat(array[i], depth - 1)
// //         } else {
// //          newArray[newArray.length] = array[i]
// //         }
// //     }
// //     return newArray