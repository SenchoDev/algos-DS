// Length of last word
// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.
// A word is a maximal substring consisting of non-space characters only.

//1.Restate the problem in my own word
//"get the length of last word in a string"
//2. Inputs are always going to be string, string can also be empty without any characters
//3. outputs either lenght of last word or 0 if its not valid;

//1. simple examples
// lengthOfLastWord("aaz") returns 3
// lengthOfLastWord("hey there") returns 5;

//2. complex examples
// validAnagram("test with2 test") returns 4 

//3. invalid inputs and empty inputs
// validAnagram(" ") returns 0

var lengthOfLastWord = function(s) {
    let newString, arr;
    // split string for each empty space
    newString =  s.trim();
    // check if there is a word in string
    if(newString.length === 0) return 0;
    arr = newString.split(' ');
    // get the last item of the array and get the length of it 
    return arr[arr.length - 1].length;
};

console.log(lengthOfLastWord('hey there'));