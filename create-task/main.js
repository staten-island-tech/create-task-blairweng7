import './style.css'

const DOMSelectors = {
  questions: document.getElementById("question"),
  choices: document.getElementById("choices"),
  submit: document.getElementById("submit-btn"),
  results: document.getElementById("results")
};

const Questions = [
  {
      question: 'What is the capital of the United States?',
      choices: [
      "New York",
      "Louisiana",
      "Washington DC",
      ],
      correctAnswer: "Washington DC",
  },
  {
    question: 'What is the capital of Argentina?',
    choices: [
      "La Plata",
     "Buenos Aires",
      "Rosario",
    ],
      answer: "Buenos Aires",
  },
  {
    question: 'What is the capital of France?',
    choices: [ 
      "Bordeaux",
"France",
"Nice"]
    ,
    answer: "France",
  },
  {
    question: 'What is the capital of Netherlands?',
    choices: [
"Amsterdam",
 "Breda",
"Rotterdam",
    ],
    answer: "Amsterdam",
  },
  {
    question: 'What is the capital of Russia?',
    choices: 
[
  "St. Petersburg",
"Omsk",
"Moscow"
],
    answer: "Moscow",
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
let currentQuestion = 0;
let score = 0;

function showQuestions(){
  const data = Questions.question;
  questions.innerText = data.question;
  choices.innerHTML = '';
  data.options.forEach((option)=>{
    const button = document.querySelector("#buttons");
    button.innerText = option;
    button.classList.add('option-btn');
    button.addEventListener('click', ()=> 
    checkAnswer(option));
    optionsElement.appendChild(button);
  })
};

function results(answer){
  const data = Questions.question;
  if (answer === data.answer)
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

