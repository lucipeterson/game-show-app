//Treehouse FSJS Techdegree - Project 4 - OOP Game App - app.js

//DOM ELEMENTS
const startGameButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');
const keyboardLetters = document.querySelectorAll('.key');

//TOP-LEVEL FUNCTIONS
function reset(){
    const game = new Game(); 
    game.startGame();
    for(i=0;i<keyboardLetters.length;i+=1){
        let chosen = keyboardLetters[i];
        chosen.addEventListener('click', event => {
            chosen.disabled = true;
            game.handleInteraction(chosen);
        });
    };
};

//EVENT HANDLERS
startGameButton.addEventListener('click', reset);

//TEST
