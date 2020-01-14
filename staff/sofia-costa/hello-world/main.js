document.getElementsByTagName('h1')[0].addEventListener('click', function() {
    alert('Hello World!');
})

var phrases =[
    sentence ='Hello, today is a good day',
    sentence ='this bootcamp is very easy',
    sentence ='congratulations, your are a good student'
]

var message;

document.getElementsByTagName('button')[0].addEventListener('click', function(){
    var random=Math.floor(Math.random() * (phrases.length-1));
    message=alert((phrases[random])); 
});



