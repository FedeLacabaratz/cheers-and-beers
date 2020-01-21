'use strict';

function reduce(array, expression, currentVal) {
	var accumulator = currentVal || 0;
	for (var i = 0; i < array.length; i++) {
		accumulator = expression(accumulator, array[i]);
	}
	return accumulator;
}
