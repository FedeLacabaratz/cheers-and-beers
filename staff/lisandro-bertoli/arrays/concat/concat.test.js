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
newArray.forEach(function (element, index) {
	if (index < originalArray.length) {
		console.assert(
			element === originalArray[index],
			'should element at index ' + index + 'be ' + originalArray[index]
		);
	} else {
		console.assert(
			element === arrayToConcat[index - originalArray.length],
			'should element at index ' +
			index +
			'be ' +
			arrayToConcat[index - originalArray]
		);
	}
});


//Test 2
console.log('original array should not be modified');
originalArray.forEach(function (element, index) {
	console.assert(element === arrayCopy[index], 'original array was modified.');
});


//Test 3
console.log(
	'new array length should be equal to the length of originalArray plus the length of arrayToConcat'
);
console.assert(
	newArray.length === originalArray.length + arrayToConcat.length,
	'should array length be 6'
);


