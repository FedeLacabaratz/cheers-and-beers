"use strict"

function filter(array, expression) {
  if (!(array instanceof Array)) throw new TypeError(array + " is not an Array");

  if (!(expression instanceof Function)) throw new TypeError(expression + " is not a function");

  const newArray = [];

  for (var i = 0; i < array.length; i++) {

    if (expression(array[i])) {
      newArray[newArray.length] = array[i];
    }

  }

  return newArray;
}