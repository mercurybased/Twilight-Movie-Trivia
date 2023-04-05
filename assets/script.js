const testForm = document.querySelector('#test-form');
const timerEl = document.querySelector('#timer');
var highScore = document.querySelector("#high-scores")
var finalScore = document.querySelector("#final-score")
const submitBtn = document.querySelector('#submit-btn');
const startBtn = document.querySelector("#start-button");
var questionOne = document.querySelector("#question-one");
var questionTwo = document.querySelector("#question-two")
var questionThree = document.querySelector("#question-three")
var questionFour = document.querySelector("#question-four")
var questionFive = document.querySelector("#question-five")
var finalQuestion = document.querySelector("#question-five")
var questionCont = document.querySelector("#test-form")
var results = document.querySelector("#results")
var currentQuestion = 0
var score = 0

let timeLeft = 100;
var timerInterval = 0

// function startTimer() {
//     timerInterval = setInterval(function () {
//       if (time > 1) {
//         timerEl.textContent = timeLeft;
//         timeLeft--;
//       } else if (timeLeft <= 0) {
//         quizEnd();
//       }
//     }, 1000);
//       // stop timer
//     clearInterval(timerId);
//   }
  

function startTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timeLeft--;
      timerEl.textContent = timeLeft + " seconds left";  
      if(timeLeft === 0 || currentQuestion === 6){
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function
        calculateScore();
      }
  
    }, 1000);
}


function startQuiz(){
    questionCont.classList.remove("hidden")
    questionOne.classList.remove("hidden"); 
    startTimer()      
}

startBtn.addEventListener('click', startQuiz);

function nextQuestion(){
    // check if were at last question, if yes, call calculateScore and return
    if (currentQuestion === 1){
        questionOne.classList.add("hidden")
        questionTwo.classList.remove('hidden')
    }
    if (currentQuestion === 2){
        questionTwo.classList.add("hidden")
        questionThree.classList.remove("hidden")
    }
    if (currentQuestion === 3){
        questionThree.classList.add("hidden")
        questionFour.classList.remove("hidden")
    }
    if (currentQuestion === 4){
        questionFour.classList.add("hidden")
        questionFive.classList.remove("hidden")
    }
    if (currentQuestion === 5){
        questionFive.classList.add("hidden")
    }
    currentQuestion++
}

submitBtn.addEventListener('click', nextQuestion)


function calculateScore() {
    var questions = document.querySelectorAll('input[type="radio"]');
    console.log(questions)
    var correctAnswers = 0;
    // var wrongAnswers = 0;
    
    
    questions.forEach(question => {
        
        if (question.checked && question.getAttribute('data-correct') === 'true') {
            correctAnswers++;
            console.log(correctAnswers);
        } 
        // if (question.checked && question.getAttribute('data-correct') === 'false'){
        //     wrongAnswers--;
        //     timeLeft-=10
        //     }
            // deduct time from timeleft
        });
    

    clearInterval(timer);
    const totalQuestions = 5;
    const score = Math.round((correctAnswers / totalQuestions) * 100);
    
    testForm.innerHTML = `
    <h1>Results</h1>
    <p>You scored ${score}%</p>
    `;
}

// function highScoreFun(){
//     highScore.setAttribute("class", "container")
//     finalScoreEl.textContent = score;
//   }

function getInitials () {
    // hide everything
    questionCont.classList.add("hidden")
    // add input field for getting initials
    // when initials are submitted, save score to ls
    // // 1. get savedscores 2. add new score to savedscores array 3. setItem (save) array to ls
    // hide input field
    // show leaderboard
}

localStorage.getItem("score")
localStorage.setItem("score", score)


submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
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

// Alivia's code for quiz ending
// function questionClick(event) {
//     // result right or wrong
//     answer = event.target;
//     console.log("click event is working")
//     // move to next question
//     currentQuestionIndex++;
//     // checkAnswer();
//     // check if we've run out of questions
//     if (time <= 0 || currentQuestionIndex === questions.length) {
//       quizEnd();
//     } else {
//       getQuestion();
//     }
//   }