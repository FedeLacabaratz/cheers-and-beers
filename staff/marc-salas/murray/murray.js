 'use strict';

// function Murray() {
//     var _arguments = arguments;

//     var initializeWithLength = (function () {
//         if (_arguments.length === 1 && typeof _arguments[0] === 'number')
//             if (Number.isInteger(_arguments[0]))
//                 return true;
//             else throw new RangeError('Invalid murray length')

//         return false;
//     })();

//     this.length = initializeWithLength ? arguments[0] : arguments.length;

//     if (!initializeWithLength)
//         for (var i = 0; i < arguments.length; i++) this[i] = arguments[i];
// }

// Murray.prototype.push = function (value) {
//     this[this.length] = value;

//     return ++this.length;
// };

// Murray.prototype.forEach = function (expression) {
//     if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');

//     for (var i = 0; i < this.length; i++) expression(this[i], i, this);
// };

// Murray.prototype.pop = function() {
     
//     this = 

//     this[this.length] = this.length - 1;


// }

function Murray(){
    if (arguments.length === 1 && typeof arguments[0] === 'number'  ){
        if (Number.isInteger(arguments[0])){
            for ( var j = 0; j < arguments[0]; j++){
                this[j] = undefined;
            }
            this.length = j;
        } else{
            throw new RangeError('Invalid murray length');
        }
    } else{       
    for(var i = 0; i < arguments.length; i++){
        this[i] = arguments[i];
    }
    this.length = arguments.length;
    }
}

Murray.prototype.push = function (value) {
    this[this.length] = value;

    return ++this.length;
};

Murray.prototype.forEach = function (expression) {
    if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');

    for (var i = 0; i < this.length; i++) expression(this[i], i, this);
};

Murray.prototype.pop = function() {
    var result = this[this.length-1];
    delete this[this.length -1];
    this.length--;
    return result;
}

Murray.prototype.concat = function() {
    var result = new Murray
    for (var k = 0; k < this.length; k++){
        result.push(this[k]);
    }
    for (var i = 0; i < arguments.length; i++ ){
        if (arguments[i] instanceof Murray || arguments[i] instanceof Array){
            for (var j = 0; j< arguments[i].length; j++ ){
                result.push(arguments[i][j]);
            }
        }else {
            result.push(arguments[i])
        }
    }
    return result;
}

Murray.prototype.fill = function(){
    console.log('miau miau');
}
