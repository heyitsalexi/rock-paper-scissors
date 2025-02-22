// Generate a random guess for the computer
function getComputerChoice() {

    // Randomly select a number
    let choiceIndex = Math.random();

    // Based on the number, assign a choice
    if (choiceIndex > 0.66) {
        return "rock";
    } else if (choiceIndex < 0.34) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Gather player input
function getHumanChoice() {
    
    // Get input
    let humanSelection = prompt("Choose rock, paper, or scissors!");

    // Return cleaned text
    return humanSelection.toLowerCase();
}

// Determine the winner
function playRound(humanChoice, computerChoice) {

    // Initialize a winner variable
    let winner = "";

    // Capitalize text for display messages
    function capitalize (stringVal) {
        let newString = stringVal.at(0).toUpperCase() + stringVal.slice(1);
        return newString;
    }

    // Initialize win condition messages
    let humanWinMessage = "You Win! " + capitalize(humanChoice) + " beats " + capitalize(computerChoice) + ".";
    let computerWinMessage = "You Lose! " + capitalize(computerChoice) + " beats " + capitalize(humanChoice) + ".";
    let tieMessage = "Tie Game! " + capitalize(humanChoice) + " vs. " + capitalize(computerChoice) + ".";

    // Show alert messages and log winner based on win conditions
    function showHumanWin() {
        console.log(humanWinMessage);
        alert(humanWinMessage);
        winner = 'human';
    }

    function showComputerWin() {
        console.log(computerWinMessage);
        alert(computerWinMessage);
        winner = 'computer';
    }

    function showTie () {
        console.log(tieMessage);
        alert(tieMessage);
        winner = 'tie';
    }

    // Run-through win conditions
    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            showTie();
        } else if (computerChoice === 'paper') {
            showComputerWin();
        } else {
            showHumanWin();
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            showHumanWin();
        } else if (computerChoice === 'paper') {
            showTie();
        } else {
            showComputerWin();
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            showComputerWin();
        } else if (computerChoice === 'paper') {
            showHumanWin();
        } else {
            showTie();
        }  
    } else {
        alert("You did not enter a valid option.")
    }

    // Return the winner
    return(winner);
}

// Delcare function: Play Rock-Paper-Scissors based on number of rounds
function playGame(numRounds) {

    // Declare choice variables
    let humanSelection = "";
    let computerSelection = "";

    // Declare score variables
    let humanScore = 0;
    let computerScore = 0;

    // Determine win score based on number of rounds
    let winScore = Math.floor(numRounds / 2) + 1;

    // Repeat the game based on the number of rounds
    while (true) {
        
        // Get the human input
        humanSelection = getHumanChoice();

        // Randomly select the computer choice
        computerSelection = getComputerChoice();

        // Play the round and determine the winner
        let roundWinner = playRound(humanSelection, computerSelection);

        // Update the scores
        if (roundWinner === 'human') {
            humanScore++;
        } else if (roundWinner === 'computer') {
            computerScore++
        }

        // Evalaute win score to end game
        if (humanScore === winScore || computerScore === winScore) {
            break;
        }
    }

    // Declare an end of game statement
    if (humanScore === winScore) {
        console.log("You Win! Your score: " + humanScore + ". Computer Score: " + computerScore + ".");
    } else {
        console.log("You Lose! Your score: " + humanScore + ". Computer score: " + computerScore + ".");
    }
}

// Play the game to "Best of 5". (Note: Ignores any tie-rounds)
playGame(5);
