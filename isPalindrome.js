/*
Program to check if a string is palindrome.

Write a javascript program to check if a string is palindrome.

Example output:

abcde is not palindrome.
abcba is palindrome.
*/

//Solution:
function isPalindrome(string) {
    string = string.toLowerCase();
    return string === string.split('').reverse().join('');
}

function checkPalindrome(string) {
    if (isPalindrome(string)) {
        console.log(`${string} is palindrome`);
    } else {
        console.log(`${string} is not palindrome`);
    }
}

checkPalindrome("abcde");
checkPalindrome("abcba");

  
