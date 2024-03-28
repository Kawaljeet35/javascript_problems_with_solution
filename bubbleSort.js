/*
Bubble Sort

Write a program in javascript to implement the Bubble Sort algorithm and 
sort a given list in ascending order.
*/

//Solution:
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let swapped = false; 
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [ array[j], array[j + 1] ] = [ array[j + 1], array[j] ];
        swapped = true;
      }
    }
    if (swapped === false) {
      break;
    }  
  }
  return array;
}

const a = [8,3,7,4,1];
console.log(bubbleSort(a));
