/**
 * Function that randomise computer choices
 * @returns the randomised choice
 */
function getComputerChoice() {
  choices = ["Rock", "Scissor", "Paper"];

  var rand = Math.floor(Math.random() * choices.length);
  var computerChoice = choices[rand];

  return computerChoice;
}

/**
 * Function take in Player and Computer choice and decide who wins
 * @param {string} playerSelection
 * @param {string} computerSelection
 */
function playRound(playerSelection, computerSelection) {
  whatBeats = {
    scissor: "rock",
    rock: "paper",
    paper: "scissor",
  };

  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return "Draw";
  }

  if (
    whatBeats[playerSelection.toLowerCase()] == computerSelection.toLowerCase()
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }

  if (
    whatBeats[computerSelection.toLowerCase()] == playerSelection.toLowerCase()
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
