console.log("Ready to play?")

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        randomNumber = "Rock";
        return randomNumber;
    } else if (randomNumber === 1) {
        randomNumber = "Paper";
        return randomNumber;
    } else if (randomNumber === 2) {
        randomNumber = "Scissors";
        return randomNumber;
    }
}


function playerPlay() {
    let userTurn = prompt("Please input your choice of: Rock, Paper, or Scissors: ")
    userTurn = userTurn.charAt(0).toUpperCase() + userTurn.slice(1);
    return userTurn;
}

/* Different solution attempt
function oneGame() {
    let result = ''
    const playerSelection = console.log(playerPlay());
    const computerSelection = console.log(computerPlay());

    if (playerSelection === "Rock" && computerSelection == "Rock") {
        result = "It's a tie!";
        return result;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result = "Player wins! Rock beats Scissors.";
        return result;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        result = "Computer wins! Paper beats Rock.";
        return result;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        result = "Computer wins! Scissors beats Paper.";
        return result;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result = "Player wins! Paper beats Rock.";
        return result;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        result = "Player wins! Scissors beats Paper.";
        return result;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        result = "Computer wins! Rock beats Scissors.";
        return result;
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        result = "It's a tie!";
        return result;
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        result = "It's a tie!";
        return result;
    }
}
*/

const playerSelection = playerPlay();
const computerSelection = computerPlay();

function oneGame(playerSelection, computerSelection) {
    let result = ''
    let playerPoints = 0
    let computerPoints = 0
    if (playerSelection === "Rock" && computerSelection == "Rock") {
        console.log("Player chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);
        result = "It's a tie!"
        return result;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerPoints++
        console.log("Player chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);
        result = "Player wins! Rock beats Scissors."
        console.log("Player points: " + playerPoints);
        console.log("Computer points: " + computerPoints);
        return result;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerPoints++
        console.log("Player chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);
        result = "Computer wins! Paper beats Rock."
        console.log("Player points: " + playerPoints);
        console.log("Computer points: " + computerPoints);
        return result;
        break;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerPoints++
        console.log("Player chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);
        result = "Computer wins! Scissors beats Paper."
        console.log("Player points: " + playerPoints);
        console.log("Computer points: " + computerPoints);
        return result;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerPoints++
        console.log("Player chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);
        result = "Player wins! Paper beats Rock."
        console.log("Player points: " + playerPoints);
        console.log("Computer points: " + computerPoints);
        return result;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerPoints++
        console.log("Player chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);
        result = "Player wins! Scissors beats Paper."
        console.log("Player points: " + playerPoints);
        console.log("Computer points: " + computerPoints);
        return result;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerPoints++
        console.log("Player chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);
        result = "Computer wins! Rock beats Scissors."
        console.log("Player points: " + playerPoints);
        console.log("Computer points: " + computerPoints);
        return result;
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        console.log("Player chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);
        result = "It's a tie!"
        return result;
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        console.log("Player chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);
        result = "It's a tie!"
        return result;
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(oneGame(playerSelection, computerSelection));
    }
}

console.log(game());


