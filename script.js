"use strict";


let options = ["ROCK", "PAPER", "SCISSORS"];

let playerScore = 0;
let computerScore = 0;
let round = 0;

let buttons = document.querySelectorAll("button");
for (let button of buttons) {
  button.addEventListener("click", playRound);
}

function getComputerChoice() {
  return options[Math.floor(Math.random() * 3)];
}

function playRound(e) {
  let computerChoice = getComputerChoice();
  let playerChoice = e.target.value;
  let result;
  if (playerChoice === computerChoice) {
    result = "tie";
  } else if (
    (playerChoice == "ROCK" && computerChoice == "SCISSORS") ||
    (playerChoice == "SCISSORS" && computerChoice == "PAPER") ||
    (playerChoice == "PAPER" && computerChoice == "ROCK")
  ) {
    result = "playerWin";
    playerScore++;
  } else {
    result = "playerLose";
    computerScore++;
  }

  updateScore(result, playerChoice, computerChoice);
}

function updateScore(result, playerChoice, computerChoice) {
  let roundResultText;
  if (result === "playerWin") {
    roundResultText = `You win this round! ${playerChoice} beats ${computerChoice}!`;
    let playerScoreCard = document.querySelector(".playerScoreCard");
    playerScoreCard.value = playerScore;
    playerScoreCard.textContent = playerScore;
  } else if (result === "playerLose") {
    roundResultText = `You lose this round! ${playerChoice} beats ${computerChoice}!`;
    let computerScoreCard = document.querySelector(".computerScoreCard");
    computerScoreCard.value = computerScore;
    computerScoreCard.textContent = computerScore;
  } else if (result === "tie") {
    roundResultText = `Tie! Player and Computer selected ${playerChoice}!`;
  }

  let roundResult = document.querySelector(".roundResult");
  roundResult.textContent = roundResultText;
  console.log(roundResultText);
  updateRound();
}

function updateRound() {
  round++;
  if (round >= 5) endGame();
}

function endGame() {
  let buttons = document.querySelectorAll("button");
  for (let button of buttons) {
    button.disabled = true;
    button.style["background-color"] = "#F2CC8F";
  }
  let gameResultText;
  if (playerScore > computerScore) {
    gameResultText =`Game Over! You Win! Score: ${playerScore} - ${computerScore}`;
  } else if (playerScore < computerScore) {
    gameResultText = `Game Over! You lose! ${playerScore} - ${computerScore}`;
  } else {
    gameResultText = `Gamer Over! You Tied! ${playerScore} - ${computerScore}`;
  }

  let gameResult = document.querySelector(".gameResult");
  gameResult.textContent = gameResultText;
  console.log(gameResultText);
}