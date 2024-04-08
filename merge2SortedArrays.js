/*
Merge 2 Sorted Arrays

Write a program in python that takes two sorted integer arrays
as input and merge them so that the items are in a non-descending order.
*/

//Solution:
function mergeSortedArrays(list1, list2) {
    if (list1.length === 0) {
        return list2;
    }
    if (list2.length === 0) {
        return list1;
    }

    let mergedList = [];
    let i = 0;
    let j = 0;

    while (i < list1.length && j < list2.length) {
        if (list1[i] < list2[j]) {
            mergedList.push(list1[i]);
            i++;
        } else {
            mergedList.push(list2[j]);
            j++;
        }
    }
    while (i < list1.length) {
        mergedList.push(list1[i]);
        i++;
    }
    while (j < list2.length) {
        mergedList.push(list2[j]);
        j++;
    }

    return mergedList;
}

const list1 = [1, 3, 5, 7, 9];
const list2 = [2, 4, 6, 8, 10];
console.log(mergeSortedArrays(list1, list2));
