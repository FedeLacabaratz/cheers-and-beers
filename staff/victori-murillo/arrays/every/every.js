"use strict";

function every(array, expression) {
  var count = 0;

  for (var i = 0; i < array.length; i++) {
    if (expression(array[i], i)) {
      count += 1;
    }
  }

  if (count === array.length) {
    return true;
  }
  
  return false;
}