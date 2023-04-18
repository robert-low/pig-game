'use strict';

// Selecting elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1'); // Faster to select by ID
const currentScore0Element = document.getElementById('current--0');
const currentScore1Element = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHoldScore = document.querySelector('.btn--hold');

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRollDice.addEventListener('click', () => {
  console.log('click!');
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${diceNumber}.png`;

  if (diceNumber !== 1) {
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
  }
});
