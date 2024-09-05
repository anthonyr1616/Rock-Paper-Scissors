let options = ["ROCK", "PAPER", "SCISSORS"];

playGame();

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
        }
        else if (roundResult == "win") {
            playerScore++;
            alert(`You win this round! ${playerSelection} beats ${computerSelection}!`);
        }
        else if (roundResult == "lose") {
            computerScore++;
            alert(`You lose this round! ${computerSelection} beats ${playerSelection}!`);
        }

        playerSelection = "";
        round++;
    }

    if (playerScore > computerScore)
        alert(`Game Over! You Win! Score: ${playerScore} - ${computerScore}`)
    else if (playerScore < computerScore)
        alert(`Game Over! You lose! ${playerScore} - ${computerScore}`)
    else
        alert(`Gamer Over! You Tied! ${playerScore} - ${computerScore}`)


    function playRound(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "tie";
        }
        else if (playerChoice == "ROCK" && computerChoice == "SCISSORS" ||
            playerChoice == "SCISSORS" && computerChoice == "PAPER" ||
            playerChoice == "PAPER" && computerChoice == "ROCK") {
            return "win";
        }
        else
            return "lose";
    }

    function getComputerChoice() {
        return options[Math.floor(Math.random() * 3)];
    }

    function getPlayerChoice() {
        return prompt("Please enter ROCK, PAPER, or SCISSORS.");
    }
}