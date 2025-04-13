/* 
271. Encode and Decode Strings 

Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings. 

Machine 1 (sender) has the function: 

string encode(vector<string> strs) {

//... your code 

return encoded_string;


Machine 2 (receiver) has the function: 

vector<string> decode(string s) { 

//... your code 

return strs; 


So Machine 1 does: string encoded_string = encode(strs); 

and Machine 2 does: vector<string> strs = decode(encoded_string);

*/

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let encodedString = "";
    for (const str of strs) {
        encodedString += str.length.toString().padStart(4, '0') + str; 
    }
    return encodedString;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    const decodedStrings = [];
    let i = 0;
    while (i < s.length) {
        const length = parseInt(s.substring(i, i + 4));
        const start = i + 4;
        const end = start + length;
        decodedStrings.push(s.substring(start, end));
        i = end;
    }
    return decodedStrings;
};

// Example usage:
const strs = ["hello", "world"];
const encoded = encode(strs); 
console.log("Encoded:", encoded); // Output: "0005hello0005world"

const decoded = decode(encoded);
console.log("Decoded:", decoded); // Output: ["hello", "world"]


/**
 * 
 * Encoding:

Initialization: encodedString is an empty string to store the encoded result.
Iteration: The code iterates through each string (str) in the input array strs.
Length Encoding:
str.length.toString(): Converts the length of the current string to a string.
.padStart(4, '0'): Adds leading zeros to the length string to ensure it's always 4 characters long.
Concatenation: The length string and the actual string are concatenated and added to the encodedString.
Return: The final encodedString is returned.
Decoding:

Initialization: decodedStrings is an empty array to store the decoded strings.
Iteration: The code iterates through the encodedString using a while loop.
Length Extraction:
s.substring(i, i + 4): Extracts the 4-character length string from the encodedString.
parseInt(...): Converts the length string to an integer.
String Extraction:
start: Calculates the starting index of the actual string.
end: Calculates the ending index of the actual string.
s.substring(start, end): Extracts the actual string from the encodedString.
Adding to Result: The extracted string is added to the decodedStrings array.
Update Index: The i is updated to the end of the current string segment.
Return: The decodedStrings array is returned. */