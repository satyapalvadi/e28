const options = ['rock', 'paper', 'scissors'];

//variables to display counts
let systemWinCount = 0;
let userWinCount = 0;
let tieCount = 0;

//get element objects for the required elements
let rockRadio = document.getElementById("rock");
let paperRadio = document.getElementById("paper");
let scissorsRadio = document.getElementById("scissors");
let resetButton = document.getElementById("resetButton");
let winnerNodes = document.querySelectorAll(".resultSection > span");

//associate event handlers
rockRadio.addEventListener("change", handleRadio);
paperRadio.addEventListener("change", handleRadio);
scissorsRadio.addEventListener("change", handleRadio);
resetButton.addEventListener("click", handleResetButton);

//display initial counts on page load
displayCounts(userWinCount, systemWinCount, tieCount);

function displayCounts(userWinCount, systemWinCount, tieCount) {
    document.getElementById('userWinCount').innerHTML = userWinCount;
    document.getElementById('systemWinCount').innerHTML = systemWinCount;
    document.getElementById('tieCount').innerHTML = tieCount;
}

//triggers every time a radio button is selected.
function handleRadio(event) {
    let systemOption = options[getRandomInt(3)];
    let userOption = event.currentTarget.value;

    let winnerOption = checkWinner(userOption, systemOption);
    let winner = winnerOption == 'tie' ? 'Tie' : userOption == winnerOption ? 'User' : 'System';
    winnerOption == 'tie' ? tieCount++ : userOption == winnerOption ? userWinCount++ : systemWinCount++;
    displayCounts(userWinCount, systemWinCount, tieCount);

    winnerNodes.forEach(node => {
        if (node.innerText == winner) {
            node.classList.remove('hideWinner');
            node.classList.add('showWinner');
        }
        else {
            node.classList.add('hideWinner');
            node.classList.remove('showWinner');
        }
    });

    console.log(`user option: ${event.currentTarget.value}`);
    console.log(`system option: ${systemOption}`);
    console.log(`Winner option: ${winnerOption}`);
    console.log(`Result: ${winner}`);
    console.log("##########");
}

function handleResetButton() {
    systemWinCount = 0;
    userWinCount = 0;
    tieCount = 0;
    displayCounts(userWinCount, systemWinCount, tieCount);

    //empty winner
    winnerNodes.forEach(node => {
        node.classList.add('hideWinner');
        node.classList.remove('showWinner');
    });

    //reset the radios
    rockRadio.checked = false;
    paperRadio.checked = false;
    scissorsRadio.checked = false;
}


//Used MDN example from here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


//function to calculate the winner
function checkWinner(userOption, systemOption) {
    if (userOption == 'rock' && systemOption == 'scissors') {
        return userOption;
    }
    else if (userOption == 'scissors' && systemOption == 'rock') {
        return systemOption;
    }
    else if (userOption == 'paper' && systemOption == 'rock') {
        return userOption;
    }
    else if (userOption == 'rock' && systemOption == 'paper') {
        return systemOption;
    }
    else if (userOption == 'scissors' && systemOption == 'paper') {
        return userOption;
    }
    else if (userOption == 'paper' && systemOption == 'scissors') {
        return systemOption;
    }
    else {
        return 'tie';
    }
}