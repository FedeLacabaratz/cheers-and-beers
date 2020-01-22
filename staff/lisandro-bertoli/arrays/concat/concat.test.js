describe('concat', function () {
	it('should individual arrays length not be modified', function () {
		var originalArray = [1, 2, 3];
		var arrayToAdd = [4, 5, 6];

		concat(originalArray, arrayToAdd);

		assert(originalArray.length === 3, 'original array length should be 3');
		assert(arrayToAdd.length === 3, 'original array length should be 3');

	});

	it('should all elements in the array be in the same order as the passed arrays', function () {
		var originalArray = [1, 2, 3];
		var arrayToAdd = [4, 5, 6];
		var concatenated = concat(originalArray, arrayToAdd);

		for (var i = 0; i < originalArray.length; i++) {
			assert(concatenated[i] === originalArray[i],
				'value at index ' + i + ' should be ' + originalArray[i]
			);
		}

		for (var i = 0; i < arrayToAdd.length; i++) {
			assert(concatenated[i + 3] === arrayToAdd[i],
				'value at index ' + i + ' should be ' + arrayToAdd[i]
			);
		}
	});

});









