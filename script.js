let options = ["rock", "paper", "scissors"];

playGame();

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;
    let playerSelection;
    let computerSelection;

    while (round < 5) {
        while (!options.includes(playerSelection)) {
            playerSelection = getPlayerChoice().trim().toLowerCase();
        }

        computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        playerSelection = "";
        round++;
    }

    if (playerScore > computerScore)
        alert(`Game Over! You Win! Score: ${playerScore} - ${computerScore}`)
    else if (playerScore < computerScore)
        alert(`Game Over! You lose! ${playerScore} - ${computerScore}`)
    else
        alert (`Gamer Over! You Tied! ${playerScore} - ${computerScore}`)


    function playRound(playerChoice, computerChoice) {

        if (playerChoice === computerChoice) {
            alert(`Tie you both selected ${playerChoice}`);
        }
        else if (playerChoice == "rock" && computerChoice == "scissors") {
            if (computerChoice == "scissors") {
                playerScore++;
                alert(`You win this round! Rock beats scissors!`);
            }
            else {
                computerScore++;
                alert(`You lose this round! Paper beats rock`);
            }
        }
        else if (playerChoice == "scissors") {
            if (computerChoice == "paper") {
                playerScore++;
                alert(`You win this round! Scissors beats Paper!`);
            }
            else {
                computerScore++
                alert(`You lose this round! Rock beats Scissors`);
            }
        }
        else if (playerChoice == "paper") {
            if (computerChoice == "rock") {
                playerScore++;
                alert(`You win this round! Paper beats rock!`);
            }
            else {
                computerScore++;
                alert(`You lose this round! Scissors beats paper`);
            }
        }
    }

    function getComputerChoice() {
        return options[Math.floor(Math.random() * 3)]; // Select one of the options from options based on random 0-2 number
    }

    function getPlayerChoice() {
        return prompt("Please enter rock, paper, or scissors.");
    }
}