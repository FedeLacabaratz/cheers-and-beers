'use strict'
/*
console.log("FILTER TEST");

var ourArray = [20, 12, 6, 8];
var result = filter(ourArray, function(value){return value > 10});
*/

function assert(assertion, message) {
    if (!assertion) throw new Error('Assertion failed: ' + message);
}

function it(should, test) {
    try {
        test();

        console.log('%c ♥️ ' + should + ' √', 'color: green;');
    } catch (error) {
        console.error('🤡 ' + should + ' †\n', error);
    }
}

function describe(description, tests) {
    'use strict';

    console.log('%c' + description, 'color: blue;');

    tests();
}



describe ("filter", function(){
    it("should the resultant array have a length of 2", function(){
        var ourArray = [20, 12, 6, 8];
        var result = filter(ourArray, function(value){return value > 10});

        assert(result.length === 2, "should length of array be 2, but I got " + result.length);
    });

    it("should filter all the elements bigger than 10 and store them into result array", function(){
        var ourArray = [20, 12, 6, 8];
        var result = filter(ourArray, function(value){return value > 10});

        assert(result[0] > 10, "should the first element of result be 20, but I got " + result[0]);
        assert(result[1] > 10, "should the second element of result array be 12, but I got " + result[1]);
    });
});


/*
console.log("should the resultant array have length of 2");
console.assert(result.length === 2, "should the length be equal to 2")

console.log("should filter all the elements bigger than 10 and store them into a new array");
console.assert(result[0] === 20, "sould the first element be 20");
console.assert(result[1] === 12, "should the second element be 12");

console.log("should fail as the method does not have a function as a parameter")

var _error =;

try {

    filter([1, 2, 3], true);

} catch (error) {
    _error = error
}

console.assert(_error instanceof TypeError, 'should error be of type TypeError');
console.assert(_error.message === 'true is not a function', 'should fail with message "true is not a function"');
*/



