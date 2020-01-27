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
    
    var result = new Murray;
    
    for (var i = 0; i < this.length; i++) {
        result.push(this[i]);
    }
    
    for (var i =0; i< arguments.length; i++) {
        if (arguments[i] instanceof Murray) {
            for(var j=0; j<arguments[i].length; j++) {
                result.push(arguments[i][j])
            }
        } else {
            result.push(arguments[i])
        }
    }
    return result;
};

Murray.prototype.every = function (expression) {
    if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');
    
    var result = true;
    
    for (var i=0; i<this.length; i++) {   
        if (!expression(this[i])) {
            result = false;
            break;
        }
    
    }
    return result;
};

Murray.prototype.filter = function(expression) {
    if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');

    var result = new Murray;

    for (var i = 0; i < this.length; i++) {
        if (expression(this[i])) {
            result.push(this[i]);
        }
    
    }
    return result;
};

Murray.prototype.reverse = function(){
	
	var result = new Murray;
	
	for (var i = this.length-1; i>=0; i--) {
        result.push(this[i]);
    };
    
    for (var i = 0; i< result.length; i++) {
        this[i] = result[i];
    };
    return this;
};

Murray.prototype.map = function(expression){
    if (typeof expression !== "function") throw new TypeError(expression + " is not a function");
    
    var result = new Murray();
    
    for (var i = 0; i<this.length;i++) {
        result.push(expression(this[i]));
    }
    return result;
};

Murray.prototype.reduce = function(expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    if (this.length === 0) throw TypeError('Impossible to reduce an empty murray without an initial value');
    
    var accumulator = 0;
    
    for (var i = 0; i < this.length; i++) {
        accumulator = expression(accumulator, this[i]);
    }
	return accumulator;
};

Murray.prototype.includes = function(value) {
    if (this.length === 0) throw TypeError('Cannot read property \'includes\' of undefined');
    
    for (var i=0; i<this.length; i++) {
        
        if (this[i] === value) {
            return true
        };
        
    };
    return false;
};

Murray.prototype.indexOf = function (value) {
    if (this.length === 0) throw TypeError('Cannot read property \'indexOf\' of undefined');
    
    for (var i=0; i<this.length; i++) {
        
        if(this[i] === value) {
            return i;
        };
    };
    return -1;
};

Murray.prototype.from = function(value) {
    if (this.length === 0) throw TypeError('Cannot convert undefined or null to murray');
    
    var result = new Murray;
    
    for (var i=0; i<value.length; i++) {
        result[i] = value[i];
    };
    return result;
};

Murray.prototype.find = function (expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    
    var message = undefined;    
    
    for (var i=0; i<this.length; i++) {
        
        if (expression(this[i])) {
            return this[i];
        };          
    };
    return message;
};

Murray.prototype.some = function (expression) {
    if(!(expression instanceof Function)) throw new TypeError(expression + ' is not a function');
    
    var boolean = false;
    
    for (var i = 0;i<this.length;i++) {
        if (expression(this[i])) {
            boolean = true;
            break;
        }
    }
    return boolean;
};

Murray.prototype.findIndex = function(expression) {
    if(!(expression instanceof Function)) throw new TypeError(expression + ' is not a function');

    for (var i=0; i<this.length; i++) {
    
        if (expression(this[i])) {
            return i;
        };
    };
    return -1;
};

// Murray.prototype.splice = function(start, deleteCount) {

// }