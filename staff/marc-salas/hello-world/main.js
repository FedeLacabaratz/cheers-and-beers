document.getElementsByTagName('h1')[0].addEventListener('click', function(){
    alert('Hello, World!');
});

var redButton = document.getElementsByTagName("button")[0];
var cripplingDepression = [
    "los reyes son los padres",
    "el número de la lotería es: que te follen",
    "tu símbolo del zodíaco es CÁNCER, no?",
    "tu siguiente tarea: muérete",
    "ojalá te obliguen a hacer el bingo 5 veces más",
];

redButton.addEventListener('click', function () {
    var pos = Math.floor(Math.random() * 5);

    alert(cripplingDepression[pos]);
})