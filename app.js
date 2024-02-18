const score1 = document.querySelector('#score-1');
const score2 = document.querySelector('#score-2');
const dropdown = document.querySelector('#turn-count');
const player1Btn = document.querySelector('#player1-btn');
const player2Btn = document.querySelector('#player2-btn');
const resetBtn = document.querySelector('#reset');

let turnCount = Number(dropdown.value);

player1Btn.addEventListener('click', function() {
    if ((Number(score1.innerText)) < turnCount && (Number(score2.innerText)) < turnCount){
        score1.innerText = Number(score1.innerText) + 1;
    }
    if ((Number(score1.innerText) + 1) == turnCount && (Number(score2.innerText)) < turnCount){
        score1.innerText = Number(score1.innerText) + 1;
        score1.className = 'text-success';
        score2.className = 'text-danger';
    }
    
})

player2Btn.addEventListener('click', function() {
    if ((Number(score2.innerText)) < turnCount && (Number(score1.innerText)) < turnCount){
        score2.innerText = Number(score2.innerText) + 1;
    }
    if ((Number(score2.innerText) + 1) == turnCount && (Number(score1.innerText)) < turnCount){
        score2.innerText = Number(score2.innerText) + 1;
        score2.className = 'text-success';
        score1.className = 'text-danger';
    }
})

resetBtn.addEventListener('click', function() {
    score1.innerText = 0;
    score2.innerText = 0;
    score1.className = "";
    score2.className = "";
})

dropdown.addEventListener('change', function() {
    turnCount = Number(dropdown.value);
    score1.innerText = 0;
    score2.innerText = 0;
    score1.className = "";
    score2.className = "";
})