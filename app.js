const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const containerCards = document.querySelectorAll(".container__card");

let computerChoice;
let userChoice;
let result;

for (let i = 0; i < containerCards.length; i++) {
  containerCards[
    containerCards.length - i - 1
  ].style = `transform: rotate(calc(${i} * 5deg))`;
}

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "its a draw";
    resultDisplay.style.color = "grey";
  }
  if (computerChoice == "rock" && userChoice == "paper") {
    result = "you win!";
    resultDisplay.style.color = "green";
  }
  if (computerChoice == "rock" && userChoice == "scissors") {
    result = "you lost!";
    resultDisplay.style.color = "red";
  }
  if (computerChoice == "paper" && userChoice == "rock") {
    result = "you lost!";
    resultDisplay.style.color = "red";
  }
  if (computerChoice == "paper" && userChoice == "scissors") {
    result = "you win!";
    resultDisplay.style.color = "green";
  }
  if (computerChoice == "scissors" && userChoice == "rock") {
    result = "you win!";
    resultDisplay.style.color = "green";
  }
  if (computerChoice == "scissors" && userChoice == "paper") {
    result = "you lost!";
    resultDisplay.style.color = "red";
  }
  resultDisplay.innerHTML = result;
}
