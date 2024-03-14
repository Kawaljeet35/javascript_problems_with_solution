/*
Factorial

Write a function in javascript which takes an integer as an input
and return its factorial.

Example Input/Output:
console.log(factorial(1))   Output: 1
console.log(factorial(2))   Output: 2
console.log(factorial(3))   Output: 6
console.log(factorial(4))   Output: 24
console.log(factorial(5))   Output: 120
*/

//Solution:
function factorial(n){
  if(n<=2){
    return n;
  } else {
    return n*factorial(n-1);
  }
}

console.log(factorial(6)) //Try experimenting with different values
