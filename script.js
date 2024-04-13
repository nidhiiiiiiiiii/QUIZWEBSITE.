const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');

let shuffledQuestions, currentQuestionIndex, score;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.innerText = score;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer.correct));
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
  nextButton.classList.add('hide');
}

function selectAnswer(correct) {
  if (correct) {
    score++;
  }
  scoreElement.innerText = score;
  resetState();
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    showQuestion(shuffledQuestions[++currentQuestionIndex]);
  } else {
    showScore();
  }
}

function showScore() {
  questionContainerElement.classList.add('hide');
  scoreContainer.classList.remove('hide');
}




const questions = [
  {
    "question": "What is the primary constituent of galaxies?",
    "answers": [
      { "text": "Cosmic dust", "correct": false },
      { "text": "Dark matter", "correct": true },
      { "text": "Neutrinos", "correct": false },
      { "text": "Antimatter", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a type of galaxy?",
    "answers": [
      { "text": "Spiral", "correct": false },
      { "text": "Elliptical", "correct": false },
      { "text": "Nebular", "correct": true },
      { "text": "Irregular", "correct": false }
    ]
  },
  {
    "question": "What is the most likely origin of galaxies according to the Big Bang theory?",
    "answers": [
      { "text": "They formed directly from quasars", "correct": false },
      { "text": "They were created by cosmic rays", "correct": false },
      { "text": "They emerged from primordial fluctuations in the early universe", "correct": true },
      { "text": "They were seeded by rogue black holes", "correct": false }
    ]
  },
  {
    "question": "Which of the following is a characteristic of quasars?",
    "answers": [
      { "text": "They are small, faint galaxies", "correct": false },
      { "text": "They emit primarily visible light", "correct": false },
      { "text": "They are powered by supermassive black holes", "correct": true },
      { "text": "They are composed entirely of dark matter", "correct": false }
    ]
  },
  {
    "question": "What phenomenon contributes to galactic rotation curves that defy expectations based on visible matter alone?",
    "answers": [
      { "text": "Cosmic inflation", "correct": false },
      { "text": "Stellar population dynamics", "correct": false },
      { "text": "Galactic cannibalism", "correct": false },
      { "text": "Dark matter", "correct": true }
    ]
  },
  {
    "question": "Which type of galaxy has a flattened disk and spiral arms?",
    "answers": [
      { "text": "Elliptical", "correct": false },
      { "text": "Lenticular", "correct": false },
      { "text": "Spiral", "correct": true },
      { "text": "Irregular", "correct": false }
    ]
  },
  {
    "question": "What are cosmic rays primarily composed of?",
    "answers": [
      { "text": "Protons and atomic nuclei", "correct": true },
      { "text": "Photons and neutrinos", "correct": false },
      { "text": "Electrons and positrons", "correct": false },
      { "text": "Gravitons and gluons", "correct": false }
    ]
  },
  {
    "question": "What is the approximate age of the universe according to current scientific understanding?",
    "answers": [
      { "text": "4.6 billion years", "correct": false },
      { "text": "13.8 billion years", "correct": true },
      { "text": "1.3 trillion years", "correct": false },
      { "text": "8.7 billion years", "correct": false }
    ]
  },
  {
    "question": "What is the name oof our galaxy?",
    "answers": [
      { "text": "Andromeda", "correct": true },
      { "text": "Triangulum", "correct": false },
      { "text": "Centaurus A", "correct": false },
      { "text": "Milky way", "correct": false }
    ]
  },
  {
    "question": "What is the name of the process by which galaxies merge and form larger galaxies?",
    "answers": [
      { "text": "Galactic annihilation", "correct": false },
      { "text": "Galactic recession", "correct": false },
      { "text": "Galactic cannibalism", "correct": true },
      { "text": "Galactic fusion", "correct": false }
    ]
  },
  {
    "question": "How are galaxies formed?",
    "answers": [
      { "text": "They are formed from the collision and merging of smaller galaxies.", "correct": true },
      { "text": "They are formed by the explosion of massive stars.", "correct": false },
      { "text": "They are created through the collapse of interstellar gas and dust clouds.", "correct": false },
      { "text": "They are formed by the gravitational collapse of planetary nebulae.", "correct": false }
    ]
  },  
  {
    "question": "What is the primary source of energy in a quasar?",
    "answers": [
      { "text": "Nuclear fusion", "correct": false },
      { "text": "Gravitational collapse", "correct": false },
      { "text": "Black hole", "correct": true },
      { "text": "Stellar winds", "correct": false }
    ]
  },
  {
    "question": "What is the name given to the phenomenon where galaxies appear to be moving away from us at speeds proportional to their distance?",
    "answers": [
      { "text": "Hubble expansion", "correct": true },
      { "text": "Doppler shift", "correct": false },
      { "text": "Redshift", "correct": false },
      { "text": "Cosmic microwave background", "correct": false }
    ]
  },
  {
    "question": "What is the term for a group of galaxies bound together by gravity?",
    "answers": [
      { "text": "Galactic cluster", "correct": false },
      { "text": "Supercluster", "correct": true },
      { "text": "Galactic filament", "correct": false },
      { "text": "Galactic halo", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a type of stellar population?",
    "answers": [
      { "text": "Population I", "correct": false },
      { "text": "Population II", "correct": false },
      { "text": "Population III", "correct": false },
      { "text": "Population IV", "correct": true }
    ]
  },
  {
    "question": "What is the name of the galaxy that hosts the supermassive black hole known as Sagittarius A*?",
    "answers": [
      { "text": "Andromeda", "correct": false },
      { "text": "Milky Way", "correct": true },
      { "text": "Triangulum", "correct": false },
      { "text": "Centaurus A", "correct": false }
    ]
  },
  {
    "question": "What is the term for a rapid increase in brightness of a star followed by a gradual decrease?",
    "answers": [
      { "text": "Supernova", "correct": false },
      { "text": "Nova", "correct": true },
      { "text": "Hypernova", "correct": false },
      { "text": "Quasar", "correct": false }
    ]
  },
  {
    "question": "Which of the following is a possible source of cosmic rays within the Milky Way?",
    "answers": [
      { "text": "Supernova remnants", "correct": true },
      { "text": "White dwarfs", "correct": false },
      { "text": "Planetary nebulae", "correct": false },
      { "text": "Asteroid belts", "correct": false }
    ]
  },
  {
    "question": "What are galaxies primarily composed of?",
    "answers": [
      { "text": "Dark matter and dark energy", "correct": false },
      { "text": "Stellar nurseries and planetary systems", "correct": false },
      { "text": "Stars, gas, and dust", "correct": true },
      { "text": "Black holes and quasars", "correct": false }
    ]
  },
  
  {
    "question": "What is the approximate number of galaxies in the observable universe?",
    "answers": [
      { "text": "Hundreds of thousands", "correct": false },
      { "text": "Millions", "correct": false },
      { "text": "Billions", "correct": true },
      { "text": "Trillions", "correct": false }
    ]
  }
];
