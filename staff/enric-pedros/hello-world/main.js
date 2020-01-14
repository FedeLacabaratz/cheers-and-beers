document.getElementsByTagName("h1")[0].addEventListener("click",function(){
    alert("hello World");
});

document.getElementById("botonito").addEventListener("click" , function () {
  
    var opciones = [ 
       ' Me cago en la puta ?'  ,
       ' No entiendo nada!!'   ,
       ' No entiendo una merda '  ,
       ' La concha de la lora! '     
    ]   ;      
        
    var x = Math.floor(Math.random()*opciones.length)
  
    document.getElementById('botonito').innerHTML = opciones[x];
});


 

 

