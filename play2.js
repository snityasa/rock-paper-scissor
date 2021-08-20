let player = 0;
let comp = 0;

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    let options = ["rock", "paper", "scissor"];
    // console.log(options[num]);
    return options[num];
}

function play(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return(0);
    } else if (computerSelection == "rock") {
        return(1); //computer wins
    } else if (playerSelection == "rock") {
        return(2);  //player wins
    } else if (computerSelection == "scissor") {
        return(1);
    } else {
        return(2);
    }
}

function game() {
    for (var i = 0; i<5; i++) {
        let playerSelection = (prompt("Rock, paper, scissor?")).toLowerCase();
        let computerSelection = computerPlay();

        if (play(playerSelection, computerSelection) == 1) {
            comp++;
            console.log("You lost");
        } else if (play(playerSelection, computerSelection) == 2) {
            player++;
            console.log("You won");
        } else {
            console.log("Tie");
        }
    }
}

game();
// console.log(player);
// console.log(comp);
if (comp == player) {
    console.log("tie");
} else if (comp > player) {
    console.log("you lost");
} else {
    console.log("you won");
}


