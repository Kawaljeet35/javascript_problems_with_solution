/*
Merge Sort

Write a program in javascript to implement the Merge Sort algorithm and 
sort a given list in ascending order.
*/

//Solution:
function mergeSort(array) {
  if (array.length <= 1) {
      return array; 
  }

  const mid = Math.floor(array.length / 2);
  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid);

  const sortedLeft = mergeSort(leftArray);
  const sortedRight = mergeSort(rightArray);

  return merge(sortedLeft, sortedRight);
}

function merge(leftArray, rightArray) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

 
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      if (leftArray[leftIndex] < rightArray[rightIndex]) {
          result.push(leftArray[leftIndex]);
          leftIndex++;
      } else {
          result.push(rightArray[rightIndex]);
          rightIndex++;
      }
  }

  return result.concat(leftArray.slice(leftIndex), rightArray.slice(rightIndex));
}

const numbers = [8, 3, 7, 4, 1];
console.log(mergeSort(numbers)); 

/*
Time Complexity:
    Best Case: O(n log n)
    Average Case: O(n log n)
    Worst Case: O(n log n)
Space Complexity: O(n)
*/
