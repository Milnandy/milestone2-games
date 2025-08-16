// number guessing game

const minNumber = 1;
const maxNumber = 100;
const answer = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

const submitButton = document.getElementById("guess-button");
const resetButton = document.getElementById("reset-button");
const guessInput = document.getElementById("guess-input");
const previousGuessText = document.getElementById("previous-guess-value");
const remainingGuessesText = document.getElementById("remaining-guess-value");
const resultMessageText = document.getElementById("result-message");

let attempts = 0;
let guess;
let running = true;