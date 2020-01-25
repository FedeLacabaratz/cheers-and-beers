'use strict'

function Murray() {
    this.length = 0
    if(arguments.length === 1 && typeof arguments[0] === 'number' && Number.isInteger(arguments[0])) {
        for(var i = 0; i < arguments[0]; i++) {
            this[i] = undefined
            this.length++
        }
    } else if(arguments.length === 1 && typeof arguments[0] === 'number' && !(Number.isInteger(arguments[0]))) {
        throw new RangeError('Invalid murray length')
    } else {
        for(var i = 0; i < arguments.length; i++) {
            this[i] = arguments[i]
            this.length++
        }
    }
}

Murray.prototype.push = function() {
    for(var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i]
        this.length++
    }
    return this.length
}

Murray.prototype.pop = function() {
    var result = this[this.length - 1]
    delete this[this.length]
    this.length--
    return result

}

Murray.prototype.concat = function() {
    var newMurray = new Murray
    for(var i = 0; i < this.length; i++) {
        newMurray.push(this[i])
    }
    for(var i = 0; i < arguments.length; i++) {
        if(arguments[i] instanceof Murray) {
            for(var j = 0; j < arguments[i].length; j++) {
                newMurray.push(arguments[i][j])
            }
        } else {
            newMurray.push(arguments[i])
        }
    }
    return newMurray
}