/*
FizzBuzz Problem

Write a program that prints the numbers from 1 to 100. 
But for multiples of 3, print "Fizz" instead of the number, and for 
the multiples of 5, print "Buzz". 
For numbers which are multiples of both three and five, print "FizzBuzz".
Each number should be printed on a new line.

Example Output:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
...
*/


//Solution:
for(let i=1; i<=100;i++){
  if(i%3 === 0 && i%5 === 0){
    console.log("FizzBuzz");
  } else if(i%3 === 0){
    console.log("Fizz");
  } else if(i%5 === 0){
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
