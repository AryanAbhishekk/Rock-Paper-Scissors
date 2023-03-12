let winMsg = 'Victory';
let loseMsg = 'Crushing Defeat';
let tieMsg = 'Tie';
let moveList = ['Rock', 'Paper', 'Scissors'];
let statusDisplay = document.querySelector('#status-head');
let moveDisplays = document.querySelectorAll('.move-display h2');
let buttons = document.querySelectorAll('button');

statusDisplay.textContent = 'Choose!';

for (let i = 0; i < buttons.length; i++) {
  buttons[i].textContent = moveList[i];
  buttons[i].style.display = "inline-block";
}
buttons.forEach((button, index) => {
  button.textContent = moveList[index];
  button.style.display = "inline-block";
});



/**
* Computes result of the game. returns victory message if move 1 wins.
* @param  {Number}   move1  move 1
* @param  {Number}   move2  move 2
* @return {String}   result result of the game
*/
function calcResult(move1, move2) {
  var result = move1 - move2;

  if (result == 1 || result + 3 == 1) {
    return winMsg;
  } else if (result == 2 || result + 3 == 2) {
    return loseMsg;
  } else {
    return tieMsg;
  }
}

/**
 * @return {Number}   random number between 0 and 2
 */

function randomMove() {
  return Math.floor(Math.random() * 3);
}

/**
 * Displays start state of game
 */

/**
* Displays start state of game
*/
function startGame() {
  statusDisplay.textContent = "Choose!";
  buttons.forEach((button, index) => {
    button.textContent = moveList[index];
    button.style.display = "inline-block";
    buttons[index].addEventListener("click", endGame);
  });
  moveDisplays.forEach((moveDisplay) => (moveDisplay.style.display = "none"));
}

/**
 * Displays end state of game
 * @param {Event} event event containing information of users input.
 */

/**
* Displays end state of game
* @param {Event} event event containing information of users input.
*/

function endGame(event) {
  let playerMove = moveList.indexOf(event.target.textContent);
  let computerMove = randomMove();

  statusDisplay.textContent = calcResult(playerMove, computerMove);

  moveDisplays.forEach(
    (moveDisplay) => (moveDisplay.style.display = "inline-block")
  );
  moveDisplays[0].textContent = `You played ${moveList[playerMove]}`;
  moveDisplays[1].textContent = `Computer played ${moveList[computerMove]}`;

  buttons.forEach((button, index) => {
    if (index == 1) {
      button.textContent = "Play Again";
      button.removeEventListener("click", endGame);
      button.addEventListener("click", startGame);
    } else {
      button.style.display = "none";
    }
  });
}
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.ml2 .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

startGame();