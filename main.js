let playerScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById(".score-board");
const result_div = document.getElementById(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");

let rules = {
  rock: { losesTo: ["paper", "spock"] },
  paper: { losesTo: ["scissors", "lizard"] },
  scissors: { losesTo: ["rock", "spock"] },
  spock: { losesTo: ["paper", "lizard"] },
  lizard: { losesTo: ["rock", "scissors"] },
};

function main() {
  rock_div.addEventListener("click", function () {
    game("rock");
  });
  paper_div.addEventListener("click", function () {
    game("Paper");
  });
  scissor_div.addEventListener("click", function () {
    game("Scissor");
  });
  lizard_div.addEventListener("click", function () {
    game("Lizard");
  });
  spock_div.addEventListener("click", function () {
    game("Spock");
  });
}
main();

//Generates a ComputerChoice
function getComputerSelection() {
  const selection = ["Rock", "Paper", "Scissor", "Spock", "Lizard"];
  const randomIndex = Math.floor(Math.random() * selection.length);
  return selection[randomIndex];
}
//Changes User Input and Computer Choice to lower case to prevent collisions with Notation
function toLowerCase() {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
}
function win() {
  console.log("You won")
}
function loose() {
  console.log("You loose")
}

function game(playerSelection) {
  // Make copies of the arguments in lowercase
  let player = playerSelection.toLowerCase();
  let computer = computerSelection.getComputerSelection().toLowerCase()

  if (player === computer) {
    return "Draw!";
  }
  if (rules[player].losesTo.includes(computer)) {
    lose();
  } else {
    win();
  }
}

