/**
 * 20. Valid Parentheses
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true
 */

var isValid = function(s) {
  const stack = [];
  const mapping = {
      ')': '(',
      '}': '{',
      ']': '['
  };

  for (const c of s) {
      if (Object.values(mapping).includes(c)) {
          stack.push(c);
      } else if (mapping.hasOwnProperty(c)) {
          if (!stack.length || mapping[c] !== stack.pop()) {
              return false;
          }
      }
  }

  return stack.length === 0;    
};

/**
 * var isValid = function(s) { ... };: This defines the isValid function, which takes a string s as input and returns true if the string is valid, and false otherwise.

const stack = [];:  A stack is used to keep track of the opening brackets encountered so far.  The LIFO (Last-In, First-Out) nature of a stack is perfect for matching brackets.

const mapping = { ')': '(', '}': '{', ']': '[' };: This creates a mapping object (similar to a dictionary or hash map) that associates each closing bracket with its corresponding opening bracket.  This makes it easy to check for matching pairs.

for (const c of s) { ... }: This loop iterates through each character c in the input string s.

if (Object.values(mapping).includes(c)) { stack.push(c); }: This condition checks if the current character c is an opening bracket.  Object.values(mapping) gets all the values from the mapping object (which are the opening brackets).  If c is an opening bracket, it's pushed onto the stack.

else if (mapping.hasOwnProperty(c)) { ... }: This condition checks if the current character c is a closing bracket. mapping.hasOwnProperty(c) checks if c is a key in the mapping object (which means it's a closing bracket).

if (!stack.length || mapping[c] !== stack.pop()) { return false; }: This is the crucial matching logic:

!stack.length: Checks if the stack is empty. If it is, and we encounter a closing bracket, it means there's no corresponding opening bracket, so the string is invalid.
mapping[c] !== stack.pop(): mapping[c] gets the corresponding opening bracket for the current closing bracket c (from the mapping). stack.pop() removes and returns the last opening bracket that was pushed onto the stack. If these two are not equal, it means the brackets don't match (e.g., a ) encountered when the top of the stack is a { ), so the string is invalid.
return stack.length === 0;: After processing the entire string, if the stack is empty, it means all opening brackets have been matched with their corresponding closing brackets, and the string is valid. If the stack is not empty, it means there are unmatched opening brackets, and the string is invalid.
 */