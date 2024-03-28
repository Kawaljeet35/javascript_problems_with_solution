/*
Selection Sort

Write a program in javascript to implement the Selection Sort algorithm and 
sort a given list in ascending order.
*/

//Solution:
function selectionSort(array){
  for(let i=0; i<array.length-1; i++){
    let min = i;
    for(let j=i+1; j<array.length; j++){
      if(array[j]<array[min]){
        min = j; 
      }
    }
    if(array[i] !== array[min]){
      [array[i],array[min]] = [array[min],array[i]];
    }
  }
  return array;
}

const numbers = [8,3,7,4,1];
console.log(selectionSort(numbers));

/*
Time Complexity:
    Best Case: O(n^2)
    Average Case: O(n^2)
    Worst Case: O(n^2)
Space Complexity: O(1)
*/
