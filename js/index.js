var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
let diceNumber1 = document.querySelector('.img1');
let diceNumber2 = document.querySelector('.img2');

function rollDice(){
  if (randomNumber1 === 1){
    diceNumber1.setAttribute('src','images/dice1.png');
  }else if(randomNumber1 === 2){
    diceNumber1.setAttribute('src','images/dice2.png');
  }else if(randomNumber1 === 3){
    diceNumber1.setAttribute('src','images/dice3.png');
  }else if(randomNumber1 === 4){
    diceNumber1.setAttribute('src','images/dice4.png');
  }else if(randomNumber1 === 5){
    diceNumber1.setAttribute('src','images/dice5.png');
  }else if(randomNumber1 === 6){
    diceNumber1.setAttribute('src','images/dice6.png');
  }

  if (randomNumber2 === 1){
    diceNumber2.setAttribute('src','images/dice1.png');
  }else if(randomNumber2 === 2){
    diceNumber2.setAttribute('src','images/dice2.png');
  }else if(randomNumber2 === 3){
    diceNumber2.setAttribute('src','images/dice3.png');
  }else if(randomNumber2 === 4){
    diceNumber2.setAttribute('src','images/dice4.png');
  }else if(randomNumber2 === 5){
    diceNumber2.setAttribute('src','images/dice5.png');
  }else if(randomNumber2 === 6){
    diceNumber2.setAttribute('src','images/dice6.png');
  }
}
function rollResults(){
  rollDice();
  if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = 'Player 1 Wins!!!';
  }else if (randomNumber1 === randomNumber2) {
    document.querySelector('h1').innerHTML = "It is a draw!";
  }else{
    document.querySelector('h1').innerHTML = 'Player 2 Wins!!!';
  }
}
rollResults();
