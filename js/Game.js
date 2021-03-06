//Treehouse FSJS Techdegree - Project 4 - OOP Game App - Game.js
let win;
const startScreenOverlay = document.getElementById("overlay");

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
        chosen.disabled = true;
        if (this.activePhrase.checkLetter(chosen) === false){
            chosen.setAttribute('class','wrong');this.removeLife()
        } else {
            chosen.setAttribute('class','chosen');
            this.activePhrase.showMatchedLetter()
        }
        this.checkForWin();
        if (win === true){this.gameOver()}
    }

    removeLife(){
        let lives = document.querySelectorAll('.tries');
        for (i=0;i<lives.length;i++) {
            lives[this.missed].innerHTML = '<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">'
        }
        this.missed += 1;
        if (this.missed > 4) {this.gameOver()}
    }

    checkForWin(){
        const phraseStr = this.activePhrase.phrase;
        const revealLetters = document.querySelectorAll('.show');
        const hiddenSpaces = document.getElementsByClassName('hide space');
        let winCondition = phraseStr.length - hiddenSpaces.length;
        if (revealLetters.length === winCondition) {win = true}
    }

    //Resets all of the game settings and sends you back to the start screen.
    gameOver(){
        this.missed = 0;
        const letters = document.querySelectorAll('li');
        const scoreboard = document.querySelector('ol');
        const gameOverMessage = document.querySelector('#game-over-message');
        for(let i=0;i<letters.length;i+=1){
            letters[i].remove();
            };
        for(let i=0;i<keyboardLetters.length;i+=1){
            keyboardLetters[i].removeAttribute('class')
            };
        scoreboard.innerHTML = '<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li> <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li> <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li> <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li> <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>';
        if (win === true) {
            startScreenOverlay.setAttribute('class','win');
            gameOverMessage.innerText = 'You Won!';
            win = false
        } else {
            startScreenOverlay.setAttribute('class','lose');
            gameOverMessage.innerText = 'Game Over';
            win = false
            }
        startScreenOverlay.style.display = "flex";
        for(i=0;i<keyboardLetters.length;i+=1){
            keyboardLetters[i].disabled = false
        };
    }
};