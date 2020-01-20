'use strict';

console.log('DEMO includes');

var names = ['Jhon','Peter','Max', 'Jill','Alexandra'];
console.log('it',names);
console.log('should array detect if the value is included', names.includes('Jill'));

var names = ['Jhon','Peter','Max', 'Jill','Alexandra'];
console.log('it',names);
console.log('should array detect if the value is included', names.includes('monica'));

var numbers = [1,6,8,2,54,6];
console.log('it',names);
console.log("should array detect if the value isn't included", numbers.includes(62));