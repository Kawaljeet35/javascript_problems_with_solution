/*
Pangram Checker

A pangram is a sentence where every letter of the English alphabet 
appears at least once.

Given a string sentence, return true if sentence is a pangram, or false otherwise.
*/

//Solution:
function isPangram(sentence) {
    let seen = new Set();
    for (let char of sentence.toLowerCase()) {
        if (char.match(/[a-z]/)) {
            seen.add(char);
        }
    }
    return seen.size === 26;
}

console.log(isPangram("abcde fghijklmn opqrstuvw xyz"));
