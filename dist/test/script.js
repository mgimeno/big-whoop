let questions = [
  {
    title: "¿Cuánto cuesta construir un poblado?",
    correctAnswerIndex: 0,
    answers: [
      "1 ladrillo, 1 madera, 1 trigo, 1 oveja",
      "1 ladrillo, 1 madera, 1 trigo, 1 piedra",
      "1 ladrillo, 1 madera, 1 oveja, 1 piedra",
    ],
  },
  {
    title: "¿Dónde se descubrió la bodega de vinos más antigua del mundo?",
    correctAnswerIndex: 1,
    answers: ["Alfamen", "Armenia", "Georgia"],
  },
  {
    title: "Según Filmaffinity e IMDB, ¿qué serie tiene una mejor crítica?",
    correctAnswerIndex: 1,
    answers: ["Seinfeld", "The office"],
  },
  {
    title: "¿Cuál es el sentido de la vida, el universo y todo lo demás?",
    correctAnswerIndex: 2,
    answers: ["No tiene sentido", "El amor", "42"],
  },
  {
    title: "¿Cuál es el nombre de pila de la Sword Master en Monkey Island?",
    correctAnswerIndex: 0,
    answers: ["Carla", "Elaine", "Marie"],
  },
  {
    title: "¿En qué suburbio de Nápoles domina la familia Savastano?",
    correctAnswerIndex: 2,
    answers: ["Scampìa", "San Pietro a Patierno", "Secondigliano"],
  },
  {
    title: "¿En qué carrera del neo drift out el terreno está nevado?",
    correctAnswerIndex: 1,
    answers: ["Cuarta", "Tercera", "Segunda"],
  },
  {
    title:
      "¿Al principio, quien es el único autorizado para comunicarse con L?",
    correctAnswerIndex: 2,
    answers: ["Shibuya", "Soichiro Yagami", "Watari"],
  },
  {
    title:
      "¿Quién marcó el último gol en la final de la copa del mundo de fútbol de 1986?",
    correctAnswerIndex: 2,
    answers: ["Valdano", "Maradona", "Burruchaga"],
  },
  {
    title: "¿Cuánto cuesta un seguro anti volcanes, Peter?",
    correctAnswerIndex: 1,
    answers: ["Gratis", "200 dólares", "1000 dólares"],
  },
  {
    title: "¿Dónde puedes conseguir la chorrimanguera?",
    correctAnswerIndex: 0,
    answers: ["Carnicería arabe", "Amazon", "Mercadillo de navidad"],
  },
  {
    title: "¿De qué color es el traje de baño de borat?",
    correctAnswerIndex: 1,
    answers: ["Azul", "Verde", "Rojo"],
  },
  {
    title: "¿Cuál es el número que sigue a esta serie: 4, 8, 15, 16, 23?",
    correctAnswerIndex: 0,
    answers: ["42", "27", "24"],
  },
  {
    title: "¿Qué velocidad media lleva una golondrina sin carga?",
    correctAnswerIndex: 2,
    answers: ["8m/sg", "42m/sg", "¿Africana o europea?"],
  },
  {
    title: "¿A qué velocidad hay que ir para viajar en el tiempo?",
    correctAnswerIndex: 3,
    answers: ["120 MPH", "140 KMH", "120 KMH", "88 MPH"],
  },
  {
    title: "¿Cual de las siguientes palabras empieza por la letra a?",
    correctAnswerIndex: 2,
    answers: ["Encrucijada", "Verosimilitud", "Andar"],
  },
  {
    title: "¿En el año 2020 cuantos meses tuvieron 29 días?",
    correctAnswerIndex: 2,
    answers: ["Ninguno", "Uno", "Todos"],
  },
  {
    title: "¿Qué pasa en el infierno según el pastafarismo?",
    correctAnswerIndex: 1,
    answers: [
      "No hay pasta ni pizza",
      "Hay volcanes de cerveza como en el cielo, pero está caliente y sin gas",
      "El infierno no existe en esta religión",
    ],
  },
];

function initQuestionsForm() {
  const container = document.querySelector("#questions-screen #questions");

  questions.forEach((q, questionIndex) => {
    let template = `<h2>${questionIndex + 1} - ${q.title}</h2>`;

    q.answers.forEach((a, answerIndex) => {
      const answerId = questionIndex + "_" + answerIndex;

      template += `<label class="radio radio-before">
                      <span class="radio__input">
                        <input type="radio" name="${questionIndex}" value="${answerIndex}">
                        <span class="radio__control"></span>
                      </span>
                      <span class="radio__label">${a}</span>
                    </label>`;
    });

    container.insertAdjacentHTML("beforeend", template);
  });
}

function hideElement(element) {
  document.querySelector(element).style.display = "none";
}

function showElement(element) {
  document.querySelector(element).style.display = "grid";
}

function checkLogin() {
  const value = document.querySelector("#login-screen #password").value;
  if (value === "1009") {
    goToQuestions();
  } else {
    showElement("#login-error");
  }
}

function goToQuestions() {
  hideElement("#login-screen");
  hideElement("#result-failed-screen");
  showElement("#questions-screen");
  window.scrollTo({ top: 0 });
}

function checkSolution() {
  let success = true;
  let questionIndex = 0;

  for (let q of questions) {
    const selectedAnswer = document.querySelector(
      `#questions-screen input[name="${questionIndex}"]:checked`
    );

    if (!selectedAnswer || +selectedAnswer.value !== q.correctAnswerIndex) {
      success = false;
      break;
    }

    questionIndex++;
  }

  hideElement("#questions-screen");
  if (success) {
    document.querySelector("#success-text").innerHTML =
      "Ahora diríjanse a Jesus y Maria Antonia y exijan el paquete con código XM10.";
    showElement("#result-success-screen");
  } else {
    showElement("#result-failed-screen");
  }
  window.scrollTo({ top: 0 });
}

initQuestionsForm();
