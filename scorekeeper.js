var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span"); //p span selecting span within our paragraphs
var p = document.querySelector("p");
var p1Score = 0;
var p2Score = 0;
var gameOver = false; //starts as false because gameOver is not true at beginning of game 
var winningScore = 5; //when someone gets to 5 gameOver should now be true, that's means we can no longer update the score
//hitting reset will make gameOver false again, starting everything over
p1Button.addEventListener("click", function(){
    if (!gameOver) /*if !gameOver has not been reached yet, then you can add to the score*/ {
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add("winner");//adds green color to winner
            gameOver = true; //When gameOver = true, cannot add more to the score
        }
        p1Display.textContent = p1Score;
    }
    
});

p2Button.addEventListener("click", function(){
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");//adds green color to winner
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
    
});

resetButton.addEventListener("click", function(){
  reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function(){
 winningScoreDisplay.textContent = this.value;
 winningScore = Number(this.value);
 reset();
});

