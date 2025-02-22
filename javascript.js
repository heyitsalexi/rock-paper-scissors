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
        } else {
            alert("Invalid entry. Check your spelling!")
        };
    };

    // Return input
    return humanInput;
}

// Declare function: Play Rock-Paper-Scissors based on number of rounds
function playGame(numRounds) {

    // Initialize choice variables
    let humanSelection = "";
    let computerSelection = "";

    // Initialize score variables
    let humanScore = 0;
    let computerScore = 0;

    // Repeat the game based on the number of rounds
    for (let i = 0; i < numRounds; i++) {
        
        // Initialize the values
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        // Play the round and determine the winner
        playRound(humanSelection, computerSelection);

        // Determine the winner
        function playRound(humanChoice, computerChoice) {

            // Capitalize text for display messages
            function capitalize (stringVal) {
                return stringVal.at(0).toUpperCase() + stringVal.slice(1);
            }

            // Run-through win conditions
            if (humanChoice === computerChoice) {
                console.log(`Tie Game! ${capitalize(humanChoice)} vs. ${capitalize(computerChoice)}.`);
            } else if (
                (humanChoice === 'rock' && computerChoice === 'scissors') ||
                (humanChoice === 'paper' && computerChoice === 'rock') ||
                (humanChoice === 'scissors' && computerChoice === 'paper')) {
                    console.log(`You Win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`);
                    humanScore++;
            } else {
                console.log(`You Lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`);
                computerScore++;
            };
        }     
    }

    // Declare an end of game statement
    if (humanScore > computerScore) {
        console.log(`You Win! You: ${humanScore}. Computer: ${computerScore}.`);
    } else if (humanScore < computerScore) {
        console.log(`You Lose! You: ${humanScore}. Computer: ${computerScore}.`);
    } else {
        console.log(`Tie Game! You: ${humanScore}. Computer: ${computerScore}.`);
    }
}

// Play 5 rounds
playGame(5);