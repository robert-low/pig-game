'use strict';

// Selecting elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1'); // Faster to select by ID
const diceElement = document.querySelector('.dice');

score0Element.textContent = 0;
score1Element.textContent = 0;

diceElement.classList.add('hidden');
