const gameTextStatus = document.querySelector('h1');
const playerImageOne = document.querySelector('.img1');
const playerImageTwo = document.querySelector('.img2');
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

playerImageOne.setAttribute('src',`./images/dice${randomNumber1}.png`);
playerImageTwo.setAttribute('src',`./images/dice${randomNumber2}.png`);
