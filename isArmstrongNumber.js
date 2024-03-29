/*
Armstrong Number

Write a program in javascript to check if a given number
is an Amstrong number or not.
The program should return a boolean.
*/

//Solution:
function isArmstrongNumber(number){
  number = number.toString();
  let n = number.length;
  let sum = 0;
  for(let i = 0; i < n; i++){
    sum += Math.pow(parseInt(number[i]), n);
  }
  return sum === parseInt(number);
}

console.log(isArmstrongNumber(151))
