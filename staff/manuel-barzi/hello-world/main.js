document.getElementsByTagName('h1')[0].addEventListener('click', function () {
    alert('Hello, World!');
});

var messages = [
    '1', '2', '3', '4', '5'
]

document.getElementsByTagName('button')[0].addEventListener('click', function () {
    var index = Math.floor(Math.random() * messages.length);

    alert(messages[index]);
})