Murray.prototype.concat = function() {

  var newMurray = new Murray

  for (let i = 0; i < this.length; i++) {
    newMurray.push(this[i])
  }

  if (arguments.length > 0 && (arguments[0] instanceof Murray)) {
    for (let i = 0; i < arguments[0].length; i++) {
      newMurray.push(arguments[0][i])
    }
  } else {
    for (let i = 0; i < arguments.length; i++) {
      newMurray.push(arguments[i])
    }
  }

  return newMurray
}