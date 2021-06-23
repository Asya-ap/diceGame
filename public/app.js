//Dice 1
//Generate a random number from 1 to 6
const diceOne = Math.floor(Math.random()*6) +1;

// Dice images 
const diceImgOne = 'pictures/' + diceOne + '.png';

document.querySelectorAll('img')[0].setAttribute('src', diceImgOne);

//Dice 2
//Generate a random number from 1 to 6
const diceTwo = Math.floor(Math.random()*6) +1;

// Dice images 
const diceImgTwo = 'pictures/' + diceTwo + '.png';
                       //dice for second img[1]
document.querySelectorAll('img')[1].setAttribute('src', diceImgTwo);

//Logic for winner
if((diceOne + diceTwo) <= 7){
    document.querySelector('h1').innerHTML = 'You won';
}else{
    document.querySelector('h1').innerHTML = 'You loose'; 
}
