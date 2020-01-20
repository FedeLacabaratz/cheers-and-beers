'use strict';

// var names = ['Jhon','Peter','Max', 'Jill','Alexandra'];
var numbers = [1,2,8,9,7,8,6,5]

function pop(value){
    var a =[];
    for(var i =0; i<value.length-1; i++){
        a[i] = value[i];
    }
    return a;
};


console.log(pop(numbers))
var poppped = numbers.pop()
console.log(poppped);