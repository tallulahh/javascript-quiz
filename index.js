//Global variables
var questionDisplay = document.querySelector(".question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var quiz = document.querySelector(".quiz");
var startBtn = document.querySelector(".startBtn");
var startText = document.querySelector("#startText");
var gameOver = document.querySelector(".gameOver");

//Initiate values
var correctAnswers = 0;
let question;

function startGame(){
  gameOver.style.visibility = "hidden";
  startBtn.style.visibility = "hidden";
  quiz.style.visibility = "visible";
  correctAnswers = 0;
  questionOne();
}

//Functions that create questions and answers
var questionOne = () => {
  question = {
  number: "1",
  question: "What was the name of The Beatles' manager?",
  option1: "George Harrison",
  option2: "Brian Epstein",
  option3: "Morgan Freeman",
  option4: "John Lennon",
  correctAnswer: "Brian Epstein"
  };
  displayQuestion(question);
  displayProgress(question.number);
  return question;
};

var questionTwo = () => {
  question = {
    number: "2",
    question: "How many permanent teeth does a dog have?",
    option1: "42",
    option2: "32",
    option3: "22",
    option4: "50",
    correctAnswer: "42"
  };
  displayQuestion(question);
  displayProgress(question.number);
  return question;
};

var questionThree = () => {
  question = {
    number: "3",
    question: "What does the Latin Tempus mean in English?",
    option1: "Temple",
    option2: "Temperature",
    option3: "Time",
    option4: "Tumeric",
    correctAnswer: "Time"
  };
  displayQuestion(question);
  displayProgress(question.number);
  return question;
};

var questionFour = () => {
  question = {
    number: "4",
  question: "Which country in the world is believed to have the most miles of motorway?",
  option1: "Russia",
  option2: "United States",
  option3: "China",
  option4: "Argentina",
  correctAnswer: "China"
  };
  displayQuestion(question);
  displayProgress(question.number);
  return question;
};

var questionFive = () => {
  question = {
    number: "5",
  question: "Roughly how many days does it take the moon to orbit the earth?",
  option1: "14",
  option2: "28",
  option3: "31",
  option4: "100",
  correctAnswer: "28"
  };
  displayQuestion(question);
  displayProgress(question.number);
  return question;
};

//Show progress throughout quiz
function displayProgress(currentQuestion){
  var progress = document.querySelector(".progress");
  progress.innerHTML = `This is ${currentQuestion} of 5 questions.`
}

//Show questions and potential answers
function displayQuestion(question){
  questionDisplay.innerHTML = question.question;
  option1.innerHTML = question.option1;
  option2.innerHTML = question.option2;
  option3.innerHTML = question.option3;
  option4.innerHTML = question.option4;
}

//Check if answer is correct, add to correct answers count
function checkAnswer(e, question){
  if (e.target.innerHTML === question.correctAnswer){
    correctAnswers++;
  }
}

//Load next question
function moveToNextQuestion(currentQuestion){
  switch (currentQuestion){
    case "1":
      questionTwo();
      break;
      case "2":
      questionThree();
      break;
      case "3":
      questionFour();
      break;
      case "4":
      questionFive();
      break;
      case "5":
      showScore(correctAnswers);
      break;
    default:
  }
  
}

//Game over, reveal score
function showScore(correctAnswers){
  var score = document.getElementById("score");
  score.innerHTML = `You got ${correctAnswers} out of 5 answers correct!`;
  quiz.style.visibility = "hidden";
  gameOver.style.visibility = "visible";
  startText.innerHTML = "Play Again";
  startBtn.style.visibility = "visible";
}

//On each click, check selected option and change to next question.
$('.option').on('click', function(e){
  if (e.target.classList.contains("option")){
    
    checkAnswer(e, question);
    moveToNextQuestion(question.number);
  } else {
    console.log("answer not selected");
  }
    
});
