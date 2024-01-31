import './style.css'

const DOMSelectors = {
  quiz: document.getElementById("#quiz"),
  button: document.getElementById("#button"),
};

const Questions = [
  {
      id: 1,
      question: 'What is the capital of the United States?',
      answer: 'Washington DC',
  },
  {
    id: 2,  
    question: 'What is the capital of Argentina?',
      answer: 'Buenos Aires',
  },
  {
    id: 3,
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
let wrong = []
let userAnswer = "";

function capital(){
  for(let i=0; i < Questions.length; i++){
    if (userAnswer === Questions.answer){ console.log(correct)}
   
    else(Questions.answer !== Questions.answer);
  wrong.push(userAnswer)
  }
  
}
// if user answer i = correct