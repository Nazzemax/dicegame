const gameTextStatus = document.querySelector('h1');
const playerImageOne = document.querySelector('.img1');
const playerImageTwo = document.querySelector('.img2');
const playerOne = document.querySelectorAll('p')[0].textContent;
const playerTwo = document.querySelectorAll('p')[1].textContent;
const rollButton = document.querySelector('.dice-btn');

function startGame () {
    let randomNumber1 = Math.floor( Math.random() * 6 ) + 1;
    let randomNumber2 = Math.floor( Math.random() * 6 ) + 1;
    playerImageOne.setAttribute( 'src', `./images/dice${randomNumber1}.png` );
    playerImageTwo.setAttribute( 'src', `./images/dice${randomNumber2}.png` );
    checkGameCondition( randomNumber1, randomNumber2 );
}

function checkGameCondition (randomNumber1,randomNumber2) {
    if(randomNumber1 > randomNumber2) {
        gameTextStatus.textContent = 
        `${playerOne} has won the game!`;
    } else if (randomNumber2 > randomNumber1) {
        gameTextStatus.textContent = 
        `${playerTwo} has won the game!`;
    } else {
        gameTextStatus.textContent = 'Draw!';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    rollButton.addEventListener('click', () => {
        startGame();
    })
})