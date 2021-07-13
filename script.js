let questionIndex = 0;
let score = 0;

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
    button.addEventListener("click", function (event) {
      console.log(event.target.innerHTML);
      // 3rd step
      // in button event handlers check if answer is correct
      if (question.correctAnswer === event.target.innerHTML) {
        console.log("it s the correct answer !");
        // 4e step
        // if answer is correct, score++ (OK), randomIndex++
        score++;
      } else {
        // console.log("Bad news..it s wrong");
        // score = "";
      }
      document.getElementById("score").innerHTML = score;

      NextQuestion();
    });
  });

  let btn = document.getElementById("btn");

  // 5e step
  // call display question with the new randomIndex
}

// Selectionner le bouton next
// Appeler la fonction displayQuestion en oubliant d'increment
// L'index de la question avant
function NextQuestion() {
  // let next = document.querySelector(".btnNext");
  // next.addEventListener("click", function (event) {

    questionIndex += 1;
    if(questions.length <= 3) {
      displayQuestion(questions[questionIndex]);
    }else{
        end();
    }
    
  // });
}

displayQuestion(questions[questionIndex]);

//a la fin des 4 questions --> Score final: Congrats : 3/4 !

function end() {
let finalScore= document.getElementsByClassName("final-score");
finalScore.innerHTML = "";

var endh1 = document.createElement("h1");

endh1.innerHTML = "Your score is" + score;

finalScore.appendChild(endh1);
};

