/*
Insertion Sort

Write a program in javascript to implement the Insertion Sort algorithm and 
sort a given list in ascending order.
*/

//Solution:
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current_element = array[i];
    let pos = i;
    while (current_element < array[pos - 1] && pos > 0) {
      array[pos] = array[pos - 1];
      pos--;
    }
    array[pos] = current_element;
  }
  return array;
}

const array = [8, 3, 7, 4, 1];
console.log(insertionSort(array));
