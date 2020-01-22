"use strict"

function some(array, expression) {
  var result = false;

  for (var i = 0; i < array.length; i++) {

    var validate = expression(array[i]);
    if (validate) result = true;
  }

  return result;
}