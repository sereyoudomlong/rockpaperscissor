/**
 * Function that randomise computer choices
 * @returns the randomised choice
 */
function getComputerChoice() {
  choices = {
    Rock: "Rock",
    Paper: "Paper",
    Scissor: "Scissor",
  };

  var rand = Math.floor(Math.random() * Object.keys(choices).length);
  var computerChoice = choices[Object.keys(choices)[rand]];

  return computerChoice;
}

/**
 * Function take in Player and Computer choice and decide who wins
 * @param {string} playerSelection
 * @param {string} computerSelection
 */
function playRound(playerSelection, computerSelection) {}
