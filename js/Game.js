//Treehouse FSJS Techdegree - Project 4 - OOP Game App - Game.js

//PAGE ELEMENTS DEFINED
const startScreenOverlay = document.getElementById("overlay");

//CLASSES
class Game {
    constructor(){
        this.missed = 0; 
        this.phrases = [
            "The bigger they are the harder they fall",
            "Better safe than sorry",
            "Misery loves company",
            "Knowledge is power",
            "One bad apple spoils the whole bunch"]; 
        this.activePhrase = null;
    }

    getRandomPhrase(){
        const phrase = new Phrase(this.phrases[Math.floor(Math.random()*this.phrases.length)]);
        return phrase
    }

    startGame(){
        startScreenOverlay.style.display = "none";
        this.activePhrase = this.getRandomPhrase(); 
        this.activePhrase.addPhraseToDisplay();
    }

    handleInteraction(chosen){
        if ("choice not in phrase") {
            chosen.setAttribute('class','wrong');
            this.removeLife();
        } else {
            chosen.setAttribute('class','chosen');
            showMatchedLetter(phrase);
        }
    }

    checkForWin(){
    if (win === true) {gameOver()}
    }

    removeLife(){
        let scoreBoard = document.querySelector('ol');
        let lives = document.querySelectorAll('.tries');
        scoreBoard.removeChild(lives[0]);
        this.missed += 1;
        if (this.missed > 4) {this.gameOver();resetPhrase()};
    }

    checkForWin(){
        let win = false;
        let correctLetters = [];
        if (correctLetters in phraseLetters){win = true} else win = false;
    }

    gameOver(){
        reset();
        const letters = document.querySelectorAll('li');
        for(let i=0;i<letters.length;i+=1){
            letters[i].remove();
            };
        //letterBox.removeChild('li');
        const gameOverMessage = document.querySelector('#game-over-message');
        const startGameButton = document.querySelector('#btn__reset');
        startGameButton.innerText = 'Start New Game';
        gameOverMessage.innerText = 'GAME OVER';
        gameOverMessage.style.color = 'red';
        startScreenOverlay.style.display = "flex";
    }
};