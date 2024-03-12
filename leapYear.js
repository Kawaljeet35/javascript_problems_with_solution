/*
Leap Year Checker

Create a program that determines whether a given year is a leap year. 
A leap year is a year that is divisible by 4, but not divisible by 100 unless 
it is also divisible by 400.

The program should take a year as input and print "Leap year" if it is a leap 
year, and "Not a leap year" otherwise.

Example Output:
2000 is a leap year
2001 is not a leap year
2004 is a leap year
2100 is not a leap year
*/

//Solution:
function leapYear(year){
  if(year % 4 === 0){
    if(year % 100 === 0){
      if(year % 400 === 0){
        return "a leap year";
      } else {
        return "not a leap year";
      }
    } else {
      return "a leap year";
    }
  } else {
    return "not a leap year";
  }
}
    
year = 2024; //try experimenting with different input
console.log(`${year} is ${leapYear(year)}`);
