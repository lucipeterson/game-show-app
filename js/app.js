//Treehouse FSJS Techdegree - Project 4 - OOP Game App - app.js

const startGameButton = document.getElementById('btn__reset');
const keyboardLetters = document.querySelectorAll('.key');
let game;

//Adds an event listener to each keyboard button that calls the 
//game.handleInteraction() method.
for(i=0;i<keyboardLetters.length;i+=1){
    let chosen = keyboardLetters[i];
    chosen.addEventListener('click', event => {
        game.handleInteraction(chosen);
    });
};

//Starts a new game when new game button is clicked.
function reset(){
    game = new Game(); 
    game.startGame();
};

startGameButton.addEventListener('click', reset);


