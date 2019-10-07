//Treehouse FSJS Techdegree - Project 4 - OOP Game App - app.js

//DOM ELEMENTS
const startGameButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');
const keyboardLetters = document.querySelectorAll('.key');
const game = new Game(); //Moved game variable to global scope **Modified on 10/7/2019

//TOP-LEVEL FUNCTIONS
function reset(){
	//Added an if block to reinsert life icons into <ol> **Modified on 10/7/2019
    if(document.querySelectorAll('.tries').length === 0){
		game.reload();
		let scoreBoard = document.querySelector('ol');
        for(let i=0;i<5;i+=1){
		    let life = document.createElement('LI');
		    life.setAttribute('class', 'tries');
		    let lifeImage = document.createElement('IMG');
		    lifeImage.setAttribute('src', 'images/liveHeart.png');
		    lifeImage.setAttribute('alt', 'Heart Icon');
		    lifeImage.setAttribute('height', '35');
		    lifeImage.setAttribute('width', '30');
		    life.appendChild(lifeImage);
		    scoreBoard.appendChild(life);
		};
		//Added a for loop make letters responsive for new game **Modified on 10/7/2019
		for(let i=0;i<keyboardLetters.length;i+=1){
            let chosen = keyboardLetters[i];
            chosen.disabled = false;
        };	
	}
	else {
		for(i=0;i<keyboardLetters.length;i+=1){
            let chosen = keyboardLetters[i];
            chosen.addEventListener('click', event => {
                chosen.disabled = true;
                game.handleInteraction(chosen);
            });
        };
    };
	game.startGame();
};

//EVENT HANDLERS
startGameButton.addEventListener('click', reset);

//TEST

// See attached file Changes.md for in depth explanation of modifications
