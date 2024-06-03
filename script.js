"use strict";

// /* console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message')); */

// // DOM - Document Object Model: Structed representation of HTML documents. Allows JS to access HTML elements and styles to manipulate them.
// // DOM !== JS
// // DOM and DOM Methods are - WEB APIs (like a google chrome, safari...)

// /* document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log( document.querySelector('.guess').value); */

// let secretNumber = Math.trunc(Math.random() * 20) + 1;

// let score = 20;
// let highScore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// const secret = function (number) {
//   document.querySelector('.number').textContent = secretNumber;
// };

// const scoreValue = function (score) {
//   document.querySelector('.score').textContent = score;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);

//   const guess = Number(document.querySelector('.guess').value);
//   console.log(typeof guess);

//   // When there is no input
//   if (!guess) {
//     //document.querySelector('.message').textContent = 'No number entered!';
//     displayMessage('No number entered!');

//     // When player wins
//   } else if (guess === secretNumber) {
//     //document.querySelector('.message').textContent = 'Correct Number!';
//     displayMessage('Correct Number!');
//     //document.querySelector('.number').textContent = secretNumber;
//     secret(secretNumber);

//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       //document.querySelector('.message').textContent = guess > secretNumber ?'Too High!': 'Too Low!';
//       displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
//       score = score - 1; // score--
//       //document.querySelector('.score').textContent = score;
//       scoreValue(score);
//     } else {
//       //document.querySelector('.message').textContent = ;
//       displayMessage('You lost a game!');
//       //document.querySelector('.score').textContent = 0;
//       scoreValue(0);
//     }
//   }

//   /*    // When guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too High!';
//       score = score - 1; // score--
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost a game!';
//       document.querySelector('.score').textContent = 0;
//     }

//     // When guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost a game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   } */
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   //document.querySelector('.message').textContent = 'Start guessing...';
//   displayMessage('Start guessing...');
//   //document.querySelector('.score').textContent = score;
//   scoreValue(score);
//   document.querySelector('.guess').value = '';
//   document.querySelector('.number').textContent = '?';
//   //secret('?'); - NOT WORKING!!!

//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('body').style.backgroundColor = '#222';
// });

///////////////////////////////////////////////////////////////////////

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage("No number!");

    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct number!';
    displayMessage("Correct number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  // when guess is different
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low!';
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost a game!';
      displayMessage("You lost a game!");
      document.querySelector(".score").textContent = 0;
    }
  }
  //   // when guess is too high
  //  else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost a game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost a game!';
  //     document.querySelector('.score').textContent = '0';
  //   }
});

// section 7, challenge 1

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".number").textContent = "?";
  // document.querySelector('.message').textContent = 'Guess a number...';
  displayMessage("Guess a number...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
