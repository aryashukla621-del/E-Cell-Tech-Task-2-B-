let targetNumber = Math.floor(Math.random() * 100) + 1;
let totalAttempts = 0;
let guessHistory = [];

function checkGuess() {
  const inputField = document.getElementById("guessInput");
  const messageText = document.getElementById("message");
  const attemptsText = document.getElementById("attempts");
  const guessesText = document.getElementById("guesses");

  const userGuess = Number(inputField.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    messageText.innerText = "Please enter a number between 1 and 100!";
    messageText.style.color = "black";
    return;
  }

  totalAttempts++;
  attemptsText.innerText = "Attempts: " + totalAttempts;

  guessHistory.push(userGuess);
  guessesText.innerText = "Your guesses: " + guessHistory.join(", ");

  if (userGuess > targetNumber) {
    messageText.innerText = "Too High!";
    messageText.style.color = "red";
  } 
  else if (userGuess < targetNumber) {
    messageText.innerText = "Too Low!";
    messageText.style.color = "orange";
  } 
  else {
    messageText.innerText = "Correct! 🎉";
    messageText.style.color = "green";

    inputField.disabled = true;
  }

  inputField.value = "";
}

function restartGame() {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  totalAttempts = 0;
  guessHistory = [];

  const inputField = document.getElementById("guessInput");

  document.getElementById("message").innerText = "";
  document.getElementById("attempts").innerText = "Attempts: 0";
  document.getElementById("guesses").innerText = "Your guesses: ";

  inputField.value = "";
  inputField.disabled = false;
}