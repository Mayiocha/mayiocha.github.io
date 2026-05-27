const questions = [
    {
        unit: "Unidad 1 - Análisis semántico",
        question: "¿Cuál es la función principal del análisis semántico?",
        answers: [
            "Cambiar los colores de la interfaz",
            "Verificar que las instrucciones tengan sentido lógico",
            "Convertir directamente el código a binario",
            "Eliminar todos los comentarios del programa"
        ],
        correct: 1,
        explanation: "El análisis semántico revisa que el programa tenga significado correcto y respete las reglas del lenguaje."
    },
    {
        unit: "Unidad 1 - Análisis semántico",
        question: "En un árbol de expresiones, ¿dónde suelen colocarse los operandos?",
        answers: [
            "En las hojas del árbol",
            "Solamente en la raíz",
            "En una tabla de colores",
            "Fuera del árbol"
        ],
        correct: 0,
        explanation: "Los operandos normalmente se encuentran en las hojas, mientras que los operadores están en nodos internos."
    },
    {
        unit: "Unidad 1 - Análisis semántico",
        question: "¿Qué permite comprobar la revisión de tipos?",
        answers: [
            "Que las imágenes carguen más rápido",
            "Que las operaciones se realicen entre datos compatibles",
            "Que el código tenga más líneas",
            "Que el programa no tenga botones"
        ],
        correct: 1,
        explanation: "La comprobación de tipos evita operaciones incompatibles, por ejemplo sumar un entero con una cadena."
    },
    {
        unit: "Unidad 1 - Análisis semántico",
        question: "¿Para qué sirve la tabla de símbolos?",
        answers: [
            "Para guardar información de variables, constantes y funciones",
            "Para cambiar el fondo de la página",
            "Para borrar el código intermedio",
            "Para ejecutar música dentro del compilador"
        ],
        correct: 0,
        explanation: "La tabla de símbolos almacena información importante sobre identificadores del programa."
    },
    {
        unit: "Unidad 1 - Análisis semántico",
        question: "Un error semántico ocurre cuando...",
        answers: [
            "El código tiene sintaxis correcta, pero viola reglas de significado",
            "El monitor está apagado",
            "El archivo CSS no existe",
            "La página tiene muchas imágenes"
        ],
        correct: 0,
        explanation: "Un error semántico puede aparecer aunque la sintaxis esté bien, porque el significado del código es incorrecto."
    },
    {
        unit: "Unidad 2 - Código intermedio",
        question: "¿Qué hace la generación de código intermedio?",
        answers: [
            "Transforma el programa fuente en una representación más sencilla",
            "Elimina la necesidad del compilador",
            "Convierte imágenes a texto",
            "Crea únicamente el diseño visual del sistema"
        ],
        correct: 0,
        explanation: "El código intermedio sirve como puente entre el análisis del programa y la generación de código objeto."
    },
    {
        unit: "Unidad 2 - Código intermedio",
        question: "En la notación prefija, el operador se coloca...",
        answers: [
            "Después de los operandos",
            "Antes de los operandos",
            "Entre los operandos",
            "Dentro de una tabla HTML"
        ],
        correct: 1,
        explanation: "En la notación prefija primero aparece el operador y después los operandos."
    },
    {
        unit: "Unidad 2 - Código intermedio",
        question: "¿Cuál es la forma más común de escribir expresiones matemáticas?",
        answers: [
            "Postfija",
            "Binaria",
            "Infija",
            "Código P"
        ],
        correct: 2,
        explanation: "La notación infija es la más común; el operador se coloca entre los operandos, como A + B."
    },
    {
        unit: "Unidad 2 - Código intermedio",
        question: "¿Qué característica tienen los triples?",
        answers: [
            "Usan operador, argumento uno y argumento dos",
            "Siempre necesitan cinco campos",
            "Solo sirven para imágenes",
            "No pueden representar operaciones"
        ],
        correct: 0,
        explanation: "Los triples usan tres campos y hacen referencia a resultados anteriores por la posición de la instrucción."
    },
    {
        unit: "Unidad 2 - Código intermedio",
        question: "¿Qué elementos forman un cuádruplo?",
        answers: [
            "Color, tamaño, fuente y margen",
            "Operador, argumento1, argumento2 y resultado",
            "Usuario, contraseña, correo y teléfono",
            "Entrada, salida, imagen y video"
        ],
        correct: 1,
        explanation: "Los cuádruplos representan instrucciones con operador, dos argumentos y un resultado."
    },
    {
        unit: "Unidad 3 - Optimización",
        question: "¿Qué busca la optimización de código?",
        answers: [
            "Mejorar el código sin cambiar el resultado del programa",
            "Cambiar completamente el significado del programa",
            "Eliminar todas las variables",
            "Convertir HTML en CSS"
        ],
        correct: 0,
        explanation: "La optimización busca reducir tiempo, memoria o instrucciones, conservando el mismo comportamiento."
    },
    {
        unit: "Unidad 3 - Optimización",
        question: "¿Dónde se aplica la optimización local?",
        answers: [
            "Dentro de un bloque básico",
            "Solamente en el servidor",
            "En archivos de imagen",
            "En el sistema operativo únicamente"
        ],
        correct: 0,
        explanation: "La optimización local trabaja en bloques básicos, es decir, secuencias de instrucciones sin saltos internos."
    },
    {
        unit: "Unidad 3 - Optimización",
        question: "¿Por qué es importante optimizar ciclos?",
        answers: [
            "Porque los ciclos pueden ejecutarse muchas veces",
            "Porque los ciclos siempre son errores",
            "Porque eliminan el compilador",
            "Porque solo cambian colores"
        ],
        correct: 0,
        explanation: "Una pequeña mejora dentro de un ciclo puede generar grandes beneficios porque se repite muchas veces."
    },
    {
        unit: "Unidad 3 - Optimización",
        question: "¿Qué hace la optimización de mirilla?",
        answers: [
            "Revisa pequeñas secuencias de instrucciones para simplificarlas",
            "Abre ventanas del navegador",
            "Cambia el tamaño de las imágenes",
            "Crea nuevas páginas web"
        ],
        correct: 0,
        explanation: "La optimización de mirilla observa una pequeña ventana de código para detectar instrucciones redundantes."
    },
    {
        unit: "Unidad 3 - Optimización",
        question: "¿Qué analiza el flujo de datos?",
        answers: [
            "Cómo se mueven y usan los valores dentro de un programa",
            "La velocidad del internet",
            "Los colores de una interfaz",
            "El nombre del archivo HTML"
        ],
        correct: 0,
        explanation: "El análisis de flujo de datos permite detectar variables vivas, código muerto y expresiones repetidas."
    },
    {
        unit: "Unidad 4 - Código objeto",
        question: "¿Qué hace la generación de código objeto?",
        answers: [
            "Transforma el código intermedio en instrucciones entendibles por la computadora",
            "Crea únicamente botones interactivos",
            "Borra la memoria RAM",
            "Convierte texto en imágenes"
        ],
        correct: 0,
        explanation: "Esta fase convierte el código intermedio en instrucciones cercanas al lenguaje máquina."
    },
    {
        unit: "Unidad 4 - Código objeto",
        question: "¿Qué son los registros?",
        answers: [
            "Unidades pequeñas y rápidas de almacenamiento dentro del procesador",
            "Archivos de imagen",
            "Páginas de navegación",
            "Errores de sintaxis"
        ],
        correct: 0,
        explanation: "Los registros guardan datos temporales y resultados de operaciones dentro del procesador."
    },
    {
        unit: "Unidad 4 - Código objeto",
        question: "¿Qué es el lenguaje ensamblador?",
        answers: [
            "Una representación simbólica del lenguaje máquina",
            "Un lenguaje usado solo para diseñar páginas",
            "Una tabla de usuarios",
            "Una técnica para optimizar imágenes"
        ],
        correct: 0,
        explanation: "El ensamblador usa instrucciones simbólicas que se relacionan casi directamente con instrucciones binarias."
    },
    {
        unit: "Unidad 4 - Código objeto",
        question: "¿De qué está formado el lenguaje máquina?",
        answers: [
            "De secuencias binarias de unos y ceros",
            "De etiquetas HTML",
            "De colores y sombras",
            "De imágenes comprimidas"
        ],
        correct: 0,
        explanation: "El lenguaje máquina es entendido directamente por el hardware y está formado por instrucciones binarias."
    },
    {
        unit: "Unidad 4 - Código objeto",
        question: "¿Qué organiza la administración de memoria?",
        answers: [
            "La forma en que se almacenan variables, instrucciones y datos temporales",
            "Los colores del menú",
            "Las preguntas del quiz",
            "Los archivos multimedia"
        ],
        correct: 0,
        explanation: "La administración de memoria permite usar los recursos de manera ordenada y eficiente."
    }
];

