/*
Two Sum

Given an array of integers nums and an integer target, write a program in javascript to 
return indices of the two numbers such that they add up to target.

Example input/Output:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]

Input: nums = [3,2,4], target = 6
Output: [1,2]
*/

//Solution:
function twoSum(nums, target) {
    let indexMap = {};
    for (let i = 0; i < nums.length; i++) {
        indexMap[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (indexMap.hasOwnProperty(complement) && indexMap[complement] !== i) {
            return [i, indexMap[complement]];
        }
    }
    return "Target not found";
}

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));
