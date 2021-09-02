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

function game(playerSelection) {
    let computerSelection = computerPlay();

    if (play(playerSelection, computerSelection) == 1) {
        comp++;
        alert("You lost");
    } else if (play(playerSelection, computerSelection) == 2) {
        player++;
        alert("You won");
    } else {
        alert("Tie");
    }

    updateScore(player, comp);
}

function updateScore(player, comp){
    const $score = document.querySelector('#score  p');
    $score.innerText = `Player: ${player} Computer: ${comp}`;
    if(player === 5 || comp === 5){
        if (player === 5) {
            alert("You are the champion!");
        } else {
            alert("Loser");
        }
    }
}

//game();
// console.log(player);
// console.log(comp);

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    game("rock");
    console.log("rock");
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    game("paper");
    console.log("paper");
});

const scissor = document.querySelector('#scissor');
scissor.addEventListener('click', () => {
    game("scissor");
    console.log("scissor");
});


/*
if (comp == player) {
    alert("tie");
} else if (comp > player) {
    alert("you lost");
} else {
    alert("you won");
}
*/

