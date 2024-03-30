/*
Valid Anagram

Write a program in Javascript to check if two strings are 
anagram or not.
The program should return a boolean.
*/

//Solution:
function isAnagram(string1,string2){
    return string1.toLowerCase().split("").sort().join("") === string2.toLowerCase().split("").sort().join("");
}

console.log(isAnagram("heart","earth"))
