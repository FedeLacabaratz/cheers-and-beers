let nRight=0;
let nWrong=0;
let playerName="";
let letter=-1;
let collectionLetters = document.getElementsByTagName("b");
let ranking = [];
let currentPlayer = {};
let gameQuestions =[];
let time;
let questions = [
    [{ letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "a", answer: "animal", status: 0, question: "CON LA A. Dicho de un ser orgánico que vive, siente y se mueve por propio impulso."},
    { letter: "a", answer: "amarillo", status: 0, question: "CON LA A. Dicho de un color: Semejante al del oro o al de la yema de huevo, y que ocupa el tercer lugar en el espectro luminoso."}],
    [{ letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "b", answer: "beber", status: 0, question: "CON LA B. Ingerir un líquido."},
    { letter: "b", answer: "barco", status: 0, question: "CON LA B. Embarcación de estructura cóncava y, generalmente, de grandes dimensiones."}],
    [{ letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "c", answer: "cincel", status: 0, question: "CON LA C.  Herramienta de 20 a 30 cm de largo, con boca acerada y recta de doble bisel, que sirve para labrar a golpe de martillo piedras y metales."},
    { letter: "c", answer: "cerebro", status: 0, question: "CON LA C. Uno de los centros nerviosos constitutivos del encéfalo, existente en todos los vertebrados y situado en la parte anterior y superior de la cavidad craneal."}],
    [{ letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida."},
    { letter: "d", answer: "deambular", status: 0, question: "CON LA D. Andar, caminar sin dirección determinada."},
    { letter: "d", answer: "doble", status: 0, question: "CON LA D. Dos veces mayor o que contiene una cantidad dos veces exactamente."}],
    [{ letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "e", answer: "eterno", status: 0, question: "CON LA E. Que no tiene principio ni fin."},
    { letter: "e", answer: "epidemia", status: 0, question: "CON LA E. Enfermedad que se propaga durante algún tiempo por un país, acometiendo simultáneamente a gran número de personas."}],
    [{ letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "f", answer: "fuego", status: 0, question: "CON LA F. Fenómeno caracterizado por la emisión de calor y de luz, generalmente con llama."},
    { letter: "f", answer: "fragancia", status: 0, question: "CON LA F.  Olor suave y delicioso."}],
    [{ letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "g", answer: "guacamole", status: 0, question: "CON LA G. Salsa espesa que se prepara con aguacate molido o picado, al que se agrega cebolla, tomate y chile verde."},
    { letter: "g", answer: "gracil", status: 0, question: "CON LA G. Sutil, delgado o menudo."}],
    [{ letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "h", answer: "hiato", status: 0, question: "CON LA H. Secuencia de dos vocales que se pronuncian en sílabas distintas."},
    { letter: "h", answer: "heterogeneo", status: 0, question: "CON LA H. Compuesto de partes de diversa naturaleza."}],
    [{ letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano."},
    { letter: "i", answer: "ilegal", status: 0, question: "CON LA I. Contrario a la ley."},
    { letter: "i", answer: "ileso", status: 0, question: "CON LA I. Que no ha recibido lesión o daño."}],
    [{ letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "j", answer: "jolgorio", status: 0, question: "CON LA J. Regocijo, fiesta, diversión bulliciosa."},
    { letter: "j", answer: "jubon", status: 0, question: "CON LA J. Vestidura que cubría desde los hombros hasta la cintura, ceñida y ajustada al cuerpo."}],
    [{ letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "k", answer: "karate", status: 0, question: "CON LA K. Modalidad de lucha japonesa, basada en golpes secos realizados con el borde de la mano, los codos o los pies, y que es fundamentalmente un arte de defensa."},
    { letter: "k", answer: "kefir", status: 0, question: "CON LA K. Leche fermentada artificialmente y que contiene ácido láctico, alcohol y ácido carbónico."}],
    [{ letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo."},
    { letter: "l", answer: "loteria", status: 0, question: "CON LA L. Rifa o sorteo que se hace con objetos, dinero y otras cosas, con autorización pública."},
    { letter: "l", answer: "leal", status: 0, question: "CON LA L. Que guarda a alguien o algo la debida fidelidad."}],
    [{ letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas."},
    { letter: "m", answer: "mecanografia", status: 0, question: "CON LA M. Técnica de escribir a máquina."},
    { letter: "m", answer: "mudo", status: 0, question: "CON LA M. Privado de la facultad de hablar."}],
    [{ letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia."},
    { letter: "n", answer: "nimiedad", status: 0, question: "CON LA N. Pequeñez, insignificancia."},
    { letter: "n", answer: "nirvana", status: 0, question: "CON LA N. En algunas religiones de la India, estado resultante de la liberación de los deseos, de la consciencia individual y de la reencarnación, que se alcanza mediante la meditación y la iluminación."}],
    [{ letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "ñ", answer: "acompañante", status: 0, question: "CONTIENE LA Ñ. Que acompaña."},
    { letter: "ñ", answer: "caño", status: 0, question: "CONTIENE LA Ñ. Pieza de tubería."}],
    [{ letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien."},
    { letter: "o", answer: "oasis", status: 0, question: "CON LA O. Sitio con vegetación y a veces con manantiales, que se encuentra aislado en los desiertos arenosos de África y Asia."},
    { letter: "o", answer: "olfato", status: 0, question: "CON LA O.  Sentido corporal con el que se perciben aromas y sustancias dispersas, como el humo."}],
    [{ letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "p", answer: "pacense", status: 0, question: "CON LA P. Natural de Badajoz, ciudad o provincia de España."},
    { letter: "p", answer: "pitagorico", status: 0, question: "CON LA P.  Perteneciente o relativo a Pitágoras, filósofo y matemático del siglo VI a. C., o al pitagorismo."}],
    [{ letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche."},
    { letter: "q", answer: "quiebro", status: 0, question: "CON LA Q.  Ademán que se hace con el cuerpo, como doblándolo por la cintura."},
    { letter: "q", answer: "quieto", status: 0, question: "CON LA Q. Que no tiene o no hace movimiento."}],
    [{ letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { letter: "r", answer: "recoveco", status: 0, question: "CON LA R. Sitio escondido, rincón."},
    { letter: "r", answer: "restar", status: 0, question: "CON LA R.  Sacar el residuo de algo, separando una parte del todo."}],
    [{ letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "s", answer: "susto", status: 0, question: "CON LA S. Impresión repentina causada por miedo, espanto o pavor."},
    { letter: "s", answer: "sirena", status: 0, question: "CON LA S.  Ninfa marina con busto de mujer y cuerpo de ave según la tradición grecolatina, y con cuerpo de pez en otras tradiciones, que extraviaba a los navegantes atrayéndolos con la dulzura de su canto."}],
    [{ letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "t", answer: "toalla", status: 0, question: "CON LA T.  Pieza de felpa, algodón u otro material, por lo general rectangular, para secarse el cuerpo."},
    { letter: "t", answer: "tuareg", status: 0, question: "CON LA T. Dicho de una persona: De un pueblo bereber nómada del Sahara."}],
    [{ letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "u", answer: "unanime", status: 0, question: "CON LA U. Dicho de dos o más personas: Que tienen un mismo parecer, dictamen, voluntad o sentimiento."},
    { letter: "u", answer: "utensilio", status: 0, question: "CON LA U. Objeto fabricado que se destina a un uso manual y doméstico."}],
    [{ letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "v", answer: "volar", status: 0, question: "CON LA V. Ir o moverse por el aire, sosteniéndose con las alas."},
    { letter: "v", answer: "vendimia", status: 0, question: "CON LA V. Recolección y cosecha de la uva."}],
    [{ letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { letter: "w", answer: "waterpolo", status: 0, question: "CON LA W. Juego practicado en una piscina entre dos equipos de siete jugadores cada uno, que consiste en introducir el balón con la mano en la portería contraria mientras se nada."},
    { letter: "w", answer: "watt", status: 0, question: "CON LA W. Vatio."}],
    [{ letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "x", answer: "antioxidante", status: 0, question: "CONTIENE LA X. Que evita la oxidación."},
    { letter: "x", answer: "examen", status: 0, question: "CONTIENE LA X. Prueba que se hace de la idoneidad de una persona para el ejercicio y profesión de una facultad, oficio o ministerio, o para comprobar o demostrar el aprovechamiento en los estudios."}],
    [{ letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
    { letter: "y", answer: "yacimiento", status: 0, question: "CON LA Y. Sitio donde se halla naturalmente una roca, un mineral o un fósil."},
    { letter: "y", answer: "yugo", status: 0, question: "CON LA Y. Instrumento de madera al cual, formando yunta, se uncen por el cuello las mulas, o por la cabeza o el cuello, los bueyes, y en el que va sujeta la lanza o pértigo del carro, el timón del arado, etc."}],
    [{ letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
    { letter: "z", answer: "zepelin", status: 0, question: "CON LA Z. Globo dirigible."},
    { letter: "z", answer: "zascandil", status: 0, question: "CON LA Z. Persona de poca formalidad, inquieta y enredadora."}]
];
function startGame(){
    document.getElementById("barraRespuesta").classList.remove("hide");
    document.getElementById("okAnswer").classList.remove("hide");
    document.getElementById("numberRight").innerHTML = "" ;
    document.getElementById("numberWrong").innerHTML = "";
    document.getElementById("numberUnanswered").innerHTML = "";
    document.getElementById("numberPoints").innerHTML = "";
    document.getElementById("pasapalabra").classList.remove("hide");
    document.getElementById("stop").classList.remove("hide");
    document.getElementById("playGame").classList.add("hide");
    document.getElementById("scoreTable").classList.remove("poorGame", "regularGame", "goodGame", "perfectGame");
    letter= -1;
    countDown();
    createGameQuestions();
    updateQuestion();
}
function createGameQuestions(){
    gameQuestions =[];
    for (i=0; i<questions.length; i++){
        for (j=0; j<questions[i].length; j++){
            questions[i][j].status = 0;
        }
    }
    for (i=0; i<questions.length; i++){
        gameQuestions.push(questions[i][Math.round(Math.random()*2)]);
    }
}
function checkAnswer(event, currentAnswer){
    event.preventDefault();
    switch(currentAnswer.toLowerCase()){
        case (gameQuestions[letter].answer).toLowerCase(): //Si la respuesta a la pregunta es correcta
            gameQuestions[letter].status = 1;
            nRight += 1;
            collectionLetters[letter].classList.remove("yellowBackground");
            collectionLetters[letter].classList.add("rightBackground");
             break;
        case "pasapalabra":
            break;
        default:
            gameQuestions[letter].status = -1;
            nWrong += 1;
            collectionLetters[letter].classList.remove("yellowBackground");
            collectionLetters[letter].classList.add("wrongBackground");
    }
    collectionLetters[letter].classList.remove("currentQuestion");
    document.getElementById("barraRespuesta").value="";
    updateQuestion();
}
function updateQuestion(){
    switch(letter){
        case 26:
            letter=0;
            break;
        default:
            letter+=1;
    }
    if (nRight + nWrong == 27){
        stopGame();
    }
    else if (gameQuestions[letter].status == 0){
        document.getElementById("def").innerHTML = gameQuestions[letter].question;
        collectionLetters[letter].classList.add("currentQuestion");
    }
    else{
        updateQuestion();
    }
}
function cleanColors(){
    collectionLetters = document.getElementsByTagName("b");
    for (i=0; i<27; i++){
        if (gameQuestions[i].status == 1){
            collectionLetters[i].classList.remove("rightBackground");
            collectionLetters[i].classList.add("yellowBackground");
        }
        else if(gameQuestions[i].status == -1){
            collectionLetters[i].classList.remove("wrongBackground");
            collectionLetters[i].classList.add("yellowBackground");
        }
        gameQuestions[i].status=0;
    }
    collectionLetters[letter].classList.remove("currentQuestion");
    //nRight = 0;
    //nWrong = 0;
}
function stopGame(){
    let unansweredQuestions = 27-(nWrong + nRight);
    let finalScore = nRight*10 - nWrong*5;
    if (nRight==27){
        document.getElementById("scoreTable").classList.add("perfectGame");
    }
    else if (nRight>20){
        document.getElementById("scoreTable").classList.add("goodGame");
    }
    else if(nRight >15){
        document.getElementById("scoreTable").classList.add("regularGame");
    }
    else{
        document.getElementById("scoreTable").classList.add("poorGame");
    }
    currentPlayer={Jugador: playerName, Puntos: finalScore};
    makeRanking(sortRanking(ranking, currentPlayer));
    document.getElementById("def").innerHTML = "";
    document.getElementById("numberRight").innerHTML = `Número de aciertos: ${nRight}` ;
    document.getElementById("numberWrong").innerHTML = `Número de fallos: ${nWrong}`;
    document.getElementById("numberUnanswered").innerHTML = `Preguntas sin contestar: ${unansweredQuestions}`;
    document.getElementById("numberPoints").innerHTML = `Puntuación final: ${finalScore}`;
    document.getElementById("barraRespuesta").classList.add("hide");
    document.getElementById("okAnswer").classList.add("hide");
    document.getElementById("pasapalabra").classList.add("hide");
    document.getElementById("stop").classList.add("hide");
    document.getElementById("playGame").innerHTML = "VOLVER A JUGAR";
    document.getElementById( "playGame" ).setAttribute( "onClick", "newGame(event)" );
    document.getElementById("playGame").classList.remove("hide");
    document.getElementById("ranking").classList.remove("hide");
    document.getElementById("scoreTable").classList.remove("hide");
    unansweredQuestions = 0;
    finalScore = 0;
    nRight = 0;
    nWrong = 0;
    clearInterval(time);
}
function playerGame(event, player){
    event.preventDefault();
    playerName=player;
    document.getElementById("nameBar").classList.add("hide");
    document.getElementById("nameBar").value="";
    document.getElementById("okName").classList.add("hide");
    document.getElementById("playGame").classList.remove("hide");
    document.getElementById("playGame").innerHTML = "&#x25b6 JUGAR";
    document.getElementById( "playGame" ).setAttribute( "onClick", "startGame()" );
}
function newGame(event){
    event.preventDefault();
    cleanColors();
    document.getElementById("barraRespuesta").classList.add("hide");
    document.getElementById("okAnswer").classList.add("hide");
    document.getElementById("nameBar").classList.remove("hide");
    document.getElementById("okName").classList.remove("hide");
    document.getElementById("playGame").classList.add("hide");
    document.getElementById("ranking").classList.add("hide");
    document.getElementById("scoreTable").classList.add("hide");
    document.getElementById("rank").classList.add("hide");
}
function sortRanking(rank, player){
    if (rank.length==0){
        rank.push(player);
        return rank;
    }
    for (i=0; i<rank.length; i++){
        if (player.Jugador == rank[i].Jugador){
            if (player.Puntos > rank[i].Puntos){
                rank.splice(i,1);
            }
            else{
                return rank;
            }
        }
    }
    for (i=0; i<rank.length; i++){
        if (player.Puntos > rank[i].Puntos){
            rank.splice(i,0,player);
            return rank;
        }
    }
    rank.push(player);
    return rank;
}
function makeRanking(rank){
    let list = document.getElementsByTagName("li");
    if (rank.length<5){
        for (i=0; i<rank.length; i++){
            list[i].innerHTML = rank[i].Jugador+ " : "+ rank[i].Puntos + " puntos"
        }
    }
    if (rank.length>=5){
        for (i=0; i<5; i++){
            list[i].innerHTML = rank[i].Jugador+ " :"+ rank[i].Puntos + " puntos"
        }
    }
}
function showRanking(){
    document.getElementById("rank").classList.remove("hide");
}
function countDown(){
    let timeLeft= 120;
    time = setInterval(function(){
        timeLeft--;
        document.getElementById("timer").innerHTML = timeLeft;
        if (timeLeft <= 0){
            finalTime();
        }
    }, 1000);
}
function finalTime(){
    alert("Se ha acabado el tiempo!");
    stopGame();
}