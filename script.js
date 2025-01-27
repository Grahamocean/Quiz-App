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
      { text: "H20", correct: true },
      { text: "CO2", correct: false },
      { text: "O2", correct: false },
      { text: "H2", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
