let Wins = 0;
let Losses = 0;

function computersMove() 
{
    let RI = Math.floor(Math.random()*3)
    if(RI === 0) {
    return "Rock";
    }
    if(RI === 1) {
    return "Scissors";
    }
    if(RI === 2) {
    return "Paper";
    }
}

function updateScore(result) {
    if (result === "won") {
        Wins = Wins +1;
        document.getElementById("Wins").innerHTML = Wins;
    }
    if (result === "lost") {
        Losses = Losses +1;
        document.getElementById("Losses").innerHTML = Losses;
    }
}
function onClickRock() {

//Draw
let cm = computersMove();
if (cm === "Rock") {
alert("Draw!, The computer chose " +cm)
    }
//Lose
if (cm === "Paper") {
    updateScore("lost")
alert("You lost!, The computer chose " +cm)
    }
//Win
    if (cm === "Scissors") {
    updateScore("won")
    alert("You Win!, The computer chose " +cm)
    }
}

function onClickscissors(){

//Lose
let cm = computersMove();
    if (cm === "Rock") {
    updateScore("lost")
    alert("You lose!, The computer chose " +cm)
    }
//Win
    if (cm === "Paper") {
        updateScore("won")
        alert("You Win!, The computer chose " +cm)
    }
//Win
if (cm === "Scissors") {
    alert("Draw!, The computer chose " +cm)
    }
}


function onClickPaper() {
//Lose
    let cm = computersMove();
if (cm === "Scissors") {
    updateScore("lost")
    alert("You lose!, The computer chose " +cm)
    }
//Draw
    if (cm === "Paper") {
    alert("Draw!, The computer chose " +cm)
    }
//Win
    if (cm === "Rock") {
    updateScore("won")
    alert("You Win!, The computer chose " +cm)
    }
}
document.getElementById("Rock").onclick = onClickRock;
document.getElementById("Paper").onclick = onClickPaper;
document.getElementById("Scissors").onclick = onClickscissors;
