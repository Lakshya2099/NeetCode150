/**
 * 239. Sliding Window Maximum
 * 
 * You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

 

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Example 2:

Input: nums = [1], k = 1
Output: [1]
 */

var maxSlidingWindow = function(nums, k) {
  let res = [];
  let deque = [];

  for (let idx = 0; idx < nums.length; idx++) {
      let num = nums[idx];

      while (deque.length && deque[deque.length - 1] < num) {
          deque.pop();
      }
      deque.push(num);

      if (idx >= k && nums[idx - k] === deque[0]) {
          deque.shift();
      }

      if (idx >= k - 1) {
          res.push(deque[0]);
      }
  }

  return res;    
};

/**
 * 1.Initialization:

let res = [];: An array to store the maximum values for each window.
let deque = [];: A deque (implemented as a regular array in JavaScript, but used with deque operations) to store elements from nums in a way that helps quickly identify the maximum. Crucially, this deque will store elements in decreasing order.

2.Iterating through nums:

for (let idx = 0; idx < nums.length; idx++) { ... }: The main loop iterates through the nums array using idx as the index.
let num = nums[idx];: Gets the current number.

3.Maintaining the Deque (Crucial Part):

while (deque.length && deque[deque.length - 1] < num) { deque.pop(); }: This while loop is the heart of the algorithm. It ensures that the deque maintains elements in decreasing order. If the current number num is greater than the last element in the deque, it means the last element (and any smaller elements before it) can no longer be the maximum in any subsequent window, so we remove them from the deque using pop().

4.Adding to Deque:

deque.push(num);: After removing smaller elements, we add the current number num to the back of the deque. Because of the previous while loop, the deque now maintains its decreasing order property.

5.Removing Element from Left of Deque (Sliding Window Logic):

if (idx >= k && nums[idx - k] === deque[0]) { deque.shift(); }: This condition checks if the element that just went out of the current window (at index idx - k) was the maximum element (currently at the front of the deque). If it was, we remove it from the front of the deque using shift(). This is how we maintain the sliding window aspect.

6.Adding Maximum to Result:

if (idx >= k - 1) { res.push(deque[0]); }: Once we've processed at least k elements (meaning we have a full window), the maximum element in the current window is always at the front of the deque (deque[0]). We add this maximum to the res array.

7.Return Result:

return res;: Finally, the function returns the res array containing the maximum values for each sliding window.
 */

