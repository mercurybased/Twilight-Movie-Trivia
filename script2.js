var currentQuestionIndex = 0;
var choicesEl = document.getElementById('choices');
var time = 60;

var questions = [
    {
      title: 'While the books are based in Forks, WA, where is the first movie filmed?',
      correctAns: 'Portland, OR',
      ans2: 'Vancouver, B.C.',
      ans3: 'Portland, ME',
      ans4: 'Dallas, TX',
    },
    {
      title: 'Who was the first casting choice for the lead role of Edward Cullen?',
      choices: ['Robert Pattinson', 'Henry Cavill', 'Robert Downey Jr.', 'Pedro Pascal'],
      answer: 'Henry Cavill',
    },
    {
      title: 'What does Edward say to Bella before he takes her on a trip through the trees?',
      choices: [
        '"Better hold on tight, spider monkey"',
        '"Don\'t worry, you won\'t fall"',
        '"I love you"',
        'none of the above',
      ],
      answer: '"Better hold on tight, spider monkey"',
    },
    {
      title:
        'What kind of car does Alice steal in Italy?',
      choices: ['a red Chevy truck', 'a yellow Porsche', 'a silver Volvo', 'a blue Ferrari'],
      answer: 'a yellow Porsche',
    },
    {
      title:
        'What does Jacob gift Bella on her 18th birthday?',
      choices: ['a diamond necklace', 'an anklet', 'a dreamcatcher', 'a brand new car'],
      answer: 'a dreamcatcher',
    },
  ];
  
function getQuestion() {
    // get current question object from array
    var currentQuestion = questions[currentQuestionIndex];
  
    // update title with current question
    var titleEl = document.getElementById('question-title');
    titleEl.textContent = currentQuestion.title;
  
    // clear out any old question choices
    choicesEl.innerHTML = '';
  
    // loop over choices
    for (var i = 0; i < currentQuestion.choices.length; i++) {
      // create new button for each choice
      var choice = currentQuestion.choices[i];
      var choiceNode = document.createElement('button');
      choiceNode.setAttribute('class', 'choice');
      choiceNode.setAttribute('value', choice);
  
      choiceNode.textContent = choice;
  
      // display on the page
      choicesEl.appendChild(choiceNode);
    }
  }
  
  getQuestion();
  
  function questionClick(event) {
    // result right or wrong
    var buttonEl = event.target;
  
    // move to next question
    currentQuestionIndex++;
  
    // check if we've run out of questions
    if (time <= 0 || currentQuestionIndex === questions.length) {
      quizEnd();
    } else {
      getQuestion();
    }
  }
  
  choicesEl.onclick = questionClick;
  // start timer
  timerId = setInterval(clockTick, 1000);
  
  function clockTick() {
    // update time
    time--;
    // timerEl.textContent = time;
  
    // check if user ran out of time
    if (time <= 0) {
      quizEnd();
    }
  }
  
  function quizEnd() {
    // stop timer
    clearInterval(timerId);
  
    // display an input and a button 
  
    // get value of the input on button click 
  
    // save to local storage 
  
    // create an array to push a new key value pair with initials and a score
  
    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials,
    };
  
    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem('highscores', JSON.stringify(highscores));
  
  }