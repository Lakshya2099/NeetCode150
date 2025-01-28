/*
242. Valid Anagram

Given two strings s and t, return true if t is an 
anagram
 of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false
*/ 

var isAnagram = function(s, t) {
    if (s.length !== t.length){
        return false;
    }
    const arr = new Array(26).fill(0);
    for(let i= 0; i< s.length; i++){
        arr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    for(let i = 0; i< t.length ; i++){
        arr[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    for(let i=0 ; i<26; i++){
        if(arr[i] !== 0){
            return false; // Return false if any count is not zero
        }
    }
    return true; // If all counts are zero, return true
};