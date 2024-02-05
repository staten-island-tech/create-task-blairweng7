import './style.css'

const DOMSelectors = {
  container: document.getElementById("quiz"),
  button: document.getElementById("button"),
  results: document.getElementById("submit"),
};

const Questions = [
  {
      question: 'What is the capital of the United States?',
      choices: {
        a: "New York",
        b: "Louisiana",
        c: "Washington DC",
      },
      correctAnswer: 'c',
  },
  {
    question: 'What is the capital of Argentina?',
    choices: {
      a: "La Plata",
      b: "Buenos Aires",
      c: "Rosario",
    },
      answer: 'b',
  },
  {
    question: 'What is the capital of France?',
    choices: {
a: "Bordeaux",
b: "France",
c: "Nice"
    },
    answer: 'b',
  },
  {
    question: 'What is the capital of Netherlands?',
    choices: {
a: "Amsterdam",
b: "Breda",
c: "Rotterdam",
    },
    answer: 'a',
  },
  {
    question: 'What is the capital of Russia?',
    choices: {
a: "St. Petersburg",
b: "Omsk",
c: "Moscow"
    },
    answer: 'c',
  },
  {
    question: 'What is the capital of Switzerland?',
    choices: {
      a: "Zurich",
      b: "Bern",
      c: "Basel",
    },
    answer: 'b',
  },
  {
    question: 'What is the capital of the United Kingdom?',
    choices: {
      a: "Liverpool",
      b: "Bristol",
      c: "London"
    },
    answer: 'c',
  },
  {
    question: 'What is the capital of South Korea?',
    choices: {
      a: "Busan",
      b: "Ulsan",
      c: "Seoul",
    },
    answer: 'c',
  },
  {
    question: 'What is the capital of Norway?',
    choices: {
      a: "Stavanger",
      b: "Oslo",
      c: "Drammen",
    },
    answer: 'b',
  },
  {
    question: 'What is the capital of Mexico?',
    choices: {
      a: "Mexico City",
      b: "Puebla",
      c: "Merida"
    },
    answer: 'a',
  },
];

let wrong = []

function showQuestions(){

};

function results(){

};


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

