/*
Bubble Sort

Write a program in javascript to implement the Bubble Sort algorithm and 
sort a given list in ascending order.
*/

//Solution:
function bubbleSort(array)
{
  let swapped = false;
  const length = array.length;
  for(let i=0; i<length-1; i++){
    for(let j=0; j<length-1-i; j++){
      if(array[j]>array[j+1]){
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
        swapped = true;
      } 
      if(swapped === false){
        break;
      }  
    }  
  }
}

const a = [8,3,7,4,1];
console.log(bubbleSort(a));
