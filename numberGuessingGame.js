/*
Number Guessing Game

Write a program in javascript which replicates the number guessing game in real life.

The program should generate a random number forehand and prompt the user to 
guess a number between 1 and 100. Depending upon the user guess, the program should suggest
the user to either guess a lower or bigger number.
The program should keep a count on the number of attempts a user takes to guess the 
correct number.

Example Input/Output:
Guess a number between 1 and 100: 50
Guess a smaller number.
Guess a number between 1 and 100: 25
Guess a smaller number.
Guess a number between 1 and 100: 12
Guess a smaller number.
Guess a number between 1 and 100: 6
Guess a smaller number.
Guess a number between 1 and 100: 3
Congratulations! You guessed the number in 5 attempts.
*/

//Solution:
const readline = require('readline');

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function numberGuessingGame() {
    const number = generateRandomNumber();
    let numAttempts = 0;

    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function promptUser() {
        rl.question("Guess a number between 1 and 100: ", (userInput) => {
            const userGuess = parseInt(userInput);
            numAttempts++;

            if (userGuess === number) {
                console.log(`Congratulations! You guessed the number in ${numAttempts} attempts.`);
                rl.close();
            } else if (userGuess > number) {
                console.log("Guess a smaller number.");
                promptUser();
            } else if (userGuess < number) {
                console.log("Guess a bigger number.");
                promptUser();
            }
        });
    }

    promptUser();
}

numberGuessingGame();
