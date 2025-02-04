/**
 * 424. Longest Repeating Character Replacement
 * 
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
 */

var characterReplacement = function(s, k) {
  let freqs = {};
  let res = 0, i = 0, maxFreq = 0;

  for (let j = 0; j < s.length; j++) {
      freqs[s[j]] = (freqs[s[j]] || 0) + 1;
      maxFreq = Math.max(maxFreq, freqs[s[j]]);

      while ((j - i + 1) - maxFreq > k) {
          freqs[s[i]] -= 1;
          i++;
      }

      res = Math.max(res, j - i + 1);
  }

  return res;
};


/**
 * 1.Initialization:

freqs = {}: A dictionary (or hash map) to store the frequency of each character within the current window.
res = 0: Stores the maximum length of the valid substring found so far. This will be the final result.
i = 0: The left boundary (start) of the sliding window.
maxFreq = 0: Stores the maximum frequency of any single character within the current window.

2.Sliding Window Loop:

for (let j = 0; j < s.length; j++): The loop iterates through the string s using j as the right boundary (end) of the sliding window.

3.Character Frequency Update:

freqs[s[j]] = (freqs[s[j]] || 0) + 1;: Increments the frequency of the character at s[j] in the freqs dictionary. The (freqs[s[j]] || 0) handles the case where the character is encountered for the first time in the window, initializing its frequency to 0 before incrementing.
maxFreq = Math.max(maxFreq, freqs[s[j]]);: Updates maxFreq with the highest character frequency encountered so far in the current window.

4.Window Shrink Condition:

while ((j - i + 1) - maxFreq > k): This is the crucial part. It checks if the number of characters that need to be replaced in the current window (calculated as (window_length) - (most_frequent_character_count)) is greater than k. If it is, it means the current window is invalid because we've exceeded the allowed replacements.
freqs[s[i]] -= 1;: If the window is invalid, we shrink it from the left by decrementing the frequency of the character at the left boundary s[i].
i++;: Moves the left boundary i one position to the right.

5.Update Result:

res = Math.max(res, j - i + 1);: After each iteration (whether the window shrunk or not), we update res with the maximum window length encountered so far. j - i + 1 calculates the current window's length.

6.Return Result:

return res;: After processing the entire string, the function returns the maximum valid substring length stored in res.
 */