/*
Quick Sort

Write a program in javascript to implement the Quick Sort algorithm and 
sort a given list in ascending order.
*/

//Solution:
function quickSort(array, left, right) {
  if (left < right) {
      let partitionIndex = partition(array, left, right);

      quickSort(array, left, partitionIndex - 1);
      quickSort(array, partitionIndex + 1, right);
  }
}

function partition(array, left, right) {
  let pivot = array[right]; 
  let i = left - 1; 

  for (let j = left; j < right; j++) {
      if (array[j] <= pivot) {
          i++;
          [array[i], array[j]] = [array[j], array[i]];
      }
  }
  [array[i + 1], array[right]] = [array[right], array[i + 1]];

  return i + 1; 
}

let array = [8, 3, 7, 4, 1];
quickSort(array, 0, array.length - 1);
console.log(array);

/*
Time Complexity:
    Best Case: O(n log n)
    Average Case: O(n log n)
    Worst Case: O(n^2)
Space Complexity: O(n)
*/
