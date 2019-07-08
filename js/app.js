//Treehouse FSJS Techdegree - Project 4 - OOP Game App - app.js

//DOM ELEMENTS
const startGameButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');

//NEW GAME INSTANTIATED
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase}`);
//     });
// game.startGame();

//FUNCTIONS
function reset(){
    const game = new Game();
    game.startGame();
};

//EVENT HANDLERS
startGameButton.addEventListener('click', reset);

//TEST
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
