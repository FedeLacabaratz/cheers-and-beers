'use strict'

function Murray() {
    this.length = arguments.length;

    if (arguments.length === 1 && typeof arguments[0] === 'number') {
        if (!(Number.isInteger(arguments[0]))) {
            throw new RangeError('Invalid murray length')
        } else {
            this[i] = undefined;
            this.length = arguments[0];
        }
    } else {
        for (var i = 0; i < arguments.length; i++) {
            this[i] = arguments[i];
        }

    }
}

Murray.prototype.forEach = function (expression) {
    if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');
    for (var i = 0; i < this.length; i++) {
        expression(this[i], i);
    }
    return undefined;
}

Murray.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++
    }
    return this.length;
}

Murray.prototype.pop = function () {
    var removed = this[this.length - 1];

    delete this[this.length - 1];
    --this.length

    return removed
}

Murray.prototype.concat = function (args) {
    var result = new Murray();

    for (var i = 0; i < this.length; i++) {
        result.push(this[i])
    }

    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] instanceof Murray || arguments[i] instanceof Array) {
            for (var j = 0; j < arguments[i].length; j++) {
                result[result.length] = arguments[i][j];
                result.length++;
            }
        } else {
            result[result.length] = arguments[i];
        }
    }
    return result;
}

Murray.prototype.map = function (expression) {
    if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function')
    var returnValue = new Murray();

    for (var i = 0; i < this.length; i++) {
        returnValue.push(expression(this[i], i));
    }
    return returnValue;
}

Murray.prototype.indexOf = function (value, fromIndex) {

    fromIndex = parseInt(fromIndex, 10) || 0;

    var startAtIndex = fromIndex < 0 ? this.length + fromIndex : fromIndex;

    for (var i = startAtIndex; i < this.length; i++) {

        if (this[i] === value) return i;
    }
    return -1
}
