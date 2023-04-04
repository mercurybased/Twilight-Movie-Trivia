const testForm = document.querySelector('#test-form');
const timerEl = document.querySelector('#timer');
const submitBtn = document.querySelector('#submit-btn');
const startBtn = document.querySelector("#start-button");
var questionOne = document.querySelector("#question-one");
var questionTwo = document.querySelector("#question-two")
var questionThree = document.querySelector("#question-three")
var questionFour = document.querySelector("#question-four")
var questionFive = document.querySelector("#question-five")


let timeLeft = 10000;


function startQuiz(){
    questionOne.classList.remove("hidden");       
}
startBtn.addEventListener('click', startQuiz);

function displayResults() {
    var questions = document.querySelectorAll('input[type="radio"]');
    console.log(questions)
    var correctAnswers = 0;
    
    
    questions.forEach(question => {
          var radios = question.querySelectorAll('input[type="radio"]');
        
        if (question.checked && question.getAttribute('data-correct') === 'true') {
            correctAnswers++;
            console.log(correctAnswers);
        };
    });
    
    const totalQuestions = 5;
    const score = Math.round((correctAnswers / totalQuestions) * 100);
    
    testForm.innerHTML = `
    <h1>Results</h1>
    <p>You scored ${score}%</p>
    `;
}


submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    clearInterval(timer);
    submitBtn.disabled = true;
    displayResults();
});
// define all questions and answers


// define variable for tracking
//      track time
//      track questions

// create variables to reference DOM elements
//      timer
//      questions
//      answers
//      start button
//      name/initials
//      save button
//      high scores container

// function
//      start quiz
//          hide start button
//          show the quiz container
//          display first question
//          start timer
//          display countdown on screen

// function
//      rendering a question
//          clear/remove previous question
//          getting first question
//          add question to the question container
//          make button for each answer
//          add answers to the answers container

// function
//      handle quiz completion
//          stop timer
//          hide quiz container
//          show end screen
//          show time remaining as score

// function
//      handle answer clicks
//
//      if
//      answer is WRONG
//          subtract time from timer
//          make sure time is displayed correctly on page
//          flash wrong answer message (setTimeout)
//
//      update question variable to next question
//      display question on page
//
//      if
//      question is the last question
//      trigger quiz completion

// function
//      tracking time
//          subtract time
//          update the page
//
//      if
//      timer hits zero
//          trigger quiz completion

// function
//      saving high scores
//          get value of user input (name/initals)
//          validate input
//          retreive existing data from local storage
//          update the high score data
//          save updated data back to local storage
//          redirect to start screen after save

// function
//      listening for key press
//          check if the key pressed was 'Enter' for saving scores
//          OPTIONAL check if the key pressed was 'a', 'b', 'c' for answers

// event listeners
//      click start
//      click answers
//      click save score
//      keyups