const DOMSelectors = {
  container: document.getElementById("card"),
  form: document.getElementById("form"),
  submit: document.getElementById("submit"),
  input: document.getElementById("Guess")
};

const Question = {
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmtsunews.com%2Fmtsu-grammys-preview-2019%2F&psig=AOvVaw0tdeVZ_BJjk_hjjAHAkqB4&ust=1707201031290000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPjliMrJk4QDFQAAAAAdAAAAABAE",
    question: "Who won Album of the Year 2024?",
    answer: "Taylor Swift",
};

function checkAnswer(){
    const inputText = input.textContent
    if(inputText === Question.answer)
    {console.log("correct")}
    else(inputText !== Question.answer);
    {console.log("wrong")}
}