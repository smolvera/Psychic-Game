// --------------------Global Variables----------------------//

// Array storing Letters
var alphabetOptions = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var compGuess = "";
var userGuess = [];

// array that stores letters already guessed
var lettersGuessed = [];

// game counters
var winCount = 0;
var lossCount = 0;
var guessCount = 0;


//------------- Game functions comp picks a random letter and stores it--------------//

compGuess = alphabetOptions[Math.floor(Math.random() * alphabetOptions.length)];
console.log("Wins: " + winCount + "Losses: " + lossCount + "Guesses: " + guessCount + "Guessed Letters: " + lettersGuessed + " Computer letter: " + compGuess);

// Function to start game and check if the key pressed is the same as guessed 
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

// Checks if Guessed key is the same as Computer's pick
        if (compGuess === userGuess) {
            winCount++;
            alert("You Won!");
            guessCount = 0;
            lettersGuessed = [];
            compGuess = alphabetOptions[Math.floor(Math.random() * alphabetOptions.length)];

            document.getElementById("win").innerHTML = winCount;
            document.getElementById("loss").innerHTML = lossCount;
            }
// If guess is incorrect, add guessed letter to HTML
                
            else if (compGuess !== userGuess) {
                guessCount++;
                // lossCount++;
                lettersGuessed.push(userGuess);
            }
            document.getElementById("win").innerHTML = winCount;
            document.getElementById("loss").innerHTML = lossCount;
            document.getElementById("lAG").innerHTML = lettersGuessed;
            document.getElementById("gL").innerHTML = 9 - guessCount;
            
// If user doesn't guess within 9 guesses

            if(guessCount == 9) {
                winCount = 0;
                lossCount++;
                lettersGuessed = [];
                guessCount = 0;
                alert("You Lose");
                compGuess = alphabetOptions[Math.floor(Math.random() * alphabetOptions.length)];

                document.getElementById("loss").innerHTML = lossCount; 
                document.getElementById("lAG").innerHTML = lettersGuessed;   
            }
        }

           
      
