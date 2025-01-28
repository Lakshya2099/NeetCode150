/**
 * 128. Longest Consecutive Sequence
 * 
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 */

var longestConsecutive = function(nums) {
    const n = nums.length;
    
    if (n === 0) {
        return 0;
    }

    nums.sort((a, b) => a - b);

    let cnt = 1;
    let maxi = 0;

    for (let i = 1; i < n; i++) {
        if (nums[i] !== nums[i - 1]) {
            if (nums[i] === nums[i - 1] + 1) {
                cnt++;
            } else {
                maxi = Math.max(maxi, cnt);
                cnt = 1;
            }
        }
    }

    return Math.max(maxi, cnt);
};

/**
 * 1. Initialization:

const n = nums.length;: Stores the number of elements in the nums array in the variable n.
if (n === 0) { return 0; }: If the array is empty, it directly returns 0 as there are no elements to form a sequence.

2. Sorting:
nums.sort((a, b) => a - b);: Sorts the nums array in ascending order. This step is crucial for efficiently finding consecutive elements.

3. Finding Longest Sequence:

let cnt = 1;: Initializes a counter cnt to 1, as initially, we consider the first element as the start of a potential sequence.

let maxi = 0;: Initializes a variable maxi to 0 to store the maximum length of the consecutive sequence encountered so far.

for (let i = 1; i < n; i++) { ... }: Iterates through the sorted array from the second element (i = 1) onwards.

if (nums[i] !== nums[i - 1]) { ... }: Checks if the current element (nums[i]) is different from the previous element (nums[i - 1]). This condition is essential to avoid counting duplicates.

if (nums[i] === nums[i - 1] + 1) { cnt++; }: If the current element is exactly one greater than the previous element, it means they are part of the consecutive sequence, so the cnt is incremented.

else { maxi = Math.max(maxi, cnt); cnt = 1; }: If the current element doesn't follow the consecutive pattern, it means the current sequence ends.

maxi = Math.max(maxi, cnt);: Updates maxi with the maximum value between the current maxi and the length of the previous sequence (cnt).

cnt = 1;: Resets the cnt to 1 to start counting a new potential sequence.


4. Return Result:

return Math.max(maxi, cnt);: After the loop, it returns the maximum between maxi and the final value of cnt. This handles the case where the longest sequence might extend till the end of the array.


 */