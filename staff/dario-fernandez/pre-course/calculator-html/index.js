var boton1 = document.getElementById('n1')
var boton2 = document.getElementById('n2')
var boton3 = document.getElementById('n3')
var boton4 = document.getElementById('n4')
var boton5 = document.getElementById('n5')
var boton6 = document.getElementById('n6')
var boton7 = document.getElementById('n7')
var boton8 = document.getElementById('n8')
var boton9 = document.getElementById('n9')
var boton0 = document.getElementById('n0')
var botonComa = document.getElementById('n,')
var botonAC = document.getElementById('AC')
var botonSuma = document.getElementById('suma')
var botonResta = document.getElementById('resta')
var botonMult = document.getElementById('mult')
var botonDiv = document.getElementById('div')
var botonIgual = document.getElementById('igual')
var botonBorrar = document.getElementById('flecha')
var display = document.getElementById('pantalla')
var pantalla = ''
var operacion = ''
var operando1 = ''
var operando2 = ''
var recienOperado = false

botonBorrar.addEventListener('click', borrar)

function borrar() {
    if(recienOperado) {
        ac()
    }else {
        pantalla = pantalla.slice(0, (pantalla.length - 1))
        mostrarPantalla()
    }
}

botonSuma.addEventListener('click', prepararSuma)

function prepararSuma() {
    if(recienOperado) {
        recienOperado = false
    }
    operando1 = parseFloat(pantalla)
    operacion = botonSuma.innerHTML
    pantalla = '0'
    mostrarPantalla()
}

botonResta.addEventListener('click', prepararResta)

function prepararResta() {
    if(recienOperado) {
        recienOperado = false
    }
    operando1 = parseFloat(pantalla)
    operacion = botonResta.innerHTML
    pantalla = '0'
    mostrarPantalla()
}

botonMult.addEventListener('click', prepararMult)

function prepararMult() {
    if(recienOperado) {
        recienOperado = false
    }
    operando1 = parseFloat(pantalla)
    operacion = botonMult.innerHTML
    pantalla = '0'
    mostrarPantalla()
}

botonDiv.addEventListener('click', prepararDiv)

function prepararDiv() {
    if(recienOperado) {
        recienOperado = false
    }
    operando1 = parseFloat(pantalla)
    operacion = botonDiv.innerHTML
    pantalla = '0'
    mostrarPantalla()
}


function operar() {
    operando2 = parseFloat(pantalla)
    var resultado
    switch(operacion) {
        case '+' :
            resultado = parseFloat((operando1 + operando2).toFixed(3))
            break;
        case '-' :
            resultado = parseFloat((operando1 - operando2).toFixed(3))
            break;
        case 'x' :
            resultado = parseFloat((operando1 * operando2).toFixed(3))
            break;
        case '÷' :
            resultado = parseFloat((operando1 / operando2).toFixed(3))
            break;
    }
    pantalla = resultado.toString()
    mostrarPantalla()
    recienOperado = true
    operacion = ''
    operando1 = pantalla
    operando2 = ''
}

botonIgual.addEventListener('click', operar)

function mostrarPantalla() {
    if(pantalla.length <= 10) {
        display.innerHTML = pantalla
    }else {
        display.innerHTML = 'Err'
    }
}

botonAC.addEventListener('click', ac)

function ac() {
    pantalla = '0'
    mostrarPantalla()
    hayComa = false
    operacion = ''
}

boton1.addEventListener('click', mostrar1)

function mostrar1() {
    if(recienOperado) {
        pantalla = ''
        recienOperado = false
        operacion = ''
    }
    if(pantalla === '0'){
        pantalla = ''
    }
    pantalla += boton1.innerHTML
    mostrarPantalla()

}
boton2.addEventListener('click', mostrar2)

function mostrar2() {
    if(recienOperado) {
        pantalla = ''
        recienOperado = false
        operacion = ''
    }
    if(pantalla === '0'){
        pantalla = ''
    }
    pantalla += boton2.innerHTML
    mostrarPantalla()
}
boton3.addEventListener('click', mostrar3)

function mostrar3() {
    if(recienOperado) {
        pantalla = ''
        recienOperado = false
        operacion = ''
    }
    if(pantalla === '0'){
        pantalla = ''
    }
    pantalla += boton3.innerHTML
    mostrarPantalla()
}
boton4.addEventListener('click', mostrar4)

function mostrar4() {
    if(recienOperado) {
        pantalla = ''
        recienOperado = false
        operacion = ''
    }
    if(pantalla === '0'){
        pantalla = ''
    }
    pantalla += boton4.innerHTML
    mostrarPantalla()
}
boton5.addEventListener('click', mostrar5)

function mostrar5() {
    if(recienOperado) {
        pantalla = ''
        recienOperado = false
        operacion = ''
    }
    if(pantalla === '0'){
        pantalla = ''
    }
    pantalla += boton5.innerHTML
    mostrarPantalla()
}
boton6.addEventListener('click', mostrar6)

function mostrar6() {
    if(recienOperado) {
        pantalla = ''
        recienOperado = false
        operacion = ''
    }
    if(pantalla === '0'){
        pantalla = ''
    }
    pantalla += boton6.innerHTML
    mostrarPantalla()
}
boton7.addEventListener('click', mostrar7)

function mostrar7() {
    if(recienOperado) {
        pantalla = ''
        recienOperado = false
        operacion = ''
    }
    if(pantalla === '0'){
        pantalla = ''
    }
    pantalla += boton7.innerHTML
    mostrarPantalla()
}
boton8.addEventListener('click', mostrar8)

function mostrar8() {
    if(recienOperado) {
        pantalla = ''
        recienOperado = false
        operacion = ''
    }
    if(pantalla === '0'){
        pantalla = ''
    }
    pantalla += boton8.innerHTML
    mostrarPantalla()
}
boton9.addEventListener('click', mostrar9)

function mostrar9() {
    if(recienOperado) {
        pantalla = ''
        recienOperado = false
        operacion = ''
    }
    if(pantalla === '0'){
        pantalla = ''
    }
    pantalla += boton9.innerHTML
    mostrarPantalla()
}
boton0.addEventListener('click', mostrar0)

function mostrar0() {
    if(recienOperado) {
        pantalla = ''
        recienOperado = false
        operacion = ''
    }
    if(pantalla === '0'){
        pantalla = '0'
    }else {
        pantalla += boton0.innerHTML
        mostrarPantalla()
    }
}
botonComa.addEventListener('click', mostrarComa)
var hayComa = false

function mostrarComa() {
    if(recienOperado) {
        pantalla = ''
        recienOperado = false
        operacion = ''
    }
    if(!hayComa){
        hayComa = true
        if(pantalla === ''){
            pantalla = '0' + botonComa.innerHTML
        }else {
            pantalla += '.'
        }
        mostrarPantalla()
    }
}