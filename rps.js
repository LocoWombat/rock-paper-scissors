function computerTurn() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        randomNumber = "Rock";
        console.log("Rock");
    } else if (randomNumber === 1) {
        randomNumber = "Paper";
        console.log("Paper");
    } else {
        randomNumber = "Scissors";
        console.log("Scissors");
    }
}

function playerTurn() {
    let userPlay = prompt("Please input your choice of: Rock, paper, or scissors: ");
    userPlayFL = userPlay.charAt(0).toUpperCase();
    userPlayR = userPlayFL + userPlay.slice(1).toLowerCase();
    console.log(userPlayR);
}


function rps(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === 0) {
        console.log("It's a tie!");
    } else if (playerSelection === "Paper" && computerSelection === 0) {
        console.log("You win! Paper beats Rock!");
    } else if (playerSelection === "Scissors" && computerSelection === 0) {
        console.log("You lose! Rock beats paper!");
    } else if (playerSelection === "Paper" && computerSelection === 1) {
        console.log("It's a tie!");
    } else if (playerSelection === "Scissors" && computerSelection === 1) {
        console.log("You win! Scissors beats Paper!");
    } else if (playerSelection === "Rock" && computerSelection === 1) {
        console.log("You lose! Paper beats Rock!");
    } else if (playerSelection === "Scissors" && computerSelection === 2) {
        console.log("It's a tie!");
    } else if (playerSelection === "Rock" && computerSelection === 2) {
        console.log("You win! Rock beats Scissors!");
    } else if (playerSelection === "Paper" && computerSelection === 2) {
        console.log("You lose! Scissors beats Paper!")
    }
} 

rps(playerSelection, computerSelection);
