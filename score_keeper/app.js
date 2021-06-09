// alert('connected!')
const playerOneScore = document.querySelector("#playerOneScore");
const playerTwoScore = document.querySelector("#playerTwoScore");
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetBtn = document.querySelector("#reset");
const gameGoal = document.querySelector("#gameGoal");

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
// let winningScore = 3;

p1Button.addEventListener('click', () => {
    if(!isGameOver){
        p1Score += 1;
        if(p1Score === parseInt(gameGoal.value)){
            isGameOver = true;
            playerOneScore.classList.add('winner');
            playerTwoScore.classList.add('loser');
        }
        playerOneScore.textContent = p1Score;
    }
    
});

p2Button.addEventListener('click', () => {
    if(!isGameOver){
        p2Score += 1;
        if(p2Score === parseInt(gameGoal.value)){
            isGameOver = true;
            playerOneScore.classList.add('loser');
            playerTwoScore.classList.add('winner');
        }
        playerTwoScore.textContent = p2Score;
    }
});


gameGoal.addEventListener('change', () => {
    reset();
});

resetBtn.addEventListener('click', reset);

function reset () {
    playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    playerOneScore.classList.remove('winner', 'loser');
    playerTwoScore.classList.add('winner', 'loser');
}

