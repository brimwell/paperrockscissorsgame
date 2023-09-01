let playerTally = 0;
let cpuTally = 0;
let roundNumber = 0;

const gameOn = document.querySelector('#gameon');
const gameOff = document.querySelector('#gameoff');
const newGame = document.querySelector('#newGame');

const thisRound = document.querySelector('#thisRound');
const runningTally = document.querySelector('#runningTally');
const winner = document.querySelector('#overallWinner');

const startGame = document.querySelector('#start');
const startNewGame = document.querySelector('#startNewGame');

const buttons = document.querySelectorAll('.selector');

buttons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.id));
});
startGame.addEventListener('click', () => beginGame());
startNewGame.addEventListener('click', () => beginNewGame());



function beginGame() {
    gameOn.classList.toggle("hidden");
    gameOff.classList.toggle("hidden");
}




function getCpuSelection() {
    let cpuChoice = Math.floor((Math.random() * 100) + 1);
    if (cpuChoice >= 1 && cpuChoice <= 33) {
        return 'rock';
    } else if (cpuChoice >= 34 && cpuChoice <= 66) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

function disableBtn() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

function enableBtn() {
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
}

function gameOver(cpuTally, playerTally) {
    if (cpuTally >= 5) {
        winner.textContent = 'The computer has won the game.';
    };
    if (playerTally >= 5) {
        winner.textContent = 'Congrats! You have won the game.';
    };
    disableBtn();
    newGame.classList.toggle("hidden");
}

function playRound(playerSelection) {
    let roundResult;
    let cpuSelection = getCpuSelection();

    if (playerSelection === 'rock') {
        if (cpuSelection === 'rock') {
            roundResult = 'It\'s a tie!';
        } else if (cpuSelection === 'paper') {
            roundResult = 'The computer wins.';
            cpuTally++;
        } else {
            roundResult = 'You win this round!';
            playerTally++;
        }
    } else if (playerSelection === 'paper') {
        if (cpuSelection === 'rock') {
            roundResult = 'You win this round!';
            playerTally++;
        }   else if (cpuSelection === 'paper') {
            roundResult = 'It\'s a tie!';
        }   else {
            roundResult = 'The computer wins.';
            cpuTally++;
        }
    } else if (playerSelection === 'scissors') {
        if (cpuSelection === 'rock') {
            roundResult = 'The computer wins.';
            cpuTally++;
        } else if (cpuSelection === 'paper') {
            roundResult = 'You win this round!';
            playerTally++;
        } else {
            roundResult = 'It\'s a tie!';
        }
    } else {
        roundResult = 'There was an error somewhere...'
    };
    roundNumber++;
    const round = document.createElement('p');
    round.textContent = `Round ${roundNumber}: ${roundResult}`;
    thisRound.appendChild(round);

    const tally = document.createElement('p');
    tally.textContent = `You: ${playerTally} --- Computer: ${cpuTally}`;
    runningTally.replaceChildren(tally);

    if (cpuTally === 5 || playerTally === 5) {
        gameOver(cpuTally, playerTally);
    };
    
}


function beginNewGame() {
    cpuTally = 0;
    playerTally = 0;
    roundNumber = 0;
    runningTally.replaceChildren('');
    thisRound.replaceChildren('');
    winner.replaceChildren('Who Will Be the Winner??');
    newGame.classList.toggle('hidden');
    enableBtn();
}

