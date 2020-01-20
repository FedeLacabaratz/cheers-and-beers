'use strict';

function concat(array, values) {
	var result = array;
	for (var i = 1; i < arguments.length; i++) {
		if (typeof arguments[i] === 'object') {
			for (var j = 0; j < arguments[i].length; j++) {
				result[result.length] = arguments[i][j];
			}
		} else {
			result[result.length] = arguments[i];
		}
	}
	return result;
}
