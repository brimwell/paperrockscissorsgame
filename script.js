
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

function playRound(playerSelection, cpuSelection) {

    let roundResult;

    if (playerSelection === 'rock') {
        if (cpuSelection === 'rock') {
            roundResult = 'tie';
        } else if (cpuSelection === 'paper') {
            roundResult = 'cpu';
        } else {
            roundResult = 'player';
        }
    } else if (playerSelection === 'paper') {
        if (cpuSelection === 'rock') {
            roundResult = 'player';
        }   else if (cpuSelection === 'paper') {
            roundResult = 'tie';
        }   else {
            roundResult = 'cpu';
        }
    } else if (playerSelection === 'scissors') {
        if (cpuSelection === 'rock') {
            roundResult = 'cpu';
        } else if (cpuSelection === 'paper') {
            roundResult = 'player';
        } else {
            roundResult = 'tie';
        }
    } else {
        roundResult = 'invalid'
    }
    return roundResult;
}


function game() {
    let playerTally = 0;
    let cpuTally = 0;
    let cpuSelection;
    let playerSelection;

    for (i = 0; i < 5; i++) {
        cpuSelection = getCpuSelection();
        playerSelection = prompt('For this round, choose either rock, paper, or scissors.');
        playerSelection = playerSelection.toLowerCase();
        let roundOne = playRound(playerSelection, cpuSelection);
        if (roundOne === 'invalid') {
            console.log('You entered an invalid choice. You MUST enter rock, paper, or scissors. No points awarded.');
        } else if (roundOne === 'tie') {
            console.log('This round was a tie. No points awarded.')
        } else if (roundOne === 'player') {
            console.log(`You won this round! ${playerSelection} beats ${cpuSelection}. One point awarded to you.`);
            playerTally++;
        } else if (roundOne === 'cpu') {
            console.log(`You lost this round. ${cpuSelection} beats ${playerSelection}.`);
            cpuTally++;
        } else {
            console.log('There appears to be something wrong.')
        };
    }

    console.log(`The final score is --  You: ${playerTally}  Computer: ${cpuTally}`);
    if (playerTally > cpuTally) {
        console.log('You are the champion!');
    } else if (playerTally < cpuTally) {
        console.log('You have lost. You are not the champion.');
    } else {
        console.log('It was a tie. Well played.');
    }
}

game();