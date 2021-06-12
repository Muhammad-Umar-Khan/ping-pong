const p1 = {
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
    score: 0
};

const p2 = {
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
    score: 0
};


const resetButton = document.querySelector('#reset');
const winningScoreSlect = document.querySelector('#playto');

let winningScore = 3;

let isGameOver = false;

const updateScores = (player, opponent) =>{
    if (player.score === winningScore) {
        isGameOver = true;
        player.display.classList.add('winner');
        opponent.display.classList.add('loser');
    }
    player.display.textContent = player.score;

}

p1.button.addEventListener('click', () => {
    if (!isGameOver) {
        p1.score += 1;
    }
   updateScores(p1, p2)
})


p2.button.addEventListener('click', () => {
    if (!isGameOver) {
        p2.score += 1;
    }
    updateScores(p2, p1);
})

winningScoreSlect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click',reset)

function reset() {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.classList.remove('winner', 'loser');
    p2.display.classList.remove('winner', 'loser');
    p1.display.textContent = 0;
    p2.display.textContent = 0;
}