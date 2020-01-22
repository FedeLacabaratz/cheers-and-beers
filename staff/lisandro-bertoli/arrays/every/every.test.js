
console.log('TEST every');


//Test 1
console.log('should true be returned when all elements comply with the condition');

var arr = [1, 2, 3, 4, 5];

console.assert(every(arr, function (element) {
    return typeof element === 'number'
}), 'true should be returned');


//Test 2
console.log('should false be returned when 1 element does not comply with the condition');

var arr2 = [2, 'string', 4, 4];

var ret = every(arr2, function (element) { return typeof element === 'number' });
console.assert(!ret, 'false should be returned');

//Test 3
console.log('function should iterate over all elements in the array');
var arr = [1, 2, 3, 4, 5];
every(arr, function (element, index) {
    console.assert(element === arr[index])
})
