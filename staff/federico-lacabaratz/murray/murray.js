'use strict';

function Murray() {
    var _arguments = arguments;

    var initializeWithLength = (function () {
        if (_arguments.length === 1 && typeof _arguments[0] === 'number')
            if (Number.isInteger(_arguments[0]))
                return true;
            else throw new RangeError('Invalid murray length')

        return false;
    })();

    this.length = initializeWithLength ? arguments[0] : arguments.length;

    if (!initializeWithLength)
        for (var i = 0; i < arguments.length; i++) this[i] = arguments[i];
}

Murray.prototype.push = function (value) {
    this[this.length] = value;

    return ++this.length;
};

Murray.prototype.forEach = function (expression) {
    if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');
    
    for (var i = 0; i < this.length; i++) expression(this[i], i, this);
};
Murray.prototype.pop = function (){
    var lastPosition = this[this.length -1];
    delete this[this.length - 1]; 
    this.length--;
    return lastPosition;
};

Murray.prototype.concat = function () {
    
    var newMurray = new Murray;
    
    for (var i = 0; i < this.length; i++) {
        newMurray.push(this[i]);
    }
    
    for (var i =0; i< arguments.length; i++) {
        if (arguments[i] instanceof Murray) {
            for(var j=0; j<arguments[i].length; j++) {
                newMurray.push(arguments[i][j])
            }
        } else {
            newMurray.push(arguments[i])
        }
    }
    return newMurray;
};

Murray.prototype.every = function (expression) {
    if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');
    
    var result = true;
    
    for (var i=0; i<this.length; i++) {
        
        if (!expression(this[i])) {
            result = false;
            break;
        };
     
    };
    return result;
};

Murray.prototype.filter = function(expression) {
    if (!(this instanceof this)) throw new TypeError(this + ' is not an this');
    if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');

    var filtered = new Murray;

    for (var i = 0; i < this.length; i++) {
        if (expression(this[i])) {
            filtered[filtered.length] = this[i];
        }
    }

    return filtered;
};
