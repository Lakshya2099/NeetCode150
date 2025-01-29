/**
 * 167. Two Sum II - Input Array Is Sorted
 * 
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 */

var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1]; 
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return []; // No solution found
};


/*Initialization:

left: Pointer starting from the beginning of the array.
right: Pointer starting from the end of the array.
Iteration:

Calculate Sum: Calculate the sum of numbers[left] and numbers[right].
Check Sum:
If sum is equal to the target, return the indices of left and right (incremented by 1 as per the problem requirement).
If sum is less than the target, move the left pointer to the right to increase the sum.
If sum is greater than the target, move the right pointer to the left to decrease the sum.
No Solution: If the loop completes without finding a solution, return an empty array.*/