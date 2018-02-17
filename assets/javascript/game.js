
// arrays
var alphabetOptions = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compGuess = "";
var userGuess = [];
var lettersGuessed = [];

// game counters
var winCount = 0;
var lossCount = 0;
var guessCount = 9;

// game fucttions
function startGame () {
    compGuess = alphabetOptions[Math.floor(Math.random() * alphabetOptions.length)];
    console.log(compGuess);
}

//testing and debugging
console.log(userGuess);
console.log(compGuess);
console.log(lettersGuessed);

//resets
guessCount = 9;
lettersGuessed = [];
userGuess = [];


//loop for game to coninue **
for (i = 0; i<guessCount; i++) {
    lettersGuessed.push(" ");  
    }

//change html to reflect round conditions
document.getElementById("guessesLeft").innerHTML = guessCount;
document.getElementById("winCounter").innerHTML = winCount;
document.getElementById("lossCounter").innerHTML = lossCount;

// function checkLetter(letter){  
//     var wrongLetter = false;
//     for (var i=0; i<guessCount; i++) {
//         if(userGuess[i] == letter) {
//             checkLetter[i] = true;
//             console.log(checkletter);
//         }
//     }
// }
// else {
//      wrongLetters.push(letter);
//      guessesLeft --
//  }


startGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

 }
 
 if compGuess = userGuess {
     winCount++;
 }

console.log(winCount)
// function newFunction() {
//     return "abcdefghijklmnopqrstuvwxyz";
// }

// var compGuess = compChoice["newfuction.random"];


// while (emptyString.length < 6) {
//   emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
// } 
// console.log(emptyString);
// 
