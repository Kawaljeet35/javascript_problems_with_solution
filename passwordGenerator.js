/*
Password Generator

Write a Javascript program that generates secure passwords of varying lengths according 
to specified criteria. 
The program should prompt the user to input the desired password 
length within a range of 6 to 20 characters.
The password should be randomly generated and must contain 2 numbers, 2 symbols 
and both the lowercase and the uppercase alphabets.

Example Input/Output:

Enter desired password length: 12
Here is your password: pR@5sW8!qL2Z
*/

//Solution:
const readline = require('readline');
const { randomInt } = require('crypto');

const lowerAlphabets = "abcdefghijklmnopqrstuvwxyz";
const upperAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "123456789";
const symbols = "!@#$%^&*?";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generatePassword() {
    rl.question("Enter desired password length: ", (answer) => {
        let passLength = parseInt(answer);
        let password = "";

        if (passLength < 6 || passLength > 20 || isNaN(passLength)) {
            console.log("Please enter a password length between 6 and 20");
            generatePassword();
            return;
        }

        for (let i = 0; i < 2; i++) {
            password += numbers.charAt(randomInt(0, numbers.length));
        }

        for (let i = 0; i < 2; i++) {
            password += symbols.charAt(randomInt(0, symbols.length));
        }

        for (let i = 0; i < passLength - 4; i++) {
            let randomChar = Math.random() < 0.5 ? 
                lowerAlphabets.charAt(randomInt(0, lowerAlphabets.length)) : 
                upperAlphabets.charAt(randomInt(0, upperAlphabets.length));
            password += randomChar;
        }

        password = password.split('').sort(() => Math.random() - 0.5).join(''); 

        console.log(`Here is your password: ${password}`);
        rl.close();
    });
}

generatePassword();

