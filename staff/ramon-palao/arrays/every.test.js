//Using our test-tool

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

    console.log('%c' + "TEST " + description, 'color: blue;');

    tests();
}

// TESTING

describe("every", function(){
    //Happy Path
    it("should return true because all the elements from the array are bigger than 2", function(){
        var ourArray = [10, 8, 25, 30, 90, 12, 11];

        every(ourArray, function(value){return value > 2});
        ourArray.forEach(function(value, index){
            assert(value > 2, "should be bigger than 20 but I got value " + value + " in index " + index);
        })
    })
    it ("should return a false element because not all the elements are bigger than 30", function(){
        var ourArray = [10, 8, 25, 30, 90, 12, 11];

        every(ourArray, function(value){ return value > 30})
        ourArray.forEach(function(value, index){
            assert((value[index] > 30) === false, "should return false but I got value " + value + " in index " + index + " and it is bigger than 30")
        })
    })

    //Error Handing
    it("should fail because the first parameter is not an array"), function(){

        (function(){
            //var ourArray = [10, 8, 25, 30, 90, 12, 11];
            var _error;

            try {
                every(function(){});
            } catch (error) {
                _error = error;
            }

            assert(_error instanceof TypeError, "should error be a type of TypeError");
            assert(_error.message === "function(){} is not an Array at every", "should fail with message 'function(){} is not an Array at every'");
        })()
    }
})