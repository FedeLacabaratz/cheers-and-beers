// StateMachine es un patrón de código para pasar de un estado de trabajo a otro.
class StateMachine
{
    constructor()
    {
        this.currentState = null;
        this.nextState = null;

        var _this = this; // Capturar esta variable para poderla usar dentro de la funcion anonima

        setInterval(function () 
        {
            if(_this.nextState != null) // Tenemos que hacer una transicion a un nuevo estado
            {
                if (_this.currentState != null)
                {
                    if(_this.currentState.OnExit != undefined)
                    {
                        _this.currentState.OnExit();
                    }
                }
                _this.currentState = _this.nextState;
                _this.nextState = null;

                if(_this.currentState.OnEnter != undefined)
                {
                    _this.currentState.OnEnter();    
                }
                
            }

        }, 16) // run this every 60 times per second

    }

    GoToState(newState)
    {
        if(this.nextState != null)
        {
            console.error("La state machine esta intentando hacer varias transiciones en el mismo frame");
        }

        this.nextState = newState;        
    }
}



//creamos una clase State para instanciar a nuestro objeto en cada estado del flujo de trabajo.
class State
{
    OnEnter()
    {

    }
    OnExit()
    {

    }
}


//----------------------- creamos clase Carton(plantilla);
class Carton 
{
    constructor() 
    {
        this.turnosNumero = 0;
        this.linea = false;
        this.numeros = [];
        for (var i = 0; i < 15; i++) // itero para conseguir 15 
        {
            var numeroValido = false;
            while (!numeroValido) 
            {
                var randomNumber = Math.floor(Math.random() * 99) + 1;
                var numCarton = randomNumber;
                if (!this.numeros.includes(numCarton)) 
                {
                    numeroValido = true;
                    this.numeros.push(numCarton);
                }
            }
        }

    }
    getStructureCarton()   //metodo para darle la forma al cartón
    {
        var texto = "";
        for (var i = 0; i < this.numeros.length; i++) 
        {
            texto += (this.numeros[i] + " ")
            if (i === 4 || i === 9) 
            {
                texto += "\n";
            }
        }
        alert(texto);
    }
    hasLine() 
    {
        if (!this.linea) //ponemos la condicion para solo cantar linea una vez!
        {
            if (this.numeros[0] === "x" && this.numeros[1] === "x" && this.numeros[2] === "x" && this.numeros[3] === "x" && this.numeros[4] === "x") 
            {
                this.linea = true;
                alert("LINEA!");
            }
            if (this.numeros[5] === "x" && this.numeros[6] === "x" && this.numeros[7] === "x" && this.numeros[8] === "x" && this.numeros[9] === "x") 
            {
                this.linea = true;
                alert("LINEA!");
            }
            if (this.numeros[10] === "x" && this.numeros[11] === "x" && this.numeros[12] === "x" && this.numeros[13] === "x" && this.numeros[14] === "x") 
            {
                this.linea = true;
                alert("LINEA!");
            }
        }
    }
    hasBingo() 
    { var bingo = true;
        for (var i = 0; i < this.numeros.length; i++) 
        {
            if (this.numeros[i] != "x") 
            {
                bingo = false;
                break;
            }
        }
        return bingo;
    }
}


//----------------------creamos la clase Bombo (plantilla).

class Bombo 
{
    constructor() 
    {
        this.numeroB = [];
        for (var i = 1; i <= 99; i++) 
        {
            this.numeroB.push(i);
        }
    }
    sacarBola() 
    {
        var randomNumberIndex = Math.floor(Math.random() * this.numeroB.length);
        var numeroBola = this.numeroB[randomNumberIndex];
        this.numeroB.splice(randomNumberIndex, 1);
        return numeroBola;
    }
}





// variables globales
var pedirNombre = null;
var bombo = null;
var carton = null;
var newStateMachine = null;





function start() {
    newStateMachine = new StateMachine();
    newStateMachine.GoToState(new state_start()); //var state = new state_start();  
}

//------------instanciamos nuestros estados con las instrucciones para cada uno de ellos.
class state_start extends State {
    OnEnter() {
        newStateMachine.GoToState(new state_pedirNombre());

    }
    // OnExit()  aqui nuestro código no realiza ninguna acción
    // {

    // }
}

class state_pedirNombre extends State {
    OnEnter() {
        pedirNombre = prompt("Por favor, introduzca su nombre");
        newStateMachine.GoToState(new state_saludar())
    }
    // OnExit()    aqui nuestro código no realiza ninguna acción
    // {

    // }
}

class state_saludar extends State {
    OnEnter() {
        alert("Bienvenido " + pedirNombre + ".");
        newStateMachine.GoToState(new state_mostrarCarton());
    }
    // OnExit()    aqui nuestro código no realiza ninguna acción
    // {

    // }}
}

class state_mostrarCarton extends State 
{
    OnEnter() 
    {
        carton = new Carton(); //instancia de Carton. (nos aseguramos de que carton y bombo solo seran nuevos al iniciar un nuevo juego)
        bombo = new Bombo(); //instanciamos objeto bombo.
        carton.getStructureCarton();
        newStateMachine.GoToState(new state_comienzoPartida());
    }
    // OnExit()    aqui nuestro código no realiza ninguna acción
    // {

    // }
}

class state_comienzoPartida extends State 
{
    OnEnter() 
    {
        var numeroBola = bombo.sacarBola();
        alert(numeroBola);
        for (var i = 0; i < carton.numeros.length; i++) 
        {
            if (numeroBola === carton.numeros[i]) 
            {
                carton.numeros[i] = "x";
                alert("Lo tienes!! " + numeroBola);
                break;
            }
        }
        carton.turnosNumero += 1;
        carton.hasLine();
        var bingo = carton.hasBingo();
        if (bingo)
        {
            alert("BINGO !!!");
            carton.getStructureCarton();
            newStateMachine.GoToState(new state_finJuego());
            return;
        }
        carton.getStructureCarton();
        
        var confirm = prompt("Desea continuar jugando?");
        if (confirm === "si" || confirm === "") 
        {
            newStateMachine.GoToState(new state_comienzoPartida());
        } 
        else 
        {
            newStateMachine.GoToState(new state_finJuego());
        }

    }
    // OnExit()     aqui nuestro código no realiza ninguna acción
    // {

    // }
}

class state_finJuego extends State
{
    OnEnter()
    {
        
        alert("El numero de turnos jugados ha sido: " + carton.turnosNumero);
        var confirm = prompt("Desea efectuar una nueva partida?")
        if(confirm === "si")
        {
            newStateMachine.GoToState(new state_start());
        }
        else
        {
            newStateMachine.GoToState(new state_gameOver());
        }
    }
}

class state_gameOver extends State
{
    OnEnter()
    {
        alert("GAME OVER!!");
    }
}


start();