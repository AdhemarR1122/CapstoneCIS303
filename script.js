let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultDiv = document.getElementById('result');

function game(userChoice) {
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);

    displayResult(result, computerChoice);

    if (result === 'win') {
        userScore++;
    } else if (result === 'lose') {
        computerScore++;
    }

    updateScore();
}

function resetGame() {
    // Reset scores to 0
    userScore = 0;
    computerScore = 0;

    // Update the UI
    updateScore();

    // Clear the result display
    resultDiv.textContent = '';

    // Clear local storage
    localStorage.removeItem('userScore');
    localStorage.removeItem('computerScore');
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}

function displayResult(result, computerChoice) {
    resultDiv.textContent = `Computer chose ${computerChoice}. You ${result}!`;
}

function updateScore() {
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;

    // Store scores in local storage
    localStorage.setItem('userScore', userScore);
    localStorage.setItem('computerScore', computerScore);
}

// Retrieve scores from local storage on page load
if (localStorage.getItem('userScore')) {
    userScore = parseInt(localStorage.getItem('userScore'));
    computerScore = parseInt(localStorage.getItem('computerScore'));
    updateScore();
}
