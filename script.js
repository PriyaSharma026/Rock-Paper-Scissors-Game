function getComputerChoice() {
    // Get computer choice and store in variable
    const randomValue = Math.floor(Math.random() * 3);

    // return rock, paper, or scissors based on randomValue
    if (randomValue === 0) return "rock";
    else if (randomValue === 1) return "paper";
    else return "scissors";
}

// getHumanChoice function that returns human choice
function getHumanChoice() {
    // Get User input and store in variable 
    const userInput = prompt("What's your choice - Rock, Paper or Scissors?")
    
    // Return userInput
    return userInput;
}

// Create variables to store humanScore and computerScore with initial value 0
let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You Win! Rock beats scissors")
        humanScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log("You Lose! Paper beats Rock");
        computerScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log("You Lose! Rock beats Scissors");
        computerScore++
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log("You Win! Scissors beats Paper")
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You Win! Paper beats Rock');
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log("You Lose! Scissors beats Paper");
        computerScore++;
    } else {
        console.log("OhhNoo! It's a draw")
    }
}

playRound(humanSelection, computerSelection);