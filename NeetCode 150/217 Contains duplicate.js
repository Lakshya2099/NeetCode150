/*
217. Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false
*/ 

var containsDuplicate = function(nums) {
    // Create a Set to store unique elements
    const uniqueSet = new Set();

    // Iterate through the input array
    for (const num of nums) {
        // If the number already exists in the set, duplicates exist
        if (uniqueSet.has(num)) {
            return true; 
        }

        // Add the number to the set
        uniqueSet.add(num);
    }

    // If the loop completes without finding duplicates, return false
    return false;
};