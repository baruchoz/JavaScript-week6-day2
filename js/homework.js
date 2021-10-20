// 
//==================Exercise #1 ==========//
/*Write a function that finds the index of the first non-consecutive element in the array. 
For example, if we have an array [1, 2, 3, 5, 6, 7] then this will return 3 since the array
at index 3 is 5 which is not consecutive. If every element in the array is consecutive, return -1
*/
const arr1 = [1, 2, 3, 5, 6, 7]
const arr2 = [1, 2, 3, 4, 5, 6, 7]

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      return i + 1;
    }
  }
  return -1
}

console.log(firstNonConsecutive(arr1));
console.log(firstNonConsecutive(arr2));


//Call function here with arguments


//============Exercise #2 ============//
/*Write an arrow function that when given an array of numbers, returns the sum of all of the positives ones.
Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 30
Explain: 10 + 12 + 3 + 15 = 30

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 21

Note: if there is nothing to sum, the sum is default to 0.
*/

// Write arrow function here
let array = [10, 12, -9, 3, -1, 0, 15]

let sumArray = (array) => {
    let sum = 0
    for (let num of array){
        sum = sum + num
    } return sum
}

console.log(sumArray(array))

// Call function here with arguments