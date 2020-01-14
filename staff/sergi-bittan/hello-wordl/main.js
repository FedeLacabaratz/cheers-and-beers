var numero;
var respuestas = ['cuerpoescombro', 'zampagatos', 'saltacolchas', 'linchaliebres', 'rompetabiques', 'pastacabras']



document.getElementsByTagName("h1")[0].addEventListener("click", function(){
    alert("Hello, World!");
})

document.getElementsByTagName("button")[0]. addEventListener("click", function(){
    numero = parseInt(Math.random() * 6)
    alert(respuestas[numero])
    
})