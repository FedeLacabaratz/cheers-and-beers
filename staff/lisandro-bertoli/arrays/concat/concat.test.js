console.log('TEST concat');

var originalArray = [1, 2, 3];
var arrayCopy = originalArray.map(function (element) {
	return element;
});
var arrayToConcat = [4, 5, 6];

var newArray = concat(originalArray, arrayToConcat);

console.log(
	'new array should be equal to the concatenation of originalArray and ArrayToConcat'
);

//Test 1
var originalArray = [1, 2, 3];
var arrayToConcat = [4, 5, 6];
var concatenated = concat(originalArray, arrayToConcat);

concatenated.forEach(function (element, index) {
	if (index < 3) console.assert(element === originalArray[index], 'value at index ' + index + ' should be ' + originalArray[index]);
});

//Test 2

var originalArray = [1, 2, 3];
var arrayToConcat = [4, 5, 6];
var concatenated = concat(originalArray, arrayToConcat);

concatenated.forEach(function (element, index) {
	if (index > 2) console.assert(element === arrayToConcat[index - 3], 'value at index ' + index + ' should be ' + arrayToConcat[index - 3]);
});


//Test 3
console.log('original array length should not be modified');
var originalArray = [1, 2, 3];
var arrayToConcat = [4, 5, 6];
var concatenated = concat(originalArray, arrayToConcat)

console.assert(originalArray.length === 3, 'original array length should be 3');







