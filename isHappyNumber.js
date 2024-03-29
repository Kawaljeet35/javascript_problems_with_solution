/*
Happy Number

Write a program in javascript to check if a given number
is a Happy number or not.
The program should return a boolean.
*/

//Solution:
function isHappy(number) {
  if (number === 1) {
      return true;
  } else {
      const seen = new Set();
      while (number !== 1 && !seen.has(number)) {
          seen.add(number); 
          let sum_of_squares = 0;
          for (const char of number.toString()) {
              const digit = parseInt(char);
              sum_of_squares += digit ** 2;
          }
          number = sum_of_squares;
      }
      return number === 1;
  }
}

console.log(isHappy(19));
