
// arrays
var alphabetOptions = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compGuess = "";
var userGuess = [];

// array that stores letters already guessed
var lettersGuessed = [];

// game counters
var winCount = 0;
var lossCount = 0;
var guessCount = 0;


// game functions comp picks a random letter and stores it

    compGuess = alphabetOptions[Math.floor(Math.random() * alphabetOptions.length)];
    console.log("Wins: " + winCount + "Losses: " + lossCount + "Guesses: " + guessCount + "Guessed Letters: " + lettersGuessed + " Computer letter: " + compGuess);

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        if (compGuess === userGuess) {
            winCount++;
            alert("You Won!");
            guessCount = 0;
            lossCount = 0;
            lettersGuessed = [];
            compGuess = alphabetOptions[Math.floor(Math.random() * alphabetOptions.length)];

            document.getElementById("win").innerHTML = winCount;
            document.getElementById("loss").innerHTML = lossCount;
            }
                
            else if (compGuess !== userGuess) {
                guessCount++;
                lossCount++;
                lettersGuessed.push(userGuess);
            }
            document.getElementById("loss").innerHTML = lossCount;
            document.getElementById("lAG").innerHTML = lettersGuessed;
            document.getElementById("gL").innerHTML = 9 - guessCount;
            
            if(guessCount == 9) {
                winCount = 0;
                lossCount = 0;
                lettersGuessed = [];
                guessCount = 0;
                alert("You Lose");
                compGuess = alphabetOptions[Math.floor(Math.random() * alphabetOptions.length)];

                document.getElementById("loss").innerHTML = lossCount; 
                document.getElementById("lAG").innerHTML = lettersGuessed;   
            }
        }

           
      
