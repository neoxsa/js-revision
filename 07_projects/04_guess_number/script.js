let randomNumber = parseInt(Math.random() * 100 + 1);

const submitBtn = document.querySelector('#sbt');
const guessInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const guessRemain = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let guessNum = 1;

let playGame = true

if (playGame) {
    submitBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const guessVal = parseInt(guessInput.value);
        guessValidate(guessVal);
    })
}

function guessValidate(guessVal) {
    if (isNaN(guessVal)) {
        alert("Please enter a valid number.");
    } else if (guessVal < 1) {
        alert("Please enter greater than 1.");
    } else if (guessVal > 100) {
        alert("Please enter greater than 1.");
    } else {
        prevGuess.push(guessVal);

        if (guessNum === 10) {
            displayMsg(`<h4 class="gameOver" >Game Over. Random no. was ${randomNumber} </h4>`);
            displayGuess(guessVal);
            endGame()
        } else {
            displayGuess(guessVal)
            guessCheck(guessVal);
        }
    }
}

function guessCheck(guessVal) {
    if (guessVal === randomNumber) {
        displayMsg(`<p class="message">You Guessed it Right</p>`);
        endGame();
    } else if (guessVal > randomNumber) {
        displayMsg(`<p class="message">Guessed Value is too High</p>`);
    }
    else if (guessVal < randomNumber) {
        displayMsg(`<p class="message">Guessed Value is too Low</p>`);
    }
}

// clean-up & show guess value
function displayGuess(guessVal) {
    guessInput.value = ''
    guessSlot.innerHTML += `${guessVal},  `  //push the guessVal
    guessNum++;
    guessRemain.innerHTML = `${11 - guessNum}`
}

function displayMsg(message) {
    lowOrHi.innerHTML = `<h2> ${message} </h2>`
}

function endGame() {
    guessInput.value = ""
    guessInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h4 id='newGame'>Start new Game<h4/>`
    startOver.appendChild(p);
    playGame = false;
    newGame()
}

function newGame() {
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', function () {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        guessNum = 1
        guessSlot.innerHTML = ''
        guessRemain.innerHTML = `${11 - guessNum}`
        guessInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
        displayMsg(``);
    });
}

