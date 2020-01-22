'use strict';

function reduce(array, expression, initialValue) {
	var accumulator = initialValue || 0;
	for (var i = 0; i < array.length; i++) {
		accumulator += expression(accumulator, array[i], i);
	}
	return accumulator;
}
