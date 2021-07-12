let questionIndex = 0;
let score = 0;

const questions = [
  {
    title: "My 1st question",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    correctAnswer: 1,
  },
  {
    title: "My 2nd question",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    correctAnswer: 3,
  },
];

function displayQuestion(question) {
  // select title div
  // insert question title in innerhtml / textContent
  let titleDiv = document.getElementById("question-title");
  titleDiv.textContent = question.title;

  // 1st step
  //select buttons
  // foreach buttons change innerHTML with choice
  let choiceButtons = document.querySelectorAll(".btn");
  choiceButtons.forEach(function (button, index) {
    button.innerHTML = question.choices[index];
    // 2nd step
    // find a way to respond to a click when button gets clicked
    button.addEventListener("click", function () {

        // ajouter une class au bouton cliqué

      // 3rd step
      // in button event handlers check if answer is correct
      if (question.correctAnswer === index) {
        console.log("it s the correct answer !");

        score++;
        
      } else {
        console.log("Bad news..it s wrong");
      }
    });
  });

  let btn = document.getElementById("btn");
  btn.addEventListener("click", function () {});

  // 4e step
  // if answer is correct, score++, randomIndex ++
  
  for (var i = 0; i < questions.length; i++) {
    if (correctAnswer === questions[i]) {
      score++;
    } else {
      console.log("you are wrong!");
    }
  }

  console.log("you succeed" + score + "/" + questions.length);

  // 5e step
  // call display question with the new randomIndex
}

displayQuestion(questions[questionIndex]);


// Selectionner le bouton next
// Appeler la fonction displayQuestion en oubliant d'increment 
// L'index de la question avant
