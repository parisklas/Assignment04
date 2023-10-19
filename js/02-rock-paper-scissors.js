// rock destroys scissors
// scissors cuts paper
// paper covers rock
alert('Let\'s play a game:');

// User makes a choice
let userChoice = prompt('Choose: Rock, Paper, or Scissors?').toLowerCase();
console.log(`The user chose: ${userChoice}`)
if ((userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors')) {
  alert(`Please enter a valid entry.`);
}

// Computer makes a choice
let computerChoice;
// random number 1, 2, or 3
let flipResult = Math.floor(Math.random() * 3 + 1);

// resetting flipResult to stringified computerChoice
if (flipResult === 1) {
    computerChoice = 'rock';
} else if (flipResult === 2) {
    computerChoice = 'paper';
} else if (flipResult === 3) {
    computerChoice = 'scissors';
}
console.log(`The computer chose: ${computerChoice}`);

let gameResult;
// A conditional determines who wins
  if (computerChoice === userChoice) {
      gameResult = `It's a tie! Play again`;
  } else if (computerChoice === 'rock') {
      if (userChoice === 'paper') {
      gameResult = `You win! ${userChoice} beats ${computerChoice}`;
      } else if (userChoice === 'scissors') {
      gameResult = `You lose! ${computerChoice} beats ${userChoice}`;
      }
  } else if (computerChoice === 'paper') {
      if (userChoice === 'scissors') {
      gameResult = `You win! ${userChoice} beats ${computerChoice}`;
      } else if (userChoice === 'rock') {
      gameResult = `You lose! ${computerChoice} beats ${userChoice}`;
      }
  } else if (computerChoice === 'scissors') {
      if (userChoice === 'rock') {
      gameResult = `You win! ${userChoice} beats ${computerChoice}`;
      } else if (userChoice === 'paper') {
      gameResult = `You lose! ${computerChoice} beats ${userChoice}`;
      }
  }

alert(gameResult);
