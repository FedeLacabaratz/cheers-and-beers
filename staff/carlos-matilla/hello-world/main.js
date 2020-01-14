document.getElementsByTagName('h1')[0].addEventListener('click', function() {
    alert('Hello')
})

document.getElementById("lucky").addEventListener("click", randomPhrase);



    function randomPhrase()
    {
        var phase = ["La regaste!","Vas genial","Tu día será espectacular", "Mejor toma un cafe"];
        var info = "";
        var indiceRandom = Math.floor(Math.random() * 4);
        info = phase[indiceRandom];
        
        alert(info);
    }
