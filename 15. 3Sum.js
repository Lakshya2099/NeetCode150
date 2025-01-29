/**
 * 15. 3Sum
 * 
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

 */

var threeSum = function(nums) {
    let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let total = nums[i] + nums[j] + nums[k];

            if (total > 0) {
                k--;
            } else if (total < 0) {
                j++;
            } else {
                res.push([nums[i], nums[j], nums[k]]);
                j++;

                while (nums[j] === nums[j-1] && j < k) {
                    j++;
                }
            }
        }
    }
    return res;    
};

/**
 * 
 * 1. Initialization

res: An empty array to store the resulting triplets that sum to zero.

2. Sorting

nums.sort((a, b) => a - b): Sorts the input array nums in ascending order. Sorting is crucial for the two-pointer approach to work efficiently.

3. Outer Loop

for (let i = 0; i < nums.length; i++) { ... }: This loop iterates through the array.
if (i > 0 && nums[i] === nums[i-1]) { continue; }: This condition skips duplicate values for the first number (nums[i]) to avoid redundant calculations.

4. Two-Pointer Approach

let j = i + 1;: Initializes the left pointer (j) to the element after the current i.
let k = nums.length - 1;: Initializes the right pointer (k) to the last element of the array.
while (j < k) { ... }: The core of the algorithm. This loop iterates while the left pointer (j) is to the left of the right pointer (k).

5. Sum Calculation and Comparison

let total = nums[i] + nums[j] + nums[k];: Calculates the sum of the current three numbers.
if (total > 0) { k--; }: If the total is greater than zero, it means the sum is too large. To decrease the sum, the right pointer (k) is moved to the left.
else if (total < 0) { j++; }: If the total is less than zero, it means the sum is too small. To increase the sum, the left pointer (j) is moved to the right.
else { ... }: If total is equal to zero, a valid triplet has been found:
res.push([nums[i], nums[j], nums[k]]);: Add the triplet to the res array.
j++;: Move the left pointer to the right.
while (nums[j] === nums[j-1] && j < k) { j++; }: Skip duplicate values for the second number (nums[j]) to avoid redundant calculations.

6. Return Result

return res;: Returns the array res containing all the unique triplets that sum to zero.
 */