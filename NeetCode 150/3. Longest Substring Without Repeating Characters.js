/**
 * 3. Longest Substring Without Repeating Characters
 * 
 * Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 */

var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLength = 0;
    let charSet = new Set();

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;    
};

/**
 * 1.Initialization:

let left = 0;: left is the left boundary of the sliding window, initialized to 0 (the beginning of the string).
let maxLength = 0;: maxLength stores the length of the longest substring found so far, initialized to 0.
let charSet = new Set();: charSet is a Set used to store the unique characters in the current window. Sets are efficient for checking if an element exists.

2.Iteration:

for (let right = 0; right < s.length; right++) { ... }: The code iterates through the string s using the right pointer, which represents the right boundary of the sliding window.

3.Shrinking the Window (if necessary):

while (charSet.has(s[right])) { ... }: This while loop is crucial for handling repeating characters. If the character at s[right] is already present in charSet (meaning it's a duplicate within the current window), we need to shrink the window from the left until the duplicate is removed.
charSet.delete(s[left]);: We remove the character at s[left] from charSet.
left++;: We move the left boundary of the window one position to the right. This effectively shrinks the window.

4.Expanding the Window:

charSet.add(s[right]);: After the while loop (if any), we add the character at s[right] to charSet. This expands the window to the right.

5.Updating maxLength:

maxLength = Math.max(maxLength, right - left + 1);: We calculate the current window size (right - left + 1) and compare it with the current maxLength. We update maxLength to the larger of the two. This step ensures that we always store the length of the longest substring without repeating characters found so far.

6.Return:

return maxLength;: After the loop finishes, the function returns the maxLength, which is the length of the longest substring without repeating characters.

 */