let gameQuestions = [];
let currentQuestion = 0;
let score = 0;
let timer = 20;
let timerInterval = null;
let answered = false;

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const nextBtn = document.getElementById("nextBtn");

const questionCounter = document.getElementById("questionCounter");
const scoreText = document.getElementById("scoreText");
const timerText = document.getElementById("timerText");
const progressFill = document.getElementById("progressFill");
const unitText = document.getElementById("unitText");
const questionText = document.getElementById("questionText");
const answersBox = document.getElementById("answersBox");

const feedbackBox = document.getElementById("feedbackBox");
const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackText = document.getElementById("feedbackText");

const finalScore = document.getElementById("finalScore");
const finalMessage = document.getElementById("finalMessage");

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);
nextBtn.addEventListener("click", nextQuestion);

function shuffleArray(array) {
    const newArray = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        const temp = newArray[i];
        newArray[i] = newArray[randomIndex];
        newArray[randomIndex] = temp;
    }

    return newArray;
}

function prepareRandomQuestions() {
    gameQuestions = questions.map((questionItem) => {
        const answersWithStatus = questionItem.answers.map((answer, index) => {
            return {
                text: answer,
                isCorrect: index === questionItem.correct
            };
        });

        return {
            unit: questionItem.unit,
            question: questionItem.question,
            answers: shuffleArray(answersWithStatus),
            explanation: questionItem.explanation
        };
    });

    gameQuestions = shuffleArray(gameQuestions);
}

