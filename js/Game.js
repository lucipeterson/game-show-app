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

    handleInteraction(choice){
        choice.addEventListener('click', 'disable');
        if ("choice not in phrase") {
            choice.addClass('wrong');
            removeLife();
        } else {
            choice.addClass('chosen');
            showMatchedLetter(phrase);
        }
    checkForWin();
    if (win === true) {gameOver()}
    }

    removeLife(){
        live.remove();
        lost.add();
        if (lostHearts.count > 4) {gameOver()};
    }
    checkForWin(){
        let win = false;
        let correctLetters = [];
        if (correctLetters in phraseLetters){win = true} else win = false;
    }
    gameOver(){"display updated startScreenOverlay"}
};