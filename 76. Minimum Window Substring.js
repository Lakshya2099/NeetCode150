/**
 * 76. Minimum Window Substring
 * 
 * Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 */

var minWindow = function (s, t) {
  if (!s || !t) {
      return "";
  }

  let dictT = new Map();
  for (let c of t) {
      dictT.set(c, (dictT.get(c) || 0) + 1);
  }

  let required = dictT.size;
  let l = 0, r = 0;
  let formed = 0;

  let windowCounts = new Map();
  let ans = [-1, 0, 0];

  while (r < s.length) {
      let c = s.charAt(r);
      windowCounts.set(c, (windowCounts.get(c) || 0) + 1);

      if (dictT.has(c) && windowCounts.get(c) === dictT.get(c)) {
          formed++;
      }

      while (l <= r && formed === required) {
          c = s.charAt(l);

          if (ans[0] === -1 || r - l + 1 < ans[0]) {
              ans[0] = r - l + 1;
              ans[1] = l;
              ans[2] = r;
          }

          windowCounts.set(c, windowCounts.get(c) - 1);
          if (dictT.has(c) && windowCounts.get(c) < dictT.get(c)) {
              formed--;
          }

          l++;
      }

      r++;
  }

  return ans[0] === -1 ? "" : s.substring(ans[1], ans[2] + 1);
};

/**
 * 1.Edge Case:

if (!s || !t) { return ""; }: Handles the case where either s or t is null or empty. If so, an empty string is returned.

2.Character Frequency Map for t:

let dictT = new Map();: Creates a Map dictT to store the frequency of each character in t.
for (let c of t) { ... }: Iterates through the characters of t.
dictT.set(c, (dictT.get(c) || 0) + 1);: For each character c, its count in dictT is incremented. The (dictT.get(c) || 0) handles the case where the character is encountered for the first time, initializing its count to 0 before incrementing.

3.Initialization:

let required = dictT.size;: Stores the number of unique characters in t. This is used to track if the current window contains all the required characters.
let l = 0, r = 0;: l and r are the left and right boundaries of the sliding window.
let formed = 0;: Counts the number of unique characters in the current window whose counts match the required counts in dictT.
let windowCounts = new Map();: A Map to store the frequency of characters in the current window.
let ans = [-1, 0, 0];: Stores the result. ans[0] will hold the minimum window length, ans[1] the start index, and ans[2] the end index. Initialized to [-1, 0, 0] to indicate no valid window found yet.

4.Sliding Window:

while (r < s.length) { ... }: The main loop that expands and shrinks the window.
let c = s.charAt(r);: Gets the character at the right boundary r.
windowCounts.set(c, (windowCounts.get(c) || 0) + 1);: Updates the count of c in the windowCounts Map.
if (dictT.has(c) && windowCounts.get(c) === dictT.get(c)) { formed++; }: Checks if the current character c is in t and if its count in the window now matches its count in t. If so, we increment formed.

5.Shrink Window (Inner Loop):

while (l <= r && formed === required) { ... }: This inner loop shrinks the window from the left as long as all required characters are present in the window (formed === required).
c = s.charAt(l);: Gets the character at the left boundary l.
if (ans[0] === -1 || r - l + 1 < ans[0]) { ... }: Checks if the current window is smaller than the smallest window found so far. If it is, we update ans.
windowCounts.set(c, windowCounts.get(c) - 1);: Decrements the count of c in windowCounts as it's being removed from the window.
if (dictT.has(c) && windowCounts.get(c) < dictT.get(c)) { formed--; }: If the count of c in the window falls below its required count in t, we decrement formed.
l++;: Moves the left boundary l to shrink the window.

6.Increment Right Boundary:

r++;: Moves the right boundary r to expand the window.

7.Return Result:

return ans[0] === -1 ? "" : s.substring(ans[1], ans[2] + 1);: If ans[0] is still -1, it means no valid window was found, so an empty string is returned. Otherwise, the substring corresponding to the smallest window is returned.
 */