function startGame() {
    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    currentQuestion = 0;
    score = 0;

    prepareRandomQuestions();
    showQuestion();
}

function restartGame() {
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    currentQuestion = 0;
    score = 0;

    prepareRandomQuestions();
    showQuestion();
}

function showQuestion() {
    answered = false;
    timer = 20;

    const questionData = gameQuestions[currentQuestion];

    questionCounter.textContent = `${currentQuestion + 1} / ${gameQuestions.length}`;
    scoreText.textContent = `${score} pts`;
    timerText.textContent = `${timer}s`;

    const progressPercent = ((currentQuestion + 1) / gameQuestions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;

    unitText.textContent = questionData.unit;
    questionText.textContent = questionData.question;

    feedbackBox.classList.add("hidden");
    nextBtn.classList.add("hidden");

    answersBox.innerHTML = "";

    questionData.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.classList.add("answer-btn");
        button.textContent = answer.text;

        button.addEventListener("click", () => {
            selectAnswer(index, button);
        });

        answersBox.appendChild(button);
    });

    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timer--;
        timerText.textContent = `${timer}s`;

        if (timer <= 0) {
            clearInterval(timerInterval);
            timeOut();
        }
    }, 1000);
}

function selectAnswer(selectedIndex, selectedButton) {
    if (answered) {
        return;
    }

    answered = true;
    clearInterval(timerInterval);

    const questionData = gameQuestions[currentQuestion];
    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach((button, index) => {
        button.classList.add("disabled");

        if (questionData.answers[index].isCorrect) {
            button.classList.add("correct");
        }
    });

    if (questionData.answers[selectedIndex].isCorrect) {
        score += 100;
        selectedButton.classList.add("correct");

        feedbackTitle.textContent = "¡Correcto!";
        feedbackText.textContent = questionData.explanation;
    } else {
        selectedButton.classList.add("incorrect");

        feedbackTitle.textContent = "Incorrecto";
        feedbackText.textContent = questionData.explanation;
    }

    scoreText.textContent = `${score} pts`;
    feedbackBox.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
}

function timeOut() {
    if (answered) {
        return;
    }

    answered = true;

    const questionData = gameQuestions[currentQuestion];
    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach((button, index) => {
        button.classList.add("disabled");

        if (questionData.answers[index].isCorrect) {
            button.classList.add("correct");
        }
    });

    feedbackTitle.textContent = "Tiempo terminado";
    feedbackText.textContent = questionData.explanation;

    feedbackBox.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < gameQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    clearInterval(timerInterval);

    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    const totalPoints = gameQuestions.length * 100;
    finalScore.textContent = `${score} / ${totalPoints} puntos`;

    const percentage = (score / totalPoints) * 100;

    if (percentage >= 90) {
        finalMessage.textContent = "Excelente, dominas muy bien los temas de Lenguajes y Autómatas II.";
    } else if (percentage >= 70) {
        finalMessage.textContent = "Muy bien, tienes una buena base. Solo falta repasar algunos detalles.";
    } else if (percentage >= 50) {
        finalMessage.textContent = "Vas bien, pero conviene repasar las unidades antes de volver a intentarlo.";
    } else {
        finalMessage.textContent = "No pasa nada, repasa las unidades y vuelve a jugar para mejorar tu puntaje.";
    }
}