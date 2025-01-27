const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Rome", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
    ],
  },
  {
    question: "What does HTML stands for?",
    answers: [
      { text: "Hyper Text Markuup Language", correct: true },
      { text: "High Tech Machine Learning", correct: false },
      { text: "Hyperlink and Text Managing Language", correct: false },
      { text: "Hyper Transfer Markup Language", correct: false },
    ],
  },
  {
    question: "In Java, which keyword is used to define a class?",
    answers: [
      { text: "Function", correct: false },
      { text: "Class", correct: true },
      { text: "Public", correct: false },
      { text: "Static", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "H2O", correct: true },
      { text: "CO2", correct: false },
      { text: "O2", correct: false },
      { text: "H2", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
  } else {
    selectedBtn.classList.add("incorrect");
  }
}

startQuiz();
