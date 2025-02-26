const btnContainer = document.querySelector("#button-container");
const buttons = document.querySelectorAll("button");
const resultsContainer = document.querySelector("#results-container");
const result = document.createElement("div");
const currentRound = document.createElement("div");

function getComputerChoice() {
    let choiceIndex = Math.random();
    if (choiceIndex > 0.66) {
        return "rock";
    } else if (choiceIndex < 0.34) {
        return "paper";
    } else {
        return "scissors";
    };
}

function capitalize (stringVal) {
    return stringVal.at(0).toUpperCase() + stringVal.slice(1);
}

function playRound(humanChoice) {

    let computerChoice = getComputerChoice();
    let roundWinner = "";

    if (humanChoice === computerChoice) {
        currentRound.textContent = "Tie Game! " +
                    `${capitalize(humanChoice)} vs. ` +
                    `${capitalize(computerChoice)}.`;
        roundWinner = "tie";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
            currentRound.textContent = "You Win! " + 
                        `${capitalize(humanChoice)} beats ` +
                        `${capitalize(computerChoice)}.`;
            roundWinner = "human";
    } else {
        currentRound.textContent = "You Lose! " + 
                    `${capitalize(computerChoice)} beats ` +
                    `${capitalize(humanChoice)}.`;
        roundWinner = "computer";
    };

    resultsContainer.appendChild(currentRound);
    return roundWinner;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let roundNumber = 0;

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let roundWinner = playRound(button.id);
            updateScore(roundWinner);
        });
    });

    function updateScore(roundWinner) {
        if (roundWinner === "human") {
            humanScore++;
        } else if (roundWinner === "computer") {
            computerScore++;
        }
    
        roundNumber++;

        result.textContent = `You: ${humanScore} 
        Computer: ${computerScore}
        Round: ${roundNumber}`;
        resultsContainer.appendChild(result);

        if (humanScore === 5 || computerScore == 5) {
            endGame(humanScore);
        }
    }
}

function endGame(humanScore) {
    const winnerText = document.createElement("div");

    humanScore === 5 ? winnerText.textContent = "End of Game! You Win!" : 
        winnerText.textContent = "End of Game! You Lose!";

    resultsContainer.removeChild(result);
    resultsContainer.removeChild(currentRound);

    buttons.forEach((button) => {
        btnContainer.removeChild(button);
    });

    resultsContainer.appendChild(winnerText);
    
}

playGame()

