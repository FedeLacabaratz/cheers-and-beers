"use strict"

function filter(array, expression) {
  if (!(expression instanceof Function)) throw new TypeError(expression + " is not a function");

  const newArray = [];

  for (var i = 0; i < array.length; i++) {

    if (expression(array[i])) {
      newArray[newArray.length] = array[i];
    }

  }

  return newArray;
}