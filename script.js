let questionIndex = 0;
let score = 0;
let finalScore = 0;
// var endh1 = document.createElement("h1");

const questions = [
  {
    title: "What is the name of the manager of Central Perk?",
    choices: ["Gary", "Gunther", "Jerry", "His name is never pronounced"],
    correctAnswer: "Gunther",
  },
  {
    title: "In what year did the series Friends first start broadcasting in the Us?",
    choices: ["1990", "1998", "1994", "2002"],
    correctAnswer: "1994",
  },
  {
    title: "Which of the characters in the show has a twin sister?",
    choices: ["Phoebe", "Rachel", "Monica", "Carol"],
    correctAnswer: "Phoebe",
  },
];

function displayQuestion(question) {
  // select title div
  // insert question title in innerhtml / textContent
  
  let titleDiv = document.getElementById("question-title");
  titleDiv.innerHTML = question.title;

  // 1st step
  //select buttons
  // foreach buttons change innerHTML with choice
  let choiceButtons = document.querySelectorAll(".btn");
  choiceButtons.forEach(function (button, index) {
    button.innerHTML = question.choices[index];
    // 2nd step
    // find a way to respond to a click when button gets clicked
  });
}

function NextQuestion() {
  // let next = document.querySelector(".btnNext");
  // next.addEventListener("click", function (event) {
    questionIndex += 1;
    if(questionIndex < questions.length) {
      displayQuestion(questions[questionIndex]);
    }else{
        end();
        console.log("score!!");
    };
    console.log(questionIndex < questions.length);
};

displayQuestion(questions[0]);

//at the end of 4 questions --> final score: "Congrats : ?/4 !""

function end() {
let finalScore= document.querySelector(".display");
finalScore.remove();

let endh1 = document.createElement("h1");
endh1.innerHTML = "Your score is " + score + "/" + questions;
// return endh1;
let x = document.querySelector(".final-score");
x.appendChild(endh1);
console.log(x);
};


const buttons = document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", function (event) {
    console.log(event.target.innerHTML);
    // 3rd step
    // in button event handlers check if answer is correct
    if (questions[questionIndex].correctAnswer === event.target.innerHTML) {
      // console.log("it s the correct answer !");
      // 4e step
      // if answer is correct, score++ (OK), randomIndex++
      score++;
      document.getElementById("score").innerHTML = score;
    }
    NextQuestion();
  });
})