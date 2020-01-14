//Los arrays que se usarán durante el programa
const VALORES_ENTRADA = []
const VALORES_ENTRADA_PF = []
const VALORES_COMPUTAR = []
const RESULTADOS = []
//Controlan errores y si es necesario hacer raíz cuadrada
let lanzarError = false
let valoresVacios = 0
//Entrada de datos
VALORES_ENTRADA.push(prompt('Introduce el primer número'))
VALORES_ENTRADA.push(prompt('Introduce el segundo número'))
//parseFloat de los datos ingresados
for(i = 0; i < VALORES_ENTRADA.length; i++) {
   VALORES_ENTRADA_PF.push(parseFloat(VALORES_ENTRADA[i]))
}
//Clasifica los datos por tipo
for(i = 0; i < VALORES_ENTRADA.length; i++)
    if(Number.isNaN(VALORES_ENTRADA_PF[i])) {
        if(VALORES_ENTRADA[i].length == 0) {
            valoresVacios++
        }else{
            lanzarError = true
        }
    }else {
        VALORES_COMPUTAR.push(VALORES_ENTRADA_PF[i])
}

computar(VALORES_COMPUTAR[0], VALORES_COMPUTAR[1])
//Funciones usadas en el programa
function sumar(num1, num2) {
    let suma = num1 + num2
    //Este if statement evalúa si el resultado es entero o no obteniéndo su módulo de 1. Los no enteros no son divisibles entre 1, y su módulo arrojará un 'truthy value'.
    if(suma % 1) { 
        suma = parseFloat(suma.toFixed(3))
    }
    return(`${num1} + ${num2} = ${suma}`)
}

function restar(num1, num2) {
    let resta = num1 - num2
    if(resta % 1) {
        resta = parseFloat(resta.toFixed(3))
    }
    return(`  ${num1} - ${num2} = ${resta}`)
}

function multiplicar(num1, num2) {
    let multiplicacion = num1 * num2
    if(multiplicacion % 1) {
        multiplicacion = parseFloat(multiplicacion.toFixed(3))
    }
    return(`  ${num1} x ${num2} = ${multiplicacion}`)
}

function dividir(num1, num2) {
    let division = num1 / num2
    if(division % 1) {
        division = parseFloat(division.toFixed(3))
    }
    return(`  ${num1} ÷ ${num2} = ${division}`)
}

function raiz(num1) {
    let raizCuadrada = Math.sqrt(num1)
    if(raizCuadrada % 1) {
        raizCuadrada = parseFloat(raizCuadrada.toFixed(3))
    }
    return(`√${num1} = ${raizCuadrada}`)
}

function computar(num1, num2) {
    if(lanzarError) {
        alert('Type Error: introduce sólo números')
    } else if(valoresVacios == 1) {
        RESULTADOS.push(raiz(num1))
        alert(RESULTADOS)
    }else if(valoresVacios == 2){
        alert('Introduce al menos un número')
    }else {
        RESULTADOS.push(sumar(num1, num2))
        RESULTADOS.push(restar(num1, num2))
        RESULTADOS.push(multiplicar(num1, num2))
        RESULTADOS.push(dividir(num1, num2))
        alert(RESULTADOS)
    }
}