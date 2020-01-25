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
    var lastPosition = this[this.length-1];
    delete this[this.length-1]
    this.length = this.length-1;
    return lastPosition;
};

Murray.prototype.concat = function (){
    var result = new Murray ();
    for(var i=0; i<this.length; i++){
        result[i]=this[i];
        ++result.length;
    }
    for(var i =0; i<arguments.length; i++){
        for(var j = 0 ; j < arguments[i].length;j++){
            result[result.length]=arguments[i][j];
            ++result.length;  
        }        
    }
    return result;   
};

Murray.prototype.map = function (expression){
    if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');
    if(expression===undefined) throw new TypeError ('It is necessary an expression');
    var newMurray = new Murray();
    for(var i = 0; i<this.length; i++){
        newMurray[i] = expression(this[i]);
        ++newMurray.length;
    }
    return newMurray;
};

Murray.prototype.includes = function (value){
    for(var i = 0; i<this.length; i++){
        if(value === this[i]){
            return true;
        }
    }
    return false;
};

Murray.prototype.from = function (value){
    var newMurray = new Murray();
    for(var i=0; i<value.length; i++){
        newMurray[i] = value[i];
        ++newMurray.length
    }
    return newMurray;
};

Murray.prototype.shift = function (){
    var newMurray = new Murray();
    for(var i = 0; i < this.length; i++){
        var firstElement = this[0];
        if(i>0){
            newMurray.push(this[i]);
        }
    }
    return firstElement;
}

var a = new Murray(1,2,3,4)
var b = a.shift();
console.log(b);



