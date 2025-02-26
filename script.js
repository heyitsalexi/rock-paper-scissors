const btnContainer = document.querySelector("#button-container");
const buttons = document.querySelectorAll("button");
const resultsContainer = document.querySelector("#results-container");
const currentResultText = document.createElement("p");
const totalResultText = document.createElement("p");
const winnerText = document.createElement("p");

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
        currentResultText.textContent = "Tie Game! " +
            `${capitalize(humanChoice)} vs. ` +
            `${capitalize(computerChoice)}.`;
        roundWinner = "tie";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
            currentResultText.textContent = "You Win! " + 
                `${capitalize(humanChoice)} beats ` +
                `${capitalize(computerChoice)}.`;
            roundWinner = "human";
    } else {
        currentResultText.textContent = "You Lose! " + 
            `${capitalize(computerChoice)} beats ` +
            `${capitalize(humanChoice)}.`;
        roundWinner = "computer";
    };

    resultsContainer.appendChild(currentResultText);
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

        totalResultText.textContent = `You: ${humanScore} 
        Computer: ${computerScore}
        Round: ${roundNumber}`;
        resultsContainer.appendChild(totalResultText);

        if (humanScore === 5 || computerScore == 5) {
            endGame(humanScore);
        }
    }
}

function endGame(humanScore) {
    humanScore === 5 ? winnerText.textContent = "End of Game! You Win!" : 
        winnerText.textContent = "End of Game! You Lose!";

    resultsContainer.removeChild(currentResultText);
    resultsContainer.removeChild(totalResultText);

    buttons.forEach((button) => {
        btnContainer.removeChild(button);
    });

    resultsContainer.appendChild(winnerText);
    
}

playGame()