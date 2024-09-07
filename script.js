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
    let playerScoreCard = document.querySelector(".playerScoreArea p");
    playerScoreCard.value = playerScore;
    playerScoreCard.textContent = playerScore;
  } else if (result === "playerLose") {
    roundResultText = `You lose this round! ${playerChoice} beats ${computerChoice}!`;
    let computerScoreCard = document.querySelector(".computerScoreArea p");
    computerScoreCard.value = computerScore;
    computerScoreCard.textContent = computerScore;
  } else if (result === "tie") {
    roundResultText = `Tie! Player and Computer selected ${playerChoice}!`;
  }

  let roundResult = document.querySelector(".roundResult");
  roundResult.textContent = roundResultText;
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
  }
}

/*
//playGame();
function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let round = 0;
  let playerSelection;
  let computerSelection;

  while (round < 5) {
    while (!options.includes(playerSelection)) {
      playerSelection = getPlayerChoice();
      if (playerSelection)
        playerSelection = playerSelection.trim().toUpperCase();
    }

    computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    if (roundResult == "tie") {
      alert(`You tied this round!`);
    } else if (roundResult == "win") {
      playerScore++;
      alert(
        `You win this round! ${playerSelection} beats ${computerSelection}!`
      );
    } else if (roundResult == "lose") {
      computerScore++;
      alert(
        `You lose this round! ${computerSelection} beats ${playerSelection}!`
      );
    }

    playerSelection = "";
    round++;
  }

  if (playerScore > computerScore)
    alert(`Game Over! You Win! Score: ${playerScore} - ${computerScore}`);
  else if (playerScore < computerScore)
    alert(`Game Over! You lose! ${playerScore} - ${computerScore}`);
  else alert(`Gamer Over! You Tied! ${playerScore} - ${computerScore}`);
} */
