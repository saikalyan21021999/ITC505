document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const resultMessage = document.getElementById('result');

    // Generate random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Event listener for guess button
    guessButton.addEventListener('click', function() {
        // Get user input
        const guess = parseInt(guessInput.value);

        // Validate input
        if (isNaN(guess) || guess < 1 || guess > 100) {
            resultMessage.textContent = 'Please enter a valid number between 1 and 100.';
            resultMessage.style.color = 'red';
            return;
        }

        // Check if guess is correct, too high, or too low
        if (guess === randomNumber) {
            resultMessage.textContent = `Congratulations! ${randomNumber} is correct!`;
            resultMessage.style.color = 'green';
        } else if (guess < randomNumber) {
            resultMessage.textContent = `${guess} is too low. Try again.`;
            resultMessage.style.color = 'blue';
        } else {
            resultMessage.textContent = `${guess} is too high. Try again.`;
            resultMessage.style.color = 'orange';
        }
    });
});
