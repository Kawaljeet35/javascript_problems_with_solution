/*
Prime Checker

Write a program that determines whether the input number is a prime number or not.
The input number will be a positive integer.

Exapmple outputs: 
17 is a prime number.
23 is a prime number.
27 is not a prime number.
*/


//Solution:
function primeCheck(number) {
  let isPrime = true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${number} is a prime number.`);
  } else {
    console.log(`${number} is not a prime number.`);
  }
}

const numToCheck = 3111; //check for different values
primeCheck(numToCheck);
