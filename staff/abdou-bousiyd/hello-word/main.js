var arr= ['Que suerte!', 'What a beatiful day!', 'All you need is love', 'Love is all around', 'may the force be with you', 'Be well!', 'Stay safe', 'love you!', 'You are so good!', 'Smile!']

document.getElementsByClassName('button1')[0].addEventListener('click', function() {

    for (i in arr) {
        var index= Math.floor(Math.random() * (arr.length));
        return alert (arr[index]);
        
    }
    
})