function computerPlay() {
    //Select random number from 0-2
    let computerValue = Math.floor(Math.random() * 3)
    //declare variable for computer's choice
    let computerChoice;
    //If 1, set choice to "Rock"
    if (computerValue == 0){
        computerChoice = "Rock";
    }
    //else if 2, set choice to "Paper"
    else if (computerValue == 1){
        computerChoice = "Paper";
    }
    //else, set choice to "Scissors"
    else {
        computerChoice = "Scissors";
    }
    console.log(computerChoice);
    return computerChoice;
}