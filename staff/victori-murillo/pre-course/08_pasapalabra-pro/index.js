var questions = [
  [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "a", answer: "arbol", status: 0, question: "CON LA A. Ser vivo vegetal que produce frutas y puede llegar a ser muy alto"},
    { letter: "a", answer: "azul", status: 0, question: "CON LA A. Color mas oscuro que el celeste."}
  ],
  [
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "b", answer: "barco", status: 0, question: "CON LA B. Embarcación que se utiliza para navegar por el oceano"},
    { letter: "b", answer: "barrera", status: 0, question: "CON LA B. Sinonimo a obstaculo"}
  ],
  [
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "c", answer: "casa", status: 0, question: "CON LA C. Sinonimo de vivienda"},
    { letter: "c", answer: "camion", status: 0, question: "CON LA C. Vehiculo grande para transportar grandes artefacos"}
  ],
  { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
  { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
  { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
  { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
  { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
  { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
  { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
  { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
  { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
  { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
  { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
  { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
  { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
  { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
  { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
  { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
  { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
  { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
  { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
  { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
  { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
  { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
  { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
];

// startPasapalabra
// askQuestion
// showQuestion
// saveUser() 
// showRanking()
// User()

var ranking = []
var index = 0

function User(name) {
  this.name = name
  this.successfulLetters = 0
  this.failedLetters = 0
  this.pasapalabraCounter = 0

  this.addOne = function(attribute) {
    this[attribute] += 1
  }
}

function startPasapalabra(turns) {
  var name = prompt("Cual es tu nombre")
  var user = new User(name)
  setQuestionIndex()

  var numberTurns = turns ? turns : questions.length

  do {
    for (var i = 0; i < numberTurns; i++) {

      if (questions[i][index].status === 0) {
        askQuestion(user, questions[i], i)
      }
    }
    // slice(0, 2) only the first and second questions to test the game
  } while ( getStatus(questions.slice(0, 2)).some(s => s === 0) )

  showResult(user)
  saveUser(user)
  showRanking()

  if (confirm('Nueva partida?')) {
    statusZero()
    // Parameter to set the turns, if is empty will be the --> questions.length
    startPasapalabra(2)
  }
}

function setQuestionIndex() {
  if(ranking.length > 0) {
    index += 1
  }

  if(index === 3) {
    index = 0
  }
}

function askQuestion(user, question, i) {
  var currentQuestion = question[index].question
  var currentAnswer = question[index].answer
  
  var response = prompt(currentQuestion)

  if(response) response = response.toLowerCase()

  if (response === currentAnswer) {
    questions[i][index].status = 1
    user.addOne("successfulLetters")

  } else if (response === "pasapalabra") {
    user.addOne("pasapalabraCounter")

  } else if (response === "end") {
    showResult(user)
    throw new Error('This is not an error. This is just to abort javascript');
  } 
  else {
    questions[i][index].status = 1
    user.addOne("failedLetters")
  }

}

function getStatus(arrayQuestions) {
  var statusQuestions = []

  for (let i = 0; i < arrayQuestions.length; i++) {
    statusQuestions.push(arrayQuestions[i][index].status)
  }
  
  return statusQuestions
}

function showResult(user) {
  alert(
    "Resultados de " + user.name + ":\n" +
    "- Preguntas acertadas: " + user.successfulLetters + "\n" +
    "- Preguntas fallidas: " + user.failedLetters + "\n" +
    "- Uso de pasapalabra: " + user.pasapalabraCounter
    )
}

function saveUser(user) {
  ranking.push(user)
}

function showRanking() {
  var orderedRanking = ranking.sort((a, b) => (a.successfulLetters > b.successfulLetters) ? -1 : 1)
  alert(orderedRanking.map(user => "\n" + user.name + " acertó: " + user.successfulLetters))
}

function statusZero() {
  for (let q = 0; q < questions.length; q++) {
    if (typeof questions[q] === "object") {
      questions[q].status = 0
    }

    for (let s = 0; s < questions[q].length; s++) {
      if (questions[q].length > 1) {
        questions[q][s].status = 0
      }
    }
  }
}

// Parameter to set the turns, if is empty will be the --> questions.length
startPasapalabra(2)