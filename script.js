`use strict`;

let player1 = document.getElementById("p1");
let player2 = document.getElementById("p2");
let resetButton = document.getElementById("reset");
let p1Result = document.getElementById("p1Result");
let p2Result = document.getElementById("p2Result");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let scoreToWin = 5;
let scoreToWinResult = document.querySelector("p span")
let ChangeNumberToWin = document.querySelector("input");



function addScoreAfterClickP1() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === scoreToWin) {
            p1Result.classList.add("winner");
            gameOver = true;
        }
        p1Result.textContent = p1Score;
    }
    p1Result.textContent = p1Score;
}

player1.addEventListener("click", addScoreAfterClickP1);

function addScoreAfterClickP2() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === scoreToWin) {
            p2Result.classList.add("winner");
            gameOver = true;
        }
    }

    p2Result.textContent = p2Score;
}

player2.addEventListener("click", addScoreAfterClickP2)

ChangeNumberToWin.addEventListener("change",changeScore)

function changeScore() {
    scoreToWinResult.textContent = this.value;
    scoreToWin = Number(this.value);
};

function restart () {
    reset();
}

resetButton.addEventListener("click", restart)

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Result.textContent = 0;
    p2Result.textContent = 0;
    p1Result.classList.remove("winner");
    p2Result.classList.remove("winner");
    gameOver = false;
    ChangeNumberToWin(); 
}