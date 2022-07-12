function computerPlay() {
    //Select random number from 0-2
    let computerValue = Math.floor(Math.random() * 3)
    //declare variable for computer's choice
    let computerChoice;
    //If 1, set choice to "Rock"
    if (computerValue == 0){
        computerChoice = "rock";
    }
    //else if 2, set choice to "Paper"
    else if (computerValue == 1){
        computerChoice = "paper";
    }
    //else, set choice to "Scissors"
    else {
        computerChoice = "scissors";
    }
    console.log(computerChoice);
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    //remove case sensitivity
    playerSelection = playerSelection.toLowerCase();
    //declare result variable
    let result;
    //if player selects rock, compare to rock, paper, and scissors
    if (playerSelection === "rock") {
        //if computer selects rock, its a draw
        if (computerSelection === "rock") {
            result = "draw";
        }
        //if computer selects paper, the player loses
        else if (computerSelection === "paper") {
            result = "lose";
        }
        //if computer selects scissors, the player wins
        else if (computerSelection === "scissors") {
            result = "win";
        }
    }
    //if player selects paper, compare
    if (playerSelection === "paper") {
        //if computer selects rock, player wins
        if (computerSelection === "rock") {
            result = "win";
        }
        //if computer selects paper, its a draw
        else if (computerSelection === "paper") {
            result = "draw";
        }
        //if computer selects scissors, player loses
        else if (computerSelection === "scissors") {
            result = "lose";
        }
    }
    //if player selects scissors, compare
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = "lose";
        } else if (computerSelection === "paper") {
            result = "win";
        } else if (computerSelection === "scissors") {
            result = "draw";
        }
    }

    console.log(result);
    return result;
}

//test round
const playerSelection = prompt();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));