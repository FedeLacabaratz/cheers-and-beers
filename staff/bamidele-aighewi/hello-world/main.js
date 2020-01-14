document.getElementsByTagName('h1')[0].addEventListener('click', function(){
    alert('Hello world!');
})

var messages = ["Have a good day!!", "Learn code and make magic!", "Enjoy your life!", "Nice Code!"]

var body = document.getElementsByTagName("BODY")[0];
var luck = document.createElement('button')
luck.innerHTML = "Good Luck!"
luck.style.backgroundColor = "pink"
luck.style.width = "140px"
luck.style.height = "60px"
luck.style.fontSize = "22px"
luck.style.borderRadius = "10px"

function showMessage() {
    alert(messages[generateRandomNumber(messages.length)])
}

function generateRandomNumber(range) {
    var randomNumber = Math.floor(Math.random() * range)
    return randomNumber
}

luck.addEventListener("click", showMessage)
body.appendChild(luck)