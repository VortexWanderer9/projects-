const button = document.querySelector('.crazy-button');
const box = document.querySelector('.guess-info');
const checkGuess = document.querySelector('#checkGuess');
let previousGuess = []; // Array to store previous guesses
const playGame = true; // Flag to control the game
let count = 0; // Counter to keep track of the number of guesses
const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
console.log(typeof randomNumber);
console.log(randomNumber);



// Event listener for the button
if(playGame){
    button.addEventListener('click', () => {
        
        // Validate the user input
        // Update the count
        checkAttempt(); // Check if the user has reached the maximum number of attempts
        
    });
}

function validateUserInput() { 
    const userChoice = document.querySelector('#guessField');
        const userGuess = userChoice.value;
    if (!userGuess || isNaN(userGuess) || userGuess < 1 || userGuess > 100 || userGuess === '') {
        showError(); // Show error if input is invalid
    } else {
        clearError(); // Remove error if input is valid
        previousGuess.push(userGuess); 
        box.querySelector('.previousGuess').textContent = `${previousGuess} `; // Process the valid guess
        checkGuessF();
        userChoice.value = ''; // Clear input field
        count++;
        box.querySelector('.count').textContent = 11 - count; // Update the count
    }
   
   
}

function checkAttempt(playGame) {
    if (count < 10) {  // Check if the user has reached the maximum number of attempts                 
        validateUserInput() 
    }  else if(count === 10) {
        checkGuess.textContent = `Game Over! The correct number was ${randomNumber} click the button to play again`;
        playGame = false;
    }
}


// Function to show error, only adds it if it doesn't already exist
function showError() {
    if (!box.querySelector('.error')) { // Check if the error message already exists
        const p = document.createElement('p');
        p.classList.add('error');
        p.style.color = 'red';
        p.textContent = 'Please enter a valid number';
        box.appendChild(p);
    }
}

// Function to clear the error message
function clearError() {
    const errorElement = box.querySelector('.error');
    if (errorElement) {
        box.removeChild(errorElement);
    }
}

// Function to check the user's guess
function checkGuessF() {
    const userGuess = parseInt(document.querySelector('#guessField').value); 
    if (userGuess === randomNumber) {
        checkGuess.textContent = 'Congratulations! You guessed the correct number';
    } else if (userGuess < randomNumber) {
        checkGuess.textContent = 'Your guess is too low';
    } else {
        checkGuess.textContent = 'Your guess is too high';
    }
    console.log(typeof randomNumber, typeof userGuess);
}

function playAgain() {
        previousGuess = [];
        count = 0;
        box.querySelector('.previousGuess').textContent = '';
        box.querySelector('.count').textContent = '';
        checkGuess.textContent = '';
        playGame = true;
        box.querySelector('.error').textContent = 'Restarting the game';
}