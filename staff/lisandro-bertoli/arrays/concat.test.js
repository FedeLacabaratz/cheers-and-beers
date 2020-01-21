console.log('TEST concat');

var originalArray = [1, 2, 3];
var arrayCopy = [1, 2, 3];
var arrayToConcat = [4, 5, 6];
var newArray = concat(originalArray, arrayToConcat);

console.log(
	'new array should be equal to the concatenation of originalArray and ArrayToConcat'
);

newArray.forEach(function(element, index) {
	if (index < originalArray.length) {
		console.assert(
			newArray[index] === originalArray[index],
			'should element at index ' + index + 'be ' + originalArray[index]
		);
	} else {
		console.assert(
			newArray[index] === arrayToConcat[index - originalArray.length],
			'should element at index ' +
				index +
				'be ' +
				arrayToConcat[index - originalArray]
		);
	}
});

console.log('original array should not be modified');
originalArray.forEach(function(element, index) {
	console.assert(element === arrayCopy[index], 'original array was modified.');
});

console.log(
	'new array length should be equal to the length of originalArray plus the length of arrayToConcat'
);
console.assert(
	newArray.length === originalArray.length + arrayToConcat.length,
	'should array length be 6'
);
