var h1 = document.getElementsByTagName('h1')[0];

h1.addEventListener('click', function() {
	alert('Hello, World!');
});

var button = document.getElementsByTagName('button')[0];

var frasesArr = [
	'Que linda web, keep it up!!',
	'Es un hermoso dia',
	'A por todo!!'
];

button.addEventListener('click', function() {
	var temp = Math.floor(Math.random() * 3);
	alert(frasesArr[temp]);
});
