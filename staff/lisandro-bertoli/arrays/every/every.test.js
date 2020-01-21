
console.log('TEST every');

var arr = [1, 2, 3, 4, 5];
var arr2 = [2, 'string', 4, 4];
var nested = [[2, 100, 3], ['string', 'another']];

//Test 1
console.log('should true be returned when all elements are of the same type as the first');

console.assert(every(arr, function (element, index) {
    return typeof element === typeof arr[0]
}), 'true should be returned');


//Test 2
console.log('should false be returned when 1 element is not of the same type');

var ret = every(arr2, function (element) { return typeof element === 'number' });
console.assert(!ret, 'false should be returned');

//Test 3
console.log('should allways return a boolean, without consideration of what the callback function does');

var ret = every(nested, function (element) {
    return 'Test string';
}, 'boolean( false ) should be returned')