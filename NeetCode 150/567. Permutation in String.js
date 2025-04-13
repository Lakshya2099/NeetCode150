/**
 * 567. Permutation in String
 * 
 * Given two strings s1 and s2, return true if s2 contains a 
permutation
 of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 */

var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) return false;

  
  let countS1 = new Array(26).fill(0);  
  let countS2 = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
      countS1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

 
  for (let i = 0; i < s2.length; i++) {
 
      countS2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;

      
      if (i >= s1.length) {
          countS2[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]--;
      }

      if (countS1.every((val, idx) => val === countS2[idx])) {
          return true;
      }
  }

  return false;
};

/**
 * 1.Initial Check:

if (s1.length > s2.length) return false;: If s1 is longer than s2, it's impossible for s1 to be a permutation of a substring of s2, so we immediately return false.

2.Frequency Count Arrays:

let countS1 = new Array(26).fill(0);: Creates an array countS1 of size 26, initialized with zeros. This array will store the frequency of each lowercase English letter in s1. The index of each element corresponds to a letter (0 for 'a', 1 for 'b', ..., 25 for 'z').
let countS2 = new Array(26).fill(0);: Similarly, creates countS2 to store the frequency of characters in the current window of s2.

3.Populate countS1:

for (let i = 0; i < s1.length; i++) { ... }: Iterates through s1 to calculate the character frequencies.
countS1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;: This line is key. s1.charCodeAt(i) gets the ASCII code of the character at index i. 'a'.charCodeAt(0) gets the ASCII code of 'a'. Subtracting the two gives the position of the character in the alphabet (0 for 'a', 1 for 'b', etc.). We then increment the corresponding count in countS1.

4.Sliding Window in s2:

for (let i = 0; i < s2.length; i++) { ... }: This loop iterates through s2, effectively moving a window of size s1.length across s2.
countS2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;: Increments the count of the current character in s2 within the countS2 array.
if (i >= s1.length) { ... }: This if condition is what makes the window slide. Once i reaches s1.length, it means we've processed a window of the correct size.
countS2[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]--;: We decrement the count of the character that is leaving the window from the left side. This is how we maintain a window of size s1.length.
if (countS1.every((val, idx) => val === countS2[idx])) { return true; }: This is the check. countS1.every(...) checks if every element in countS1 is equal to the corresponding element in countS2. If they are equal, it means the current window in s2 has the same character frequencies as s1, so we've found a permutation and return true.

5.Return false:

return false;: If the loop completes without finding a match, it means no permutation of s1 was found in s2, so we return false.
 */