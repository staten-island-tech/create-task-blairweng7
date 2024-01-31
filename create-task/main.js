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

function capital(){
  for(let i=0; i < Questions.length; i++){
    if (Questions(answer) === ${Questions.answer})
  }
}