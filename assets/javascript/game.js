var won = 0;
var lost = 0;
var attemptsLeft = 10;
var lettersGuessed = []
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Create variables that hold references to the places in the HTML where we want to display things.
var userLetter = document.getElementById("letterGuess");
var wonText = document.getElementById("wins");
var lostText = document.getElementById("losses");
var attemptsText = document.getElementById("guessesLeft");
var lettersGuessedText = document.getElementById("guessesSoFar");


// Listen for key press when user enters a letter, and determine which key was pressed. Also display number of attempts left (10)


document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);

// Have computer choose random letter from letters array.
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess);

// Compare user's guessed letter with computer's random choice. If user's guessed letter does not match computer's letter pick, decrease guesses left by 1, display guessed letters.

if (userGuess !== computerGuess) {
    attemptsLeft--;
    console.log(attemptsLeft);
    document.getElementById("guessesLeft").innerHTML = "Guesses left: " + attemptsLeft;
    document.getElementById("guessesSoFar").innerHTML = "Your guesses so far: " + userGuess + ", ";
    if (attemptsLeft === 0){
        alert("Sorry, you lose!");
        document.getElementById("guessesLeft").innerHTML = "Guesses left: ";
        document.getElementById("guessesSoFar").innerHTML = "Your guesses so far: ";
        lost++;
        document.getElementById("losses").innerHTML = "Losses: " + lost;
        attemptsLeft = 10;
        }

    }


// If user wins, increase number of wins by one, and display that number after 'wins:'. Reset the game.

    else if (userGuess === computerGuess) {
        alert("Winner winner, chicken dinner!");
        won++;
        document.getElementById("wins").innerHTML = "Wins: " + won;
        attemptsLeft = 10;
        document.getElementById("guessesLeft").innerHTML = "Guesses left: ";
        document.getElementById("guessesSoFar").innerHTML = "Your guesses so far: ";
        document.getElementById("losses").innerHTML = "Losses: " + lost;
        }
    }
