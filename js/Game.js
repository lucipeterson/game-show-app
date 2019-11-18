//Treehouse FSJS Techdegree - Project 4 - OOP Game App - Game.js

//DOM ELEMENTS DEFINED
const startScreenOverlay = document.getElementById("overlay");

//GAME CLASS
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
        for (i=0;i<lives.length;i+=1) {
            lives[this.missed].innerHTML = '<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">'
        }
        this.missed += 1;
        if (this.missed > 4) {this.gameOver(); this.missed = 0; 
            console.log(lives);
            console.log(this.missed)}
        
    }

    checkForWin(){
        let win = false;
        let correctLetters = [];
        if (correctLetters in phraseLetters){win = true} else win = false;
    }

    //You lose more lives per turn the second time you play the game, need to fix.
    gameOver(){  
        const letters = document.querySelectorAll('li');
        const keys = document.querySelectorAll('button');
        for(let i=0;i<letters.length;i+=1){
            letters[i].remove();
            };
        for(let i=0;i<keys.length;i+=1){
            keys[i].removeAttribute('class')
            };
        const scoreboard = document.querySelector('ol');
        scoreboard.innerHTML = '<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li> <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li> <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li> <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li> <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>';
        const gameOverMessage = document.querySelector('#game-over-message');
        const startGameButton = document.querySelector('#btn__reset');
        startGameButton.innerText = 'Start Game';
        gameOverMessage.innerText = 'Game Over';
        gameOverMessage.style.color = 'red';
        startScreenOverlay.style.display = "flex";
    }
};