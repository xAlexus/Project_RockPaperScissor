
let playerScore = 0;
let computerScore = 0;

let rules = {
    rock: { losesTo: ["paper", "spock"] },
    paper: { losesTo: ["scissors", "lizard"] },
    scissors: { losesTo: ["rock", "spock"] },
    spock: { losesTo: ["paper", "lizard"] },
    lizard: { losesTo: ["rock", "scissors"] }
};

//Generates a ComputerChoice
function getComputerSelection() {
    const selection = ['Rock', 'Paper', 'Scissor', 'Spock', 'Lizard'];
    const randomIndex = Math.floor(Math.random() * selection.length);
    return selection[randomIndex];
}
//Changes User Input and Computer Choice to lower case to prevent collisions with Notation
function toLowerCase() {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
}


function playRound(playerSelection, computerSelection) {
  // Make copies of the arguments in lowercase
  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();

  if (player === computer){
    return "Draw!"
  }
  if (rules[player].losesTo.includes(computer)) {
    return `You Lost! ${computer} beats ${player}`;
  } else {
    return `You Win ${player} beats ${computer}`;
  }
}

function game() {
  let playerSelection = prompt("Rock, Paper, Scissors, Spock, or Lizard?");

  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerSelection();

    // Play a round and get the result
    let result = playRound(playerSelection, computerSelection);
    console.log(result);

    // Update scores based on result
    if (result.includes("Win")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }
  }

  // Announce the winner
  if (playerScore > computerScore) {
    console.log(`You won! ${playerScore} to ${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`You lost. ${computerScore} to ${playerScore}`);
  } else {
    console.log("It was a tie!");
  }
}


console.log(playRound("rock", "scissors")); // You Win! Rock beats Scissors
console.log(playRound("lizard", "rock")); // You Lose! Rock beats Lizard
console.log(playRound("spock", "paper")); // You Lose! Paper beats Spock
console.log(playRound("scissors", "scissors")); // Draw!
