document.getElementsByTagName('h1')[0].addEventListener('click', function () {
  alert('Hello, World!');
})

function alertRandomMessage() {
  var messages = [
    "Your limitation—it’s only your imagination",
    "Sometimes later becomes never. Do it now.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for."
  ]

  var randomNum = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
  alert(messages[randomNum]);
}

document.getElementById('action-btn').addEventListener('click', alertRandomMessage)