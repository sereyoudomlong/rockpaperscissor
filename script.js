var playerScore = 0;
var computerScore = 0;

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
    const resultDiv = document.querySelector("#result");
    resultDiv.textContent = `Draw`;
  }

  if (
    whatBeats[playerSelection.toLowerCase()] == computerSelection.toLowerCase()
  ) {
    const resultDiv = document.querySelector("#result");
    resultDiv.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  }

  if (
    whatBeats[computerSelection.toLowerCase()] == playerSelection.toLowerCase()
  ) {
    const resultDiv = document.querySelector("#result");
    resultDiv.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }

  const resultDiv = document.querySelector("#score");
  resultDiv.innerHTML = `Player score: ${playerScore}<br>Computer Score: ${computerScore}`;

  if (playerScore == 5) {
    const resultDiv = document.querySelector("#result");
    resultDiv.textContent = `Congratulation!!! You have won 5 times against the computer!!`;
    playerScore = 0;
    computerScore = 0;
  }

  if (computerScore == 5) {
    const resultDiv = document.querySelector("#result");
    resultDiv.textContent = `Wow you suck balls!! losing to a computer, sad life :(`;
    playerScore = 0;
    computerScore = 0;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const btns = document.querySelectorAll(".btn");
  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      console.log(playRound(btn.id, getComputerChoice()));
    });
  });
});

//playGame();
