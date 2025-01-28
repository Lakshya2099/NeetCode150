/*
238. Product of Array Except Self


Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

var productExceptSelf = function(nums) {
    const n = nums.length;
    
    const prefix = new Array(n).fill(1);
    const suffix = new Array(n).fill(1);
    
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }
    
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }
    
    const answer = [];
    for (let i = 0; i < n; i++) {
        answer[i] = prefix[i] * suffix[i];
    }
    
    return answer;
};



/*
Sure, let's break down this code step-by-step in simple terms.

1. Initialization:

n: Stores the length of the input nums array.
prefix: Creates an array of size n and initializes all elements to 1. This array will store the product of all elements before the current index.
suffix: Creates an array of size n and initializes all elements to 1. This array will store the product of all elements after the current index.
2. Calculate Prefix Products:

The first loop iterates from the second element (i = 1) to the end of the prefix array.
In each iteration, prefix[i] is calculated by multiplying the previous prefix value (prefix[i - 1]) with the corresponding number in the original nums array (nums[i - 1]).
This effectively calculates the product of all numbers before the current index.
3. Calculate Suffix Products:

The second loop iterates from the second-to-last element (i = n - 2) to the beginning of the suffix array.
In each iteration, suffix[i] is calculated by multiplying the next suffix value (suffix[i + 1]) with the corresponding number in the original nums array (nums[i + 1]).
This effectively calculates the product of all numbers after the current index.
4. Calculate Final Product:

The third loop iterates through the entire nums array.
In each iteration, answer[i] is calculated by multiplying the corresponding prefix[i] and suffix[i].
Since prefix[i] contains the product of all numbers before nums[i], and suffix[i] contains the product of all numbers after nums[i], their product gives us the product of all numbers except nums[i].
5. Return Result:

Finally, the answer array, containing the desired products for each element in the input nums array, is returned.
*/ 