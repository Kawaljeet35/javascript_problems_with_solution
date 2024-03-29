/*
Binary Search

Write a program in javascript to implement the Binary Search algorithm and 
search for a given key in the provided sorted list of numbers. 
*/

//Solution:
 const array = [2,5,7,9,11,13,17,19,21,33];
 const key = 70;
 
 function binarySearch(array,key){
    let low = 0;
    let high = array.length - 1;
    let key_found = false;
    while(low <= high && !key_found){
        let mid = Math.floor((low + high) / 2);
        if(key === array[mid]){
          key_found = true;
        }
        else if(key > array[mid]){
          low = mid + 1;
        }
        else{
          high = mid - 1;
        }
    }
    if(key_found){
      console.log("Key is found");
    }
    else{
      console.log("Key not found");
    }
 }

binarySearch(array,key);

/*
Time Complexity:
    Best Case: O(1)
    Average Case: O(log n)
    Worst Case: O(log n)
Space Complexity: O(1)
*/
