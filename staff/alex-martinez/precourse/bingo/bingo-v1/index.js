//acumuladores
var countBingo = false;
var tiradas = 0;
var aciertos = 0;
var linea1 = 0;
var linea2 = 0;
var linea3 = 0;
var cantadoLinea = false;


//bombo
var Bombo = new Array();

const llenarBombo = ()=>{
    //llenarmos del 1 al 99
    for(var i=1; i<100; i++){
        Bombo.push(i);
    }
    return Bombo;
}

//funcion para sacar uno de los numeros de dentro del bombo
//aleatoriamente
const numBombo = ()=>{
    if(Bombo.length >0){
        //numero aleatorio entre 1 y 99
        var nAleatiorio = Math.floor(Math.random()*99)+1;
    }
    //variable que almacena el numero aleatorio de la posición del array
    var numArray = Bombo[nAleatiorio];
    //se elimina del array del bombo el numero aleatorio obtenido
    Bombo.splice(nAleatiorio,1);

    return numArray;
}
var bola;
const sacarBola = ()=>{
    //variable que almacena el numero retornado por la funcion
    bola = numBombo();
    //si el numero es indefinido volvemos a tirar()
    if(bola === undefined){
        sacarBola();
    }else{
        console.log(`¡El ${bola}!`);
    }
    return bola;
}

var carton = new Array();
//función para generar el carton con numero aleatorios
const crearCarton = () =>{
    var numerosCarton = []
    for(i=0; numerosCarton.length<15;i++){
        var numero = Math.floor(Math.random() * 99) + 1;
        if(numerosCarton.indexOf(numero) === -1)
        numerosCarton.push(numero);
    }
    for(i=0;i<15;i++){
        carton.splice(i,1,numerosCarton[i]);
    }
    return carton;
}

//función para mostrar el carton
const mostrarCarton = ()=>{
    console.log(`${carton[0]},${carton[1]},${carton[2]},${carton[3]},${carton[4]},${carton[5]},${carton[6]},${carton[7]},${carton[8]},${carton[9]},${carton[10]},${carton[11]},${carton[12]},${carton[13]},${carton[14]}`);
}

var nombre;
const usuario = ()=>{
    nombre = prompt('Idica tu nombre');
    if(nombre === null || nombre === ''){
        alert('Debes introducir un nombre');
        usuario();
    }else{
        console.log(`¡Suerte ${nombre}!`);
    }
}

const continuar = ()=>{
    var pregunta = confirm(`¿Deseas continuar ${nombre}?`);
    if(pregunta){
        return true;
    }else{
        return false;
    }
}

const jugada = () =>{
    sacarBola();
}

//comprobar si tenemos el numero extraido
//comprobar lineas
//comprobar bingo
const comprobarBola = (n) =>{
    for(var i=0; i<carton.length; i++){
        if(carton[i] === n){
            console.log('¡Lo tienes!');
            aciertos++;
            //carton[i] = 'X';
        
            var pos = carton.indexOf(n);
                        
            if(pos < 5){
                linea1++;
        
            }else if(pos > 5 && pos < 10){
                linea2++;
        
            }else{
                linea3++;
            }
            carton[i] = 'X';
            
        }
            
    }
    //cantar linea
    if(cantadoLinea === false){
        if(linea1 === 5 || linea2 === 5 || linea3 === 5){
            console.log('¡LINEA!');
            cantadoLinea = true;
        }
    } 
    
    //cantar bingo
    if(aciertos === 15){
        countBingo = true;
        console.log('¡BINGO!');
        console.log(`Cantidad de tiradas: ${tiradas}`);

        volverTirar();
    }      
}

function volverTirar(){
    var pregunta = confirm(`¿Quieres volver a jugar ${nombre}?`);
    if(pregunta){
        countBingo = false;
        bingo();
    }else{
        return;
    }
}
/*
const volverTirar = () =>{
    var pregunta = confirm(`¿Quieres volver a jugar ${nombre}?`);
    if(pregunta){
        countBingo = false;
        bingo();
    }else{
        return;
    }
}
*/

const bingo = () =>{
    usuario();
    llenarBombo();
    crearCarton();
    console.log('Este es tu cartón:');
    mostrarCarton();
    
    while(countBingo === false){
        if(continuar()){
            sacarBola();
            comprobarBola(bola);
            mostrarCarton();
            tiradas++;
        }else{
            console.log(`Gracias por jugar ${nombre}`);
            console.log(`Cantidad de tiradas: ${tiradas}`);
            //volverTirar();
            
        }
    }
}

bingo();
