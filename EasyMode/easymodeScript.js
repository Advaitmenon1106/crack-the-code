"use strict";

let numberToGuess = Math.floor(Math.random()*300);

const checkGuess = ()=>{
    let guessedNumber = guessInput.value;
    let warningToast = document.getElementById('toast');
    let warningMessage = document.getElementById('message');
    let guessTimesBand = document.createElement('div');
    let guessHistoryUnit = document.createElement('div');
    let historicalGuessDisplay = document.createElement('div');

    guessTimesBand.style.cssText = 

    `
    background-color: #DEDEDE;
    text-align: center;
    font-size: 25px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 5%;
    `;

    guessTimesBand.innerHTML = 'Hint '+ (counter+1);

    guessHistoryUnit.style.cssText = `border:2px solid whitesmoke;
    border-radius: 15px;`;
    historicalGuessDisplay.style.cssText = 

    `
    margin-top: 3%;
    font-size: 30px;
    text-align: center;
    border-radius: 10px;
    padding-left: 1%;
    width: 100px;
    padding-right: 1%;
    margin-left: 35%;
    box-shadow: 1px 5px 1px 5px rgb(230, 230, 230);
    `;

    if (guessedNumber.length == 0){
        warningMessage.innerHTML = 'Enter a valid number!';
        warningToast.className +=' show';
        setTimeout(() => {
            warningToast.className = warningToast.className.replace(' show', '');
        }, 3000);
    }

    else if (guessedNumber == numberToGuess){
        document.getElementsByClassName('toastMsgBand')[0].innerHTML = 'Congratulations!'
        warningMessage.innerHTML = 'You\'ve guessed it correctly!';
        warningToast.className +=' show';
        setTimeout(() => {
            warningToast.className = warningToast.className.replace(' show', '');
        }, 3000);
    }

    else if (counter==9){
        warningMessage.innerHTML = 'Exceeded 6 hints. Game over!'
        warningToast.className +=' show';
        setTimeout(() => {
            warningToast.className = warningToast.className.replace(' show', '');
        }, 3000);
        guessedNumber = null;
        
    }

    else{
        guessHistoryUnit.appendChild(guessTimesBand);
        guessingGrid.appendChild(guessHistoryUnit);
        guessHistoryUnit.appendChild(historicalGuessDisplay);
        historicalGuessDisplay.innerHTML = guessedNumber;
        counter = counter+1;
        let hintDiv = document.createElement('div');
        hintDiv.style.fontSize = '30px';
        hintDiv.style.fontFamily = "'Comic Neue', serif";
        hintDiv.style.marginTop = '10%';


        if (guessedNumber>numberToGuess){
            hintDiv.innerHTML = 'The actual code is lesser than your guess.';
            guessHistoryUnit.appendChild(hintDiv);
        }


        else if (guessedNumber<numberToGuess){
            hintDiv.innerHTML = 'The actual code is higher than your guess.';
            guessHistoryUnit.appendChild(hintDiv);
        }
        guessInput.value='';
    }
}

let checkButton = document.getElementById('check');
let counter = 0;
let guessingGrid = document.getElementById('guessingGrid');
guessingGrid.style.marginTop = '5%';
let guessInput = document.getElementById('input');
checkButton.style.cursor = 'pointer';

checkButton.addEventListener('click', checkGuess);