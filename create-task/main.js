import './style.css'

const DOMSelectors = {
  quiz: document.getElementById("#quiz"),
  button: document.getElementById("#button"),
};

const Questions = [
  {
      question: 'What is the capital of the United States?',
      answer: 'Washington DC',
  },
  {
    question: 'What is the capital of Argentina?',
      answer: 'Buenos Aires',
  },
  {
    question: 'What is the capital of France?',
    answer: 'Paris',
  },
  {
    question: 'What is the capital of Netherlands?',
    answer: 'Amsterdam',
  },
  {
    question: 'What is the capital of Russia?',
    answer: 'Moscow',
  },
  {
    question: 'What is the capital of Switzerland?',
    answer: 'Bern',
  },
  {
    question: 'What is the capital of the United Kingdom?',
    answer: 'London',
  },
  {
    question: 'What is the capital of South Korea?',
    answer: 'Seoul',
  },
  {
    question: 'What is the capital of Norway?',
    answer: 'Oslo',
  },
  {
    question: 'What is the capital of Mexico?',
    answer: 'Mexico City',
  },
];
console.log(Questions.question);

let wrong = []

function questionCards(){

  arr.forEach((el)=>{
     `
    <div class="card">
    <h2 class="name"> ${Questions.question}</h2>
  </div>
    `
  })}

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

