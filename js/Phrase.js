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
        console.log(chosen);
        console.log(this.phrase.indexOf(chosen.innerText));
        if (this.phrase.indexOf(chosen.innerText) < 0) {
            chosen.setAttribute('class','wrong');
            Game.removeLife()
        }
        else {chosen.setAttribute('class','chosen');this.showMatchedLetter()};
    }

    showMatchedLetter(){
        const phraseLetters = document.querySelectorAll(/*in progress */);
        for (let i=0;i<phraseLetters.length;i+=1) {
            if (phraseLetters[i].className = this.activePhrase) {}
        };
    }
};