let questionIndex = 0;
let score = 0;
let total = 2;

const questions = [
  {
    title: "What is the name of the manager of Central Perk?",
    choices: ["A) Gary", "B) Gunther", "C) Jerry", "His name is never pronounced"],
    correctAnswer: 1,
  },
  {
    title: "In what year did the series Friends first start broadcasting in the Us?",
    choices: ["1990", "1998", "1994", "2002"],
    correctAnswer: 2,
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
      // 3rd step
      // in button event handlers check if answer is correct
      if (question.correctAnswer === index) {
        console.log("it s the correct answer !");
        // 4e step
        // if answer is correct, score++ (OK), randomIndex++
        score++;
      } else {
        // console.log("Bad news..it s wrong");
        // score = "";
      }
      document.getElementById("score").innerHTML = score;
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
  let next = document.querySelector(".btnNext");
  next.addEventListener("click", function (event) {
    questionIndex += 1;
    displayQuestion(questions[questionIndex]);
  });
}
NextQuestion();

displayQuestion(questions[questionIndex]);

//Accumuler les scores de la Quest1 --> Quest2