
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

//ROUND ONE
    let cpuSelection = getCpuSelection();
    let playerSelection = prompt('Round 1: Choose either rock, paper, or scissors.');
    playerSelection = playerSelection.toLowerCase();
    let roundOne = playRound(playerSelection, cpuSelection);
    if (roundOne === 'invalid') {
        console.log('You entered an invalid choice. You MUST enter rock, paper, or scissors. No points awarded.');
    } else if (roundOne === 'tie') {
        console.log('Round One was a tie. No points awarded.')
    } else if (roundOne === 'player') {
        console.log(`You won Round One! ${playerSelection} beats ${cpuSelection}. One point awarded to you.`);
        playerTally++;
    } else if (roundOne === 'cpu') {
        console.log(`You lost Round One. ${cpuSelection} beats ${playerSelection}.`);
        cpuTally++;
    } else {
        console.log('There appears to be something wrong.')
    };

//ROUNDTWO
    cpuSelection = getCpuSelection();
    playerSelection = prompt('Round 2: Choose either rock, paper, or scissors.');
    playerSelection = playerSelection.toLowerCase();
    roundOne = playRound(playerSelection, cpuSelection);
    if (roundOne === 'invalid') {
        console.log('You entered an invalid choice. You MUST enter rock, paper, or scissors. No points awarded.');
    } else if (roundOne === 'tie') {
        console.log('Round Two was a tie. No points awarded.')
    } else if (roundOne === 'player') {
        console.log(`You won Round Two! ${playerSelection} beats ${cpuSelection}. One point awarded to you.`);
        playerTally++;
    } else if (roundOne === 'cpu') {
        console.log(`You lost Round Two. ${cpuSelection} beats ${playerSelection}.`);
        cpuTally++;
    } else {
        console.log('There appears to be something wrong.')
    };

//ROUND THREE
    cpuSelection = getCpuSelection();
    playerSelection = prompt('Round 3: Choose either rock, paper, or scissors.');
    playerSelection = playerSelection.toLowerCase();
    roundOne = playRound(playerSelection, cpuSelection);
    if (roundOne === 'invalid') {
        console.log('You entered an invalid choice. You MUST enter rock, paper, or scissors. No points awarded.');
    } else if (roundOne === 'tie') {
        console.log('Round Three was a tie. No points awarded.')
    } else if (roundOne === 'player') {
        console.log(`You won Round Three! ${playerSelection} beats ${cpuSelection}. One point awarded to you.`);
        playerTally++;
    } else if (roundOne === 'cpu') {
        console.log(`You lost Round Three. ${cpuSelection} beats ${playerSelection}.`);
        cpuTally++;
    } else {
        console.log('There appears to be something wrong.')
    };

//ROUND FOUR
    cpuSelection = getCpuSelection();
    playerSelection = prompt('Round 4: Choose either rock, paper, or scissors.');
    playerSelection = playerSelection.toLowerCase();
    roundOne = playRound(playerSelection, cpuSelection);
    if (roundOne === 'invalid') {
        console.log('You entered an invalid choice. You MUST enter rock, paper, or scissors. No points awarded.');
    } else if (roundOne === 'tie') {
        console.log('Round Four was a tie. No points awarded.')
    } else if (roundOne === 'player') {
        console.log(`You won Round Four! ${playerSelection} beats ${cpuSelection}. One point awarded to you.`);
        playerTally++;
    } else if (roundOne === 'cpu') {
        console.log(`You lost Round Four. ${cpuSelection} beats ${playerSelection}.`);
        cpuTally++;
    } else {
        console.log('There appears to be something wrong.')
    };

//ROUND FIVE
    cpuSelection = getCpuSelection();
    playerSelection = prompt('Round 5: Choose either rock, paper, or scissors.');
    playerSelection = playerSelection.toLowerCase();
    roundOne = playRound(playerSelection, cpuSelection);
    if (roundOne === 'invalid') {
        console.log('You entered an invalid choice. You MUST enter rock, paper, or scissors. No points awarded.');
    } else if (roundOne === 'tie') {
        console.log('Round Five was a tie. No points awarded.')
    } else if (roundOne === 'player') {
        console.log(`You won Round Five! ${playerSelection} beats ${cpuSelection}. One point awarded to you.`);
        playerTally++;
    } else if (roundOne === 'cpu') {
        console.log(`You lost Round Five. ${cpuSelection} beats ${playerSelection}.`);
        cpuTally++;
    } else {
        console.log('There appears to be something wrong.')
    };

//FINAL TALLY
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

