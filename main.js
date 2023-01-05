

let computerSelection = getComputerSelection();
let playerSelection = "Rock"
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
    toLowerCase();

  if (playerSelection === computerSelection){
    return "Draw!"
  }
  if (rules[playerSelection].losesTo.includes(computerSelection)) {
    return `You Lost! ${computerSelection} beats ${playerSelection}`;
} else {
  return `You Win ${playerSelection} beats ${computerSelection}`;

}
}

console.log(playRound("rock", "scissors")); // You Win! Rock beats Scissors
console.log(playRound("lizard", "rock")); // You Lose! Rock beats Lizard
console.log(playRound("spock", "paper")); // You Lose! Paper beats Spock
console.log(playRound("scissors", "scissors")); // Draw!
