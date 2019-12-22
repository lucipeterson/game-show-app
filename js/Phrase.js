// Treehouse FSJS Techdegree - Project 4 - OOP Game App - Phrase.js

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay(){
        let phraseLetters = this.phrase.split("");
        let phraseDisplay = document.querySelectorAll("ul");
        for (let i=0;i<phraseLetters.length;i+=1){
            let letter = document.createElement("li");
            if (phraseLetters[i] === " "){
                letter.innerText = `${phraseLetters[i]}`;
                letter.setAttribute('class', 'hide space');
            } else {
                letter.innerText = phraseLetters[i];
                letter.setAttribute('class','hide letter ' + phraseLetters[i]);
            };
            phraseDisplay[0].appendChild(letter);
        };
    }

    checkLetter(chosen){
        if (this.phrase.indexOf(chosen.innerText) < 0) {
            chosen.setAttribute('class','wrong');
            game.removeLife()
        }
        else {chosen.setAttribute('class','chosen');this.showMatchedLetter()};
    }

    showMatchedLetter(){
        let chosen = document.querySelectorAll('.chosen');
        let chosenLetters = [];
        for (let i=0;i<chosen.length;i+=1){
            chosenLetters.push(chosen[i].innerText)
        };       
        const revealLetters = document.querySelector('ul').children;            
        for (let i=0;i<revealLetters.length;i+=1) {
            if (chosenLetters.indexOf(revealLetters[i].innerText) > -1) {
                revealLetters[i].setAttribute('class','show')
                }
            }
        game.checkForWin();
    }
};