function computerTurn() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        randomNumber = "Rock";
        console.log("Computer: Rock");
    } else if (randomNumber === 1) {
        randomNumber = "Paper";
        console.log("Computer: Paper");
    } else {
        randomNumber = "Scissors";
        console.log("Computer: Scissors");
    }
}

function playerTurn() {
    let userPlay = prompt("Please input your choice of: Rock, paper, or scissors: ");
    userCaseInsensitive = userPlay.charAt(0).toUpperCase() + userPlay.slice(1);
    console.log("Player: " + userCaseInsensitive);
}

const playerSelection = playerTurn();
const computerSelection = computerTurn();

function rpsGame(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        console.log("It's a tie!");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You win! Paper beats Rock!");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("You lose! Rock beats paper!");
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        console.log("It's a tie!");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You win! Scissors beats Paper!");
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("You lose! Paper beats Rock!");
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        console.log("It's a tie!");
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You win! Rock beats Scissors!");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("You lose! Scissors beats Paper!")
    }
} 

rpsGame(playerSelection, computerSelection);
