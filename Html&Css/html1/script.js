'use strict'


//selecting the element for the score of player--
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

//selecting the element for the dice roll
const diceEl = document.querySelector('.dice');

//selecting the element for the currentscore--
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');

//selecting the element for the playeractive--
const playeractive0El = document.querySelector('.player--0');
const playeractive1El = document.querySelector('.player--1');

//selecting the element for the button---
const btnrollEl = document.querySelector('.btn--roll');
const btnholdEl = document.querySelector('.btn--hold');
const btnnewEl = document.querySelector('.btn--new');

//declaring the value
let score , currentScore, activePlayer, playing;

//init function
const init = function(){
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;
    
    diceEl.classList.add('hidden');
    playeractive0El.classList.remove('player--winner');
    playeractive1El.classList.remove('player--winner');
    playeractive0El.classList.add('player--active');
    playeractive1El.classList.remove('player--active');
};
init();//returing the value 

// switch player function
const switchplayer = function (){
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playeractive0El.classList.toggle('player--active');
    playeractive1El.classList.toggle('player--active');
};

// Dice rolling event
btnrollEl.addEventListener('click', function() {
    
    //generating the random dice roll
    if(playing){
        const dice = Math.trunc(Math.random()*6) + 1;
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
    
    //storing the currentScore    
        if(dice !== 1){
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        }else{
            switchplayer();
        }
    }
});

//holdBtn event
btnholdEl.addEventListener('click', function() {
    
    //adding the score according the players
    if(playing){
        score[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer];
     
    //for the check winners
        if(score[activePlayer] >= 100){
            playing = false; 
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--winner');
            
            //for the switchplayer
            switchplayer();
        }
    }
});

//new-gamesBtn event
btnnewEl.addEventListener('click', init);









