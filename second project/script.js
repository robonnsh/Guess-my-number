'use strict';

//Define a secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);
const numberWidth = width =>
  (document.querySelector('.number').style.width = width);
const bgColor = color =>
  (document.querySelector('body').style.backgroundColor = color);
const textScore = score =>
  (document.querySelector('.score').textContent = score);
const textNumber = number =>
  (document.querySelector('.number').textContent = number);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // when there is no input
  if (!guess) {
    displayMessage(' ⛔ No Number!');
  }
  // when player wins
  else if (guess === secretNumber) {
    displayMessage(` 🎉🎉 Correct Number`);
    textNumber(secretNumber);
    bgColor('#60b347');
    numberWidth('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? ' 📈 Too high!' : ' 📉 Too low!');
      score--;
      textScore(score);
    } else {
      displayMessage(' 💥 You lost the game!');
      textScore(0);
    }
  }
});

// refresh the game
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  textNumber('?');
  bgColor('#222');
  numberWidth('15rem');
  displayMessage('Start guessing... ');
  textScore(score);
  document.querySelector('.guess').value = '';
});
