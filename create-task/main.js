import "./style.css";

const DOMSelectors = {
  questions: document.getElementById("question"),
  choices: document.getElementById("choices"),
  submit: document.getElementById("submit-btn"),
  results: document.getElementById("results"),
};

const Questions = [
  {
    question: "What is the capital of the United States?",
    choices: ["New York", "Louisiana", "Washington DC"],
    correctAnswer: "Washington DC",
  },
  {
    question: "What is the capital of Argentina?",
    choices: ["La Plata", "Buenos Aires", "Rosario"],
    answer: "Buenos Aires",
  },
  {
    question: "What is the capital of France?",
    choices: ["Bordeaux", "France", "Nice"],
    answer: "France",
  },
  {
    question: "What is the capital of Netherlands?",
    choices: ["Amsterdam", "Breda", "Rotterdam"],
    answer: "Amsterdam",
  },
  {
    question: "What is the capital of Russia?",
    choices: ["St. Petersburg", "Omsk", "Moscow"],
    answer: "Moscow",
  },
  {
    question: "What is the capital of Switzerland?",
    choices: ["Zurich", "Bern", "Basel"],
    answer: "Bern",
  },
  {
    question: "What is the capital of the United Kingdom?",
    choices: ["Liverpool", "Bristol", "London"],
    answer: "London",
  },
  {
    question: "What is the capital of South Korea?",
    choices: ["Busan", "Ulsan", "Seoul"],
    answer: "Seoul",
  },
  {
    question: "What is the capital of Norway?",
    choices: ["Stavanger", "Oslo", "Drammen"],
    answer: "Oslo",
  },
  {
    question: "What is the capital of Mexico?",
    choices: ["Mexico City", "Puebla", "Merida"],
    answer: "Mexico City",
  },
];
let currentQuestion = 0;
let score = 0;

function showQuestions() {
  const data = Questions[currentQuestion];
  DOMSelectors.questions.innerText = data.question;
  DOMSelectors.choices.innerHTML = "";
  data.choices.forEach((option) => {
    const button = document.createElement('button');
    button.innerText = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(button);
  });
}

function userAnswers(answer) {
  const data = Questions[currentQuestion];
  if (answer === data.answer){
    score++;
  }
  currentQuestion++;
  if (currentQuestion < Questions.length){
    showQuestions();
  }else{
    results();}
  
  function results() {
  resultElement.innerText = `You scored ${score}/${Questions.length}`;
  submitButton.disabled = true;
}

}

showQuestions();
userAnswers();
// console.log(Questions.question);

// function consoleCards(){
//   for(let i=0; i<= 10; i++){

//   }
// }
// /*function showCards(){
//   DOMSelectors.container.innerHTML= ' ';

//     DOMSelectors.container.insertAdjacentHTML("beforeend",
//   `
//   <h2 class="name">Questions</h2>
//   <h3 class="questions"> ${Questions.question}</h3>
//   <form class="answer-form"></form>
//   `)
// }
// */
// function capital(){
//   for(let i=0; i < Questions.length; i++){
//     if (userAnswer === Questions.answer){ console.log(correct)}

//     else(Questions.answer !== Questions.answer);
//   wrong.push(userAnswer)
//   }

// }
// // if user answer i = correct
