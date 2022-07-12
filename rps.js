let winCounter = 0;
let loseCounter = 0;
let drawCounter = 0;

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

//gameplay loop
function game() {
    for (let i = 0; i <5; i++) {
        let playerSelection = prompt("Enter your selection!");
        const computerSelection = computerPlay();
        let results;
        //remove case sensitivity
        playerSelection = playerSelection.toLowerCase();
        //check if answer is valid
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors"){
            results = playRound(playerSelection, computerSelection);
            //W-L counter
            if (results === "win") {
                winCounter ++;
                alert("Win! You chose " + playerSelection + " and the computer chose " + computerSelection + ". The score is " + winCounter + " to " + loseCounter + ".")
            } else if (results === "lose") {
                loseCounter ++;
                alert("Lose! You chose " + playerSelection + " and the computer chose " + computerSelection + ". The score is " + winCounter + " to " + loseCounter + ".")
            } else if (results === "draw") {
                drawCounter ++;
                alert ("Draw! You both chose " + playerSelection + ". Try again!");
                i--;
            }
        }
        else {
            alert('Invalid Entry! please enter "Rock", "Paper", or "Scissors" without any spaces or extra characters!');
            i--;
        }
    }
    //Display results on HTML
    document.getElementById("result").style.color = "white";
    if (winCounter > loseCounter) {
        document.getElementById("result").innerHTML = ("The final score was " + winCounter + " to " + loseCounter + " with " + drawCounter + " draws. You win!");
        document.getElementById("result").style.background = "green"; 
    } else if (winCounter < loseCounter) {
        document.getElementById("result").innerHTML = ("The final score was " + winCounter + " to " + loseCounter + " with " + drawCounter + " draws. You lose!");
        document.getElementById("result").style.background = "red";
    } 
}