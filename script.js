let player1 = document.getElementById("p1");
let player2 = document.getElementById("p2");
let resetButton = document.getElementById("reset");
let p1Result = document.getElementById("p1Result");
let p2Result = document.getElementById("p2Result");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let scoreToWin = 5;
let scoreToWinResult = document.querySelector("p")
let numInput = document.querySelector("input");

player1.addEventListener("click", addScoreAfterClickP1); 

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