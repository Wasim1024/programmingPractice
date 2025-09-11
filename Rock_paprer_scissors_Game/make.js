document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');

    const resultHeading = document.querySelector('h3');
    const scoreHeading = document.querySelector('h4');

    // ensure elements exist
    if (!rockButton || !paperButton || !scissorsButton) {
        console.error('One or more move buttons not found. Make sure buttons have ids: rock, paper, scissors');
        return;
    }
    if (!resultHeading) console.warn('Result heading (h3) not found - results will not display');
    if (!scoreHeading) console.warn('Score heading (h4) not found - score will not display');

    // Function to generate the computer's move
    function computer() {
        const moves = ['rock', 'paper', 'scissors'];
        return moves[Math.floor(Math.random() * 3)];
    }

    // Function to determine the result
    function determineResult(playerMove, computerMove) {
        if (playerMove === computerMove) return "It's a tie!";
        if (
            (playerMove === 'rock' && computerMove === 'scissors') ||
            (playerMove === 'paper' && computerMove === 'rock') ||
            (playerMove === 'scissors' && computerMove === 'paper')
        ) {
            return "You win!";
        }
        return "You lose!";
    }

    // helper to update UI safely
    function updateUI(computerMove, playerMove, result) {
        if (resultHeading) resultHeading.textContent = `Computer chose ${computerMove}. ${result}`;
        if (scoreHeading) scoreHeading.textContent = `You played ${playerMove}. Result: ${result}`;
    }

    // Event listeners for buttons
    rockButton.addEventListener('click', () => {
        console.log('Rock clicked');
        try {
            const computerMove = computer();
            const result = determineResult('rock', computerMove);
            updateUI(computerMove, 'Rock', result);
        } catch (err) {
            console.error('Error handling rock click:', err);
        }
    });

    paperButton.addEventListener('click', () => {
        console.log('Paper clicked');
        try {
            const computerMove = computer();
            const result = determineResult('paper', computerMove);
            updateUI(computerMove, 'Paper', result);
        } catch (err) {
            console.error('Error handling paper click:', err);
        }
    });

    scissorsButton.addEventListener('click', () => {
        console.log('Scissors clicked');
        try {
            const computerMove = computer();
            const result = determineResult('scissors', computerMove);
            updateUI(computerMove, 'Scissors', result);
        } catch (err) {
            console.error('Error handling scissors click:', err);
        }
    });
});
