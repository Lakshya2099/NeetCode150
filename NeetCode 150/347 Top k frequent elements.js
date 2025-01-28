/* 347. Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]  */


var topKFrequent = function(nums, k) {
    let counter = new Map();
    nums.forEach(num => {
        counter.set(num, (counter.get(num) || 0) + 1);
    });
    let sorted = Array.from(counter.entries()).sort((a, b) => b[1] - a[1]);
    return sorted.slice(0, k).map(entry => entry[0]);
};

/* 
1.Counts the frequency of each number in the input array.
2.Sorts the numbers based on their frequencies in descending order.
3.Selects the top k frequent numbers from the sorted list.
*/ 