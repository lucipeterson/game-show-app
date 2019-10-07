<!-- Changes made 10/7/2019 -->

# app.js
 Moving the "game" variable from the "reset" function to global scope solved the problem with reset not clearing the screen however that revealed a few new bugs:
   lives[0] is not an object - the page kept throwing an error in function game.removeLife() lives[0] is not an object. I traced that back and noticed the wasn't any code to reload the heart icons in the ordered list yet so I added some into the reset() function of app.js under an if block that tests whether there are any heart icons before adding any
   chosen letter can't be chosen in a new game - to solve this bug I added code that sets the disabled property of the letter buttons to false upon reload
# Game.js
   lives are lost exponetially with each new game - this one was harded to fix. Originally when solving the initial clear screen error I simply changed game from a const to a var, being new to the const keyword in javascript I thought that maybe the problem was that the program was refusing to reassign the reference of the "game" variable, however that wasn't the problem (and doing so only led to another Game object being created any time reset was called which caused a conflict over which was being addressed by the event handlers). The problem was that the "game" variable didn't belong to the button responsible for restarting the game. I've run into this problem before with code I've written and it's always a bear. The solution I found for this one was to modify the reset() function to call a reload() function which I added to the Game class that initializes the important variables rather than having to re-initialize the game object varible.

> I hope this helps. Sorry if the explanation was a bit too wordy this is my first time working on a real opensource project so I'm still getting used to things.
