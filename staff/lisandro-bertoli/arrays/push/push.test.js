console.log('TEST push');

var arr = [1, 2, 3, 4];
var value = 1;
var value2 = 2;
var value3 = 'string';



//Test 1
console.log('new array length should be returned');
var arr2 = arr.map(function (element) { return element })
console.assert(push(arr2, value) === arr2.length, 'new array length should be returned');

//Test 2
console.log('Value should be added at the end of the array');
var arr2 = arr.map(function (element) { return element })
push(arr2, value)
console.assert(arr2[arr2.length - 1] === value);

//Test 3
console.log('should be able add multiple values');
var arr2 = arr.map(function (element) { return element });
var valuesAdded = 3
push(arr2, value, value2, value3);
console.assert(arr2.length - arr.length === valuesAdded, 'not all elements are being added')






