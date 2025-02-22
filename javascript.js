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

    // Check for valid player input
    while (true){
        humanInput = prompt("Choose rock, paper, or scissors!").toLowerCase();
        if (humanInput === 'rock' || humanInput === 'paper' || humanInput === 'scissors') {
            break;
        } else {alert("Invalid entry. Check your spelling!")};
    };

    // Return input
    return humanInput;
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
    if (humanChoice === computerChoice) {
        showTie();
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
            showHumanWin();
    } else {showComputerWin()};

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
        let finalHumanMessage = "You Win! Your score: " + humanScore + ". Computer Score: " + computerScore + ".";
        console.log(finalHumanMessage);
        alert(finalHumanMessage);
    } else {
        let finalComputerMessage = "You Lose! Your score: " + humanScore + ". Computer score: " + computerScore + ".";
        console.log(finalComputerMessage);
        alert(finalComputerMessage);
    }
}

// Play the game to "Best of 5". (Note: Ignores any tie-rounds)
alert("This is a Console-Based JavaScript Game. Play Rock-Paper-Scissors (Best of 5!)");
playGame(5);